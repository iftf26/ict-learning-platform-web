/* Bilingual C&A short forms, student-friendly labels, and glossary.
   Official topic names follow the HKDSE ICT Curriculum and Assessment Guide
   (English / Traditional Chinese). School SOW codes stay as internal IDs only. */

const strandStudyMeta = {
  'Core A Information Processing': {
    kicker: 'Compulsory A',
    titleEn: 'Information Processing',
    titleZh: '資訊處理',
    icon: '資訊'
  },
  'Core B Computer System Fundamentals': {
    kicker: 'Compulsory B',
    titleEn: 'Computer Systems Fundamentals',
    titleZh: '電腦系統基礎',
    icon: '系統'
  },
  'Core C Internet and its Applications': {
    kicker: 'Compulsory C',
    titleEn: 'Internet and its Applications',
    titleZh: '互聯網及其應用',
    icon: '網絡'
  },
  'Core D Computational Thinking and Programming': {
    kicker: 'Compulsory D',
    titleEn: 'Computational Thinking and Programming',
    titleZh: '計算思維與程式編寫',
    icon: '編程'
  },
  'Core E Social Implications': {
    kicker: 'Compulsory E',
    titleEn: 'Social Implications of ICT',
    titleZh: '資訊及通訊科技對社會的影響',
    icon: '社會'
  },
  'Elective A Databases': {
    kicker: 'Elective A',
    titleEn: 'Databases',
    titleZh: '數據庫',
    icon: '數據庫'
  },
  'Elective C Algorithm and Programming': {
    kicker: 'Elective C',
    titleEn: 'Algorithm and Programming',
    titleZh: '算法與程式編寫',
    icon: '算法'
  }
};

