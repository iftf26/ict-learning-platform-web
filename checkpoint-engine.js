(function (global) {
  const SESSION_MISSES = [];

  function shuffle(list) {
    const copy = [...(list || [])];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function chapterCode(id) {
    const match = String(id || '').match(/^(EA|EC|[A-E])\d+(?:\.\d+)?/);
    return match ? match[0] : '';
  }

  function strandFromGroup(group) {
    const text = String(group || '');
    if (text.includes('Elective A')) return 'Elective A';
    if (text.includes('Elective C')) return 'Elective C';
    if (text.startsWith('Core A') || text.includes('Information Processing')) return 'Core A';
    if (text.startsWith('Core B') || text.includes('Computer System')) return 'Core B';
    if (text.startsWith('Core C') || text.includes('Internet and its')) return 'Core C';
    if (text.startsWith('Core D') || text.includes('Computational Thinking')) return 'Core D';
    if (text.startsWith('Core E') || text.includes('Social Implications')) return 'Core E';
    return 'Core A';
  }

  function escapeHtml(value) {
    if (typeof global.escapeHtml === 'function') return global.escapeHtml(value);
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function normalisePractice(item, chapter) {
    const options = (item.options || []).map(option => ({
      text: option.text,
      correct: Boolean(option.correct),
      why: option.feedback || option.why || ''
    }));
    const correct = options.find(option => option.correct);
    return {
      id: item.id || `${chapterCode(chapter.id)}-${(item.title || 'q').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      type: item.type || 'mc',
      chapter: chapterCode(chapter.id),
      chapterId: chapter.id,
      strand: strandFromGroup(chapter.group),
      difficulty: item.difficulty || (String(item.level || '').includes('2') ? 'stretch' : 'standard'),
      title: item.title || 'Checkpoint',
      stem: item.stem,
      context: item.context || '',
      options,
      items: item.items || [],
      accept: item.accept || [],
      marks: item.marks || [],
      hint: item.hint || '',
      explanation: item.solution || item.explanation || (correct ? correct.why : ''),
      nextAction: item.nextAction || 'Retry a similar question, then explain the idea in one sentence.'
    };
  }

  function questionsFromMistakes(chapter) {
    return (chapter.misconceptions || [])
      .filter(item => item && item.wrong && item.correct)
      .map((item, index) => ({
        id: `${chapterCode(chapter.id)}-trap-${index + 1}`,
        type: 'mc',
        chapter: chapterCode(chapter.id),
        chapterId: chapter.id,
        strand: strandFromGroup(chapter.group),
        difficulty: 'standard',
        title: 'Common trap',
        stem: `A student says: “${item.wrong}” Why is this not a DSE-safe statement?`,
        options: shuffle([
          { text: item.correct, correct: true, why: item.correct },
          { text: 'The student is fully correct, so no change is needed.', correct: false, why: `The quoted idea is a common trap. ${item.correct}` },
          { text: 'The wording is wrong only because DSE never tests this topic.', correct: false, why: 'This idea is in the syllabus. The problem is the misconception, not whether it can appear in an exam.' },
          { text: 'It is wrong only because it is written in English rather than Chinese.', correct: false, why: 'Language choice is not the issue. The concept itself needs correcting.' }
        ]),
        hint: 'Compare the trap with the correct syllabus idea.',
        explanation: item.correct,
        nextAction: 'Rewrite the idea using the correct DSE term before moving on.'
      }));
  }

  function allChapters() {
    const source = typeof topicContent !== 'undefined' ? topicContent : (global.topicContent || {});
    return Object.values(source);
  }

  function extraBankFor(chapterId) {
    const bank = global.CHECKPOINT_BANK || {};
    const code = chapterCode(chapterId);
    const chapter = allChapters().find(item => item.id === chapterId) || {};
    return [
      ...(bank[chapterId] || []),
      ...(bank[code] || [])
    ].map(item => ({
      ...item,
      chapter: item.chapter || code,
      chapterId: item.chapterId || chapterId,
      strand: item.strand || strandFromGroup(chapter.group)
    }));
  }

  function collectPool(filter = {}) {
    const chapters = allChapters();
    const selected = chapters.filter(chapter => {
      if (filter.chapterId && chapter.id !== filter.chapterId) return false;
      if (filter.chapter && chapterCode(chapter.id) !== filter.chapter) return false;
      if (filter.strand && strandFromGroup(chapter.group) !== filter.strand) return false;
      return true;
    });
    const pool = [];
    selected.forEach(chapter => {
      (chapter.practice || []).forEach(item => pool.push(normalisePractice(item, chapter)));
      extraBankFor(chapter.id).forEach(item => pool.push({
        ...normalisePractice(item, chapter),
        ...item,
        chapter: chapterCode(chapter.id),
        chapterId: chapter.id,
        strand: strandFromGroup(chapter.group)
      }));
      if ((chapter.practice || []).length < 6) {
        questionsFromMistakes(chapter).forEach(item => pool.push(item));
      }
    });
    const seen = new Set();
    return pool.filter(item => {
      const key = `${item.chapter}|${item.type}|${item.stem}`;
      if (seen.has(key) || !item.stem) return false;
      seen.add(key);
      return !filter.type || item.type === filter.type;
    }).filter(item => !filter.difficulty || item.difficulty === filter.difficulty);
  }

  function pickSet(pool, count = 6) {
    const shuffled = shuffle(pool);
    return shuffled.slice(0, Math.min(Math.max(count, 1), shuffled.length)).map(item => {
      const copy = JSON.parse(JSON.stringify(item));
      if (copy.options && copy.options.length) copy.options = shuffle(copy.options);
      if (copy.type === 'order' && copy.items) {
        copy.correctOrder = [...copy.items];
        copy.items = shuffle(copy.items);
      }
      return copy;
    });
  }

  function optionIsCorrect(option) {
    return Boolean(option && option.correct);
  }

  function normaliseAnswer(value) {
    return String(value || '').trim().toLowerCase().replace(/\s+/g, ' ');
  }

  function fillIsCorrect(question, value) {
    const accepted = (question.accept || [question.answer]).filter(Boolean).map(normaliseAnswer);
    return accepted.includes(normaliseAnswer(value));
  }

  function shortMarks(question, value) {
    const text = normaliseAnswer(value);
    return (question.marks || []).map(mark => {
      const keywords = (mark.keywords || []).map(normaliseAnswer);
      const hit = keywords.length ? keywords.some(word => text.includes(word)) : false;
      return { ...mark, hit };
    });
  }

  function recordMiss(question) {
    SESSION_MISSES.push({
      chapter: question.chapter,
      title: question.title,
      stem: question.stem,
      at: Date.now()
    });
    if (SESSION_MISSES.length > 40) SESSION_MISSES.shift();
  }

  function teachFeedback(question, result) {
    if (result.correct) {
      return {
        tone: 'good',
        title: 'Correct.',
        body: result.why || question.explanation || 'That matches the syllabus idea.',
        next: result.nextAction || question.nextAction || 'Keep the distinction ready for a DSE scenario.'
      };
    }
    return {
      tone: 'bad',
      title: 'Not quite.',
      body: result.why || 'Check the concept again.',
      concept: question.explanation || '',
      next: result.nextAction || question.nextAction || 'Retry, then say the correct idea in one sentence.'
    };
  }

  function renderFeedback(feedback) {
    return `
      <div class="checkpoint-feedback ${feedback.tone}" role="status">
        <strong>${escapeHtml(feedback.title)}</strong>
        <p>${escapeHtml(feedback.body)}</p>
        ${feedback.concept ? `<p class="checkpoint-concept"><span>Correct concept</span>${escapeHtml(feedback.concept)}</p>` : ''}
        ${feedback.next ? `<p class="checkpoint-next"><span>Next</span>${escapeHtml(feedback.next)}</p>` : ''}
      </div>
    `;
  }

  function renderMc(question, index, total) {
    return `
      <div class="checkpoint-options" role="group" aria-label="Answer choices">
        ${(question.options || []).map((option, optionIndex) => `
          <button class="checkpoint-option" type="button" data-check-option="${optionIndex}">
            ${escapeHtml(option.text)}
          </button>
        `).join('')}
      </div>
    `;
  }

  function renderFill(question) {
    return `
      <label class="checkpoint-fill">
        <span>Your answer</span>
        <input type="text" data-check-fill autocomplete="off" aria-label="Fill in the missing term">
      </label>
      <button class="primary-btn" type="button" data-check-submit>Check</button>
    `;
  }

  function renderShort(question) {
    return `
      <label class="checkpoint-fill">
        <span>Write a short DSE-style answer</span>
        <textarea data-check-short rows="4" aria-label="Short answer"></textarea>
      </label>
      <button class="primary-btn" type="button" data-check-submit>Check marking points</button>
    `;
  }

  function renderOrder(question) {
    return `
      <p class="checkpoint-help">Click the steps in the correct order. Click a selected step again to remove it.</p>
      <div class="checkpoint-order-bank" role="group" aria-label="Steps to order">
        ${(question.items || []).map((item, index) => `
          <button class="checkpoint-order-item" type="button" data-order-item="${index}">${escapeHtml(item)}</button>
        `).join('')}
      </div>
      <ol class="checkpoint-order-chosen" data-order-chosen aria-label="Your order"></ol>
      <button class="primary-btn" type="button" data-check-submit>Check order</button>
    `;
  }

  function renderQuestion(question, index, total) {
    const body = {
      mc: renderMc,
      fill: renderFill,
      short: renderShort,
      order: renderOrder
    }[question.type] || renderMc;
    return `
      <article class="checkpoint-card" data-checkpoint-card>
        <div class="checkpoint-meta">
          <span>${escapeHtml(question.chapter || '')} · ${escapeHtml(question.difficulty || 'standard')}</span>
          <span>Question ${index + 1} / ${total}</span>
        </div>
        <p class="eyebrow">${escapeHtml(question.title || 'Checkpoint')}</p>
        ${question.context ? `<p class="checkpoint-context">${escapeHtml(question.context)}</p>` : ''}
        <h4>${escapeHtml(question.stem)}</h4>
        ${body(question, index, total)}
        <div class="checkpoint-tools">
          <button class="ghost-btn" type="button" data-check-hint ${question.hint ? '' : 'hidden'}>Hint</button>
        </div>
        <p class="checkpoint-hint" data-check-hint-box hidden>${escapeHtml(question.hint || '')}</p>
        <div data-check-feedback></div>
      </article>
    `;
  }

  function mount(container, options = {}) {
    if (!container) return null;
    const count = options.count || 6;
    const pool = options.pool || collectPool(options.filter || {});
    const session = {
      filter: options.filter || {},
      count,
      pool,
      items: pickSet(pool, count),
      index: 0,
      answered: false,
      score: { correct: 0, wrong: 0 },
      misses: []
    };

    function current() {
      return session.items[session.index];
    }

    function updateScoreboard() {
      const xp = container.querySelector('[data-check-xp]');
      const done = container.querySelector('[data-check-done]');
      if (xp) xp.textContent = `Correct ${session.score.correct}`;
      if (done) done.textContent = `${Math.min(session.index + (session.answered ? 1 : 0), session.items.length)}/${session.items.length} tried`;
    }

    function paint() {
      if (!session.items.length) {
        container.innerHTML = `
          <div class="checkpoint-empty">
            <h3>No checkpoint questions yet</h3>
            <p>A question pool will appear here when this topic has enough DSE-safe items.</p>
          </div>
        `;
        return;
      }
      if (session.index >= session.items.length) {
        const missText = session.misses.length
          ? session.misses.map(item => `<li>${escapeHtml(item.title)} — ${escapeHtml(item.chapter)}</li>`).join('')
          : '<li>No major misses in this set.</li>';
        container.querySelector('[data-check-body]').innerHTML = `
          <article class="checkpoint-summary">
            <h4>Checkpoint complete</h4>
            <p>You answered ${session.score.correct} of ${session.items.length} correctly in this session set.</p>
            <p>Ideas to retry:</p>
            <ul>${missText}</ul>
            <div class="checkpoint-actions">
              <button class="primary-btn" type="button" data-check-retry>Retry this set</button>
              <button class="secondary-btn" type="button" data-check-new>Generate another set</button>
            </div>
          </article>
        `;
        updateScoreboard();
        return;
      }
      const question = current();
      session.answered = false;
      container.querySelector('[data-check-body]').innerHTML = renderQuestion(question, session.index, session.items.length);
      bindQuestion();
      updateScoreboard();
    }

    function markOptionButtons(question, chosenIndex) {
      container.querySelectorAll('[data-check-option]').forEach(button => {
        const option = question.options[Number(button.dataset.checkOption)];
        button.disabled = true;
        if (optionIsCorrect(option)) button.classList.add('correct');
        if (Number(button.dataset.checkOption) === chosenIndex && !optionIsCorrect(option)) button.classList.add('wrong');
      });
    }

    function finishQuestion(question, correct, why) {
      session.answered = true;
      const feedback = teachFeedback(question, {
        correct,
        why,
        nextAction: question.nextAction
      });
      if (!correct) {
        session.score.wrong += 1;
        session.misses.push(question);
        recordMiss(question);
      } else {
        session.score.correct += 1;
      }
      const box = container.querySelector('[data-check-feedback]');
      if (box) box.innerHTML = renderFeedback(feedback) + `
        <div class="checkpoint-actions">
          <button class="primary-btn" type="button" data-check-next>${session.index + 1 < session.items.length ? 'Next question' : 'See summary'}</button>
        </div>
      `;
      updateScoreboard();
    }

    function bindQuestion() {
      const question = current();
      container.querySelector('[data-check-hint]')?.addEventListener('click', () => {
        const box = container.querySelector('[data-check-hint-box]');
        if (box) box.hidden = false;
      });
      container.querySelectorAll('[data-check-option]').forEach(button => {
        button.addEventListener('click', () => {
          if (session.answered) return;
          const option = question.options[Number(button.dataset.checkOption)];
          markOptionButtons(question, Number(button.dataset.checkOption));
          finishQuestion(question, optionIsCorrect(option), option.why);
        });
      });
      const chosen = [];
      container.querySelectorAll('[data-order-item]').forEach(button => {
        button.addEventListener('click', () => {
          if (session.answered) return;
          const value = question.items[Number(button.dataset.orderItem)];
          const already = chosen.indexOf(value);
          if (already >= 0) {
            chosen.splice(already, 1);
            button.classList.remove('active');
          } else {
            chosen.push(value);
            button.classList.add('active');
          }
          const list = container.querySelector('[data-order-chosen]');
          if (list) list.innerHTML = chosen.map(item => `<li>${escapeHtml(item)}</li>`).join('');
        });
      });
      container.querySelector('[data-check-submit]')?.addEventListener('click', () => {
        if (session.answered) return;
        if (question.type === 'fill') {
          const value = container.querySelector('[data-check-fill]')?.value || '';
          const correct = fillIsCorrect(question, value);
          finishQuestion(
            question,
            correct,
            correct ? question.explanation : `“${value || 'blank'}” is not the syllabus term here. ${question.explanation}`
          );
          return;
        }
        if (question.type === 'short') {
          const value = container.querySelector('[data-check-short]')?.value || '';
          const marks = shortMarks(question, value);
          const hitCount = marks.filter(mark => mark.hit).length;
          const correct = hitCount >= Math.max(1, Math.ceil(marks.length / 2));
          const why = marks.length
            ? `Marking points:\n${marks.map(mark => `${mark.hit ? 'Awarded' : 'Not yet'}: ${mark.point}`).join(' ')}`
            : question.explanation;
          const box = container.querySelector('[data-check-feedback]');
          finishQuestion(question, correct, why);
          if (box) {
            box.insertAdjacentHTML('beforeend', `
              <ul class="checkpoint-marks">
                ${marks.map(mark => `<li class="${mark.hit ? 'hit' : 'miss'}"><span>${mark.hit ? 'Awarded' : 'Look for'}</span>${escapeHtml(mark.point)}</li>`).join('')}
              </ul>
            `);
          }
          return;
        }
        if (question.type === 'order') {
          const expected = question.correctOrder || question.items;
          const correct = chosen.length === expected.length && chosen.every((item, index) => item === expected[index]);
          finishQuestion(
            question,
            correct,
            correct
              ? 'That order matches the process.'
              : `The correct order is: ${expected.join(' → ')}. ${question.explanation || ''}`
          );
        }
      });
    }

    container.innerHTML = `
      <div class="checkpoint-engine">
        <div class="practice-header">
          <div>
            <p class="eyebrow">Checkpoint</p>
            <h3>${escapeHtml(options.title || 'Mixed DSE check')}</h3>
            <p>${escapeHtml(options.lead || 'A randomised set from this topic. Feedback explains the idea, not only right or wrong.')}</p>
          </div>
          <div class="practice-scoreboard">
            <span data-check-xp>Correct 0</span>
            <span data-check-done>0/${session.items.length} tried</span>
          </div>
        </div>
        <div data-check-body></div>
      </div>
    `;
    container.addEventListener('click', event => {
      if (event.target.closest('[data-check-next]')) {
        session.index += 1;
        paint();
      }
      if (event.target.closest('[data-check-retry]')) {
        session.index = 0;
        session.score = { correct: 0, wrong: 0 };
        session.misses = [];
        paint();
      }
      if (event.target.closest('[data-check-new]')) {
        session.items = pickSet(session.pool, session.count);
        session.index = 0;
        session.score = { correct: 0, wrong: 0 };
        session.misses = [];
        paint();
      }
    });
    paint();
    return session;
  }

  global.CheckpointEngine = {
    collectPool,
    pickSet,
    mount,
    teachFeedback,
    renderFeedback,
    sessionMisses: SESSION_MISSES,
    chapterCode,
    strandFromGroup,
    shuffle
  };
})(window);
