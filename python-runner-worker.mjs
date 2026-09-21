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
    const stdout = [];
    const stderr = [];
    pyodide.setStdout({ batched: (text) => stdout.push(text) });
    pyodide.setStderr({ batched: (text) => stderr.push(text) });

    // Each request gets a new globals dictionary.  Pyodide itself remains warm,
    // but student variables, functions and input state cannot cross a run.
    // Restore builtins and remove modules first imported by the submission too:
    // this avoids a student changing the shared interpreter for the next test.
    const source = JSON.stringify(String(code || ''));
    const inputLines = JSON.stringify(Array.isArray(inputs) ? inputs : []);
    await pyodide.runPythonAsync(`
import builtins as __studio_builtins
import sys as __studio_sys
__studio_builtin_snapshot = dict(vars(__studio_builtins))
__studio_modules_before = set(__studio_sys.modules)
__studio_inputs = ${inputLines}
def __studio_input(prompt=''):
    if __studio_inputs:
        return str(__studio_inputs.pop(0))
    raise RuntimeError('This test has no more input lines. Check your input() calls.')
__studio_namespace = {
    '__name__': '__main__',
    '__builtins__': dict(__studio_builtin_snapshot)
}
__studio_namespace['__builtins__']['input'] = __studio_input
try:
    exec(${source}, __studio_namespace, __studio_namespace)
finally:
    for __studio_key in list(vars(__studio_builtins)):
        if __studio_key not in __studio_builtin_snapshot:
            delattr(__studio_builtins, __studio_key)
    for __studio_key, __studio_value in __studio_builtin_snapshot.items():
        setattr(__studio_builtins, __studio_key, __studio_value)
    for __studio_module in set(__studio_sys.modules) - __studio_modules_before:
        __studio_sys.modules.pop(__studio_module, None)
    del __studio_namespace
`);
    self.postMessage({ id, ok: true, stdout: stdout.join('\n'), stderr: stderr.join('\n') });
  } catch (error) {
    self.postMessage({ id, ok: false, error: error?.message || String(error) });
  }
};
