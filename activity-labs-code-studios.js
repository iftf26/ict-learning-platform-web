/**
 * Browser-only Code Studio and SQL Studio.
 * Students can run real code/queries, see deterministic feedback, then export
 * a compact evidence card. Open-ended explanations stay spoken with a teacher.
 */
(function (global) {
  const SQL_ASSET_ROOT = 'https://cdn.jsdelivr.net/npm/sql.js@1.14.2/dist/';
  const STUDENT_PROFILE_KEY = 'ict-learning-platform-evidence-profile';
  const STUDIO_DRAFTS_KEY = 'ict-learning-platform-drafts-v1';
  const STUDIO_LAST_TASK_KEY = 'ict-learning-platform-last-tasks-v1';
  const TASK_INDEX_URL = 'tasks/task-index.json';
  let sqlLibraryPromise;
  let taskCatalogPromise;
  let publicTasks = { python: [], sql: [] };
  const hydratedTaskCache = new Map();
  const studioTasks = kind => [...publicTasks[kind], ...(global.StudioTaskBankAPI?.getPreview(kind) || []).map(task => ({
    ...task,
    isPreview: true,
    starterText: task.starter,
    ...(kind === 'sql' ? { seedSql: task.seedSql || publicTasks.sql[0]?.seedSql } : {})
  }))];
  const taskStarter = task => task.starterText ?? task.starter;
  const testInput = test => test.inputLines ?? test.input ?? [];
  const testOutput = test => test.expectedOutput ?? test.output ?? '';
  const inputLinesFromText = global.StudioTaskUtils?.inputLinesFromText || (value => {
    const text = String(value ?? '').replace(/\r\n?/g, '\n');
    if (text === '') return [];
    return (text.endsWith('\n') ? text.slice(0, -1) : text).split('\n');
  });

  function indentCode(value, start, end, outdent = false) {
    if (!outdent && start === end) {
      return { value: value.slice(0, start) + '    ' + value.slice(end), start: start + 4, end: end + 4 };
    }
    const lineStart = value.lastIndexOf('\n', Math.max(0, start - 1)) + 1;
    const effectiveEnd = end > start && value[end - 1] === '\n' ? end - 1 : end;
    const nextBreak = value.indexOf('\n', effectiveEnd);
    const blockEnd = nextBreak === -1 ? value.length : nextBreak;
    const lines = value.slice(lineStart, blockEnd).split('\n');
    const removed = outdent ? lines.map(line => (line.match(/^ {1,4}/) || [''])[0].length) : lines.map(() => -4);
    const block = lines.map((line, index) => outdent ? line.slice(removed[index]) : `    ${line}`).join('\n');
    const startOffset = lineStart === start ? 0 : (outdent ? -removed[0] : 4);
    return { value: value.slice(0, lineStart) + block + value.slice(blockEnd), start: Math.max(lineStart, start + startOffset), end: Math.max(lineStart, end + removed.reduce((sum, amount) => sum - amount, 0)) };
  }

  function bindPythonIndentation(textarea) {
    let escapeTab = false;
    textarea.addEventListener('keydown', event => {
      if (event.key === 'Escape') { escapeTab = true; return; }
      if (event.key !== 'Tab') return;
      if (escapeTab) { escapeTab = false; return; }
      event.preventDefault();
      const result = indentCode(textarea.value, textarea.selectionStart, textarea.selectionEnd, event.shiftKey);
      textarea.value = result.value;
      textarea.setSelectionRange(result.start, result.end);
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
    });
  }
  global.StudioEditorUtils = { indentCode };

  function escapeHtml(value) {
    if (typeof global.escapeHtml === 'function') return global.escapeHtml(value);
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function shell(activity, content) {
    return global.makeActivityShell(activity, content);
  }

  function feedback(tone, title, body, next = '') {
    return `
      <div class="lab-feedback ${tone}" role="status">
        <strong>${escapeHtml(title)}</strong>
        <p>${escapeHtml(body)}</p>
        ${next ? `<p class="checkpoint-next"><span>Next</span>${escapeHtml(next)}</p>` : ''}
      </div>
    `;
  }

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function normaliseOutput(value) {
    return String(value || '').trim().replace(/\r\n/g, '\n');
  }

  function taskUrl(path) {
    return new URL(`tasks/${path.replace(/^tasks\//, '')}`, document.baseURI).href;
  }

  function taskWarning(message) {
    if (global.console?.warn) global.console.warn(`[Studio tasks] ${message}`);
  }

  function validMetadata(task, kind, path) {
    const required = kind === 'python'
      ? ['id', 'type', 'topic', 'skill', 'level', 'practiceType', 'title', 'brief', 'starter', 'tests']
      : ['id', 'type', 'topic', 'skill', 'level', 'title', 'brief', 'starter', 'seed', 'checker'];
    const missing = required.filter(field => task?.[field] == null || (typeof task[field] === 'string' && !task[field].trim()));
    const types = kind === 'python' ? ['complete', 'construct', 'modify', 'dse'] : null;
    if (missing.length || task.type !== kind || !task.path || (types && !types.includes(task.practiceType))) {
      taskWarning(`${path}: invalid metadata${missing.length ? `; missing ${missing.join(', ')}` : ''}`);
      return false;
    }
    return true;
  }

  async function fetchText(path) {
    const response = await fetch(taskUrl(path));
    if (!response.ok) throw new Error(`${path} (${response.status})`);
    return response.text();
  }

  function taskCacheKey(task) {
    return `${task.type}:${task.id}`;
  }

  function taskFolder(task) {
    return task.path.slice(0, task.path.lastIndexOf('/') + 1);
  }

  function hydrateTask(task) {
    if (task.isPreview) return Promise.resolve(task);
    const key = taskCacheKey(task);
    if (hydratedTaskCache.has(key)) return hydratedTaskCache.get(key);
    const hydration = (async () => {
      const folder = taskFolder(task);
      if (task.type === 'python') {
        const starterText = await fetchText(`${folder}${task.starter}`);
        const tests = await Promise.all((task.tests || []).map(async (test, index) => {
          if (!test?.input || !test?.output) throw new Error(`test ${index + 1} must name input and output files`);
          const [input, output] = await Promise.all([
            fetchText(`${folder}${test.input}`),
            fetchText(`${folder}${test.output}`)
          ]);
          return {
            label: test.label || `Public test ${index + 1}`,
            inputLines: inputLinesFromText(input),
            expectedOutput: normaliseOutput(output)
          };
        }));
        return { ...task, starterText, tests };
      }
      const [starterText, seedSql] = await Promise.all([
        fetchText(`${folder}${task.starter}`),
        fetchText(`${folder}${task.seed}`)
      ]);
      return { ...task, starterText, seedSql };
    })().catch(error => {
      hydratedTaskCache.delete(key);
      throw error;
    });
    hydratedTaskCache.set(key, hydration);
    return hydration;
  }

  async function loadTaskCatalog() {
    if (taskCatalogPromise) return taskCatalogPromise;
    taskCatalogPromise = (async () => {
      try {
        const indexResponse = await fetch(TASK_INDEX_URL);
        if (!indexResponse.ok) throw new Error(`task-index.json (${indexResponse.status})`);
        const index = await indexResponse.json();
        const catalog = { python: [], sql: [] };
        for (const kind of ['python', 'sql']) {
          const entries = Array.isArray(index[kind]) ? index[kind] : [];
          const seenIds = new Set();
          for (const metadata of entries) {
            const path = metadata?.path || '(unknown task)';
            if (!validMetadata(metadata, kind, path) || seenIds.has(metadata.id)) {
              taskWarning(`${path}: duplicate or invalid task ID`);
              continue;
            }
            seenIds.add(metadata.id);
            catalog[kind].push(Object.freeze({ ...metadata }));
          }
        }
        if (!catalog.python.length && !catalog.sql.length) throw new Error('No valid tasks found');
        publicTasks = catalog;
        global.StudioTaskBankAPI?.setPublicCatalog(catalog);
        global.PlatformApp?.updateTaskBankCount?.();
        return catalog;
      } catch (error) {
        taskWarning(`file catalog unavailable (${error.message})`);
        taskCatalogPromise = null;
        throw error;
      }
    })();
    return taskCatalogPromise;
  }

  function safeProfile() {
    try {
      return JSON.parse(sessionStorage.getItem(STUDENT_PROFILE_KEY)) || { name: '', className: '' };
    } catch (_) {
      return { name: '', className: '' };
    }
  }

  function saveProfile(lab) {
    const profile = {
      name: lab.querySelector('[data-evidence-name]')?.value.trim() || '',
      className: lab.querySelector('[data-evidence-class]')?.value.trim() || ''
    };
    sessionStorage.setItem(STUDENT_PROFILE_KEY, JSON.stringify(profile));
    return profile;
  }

  function sessionValue(key, fallback) {
    try { return JSON.parse(sessionStorage.getItem(key)) || fallback; } catch (_) { return fallback; }
  }

  function saveDraft(kind, taskId, value) {
    const drafts = sessionValue(STUDIO_DRAFTS_KEY, {});
    drafts[`${kind}:${taskId}`] = value;
    sessionStorage.setItem(STUDIO_DRAFTS_KEY, JSON.stringify(drafts));
  }

  function readDraft(kind, task) {
    const drafts = sessionValue(STUDIO_DRAFTS_KEY, {});
    return Object.prototype.hasOwnProperty.call(drafts, `${kind}:${task.id}`) ? drafts[`${kind}:${task.id}`] : taskStarter(task);
  }

  function clearDraft(kind, taskId) {
    const drafts = sessionValue(STUDIO_DRAFTS_KEY, {});
    delete drafts[`${kind}:${taskId}`];
    sessionStorage.setItem(STUDIO_DRAFTS_KEY, JSON.stringify(drafts));
  }

  function lastTask(kind, tasks) {
    const saved = sessionValue(STUDIO_LAST_TASK_KEY, {});
    return tasks.find(task => task.id === saved[kind]) || tasks[0];
  }

  function rememberTask(kind, taskId) {
    const saved = sessionValue(STUDIO_LAST_TASK_KEY, {});
    saved[kind] = taskId;
    sessionStorage.setItem(STUDIO_LAST_TASK_KEY, JSON.stringify(saved));
  }

  function wrapCanvasText(ctx, text, maxWidth) {
    const allLines = [];
    String(text || '—').split('\n').forEach((sourceLine) => {
      let line = '';
      for (const character of sourceLine || ' ') {
        const candidate = line + character;
        if (ctx.measureText(candidate).width > maxWidth && line) {
          allLines.push(line);
          line = character;
        } else {
          line = candidate;
        }
      }
      allLines.push(line || ' ');
    });
    return allLines;
  }

  function makeEvidenceCard(lab, details) {
    const profile = saveProfile(lab);
    const stamp = new Date();
    const canvas = document.createElement('canvas');
    const width = 1600;
    const codeText = String(details.code || '').slice(0, 2600);
    const outputText = String(details.output || details.error || 'No run output recorded.').slice(0, 1200);
    const context = canvas.getContext('2d');
    context.font = '26px Menlo, Consolas, monospace';
    const codeLines = wrapCanvasText(context, codeText, 1450).slice(0, 36);
    const outputLines = wrapCanvasText(context, outputText, 1450).slice(0, 14);
    const height = Math.max(980, 450 + (codeLines.length + outputLines.length) * 38);
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#102033');
    gradient.addColorStop(1, '#1a4c93');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(56, 56, width - 112, height - 112);

    ctx.fillStyle = '#102033';
    ctx.font = '800 44px system-ui, sans-serif';
    ctx.fillText('ICT Learning Platform · Homework Evidence', 108, 132);
    ctx.fillStyle = '#2860ac';
    ctx.font = '700 26px system-ui, sans-serif';
    ctx.fillText(`${details.studio}  |  ${details.taskId}`, 108, 178);
    ctx.fillStyle = '#43556b';
    ctx.font = '26px system-ui, sans-serif';
    ctx.fillText(`Name: ${profile.name || 'Not entered'}     Class: ${profile.className || 'Not entered'}`, 108, 228);
    ctx.fillText(`Recorded: ${stamp.toLocaleString('en-GB')}     Run: ${details.runCount}`, 108, 268);

    let y = 326;
    const section = (title, lines, fill, maxLines) => {
      ctx.fillStyle = fill;
      ctx.fillRect(104, y, width - 208, 46);
      ctx.fillStyle = '#ffffff';
      ctx.font = '800 23px system-ui, sans-serif';
      ctx.fillText(title, 126, y + 31);
      y += 72;
      ctx.fillStyle = '#102033';
      ctx.font = '26px Menlo, Consolas, monospace';
      lines.slice(0, maxLines).forEach((line) => {
        ctx.fillText(line, 128, y);
        y += 38;
      });
      y += 20;
    };
    section('CODE / SQL SUBMISSION', codeLines, '#152c4a', 36);
    section(details.ok ? 'RESULT · COMPLETED' : 'RESULT · CHECK NEEDED', outputLines, details.ok ? '#178052' : '#ad5f16', 14);
    ctx.fillStyle = '#617289';
    ctx.font = '20px system-ui, sans-serif';
    ctx.fillText('This card records the browser session only. Submit it with your required code or explanation if your teacher asks.', 108, height - 94);

    const fileStem = `${details.taskId}-${(profile.name || 'student').replace(/[^a-z0-9]+/gi, '-')}-${stamp.toISOString().replace(/[:.]/g, '-')}`;
    const download = () => {
      const link = document.createElement('a');
      link.download = `ict-evidence-${fileStem}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
    download();
  }

  function evidencePanel(profile) {
    return `
      <section class="evidence-export" data-evidence-export>
        <button type="button" class="secondary-btn" data-evidence-open disabled>Export evidence</button>
      </section>
      <aside class="evidence-panel" data-evidence-panel hidden>
        <div>
          <p class="eyebrow">功課證據卡</p>
          <h4>Export completed work as PNG</h4>
          <p>卡內會記錄姓名、班別、題目、程式／SQL、輸出、時間及執行次數。</p>
        </div>
        <div class="evidence-profile">
          <label>姓名<input type="text" data-evidence-name maxlength="50" value="${escapeHtml(profile.name)}" placeholder="例如 Chan Tai Man"></label>
          <label>班別<input type="text" data-evidence-class maxlength="20" value="${escapeHtml(profile.className)}" placeholder="例如 5A"></label>
        </div>
        <div class="evidence-submit-route">
          <button type="button" class="secondary-btn" data-evidence-download disabled>Download PNG</button>
          <a class="text-btn" href="https://classroom.google.com/" target="_blank" rel="noopener">Open Google Classroom ↗</a>
        </div>
        <small>這是提交輔助紀錄，不是防篡改的身份驗證；老師仍可要求學生說明或交原始碼。</small>
      </aside>
    `;
  }

  function createPythonRunner(onStatus) {
    let worker;
    let nextId = 1;
    let disposed = false;
    const waiting = new Map();

    const boot = () => {
      if (disposed) return;
      worker?.terminate();
      worker = new Worker('python-runner-worker.mjs?v=20260922-1', { type: 'module' });
      worker.addEventListener('message', (event) => {
        const data = event.data || {};
        if (data.type === 'status') {
          onStatus(data);
          return;
        }
        const request = waiting.get(data.id);
        if (!request) return;
        waiting.delete(data.id);
        clearTimeout(request.timeout);
        request.resolve(data);
      });
      worker.addEventListener('error', (event) => {
        if (disposed) return;
        onStatus({ status: 'error', error: event.message || 'Python worker could not start.' });
        waiting.forEach((request) => {
          clearTimeout(request.timeout);
          request.resolve({ ok: false, error: event.message || 'Python worker could not start.' });
        });
        waiting.clear();
      });
    };
    boot();

    return {
      run(code, inputs = []) {
        if (disposed) return Promise.resolve({ ok: false, error: 'Studio was closed.' });
        const id = nextId++;
        return new Promise((resolve) => {
          const timeout = setTimeout(() => {
            if (!waiting.has(id)) return;
            waiting.delete(id);
            boot();
            resolve({ ok: false, error: 'Execution stopped after 12 seconds. Check for an endless loop, then run again.' });
          }, 12000);
          waiting.set(id, { resolve, timeout });
          worker.postMessage({ type: 'run', id, code, inputs });
        });
      },
      retry() { boot(); },
      dispose() {
        if (disposed) return;
        disposed = true;
        worker?.terminate();
        waiting.forEach((request) => {
          clearTimeout(request.timeout);
          request.resolve({ ok: false, error: 'Studio was closed.' });
        });
        waiting.clear();
      }
    };
  }

  function renderPythonStudio(activity, options = {}) {
    const tasks = studioTasks('python');
    const task = lastTask('python', tasks);
    if (!task) return '<div class="studio-workspace-empty"><h3>Task bank unavailable</h3><p>Reload the page. The Code Studio task bank did not load.</p></div>';
    const profile = safeProfile();
    const content = `
      <div class="lab-shell execution-studio python-studio" data-python-studio data-task-id="${task.id}">
        <div class="studio-banner">
          <div><p class="eyebrow">Python</p><h4>Code Studio</h4><p>Write and run Python.</p></div>
          <div class="runtime-status-stack"><span class="runtime-pill" data-python-status aria-live="polite">Preparing Python…</span><button type="button" class="text-btn" data-python-retry hidden>Retry Python</button></div>
        </div>
        <div class="task-toolbar">
          <label>Task<select data-python-task>${tasks.map((item) => `<option value="${item.id}" ${item.id === task.id ? 'selected' : ''}>${escapeHtml(item.topic)} · ${escapeHtml(item.skill || '')} · ${escapeHtml(item.practiceType || item.level)} · ${escapeHtml(item.title)} (${item.id})</option>`).join('')}</select></label>
          <label>Test input<select data-python-test></select></label>
          <button type="button" class="ghost-btn" data-python-random>換一題</button>
          <button type="button" class="ghost-btn" data-python-reset>重設題目</button>
        </div>
        <article class="studio-brief" data-python-brief><p class="eyebrow">DSE-style coding brief</p><h4>${escapeHtml(task.title)}</h4><p>${escapeHtml(task.brief)}</p><small data-python-task-state>Loading this task’s starter code and public tests…</small><button type="button" class="text-btn" data-python-task-retry hidden>Retry task files</button><small data-python-test-preview></small></article>
        <div class="execution-grid">
          <section class="editor-panel"><div class="editor-heading"><span>main.py</span><span data-python-task-label>${task.id}</span></div><textarea class="code-editor" data-python-code spellcheck="false" aria-label="Python code editor" disabled>Loading selected task…</textarea></section>
          <section class="console-panel"><div class="editor-heading"><span>Output</span><span>Python</span></div><pre class="studio-console" data-python-output aria-live="polite">Python is loading in the background…</pre></section>
        </div>
        <div class="lab-actions studio-actions"><button type="button" class="primary-btn" data-python-run disabled>Run</button><button type="button" class="secondary-btn" data-python-check disabled>Check solution</button></div>
        <div data-python-feedback></div>
        ${evidencePanel(profile)}
      </div>
    `;
    return options.standalone ? content : shell(activity, content);
  }

  function bindPythonStudio(stage) {
    const lab = stage.querySelector('[data-python-studio]');
    if (!lab) return;
    const status = lab.querySelector('[data-python-status]');
    const runButton = lab.querySelector('[data-python-run]');
    const checkButton = lab.querySelector('[data-python-check]');
    const output = lab.querySelector('[data-python-output]');
    const code = lab.querySelector('[data-python-code]');
    bindPythonIndentation(code);
    const taskSelector = lab.querySelector('[data-python-task]');
    const testSelector = lab.querySelector('[data-python-test]');
    const evidenceButton = lab.querySelector('[data-evidence-download]');
    const evidenceOpen = lab.querySelector('[data-evidence-open]');
    const retryButton = lab.querySelector('[data-python-retry]');
    let runtimeReady = false;
    let runCount = 0;
    let lastRun = null;
    let checkedRun = null;
    let disposed = false;
    let taskReady = false;
    let currentTask = null;
    let taskLoadToken = 0;

    const selectedTaskMetadata = () => studioTasks('python').find(item => item.id === taskSelector.value) || studioTasks('python')[0];
    const selectedTask = () => currentTask?.id === taskSelector.value ? currentTask : null;
    const testsFor = (task) => task.tests?.length ? task.tests : [{ label: 'Public test', input: [], output: task.expected || '' }];
    const selectedTest = () => {
      const task = selectedTask();
      return task ? (testsFor(task)[Number(testSelector.value) || 0] || testsFor(task)[0]) : null;
    };
    const updateRunAvailability = () => {
      runButton.disabled = !runtimeReady || !taskReady;
      checkButton.disabled = true;
    };
    const updateTestPreview = () => {
      const test = selectedTest();
      if (!test) return;
      const inputText = testInput(test).length ? `input: ${testInput(test).join(' | ')}` : 'input: no input lines';
      lab.querySelector('[data-python-test-preview]').textContent = `${test.label || 'Test'} · ${inputText}`;
      checkedRun = null;
      checkButton.disabled = true;
      evidenceButton.disabled = true;
      evidenceOpen.disabled = true;
    };
    const showTask = async (metadata) => {
      const request = ++taskLoadToken;
      taskReady = false;
      currentTask = null;
      taskSelector.value = metadata.id;
      lab.dataset.taskId = metadata.id;
      testSelector.innerHTML = '';
      testSelector.disabled = true;
      code.disabled = true;
      code.value = 'Loading selected task…';
      lab.querySelector('[data-python-task-state]').textContent = 'Loading this task’s starter code and public tests…';
      lab.querySelector('[data-python-task-retry]').hidden = true;
      lab.querySelector('[data-python-brief]').innerHTML = `<p class="eyebrow">DSE-style coding brief</p><h4>${escapeHtml(metadata.title)}</h4><p>${escapeHtml(metadata.brief)}</p><small data-python-task-state>Loading this task’s starter code and public tests…</small><button type="button" class="text-btn" data-python-task-retry hidden>Retry task files</button><small data-python-test-preview></small>`;
      lab.querySelector('[data-python-task-retry]').addEventListener('click', () => showTask(metadata));
      lab.querySelector('[data-python-task-label]').textContent = metadata.id;
      output.textContent = 'Loading selected task files…';
      checkedRun = null;
      lastRun = null;
      evidenceButton.disabled = true;
      evidenceOpen.disabled = true;
      updateRunAvailability();
      try {
        const task = await hydrateTask(metadata);
        if (disposed || request !== taskLoadToken || taskSelector.value !== metadata.id) return;
        currentTask = task;
        taskReady = true;
        testSelector.innerHTML = testsFor(task).map((test, index) => `<option value="${index}">${escapeHtml(test.label || `Public test ${index + 1}`)}</option>`).join('');
        testSelector.disabled = false;
        code.disabled = false;
        code.value = readDraft('python', task);
        rememberTask('python', task.id);
        lab.querySelector('[data-python-task-state]').textContent = 'Task files ready.';
        output.textContent = runtimeReady ? 'Starter code loaded. Trace it before running.' : 'Starter code loaded. Python is still preparing.';
        updateTestPreview();
        updateRunAvailability();
      } catch (error) {
        if (disposed || request !== taskLoadToken || taskSelector.value !== metadata.id) return;
        lab.querySelector('[data-python-task-state]').textContent = `Could not load this task: ${error.message}`;
        lab.querySelector('[data-python-task-retry]').hidden = false;
        output.textContent = 'This task’s files could not load. Retry the task files or choose another task.';
      }
    };
    const runner = createPythonRunner((state) => {
      if (disposed) return;
      if (state.status === 'loading') {
        status.textContent = 'Preparing Python…';
        status.classList.remove('is-ready', 'is-error');
        retryButton.hidden = true;
        runtimeReady = false;
        updateRunAvailability();
      } else if (state.status === 'ready') {
        runtimeReady = true;
        retryButton.hidden = true;
        status.classList.remove('is-error');
        status.textContent = 'Python ready · runs locally';
        status.classList.add('is-ready');
        runButton.disabled = !taskReady;
        if (taskReady) output.textContent = 'Python is ready. Run the starter code or write your own solution.';
      } else if (state.status === 'error') {
        runtimeReady = false;
        runButton.disabled = true;
        retryButton.hidden = false;
        status.textContent = 'Python unavailable';
        status.classList.add('is-error');
        output.textContent = `Could not prepare Python: ${state.error || 'Check your internet connection and reload.'}`;
      }
    });

    showTask(selectedTaskMetadata());
    retryButton.addEventListener('click', () => runner.retry());
    lab.querySelectorAll('[data-evidence-name], [data-evidence-class]').forEach((input) => input.addEventListener('change', () => saveProfile(lab)));
    code.addEventListener('input', () => {
      if (!selectedTask()) return;
      saveDraft('python', selectedTask().id, code.value);
      checkedRun = null;
      evidenceButton.disabled = true;
      evidenceOpen.disabled = true;
    });
    taskSelector.addEventListener('change', () => showTask(selectedTaskMetadata()));
    testSelector.addEventListener('change', updateTestPreview);
    lab.querySelector('[data-python-random]').addEventListener('click', () => {
      const options = studioTasks('python').filter((item) => item.id !== selectedTaskMetadata().id);
      showTask(randomItem(options));
    });
    lab.querySelector('[data-python-reset]').addEventListener('click', () => {
      const task = selectedTask();
      if (!task) return;
      if (code.value !== taskStarter(task) && !global.confirm('Reset this task and discard the current draft?')) return;
      clearDraft('python', task.id);
      code.value = taskStarter(task);
      output.textContent = 'Starter code restored. Trace it before running.';
      lastRun = null;
      checkedRun = null;
      updateTestPreview();
    });
    runButton.addEventListener('click', async () => {
      if (!runtimeReady || !taskReady) return;
      runButton.disabled = true;
      checkButton.disabled = true;
      evidenceButton.disabled = true;
      evidenceOpen.disabled = true;
      output.textContent = 'Running Python…';
      const test = selectedTest();
      const submittedCode = code.value;
      const task = selectedTask();
      if (!test || !task) return;
      const result = await runner.run(submittedCode, testInput(test));
      if (disposed || taskSelector.value !== task.id || code.value !== submittedCode) {
        if (!disposed) { runButton.disabled = !runtimeReady; checkButton.disabled = !runtimeReady; }
        return;
      }
      runCount += 1;
      lastRun = { ...result, code: submittedCode, task, test, runCount };
      output.textContent = result.ok ? (result.stdout || '(Program completed with no printed output.)') : `Error:\n${result.error}`;
      runButton.disabled = false;
      checkButton.disabled = false;
      lab.querySelector('[data-python-feedback]').innerHTML = result.ok
        ? feedback('info', 'Run recorded.', 'A clean run is not yet proof that the output is correct.', 'Use “Check solution” to run every required test.')
        : feedback('bad', 'Python stopped with an error.', result.error || 'Read the line named in the message, then repair one thing at a time.', 'Run again after the smallest sensible repair.');
    });
    checkButton.addEventListener('click', async () => {
      if (!runtimeReady) return;
      const task = selectedTask();
      if (!task) return;
      const checkedCode = code.value;
      runButton.disabled = true;
      checkButton.disabled = true;
      const results = [];
      for (const test of testsFor(task)) {
        const result = await runner.run(checkedCode, testInput(test));
        if (disposed || taskSelector.value !== task.id || code.value !== checkedCode) {
          if (!disposed) { runButton.disabled = !runtimeReady; checkButton.disabled = !runtimeReady; }
          return;
        }
        results.push({ test, result, passed: result.ok && normaliseOutput(result.stdout) === normaliseOutput(testOutput(test)) });
      }
      runCount += results.length;
      const correct = results.every(item => item.passed);
      checkedRun = correct ? { code: checkedCode, task, results, runCount } : null;
      const report = results.map((item, index) => `${item.passed ? '✓' : '✗'} ${item.test.label || `Test ${index + 1}`}`).join('  •  ');
      lab.querySelector('[data-python-feedback]').innerHTML = feedback(correct ? 'good' : 'bad', correct ? 'All required tests passed.' : `${results.filter(item => item.passed).length} / ${results.length} tests passed.`, report, correct ? 'You can export evidence for this completed task.' : 'Fix the code, then check all required tests again.');
      evidenceButton.disabled = !correct;
      evidenceOpen.disabled = !correct;
      runButton.disabled = false;
      checkButton.disabled = false;
    });
    evidenceOpen.addEventListener('click', () => { lab.querySelector('[data-evidence-panel]').hidden = false; });
    evidenceButton.addEventListener('click', () => {
      if (!checkedRun || checkedRun.code !== code.value || checkedRun.task.id !== selectedTask().id) return;
      makeEvidenceCard(lab, {
        studio: 'Code Studio',
        taskId: checkedRun.task.id,
        code: checkedRun.code,
        output: checkedRun.results.map(item => `${item.test.label || 'Test'}: ${normaliseOutput(item.result.stdout)}`).join(' | '),
        ok: true,
        runCount
      });
    });
    const dispose = () => {
      if (disposed) return;
      disposed = true;
      runner.dispose();
      global.removeEventListener('pagehide', dispose);
    };
    global.addEventListener('pagehide', dispose, { once: true });
    return dispose;
  }

  function loadSqlLibrary() {
    if (sqlLibraryPromise) return sqlLibraryPromise;
    sqlLibraryPromise = new Promise((resolve, reject) => {
      if (typeof global.initSqlJs === 'function') {
        resolve(global.initSqlJs);
        return;
      }
      const script = document.createElement('script');
      script.src = `${SQL_ASSET_ROOT}sql-wasm.js`;
      script.async = true;
      script.onload = () => typeof global.initSqlJs === 'function' ? resolve(global.initSqlJs) : reject(new Error('SQL library did not initialise.'));
      script.onerror = () => {
        script.remove();
        reject(new Error('Could not load the SQL runtime. Check your internet connection and retry.'));
      };
      document.head.appendChild(script);
    }).then((initSqlJs) => initSqlJs({ locateFile: (file) => `${SQL_ASSET_ROOT}${file}` }))
      .catch(error => { sqlLibraryPromise = null; throw error; });
    return sqlLibraryPromise;
  }

  function matchesSqlCheck(result, checker) {
    const set = result?.[0];
    return Boolean(set
      && JSON.stringify(set.columns) === JSON.stringify(checker.columns)
      && JSON.stringify(set.values) === JSON.stringify(checker.rows));
  }

  function verifySqlTask(task, db, lastResult) {
    const checker = task.checker;
    if (!checker) return false;
    const result = checker.type === 'database'
      ? db.exec(checker.query)
      : lastResult.resultSets;
    return matchesSqlCheck(result, checker);
  }

  function sqlTable(resultSets) {
    if (!resultSets?.length) return '<p class="console-muted">Statement completed. Add a SELECT statement if you need to show the changed data.</p>';
    return resultSets.map((set) => `
      <div class="sql-result-table"><table><thead><tr>${set.columns.map((column) => `<th>${escapeHtml(column)}</th>`).join('')}</tr></thead>
      <tbody>${set.values.map((row) => `<tr>${row.map((value) => `<td>${escapeHtml(value)}</td>`).join('')}</tr>`).join('') || '<tr><td>No rows returned.</td></tr>'}</tbody></table></div>
    `).join('');
  }

  function renderSqlStudio(activity, options = {}) {
    const tasks = studioTasks('sql');
    const task = lastTask('sql', tasks);
    if (!task) return '<div class="studio-workspace-empty"><h3>Task bank unavailable</h3><p>Reload the page. The SQL Studio task bank did not load.</p></div>';
    const profile = safeProfile();
    const content = `
      <div class="lab-shell execution-studio sql-studio" data-sql-studio data-task-id="${task.id}">
        <div class="studio-banner"><div><p class="eyebrow">Practice database</p><h4>SQL Studio</h4><p>Write and test SQL.</p></div><div class="runtime-status-stack"><span class="runtime-pill" data-sql-status aria-live="polite">Preparing SQL…</span><button type="button" class="text-btn" data-sql-retry hidden>Retry SQL</button></div></div>
        <div class="task-toolbar"><label>Task<select data-sql-task>${tasks.map((item) => `<option value="${item.id}" ${item.id === task.id ? 'selected' : ''}>${escapeHtml(item.topic)} · ${escapeHtml(item.skill || '')} · ${escapeHtml(item.level)} · ${escapeHtml(item.title)} (${item.id})</option>`).join('')}</select></label><button type="button" class="ghost-btn" data-sql-random>換一題</button><button type="button" class="ghost-btn" data-sql-reset>Reset task</button></div>
        <article class="studio-brief" data-sql-brief><p class="eyebrow">DSE-style database brief</p><h4>${escapeHtml(task.title)}</h4><p>${escapeHtml(task.brief)}</p><small data-sql-task-state>Loading this task’s starter SQL and seed data…</small><button type="button" class="text-btn" data-sql-task-retry hidden>Retry task files</button></article>
        <div class="execution-grid"><section class="editor-panel"><div class="editor-heading"><span>practice.sql</span><span data-sql-task-label>${task.id}</span></div><textarea class="code-editor sql-code-editor" data-sql-code spellcheck="false" aria-label="SQL code editor" disabled>Loading selected task…</textarea></section><section class="console-panel"><div class="editor-heading"><span>Your result</span><span>Practice database</span></div><div class="sql-console" data-sql-output aria-live="polite">SQL is loading in the background…</div></section></div>
        <div class="schema-strip"><strong>Schema</strong><code data-sql-schema>Loading practice schema…</code><details class="sql-start-data"><summary>View starting data</summary><div data-sql-seed-output></div></details></div>
        <div class="lab-actions studio-actions"><button type="button" class="primary-btn" data-sql-run disabled>Run</button><button type="button" class="secondary-btn" data-sql-check disabled>Check solution</button></div>
        <div data-sql-feedback></div>
        ${evidencePanel(profile)}
      </div>
    `;
    return options.standalone ? content : shell(activity, content);
  }

  function bindSqlStudio(stage) {
    const lab = stage.querySelector('[data-sql-studio]');
    if (!lab) return;
    const status = lab.querySelector('[data-sql-status]');
    const code = lab.querySelector('[data-sql-code]');
    const output = lab.querySelector('[data-sql-output]');
    const runButton = lab.querySelector('[data-sql-run]');
    const checkButton = lab.querySelector('[data-sql-check]');
    const evidenceButton = lab.querySelector('[data-evidence-download]');
    const evidenceOpen = lab.querySelector('[data-evidence-open]');
    const retryButton = lab.querySelector('[data-sql-retry]');
    const taskSelector = lab.querySelector('[data-sql-task]');
    let SQL;
    let db;
    let runCount = 0;
    let lastRun = null;
    let checkedRun = null;
    let disposed = false;
    let taskReady = false;
    let currentTask = null;
    let taskLoadToken = 0;

    const selectedTaskMetadata = () => studioTasks('sql').find(item => item.id === taskSelector.value) || studioTasks('sql')[0];
    const selectedTask = () => currentTask?.id === taskSelector.value ? currentTask : null;
    const updateRunAvailability = () => {
      runButton.disabled = !SQL || !taskReady;
      checkButton.disabled = true;
    };
    const resetDatabase = () => {
      const task = selectedTask();
      if (!task || !SQL) return;
      db?.close();
      db = new SQL.Database();
      db.run(task.seedSql);
      const tables = db.exec("SELECT name, sql FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name")[0]?.values || [];
      lab.querySelector('[data-sql-schema]').textContent = tables.map(row => row[1]).join('  ');
      lab.querySelector('[data-sql-seed-output]').innerHTML = tables.map(row =>
        `<strong>${escapeHtml(row[0])}</strong>${sqlTable(db.exec(`SELECT * FROM "${String(row[0]).replace(/"/g, '""')}"`))}`
      ).join('');
    };
    const showTask = async (metadata) => {
      const request = ++taskLoadToken;
      taskReady = false;
      currentTask = null;
      taskSelector.value = metadata.id;
      lab.dataset.taskId = metadata.id;
      code.disabled = true;
      code.value = 'Loading selected task…';
      lab.querySelector('[data-sql-brief]').innerHTML = `<p class="eyebrow">DSE-style database brief</p><h4>${escapeHtml(metadata.title)}</h4><p>${escapeHtml(metadata.brief)}</p><small data-sql-task-state>Loading this task’s starter SQL and seed data…</small><button type="button" class="text-btn" data-sql-task-retry hidden>Retry task files</button>`;
      lab.querySelector('[data-sql-task-retry]').addEventListener('click', () => showTask(metadata));
      lab.querySelector('[data-sql-task-label]').textContent = metadata.id;
      output.innerHTML = '<p class="console-muted">Loading selected task files…</p>';
      lastRun = null;
      checkedRun = null;
      checkButton.disabled = true;
      evidenceButton.disabled = true;
      evidenceOpen.disabled = true;
      updateRunAvailability();
      try {
        const task = await hydrateTask(metadata);
        if (disposed || request !== taskLoadToken || taskSelector.value !== metadata.id) return;
        currentTask = task;
        taskReady = true;
        code.disabled = false;
        code.value = readDraft('sql', task);
        rememberTask('sql', task.id);
        lab.querySelector('[data-sql-task-state]').textContent = 'Task files ready.';
        if (SQL) {
          resetDatabase();
          output.innerHTML = '<p class="console-muted">Starter SQL loaded. Read the schema and predict the result before running.</p>';
        } else {
          output.innerHTML = '<p class="console-muted">Starter SQL loaded. SQLite is still preparing.</p>';
        }
        updateRunAvailability();
      } catch (error) {
        if (disposed || request !== taskLoadToken || taskSelector.value !== metadata.id) return;
        lab.querySelector('[data-sql-task-state]').textContent = `Could not load this task: ${error.message}`;
        lab.querySelector('[data-sql-task-retry]').hidden = false;
        output.innerHTML = '<p class="console-error">This task’s files could not load. Retry the task files or choose another task.</p>';
      }
    };

    lab.querySelectorAll('[data-evidence-name], [data-evidence-class]').forEach((input) => input.addEventListener('change', () => saveProfile(lab)));
    code.addEventListener('input', () => {
      if (!selectedTask()) return;
      saveDraft('sql', selectedTask().id, code.value);
      checkedRun = null;
      evidenceButton.disabled = true;
      evidenceOpen.disabled = true;
      checkButton.disabled = true;
    });
    const prepareSql = () => {
      retryButton.hidden = true;
      status.textContent = 'Preparing SQL…';
      status.classList.remove('is-ready', 'is-error');
      loadSqlLibrary().then(library => {
        if (disposed) return;
        SQL = library;
        resetDatabase();
        status.textContent = 'SQLite ready · runs locally';
        status.classList.add('is-ready');
        runButton.disabled = !taskReady;
        if (taskReady) output.innerHTML = '<p class="console-muted">SQLite is ready. Run the starter SQL or write your own solution.</p>';
      }).catch(error => {
        if (disposed) return;
        retryButton.hidden = false;
        status.textContent = 'SQLite unavailable';
        status.classList.add('is-error');
        output.innerHTML = `<p class="console-error">${escapeHtml(error.message)}</p>`;
      });
    };
    retryButton.addEventListener('click', prepareSql);
    showTask(selectedTaskMetadata());
    prepareSql();
    taskSelector.addEventListener('change', () => showTask(selectedTaskMetadata()));
    lab.querySelector('[data-sql-random]').addEventListener('click', () => showTask(randomItem(studioTasks('sql').filter(task => task.id !== selectedTaskMetadata().id))));
    lab.querySelector('[data-sql-reset]').addEventListener('click', () => {
      if (!SQL || !taskReady) return;
      const task = selectedTask();
      if (!task) return;
      if (code.value !== taskStarter(task) && !global.confirm('Reset this task and discard the current draft?')) return;
      clearDraft('sql', task.id);
      code.value = taskStarter(task);
      resetDatabase();
      lastRun = null;
      checkedRun = null;
      checkButton.disabled = true;
      evidenceButton.disabled = true;
      evidenceOpen.disabled = true;
      output.innerHTML = '<p class="console-muted">Practice database reset to its starting records.</p>';
      lab.querySelector('[data-sql-feedback]').innerHTML = feedback('info', 'Task reset.', 'The starter SQL and practice database have been restored.', 'Run your SQL again and inspect the result.');
    });
    runButton.addEventListener('click', () => {
      if (!db || !taskReady) return;
      runButton.disabled = true;
      checkButton.disabled = true;
      evidenceButton.disabled = true;
      evidenceOpen.disabled = true;
      checkedRun = null;
      try {
        resetDatabase();
        const resultSets = db.exec(code.value);
        runCount += 1;
        lastRun = { ok: true, code: code.value, resultSets, task: selectedTask(), runCount };
        output.innerHTML = sqlTable(resultSets);
        lastRun.output = output.innerText;
        checkButton.disabled = false;
        lab.querySelector('[data-sql-feedback]').innerHTML = feedback('info', 'SQL executed.', 'This run began with fresh starting data.', 'Use “Check solution” to verify the required result.');
      } catch (error) {
        runCount += 1;
        lastRun = { ok: false, code: code.value, error: error.message || String(error), task: selectedTask(), runCount };
        output.innerHTML = `<pre class="console-error">SQL error:\n${escapeHtml(lastRun.error)}</pre>`;
        lab.querySelector('[data-sql-feedback]').innerHTML = feedback('bad', 'SQL could not run.', lastRun.error, 'Repair one clause or punctuation mark, then run again.');
      } finally {
        runButton.disabled = false;
      }
    });
    checkButton.addEventListener('click', () => {
      if (!lastRun || !db || lastRun.code !== code.value || lastRun.task.id !== selectedTask().id) return;
      const correct = lastRun.ok && verifySqlTask(selectedTask(), db, lastRun);
      checkedRun = correct ? lastRun : null;
      evidenceButton.disabled = !correct;
      evidenceOpen.disabled = !correct;
      lab.querySelector('[data-sql-feedback]').innerHTML = correct
        ? feedback('good', 'Task result confirmed.', 'The practice database now contains the requested result. You can export evidence for this completed task.', 'Explain which clause made the action safe or which fields prove the change.')
        : feedback('bad', 'Task result is not there yet.', 'The statement may be valid SQL, but the current database state does not yet match the task brief.', 'Reset if needed, then compare the required fields, condition and values carefully.');
    });
    evidenceOpen.addEventListener('click', () => { lab.querySelector('[data-evidence-panel]').hidden = false; });
    evidenceButton.addEventListener('click', () => {
      if (!checkedRun || checkedRun.code !== code.value || checkedRun.task.id !== selectedTask().id) return;
      makeEvidenceCard(lab, {
        studio: 'SQL Studio',
        taskId: checkedRun.task.id,
        code: checkedRun.code,
        output: checkedRun.output,
        ok: true,
        runCount
      });
    });
    const dispose = () => {
      if (disposed) return;
      disposed = true;
      db?.close();
      db = null;
      global.removeEventListener('pagehide', dispose);
    };
    global.addEventListener('pagehide', dispose, { once: true });
    return dispose;
  }

  function mountStandaloneStudio(stage, studio) {
    if (!stage) return;
    const mountToken = Symbol(studio);
    stage._studioMountToken = mountToken;
    stage._studioCleanup?.();
    stage.innerHTML = '<div class="studio-workspace-empty"><h3>Loading tasks…</h3><p>Studio is loading the task catalog.</p></div>';
    const ready = loadTaskCatalog().then(() => {
      if (stage._studioMountToken !== mountToken) return;
      if (studio === 'code') {
        stage.innerHTML = renderPythonStudio(null, { standalone: true });
        stage._studioCleanup = bindPythonStudio(stage);
      } else if (studio === 'sql') {
        stage.innerHTML = renderSqlStudio(null, { standalone: true });
        stage._studioCleanup = bindSqlStudio(stage);
      }
    }).catch((error) => {
      if (stage._studioMountToken !== mountToken) return;
      stage.innerHTML = '<div class="studio-workspace-empty"><h3>Could not load tasks</h3><p>The task catalog is temporarily unavailable. Check your connection and retry.</p><button type="button" class="secondary-btn" data-studio-retry>Retry tasks</button></div>';
      stage.querySelector('[data-studio-retry]').addEventListener('click', () => mountStandaloneStudio(stage, studio));
    });
    stage._studioReady = ready;
    return ready;
  }

  async function runPythonTaskTests(task, solutionCode = taskStarter(task)) {
    const runner = createPythonRunner(() => {});
    try {
      const results = [];
      for (const test of task.tests || []) {
        const result = await runner.run(solutionCode, testInput(test));
        results.push({ label: test.label, passed: result.ok && normaliseOutput(result.stdout) === normaliseOutput(testOutput(test)), result });
      }
      return results;
    } finally {
      runner.dispose();
    }
  }

  function register() {
    if (!global.ActivityLabs?.register) return;
    global.ActivityLabs.register('pythonCodeStudio', renderPythonStudio, bindPythonStudio);
    global.ActivityLabs.register('sqlCodeStudio', renderSqlStudio, bindSqlStudio);
    global.ActivityLabs.mountStandaloneStudio = mountStandaloneStudio;
    global.ActivityLabs.loadTaskCatalog = loadTaskCatalog;
    global.ActivityLabs.runPythonTaskTests = runPythonTaskTests;
    if (typeof global.updateTopicLabBadges === 'function') global.updateTopicLabBadges();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', register);
  else register();
})(window);
