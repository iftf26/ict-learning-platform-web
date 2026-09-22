# Studio task files

Studio tasks are static, formative learning content. The public site loads `tasks/task-index.json` only when Studio opens. That generated catalog contains the selector metadata; it does not preload every starter, test input/output, or SQL seed. Selecting a task hydrates only that task’s assets and retains them in a browser-session memory cache. Public Python and SQL tasks have one source of truth under `tasks/`. `studio-task-bank.js` contains only the legacy local-pack import API and temporary teacher previews; it has no embedded public tasks or offline fallback. A failed catalog or task hydration shows a retry action without hiding valid tasks.

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
3. Run `python3 scripts/generate_task_index.py`. It validates required fields, duplicate IDs and asset paths, missing files, malformed JSON, path traversal, unsupported types, checker shape, and test references, then regenerates `tasks/task-index.json` only if valid.
4. Open the local Studio, choose the task, run it, and use Check Solution.
5. Commit the task folder and generated index. The GitHub Action rejects a stale or invalid index.

For SQL, add `starter.sql`, `seed.sql`, and the checker fields instead of `.in`/`.out` files.

## Teacher Task Builder

Open `#view=studio&workspace=code&teacher=1` to reveal the lightweight Teacher Task Builder. Enter metadata, starter code, and repeatable test cards. Each card has an editable label plus multiline Input and Expected output fields; blank input and internal blank lines are preserved. Add a private **Test solution code** only to validate the tests: **Run all tests** sends that code through the same Python runner used by Code Studio and shows a result for every card. Teacher solution code is never previewed as public content, exported, or stored under `tasks/`.

**Preview task** adds only the public task fields to browser memory and opens the real Code Studio with the temporary task. It disappears after refresh, cannot use a public ID, and does not modify repository files. The older JSON task-pack interface remains under **Advanced · Import JSON task pack** for specialist local preview use.

**Export task ZIP** downloads `TASK-ID.zip`, containing `TASK-ID/task.json`, `starter.py`, `01.in`, `01.out`, and so on. Extract that folder into the displayed `tasks/python/<topic>/<skill>/<task-id>/` destination, then run the generator. ZIP import is deliberately deferred; it is not needed for normal authoring and a teacher solution would not be recoverable from an export.

## Publishing workflow

Local work: run `python3 scripts/generate_task_index.py`; it validates and rewrites the generated catalog. Pull requests validate all tasks and fail if that generated index has not been committed. A push to `main` validates, regenerates the index, and—only if it changed—commits **only** `tasks/task-index.json` as `github-actions[bot]`. The bot does not alter task content and skips its own generated-index push, avoiding a workflow loop. No token, OAuth flow, backend, or GitHub publishing action exists in the browser.

## Current limitations

- The task index is explicit because GitHub Pages cannot enumerate repository folders safely in the browser. It is generated catalog data, not a second authoring source.
- Public `.out` files are discoverable. This is formative practice, not secure summative assessment.
- Importing an exported ZIP is deferred; ZIP export is repository-ready.
- The old JSON local-pack import API remains for temporary previews. Legacy SQL packs may omit `seedSql` and then use the first public SQL task's seed; explicit task seeds are preferred. Public content is never copied into this compatibility module.
- Invalid indexed tasks are skipped with a developer-console warning; valid tasks continue loading.
