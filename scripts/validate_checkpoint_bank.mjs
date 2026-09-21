#!/usr/bin/env node
/** Validate the chapter-keyed DSE Practice Hub additions. */
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
globalThis.window = globalThis;
require('../checkpoint-bank.js');

const bank = globalThis.CHECKPOINT_BANK;
const errors = [];
const text = value => typeof value === 'string' && value.trim().length > 0;
const check = (condition, message) => { if (!condition) errors.push(message); };
const codePattern = /^(?:EA|EC|[A-E])\d+(?:\.\d+)?$/;

assert.ok(bank && typeof bank === 'object' && !Array.isArray(bank), 'CHECKPOINT_BANK must be an object');
let count = 0;
for (const [chapter, questions] of Object.entries(bank)) {
  check(codePattern.test(chapter), `${chapter}: use a chapter code as the key`);
  check(Array.isArray(questions) && questions.length > 0, `${chapter}: add a non-empty question array`);
  if (!Array.isArray(questions)) continue;
  const titles = new Set();
  const stems = new Set();
  for (const [index, question] of questions.entries()) {
    count++;
    const label = `${chapter}[${index}]`;
    check(['mc', 'fill', 'order', 'short'].includes(question.type), `${label}: unsupported type`);
    check(['standard', 'stretch'].includes(question.difficulty), `${label}: unsupported difficulty`);
    for (const field of ['title', 'stem', 'hint', 'explanation', 'nextAction']) {
      check(text(question[field]), `${label}: ${field} must be non-empty text`);
    }
    check(!titles.has(question.title), `${label}: duplicate title in ${chapter}`);
    check(!stems.has(question.stem), `${label}: duplicate stem in ${chapter}`);
    titles.add(question.title);
    stems.add(question.stem);
    if (question.type === 'mc') {
      check(Array.isArray(question.options) && question.options.length >= 2, `${label}: MC needs at least two options`);
      if (Array.isArray(question.options)) {
        check(question.options.filter(option => option.correct === true).length === 1, `${label}: MC needs exactly one correct option`);
        for (const option of question.options) {
          check(text(option.text) && text(option.why), `${label}: options need text and feedback`);
        }
      }
    } else if (question.type === 'fill') {
      check(Array.isArray(question.accept) && question.accept.length > 0 && question.accept.every(text), `${label}: fill needs accepted answers`);
    } else if (question.type === 'order') {
      check(Array.isArray(question.items) && question.items.length >= 2 && question.items.every(text), `${label}: order needs at least two text items`);
    } else if (question.type === 'short') {
      check(Array.isArray(question.marks) && question.marks.length > 0, `${label}: short needs marking points`);
      if (Array.isArray(question.marks)) {
        for (const mark of question.marks) {
          check(text(mark.point) && Array.isArray(mark.keywords) && mark.keywords.length > 0 && mark.keywords.every(text), `${label}: each marking point needs text and keywords`);
        }
      }
    }
  }
}

if (errors.length) {
  console.error(`Checkpoint bank validation failed (${errors.length}):\n- ${errors.join('\n- ')}`);
  process.exitCode = 1;
} else {
  console.log(`Validated ${count} checkpoint questions in ${Object.keys(bank).length} chapters.`);
}
