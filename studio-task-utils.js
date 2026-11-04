/* Small task-format helpers shared by Studio and its focused regression tests. */
(function (global) {
  const taskCategories = [
    { id: 'intro', label: '入門' },
    { id: 'elementary', label: '初階' },
    { id: 'advanced', label: '進階練習' },
    { id: 'applied', label: '現實應用題' }
  ];

  function categoryLabel(id) {
    return taskCategories.find(item => item.id === id)?.label || '';
  }

  function inputLinesFromText(value) {
    const text = String(value ?? '').replace(/\r\n?/g, '\n');
    if (text === '') return [];
    return (text.endsWith('\n') ? text.slice(0, -1) : text).split('\n');
  }

  function unifyNewlines(value) {
    return String(value ?? '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  }

  function compareSpec(task) {
    const spec = task?.compare;
    if (!spec || typeof spec !== 'object' || !spec.mode) return { mode: 'legacy' };
    return spec;
  }

  function stripFinalNewline(text) {
    return text.endsWith('\n') ? text.slice(0, -1) : text;
  }

  function compareNumeric(actual, expected, spec) {
    const tolerance = Number(spec?.tolerance);
    if (!Number.isFinite(tolerance) || tolerance < 0) {
      return { pass: false, mode: 'numeric', reason: 'Numeric compare needs a non-negative tolerance.' };
    }
    const actualLines = stripFinalNewline(unifyNewlines(actual)).split('\n');
    const expectedLines = stripFinalNewline(unifyNewlines(expected)).split('\n');
    if (actualLines.length !== expectedLines.length) {
      return { pass: false, mode: 'numeric', reason: `Expected ${expectedLines.length} lines, got ${actualLines.length}.` };
    }
    for (let line = 0; line < expectedLines.length; line += 1) {
      const actualTokens = actualLines[line].trim().split(/\s+/).filter(Boolean);
      const expectedTokens = expectedLines[line].trim().split(/\s+/).filter(Boolean);
      if (actualTokens.length !== expectedTokens.length) {
        return { pass: false, mode: 'numeric', reason: `Line ${line + 1} has ${actualTokens.length} values, expected ${expectedTokens.length}.` };
      }
      for (let index = 0; index < expectedTokens.length; index += 1) {
        const actualNumber = Number(actualTokens[index]);
        const expectedNumber = Number(expectedTokens[index]);
        if (Number.isFinite(actualNumber) && Number.isFinite(expectedNumber)) {
          if (Math.abs(actualNumber - expectedNumber) > tolerance) {
            return { pass: false, mode: 'numeric', reason: `Line ${line + 1} value ${actualTokens[index]} is outside tolerance ${tolerance} of ${expectedTokens[index]}.` };
          }
        } else if (actualTokens[index] !== expectedTokens[index]) {
          return { pass: false, mode: 'numeric', reason: `Line ${line + 1} token ${actualTokens[index]} does not match ${expectedTokens[index]}.` };
        }
      }
    }
    return { pass: true, mode: 'numeric' };
  }

  function compareOutputs(actual, expected, spec) {
    const mode = spec?.mode || 'legacy';
    const left = unifyNewlines(actual);
    const right = unifyNewlines(expected);
    if (mode === 'legacy') return { pass: left.trim() === right.trim(), mode };
    if (mode === 'exact') return { pass: left === right, mode, reason: left === right ? '' : 'Stdout does not match the expected text exactly.' };
    if (mode === 'numeric') return compareNumeric(left, right, spec || {});
    if (mode === 'cpp') return { pass: false, mode, reason: 'A C++ checker cannot run in this browser.' };
    return { pass: false, mode, reason: `Unsupported compare mode ${mode}.` };
  }

  const STUDENT_FILE_NAMES = new Set(['task.json', 'starter.py', 'statement.md', 'after.md']);

  function studentTaskMetadata(task) {
    const tests = (task.tests || []).map((test, index) => ({
      label: test.label || `Public test ${index + 1}`,
      input: `${String(index + 1).padStart(2, '0')}.in`,
      output: `${String(index + 1).padStart(2, '0')}.out`
    }));
    const metadata = {
      id: task.id,
      type: 'python',
      topic: task.topic,
      skill: task.skill,
      level: task.level,
      practiceType: task.practiceType,
      category: task.category,
      title: task.title,
      brief: task.brief,
      starter: 'starter.py',
      tests
    };
    if (task.purpose) metadata.purpose = task.purpose;
    if (task.stars) metadata.stars = task.stars;
    if (task.alias) metadata.alias = task.alias;
    if (task.compare) metadata.compare = task.compare;
    if (task.statement) metadata.statementFile = 'statement.md';
    if (task.support?.afterSamples) metadata.afterFile = 'after.md';
    return metadata;
  }

  function linesToText(value) {
    if (Array.isArray(value)) return value.join('\n');
    return String(value ?? '');
  }

  function studentPackFiles(task) {
    const metadata = studentTaskMetadata(task);
    const files = [
      { name: 'task.json', text: `${JSON.stringify(metadata, null, 2)}\n` },
      { name: 'starter.py', text: String(task.starter ?? task.starterText ?? '') }
    ];
    (task.tests || []).forEach((test, index) => {
      const stem = String(index + 1).padStart(2, '0');
      files.push({ name: `${stem}.in`, text: linesToText(test.input ?? test.inputLines) });
      files.push({ name: `${stem}.out`, text: linesToText(test.output ?? test.expectedOutput) });
    });
    if (task.statement) files.push({ name: 'statement.md', text: String(task.statement) });
    if (task.support?.afterSamples) files.push({ name: 'after.md', text: String(task.support.afterSamples) });
    const leaked = files.filter(file => !STUDENT_FILE_NAMES.has(file.name) && !/^\d{2}\.(in|out)$/.test(file.name));
    if (leaked.length) throw new Error('Student pack whitelist rejected a file.');
    return files;
  }

  function caseInputText(test) {
    const value = test?.inputLines ?? test?.input ?? [];
    return Array.isArray(value) ? value.join('\n') : String(value ?? '');
  }

  function caseOutputText(test) {
    return String(test?.expectedOutput ?? test?.output ?? '');
  }

  function caseKey(test) {
    return `${caseInputText(test)}\0${caseOutputText(test)}`;
  }

  function visibleSamples(task) {
    const source = Array.isArray(task?.samples) && task.samples.length ? task.samples : (task?.tests || []);
    return source.slice(0, 6).map((test, index) => ({
      label: test.label || `Sample ${index + 1}`,
      input: test.inputLines ?? test.input ?? [],
      output: caseOutputText(test),
      explanation: test.explanation || '',
      visible: true
    }));
  }

  function submitCases(task, privateCases) {
    const seen = new Set();
    const cases = [];
    const add = (test, visible) => {
      const key = caseKey(test);
      if (seen.has(key)) return;
      seen.add(key);
      cases.push({
        label: test.label || `Test ${cases.length + 1}`,
        input: test.inputLines ?? test.input ?? [],
        output: caseOutputText(test),
        explanation: test.explanation || '',
        visible: Boolean(visible),
        private: Boolean(test.private) || !visible
      });
    };
    visibleSamples(task).forEach(test => add(test, true));
    (task?.tests || []).forEach(test => add(test, false));
    (privateCases || task?.privateTests || []).forEach(test => add(test, false));
    return cases;
  }

  function renderStatementHtml(source) {
    const text = String(source || '').replace(/\r\n/g, '\n').trim();
    if (!text) return '<p>這題未有題目背景。</p>';
    const escape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
    return text.split(/\n{2,}/).map(block => {
      if (block.startsWith('```')) {
        const code = block.replace(/^```[^\n]*\n?/, '').replace(/\n?```$/, '');
        return `<pre>${escape(code)}</pre>`;
      }
      const heading = block.match(/^(#{1,3}) (.+)$/);
      if (heading && !block.includes('\n')) return `<h5>${escape(heading[2])}</h5>`;
      const lines = block.split('\n').map(line => escape(line).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/`([^`]+)`/g, '<code>$1</code>'));
      return `<p>${lines.join('<br>')}</p>`;
    }).join('');
  }

  function teacherPackFiles(task, validation) {
    const files = studentPackFiles(task);
    if (task.solution) files.push({ name: 'solution.py', text: String(task.solution) });
    (task.privateTests || []).forEach((test, index) => {
      const stem = `private-${String(index + 1).padStart(2, '0')}`;
      files.push({ name: `${stem}.in`, text: linesToText(test.input ?? test.inputLines) });
      files.push({ name: `${stem}.out`, text: linesToText(test.output ?? test.expectedOutput) });
    });
    if (task.teacherNotes) files.push({ name: 'teacher-notes.md', text: String(task.teacherNotes) });
    if (validation) files.push({ name: 'validation.json', text: `${JSON.stringify(validation, null, 2)}\n` });
    return files;
  }

  global.StudioTaskUtils = {
    taskCategories,
    categoryLabel,
    inputLinesFromText,
    unifyNewlines,
    compareSpec,
    compareOutputs,
    studentTaskMetadata,
    studentPackFiles,
    teacherPackFiles,
    visibleSamples,
    submitCases,
    caseInputText,
    caseOutputText,
    renderStatementHtml
  };
})(typeof window !== 'undefined' ? window : globalThis);
