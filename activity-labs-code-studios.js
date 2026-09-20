/**
 * Browser-only Code Studio and SQL Studio.
 * Students can run real code/queries, see deterministic feedback, then export
 * a compact evidence card. Open-ended explanations stay spoken with a teacher.
 */
(function (global) {
  const SQL_ASSET_ROOT = 'https://cdn.jsdelivr.net/npm/sql.js@1.14.2/dist/';
  const STUDENT_PROFILE_KEY = 'ict-learning-platform-evidence-profile';
  let sqlLibraryPromise;

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

  function normaliseCell(value) {
    return value == null ? '' : String(value).trim();
  }

  function safeProfile() {
    try {
      return JSON.parse(localStorage.getItem(STUDENT_PROFILE_KEY)) || { name: '', className: '' };
    } catch (_) {
      return { name: '', className: '' };
    }
  }

  function saveProfile(lab) {
    const profile = {
      name: lab.querySelector('[data-evidence-name]')?.value.trim() || '',
      className: lab.querySelector('[data-evidence-class]')?.value.trim() || ''
    };
    localStorage.setItem(STUDENT_PROFILE_KEY, JSON.stringify(profile));
    return profile;
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

  function evidencePanel(profile, studio) {
    return `
      <aside class="evidence-panel" data-evidence-panel>
        <div>
          <p class="eyebrow">功課證據卡</p>
          <h4>完成一次有效執行後，下載 PNG</h4>
          <p>卡內會記錄姓名、班別、題目、程式／SQL、輸出、時間及執行次數。</p>
        </div>
        <div class="evidence-profile">
          <label>姓名<input type="text" data-evidence-name maxlength="50" value="${escapeHtml(profile.name)}" placeholder="例如 Chan Tai Man"></label>
          <label>班別<input type="text" data-evidence-class maxlength="20" value="${escapeHtml(profile.className)}" placeholder="例如 5A"></label>
        </div>
        <div class="evidence-submit-route">
          <button type="button" class="secondary-btn" data-evidence-download disabled>1. 下載證據卡 PNG</button>
          <a class="text-btn" href="https://classroom.google.com/" target="_blank" rel="noopener">2. 開啟 Google Classroom 上載 ↗</a>
        </div>
        <small>這是提交輔助紀錄，不是防篡改的身份驗證；老師仍可要求學生說明或交原始碼。</small>
      </aside>
    `;
  }

  function createPythonRunner(onStatus) {
    let worker;
    let nextId = 1;
    const waiting = new Map();

    const boot = () => {
      worker?.terminate();
      worker = new Worker('python-runner-worker.mjs?v=20260916-2', { type: 'module' });
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
      dispose() {
        worker?.terminate();
        waiting.forEach((request) => clearTimeout(request.timeout));
        waiting.clear();
      }
    };
  }

  const PYTHON_TASKS = global.StudioTaskBank?.python || [];

  function renderPythonStudio(activity, options = {}) {
    const task = randomItem(PYTHON_TASKS);
    if (!task) return '<div class="studio-workspace-empty"><h3>Task bank unavailable</h3><p>Reload the page. The Code Studio task bank did not load.</p></div>';
    const profile = safeProfile();
    const content = `
      <div class="lab-shell execution-studio python-studio" data-python-studio data-task-id="${task.id}">
        <div class="studio-banner">
          <div><p class="eyebrow">真正執行 · browser Python</p><h4>Code Studio</h4><p>寫完整 Python，執行、看錯誤、修正，然後把有效結果交成證據卡。</p></div>
          <div class="runtime-status-stack"><span class="runtime-pill" data-python-status aria-live="polite">Preparing Python…</span><button type="button" class="text-btn" data-python-retry hidden>Retry runtime</button></div>
        </div>
        <div class="task-toolbar">
          <label>練習題<select data-python-task>${PYTHON_TASKS.map((item) => `<option value="${item.id}" ${item.id === task.id ? 'selected' : ''}>${item.id} · ${escapeHtml(item.title)}</option>`).join('')}</select></label>
          <label>公開測試<select data-python-test></select></label>
          <button type="button" class="ghost-btn" data-python-random>換一題</button>
          <button type="button" class="ghost-btn" data-python-reset>重設題目</button>
        </div>
        <article class="studio-brief" data-python-brief><p class="eyebrow">DSE-style coding brief</p><h4>${escapeHtml(task.title)}</h4><p>${escapeHtml(task.brief)}</p><small data-python-test-preview>公開測試資料載入中…</small></article>
        <div class="execution-grid">
          <section class="editor-panel"><div class="editor-heading"><span>main.py</span><span data-python-task-label>${task.id}</span></div><textarea class="code-editor" data-python-code spellcheck="false" aria-label="Python code editor">${escapeHtml(task.starter)}</textarea></section>
          <section class="console-panel"><div class="editor-heading"><span>Output</span><span>local run</span></div><pre class="studio-console" data-python-output aria-live="polite">Python is loading in the background…</pre></section>
        </div>
        <div class="lab-actions studio-actions"><button type="button" class="primary-btn" data-python-run disabled>Run Python</button><button type="button" class="secondary-btn" data-python-check disabled>Check public test</button></div>
        <div data-python-feedback></div>
        ${evidencePanel(profile, 'Code Studio')}
        <aside class="spoken-prompt"><span aria-hidden="true">◌</span><div><strong>停一停，講畀老師／同學聽</strong><p>指出哪一個測試值揭示了你的程式正確或錯誤，然後說明你改了哪一行。</p><small>網站只檢查可重現的輸出；解釋請用剛才的執行證據說出來。</small></div></aside>
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
    const taskSelector = lab.querySelector('[data-python-task]');
    const testSelector = lab.querySelector('[data-python-test]');
    const evidenceButton = lab.querySelector('[data-evidence-download]');
    const retryButton = lab.querySelector('[data-python-retry]');
    let runtimeReady = false;
    let runCount = 0;
    let lastResult = null;
    let runner = null;

    const selectedTask = () => PYTHON_TASKS.find((item) => item.id === taskSelector.value) || PYTHON_TASKS[0];
    const testsFor = (task) => task.tests?.length ? task.tests : [{ label: 'Public test', input: [], output: task.expected || '' }];
    const selectedTest = () => testsFor(selectedTask())[Number(testSelector.value) || 0] || testsFor(selectedTask())[0];
    const updateTestPreview = () => {
      const test = selectedTest();
      const inputText = test.input?.length ? `Input: ${test.input.join(' , ')}` : 'Input: no input lines';
      lab.querySelector('[data-python-test-preview]').textContent = `${test.label || 'Public test'} · ${inputText}`;
      lastResult = null;
      checkButton.disabled = true;
      evidenceButton.disabled = true;
    };
    const showTask = (task) => {
      lab.dataset.taskId = task.id;
      taskSelector.value = task.id;
      testSelector.innerHTML = testsFor(task).map((test, index) => `<option value="${index}">${escapeHtml(test.label || `Public test ${index + 1}`)}</option>`).join('');
      lab.querySelector('[data-python-brief]').innerHTML = `<p class="eyebrow">DSE-style coding brief</p><h4>${escapeHtml(task.title)}</h4><p>${escapeHtml(task.brief)}</p><small data-python-test-preview></small>`;
      lab.querySelector('[data-python-task-label]').textContent = task.id;
      code.value = task.starter;
      output.textContent = 'Starter code loaded. Trace it before running.';
      checkButton.disabled = true;
      evidenceButton.disabled = true;
      lastResult = null;
      updateTestPreview();
    };

    const mountRunner = () => {
      runtimeReady = false;
      runButton.disabled = true;
      checkButton.disabled = true;
      retryButton.hidden = true;
      status.classList.remove('is-ready', 'is-error');
      runner?.dispose?.();
      runner = createPythonRunner((state) => {
      if (state.status === 'loading') {
        status.textContent = 'Preparing Python…';
      } else if (state.status === 'ready') {
        runtimeReady = true;
        status.textContent = 'Python ready · runs locally';
        status.classList.add('is-ready');
        runButton.disabled = false;
        output.textContent = 'Python is ready. Run the starter code or write your own solution.';
      } else if (state.status === 'error') {
        status.textContent = 'Python unavailable';
        status.classList.add('is-error');
        output.textContent = `The Python execution engine could not load. ${state.error || 'Check the network connection, then retry the runtime.'}`;
        retryButton.hidden = false;
      }
      });
    };

    mountRunner();
    showTask(selectedTask());
    lab.querySelectorAll('[data-evidence-name], [data-evidence-class]').forEach((input) => input.addEventListener('change', () => saveProfile(lab)));
    taskSelector.addEventListener('change', () => showTask(selectedTask()));
    testSelector.addEventListener('change', updateTestPreview);
    lab.querySelector('[data-python-random]').addEventListener('click', () => {
      const options = PYTHON_TASKS.filter((item) => item.id !== selectedTask().id);
      showTask(randomItem(options));
    });
    lab.querySelector('[data-python-reset]').addEventListener('click', () => showTask(selectedTask()));
    retryButton.addEventListener('click', () => {
      output.textContent = 'Retrying Python runtime…';
      mountRunner();
    });
    runButton.addEventListener('click', async () => {
      if (!runtimeReady) return;
      runButton.disabled = true;
      checkButton.disabled = true;
      evidenceButton.disabled = true;
      output.textContent = 'Running Python…';
      const test = selectedTest();
      const result = await runner.run(code.value, test.input || []);
      runCount += 1;
      lastResult = { ...result, code: code.value, task: selectedTask(), test, runCount };
      output.textContent = result.ok ? (result.stdout || '(Program completed with no printed output.)') : `Error:\n${result.error}`;
      runButton.disabled = false;
      checkButton.disabled = false;
      evidenceButton.disabled = false;
      lab.querySelector('[data-python-feedback]').innerHTML = result.ok
        ? feedback('info', 'Run recorded.', 'Now compare this public test output with the brief. A clean run is not yet proof that the output is correct.', 'Use “Check public test”, then export the evidence card when ready.')
        : feedback('bad', 'Python stopped with an error.', result.error || 'Read the line named in the message, then repair one thing at a time.', 'Run again after the smallest sensible repair.');
    });
    checkButton.addEventListener('click', () => {
      if (!lastResult) return;
      const task = selectedTask();
      const test = selectedTest();
      const correct = lastResult.ok && lastResult.test === test && normaliseOutput(lastResult.stdout) === normaliseOutput(test.output);
      lab.querySelector('[data-python-feedback]').innerHTML = correct
        ? feedback('good', 'Public test matches.', `The expected output is ${test.output}. Keep the code and the output visible in your evidence card.`, 'Say which test value you would change to test a boundary or an error case.')
        : feedback('bad', 'The public test does not yet match.', `Expected: ${test.output}  |  Your output: ${normaliseOutput(lastResult.stdout) || 'no output'}`, 'Trace one variable or condition at a time, then run again.');
      lastResult.checked = correct;
    });
    evidenceButton.addEventListener('click', () => {
      if (!lastResult) return;
      makeEvidenceCard(lab, {
        studio: 'Code Studio',
        taskId: selectedTask().id,
        code: lastResult.code,
        output: lastResult.ok ? lastResult.stdout : `Error: ${lastResult.error}`,
        ok: Boolean(lastResult.ok && lastResult.checked),
        runCount
      });
    });
    const dispose = () => runner.dispose();
    global.addEventListener('pagehide', dispose, { once: true });
    return dispose;
  }

  function loadSqlLibrary(forceReload = false) {
    if (!forceReload && sqlLibraryPromise) return sqlLibraryPromise;
    const promise = new Promise((resolve, reject) => {
      if (typeof global.initSqlJs === 'function') {
        resolve(global.initSqlJs);
        return;
      }
      const script = document.createElement('script');
      script.src = `${SQL_ASSET_ROOT}sql-wasm.js`;
      script.async = true;
      script.onload = () => typeof global.initSqlJs === 'function' ? resolve(global.initSqlJs) : reject(new Error('SQL library did not initialise.'));
      script.onerror = () => reject(new Error('Could not load the SQL runtime. Check your internet connection and reload.'));
      document.head.appendChild(script);
    }).then((initSqlJs) => initSqlJs({ locateFile: (file) => `${SQL_ASSET_ROOT}${file}` }));
    if (!forceReload) sqlLibraryPromise = promise;
    return promise;
  }

  const SEED_SQL = global.StudioTaskBank?.seedSql || '';
  const SQL_TASKS = global.StudioTaskBank?.sql || [];

  function matchesSqlCheck(result, checker) {
    const set = result?.[0];
    return Boolean(set
      && JSON.stringify(set.columns.map(normaliseCell)) === JSON.stringify(checker.columns.map(normaliseCell))
      && JSON.stringify(set.values.map(row => row.map(normaliseCell))) === JSON.stringify(checker.rows.map(row => row.map(normaliseCell))));
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
    const task = randomItem(SQL_TASKS);
    if (!task) return '<div class="studio-workspace-empty"><h3>Task bank unavailable</h3><p>Reload the page. The SQL Studio task bank did not load.</p></div>';
    const profile = safeProfile();
    const content = `
      <div class="lab-shell execution-studio sql-studio" data-sql-studio data-task-id="${task.id}">
        <div class="studio-banner"><div><p class="eyebrow">真正執行 · in-memory SQLite</p><h4>SQL Studio</h4><p>直接寫 SQL，看看查詢結果或資料變更；每次重設都回到同一份練習資料。</p></div><div class="runtime-status-stack"><span class="runtime-pill" data-sql-status aria-live="polite">Preparing SQLite…</span><button type="button" class="text-btn" data-sql-retry hidden>Retry runtime</button></div></div>
        <div class="task-toolbar"><label>練習題<select data-sql-task>${SQL_TASKS.map((item) => `<option value="${item.id}" ${item.id === task.id ? 'selected' : ''}>${item.id} · ${escapeHtml(item.title)}</option>`).join('')}</select></label><button type="button" class="ghost-btn" data-sql-random>換一題</button><button type="button" class="ghost-btn" data-sql-reset>重設資料庫</button></div>
        <article class="studio-brief" data-sql-brief><p class="eyebrow">DSE-style database brief</p><h4>${escapeHtml(task.title)}</h4><p>${escapeHtml(task.brief)}</p><small>可執行 SELECT、INSERT、UPDATE、DELETE 及 CREATE 等 SQL；全部資料只會留在此瀏覽器記憶體。</small></article>
        <div class="execution-grid"><section class="editor-panel"><div class="editor-heading"><span>practice.sql</span><span data-sql-task-label>${task.id}</span></div><textarea class="code-editor sql-code-editor" data-sql-code spellcheck="false" aria-label="SQL code editor">${escapeHtml(task.starter)}</textarea></section><section class="console-panel"><div class="editor-heading"><span>Result set</span><span>temporary database</span></div><div class="sql-console" data-sql-output aria-live="polite">SQLite is loading in the background…</div></section></div>
        <div class="schema-strip"><strong>Schema</strong><code>Student(StudentID TEXT PRIMARY KEY, Name TEXT, Class TEXT, Mark INTEGER)</code><button type="button" class="text-btn" data-sql-show-seed>View start data</button></div>
        <div class="lab-actions studio-actions"><button type="button" class="primary-btn" data-sql-run disabled>Run SQL</button><button type="button" class="secondary-btn" data-sql-check disabled>Check task result</button></div>
        <div data-sql-feedback></div>
        ${evidencePanel(profile, 'SQL Studio')}
        <aside class="spoken-prompt"><span aria-hidden="true">◌</span><div><strong>停一停，講畀老師／同學聽</strong><p>講出 WHERE 如何限制了記錄，或說明你為何先 SELECT 再相信 UPDATE／INSERT 已經正確。</p><small>系統可檢查資料狀態，但不會代替你判斷題目的語意和風險。</small></div></aside>
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
    const taskSelector = lab.querySelector('[data-sql-task]');
    const retryButton = lab.querySelector('[data-sql-retry]');
    let SQL;
    let db;
    let runCount = 0;
    let lastResult = null;

    const selectedTask = () => SQL_TASKS.find((item) => item.id === taskSelector.value) || SQL_TASKS[0];
    const resetDatabase = () => {
      db?.close();
      db = new SQL.Database();
      db.run(SEED_SQL);
    };
    const showTask = (task, reset = true) => {
      taskSelector.value = task.id;
      lab.dataset.taskId = task.id;
      lab.querySelector('[data-sql-brief]').innerHTML = `<p class="eyebrow">DSE-style database brief</p><h4>${escapeHtml(task.title)}</h4><p>${escapeHtml(task.brief)}</p><small>可執行 SELECT、INSERT、UPDATE、DELETE 及 CREATE 等 SQL；全部資料只會留在此瀏覽器記憶體。</small>`;
      lab.querySelector('[data-sql-task-label]').textContent = task.id;
      code.value = task.starter;
      output.innerHTML = '<p class="console-muted">Starter SQL loaded. Read the schema and predict the result before running.</p>';
      lastResult = null;
      checkButton.disabled = true;
      evidenceButton.disabled = true;
      if (reset && SQL) resetDatabase();
    };

    const mountSqlRuntime = () => {
      SQL = null;
      db?.close();
      db = null;
      runButton.disabled = true;
      checkButton.disabled = true;
      retryButton.hidden = true;
      status.classList.remove('is-ready', 'is-error');
      status.textContent = 'Preparing SQLite…';
      output.innerHTML = '<p class="console-muted">Preparing the SQL execution engine…</p>';
      loadSqlLibrary(Boolean(retryButton.dataset.retried)).then((library) => {
        SQL = library;
        resetDatabase();
        status.textContent = 'SQLite ready · runs locally';
        status.classList.add('is-ready');
        runButton.disabled = false;
        output.innerHTML = '<p class="console-muted">SQLite is ready. Run the starter SQL or write your own solution.</p>';
      }).catch((error) => {
        status.textContent = 'SQLite unavailable';
        status.classList.add('is-error');
        output.innerHTML = `<p class="console-error">The SQL execution engine could not load. ${escapeHtml(error.message)}</p>`;
        retryButton.hidden = false;
      });
    };
    lab.querySelectorAll('[data-evidence-name], [data-evidence-class]').forEach((input) => input.addEventListener('change', () => saveProfile(lab)));
    mountSqlRuntime();
    taskSelector.addEventListener('change', () => showTask(selectedTask()));
    lab.querySelector('[data-sql-random]').addEventListener('click', () => showTask(randomItem(SQL_TASKS.filter((task) => task.id !== selectedTask().id))));
    retryButton.addEventListener('click', () => {
      retryButton.dataset.retried = 'true';
      mountSqlRuntime();
    });
    lab.querySelector('[data-sql-reset]').addEventListener('click', () => {
      if (!SQL) return;
      resetDatabase();
      lastResult = null;
      checkButton.disabled = true;
      evidenceButton.disabled = true;
      output.innerHTML = '<p class="console-muted">Practice database reset to its starting records.</p>';
      lab.querySelector('[data-sql-feedback]').innerHTML = feedback('info', 'Database reset.', 'All practice-only changes have been removed.', 'Run your SQL again and inspect the result set.');
    });
    lab.querySelector('[data-sql-show-seed]').addEventListener('click', () => {
      if (!db) return;
      output.innerHTML = sqlTable(db.exec('SELECT * FROM Student ORDER BY StudentID'));
    });
    runButton.addEventListener('click', () => {
      if (!db) return;
      runButton.disabled = true;
      try {
        const resultSets = db.exec(code.value);
        runCount += 1;
        lastResult = { ok: true, code: code.value, output: output.textContent, resultSets, task: selectedTask(), runCount };
        output.innerHTML = sqlTable(resultSets);
        lastResult.output = output.innerText;
        checkButton.disabled = false;
        evidenceButton.disabled = false;
        lab.querySelector('[data-sql-feedback]').innerHTML = feedback('info', 'SQL executed.', 'Read the result set or add a SELECT statement to verify a changed record.', 'Use “Check task result” for a deterministic check of this task’s final database state.');
      } catch (error) {
        runCount += 1;
        lastResult = { ok: false, code: code.value, error: error.message || String(error), task: selectedTask(), runCount };
        output.innerHTML = `<pre class="console-error">SQL error:\n${escapeHtml(lastResult.error)}</pre>`;
        checkButton.disabled = false;
        evidenceButton.disabled = false;
        lab.querySelector('[data-sql-feedback]').innerHTML = feedback('bad', 'SQL could not run.', lastResult.error, 'Repair one clause or punctuation mark, then run again.');
      } finally {
        runButton.disabled = false;
      }
    });
    checkButton.addEventListener('click', () => {
      if (!lastResult || !db) return;
      const correct = lastResult.ok && verifySqlTask(selectedTask(), db, lastResult);
      lastResult.checked = correct;
      lab.querySelector('[data-sql-feedback]').innerHTML = correct
        ? feedback('good', 'Task result confirmed.', 'The temporary database now contains the requested result. Keep the SQL and result set in the evidence card.', 'Explain which clause made the action safe or which fields prove the change.')
        : feedback('bad', 'Task result is not there yet.', 'The statement may be valid SQL, but the current database state does not yet match the task brief.', 'Reset if needed, then compare the required fields, condition and values carefully.');
    });
    evidenceButton.addEventListener('click', () => {
      if (!lastResult) return;
      makeEvidenceCard(lab, {
        studio: 'SQL Studio',
        taskId: selectedTask().id,
        code: lastResult.code,
        output: lastResult.ok ? lastResult.output : `Error: ${lastResult.error}`,
        ok: Boolean(lastResult.ok && lastResult.checked),
        runCount
      });
    });
    const dispose = () => db?.close();
    global.addEventListener('pagehide', dispose, { once: true });
    return dispose;
  }

  function mountStandaloneStudio(stage, studio) {
    if (!stage) return;
    stage._studioCleanup?.();
    if (studio === 'code') {
      stage.innerHTML = renderPythonStudio(null, { standalone: true });
      stage._studioCleanup = bindPythonStudio(stage);
      return;
    }
    if (studio === 'sql') {
      stage.innerHTML = renderSqlStudio(null, { standalone: true });
      stage._studioCleanup = bindSqlStudio(stage);
    }
  }

  function register() {
    if (!global.ActivityLabs?.register) return;
    global.ActivityLabs.register('pythonCodeStudio', renderPythonStudio, bindPythonStudio);
    global.ActivityLabs.register('sqlCodeStudio', renderSqlStudio, bindSqlStudio);
    global.ActivityLabs.mountStandaloneStudio = mountStandaloneStudio;
    if (typeof global.updateTopicLabBadges === 'function') global.updateTopicLabBadges();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', register);
  else register();
})(window);