const chapterStudyMeta = {
  'A1 Introduction to Information Processing': {
    titleEn: 'Introduction to Information Processing',
    titleZh: '資訊處理簡介',
    caTopicEn: 'Introduction to Information Processing',
    caTopicZh: '資訊處理簡介',
    focuses: [
      { en: 'Information system', zh: '資訊系統', detail: 'Hardware, software, data, people and procedures' },
      { en: 'Data becomes information', zh: '數據變資訊', detail: 'Raw facts become meaningful after processing' },
      { en: 'Processing stages', zh: '處理階段', detail: 'Collection through to presentation' }
    ]
  },
  'A2 Data Organisation and Data Control': {
    titleEn: 'Data Organisation and Data Control',
    titleZh: '數據組織及數據控制',
    caTopicEn: 'Data Organisation and Data Control',
    caTopicZh: '數據組織及數據控制',
    focuses: [
      { en: 'Validation', zh: '驗證', detail: 'Check whether input follows rules' },
      { en: 'Verification', zh: '核實', detail: 'Check accurate copying or entry' },
      { en: 'Error detection', zh: '錯誤偵測', detail: 'Check digit and parity check' }
    ]
  },
  'A3 Data Representation': {
    titleEn: 'Data Representation',
    titleZh: '數據表示',
    caTopicEn: 'Data Representation',
    caTopicZh: '數據表示',
    focuses: [
      { en: 'Number systems', zh: '數制', detail: 'Binary, hexadecimal and two’s complement' },
      { en: 'Character codes', zh: '字元編碼', detail: 'ASCII, Big-5, GB and Unicode' },
      { en: 'Digital media', zh: '數碼媒體', detail: 'Digitisation, formats and compression' }
    ]
  },
  'A4 Spreadsheet / Data Manipulation and Analysis': {
    titleEn: 'Spreadsheet and Data Analysis',
    titleZh: '試算表與數據分析',
    caTopicEn: 'Data Manipulation and Analysis',
    caTopicZh: '數據操縱和分析',
    focuses: [
      { en: 'Formulae and functions', zh: '公式與函數', detail: 'Cell references instead of typed constants' },
      { en: 'Relative and absolute references', zh: '相對與絕對參照', detail: 'Control what changes when a formula is copied' },
      { en: 'Analyse data', zh: '分析數據', detail: 'Sort, filter, pivot tables and what-if' }
    ]
  },
  'A5 Simple Database': {
    titleEn: 'Simple Database',
    titleZh: '簡易數據庫',
    caTopicEn: 'Data Organisation and Data Control',
    caTopicZh: '數據組織及數據控制',
    focuses: [
      { en: 'Table, record and field', zh: '資料表、記錄與欄位', detail: 'How a simple database stores items' },
      { en: 'Primary key', zh: '主鍵', detail: 'Uniquely identifies each record' },
      { en: 'Query', zh: '查詢', detail: 'Select, sort and filter records' }
    ]
  },
  'B1 Input and Output Devices': {
    titleEn: 'Input and Output Devices',
    titleZh: '輸入及輸出裝置',
    caTopicEn: 'Basic Machine Organisation',
    caTopicZh: '基本機器組織',
    focuses: [
      { en: 'Input–process–output', zh: '輸入–處理–輸出', detail: 'How data moves through a computer system' },
      { en: 'Input devices', zh: '輸入裝置', detail: 'Manual, media and automatic capture' },
      { en: 'Output devices', zh: '輸出裝置', detail: 'Monitor, printer, projector and audio' }
    ]
  },
  'B2 Computer Hardware': {
    titleEn: 'Computer Hardware',
    titleZh: '電腦硬件',
    caTopicEn: 'Basic Machine Organisation',
    caTopicZh: '基本機器組織',
    focuses: [
      { en: 'System unit', zh: '系統單元', detail: 'CPU, memory, storage and motherboard' },
      { en: 'Machine cycle', zh: '機器週期', detail: 'Fetch, decode and execute' },
      { en: 'Memory hierarchy', zh: '記憶層次', detail: 'Registers, cache, RAM and secondary storage' }
    ]
  },
  'B3 Computer Software': {
    titleEn: 'Computer Software',
    titleZh: '電腦軟件',
    caTopicEn: 'System Software',
    caTopicZh: '系統軟件',
    focuses: [
      { en: 'System software', zh: '系統軟件', detail: 'Controls hardware and provides a platform' },
      { en: 'Application software', zh: '應用軟件', detail: 'Helps users complete tasks' },
      { en: 'Processing modes', zh: '處理模式', detail: 'Batch, real-time, parallel and virtualisation' }
    ]
  },
  'C1 Networking and Internet Basics': {
    titleEn: 'Networking and Internet Basics',
    titleZh: '建網及互聯網基本知識',
    caTopicEn: 'Networking and Internet Basics',
    caTopicZh: '建網及互聯網基本知識',
    focuses: [
      { en: 'Local and wide area networks', zh: '區域網與廣域網', detail: 'Scope, cost and transfer rate' },
      { en: 'Network devices', zh: '網絡裝置', detail: 'Switch, router, access point and NIC' },
      { en: 'Internet access', zh: '互聯網接達', detail: 'Cables, wireless methods and ISP' }
    ]
  },
  'C2 Internet Protocols': {
    titleEn: 'Internet Protocols',
    titleZh: '互聯網協議',
    caTopicEn: 'Internet Services and Applications',
    caTopicZh: '互聯網服務及應用',
    focuses: [
      { en: 'TCP/IP', zh: '傳輸控制／網際協議', detail: 'Packets, addressing, routing and reassembly' },
      { en: 'Domain Name System', zh: '域名系統', detail: 'Turns a domain name into an IP address' },
      { en: 'Web and mail protocols', zh: '網頁與電郵協議', detail: 'HTTP, HTTPS, SMTP, POP3 and IMAP' }
    ]
  },
  'C3 Internet Services and Applications': {
    titleEn: 'Internet Services and Applications',
    titleZh: '互聯網服務及應用',
    caTopicEn: 'Internet Services and Applications',
    caTopicZh: '互聯網服務及應用',
    focuses: [
      { en: 'Cloud and Internet of Things', zh: '雲端與物聯網', detail: 'Shared services and connected objects' },
      { en: 'Email choices', zh: '電郵選擇', detail: 'To, carbon copy and blind carbon copy' },
      { en: 'Search and media', zh: '搜尋與媒體', detail: 'Operators, streaming and conferencing' }
    ]
  },
  'C4 Elementary Web Authoring': {
    titleEn: 'Elementary Web Authoring',
    titleZh: '初級網頁創作',
    caTopicEn: 'Elementary Web Authoring',
    caTopicZh: '初級網頁創作',
    focuses: [
      { en: 'HTML structure', zh: 'HTML結構', detail: 'Tags, headings, links and images' },
      { en: 'Paths and attributes', zh: '路徑與屬性', detail: 'href, src and relative folders' },
      { en: 'Accessibility', zh: '無障礙', detail: 'Meaningful links, alt text and headings' }
    ]
  },
  'C5 Network Security and Privacy Threats': {
    titleEn: 'Internet Threats and Privacy',
    titleZh: '網上威脅及私隱',
    caTopicEn: 'Internet Threats and Security',
    caTopicZh: '網上威脅及保安',
    focuses: [
      { en: 'Malware', zh: '惡意軟件', detail: 'Virus, worm, Trojan and ransomware' },
      { en: 'Phishing', zh: '網絡釣魚', detail: 'Fake messages that steal data' },
      { en: 'Privacy threats', zh: '私隱威脅', detail: 'Spyware, tracking and public Wi-Fi' }
    ]
  },
  'C6 Network Security Measures': {
    titleEn: 'Network Security Measures',
    titleZh: '網絡保安措施',
    caTopicEn: 'Internet Threats and Security',
    caTopicZh: '網上威脅及保安',
    focuses: [
      { en: 'Authentication', zh: '身份核實', detail: 'Prove who the user is' },
      { en: 'Encryption', zh: '加密', detail: 'Protect confidentiality of data' },
      { en: 'Access control', zh: '存取控制', detail: 'Firewall, VPN and least privilege' }
    ]
  },
  'D1 Problem Formulation and Analysis': {
    titleEn: 'Problem Formulation and Analysis',
    titleZh: '問題建構和分析',
    caTopicEn: 'Problem Formulation and Analysis',
    caTopicZh: '問題建構和分析',
    focuses: [
      { en: 'Scope', zh: '範圍', detail: 'What the solution must and must not cover' },
      { en: 'Decomposition', zh: '問題分解', detail: 'Break a problem into smaller parts' },
      { en: 'Abstraction', zh: '抽象化', detail: 'Keep the rules, drop irrelevant details' }
    ]
  },
  'D2 Algorithm Design I - Sequence and Selection': {
    titleEn: 'Algorithm Design: Sequence and Selection',
    titleZh: '算法設計：順序與選擇',
    caTopicEn: 'Algorithm Design',
    caTopicZh: '算法設計',
    focuses: [
      { en: 'Sequence', zh: '順序', detail: 'Statements run in order' },
      { en: 'Selection', zh: '選擇', detail: 'IF/ELSE chooses a branch' },
      { en: 'Trace table', zh: '追蹤表', detail: 'Update variables after each step' }
    ]
  },
  'D3 Algorithm Design II - Iteration and Arrays': {
    titleEn: 'Algorithm Design: Iteration and Arrays',
    titleZh: '算法設計：迭代與陣列',
    caTopicEn: 'Algorithm Design',
    caTopicZh: '算法設計',
    focuses: [
      { en: 'Iteration', zh: '迭代', detail: 'A loop repeats while a condition holds' },
      { en: 'Arrays', zh: '陣列', detail: 'Index is the position; value is stored there' },
      { en: 'Linear search', zh: '線性搜尋', detail: 'Check items one by one' }
    ]
  },
  'D4 Introduction to Python Programming': {
    titleEn: 'Introduction to Python Programming',
    titleZh: 'Python程式編寫入門',
    caTopicEn: 'Program Development',
    caTopicZh: '程式開發',
    focuses: [
      { en: 'Variables and assignment', zh: '變數與賦值', detail: 'A name stores a value that can change' },
      { en: 'Input and output', zh: '輸入與輸出', detail: 'input() reads text; print() displays results' },
      { en: 'Syntax rules', zh: '語法規則', detail: 'Indentation shows which lines belong together' }
    ]
  },
  'D5 Integrated Problem-solving in Python': {
    titleEn: 'Integrated Problem-solving in Python',
    titleZh: 'Python綜合解難',
    caTopicEn: 'Program Development',
    caTopicZh: '程式開發',
    focuses: [
      { en: 'Combine constructs', zh: '綜合結構', detail: 'Input, selection, iteration, lists and strings' },
      { en: 'List processing', zh: '清單處理', detail: 'Use an index or a loop on every item' },
      { en: 'Boundary test data', zh: '邊界測試數據', detail: 'Values on the edge of a condition' }
    ]
  },
  'D6 Program Testing and Debugging': {
    titleEn: 'Program Testing and Debugging',
    titleZh: '程式測試和除錯',
    caTopicEn: 'Program Testing and Debugging',
    caTopicZh: '程式測試和除錯',
    focuses: [
      { en: 'Test data', zh: '測試數據', detail: 'Normal, boundary and erroneous values' },
      { en: 'Error types', zh: '錯誤類型', detail: 'Syntax, runtime and logic errors' },
      { en: 'Systematic debugging', zh: '有系統除錯', detail: 'Reproduce, locate, fix one cause, retest' }
    ]
  },
  'E1 Technological Innovations': {
    titleEn: 'Technological Innovations',
    titleZh: '科技創新',
    caTopicEn: 'Technological Innovations',
    caTopicZh: '科技創新',
    focuses: [
      { en: 'AI and data science', zh: '人工智能與數據科學', detail: 'Pattern recognition, bias and privacy' },
      { en: 'Smart city and IoT', zh: '智慧城市與物聯網', detail: 'Sensors collect and act on data' },
      { en: 'Stakeholder judgement', zh: '持份者判斷', detail: 'Name the technology, effect and who is affected' }
    ]
  },
  'E2 Health and Ethical Issues': {
    titleEn: 'Health and Ethical Issues',
    titleZh: '健康及倫理議題',
    caTopicEn: 'Health and Ethical Issues',
    caTopicZh: '健康及倫理議題',
    focuses: [
      { en: 'Ergonomics', zh: '人體工學', detail: 'Reduce strain, RSI and poor posture' },
      { en: 'Digital divide', zh: '數碼隔閡', detail: 'Unequal access to devices, skills or connectivity' },
      { en: 'Privacy and ethics', zh: '私隱與倫理', detail: 'Consent, cyberbullying and reliable information' }
    ]
  },
  'E3 Intellectual Property': {
    titleEn: 'Intellectual Property',
    titleZh: '知識產權',
    caTopicEn: 'Intellectual Property',
    caTopicZh: '知識產權',
    focuses: [
      { en: 'Copyright', zh: '版權', detail: 'Legal rights over original work' },
      { en: 'Licence types', zh: '授權類型', detail: 'Freeware, shareware, open source and CC' },
      { en: 'Lawful use', zh: '合法使用', detail: 'Permission, attribution and acknowledging sources' }
    ]
  },
  'EA1 Managing Data Using SQL': {
    titleEn: 'Managing Data Using SQL',
    titleZh: '以SQL管理數據',
    caTopicEn: 'SQL',
    caTopicZh: '結構化查詢語言',
    focuses: [
      { en: 'Create a table', zh: '建立資料表', detail: 'Fields, data types and constraints' },
      { en: 'Change records', zh: '更改記錄', detail: 'INSERT, UPDATE and DELETE need a precise WHERE' },
      { en: 'Primary key', zh: '主鍵', detail: 'Uniquely identifies each record' }
    ]
  },
  'EA2 SQL Operators and Functions': {
    titleEn: 'SQL Operators and Functions',
    titleZh: 'SQL運算子及函數',
    caTopicEn: 'SQL',
    caTopicZh: '結構化查詢語言',
    focuses: [
      { en: 'Filter records', zh: '篩選記錄', detail: 'WHERE, LIKE, IN, BETWEEN and IS NULL' },
      { en: 'Aggregate functions', zh: '聚合函數', detail: 'COUNT, SUM and AVG summarise many rows' },
      { en: 'GROUP BY', zh: '分組', detail: 'Needed when mixing detail fields with totals' }
    ]
  },
  'EA3 SQL Operations on Multiple Tables': {
    titleEn: 'SQL on Multiple Tables',
    titleZh: '多表SQL操作',
    caTopicEn: 'SQL',
    caTopicZh: '結構化查詢語言',
    focuses: [
      { en: 'Join related tables', zh: '連接相關資料表', detail: 'Match a primary key to a foreign key' },
      { en: 'Inner and outer join', zh: '內連接與外連接', detail: 'Keep or drop unmatched rows' },
      { en: 'Subquery', zh: '子查詢', detail: 'One nested SELECT at this syllabus level' }
    ]
  },
  'EA4 Relational Database Concepts': {
    titleEn: 'Relational Database Concepts',
    titleZh: '關聯數據庫概念',
    caTopicEn: 'Relational Database Concepts',
    caTopicZh: '關聯數據庫概念',
    focuses: [
      { en: 'Entity and attribute', zh: '實體與屬性', detail: 'A thing of interest and its properties' },
      { en: 'Keys', zh: '鍵', detail: 'Primary, candidate and foreign keys' },
      { en: 'Integrity rules', zh: '完整性規則', detail: 'Entity integrity and referential integrity' }
    ]
  },
  'EA5 Database Design and ER Diagram': {
    titleEn: 'Database Design and ER Diagrams',
    titleZh: '數據庫設計及ER圖',
    caTopicEn: 'Database Design Methodologies',
    caTopicZh: '數據庫設計方法',
    focuses: [
      { en: 'ER diagram', zh: '實體關係圖', detail: 'Entities, relationships and cardinality' },
      { en: 'Many-to-many', zh: '多對多', detail: 'Resolve with an associative table' },
      { en: 'Normalisation', zh: '正規化', detail: 'Reduce redundancy up to third normal form' }
    ]
  },
  'EC1 Algorithm Design and Python Basics': {
    titleEn: 'Algorithm Design and Python Basics',
    titleZh: '算法設計與Python基礎',
    caTopicEn: 'Programming',
    caTopicZh: '程式編寫',
    focuses: [
      { en: 'Algorithm representations', zh: '算法表示', detail: 'Pseudocode, flowchart and trace table' },
      { en: 'Data types', zh: '數據類型', detail: 'Simple, structured and user-defined types' },
      { en: 'Programming style', zh: '程式風格', detail: 'Names, comments, spacing and indentation' }
    ]
  },
  'EC2 Program Testing and Debugging II': {
    titleEn: 'Program Testing and Debugging',
    titleZh: '程式測試和除錯',
    caTopicEn: 'Programming',
    caTopicZh: '程式編寫',
    focuses: [
      { en: 'Numerical errors', zh: '數值誤差', detail: 'Rounding, truncation, overflow and underflow' },
      { en: 'Debugging tools', zh: '除錯工具', detail: 'Breakpoints, flags, stubs and traces' },
      { en: 'Structured programming', zh: '結構化程式編寫', detail: 'Design, implement and debug in parts' }
    ]
  },
  'EC3 Advanced Control Structures': {
    titleEn: 'Advanced Control Structures',
    titleZh: '進階控制結構',
    caTopicEn: 'Programming',
    caTopicZh: '程式編寫',
    focuses: [
      { en: 'Nested loops', zh: '巢狀迴圈', detail: 'Inner loop runs fully for each outer cycle' },
      { en: 'Two-dimensional arrays', zh: '二維陣列', detail: 'Row index and column index' },
      { en: 'Algorithm comparison', zh: '算法比較', detail: 'Correctness, readability and efficiency' }
    ]
  },
  'EC4 Sub-programs': {
    titleEn: 'Sub-programs',
    titleZh: '子程式',
    caTopicEn: 'Programming',
    caTopicZh: '程式編寫',
    focuses: [
      { en: 'Function or procedure', zh: '函數或程序', detail: 'A named block called from elsewhere' },
      { en: 'Parameter and argument', zh: '參數與引數', detail: 'Names inside versus values supplied' },
      { en: 'Scope', zh: '作用域', detail: 'Local versus global variables' }
    ]
  },
  'EC5 Data Structures': {
    titleEn: 'Data Structures',
    titleZh: '數據結構',
    caTopicEn: 'Programming',
    caTopicZh: '程式編寫',
    focuses: [
      { en: 'Stack', zh: '堆疊', detail: 'Last in, first out' },
      { en: 'Queue', zh: '隊列', detail: 'First in, first out' },
      { en: 'Linked list', zh: '鏈結串列', detail: 'Nodes linked by pointers' }
    ]
  },
  'EC6 Searching and Sorting': {
    titleEn: 'Searching and Sorting',
    titleZh: '搜尋及排序',
    caTopicEn: 'Programming',
    caTopicZh: '程式編寫',
    focuses: [
      { en: 'Linear and binary search', zh: '線性與二分搜尋', detail: 'Binary search needs sorted data' },
      { en: 'Classic sorts', zh: '經典排序', detail: 'Bubble, selection and insertion sort' },
      { en: 'Merging', zh: '合併', detail: 'Combine two already-sorted lists' }
    ]
  },
  'EC7 Handling of Text Files': {
    titleEn: 'Handling of Text Files',
    titleZh: '文字檔處理',
    caTopicEn: 'Programming',
    caTopicZh: '程式編寫',
    focuses: [
      { en: 'File modes', zh: '檔案模式', detail: 'Read, write and append do different jobs' },
      { en: 'Open, process, close', zh: '開啟、處理、關閉', detail: 'Handle files in a safe order' },
      { en: 'Records and delimiters', zh: '記錄與分隔符', detail: 'Split lines by the correct separator' }
    ]
  },
  'EC8 Applications of Programming in Real Life': {
    titleEn: 'Programming in Real Life',
    titleZh: '程式編寫在現實生活的應用',
    caTopicEn: 'Applications of Programming in Real Life',
    caTopicZh: '程式編寫在現實生活的應用',
    focuses: [
      { en: 'Sensor to actuator', zh: '傳感器到致動器', detail: 'Measure, decide, then act' },
      { en: 'Event handler', zh: '事件處理常式', detail: 'Code that runs when an event occurs' },
      { en: 'Event-driven program', zh: '事件驅動程式', detail: 'Responds to events, not one continuous script' }
    ]
  }
};

