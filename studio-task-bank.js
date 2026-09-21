/* Temporary teacher previews and the legacy local-pack import API.
 * Public task content lives only in tasks/; this file is not a fallback bank.
 */
(function (global) {
  const preview = { python: [], sql: [] };
  let publicIds = new Set();
  let publicCounts = { python: 0, sql: 0 };
  const isText = value => typeof value === 'string' && Boolean(value.trim());

  function validateTask(task, kind, label) {
    const errors = [];
    for (const field of ['id', 'topic', 'skill', 'level', 'title', 'brief', 'starter']) {
      if (!isText(task?.[field])) errors.push(`${label}: ${field} must be text.`);
    }
    if (kind === 'python') {
      if (!['complete', 'construct', 'modify', 'dse'].includes(task?.practiceType)) errors.push(`${label}: choose a practice type.`);
      if (!Array.isArray(task?.tests) || !task.tests.length) errors.push(`${label}: add at least one test.`);
      else task.tests.forEach((test, index) => {
        if (!Array.isArray(test?.input) || !test.input.every(value => typeof value === 'string')) errors.push(`${label}, test ${index + 1}: input must be text lines.`);
        if (typeof test?.output !== 'string') errors.push(`${label}, test ${index + 1}: output must be text.`);
      });
    } else {
      // Older local JSON packs relied on the public practice database.
      if (task?.seedSql != null && !isText(task.seedSql)) errors.push(`${label}: seedSql must be text when supplied.`);
      if (!['result', 'database'].includes(task?.checker?.type)) errors.push(`${label}: checker.type must be result or database.`);
      if (!Array.isArray(task?.checker?.columns) || !Array.isArray(task?.checker?.rows)) errors.push(`${label}: checker needs columns and rows.`);
      if (task?.checker?.type === 'database' && !isText(task.checker.query)) errors.push(`${label}: a database checker needs a query.`);
    }
    return errors;
  }

  function importLocalPack(source) {
    let pack;
    try { pack = typeof source === 'string' ? JSON.parse(source) : source; }
    catch (_) { return { ok: false, errors: ['The task pack is not valid JSON.'] }; }
    if (!pack || typeof pack !== 'object' || !Array.isArray(pack.python) || !Array.isArray(pack.sql)) {
      return { ok: false, errors: ['Task pack needs python and sql arrays.'] };
    }
    const errors = [];
    if (!pack.python.length && !pack.sql.length) errors.push('Add at least one task.');
    const seen = new Set(publicIds);
    for (const kind of ['python', 'sql']) {
      pack[kind].forEach((task, index) => {
        const label = `${kind} task ${index + 1}`;
        errors.push(...validateTask(task, kind, label));
        if (seen.has(task?.id)) errors.push(`${label}: ${task.id} is already used by a public task or this pack.`);
        seen.add(task?.id);
      });
    }
    if (errors.length) return { ok: false, errors };
    preview.python = pack.python.map(task => ({ ...task, type: 'python' }));
    preview.sql = pack.sql.map(task => ({ ...task, type: 'sql' }));
    return { ok: true, python: preview.python.length, sql: preview.sql.length, firstTaskId: preview.python[0]?.id || preview.sql[0]?.id || '' };
  }

  global.StudioTaskBankAPI = {
    importLocalPack,
    clearLocalPack() {
      const removed = preview.python.length + preview.sql.length;
      preview.python = [];
      preview.sql = [];
      return { removed };
    },
    setPublicCatalog(catalog) {
      publicIds = new Set([...catalog.python, ...catalog.sql].map(task => task.id));
      publicCounts = { python: catalog.python.length, sql: catalog.sql.length };
    },
    getPreview(kind) { return preview[kind] || []; },
    getStats() {
      return { python: publicCounts.python + preview.python.length, sql: publicCounts.sql + preview.sql.length, local: preview.python.length + preview.sql.length };
    }
  };
})(window);
