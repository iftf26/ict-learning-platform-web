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

  function teacherMode() {
    return parseHash().teacher === '1';
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
    stopAuto?.();
    stopTopicSimulation?.();
    dashboardPage.classList.add('hidden');
    document.getElementById('studioHomePage')?.classList.add('hidden');
    topicPage.classList.add('hidden');
    arcadePage.classList.add('hidden');
    programmingSections.forEach(section => section.classList.add('hidden'));
    const page = document.getElementById('dsePracticePage');
    if (!page) return;
    page.classList.remove('hidden');
    setModeNav('studio');
    const strand = document.getElementById('practiceStrand');
    const chapter = document.getElementById('practiceChapter');
    if (filter.strand && strand) strand.value = filter.strand;
    if (filter.chapter && chapter) chapter.value = filter.chapter;
    runPracticeHub({ count: 8 });
    updatePracticePoolMeta();
    setHash({
      practice: filter.chapter || 'all',
      strand: filter.strand || ''
    });
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

  function updateDerivedCounts() {
    const notesCount = document.querySelector('[data-notes-count]');
    const demoCount = document.querySelector('[data-demo-count]');
    if (notesCount) notesCount.textContent = String(document.querySelectorAll('.nav-item[data-topic]').length || 0);
    if (demoCount) demoCount.textContent = String(DEMO_GROUPS.reduce((total, group) => total + group.keys.length, 0));
  }

  function revealTeacherTools() {
    const panel = document.querySelector('[data-teacher-task-pack]');
    if (!panel) return;
    panel.hidden = !teacherMode();
  }

  function clearRouteFallback() {
    document.querySelector('[data-route-fallback]')?.remove();
  }

  function showRouteFallback(title, detail) {
    showNotesHome();
    clearRouteFallback();
    const host = document.querySelector('.notes-dashboard-content');
    if (!host) return;
    const searchHint = detail ? `<p>${escapeHtml(detail)}</p>` : '';
    host.insertAdjacentHTML('afterbegin', `
      <section class="checkpoint-empty route-fallback" data-route-fallback>
        <h3>${escapeHtml(title)}</h3>
        ${searchHint}
        <div class="checkpoint-actions">
          <button class="primary-btn" type="button" data-home-resume>Go to Notes</button>
          <button class="secondary-btn" type="button" data-home-focus="search">Search topic</button>
          <button class="ghost-btn" type="button" data-home-action="studio">Open Studio</button>
        </div>
      </section>
    `);
    enhanceDashboard();
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
      title: options.title || 'DSE Practice',
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
    document.getElementById('studioHomePage')?.classList.add('hidden');
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
    if (workspace === 'visual') {
      openStudioAction('visual');
      return;
    }
    if (workspace === 'practice') {
      openStudioAction('practice');
      return;
    }
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
  }

  function updateTaskBankCount() {
    const output = document.querySelector('[data-task-bank-count]');
    const stats = global.StudioTaskBankAPI?.getStats?.();
    if (!output || !stats) return;
    output.textContent = `${stats.python} Python tasks · ${stats.sql} SQL tasks${teacherMode() && stats.local ? ` · ${stats.local} teacher preview` : ''}`;
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
    revealTeacherTools();
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
  }

  function showStudioHome(workspace = 'code') {
    stopAuto?.();
    stopTopicSimulation?.();
    arcadePage.classList.add('hidden');
    topicPage.classList.add('hidden');
    document.getElementById('dsePracticePage')?.classList.add('hidden');
    programmingSections.forEach(section => section.classList.add('hidden'));
    dashboardPage.classList.add('hidden');
    document.getElementById('studioHomePage')?.classList.remove('hidden');
    setModeNav('studio');
    showStudioWorkspace(workspace);
    if (!writingHash()) setHash({ view: 'studio', workspace });
  }

  function openStudioAction(action) {
    if (action === 'code' || action === 'sql') return showStudioHome(action);
    if (action === 'visual') {
      loadDemo('sequence');
      return;
    }
    if (action === 'practice') showPracticeHub({});
  }

  function reduceMotion() {
    return Boolean(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function applyHash() {
    if (writingHash()) return;
    global.__platformWritingHash = true;
    const hash = parseHash();
    try {
    revealTeacherTools();
    clearRouteFallback();
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
      if (demos[key]) loadDemo(key);
      else showRouteFallback('Trace Lab demo not found', `The demo link “${key}” is no longer available. Open Trace Lab and choose another programming demonstration.`);
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
      } else {
        showRouteFallback('Topic not found', `The chapter link “${hash.chapter || hash.topic}” does not match the current syllabus navigation. Use Notes or Search to reopen the right chapter.`);
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
      } else if (hash.activity) {
        showRouteFallback('Activity not found', `The activity link “${hash.activity}” is not available here. Open the chapter in Notes or move to Studio.`);
      }
      return;
    }
    if (hash.view === 'studio') {
      showStudioHome(hash.workspace || 'code');
      return;
    }
    if (hash.view === 'notes') {
      showNotesHome();
      return;
    }
    if (hash.view === 'home' || hash.page === 'dashboard') showDashboardPage();
    else if (location.hash) showRouteFallback('Link not recognised', 'This saved link does not match the current site structure. Open Notes, Search, or Studio from here.');
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
    });
  }

  function wrapCore() {
    const origProg = global.showProgrammingView;
    global.showProgrammingView = function () {
      document.getElementById('dsePracticePage')?.classList.add('hidden');
      hideStudioHome();
      origProg();
      revealDemoSelect();
    };

    const origLoad = global.loadDemo;
    global.loadDemo = function (key, keepExercise) {
      document.getElementById('dsePracticePage')?.classList.add('hidden');
      hideStudioHome();
      origLoad(key, keepExercise);
      revealDemoSelect();
      markDemoChips(key);
      const story = document.getElementById('storyText');
      if (story && /sidebar/i.test(story.textContent)) {
        story.textContent = 'Choose a demonstration, then run the program one line at a time. Watch the variable table before you predict.';
      }
      if (!writingHash()) setHash({ demo: key });
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
      document.querySelectorAll('[data-home-resume]').forEach(button => {
        if (button.dataset.platformBound) return;
        button.dataset.platformBound = 'true';
        button.addEventListener('click', () => {
          const lastTopic = (() => {
            try {
              return JSON.parse(sessionStorage.getItem('hkdse-ict-session-v1') || '{}')?.lastTopic || '';
            } catch (_error) {
              return '';
            }
          })();
          const match = findTopicButton(lastTopic || 'A1 Introduction to Information Processing');
          if (match) showTopicPage(match);
        });
      });
      document.querySelectorAll('[data-home-focus]').forEach(button => {
        if (button.dataset.platformBound) return;
        button.dataset.platformBound = 'true';
        button.addEventListener('click', () => {
          if (button.dataset.homeFocus === 'search') {
            showNotesHome();
            document.getElementById('studySearchInput')?.focus();
            return;
          }
          if (button.dataset.homeFocus === 'syllabus') {
            showNotesHome();
            document.querySelector('.curriculum-heading')?.focus();
          }
        });
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
    updateDerivedCounts();
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
      runPracticeHub({ count: 3, title: 'New 3-question set', lead: 'A fresh short set from the current filter.' });
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