const studyCommandWords = [
  ['Distinguish between', '區分'],
  ['Distinguish', '區分'],
  ['Identify and examine', '識別並檢視'],
  ['Identify', '識別'],
  ['Examine', '檢視'],
  ['Understand', '瞭解'],
  ['Define', '界定'],
  ['Discuss', '討論'],
  ['Explain', '解釋'],
  ['Describe', '描述'],
  ['Convert', '轉換'],
  ['Analyse', '分析'],
  ['Analyze', '分析'],
  ['Apply', '運用'],
  ['Select', '選取'],
  ['Compare', '比較'],
  ['Justify', '提出理據'],
  ['Design', '設計'],
  ['Evaluate', '評估'],
  ['Outline', '概述'],
  ['Recognise', '辨認'],
  ['Recognize', '辨認'],
  ['Predict', '預測'],
  ['Construct', '建構'],
  ['Illustrate', '說明'],
  ['Demonstrate', '示範'],
  ['Formulate', '制定'],
  ['Implement', '實施'],
  ['Debug', '除錯'],
  ['Realise', '認識'],
  ['Realize', '認識'],
  ['Perform', '進行'],
  ['Create', '創建'],
  ['Relate', '聯繫'],
  ['Know briefly', '概略認識'],
  ['Know how', '認識如何'],
  ['Know', '認識'],
  ['State', '陳述'],
  ['Use', '運用'],
  ['View', '檢視'],
  ['Be aware of', '覺察'],
  ['Appraise', '評鑑'],
  ['Interpret', '詮釋'],
  ['Process', '處理'],
  ['Choose', '選取'],
  ['Review', '溫習'],
  ['Resolve', '解決'],
  ['Transform', '轉換'],
  ['Manipulate', '操縱'],
  ['Read', '讀取'],
  ['Search', '搜尋']
];

