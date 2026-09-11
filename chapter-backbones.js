/* Chapter conceptual backbones from the 2026-27 school SOW.
   Shown to students as the chapter’s main idea and causal flow. */

const CHAPTER_ALIASES = {
  'A4 Spreadsheet / Data Manipulation and Analysis': 'A5 Spreadsheet and Data Analysis',
  'A5 Simple Database': 'A6 Simple Database',
  'B1 Input and Output Devices': 'B3 Input and Output Devices',
  'B2 Computer Hardware': 'B1 System Unit',
  'B3 Computer Software': 'B4 System Software',
  'C1 Networking and Internet Basics': 'C1 Networking and Internet Basics I',
  'C2 Internet Protocols': 'C3 Communication Software and Protocols',
  'C3 Internet Services and Applications': 'C4 Internet Services and Applications',
  'C4 Elementary Web Authoring': 'C5 Elementary Web Authoring',
  'C5 Network Security and Privacy Threats': 'C6 Online Threats and Security I',
  'C6 Network Security Measures': 'C8 Online Threats and Security III'
};

const CHAPTER_BACKBONES = {
  'A1 Introduction to Information Processing': {
    bigIdea: 'Raw facts become useful only after they are processed. An information system exists to carry out that transformation so people can decide and act.',
    flow: ['Raw data', 'Processing', 'Meaningful information', 'Decision / action'],
    why: 'Data, IPO, the information system and the Information Age are one story, not four separate topics.',
    steps: [
      { title: 'Data', text: 'Raw facts, symbols or measurements with little meaning by themselves. Example: 72, 68, 91, or 08:10 / 76 bpm / 6200 steps on a watch.' },
      { title: 'Processing', text: 'Organise, calculate, classify, validate or summarise the facts for a purpose. Name the action, not only “the computer”.' },
      { title: 'Information', text: 'Processed data that has meaning or usefulness for someone. Example: Ada scored 72 and passed; the watch report says the student is below the daily step target.' },
      { title: 'IPO + storage', text: 'Input captures data, processing changes it, output presents information. Storage keeps data or results for later. Feedback (an error message) can adjust the next input.' },
      { title: 'Information system', text: 'People, data, procedures, hardware and software work together to run this cycle — a school eClass, Octopus, or supermarket checkout.' },
      { title: 'Information Age and literacy', text: 'Society depends on these systems. Useful information still needs a reliable source: check who published it and whether the claim has evidence.' }
    ]
  },
  'A2 Data Organisation and Data Control': {
    bigIdea: 'Organise data so it can be found; then control errors so what you find can be trusted. Valid is not the same as correct.',
    flow: ['Organise data', 'Identify / store records', 'Access data', 'Control errors', 'Improve reliability'],
    why: 'Hierarchy and keys make retrieval possible. Validation, verification and parity then attack different kinds of error.',
    steps: [
      { title: 'Organise', text: 'Field → record → file/table → database. Without a structure, retrieval is guesswork.' },
      { title: 'Identify', text: 'A primary key uniquely identifies each record. Names are usually a poor key.' },
      { title: 'Access', text: 'Sequential access reads in order; direct access locates a record without reading every previous one.' },
      { title: 'Then the problem', text: 'Organised data can still be wrong. Control is needed next.' },
      { title: 'Validation', text: 'Checks rules and acceptability (range, format, presence). It cannot prove the value is true.' },
      { title: 'Verification', text: 'Checks accurate copying or entry from the source (double entry, proofreading).' },
      { title: 'Other detection', text: 'Check digits help detect input errors in codes. Parity helps detect some transmission errors, but does not correct them.' }
    ]
  },
  'A3 Data Representation': {
    bigIdea: 'Computers store and process binary patterns. Number bases, signed representation and character codes are rules for giving those patterns meaning.',
    flow: ['Human value / character', 'Representation rule', 'Binary pattern', 'Storage and processing'],
    why: 'Denary, binary and hex are the same value in different clothes. Overflow happens when the bit width cannot hold the result. Multimedia digitisation belongs mainly to A4.',
    steps: [
      { title: 'Why binary', text: 'Hardware works with two states. Everything a computer stores is a bit pattern.' },
      { title: 'Number bases', text: 'Denary, binary and hexadecimal represent the same quantity. One hex digit is four bits.' },
      { title: 'Operations and overflow', text: 'Binary addition/subtraction can produce a result outside the bit range — that is overflow, not “the program crashed”.' },
      { title: 'Signed integers', text: 'Two’s complement is a rule for negative values. The same bits mean different things if read as unsigned.' },
      { title: 'Characters', text: 'Text also needs numeric codes: ASCII, Big-5, GB and Unicode solve different language needs.' }
    ]
  },
  'A4 Multimedia Elements and Digitalisation': {
    bigIdea: 'Real-world sound, pictures and video are analogue. Digitisation turns them into files. Format and compression choices trade quality against size and compatibility.',
    flow: ['Real-world media', 'Digitisation', 'Digital file', 'Format / compression', 'Quality vs size'],
    why: 'Do not memorise format names in isolation. Ask what the setting is for: exact recovery, small size, transparency, or sharing.',
    steps: [
      { title: 'Multimedia elements', text: 'Text, images, audio and video are all data once stored.' },
      { title: 'Analogue vs digital', text: 'Analogue varies continuously. Digital uses discrete samples that computers can store and process.' },
      { title: 'Digitisation', text: 'Sampling, quantisation and coding turn a wave or picture into bits.' },
      { title: 'Formats', text: 'JPEG, PNG, MP3, MP4 and others exist because uses differ: photo sharing, logos with transparency, music, video.' },
      { title: 'Compression', text: 'Lossless restores the original. Lossy removes less noticeable data to save space. Choose by purpose, not by “best”.' }
    ]
  },
  'A5 Spreadsheet and Data Analysis': {
    bigIdea: 'A spreadsheet is a data model: cells hold values, formulae describe relationships, and the sheet recalculates when inputs change so you can organise, analyse and decide.',
    flow: ['Input data', 'Formulae / references', 'Recalculation', 'Organise', 'Analyse', 'Support a decision'],
    why: 'Relative, absolute and mixed references exist so copied formulae stay true. Charts, pivots and what-if tools are later stages of the same model.',
    steps: [
      { title: 'Cells first', text: 'Enter data in cells. Do not hide important values inside a formula as typed constants.' },
      { title: 'Relationships', text: 'A formula such as =B2*C2 states how outputs depend on inputs.' },
      { title: 'References', text: 'A1 moves when copied. $A$1 stays. Mixed references lock one part. This is why copy-down works or fails.' },
      { title: 'Functions', text: 'SUM, IF, COUNTIF, XLOOKUP automate common operations on the model.' },
      { title: 'Organise and analyse', text: 'Sort and filter arrange records. Charts show patterns. Pivot tables summarise. What-if / scenarios test decisions.' }
    ]
  },
  'A6 Simple Database': {
    bigIdea: 'A DBMS stores structured records so many users can enter, find and present data safely. Forms, queries and reports are different jobs on the same tables.',
    flow: ['Need for structure', 'Tables / fields / keys', 'DBMS management', 'Form / query / report', 'Controlled use'],
    why: 'This S4 chapter stays non-SQL. Simple SELECT meaning can be read, but writing SQL is the S6 bridge into Elective A.',
    steps: [
      { title: 'Why a database', text: 'Spreadsheets become risky when many people edit related records. A DBMS controls structure and access.' },
      { title: 'Design', text: 'Tables, records, fields, data types and primary keys. Phone numbers and IDs are often Text.' },
      { title: 'Objects', text: 'Form = enter/view one record. Query = select matching records. Report = printable presentation.' },
      { title: 'NULL vs 0', text: '0 is a stored amount. NULL means unknown / not entered. A query Fine = 0 does not return NULL fines.' },
      { title: 'Access rights', text: 'Not every user should edit every field. Least privilege belongs with good design.' }
    ]
  },
  'A6.4 Structured Query Language': {
    bigIdea: 'SQL is how you ask a question of tables you already understand. SELECT, FROM and WHERE reconnect fields, records and keys to a result table.',
    flow: ['Known table structure', 'Data question', 'SQL statement', 'Result rows'],
    why: 'This S6 bridge stops you treating SQL as a new subject. It is the language for the S4 database objects.',
    steps: [
      { title: 'Reconnect', text: 'Table, record, field and key from A6 are still the objects.' },
      { title: 'Ask', text: 'Which names in 5A, sorted? That is a question about rows and fields.' },
      { title: 'Express', text: 'SELECT fields FROM table WHERE condition ORDER BY field.' },
      { title: 'Into Elective A', text: 'The same ideas grow into integrity, INSERT/UPDATE/DELETE, joins and design.' }
    ]
  },
  'B1 System Unit': {
    bigIdea: 'The CPU repeatedly fetches an instruction from memory, decodes it and executes it. Buses, registers, ALU and CU exist so that cycle can run.',
    flow: ['Instruction / data', 'Fetch', 'Decode', 'Execute', 'Result / next state'],
    why: 'Labelling a CPU diagram is not enough. Students should say what moves on each bus in one cycle.',
    steps: [
      { title: 'System unit', text: 'Motherboard, CPU, memory, storage connections, PSU and buses sit together so data can move.' },
      { title: 'CPU parts', text: 'CU directs the cycle. ALU calculates. Registers hold values in use. GPU accelerates graphics/parallel work as an extension of processor roles.' },
      { title: 'Fetch–decode–execute', text: 'FETCH copies the next instruction from main memory — not a file from disk. DECODE interprets it. EXECUTE carries it out.' },
      { title: 'Performance', text: 'Clock rate, cores, cache, word length and bottlenecks matter only relative to the task.' }
    ]
  },
  'B2 Main Memory and Secondary Storage': {
    bigIdea: 'The CPU needs fast working data in main memory. That store is limited and often volatile, so secondary storage keeps data persistently. Choose technology by trade-off, not a single “fastest” ranking.',
    flow: ['CPU needs working data', 'Main memory', 'Temporary / volatile', 'Persistent storage', 'Choose by trade-off'],
    why: 'RAM, ROM, cache, HDD, SSD, optical, flash and cloud solve different jobs: speed, capacity, cost, volatility and access method.',
    steps: [
      { title: 'Why memory', text: 'Programs and data in use sit in RAM so the CPU can reach them quickly.' },
      { title: 'RAM, ROM, cache', text: 'RAM is usually volatile and writable. ROM keeps firmware. Cache is smaller and faster still.' },
      { title: 'Why storage', text: 'When power goes, working memory may lose data. Files need persistent secondary storage.' },
      { title: 'Trade-offs', text: 'SSD vs HDD, cloud vs local, tape vs disk: compare speed, capacity, cost, volatility, access and use — not one universal winner.' }
    ]
  },
  'B3 Input and Output Devices': {
    bigIdea: 'Devices connect the real world to the IPO cycle. Choose them from the task and the data, not from a memorised gadget list.',
    flow: ['Real-world data', 'Input', 'Processing', 'Output', 'Real-world result'],
    why: 'OCR, OMR, sensors, printers and displays are answers to requirements: accuracy, speed, volume, environment, cost, accessibility.',
    steps: [
      { title: 'Purpose', text: 'What data must enter, and what result must leave?' },
      { title: 'Requirements', text: 'Accuracy, speed, volume, environment and accessibility constrain the choice.' },
      { title: 'Match a device', text: 'Barcode/QR for coded items, sensor for physical quantities, printer vs display for the output job.' },
      { title: 'Newer devices', text: 'Smart glasses or new scanners still follow the same selection logic.' }
    ]
  },
  'B4 System Software': {
    bigIdea: 'Software is layered: the user runs applications, the OS manages the machine, drivers talk to hardware, utilities maintain the system.',
    flow: ['User', 'Application', 'Operating system', 'Driver', 'Hardware'],
    why: 'OS, utilities, drivers and applications are not unrelated lists. Modes of operation are different ways of handling workload.',
    steps: [
      { title: 'Roles', text: 'Application software helps a user task. System software controls hardware and provides a platform.' },
      { title: 'OS functions', text: 'Resource management, file management, security, user interface, running programs.' },
      { title: 'Utilities and drivers', text: 'Utilities maintain or diagnose. Drivers translate OS requests for a specific device.' },
      { title: 'Modes', text: 'Batch, interactive/real-time and others fit different workload patterns.' }
    ]
  },
  'C1 Networking and Internet Basics I': {
    bigIdea: 'Devices share data and resources through a structure. Scope (LAN/WAN), architecture (client-server/P2P) and hardware together define a path for packets.',
    flow: ['Need to share', 'Network structure', 'LAN / WAN', 'Architecture', 'Hardware', 'Data path'],
    why: 'Switch, AP, router and modem are roles on one journey, not four definitions.',
    steps: [
      { title: 'Why network', text: 'Share files, printers, internet and services.' },
      { title: 'Scope', text: 'LAN = limited local area. WAN = wider links between networks.' },
      { title: 'Architecture', text: 'Client-server centralises services. P2P shares among peers.' },
      { title: 'Hardware path', text: 'NIC/MAC on the host → switch inside the LAN → AP for Wi-Fi → router between networks → modem/ONT to the ISP.' }
    ]
  },
  'C2 Networking and Internet Basics II': {
    bigIdea: 'Once a path exists, transmission quality depends on medium, frequency, interference, bandwidth and access method. Choose technology from the requirement.',
    flow: ['Communication need', 'Transmission traits', 'Signal / bandwidth', 'Standard / access method', 'Suitability'],
    why: 'Wired vs wireless is a trade-off: mobility against interference and stability.',
    steps: [
      { title: 'Requirement', text: 'Need mobility? High volume? Outdoor coverage? Low latency?' },
      { title: 'Characteristics', text: 'Frequency, interference, bandwidth and roaming affect quality.' },
      { title: 'Standards and access', text: 'Wi-Fi standards and ISP access methods (fibre, mobile, etc.) are tools, not trophies.' },
      { title: 'Decision', text: 'State the trade-off: why this link fits this place.' }
    ]
  },
  'C3 Communication Software and Protocols': {
    bigIdea: 'Opening a URL starts one journey: the name must be found, packets must be routed, and the web content must be requested and returned.',
    flow: ['User enters URL', 'DNS names the host', 'IP / routing', 'TCP/IP transport', 'HTTP/HTTPS', 'Browser shows the page'],
    why: 'TCP, IP, DNS, URL, HTTP and HTTPS are stages of the same request, not a vocabulary list.',
    steps: [
      { title: 'Identify', text: 'A URL has parts. A domain name is easier for humans than an IP address.' },
      { title: 'Resolve', text: 'DNS translates the name to an IP address.' },
      { title: 'Deliver', text: 'IP routes packets. TCP helps reliable byte streams for many applications.' },
      { title: 'Exchange', text: 'HTTP/HTTPS request and response carry the page. HTTPS adds encryption for the web exchange.' }
    ]
  },
  'C4 Internet Services and Applications': {
    bigIdea: 'People use the internet to search, communicate, share files and play media. Pick the service that matches the need, and know how the data is delivered.',
    flow: ['User need', 'Choose a service', 'Data delivered appropriately'],
    why: 'Search, email, streaming and social apps are different answers. Streaming is incoming data → buffer → playback.',
    steps: [
      { title: 'Need', text: 'Find information, send a message, move a file, watch a video?' },
      { title: 'Service', text: 'Search engines, email, remote logon, chat, forums, social networks, FTP, streaming.' },
      { title: 'How it travels', text: 'Streaming fills a buffer as you watch. Download stores a complete file first. Search skill and source checks still apply.' }
    ]
  },
  'C5 Elementary Web Authoring': {
    bigIdea: 'A web page is structured content. HTML elements and attributes describe that structure, then links and paths connect pages and files into a site.',
    flow: ['Content', 'HTML structure', 'Elements / attributes', 'Links and paths', 'Site, accessibility, publish'],
    why: 'Tags are not decoration. Relative paths start from the current file’s folder.',
    steps: [
      { title: 'Structure first', text: 'html, head, body, headings, paragraphs. Meaning before styling.' },
      { title: 'Elements', text: 'Images, lists, tables and anchors need the right attributes (href, src, alt).' },
      { title: 'Connect', text: 'Relative paths join pages and media into one site.' },
      { title: 'Audience', text: 'Organisation, alt text and publishing complete the job.' }
    ]
  },
  'C6 Online Threats and Security I': {
    bigIdea: 'Start from the threat and how it works, then choose a control. Products (antivirus, firewall, VPN) are answers, not the starting list.',
    flow: ['Threat', 'Mechanism / weakness', 'Impact', 'Appropriate control'],
    why: 'Malware, unauthorised access and weak configurations need different defences. Updating software is part of the control, not an extra topic.',
    steps: [
      { title: 'Goals', text: 'Confidentiality, integrity and availability describe what security tries to protect.' },
      { title: 'Threats', text: 'Malware types, unauthorised access and social engineering have different behaviours.' },
      { title: 'Controls', text: 'Browser settings, anti-malware, authentication, access control, firewall, wireless security, VPN, updates — match each to the mechanism.' }
    ]
  },
  'C7 Online Threats and Security II': {
    bigIdea: 'Personal data can leak, be phished, or be tracked. Protect the person, then know the legal line around unauthorised access.',
    flow: ['Personal data', 'Exposure / deception / tracking', 'Harm', 'Protection', 'Lawful behaviour'],
    why: 'Privacy is not the same chapter as “install a firewall”. Phishing attacks the user, not only the packet.',
    steps: [
      { title: 'Exposure', text: 'Data leakage, scam sites, cookies/tracking and weak accounts create privacy harm.' },
      { title: 'Protect', text: 'Password hygiene, MFA, privacy settings, careful links, and not treating incognito as invisibility.' },
      { title: 'Law', text: 'Unauthorised access has legal consequences. Respect others’ accounts and data.' }
    ]
  },
  'C8 Online Threats and Security III': {
    bigIdea: 'A secure transaction stacks different jobs: hide the data, prove who you are, allow only the right action, and prove the message was not forged.',
    flow: ['Need a secure transaction', 'Encrypt data', 'Authenticate user', 'Authorise action', 'Sign / certify', 'Complete the transaction'],
    why: 'Encryption ≠ authentication ≠ authorisation ≠ digital signature ≠ digital certificate. They work together.',
    steps: [
      { title: 'Encryption', text: 'Plaintext → ciphertext with a key. Confidentiality of the content.' },
      { title: 'Authentication', text: 'Prove identity (password, MFA, biometrics).' },
      { title: 'Authorisation', text: 'Permissions: what that identity may do.' },
      { title: 'Signature and certificate', text: 'A digital signature supports integrity/non-repudiation. A certificate helps others trust a public key. HTTPS uses these in e-transactions.' }
    ]
  },
  'D1 Problem Formulation and Analysis': {
    bigIdea: 'Programming starts before code: a vague real-world problem must become a precise computable problem with scope, IPO, parts and an interface.',
    flow: ['Real-world problem', 'Define scope', 'IPO analysis', 'Decompose / abstract', 'Procedure and interface'],
    why: 'If the problem is unclear, the algorithm will solve the wrong thing.',
    steps: [
      { title: 'Scope', text: 'What is in, what is out, who the user is.' },
      { title: 'IPO', text: 'List inputs, processing actions and required outputs before writing steps.' },
      { title: 'Break down', text: 'Decomposition and abstraction remove extra detail and split the work.' },
      { title: 'Design', text: 'A solution procedure and a usable interface come before syntax.' }
    ]
  },
  'D2 Algorithm Design I - Sequence and Selection': {
    bigIdea: 'An algorithm is a precise sequence of steps. Sequence, selection and iteration are the three building blocks; later programs only combine them.',
    flow: ['Defined problem', 'Solution steps', 'Algorithm', 'Pseudocode / flowchart', 'Sequence / selection / iteration'],
    why: 'Boolean conditions decide which path runs. Loops repeat a path. Nothing else is magic.',
    steps: [
      { title: 'Represent', text: 'Pseudocode and flowcharts make the steps checkable.' },
      { title: 'Data and Boolean', text: 'Simple types and true/false expressions control selection and loops.' },
      { title: 'Three structures', text: 'Sequence then selection then iteration. Complex algorithms are combinations.' }
    ]
  },
  'D3 Algorithm Design II - Iteration and Arrays': {
    bigIdea: 'Related values sit in an array. Loops walk the array, the program state changes, and a trace shows whether the logic is right.',
    flow: ['Many related values', 'Array', 'Systematic iteration', 'Changing state', 'Trace / fix logic', 'Modules'],
    why: 'Arrays and loops belong together. Sum, min/max and search are the same idea: visit each item with a purpose.',
    steps: [
      { title: 'Store together', text: 'An array (list) holds many values under one name and an index.' },
      { title: 'Process', text: 'Load, output, sum, average, min/max, order check, add/delete — all need controlled iteration.' },
      { title: 'Trace', text: 'A trace table shows variables after each step so logic errors become visible.' },
      { title: 'Modularity', text: 'Split a large procedure into named parts you can test.' }
    ]
  },
  'D4 Introduction to Python Programming': {
    bigIdea: 'Python is an implementation of the algorithms you already designed: the same variables, input/output, selection and loops, now in syntax that runs.',
    flow: ['Algorithmic idea', 'Python syntax', 'Executable program'],
    why: 'Do not treat Python as a new subject. Map each construct across.',
    steps: [
      { title: 'Map the ideas', text: 'Pseudocode variable → Python variable. INPUT/OUTPUT → input()/print().' },
      { title: 'Control', text: 'IF → if. Iteration → for / while.' },
      { title: 'Collections', text: 'Array-like data → list. Then test with small inputs.' }
    ]
  },
  'D5 Integrated Problem-solving in Python': {
    bigIdea: 'A complete solution combines list and string processing with selection and loops. Sum, search, count and min/max are the same pattern on a collection.',
    flow: ['Multi-step problem', 'Choose representation', 'Process lists / strings', 'Combine structures', 'Complete solution'],
    why: 'Part I is lists. Part II is strings and integration. They are not separate trick lists.',
    steps: [
      { title: 'Represent', text: 'Is the data a list of marks, a string of text, or both?' },
      { title: 'Patterns', text: 'Visit each item: accumulate, compare, count, search, insert, delete.' },
      { title: 'Integrate', text: 'Nest selection inside loops, then process strings with the same discipline.' }
    ]
  },
  'D6 Program Testing and Debugging': {
    bigIdea: 'A program that runs can still be wrong. Test on purpose, compare expected with actual, diagnose, fix, and retest.',
    flow: ['Design', 'Choose test data', 'Expected vs actual', 'Diagnose', 'Fix', 'Retest'],
    why: 'Normal, boundary and erroneous data have different jobs. Syntax, runtime and logic errors have different symptoms.',
    steps: [
      { title: 'Plan tests', text: 'Normal typical values, boundary edges, erroneous illegal values.' },
      { title: 'Name the error', text: 'Syntax: cannot start. Runtime: stops while running. Logic: finishes with the wrong result.' },
      { title: 'Debug', text: 'Trace to the first unexpected state, change that cause, rerun the revealing test.' },
      { title: 'Compare designs', text: 'Another algorithm may be clearer or faster. Running is not the same as being the best solution.' }
    ]
  },
  'EC1 Algorithm Design and Python Basics': {
    bigIdea: 'Elective C starts from Core D, then organises data in two dimensions: row, column, element.',
    flow: ['Core D skills', 'Richer data organisation', '2-D arrays', 'Systematic processing'],
    why: 'Do not reteach sequence from zero. Use it to reach grids.',
    steps: [
      { title: 'Consolidate', text: 'Pseudocode, Python, style and 1-D processing still apply.' },
      { title: '2-D', text: 'An element sits at (row, column). Nested access comes next in EC3.' }
    ]
  },
  'EC2 Program Testing and Debugging II': {
    bigIdea: 'Unexpected results may be numerical (truncation, rounding, overflow) or ordinary program errors. Inspect state, then correct.',
    flow: ['Unexpected result', 'Numerical or program cause', 'Inspect state', 'Diagnose', 'Correct'],
    why: 'Print flags and IDE breakpoints are tools for the same evidence-based habit as D6.',
    steps: [
      { title: 'Numerical errors', text: 'Truncation, rounding and overflow change values even when the algorithm idea is right.' },
      { title: 'Debug', text: 'Manual trace or IDE tools: watch variables until expected and actual split.' }
    ]
  },
  'EC3 Advanced Control Structures': {
    bigIdea: 'Simple structures nest. For a 2-D array: for each row, for each column, process the cell. Then compare whole algorithms.',
    flow: ['Simple structures', 'Nesting', '2-D processing', 'Integrated algorithm', 'Compare alternatives'],
    why: 'A working nested loop is not automatically the best nested loop.',
    steps: [
      { title: 'Nest', text: 'Selection inside iteration, loops inside loops.' },
      { title: 'Grid pattern', text: 'Row loop → column loop → current cell.' },
      { title: 'Compare', text: 'Correctness, readability, efficiency and fitness for the task.' }
    ]
  },
  'EC4 Sub-programs': {
    bigIdea: 'A large problem is split into modules. The caller passes arguments; parameters receive values; the sub-program processes and may return a result.',
    flow: ['Large problem', 'Modules', 'Call', 'Arguments → parameters', 'Process', 'Return', 'Continue'],
    why: 'Scope, passing and stubs exist so you can test pieces before the whole program exists.',
    steps: [
      { title: 'Define and call', text: 'Name the sub-program, pass only what it needs, use the return value.' },
      { title: 'Scope', text: 'Local vs global. Parameter passing is how data crosses the boundary.' },
      { title: 'Stubs', text: 'Fake a not-yet-written module so the rest can be tested incrementally.' }
    ]
  },
  'EC5 Data Structures': {
    bigIdea: 'A data structure is a rule for organisation and allowed operations. Choose it by how access must behave, not by how the diagram looks.',
    flow: ['Problem need', 'Organisation rule', 'Allowed operations', 'Behaviour', 'Suitable structure'],
    why: 'Stack = LIFO. Queue = FIFO. Circular queue reuses slots. Linked list order follows pointers.',
    steps: [
      { title: 'Stack', text: 'Last in, first out: push / pop at one end.' },
      { title: 'Queue', text: 'First in, first out: enqueue at rear, dequeue at front.' },
      { title: 'Circular queue', text: 'Wrap around so empty slots can be reused.' },
      { title: 'Linked list', text: 'Nodes and pointers: logical order is not forced to be contiguous storage.' }
    ]
  },
  'EC6 Searching and Sorting': {
    bigIdea: 'The condition of the data decides the algorithm. Sorting creates order; order can make some searches efficient.',
    flow: ['Condition of data', 'Choose algorithm', 'Trace operations', 'Found / ordered result', 'Compare efficiency'],
    why: 'Binary search needs sorted data. Swapping is the shared movement behind many sorts.',
    steps: [
      { title: 'Search', text: 'Linear scan vs binary search on a sorted list.' },
      { title: 'Sort', text: 'Selection, insertion and bubble sort using swaps. Merge two already-sorted lists.' },
      { title: 'Efficiency', text: 'Count comparisons/passes. Faster algorithms exist; know why simple sorts are taught first.' }
    ]
  },
  'EC7 Handling of Text Files': {
    bigIdea: 'A file is persistent. A program reads it into memory, processes it, then writes or appends so the stored result survives after the program ends.',
    flow: ['Persistent file', 'Read into program', 'Clean / parse / process', 'Write / append / update', 'Persistent result'],
    why: 'Variables vanish when the program stops. Files do not. Update/delete usually means read–process–write safely.',
    steps: [
      { title: 'Memory vs file', text: 'Program state is temporary. Text files keep records between runs.' },
      { title: 'Process', text: 'Read lines, split fields, clean strings, then write or append.' }
    ]
  },
  'EC8 Applications of Programming in Real Life': {
    bigIdea: 'Physical events become data through sensors; a program decides; actuators act. Connected systems add data and privacy questions.',
    flow: ['Physical event', 'Sensor / device', 'Program / handler', 'Decision', 'Actuator / output', 'Connected system'],
    why: 'Maker boards, IoT and simple AI features still follow input → process → output. Privacy is part of the design.',
    steps: [
      { title: 'Event-driven', text: 'A handler runs when an event occurs, not as a never-ending guess.' },
      { title: 'Automation / IoT', text: 'Map the chain, then ask what data is collected and who can see it.' }
    ]
  },
  'EA1 Managing Data Using SQL': {
    bigIdea: 'A table represents a real-world entity. Attributes, keys and relationships, plus integrity, decide whether the data stays trustworthy when SQL changes it.',
    flow: ['Real-world entity', 'Table', 'Attributes', 'Key', 'Relationship', 'Integrity'],
    why: 'S6 starts from A6 objects, then treats tables as entities, not grids of cells.',
    steps: [
      { title: 'Entity', text: 'Student, product, order — something you keep records about.' },
      { title: 'Keys and NULL', text: 'Keys identify. NULL is unknown, not zero. Indexes speed lookup; they do not replace keys.' },
      { title: 'Integrity', text: 'Domain, entity and referential rules stop illegal data entering the tables.' }
    ]
  },
  'EA2 SQL Operators and Functions': {
    bigIdea: 'Identify the target data, apply an SQL operation, then commit only if the change should stay. ROLLBACK is the safety net.',
    flow: ['Target data', 'SQL operation', 'Integrity check', 'COMMIT or ROLLBACK'],
    why: 'SELECT asks. INSERT/UPDATE/DELETE change. Backup/restore and transactions protect recoverability.',
    steps: [
      { title: 'Retrieve', text: 'SELECT, WHERE, ORDER BY, DISTINCT.' },
      { title: 'Change', text: 'INSERT, UPDATE, DELETE — WHERE is a safety control.' },
      { title: 'Transaction', text: 'A group of changes succeeds together (COMMIT) or is undone (ROLLBACK).' }
    ]
  },
  'EA3 SQL Operations on Multiple Tables': {
    bigIdea: 'A human question may need filters, calculations and related tables. Operators, functions, joins, subqueries and set operations are stages of building that answer.',
    flow: ['Data question', 'Choose fields', 'Filter rows', 'Calculate', 'Combine related data', 'Useful result'],
    why: 'Do not treat each keyword as a separate command. Joins follow keys.',
    steps: [
      { title: 'Operators and functions', text: 'Compare, LIKE, NULL tests, aggregates and dates refine the question.' },
      { title: 'More than one table', text: 'Join on keys, or use a subquery / set operation, then views for a repeated report.' }
    ]
  },
  'EA4 Relational Database Concepts': {
    bigIdea: 'Requirements become an ER diagram, then tables. Cardinality and participation constrain the links. M:N needs a bridge table.',
    flow: ['Requirements', 'Entities', 'Attributes', 'Relationships', 'Cardinality', 'ER diagram', 'Tables'],
    why: 'This chapter is modelling. SQL syntax from EA2–EA3 sits on top of a sound model.',
    steps: [
      { title: 'Find entities', text: 'Things with records, not a single attribute.' },
      { title: 'Relate', text: 'Binary relationships. M:N → associative table → two 1:M links.' }
    ]
  },
  'EA5 Database Design and ER Diagram': {
    bigIdea: 'Repeated facts cause anomalies. Normalisation stores each fact once. Denormalisation is a later, deliberate trade-off. Structure still needs access control.',
    flow: ['Repeated data', 'Redundancy', 'Anomalies', 'Normalise', 'Integrity', 'Possible denormalise / security'],
    why: '1NF–3NF remove dependency problems. Good structure is not automatic good security.',
    steps: [
      { title: 'See the anomaly', text: 'Update one copy of a teacher’s office and the other copy lies.' },
      { title: 'Normalise', text: '1NF atomic values, 2NF whole key, 3NF nothing but the key.' },
      { title: 'Trade-off and privacy', text: 'Denormalise only with a reason. Views and least privilege limit who sees what.' }
    ]
  },
  'E1 Technological Innovations': {
    bigIdea: 'A new technology is judged by capability, benefit, limit and who is affected — not by a definition card alone.',
    flow: ['New technology', 'New capability', 'Benefit', 'Limit / risk', 'Stakeholder impact'],
    why: 'AI, IoT, 3D printing and AR/VR/MR all take the same reasoning path.',
    steps: [
      { title: 'What it enables', text: 'Name a concrete application, not a slogan.' },
      { title: 'Who is affected', text: 'Benefit and harm can fall on different groups. Include data/privacy where relevant.' }
    ]
  },
  'E2 Health and Ethical Issues': {
    bigIdea: 'ICT use affects bodies, minds, groups and the environment. Name the practice, the people, the consequence, then a responsible response.',
    flow: ['ICT practice', 'Affected people', 'Consequence', 'Responsible response'],
    why: 'Ergonomics, addiction, fake news, cyberbullying, digital divide and e-waste share this pattern. Reliability uses claim → source → evidence → corroboration.',
    steps: [
      { title: 'Health and wellbeing', text: 'Ergonomics and internet addiction are about use, not only devices.' },
      { title: 'Social and ethical', text: 'Freedom of information, cyberbullying, equity/divide, environment.' },
      { title: 'Reliability', text: 'Check source and evidence before treating a post as information.' }
    ]
  },
  'E3 Intellectual Property': {
    bigIdea: 'A work is protected. A licence or permission says what you may do. Breaking the condition is infringement. Ask: can I use this, and under what conditions?',
    flow: ['Work created', 'IP rights exist', 'Licence / permission', 'User follows conditions', 'Infringement if not'],
    why: 'Found online ≠ free. Attribution does not cancel NC or a missing right. Freeware is not automatically open source.',
    steps: [
      { title: 'Rights', text: 'Copyright exists on original works including software and media.' },
      { title: 'Conditions', text: 'CC BY, NC, shareware trials, MIT notices, school academic honesty — inspect the line that matters.' },
      { title: 'Use', text: 'Decide permission, attribution/notice, and whether this stated use is allowed.' }
    ]
  }
};

