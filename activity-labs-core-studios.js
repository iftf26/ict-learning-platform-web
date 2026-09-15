/**
 * Core learning studios: objective interactions plus spoken reflection prompts.
 * The site checks only deterministic choices; students explain their reasoning aloud.
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

  function shuffle(items) {
    if (global.CheckpointEngine?.shuffle) return global.CheckpointEngine.shuffle(items);
    return [...items].sort(() => Math.random() - 0.5);
  }

  function pick(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function shell(activity, content) {
    return global.makeActivityShell(activity, content);
  }

  function feedback(tone, title, why, concept, next) {
    return `
      <div class="lab-feedback ${tone}" role="status">
        <strong>${escapeHtml(title)}</strong>
        <p>${escapeHtml(why)}</p>
        ${concept ? `<p class="checkpoint-concept"><span>Correct concept</span>${escapeHtml(concept)}</p>` : ''}
        ${next ? `<p class="checkpoint-next"><span>Next</span>${escapeHtml(next)}</p>` : ''}
      </div>
    `;
  }

  function pausePrompt(prompt) {
    return `
      <aside class="spoken-prompt" aria-label="Talk prompt">
        <span aria-hidden="true">◌</span>
        <div>
          <strong>停一停，講畀老師／同學聽</strong>
          <p>${escapeHtml(prompt)}</p>
          <small>這裡不用輸入答案；請用你剛才看到的證據說明。</small>
        </div>
      </aside>
    `;
  }

  function stageTabs(lab, stage) {
    lab.querySelectorAll('[data-core-stage]').forEach((panel) => {
      panel.hidden = Number(panel.dataset.coreStage) !== stage;
    });
    lab.querySelectorAll('[data-core-goto]').forEach((button) => {
      const active = Number(button.dataset.coreGoto) === stage;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }

  function bindTabs(lab) {
    stageTabs(lab, 1);
    lab.querySelectorAll('[data-core-goto]').forEach((button) => {
      button.addEventListener('click', () => stageTabs(lab, Number(button.dataset.coreGoto)));
    });
    return (stage) => stageTabs(lab, stage);
  }

  function stageHeader(labels) {
    return `
      <div class="core-stage-tabs" role="tablist">
        ${labels.map((label, index) => `<button type="button" data-core-goto="${index + 1}" role="tab">${index + 1} · ${escapeHtml(label)}</button>`).join('')}
      </div>
    `;
  }

  /* ---------- C3 Protocol Repair ---------- */
  const PROTOCOL_MATCHES = [
    { action: 'Translate studyhub.edu.hk into an IP address before connecting.', answer: 'DNS', why: 'DNS resolves a domain name to an IP address. It does not carry the webpage itself.' },
    { action: 'Request a login page with encryption and certificate checks.', answer: 'HTTPS', why: 'HTTPS supports encrypted web communication and certificate-based trust.' },
    { action: 'Send an email from a mail client to the school mail server.', answer: 'SMTP', why: 'SMTP is for sending email.' },
    { action: 'Access messages already stored on the mail server across devices.', answer: 'IMAP', why: 'IMAP accesses and synchronises mail held on the server.' },
    { action: 'Transfer a file to or from a server using a file-transfer service.', answer: 'FTP', why: 'FTP is a file-transfer protocol.' },
    { action: 'Address, route, sequence and reassemble a web message as packets.', answer: 'TCP/IP', why: 'TCP/IP supports packet communication, addressing, sequencing and reassembly ideas.' }
  ];

  const PROTOCOL_FAULTS = [
    {
      story: 'A student can open a page by typing 203.0.113.8, but www.studyhub.edu.hk shows “server not found”.',
      choices: ['DNS lookup', 'HTTPS encryption', 'SMTP sending'],
      answer: 'DNS lookup',
      why: 'The direct IP route works. The failed step is translating the name into that IP address.'
    },
    {
      story: 'A payment page loads, but the browser warns that its certificate is not trusted before the student enters card details.',
      choices: ['HTTPS / certificate check', 'DNS lookup', 'FTP transfer'],
      answer: 'HTTPS / certificate check',
      why: 'The issue is with secure web communication and certificate trust, not with locating the server.'
    },
    {
      story: 'An email is in the Outbox. The student can read old messages but cannot send this one to the mail server.',
      choices: ['SMTP sending', 'IMAP access', 'IP address formatting'],
      answer: 'SMTP sending',
      why: 'Reading stored mail and sending new mail are different roles. SMTP handles sending.'
    }
  ];

  const PROTOCOL_TRAPS = [
    {
      story: 'A student needs to send a homework file as an email attachment. They choose HTTPS because it is secure.',
      choices: ['HTTPS — encrypted webpage request', 'SMTP — send the email', 'DNS — resolve the domain name'],
      answer: 'SMTP — send the email',
      why: 'HTTPS is a sensible security idea but it is not the protocol role for sending email from the client to the mail server.'
    },
    {
      story: 'A browser cannot find ict.example.edu. A student chooses TCP/IP because packets need routes.',
      choices: ['TCP/IP — packet communication', 'DNS — resolve the domain name', 'FTP — transfer a file'],
      answer: 'DNS — resolve the domain name',
      why: 'Packet routing happens after the destination has been identified. The missing name-to-address step is DNS.'
    },
    {
      story: 'A student wants to read messages kept on the school mail server using both phone and laptop. They choose SMTP.',
      choices: ['SMTP — send new mail', 'IMAP — access stored mail', 'HTTPS — request a webpage'],
      answer: 'IMAP — access stored mail',
      why: 'SMTP sends. IMAP is used to access and synchronise messages stored on the server.'
    }
  ];

  function renderProtocolRepair(activity) {
    const matches = shuffle(PROTOCOL_MATCHES).slice(0, 4);
    const fault = pick(PROTOCOL_FAULTS);
    const trap = pick(PROTOCOL_TRAPS);
    return shell(activity, `
      <div class="lab-shell core-studio protocol-studio" data-protocol-lab>
        ${stageHeader(['Match the role', 'Repair the journey', 'Right but wrong', 'Say it aloud'])}
        <section data-core-stage="1">
          <p class="lab-help">Match the action to the protocol role. The site checks the mapping; your explanation stays spoken.</p>
          <div class="protocol-match-grid">
            ${matches.map((item, index) => `
              <label class="protocol-match-row" data-protocol-row>
                <span>${index + 1}</span>
                <b>${escapeHtml(item.action)}</b>
                <select data-protocol-answer="${escapeHtml(item.answer)}" aria-label="Choose protocol for action ${index + 1}">
                  <option value="">Choose protocol</option>
                  ${shuffle(['DNS', 'HTTPS', 'SMTP', 'IMAP', 'FTP', 'TCP/IP']).map(protocol => `<option value="${protocol}">${protocol}</option>`).join('')}
                </select>
              </label>
            `).join('')}
          </div>
          <div class="lab-actions"><button type="button" class="primary-btn" data-protocol-check>Check roles</button></div>
          <div data-protocol-feedback></div>
        </section>
        <section data-core-stage="2" hidden>
          <article class="studio-case"><p class="eyebrow">Broken journey</p><h4>Where did this online action break?</h4><p>${escapeHtml(fault.story)}</p></article>
          <div class="studio-choice-grid">
            ${shuffle(fault.choices).map(choice => `<button type="button" class="studio-choice" data-protocol-fault="${escapeHtml(choice)}" data-answer="${escapeHtml(fault.answer)}" data-why="${escapeHtml(fault.why)}">${escapeHtml(choice)}</button>`).join('')}
          </div>
          <div data-protocol-fault-feedback></div>
        </section>
        <section data-core-stage="3" hidden>
          <article class="studio-case"><p class="eyebrow">Valid but wrong</p><h4>Which answer fits the student's real task?</h4><p>${escapeHtml(trap.story)}</p></article>
          <div class="studio-choice-grid">
            ${shuffle(trap.choices).map(choice => `<button type="button" class="studio-choice" data-protocol-trap="${escapeHtml(choice)}" data-answer="${escapeHtml(trap.answer)}" data-why="${escapeHtml(trap.why)}">${escapeHtml(choice)}</button>`).join('')}
          </div>
          <div data-protocol-trap-feedback></div>
        </section>
        <section data-core-stage="4" hidden>
          ${pausePrompt('Choose one journey you just saw. Describe the action first, then the protocol role, then what evidence ruled out the tempting wrong answer.')}
          <button type="button" class="secondary-btn" data-protocol-new>Try a different protocol set</button>
        </section>
      </div>
    `);
  }

  function bindProtocolRepair(stage, activity) {
    const lab = stage.querySelector('[data-protocol-lab]');
    if (!lab) return;
    const go = bindTabs(lab);
    const matchFeedback = lab.querySelector('[data-protocol-feedback]');
    lab.querySelector('[data-protocol-check]').addEventListener('click', () => {
      const selects = [...lab.querySelectorAll('[data-protocol-answer]')];
      if (selects.some(select => !select.value)) {
        matchFeedback.innerHTML = feedback('info', 'Match every action first.', 'Each action has one principal protocol role in this activity.', '', 'Read the verb: resolve, request, send, access, transfer, or deliver packets.');
        return;
      }
      let correct = 0;
      selects.forEach(select => {
        const row = select.closest('[data-protocol-row]');
        const ok = select.value === select.dataset.protocolAnswer;
        correct += ok ? 1 : 0;
        row.classList.toggle('is-correct', ok);
        row.classList.toggle('is-wrong', !ok);
      });
      if (correct !== selects.length) {
        matchFeedback.innerHTML = feedback('bad', `${correct}/${selects.length} roles matched.`, 'Look at the action verb instead of choosing the protocol that merely sounds familiar.', 'DNS resolves names; HTTPS protects web requests; SMTP sends email; IMAP accesses stored mail; FTP transfers files; TCP/IP carries packets.', 'Repair the highlighted mappings, then check again.');
        return;
      }
      matchFeedback.innerHTML = feedback('good', 'Protocol roles matched.', 'You connected a user action to the role that performs it.', 'Protocol names are not interchangeable labels.', 'Open “Repair the journey”.');
      go(2);
    });

    lab.querySelectorAll('[data-protocol-fault]').forEach(button => {
      button.addEventListener('click', () => {
        const ok = button.dataset.protocolFault === button.dataset.answer;
        lab.querySelectorAll('[data-protocol-fault]').forEach(item => item.classList.remove('is-correct', 'is-wrong'));
        button.classList.add(ok ? 'is-correct' : 'is-wrong');
        lab.querySelector('[data-protocol-fault-feedback]').innerHTML = feedback(ok ? 'good' : 'bad', ok ? 'Broken stage located.' : 'That stage is not the first failure.', ok ? button.dataset.why : `Read the symptom again. ${button.dataset.why}`, '', ok ? 'Try the “Right but wrong” case.' : 'Choose the stage directly supported by the evidence.');
        if (ok) go(3);
      });
    });

    lab.querySelectorAll('[data-protocol-trap]').forEach(button => {
      button.addEventListener('click', () => {
        const ok = button.dataset.protocolTrap === button.dataset.answer;
        lab.querySelectorAll('[data-protocol-trap]').forEach(item => item.classList.remove('is-correct', 'is-wrong'));
        button.classList.add(ok ? 'is-correct' : 'is-wrong');
        lab.querySelector('[data-protocol-trap-feedback]').innerHTML = feedback(ok ? 'good' : 'bad', ok ? 'Suitable protocol chosen.' : 'Technically plausible is not enough.', ok ? button.dataset.why : `The real task decides the protocol role. ${button.dataset.why}`, '', ok ? 'Finish with the spoken explanation prompt.' : 'Identify the action before naming a protocol.');
        if (ok) go(4);
      });
    });
    lab.querySelector('[data-protocol-new]').addEventListener('click', () => {
      stage.innerHTML = renderProtocolRepair(activity);
      bindProtocolRepair(stage, activity);
    });
  }

  /* ---------- A5 Formula Doctor ---------- */
  const FORMULA_CASES = [
    {
      title: 'Pass counter',
      task: 'Count how many marks in C2:C6 are 50 or above.',
      broken: '=SUMIF(C2:C6,">=50")',
      diagnosis: 'It adds matching marks instead of counting matching cells.',
      repair: '=COUNTIF(C2:C6,">=50")',
      repairs: ['=COUNTIF(C2:C6,">=50")', '=COUNT(C2:C6,">=50")', '=IF(C2:C6>=50)'],
      output: 'Marks 42, 51, 68, 49, 80 → result 3',
      prompt: 'Why does COUNTIF fit the word “how many”, while SUMIF does not?'
    },
    {
      title: 'Fixed exchange rate',
      task: 'Calculate the HKD value in G2 from foreign amount F2 and the fixed rate in H2, then copy down.',
      broken: '=F2*H2',
      diagnosis: 'H2 is relative, so it moves to H3 and H4 when copied down even though the rate stays in H2.',
      repair: '=F2*$H$2',
      repairs: ['=F2*$H$2', '=F2*H2', '=$F$2*H2'],
      output: 'Copy down: G3 = F3*$H$2 and G4 = F4*$H$2',
      prompt: 'Which value changes by row, and which value must remain anchored?'
    },
    {
      title: 'Pass / fail label',
      task: 'Show Pass when C2 is at least 50; otherwise show Fail.',
      broken: '=IF(C2>=50,Pass,Fail)',
      diagnosis: 'Pass and Fail are text outputs, so they need quotation marks.',
      repair: '=IF(C2>=50,"Pass","Fail")',
      repairs: ['=IF(C2>=50,"Pass","Fail")', '=IF(C2>=50,Pass,Fail)', '=COUNTIF(C2>=50,"Pass","Fail")'],
      output: 'C2 = 58 → Pass; C2 = 42 → Fail',
      prompt: 'Why are 50 and "Pass" treated differently in a formula?'
    },
    {
      title: 'Average mark',
      task: 'Find the mean of marks in C2:C6.',
      broken: '=MAX(C2:C6)',
      diagnosis: 'MAX returns only the largest value; the question asks for the mean of all values.',
      repair: '=AVERAGE(C2:C6)',
      repairs: ['=AVERAGE(C2:C6)', '=MAX(C2:C6)', '=COUNT(C2:C6)'],
      output: 'Marks 42, 51, 68, 49, 80 → result 58',
      prompt: 'Which word in the question rules out MAX and COUNT?'
    }
  ];

  function renderFormulaDoctor(activity) {
    const item = pick(FORMULA_CASES);
    const diagnoses = shuffle([
      item.diagnosis,
      'The formula needs a different table name.',
      'The formula must be sorted before it can calculate.'
    ]);
    return shell(activity, `
      <div class="lab-shell core-studio formula-doctor" data-formula-doctor>
        ${stageHeader(['Spot the fault', 'Repair it', 'Run the repair', 'Say it aloud'])}
        <section data-core-stage="1">
          <article class="studio-case"><p class="eyebrow">Formula case</p><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.task)}</p><code class="studio-code">${escapeHtml(item.broken)}</code></article>
          <p class="lab-help">What makes this formula unsuitable?</p>
          <div class="studio-choice-grid">
            ${diagnoses.map(choice => `<button type="button" class="studio-choice" data-formula-diagnosis="${escapeHtml(choice)}" data-answer="${escapeHtml(item.diagnosis)}">${escapeHtml(choice)}</button>`).join('')}
          </div>
          <div data-formula-diagnosis-feedback></div>
        </section>
        <section data-core-stage="2" hidden>
          <article class="studio-case"><p class="eyebrow">Repair one thing only</p><h4>${escapeHtml(item.task)}</h4><p>Choose the formula that directly fixes the fault.</p></article>
          <div class="studio-choice-grid formula-choice-grid">
            ${shuffle(item.repairs).map(choice => `<button type="button" class="studio-choice studio-code-choice" data-formula-repair="${escapeHtml(choice)}" data-answer="${escapeHtml(item.repair)}"><code>${escapeHtml(choice)}</code></button>`).join('')}
          </div>
          <div data-formula-repair-feedback></div>
        </section>
        <section data-core-stage="3" hidden>
          <div class="formula-run-card">
            <p class="eyebrow">Observed result</p>
            <code class="studio-code">${escapeHtml(item.repair)}</code>
            <strong>${escapeHtml(item.output)}</strong>
            <p>Use the visible output as evidence. Do not rely only on a formula that looks familiar.</p>
          </div>
          <div class="lab-actions"><button type="button" class="secondary-btn" data-formula-new>Load another formula case</button></div>
        </section>
        <section data-core-stage="4" hidden>
          ${pausePrompt(item.prompt)}
          <button type="button" class="secondary-btn" data-formula-new>Try another formula case</button>
        </section>
      </div>
    `);
  }

  function bindFormulaDoctor(stage, activity) {
    const lab = stage.querySelector('[data-formula-doctor]');
    if (!lab) return;
    const go = bindTabs(lab);
    lab.querySelectorAll('[data-formula-diagnosis]').forEach(button => {
      button.addEventListener('click', () => {
        const ok = button.dataset.formulaDiagnosis === button.dataset.answer;
        lab.querySelectorAll('[data-formula-diagnosis]').forEach(item => item.classList.remove('is-correct', 'is-wrong'));
        button.classList.add(ok ? 'is-correct' : 'is-wrong');
        lab.querySelector('[data-formula-diagnosis-feedback]').innerHTML = feedback(ok ? 'good' : 'bad', ok ? 'Fault identified.' : 'That does not explain the observed error.', ok ? button.dataset.answer : `The actual fault: ${button.dataset.answer}`, 'Name the purpose, criterion or reference behaviour before changing a formula.', ok ? 'Now choose the smallest direct repair.' : 'Read the task verb and the formula function again.');
        if (ok) go(2);
      });
    });
    lab.querySelectorAll('[data-formula-repair]').forEach(button => {
      button.addEventListener('click', () => {
        const ok = button.dataset.formulaRepair === button.dataset.answer;
        lab.querySelectorAll('[data-formula-repair]').forEach(item => item.classList.remove('is-correct', 'is-wrong'));
        button.classList.add(ok ? 'is-correct' : 'is-wrong');
        lab.querySelector('[data-formula-repair-feedback]').innerHTML = feedback(ok ? 'good' : 'bad', ok ? 'Formula repaired.' : 'This formula still does not meet the task.', ok ? 'The repaired expression now matches the stated purpose.' : `Use ${button.dataset.answer} for this case.`, '', ok ? 'Run the repair and inspect its effect.' : 'Fix the named fault, not a different spreadsheet idea.');
        if (ok) go(3);
      });
    });
    lab.querySelectorAll('[data-formula-new]').forEach(button => {
      button.addEventListener('click', () => {
        stage.innerHTML = renderFormulaDoctor(activity);
        bindFormulaDoctor(stage, activity);
      });
    });
  }

  /* ---------- D4/D5 Program Trace and Repair ---------- */
  const PROGRAM_CASES = {
    d4: [
      {
        title: 'Adult checker',
        purpose: 'Print Adult for ages 18 or above.',
        code: ['age = int(input("Age: "))', 'if age > 18:', '    print("Adult")', 'else:', '    print("Child")'],
        tests: [
          { label: 'Age = 20', expected: 'Adult', actual: 'Adult', reveals: false },
          { label: 'Age = 18', expected: 'Adult', actual: 'Child', reveals: true },
          { label: 'Age = 7', expected: 'Child', actual: 'Child', reveals: false }
        ],
        line: 2,
        repair: 'if age >= 18:',
        repairs: ['if age >= 18:', 'if age > 18:', 'if age = 18:'],
        evidence: '18 is the boundary where the decision changes. The program runs, but gives the wrong result.'
      },
      {
        title: 'Add five marks',
        purpose: 'Read a score and print the score after adding 5.',
        code: ['score = input("Score: ")', 'print(score + 5)'],
        tests: [
          { label: 'Score = "A"', expected: 'Rejected / not a score', actual: 'Type problem still unclear', reveals: false },
          { label: 'Score = "42"', expected: '47', actual: 'TypeError: cannot add int to str', reveals: true },
          { label: 'No input supplied', expected: 'Prompt waits', actual: 'Prompt waits', reveals: false }
        ],
        line: 1,
        repair: 'score = int(input("Score: "))',
        repairs: ['score = int(input("Score: "))', 'score = print(input("Score: "))', 'score = input(int("Score: "))'],
        evidence: 'input() returns text. Arithmetic needs a numeric conversion before the addition.'
      }
    ],
    d5: [
      {
        title: 'Count passes in a list',
        purpose: 'Count every mark that is 50 or above.',
        code: ['count = 0', 'for i in range(1, len(marks)):', '    if marks[i] >= 50:', '        count = count + 1', 'print(count)'],
        tests: [
          { label: 'marks = [35, 60]', expected: '1', actual: '1', reveals: false },
          { label: 'marks = [60, 35]', expected: '1', actual: '0', reveals: true },
          { label: 'marks = [20, 30]', expected: '0', actual: '0', reveals: false }
        ],
        line: 2,
        repair: 'for i in range(len(marks)):',
        repairs: ['for i in range(len(marks)):', 'for i in range(1, len(marks) + 1):', 'for i in marks[1:]:'],
        evidence: 'The loop starts at index 1, so it skips the first list element. The revealing test places the only pass first.'
      },
      {
        title: 'Find the total',
        purpose: 'Add every value in marks.',
        code: ['total = 0', 'for mark in marks:', '    total = mark', 'print(total)'],
        tests: [
          { label: 'marks = [40]', expected: '40', actual: '40', reveals: false },
          { label: 'marks = [40, 60]', expected: '100', actual: '60', reveals: true },
          { label: 'marks = [0]', expected: '0', actual: '0', reveals: false }
        ],
        line: 3,
        repair: 'total = total + mark',
        repairs: ['total = total + mark', 'total = mark + mark', 'total = total'],
        evidence: 'The program overwrites total on each loop. A list with more than one value reveals that it is not accumulating.'
      }
    ]
  };

  function renderProgramRepair(activity) {
    const kind = activity.mode === 'd5ProgramRepair' ? 'd5' : 'd4';
    const item = pick(PROGRAM_CASES[kind]);
    return shell(activity, `
      <div class="lab-shell core-studio program-repair" data-program-lab>
        ${stageHeader(['Choose a revealing test', 'Locate the first fault', 'Repair and rerun', 'Say it aloud'])}
        <section data-core-stage="1">
          <article class="studio-case"><p class="eyebrow">${kind === 'd5' ? 'Integrated Python case' : 'Python foundation case'}</p><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.purpose)}</p>${renderCode(item.code)}</article>
          <p class="lab-help">Which test gives evidence that the program is wrong? A normal result alone is not proof.</p>
          <div class="studio-choice-grid">
            ${shuffle(item.tests).map(test => `<button type="button" class="studio-choice" data-program-test="${test.reveals ? 'reveal' : 'ordinary'}" data-expected="${escapeHtml(test.expected)}" data-actual="${escapeHtml(test.actual)}">${escapeHtml(test.label)}</button>`).join('')}
          </div>
          <div class="trace-output" data-program-output>Choose a test to compare expected and actual behaviour.</div>
          <div data-program-test-feedback></div>
        </section>
        <section data-core-stage="2" hidden>
          <article class="studio-case"><p class="eyebrow">Find the first wrong step</p><h4>${escapeHtml(item.title)}</h4><p>Click one line. Do not edit every line at once.</p>${renderCode(item.code, item.line)}</article>
          <div data-program-line-feedback></div>
        </section>
        <section data-core-stage="3" hidden>
          <article class="studio-case"><p class="eyebrow">Apply one repair</p><h4>Replace the faulty line</h4><p>Choose the line that makes the program meet its stated purpose.</p></article>
          <div class="studio-choice-grid formula-choice-grid">
            ${shuffle(item.repairs).map(repair => `<button type="button" class="studio-choice studio-code-choice" data-program-repair="${escapeHtml(repair)}" data-answer="${escapeHtml(item.repair)}"><code>${escapeHtml(repair)}</code></button>`).join('')}
          </div>
          <div data-program-repair-feedback></div>
        </section>
        <section data-core-stage="4" hidden>
          ${pausePrompt(`Explain which test exposed the fault, the first line that caused it, and why the repaired line changes the outcome. Use this case: ${item.title}.`)}
          <button type="button" class="secondary-btn" data-program-new>Load another code case</button>
        </section>
      </div>
    `);
  }

  function renderCode(lines, faultLine = null) {
    return `<ol class="studio-code-list">${lines.map((line, index) => `
      <li><button type="button" class="studio-code-line ${Number(faultLine) === index + 1 ? 'is-suspect' : ''}" data-program-line="${index + 1}"><code>${escapeHtml(line || ' ')}</code></button></li>
    `).join('')}</ol>`;
  }

  function bindProgramRepair(stage, activity) {
    const lab = stage.querySelector('[data-program-lab]');
    if (!lab) return;
    const go = bindTabs(lab);
    const testFeedback = lab.querySelector('[data-program-test-feedback]');
    lab.querySelectorAll('[data-program-test]').forEach(button => {
      button.addEventListener('click', () => {
        const reveal = button.dataset.programTest === 'reveal';
        lab.querySelectorAll('[data-program-test]').forEach(item => item.classList.remove('is-correct', 'is-wrong'));
        button.classList.add(reveal ? 'is-correct' : 'is-wrong');
        lab.querySelector('[data-program-output]').innerHTML = `<strong>Expected:</strong> ${escapeHtml(button.dataset.expected)} <span>→</span> <strong>Actual:</strong> ${escapeHtml(button.dataset.actual)}`;
        testFeedback.innerHTML = feedback(reveal ? 'good' : 'bad', reveal ? 'This test reveals the fault.' : 'This test does not expose the fault.', reveal ? 'Expected and actual behaviour disagree, so this is evidence.' : 'A program can pass an ordinary test and still contain a fault.', '', reveal ? 'Locate the first line that caused the unexpected behaviour.' : 'Try a boundary, type-sensitive, or multi-value case.');
        if (reveal) go(2);
      });
    });
    lab.querySelectorAll('[data-program-line]').forEach(button => {
      button.addEventListener('click', () => {
        const target = Number(button.dataset.programLine);
        const expected = Number([...lab.querySelectorAll('[data-program-line]')].find(line => line.classList.contains('is-suspect'))?.dataset.programLine || 0);
        const ok = target === expected;
        lab.querySelectorAll('[data-program-line]').forEach(line => line.classList.remove('is-correct', 'is-wrong'));
        button.classList.add(ok ? 'is-correct' : 'is-wrong');
        lab.querySelector('[data-program-line-feedback]').innerHTML = feedback(ok ? 'good' : 'bad', ok ? `Line ${target} is the first faulty line.` : `Line ${target} is not the first cause.`, ok ? 'The test evidence points to this statement, so a one-line repair is justified.' : 'Trace from the first unexpected result, not the last line that displays it.', '', ok ? 'Choose the smallest repair and rerun the idea.' : 'Use the revealing test as your evidence.');
        if (ok) go(3);
      });
    });
    lab.querySelectorAll('[data-program-repair]').forEach(button => {
      button.addEventListener('click', () => {
        const ok = button.dataset.programRepair === button.dataset.answer;
        lab.querySelectorAll('[data-program-repair]').forEach(item => item.classList.remove('is-correct', 'is-wrong'));
        button.classList.add(ok ? 'is-correct' : 'is-wrong');
        lab.querySelector('[data-program-repair-feedback]').innerHTML = feedback(ok ? 'good' : 'bad', ok ? 'Repair accepted.' : 'That replacement does not fix this fault.', ok ? 'The program now meets the stated condition using the evidence from the revealing test.' : `The direct repair is ${button.dataset.answer}.`, '', ok ? 'Finish by explaining the evidence aloud.' : 'Repair the first fault only.');
        if (ok) go(4);
      });
    });
    lab.querySelector('[data-program-new]').addEventListener('click', () => {
      stage.innerHTML = renderProgramRepair(activity);
      bindProgramRepair(stage, activity);
    });
  }

  /* ---------- A6.4 SQL Query Builder ---------- */
  const STUDENT_ROWS = [
    { Name: 'Ada', Class: '5A', Mark: 74 },
    { Name: 'Ben', Class: '5A', Mark: 43 },
    { Name: 'Ching', Class: '5B', Mark: 81 },
    { Name: 'Dev', Class: '5A', Mark: 58 },
    { Name: 'Eva', Class: '5B', Mark: 49 }
  ];

  const SQL_CASES = [
    {
      title: 'Pass list for 5A',
      question: 'Show the Name and Mark of students in class 5A whose mark is at least 50, with higher marks first.',
      select: 'Name, Mark',
      where: 'Class = "5A" AND Mark >= 50',
      order: 'Mark DESC',
      selectChoices: ['Name, Mark', 'Class, Mark', 'Name'],
      whereChoices: ['Class = "5A" AND Mark >= 50', 'Mark >= 50', 'Class = "5A" AND Mark < 50'],
      orderChoices: ['Mark DESC', 'Mark ASC', 'Name ASC'],
      detective: 'A query uses WHERE Mark >= 50 but the teacher asks for 5A passes only.',
      detectiveAnswer: 'Add Class = "5A" to WHERE',
      detectiveChoices: ['Add Class = "5A" to WHERE', 'Replace SELECT with DELETE', 'Use ORDER BY Class only']
    },
    {
      title: 'Students needing support',
      question: 'Show the Name of every student whose mark is below 50, ordered alphabetically.',
      select: 'Name',
      where: 'Mark < 50',
      order: 'Name ASC',
      selectChoices: ['Name', 'Name, Mark', 'Class'],
      whereChoices: ['Mark < 50', 'Mark >= 50', 'Class = "5A"'],
      orderChoices: ['Name ASC', 'Mark DESC', 'Mark ASC'],
      detective: 'A query uses SELECT Name, Mark but the question asks only for names of students below 50.',
      detectiveAnswer: 'Select Name and use WHERE Mark < 50',
      detectiveChoices: ['Select Name and use WHERE Mark < 50', 'Use SMTP to send the list', 'Delete marks below 50']
    },
    {
      title: '5B mark report',
      question: 'Show the Name and Mark of 5B students, with the lowest mark first.',
      select: 'Name, Mark',
      where: 'Class = "5B"',
      order: 'Mark ASC',
      selectChoices: ['Name, Mark', 'Name', 'Class, Mark'],
      whereChoices: ['Class = "5B"', 'Class = "5A"', 'Mark < 50'],
      orderChoices: ['Mark ASC', 'Mark DESC', 'Name ASC'],
      detective: 'A query correctly filters 5B but sorts Mark DESC while the request says “lowest first”.',
      detectiveAnswer: 'Change ORDER BY to Mark ASC',
      detectiveChoices: ['Change ORDER BY to Mark ASC', 'Remove WHERE completely', 'Change SELECT to UPDATE']
    }
  ];

  function renderSqlBuilder(activity) {
    const item = pick(SQL_CASES);
    return shell(activity, `
      <div class="lab-shell core-studio sql-builder" data-sql-builder>
        ${stageHeader(['Build and inspect', 'Detect a valid mistake', 'Say it aloud'])}
        <section data-core-stage="1">
          <article class="studio-case"><p class="eyebrow">Data question</p><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.question)}</p></article>
          <div class="sql-controls">
            ${selectControl('SELECT', 'data-sql-select', item.selectChoices)}
            ${selectControl('WHERE', 'data-sql-where', item.whereChoices)}
            ${selectControl('ORDER BY', 'data-sql-order', item.orderChoices)}
          </div>
          <div class="sql-preview" data-sql-preview>Choose the clauses to build a query.</div>
          <div class="sql-result" data-sql-result>Result set will appear here.</div>
          <div class="lab-actions"><button type="button" class="primary-btn" data-sql-check data-answer-select="${escapeHtml(item.select)}" data-answer-where="${escapeHtml(item.where)}" data-answer-order="${escapeHtml(item.order)}">Check this query</button></div>
          <div data-sql-feedback></div>
        </section>
        <section data-core-stage="2" hidden>
          <article class="studio-case"><p class="eyebrow">Valid but wrong query</p><h4>What needs to change?</h4><p>${escapeHtml(item.detective)}</p></article>
          <div class="studio-choice-grid">
            ${shuffle(item.detectiveChoices).map(choice => `<button type="button" class="studio-choice" data-sql-detective="${escapeHtml(choice)}" data-answer="${escapeHtml(item.detectiveAnswer)}">${escapeHtml(choice)}</button>`).join('')}
          </div>
          <div data-sql-detective-feedback></div>
        </section>
        <section data-core-stage="3" hidden>
          ${pausePrompt('Read the data question aloud. Then state which clause chooses columns, which clause chooses rows, and which clause only changes the display order.')}
          <button type="button" class="secondary-btn" data-sql-new>Load another SQL question</button>
        </section>
      </div>
    `);
  }

  function selectControl(label, attribute, choices) {
    return `<label><span>${label}</span><select ${attribute}><option value="">Choose ${label}</option>${choices.map(choice => `<option value="${escapeHtml(choice)}">${escapeHtml(choice)}</option>`).join('')}</select></label>`;
  }

  function renderSqlResult(select, where, order) {
    if (!select || !where || !order) return 'Complete SELECT, WHERE and ORDER BY to preview the result.';
    const fields = select.split(',').map(field => field.trim());
    const filter = sqlFilter(where);
    let rows = STUDENT_ROWS.filter(filter);
    if (order === 'Mark DESC') rows = rows.sort((a, b) => b.Mark - a.Mark);
    if (order === 'Mark ASC') rows = rows.sort((a, b) => a.Mark - b.Mark);
    if (order === 'Name ASC') rows = rows.sort((a, b) => a.Name.localeCompare(b.Name));
    return `
      <table class="lab-table"><thead><tr>${fields.map(field => `<th>${escapeHtml(field)}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(row => `<tr>${fields.map(field => `<td>${escapeHtml(row[field])}</td>`).join('')}</tr>`).join('') || `<tr><td colspan="${fields.length}">No matching rows</td></tr>`}</tbody></table>
    `;
  }

  function sqlFilter(where) {
    if (where === 'Class = "5A" AND Mark >= 50') return row => row.Class === '5A' && row.Mark >= 50;
    if (where === 'Class = "5A" AND Mark < 50') return row => row.Class === '5A' && row.Mark < 50;
    if (where === 'Class = "5B"') return row => row.Class === '5B';
    if (where === 'Class = "5A"') return row => row.Class === '5A';
    if (where === 'Mark >= 50') return row => row.Mark >= 50;
    if (where === 'Mark < 50') return row => row.Mark < 50;
    return () => true;
  }

  function bindSqlBuilder(stage, activity) {
    const lab = stage.querySelector('[data-sql-builder]');
    if (!lab) return;
    const go = bindTabs(lab);
    const select = lab.querySelector('[data-sql-select]');
    const where = lab.querySelector('[data-sql-where]');
    const order = lab.querySelector('[data-sql-order]');
    const preview = () => {
      const complete = select.value && where.value && order.value;
      lab.querySelector('[data-sql-preview]').innerHTML = complete
        ? `<code class="studio-code">SELECT ${escapeHtml(select.value)} FROM Student WHERE ${escapeHtml(where.value)} ORDER BY ${escapeHtml(order.value)}</code>`
        : 'Choose the clauses to build a query.';
      lab.querySelector('[data-sql-result]').innerHTML = renderSqlResult(select.value, where.value, order.value);
    };
    [select, where, order].forEach(control => control.addEventListener('change', preview));
    lab.querySelector('[data-sql-check]').addEventListener('click', (event) => {
      const button = event.currentTarget;
      if (!select.value || !where.value || !order.value) {
        lab.querySelector('[data-sql-feedback]').innerHTML = feedback('info', 'Build all three clauses first.', 'A query needs a field list, a row condition, and the requested ordering in this station.', '', 'Use the question words: show what, which rows, and in what order.');
        return;
      }
      const correct = select.value === button.dataset.answerSelect && where.value === button.dataset.answerWhere && order.value === button.dataset.answerOrder;
      const wrongParts = [
        select.value !== button.dataset.answerSelect ? 'SELECT chooses the wrong columns' : '',
        where.value !== button.dataset.answerWhere ? 'WHERE returns the wrong rows' : '',
        order.value !== button.dataset.answerOrder ? 'ORDER BY displays the result in the wrong order' : ''
      ].filter(Boolean);
      lab.querySelector('[data-sql-feedback]').innerHTML = feedback(correct ? 'good' : 'bad', correct ? 'Query matches the data question.' : 'The query is valid, but not yet the right question.', correct ? 'The result set now matches the requested columns, rows and ordering.' : wrongParts.join('; ') + '.', 'SELECT chooses fields. WHERE filters rows. ORDER BY rearranges the displayed result.', correct ? 'Now diagnose another query that is valid but wrong.' : 'Use the live result table as evidence and repair the mismatched clause.');
      if (correct) go(2);
    });
    lab.querySelectorAll('[data-sql-detective]').forEach(button => {
      button.addEventListener('click', () => {
        const ok = button.dataset.sqlDetective === button.dataset.answer;
        lab.querySelectorAll('[data-sql-detective]').forEach(item => item.classList.remove('is-correct', 'is-wrong'));
        button.classList.add(ok ? 'is-correct' : 'is-wrong');
        lab.querySelector('[data-sql-detective-feedback]').innerHTML = feedback(ok ? 'good' : 'bad', ok ? 'The meaningful repair is selected.' : 'This changes more than needed or changes the wrong part.', ok ? 'A syntactically valid query can still be wrong because its selected fields, rows or order do not match the question.' : 'Do not use DELETE or UPDATE when the task is to read a result set.', '', ok ? 'Finish with the spoken explanation prompt.' : 'Identify which clause no longer matches the question.');
        if (ok) go(3);
      });
    });
    lab.querySelector('[data-sql-new]').addEventListener('click', () => {
      stage.innerHTML = renderSqlBuilder(activity);
      bindSqlBuilder(stage, activity);
    });
  }

  function register() {
    if (!global.ActivityLabs?.register) return;
    global.ActivityLabs.register('c3ProtocolRepair', renderProtocolRepair, bindProtocolRepair);
    global.ActivityLabs.register('a5FormulaDoctor', renderFormulaDoctor, bindFormulaDoctor);
    global.ActivityLabs.register('d4ProgramRepair', renderProgramRepair, bindProgramRepair);
    global.ActivityLabs.register('d5ProgramRepair', renderProgramRepair, bindProgramRepair);
    global.ActivityLabs.register('a64QueryBuilder', renderSqlBuilder, bindSqlBuilder);
    if (typeof global.updateTopicLabBadges === 'function') global.updateTopicLabBadges();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', register);
  else register();
})(window);
