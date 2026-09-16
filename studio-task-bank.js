/*
 * Studio task bank v1
 *
 * Add a Python task with: id, topic, level, title, brief, starter and tests.
 * Each tests entry is the browser equivalent of one .in / .out pair.
 * Add a SQL task with a declarative checker. The runner stays in
 * activity-labs-code-studios.js; this file deliberately contains only content.
 */
(function (global) {
  const seedSql = `
CREATE TABLE Student (
  StudentID TEXT PRIMARY KEY,
  Name TEXT NOT NULL,
  Class TEXT NOT NULL,
  Mark INTEGER CHECK (Mark BETWEEN 0 AND 100)
);
INSERT INTO Student VALUES
  ('S001', 'Chan Tai Man', '5A', 42),
  ('S002', 'Lee Ka Ming', '5A', 50),
  ('S003', 'Wong Mei', '5A', 68),
  ('S004', 'Ho Ying', '5A', 91),
  ('S005', 'Ng Chi', '5B', 75);
`;

  global.StudioTaskBank = {
    version: 1,
    seedSql,
    python: [
      {
        id: 'D4-PY-01', topic: 'D4', level: 'Foundation', title: 'Pass counter',
        brief: 'The list below stores five test marks. Write a loop to count how many marks are at least 50, then print the final count.',
        starter: `marks = [42, 50, 68, 39, 91]\ncount = 0\n\n# Write your loop here.\n\nprint(count)`,
        tests: [{ label: 'Public test', input: [], output: '3' }]
      },
      {
        id: 'D4-PY-02', topic: 'D4', level: 'Foundation', title: 'Text-to-number total',
        brief: 'priceText and quantityText are strings. Convert both values so that the program prints the numerical total.',
        starter: `priceText = "12"\nquantityText = "3"\n\n# Convert the values and calculate total.\n\nprint(total)`,
        tests: [{ label: 'Public test', input: [], output: '36' }]
      },
      {
        id: 'D4-PY-03', topic: 'D4', level: 'Foundation', title: 'Boundary result',
        brief: 'Set result to "Pass" when mark is 50 or above; otherwise set it to "Retry". Print result for the boundary value supplied.',
        starter: `mark = 50\n\n# Use IF ... ELSE here.\n\nprint(result)`,
        tests: [{ label: 'Boundary public test', input: [], output: 'Pass' }]
      },
      {
        id: 'D4-PY-04', topic: 'D4', level: 'Developing', title: 'Highest mark',
        brief: 'Traverse the supplied list and print its highest mark. Do not change the values in the list.',
        starter: `marks = [46, 88, 67, 91, 52]\n\n# Start with a sensible highest value, then update it in a loop.\n\nprint(highest)`,
        tests: [{ label: 'Public test', input: [], output: '91' }]
      },
      {
        id: 'D4-PY-05', topic: 'D4', level: 'Developing', title: 'Two-mark total',
        brief: 'Read two whole-number marks, one line at a time. Convert them to integers and print their total. Use input() exactly as a DSE-style input/output task would require.',
        starter: `firstMark = int(input())\nsecondMark = int(input())\n\n# Calculate and print the total.\n\nprint(total)`,
        tests: [
          { label: 'Public test 1', input: ['12', '30'], output: '42' },
          { label: 'Public test 2', input: ['0', '7'], output: '7' }
        ]
      },
      {
        id: 'D4-PY-06', topic: 'D4', level: 'Developing', title: 'Five-mark average',
        brief: 'Read five whole-number marks, one line at a time. Store them in a list and print their average as a number.',
        starter: `marks = []\n\n# Read five marks into marks.\n# Then calculate and print the average.\n\nprint(average)`,
        tests: [
          { label: 'Public test 1', input: ['42', '50', '68', '39', '91'], output: '58.0' },
          { label: 'Boundary public test', input: ['0', '0', '0', '0', '0'], output: '0.0' }
        ]
      },
      {
        id: 'D4-PY-07', topic: 'D4', level: 'Developing', title: 'Valid score gate',
        brief: 'Read one whole-number score. Print "Accept" only if it is from 0 to 100 inclusive; otherwise print "Retry".',
        starter: `score = int(input())\n\n# Write one selection statement.\n\nprint(result)`,
        tests: [
          { label: 'Lower boundary', input: ['0'], output: 'Accept' },
          { label: 'Outside range', input: ['101'], output: 'Retry' }
        ]
      },
      {
        id: 'EC1-PY-01', topic: 'EC1', level: 'Challenge', title: 'Reusable pass counter',
        brief: 'Complete countPassed so that it returns the number of marks that are at least 50. Do not print inside the function; the final print is provided.',
        starter: `def countPassed(marks):\n    # Write the function body.\n    pass\n\nprint(countPassed([42, 50, 68, 39, 91]))`,
        tests: [{ label: 'Public test', input: [], output: '3' }]
      },
      {
        id: 'EC6-PY-01', topic: 'EC6', level: 'Challenge', title: 'First matching index',
        brief: 'Traverse marks from left to right and print the first index at which target appears. You may assume target appears once.',
        starter: `marks = [42, 50, 68, 39, 91]\ntarget = 68\n\n# Find and print the first matching index.\n\nprint(index)`,
        tests: [{ label: 'Public test', input: [], output: '2' }]
      }
    ],
    sql: [
      {
        id: 'EA1-SQL-01', topic: 'EA1', level: 'Foundation', title: 'Filter passing students',
        brief: 'Display StudentID, Name and Mark for 5A students who pass (50 or above), with the highest mark first.',
        starter: `SELECT StudentID, Name, Mark\nFROM Student\nWHERE Class = '5A'\n-- add the pass condition\n-- add the requested ordering\n;`,
        checker: { type: 'result', columns: ['StudentID', 'Name', 'Mark'], rows: [['S004', 'Ho Ying', 91], ['S003', 'Wong Mei', 68], ['S002', 'Lee Ka Ming', 50]] }
      },
      {
        id: 'EA1-SQL-02', topic: 'EA1', level: 'Developing', title: 'Update one record safely',
        brief: 'Correct Wong Mei (S003) to 74. Use a WHERE condition so that no other student is changed. Then SELECT S003 to show the changed record.',
        starter: `UPDATE Student\nSET Mark = 74\n-- identify Wong Mei safely\n;\n\nSELECT StudentID, Name, Mark\nFROM Student\nWHERE StudentID = 'S003';`,
        checker: { type: 'database', query: 'SELECT StudentID, Mark FROM Student ORDER BY StudentID', columns: ['StudentID', 'Mark'], rows: [['S001', 42], ['S002', 50], ['S003', 74], ['S004', 91], ['S005', 75]] }
      },
      {
        id: 'EA1-SQL-03', topic: 'EA1', level: 'Developing', title: 'Insert then check',
        brief: 'Add S006, Ng Mei, 5B, 82 to Student. Then use SELECT to show the new record.',
        starter: `INSERT INTO Student (StudentID, Name, Class, Mark)\nVALUES ('S006', 'Ng Mei', '5B', );\n\nSELECT *\nFROM Student\nWHERE StudentID = 'S006';`,
        checker: { type: 'database', query: "SELECT Name, Class, Mark FROM Student WHERE StudentID = 'S006'", columns: ['Name', 'Class', 'Mark'], rows: [['Ng Mei', '5B', 82]] }
      },
      {
        id: 'EA1-SQL-04', topic: 'EA1', level: 'Developing', title: 'Class average',
        brief: 'Display each Class and its average Mark. Name the calculated field AverageMark and order classes alphabetically.',
        starter: `SELECT Class, \nFROM Student\n-- group the records by Class\n-- order the classes\n;`,
        checker: { type: 'result', columns: ['Class', 'AverageMark'], rows: [['5A', 62.75], ['5B', 75]] }
      },
      {
        id: 'EA1-SQL-05', topic: 'EA1', level: 'Foundation', title: 'Count a condition',
        brief: 'Display one field named PassCount that counts students whose Mark is at least 50.',
        starter: `SELECT \nFROM Student\nWHERE Mark >= 50;`,
        checker: { type: 'result', columns: ['PassCount'], rows: [[4]] }
      },
      {
        id: 'EA1-SQL-06', topic: 'EA1', level: 'Challenge', title: 'Delete only the retry record',
        brief: 'Delete only Chan Tai Man (S001), then SELECT StudentID in ascending order to prove that every other record remains.',
        starter: `DELETE FROM Student\n-- add a safe WHERE condition\n;\n\nSELECT StudentID\nFROM Student\nORDER BY StudentID;`,
        checker: { type: 'database', query: 'SELECT StudentID FROM Student ORDER BY StudentID', columns: ['StudentID'], rows: [['S002'], ['S003'], ['S004'], ['S005']] }
      }
    ]
  };
})(window);
