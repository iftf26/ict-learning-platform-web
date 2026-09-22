#!/usr/bin/env node
/** Regression test: stdin files retain intentional blank input lines. */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../studio-task-utils.js', import.meta.url), 'utf8');
const context = { window: {} };
vm.runInNewContext(source, context, { filename: 'studio-task-utils.js' });
const { inputLinesFromText } = context.window.StudioTaskUtils;

const lines = value => Array.from(inputLinesFromText(value));
assert.deepEqual(lines(''), []);
assert.deepEqual(lines('hello\n'), ['hello']);
assert.deepEqual(lines('hello\n\nworld\n'), ['hello', '', 'world']);
assert.deepEqual(lines('hello\r\n\r\nworld\r\n'), ['hello', '', 'world']);
console.log('Studio stdin line preservation checks passed.');
