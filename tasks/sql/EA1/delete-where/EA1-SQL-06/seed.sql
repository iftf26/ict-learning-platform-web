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