const keywordChinese = {
  'Information system': '資訊系統',
  'Data vs information': '數據與資訊',
  'IPO / information processes': '資訊處理過程',
  'Hardware vs software': '硬件與軟件',
  'Information literacy': '資訊素養',
  'Multimedia data': '多媒體數據',
  'Validation': '驗證',
  'Verification': '核實',
  'Transcription vs transposition': '抄錄錯誤與換位錯誤',
  'Check digit': '檢查數字',
  'Parity check': '奇偶校驗',
  'Data hierarchy': '數據層次',
  'Sequential vs direct access': '順序存取與直接存取',
  'Bit / byte': '位元／位元組',
  'Transfer rate': '傳送率',
  'Two’s complement': '二進制補碼',
  'Overflow': '溢出',
  'ASCII / Big-5 / GB / Unicode': '字元編碼',
  'Analog vs digital': '模擬與數碼',
  'Lossless vs lossy': '無損與有損',
  'Hexadecimal': '十六進制',
  'Relative vs absolute reference': '相對與絕對參照',
  'Formula': '公式',
  'COUNTIF vs SUMIF': '條件計數與條件求和',
  'Sort vs filter': '排序與篩選',
  'Pivot table': '樞紐分析表',
  'What-if / Goal Seek': '模擬運算／目標尋找',
  'Chart choice': '圖表選擇',
  'Field / record / table': '欄位／記錄／資料表',
  'Primary key': '主鍵',
  'Data type': '數據類型',
  'Form / query / report': '表單／查詢／報表',
  'NULL': '空值',
  'Simple SQL': '簡易SQL',
  'IPO cycle': '輸入–處理–輸出週期',
  'OCR / OMR / MICR': '光學字元／光學標記／磁墨字元辨識',
  'Sensor': '傳感器',
  'Touch screen': '觸控螢幕',
  'Printer vs monitor': '打印機與顯示器',
  'Device justification': '裝置理據',
  'CPU': '中央處理器',
  'Fetch–decode–execute': '擷取–解碼–執行',
  'Clock rate / word length': '時脈速率／字長',
  'RAM vs ROM vs storage': '隨機存取記憶體／唯讀記憶體／儲存',
  'Cache / registers': '快取／暫存器',
  'HDD vs SSD vs tape': '硬碟／固態硬碟／磁帶',
  'Bottleneck': '瓶頸',
  'System vs application software': '系統軟件與應用軟件',
  'OS functions': '作業系統功能',
  'Driver': '裝置驅動程式',
  'Utility': '公用程式',
  'GUI vs CLI': '圖形介面與指令列介面',
  'Batch vs real-time': '批次與即時',
  'Licence types': '授權類型',
  'LAN vs WAN': '區域網與廣域網',
  'Client–server vs P2P': '客戶端–伺服器與點對點',
  'Switch vs router': '交換器與路由器',
  'NIC / MAC': '網絡介面卡／媒體存取控制位址',
  'Packet switching': '封包交換',
  'Bandwidth / interference': '頻寬／干擾',
  'IP address': 'IP位址',
  'URL': '統一資源定位符',
  'DNS': '域名系統',
  'HTTP vs HTTPS': '超文本傳輸協議（加密與否）',
  'SMTP / POP3 / IMAP': '電郵傳送與收取協議',
  'FTP': '檔案傳輸協議',
  'TCP/IP': '傳輸控制／網際協議',
  'Search operators': '搜尋運算子',
  'Cc vs Bcc': '副本與密件副本',
  'Cloud permissions': '雲端權限',
  'IoT': '物聯網',
  'Streaming vs download': '串流與下載',
  'Video conferencing vs webcasting': '視像會議與網絡廣播',
  'HTML': '超文本標示語言',
  'Tag / attribute': '標籤／屬性',
  'href vs src': '超連結與來源屬性',
  'Relative path': '相對路徑',
  'Accessibility': '無障礙',
  'HTML vs CSS': '內容結構與樣式',
  'Virus / worm / Trojan': '病毒／蠕蟲／木馬',
  'Ransomware': '勒索軟件',
  'Phishing': '網絡釣魚',
  'DoS': '拒絕服務攻擊',
  'Spyware / tracking': '間諜軟件／追蹤',
  'Public Wi-Fi risk': '公共無線網絡風險',
  'Authentication vs authorisation': '身份核實與授權',
  'Encryption': '加密',
  'HTTPS / TLS / certificate': '加密網頁／傳輸層保安／證書',
  'Firewall': '防火牆',
  'VPN': '虛擬私人網絡',
  'MFA': '多重身份核實',
  'Digital signature': '數碼簽署',
  'Scope': '範圍',
  'IPO analysis': '輸入–處理–輸出分析',
  'Decomposition': '問題分解',
  'Abstraction': '抽象化',
  'User interface': '使用者介面',
  'Algorithm': '算法',
  'Sequence': '順序',
  'Assignment': '賦值',
  'Selection': '選擇',
  'AND / OR / NOT': '邏輯與／或／非',
  'Trace table': '追蹤表',
  'Iteration': '迭代',
  'Off-by-one': '差一錯誤',
  'Counter vs accumulator': '計數器與累加器',
  'Array index vs value': '陣列索引與值',
  'Linear search': '線性搜尋',
  'Modularity': '模組化',
  'Variable / assignment': '變數／賦值',
  'input() / print()': '輸入／輸出函數',
  'Type conversion': '類型轉換',
  'Indentation': '縮排',
  'Syntax error': '語法錯誤',
  'Operators': '運算子',
  'List processing': '清單處理',
  'String extraction': '字串擷取',
  'Integrated solution': '綜合解難',
  'Program purpose': '程式目的',
  'Boundary test data': '邊界測試數據',
  'Normal / boundary / erroneous data': '正常／邊界／錯誤數據',
  'Runtime error': '執行時期錯誤',
  'Logic error': '邏輯錯誤',
  'Systematic debugging': '有系統除錯',
  'Algorithm comparison': '算法比較',
  'AI / data science': '人工智能／數據科學',
  'IoT / smart city': '物聯網／智慧城市',
  'AR / VR / MR': '擴增／虛擬／混合實境',
  '3D printing': '立體打印',
  'Stakeholder judgement': '持份者判斷',
  'Ergonomics / RSI': '人體工學／重複性勞損',
  'Digital divide': '數碼隔閡',
  'Privacy / consent': '私隱／同意',
  'Cyberbullying': '網絡欺凌',
  'Information reliability': '資訊可靠性',
  'Freedom of information': '資訊自由',
  'Copyright / IP': '版權／知識產權',
  'Freeware vs shareware vs open source': '免費軟件／共享軟件／開放源碼',
  'Creative Commons': '共享創意',
  'Attribution': '署名',
  'Watermark / digital signature': '浮水印／數碼簽署',
  'CREATE TABLE': '建立資料表',
  'INSERT / UPDATE / DELETE': '插入／更新／刪除',
  'PRIMARY KEY': '主鍵',
  'DROP TABLE': '刪除資料表',
  'COMMIT / ROLLBACK': '提交／回滾',
  'WHERE vs SELECT': '條件篩選與欄位選取',
  'LIKE': '模式比對',
  'IN / BETWEEN / IS NULL': '屬於／介乎／為空值',
  'COUNT / SUM / AVG': '計數／求和／平均',
  'GROUP BY': '分組',
  'JOIN condition': '連接條件',
  'INNER vs OUTER JOIN': '內連接與外連接',
  'Cartesian product': '笛卡兒積',
  'Subquery': '子查詢',
  'Alias': '別名',
  'View': '檢視表',
  'Entity / attribute / domain': '實體／屬性／域',
  'Primary / candidate / foreign key': '主鍵／候選鍵／外鍵',
  'Entity integrity': '實體完整性',
  'Referential integrity': '參照完整性',
  'Index': '索引',
  'Rollback': '回滾',
  'ER diagram': '實體關係圖',
  'Binary relationship': '二元關係',
  'M:N resolution': '多對多拆解',
  '1NF / 2NF / 3NF': '第一／第二／第三正規化',
  'Redundancy / anomalies': '冗餘／異常',
  'Least privilege': '最小權限',
  'Algorithm representations': '算法表示',
  'Data types': '數據類型',
  'Operator precedence': '運算子優先次序',
  'Programming style': '程式風格',
  'Trace in execution order': '依執行次序追蹤',
  'Overflow / underflow': '溢出／下溢',
  'Rounding vs truncation': '捨入與截斷',
  'Breakpoint': '斷點',
  'Stub': '程式樁',
  'Flag': '旗標',
  'Nested loop': '巢狀迴圈',
  '2D array': '二維陣列',
  'Pattern / grid processing': '圖樣／網格處理',
  'Subprogram / function': '子程式／函數',
  'Parameter vs argument': '參數與引數',
  'Return value': '傳回值',
  'Local vs global': '區域與全域',
  'Stack / LIFO': '堆疊／後進先出',
  'Queue / FIFO': '隊列／先進先出',
  'Circular queue': '循環隊列',
  'Linked list': '鏈結串列',
  'Array implementation': '陣列實現',
  'Linear vs binary search': '線性與二分搜尋',
  'Swap': '交換',
  'Bubble / selection / insertion sort': '氣泡／選擇／插入排序',
  'Merging': '合併',
  'Efficiency': '效率',
  'File modes': '檔案模式',
  'Open → process → close': '開啟→處理→關閉',
  'Record / delimiter': '記錄／分隔符',
  'Append vs overwrite': '附加與覆寫',
  'Safe update': '安全更新',
  'Sensor → process → actuator': '傳感器→處理→致動器',
  'Event handler': '事件處理常式',
  'Event-driven program': '事件驅動程式',
  'IoT application': '物聯網應用'
};

