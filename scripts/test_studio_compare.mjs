#!/usr/bin/env node
/** Output contract: legacy tasks keep trim; exact and numeric do not. */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../studio-task-utils.js', import.meta.url), 'utf8');
const context = { window: {} };
vm.runInNewContext(source, context, { filename: 'studio-task-utils.js' });
const { compareOutputs, studentPackFiles, teacherPackFiles, categoryLabel, taskCategories } = context.window.StudioTaskUtils;

assert.equal(compareOutputs('  hi \n', 'hi', { mode: 'legacy' }).pass, true);
assert.equal(compareOutputs('  hi \n', 'hi', { mode: 'exact' }).pass, false);
assert.equal(compareOutputs('hi\n', 'hi\n', { mode: 'exact' }).pass, true);
assert.equal(compareOutputs('hi\r\n', 'hi\n', { mode: 'exact' }).pass, true);
assert.equal(compareOutputs('Name: Ada\nAda\n', 'Ada\n', { mode: 'exact' }).pass, false);
assert.equal(taskCategories.map(item => item.label).join('|'), '入門|初階|進階練習|現實應用題');
assert.equal(categoryLabel('applied'), '現實應用題');
assert.equal(categoryLabel('X'), '');

const numeric = compareOutputs('2\n1.500001\n', '2\n1.5\n', { mode: 'numeric', tolerance: 0.0001 });
assert.equal(numeric.pass, true);
const outside = compareOutputs('2\n1.6\n', '2\n1.5\n', { mode: 'numeric', tolerance: 0.0001 });
assert.equal(outside.pass, false);
assert.equal(compareOutputs('1\n', '1\n', { mode: 'cpp' }).pass, false);

const task = {
  id: 'FIXTURE-PROMPT',
  topic: 'D4',
  skill: 'input',
  level: 'Foundation',
  practiceType: 'complete',
  title: 'Prompt fixture',
  brief: 'Read a name.',
  statement: 'Name: stays in the terminal echo.',
  starter: 'name = input("Name: ")\nprint(name)\n',
  tests: [{ label: 'Sample', input: ['Ada'], output: 'Ada\n' }],
  privateTests: [{ label: 'Private', input: ['Bo'], output: 'Bo\n' }],
  solution: 'name = input("Name: ")\nprint(name)\n',
  teacherNotes: 'Do not publish.'
};
const student = studentPackFiles(task).map(file => file.name);
assert.deepEqual(student.includes('solution.py'), false);
assert.deepEqual(student.some(name => name.startsWith('private-')), false);
assert.deepEqual(student.includes('teacher-notes.md'), false);
const teacher = teacherPackFiles(task, { completed: true }).map(file => file.name);
assert.equal(teacher.includes('solution.py'), true);
assert.equal(teacher.includes('private-01.in'), true);
console.log('Studio output compare and pack boundary checks passed.');
