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
        <button type="button" class="secondary-btn" data-evidence-download disabled>下載 ${escapeHtml(studio)} 證據卡 PNG</button>
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
      worker = new Worker('python-runner-worker.mjs', { type: 'module' });
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
      run(code) {
        const id = nextId++;
        return new Promise((resolve) => {
          const timeout = setTimeout(() => {
            if (!waiting.has(id)) return;
            waiting.delete(id);
            boot();
            resolve({ ok: false, error: 'Execution stopped after 12 seconds. Check for an endless loop, then run again.' });
          }, 12000);
          waiting.set(id, { resolve, timeout });
          worker.postMessage({ type: 'run', id, code });
        });
      },
      dispose() {
        worker?.terminate();
        waiting.forEach((request) => clearTimeout(request.timeout));
        waiting.clear();
      }
    };
  }

  const PYTHON_TASKS = [
    {
      id: 'D4-PY-01',
      title: 'Pass counter',
      brief: 'The list below stores five test marks. Write a loop to count how many marks are at least 50, then print the final count.',
      starter: `marks = [42, 50, 68, 39, 91]\ncount = 0\n\n# Write your loop here.\n\nprint(count)`,
      expected: '3'
    },
    {
      id: 'D4-PY-02',
      title: 'Text-to-number total',
      brief: 'priceText and quantityText are strings. Convert both values so that the program prints the numerical total.',
      starter: `priceText = "12"\nquantityText = "3"\n\n# Convert the values and calculate total.\n\nprint(total)`,
      expected: '36'
    },
    {
      id: 'D4-PY-03',
      title: 'Boundary result',
      brief: 'Set result to "Pass" when mark is 50 or above; otherwise set it to "Retry". Print result for the boundary value supplied.',
      starter: `mark = 50\n\n# Use IF ... ELSE here.\n\nprint(result)`,
      expected: 'Pass'
    },
    {
      id: 'D4-PY-04',
      title: 'Highest mark',
      brief: 'Traverse the supplied list and print its highest mark. Do not change the values in the list.',
      starter: `marks = [46, 88, 67, 91, 52]\n\n# Start with a sensible highest value, then update it in a loop.\n\nprint(highest)`,
      expected: '91'
    }
  ];

  function renderPythonStudio(activity) {
    const task = randomItem(PYTHON_TASKS);
    const profile = safeProfile();
    return shell(activity, `
      <div class="lab-shell execution-studio python-studio" data-python-studio data-task-id="${task.id}">
        <div class="studio-banner">
          <div><p class="eyebrow">真正執行 · browser Python</p><h4>Code Studio</h4><p>寫完整 Python，執行、看錯誤、修正，然後把有效結果交成證據卡。</p></div>
          <span class="runtime-pill" data-python-status aria-live="polite">Preparing Python…</span>
        </div>
        <div class="task-toolbar">
          <label>練習題<select data-python-task>${PYTHON_TASKS.map((item) => `<option value="${item.id}" ${item.id === task.id ? 'selected' : ''}>${item.id} · ${escapeHtml(item.title)}</option>`).join('')}</select></label>
          <button type="button" class="ghost-btn" data-python-random>換一題</button>
          <button type="button" class="ghost-btn" data-python-reset>重設題目</button>
        </div>
        <article class="studio-brief" data-python-brief><p class="eyebrow">DSE-style coding brief</p><h4>${escapeHtml(task.title)}</h4><p>${escapeHtml(task.brief)}</p><small>先用題目給定資料測試。這個版本刻意不提供 input() 對話框，以免瀏覽器程式停在等待輸入。</small></article>
        <div class="execution-grid">
          <section class="editor-panel"><div class="editor-heading"><span>main.py</span><span data-python-task-label>${task.id}</span></div><textarea class="code-editor" data-python-code spellcheck="false" aria-label="Python code editor">${escapeHtml(task.starter)}</textarea></section>
          <section class="console-panel"><div class="editor-heading"><span>Output</span><span>local run</span></div><pre class="studio-console" data-python-output aria-live="polite">Python is loading in the background…</pre></section>
        </div>
        <div class="lab-actions studio-actions"><button type="button" class="primary-btn" data-python-run disabled>Run Python</button><button type="button" class="secondary-btn" data-python-check disabled>Check sample result</button></div>
        <div data-python-feedback></div>
        ${evidencePanel(profile, 'Code Studio')}
        <aside class="spoken-prompt"><span aria-hidden="true">◌</span><div><strong>停一停，講畀老師／同學聽</strong><p>指出哪一個測試值揭示了你的程式正確或錯誤，然後說明你改了哪一行。</p><small>網站只檢查可重現的輸出；解釋請用剛才的執行證據說出來。</small></div></aside>
      </div>
    `);
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
    const evidenceButton = lab.querySelector('[data-evidence-download]');
    let runtimeReady = false;
    let runCount = 0;
    let lastResult = null;

    const selectedTask = () => PYTHON_TASKS.find((item) => item.id === taskSelector.value) || PYTHON_TASKS[0];
    const showTask = (task) => {
      lab.dataset.taskId = task.id;
      taskSelector.value = task.id;
      lab.querySelector('[data-python-brief]').innerHTML = `<p class="eyebrow">DSE-style coding brief</p><h4>${escapeHtml(task.title)}</h4><p>${escapeHtml(task.brief)}</p><small>先用題目給定資料測試。這個版本刻意不提供 input() 對話框，以免瀏覽器程式停在等待輸入。</small>`;
      lab.querySelector('[data-python-task-label]').textContent = task.id;
      code.value = task.starter;
      output.textContent = 'Starter code loaded. Trace it before running.';
      checkButton.disabled = true;
      evidenceButton.disabled = true;
      lastResult = null;
    };

    const runner = createPythonRunner((state) => {
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
        output.textContent = `Could not prepare Python: ${state.error || 'Check your internet connection and reload.'}`;
      }
    });

    lab.querySelectorAll('[data-evidence-name], [data-evidence-class]').forEach((input) => input.addEventListener('change', () => saveProfile(lab)));
    taskSelector.addEventListener('change', () => showTask(selectedTask()));
    lab.querySelector('[data-python-random]').addEventListener('click', () => {
      const options = PYTHON_TASKS.filter((item) => item.id !== selectedTask().id);
      showTask(randomItem(options));
    });
    lab.querySelector('[data-python-reset]').addEventListener('click', () => showTask(selectedTask()));
    runButton.addEventListener('click', async () => {
      if (!runtimeReady) return;
      runButton.disabled = true;
      checkButton.disabled = true;
      evidenceButton.disabled = true;
      output.textContent = 'Running Python…';
      const result = await runner.run(code.value);
      runCount += 1;
      lastResult = { ...result, code: code.value, task: selectedTask(), runCount };
      output.textContent = result.ok ? (result.stdout || '(Program completed with no printed output.)') : `Error:\n${result.error}`;
      runButton.disabled = false;
      checkButton.disabled = false;
      evidenceButton.disabled = false;
      lab.querySelector('[data-python-feedback]').innerHTML = result.ok
        ? feedback('info', 'Run recorded.', 'Now compare the output with the brief. A clean run is not yet proof that the output is correct.', 'Use “Check sample result”, then export the evidence card when ready.')
        : feedback('bad', 'Python stopped with an error.', result.error || 'Read the line named in the message, then repair one thing at a time.', 'Run again after the smallest sensible repair.');
    });
    checkButton.addEventListener('click', () => {
      if (!lastResult) return;
      const task = selectedTask();
      const correct = lastResult.ok && normaliseOutput(lastResult.stdout) === task.expected;
      lab.querySelector('[data-python-feedback]').innerHTML = correct
        ? feedback('good', 'Sample output matches.', `The expected output is ${task.expected}. Keep the code and the output visible in your evidence card.`, 'Say which test value you would change to test a boundary or an error case.')
        : feedback('bad', 'The sample result does not yet match.', `Expected: ${task.expected}  |  Your output: ${normaliseOutput(lastResult.stdout) || 'no output'}`, 'Trace one variable or condition at a time, then run again.');
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
    global.addEventListener('pagehide', () => runner.dispose(), { once: true });
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
      script.onerror = () => reject(new Error('Could not load the SQL runtime. Check your internet connection and reload.'));
      document.head.appendChild(script);
    }).then((initSqlJs) => initSqlJs({ locateFile: (file) => `${SQL_ASSET_ROOT}${file}` }));
    return sqlLibraryPromise;
  }

  const SEED_SQL = `
CREATE TABLE Student (
  StudentID TEXT PRIMARY KEY,
  Name TEXT NOT NULL,
  Class TEXT NOT NULL,
  Mark INTEGER CHECK (Mark BETWEEN 0 AND 100)
);
INSERT INTO Student VALUES
  ('S001', 'Chan Tai Man', '5A', 42),
  ('S002', 'Lee Ka Ming', '5A', 50),
  ('S003', 'Wong Mei', '5A', 68),
  ('S004', 'Ho Ying', '5A', 91),
  ('S005', 'Ng Chi', '5B', 75);
`;

  const SQL_TASKS = [
    {
      id: 'EA1-SQL-01',
      title: 'Filter passing students',
      brief: 'Display StudentID, Name and Mark for 5A students who pass (50 or above), with the highest mark first.',
      starter: `SELECT StudentID, Name, Mark\nFROM Student\nWHERE Class = '5A'\n-- add the pass condition\n-- add the requested ordering\n;`,
      verify(_db, lastResult) {
        const result = lastResult.resultSets?.[0];
        return result?.columns.join(',') === 'StudentID,Name,Mark'
          && result.values.map((row) => row.join(',')).join('|') === 'S004,Ho Ying,91|S003,Wong Mei,68|S002,Lee Ka Ming,50';
      }
    },
    {
      id: 'EA1-SQL-02',
      title: 'Update one record safely',
      brief: 'Correct Wong Mei (S003) to 74. Use a WHERE condition so that no other student is changed. Then SELECT S003 to show the changed record.',
      starter: `UPDATE Student\nSET Mark = 74\n-- identify Wong Mei safely\n;\n\nSELECT StudentID, Name, Mark\nFROM Student\nWHERE StudentID = 'S003';`,
      verify(db) {
        const result = db.exec("SELECT StudentID, Mark FROM Student ORDER BY StudentID");
        return result[0]?.values.map((row) => row.join(',')).join('|') === 'S001,42|S002,50|S003,74|S004,91|S005,75';
      }
    },
    {
      id: 'EA1-SQL-03',
      title: 'Insert then check',
      brief: 'Add S006, Ng Mei, 5B, 82 to Student. Then use SELECT to show the new record.',
      starter: `INSERT INTO Student (StudentID, Name, Class, Mark)\nVALUES ('S006', 'Ng Mei', '5B', );\n\nSELECT *\nFROM Student\nWHERE StudentID = 'S006';`,
      verify(db) {
        const result = db.exec("SELECT Name, Class, Mark FROM Student WHERE StudentID = 'S006'");
        const row = result[0]?.values[0];
        return Boolean(row && row[0] === 'Ng Mei' && row[1] === '5B' && row[2] === 82);
      }
    }
  ];

  function sqlTable(resultSets) {
    if (!resultSets?.length) return '<p class="console-muted">Statement completed. Add a SELECT statement if you need to show the changed data.</p>';
    return resultSets.map((set) => `
      <div class="sql-result-table"><table><thead><tr>${set.columns.map((column) => `<th>${escapeHtml(column)}</th>`).join('')}</tr></thead>
      <tbody>${set.values.map((row) => `<tr>${row.map((value) => `<td>${escapeHtml(value)}</td>`).join('')}</tr>`).join('') || '<tr><td>No rows returned.</td></tr>'}</tbody></table></div>
    `).join('');
  }

  function renderSqlStudio(activity) {
    const task = randomItem(SQL_TASKS);
    const profile = safeProfile();
    return shell(activity, `
      <div class="lab-shell execution-studio sql-studio" data-sql-studio data-task-id="${task.id}">
        <div class="studio-banner"><div><p class="eyebrow">真正執行 · in-memory SQLite</p><h4>SQL Studio</h4><p>直接寫 SQL，看看查詢結果或資料變更；每次重設都回到同一份練習資料。</p></div><span class="runtime-pill" data-sql-status aria-live="polite">Preparing SQLite…</span></div>
        <div class="task-toolbar"><label>練習題<select data-sql-task>${SQL_TASKS.map((item) => `<option value="${item.id}" ${item.id === task.id ? 'selected' : ''}>${item.id} · ${escapeHtml(item.title)}</option>`).join('')}</select></label><button type="button" class="ghost-btn" data-sql-random>換一題</button><button type="button" class="ghost-btn" data-sql-reset>重設資料庫</button></div>
        <article class="studio-brief" data-sql-brief><p class="eyebrow">DSE-style database brief</p><h4>${escapeHtml(task.title)}</h4><p>${escapeHtml(task.brief)}</p><small>可執行 SELECT、INSERT、UPDATE、DELETE 及 CREATE 等 SQL；全部資料只會留在此瀏覽器記憶體。</small></article>
        <div class="execution-grid"><section class="editor-panel"><div class="editor-heading"><span>practice.sql</span><span data-sql-task-label>${task.id}</span></div><textarea class="code-editor sql-code-editor" data-sql-code spellcheck="false" aria-label="SQL code editor">${escapeHtml(task.starter)}</textarea></section><section class="console-panel"><div class="editor-heading"><span>Result set</span><span>temporary database</span></div><div class="sql-console" data-sql-output aria-live="polite">SQLite is loading in the background…</div></section></div>
        <div class="schema-strip"><strong>Schema</strong><code>Student(StudentID TEXT PRIMARY KEY, Name TEXT, Class TEXT, Mark INTEGER)</code><button type="button" class="text-btn" data-sql-show-seed>View start data</button></div>
        <div class="lab-actions studio-actions"><button type="button" class="primary-btn" data-sql-run disabled>Run SQL</button><button type="button" class="secondary-btn" data-sql-check disabled>Check task result</button></div>
        <div data-sql-feedback></div>
        ${evidencePanel(profile, 'SQL Studio')}
        <aside class="spoken-prompt"><span aria-hidden="true">◌</span><div><strong>停一停，講畀老師／同學聽</strong><p>講出 WHERE 如何限制了記錄，或說明你為何先 SELECT 再相信 UPDATE／INSERT 已經正確。</p><small>系統可檢查資料狀態，但不會代替你判斷題目的語意和風險。</small></div></aside>
      </div>
    `);
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

    lab.querySelectorAll('[data-evidence-name], [data-evidence-class]').forEach((input) => input.addEventListener('change', () => saveProfile(lab)));
    loadSqlLibrary().then((library) => {
      SQL = library;
      resetDatabase();
      status.textContent = 'SQLite ready · runs locally';
      status.classList.add('is-ready');
      runButton.disabled = false;
      output.innerHTML = '<p class="console-muted">SQLite is ready. Run the starter SQL or write your own solution.</p>';
    }).catch((error) => {
      status.textContent = 'SQLite unavailable';
      status.classList.add('is-error');
      output.innerHTML = `<p class="console-error">${escapeHtml(error.message)}</p>`;
    });
    taskSelector.addEventListener('change', () => showTask(selectedTask()));
    lab.querySelector('[data-sql-random]').addEventListener('click', () => showTask(randomItem(SQL_TASKS.filter((task) => task.id !== selectedTask().id))));
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
      const correct = lastResult.ok && selectedTask().verify(db, lastResult);
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
    global.addEventListener('pagehide', () => db?.close(), { once: true });
  }

  function register() {
    if (!global.ActivityLabs?.register) return;
    global.ActivityLabs.register('pythonCodeStudio', renderPythonStudio, bindPythonStudio);
    global.ActivityLabs.register('sqlCodeStudio', renderSqlStudio, bindSqlStudio);
    if (typeof global.updateTopicLabBadges === 'function') global.updateTopicLabBadges();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', register);
  else register();
})(window);