const studyGlossary = {
  'information system': '資訊系統',
  'information literacy': '資訊素養',
  'information processes': '資訊處理過程',
  'validation': '驗證',
  'verification': '核實',
  'transcription': '抄錄',
  'transposition': '換位',
  'check digit': '檢查數字',
  'parity checking': '奇偶校驗',
  'parity check': '奇偶校驗',
  'two’s complement': '二進制補碼',
  "two's complement": '二進制補碼',
  'overflow': '溢出',
  'underflow': '下溢',
  'hexadecimal': '十六進制',
  'analog': '模擬',
  'digital data': '數碼數據',
  'lossless': '無損',
  'lossy': '有損',
  'unicode': '統一碼',
  'pivot tables': '樞紐分析表',
  'pivot table': '樞紐分析表',
  'what-if': '模擬運算',
  'primary key': '主鍵',
  'foreign key': '外鍵',
  'candidate keys': '候選鍵',
  'referential integrity': '參照完整性',
  'entity integrity': '實體完整性',
  'normalisation': '正規化',
  'normalization': '正規化',
  'denormalisation': '反正規化',
  'data redundancy': '數據冗餘',
  'decomposition': '問題分解',
  'abstraction': '抽象化',
  'algorithm': '算法',
  'iteration': '迭代',
  'selection': '選擇',
  'sequence': '順序',
  'modularity': '模組化',
  'syntax': '語法',
  'run-time errors': '執行時期錯誤',
  'runtime': '執行時期',
  'logic errors': '邏輯錯誤',
  'logical': '邏輯',
  'encryption': '加密',
  'authentication': '身份核實',
  'authorisation': '授權',
  'authorization': '授權',
  'phishing': '網絡釣魚',
  'ransomware': '勒索軟件',
  'malware': '惡意軟件',
  'firewall': '防火牆',
  'protocol': '協議',
  'bandwidth': '頻寬',
  'packet switching': '封包交換',
  'ergonomic': '人體工學',
  'ergonomics': '人體工學',
  'digital divide': '數碼隔閡',
  'cyberbullying': '網絡欺凌',
  'intellectual property': '知識產權',
  'copyright': '版權',
  'plagiarism': '抄襲',
  'stakeholder': '持份者',
  'cardinality': '基數',
  'sub-queries': '子查詢',
  'subquery': '子查詢',
  'truncation': '截斷',
  'rounding': '捨入',
  'breakpoint': '斷點',
  'nested loops': '巢狀迴圈',
  'nested control': '巢狀控制',
  'parameter passing': '參數傳遞',
  'event handlers': '事件處理常式',
  'event-driven': '事件驅動',
  'accelerometer': '加速度計',
  'speech recognition': '語音辨識',
  'integrity': '完整性',
  'constraints': '約束',
  'domain': '域',
  'attribute': '屬性',
  'entity': '實體',
  'pseudocode': '偽代碼',
  'flowchart': '流程圖',
  'boolean': '布爾',
  'precedence': '優先次序',
  'virtualisation': '虛擬化',
  'virtualization': '虛擬化',
  'firmware': '韌體',
  'volatile': '揮發性',
  'non-volatile': '非揮發性'
};

