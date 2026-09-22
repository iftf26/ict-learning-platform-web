# ICT Learning Platform — Current Project State

Last reviewed: 2026-09-22
Last verified Studio commit: pending completion verification of the Phase 1 task-bank pass

## Current architecture

- Notes remains the concept-learning route; DSE Practice is the shared checkpoint and chapter-practice route.
- Trace Lab, Code Studio, SQL Studio, and DSE Practice use the unified Studio shell and retain their deep links.
- Public Studio tasks are file-backed under `tasks/`; generated `tasks/task-index.json` supplies immutable selector metadata and a selected task is hydrated and cached in the browser session.
- Python execution runs in an isolated Pyodide worker with a fresh submission namespace for every run. SQL Studio uses SQL.js with a fresh deterministic seed for every run.
- `python3 scripts/generate_task_index.py` validates/regenerates the task catalog; `node scripts/validate_checkpoint_bank.mjs` validates DSE Practice additions.

## Current Studio task-bank status

- Public Python tasks: 34
- Public SQL tasks: 6

## Confirmed design decisions

- The platform remains static GitHub Pages; it has no backend, student accounts, or secure summative testing claim.
- Public tests are acceptable for formative learning. Normal new tasks are file-backed and do not require HTML or runner changes.
- The teacher route is convenience only, not authentication. Its solution-validation code stays local and is never exported.
- Future programming progression is Complete → Construct → Modify → DSE Challenge.
- Code Studio practises executable programming tasks; DSE Practice provides broader checkpoint and short-answer revision. Short answers are self-reviewed rather than authoritative machine marking.

## Architecture status

**Architecture frozen for content expansion.** The authoring workflow, selected-task hydration/cache, file validator, and Python/SQL runners have passed the authoring-polish acceptance checks. Future normal task additions should be data-only; fix real defects without reopening the architecture.

## Next content phase

Phase 1 is complete for teacher review: it adds/revises source-aligned data-only Python tasks for Core D input/output, selection, iteration, validation, 1-D list processing, and string processing, plus Elective C 2-D arrays and subprograms. Each family has a Complete → Construct → Modify → DSE Challenge progression. The prior EC1 subprogram task is now correctly classified as `EC4-PY-01`; the deeper list-processing task is now `D5-PY-01`.

Next priority is a reviewed Phase 2 programming bank: advanced control; scope, parameters, and stubs; stack, queue, circular queue, linked list; linear/binary search; sorting; merging; text files; and suitable real-life/event-driven applications. Do not reopen Studio infrastructure without a real defect.

## Known issues / deferred work

- Importing an exported Teacher Builder ZIP is deferred; exports intentionally cannot restore a private teacher solution.

## Maintenance commands

```text
python3 scripts/generate_task_index.py
node scripts/validate_checkpoint_bank.mjs
node scripts/test_studio_input_lines.mjs
```
