# ICT Learning Platform

## Project purpose

- Static student-facing HKDSE ICT learning platform, hosted on GitHub Pages.
- No tracking or student-account system.
- It provides Notes, DSE Practice, Trace Lab, Code Studio, and SQL Studio.

## Source of truth and architecture

- Public Studio tasks live only under `tasks/`; `tasks/task-index.json` is generated catalog data.
- Do not embed public question content in runtime JavaScript or create duplicate content registries.
- DSE Practice additions belong to the existing checkpoint-bank and chapter-practice architecture.
- Keep the static GitHub Pages design. Do not add a backend, account system, or React/Vue/framework migration without explicit authorisation.
- Preserve Notes, Studio, Trace, Practice, and deep-link behaviour. Avoid broad unrelated refactors.
- Normal new Studio tasks should be data-only; temporary Teacher preview data stays browser-local in `studio-task-bank.js`.

## Curriculum and pedagogy

- Follow the HKDSE ICT C&A Guide and the school SOW.
- Core D1–D3 are mainly algorithm, pseudocode, and problem-solving; Python normally begins from D4.
- Keep Elective A SQL separate from Elective C Programming.
- Progress programming tasks as Complete → Construct → Modify → DSE Challenge. Prefer DSE-style completion, modification, and reasoning; do not make debugging/counting/accumulating the dominant pattern.
- For low-baseline students, Notes should move from definition → explanation → examples → common mistakes → DSE application. Use key Chinese terms where useful, without duplicating every note bilingually.

## Before editing

- Read this file and `PROJECT_STATE.md`, inspect `git status`, and inspect current code instead of relying on chat history.
- Identify and run the relevant validators or focused tests.
- Do not treat `PROJECT_STATE.md` as a changelog.

## Before finishing

- Inspect the complete diff and check for unrelated deletions, public answers, or duplicate task sources.
- Run relevant tests and report only behaviour actually tested.
- Update `PROJECT_STATE.md` only when architecture, source ownership, task counts, known issues, architecture-freeze status, or next priority changed—not for a typo or formatting-only commit.

## Multi-computer workflow

Git/GitHub is the shared source of truth; local Codex chat and `~/.codex` configuration are not. Do not keep this repository in a cloud-sync folder as a competing sync mechanism.

Start work:

```text
git status
git pull --rebase
```

Finish work:

```text
review diff
run tests
git add ...
git commit
git push
```

On the other computer, repeat `git status` then `git pull --rebase`. Use separate feature branches (for example, `studio-authoring-polish` and `task-bank-phase-1`) for simultaneous substantial work.

For a large temporary handoff, `docs/CURRENT_TASK.md` may record the goal, boundaries, and acceptance tests; remove it at task completion and merge durable facts into `PROJECT_STATE.md`.
