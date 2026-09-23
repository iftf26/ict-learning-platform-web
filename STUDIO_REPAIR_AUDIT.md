# Studio repair audit (2026-09-22)

> Completed repair record. Current architecture and task counts are in `PROJECT_STATE.md`. Task format is in `STUDIO_TASKS.md`. Do not treat this file as the current specification.

## CSS evidence and classification

The published `main` stylesheet at `0d3eb395` was corrupted during upload: it begins with a truncation warning and loses 4,277 lines after `button.mistake-card`. The local refactor commit `af7e9b0` has the complete 9,061-line stylesheet. Relative to the behavioural reference `0d1701e`, the local file added only ten Teacher Builder rules; it did not remove legacy topic blocks. The repair publishes that complete local content plus a small deduplication of the two teacher-tool surfaces. It does not replace the stylesheet wholesale from the old commit.

| Lost family | Classification | Current evidence |
| --- | --- | --- |
| `.a2-parity-arena` | Active and required | `script.js` renders Parity Bit Shooter; browser confirmed its grid and mobile one-column rule. |
| `.a3-learning-zones` | Active and required | `script.js` renders A3 learning zones. |
| `.a5-key-demo` | Active and required | `script.js` renders the A5 key demo. Later typography declarations add to its base block, not an obsolete competing component. |
| `.b1-learning-path`, `.b2-learning-path` | Active and required | `script.js` renders both chapter learning paths. |
| `.c-section-banner`, `.c-story-player`, `.c2-cipher-lab` | Active and required | `script.js` renders C chapter banners, story player and cipher lab. |
| `.studio-workspace-*`, `.python-studio`, `.sql-studio`, `.teacher-task-*` | Active and required | `index.html`, `platform-app.js`, and Studio renderer use these, including responsive rules and teacher route. |

The lost region also contains topic-specific responsive layouts, animations, and reduced-motion/print rules. They remain intact. The older Studio marketing selectors around `.studio-home-hero` and `.studio-tool-grid` have no exact current markup/JS references; they are candidates for a separate evidenced cleanup, not part of this P0 restoration. The later feature-specific media queries and reduced-motion overrides are deliberately left in place because they address different components. The teacher pack and builder duplicated the same box/summary/paragraph styling; their common rules are now grouped without changing their margins or form-specific rules.

## Ownership after repair

- `tasks/` is the only public Python/SQL content source; `tasks/task-index.json` discovers it. `scripts/generate_task_index.py` validates and generates the index. The one-time migration script was removed after verifying all 15 migrated tasks exist.
- `activity-labs-code-studios.js` fetches the catalog, retains source metadata under `metadata`, hydrates assets as `starterText`, `inputLines`, `expectedOutput`, and `seedSql`, owns student editor/run/check state, and creates SQL databases per task. A missing catalog presents a retry instead of silently substituting a second public bank.
- `python-runner-worker.mjs` owns Python execution isolation. `platform-app.js` owns routes, workspace mounting, teacher UI and Trace/Practice DOM reuse. `checkpoint-engine.js` owns question sessions and aborts old delegated listeners on remount.
- `studio-task-bank.js` keeps the legacy local JSON import API for temporary teacher previews only. It stores no public tasks and uses no persistent browser storage. Student drafts, last task and optional evidence profile use session storage.
- `index.html` keeps the shell and hidden teacher panel; teacher listeners are bound only when the teacher route opens. CSS Teacher Builder rules remain adjacent to the Studio workspace styles.

## Regression checks

- Catalog generator validated 9 Python and 6 SQL tasks; stale-index comparison and `git diff --check` passed.
- Browser: Code task with two inputs ran and passed both tests; editing invalidated evidence. SQL task ran against its file-backed seed and passed its checker, with schema shown from that seed.
- Browser: teacher task preview selected the temporary task, its test passed, the teacher route survived a workspace switch, and a page reload removed the preview and hid teacher tools on the student route.
- Browser: Trace Lab showed its step runner; repeated Code/Practice switching kept a single DOM instance and Practice advanced exactly one question after a remount. Short-answer feedback showed `self-reviewed` without increasing objective correctness.
- Browser: A2 Parity Bit Shooter rendered with restored grid styling. At a 390px viewport the grid became one column without page overflow. No browser console errors or task warnings were observed.

## Deferred, bounded debt

- Trace/Practice still move existing sections into the Studio stage, then restore their contiguous siblings. This was verified under repeated switches; replacing it would be a broader UI migration, not a repair.
- Legacy Studio marketing selectors appear unreferenced, but are retained until a separate whole-app visual review. No topic/activity styles were removed as presumed dead.
- Public `.out` files are visible on static hosting; this platform is for formative practice, not secure exams. Teacher export remains a multi-file download that requires renaming into its folder.
