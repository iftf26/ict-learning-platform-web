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

  function setHash(params) {
    const search = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value) search.set(key, value);
    });
    const next = `#${search.toString()}`;
    if (location.hash === next) return;
    global.__platformWritingHash = true;
    history.replaceState(null, '', next || '#');
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
    const items = [...document.querySelectorAll('.nav-item[data-topic]')];
    return items.find(item => item.dataset.topic === topic)
      || items.find(item => item.dataset.topic.startsWith(`${topic} `))
      || items.find(item => (global.CheckpointEngine?.chapterCode(item.dataset.topic) === topic));
  }

  function showPracticeHub(filter = {}) {
    stopAuto?.();
    stopTopicSimulation?.();
    dashboardPage.classList.add('hidden');
    topicPage.classList.add('hidden');
    arcadePage.classList.add('hidden');
    programmingSections.forEach(section => section.classList.add('hidden'));
    const page = document.getElementById('dsePracticePage');
    if (!page) return;
    page.classList.remove('hidden');
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelector('.nav-item[data-page="practice"]')?.classList.add('active');
    const strand = document.getElementById('practiceStrand');
    const chapter = document.getElementById('practiceChapter');
    if (filter.strand && strand) strand.value = filter.strand;
    if (filter.chapter && chapter) chapter.value = filter.chapter;
    runPracticeHub();
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

  function runPracticeHub() {
    fillPracticeFilters();
    const panel = document.getElementById('dsePracticePanel');
    if (!panel || !global.CheckpointEngine) return;
    const strand = document.getElementById('practiceStrand')?.value || '';
    const chapter = document.getElementById('practiceChapter')?.value || '';
    const type = document.getElementById('practiceType')?.value || '';
    const difficulty = document.getElementById('practiceDifficulty')?.value || '';
    global.CheckpointEngine.mount(panel, {
      title: 'DSE Practice Hub',
      lead: 'Questions come from the same chapter pools as the topic checkpoints. Filters change the mix; they do not invent a second bank.',
      count: 8,
      filter: {
        strand: strand || undefined,
        chapter: chapter || undefined,
        type: type || undefined,
        difficulty: difficulty || undefined
      }
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

  function reduceMotion() {
    return Boolean(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function applyHash() {
    if (writingHash()) return;
    global.__platformWritingHash = true;
    const hash = parseHash();
    try {
    if (hash.demo || hash.lab) {
      const key = hash.demo || hash.lab;
      if (demos[key]) loadDemo(key);
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
    if (hash.view === 'home' || hash.page === 'dashboard') showDashboardPage();
    } finally {
      global.__platformWritingHash = false;
    }
  }

  function appendLabNav() {
    const nav = document.querySelector('.module-nav');
    if (!nav || nav.querySelector('[data-page="programming"]')) return;
    const hub = document.querySelector('.nav-item[data-page="dashboard"]');
    if (hub) {
      hub.insertAdjacentHTML('afterend', `
        <button class="nav-item" data-page="programming" type="button">
          <span class="nav-emoji">{ }</span>
          Programming Visual Lab
        </button>
        <button class="nav-item" data-page="practice" type="button">
          <span class="nav-emoji">✓</span>
          DSE Practice Hub
        </button>
      `);
    }
    nav.insertAdjacentHTML('beforeend', DEMO_GROUPS.map((group, index) => `
      <section class="curriculum-group">
        <button class="curriculum-heading" type="button" aria-expanded="false" aria-controls="${group.id}">
          <span class="nav-emoji nav-strand">${index === 0 ? 'D' : 'C'}</span>
          <span>
            <strong>Programming Visual Lab</strong>
            <small class="nav-item-zh">${escapeHtml(group.labelEn)}</small>
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
    document.querySelectorAll('.curriculum-heading').forEach(button => {
      if (button.dataset.labBound) return;
      button.dataset.labBound = 'true';
      button.addEventListener('click', () => toggleNavGroup(button));
    });
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
      if (item.dataset.page === 'programming') {
        loadDemo(currentDemoKey || 'sequence');
        return;
      }
      if (item.dataset.page === 'practice') {
        showPracticeHub({});
        return;
      }
      if (item.dataset.demo) {
        loadDemo(item.dataset.demo);
        setHash({ demo: item.dataset.demo });
      }
    });
  }

  function wrapCore() {
    const origLoad = global.loadDemo;
    global.loadDemo = function (key, keepExercise) {
      document.getElementById('dsePracticePage')?.classList.add('hidden');
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
      origTopic(button);
      const topic = button.dataset.topic;
      setHash({ chapter: global.CheckpointEngine?.chapterCode(topic) || topic, topic });
    };

    const origDash = global.showDashboardPage;
    global.showDashboardPage = function () {
      document.getElementById('dsePracticePage')?.classList.add('hidden');
      origDash();
      setHash({ view: 'home' });
    };

    const origArcade = global.showArcadePage;
    global.showArcadePage = function (key) {
      document.getElementById('dsePracticePage')?.classList.add('hidden');
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

    const origRenderActivity = global.renderInteractiveActivity;
    global.renderInteractiveActivity = function (activity) {
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
      runPracticeHub();
      const strand = document.getElementById('practiceStrand')?.value || '';
      const chapter = document.getElementById('practiceChapter')?.value || '';
      setHash({ practice: chapter || 'all', strand });
    });
    demoSelect?.addEventListener('change', () => {
      revealDemoSelect();
      markDemoChips(demoSelect.value);
      if (!writingHash()) setHash({ demo: demoSelect.value });
    });
    window.addEventListener('hashchange', applyHash);
    if (location.hash) applyHash();
  }

  global.PlatformApp = { showPracticeHub, applyHash, setHash, DEMO_GROUPS };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})(window);
