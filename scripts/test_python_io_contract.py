#!/usr/bin/env python3
"""Run the same input/stdout split the worker uses, without Pyodide."""
import json
import pathlib
import sys

source = pathlib.Path(__file__).resolve().parents[1].joinpath("python-runner-worker.mjs").read_text(encoding="utf-8")
start = source.index("import builtins as __studio_builtins")
end = source.index("__studio_capture_json")
prelude = source[start:end]
prelude = prelude.replace("${inputLines}", json.dumps(["Ada"])).replace("${source}", json.dumps('name = input("Name: ")\nprint(name, end="")\nprint("!")\n'))
namespace = {}
exec(prelude, namespace)
capture = namespace["__studio_capture"]
assert capture["error"] is None, capture
assert capture["prompts"] == ["Name: "]
assert capture["terminal"] == "Name: Ada\n"
assert capture["stdout"] == "Ada!\n"
assert "Name: " not in capture["stdout"]

prelude_blank = source[start:end].replace("${inputLines}", json.dumps(["", "x"])).replace("${source}", json.dumps('print(repr(input()))\nprint(repr(input()))\n'))
namespace = {}
exec(prelude_blank, namespace)
assert namespace["__studio_capture"]["stdout"] == "''\n'x'\n"

prelude_eof = source[start:end].replace("${inputLines}", json.dumps([])).replace("${source}", json.dumps('input("More: ")\n'))
namespace = {}
exec(prelude_eof, namespace)
assert namespace["__studio_capture"]["error"].startswith("EOFError")
assert namespace["__studio_capture"]["stdout"] == ""
assert namespace["__studio_capture"]["prompts"] == ["More: "]
print("Python input/stdout contract checks passed.")