function resolveChapterId(topicId) {
  return CHAPTER_ALIASES[topicId] || topicId;
}

function getChapterBackbone(topicId) {
  const id = resolveChapterId(topicId);
  return CHAPTER_BACKBONES[id] || CHAPTER_BACKBONES[topicId] || null;
}

function renderChapterBackbone(topicConfig) {
  const backbone = getChapterBackbone(topicConfig?.id || topicConfig?.title);
  if (!backbone || typeof escapeHtml !== 'function') return '';
  const flow = (backbone.flow || []).map((step, index) => `
    <li>
      <span>${index + 1}</span>
      <strong>${escapeHtml(step)}</strong>
    </li>
  `).join('');
  const steps = (backbone.steps || []).map((item, index) => `
    <article>
      ${index ? `<p class="backbone-join">Then: ${escapeHtml(item.title)}</p>` : ''}
      <h4>${escapeHtml(item.title)}</h4>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join('');
  return `
    <section class="chapter-backbone" aria-label="Chapter backbone">
      <p class="eyebrow">Chapter backbone</p>
      <h3>Big idea</h3>
      <p class="backbone-idea">${escapeHtml(backbone.bigIdea)}</p>
      <ol class="backbone-flow">${flow}</ol>
      <p class="backbone-why">${escapeHtml(backbone.why || '')}</p>
      <div class="backbone-steps">${steps}</div>
    </section>
  `;
}
