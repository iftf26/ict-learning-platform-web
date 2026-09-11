(function (global) {
  function escapeHtml(value) {
    if (typeof global.escapeHtml === 'function') return global.escapeHtml(value);
    return String(value)
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

  const A5_TYPES = ['Text', 'Number', 'Currency', 'Date/Time', 'Yes/No', 'AutoNumber'];

  const A5_SCENARIOS = [
    {
      id: 'student',
      title: 'Student register',
      intro: 'The school office stores one record per student. Design fields, enter records through a form, then filter the table with a simple query.',
      fields: [
        { id: 'StudentID', correctType: 'Text', pk: true, why: 'StudentID uniquely identifies a student. Store IDs as Text when you will not calculate with them.' },
        { id: 'Name', correctType: 'Text', pk: false, why: 'Names can repeat, so Name is a poor primary key.' },
        { id: 'Class', correctType: 'Text', pk: false, why: 'Many students share a class.' },
        { id: 'Phone', correctType: 'Text', pk: false, why: 'Phone numbers are not for arithmetic. As Number, a leading 0 would be lost.' },
        { id: 'Fine', correctType: 'Currency', pk: false, why: 'Fine is money. 0 means “no fine”; blank/NULL means the amount is unknown.' }
      ],
      seed: [
        { StudentID: 'S001', Name: 'Chan Tai Man', Class: '5A', Phone: '9123-4567', Fine: 0 },
        { StudentID: 'S002', Name: 'Lee Ka Yan', Class: '5B', Phone: '9234-5678', Fine: 12.5 },
        { StudentID: 'S003', Name: 'Wong Siu Ming', Class: '5A', Phone: '9345-6789', Fine: null }
      ]
    },
    {
      id: 'library',
      title: 'Library books',
      intro: 'The library stores one record per book. Choose types and a primary key that stay unique even if two books share a title.',
      fields: [
        { id: 'BookID', correctType: 'Text', pk: true, why: 'BookID identifies one book copy. Titles are not unique.' },
        { id: 'Title', correctType: 'Text', pk: false, why: 'Different copies can share a title.' },
        { id: 'Year', correctType: 'Number', pk: false, why: 'Year is a numeric value you may sort, not an identifier.' },
        { id: 'Phone', correctType: 'Text', pk: false, why: 'A supplier phone is a code, not a quantity.' },
        { id: 'Price', correctType: 'Currency', pk: false, why: 'Price is money. Do not store it as AutoNumber.' }
      ],
      seed: [
        { BookID: 'B101', Title: 'ICT Coursebook', Year: 2024, Phone: '2123-0001', Price: 128 },
        { BookID: 'B102', Title: 'ICT Coursebook', Year: 2024, Phone: '2123-0001', Price: 128 },
        { BookID: 'B103', Title: 'Network Basics', Year: 2023, Phone: '2123-0002', Price: 96 }
      ]
    },
    {
      id: 'club',
      title: 'Club membership',
      intro: 'The ICT club stores one record per member. A form is for entering one member; a query selects members; a report prints the list.',
      fields: [
        { id: 'MemberID', correctType: 'Text', pk: true, why: 'MemberID is unique. Email or name can be shared or change.' },
        { id: 'Name', correctType: 'Text', pk: false, why: 'Two members can have the same name.' },
        { id: 'Joined', correctType: 'Date/Time', pk: false, why: 'A join date should be Date/Time so it can be sorted as a date.' },
        { id: 'Paid', correctType: 'Yes/No', pk: false, why: 'Paid is a true/false fact, not a paragraph of text.' },
        { id: 'Fee', correctType: 'Currency', pk: false, why: 'Fee is money. 0 means paid nothing; NULL means not recorded.' }
      ],
      seed: [
        { MemberID: 'M01', Name: 'Ho Yan', Joined: '2025-09-08', Paid: 'Yes', Fee: 20 },
        { MemberID: 'M02', Name: 'Tam Chi', Joined: '2025-09-09', Paid: 'No', Fee: 0 },
        { MemberID: 'M03', Name: 'Ng Mei', Joined: '2025-10-02', Paid: 'Yes', Fee: 20 }
      ]
    }
  ];

  function renderA5(activity) {
    const scene = pick(A5_SCENARIOS);
    return global.makeActivityShell(activity, `
      <div class="lab-shell a5-lab" data-a5-lab data-scene="${escapeHtml(scene.id)}">
        <div class="lab-progress" aria-label="Activity stages">
          <span class="is-active" data-a5-tab="design">1 Design fields</span>
          <span data-a5-tab="records">2 Form + records</span>
          <span data-a5-tab="query">3 Query predictor</span>
          <span data-a5-tab="dse">4 DSE transfer</span>
        </div>
        <p class="lab-scenario"><strong>${escapeHtml(scene.title)}</strong> ${escapeHtml(scene.intro)}</p>
        <section data-a5-stage="design">
          <p class="lab-help">Choose a data type and mark exactly one primary key. Phone numbers and IDs are usually Text. A name is a poor key.</p>
          <table class="a5-design-table">
            <thead><tr><th>Field</th><th>Data type</th><th>Primary key</th></tr></thead>
            <tbody>
              ${scene.fields.map(field => `
                <tr>
                  <td><code>${escapeHtml(field.id)}</code></td>
                  <td>
                    <select data-a5-type="${escapeHtml(field.id)}" aria-label="Data type for ${escapeHtml(field.id)}">
                      <option value="">Choose type</option>
                      ${A5_TYPES.map(type => `<option value="${type}">${type}</option>`).join('')}
                    </select>
                  </td>
                  <td><label><input type="radio" name="a5pk" value="${escapeHtml(field.id)}"> Primary key</label></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <button class="primary-btn" type="button" data-a5-check-design>Check field design</button>
        </section>
        <section data-a5-stage="records" hidden>
          <div class="a5-object-switch" role="tablist">
            <button type="button" class="is-active" data-a5-view="form">Form (one record)</button>
            <button type="button" data-a5-view="table">Table (all records)</button>
          </div>
          <p class="lab-help" data-a5-object-note>A form is for entering or viewing one record. It is not a query and not a printable report.</p>
          <form class="a5-form" data-a5-form>
            ${scene.fields.map(field => `
              <label>${escapeHtml(field.id)}
                <input data-a5-input="${escapeHtml(field.id)}" autocomplete="off">
              </label>
            `).join('')}
            <button class="primary-btn" type="button" data-a5-add>Add record</button>
          </form>
          <div class="a5-traps">
            <button class="ghost-btn" type="button" data-a5-trap="dup">Try a duplicate primary key</button>
            <button class="ghost-btn" type="button" data-a5-trap="phone">Store phone as 91234567 in a Number field</button>
            <button class="ghost-btn" type="button" data-a5-trap="null">Enter money as blank vs 0</button>
          </div>
          <div class="a5-table-wrap" data-a5-table hidden></div>
          <button class="secondary-btn" type="button" data-a5-to-query>Open query predictor</button>
        </section>
        <section data-a5-stage="query" hidden>
          <p class="lab-help">Change SELECT, WHERE and ORDER BY. The result table updates immediately. A query selects records; it does not print a report or replace the form.</p>
          <div class="a5-query-builder">
            <fieldset>
              <legend>SELECT</legend>
              <div data-a5-select></div>
            </fieldset>
            <label>WHERE field
              <select data-a5-where-field><option value="">(no filter)</option></select>
            </label>
            <label>Operator
              <select data-a5-where-op>
                <option value="=">=</option>
                <option value=">">&gt;</option>
                <option value="<">&lt;</option>
                <option value="IS NULL">IS NULL</option>
              </select>
            </label>
            <label>Value
              <input data-a5-where-value autocomplete="off">
            </label>
            <label>ORDER BY
              <select data-a5-order><option value="">(unsorted)</option></select>
            </label>
          </div>
          <pre class="a5-sql" data-a5-sql></pre>
          <div data-a5-result></div>
          <button class="primary-btn" type="button" data-a5-to-dse>DSE transfer</button>
        </section>
        <section data-a5-stage="dse" hidden>
          <div data-a5-dse></div>
        </section>
        <div data-a5-feedback></div>
      </div>
    `);
  }

  function bindA5(root) {
    const lab = root.querySelector('[data-a5-lab]');
    if (!lab) return;
    const scene = A5_SCENARIOS.find(item => item.id === lab.dataset.scene) || A5_SCENARIOS[0];
    const records = scene.seed.map(row => ({ ...row }));
    const pkField = () => scene.fields.find(field => field.pk).id;

    function show(name) {
      lab.querySelectorAll('[data-a5-stage]').forEach(section => {
        section.hidden = section.dataset.a5Stage !== name;
      });
      lab.querySelectorAll('[data-a5-tab]').forEach(tab => {
        tab.classList.toggle('is-active', tab.dataset.a5Tab === name);
      });
    }

    function setFeedback(html) {
      lab.querySelector('[data-a5-feedback]').innerHTML = html;
    }

    function renderTable(target, rows, fields) {
      const cols = fields || scene.fields.map(field => field.id);
      if (!rows.length) {
        target.innerHTML = '<p class="lab-help">No matching records.</p>';
        return;
      }
      target.innerHTML = `
        <table class="a5-result">
          <thead><tr>${cols.map(col => `<th>${escapeHtml(col)}</th>`).join('')}</tr></thead>
          <tbody>
            ${rows.map(row => `<tr>${cols.map(col => {
              const empty = row[col] === null || row[col] === undefined || row[col] === '';
              return `<td class="${empty ? 'is-null' : ''}">${empty ? '<em>NULL</em>' : escapeHtml(row[col])}</td>`;
            }).join('')}</tr>`).join('')}
          </tbody>
        </table>
      `;
    }

    lab.querySelector('[data-a5-check-design]').addEventListener('click', () => {
      const pk = lab.querySelector('input[name="a5pk"]:checked')?.value;
      const mistakes = [];
      scene.fields.forEach(field => {
        const type = lab.querySelector(`[data-a5-type="${field.id}"]`).value;
        if (type !== field.correctType) {
          mistakes.push(`${field.id} should be ${field.correctType}. ${field.why}`);
        }
      });
      if (pk !== pkField()) {
        mistakes.push(`${pkField()} is the primary key because it uniquely identifies each record. ${pk ? pk + ' is not unique enough.' : 'You did not mark a primary key.'}`);
      }
      if (mistakes.length) {
        setFeedback(feedbackBox(
          'bad',
          'The table design still has a Core A trap.',
          mistakes[0],
          'Primary key = unique, never blank, never duplicated. Phone/ID → Text. 0 is a stored number; NULL is missing.',
          'Fix the marked field, then check again.'
        ));
        return;
      }
      setFeedback(feedbackBox(
        'good',
        'Field design matches the syllabus idea.',
        `${pkField()} is the primary key. Phone/ID fields stay Text so digits are not treated as quantities.`,
        'A form will now enter one record at a time. The table still stores every row.',
        'Add records. Try the trap buttons so duplicate keys and NULL vs 0 become visible.'
      ));
      show('records');
      renderTable(lab.querySelector('[data-a5-table]'), records);
    });

    lab.querySelectorAll('[data-a5-view]').forEach(button => {
      button.addEventListener('click', () => {
        lab.querySelectorAll('[data-a5-view]').forEach(item => item.classList.toggle('is-active', item === button));
        const form = button.dataset.a5View === 'form';
        lab.querySelector('[data-a5-form]').hidden = !form;
        lab.querySelector('[data-a5-table]').hidden = form;
        lab.querySelector('[data-a5-object-note]').textContent = form
          ? 'A form is for entering or viewing one record. It is not a query and not a printable report.'
          : 'The table shows every stored record. Filtering this list is a query’s job; printing it neatly is a report’s job.';
      });
    });

    function addRecord(row, note) {
      const key = pkField();
      if (!row[key]) {
        setFeedback(feedbackBox('bad', 'Primary key cannot be blank.', 'A missing key is not a valid record. NULL is not an identifier.', '', 'Enter a unique Student/Book/Member ID.'));
        return false;
      }
      if (records.some(item => String(item[key]) === String(row[key]))) {
        setFeedback(feedbackBox(
          'bad',
          'Duplicate primary key rejected.',
          `The table already has ${key} = ${row[key]}. Two records cannot share the same primary key.`,
          'The primary key uniquely identifies each record.',
          'Change the ID, then add again.'
        ));
        return false;
      }
      records.push(row);
      renderTable(lab.querySelector('[data-a5-table]'), records);
      setFeedback(note || feedbackBox('good', 'Record stored.', 'The form wrote one row into the table.', '', 'Open the table view, then try a query.'));
      return true;
    }

    lab.querySelector('[data-a5-add]').addEventListener('click', () => {
      const row = {};
      scene.fields.forEach(field => {
        const raw = lab.querySelector(`[data-a5-input="${field.id}"]`).value.trim();
        row[field.id] = raw === '' ? null : raw;
      });
      addRecord(row);
    });

    lab.querySelector('[data-a5-trap="dup"]').addEventListener('click', () => {
      addRecord({ ...records[0] });
    });
    lab.querySelector('[data-a5-trap="phone"]').addEventListener('click', () => {
      setFeedback(feedbackBox(
        'bad',
        'Number is the wrong type for a phone.',
        'If Phone were Number, 91234567 might display as 91234567, but 0123-4567 would lose the leading 0 and you would not dial it as text.',
        'Use Text for phone numbers and many ID codes. Use Number/Currency only when arithmetic is needed.',
        'Keep Phone as Text in this table.'
      ));
    });
    lab.querySelector('[data-a5-trap="null"]').addEventListener('click', () => {
      setFeedback(feedbackBox(
        'info',
        'NULL is not 0.',
        '0 means the stored amount is zero (no fine/fee). NULL means no value has been entered yet — unknown, not zero.',
        'A query WHERE Fine = 0 does not return NULL fines.',
        'Look at the table: one seed record already uses NULL.'
      ));
      lab.querySelector('[data-a5-table]').hidden = false;
      lab.querySelector('[data-a5-form]').hidden = true;
    });

    function paintQuery() {
      const selected = [...lab.querySelectorAll('[data-a5-select] input:checked')].map(item => item.value);
      const fields = selected.length ? selected : scene.fields.map(field => field.id);
      const whereField = lab.querySelector('[data-a5-where-field]').value;
      const op = lab.querySelector('[data-a5-where-op]').value;
      const value = lab.querySelector('[data-a5-where-value]').value.trim();
      const order = lab.querySelector('[data-a5-order]').value;
      let rows = records.map(row => ({ ...row }));
      if (whereField && op === 'IS NULL') {
        rows = rows.filter(row => row[whereField] === null || row[whereField] === '');
      } else if (whereField && value !== '') {
        rows = rows.filter(row => {
          const cell = row[whereField];
          if (op === '=') return String(cell) === value;
          const left = Number(cell);
          const right = Number(value);
          if (Number.isNaN(left) || Number.isNaN(right)) return false;
          return op === '>' ? left > right : left < right;
        });
      }
      if (order) {
        rows.sort((a, b) => String(a[order] ?? '').localeCompare(String(b[order] ?? ''), undefined, { numeric: true }));
      }
      const whereSql = !whereField ? '' : op === 'IS NULL' ? ` WHERE ${whereField} IS NULL` : ` WHERE ${whereField} ${op} ${/^\d+(\.\d+)?$/.test(value) ? value : `"${value}"`}`;
      const orderSql = order ? ` ORDER BY ${order}` : '';
      lab.querySelector('[data-a5-sql]').textContent = `SELECT ${fields.join(', ')} FROM ${scene.id === 'library' ? 'Book' : scene.id === 'club' ? 'Member' : 'Student'}${whereSql}${orderSql}`;
      renderTable(lab.querySelector('[data-a5-result]'), rows, fields);
    }

    lab.querySelector('[data-a5-to-query]').addEventListener('click', () => {
      if (lab.dataset.queryReady !== '1') {
        lab.dataset.queryReady = '1';
        const host = lab.querySelector('[data-a5-select]');
        host.innerHTML = scene.fields.map(field => `
          <label><input type="checkbox" value="${escapeHtml(field.id)}" checked> ${escapeHtml(field.id)}</label>
        `).join('');
        const options = scene.fields.map(field => `<option value="${escapeHtml(field.id)}">${escapeHtml(field.id)}</option>`).join('');
        lab.querySelector('[data-a5-where-field]').innerHTML = '<option value="">(no filter)</option>' + options;
        lab.querySelector('[data-a5-order]').innerHTML = '<option value="">(unsorted)</option>' + options;
        host.addEventListener('change', paintQuery);
        lab.querySelectorAll('[data-a5-where-field], [data-a5-where-op], [data-a5-order]').forEach(item => item.addEventListener('change', paintQuery));
        lab.querySelector('[data-a5-where-value]').addEventListener('input', paintQuery);
      }
      show('query');
      paintQuery();
    });

    lab.querySelector('[data-a5-to-dse]').addEventListener('click', () => {
      show('dse');
      mountDse(lab.querySelector('[data-a5-dse]'), 'A6', 'Apply table, form, query, report, primary key and NULL vs 0 to an unfamiliar school database.');
    });
  }

  const D6_CASES = [
    {
      id: 'max-logic',
      title: 'Larger of two numbers',
      purpose: 'Output the larger of A and B.',
      errorType: 'Logic error',
      bugLine: 2,
      whyTest: 'Normal data A=8, B=3 should give 8. The program still runs, so this is not syntax. The actual output 3 shows the condition picks the smaller value.',
      code: [
        'INPUT A, B',
        'IF A < B THEN',
        '    Max ← A',
        'ELSE',
        '    Max ← B',
        'OUTPUT Max'
      ],
      tests: [
        { kind: 'Normal', label: 'A=8, B=3', values: { A: 8, B: 3 }, expected: '8', actual: '3', reveals: true },
        { kind: 'Boundary', label: 'A=5, B=5', values: { A: 5, B: 5 }, expected: '5', actual: '5', reveals: false },
        { kind: 'Erroneous', label: 'A="ten"', values: { A: 'ten', B: 2 }, expected: 'rejected / handled', actual: 'may crash or compare wrongly', reveals: false }
      ],
      fixes: [
        { text: 'Change line 2 to IF A > B THEN', correct: true, why: 'Then Max ← A runs when A is larger. The program already runs, so this is a logic repair.' },
        { text: 'Add a missing closing bracket only', correct: false, why: 'The pseudocode is structured. The symptom is a wrong result, not a broken language rule.' },
        { text: 'Delete OUTPUT Max', correct: false, why: 'That hides the result instead of correcting the comparison.' }
      ]
    },
    {
      id: 'syntax-if',
      title: 'Pass mark message',
      purpose: 'Output Pass if mark is at least 50.',
      errorType: 'Syntax error',
      bugLine: 2,
      whyTest: 'The program does not start. Test data cannot run yet. The IF line is missing THEN, so the translator rejects the code before any mark is processed.',
      code: [
        'INPUT mark',
        'IF mark >= 50',
        '    OUTPUT "Pass"',
        'ELSE',
        '    OUTPUT "Fail"'
      ],
      tests: [
        { kind: 'Normal', label: 'mark=72', values: { mark: 72 }, expected: 'Pass', actual: 'does not run', reveals: true },
        { kind: 'Boundary', label: 'mark=50', values: { mark: 50 }, expected: 'Pass', actual: 'does not run', reveals: true },
        { kind: 'Erroneous', label: 'mark="A"', values: { mark: 'A' }, expected: 'handled as invalid', actual: 'does not run', reveals: false }
      ],
      fixes: [
        { text: 'Write IF mark >= 50 THEN', correct: true, why: 'THEN belongs to the IF statement. Until syntax is valid, no test data can prove the logic.' },
        { text: 'Change 50 to 49 only', correct: false, why: 'The boundary value is not the reason the program fails to start.' },
        { text: 'Replace OUTPUT with print in a random place', correct: false, why: 'Guessing language words without fixing the IF structure does not teach the error type.' }
      ]
    },
    {
      id: 'runtime-div',
      title: 'Percentage remaining',
      purpose: 'Output 100 / score as a simple remaining index.',
      errorType: 'Runtime error',
      bugLine: 2,
      whyTest: 'Normal score=50 outputs 2 and the program finishes. Score=0 is a boundary/erroneous numeric case: division by zero stops during execution. That symptom is runtime, not a missing keyword.',
      code: [
        'INPUT score',
        'OUTPUT 100 / score'
      ],
      tests: [
        { kind: 'Normal', label: 'score=50', values: { score: 50 }, expected: '2', actual: '2', reveals: false },
        { kind: 'Boundary', label: 'score=0', values: { score: 0 }, expected: 'handled (no divide by zero)', actual: 'runtime error', reveals: true },
        { kind: 'Erroneous', label: 'score="n/a"', values: { score: 'n/a' }, expected: 'rejected', actual: 'may also fail at run time', reveals: false }
      ],
      fixes: [
        { text: 'Check score = 0 (or invalid) before dividing, and output a message instead', correct: true, why: 'The statement is legal syntax. It fails while running when the divisor is 0. Guard the operation.' },
        { text: 'Remove INPUT so nobody can type 0', correct: false, why: 'Hiding input does not teach validation or error handling.' },
        { text: 'Call it a copyright error', correct: false, why: 'Copyright is Core E, not an execution error type.' }
      ]
    },
    {
      id: 'valid-logic',
      title: 'Mark validation loop',
      purpose: 'Repeat input until mark is from 0 to 100 inclusive.',
      errorType: 'Logic error',
      bugLine: 3,
      whyTest: 'Erroneous mark=150 should repeat. The condition uses AND between two impossibilities (mark < 0 AND mark > 100), so the loop never repeats. The program runs; the validation logic is wrong.',
      code: [
        'REPEAT',
        '    INPUT mark',
        'UNTIL mark < 0 AND mark > 100'
      ],
      tests: [
        { kind: 'Normal', label: 'mark=72', values: { mark: 72 }, expected: 'accept 72', actual: 'accepts immediately (lucky)', reveals: false },
        { kind: 'Boundary', label: 'mark=0', values: { mark: 0 }, expected: 'accept 0', actual: 'accepts', reveals: false },
        { kind: 'Erroneous', label: 'mark=150', values: { mark: 150 }, expected: 'repeat input', actual: 'accepts 150', reveals: true }
      ],
      fixes: [
        { text: 'UNTIL mark >= 0 AND mark <= 100', correct: true, why: 'UNTIL should be true when the mark is valid. Repeat while invalid uses OR: mark < 0 OR mark > 100.' },
        { text: 'Change REPEAT to a syntax-only keyword swap', correct: false, why: 'The program already runs. The boolean condition is the fault.' },
        { text: 'Only test mark=72 forever', correct: false, why: 'Normal data hides the bug. Erroneous 150 reveals it.' }
      ]
    }
  ];

  function renderD6(activity) {
    const bug = pick(D6_CASES);
    return global.makeActivityShell(activity, `
      <div class="lab-shell d6-lab" data-d6-lab data-bug="${escapeHtml(bug.id)}">
        <p class="lab-scenario"><strong>${escapeHtml(bug.title)}</strong> Purpose: ${escapeHtml(bug.purpose)} Observe the symptom with test data before you name the error type.</p>
        <ol class="d6-steps">
          <li>Choose test data and run</li>
          <li>Name the error type</li>
          <li>Click the faulty line</li>
          <li>Choose the correction and rerun</li>
        </ol>
        <pre class="d6-code" data-d6-code>${bug.code.map((line, index) => `<button type="button" data-d6-line="${index + 1}"><span>${index + 1}</span>${escapeHtml(line)}</button>`).join('')}</pre>
        <div class="d6-tests" role="group" aria-label="Test data">
          ${bug.tests.map((test, index) => `
            <button type="button" class="d6-test" data-d6-test="${index}">
              <strong>${escapeHtml(test.kind)}</strong>
              <span>${escapeHtml(test.label)}</span>
            </button>
          `).join('')}
        </div>
        <p class="d6-output" data-d6-output>Choose test data, then run.</p>
        <button class="primary-btn" type="button" data-d6-run>Run with selected test</button>
        <fieldset class="d6-type">
          <legend>Error type</legend>
          ${['Syntax error', 'Runtime error', 'Logic error'].map(type => `
            <label><input type="radio" name="d6type" value="${type}"> ${type}</label>
          `).join('')}
        </fieldset>
        <div class="d6-fixes" data-d6-fixes></div>
        <button class="secondary-btn" type="button" data-d6-new>Hunt another bug</button>
        <div data-d6-dse></div>
        <div data-d6-feedback></div>
      </div>
    `);
  }

  function bindD6(root) {
    const lab = root.querySelector('[data-d6-lab]');
    if (!lab) return;
    let bug = D6_CASES.find(item => item.id === lab.dataset.bug) || D6_CASES[0];
    let testIndex = null;
    let located = false;
    let typed = false;
    let fixed = false;
    let ran = false;

    function setFeedback(html) {
      lab.querySelector('[data-d6-feedback]').innerHTML = html;
    }

    function paintFixes() {
      lab.querySelector('[data-d6-fixes]').innerHTML = `
        <p class="lab-help">Choose the correction, then run the revealing test again.</p>
        ${bug.fixes.map((fix, index) => `<button type="button" class="checkpoint-option" data-d6-fix="${index}">${escapeHtml(fix.text)}</button>`).join('')}
      `;
      lab.querySelectorAll('[data-d6-fix]').forEach(button => {
        button.addEventListener('click', () => {
          const fix = bug.fixes[Number(button.dataset.d6Fix)];
          if (!fix.correct) {
            setFeedback(feedbackBox('bad', 'That does not repair the fault.', fix.why, bug.whyTest, 'Stay with the line that caused the symptom.'));
            return;
          }
          fixed = true;
          setFeedback(feedbackBox(
            'good',
            'Correction applied.',
            fix.why,
            'Rerun the test that revealed the bug. The expected output should now appear.',
            'If a new case is needed, hunt another bug, then answer the DSE set.'
          ));
        });
      });
    }

    lab.querySelectorAll('[data-d6-test]').forEach(button => {
      button.addEventListener('click', () => {
        testIndex = Number(button.dataset.d6Test);
        lab.querySelectorAll('[data-d6-test]').forEach(item => item.classList.toggle('active', item === button));
        const test = bug.tests[testIndex];
        setFeedback(feedbackBox('info', `${test.kind} data selected`, `${test.label}. Predict expected output ${test.expected} before you run.`, '', 'Run, then compare expected with actual.'));
      });
    });

    lab.querySelector('[data-d6-run]').addEventListener('click', () => {
      if (testIndex === null) {
        setFeedback(feedbackBox('bad', 'Choose test data first.', 'Debugging is not random clicking. Pick normal, boundary or erroneous data with a reason.', '', 'Erroneous or boundary data often reveals the fault.'));
        return;
      }
      ran = true;
      const test = bug.tests[testIndex];
      const actual = fixed && test.kind !== 'Erroneous' ? test.expected : test.actual;
      lab.querySelector('[data-d6-output]').innerHTML = `<strong>Expected:</strong> ${escapeHtml(test.expected)} · <strong>Actual:</strong> ${escapeHtml(actual)}`;
      if (fixed) {
        setFeedback(feedbackBox('good', 'After the fix, compare again.', `This ${test.kind} case now behaves as intended (${test.expected}), unless it is still invalid input that should be handled separately.`, '', 'Open the DSE transfer when you can name the error type without guessing.'));
        mountDse(lab.querySelector('[data-d6-dse]'), 'D6', 'Use symptom + test data + trace to distinguish syntax, runtime and logic errors.');
        return;
      }
      setFeedback(feedbackBox(
        test.reveals ? 'bad' : 'info',
        test.reveals ? 'This test reveals the fault.' : 'This test does not expose the bug by itself.',
        test.reveals ? bug.whyTest : `Expected ${test.expected} and actual ${test.actual} do not yet force you to see the mistake. Try a case that should fail or hit the boundary.`,
        'Syntax: cannot start. Runtime: stops while running. Logic: runs with the wrong result.',
        'Name the error type, then click the line that caused it.'
      ));
    });

    lab.querySelectorAll('input[name="d6type"]').forEach(input => {
      input.addEventListener('change', () => {
        if (!ran) {
          input.checked = false;
          setFeedback(feedbackBox('info', 'Run a test first.', 'Name the error from the symptom: did it fail to start, stop while running, or finish with the wrong result?', '', 'Choose test data and click Run.'));
          return;
        }
        typed = input.value === bug.errorType;
        setFeedback(feedbackBox(
          typed ? 'good' : 'bad',
          typed ? `${bug.errorType} matches the symptom.` : 'That error type does not match what you observed.',
          typed
            ? bug.whyTest
            : input.value === 'Syntax error'
              ? 'Syntax errors usually prevent the program from running at all.'
              : input.value === 'Runtime error'
                ? 'Runtime errors appear during execution, such as division by zero.'
                : 'Logic errors run to completion but give the wrong result.',
          '',
          typed ? 'Click the pseudocode line that should change.' : 'Match the error type to the symptom, then trace the line.'
        ));
      });
    });

    lab.querySelectorAll('[data-d6-line]').forEach(button => {
      button.addEventListener('click', () => {
        if (!ran || !typed) {
          setFeedback(feedbackBox('info', 'Do not guess the line yet.', 'Observe expected vs actual, then name the error type. Only then trace to the line that caused the first wrong step.', '', ran ? 'Select Syntax, Runtime or Logic from what you saw.' : 'Run a revealing test first.'));
          return;
        }
        const line = Number(button.dataset.d6Line);
        lab.querySelectorAll('[data-d6-line]').forEach(item => item.classList.toggle('active', item === button));
        located = line === bug.bugLine;
        setFeedback(feedbackBox(
          located ? 'good' : 'bad',
          located ? `Line ${line} is where the fault lives.` : `Line ${line} is not the cause.`,
          located ? bug.whyTest : 'Trace from the first unexpected result. Do not change every line.',
          '',
          located ? 'Choose a correction.' : 'Use the test output to locate the first wrong step.'
        ));
        if (located) paintFixes();
      });
    });

    lab.querySelector('[data-d6-new]').addEventListener('click', () => {
      const stage = document.getElementById('activityStage');
      if (!stage) return;
      stage.innerHTML = renderD6({
        mode: 'd6BugHunt',
        title: 'Bug Hunt Lab',
        status: 'Available now',
        goal: 'Observe a symptom, choose test data, trace, name the error, fix it and rerun.',
        misconception: 'A program that runs can still be wrong. Guessing random edits hides the fault.',
        challenge: 'Use normal, boundary and erroneous data. Say why the chosen test reveals the bug.',
        transfer: 'DSE transfer: classify syntax, runtime and logic errors from a short trace.'
      });
      bindD6(stage);
    });
  }

  const E3_CASES = [
    {
      id: 'google-photo',
      work: 'Image',
      title: 'Photo found by web search',
      use: 'Put the photo on the school club website.',
      condition: 'No licence statement. No photographer contact. The image simply appears in search results.',
      answers: {
        permission: 'Must obtain permission',
        attribution: 'Credit is not enough',
        allowed: 'No'
      },
      why: 'Search results are not permission. You still need a licence, permission, or a clearly stated exception. Naming the photographer without rights does not make copying allowed.'
    },
    {
      id: 'cc-by-nc',
      work: 'Image',
      title: 'CC BY-NC classroom photo',
      use: 'Print it on a paid summer-course flyer.',
      condition: 'Creative Commons BY-NC. Credit the author. Non-commercial use only. Derivatives allowed.',
      answers: {
        permission: 'Licence covers only some uses',
        attribution: 'Required',
        allowed: 'No'
      },
      why: 'BY means give credit. NC means do not use it commercially. A paid course flyer is commercial, so this licence does not cover the use even with attribution.'
    },
    {
      id: 'cc-by',
      work: 'Image',
      title: 'CC BY diagram',
      use: 'Insert it in a school presentation and show the author’s name on the slide.',
      condition: 'Creative Commons BY. Credit the author. Commercial use and adaptation allowed.',
      answers: {
        permission: 'Licence covers this use',
        attribution: 'Required',
        allowed: 'Yes'
      },
      why: 'Inspect BY: attribution is required. For this non-conflicting school use, CC BY allows the slide if the author is credited.'
    },
    {
      id: 'freeware',
      work: 'Software',
      title: 'Freeware utility',
      use: 'Install it on school PCs. A student wants to sell copies at a stall.',
      condition: 'Freeware: no charge to use. Source code is not provided. Redistribution for profit is forbidden.',
      answers: {
        permission: 'Licence covers only some uses',
        attribution: 'Keep the licence notice',
        allowed: 'Only part of the plan'
      },
      why: 'Freeware can be free to run without giving you the source code. Selling copies can still break the licence. Open source is a different set of rights.'
    },
    {
      id: 'oss-mit',
      work: 'Code',
      title: 'Open-source snippet (MIT)',
      use: 'Adapt the code in a school project and share the project folder.',
      condition: 'MIT licence: use, copy, modify, distribute, including commercially, if you keep the copyright and permission notice.',
      answers: {
        permission: 'Licence covers this use',
        attribution: 'Keep the licence notice',
        allowed: 'Yes'
      },
      why: 'Open source is not “no rules”. MIT allows modification, but the notice must travel with the code.'
    },
    {
      id: 'shareware',
      work: 'Software',
      title: 'Shareware video editor',
      use: 'Use it for a two-week trial, then keep using it unpaid for the yearbook.',
      condition: 'Shareware: try for 14 days, then purchase a licence for continued use.',
      answers: {
        permission: 'Licence covers only some uses',
        attribution: 'Not the main issue',
        allowed: 'No'
      },
      why: 'Shareware is try-then-buy. Continuing after the trial without paying ignores the licence condition, even for a school yearbook.'
    },
    {
      id: 'youtube',
      work: 'Online video',
      title: 'YouTube explainer',
      use: 'Download the file and re-upload it as the school’s own video.',
      condition: 'Standard streaming platform terms: viewing/embedding may be allowed; downloading and re-uploading as your own is not.',
      answers: {
        permission: 'Must obtain permission',
        attribution: 'Credit is not enough',
        allowed: 'No'
      },
      why: 'The condition is about copying and communicating the work as yours. Linking or official embed tools are different from downloading and re-uploading.'
    },
    {
      id: 'classmate-code',
      work: 'Code',
      title: 'Classmate’s Python program',
      use: 'Submit it as your DSE SBA / coursework with your name only.',
      condition: 'The classmate did not give permission. School academic-honesty rules treat this as another person’s work.',
      answers: {
        permission: 'Must obtain permission',
        attribution: 'Credit is not enough',
        allowed: 'No'
      },
      why: 'Software is a literary work for copyright purposes at DSE level. Submitting someone else’s program as yours is not an allowed use, with or without a short thanks line.'
    }
  ];

  function renderE3(activity) {
    const pile = shuffle(E3_CASES).slice(0, 4);
    return global.makeActivityShell(activity, `
      <div class="lab-shell e3-lab" data-e3-lab>
        <p class="lab-scenario">Inspect the usage condition. Do not answer only “legal / illegal”. Decide permission, attribution, whether <em>this</em> use is allowed, and the licence point that matters.</p>
        <article class="e3-case" data-e3-case></article>
        <div class="e3-decisions">
          <label>Permission
            <select data-e3-permission>
              <option value="">Choose</option>
              <option>Must obtain permission</option>
              <option>Licence covers this use</option>
              <option>Licence covers only some uses</option>
            </select>
          </label>
          <label>Attribution / notice
            <select data-e3-attr>
              <option value="">Choose</option>
              <option>Required</option>
              <option>Keep the licence notice</option>
              <option>Credit is not enough</option>
              <option>Not the main issue</option>
            </select>
          </label>
          <label>Allowed for this stated use?
            <select data-e3-allowed>
              <option value="">Choose</option>
              <option>Yes</option>
              <option>No</option>
              <option>Only part of the plan</option>
            </select>
          </label>
        </div>
        <div class="lab-actions">
          <button class="primary-btn" type="button" data-e3-check>Check this case</button>
          <button class="secondary-btn" type="button" data-e3-next>Another case</button>
        </div>
        <div data-e3-dse></div>
        <div data-e3-feedback></div>
      </div>
    `);
  }

  function bindE3(root) {
    const lab = root.querySelector('[data-e3-lab]');
    if (!lab) return;
    const pile = shuffle(E3_CASES).slice(0, 4);
    let index = 0;
    let solved = 0;

    function paint() {
      const item = pile[index];
      lab.querySelector('[data-e3-case]').innerHTML = `
        <p class="eyebrow">${escapeHtml(item.work)} · Case ${index + 1} / ${pile.length}</p>
        <h4>${escapeHtml(item.title)}</h4>
        <p><strong>Intended use:</strong> ${escapeHtml(item.use)}</p>
        <blockquote class="e3-condition"><span>Condition to inspect</span>${escapeHtml(item.condition)}</blockquote>
      `;
      lab.querySelector('[data-e3-permission]').value = '';
      lab.querySelector('[data-e3-attr]').value = '';
      lab.querySelector('[data-e3-allowed]').value = '';
    }

    lab.querySelector('[data-e3-check]').addEventListener('click', () => {
      const item = pile[index];
      const permission = lab.querySelector('[data-e3-permission]').value;
      const attr = lab.querySelector('[data-e3-attr]').value;
      const allowed = lab.querySelector('[data-e3-allowed]').value;
      if (!permission || !attr || !allowed) {
        lab.querySelector('[data-e3-feedback]').innerHTML = feedbackBox(
          'info',
          'Complete all three decisions.',
          'Permission, attribution and “this use” are separate questions. A yes/no guess is not enough.',
          'Inspect the condition first: BY, NC, trial, freeware vs open source, or “found online”.',
          'Choose an option in each list, then check.'
        );
        return;
      }
      const ok = permission === item.answers.permission && attr === item.answers.attribution && allowed === item.answers.allowed;
      if (ok) solved += 1;
      lab.querySelector('[data-e3-feedback]').innerHTML = feedbackBox(
        ok ? 'good' : 'bad',
        ok ? 'You reasoned from the condition.' : 'The condition does not support that combination.',
        ok ? item.why : `${item.why} Expected: permission — ${item.answers.permission}. Attribution — ${item.answers.attribution}. This use — ${item.answers.allowed}.`,
        'Inspect each licence letter or term. Attribution does not cancel NC, a trial, or missing permission.',
        ok ? 'Open another case. Licences differ; do not reuse a yes/no habit.' : 'Read the licence line again. BY, NC, trial length and “found online” are different facts.'
      );
      if (ok && solved >= 2) {
        mountDse(lab.querySelector('[data-e3-dse]'), 'E3', 'Apply copyright and licence conditions to an unfamiliar school or software scenario.');
      }
    });

    lab.querySelector('[data-e3-next]').addEventListener('click', () => {
      index = (index + 1) % pile.length;
      paint();
      lab.querySelector('[data-e3-feedback]').innerHTML = '';
    });

    paint();
  }

  const EA5_SCENES = [
    {
      id: 'enrol',
      title: 'Students and courses',
      story: 'Each student can take many courses. Each course has many students. Each course is taught by one teacher who has an office.',
      entities: ['Student', 'Course', 'Teacher', 'Enrolment'],
      distractors: ['Name', 'Office', 'Python loop'],
      attributes: {
        Student: ['StudentID', 'StudentName'],
        Course: ['CourseID', 'CourseName'],
        Teacher: ['TeacherID', 'TeacherName', 'Office'],
        Enrolment: ['StudentID', 'CourseID', 'Year']
      },
      keys: {
        Student: 'StudentID',
        Course: 'CourseID',
        Teacher: 'TeacherID',
        Enrolment: 'StudentID + CourseID'
      },
      cardinality: 'M:N between Student and Course, resolved by Enrolment',
      unnormalised: [
        { StudentID: 'S1', StudentName: 'Ann', CourseID: 'C1', CourseName: 'ICT', TeacherName: 'Chan', Office: 'C201' },
        { StudentID: 'S1', StudentName: 'Ann', CourseID: 'C2', CourseName: 'Math', TeacherName: 'Chan', Office: 'C201' },
        { StudentID: 'S2', StudentName: 'Ben', CourseID: 'C1', CourseName: 'ICT', TeacherName: 'Chan', Office: 'D199' }
      ],
      anomaly: 'Chan’s office is C201 in two rows and D199 in another. Updating one copy leaves the database inconsistent.',
      n1: '1NF: each cell atomic. Repeating “course1, course2” columns would violate 1NF — list one enrolment per row instead.',
      n2: '2NF: StudentName depends on StudentID only, not on StudentID+CourseID. Move student facts to Student. CourseName depends on CourseID only.',
      n3: '3NF: Office depends on Teacher, not on Course. Store Office in Teacher, not in the course/enrolment row.'
    },
    {
      id: 'order',
      title: 'Products and orders',
      story: 'A customer places many orders. An order can contain many products. Each product has a supplier phone.',
      entities: ['Customer', 'Order', 'Product', 'OrderItem'],
      distractors: ['Phone', 'Quantity', 'HTML tag'],
      attributes: {
        Customer: ['CustomerID', 'CustomerName'],
        Order: ['OrderID', 'OrderDate', 'CustomerID'],
        Product: ['ProductID', 'ProductName', 'SupplierPhone'],
        OrderItem: ['OrderID', 'ProductID', 'Qty']
      },
      keys: {
        Customer: 'CustomerID',
        Order: 'OrderID',
        Product: 'ProductID',
        OrderItem: 'OrderID + ProductID'
      },
      cardinality: 'M:N between Order and Product, resolved by OrderItem',
      unnormalised: [
        { OrderID: 'O1', CustomerName: 'Lee', Product: 'Mouse', Qty: 2, SupplierPhone: '2111-1000' },
        { OrderID: 'O1', CustomerName: 'Lee', Product: 'Hub', Qty: 1, SupplierPhone: '2111-1000' },
        { OrderID: 'O2', CustomerName: 'Lee', Product: 'Mouse', Qty: 1, SupplierPhone: '2999-0000' }
      ],
      anomaly: 'The same product Mouse has two different supplier phones. Changing one order line does not update the other — an update anomaly.',
      n1: '1NF: do not store several products in one cell. One line per product.',
      n2: '2NF: CustomerName depends on the customer/order key, not on OrderID+ProductID. Qty belongs to the line (both keys).',
      n3: '3NF: SupplierPhone depends on Product/Supplier, not on Qty. Move it out of the order line.'
    }
  ];

  function renderEA5(activity) {
    const scene = pick(EA5_SCENES);
    return global.makeActivityShell(activity, `
      <div class="lab-shell ea5-lab" data-ea5-lab data-scene="${escapeHtml(scene.id)}">
        <p class="lab-scenario"><strong>${escapeHtml(scene.title)}</strong> ${escapeHtml(scene.story)}</p>
        <div class="lab-progress">
          ${['Entities', 'Attributes', 'Keys', 'Cardinality', 'Resolve M:N', 'Anomaly', 'Normalise'].map((label, index) => `
            <span data-ea5-tab="${index}" class="${index === 0 ? 'is-active' : ''}">${index + 1} ${escapeHtml(label)}</span>
          `).join('')}
        </div>
        <section data-ea5-stage="0">
          <p class="lab-help">Select the things you would keep records about. An entity is not a single attribute and not a programming idea. A joining record for many-to-many is added later.</p>
          <div class="ea5-chips" data-ea5-entities>
            ${shuffle([...scene.entities, ...scene.distractors]).map(item => `
              <button type="button" class="c1-device" data-ea5-ent="${escapeHtml(item)}">${escapeHtml(item)}</button>
            `).join('')}
          </div>
          <button class="primary-btn" type="button" data-ea5-check="0">Check entities</button>
        </section>
        <section data-ea5-stage="1" hidden>
          <p class="lab-help">Match each attribute to an entity. Foreign keys will appear on the relationship table in a later step.</p>
          <div class="ea5-attr-grid" data-ea5-attrs></div>
          <button class="primary-btn" type="button" data-ea5-check="1">Check attributes</button>
        </section>
        <section data-ea5-stage="2" hidden>
          <p class="lab-help">Choose the primary key of each table. A composite key is allowed when two fields together are unique.</p>
          <div data-ea5-keys></div>
          <button class="primary-btn" type="button" data-ea5-check="2">Check keys</button>
        </section>
        <section data-ea5-stage="3" hidden>
          <p class="lab-help">This syllabus uses binary relationships. What is the cardinality between the two main business objects before you add a bridge table?</p>
          <div class="checkpoint-options">
            <button type="button" class="checkpoint-option" data-ea5-card="1:1">1:1</button>
            <button type="button" class="checkpoint-option" data-ea5-card="1:M">1:M only</button>
            <button type="button" class="checkpoint-option" data-ea5-card="M:N">M:N</button>
          </div>
        </section>
        <section data-ea5-stage="4" hidden>
          <p class="lab-help">Many-to-many is implemented with an associative table containing two foreign keys. That produces two 1:M relationships.</p>
          <div class="ea5-erd" data-ea5-erd></div>
          <button class="primary-btn" type="button" data-ea5-check="4">Show resolved design</button>
        </section>
        <section data-ea5-stage="5" hidden>
          <p class="lab-help">Redundancy is not just “data appears twice”. Watch what happens when one copy is updated.</p>
          <div data-ea5-messy></div>
          <button class="primary-btn" type="button" data-ea5-anomaly>Update one copy only</button>
        </section>
        <section data-ea5-stage="6" hidden>
          <article class="ea5-nf"><h4>1NF</h4><p data-ea5-n1></p></article>
          <article class="ea5-nf"><h4>2NF</h4><p data-ea5-n2></p></article>
          <article class="ea5-nf"><h4>3NF</h4><p data-ea5-n3></p></article>
          <div data-ea5-split></div>
          <button class="primary-btn" type="button" data-ea5-to-dse>DSE transfer</button>
        </section>
        <section data-ea5-stage="7" hidden>
          <div data-ea5-dse></div>
        </section>
        <div data-ea5-feedback></div>
      </div>
    `);
  }

  function bindEA5(root) {
    const lab = root.querySelector('[data-ea5-lab]');
    if (!lab) return;
    const scene = EA5_SCENES.find(item => item.id === lab.dataset.scene) || EA5_SCENES[0];
    const chosen = new Set();

    function show(index) {
      lab.querySelectorAll('[data-ea5-stage]').forEach(section => {
        section.hidden = Number(section.dataset.ea5Stage) !== index;
      });
      lab.querySelectorAll('[data-ea5-tab]').forEach(tab => {
        tab.classList.toggle('is-active', Number(tab.dataset.ea5Tab) === index);
      });
    }

    function setFeedback(html) {
      lab.querySelector('[data-ea5-feedback]').innerHTML = html;
    }

    function tableHtml(rows) {
      const cols = Object.keys(rows[0]);
      return `
        <table class="a5-result">
          <thead><tr>${cols.map(col => `<th>${escapeHtml(col)}</th>`).join('')}</tr></thead>
          <tbody>${rows.map(row => `<tr>${cols.map(col => `<td>${escapeHtml(row[col])}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>
      `;
    }

    lab.querySelectorAll('[data-ea5-ent]').forEach(button => {
      button.addEventListener('click', () => {
        const name = button.dataset.ea5Ent;
        if (chosen.has(name)) chosen.delete(name);
        else chosen.add(name);
        button.classList.toggle('active', chosen.has(name));
      });
    });

    lab.querySelector('[data-ea5-check="0"]').addEventListener('click', () => {
      const core = scene.entities.filter(item => item !== 'Enrolment' && item !== 'OrderItem');
      const missing = core.filter(item => !chosen.has(item));
      const extra = [...chosen].filter(item => !scene.entities.includes(item));
      if (missing.length || extra.length) {
        setFeedback(feedbackBox(
          'bad',
          extra.length ? `${extra[0]} is not an entity type here.` : `${missing[0]} is missing.`,
          extra.includes('Name') || extra.includes('Office') || extra.includes('Phone') || extra.includes('Quantity')
            ? 'Name, office, phone and quantity are attributes. They describe an entity; they are not entity types on their own in this scenario.'
            : `${core.join(', ')} are the main records. A joining table is added when we resolve M:N.`,
          'Entity = thing with records. Attribute = property of that thing.',
          'Tick the business objects first. Enrolment / OrderItem come in the M:N step.'
        ));
        return;
      }
      setFeedback(feedbackBox(
        'good',
        'Main entity types identified.',
        chosen.has(scene.entities[3])
          ? 'You already named the joining record. We will still place its keys when M:N is resolved.'
          : 'The many-to-many link still needs a joining record. That box appears after cardinality.',
        'Stay with binary relationships. Do not treat a single field as an entity.',
        'Place attributes on the correct entity. Shared IDs on the bridge are foreign keys.'
      ));
      const host = lab.querySelector('[data-ea5-attrs]');
      const attrs = Object.entries(scene.attributes).flatMap(([entity, list]) => list.map(attr => ({ entity, attr })));
      host.innerHTML = attrs.map(item => `
        <label>${escapeHtml(item.attr)} →
          <select data-ea5-attr-entity="${escapeHtml(item.entity)}" data-ea5-attr="${escapeHtml(item.attr)}">
            <option value="">Entity</option>
            ${scene.entities.map(entity => `<option value="${escapeHtml(entity)}">${escapeHtml(entity)}</option>`).join('')}
          </select>
        </label>
      `).join('');
      show(1);
    });

    lab.querySelector('[data-ea5-check="1"]').addEventListener('click', () => {
      const wrong = [];
      Object.entries(scene.attributes).forEach(([entity, list]) => {
        list.forEach(attr => {
          const value = lab.querySelector(`[data-ea5-attr-entity="${entity}"][data-ea5-attr="${attr}"]`)?.value;
          if (value !== entity) wrong.push(`${attr} belongs to ${entity}.`);
        });
      });
      if (wrong.length) {
        setFeedback(feedbackBox('bad', 'An attribute is on the wrong entity.', wrong[0], 'Put identifying and describing facts with the object they belong to. Shared IDs on Enrolment/OrderItem are foreign keys.', 'Correct the highlighted mapping.'));
        return;
      }
      lab.querySelector('[data-ea5-keys]').innerHTML = scene.entities.map(entity => `
        <label>${escapeHtml(entity)} primary key
          <select data-ea5-key="${escapeHtml(entity)}">
            <option value="">Choose</option>
            ${[scene.keys[entity], ...scene.attributes[entity]].filter((item, index, all) => all.indexOf(item) === index).map(item => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join('')}
          </select>
        </label>
      `).join('');
      setFeedback(feedbackBox('good', 'Attributes sit with the right entity.', '', '', 'Select primary keys. The bridge table often needs a composite key.'));
      show(2);
    });

    lab.querySelector('[data-ea5-check="2"]').addEventListener('click', () => {
      const wrong = scene.entities.filter(entity => lab.querySelector(`[data-ea5-key="${entity}"]`)?.value !== scene.keys[entity]);
      if (wrong.length) {
        setFeedback(feedbackBox('bad', `Check the key of ${wrong[0]}.`, `${wrong[0]} is identified by ${scene.keys[wrong[0]]}.`, 'A composite key is two or more fields that are unique together. Foreign keys reference another table’s primary key.', 'Do not use Name as a primary key.'));
        return;
      }
      setFeedback(feedbackBox('good', 'Keys selected.', 'Next: the business relationship is many-to-many until a bridge table is added.', '', 'Choose the cardinality of the original business link.'));
      show(3);
    });

    lab.querySelectorAll('[data-ea5-card]').forEach(button => {
      button.addEventListener('click', () => {
        const value = button.dataset.ea5Card;
        const ok = value === 'M:N';
        setFeedback(feedbackBox(
          ok ? 'good' : 'bad',
          ok ? 'The business link is M:N.' : 'That cardinality does not match the story.',
          ok ? scene.cardinality : 'One student/order/product side has many of the other, and the reverse is also many. That is M:N, not a single 1:M.',
          'DSE ER practice stays binary. Resolve M:N with an associative entity.',
          'See how the bridge table splits M:N into two 1:M links.'
        ));
        if (ok) {
          const names = scene.entities;
          lab.querySelector('[data-ea5-erd]').innerHTML = `
            <div class="ea5-erd-row">
              <article>${escapeHtml(names[0])}<small>1</small></article>
              <span>1:M</span>
              <article>${escapeHtml(names[3])}<small>bridge · two FKs</small></article>
              <span>M:1</span>
              <article>${escapeHtml(names[1])}<small>1</small></article>
            </div>
            <p class="lab-help">Do not store many related IDs in one comma-separated field. The bridge row holds one pair.</p>
          `;
          show(4);
        }
      });
    });

    lab.querySelector('[data-ea5-check="4"]').addEventListener('click', () => {
      lab.querySelector('[data-ea5-messy]').innerHTML = tableHtml(scene.unnormalised);
      setFeedback(feedbackBox('info', 'Unnormalised / poorly packed data', 'The same fact is stored more than once. That is the setup for an update anomaly.', '', 'Change one copy and watch the contradiction.'));
      show(5);
    });

    lab.querySelector('[data-ea5-anomaly]').addEventListener('click', () => {
      const rows = scene.unnormalised.map((row, index) => (index === 0 ? { ...row } : { ...row }));
      const cols = Object.keys(rows[0]);
      const officeLike = cols.find(col => /office|phone/i.test(col));
      if (officeLike) rows[0][officeLike] = 'UPDATED-ONLY-HERE';
      lab.querySelector('[data-ea5-messy]').innerHTML = tableHtml(rows);
      setFeedback(feedbackBox(
        'bad',
        'Update anomaly visible.',
        scene.anomaly,
        'Decomposition stores the fact once (in Teacher or Product) and references it with a key.',
        'Walk 1NF → 2NF → 3NF using these actual columns, not the slogan only.'
      ));
      lab.querySelector('[data-ea5-n1]').textContent = scene.n1;
      lab.querySelector('[data-ea5-n2]').textContent = scene.n2;
      lab.querySelector('[data-ea5-n3]').textContent = scene.n3;
      lab.querySelector('[data-ea5-split]').innerHTML = Object.entries(scene.attributes).map(([entity, list]) => `
        <article class="ea5-nf">
          <h4>${escapeHtml(entity)}</h4>
          <p>${escapeHtml(list.join(', '))} · PK ${escapeHtml(scene.keys[entity])}</p>
        </article>
      `).join('');
      show(6);
    });

    lab.querySelector('[data-ea5-to-dse]').addEventListener('click', () => {
      show(7);
      mountDse(lab.querySelector('[data-ea5-dse]'), 'EA5', 'Identify entities, resolve M:N, and explain why a decomposed table removes an anomaly.');
    });
  }

  function register() {
    if (!global.ActivityLabs?.register) return;
    global.ActivityLabs.register('a5Database', renderA5, bindA5);
    global.ActivityLabs.register('d6BugHunt', renderD6, bindD6);
    global.ActivityLabs.register('e3Licence', renderE3, bindE3);
    global.ActivityLabs.register('ea5Erd', renderEA5, bindEA5);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', register);
  else register();
})(window);
