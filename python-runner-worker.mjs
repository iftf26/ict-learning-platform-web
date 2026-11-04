/*
 * Runs student Python outside the interface thread. The worker is deliberately
 * small: the page owns task state and evidence, while this file owns execution.
 */
import { loadPyodide } from 'https://cdn.jsdelivr.net/pyodide/v314.0.7/full/pyodide.mjs';

const PYODIDE_INDEX = 'https://cdn.jsdelivr.net/pyodide/v314.0.7/full/';
const pyodideReady = loadPyodide({ indexURL: PYODIDE_INDEX });

self.postMessage({ type: 'status', status: 'loading' });
pyodideReady
  .then(() => self.postMessage({ type: 'status', status: 'ready' }))
  .catch((error) => self.postMessage({ type: 'status', status: 'error', error: error.message }));

self.onmessage = async (event) => {
  const { id, type, code, inputs = [] } = event.data || {};
  if (type !== 'run') return;

  try {
    const pyodide = await pyodideReady;
    // Each request gets a new globals dictionary. Pyodide itself remains warm,
    // but student variables, functions and input state cannot cross a run.
    // input() prompts are recorded as terminal echo and are not written to stdout.
    const source = JSON.stringify(String(code || ''));
    const inputLines = JSON.stringify(Array.isArray(inputs) ? inputs : []);
    await pyodide.runPythonAsync(`
import builtins as __studio_builtins
import json as __studio_json
import sys as __studio_sys
__studio_builtin_snapshot = dict(vars(__studio_builtins))
__studio_modules_before = set(__studio_sys.modules)
__studio_stdout_saved = __studio_sys.stdout
__studio_stderr_saved = __studio_sys.stderr
__studio_inputs = ${inputLines}
__studio_stdout_parts = []
__studio_stderr_parts = []
__studio_terminal_parts = []
__studio_prompts = []
__studio_error = None
__studio_output_limit = 100000

def _studio_write(bucket, text):
    piece = '' if text is None else str(text)
    bucket.append(piece)
    if sum(len(part) for part in __studio_stdout_parts) + sum(len(part) for part in __studio_stderr_parts) > __studio_output_limit:
        raise RuntimeError('Output exceeded 100000 characters.')
    return len(piece)

class _StudioStream:
    def __init__(self, bucket):
        self.bucket = bucket
    def write(self, text):
        return _studio_write(self.bucket, text)
    def flush(self):
        return None

def __studio_input(prompt=''):
    text = '' if prompt is None else str(prompt)
    __studio_prompts.append(text)
    if not __studio_inputs:
        raise EOFError('This test has no more input lines. Check your input() calls.')
    value = str(__studio_inputs.pop(0))
    __studio_terminal_parts.append(text + value + chr(10))
    return value

__studio_sys.stdout = _StudioStream(__studio_stdout_parts)
__studio_sys.stderr = _StudioStream(__studio_stderr_parts)
__studio_namespace = {
    '__name__': '__main__',
    '__builtins__': dict(__studio_builtin_snapshot)
}
__studio_namespace['__builtins__']['input'] = __studio_input
try:
    exec(${source}, __studio_namespace, __studio_namespace)
except Exception as __studio_exc:
    __studio_error = type(__studio_exc).__name__ + ': ' + str(__studio_exc)
finally:
    __studio_capture = {
        'stdout': ''.join(__studio_stdout_parts),
        'stderr': ''.join(__studio_stderr_parts),
        'terminal': ''.join(__studio_terminal_parts),
        'prompts': list(__studio_prompts),
        'error': __studio_error
    }
    __studio_sys.stdout = __studio_stdout_saved
    __studio_sys.stderr = __studio_stderr_saved
    for __studio_key in list(vars(__studio_builtins)):
        if __studio_key not in __studio_builtin_snapshot:
            delattr(__studio_builtins, __studio_key)
    for __studio_key, __studio_value in __studio_builtin_snapshot.items():
        setattr(__studio_builtins, __studio_key, __studio_value)
    for __studio_module in set(__studio_sys.modules) - __studio_modules_before:
        __studio_sys.modules.pop(__studio_module, None)
    try:
        del __studio_namespace
    except Exception:
        pass
__studio_capture_json = __studio_json.dumps(__studio_capture)
`);
    const capture = JSON.parse(pyodide.globals.get('__studio_capture_json'));
    pyodide.globals.delete('__studio_capture_json');
    self.postMessage({
      id,
      ok: !capture.error,
      stdout: capture.stdout,
      stderr: capture.stderr,
      terminal: capture.terminal,
      prompts: capture.prompts,
      error: capture.error || ''
    });
  } catch (error) {
    self.postMessage({ id, ok: false, error: error?.message || String(error), stdout: '', stderr: '', terminal: '', prompts: [] });
  }
};
