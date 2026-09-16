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

    // A task may provide public .in-style lines. Missing lines still fail
    // clearly rather than leaving the browser waiting for a terminal prompt.
    const inputLines = JSON.stringify(Array.isArray(inputs) ? inputs : []);
    await pyodide.runPythonAsync(`
import builtins
__studio_inputs = ${inputLines}
def __studio_input(prompt=''):
    if __studio_inputs:
        return str(__studio_inputs.pop(0))
    raise RuntimeError('This test has no more input lines. Check the task data or your input() calls.')
builtins.input = __studio_input
`);
    await pyodide.runPythonAsync(code || '');
    self.postMessage({ id, ok: true, stdout: stdout.join('\n'), stderr: stderr.join('\n') });
  } catch (error) {
    self.postMessage({ id, ok: false, error: error?.message || String(error) });
  }
};
