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
  const { id, type, code } = event.data || {};
  if (type !== 'run') return;

  try {
    const pyodide = await pyodideReady;
    const stdout = [];
    const stderr = [];
    pyodide.setStdout({ batched: (text) => stdout.push(text) });
    pyodide.setStderr({ batched: (text) => stderr.push(text) });

    // Input is intentionally withheld in this first browser-only studio.
    // Tasks use fixed test data, so a mistaken input() call produces a useful
    // runtime message instead of waiting forever for a terminal prompt.
    await pyodide.runPythonAsync(`
import builtins
def __studio_input_disabled(prompt=''):
    raise RuntimeError('This task uses fixed test data. Replace input() with the values supplied in the brief.')
builtins.input = __studio_input_disabled
`);
    await pyodide.runPythonAsync(code || '');
    self.postMessage({ id, ok: true, stdout: stdout.join('\n'), stderr: stderr.join('\n') });
  } catch (error) {
    self.postMessage({ id, ok: false, error: error?.message || String(error) });
  }
};
