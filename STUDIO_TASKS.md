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

`.in` contains stdin lines. `.out` contains expected stdout. Code Studio shows the statement, then up to six visible samples. Each sample has its own Run and shows expected output against actual output. Submit runs every case for that task, including staged private cases from an imported preview, and lists each one as 正確 or 錯誤. Passing one sample is not completion. A task with no `compare` field keeps the legacy rule: compare after converting newlines and trimming the whole stdout. Set `compare` explicitly when a new task needs a stricter rule.

```json
{ "compare": { "mode": "legacy" } }
{ "compare": { "mode": "exact" } }
{ "compare": { "mode": "numeric", "tolerance": 0.000001 } }
```

`exact` compares stdout after newline conversion and does not trim. `numeric` compares numbers within `tolerance` and compares other tokens exactly. `input()` prompt text is terminal echo, not stdout. Optional `stars` is 1–5. Optional `statementFile` and `afterFile` name Markdown files in the task folder.

`category` is the student-facing group: `intro` 入門, `elementary` 初階, `advanced` 進階練習, or `applied` 現實應用題. It is chosen directly. It is not derived from an X, Y or Z label, from `level`, or from `practiceType`. The current public tasks use this starting assignment: Python `complete` → 入門, `construct` → 初階, `modify` → 進階練習, `dse` → 現實應用題; SQL `Foundation` → 入門, `Developing` → 初階, `Challenge` → 進階練習. Change a task’s `category` when that assignment does not fit.

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

**Export student ZIP** downloads the statement, starter and public tests. Extract that folder into `tasks/python/<topic>/<skill>/`, then run `python3 scripts/generate_task_index.py`. **Export teacher ZIP** adds the private solution, private tests and the last validation report. Do not put the teacher ZIP in `tasks/`.

**Import ZIP** reads a site task ZIP or an HKOI handover pack, then shows task counts, sample pairs, private pairs, missing pairs, duplicate paths, encoding warnings and unsupported checkers. Apply adds a browser preview only after that report. The same ID replaces the previous preview. A `checker.cpp` task stays blocked until a numeric tolerance is entered; the browser does not run C++ checkers. Real XICT05–14 and YICT03–07 packages are not in this repository. Fixture coverage is `node scripts/test_hkoi_adapter.mjs`.

## Python practice progression

Use the task metadata to describe the student action honestly: **Complete** is focused scaffolding, **Construct** leaves the central algorithm to the student, **Modify** changes a supplied requirement, and **DSE Challenge** reduces scaffolding and requires transfer. New task fixtures should use meaningful boundary cases and multiple tests where input permits; public `.out` files remain formative evidence rather than hidden answers.

## Publishing workflow

Local work: run `python3 scripts/generate_task_index.py`; it validates and rewrites the generated catalog. Pull requests validate all tasks and fail if that generated index has not been committed. A push to `main` validates, regenerates the index, and—only if it changed—commits **only** `tasks/task-index.json` as `github-actions[bot]`. The bot does not alter task content and skips its own generated-index push, avoiding a workflow loop. No token, OAuth flow, backend, or GitHub publishing action exists in the browser.

## Current limitations

- The task index is explicit because GitHub Pages cannot enumerate repository folders safely in the browser. It is generated catalog data, not a second authoring source.
- Public `.out` files are discoverable. This is formative practice, not secure summative assessment.
- ZIP import applies to browser preview only. It does not publish tasks or execute C++ checkers.
- The old JSON local-pack import API remains for temporary previews. Legacy SQL packs may omit `seedSql` and then use the first public SQL task's seed; explicit task seeds are preferred. Public content is never copied into this compatibility module.
- Invalid indexed tasks are skipped with a developer-console warning; valid tasks continue loading.
