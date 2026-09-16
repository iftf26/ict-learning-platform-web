# Studio task-bank format

`studio-task-bank.js` is the single content file for tasks that run in the public Studio.

## Python

Each task has an `id`, `topic`, `level`, `title`, `brief`, `starter`, and `tests` list. A test corresponds to a traditional pair of files:

```js
{
  id: 'D4-PY-XX',
  topic: 'D4',
  level: 'Foundation',
  title: 'Short task name',
  brief: 'What the student must do.',
  starter: 'answer = int(input())\\nprint(answer)',
  tests: [
    { label: 'Public test 1', input: ['12', '30'], output: '42' }
  ]
}
```

`input` is the content of the `.in` file split into lines. `output` is the exact expected `.out` text after trailing whitespace is removed.

## SQL

Every SQL task starts from the same `seedSql` data. The checker is declarative: `result` checks the final displayed result set; `database` runs the supplied `query` against the database after the student's SQL finishes. This permits `SELECT`, `INSERT`, `UPDATE`, and `DELETE` tasks without putting checking code inside each question.

## Publishing a new set

1. Add task objects to `studio-task-bank.js`.
2. Test every public Python input/output pair and every SQL checker in a browser.
3. Publish the changed file to `main`. GitHub Pages serves the same bank to every student.

## Teacher-side preview

The Studio sidebar includes **Teacher tool · test a new task pack locally**. Paste a JSON object with `python` and/or `sql` arrays to load it into the current browser only. It validates the fields, immediately refreshes Code Studio or SQL Studio, and remembers one preview pack in that browser. **It is not a publishing tool:** students cannot see it until the tested tasks are added to `studio-task-bank.js` and published to `main`.

The current public page intentionally exposes public tests so students can learn from them. A hidden final test, reliable marks, or automatic Google Classroom submission must run on an authenticated server; browser-only JavaScript cannot keep answers secret or safely identify a student. The current evidence-card route is: complete check → download PNG → attach it to the assigned Google Classroom work.
