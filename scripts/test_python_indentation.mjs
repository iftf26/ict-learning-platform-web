import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const window = {};
const document = { readyState: 'loading', addEventListener() {} };
vm.runInNewContext(fs.readFileSync('activity-labs-code-studios.js', 'utf8'), { window, document, console });
const transform = window.StudioEditorUtils.indentCode;

let result = transform('abc', 1, 1);
assert.equal(result.value, 'a    bc');
assert.equal(result.start, 5);
result = transform('a\nb', 0, 3);
assert.equal(result.value, '    a\n    b');
assert.equal(result.start, 0);
assert.equal(result.end, 11);
result = transform('    a\n  b\nc', 0, 11, true);
assert.equal(result.value, 'a\nb\nc');
assert.equal(result.start, 0);
assert.equal(result.end, 5);
result = transform('x\n    y\nz', 4, 4, true);
assert.equal(result.value, 'x\ny\nz');
assert.equal(result.start, 2);
console.log('Python indentation checks passed.');
