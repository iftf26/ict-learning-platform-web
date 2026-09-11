# HKDSE ICT Study Hub 

This prototype is designed as a student-facing HKDSE ICT learning platform rather than a programming-only exercise page or tracking platform.

## What changed in this version

- Restored the **Programming Visual Lab** as a first-class area: sidebar groups (Core D and Elective C demos), homepage tile, visible demo picker, and shareable `#demo=sequence` links. The lab was always in the page; chapter navigation had hidden every way to open it.
- Wired the existing in-chapter programming simulation panel so D2–D6 and Elective C chapters can step through the same traces without leaving the topic, with an **Open full Programming Visual Lab** button.
- Added a reusable **checkpoint engine** (MC, fill-in, short answer with marking points, ordering). Each chapter draws a randomised 6-question set from its practice pool plus extra items. Feedback explains the concept and why distractors are wrong, then offers retry / new set.
- Added a **DSE Practice Hub** that uses the same question pools, with strand, chapter, type and difficulty filters.
- Phase 1 activities (not click-only quizzes):
  - C1 Build a School Network + packet-journey predictions
  - B2 Fetch–Decode–Execute visualiser
  - C3 Streaming buffer simulator (bitrate vs throughput)
  - C4 Mini HTML Live Lab and Relative Path Explorer
- Phase 2 activities (same checkpoint engine and activity shell):
  - A5 Simple Database Builder + live SELECT / WHERE / ORDER BY result predictor
  - D6 Bug Hunt Lab (test data → error type → faulty line → fix → rerun)
  - E3 “Can I Use This?” licence lab (permission, attribution, this use)
  - EA5 ERD + Normalisation Studio (binary ER, resolve M:N, update anomaly, 1NF–3NF)
- The **DSE Practice Hub** is unchanged as a single hub; Phase 2 adds extra A5 / D6 / E3 / EA5 items to the shared question bank.
- Deep links: `#demo=linearSearch`, `#chapter=C1`, `#practice`, `#practice=B2`, `#activity=c1Network`, `#activity=a5Database`, `#activity=d6BugHunt`, `#activity=e3Licence`, `#activity=ea5Erd`.

## Earlier study-hub work

- Added a collapsible sidebar for HKDSE ICT topic navigation.
- Rebuilt the sidebar as a tree-style navigation menu with simple rows, chevrons and indented child links.
- Added an all-round ICT dashboard as the default first screen.
- Renamed the platform with a Hong Kong DSE focus and added creator credit for Mr Ivan Fung.
- Replaced the homepage overview with frequently examined points and chapter-summary style content.
- Removed the old Revision Mode card from the sidebar to give the navigation tree more space.
- Added distinct topic pages for non-programming items so each subtopic can be clicked and viewed.
- Completed Core A topic pages for A1 Data and IPO cycle, A2 Data checking and A3 Data representation.
- Added Core A revision panels for keypoints, formula/rule banks, exam traps and suggested practice flow.
- Reworked Core A pages into a learn-then-practise format with content introduction, classified keypoints and a game-style Practice Arcade.
- Removed the visible main programming dropdown as the primary navigation route.
- Added structural groups for Core A, Core B, Core C, Core D Programming, Core E, Elective A and Elective C.
- Expanded Core B, Core C, Core E, Elective A and Elective C from placeholders into chapter pages with concept notes, activity cards and concept checks.
- Rebuilt the sidebar around chapter-level navigation:
  - Core A: A1-A5
  - Core B: B1-B3
  - Core C: C1-C6
  - Core D: D1-D6
  - Core E: E1-E3
  - Elective A: EA1-EA5
  - Elective C: EC1-EC8
- Reviewed the detailed HKU PUB SOW files for the compulsory part, Elective A and Elective C, then realigned the topic tree and page summaries to the chapter order and syllabus boundaries.
- Added missing SOW-aligned topic pages for compulsory simple database, Core C network security measures, Core D program testing/debugging, Elective A SQL/table/design chapters and Elective C text-file / real-life programming applications.
- Added a consistent page structure for every chapter:
  - concept introduction
  - key concept checklist
  - formula/rule bank where relevant
  - Learning Arcade
  - DSE practice focus
  - DSE practice focus
- Implemented all game/activity ideas from the latest blueprint as chapter-linked Learning Arcade cards.
- Added a generic interaction engine for chapter activities:
  - builder workbenches
  - sorting zones
  - sequence tracks
  - visualisation sliders
  - simulator toggles
  - data/index labs
- Removed the chapter-level Concept Check panel after review because it was not reliable enough for classroom use.
- Revised A1 with chapter-summary content covering information systems, software, data and information, multimedia data types, information processing stages, the Information Age and information literacy.
- Simplified A1 Learning Arcade to one focused Data or Information Sorting Game.
- Reclassified the planned interactive games under the correct HKDSE topic branches instead of keeping them as a separate Game Labs section:
  - Core A: Two’s Complement Bit Game
  - Core A: Spreadsheet Formula Lab
  - Core C: Network Security Simulator
  - Elective A: SQL Playground Game
- Redesigned those activities as operation-based mini games rather than ordinary multiple-choice missions:
  - bit switches, two’s-complement animation and overflow alarm
  - spreadsheet formula token builder, formula-copy visualiser and absolute-reference lock
  - SQL token builder, result-table unlock and JOIN key visualiser
  - phishing inbox inspection, firewall rule toggles and public Wi-Fi risk simulator
- Kept XP, streak and immediate feedback for each activity, but tied progress to successful operations instead of answer picking.
- Reorganised the existing programming demos under Core D Programming and Elective C Algorithm and Programming.
- Expanded the Programming Visual Lab to 20 HKDSE programming demonstrations:
  - Sequence and assignment
  - Selection
  - While loop and validation
  - Boolean selection
  - Counting and accumulation
  - Sum and average
  - Linear search
  - Subprogram and parameters
  - 1D array processing
  - Finding minimum value
  - Nested-loop
  - 2D arrays
  - 2D array counting
  - Binary search
  - Bubble sort
  - Merging sorted lists
  - Stack
  - Queue and circular queue
  - Linked list traversal
  - Text file handling
- Kept the same demonstration structure:
  - Interactive pseudocode
  - Live memory / data visualisation
  - Variable table
  - Prediction checkpoint
  - Explanation panel
  - Random DSE-style exercise zone
- Added Step Back and Show Explanation controls for the programming demonstrations.
- Added random exercise types covering:
  - Predict output
  - Complete missing pseudocode line
  - Trace table value
  - Identify algorithm purpose
  - Choose correct Boolean expression
  - Array final state
  - Linear search comparison count
  - Bubble sort after one pass
  - Merging, stack/queue and 2D array practice
- Added a challenge-style Exercise Zone layer with topic/difficulty badges, XP, streak, hint and solution controls.
- Removed the separate future-module / Game Lab launch-card area so games live inside their relevant sidebar categories.
- Added subtle programming walkthrough animations with reduced-motion support.

## How to use

Open `index.html` in a browser, or visit the GitHub Pages site.

- **Programming Visual Lab:** homepage tile, sidebar “Programming Visual Lab”, or a link such as `index.html#demo=sequence`.
- **DSE Practice Hub:** homepage tile, sidebar, or `index.html#practice`.
- **A chapter:** sidebar or `index.html#chapter=C1`.
- **An activity:** open the chapter, then the Activities section, or `index.html#chapter=C1&activity=c1Network`.
