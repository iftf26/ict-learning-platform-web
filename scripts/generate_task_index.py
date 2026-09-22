#!/usr/bin/env python3
"""Validate file-backed Studio tasks and regenerate tasks/task-index.json."""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TASKS = ROOT / "tasks"
errors = []
index = {"python": [], "sql": []}
seen_ids = {}
seen_task_paths = set()

def require_text(value, field, path):
    if not isinstance(value, str) or not value.strip():
        errors.append(f"{path}: missing {field}")

def referenced_file(folder, value, rel, field, referenced_paths):
    if (not isinstance(value, str) or not value or Path(value).is_absolute()
            or Path(value).parent != Path(".") or Path(value).name != value):
        errors.append(f"{rel}: {field} must name a file in the task folder")
        return
    if value in referenced_paths:
        errors.append(f"{rel}: duplicate asset path {value} ({field} and {referenced_paths[value]})")
    else:
        referenced_paths[value] = field
    if not (folder / value).is_file():
        errors.append(f"{rel}: missing {field} file {value}")

def catalog_entry(task, rel, kind):
    fields = ["id", "type", "topic", "skill", "level", "title", "brief", "starter"]
    if kind == "python":
        fields += ["practiceType", "tests"]
    else:
        fields += ["seed", "checker"]
    return {"path": rel, **{field: task.get(field) for field in fields}}

for kind in ("python", "sql"):
    for metadata_path in sorted((TASKS / kind).glob("**/task.json")):
        rel = metadata_path.relative_to(TASKS).as_posix()
        if rel in seen_task_paths: errors.append(f"duplicate task path {rel}")
        seen_task_paths.add(rel)
        try:
            task = json.loads(metadata_path.read_text(encoding="utf-8"))
        except Exception as exc:
            errors.append(f"{rel}: malformed JSON ({exc})")
            continue
        required = ["id", "type", "topic", "skill", "level", "title", "brief", "starter"]
        if kind == "python": required += ["practiceType", "tests"]
        else: required += ["seed", "checker"]
        for field in required: require_text(task.get(field), field, rel) if field != "tests" and field != "checker" else None
        if task.get("type") != kind: errors.append(f"{rel}: unsupported type {task.get('type')!r}")
        referenced_paths = {}
        if kind == "python":
            if task.get("practiceType") not in {"complete", "construct", "modify", "dse"}:
                errors.append(f"{rel}: unsupported practiceType")
            if not isinstance(task.get("tests"), list) or not task["tests"]:
                errors.append(f"{rel}: tests must be a non-empty list")
            else:
                for number, test in enumerate(task["tests"], start=1):
                    if not isinstance(test, dict):
                        errors.append(f"{rel}: test {number} must be an object")
                        continue
                    for field in ("input", "output"):
                        require_text(test.get(field), field, rel)
                    for field in ("input", "output"):
                        referenced_file(metadata_path.parent, test.get(field), rel, f"test {number} {field}", referenced_paths)
        if kind == "sql" and not isinstance(task.get("checker"), dict): errors.append(f"{rel}: checker must be an object")
        if kind == "sql" and isinstance(task.get("checker"), dict):
            checker = task["checker"]
            if checker.get("type") not in ("result", "database") or not isinstance(checker.get("columns"), list) or not isinstance(checker.get("rows"), list):
                errors.append(f"{rel}: checker needs a supported type, columns and rows")
            if checker.get("type") == "database": require_text(checker.get("query"), "checker.query", rel)
        referenced_file(metadata_path.parent, task.get("starter"), rel, "starter", referenced_paths)
        if kind == "sql": referenced_file(metadata_path.parent, task.get("seed"), rel, "seed", referenced_paths)
        task_id = task.get("id")
        if task_id in seen_ids: errors.append(f"{rel}: duplicate ID {task_id} also in {seen_ids[task_id]}")
        else: seen_ids[task_id] = rel
        index[kind].append(catalog_entry(task, rel, kind))

if errors:
    print("Task index validation failed:", file=sys.stderr)
    print("\n".join(f"- {error}" for error in errors), file=sys.stderr)
    sys.exit(1)
(TASKS / "task-index.json").write_text(json.dumps(index, indent=2) + "\n", encoding="utf-8")
print(f"Validated {sum(map(len, index.values()))} tasks and wrote tasks/task-index.json")
