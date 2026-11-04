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
  const categoryLabel = id => global.StudioTaskUtils?.categoryLabel?.(id) || '';
  const taskMenuLabel = item => [categoryLabel(item.category), item.topic, item.title, `(${item.id})`].filter(Boolean).join(' · ');
  const tasksInCategory = (kind, category) => studioTasks(kind).filter(item => !category || item.category === category);
  const categoryMenu = name => {
    const options = (global.StudioTaskUtils?.taskCategories || []).map(item => `<option value="${item.id}">${escapeHtml(item.label)}</option>`).join('');
    return `<label>分類<select data-${name}-category><option value="">全部</option>${options}</select></label>`;
  };

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
      if (textarea.classList.contains('is-replaced')) return;
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

  const MONACO_VS = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs';
  let monacoPromise;
  let monacoThemeReady = false;

  function loadMonaco() {
    if (global.monaco?.editor) return Promise.resolve(global.monaco);
    if (monacoPromise) return monacoPromise;
    global.MonacoEnvironment = {
      getWorkerUrl() {
        const source = `self.MonacoEnvironment={baseUrl:'${MONACO_VS}/'};importScripts('${MONACO_VS}/base/worker/workerMain.js');`;
        return `data:text/javascript;charset=utf-8,${encodeURIComponent(source)}`;
      }
    };
    monacoPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `${MONACO_VS}/loader.js`;
      script.onload = () => {
        global.require.config({ paths: { vs: MONACO_VS } });
        global.require(['vs/editor/editor.main'], () => resolve(global.monaco));
      };
      script.onerror = () => {
        monacoPromise = null;
        script.remove();
        reject(new Error('Could not load the code editor.'));
      };
      document.head.appendChild(script);
    });
    return monacoPromise;
  }

  function mountMonaco(textarea, language) {
    const host = document.createElement('div');
    host.className = 'studio-monaco';
    host.setAttribute('data-editor-language', language);
    textarea.insertAdjacentElement('afterend', host);
    const valueProperty = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value');
    const disabledProperty = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'disabled');
    let editor = null;
    let mute = false;
    Object.defineProperty(textarea, 'value', {
      configurable: true,
      get() { return editor ? editor.getValue() : valueProperty.get.call(textarea); },
      set(next) {
        const text = String(next ?? '');
        valueProperty.set.call(textarea, text);
        if (editor && editor.getValue() !== text) {
          mute = true;
          editor.setValue(text);
          mute = false;
        }
      }
    });
    Object.defineProperty(textarea, 'disabled', {
      configurable: true,
      get() { return disabledProperty.get.call(textarea); },
      set(flag) {
        disabledProperty.set.call(textarea, flag);
        editor?.updateOptions({ readOnly: Boolean(flag) });
      }
    });
    loadMonaco().then(monaco => {
      if (!host.isConnected) return;
      if (!monacoThemeReady) {
        monaco.editor.defineTheme('ict-kata', {
          base: 'vs-dark',
          inherit: true,
          rules: [],
          colors: {
            'editor.background': '#102033',
            'editor.foreground': '#eaf4ff',
            'editorLineNumber.foreground': '#7f9bbd',
            'editor.lineHighlightBackground': '#17304d',
            'editorCursor.foreground': '#ffffff'
          }
        });
        monacoThemeReady = true;
      }
      editor = monaco.editor.create(host, {
        value: valueProperty.get.call(textarea),
        language,
        theme: 'ict-kata',
        fontSize: 15,
        fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        tabSize: language === 'python' ? 4 : 2,
        insertSpaces: true,
        detectIndentation: false,
        wordWrap: 'on',
        padding: { top: 12, bottom: 12 },
        renderLineHighlight: 'line',
        overviewRulerLanes: 0,
        hideCursorInOverviewRuler: true,
        scrollbar: { verticalScrollbarSize: 8, horizontalScrollbarSize: 8 },
        readOnly: textarea.disabled,
        ariaLabel: textarea.getAttribute('aria-label') || 'Code editor',
        fixedOverflowWidgets: true,
        quickSuggestions: true,
        suggestOnTriggerCharacters: true
      });
      textarea.classList.add('is-replaced');
      editor.onDidChangeModelContent(() => {
        if (mute) return;
        valueProperty.set.call(textarea, editor.getValue());
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
      editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
        textarea.dispatchEvent(new CustomEvent('studio-run', { bubbles: true }));
      });
    }).catch(() => {
      host.remove();
    });
    return () => {
      editor?.getModel()?.dispose();
      editor?.dispose();
      editor = null;
    };
  }
  global.StudioEditorUtils = { indentCode, loadMonaco };

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

  function outputVerdict(task, actual, expected) {
    const utils = global.StudioTaskUtils;
    if (utils?.compareOutputs) return utils.compareOutputs(actual, expected, utils.compareSpec(task));
    return { pass: normaliseOutput(actual) === normaliseOutput(expected), mode: 'legacy' };
  }

  function formatPythonRun(result) {
    if (!result?.ok && !result?.stdout && !result?.terminal) return `Error:\n${result?.error || 'Python stopped.'}`;
    const parts = [];
    if (result.terminal) parts.push(`Terminal echo (not scored)\n${result.terminal}`);
    parts.push(result.stdout ? result.stdout : '(no stdout)');
    if (result.stderr) parts.push(`stderr\n${result.stderr}`);
    if (!result.ok) parts.push(`Error:\n${result.error || 'Python stopped.'}`);
    return parts.join('\n\n');
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
            expectedOutput: output.replace(/\r\n/g, '\n'),
            explanation: test.explanation || ''
          };
        }));
        let statement = task.statement || '';
        if (!statement && task.statementFile) statement = await fetchText(`${folder}${task.statementFile}`);
        let afterSamples = task.support?.afterSamples || '';
        if (!afterSamples && task.afterFile) afterSamples = await fetchText(`${folder}${task.afterFile}`);
        return { ...task, starterText, tests, statement, support: { ...(task.support || {}), afterSamples } };
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
      worker = new Worker('python-runner-worker.mjs?v=20261105-io1', { type: 'module' });
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
          ${categoryMenu('python')}
          <label>Task<select data-python-task>${tasks.map((item) => `<option value="${item.id}" ${item.id === task.id ? 'selected' : ''}>${escapeHtml(taskMenuLabel(item))}</option>`).join('')}</select></label>
          <button type="button" class="ghost-btn" data-python-random>換一題</button>
          <button type="button" class="ghost-btn" data-python-reset>重設題目</button>
          <button type="button" class="ghost-btn" data-python-download>下載程式</button>
        </div>
        <div class="kata-workspace">
          <article class="kata-read" data-python-brief>
            <header class="kata-read-head">
              <p class="eyebrow">Instructions</p>
              <h4 data-python-title>${escapeHtml(task.title)}</h4>
              <p class="kata-status" data-python-task-state>Loading this task…</p>
              <button type="button" class="text-btn" data-python-task-retry hidden>Retry task files</button>
            </header>
            <section class="kata-block"><h5>題目背景</h5><div data-python-statement></div></section>
            <section class="kata-block"><h5>可見示例</h5><div data-python-samples></div></section>
          </article>
          <section class="kata-ide">
            <div class="kata-ide-bar">
              <span>你的程式</span>
              <span data-python-task-label>${task.id}</span>
              <span class="kata-ide-spacer"></span>
              <button type="button" class="ghost-btn" data-python-run disabled title="執行（Ctrl+Enter）">執行</button>
              <button type="button" class="primary-btn" data-python-check disabled>提交</button>
            </div>
            <section class="editor-panel"><textarea class="code-editor" data-python-code spellcheck="false" aria-label="Python code editor" disabled>Loading selected task…</textarea></section>
            <details class="kata-custom"><summary>自訂輸入</summary><textarea data-python-custom-input rows="4" spellcheck="false" aria-label="Custom standard input for Run" placeholder="只影響「執行」。提交會改用題目自己的輸入。"></textarea></details>
            <section class="console-panel"><div class="editor-heading"><span>輸出</span><span>stdout</span></div><pre class="studio-console" data-python-output aria-live="polite">Python is loading in the background…</pre></section>
            <div data-python-submit-report></div>
            <div data-python-feedback hidden></div>
          </section>
        </div>
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
    const releaseEditor = mountMonaco(code, 'python');
    const taskSelector = lab.querySelector('[data-python-task]');
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
    const stagedPrivateTests = task => global.StudioTaskBankAPI?.getPrivate?.(task.id)?.privateTests || [];
    const sampleList = task => global.StudioTaskUtils.visibleSamples(task);
    const fullCaseList = task => global.StudioTaskUtils.submitCases(task, stagedPrivateTests(task));
    const updateRunAvailability = () => {
      const ready = runtimeReady && taskReady;
      runButton.disabled = !ready;
      checkButton.disabled = !ready;
      lab.querySelectorAll('[data-sample-run]').forEach(button => { button.disabled = !ready; });
    };
    const renderSamples = task => {
      const samples = sampleList(task);
      const host = lab.querySelector('[data-python-samples]');
      if (!host) return;
      host.innerHTML = samples.map((sample, index) => `
        <article class="kata-sample">
          <header><strong>${escapeHtml(sample.label)}</strong><button type="button" class="secondary-btn" data-sample-run="${index}">執行</button></header>
          <div class="kata-io">
            <section><h6>輸入</h6><pre>${escapeHtml(global.StudioTaskUtils.caseInputText(sample) || '（沒有輸入）')}</pre></section>
            <section><h6>預期輸出</h6><pre>${escapeHtml(sample.output || '（沒有輸出）')}</pre></section>
          </div>
          ${sample.explanation ? `<p>${escapeHtml(sample.explanation)}</p>` : ''}
          <div data-sample-result="${index}"></div>
        </article>
      `).join('');
      updateRunAvailability();
    };
    const showTask = async (metadata) => {
      const request = ++taskLoadToken;
      taskReady = false;
      currentTask = null;
      taskSelector.value = metadata.id;
      lab.dataset.taskId = metadata.id;
      code.disabled = true;
      code.value = 'Loading selected task…';
      lab.querySelector('[data-python-title]').textContent = metadata.title;
      lab.querySelector('[data-python-task-state]').textContent = 'Loading this task’s starter code and tests…';
      lab.querySelector('[data-python-task-retry]').hidden = true;
      lab.querySelector('[data-python-statement]').innerHTML = '<p>Loading the statement…</p>';
      lab.querySelector('[data-python-samples]').innerHTML = '';
      lab.querySelector('[data-python-submit-report]').innerHTML = '';
      lab.querySelector('[data-python-task-label]').textContent = metadata.id;
      output.textContent = 'Loading selected task files…';
      const customInput = lab.querySelector('[data-python-custom-input]');
      if (customInput) { customInput.value = ''; customInput.dataset.dirty = ''; }
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
        code.disabled = false;
        code.value = readDraft('python', task);
        rememberTask('python', task.id);
        const meta = [categoryLabel(task.category), task.practiceType || '', task.stars ? `${task.stars} star` : ''].filter(Boolean).join(' · ');
        const statement = task.statement || task.brief || '';
        const after = task.support?.afterSamples ? `<h5>After samples</h5>${global.StudioTaskUtils.renderStatementHtml(task.support.afterSamples)}` : '';
        lab.querySelector('[data-python-statement]').innerHTML = `${meta ? `<p class="kata-note">${escapeHtml(meta)}</p>` : ''}${global.StudioTaskUtils.renderStatementHtml(statement)}${after}`;
        renderSamples(task);
        const submitCount = fullCaseList(task).length;
        lab.querySelector('[data-python-task-state]').textContent = `可見示例 ${sampleList(task).length} 個。提交會檢查 ${submitCount} 個測試。`;
        output.textContent = runtimeReady ? 'Starter code loaded. Use a sample Run, or Submit every test.' : 'Starter code loaded. Python is still preparing.';
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
        updateRunAvailability();
        if (taskReady) output.textContent = 'Python is ready. Use a sample Run, or Submit every test.';
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
    lab.addEventListener('studio-run', () => { if (!runButton.disabled) runButton.click(); });
    retryButton.addEventListener('click', () => runner.retry());
    lab.querySelectorAll('[data-evidence-name], [data-evidence-class]').forEach((input) => input.addEventListener('change', () => saveProfile(lab)));
    lab.querySelector('[data-python-custom-input]')?.addEventListener('input', (event) => { event.target.dataset.dirty = 'true'; });
    lab.querySelector('[data-python-download]')?.addEventListener('click', () => {
      const blob = new Blob([code.value], { type: 'text/plain' });
      const link = document.createElement('a');
      link.download = `${taskSelector.value || 'main'}.py`;
      link.href = URL.createObjectURL(blob);
      link.click();
      setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    });
    code.addEventListener('input', () => {
      if (!selectedTask()) return;
      saveDraft('python', selectedTask().id, code.value);
      checkedRun = null;
      evidenceButton.disabled = true;
      evidenceOpen.disabled = true;
    });
    taskSelector.addEventListener('change', () => showTask(selectedTaskMetadata()));
    lab.querySelector('[data-python-task-retry]')?.addEventListener('click', () => showTask(selectedTaskMetadata()));
    lab.querySelector('[data-python-samples]')?.addEventListener('click', async (event) => {
      const button = event.target.closest('[data-sample-run]');
      if (!button || !runtimeReady || !taskReady) return;
      const task = selectedTask();
      const sample = sampleList(task)[Number(button.dataset.sampleRun)];
      if (!task || !sample) return;
      const submittedCode = code.value;
      const resultHost = lab.querySelector(`[data-sample-result="${button.dataset.sampleRun}"]`);
      button.disabled = true;
      output.textContent = `Running ${sample.label}…`;
      const result = await runner.run(submittedCode, testInput(sample));
      if (disposed || taskSelector.value !== task.id || code.value !== submittedCode) {
        updateRunAvailability();
        return;
      }
      runCount += 1;
      const verdict = outputVerdict(task, result.stdout, testOutput(sample));
      const passed = result.ok && verdict.pass;
      output.textContent = formatPythonRun(result);
      const difference = global.StudioTaskUtils.caseFailureText({
        visible: true,
        ok: result.ok,
        error: result.error,
        stdout: result.stdout,
        expected: testOutput(sample)
      });
      resultHost.innerHTML = passed
        ? '<p class="kata-pass">正確</p>'
        : `<p class="kata-fail">錯誤。${escapeHtml(difference)}</p>`;
      updateRunAvailability();
    });
    const visiblePythonTasks = () => tasksInCategory('python', lab.querySelector('[data-python-category]')?.value || '');
    lab.querySelector('[data-python-category]')?.addEventListener('change', () => {
      const visible = visiblePythonTasks();
      const current = taskSelector.value;
      taskSelector.innerHTML = visible.map(item => `<option value="${item.id}">${escapeHtml(taskMenuLabel(item))}</option>`).join('');
      const chosen = visible.find(item => item.id === current) || visible[0];
      if (chosen && chosen.id !== current) showTask(chosen);
      else if (chosen) taskSelector.value = chosen.id;
    });
    lab.querySelector('[data-python-random]').addEventListener('click', () => {
      const options = visiblePythonTasks().filter((item) => item.id !== selectedTaskMetadata().id);
      if (options.length) showTask(randomItem(options));
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
      lab.querySelector('[data-python-submit-report]').innerHTML = '';
    });
    runButton.addEventListener('click', async () => {
      if (!runtimeReady || !taskReady) return;
      runButton.disabled = true;
      checkButton.disabled = true;
      evidenceButton.disabled = true;
      evidenceOpen.disabled = true;
      output.textContent = 'Running Python…';
      const submittedCode = code.value;
      const task = selectedTask();
      if (!task) return;
      const customInput = lab.querySelector('[data-python-custom-input]');
      const runInputs = global.StudioTaskUtils?.inputLinesFromText(customInput?.value || '') || [];
      const result = await runner.run(submittedCode, runInputs);
      if (disposed || taskSelector.value !== task.id || code.value !== submittedCode) {
        if (!disposed) { runButton.disabled = !runtimeReady; checkButton.disabled = !runtimeReady; }
        return;
      }
      runCount += 1;
      lastRun = { ...result, code: submittedCode, task, runCount };
      output.textContent = formatPythonRun(result);
      updateRunAvailability();
      lab.querySelector('[data-python-feedback]').innerHTML = '';
    });
    checkButton.addEventListener('click', async () => {
      if (!runtimeReady) return;
      const task = selectedTask();
      if (!task) return;
      const checkedCode = code.value;
      runButton.disabled = true;
      checkButton.disabled = true;
      const cases = fullCaseList(task);
      const results = [];
      for (const test of cases) {
        const result = await runner.run(checkedCode, testInput(test));
        if (disposed || taskSelector.value !== task.id || code.value !== checkedCode) {
          if (!disposed) updateRunAvailability();
          return;
        }
        const verdict = outputVerdict(task, result.stdout, testOutput(test));
        results.push({ test, result, passed: result.ok && verdict.pass, reason: verdict.reason || '', visible: test.visible });
      }
      runCount += results.length;
      const correct = results.every(item => item.passed);
      const passedCount = results.filter(item => item.passed).length;
      checkedRun = correct ? { code: checkedCode, task, results, runCount } : null;
      lab.querySelector('[data-python-feedback]').innerHTML = '';
      const failureText = item => global.StudioTaskUtils.caseFailureText({
        visible: item.visible,
        ok: item.result.ok,
        error: item.result.error,
        stdout: item.result.stdout,
        expected: testOutput(item.test)
      });
      const firstFailure = results.find(item => !item.passed);
      const shownRun = (firstFailure || results[0])?.result;
      if (shownRun) output.textContent = formatPythonRun(shownRun);
      const summary = firstFailure
        ? failureText(firstFailure)
        : '全部測試都已執行。這是瀏覽器內的形成性檢查。';
      results.forEach((item, index) => {
        if (!item.visible) return;
        const host = lab.querySelector(`[data-sample-result="${index}"]`);
        if (!host) return;
        host.innerHTML = item.passed
          ? '<p class="kata-pass">正確</p>'
          : `<p class="kata-fail">錯誤。${escapeHtml(failureText(item))}</p>`;
      });
      const report = lab.querySelector('[data-python-submit-report]');
      report.innerHTML = `<section class="kata-result ${correct ? 'is-pass' : 'is-fail'}"><header><strong>${passedCount} / ${results.length}</strong><span>提交結果</span></header><p>${escapeHtml(summary)}</p><ol>${results.map((item, index) => {
        const name = item.test.label || `Test ${index + 1}`;
        const detail = item.passed ? '' : `<small>${escapeHtml(failureText(item))}</small>`;
        return `<li class="${item.passed ? 'is-pass' : 'is-fail'}"><strong>${item.passed ? '正確' : '錯誤'}</strong> ${escapeHtml(name)}${detail}</li>`;
      }).join('')}</ol></section>`;
      report.scrollIntoView({ block: 'nearest' });
      evidenceButton.disabled = !correct;
      evidenceOpen.disabled = !correct;
      updateRunAvailability();
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
      releaseEditor();
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
        <div class="task-toolbar">${categoryMenu('sql')}<label>Task<select data-sql-task>${tasks.map((item) => `<option value="${item.id}" ${item.id === task.id ? 'selected' : ''}>${escapeHtml(taskMenuLabel(item))}</option>`).join('')}</select></label><button type="button" class="ghost-btn" data-sql-random>換一題</button><button type="button" class="ghost-btn" data-sql-reset>Reset task</button></div>
        <article class="studio-brief" data-sql-brief><p class="eyebrow">DSE-style database brief</p><h4>${escapeHtml(task.title)}</h4><p>${escapeHtml(task.brief)}</p><small data-sql-task-state>Loading this task’s starter SQL and seed data…</small><button type="button" class="text-btn" data-sql-task-retry hidden>Retry task files</button></article>
        <div class="execution-grid"><section class="editor-panel"><div class="editor-heading"><span>practice.sql</span><span data-sql-task-label>${task.id}</span><span class="kata-ide-spacer"></span><button type="button" class="ghost-btn" data-sql-run disabled title="執行（Ctrl+Enter）">執行</button><button type="button" class="primary-btn" data-sql-check disabled>檢查</button></div><textarea class="code-editor sql-code-editor" data-sql-code spellcheck="false" aria-label="SQL code editor" disabled>Loading selected task…</textarea></section><section class="console-panel"><div class="editor-heading"><span>Your result</span><span>Practice database</span></div><div class="sql-console" data-sql-output aria-live="polite">SQL is loading in the background…</div></section></div>
        <div class="schema-strip"><strong>Schema</strong><code data-sql-schema>Loading practice schema…</code><details class="sql-start-data"><summary>View starting data</summary><div data-sql-seed-output></div></details></div>
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
    const releaseEditor = mountMonaco(code, 'sql');
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
    lab.addEventListener('studio-run', () => { if (!runButton.disabled) runButton.click(); });
    taskSelector.addEventListener('change', () => showTask(selectedTaskMetadata()));
    const visibleSqlTasks = () => tasksInCategory('sql', lab.querySelector('[data-sql-category]')?.value || '');
    lab.querySelector('[data-sql-category]')?.addEventListener('change', () => {
      const visible = visibleSqlTasks();
      const current = taskSelector.value;
      taskSelector.innerHTML = visible.map(item => `<option value="${item.id}">${escapeHtml(taskMenuLabel(item))}</option>`).join('');
      const chosen = visible.find(item => item.id === current) || visible[0];
      if (chosen && chosen.id !== current) showTask(chosen);
    });
    lab.querySelector('[data-sql-random]').addEventListener('click', () => {
      const options = visibleSqlTasks().filter(task => task.id !== selectedTaskMetadata().id);
      if (options.length) showTask(randomItem(options));
    });
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
      releaseEditor();
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

  async function runPythonTaskTests(task, solutionCode = taskStarter(task), options = {}) {
    const runner = createPythonRunner(() => {});
    const cases = options.includePrivate ? [...(task.tests || []), ...(task.privateTests || [])] : (task.tests || []);
    try {
      const results = [];
      for (const test of cases) {
        const result = await runner.run(solutionCode, testInput(test));
        const verdict = outputVerdict(task, result.stdout, testOutput(test));
        results.push({ label: test.label, passed: result.ok && verdict.pass, reason: verdict.reason || result.error || '', result, private: Boolean(test.private) });
      }
      return { complete: true, results };
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
