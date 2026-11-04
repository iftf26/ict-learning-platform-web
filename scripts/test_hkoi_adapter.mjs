#!/usr/bin/env node
/** HKOI adapter fixtures. These are not the real XICT/YICT packages. */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

function load(filename) {
  const source = readFileSync(new URL(`../${filename}`, import.meta.url), 'utf8');
  const context = { window: {}, TextDecoder };
  vm.runInNewContext(source, context, { filename });
  return context.window;
}

const { HkoiTaskAdapter } = load('studio-hkoi-adapter.js');
const text = (name, body) => ({ name, text: body });

const fixture = [
  text('XICT-FIX/statement.md', '# Accept a labelled value\n\nRead one name after the prompt.\n'),
  text('XICT-FIX/after.md', 'Try another name.\n'),
  text('XICT-FIX/model.py', 'name = input("Name: ")\nprint(name)\n'),
  text('XICT-FIX/samples/1.in', 'Ada\n'),
  text('XICT-FIX/samples/1.out', 'Ada\n'),
  text('XICT-FIX/samples/1.md', 'The prompt is not part of stdout.\n'),
  text('XICT-FIX/tests/1-1.in', 'Bo\n'),
  text('XICT-FIX/tests/1-1.out', 'Bo\n'),
  text('XICT-FIX/Teacher_Notes.md', 'Private note')
];
const report = HkoiTaskAdapter.analyseEntries(fixture);
assert.equal(report.ok, true);
assert.equal(report.summary.tasks, 1);
assert.equal(report.summary.samplePairs, 1);
assert.equal(report.summary.privatePairs, 1);
assert.equal(report.tasks[0].purpose, 'X');
assert.equal(report.tasks[0].blocked, false);
const preview = HkoiTaskAdapter.toPreviewTask(report.tasks[0]);
assert.equal(preview.practiceType, 'construct');
assert.equal(preview.tests.length, 1);
assert.equal(preview.privateTests.length, 1);
assert.equal(preview.compare.mode, 'exact');

const broken = HkoiTaskAdapter.analyseEntries([
  text('YICT-FIX/statement.md', '# Mean\n'),
  text('YICT-FIX/samples/1.in', '1\n'),
  text('YICT-FIX/checker.cpp', 'int main(){return 0;}')
]);
assert.equal(broken.ok, false);
assert.equal(broken.tasks[0].blocked, true);
assert.match(broken.errors.join('\n'), /not an \.in\/\.out pair/);

const duplicate = HkoiTaskAdapter.analyseEntries([
  text('ZICT-FIX/statement.md', '# One\n'),
  text('ZICT-FIX/statement.md', '# Two\n')
]);
assert.equal(duplicate.ok, false);
assert.match(duplicate.errors.join('\n'), /Duplicate archive path/);

const escape = HkoiTaskAdapter.analyseEntries([text('../secret.txt', 'nope')]);
assert.equal(escape.ok, false);

const checker = HkoiTaskAdapter.toPreviewTask(broken.tasks[0], { numericTolerance: '0.000001' });
assert.equal(checker.blocked, false);
assert.equal(checker.compare.mode, 'numeric');

console.log('HKOI adapter fixture checks passed. Real XICT05–14 and YICT03–07 packages were not in this fixture.');