function stripChapterCode(text) {
  return String(text || '').replace(/^(EA|EC|[A-E])\d+\s+/, '').trim();
}

function getChapterStudyMeta(topicId) {
  return chapterStudyMeta[topicId] || null;
}

function getStrandStudyMeta(groupName) {
  return strandStudyMeta[groupName] || {
    kicker: groupName || 'HKDSE ICT',
    titleEn: groupName || 'ICT',
    titleZh: '',
    icon: 'ICT'
  };
}

function getKeywordChinese(term) {
  if (!term) return '';
  if (keywordChinese[term]) return keywordChinese[term];
  const lower = String(term).toLowerCase();
  const exact = Object.keys(keywordChinese).find(key => key.toLowerCase() === lower);
  if (exact) return keywordChinese[exact];
  return studyGlossary[lower] || '';
}

function matchStudyCommand(text) {
  const raw = String(text || '').trim();
  const ranked = studyCommandWords.slice().sort((a, b) => b[0].length - a[0].length);
  for (const [en, zh] of ranked) {
    if (raw.toLowerCase().startsWith(en.toLowerCase())) {
      return {
        en,
        zh,
        rest: raw.slice(en.length).replace(/^[\s,:]+/, '')
      };
    }
  }
  return null;
}

function studyGlossaryEntries() {
  return Object.entries(studyGlossary)
    .map(([term, zh]) => ({ term, zh }))
    .sort((a, b) => b.term.length - a.term.length);
}

function displayChapterTitle(topicId, fallbackTitle) {
  const meta = getChapterStudyMeta(topicId);
  return meta?.titleEn || stripChapterCode(fallbackTitle || topicId);
}

function displayChapterTitleZh(topicId) {
  return getChapterStudyMeta(topicId)?.titleZh || '';
}
