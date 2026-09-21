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
seen_paths = set()

def require_text(value, field, path):
    if not isinstance(value, str) or not value.strip():
        errors.append(f"{path}: missing {field}")

for kind in ("python", "sql"):
    for metadata_path in sorted((TASKS / kind).glob("**/task.json")):
        rel = metadata_path.relative_to(TASKS).as_posix()
        if rel in seen_paths: errors.append(f"duplicate task path {rel}")
        seen_paths.add(rel)
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
        if kind == "python":
            if task.get("practiceType") not in {"complete", "construct", "modify", "dse"}:
                errors.append(f"{rel}: unsupported practiceType")
            if not isinstance(task.get("tests"), list) or not task["tests"]:
                errors.append(f"{rel}: tests must be a non-empty list")
            else:
                for test in task["tests"]:
                    for field in ("input", "output"):
                        require_text(test.get(field), field, rel)
                    folder = metadata_path.parent
                    if isinstance(test.get("input"), str) and not (folder / test["input"]).is_file(): errors.append(f"{rel}: missing {test['input']}")
                    if isinstance(test.get("output"), str) and not (folder / test["output"]).is_file(): errors.append(f"{rel}: missing {test['output']}")
        if kind == "sql" and not isinstance(task.get("checker"), dict): errors.append(f"{rel}: checker must be an object")
        starter = metadata_path.parent / str(task.get("starter", ""))
        if not starter.is_file(): errors.append(f"{rel}: missing starter file {task.get('starter')}")
        if kind == "sql" and not (metadata_path.parent / str(task.get("seed", ""))).is_file(): errors.append(f"{rel}: missing seed file {task.get('seed')}")
        task_id = task.get("id")
        if task_id in seen_ids: errors.append(f"{rel}: duplicate ID {task_id} also in {seen_ids[task_id]}")
        else: seen_ids[task_id] = rel
        index[kind].append(rel)

(TASKS / "task-index.json").write_text(json.dumps(index, indent=2) + "\n", encoding="utf-8")
if errors:
    print("Task index validation failed:", file=sys.stderr)
    print("\n".join(f"- {error}" for error in errors), file=sys.stderr)
    sys.exit(1)
print(f"Validated {sum(map(len, index.values()))} tasks and wrote tasks/task-index.json")
