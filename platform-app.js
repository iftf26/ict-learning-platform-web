(function (global) {
  const DEMO_GROUPS = [
    {
      id: 'labCoreDList',
      labelEn: 'Core D demos',
      labelZh: '必修 D 示範',
      keys: ['sequence', 'selection', 'whileValidation', 'booleanSelection', 'forAccumulator', 'sumAverage', 'linearSearch', 'findMax', 'findMin']
    },
    {
      id: 'labElectiveCList',
      labelEn: 'Elective C demos',
      labelZh: '選修 C 示範',
      keys: ['subprogram', 'nestedLoop', 'twoDArray', 'twoDCount', 'binarySearch', 'bubblePass', 'mergeLists', 'stackOps', 'queueOps', 'linkedList', 'textFile']
    }
  ];
  const STUDIO_MODES = new Set(['pythonCodeStudio', 'sqlCodeStudio']);
  const STUDIO_WORKSPACES = new Set(['code', 'sql', 'visual', 'practice']);
  const STUDIO_DEMO_KEY = 'ict-learning-platform-studio-demo';

  function escapeHtml(value) {
    if (typeof global.escapeHtml === 'function') return global.escapeHtml(value);
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function writingHash() {
    return Boolean(global.__platformWritingHash);
  }

  function setHash(params, options = {}) {
    const search = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value) search.set(key, value);
    });
    const next = `#${search.toString()}`;
    if (location.hash === next) return;
    global.__platformWritingHash = true;
    if (options.replace) history.replaceState(null, '', next || '#');
    else history.pushState(null, '', next || '#');
    global.__platformWritingHash = false;
  }

  function parseHash() {
    const raw = location.hash.replace(/^#/, '');
    if (!raw) return {};
    if (raw.startsWith('/')) {
      const parts = raw.split('/').filter(Boolean);
      if (parts[0] === 'demo') return { demo: parts[1] };
      if (parts[0] === 'chapter') return { chapter: parts[1] };
      if (parts[0] === 'practice') return { practice: parts[1] || 'all' };
      if (parts[0] === 'activity') return { activity: parts[1] };
      return {};
    }
    return Object.fromEntries(new URLSearchParams(raw));
  }

  function findTopicButton(topic) {
    const resolved = (typeof resolveChapterId === 'function' ? resolveChapterId(topic) : topic) || topic;
    const items = [...document.querySelectorAll('.nav-item[data-topic]')];
    const codeOf = value => global.CheckpointEngine?.chapterCode(value) || '';
    const resolvedCode = codeOf(resolved) || codeOf(topic) || resolved;
    const exact = items.find(item => item.dataset.topic === resolved)
      || items.find(item => item.dataset.topic === topic);
    if (exact) return exact;
    // Prefer the longest topic id that matches the chapter code (A6.4 before A6).
    const codeMatches = items
      .map(item => ({ item, code: codeOf(item.dataset.topic) }))
      .filter(({ code }) => code && (code === resolvedCode || code === resolved || code === topic));
    if (codeMatches.length) {
      codeMatches.sort((a, b) => b.code.length - a.code.length || b.item.dataset.topic.length - a.item.dataset.topic.length);
      return codeMatches[0].item;
    }
    return items.find(item => item.dataset.topic.startsWith(`${resolved} `) || item.dataset.topic.startsWith(`${topic} `))
      || items.find(item => item.dataset.topic.startsWith(`${resolvedCode} `));
  }

  function showPracticeHub(filter = {}) {
    showStudioHome('practice');
    const applyFilter = () => {
      const strand = document.getElementById('practiceStrand');
      const chapter = document.getElementById('practiceChapter');
      if (filter.strand && strand) strand.value = filter.strand;
      if (filter.chapter && chapter) chapter.value = filter.chapter;
      runPracticeHub({ count: 8 });
      updatePracticePoolMeta();
    };
    setTimeout(applyFilter, 0);
  }

  function fillPracticeFilters() {
    const strand = document.getElementById('practiceStrand');
    const chapter = document.getElementById('practiceChapter');
    if (!strand || !chapter || strand.dataset.ready) return;
    const strands = ['Core A', 'Core B', 'Core C', 'Core D', 'Core E', 'Elective A', 'Elective C'];
    strand.innerHTML = '<option value="">All strands</option>' + strands.map(item => `<option value="${item}">${item}</option>`).join('');
    chapter.innerHTML = '<option value="">All chapters</option>' + Object.values(topicContent || {}).map(item => {
      const code = global.CheckpointEngine.chapterCode(item.id);
      return `<option value="${code}">${code} — ${typeof displayChapterTitle === 'function' ? displayChapterTitle(item.id, item.title) : item.title}</option>`;
    }).join('');
    strand.dataset.ready = 'true';
  }

  function practiceFilter() {
    const strand = document.getElementById('practiceStrand')?.value || '';
    const chapter = document.getElementById('practiceChapter')?.value || '';
    const type = document.getElementById('practiceType')?.value || '';
    const difficulty = document.getElementById('practiceDifficulty')?.value || '';
    return {
      strand: strand || undefined,
      chapter: chapter || undefined,
      type: type || undefined,
      difficulty: difficulty || undefined
    };
  }

  function updatePracticePoolMeta(filter = practiceFilter(), count = 8) {
    const meta = document.getElementById('practicePoolMeta');
    if (!meta || !global.CheckpointEngine?.collectPool) return 0;
    const pool = global.CheckpointEngine.collectPool(filter);
    const size = pool.length;
    meta.textContent = size
      ? `${size} question${size === 1 ? '' : 's'} in this filter · next set uses up to ${Math.min(count, size)}`
      : 'No questions for this filter yet — open Keywords on a chapter or widen the filter.';
    return size;
  }

  function runPracticeHub(options = {}) {
    fillPracticeFilters();
    const panel = document.getElementById('dsePracticePanel');
    if (!panel || !global.CheckpointEngine) return;
    const filter = options.filter || practiceFilter();
    let pool = global.CheckpointEngine.collectPool(filter);
    if (options.wrongsOnly) {
      const misses = (global.CheckpointEngine.sessionMisses || []).map(item => item.stem).filter(Boolean);
      const missSet = new Set(misses);
      pool = pool.filter(item => missSet.has(item.stem));
      if (!pool.length) {
        panel.innerHTML = `
          <div class="checkpoint-empty">
            <h3>No wrongs stored yet</h3>
            <p>Answer a few Practice Hub or chapter checkpoint items first. Missed stems from this browser session will appear here.</p>
          </div>
        `;
        updatePracticePoolMeta(filter, options.count || 8);
        return;
      }
    }
    const count = options.count || 8;
    updatePracticePoolMeta(filter, count);
    global.CheckpointEngine.mount(panel, {
      title: options.title || 'DSE Practice Hub',
      lead: options.lead || 'Questions come from the same chapter pools as the topic checkpoints. Filters change the mix; they do not invent a second bank.',
      count,
      pool,
      filter
    });
  }

  function revealDemoSelect() {
    if (!demoSelect) return;
    demoSelect.classList.remove('hidden');
    demoSelect.removeAttribute('aria-hidden');
    demoSelect.removeAttribute('tabindex');
    demoSelect.setAttribute('aria-label', 'Choose a programming demonstration');
    const host = document.getElementById('demoPicker');
    if (!host || host.dataset.ready) return;
    host.dataset.ready = 'true';
    host.innerHTML = DEMO_GROUPS.map(group => `
      <div class="demo-chip-group">
        <p>${escapeHtml(group.labelEn)} <span lang="zh-Hant">${escapeHtml(group.labelZh)}</span></p>
        <div>
          ${group.keys.map(key => {
            const demo = demos[key];
            if (!demo) return '';
            return `<button type="button" class="demo-chip" data-demo-chip="${key}">${escapeHtml(demo.title)}</button>`;
          }).join('')}
        </div>
      </div>
    `).join('');
    host.addEventListener('click', event => {
      const chip = event.target.closest('[data-demo-chip]');
      if (chip) loadDemo(chip.dataset.demoChip);
    });
  }

  function markDemoChips(key) {
    document.querySelectorAll('[data-demo-chip]').forEach(chip => {
      chip.classList.toggle('active', chip.dataset.demoChip === key);
    });
  }

  function openActivity(mode) {
    const card = document.querySelector(`.activity-card[data-activity-index]`);
    const panel = document.getElementById('topicActivityPanel');
    if (!panel) return;
    const buttons = [...panel.querySelectorAll('[data-activity-index]')];
    const match = buttons.find((button, index) => {
      const topic = document.querySelector('.nav-item[data-topic].active')?.dataset.topic;
      const chapter = topicContent?.[topic];
      return chapter?.activities?.[index]?.mode === mode || chapter?.activities?.[index]?.demoKey === mode;
    });
    (match || buttons[0])?.click();
    document.getElementById('chapter-practice')?.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
  }

  function setModeNav(page) {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`.nav-item[data-page="${page}"]`)?.classList.add('active');
  }

  function hideStudioHome() {
    document.getElementById('studioWorkspaceStage')?._studioCleanup?.();
    document.getElementById('studioHomePage')?.classList.add('hidden');
  }

  function mountExistingWorkspace(stage, workspace) {
    const selector = workspace === 'visual'
      ? '#programmingLabStart, .mode-panel, .program-storyboard, .lab-grid, .exercise-section'
      : '#dsePracticePage';
    const nodes = [...document.querySelectorAll(selector)];
    if (!nodes.length) return false;
    const marker = document.createComment(`studio-${workspace}-home`);
    nodes[0].parentNode.insertBefore(marker, nodes[0]);
    stage.replaceChildren(...nodes);
    nodes.forEach(node => node.classList.remove('hidden'));
    global.__studioEmbeddedWorkspace = workspace;
    stage._studioCleanup = () => {
      stopAuto?.();
      nodes.forEach(node => {
        node.classList.add('hidden');
        marker.parentNode?.insertBefore(node, marker);
      });
      marker.remove();
      if (global.__studioEmbeddedWorkspace === workspace) global.__studioEmbeddedWorkspace = '';
      stage._studioCleanup = null;
    };
    if (workspace === 'visual') {
      let key = 'sequence';
      try { key = sessionStorage.getItem(STUDIO_DEMO_KEY) || key; } catch (_) { /* storage unavailable */ }
      if (demos[key]) loadDemo(key);
    } else {
      fillPracticeFilters();
      runPracticeHub({ count: 8, title: 'DSE Practice', lead: 'Choose filters, then practise exam-style questions.' });
      updatePracticePoolMeta();
    }
    return true;
  }

  function showNotesHome() {
    stopAuto?.();
    stopTopicSimulation?.();
    arcadePage.classList.add('hidden');
    topicPage.classList.add('hidden');
    document.getElementById('dsePracticePage')?.classList.add('hidden');
    programmingSections.forEach(section => section.classList.add('hidden'));
    hideStudioHome();
    dashboardPage.dataset.homeMode = 'notes';
    dashboardPage.classList.remove('hidden');
    setModeNav('notes');
    if (!writingHash()) setHash({ view: 'notes' });
  }

  function showStudioWorkspace(requestedWorkspace = 'code') {
    const workspace = STUDIO_WORKSPACES.has(requestedWorkspace) ? requestedWorkspace : 'code';
    const stage = document.getElementById('studioWorkspaceStage');
    if (!stage) return;
    document.querySelectorAll('[data-studio-workspace]').forEach(button => {
      const active = button.dataset.studioWorkspace === workspace;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    if (!writingHash() && !document.getElementById('studioHomePage')?.classList.contains('hidden')) {
      setHash({ view: 'studio', workspace });
    }
    if (stage.dataset.workspace === workspace && stage.childElementCount) return;
    stage.dataset.workspace = workspace;
    if (workspace === 'code' || workspace === 'sql') {
      if (global.ActivityLabs?.mountStandaloneStudio) {
        global.ActivityLabs.mountStandaloneStudio(stage, workspace);
      } else {
        stage.innerHTML = '<div class="studio-workspace-empty"><h3>Studio is loading…</h3><p>Please wait a moment, then choose Code Studio or SQL Studio again.</p></div>';
      }
      return;
    }
    stage._studioCleanup?.();
    stage._studioCleanup = null;
    if (!mountExistingWorkspace(stage, workspace)) {
      stage.innerHTML = '<div class="studio-workspace-empty"><h3>Workspace unavailable</h3><p>Reload the page and try again.</p></div>';
    }
  }

  function updateTaskBankCount() {
    const output = document.querySelector('[data-task-bank-count]');
    const stats = global.StudioTaskBankAPI?.getStats?.();
    if (!output || !stats) return;
    output.textContent = `${stats.python} Python · ${stats.sql} SQL${stats.local ? ` · ${stats.local} local preview` : ''}`;
  }

  function refreshStudioWorkspace(firstTaskId = '') {
    const stage = document.getElementById('studioWorkspaceStage');
    const workspace = stage?.dataset.workspace;
    if (!stage || !['code', 'sql'].includes(workspace)) return;
    stage.dataset.workspace = '';
    showStudioWorkspace(workspace);
    if (!firstTaskId) return;
    const picker = stage.querySelector(workspace === 'code' ? '[data-python-task]' : '[data-sql-task]');
    const options = picker ? [...picker.options] : [];
    if (!options.some(option => option.value === firstTaskId)) return;
    picker.value = firstTaskId;
    picker.dispatchEvent(new Event('change'));
  }

  function bindTeacherTaskPack() {
    const input = document.querySelector('[data-task-pack-input]');
    const feedback = document.querySelector('[data-task-pack-feedback]');
    const loadButton = document.querySelector('[data-task-pack-load]');
    if (!input || !feedback || !loadButton || loadButton.dataset.platformBound) return;
    loadButton.dataset.platformBound = 'true';
    const showFeedback = (message, state) => {
      feedback.textContent = message;
      feedback.dataset.state = state;
    };
    document.querySelector('[data-task-pack-template]')?.addEventListener('click', () => {
      input.value = JSON.stringify({
        python: [{
          id: 'D4-PY-CUSTOM-01', topic: 'D4', level: 'Foundation', title: 'Custom two-number total',
          brief: 'Read two whole numbers and print their total.',
          starter: 'first = int(input())\\nsecond = int(input())\\n\\n# Calculate the total.\\n\\nprint(total)',
          tests: [{ label: 'Public test', input: ['8', '9'], output: '17' }]
        }],
        sql: []
      }, null, 2);
      showFeedback('Example loaded. Change the text, then test it in this browser.', 'info');
    });
    loadButton.addEventListener('click', () => {
      const result = global.StudioTaskBankAPI?.importLocalPack(input.value);
      if (!result?.ok) {
        showFeedback(result?.errors?.slice(0, 2).join(' ') || 'Task pack could not be loaded.', 'error');
        return;
      }
      updateTaskBankCount();
      refreshStudioWorkspace(result.firstTaskId);
      showFeedback(`Loaded ${result.python} Python and ${result.sql} SQL local task(s). Test them now; publish the task-bank file when ready.`, 'success');
    });
    document.querySelector('[data-task-pack-clear]')?.addEventListener('click', () => {
      const result = global.StudioTaskBankAPI?.clearLocalPack?.();
      input.value = '';
      updateTaskBankCount();
      refreshStudioWorkspace();
      showFeedback(result?.removed ? `Removed ${result.removed} local preview task(s).` : 'There were no local preview tasks.', 'info');
    });
    updateTaskBankCount();
    bindTeacherTaskBuilder();
  }

  function bindTeacherTaskBuilder() {
    const builder = document.querySelector('[data-task-builder]');
    if (!builder || builder.dataset.bound) return;
    builder.dataset.bound = 'true';
    const field = name => builder.querySelector(`[data-builder-${name}]`);
    const feedback = (message, state = 'info') => {
      const node = field('feedback');
      node.textContent = message;
      node.dataset.state = state;
    };
    const readTask = () => {
      const tests = String(field('tests').value || '').split(/\r?\n/).map(line => line.trim()).filter(Boolean).map((line, index) => {
        const split = line.split('=');
        if (split.length < 2) throw new Error(`Test ${index + 1} needs “input = expected output”.`);
        return { label: `Test ${index + 1}`, input: split[0].trim() ? split[0].split('|').map(item => item.trim()) : [], output: split.slice(1).join('=').trim() };
      });
      const task = { id: field('id').value.trim(), topic: field('topic').value.trim(), skill: field('skill').value.trim(), level: field('level').value, practiceType: field('practice').value, title: field('title').value.trim(), brief: field('brief').value.trim(), starter: field('starter').value, tests };
      ['id', 'topic', 'skill', 'title', 'brief', 'starter'].forEach(key => { if (!task[key]) throw new Error(`${key} is required.`); });
      if (!tests.length) throw new Error('Add at least one test.');
      return task;
    };
    field('preview').addEventListener('click', () => {
      try {
        const task = readTask();
        const result = global.StudioTaskBankAPI?.importLocalPack({ python: [task], sql: [] });
        if (!result?.ok) throw new Error(result?.errors?.join(' ') || 'Task could not be loaded.');
        refreshStudioWorkspace(task.id);
        feedback(`Preview loaded: ${task.id}. Open Code Studio to run it.`, 'success');
      } catch (error) { feedback(error.message, 'error'); }
    });
    field('run').addEventListener('click', async () => {
      try {
        const task = readTask();
        if (!global.ActivityLabs?.runPythonTaskTests) throw new Error('Python execution engine is not ready.');
        feedback('Running all tests…', 'info');
        const results = await global.ActivityLabs.runPythonTaskTests(task);
        feedback(`${results.filter(item => item.passed).length} / ${results.length} tests passed.`, results.every(item => item.passed) ? 'success' : 'error');
      } catch (error) { feedback(error.message, 'error'); }
    });
    field('export').addEventListener('click', () => {
      try {
        const task = readTask();
        const folder = `${task.topic}/${task.skill}/${task.id}`;
        const download = (name, content) => { const link = document.createElement('a'); link.download = name; link.href = URL.createObjectURL(new Blob([content], { type: 'text/plain;charset=utf-8' })); link.click(); setTimeout(() => URL.revokeObjectURL(link.href), 1000); };
        const metadata = { ...task, starter: 'starter.py', tests: task.tests.map((test, index) => ({ label: test.label, input: `${String(index + 1).padStart(2, '0')}.in`, output: `${String(index + 1).padStart(2, '0')}.out` })) };
        download(`${task.id}-task.json`, JSON.stringify(metadata, null, 2));
        download(`${task.id}-starter.py`, task.starter);
        task.tests.forEach((test, index) => { const stem = String(index + 1).padStart(2, '0'); download(`${task.id}-${stem}.in`, test.input.join('\n')); download(`${task.id}-${stem}.out`, test.output); });
        feedback(`Exported repository files for tasks/python/${folder}.`, 'success');
      } catch (error) { feedback(error.message, 'error'); }
    });
  }

  function showStudioHome(workspace = 'code', options = {}) {
    stopAuto?.();
    stopTopicSimulation?.();
    arcadePage.classList.add('hidden');
    topicPage.classList.add('hidden');
    document.getElementById('dsePracticePage')?.classList.add('hidden');
    programmingSections.forEach(section => section.classList.add('hidden'));
    dashboardPage.classList.add('hidden');
    document.getElementById('studioHomePage')?.classList.remove('hidden');
    const taskPack = document.querySelector('.studio-task-pack');
    if (taskPack) taskPack.hidden = !options.teacher;
    setModeNav('studio');
    showStudioWorkspace(workspace);
    if (!writingHash()) setHash({ view: 'studio', workspace });
  }

  function openStudioAction(action) {
    if (action === 'code' || action === 'sql') return showStudioHome(action);
    if (action === 'visual' || action === 'practice') return showStudioHome(action);
  }

  function reduceMotion() {
    return Boolean(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function applyHash() {
    if (writingHash()) return;
    global.__platformWritingHash = true;
    const hash = parseHash();
    try {
    if (hash.activity === 'pythonCodeStudio') {
      showStudioHome('code');
      return;
    }
    if (hash.activity === 'sqlCodeStudio') {
      showStudioHome('sql');
      return;
    }
    if (hash.demo || hash.lab) {
      const key = hash.demo || hash.lab;
      if (demos[key]) {
        try { sessionStorage.setItem(STUDIO_DEMO_KEY, key); } catch (_) { /* storage unavailable */ }
        showStudioHome('visual');
      }
      return;
    }
    if (hash.practice != null) {
      showPracticeHub({
        chapter: hash.practice !== 'all' ? hash.practice : '',
        strand: hash.strand || ''
      });
      return;
    }
    if (hash.chapter || hash.topic) {
      const button = findTopicButton(hash.chapter || hash.topic);
      if (button) {
        showTopicPage(button);
        if (hash.activity) setTimeout(() => openActivity(hash.activity), 0);
      }
      return;
    }
    if (hash.activity) {
      const chapter = Object.values(topicContent || {}).find(item =>
        (item.activities || []).some(activity => activity.mode === hash.activity || activity.demoKey === hash.activity)
      );
      const button = chapter ? findTopicButton(chapter.id) : null;
      if (button) {
        showTopicPage(button);
        setTimeout(() => openActivity(hash.activity), 0);
      }
      return;
    }
    if (hash.view === 'studio') {
      showStudioHome(hash.workspace || 'code', { teacher: hash.teacher === '1' });
      return;
    }
    if (hash.view === 'notes') {
      showNotesHome();
      return;
    }
    if (hash.view === 'home' || hash.page === 'dashboard') showDashboardPage();
    } finally {
      global.__platformWritingHash = false;
    }
  }

  function appendLabNav() {
    const nav = document.querySelector('.module-nav');
    if (!nav || nav.querySelector('[data-page="studio"]')) return;
    const hub = document.querySelector('.nav-item[data-page="dashboard"]');
    if (hub) {
      hub.insertAdjacentHTML('afterend', `
        <button class="nav-item" data-page="notes" type="button">
          <span class="nav-emoji">▤</span>
          Notes
        </button>
        <button class="nav-item" data-page="studio" type="button">
          <span class="nav-emoji">⌘</span>
          Studio
        </button>
      `);
    }
    nav.insertAdjacentHTML('beforeend', DEMO_GROUPS.map((group, index) => `
      <section class="curriculum-group">
        <button class="curriculum-heading" type="button" aria-expanded="false" aria-controls="${group.id}">
          <span class="nav-emoji nav-strand">${index === 0 ? 'D' : 'C'}</span>
          <span>
            <strong>${escapeHtml(group.labelEn)}</strong>
            <small class="nav-item-zh" lang="zh-Hant">${escapeHtml(group.labelZh)}</small>
          </span>
        </button>
        <div class="topic-list" id="${group.id}">
          ${group.keys.map(key => {
            const demo = demos[key];
            if (!demo) return '';
            return `<button class="nav-item nav-demo" type="button" data-demo="${key}"><span class="nav-item-copy"><span class="nav-item-en">${escapeHtml(demo.title)}</span></span></button>`;
          }).join('')}
        </div>
      </section>
    `).join(''));
  }

  function bindPlatformNav() {
    const nav = document.querySelector('.module-nav');
    if (!nav || nav.dataset.platformBound) return;
    nav.dataset.platformBound = 'true';
    nav.addEventListener('click', event => {
      const item = event.target.closest('.nav-item');
      if (!item) return;
      if (item.dataset.page === 'dashboard') {
        showDashboardPage();
        setHash({ view: 'home' });
        return;
      }
      if (item.dataset.page === 'notes') {
        showNotesHome();
        return;
      }
      if (item.dataset.page === 'studio') {
        showStudioHome();
        return;
      }
      if (item.dataset.demo) {
        loadDemo(item.dataset.demo);
        setHash({ demo: item.dataset.demo });
      }
    });
  }

  function wrapCore() {
    const origProg = global.showProgrammingView;
    global.showProgrammingView = function () {
      document.getElementById('dsePracticePage')?.classList.add('hidden');
      if (global.__studioEmbeddedWorkspace !== 'visual') hideStudioHome();
      origProg();
      revealDemoSelect();
    };

    const origLoad = global.loadDemo;
    global.loadDemo = function (key, keepExercise) {
      document.getElementById('dsePracticePage')?.classList.add('hidden');
      if (global.__studioEmbeddedWorkspace !== 'visual') hideStudioHome();
      origLoad(key, keepExercise);
      revealDemoSelect();
      markDemoChips(key);
      const story = document.getElementById('storyText');
      if (story && /sidebar/i.test(story.textContent)) {
        story.textContent = 'Choose a demonstration, then run the program one line at a time. Watch the variable table before you predict.';
      }
      if (global.__studioEmbeddedWorkspace === 'visual') {
        try { sessionStorage.setItem(STUDIO_DEMO_KEY, key); } catch (_) { /* storage unavailable */ }
        if (!writingHash()) setHash({ view: 'studio', workspace: 'visual' });
      } else if (!writingHash()) setHash({ demo: key });
    };

    const origTopic = global.showTopicPage;
    global.showTopicPage = function (button) {
      document.getElementById('dsePracticePage')?.classList.add('hidden');
      hideStudioHome();
      origTopic(button);
      const topic = button.dataset.topic;
      setHash({ chapter: global.CheckpointEngine?.chapterCode(topic) || topic, topic });
    };

    const origDash = global.showDashboardPage;
    global.showDashboardPage = function () {
      document.getElementById('dsePracticePage')?.classList.add('hidden');
      hideStudioHome();
      origDash();
      dashboardPage.dataset.homeMode = 'gateway';
      setHash({ view: 'home' });
    };

    const origArcade = global.showArcadePage;
    global.showArcadePage = function (key) {
      document.getElementById('dsePracticePage')?.classList.add('hidden');
      hideStudioHome();
      origArcade(key);
    };

    const origCheckpoint = global.renderCheckpointSection;
    global.renderCheckpointSection = function (topicConfig) {
      if (!global.CheckpointEngine) return origCheckpoint(topicConfig);
      topicPracticePanel.classList.remove('hidden');
      setChapterSectionVisible(topicPracticePanel, true);
      global.CheckpointEngine.mount(topicPracticePanel, {
        title: 'Chapter checkpoint',
        lead: 'Six randomised items from this chapter’s pool. Feedback explains why a distractor is wrong.',
        count: 6,
        filter: { chapterId: topicConfig.id, chapter: global.CheckpointEngine.chapterCode(topicConfig.id) }
      });
    };

    const origActivities = global.renderActivitiesSection;
    global.renderActivitiesSection = function (topicConfig) {
      const activities = (topicConfig.activities || []).filter(activity => !STUDIO_MODES.has(activity.mode));
      origActivities({ ...topicConfig, activities });
    };

    const origRenderActivity = global.renderInteractiveActivity;
    global.renderInteractiveActivity = function (activity) {
      if (activity && STUDIO_MODES.has(activity.mode)) {
        showStudioHome(activity.mode === 'pythonCodeStudio' ? 'code' : 'sql');
        return;
      }
      if (activity && global.ActivityLabs?.modes.includes(activity.mode)) {
        const stage = document.getElementById('activityStage');
        if (stage) {
          stage.innerHTML = global.ActivityLabs.render(activity);
          global.ActivityLabs.bind(activity);
        }
        return;
      }
      origRenderActivity(activity);
    };
  }

  function enhanceDashboard() {
    document.querySelectorAll('[data-home-action]').forEach(button => {
      if (button.dataset.platformBound) return;
      button.dataset.platformBound = 'true';
      button.addEventListener('click', () => {
        if (button.dataset.homeAction === 'notes') showNotesHome();
        if (button.dataset.homeAction === 'studio') showStudioHome();
      });
    });
    document.querySelectorAll('[data-studio-action]').forEach(button => {
      if (button.dataset.platformBound) return;
      button.dataset.platformBound = 'true';
      button.addEventListener('click', () => openStudioAction(button.dataset.studioAction));
    });
    document.querySelectorAll('[data-studio-workspace]').forEach(button => {
      if (button.dataset.platformBound) return;
      button.dataset.platformBound = 'true';
      button.addEventListener('click', () => showStudioWorkspace(button.dataset.studioWorkspace));
    });
    bindTeacherTaskPack();
    document.querySelectorAll('[data-dashboard-action]').forEach(button => {
      if (button.dataset.platformBound) return;
      button.dataset.platformBound = 'true';
      button.addEventListener('click', event => {
        const action = button.dataset.dashboardAction;
        if (action === 'programming' || action === 'open-lab') {
          event.stopImmediatePropagation();
          loadDemo('sequence');
        }
        if (action === 'practice') {
          event.stopImmediatePropagation();
          showPracticeHub({});
        }
      }, true);
    });
  }

  function boot() {
    wrapCore();
    appendLabNav();
    bindPlatformNav();
    revealDemoSelect();
    enhanceDashboard();
    document.getElementById('practiceRun')?.addEventListener('click', () => {
      runPracticeHub({ count: 8 });
      const strand = document.getElementById('practiceStrand')?.value || '';
      const chapter = document.getElementById('practiceChapter')?.value || '';
      setHash({ practice: chapter || 'all', strand });
    });
    document.getElementById('practiceMore3')?.addEventListener('click', () => {
      runPracticeHub({ count: 3, title: 'Three more', lead: 'A short top-up set from the current filter.' });
    });
    document.getElementById('practiceWrongsOnly')?.addEventListener('click', () => {
      runPracticeHub({
        count: 6,
        wrongsOnly: true,
        title: 'Wrongs only',
        lead: 'Retry stems you missed earlier in this browser session.'
      });
    });
    ['practiceStrand', 'practiceChapter', 'practiceType', 'practiceDifficulty'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => updatePracticePoolMeta());
    });
    demoSelect?.addEventListener('change', () => {
      revealDemoSelect();
      markDemoChips(demoSelect.value);
      if (!writingHash()) setHash({ demo: demoSelect.value });
    });
    window.addEventListener('hashchange', applyHash);
    window.addEventListener('popstate', applyHash);
    if (location.hash) applyHash();
    else setHash({ view: 'home' }, { replace: true });
  }

  global.PlatformApp = { showPracticeHub, showNotesHome, showStudioHome, showStudioWorkspace, openStudioAction, applyHash, setHash, DEMO_GROUPS };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})(window);
