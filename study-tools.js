/**
 * Phase 3 study tools from the activity design brief:
 * global search, related topics and a chapter learning-flow strip.
 */
(function (global) {
  const SESSION_KEY = 'hkdse-ict-session-v1';
  const FLOW_STEPS = [
    { id: 'chapter-details', label: 'Big idea', labelZh: '先看概念' },
    { id: 'chapter-keywords', label: 'Keywords', labelZh: '再學詞語' },
    { id: 'chapter-mistakes', label: 'Mistakes', labelZh: '辨認陷阱' },
    { id: 'chapter-practice', label: 'Activity', labelZh: '應用' },
    { id: 'chapter-checkpoint', label: 'Checkpoint', labelZh: '檢查理解' }
  ];

  const RELATED = {
    A1: ['A2', 'A3', 'E1'],
    A2: ['A1', 'A6', 'C6'],
    A3: ['A4', 'A1', 'B1'],
    A4: ['A3', 'C5', 'E3'],
    A5: ['A2', 'A6', 'EA1'],
    A6: ['A5', 'A6.4', 'EA4'],
    'A6.4': ['A6', 'EA1', 'EA2'],
    B1: ['B2', 'B4', 'A3'],
    B2: ['B1', 'B3', 'A4'],
    B3: ['B2', 'B1', 'E2'],
    B4: ['B1', 'D4', 'C6'],
    C1: ['C2', 'C3', 'C6'],
    C2: ['C1', 'C3', 'C4'],
    C3: ['C1', 'C4', 'C5'],
    C4: ['C3', 'C5', 'A4'],
    C5: ['C4', 'A4', 'C3'],
    C6: ['C7', 'C8', 'E2'],
    C7: ['C6', 'C8', 'E2'],
    C8: ['C6', 'C7', 'E3'],
    D1: ['D2', 'D6', 'EC1'],
    D2: ['D1', 'D3', 'D4'],
    D3: ['D2', 'D4', 'EC5'],
    D4: ['D2', 'D5', 'D6'],
    D5: ['D4', 'D6', 'EC8'],
    D6: ['D4', 'D5', 'EC2'],
    E1: ['A1', 'E2', 'E3'],
    E2: ['E1', 'C7', 'E3'],
    E3: ['E2', 'C8', 'EA5'],
    EA1: ['A6.4', 'EA2', 'EA3'],
    EA2: ['EA1', 'EA3', 'A6.4'],
    EA3: ['EA1', 'EA2', 'EA4'],
    EA4: ['EA5', 'A6', 'EA3'],
    EA5: ['EA4', 'A6', 'E3'],
    EC1: ['D2', 'EC3', 'EC4'],
    EC2: ['D6', 'EC1', 'EC3'],
    EC3: ['EC1', 'EC4', 'D3'],
    EC4: ['EC1', 'EC5', 'D4'],
    EC5: ['EC4', 'EC6', 'D3'],
    EC6: ['EC5', 'EC7', 'D3'],
    EC7: ['EC6', 'EC8', 'D5'],
    EC8: ['EC7', 'D5', 'E1']
  };

  const EXTRA_KEYWORDS = [
    { term: 'validation', zh: '驗證', chapter: 'A2' },
    { term: 'verification', zh: '核實', chapter: 'A2' },
    { term: "two's complement", zh: '二補數', chapter: 'A3' },
    { term: 'Unicode', zh: '統一碼', chapter: 'A3' },
    { term: 'absolute reference', zh: '絕對參照', chapter: 'A5' },
    { term: 'primary key', zh: '主鍵', chapter: 'A6' },
    { term: 'fetch-decode-execute', zh: '擷取解碼執行', chapter: 'B1' },
    { term: 'router', zh: '路由器', chapter: 'C1' },
    { term: 'switch', zh: '交換器', chapter: 'C1' },
    { term: 'bandwidth', zh: '頻寬', chapter: 'C2' },
    { term: 'throughput', zh: '吞吐量', chapter: 'C2' },
    { term: 'DNS', zh: '域名系統', chapter: 'C3' },
    { term: 'HTTPS', zh: '安全超文本傳輸協定', chapter: 'C3' },
    { term: 'relative path', zh: '相對路徑', chapter: 'C5' },
    { term: 'phishing', zh: '網絡釣魚', chapter: 'C6' },
    { term: 'encryption', zh: '加密', chapter: 'C8' },
    { term: 'PKI', zh: '公開金鑰基建', chapter: 'C8' },
    { term: 'normalisation', zh: '正規化', chapter: 'EA5' },
    { term: 'stack', zh: '堆疊', chapter: 'EC5' },
    { term: 'binary search', zh: '二分搜尋', chapter: 'EC6' }
  ];

  function esc(value) {
    if (typeof global.escapeHtml === 'function') return global.escapeHtml(value);
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function flowNumber(index) {
    return index < 20 ? String.fromCharCode(9312 + index) : String(index + 1) + '.';
  }

  function codeOf(topicId) {
    if (global.CheckpointEngine && typeof global.CheckpointEngine.chapterCode === 'function') {
      return global.CheckpointEngine.chapterCode(topicId);
    }
    const match = String(topicId || '').match(/^(EA|EC|[A-E])\d+(?:\.\d+)?/);
    return match ? match[0] : String(topicId || '');
  }

  function loadSession() {
    try {
      return JSON.parse(sessionStorage.getItem(SESSION_KEY) || '{}') || {};
    } catch (error) {
      return {};
    }
  }

  function saveSession(data) {
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
    } catch (error) {
      /* ignore quota / private mode */
    }
  }

  function touchSession(patch) {
    const next = Object.assign({ opened: [] }, loadSession(), patch, { updatedAt: Date.now() });
    saveSession(next);
    return next;
  }

  function recordOpen(topicId) {
    const code = codeOf(topicId);
    const opened = (loadSession().opened || []).filter(function (item) { return item !== code; });
    opened.unshift(code);
    touchSession({ opened: opened.slice(0, 12), lastChapter: code, lastTopic: topicId });
  }

  function titleEn(topicId) {
    return typeof displayChapterTitle === 'function' ? displayChapterTitle(topicId, topicId) : String(topicId || '');
  }

  function titleZh(topicId) {
    return typeof displayChapterTitleZh === 'function' ? (displayChapterTitleZh(topicId) || '') : '';
  }

  function findTopicButton(topicId) {
    const wanted = codeOf(topicId);
    return Array.prototype.find.call(document.querySelectorAll('.nav-item[data-topic]'), function (item) {
      return item.dataset.topic === topicId || codeOf(item.dataset.topic) === wanted;
    }) || null;
  }

  function openTopic(topicId) {
    const button = findTopicButton(topicId);
    if (!button || typeof showTopicPage !== 'function') return false;
    showTopicPage(button);
    return true;
  }

  function buildIndex() {
    const index = [];
    const buttons = Array.prototype.slice.call(document.querySelectorAll('.nav-item[data-topic]'));
    buttons.forEach(function (button) {
      const topicId = button.dataset.topic;
      const code = codeOf(topicId);
      const en = titleEn(topicId);
      const zh = titleZh(topicId);
      const guide = typeof getChapterGuide === 'function' ? getChapterGuide(topicId) : { keywords: [], mistakes: [] };
      const parts = [code, topicId, en, zh];
      (guide.keywords || []).forEach(function (item) {
        parts.push(item.term, item.meaning);
      });
      (guide.mistakes || []).forEach(function (item) {
        parts.push(item.wrong, item.correct);
      });
      const haystack = parts.filter(Boolean).join(' ').toLowerCase();

      index.push({
        type: 'chapter',
        code: code,
        topicId: topicId,
        titleEn: en,
        titleZh: zh,
        haystack: haystack,
        blurb: ((guide.keywords || [])[0] && (guide.keywords || [])[0].meaning) || ''
      });

      (guide.keywords || []).forEach(function (keyword) {
        index.push({
          type: 'keyword',
          code: code,
          topicId: topicId,
          titleEn: keyword.term,
          titleZh: '',
          haystack: [keyword.term, keyword.meaning, code, en].filter(Boolean).join(' ').toLowerCase(),
          blurb: 'Keyword in ' + code
        });
      });
    });

    EXTRA_KEYWORDS.forEach(function (item) {
      const button = buttons.find(function (btn) { return codeOf(btn.dataset.topic) === item.chapter; });
      if (!button) return;
      index.push({
        type: 'keyword',
        code: item.chapter,
        topicId: button.dataset.topic,
        titleEn: item.term,
        titleZh: item.zh,
        haystack: (item.term + ' ' + item.zh + ' ' + item.chapter).toLowerCase(),
        blurb: 'Jump to ' + item.chapter
      });
    });

    return index;
  }

  function search(query, limit) {
    limit = limit || 8;
    const raw = String(query || '').trim();
    const q = raw.toLowerCase();
    if (!q) return [];
    const scored = buildIndex().map(function (item) {
      var score = 0;
      if (item.code.toLowerCase() === q) score += 50;
      if (item.titleEn.toLowerCase().startsWith(q)) score += 30;
      if (item.titleZh && item.titleZh.indexOf(raw) !== -1) score += 28;
      if (item.haystack.indexOf(q) !== -1) score += 12;
      q.split(/\s+/).forEach(function (token) {
        if (token && item.haystack.indexOf(token) !== -1) score += 4;
      });
      return Object.assign({}, item, { score: score });
    }).filter(function (item) { return item.score > 0; });

    scored.sort(function (a, b) {
      return b.score - a.score || a.titleEn.localeCompare(b.titleEn);
    });

    const seen = {};
    return scored.filter(function (item) {
      const key = item.type + ':' + item.code + ':' + item.titleEn;
      if (seen[key]) return false;
      seen[key] = true;
      return true;
    }).slice(0, limit);
  }

  function ensureChrome() {
    const brand = document.querySelector('.brand-block');
    if (brand && !document.getElementById('studySearch')) {
      brand.insertAdjacentHTML('afterend', [
        '<div class="study-search" id="studySearch">',
        '  <label class="study-search-label" for="studySearchInput">Search concepts</label>',
        '  <input id="studySearchInput" type="search" placeholder="validation · 路由器 · Unicode · A6" autocomplete="off" />',
        '  <div id="studySearchResults" class="study-search-results" hidden role="listbox" aria-label="Search results"></div>',
        '</div>'
      ].join(''));
    }

  }

  function renderSearchResults(query) {
    const box = document.getElementById('studySearchResults');
    if (!box) return;
    const results = search(query);
    if (!results.length) {
      box.hidden = !String(query || '').trim();
      box.innerHTML = String(query || '').trim()
        ? '<p class="study-search-empty">No match for “' + esc(query) + '”.</p>'
        : '';
      return;
    }
    box.hidden = false;
    box.innerHTML = results.map(function (item) {
      return [
        '<button type="button" class="study-search-hit" role="option" data-topic-id="' + esc(item.topicId) + '">',
        '  <span class="study-search-kicker">' + esc(item.type === 'keyword' ? 'Keyword' : 'Chapter') + ' · ' + esc(item.code) + '</span>',
        '  <strong>' + esc(item.titleEn) + '</strong>',
        item.titleZh ? '  <span class="study-search-zh" lang="zh-Hant">' + esc(item.titleZh) + '</span>' : '',
        '  <small>' + esc(item.blurb || '') + '</small>',
        '</button>'
      ].join('');
    }).join('');
  }

  function sectionIsUsable(id) {
    const target = document.getElementById(id);
    if (!target) return false;
    if (id === 'chapter-practice') {
      return Boolean(target.querySelector('.lab-shell, .activity-card'));
    }
    if (target.classList.contains('hidden')) return false;
    const closest = target.closest('.chapter-section');
    if (closest && closest.classList.contains('hidden')) return false;
    return true;
  }

  function jumpToFlowTarget(id) {
    const target = document.getElementById(id);
    if (!target) return false;
    const section = target.classList.contains('chapter-section') ? target : target.closest('.chapter-section');
    if (section) section.classList.remove('hidden');
    target.classList.remove('hidden');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    target.classList.add('flow-target-flash');
    window.setTimeout(function () { target.classList.remove('flow-target-flash'); }, 1200);
    return true;
  }

  function injectLearningFlow() {
    const intro = document.getElementById('chapter-intro');
    if (!intro) return;
    const old = document.getElementById('learningFlowStrip');
    if (old) old.remove();
    const steps = FLOW_STEPS.filter(function (step) {
      return sectionIsUsable(step.id);
    }).map(function (step, index) {
      return [
        '<button type="button" class="learning-flow-step" data-flow-target="' + step.id + '">',
        '  <span>' + esc(flowNumber(index) + ' ' + step.label) + '</span>',
        '  <small lang="zh-Hant">' + esc(step.labelZh) + '</small>',
        '</button>'
      ].join('');
    }).join('<span class="learning-flow-arrow" aria-hidden="true">→</span>');

    if (!steps) return;

    intro.insertAdjacentHTML('beforeend', [
      '<div class="learning-flow-strip" id="learningFlowStrip" aria-label="Learning path">',
      '  <p class="learning-flow-lead">Follow this order · 由上到下順序學習</p>',
      '  <div class="learning-flow-track">' + steps + '</div>',
      '</div>'
    ].join(''));
  }

  function injectRelatedTopics(topicId) {
    const host = document.getElementById('chapter-checkpoint');
    if (!host) return;
    const old = document.getElementById('relatedTopicsPanel');
    if (old) old.remove();
    const related = RELATED[codeOf(topicId)] || [];
    if (!related.length) return;

    const cards = related.map(function (code) {
      const button = findTopicButton(code);
      if (!button) return '';
      const en = titleEn(button.dataset.topic);
      const zh = titleZh(button.dataset.topic);
      return [
        '<button type="button" class="related-topic-card" data-topic-id="' + esc(button.dataset.topic) + '">',
        '  <span>' + esc(code) + '</span>',
        '  <strong>' + esc(en) + '</strong>',
        zh ? '  <small lang="zh-Hant">' + esc(zh) + '</small>' : '',
        '</button>'
      ].join('');
    }).filter(Boolean).join('');

    if (!cards) return;
    host.insertAdjacentHTML('afterend', [
      '<section class="related-topics-panel" id="relatedTopicsPanel" aria-label="Related topics">',
      '  <div class="chapter-section-heading">',
      '    <p class="eyebrow">Next useful links</p>',
      '    <h3>Related topics <span class="heading-zh" lang="zh-Hant">相關課題</span></h3>',
      '  </div>',
      '  <p class="chapter-section-lead">Open these after you finish this chapter and want the next connected topic.</p>',
      '  <div class="related-topics-grid">' + cards + '</div>',
      '</section>'
    ].join(''));
  }

  function enhanceTopic(topicId) {
    if (!topicId) return;
    recordOpen(topicId);
    injectLearningFlow();
    injectRelatedTopics(topicId);
  }

  function bindEvents() {
    const input = document.getElementById('studySearchInput');
    const results = document.getElementById('studySearchResults');

    if (input) {
      input.addEventListener('input', function () { renderSearchResults(input.value); });
      input.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          if (results) results.hidden = true;
          input.blur();
        }
        if (event.key === 'Enter') {
          const first = results && results.querySelector('.study-search-hit');
          if (first) {
            event.preventDefault();
            first.click();
          }
        }
      });
    }

    if (results) {
      results.addEventListener('click', function (event) {
        const hit = event.target.closest('[data-topic-id]');
        if (!hit) return;
        openTopic(hit.dataset.topicId);
        results.hidden = true;
        if (input) input.value = '';
      });
    }

    document.addEventListener('click', function (event) {
      if (!event.target.closest('#studySearch') && results) results.hidden = true;

      const jump = event.target.closest('#relatedTopicsPanel [data-topic-id]');
      if (jump) openTopic(jump.dataset.topicId);

      const flow = event.target.closest('[data-flow-target]');
      if (flow && !flow.disabled) {
        event.preventDefault();
        jumpToFlowTarget(flow.dataset.flowTarget);
      }

      // Search must not block sidebar navigation.
      if (event.target.closest('.module-nav .nav-item, .module-nav .curriculum-heading') && results) {
        results.hidden = true;
      }
    });

    document.addEventListener('keydown', function (event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        const searchInput = document.getElementById('studySearchInput');
        if (!searchInput) return;
        event.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
    });
  }

  function boot() {
    ensureChrome();
    bindEvents();

    const original = global.showTopicPage;
    if (typeof original === 'function' && !original.__studyToolsWrapped) {
      global.showTopicPage = function wrappedShowTopicPage(button) {
        original(button);
        enhanceTopic(button && button.dataset ? button.dataset.topic : '');
      };
      global.showTopicPage.__studyToolsWrapped = true;
    }
    const currentTopic = document.querySelector('.nav-item[data-topic].active')?.dataset.topic;
    if (currentTopic && !document.getElementById('topicPage')?.classList.contains('hidden')) {
      enhanceTopic(currentTopic);
    }
  }

  global.StudyTools = {
    search: search,
    openTopic: openTopic,
    enhanceTopic: enhanceTopic
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})(window);
