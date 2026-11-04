/* Turns an HKOI handover ZIP, or a site task ZIP, into a preview report.
 * It does not write public tasks. Private model, checker and hidden tests stay marked private.
 */
(function (global) {
  const MAX_TEXT = 200000;

  function baseName(name) {
    return String(name || '').split('/').filter(Boolean).pop() || '';
  }

  function isPrivatePath(name) {
    const base = baseName(name);
    if (['model.py', 'checker.cpp', 'checker.py', 'test_data.zip'].includes(base)) return true;
    if (/^Teacher_/i.test(base) || base === 'MANUAL_UPLOAD.md') return true;
    return /(^|\/)tests\//.test(name);
  }

  function decodeText(entry) {
    if (typeof entry.text === 'string') return { text: entry.text, encodingWarning: entry.text.includes('\uFFFD') };
    const bytes = entry.bytes instanceof Uint8Array ? entry.bytes : new Uint8Array(entry.bytes || []);
    const text = new TextDecoder('utf-8', { fatal: false }).decode(bytes);
    return { text, encodingWarning: text.includes('\uFFFD') };
  }

  function safeName(name) {
    const normalised = String(name || '').replace(/\\/g, '/');
    if (!normalised || normalised.startsWith('/') || normalised.split('/').some(part => !part || part === '..')) {
      return { ok: false, name: normalised, reason: 'Path is absolute or leaves the archive.' };
    }
    return { ok: true, name: normalised };
  }

  function heading(markdown, fallback) {
    const match = String(markdown || '').match(/^#\s+(.+)$/m);
    return match ? match[1].trim() : fallback;
  }

  function purposeFromId(id) {
    const match = String(id || '').match(/^([XYZ])ICT/i);
    return match ? match[1].toUpperCase() : '';
  }

  function pairFiles(entries, folder) {
    const group = entries.filter(entry => entry.name.startsWith(folder) && !entry.name.endsWith('/'));
    const byStem = new Map();
    group.forEach(entry => {
      const relative = entry.name.slice(folder.length);
      if (relative.includes('/')) return;
      const match = relative.match(/^(.*)\.(in|out|md)$/);
      if (!match) return;
      const current = byStem.get(match[1]) || {};
      current[match[2]] = entry;
      byStem.set(match[1], current);
    });
    return [...byStem.entries()].sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true })).map(([stem, files]) => ({ stem, ...files }));
  }

  function textOf(entry, warnings, errors, label) {
    if (!entry) return '';
    const decoded = decodeText(entry);
    if (decoded.encodingWarning) warnings.push(`${label}: file is not clean UTF-8 (${entry.name}).`);
    if (decoded.text.length > MAX_TEXT) {
      errors.push(`${label}: ${entry.name} is larger than ${MAX_TEXT} characters.`);
      return '';
    }
    return decoded.text.replace(/\r\n/g, '\n');
  }

  function analyseHkoiRoot(root, entries, warnings, errors) {
    const prefix = root ? `${root}/` : '';
    const statementEntry = entries.find(entry => entry.name === `${prefix}statement.md`);
    const afterEntry = entries.find(entry => entry.name === `${prefix}after.md`);
    const modelEntry = entries.find(entry => entry.name === `${prefix}model.py`);
    const checkerEntry = entries.find(entry => entry.name === `${prefix}checker.cpp` || entry.name === `${prefix}checker.py`);
    const id = root || 'IMPORTED';
    const statement = textOf(statementEntry, warnings, errors, id);
    if (!statementEntry) errors.push(`${id}: missing statement.md.`);
    const samples = pairFiles(entries, `${prefix}samples/`).map(pair => ({
      label: `Sample ${pair.stem}`,
      stem: pair.stem,
      input: textOf(pair.in, warnings, errors, id),
      output: textOf(pair.out, warnings, errors, id),
      explanation: textOf(pair.md, warnings, errors, id),
      missing: !pair.in || !pair.out ? `samples/${pair.stem} is not an .in/.out pair` : ''
    }));
    const privateTests = pairFiles(entries, `${prefix}tests/`).map(pair => ({
      label: `Private ${pair.stem}`,
      stem: pair.stem,
      input: textOf(pair.in, warnings, errors, id),
      output: textOf(pair.out, warnings, errors, id),
      missing: !pair.in || !pair.out ? `tests/${pair.stem} is not an .in/.out pair` : ''
    }));
    samples.filter(item => item.missing).forEach(item => errors.push(`${id}: ${item.missing}.`));
    privateTests.filter(item => item.missing).forEach(item => errors.push(`${id}: ${item.missing}.`));
    const unsupportedChecker = checkerEntry ? baseName(checkerEntry.name) : '';
    if (unsupportedChecker) {
      warnings.push(`${id}: ${unsupportedChecker} is not executed in the browser. Choose a numeric tolerance or keep this task blocked.`);
    }
    return {
      id,
      title: heading(statement, id),
      purpose: purposeFromId(id),
      statement,
      support: { afterSamples: textOf(afterEntry, warnings, errors, id) },
      samples: samples.filter(item => !item.missing).map(item => ({ label: item.label, input: item.input, output: item.output, explanation: item.explanation })),
      privateTests: privateTests.filter(item => !item.missing).map(item => ({ label: item.label, input: item.input, output: item.output, private: true })),
      hasModel: Boolean(modelEntry),
      modelText: modelEntry ? textOf(modelEntry, warnings, errors, id) : '',
      unsupportedChecker,
      blocked: Boolean(unsupportedChecker)
    };
  }

  function analyseEntries(entries) {
    const errors = [];
    const warnings = [];
    const safe = [];
    (entries || []).forEach(entry => {
      const checked = safeName(entry.name);
      if (!checked.ok) {
        errors.push(`${entry.name || '(blank)'}: ${checked.reason}`);
        return;
      }
      safe.push({ ...entry, name: checked.name });
    });
    const names = safe.map(entry => entry.name);
    const duplicates = names.filter((name, index) => names.indexOf(name) !== index);
    duplicates.forEach(name => errors.push(`Duplicate archive path ${name}.`));
    if (safe.some(entry => entry.name.endsWith('/task.json') || entry.name === 'task.json')) {
      warnings.push('This archive uses the site task.json format, not an HKOI handover pack.');
      const tasks = [];
      safe.filter(entry => entry.name.endsWith('/task.json') || entry.name === 'task.json').forEach(entry => {
        const folder = entry.name.includes('/') ? entry.name.slice(0, entry.name.lastIndexOf('/') + 1) : '';
        let metadata;
        try { metadata = JSON.parse(textOf(entry, warnings, errors, 'task.json')); }
        catch (error) { errors.push(`${entry.name}: malformed task.json (${error.message}).`); return; }
        const readNamed = (fileName) => {
          const match = safe.find(item => item.name === `${folder}${fileName}`);
          if (!match) { errors.push(`${metadata.id || entry.name}: missing ${fileName}.`); return ''; }
          return textOf(match, warnings, errors, metadata.id || entry.name);
        };
        const tests = (metadata.tests || []).map((test, index) => ({
          label: test.label || `Public test ${index + 1}`,
          input: readNamed(test.input),
          output: readNamed(test.output),
          explanation: test.explanation || ''
        }));
        tasks.push({
          id: metadata.id,
          title: metadata.title,
          purpose: metadata.purpose || '',
          statement: metadata.statementFile ? readNamed(metadata.statementFile) : (metadata.statement || ''),
          support: { afterSamples: metadata.afterFile ? readNamed(metadata.afterFile) : '' },
          samples: tests.map(test => ({ label: test.label, input: test.input, output: test.output, explanation: test.explanation })),
          privateTests: [],
          hasModel: false,
          modelText: '',
          unsupportedChecker: '',
          blocked: false,
          compare: metadata.compare || { mode: 'legacy' },
          topic: metadata.topic,
          skill: metadata.skill,
          level: metadata.level,
          practiceType: metadata.practiceType,
          brief: metadata.brief,
          starter: readNamed(metadata.starter || 'starter.py'),
          stars: metadata.stars || ''
        });
      });
      const ids = tasks.map(task => task.id);
      ids.filter((id, index) => ids.indexOf(id) !== index).forEach(id => errors.push(`Duplicate task ID ${id}.`));
      return {
        ok: errors.length === 0,
        kind: 'site',
        errors,
        warnings,
        tasks,
        summary: { tasks: tasks.length, samplePairs: tasks.reduce((sum, task) => sum + task.samples.length, 0), privatePairs: 0, blocked: 0 }
      };
    }
    const roots = [...new Set(safe.map(entry => entry.name.includes('/') ? entry.name.split('/')[0] : ''))];
    const tasks = roots.map(root => analyseHkoiRoot(root, safe, warnings, errors));
    const ids = tasks.map(task => task.id);
    ids.filter((id, index) => ids.indexOf(id) !== index).forEach(id => errors.push(`Duplicate task ID ${id}.`));
    tasks.forEach(task => {
      if (task.unsupportedChecker) task.blocked = true;
    });
    return {
      ok: errors.length === 0,
      kind: 'hkoi',
      errors,
      warnings,
      tasks,
      summary: {
        tasks: tasks.length,
        samplePairs: tasks.reduce((sum, task) => sum + task.samples.length, 0),
        privatePairs: tasks.reduce((sum, task) => sum + task.privateTests.length, 0),
        blocked: tasks.filter(task => task.blocked).length
      }
    };
  }

  function asLines(text) {
    const value = String(text ?? '').replace(/\r\n/g, '\n');
    if (value === '') return [];
    return (value.endsWith('\n') ? value.slice(0, -1) : value).split('\n');
  }

  function toPreviewTask(task, options = {}) {
    const compare = task.unsupportedChecker && options.numericTolerance != null && options.numericTolerance !== ''
      ? { mode: 'numeric', tolerance: Number(options.numericTolerance) }
      : (task.compare || { mode: 'exact' });
    const blocked = Boolean(task.unsupportedChecker) && compare.mode !== 'numeric';
    return {
      id: task.id,
      type: 'python',
      purpose: task.purpose || '',
      title: task.title,
      statement: task.statement,
      support: task.support,
      starter: task.starter || options.starter || '# Write your program here.\n',
      topic: task.topic || options.topic || 'HKOI',
      skill: task.skill || task.purpose || 'imported',
      level: task.level || options.level || 'Developing',
      practiceType: task.practiceType || options.practiceType || 'construct',
      stars: task.stars || options.stars || '',
      brief: task.brief || task.statement.split('\n').map(line => line.trim()).find(line => line && !line.startsWith('#')) || task.title,
      tests: task.samples.map(sample => ({ label: sample.label, input: asLines(sample.input), output: sample.output, explanation: sample.explanation })),
      privateTests: task.privateTests.map(test => ({ ...test, input: asLines(test.input) })),
      solution: task.modelText,
      compare,
      alias: [task.id],
      practiceTypeNote: 'practiceType is not inferred from X, Y or Z. The preview default is construct until a teacher sets it.',
      blocked,
      unsupportedChecker: task.unsupportedChecker
    };
  }

  global.HkoiTaskAdapter = { analyseEntries, isPrivatePath, toPreviewTask };
})(typeof window !== 'undefined' ? window : globalThis);
