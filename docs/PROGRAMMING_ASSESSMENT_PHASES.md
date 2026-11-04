# Programming assessment phases

Phase 1 is implemented in the static site. Phases 2 and 3 are designs only. They are not deployed, and `teacher=1` is not an account.

Public catalog on this review: 42 Python tasks and 6 SQL tasks.

## Phase 1 coverage

| Requirement | Where | Verification | Limit |
| --- | --- | --- | --- |
| Prompt stays out of scored stdout | `python-runner-worker.mjs` | `python3 scripts/test_python_io_contract.py` | Not re-run inside Pyodide in this pass |
| `print(end=...)`, blank stdin, EOF | same worker | same Python test | Output cap is 100000 characters |
| Legacy / exact / numeric compare | `studio-task-utils.js` | `node scripts/test_studio_compare.mjs` | Old tasks omit `compare` and stay on legacy trim |
| Purpose, stars, practice type stay separate | task schema and Teacher Builder | generator rejects a bad `purpose` or `stars` | X/Y/Z does not set difficulty or practice type |
| ZIP preview, duplicates, missing pairs, path escape, C++ checker block | `studio-hkoi-adapter.js`, Teacher Builder | `node scripts/test_hkoi_adapter.mjs` | Fixture only. Real XICT/YICT packages were not accepted |
| Model validation across every staged case | Teacher Builder “Validate applied model” | Requires the browser Python runtime | A single sample is not treated as completion |
| Student pack whitelist | `studentPackFiles` | compare test checks solution and private files are absent | CSS hiding is not the boundary |
| Public check wording | Code Studio feedback | Browser check still required | “All public tests passed” is not a central Accepted result |

## Phase 2 design (not built)

Use the current pages. Add a small school service beside them. Suggested shape: one Cloud Run or school VM service, SQLite or Postgres for submissions, and a private object bucket for models and hidden tests. Google sign-in can be optional for school accounts; the service, not the browser, maps the account to student, teacher or admin.

Data:

- `users(id, email, role)`
- `tasks(id, version, public_manifest)`
- `task_secrets(task_id, version, model, hidden_tests, checker)` — not readable by student tokens
- `submissions(id, user_id, task_id, task_version, language, source, submitted_at)` — insert only
- `judgements(id, submission_id, status, case_results, created_at)`

API:

- `POST /submissions` returns `{ submissionId }` and does not judge inline.
- `GET /submissions/:id` returns status and, for hidden cases, status only.
- `POST /tasks/:id/validate` is teacher-only and runs the private model.
- Queue workers claim one submission at a time. A second POST with the same client token returns the original id.

Statuses: queued, running, accepted, wrong_answer, presentation_error, compile_error, time_limit, resource_limit, system_error. `system_error` is not stored as a wrong answer.

The worker runs with a CPU limit, a wall-clock limit, a memory limit, no network, a fresh directory per case, and an output cap. The browser Run button stays a practice run. Only the worker writes a judgement.

## Phase 3 design (not built)

- School year, class and group tables.
- CSV import with a preview of adds, renames and conflicts before commit.
- Assignment rows pin a task version and a due time.
- A student-by-task matrix with an explicit score rule: first, latest or best. The report states which rule it used.
- Teacher review stores a comment and a method note. A passing run does not prove a required `for` or `while`.
- CSV export first. Sheets or Classroom can be added later by the teacher.
- Quiz windows, attempt limits and answer-release time are settings on the assignment. HKOI lists quizzes and reports; this design does not copy untested HKOI scoring details.
- C++ and custom checkers belong in the Phase 2 worker, with a versioned checker file. The browser continues to refuse them.

## Still open

- The real 15-task handover has not been run through the adapter here.
- Numeric tolerance for XICT14 and YICT04 must be confirmed against their checker, not guessed as a universal default.
- Pyodide’s 12-second stop is a page limit, not a contest CPU limit.
- Browser preview memory is not a secrecy boundary. Hidden tests belong on the Phase 2 server.
