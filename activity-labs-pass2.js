/**
 * Pass 2 P0 labs: D1, A6.4, EA1, A1, C6, B2
 * Registered through ActivityLabs.register — does not replace Phase 1/2 modes.
 */
(function (global) {
  function escapeHtml(value) {
    if (typeof global.escapeHtml === 'function') return global.escapeHtml(value);
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function shuffle(list) {
    if (global.CheckpointEngine?.shuffle) return global.CheckpointEngine.shuffle(list);
    return [...list].sort(() => Math.random() - 0.5);
  }

  function shell(activity, body) {
    return global.makeActivityShell(activity, body);
  }

  function feedbackBox(tone, title, why, concept, next) {
    return `
      <div class="lab-feedback ${tone}" role="status">
        <strong>${escapeHtml(title)}</strong>
        <p>${escapeHtml(why)}</p>
        ${concept ? `<p class="checkpoint-concept"><span>Correct concept</span>${escapeHtml(concept)}</p>` : ''}
        ${next ? `<p class="checkpoint-next"><span>Next</span>${escapeHtml(next)}</p>` : ''}
      </div>
    `;
  }

  function mountDse(node, chapter, lead) {
    if (!node || !global.CheckpointEngine) return;
    global.CheckpointEngine.mount(node, {
      title: 'DSE transfer',
      lead: lead,
      count: 3,
      filter: { chapter }
    });
  }

  function stageNav(lab, total) {
    lab.querySelectorAll('[data-lab-goto]').forEach((button) => {
      button.addEventListener('click', () => {
        const target = Number(button.dataset.labGoto);
        lab.querySelectorAll('[data-lab-stage]').forEach((panel) => {
          panel.hidden = Number(panel.dataset.labStage) !== target;
        });
        lab.querySelectorAll('[data-lab-goto]').forEach((btn) => {
          btn.classList.toggle('is-active', Number(btn.dataset.labGoto) === target);
        });
      });
    });
    lab.querySelectorAll('[data-lab-stage]').forEach((panel) => {
      panel.hidden = Number(panel.dataset.labStage) !== 1;
    });
  }

  /* ---------- A1 IPO Sorter ---------- */
  const A1_ITEMS = [
    { text: 'Student marks typed into a marksheet', zone: 'input', why: 'Marks enter the system before any calculation.' },
    { text: 'Average = (test1 + test2 + test3) / 3', zone: 'process', why: 'A formula transforms data into a new value.' },
    { text: 'Report card showing “Pass”', zone: 'output', why: 'Processed information is presented to a person.' },
    { text: 'Marks saved in the school server', zone: 'storage', why: 'Storage keeps data or results for later use.' },
    { text: 'Barcode of a library book scanned', zone: 'input', why: 'Scanning captures data as input.' },
    { text: 'Sort overdue books by due date', zone: 'process', why: 'Sorting is a processing action.' },
    { text: 'Screen message: “Book not found”', zone: 'output', why: 'A message shown to the user is output / feedback.' },
    { text: 'Borrowing record kept in the database', zone: 'storage', why: 'The database stores records persistently.' }
  ];

  function renderA1(activity) {
    const items = shuffle(A1_ITEMS).slice(0, 6);
    return shell(activity, `
      <div class="lab-shell pass2-lab a1-lab" data-a1-lab>
        <div class="lab-stage-tabs" role="tablist">
          <button type="button" class="is-active" data-lab-goto="1">1 · Sort IPO</button>
          <button type="button" data-lab-goto="2">2 · Name the verb</button>
          <button type="button" data-lab-goto="3">3 · Stretch</button>
        </div>
        <section data-lab-stage="1">
          <p class="lab-help">Low (≤5 min): drag each card into Input, Process, Output or Storage.</p>
          <div class="a1-bank" data-a1-bank>
            ${items.map((item, index) => `
              <button type="button" class="a1-chip" draggable="true" data-a1-item="${index}" data-zone="${escapeHtml(item.zone)}" data-why="${escapeHtml(item.why)}">
                ${escapeHtml(item.text)}
              </button>
            `).join('')}
          </div>
          <div class="a1-zones">
            ${['input', 'process', 'output', 'storage'].map((zone) => `
              <div class="a1-zone" data-a1-zone="${zone}">
                <strong>${zone[0].toUpperCase()}${zone.slice(1)}</strong>
                <div class="a1-zone-drop" data-a1-drop="${zone}"></div>
              </div>
            `).join('')}
          </div>
          <button type="button" class="primary-btn" data-a1-check="1">Check sorting</button>
          <div data-a1-feedback></div>
        </section>
        <section data-lab-stage="2" hidden>
          <p class="lab-help">Mid: choose the processing verb that turns data into information.</p>
          <p data-a1-mid-prompt></p>
          <div class="lab-option-row" data-a1-mid-options></div>
          <div data-a1-feedback-2></div>
        </section>
        <section data-lab-stage="3" hidden>
          <p class="lab-help">High: one school scenario — name IPO + storage, then one literacy check.</p>
          <article class="lab-scene" data-a1-high-scene></article>
          <label>Input <input data-a1-high-input placeholder="What data enters?"></label>
          <label>Process <input data-a1-high-process placeholder="What action?"></label>
          <label>Output <input data-a1-high-output placeholder="What is shown?"></label>
          <label>Storage <input data-a1-high-storage placeholder="What is kept?"></label>
          <button type="button" class="primary-btn" data-a1-check="3">Check stretch</button>
          <div data-a1-feedback-3></div>
          <div data-a1-dse></div>
        </section>
      </div>
    `);
  }

  function bindA1(stage) {
    const lab = stage.querySelector('[data-a1-lab]');
    if (!lab) return;
    stageNav(lab, 3);
    let selected = null;

    lab.querySelectorAll('[data-a1-item]').forEach((chip) => {
      chip.addEventListener('click', () => {
        selected = chip;
        lab.querySelectorAll('[data-a1-item]').forEach((c) => c.classList.remove('is-selected'));
        chip.classList.add('is-selected');
      });
    });
    lab.querySelectorAll('[data-a1-drop]').forEach((drop) => {
      drop.addEventListener('click', () => {
        if (!selected) return;
        drop.appendChild(selected);
        selected.classList.remove('is-selected');
        selected = null;
      });
    });

    lab.querySelector('[data-a1-check="1"]').addEventListener('click', () => {
      let correct = 0;
      let total = 0;
      lab.querySelectorAll('[data-a1-drop]').forEach((drop) => {
        drop.querySelectorAll('[data-a1-item]').forEach((chip) => {
          total += 1;
          if (chip.dataset.zone === drop.dataset.a1Drop) correct += 1;
        });
      });
      const left = lab.querySelectorAll('[data-a1-bank] [data-a1-item]').length;
      const feedback = lab.querySelector('[data-a1-feedback]');
      if (left) {
        feedback.innerHTML = feedbackBox('info', 'Place every card first', 'Each fact belongs in exactly one IPO/storage box.', '', 'Click a card, then click a zone.');
        return;
      }
      if (correct === total) {
        feedback.innerHTML = feedbackBox('good', 'IPO sorted', 'You separated capture, transform, present and keep.', 'Input → Process → Output, with Storage holding data for later.', 'Open stage 2.');
        lab.querySelector('[data-lab-goto="2"]').click();
        setupMid();
      } else {
        feedback.innerHTML = feedbackBox('bad', `${correct}/${total} correct`, 'Name the action: capture, transform, present, or keep.', 'Processing is a verb. Output is what a person sees.', 'Move the misplaced cards and check again.');
      }
    });

    function setupMid() {
      const prompt = lab.querySelector('[data-a1-mid-prompt]');
      const options = lab.querySelector('[data-a1-mid-options]');
      const cases = [
        { q: 'Raw temperatures 28, 31, 29 become “class average 29.3°C”. What was the processing?', options: ['Calculate the mean', 'Print the report card', 'Save the file name'], answer: 0, concept: 'Processing is the calculation that creates meaning.' },
        { q: 'Octopus tap records fare deduction on screen. What is the output?', options: ['The tap as input', 'The fare message on the reader', 'The backend database alone'], answer: 1, concept: 'Output presents information to the user.' }
      ];
      const scene = pick(cases);
      prompt.textContent = scene.q;
      options.innerHTML = scene.options.map((text, index) => `
        <button type="button" data-a1-mid="${index}">${escapeHtml(text)}</button>
      `).join('');
      options.querySelectorAll('[data-a1-mid]').forEach((button) => {
        button.addEventListener('click', () => {
          const ok = Number(button.dataset.a1Mid) === scene.answer;
          lab.querySelector('[data-a1-feedback-2]').innerHTML = feedbackBox(
            ok ? 'good' : 'bad',
            ok ? 'Transfer secured' : 'Not yet',
            ok ? 'You named the IPO role, not a vague “computer processes data”.' : 'Ask: is this capture, transform, present, or keep?',
            scene.concept,
            ok ? 'Open stage 3 for a stretch scenario.' : 'Try the other option.'
          );
          if (ok) {
            lab.querySelector('[data-lab-goto="3"]').click();
            setupHigh();
          }
        });
      });
    }

    function setupHigh() {
      const scene = pick([
        {
          story: 'eClass shows “Assignment submitted” after a student uploads a PDF. The file is kept on the school server.',
          input: ['pdf', 'upload', 'file', 'assignment'],
          process: ['save', 'store', 'record', 'upload'],
          output: ['submitted', 'message', 'shown', 'confirm'],
          storage: ['server', 'database', 'disk', 'storage']
        },
        {
          story: 'A canteen tablet reads an Octopus card, subtracts $12, shows the new balance, and keeps the transaction log.',
          input: ['octopus', 'card', 'tap'],
          process: ['subtract', 'deduct', 'calculate'],
          output: ['balance', 'screen', 'show'],
          storage: ['log', 'transaction', 'record', 'server']
        }
      ]);
      lab.querySelector('[data-a1-high-scene]').textContent = scene.story;
      lab.querySelector('[data-a1-check="3"]').onclick = () => {
        const values = {
          input: lab.querySelector('[data-a1-high-input]').value.toLowerCase(),
          process: lab.querySelector('[data-a1-high-process]').value.toLowerCase(),
          output: lab.querySelector('[data-a1-high-output]').value.toLowerCase(),
          storage: lab.querySelector('[data-a1-high-storage]').value.toLowerCase()
        };
        const ok = Object.entries(scene).filter(([key]) => key !== 'story').every(([key, needles]) => needles.some((n) => values[key].includes(n)));
        lab.querySelector('[data-a1-feedback-3]').innerHTML = feedbackBox(
          ok ? 'good' : 'bad',
          ok ? 'Stretch complete' : 'Add the missing IPO piece',
          ok ? 'You can explain a real system with IPO + storage language.' : 'Borrow words from the story: what enters, what changes, what is shown, what is kept.',
          'Information literacy still asks: is the source trustworthy?',
          ok ? 'Attempt the DSE transfer items.' : 'Rewrite one blank with a clearer verb or object.'
        );
        if (ok) mountDse(lab.querySelector('[data-a1-dse]'), 'A1', 'Classify IPO and storage in an unfamiliar school system.');
      };
    }
  }

  /* ---------- D1 IPO Workshop ---------- */
  const D1_SCENES = [
    {
      title: 'Class average',
      story: 'A program reads three test marks and displays their average.',
      input: 'Three test marks',
      process: 'Calculate the average',
      output: 'The displayed average',
      distractors: ['Student name (unused)', 'Printer brand', 'Classroom number']
    },
    {
      title: 'Late return fine',
      story: 'A library system reads days overdue and shows the fine at $2 per day.',
      input: 'Days overdue',
      process: 'Multiply days by $2',
      output: 'Fine amount shown',
      distractors: ['Book colour', 'Librarian favourite drink', 'Shelf letter alone']
    }
  ];

  function renderD1(activity) {
    const scene = pick(D1_SCENES);
    return shell(activity, `
      <div class="lab-shell pass2-lab d1-lab" data-d1-lab data-scene="${escapeHtml(scene.title)}">
        <div class="lab-stage-tabs">
          <button type="button" class="is-active" data-lab-goto="1">1 · Highlight IPO</button>
          <button type="button" data-lab-goto="2">2 · Fill the table</button>
          <button type="button" data-lab-goto="3">3 · Decompose + UI</button>
        </div>
        <section data-lab-stage="1">
          <p class="lab-help">Low: tap the sentence parts that are Input, Process and Output.</p>
          <article class="lab-scene"><strong>${escapeHtml(scene.title)}</strong><p>${escapeHtml(scene.story)}</p></article>
          <div class="lab-option-row">
            ${shuffle([
              { label: scene.input, role: 'input' },
              { label: scene.process, role: 'process' },
              { label: scene.output, role: 'output' },
              ...scene.distractors.map((label) => ({ label, role: 'noise' }))
            ]).map((item, index) => `
              <button type="button" data-d1-pick="${index}" data-role="${item.role}">${escapeHtml(item.label)}</button>
            `).join('')}
          </div>
          <p class="lab-help">Selected: <span data-d1-selected>none yet</span></p>
          <button type="button" class="primary-btn" data-d1-check="1">Check highlights</button>
          <div data-d1-feedback></div>
        </section>
        <section data-lab-stage="2" hidden>
          <p class="lab-help">Mid: complete an IPO table for a new wording of the same problem.</p>
          <table class="lab-table">
            <tr><th>Input</th><td><input data-d1-input placeholder="What data is read?"></td></tr>
            <tr><th>Process</th><td><input data-d1-process placeholder="What calculation?"></td></tr>
            <tr><th>Output</th><td><input data-d1-output placeholder="What is displayed?"></td></tr>
          </table>
          <button type="button" class="primary-btn" data-d1-check="2">Check table</button>
          <div data-d1-feedback-2></div>
        </section>
        <section data-lab-stage="3" hidden>
          <p class="lab-help">High: decompose into tasks and choose a sensible UI control for input.</p>
          <div class="lab-option-row" data-d1-tasks>
            ${['Read marks', 'Validate 0–100', 'Calculate average', 'Display result', 'Design school logo'].map((task, index) => `
              <label><input type="checkbox" data-d1-task value="${escapeHtml(task)}"> ${escapeHtml(task)}</label>
            `).join('')}
          </div>
          <p>Best input UI for three marks 0–100?</p>
          <div class="lab-option-row">
            <button type="button" data-d1-ui="number">Number fields with range check</button>
            <button type="button" data-d1-ui="essay">One free essay box for everything</button>
            <button type="button" data-d1-ui="colour">Colour picker</button>
          </div>
          <div data-d1-feedback-3></div>
          <div data-d1-dse></div>
        </section>
      </div>
    `);
  }

  function bindD1(stage) {
    const lab = stage.querySelector('[data-d1-lab]');
    if (!lab) return;
    stageNav(lab, 3);
    const selected = new Set();
    lab.querySelectorAll('[data-d1-pick]').forEach((button) => {
      button.addEventListener('click', () => {
        button.classList.toggle('is-selected');
        const label = button.textContent.trim();
        if (button.classList.contains('is-selected')) selected.add(label);
        else selected.delete(label);
        lab.querySelector('[data-d1-selected]').textContent = [...selected].join(' · ') || 'none yet';
      });
    });
    lab.querySelector('[data-d1-check="1"]').addEventListener('click', () => {
      const picked = [...lab.querySelectorAll('[data-d1-pick].is-selected')];
      const roles = picked.map((btn) => btn.dataset.role);
      const ok = roles.includes('input') && roles.includes('process') && roles.includes('output') && !roles.includes('noise') && picked.length === 3;
      lab.querySelector('[data-d1-feedback]').innerHTML = feedbackBox(
        ok ? 'good' : 'bad',
        ok ? 'IPO highlighted' : 'Tune the selection',
        ok ? 'You kept only the data and actions the algorithm needs.' : 'Select exactly one input, one process and one output. Ignore story decorations.',
        'Do not list every noun as input.',
        ok ? 'Continue to the IPO table.' : 'Deselect noise items.'
      );
      if (ok) lab.querySelector('[data-lab-goto="2"]').click();
    });
    lab.querySelector('[data-d1-check="2"]').addEventListener('click', () => {
      const input = lab.querySelector('[data-d1-input]').value.toLowerCase();
      const process = lab.querySelector('[data-d1-process]').value.toLowerCase();
      const output = lab.querySelector('[data-d1-output]').value.toLowerCase();
      const ok = /(mark|day|input|data|score)/.test(input) && /(calc|aver|multi|fine|process)/.test(process) && /(aver|fine|display|output|show|result)/.test(output);
      lab.querySelector('[data-d1-feedback-2]').innerHTML = feedbackBox(
        ok ? 'good' : 'bad',
        ok ? 'Table ready' : 'Name IPO more clearly',
        ok ? 'Processing is the verb; output is the result shown.' : 'Input = data read. Process = calculation. Output = displayed result.',
        'Output is not the same as processing.',
        ok ? 'Open decompose + UI.' : 'Rewrite using verbs for process.'
      );
      if (ok) lab.querySelector('[data-lab-goto="3"]').click();
    });
    lab.querySelectorAll('[data-d1-ui]').forEach((button) => {
      button.addEventListener('click', () => {
        const tasks = [...lab.querySelectorAll('[data-d1-task]:checked')].map((node) => node.value);
        const taskOk = tasks.includes('Read marks') && tasks.includes('Calculate average') && tasks.includes('Display result') && !tasks.includes('Design school logo');
        const uiOk = button.dataset.d1Ui === 'number';
        const ok = taskOk && uiOk;
        lab.querySelector('[data-d1-feedback-3]').innerHTML = feedbackBox(
          ok ? 'good' : 'bad',
          ok ? 'Decomposition + UI match the problem' : 'Adjust tasks or UI',
          ok ? 'You removed irrelevant work and chose a control that reduces typing errors.' : 'Keep validation/calculate/display tasks. Prefer number fields with range checks over a free essay box.',
          'Abstraction removes logo design; it keeps mark rules.',
          ok ? 'Try the DSE transfer set.' : 'Uncheck the logo task and pick number fields.'
        );
        if (ok) mountDse(lab.querySelector('[data-d1-dse]'), 'D1', 'Analyse IPO and decompose an unfamiliar short problem.');
      });
    });
  }

  /* ---------- A6.4 SQL Sandbox ---------- */
  const A64_ROWS = [
    { Name: 'Chan Tai Man', Class: '5A', Mark: 72 },
    { Name: 'Lee Ka Yan', Class: '5B', Mark: 45 },
    { Name: 'Wong Siu Ming', Class: '5A', Mark: 88 },
    { Name: 'Ho Yan', Class: '5C', Mark: 51 },
    { Name: 'Ng Mei', Class: '5B', Mark: 39 }
  ];

  function rowsToTable(rows) {
    if (!rows.length) return '<p class="lab-help">0 rows returned.</p>';
    const cols = Object.keys(rows[0]);
    return `
      <table class="lab-table">
        <thead><tr>${cols.map((col) => `<th>${escapeHtml(col)}</th>`).join('')}</tr></thead>
        <tbody>
          ${rows.map((row) => `<tr>${cols.map((col) => `<td>${escapeHtml(String(row[col]))}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  }

  function renderA64(activity) {
    return shell(activity, `
      <div class="lab-shell pass2-lab a64-lab" data-a64-lab>
        <div class="lab-stage-tabs">
          <button type="button" class="is-active" data-lab-goto="1">1 · Read SELECT</button>
          <button type="button" data-lab-goto="2">2 · WHERE preview</button>
          <button type="button" data-lab-goto="3">3 · Disaster WHERE</button>
        </div>
        <section data-lab-stage="1">
          <p class="lab-help">Low: choose what this query returns.</p>
          <pre class="lab-code">SELECT Name FROM Student WHERE Class = "5A"</pre>
          ${rowsToTable(A64_ROWS)}
          <div class="lab-option-row">
            <button type="button" data-a64-q1="0">Names of students in 5A</button>
            <button type="button" data-a64-q1="1">Delete every non-5A student</button>
            <button type="button" data-a64-q1="2">Show every field of every student</button>
          </div>
          <div data-a64-feedback></div>
        </section>
        <section data-lab-stage="2" hidden>
          <p class="lab-help">Mid: edit WHERE and watch the live result set.</p>
          <label>WHERE Mark
            <select data-a64-op>
              <option value="<">&#60; 50</option>
              <option value=">=" selected>≥ 50</option>
              <option value=">">&#62; 80</option>
            </select>
          </label>
          <pre class="lab-code" data-a64-sql></pre>
          <div data-a64-result></div>
          <button type="button" class="primary-btn" data-a64-check="2">Explain the filter</button>
          <div data-a64-feedback-2></div>
        </section>
        <section data-lab-stage="3" hidden>
          <p class="lab-help">High: a clerk wants failing students (Mark &lt; 50) but typed the opposite WHERE.</p>
          <pre class="lab-code">SELECT Name FROM Student WHERE Mark &gt;= 50</pre>
          <div data-a64-wrong-result></div>
          <div class="lab-option-row">
            <button type="button" data-a64-disaster="syntax">It will crash because SQL is invalid</button>
            <button type="button" data-a64-disaster="opposite">Valid SQL, wrong question — returns passers</button>
            <button type="button" data-a64-disaster="delete">It deletes failing students</button>
          </div>
          <div data-a64-feedback-3></div>
          <div data-a64-dse></div>
        </section>
      </div>
    `);
  }

  function bindA64(stage) {
    const lab = stage.querySelector('[data-a64-lab]');
    if (!lab) return;
    stageNav(lab, 3);

    lab.querySelectorAll('[data-a64-q1]').forEach((button) => {
      button.addEventListener('click', () => {
        const ok = button.dataset.a64Q1 === '0';
        lab.querySelector('[data-a64-feedback]').innerHTML = feedbackBox(
          ok ? 'good' : 'bad',
          ok ? 'SELECT / WHERE read correctly' : 'Re-read the clauses',
          ok ? 'SELECT chose Name; WHERE kept Class = "5A".' : 'SELECT does not delete. WHERE filters rows; it does not invent every field.',
          'A valid query still needs the intended question.',
          ok ? 'Open the live WHERE preview.' : 'Try another option.'
        );
        if (ok) {
          lab.querySelector('[data-lab-goto="2"]').click();
          paintWhere();
        }
      });
    });

    function paintWhere() {
      const op = lab.querySelector('[data-a64-op]').value;
      const threshold = op === '>' ? 80 : 50;
      const rows = A64_ROWS.filter((row) => {
        if (op === '<') return row.Mark < threshold;
        if (op === '>') return row.Mark > threshold;
        return row.Mark >= threshold;
      });
      lab.querySelector('[data-a64-sql]').textContent = `SELECT Name, Mark FROM Student WHERE Mark ${op} ${threshold}`;
      lab.querySelector('[data-a64-result]').innerHTML = rowsToTable(rows.map(({ Name, Mark }) => ({ Name, Mark })));
    }
    lab.querySelector('[data-a64-op]').addEventListener('change', paintWhere);
    lab.querySelector('[data-a64-check="2"]').addEventListener('click', () => {
      paintWhere();
      lab.querySelector('[data-a64-feedback-2]').innerHTML = feedbackBox(
        'good',
        'Live filter applied',
        'WHERE chooses rows; SELECT chooses columns. Change the operator and the story changes.',
        'Wrong WHERE returns the wrong students, not always an error message.',
        'Open the disaster preview.'
      );
      lab.querySelector('[data-lab-goto="3"]').click();
      lab.querySelector('[data-a64-wrong-result]').innerHTML = rowsToTable(
        A64_ROWS.filter((row) => row.Mark >= 50).map(({ Name, Mark }) => ({ Name, Mark }))
      );
    });
    lab.querySelectorAll('[data-a64-disaster]').forEach((button) => {
      button.addEventListener('click', () => {
        const ok = button.dataset.a64Disaster === 'opposite';
        lab.querySelector('[data-a64-feedback-3]').innerHTML = feedbackBox(
          ok ? 'good' : 'bad',
          ok ? 'Valid but wrong' : 'Not the main risk',
          ok ? 'The statement runs and still answers the opposite question.' : 'SELECT does not delete, and ≥ 50 is legal SQL.',
          'Syntax validity ≠ correct data question.',
          ok ? 'Transfer to DSE items.' : 'Pick the option about the opposite question.'
        );
        if (ok) mountDse(lab.querySelector('[data-a64-dse]'), 'A6.4', 'Read SELECT / FROM / WHERE and spot a valid but wrong query.');
      });
    });
  }

  /* ---------- EA1 SQL Drill ---------- */
  function renderEA1(activity) {
    return shell(activity, `
      <div class="lab-shell pass2-lab ea1-lab" data-ea1-lab>
        <div class="lab-stage-tabs">
          <button type="button" class="is-active" data-lab-goto="1">1 · CREATE + INSERT</button>
          <button type="button" data-lab-goto="2">2 · Dangerous UPDATE</button>
          <button type="button" data-lab-goto="3">3 · DROP vs DELETE</button>
        </div>
        <section data-lab-stage="1">
          <p class="lab-help">Low: pick the safer CREATE/INSERT pair for StudentID text keys.</p>
          <div class="lab-option-row">
            <button type="button" data-ea1-create="good">CREATE TABLE Student (StudentID TEXT PRIMARY KEY, Name TEXT NOT NULL); INSERT INTO Student VALUES ("S001","Ada");</button>
            <button type="button" data-ea1-create="phone">CREATE TABLE Student (Phone NUMBER PRIMARY KEY); INSERT phone as 91234567</button>
            <button type="button" data-ea1-create="dup">CREATE without PRIMARY KEY, INSERT two identical StudentID values</button>
          </div>
          <div data-ea1-feedback></div>
        </section>
        <section data-lab-stage="2" hidden>
          <p class="lab-help">Mid: preview UPDATE with and without WHERE.</p>
          <pre class="lab-code">UPDATE Student SET Class = "5A";</pre>
          <pre class="lab-code">UPDATE Student SET Class = "5A" WHERE StudentID = "S001";</pre>
          <div class="lab-option-row">
            <button type="button" data-ea1-update="all">First statement may change every row</button>
            <button type="button" data-ea1-update="one">First statement always changes one random row</button>
            <button type="button" data-ea1-update="drop">First statement drops the table</button>
          </div>
          <div data-ea1-feedback-2></div>
        </section>
        <section data-lab-stage="3" hidden>
          <p class="lab-help">High: distinguish DELETE, DROP and a guarded DELETE.</p>
          <div class="lab-option-row">
            <button type="button" data-ea1-drop="delete">DELETE FROM Student WHERE StudentID="S001" removes one record</button>
            <button type="button" data-ea1-drop="drop">DROP TABLE Student removes the table structure</button>
            <button type="button" data-ea1-drop="same">DELETE and DROP always do the same thing</button>
          </div>
          <p>Select both true statements, then confirm.</p>
          <button type="button" class="primary-btn" data-ea1-check="3">Check</button>
          <div data-ea1-feedback-3></div>
          <div data-ea1-dse></div>
        </section>
      </div>
    `);
  }

  function bindEA1(stage) {
    const lab = stage.querySelector('[data-ea1-lab]');
    if (!lab) return;
    stageNav(lab, 3);
    lab.querySelectorAll('[data-ea1-create]').forEach((button) => {
      button.addEventListener('click', () => {
        const ok = button.dataset.ea1Create === 'good';
        lab.querySelector('[data-ea1-feedback]').innerHTML = feedbackBox(
          ok ? 'good' : 'bad',
          ok ? 'Structure + row added safely' : 'Risky design',
          ok ? 'TEXT primary key + NOT NULL name matches identifiers that are not for arithmetic.' : 'Phone as NUMBER drops leading 0s; missing PRIMARY KEY allows duplicate identities.',
          'CREATE defines structure; INSERT adds records.',
          ok ? 'Inspect dangerous UPDATE next.' : 'Choose the PRIMARY KEY text example.'
        );
        if (ok) lab.querySelector('[data-lab-goto="2"]').click();
      });
    });
    lab.querySelectorAll('[data-ea1-update]').forEach((button) => {
      button.addEventListener('click', () => {
        const ok = button.dataset.ea1Update === 'all';
        lab.querySelector('[data-ea1-feedback-2]').innerHTML = feedbackBox(
          ok ? 'good' : 'bad',
          ok ? 'WHERE saves the table' : 'Re-read UPDATE',
          ok ? 'Without WHERE, UPDATE applies to every record.' : 'UPDATE does not drop tables, and SQL will not pick one “safe” row for you.',
          'Always check WHERE before UPDATE/DELETE.',
          ok ? 'Finish with DROP vs DELETE.' : 'Pick the “every row” option.'
        );
        if (ok) lab.querySelector('[data-lab-goto="3"]').click();
      });
    });
    const chosen = new Set();
    lab.querySelectorAll('[data-ea1-drop]').forEach((button) => {
      button.addEventListener('click', () => {
        button.classList.toggle('is-selected');
        const key = button.dataset.ea1Drop;
        if (button.classList.contains('is-selected')) chosen.add(key);
        else chosen.delete(key);
      });
    });
    lab.querySelector('[data-ea1-check="3"]').addEventListener('click', () => {
      const ok = chosen.has('delete') && chosen.has('drop') && !chosen.has('same');
      lab.querySelector('[data-ea1-feedback-3]').innerHTML = feedbackBox(
        ok ? 'good' : 'bad',
        ok ? 'DELETE ≠ DROP' : 'Select the two correct contrasts',
        ok ? 'DELETE removes records; DROP removes the table structure.' : 'Keep both true statements; reject “always the same”.',
        'Guarded DELETE uses WHERE; DROP TABLE is structural.',
        ok ? 'Attempt DSE transfer.' : 'Highlight the first two buttons only.'
      );
      if (ok) mountDse(lab.querySelector('[data-ea1-dse]'), 'EA1', 'Judge CREATE/INSERT and dangerous UPDATE/DELETE/DROP statements.');
    });
  }

  /* ---------- C6 Threat Sort ---------- */
  const C6_ITEMS = [
    { text: 'Encrypts files and demands payment', answer: 'ransomware', why: 'Ransomware blocks access and asks for ransom.' },
    { text: 'Spreads across networks with less need for a host file', answer: 'worm', why: 'Worms can propagate more independently on networks.' },
    { text: 'Disguises as a useful installer', answer: 'trojan', why: 'A trojan looks legitimate but carries a payload.' },
    { text: 'Blocks unwanted ports between networks', answer: 'firewall', why: 'A firewall is a control that filters traffic.' },
    { text: 'Keeps offline copies after malware hits', answer: 'backup', why: 'Backups support recovery, especially after ransomware.' },
    { text: 'Attaches to documents/programs and needs a host', answer: 'virus', why: 'A classic virus attaches to host files.' }
  ];

  function renderC6(activity) {
    const items = shuffle(C6_ITEMS);
    return shell(activity, `
      <div class="lab-shell pass2-lab c6-lab" data-c6-lab>
        <div class="lab-stage-tabs">
          <button type="button" class="is-active" data-lab-goto="1">1 · Sort threats</button>
          <button type="button" data-lab-goto="2">2 · Match a control</button>
          <button type="button" data-lab-goto="3">3 · Public Wi-Fi</button>
        </div>
        <section data-lab-stage="1">
          <p class="lab-help">Low: match each behaviour to the threat or control name.</p>
          <div class="c6-grid">
            ${items.map((item, index) => `
              <article data-c6-item="${index}" data-answer="${escapeHtml(item.answer)}" data-why="${escapeHtml(item.why)}">
                <p>${escapeHtml(item.text)}</p>
                <select data-c6-select>
                  <option value="">Choose…</option>
                  ${shuffle(['ransomware', 'worm', 'trojan', 'virus', 'firewall', 'backup']).map((name) => `
                    <option value="${name}">${name}</option>
                  `).join('')}
                </select>
              </article>
            `).join('')}
          </div>
          <button type="button" class="primary-btn" data-c6-check="1">Check sorting</button>
          <div data-c6-feedback></div>
        </section>
        <section data-lab-stage="2" hidden>
          <p class="lab-help">Mid: ransomware hit the shared drive. Which control pair is best first response thinking?</p>
          <div class="lab-option-row">
            <button type="button" data-c6-mid="good">Isolate, restore from clean backup, then harden access</button>
            <button type="button" data-c6-mid="pay">Pay the ransom immediately and skip backups</button>
            <button type="button" data-c6-mid="onlyav">Install any antivirus icon and assume the case is closed</button>
          </div>
          <div data-c6-feedback-2></div>
        </section>
        <section data-lab-stage="3" hidden>
          <p class="lab-help">High: choose safer public Wi-Fi behaviour and name the remaining risk.</p>
          <div class="lab-option-row">
            <button type="button" data-c6-wifi="good">Prefer HTTPS/VPN and avoid banking on open Wi-Fi</button>
            <button type="button" data-c6-wifi="ignore">Ignore certificate warnings to “get online faster”</button>
            <button type="button" data-c6-wifi="share">Share the captive-portal password on social media</button>
          </div>
          <div data-c6-feedback-3></div>
          <div data-c6-dse></div>
        </section>
      </div>
    `);
  }

  function bindC6(stage) {
    const lab = stage.querySelector('[data-c6-lab]');
    if (!lab) return;
    stageNav(lab, 3);
    lab.querySelector('[data-c6-check="1"]').addEventListener('click', () => {
      const articles = [...lab.querySelectorAll('[data-c6-item]')];
      let correct = 0;
      articles.forEach((article) => {
        const select = article.querySelector('[data-c6-select]');
        if (select.value === article.dataset.answer) correct += 1;
      });
      const ok = correct === articles.length;
      lab.querySelector('[data-c6-feedback]').innerHTML = feedbackBox(
        ok ? 'good' : 'bad',
        ok ? 'Threats labelled' : `${correct}/${articles.length} matched`,
        ok ? 'You named mechanisms before products.' : 'Match behaviour → mechanism. Antivirus is a control, not every threat name.',
        'Start from the attack behaviour, then name the control.',
        ok ? 'Continue to control matching.' : 'Fix the mismatched rows.'
      );
      if (ok) lab.querySelector('[data-lab-goto="2"]').click();
    });
    lab.querySelectorAll('[data-c6-mid]').forEach((button) => {
      button.addEventListener('click', () => {
        const ok = button.dataset.c6Mid === 'good';
        lab.querySelector('[data-c6-feedback-2]').innerHTML = feedbackBox(
          ok ? 'good' : 'bad',
          ok ? 'Control matches the mechanism' : 'That control is incomplete',
          ok ? 'Backup + isolation address ransomware’s damage path.' : 'Paying or a single icon does not remove the mechanism or recover data reliably.',
          'A control addresses a mechanism; residual risk remains.',
          ok ? 'Finish with public Wi-Fi judgement.' : 'Choose isolate + backup thinking.'
        );
        if (ok) lab.querySelector('[data-lab-goto="3"]').click();
      });
    });
    lab.querySelectorAll('[data-c6-wifi]').forEach((button) => {
      button.addEventListener('click', () => {
        const ok = button.dataset.c6Wifi === 'good';
        lab.querySelector('[data-c6-feedback-3]').innerHTML = feedbackBox(
          ok ? 'good' : 'bad',
          ok ? 'Safer Wi-Fi habit' : 'That increases risk',
          ok ? 'HTTPS/VPN and avoiding sensitive transactions reduce interception risk on open Wi-Fi.' : 'Certificate warnings and shared portal secrets increase exposure.',
          'Familiar network names are not automatic safety.',
          ok ? 'Transfer to checkpoint items.' : 'Pick HTTPS/VPN behaviour.'
        );
        if (ok) mountDse(lab.querySelector('[data-c6-dse]'), 'C6', 'Match malware/network threats to suitable controls.');
      });
    });
  }

  /* ---------- B2 Trade-off Picker ---------- */
  const B2_CASES = [
    {
      need: 'Classroom PCs must start and load apps quickly; budget allows higher unit cost.',
      best: 'ssd',
      why: 'SSD usually gives faster access for boot and app loading when cost per GB can be higher.'
    },
    {
      need: 'Archive last year’s CCTV footage cheaply; rare restore; order of recording matters.',
      best: 'tape',
      why: 'Tape suits sequential archive/backup at lower cost when instant random access is not required.'
    },
    {
      need: 'Keep unsaved document edits while apps run; power loss may wipe it.',
      best: 'ram',
      why: 'RAM is working memory for active programs and is typically volatile.'
    }
  ];

  function renderB2(activity) {
    const scene = pick(B2_CASES);
    return shell(activity, `
      <div class="lab-shell pass2-lab b2-lab" data-b2-lab data-best="${escapeHtml(scene.best)}" data-why="${escapeHtml(scene.why)}">
        <div class="lab-stage-tabs">
          <button type="button" class="is-active" data-lab-goto="1">1 · Pick storage</button>
          <button type="button" data-lab-goto="2">2 · Name the trade-off</button>
          <button type="button" data-lab-goto="3">3 · Bottleneck</button>
        </div>
        <section data-lab-stage="1">
          <p class="lab-help">Low: choose the best fit for the purpose — not a single “fastest forever” ranking.</p>
          <article class="lab-scene">${escapeHtml(scene.need)}</article>
          <div class="lab-option-row">
            <button type="button" data-b2-pick="ssd">SSD</button>
            <button type="button" data-b2-pick="hdd">HDD only, ignoring speed need</button>
            <button type="button" data-b2-pick="tape">Magnetic tape</button>
            <button type="button" data-b2-pick="ram">RAM</button>
            <button type="button" data-b2-pick="monitor">Larger monitor</button>
          </div>
          <div data-b2-feedback></div>
        </section>
        <section data-lab-stage="2" hidden>
          <p class="lab-help">Mid: which trade-off sentence is accurate?</p>
          <div class="lab-option-row">
            <button type="button" data-b2-mid="good">Speed, capacity, cost and volatility must be judged against the job</button>
            <button type="button" data-b2-mid="rank">Always rank devices on one universal fastest→slowest list</button>
            <button type="button" data-b2-mid="ramstore">RAM and secondary storage are the same because both hold bits</button>
          </div>
          <div data-b2-feedback-2></div>
        </section>
        <section data-lab-stage="3" hidden>
          <p class="lab-help">High: a video editor has a fast CPU but very little RAM and stutters on large clips. Name the bottleneck.</p>
          <div class="lab-option-row">
            <button type="button" data-b2-high="ram">RAM</button>
            <button type="button" data-b2-high="keyboard">Keyboard</button>
            <button type="button" data-b2-high="brand">Brand reputation</button>
          </div>
          <div data-b2-feedback-3></div>
          <div data-b2-dse></div>
        </section>
      </div>
    `);
  }

  function bindB2(stage) {
    const lab = stage.querySelector('[data-b2-lab]');
    if (!lab) return;
    stageNav(lab, 3);
    lab.querySelectorAll('[data-b2-pick]').forEach((button) => {
      button.addEventListener('click', () => {
        const ok = button.dataset.b2Pick === lab.dataset.best;
        lab.querySelector('[data-b2-feedback]').innerHTML = feedbackBox(
          ok ? 'good' : 'bad',
          ok ? 'Purpose matched' : 'Re-check the job',
          ok ? lab.dataset.why : 'Match speed/capacity/cost/volatility to the stated need. A monitor is not storage.',
          'Secondary storage choice is a trade-off, not a brand contest.',
          ok ? 'Explain the trade-off language next.' : 'Read the need again.'
        );
        if (ok) lab.querySelector('[data-lab-goto="2"]').click();
      });
    });
    lab.querySelectorAll('[data-b2-mid]').forEach((button) => {
      button.addEventListener('click', () => {
        const ok = button.dataset.b2Mid === 'good';
        lab.querySelector('[data-b2-feedback-2]').innerHTML = feedbackBox(
          ok ? 'good' : 'bad',
          ok ? 'Trade-off stated' : 'Too absolute',
          ok ? 'DSE answers should use purpose and trade-off.' : 'RAM ≠ secondary storage; one ranking list hides the job.',
          'Volatile working memory and persistent storage solve different problems.',
          ok ? 'Finish with the bottleneck case.' : 'Choose the trade-off sentence.'
        );
        if (ok) lab.querySelector('[data-lab-goto="3"]').click();
      });
    });
    lab.querySelectorAll('[data-b2-high]').forEach((button) => {
      button.addEventListener('click', () => {
        const ok = button.dataset.b2High === 'ram';
        lab.querySelector('[data-b2-feedback-3]').innerHTML = feedbackBox(
          ok ? 'good' : 'bad',
          ok ? 'Bottleneck identified' : 'Not the limiting component',
          ok ? 'Limited RAM forces swapping and stalls large edits.' : 'Explain with hardware roles, not brand or unrelated peripherals.',
          'More storage capacity does not automatically fix a RAM bottleneck.',
          ok ? 'Transfer to checkpoint practice.' : 'Pick RAM.'
        );
        if (ok) mountDse(lab.querySelector('[data-b2-dse]'), 'B2', 'Justify memory/storage choices using purpose and trade-off.');
      });
    });
  }

  function register() {
    if (!global.ActivityLabs?.register) return;
    global.ActivityLabs.register('a1IpoSorter', renderA1, bindA1);
    global.ActivityLabs.register('d1IpoWorkshop', renderD1, bindD1);
    global.ActivityLabs.register('a64SqlSandbox', renderA64, bindA64);
    global.ActivityLabs.register('ea1SqlDrill', renderEA1, bindEA1);
    global.ActivityLabs.register('c6ThreatSort', renderC6, bindC6);
    global.ActivityLabs.register('b2TradeoffPicker', renderB2, bindB2);
    if (typeof global.updateTopicLabBadges === 'function') global.updateTopicLabBadges();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', register);
  else register();
})(window);
