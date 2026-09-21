# Studio task files

Studio tasks are static, formative learning content. The public site loads `tasks/task-index.json` only when Studio opens, then fetches referenced metadata and assets. Public Python and SQL tasks have one source of truth under `tasks/`. `studio-task-bank.js` contains only the legacy local-pack import API and temporary teacher previews; it has no embedded public tasks or offline fallback. A failed catalog load shows a Retry tasks action.

## Repository structure

```text
tasks/
  task-index.json
  python/<topic>/<skill>/<task-id>/
    task.json
    starter.py
    01.in
    01.out
  sql/<topic>/<skill>/<task-id>/
    task.json
    starter.sql
    seed.sql
scripts/generate_task_index.py
```

## Python task format

`task.json` requires `id`, `type`, `topic`, `skill`, `level`, `practiceType`, `title`, `brief`, `starter`, and `tests`. `type` is `python`; `practiceType` is one of `complete`, `construct`, `modify`, or `dse`. Each test names an `.in` and `.out` file:

```json
{
  "id": "D4-SEL-08",
  "type": "python",
  "topic": "D4",
  "skill": "selection",
  "level": "Developing",
  "practiceType": "construct",
  "title": "Choose a result",
  "brief": "...",
  "starter": "starter.py",
  "tests": [{"label": "Boundary", "input": "01.in", "output": "01.out"}]
}
```

`.in` contains stdin lines. `.out` contains expected stdout. Check Solution runs every test independently; passing one test is not completion.

## SQL task format

SQL uses `starter.sql`, `seed.sql`, and a declarative checker. The checker may have `type: "result"` or `type: "database"`, with `columns` and `rows`; database checkers also provide a verification `query`. Each run starts from the task seed.

## Adding a task manually

1. Create the folder under `tasks/python/<topic>/<skill>/<task-id>/`.
2. Add `task.json`, `starter.py`, and matching numbered `.in`/`.out` files.
3. Run `python3 scripts/generate_task_index.py`. It validates required fields, duplicate IDs, missing files, malformed JSON, unsupported types, checker shape, and test references, then regenerates `tasks/task-index.json` only if valid.
4. Open the local Studio, choose the task, run it, and use Check Solution.
5. Commit the task folder and generated index. The GitHub Action rejects a stale or invalid index.

For SQL, add `starter.sql`, `seed.sql`, and the checker fields instead of `.in`/`.out` files.

## Teacher Task Builder

Open `#view=studio&workspace=code&teacher=1` to reveal the lightweight Teacher Task Builder. Enter metadata, starter code, and one test per line in the form `input|input = expected`. Preview loads the task into temporary browser memory; Run all tests uses the real Python runner. Export downloads prefixed metadata, starter, and test files: rename them to `task.json`, `starter.py`, `01.in`, `01.out`, etc. inside the indicated task folder before running the generator. The teacher route is a convenience tool, not authentication, and it does not publish to GitHub. Local previews disappear on reload; student drafts and optional evidence profile use session storage.

## Publishing workflow

Teacher adds or edits a task folder, runs the validator, commits and pushes it, and GitHub Pages serves the resulting static files. No token, OAuth flow, backend, or GitHub publishing action exists in the browser.

## Current limitations

- The task index is explicit because GitHub Pages cannot enumerate repository folders safely in the browser.
- Public `.out` files are discoverable. This is formative practice, not secure summative assessment.
- ZIP export/import is deferred; the builder uses a multi-file download fallback.
- The old JSON local-pack import API remains for temporary previews. Legacy SQL packs may omit `seedSql` and then use the first public SQL task's seed; explicit task seeds are preferred. Public content is never copied into this compatibility module.
- Invalid indexed tasks are skipped with a developer-console warning; valid tasks continue loading.
