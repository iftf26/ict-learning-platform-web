const demos = {
  sequence: {
    group: 'Core D programming',
    title: 'Sequence and assignment',
    description: 'Follow statements in order and observe how assignment updates variables.',
    arrayLabel: 'Input values',
    meanings: { price: 'Unit price', qty: 'Quantity bought', subtotal: 'Before discount', discount: 'Discount amount', total: 'Final amount' },
    makeCase: makeSequenceCase
  },
  selection: {
    group: 'Core D programming',
    title: 'Selection',
    description: 'Use IF, ELSE IF and ELSE to choose one branch according to conditions.',
    arrayLabel: 'Test mark',
    meanings: { mark: 'Input mark', grade: 'Assigned grade', result: 'Pass or fail result' },
    makeCase: makeSelectionCase
  },
  whileValidation: {
    group: 'Core D programming',
    title: 'While loop and validation',
    description: 'Repeat input while the value is outside the valid range.',
    arrayLabel: 'Entered scores',
    meanings: { score: 'Current input', attempt: 'Number of inputs read', valid: 'Whether input is accepted' },
    makeCase: makeWhileValidationCase
  },
  booleanSelection: {
    group: 'Core D programming',
    title: 'Boolean selection',
    description: 'Evaluate AND, OR and NOT expressions before choosing an IF branch.',
    arrayLabel: 'Test values',
    meanings: { A: 'First value', B: 'Second value', C: 'Third value', condition: 'Result of Boolean expression', action: 'Selected branch' },
    makeCase: makeBooleanSelectionCase
  },
  forAccumulator: {
    group: 'Core D programming',
    title: 'Counting and accumulation',
    description: 'Use counters and accumulators to process a list of values.',
    arrayLabel: 'Array mark',
    meanings: { total: 'Accumulated sum', count: 'Number of marks processed', i: 'Current array index', average: 'Mean mark' },
    makeCase: makeForAccumulatorCase
  },
  sumAverage: {
    group: 'Core D programming',
    title: 'Sum and average',
    description: 'Add all array values, divide by the number of items and output the average.',
    arrayLabel: 'Array mark',
    meanings: { sum: 'Running total of all values', n: 'Length of the array', i: 'Current array index', average: 'Mean value' },
    makeCase: makeSumAverageCase
  },
  linearSearch: {
    group: 'Core D programming',
    title: 'Linear search',
    description: 'Search for a target value in an array by checking items one by one.',
    arrayLabel: 'Array ID',
    meanings: { target: 'Value to be searched', found: 'Whether target is found', n: 'Length of the array', i: 'Current array index' },
    makeCase: makeLinearSearchCase
  },
  subprogram: {
    group: 'Elective C programming',
    title: 'Elective C — Sub-programs',
    description: 'Trace a function call, parameters, return value and assignment of the returned result. This is Elective C content, not Core D.',
    arrayLabel: 'Parameters',
    meanings: { base: 'Argument passed to fee', copies: 'Argument passed to fee', charge: 'Return value inside function', amount: 'Value returned to main program' },
    makeCase: makeSubprogramCase
  },
  findMax: {
    group: 'Core D programming',
    title: '1D array processing',
    description: 'Scan a one-dimensional array and keep the largest value found so far.',
    arrayLabel: 'Array mark',
    meanings: { max: 'Largest value found so far', n: 'Length of the array', i: 'Current array index' },
    makeCase: makeFindMaxCase
  },
  findMin: {
    group: 'Core D programming',
    title: 'Finding minimum value',
    description: 'Scan a one-dimensional array and keep the smallest value found so far.',
    arrayLabel: 'Array mark',
    meanings: { min: 'Smallest value found so far', n: 'Length of the array', i: 'Current array index' },
    makeCase: makeFindMinCase
  },
  nestedLoop: {
    group: 'Elective C programming',
    title: 'Nested-loop',
    description: 'Use an outer loop and an inner loop to repeat a block systematically.',
    arrayLabel: 'Generated pairs',
    meanings: { row: 'Current outer-loop value', col: 'Current inner-loop value', count: 'Number of pairs generated', pair: 'Current row-column pair' },
    makeCase: makeNestedLoopCase
  },
  twoDArray: {
    group: 'Elective C programming',
    title: '2D arrays',
    description: 'Use nested loops to process rows and columns in a two-dimensional array.',
    arrayLabel: 'score[row, col]',
    meanings: { row: 'Current row', col: 'Current column', total: 'Accumulated row total', bestRow: 'Row with the highest total', bestTotal: 'Highest row total so far' },
    makeCase: makeTwoDArrayCase
  },
  twoDCount: {
    group: 'Elective C programming',
    title: '2D array counting',
    description: 'Scan a grid with nested loops and count how many cells meet a condition.',
    arrayLabel: 'grid[row, col]',
    meanings: { row: 'Current row', col: 'Current column', target: 'Threshold value', count: 'Number of matching cells' },
    makeCase: makeTwoDCountCase
  },
  binarySearch: {
    group: 'Elective C programming',
    title: 'Binary search',
    description: 'Search sorted data by repeatedly narrowing the search range.',
    arrayLabel: 'Sorted array A',
    meanings: { target: 'Value to be searched', low: 'Lower search boundary', high: 'Upper search boundary', mid: 'Middle position', found: 'Whether target is found' },
    makeCase: makeBinarySearchCase
  },
  bubblePass: {
    group: 'Elective C programming',
    title: 'Bubble sort',
    description: 'Compare adjacent items and swap them when they are in the wrong order.',
    arrayLabel: 'Array num',
    meanings: { pass: 'Current pass number', j: 'Current left index', swapped: 'Whether a swap has occurred' },
    makeCase: makeBubblePassCase
  },
  mergeLists: {
    group: 'Elective C programming',
    title: 'Merging sorted lists',
    description: 'Merge two sorted arrays into one sorted output array.',
    arrayLabel: 'Merged output C',
    meanings: { i: 'Current index in A', j: 'Current index in B', k: 'Next position in C', C: 'Merged list so far' },
    makeCase: makeMergeListsCase
  },
  stackOps: {
    group: 'Elective C programming',
    title: 'Stack',
    description: 'Trace PUSH and POP operations using the LIFO principle.',
    arrayLabel: 'Stack items',
    meanings: { top: 'Index of the top item', item: 'Item being pushed or popped', output: 'Last popped item' },
    makeCase: makeStackCase
  },
  queueOps: {
    group: 'Elective C programming',
    title: 'Queue and circular queue',
    description: 'Trace enqueue and dequeue using front and rear pointers in a circular array.',
    arrayLabel: 'Circular queue',
    meanings: { front: 'Position of first item', rear: 'Position of last item', count: 'Number of stored items', output: 'Dequeued item' },
    makeCase: makeQueueCase
  },
  linkedList: {
    group: 'Elective C programming',
    title: 'Linked list traversal',
    description: 'Follow next pointers to visit linked-list nodes in order.',
    arrayLabel: 'Node table',
    meanings: { ptr: 'Current node pointer', value: 'Current node value', next: 'Pointer to the next node', count: 'Visited node count' },
    makeCase: makeLinkedListCase
  },
  textFile: {
    group: 'Elective C programming',
    title: 'Text file handling',
    description: 'Read a text file line by line and process records using selection and accumulation.',
    arrayLabel: 'File lines',
    meanings: { line: 'Current text line', score: 'Score extracted from line', count: 'Number of valid records', total: 'Accumulated valid scores' },
    makeCase: makeTextFileCase
  }
};

let currentDemoKey = 'sequence';
let currentCase = null;
let stepIndex = -1;
let autoTimer = null;
let currentExercise = null;
let exerciseStreak = 0;
let exerciseXp = 0;
let topicPracticeItems = [];
let topicPracticeScore = { xp: 0, streak: 0, completed: 0 };
let currentArcadeKey = null;
let arcadeScore = { xp: 0, streak: 0, completed: 0 };
let arcadeRuntime = {};

const demoSelect = document.getElementById('demoSelect');
const demoTitle = document.getElementById('demoTitle');
const demoDescription = document.getElementById('demoDescription');
const codeLines = document.getElementById('codeLines');
const arrayCells = document.getElementById('arrayCells');
const arrayLabel = document.getElementById('arrayLabel');
const variableRows = document.getElementById('variableRows');
const outputValue = document.getElementById('outputValue');
const statusBadge = document.getElementById('statusBadge');
const predictionQuestion = document.getElementById('predictionQuestion');
const predictionOptions = document.getElementById('predictionOptions');
const predictionFeedback = document.getElementById('predictionFeedback');
const noticeBox = document.getElementById('noticeBox');
const exerciseStem = document.getElementById('exerciseStem');
const exerciseOptions = document.getElementById('exerciseOptions');
const exerciseAnswerArea = document.getElementById('exerciseAnswerArea');
const exerciseFeedback = document.getElementById('exerciseFeedback');
const exerciseCard = document.getElementById('exerciseCard');
const exerciseTopicLabel = document.getElementById('exerciseTopicLabel');
const exerciseDifficultyLabel = document.getElementById('exerciseDifficultyLabel');
const exerciseXpLabel = document.getElementById('exerciseXpLabel');
const exerciseStreakLabel = document.getElementById('exerciseStreakLabel');
const hintBtn = document.getElementById('hintBtn');
const solutionBtn = document.getElementById('solutionBtn');
const exerciseHint = document.getElementById('exerciseHint');
const exerciseSolution = document.getElementById('exerciseSolution');
const appShell = document.getElementById('appShell');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarHideBtn = document.getElementById('sidebarHideBtn');
const topicPage = document.getElementById('topicPage');
const topicGroupLabel = document.getElementById('topicGroupLabel');
const topicPageTitle = document.getElementById('topicPageTitle');
const topicPageDescription = document.getElementById('topicPageDescription');
const topicStatGrid = document.getElementById('topicStatGrid');
const topicCardGrid = document.getElementById('topicCardGrid');
const topicKeypointGrid = document.getElementById('topicKeypointGrid');
const topicMisconceptionGrid = document.getElementById('topicMisconceptionGrid');
const topicFormulaPanel = document.getElementById('topicFormulaPanel');
const topicSimulationPanel = document.getElementById('topicSimulationPanel');
const topicActivityPanel = document.getElementById('topicActivityPanel');
const topicExamGrid = document.getElementById('topicExamGrid');
const topicPracticePanel = document.getElementById('topicPracticePanel');
const topicSteps = document.getElementById('topicSteps');
const dashboardPage = document.getElementById('dashboardPage');
const arcadePage = document.getElementById('arcadePage');
const arcadeGroupLabel = document.getElementById('arcadeGroupLabel');
const arcadeTitle = document.getElementById('arcadeTitle');
const arcadeDescription = document.getElementById('arcadeDescription');
const arcadeXp = document.getElementById('arcadeXp');
const arcadeStreak = document.getElementById('arcadeStreak');
const arcadeDone = document.getElementById('arcadeDone');
const arcadeVisualGrid = document.getElementById('arcadeVisualGrid');
const arcadeMissionGrid = document.getElementById('arcadeMissionGrid');
const storyTitle = document.getElementById('storyTitle');
const storyText = document.getElementById('storyText');
const flowSteps = document.getElementById('flowSteps');
const followUpBox = document.getElementById('followUpBox');
const programmingSections = [...document.querySelectorAll('.hero-card, .mode-panel, .program-storyboard, .lab-grid, .exercise-section')];


const topicDemoMap = {
  'D2 Algorithm Design I - Sequence and Selection': ['sequence', 'selection', 'booleanSelection'],
  'D3 Algorithm Design II - Iteration and Arrays': ['whileValidation', 'forAccumulator', 'sumAverage', 'linearSearch', 'findMax', 'findMin'],
  'D4 Introduction to Python Programming': ['sequence', 'selection', 'whileValidation'],
  'D5 Integrated Problem-solving in Python': ['sumAverage', 'linearSearch', 'findMax', 'findMin'],
  'D6 Program Testing and Debugging': ['whileValidation', 'linearSearch'],
  'EC1 Algorithm Design and Python Basics': ['sequence', 'selection', 'booleanSelection'],
  'EC2 Program Testing and Debugging II': ['whileValidation', 'linearSearch'],
  'EC3 Advanced Control Structures': ['nestedLoop', 'twoDArray', 'twoDCount'],
  'EC4 Sub-programs': ['subprogram'],
  'EC5 Data Structures': ['stackOps', 'queueOps', 'linkedList'],
  'EC6 Searching and Sorting': ['linearSearch', 'binarySearch', 'bubblePass', 'mergeLists'],
  'EC7 Handling of Text Files': ['textFile'],
  'EC8 Applications of Programming in Real Life': ['whileValidation', 'textFile']
};

let topicSimState = { demoKey: null, currentCase: null, stepIndex: -1, timer: null };
let a2DetectiveState = { caseIndex: 0, solved: new Set(), feedback: null, answered: false };
let a2FormLabState = { mode: 'guided', fieldIndex: 0, selections: {}, checked: false, controlOptions: [], validationOptions: [] };
let a2ParityState = { mode: 'build', parityMode: 'even', bits: [], receivedBits: [], selectedBit: null, feedback: null, streak: 0, completed: 0, score: 0, timeLeft: 60, timerActive: false, timer: null };
let a2DetailsState = { validationGroup: 'Right kind?', supportOpen: false };
let a3DetailsState = { formatCategory: 'Image' };
let a3QuantizationState = { sampleRate: 7, bitDepth: 4 };
let a3BitmapState = {
  width: 12,
  height: 8,
  bitsPerChannel: 2,
  selectedPixel: 0,
  originalColour: { r: 218, g: 92, b: 146 },
  displayMode: 'comparison'
};
let a3TwosComplementState = {
  bits: [0, 0, 0, 0, 0, 0, 0, 0],
  mode: 'interpret',
  inputValue: 0,
  addendA: 64,
  addendB: 64,
  animationStep: 0,
  animationTimer: null,
  feedback: null
};
let a3UtfState = { text: 'A香🙂' };
let d3ListState = { items: [10, 20, 30, 40, 50], activeIndex: null, log: 'Create the default list, then try access, modify, append, insert and remove.' };
let a5DetailsState = { toolbox: 'Advanced operators' };
let a4DetailsState = { toolsOpen: false, functionCategory: 'Calculate' };
let c2DetailsState = { story: 'web', step: 0, playing: false };
let c2StoryAutoplayTimer = null;
let a4FormulaRescueState = {
  missionIndex: 0,
  formula: '',
  feedback: null,
  completed: new Set(),
  copied: false,
  animation: 'idle',
  activeRef: 'B2',
  lockColumn: false,
  lockRow: false
};

const a5DataTypes = [
  ['Text', 'Hello World!', 'Names, item descriptions, phone numbers and IDs when arithmetic is not needed.'],
  ['Number', '3 or 3.1416', 'Values used in calculations, comparison or statistics.'],
  ['Date/Time', '24/1/2015', 'Dates or times that may be sorted, filtered or used in date calculations.'],
  ['Currency', '$3.14', 'Money values with currency display and decimal precision.'],
  ['AutoNumber', '1', 'Automatically generated unique values, often useful for record identifiers.'],
  ['Yes/No', 'Yes / No', 'Boolean values such as paid, submitted or active.']
];

const a5InputMasks = [
  ['Phone number', '0000-0000', '3203-4930'],
  ['Student ID', '000000', '034930'],
  ['Class', '0>L', '4A, 5B'],
  ['Sex', '>L', 'M, F'],
  ['Quantity', '999999', '135, 86420'],
  ['Month', '>L<LL', 'Apr, Jan']
];

const a5ToolboxGroups = [
  {
    name: 'Advanced operators',
    items: [
      ['AND', 'Returns TRUE only when all connected conditions are TRUE.'],
      ['OR', 'Returns TRUE when at least one connected condition is TRUE.'],
      ['NOT', 'Reverses TRUE and FALSE.'],
      ['IN', 'Specifies more than one possible value.'],
      ['BETWEEN ... AND', 'Selects values within a specific range.'],
      ['LIKE', 'Selects text strings that follow a pattern.'],
      ['%', 'Represents any number of characters in a LIKE pattern.'],
      ['_', 'Represents exactly one character in a LIKE pattern.'],
      ['IS NULL', 'Selects records where a value is missing.'],
      ['IS NOT NULL', 'Selects records where a value is present.']
    ]
  },
  {
    name: 'Mathematical functions',
    items: [
      ['INT()', 'Rounds a number down to the nearest integer.'],
      ['ABS()', 'Returns the absolute value of a number.'],
      ['LEN() / CHAR_LENGTH()', 'Counts the number of characters.'],
      ['MID() / SUBSTRING() / SUBSTR()', 'Returns characters from the middle of text, starting at a specific position.'],
      ['LOWER()', 'Converts text to lowercase letters.'],
      ['UPPER()', 'Converts text to uppercase letters.'],
      ['TRIM()', 'Removes spaces from the beginning and end of text.'],
      ['SPACE()', 'Returns a text string containing a specific number of spaces.']
    ]
  },
  {
    name: 'Statistical functions',
    items: [
      ['MAX()', 'Returns the largest value of a field among selected records.'],
      ['MIN()', 'Returns the smallest value of a field among selected records.'],
      ['COUNT()', 'Counts the number of selected records or values.'],
      ['SUM()', 'Returns the sum of a field calculated from selected records.'],
      ['AVG()', 'Returns the average value of a field calculated from selected records.']
    ]
  },
  {
    name: 'Basic operators',
    items: [
      ['+', 'Plus / addition'],
      ['-', 'Minus / subtraction'],
      ['*', 'Times / multiplication'],
      ['/', 'Divided by / division'],
      ['=', 'Equal to'],
      ['<>', 'Not equal to'],
      ['<', 'Less than'],
      ['>', 'Greater than'],
      ['<=', 'Less than or equal to'],
      ['>=', 'Greater than or equal to']
    ]
  }
];

const b1DeviceGroups = [
  {
    name: 'Pointing devices',
    note: 'Choose by how the user controls the pointer.',
    items: [
      ['Motion-tracking', 'Computer mouse, trackball, joystick and racing wheel track the motion of the device.'],
      ['Position-tracking', 'Touchpad, touchscreen and graphics tablet track where the user points.']
    ]
  },
  {
    name: 'Media input',
    note: 'Used for creating digital media files.',
    items: [
      ['Image input', 'Image scanner and digital camera create digital image files.'],
      ['Video input', 'Digital video camera and webcam create digital video files.'],
      ['Audio input', 'Microphone and MIDI keyboard create digital audio or music data.']
    ]
  },
  {
    name: 'Automatic input',
    note: 'Input data with minimal human effort and fewer manual errors.',
    items: [
      ['Barcode / QR reader', 'Reads encoded product, ticket or link data.'],
      ['OMR', 'Reads shaded marks on prepared forms, such as answer sheets.'],
      ['OCR', 'Converts printed characters into editable digital text.'],
      ['Sensors', 'Measure physical conditions such as temperature, humidity, light or distance.']
    ]
  },
  {
    name: 'Output devices',
    note: 'Responsible for the final output stage of the IPO cycle.',
    items: [
      ['Monitor', 'Displays soft copy output. LCD is usually cheaper; OLED has higher contrast and wider viewing angle.'],
      ['Printer', 'Produces hard copy output. Examples include thermal, inkjet, laser, plotter and 3D printer.'],
      ['Projector', 'Projects images onto a surface for lessons, meetings or screenings.'],
      ['Speakers / headphones', 'Output sound through a sound card; some headphones also include microphones.']
    ]
  }
];

const b1ConnectionRows = [
  ['Input wired', 'Wired mouse, wired keyboard', 'USB port'],
  ['Input wireless', 'Wireless mouse, wireless keyboard', 'RF 2.4 GHz, Bluetooth, Wi-Fi'],
  ['Output wired', 'Wired speakers, wired earphones', 'USB port or 3.5 mm connector'],
  ['Output wireless', 'Wireless speakers, wireless earphones', 'RF 2.4 GHz, Bluetooth, Wi-Fi']
];

const b1MonitorPorts = [
  ['VGA', 'No audio', 'Low resolution'],
  ['DVI', 'No audio', 'Medium resolution'],
  ['HDMI', 'Supports audio', 'High resolution'],
  ['DisplayPort', 'Supports audio', 'High resolution']
];

const b1Applications = [
  ['Business use', 'Video conferencing, cashier service, electronic payment system and self-service terminal.'],
  ['Educational use', 'Online lesson, library circulation and museum exhibition.']
];

const b2Components = [
  ['Motherboard', 'Connects all computer components together.'],
  ['Processor / CPU', 'Processes data and instructions and controls computer operation.'],
  ['Main memory / primary storage', 'RAM stores data temporarily; ROM stores firmware needed to start the computer.'],
  ['Secondary storage', 'Stores data for future use, such as hard disk, SSD, optical disk and magnetic tape.'],
  ['Power supply unit', 'Provides power to the computer for operation.']
];

const b2PcHotspots = [
  {
    key: 'psu',
    name: 'Power supply unit',
    label: 'PSU',
    purpose: 'Converts electricity from the mains and supplies suitable power to internal computer components.',
    dse: 'DSE wording: provides power for the operation of the computer.',
    style: '--x:13%; --y:16%; --w:25%; --h:18%;'
  },
  {
    key: 'motherboard',
    name: 'Motherboard',
    label: 'Board',
    purpose: 'The main circuit board that connects the CPU, memory, storage devices, expansion cards and ports.',
    dse: 'DSE wording: serves as a platform to connect all components together.',
    style: '--x:25%; --y:30%; --w:44%; --h:54%;'
  },
  {
    key: 'cpu',
    name: 'Processor / CPU',
    label: 'CPU',
    purpose: 'Processes instructions and data. It contains units such as CU and ALU for controlling and executing operations.',
    dse: 'DSE wording: processes data and instructions and controls the operation of the computer system.',
    style: '--x:39%; --y:40%; --w:13%; --h:13%;'
  },
  {
    key: 'ram',
    name: 'Main memory / RAM',
    label: 'RAM',
    purpose: 'Temporarily stores programs and data currently being used by the CPU. Its content is lost when power is off.',
    dse: 'DSE wording: RAM is volatile and stores data temporarily for processing.',
    style: '--x:55%; --y:34%; --w:8%; --h:36%;'
  },
  {
    key: 'gpu',
    name: 'Graphics card',
    label: 'GPU',
    purpose: 'Processes graphics and outputs images to the monitor. Useful for CAD, video editing and gaming.',
    dse: 'DSE wording: a graphics card has higher graphics processing power than an iGPU.',
    style: '--x:32%; --y:63%; --w:33%; --h:10%;'
  },
  {
    key: 'storage',
    name: 'Secondary storage',
    label: 'Drive',
    purpose: 'Stores data and programs for future use, even when the computer is switched off.',
    dse: 'DSE wording: secondary storage is non-volatile storage for future use.',
    style: '--x:72%; --y:21%; --w:18%; --h:19%;'
  },
  {
    key: 'optical',
    name: 'Optical disc drive',
    label: 'ODD',
    purpose: 'Reads or writes optical discs. It is a secondary storage device, though less common in modern PCs.',
    dse: 'DSE wording: optical disk uses optical storage media and supports direct access.',
    style: '--x:73%; --y:48%; --w:19%; --h:12%;'
  },
  {
    key: 'fan',
    name: 'Cooling fan / heat sink',
    label: 'Fan',
    purpose: 'Removes heat from the CPU and system unit so components can operate reliably.',
    dse: 'DSE wording: cooling supports stable operation; do not confuse it with processing or storage.',
    style: '--x:38%; --y:39%; --w:15%; --h:15%;'
  }
];

const b2BusRows = [
  ['Control bus', 'Control signal', 'One-way'],
  ['Address bus', 'Memory address', 'One-way'],
  ['Data bus', 'Data or instruction', 'Two-way']
];

const b2StorageRows = [
  ['Magnetic tape', 'Magnetic', 'Very large', 'Low', 'Sequential access', 'Unstable and lowest', 'Prone to damage in humid environment'],
  ['Hard disk', 'Magnetic', 'Large', 'Low', 'Direct access', 'Medium', 'Prone to damage on impact'],
  ['SSD', 'Flash memory', 'Medium', 'High', 'Direct access', 'High', 'Durable'],
  ['Optical disk', 'Optical', 'Small', 'Low to medium', 'Direct access', 'Medium', 'Prone to damage when scratched']
];

const b2MemoryLevels = ['Register', 'Cache memory', 'RAM', 'SSD', 'Hard disk', 'Magnetic tape'];

const b3OsFunctions = ['Process management', 'Memory management', 'Peripheral device management', 'File system management', 'Disk management', 'User interface', 'User management', 'Multitasking'];

const b3UtilityPrograms = ['File manager', 'System monitor', 'Virus checker', 'Firewall software', 'Data compressor', 'Defragmentation software', 'Backup software', 'Uninstaller'];

const b3ProcessingModes = [
  ['Batch processing', 'Collects data without immediately processing it; data is processed as a batch at regular intervals.'],
  ['Real-time processing', 'Processes data as soon as it is received, giving immediate up-to-date responses.'],
  ['Parallel processing', 'Uses multiple processors and may share memory among them.'],
  ['Distributed processing', 'Uses a high-speed network and multiple computers; software manages their interaction.'],
  ['Virtualisation', 'Divides computer hardware into multiple virtual portions with the help of utility programs.']
];

const c1LanWanRows = [
  ['Coverage', 'Small', 'Large'],
  ['Setup cost', 'Low', 'High'],
  ['Data transfer rate', 'High', 'Low']
];

const c1DeviceRoles = [
  ['NIC', 'Allows a device to communicate on a network. Each NIC has a 48-bit MAC address assigned by the manufacturer.'],
  ['Switch', 'Connects devices to form a LAN and forwards data to destination devices based on MAC address.'],
  ['Access point', 'Connects to a wired LAN and provides wireless connection. SSID identifies the AP; encryption may require a password.'],
  ['Router', 'Connects LANs with each other or connects a LAN to a WAN. It forwards data based on IP address.'],
  ['Modem', 'Converts between analogue signals from the Internet line and digital signals from computers.'],
  ['ISP', 'Provides services for accessing the Internet.']
];

const c1CableRows = [
  ['UTP cable', 'Lower cost; easier to install.', 'Short distance, usually less than 100 m; affected by EMI.'],
  ['STP cable', 'Faster than UTP; less affected by EMI.', 'Higher cost than UTP; short distance, usually less than 100 m.'],
  ['Fibre optic cable', 'Fastest; not affected by EMI; less distance restriction; thin and light.', 'Highest cost; hard to install; vulnerable to mechanical damage.']
];

const c1AccessRows = [
  ['Broadband', 'Wired', 'High', 'Moderate', 'High security', 'High availability'],
  ['Leased line', 'Wired', 'Highest', 'Highest', 'Highest security', 'Moderate availability'],
  ['Mobile data', 'Wireless', 'High, especially 5G', 'High for 5G', 'High security', 'High availability'],
  ['Wi-Fi hotspot', 'Wireless', 'Moderate', 'Low', 'Lowest security', 'Low availability']
];

const c2TcpSteps = [
  ['Data division', 'Data is divided into packets and each packet is numbered.'],
  ['Use of IP address', 'Source and destination IP addresses are added to each packet.'],
  ['Routing', 'Routers select a path, or an alternative path, to avoid congestion.'],
  ['Reassembly', 'Packets are reassembled when they arrive at the destination.']
];

const c2HttpRows = [
  ['URL begins with', 'http://', 'https://'],
  ['Default port', '80', '443'],
  ['Encryption', 'No', 'Yes'],
  ['Security', 'Unsecure', 'Secure']
];

const c2PopImapRows = [
  ['Storage', 'Emails are downloaded to the local computer.', 'Emails are kept on the server.'],
  ['Organisation', 'Emails cannot be organised on the server after download.', 'Email folders and changes synchronise across devices.'],
  ['Offline reading', 'Possible after emails are downloaded.', 'Internet connection is needed to access server copies.']
];

const c2ProtocolStories = [
  {
    key: 'web',
    title: 'Browsing a secure website',
    short: 'DNS + HTTPS',
    situation: 'A student opens https://www.example.hk/about/network.html in a browser.',
    steps: [
      ['Browser', 'Reads URL', 'The browser separates the protocol, domain name, port and path.'],
      ['DNS server', 'Name resolution', 'DNS translates www.example.hk into the web server IP address.'],
      ['Browser + server', 'SSL/TLS handshake', 'The server presents a digital certificate and both sides agree an encryption key.'],
      ['Browser', 'HTTPS request', 'The browser sends an encrypted HTTPS request for /about/network.html.'],
      ['Web server', 'HTTPS response', 'The server returns the encrypted webpage, then the browser decrypts and displays it.']
    ],
    dse: 'DSE wording: DNS finds the IP address; HTTPS uses SSL/TLS to provide encrypted and secure web communication.'
  },
  {
    key: 'ftp',
    title: 'Uploading a website file',
    short: 'FTP',
    situation: 'A web author uploads network.html from a local computer to a web server.',
    steps: [
      ['Client', 'Connects to server', 'The FTP client connects to the file server using the server address and login details.'],
      ['FTP server', 'Checks account', 'The server checks whether the user has permission to access the folder.'],
      ['Client', 'Transfers file', 'The client uploads or downloads files using FTP commands.'],
      ['Server', 'Stores file', 'The server stores the uploaded file in the selected directory.'],
      ['Browser', 'May request later', 'When someone visits the webpage later, HTTP/HTTPS is used to retrieve it.']
    ],
    dse: 'DSE wording: FTP is for file transfer, not for displaying webpages. HTTP/HTTPS is for transferring web pages.'
  },
  {
    key: 'email',
    title: 'Sending and reading email',
    short: 'SMTP + IMAP',
    situation: 'A student sends homework by email and later reads replies on a phone and computer.',
    steps: [
      ['Mail client', 'Composes email', 'The user writes the email and presses Send.'],
      ['SMTP', 'Sends message', 'SMTP sends the email from the sender client to the sender mail server and then to the receiver mail server.'],
      ['Receiver server', 'Stores message', 'The email is stored in the receiver mailbox on the server.'],
      ['IMAP', 'Accesses message', 'IMAP lets the phone and computer view the same server mailbox.'],
      ['Devices', 'Synchronise changes', 'Read/unread state and folders are synchronised across devices.']
    ],
    dse: 'DSE wording: SMTP sends email. IMAP keeps email on the server and synchronises across devices; POP3 usually downloads email to a local computer.'
  }
];

const c2ProtocolScenes = {
  web: {
    tokenName: 'Encrypted web data',
    nodes: [
      { key: 'browser', label: 'Browser', role: 'student device', x: '12%', y: '54%', color: '#2458e6' },
      { key: 'dns', label: 'DNS server', role: 'name resolution', x: '42%', y: '20%', color: '#0f766e' },
      { key: 'webserver', label: 'Web server', role: 'webpage host', x: '76%', y: '54%', color: '#be123c' }
    ],
    routes: [
      { from: 'browser', to: 'browser', badge: 'URL parsing', token: 'URL', colour: '#2458e6' },
      { from: 'browser', to: 'dns', badge: 'DNS query', token: 'www.example.hk?', colour: '#0f766e' },
      { from: 'browser', to: 'webserver', badge: 'SSL/TLS handshake', token: 'certificate + key', colour: '#7c3aed' },
      { from: 'browser', to: 'webserver', badge: 'HTTPS request', token: 'GET /about/network.html', colour: '#be123c' },
      { from: 'webserver', to: 'browser', badge: 'HTTPS response', token: 'encrypted page', colour: '#2563eb' }
    ]
  },
  ftp: {
    tokenName: 'Website file',
    nodes: [
      { key: 'client', label: 'Local computer', role: 'FTP client', x: '12%', y: '55%', color: '#2458e6' },
      { key: 'login', label: 'FTP account', role: 'permission check', x: '44%', y: '23%', color: '#b45309' },
      { key: 'server', label: 'FTP server', role: 'file storage', x: '78%', y: '55%', color: '#0f766e' }
    ],
    routes: [
      { from: 'client', to: 'server', badge: 'Connect', token: 'server address + login', colour: '#2458e6' },
      { from: 'server', to: 'login', badge: 'Authentication', token: 'permission check', colour: '#b45309' },
      { from: 'client', to: 'server', badge: 'FTP transfer', token: 'network.html', colour: '#0f766e' },
      { from: 'server', to: 'server', badge: 'Store file', token: 'server folder', colour: '#16a34a' },
      { from: 'server', to: 'client', badge: 'Later retrieval', token: 'HTTP/HTTPS later', colour: '#7c3aed' }
    ]
  },
  email: {
    tokenName: 'Email message',
    nodes: [
      { key: 'sender', label: 'Sender', role: 'mail client', x: '10%', y: '58%', color: '#2458e6' },
      { key: 'smtp', label: 'SMTP server', role: 'send mail', x: '35%', y: '24%', color: '#be123c' },
      { key: 'imap', label: 'Receiver server', role: 'mailbox', x: '65%', y: '24%', color: '#0f766e' },
      { key: 'devices', label: 'Phone + laptop', role: 'IMAP access', x: '86%', y: '58%', color: '#b45309' }
    ],
    routes: [
      { from: 'sender', to: 'sender', badge: 'Compose', token: 'homework email', colour: '#2458e6' },
      { from: 'sender', to: 'smtp', badge: 'SMTP sends', token: 'outgoing email', colour: '#be123c' },
      { from: 'smtp', to: 'imap', badge: 'Server delivery', token: 'message copy', colour: '#0f766e' },
      { from: 'imap', to: 'devices', badge: 'IMAP access', token: 'server mailbox', colour: '#b45309' },
      { from: 'devices', to: 'imap', badge: 'Synchronise', token: 'read/folder state', colour: '#7c3aed' }
    ]
  }
};

const c3EmailRows = [
  ['To', 'Original recipients.', 'Use for main recipients who need to take action or pay attention.'],
  ['Cc', 'Addresses appear in the received message header.', 'Use for recipients who only need a visible copy.'],
  ['Bcc', 'Addresses are hidden from other recipients.', 'Use bulk mail while protecting recipients personal data.']
];

const c3FileTransferRows = [
  ['Instant messaging', 'Often compresses images/videos automatically.', 'Small file size limit; usually end-to-end encrypted.'],
  ['Email', 'No strict file format restriction.', 'Small size limit; encryption depends on provider.'],
  ['Cloud storage', 'No strict file format restriction.', 'Large files; encrypted storage; permissions matter.'],
  ['Network drive over VPN', 'No strict file format restriction.', 'No limit if local storage is enough; usually no extra encryption.'],
  ['P2P file sharing', 'No strict file format restriction.', 'No limit if storage is enough; some apps support encryption.']
];

const c3SearchRows = [
  ['Exclude results', 'Put - before a keyword.', 'apple -fruit'],
  ['Combine keywords', 'Put OR between terms.', 'mandarin orange OR tangerine'],
  ['Exact match', 'Put a phrase inside quotation marks.', '"artificial intelligence"'],
  ['Specific website', 'Put site: before a domain.', 'site:gov.hk']
];

const c3VideoRows = [
  ['Number of listeners/viewers', 'Hundreds or relatively small', 'Unlimited or fairly large'],
  ['Streaming media', 'Real-time', 'Real-time or pre-recorded'],
  ['Communication', 'Two-way; more interaction', 'Mainly one-way; live comments may be enabled'],
  ['Privacy', 'Suitable for private events', 'Suitable for public events']
];

const a4FunctionCategories = [
  {
    name: 'Calculate',
    functions: [
      { name: 'SUM', purpose: 'Add values in a range.', syntax: '=SUM(range)', example: '=SUM(D2:D20)', trap: 'Do not use SUM when the task asks for an average.' },
      { name: 'AVERAGE', purpose: 'Find the mean of values.', syntax: '=AVERAGE(range)', example: '=AVERAGE(C2:C20)', trap: 'Blank cells and zero values are not the same.' },
      { name: 'MAX', purpose: 'Find the largest value.', syntax: '=MAX(range)', example: '=MAX(C2:C20)', trap: 'MAX returns the value, not the cell address.' },
      { name: 'MIN', purpose: 'Find the smallest value.', syntax: '=MIN(range)', example: '=MIN(C2:C20)', trap: 'MIN returns the value, not the record name.' },
      { name: 'ROUND', purpose: 'Round a number to a fixed number of decimal places.', syntax: '=ROUND(number, digits)', example: '=ROUND(B2,2)', trap: 'ROUND changes the calculated result; number format only changes display.' },
      { name: 'INT', purpose: 'Return the integer part by rounding down.', syntax: '=INT(number)', example: '=INT(7.9)', trap: 'INT is not the same as normal rounding.' },
      { name: 'SQRT', purpose: 'Find a square root.', syntax: '=SQRT(number)', example: '=SQRT(81)', trap: 'The input should not be negative in ordinary spreadsheet use.' }
    ]
  },
  {
    name: 'Decide',
    functions: [
      { name: 'IF', purpose: 'Return one result if a condition is true and another if false.', syntax: '=IF(condition, true_result, false_result)', example: '=IF(C2>=50,"Pass","Fail")', trap: 'Text outputs need quotation marks.' },
      { name: 'AND', purpose: 'Check whether all conditions are true.', syntax: '=AND(condition1, condition2)', example: '=AND(C2>=50,D2="Submitted")', trap: 'AND is false if any condition is false.' },
      { name: 'OR', purpose: 'Check whether at least one condition is true.', syntax: '=OR(condition1, condition2)', example: '=OR(C2>=90,D2="A")', trap: 'OR(TRUE,TRUE) returns TRUE.' },
      { name: 'NOT', purpose: 'Reverse a logical result.', syntax: '=NOT(logical_value)', example: '=NOT(C2<50)', trap: 'NOT changes TRUE to FALSE and FALSE to TRUE.' }
    ]
  },
  {
    name: 'Count or add by condition',
    functions: [
      { name: 'COUNT', purpose: 'Count numeric cells.', syntax: '=COUNT(range)', example: '=COUNT(C2:C20)', trap: 'COUNT ignores text cells.' },
      { name: 'COUNTIF', purpose: 'Count cells that meet one condition.', syntax: '=COUNTIF(range, criterion)', example: '=COUNTIF(C2:C20,">=50")', trap: 'The criterion needs quotation marks.' },
      { name: 'SUMIF', purpose: 'Add values that meet one condition.', syntax: '=SUMIF(range, criterion, sum_range)', example: '=SUMIF(B2:B20,"5A",C2:C20)', trap: 'SUMIF adds matching values; COUNTIF counts matching cells.' }
    ]
  },
  {
    name: 'Work with text',
    functions: [
      { name: 'LEFT', purpose: 'Extract characters from the left of text.', syntax: '=LEFT(text, num_chars)', example: '=LEFT(A2,3)', trap: 'LEFT starts from the first character.' },
      { name: 'RIGHT', purpose: 'Extract characters from the right of text.', syntax: '=RIGHT(text, num_chars)', example: '=RIGHT(A2,4)', trap: 'RIGHT starts from the end of the text.' },
      { name: 'MID', purpose: 'Extract characters from the middle of text.', syntax: '=MID(text, start, num_chars)', example: '=MID(A2,2,3)', trap: 'The start position is counted from 1.' },
      { name: 'LEN', purpose: 'Count the number of characters in text.', syntax: '=LEN(text)', example: '=LEN(A2)', trap: 'Spaces are counted as characters.' },
      { name: 'FIND', purpose: 'Find the position of text inside another text string.', syntax: '=FIND(find_text, within_text)', example: '=FIND("@",A2)', trap: 'FIND is case-sensitive.' }
    ]
  },
  {
    name: 'Find or rank data',
    functions: [
      { name: 'XLOOKUP', purpose: 'Look up a value and return a related result.', syntax: '=XLOOKUP(lookup_value, lookup_array, return_array)', example: '=XLOOKUP(E2,A2:A10,B2:B10)', trap: 'The lookup array and return array should align.' },
      { name: 'RANK', purpose: 'Find the rank of a value within a list.', syntax: '=RANK(number, ref)', example: '=RANK(C2,$C$2:$C$20)', trap: 'Lock the ranking range before copying.' },
      { name: 'RAND', purpose: 'Generate a random decimal between 0 and 1.', syntax: '=RAND()', example: '=RAND()', trap: 'RAND changes when the worksheet recalculates.' }
    ]
  }
];

const a4ReferenceCards = [
  { title: 'Relative reference', ref: 'B2', meaning: 'Nothing is locked.', copied: 'The row and column may both change.', columnLock: false, rowLock: false },
  { title: 'Absolute reference', ref: '$B$2', meaning: 'Both column B and row 2 are locked.', copied: 'The reference remains $B$2.', columnLock: true, rowLock: true },
  { title: 'Mixed reference - fixed column', ref: '$B2', meaning: 'Column B is locked.', copied: 'The row may change.', columnLock: true, rowLock: false },
  { title: 'Mixed reference - fixed row', ref: 'B$2', meaning: 'Row 2 is locked.', copied: 'The column may change.', columnLock: false, rowLock: true }
];

const a4FormulaMissions = [
  { title: 'Build subtotal', prompt: 'Calculate the subtotal in D2 using Price and Quantity.', target: '=B2*C2', cell: 'D2' },
  { title: 'Copy downward', prompt: 'Copy D2 to D3 and D4. Watch which references move.', target: '=B2*C2', cell: 'D2' },
  { title: 'Lock tax rate', prompt: 'Calculate tax in G2 using Final and the fixed tax rate in H2. The formula must copy downward correctly.', target: '=F2*$H$2', cell: 'G2' },
  { title: 'Mixed-reference grid', prompt: 'Build the grid formula so left-column values and top-row values stay aligned when copied.', target: '=$A2*B$1', cell: 'B2' },
  { title: 'Choose COUNTIF', prompt: 'Count how many students in C2:C20 scored 50 or above.', target: '=COUNTIF(C2:C20,">=50")', cell: 'E2' }
];

const a2DetectiveAnswers = [
  { key: 'validCorrect', label: 'Valid and correct' },
  { key: 'validWrong', label: 'Valid but wrong' },
  { key: 'invalidData', label: 'Invalid data' },
  { key: 'needsVerification', label: 'Needs verification' }
];

const a2DetectiveCases = [
  {
    id: 'date-correct',
    field: 'Date field',
    rule: 'Must be in DD/MM/YYYY format',
    details: [
      ['Data entered', '21/06/2026'],
      ['Intended / real-world value', '21/06/2026']
    ],
    result: 'Accepted',
    acceptedAnswers: ['validCorrect'],
    stamp: 'Accepted and likely correct',
    highlight: 'intended',
    teachingPoint: 'This is valid and likely correct. The date follows the format rule and matches the intended value shown in the case.'
  },
  {
    id: 'date',
    field: 'Date field',
    rule: 'Must be in DD/MM/YYYY format',
    details: [
      ['Data entered', '12/06/2026'],
      ['Intended / real-world value', '21/06/2026']
    ],
    result: 'Accepted',
    acceptedAnswers: ['validWrong'],
    stamp: 'Accepted but not necessarily true',
    highlight: 'intended',
    teachingPoint: 'This is valid but wrong. Format validation cannot know the user\'s intended date.'
  },
  {
    id: 'mark',
    field: 'Mark field',
    rule: '0 to 100 only',
    details: [
      ['Data entered', '105'],
      ['Intended / real-world value', '95']
    ],
    result: 'Rejected',
    acceptedAnswers: ['invalidData'],
    stamp: 'Rejected by rule',
    highlight: 'rule',
    teachingPoint: 'This is invalid. The entered value breaks the range rule.'
  },
  {
    id: 'mark-correct',
    field: 'Mark field',
    rule: '0 to 100 only',
    details: [
      ['Data entered', '95'],
      ['Intended / real-world value', '95']
    ],
    result: 'Accepted',
    acceptedAnswers: ['validCorrect'],
    stamp: 'Accepted and likely correct',
    highlight: 'intended',
    teachingPoint: 'This is valid and likely correct. The mark is within the allowed range and matches the intended value.'
  },
  {
    id: 'email',
    field: 'Email field',
    rule: 'Must contain @',
    details: [
      ['Data entered', 'student@'],
      ['Intended / real-world value', 'student@gmail.com']
    ],
    result: 'Accepted',
    acceptedAnswers: ['validWrong'],
    stamp: 'Accepted by a weak rule',
    highlight: 'rule',
    teachingPoint: 'This is valid but wrong under the stated weak rule. The exact validation rule matters.'
  },
  {
    id: 'email-verify',
    field: 'Email address for notices',
    rule: 'Must match a simple email pattern',
    details: [
      ['Data entered', 'student.parent@gmail.com'],
      ['Source document', 'Handwritten email on consent form is unclear']
    ],
    result: 'Accepted',
    acceptedAnswers: ['needsVerification'],
    stamp: 'Needs verification',
    highlight: 'intended',
    teachingPoint: 'This needs verification. The format may be valid, but the user should compare it with the original source or confirm with the student.'
  },
  {
    id: 'student-id',
    field: 'Student ID',
    rule: 'Exactly 6 characters',
    details: [
      ['Data entered', '123456'],
      ['Intended / real-world value', '123465']
    ],
    result: 'Accepted',
    acceptedAnswers: ['validWrong'],
    stamp: 'Accepted but not necessarily true',
    highlight: 'intended',
    teachingPoint: 'This is valid but wrong. A length check cannot detect a transposition error.'
  },
  {
    id: 'student-id-correct',
    field: 'Student ID',
    rule: 'Exactly 6 characters',
    details: [
      ['Data entered', '123465'],
      ['Intended / real-world value', '123465']
    ],
    result: 'Accepted',
    acceptedAnswers: ['validCorrect'],
    stamp: 'Accepted and likely correct',
    highlight: 'intended',
    teachingPoint: 'This is valid and likely correct. It has the required length and matches the intended student ID.'
  },
  {
    id: 'password',
    field: 'Password confirmation',
    rule: 'Two entries must match',
    details: [
      ['Entered first', 'Apple2026!'],
      ['Entered second', 'Apple2026!'],
      ['Intended / real-world value', 'Apple2025!']
    ],
    result: 'Accepted',
    acceptedAnswers: ['needsVerification', 'validWrong'],
    stamp: 'Needs verification',
    highlight: 'intended',
    teachingPoint: 'Careful: double entry checks consistency, but the user may enter the same wrong value twice.'
  },
  {
    id: 'address-verify',
    field: 'Home address',
    rule: 'Must not be left blank',
    details: [
      ['Data entered', 'Flat B, 12/F, Sun House'],
      ['Source document', 'Address copied from paper form']
    ],
    result: 'Accepted',
    acceptedAnswers: ['needsVerification'],
    stamp: 'Needs verification',
    highlight: 'intended',
    teachingPoint: 'This needs verification. A presence check only confirms something was entered; proofreading against the source is still needed.'
  },
  {
    id: 'class',
    field: 'Class field',
    rule: 'Must be one of 4A, 4B, 4C, 4D',
    details: [
      ['Data entered', '4E'],
      ['Intended / real-world value', '4B']
    ],
    result: 'Rejected',
    acceptedAnswers: ['invalidData'],
    stamp: 'Rejected by rule',
    highlight: 'rule',
    teachingPoint: 'This is invalid. A fixed value / lookup check rejects values outside the allowed list.'
  },
  {
    id: 'phone',
    field: 'Phone number',
    rule: 'Exactly 8 digits',
    details: [
      ['Data entered', '91234567'],
      ['Intended / real-world value', '91235467']
    ],
    result: 'Accepted',
    acceptedAnswers: ['validWrong'],
    stamp: 'Accepted but not necessarily true',
    highlight: 'intended',
    teachingPoint: 'This is valid but wrong. Length and type checks cannot detect swapped digits.'
  },
  {
    id: 'class-correct',
    field: 'Class field',
    rule: 'Must be one of 4A, 4B, 4C, 4D',
    details: [
      ['Data entered', '4B'],
      ['Intended / real-world value', '4B']
    ],
    result: 'Accepted',
    acceptedAnswers: ['validCorrect'],
    stamp: 'Accepted and likely correct',
    highlight: 'intended',
    teachingPoint: 'This is valid and likely correct. The class is in the allowed list and matches the intended value.'
  },
  {
    id: 'time',
    field: 'Appointment time',
    rule: 'End time must be after start time',
    details: [
      ['Start time', '15:00'],
      ['End time', '14:30']
    ],
    result: 'Rejected',
    acceptedAnswers: ['invalidData'],
    stamp: 'Rejected by rule',
    highlight: 'rule',
    teachingPoint: 'This is invalid. A consistency check compares related fields and rejects this pair.'
  }
];

const a2FormInputControls = ['Text box', 'Radio button', 'Checkboxes', 'Drop-down list', 'Date picker'];
const a2FormValidationChecks = [
  'Presence check',
  'Type check',
  'Range check',
  'Length check',
  'Format check',
  'Fixed value / lookup check',
  'Consistency check',
  'Uniqueness check',
  'No validation needed'
];

const a2FormFields = [
  {
    id: 'name',
    field: 'Student name',
    preview: 'Chan Tai Man',
    controls: ['Text box'],
    validations: ['Presence check'],
    reason: 'A name must be typed and should not be left blank.',
    wrongControl: 'Constrained choices are not suitable because each student name is different.',
    wrongValidation: 'A range or fixed value check is not useful for a name.'
  },
  {
    id: 'class',
    field: 'Class',
    preview: '4A',
    controls: ['Drop-down list'],
    validations: ['Fixed value / lookup check'],
    reason: 'The class should be chosen from the allowed list only.',
    wrongControl: 'A free text box allows typing variations such as 4-A or 4a.',
    wrongValidation: 'A lookup check is needed because only listed class codes are valid.'
  },
  {
    id: 'dob',
    field: 'Date of birth',
    preview: '12/08/2010',
    controls: ['Date picker'],
    validations: ['Format check', 'Range check'],
    reason: 'A date picker reduces format errors; a range check prevents unrealistic dates.',
    wrongControl: 'Typing the date freely increases the chance of format mistakes.',
    wrongValidation: 'A date field needs a date format or realistic date range, not a uniqueness check.'
  },
  {
    id: 'activity',
    field: 'Activity choice',
    preview: 'STEM workshop',
    controls: ['Radio button'],
    validations: ['Presence check', 'Fixed value / lookup check'],
    reason: 'Radio buttons suit one choice from a small fixed set.',
    wrongControl: 'Checkboxes allow multiple choices, but this field allows only one.',
    wrongValidation: 'The rule should ensure one allowed activity is selected.'
  },
  {
    id: 'phone',
    field: 'Contact phone number',
    preview: '91234567',
    controls: ['Text box'],
    validations: ['Length check', 'Format check', 'Type check'],
    reason: 'A phone number should have the correct number of digits and pattern.',
    wrongControl: 'A radio button or date picker cannot collect an arbitrary phone number.',
    wrongValidation: 'The rule should check digits, length or pattern rather than a numeric range.'
  },
  {
    id: 'email',
    field: 'Email address',
    preview: 'student@example.com',
    controls: ['Text box'],
    validations: ['Format check'],
    reason: 'An email is typed, then checked against an email pattern.',
    wrongControl: 'A fixed list cannot cover every student email address.',
    wrongValidation: 'A format check is needed because the structure of the address matters.'
  },
  {
    id: 'student-id',
    field: 'Student ID',
    preview: 'S12345',
    controls: ['Text box'],
    validations: ['Length check', 'Uniqueness check'],
    reason: 'The ID has a fixed length and must not duplicate an existing record.',
    wrongControl: 'A drop-down list is not suitable for entering a new unique ID.',
    wrongValidation: 'A presence check alone does not prevent wrong length or duplicated IDs.'
  },
  {
    id: 'workshops',
    field: 'Interested workshops',
    preview: 'AI, Robotics',
    controls: ['Checkboxes'],
    validations: ['No validation needed'],
    reason: 'Checkboxes allow more than one workshop; the field can be optional unless a maximum is set.',
    wrongControl: 'Radio buttons allow only one choice, but students may choose several workshops.',
    wrongValidation: 'If the field is optional, no validation is needed here.'
  }
];

const a2ParityExamTips = [
  'DSE usually asks you to count the number of 1 bits, then decide the parity bit for even or odd parity.',
  'A parity bit is used in data transmission to help detect whether transmitted binary data may have been changed by noise or interference.',
  'Parity check can detect many single-bit errors, but it cannot identify which bit is wrong and it cannot correct the data.',
  'If an even number of bits changes, the parity may still look correct, so no error may be detected.'
];

const groupThemes = {
  'Core A Information Processing': {
    theme: 'theme-a',
    description: 'Learn how data becomes useful information through representation, organisation, processing and validation.',
    stats: ['Data', 'Representation', 'Processing'],
    cards: ['Key concepts and terminology', 'Everyday ICT examples', 'DSE-style short tasks'],
    steps: ['Introduce the real-world data context.', 'Identify how data is represented or organised.', 'Apply the concept to a short DSE-style item.']
  },
  'Core B Computer System Fundamentals': {
    theme: 'theme-b',
    description: 'Explore computer components, system software and performance decisions in practical school and workplace scenarios.',
    stats: ['Hardware', 'Software', 'Performance'],
    cards: ['Component role map', 'System selection checklist', 'Performance comparison task'],
    steps: ['Start with a device scenario.', 'Compare components or software roles.', 'Justify a suitable choice using ICT terms.']
  },
  'Core C Internet and its Applications': {
    theme: 'theme-c',
    description: 'Connect networking concepts, internet services, cloud applications and security practices.',
    stats: ['Networks', 'Services', 'Security'],
    cards: ['Network diagram area', 'Application case study', 'Security decision task'],
    steps: ['Read the network or service scenario.', 'Identify the relevant protocol, device or risk.', 'Explain the protection or application choice.']
  },
  'Core D Computational Thinking and Programming': {
    theme: 'theme-d',
    description: 'Learn computational thinking, algorithm design and programming through visual tracing, planning and debugging activities.',
    stats: ['Decomposition', 'Algorithms', 'Programming'],
    cards: ['Problem analysis board', 'Algorithm visualiser', 'Program tracing task'],
    steps: ['Understand the problem and required output.', 'Plan the algorithm or program structure.', 'Trace, test and improve the solution.']
  },
  'Core E Social Implications': {
    theme: 'theme-e',
    description: 'Discuss privacy, intellectual property, health, environmental and ethical issues with balanced ICT reasoning.',
    stats: ['Privacy', 'Ethics', 'Impact'],
    cards: ['Issue briefing', 'Stakeholder comparison', 'Balanced response practice'],
    steps: ['Identify the people affected.', 'Separate benefit, risk and responsibility.', 'Write a concise DSE-style explanation.']
  },
  'Elective A Databases': {
    theme: 'theme-db',
    description: 'Build database understanding through entities, relationships, keys, normalisation ideas and SQL tasks.',
    stats: ['Tables', 'Keys', 'Queries'],
    cards: ['Schema sketch area', 'Relationship reasoning', 'SQL practice panel'],
    steps: ['Understand the data requirement.', 'Design or inspect the table structure.', 'Use a query or relationship to solve the task.']
  },
  'Elective C Algorithm and Programming': {
    theme: 'theme-ec',
    description: 'Deepen algorithm and programming skills through arrays, modular design, data structures, searching and sorting.',
    stats: ['Algorithms', 'Data structures', 'Tracing'],
    cards: ['Algorithm animation', 'Data structure workspace', 'Efficiency comparison'],
    steps: ['Visualise the data and control flow.', 'Manipulate the structure step by step.', 'Transfer the idea to a compact DSE-style problem.']
  }
};

let topicContent = {
  'A1 Data and IPO cycle': {
    description: 'Separate raw data from meaningful information, then trace how an ICT system changes input into useful output through the IPO cycle.',
    stats: ['Data vs information', 'IPO cycle', 'Quality of information'],
    cards: [
      { title: 'Data', body: 'Raw facts, symbols or measurements before processing. Example: 72, 68, 91 without labels or context.' },
      { title: 'Information', body: 'Processed data with meaning and context. Example: Ada scored 72 marks and passed the test.' },
      { title: 'IPO cycle', body: 'Input captures data, processing organises or calculates it, output presents information, and storage keeps data for later use.' }
    ],
    keypoints: [
      'Data becomes information only when it is processed and interpreted for a purpose.',
      'Common processing actions include sorting, searching, calculating, classifying, validating and summarising.',
      'Good information should be accurate, relevant, complete, timely and presented in a suitable format.',
      'In scenario questions, identify input devices/data, processing steps, output information and stored records separately.'
    ],
    formulae: [
      'IPO = Input + Processing + Output',
      'Storage is often included when data or results must be kept for later retrieval.',
      'Feedback can be used to adjust future input or processing, e.g. error message after invalid input.'
    ],
    exam: [
      'Given a supermarket self-checkout scenario, classify barcode scan, price lookup, receipt printing and transaction record storage.',
      'Explain why a list of numbers may be data to one user but information to another after headings and context are added.',
      'When asked for processing, avoid naming only the computer. State the action: calculate total, compare password, sort records.'
    ],
    practice: [
      {
        mission: 'Data Detective',
        stem: 'A smart watch records: 08:10, 76 bpm, 6200 steps. Which statement best describes these values before any report is generated?',
        options: ['They are raw data.', 'They are already a conclusion.', 'They are output information only.', 'They are a validation rule.'],
        answer: 'They are raw data.',
        hint: 'Ask whether the values have already been processed and interpreted.',
        solution: 'They are raw data because they are recorded facts without a conclusion or user-focused meaning yet.',
        xp: 8
      },
      {
        mission: 'IPO Sorter',
        stem: 'In an Octopus payment system, which action is the processing stage?',
        options: ['Reading the card number', 'Calculating the remaining balance', 'Showing “Payment accepted”', 'Saving the transaction record'],
        answer: 'Calculating the remaining balance',
        hint: 'Processing is the action that changes or uses input data to produce a result.',
        solution: 'Calculating the remaining balance is processing. Reading is input, showing a message is output, and saving is storage.',
        xp: 10
      },
      {
        mission: 'Exam Trap',
        stem: 'A student writes “the computer processes the data” as the processing step. What is the main weakness of this answer?',
        options: ['It does not describe the actual action.', 'It uses the word data.', 'It mentions a computer.', 'It is too long.'],
        answer: 'It does not describe the actual action.',
        hint: 'DSE answers usually need a specific processing verb.',
        solution: 'The answer should state the action, such as compare password, calculate total, sort records or classify data.',
        xp: 10
      }
    ],
    steps: ['Read the scenario and underline raw data.', 'Describe the processing action using a verb.', 'State the resulting information and who uses it.']
  },
  'A2 Data checking': {
    description: 'Compare validation and verification, explain GIGO, and understand how parity check helps detect transmission errors.',
    stats: ['Validation', 'Verification', 'Error detection'],
    cards: [
      { title: 'Validation', body: 'Checks whether input data is reasonable or follows rules before acceptance. It does not prove the data is true.' },
      { title: 'Verification', body: 'Checks whether data has been copied or entered accurately compared with the original source.' },
      { title: 'GIGO', body: 'Garbage In, Garbage Out: wrong or poor-quality input leads to wrong or poor-quality output.' }
    ],
    keypoints: [
      'Validation examples: presence check, range check, type check, format check, length check, check digit and lookup check.',
      'Verification examples: double entry, proofreading, visual checking against the source document and read-back confirmation.',
      'A valid value can still be wrong. A date such as 12/05/2026 may pass format validation but still be the wrong date.',
      'Parity check adds one parity bit so that the total number of 1s is even or odd. It detects many single-bit errors but does not correct them.',
      'Parity check is weak when an even number of bits changes, because the parity may still appear correct.'
    ],
    formulae: [
      'Even parity: total number of 1s including parity bit is even.',
      'Odd parity: total number of 1s including parity bit is odd.',
      'Validation asks: Is the data acceptable? Verification asks: Is the data copied correctly?'
    ],
    exam: [
      'Choose validation when the system checks a rule, such as mark between 0 and 100.',
      'Choose verification when the user compares entered data with the original, such as entering a password twice.',
      'In a parity question, count the number of 1 bits first, then decide the required parity bit.'
    ],
    practice: [
      {
        mission: 'Check Master',
        stem: 'A form rejects a test mark of 105 because marks must be between 0 and 100. Which check is this?',
        options: ['Range validation', 'Double-entry verification', 'Parity check', 'Proofreading'],
        answer: 'Range validation',
        hint: 'The system is checking whether the value is within an acceptable range.',
        solution: 'It is range validation because the rule checks whether the input is between 0 and 100.',
        xp: 8
      },
      {
        mission: 'Validation or Verification',
        stem: 'A user enters an email address twice and the system compares the two entries. Which term is the best match?',
        options: ['Verification', 'Format validation', 'Parity check', 'GIGO'],
        answer: 'Verification',
        hint: 'The purpose is to check whether data was entered accurately, not whether the email really exists.',
        solution: 'This is verification. Double entry compares two entries to reduce typing errors.',
        xp: 10
      },
      {
        mission: 'Parity Patrol',
        stem: 'Using even parity, the data bits are 1011001. What parity bit should be added?',
        options: ['0', '1', 'Either 0 or 1', 'Cannot be detected'],
        answer: '0',
        hint: 'Count the number of 1s in 1011001 first.',
        solution: '1011001 has four 1s. Four is already even, so the even parity bit is 0.',
        xp: 12
      },
      {
        mission: 'GIGO Alert',
        stem: 'A valid but wrong customer ID is entered, so the system prints the wrong customer record. Which idea is most relevant?',
        options: ['GIGO', 'Lossless compression', 'Sampling rate', 'Unicode'],
        answer: 'GIGO',
        hint: 'The input passes the rule but is still wrong.',
        solution: 'This is GIGO: wrong input can lead to wrong output even if the system processes correctly.',
        xp: 10
      }
    ],
    steps: ['Identify whether the problem is about reasonableness or copying accuracy.', 'Name a suitable check.', 'State one limitation of the check.']
  },
  'A3 Data representation': {
    description: 'Revise number systems, signed integers, character coding, machine-readable codes, analogue-to-digital conversion, compression and media file size calculations.',
    stats: ['Number systems', 'Text and codes', 'Media size'],
    cards: [
      { title: 'Numbers in computers', body: 'Use binary internally, decimal for human reading and hexadecimal as a compact way to write binary patterns.' },
      { title: 'Text and identification codes', body: 'ASCII, Big5, GB and Unicode represent characters; barcodes and QR codes store machine-readable data.' },
      { title: 'Digital media', body: 'Images, audio and video depend on sampling, quantisation, resolution, colour depth, compression and bit rate.' }
    ],
    keypoints: [
      'Binary uses base 2, decimal uses base 10 and hexadecimal uses base 16. One hexadecimal digit represents 4 bits.',
      'Unsigned integers store non-negative values only. Signed integers reserve representation for negative values.',
      'Sign-magnitude uses one sign bit and magnitude bits. Two’s complement is commonly used because arithmetic is simpler.',
      'Overflow occurs when the result is outside the range that can be represented using the available number of bits.',
      'ASCII mainly represents English characters. Big5 and GB are Chinese character encodings. Unicode supports characters from many languages.',
      'A barcode is usually one-dimensional and stores less data. A QR code is two-dimensional and can store more data with error correction.',
      'Analogue data is continuous. Digital data is discrete. Digitalisation converts analogue signals into digital form using sampling and quantisation.',
      'Lossless compression preserves the original data exactly. Lossy compression removes less noticeable data. No compression keeps raw data and uses more storage.',
      'Image file size depends on resolution and colour depth. Audio file size depends on sampling rate, bit depth, channels and duration.'
    ],
    formulae: [
      'Image size in bits = width x height x colour depth',
      'Image size in bytes = width x height x colour depth / 8',
      'Audio size in bits = sampling rate x bit depth x channels x duration',
      'Bit rate = bits transmitted or stored per second',
      'n bits unsigned range = 0 to 2^n - 1',
      'n bits two’s complement range = -2^(n-1) to 2^(n-1) - 1',
      '1 hex digit = 4 bits'
    ],
    exam: [
      'For file size questions, check whether the answer should be in bits, bytes, KB or MB before finalising.',
      'For overflow questions, state the representable range first, then compare the calculated result with that range.',
      'For lossy/lossless questions, mention whether exact reconstruction is possible.',
      'For barcode vs QR code questions, compare dimension, capacity, error correction and suitable use case.'
    ],
    practice: [
      {
        mission: 'Hex Sprint',
        stem: 'How many bits are represented by the hexadecimal value 3F?',
        options: ['4 bits', '8 bits', '16 bits', '32 bits'],
        answer: '8 bits',
        hint: 'Each hexadecimal digit represents 4 bits.',
        solution: '3F has two hexadecimal digits. 2 x 4 bits = 8 bits.',
        xp: 8
      },
      {
        mission: 'Overflow Guard',
        stem: 'Using 8-bit unsigned integer representation, what happens if the result of a calculation is 260?',
        options: ['Overflow error occurs', 'It is stored normally', 'It becomes a Unicode character', 'It must be compressed'],
        answer: 'Overflow error occurs',
        hint: 'Find the range of 8-bit unsigned integers.',
        solution: '8-bit unsigned range is 0 to 255. Since 260 is outside the range, overflow occurs.',
        xp: 10
      },
      {
        mission: 'Encoding Match',
        stem: 'Which character encoding is designed to support characters from many different languages?',
        options: ['Unicode', 'ASCII only', 'Barcode', 'Parity bit'],
        answer: 'Unicode',
        hint: 'Think about multilingual support.',
        solution: 'Unicode is designed to represent characters from many writing systems.',
        xp: 8
      },
      {
        mission: 'File Size Boss',
        stem: 'An uncompressed image is 100 x 100 pixels with 24-bit colour depth. What is its size in bytes?',
        options: ['30,000 bytes', '10,000 bytes', '240,000 bytes', '300 bytes'],
        answer: '30,000 bytes',
        hint: 'Use width x height x colour depth / 8.',
        solution: '100 x 100 x 24 / 8 = 30,000 bytes.',
        xp: 14
      },
      {
        mission: 'Compression Choice',
        stem: 'A legal document must be restored exactly after compression. Which compression type is most suitable?',
        options: ['Lossless compression', 'Lossy compression', 'No encoding', 'Quantisation'],
        answer: 'Lossless compression',
        hint: 'The key word is exactly.',
        solution: 'Lossless compression allows the original data to be reconstructed exactly.',
        xp: 10
      },
      {
        mission: 'QR Duel',
        stem: 'Why can a QR code usually store more data than a traditional barcode?',
        options: ['It is two-dimensional.', 'It uses only decimal numbers.', 'It is always analogue.', 'It has no error correction.'],
        answer: 'It is two-dimensional.',
        hint: 'Compare the shape and data layout.',
        solution: 'A QR code stores data in two dimensions, so it can hold more data than a one-dimensional barcode.',
        xp: 10
      }
    ],
    steps: ['Identify the representation type: number, text, code, image or audio.', 'Select the correct range rule or file-size formula.', 'Show units clearly and explain any limitation such as overflow or compression loss.']
  },
  'Computer hardware': {
    description: 'Compare CPU, memory, storage and input/output devices in practical purchase or upgrade scenarios.',
    cards: ['Component role cards', 'Upgrade decision table', 'Performance bottleneck examples']
  },
  'System software': {
    description: 'Understand operating systems, utilities and drivers as the software layer supporting users and hardware.',
    cards: ['OS responsibility map', 'Utility software examples', 'Driver and hardware interaction']
  },
  'Computer performance': {
    description: 'Reason about performance using processor, memory, storage, network and application requirements.',
    cards: ['Specification comparison', 'Bottleneck diagnosis', 'Cost-performance trade-off']
  },
  'Networking basics': {
    description: 'Study basic network models, devices, addresses and data transmission concepts.',
    cards: ['LAN/WAN comparison', 'Device role diagram', 'IP and addressing tasks']
  },
  'Internet services': {
    description: 'Connect common internet services with protocols, client-server ideas and user needs.',
    cards: ['Service matching', 'Client-server flow', 'Reliability and access considerations']
  },
  'Web and cloud applications': {
    description: 'Explore web applications, cloud storage, collaboration tools and platform trade-offs.',
    cards: ['Cloud service scenarios', 'Collaboration workflow', 'Security and availability decisions']
  },
  'Network security': {
    description: 'Recognise common network threats and choose suitable controls such as authentication, encryption and backup.',
    cards: ['Threat-control matching', 'Authentication choices', 'Incident response outline']
  },
  'Privacy and security': {
    description: 'Evaluate personal data protection, account safety and responsible system use.',
    cards: ['Personal data examples', 'Risk reduction checklist', 'Short response practice']
  },
  'Intellectual property': {
    description: 'Understand copyright, licensing, plagiarism and responsible use of digital materials.',
    cards: ['Licence comparison', 'Schoolwork scenario', 'Acceptable use decision']
  },
  'Health and environmental issues': {
    description: 'Consider ergonomics, screen use, e-waste, energy consumption and sustainable ICT practice.',
    cards: ['Ergonomic setup', 'E-waste lifecycle', 'Green ICT action plan']
  },
  'Database concepts': {
    description: 'Introduce tables, fields, records, primary keys and relationships.',
    cards: ['Table anatomy', 'Primary key selection', 'Relationship examples']
  },
  'Relational database design': {
    description: 'Design linked tables that reduce duplication and support reliable data retrieval.',
    cards: ['Entity identification', 'Relationship diagram', 'Design review checklist']
  },
  'SQL queries': {
    description: 'Practise selecting, filtering, sorting and joining data using SQL-style query logic.',
    cards: ['SELECT-FROM-WHERE', 'Sorting and conditions', 'Join reasoning task']
  }
};

const arcadeData = {
  twosComplement: {
    group: 'Core A / A3 Data representation',
    title: 'Two’s Complement Bit Game',
    description: 'Convert positive and negative denary values, interpret binary as unsigned/signed, trace invert + add 1 and detect overflow using range and sign-bit rules.',
    total: 7
  },
  spreadsheetLab: {
    group: 'Core A / A4 Data Manipulation and Analysis',
    title: 'A4 Formula Mission Room',
    description: 'Practise HKDSE spreadsheet formula writing, formula copying, absolute/mixed references, sorting/filtering, what-if analysis and pivot-style summaries.',
    total: 7
  },
  sqlPlayground: {
    group: 'Elective A Databases',
    title: 'SQL Query Result Predictor',
    description: 'Predict SQL result tables, explain excluded records, assemble controlled SQL tokens and connect database design ideas using keys and relationships.',
    total: 8
  },
  securitySimulator: {
    group: 'Core C / Network security',
    title: 'Network Security Simulator',
    description: 'Classify threats, match controls, configure firewall rules and explain public Wi-Fi risks using HKDSE network security terms.',
    total: 6
  }
};

const chapterStructure = [
  {
    id: 'coreAList',
    icon: 'A',
    group: 'Core A Information Processing',
    chapters: [
      ['A1 Introduction to Information Processing', 'A1 Introduction to Information Processing'],
      ['A2 Data Organisation and Data Control', 'A2 Data Organisation and Data Control'],
      ['A3 Data Representation', 'A3 Data Representation'],
      ['A4 Spreadsheet / Data Manipulation and Analysis', 'A4 Spreadsheet / Data Manipulation and Analysis'],
      ['A5 Simple Database', 'A5 Simple Database']
    ]
  },
  {
    id: 'coreBList',
    icon: 'B',
    group: 'Core B Computer System Fundamentals',
    chapters: [
      ['B1 Input and Output Devices', 'B1 Input and Output Devices'],
      ['B2 Computer Hardware', 'B2 Computer Hardware'],
      ['B3 Computer Software', 'B3 Computer Software']
    ]
  },
  {
    id: 'coreCList',
    icon: 'C',
    group: 'Core C Internet and its Applications',
    chapters: [
      ['C1 Networking and Internet Basics', 'C1 Networking and Internet Basics'],
      ['C2 Internet Protocols', 'C2 Internet Protocols'],
      ['C3 Internet Services and Applications', 'C3 Internet Services and Applications'],
      ['C4 Elementary Web Authoring', 'C4 Elementary Web Authoring'],
      ['C5 Network Security and Privacy Threats', 'C5 Network Security and Privacy Threats'],
      ['C6 Network Security Measures', 'C6 Network Security Measures']
    ]
  },
  {
    id: 'coreDList',
    icon: 'D',
    group: 'Core D Computational Thinking and Programming',
    chapters: [
      ['D1 Problem Formulation and Analysis', 'D1 Problem Formulation and Analysis'],
      ['D2 Algorithm Design I - Sequence and Selection', 'D2 Algorithm Design I - Sequence and Selection'],
      ['D3 Algorithm Design II - Iteration and Arrays', 'D3 Algorithm Design II - Iteration and Arrays'],
      ['D4 Introduction to Python Programming', 'D4 Introduction to Python Programming'],
      ['D5 Integrated Problem-solving in Python', 'D5 Integrated Problem-solving in Python'],
      ['D6 Program Testing and Debugging', 'D6 Program Testing and Debugging']
    ]
  },
  {
    id: 'coreEList',
    icon: 'E',
    group: 'Core E Social Implications',
    chapters: [
      ['E1 Technological Innovations', 'E1 Technological Innovations'],
      ['E2 Health and Ethical Issues', 'E2 Health and Ethical Issues'],
      ['E3 Intellectual Property', 'E3 Intellectual Property']
    ]
  },
  {
    id: 'electiveAList',
    icon: 'DB',
    group: 'Elective A Databases',
    chapters: [
      ['EA1 Managing Data Using SQL', 'EA1 Managing Data Using SQL'],
      ['EA2 SQL Operators and Functions', 'EA2 SQL Operators and Functions'],
      ['EA3 SQL Operations on Multiple Tables', 'EA3 SQL Operations on Multiple Tables'],
      ['EA4 Relational Database Concepts', 'EA4 Relational Database Concepts'],
      ['EA5 Database Design and ER Diagram', 'EA5 Database Design and ER Diagram']
    ]
  },
  {
    id: 'electiveCList',
    icon: 'AP',
    group: 'Elective C Algorithm and Programming',
    chapters: [
      ['EC1 Algorithm Design and Python Basics', 'EC1 Algorithm Design and Python Basics'],
      ['EC2 Program Testing and Debugging II', 'EC2 Program Testing and Debugging II'],
      ['EC3 Advanced Control Structures', 'EC3 Advanced Control Structures'],
      ['EC4 Sub-programs', 'EC4 Sub-programs'],
      ['EC5 Data Structures', 'EC5 Data Structures'],
      ['EC6 Searching and Sorting', 'EC6 Searching and Sorting'],
      ['EC7 Handling of Text Files', 'EC7 Handling of Text Files'],
      ['EC8 Applications of Programming in Real Life', 'EC8 Applications of Programming in Real Life']
    ]
  }
];

const chapterBlueprints = [
  {
    id: 'A1 Introduction to Information Processing',
    group: 'Core A Information Processing',
    title: 'A1 Introduction to Information Processing',
    focus: 'Understand how information systems use hardware, software, data and processing stages to convert raw data into meaningful information.',
    stats: [
      { value: 'IS', label: 'Information system' },
      { value: 'D→I', label: 'Data becomes information' },
      { value: '7', label: 'Processing stages' }
    ],
    cards: [
      { title: 'Information system', body: 'An information system is implemented to automate processes, reduce human errors and improve efficiency. It uses hardware, software, data, people and procedures to produce useful output.' },
      { title: 'Hardware and software', body: 'Hardware means the physical devices used in the system. Software means the programs running in the system, including system software, utility programs, drivers and application software.' },
      { title: 'Data and information', body: 'Data is a collection of unorganised facts which may have no meaning on its own. After processing, data is put into context and converted into meaningful information.' },
      { title: 'Multimedia data', body: 'Text, digital images, audio and video are all data types. Images are captured or edited digitally; audio can be converted from analogue signals; videos combine images and audio.' },
      { title: 'Information processing', body: 'The seven stages are collection, organisation, storage, processing, analysis, transmission and presentation. The exact order may depend on the system.' },
      { title: 'Information Age and literacy', body: 'Better microcomputers, internet, search engines, mobile devices and telecommunication improve access to information. Students also need information literacy: intellectual property, data privacy, credibility, extraction and organisation.' }
    ],
    concepts: [
      'Information systems are used to automate processes, reduce human errors and improve efficiency.',
      'Data is stored in computer storage devices and used by programs as input or output.',
      'Hardware refers to physical devices; software refers to programs running in an information system.',
      'System software includes operating systems, utility programs and driver programs. Application software helps users perform tasks such as word processing and database management.',
      'Data is unorganised facts with little meaning by itself; information is data after processing and interpretation.',
      'Information processing may involve collection, organisation, storage, processing, analysis, transmission and presentation.',
      'Text, images, audio and video are common multimedia data types.',
      'Information literacy includes respecting intellectual property, protecting data privacy, judging credibility, and extracting and organising information.'
    ],
    activities: []
  },
  {
    id: 'A2 Data Organisation and Data Control',
    group: 'Core A Information Processing',
    title: 'A2 Data Organisation and Data Control',
    focus: 'Protect data quality by choosing suitable validation and verification methods, while keeping data hierarchy, database functions and file access as simple supporting ideas.',
    detailsLayout: 'dataControlLearningPath',
    stats: [
      { value: 'CHECK', label: 'Use validation rules to reject unacceptable input', kind: 'word' },
      { value: 'CONFIRM', label: 'Use verification to check accurate copying or entry', kind: 'word' },
      { value: 'DETECT', label: 'Use check digits and parity to identify possible errors', kind: 'word' }
    ],
    cards: [
      { title: 'Validation', body: 'Validation checks whether input data is acceptable according to rules. It can reject unreasonable data, but it cannot prove that accepted data is true.' },
      { title: 'Verification', body: 'Verification checks whether data has been copied or entered accurately from a source. Common methods include inputting data twice, double data entry and proofreading.' },
      { title: 'Simple organisation ideas', body: 'Data hierarchy, database functions and file access remain supporting ideas: field, record, file/table and database; organise, store and retrieve records; sequential or direct access.' },
      { title: 'Input method mini-card', body: 'Radio buttons, checkboxes, drop-down lists, date pickers and text boxes can reduce input errors when they match the kind of data being collected.' }
    ],
    concepts: [
      'Validation checks include presence check, fixed value or lookup check, type check, range check, length check, format check, consistency check, uniqueness check and check digit.',
      'Verification methods include inputting data twice, double data entry by two operators and proofreading against the source document.',
      'A transcription error is copying a character wrongly, such as typing 7 instead of 9. A transposition error is swapping the order, such as typing 1324 instead of 1234.',
      'A value may be valid but wrong: a date may have the correct format but be the wrong appointment date; a student number may have the correct length but belong to another student.',
      'A check digit is calculated from the data and helps detect input errors in codes such as product numbers. A parity check adds a bit to detect transmission errors in binary data.',
      'Parity check can detect many single-bit errors but cannot identify the wrong bit, cannot correct the data, and may fail when an even number of bits changes.',
      'Data hierarchy and simple database functions are useful context, but this chapter should focus strongly on choosing and explaining validation and verification.'
    ],
    misconceptions: [
      'Validation does not guarantee truth. It only checks whether data follows rules.',
      'Verification is about accurate copying or entry; it is not the same as checking whether a value is reasonable.',
      'A check digit and a parity bit are both error-detection ideas, but they are used in different contexts.',
      'A text box is not always the best input control; constrained controls such as radio buttons, drop-down lists and date pickers are often safer.'
    ],
    activities: [
      {
        title: 'Valid but Wrong Detective',
        mode: 'a2Detective',
        status: 'Available now',
        goal: 'Find cases where data passes validation but is still incorrect.',
        misconception: 'Validation checks rules, not truth. A value can be accepted by the system but still be the wrong real-world value.',
        challenge: 'Classify each case as valid and correct, valid but wrong, invalid data or needing verification.',
        transfer: 'DSE transfer: explain the limitation of the check and suggest verification when the source value matters.'
      },
      {
        title: 'Form Design Lab',
        mode: 'a2FormLab',
        status: 'Available now',
        goal: 'Choose suitable input controls and validation checks for a school form.',
        misconception: 'A text box is not always the safest input method. Good controls reduce typing errors before validation is needed.',
        challenge: 'Match each form field with a suitable control and a validation check, then read the feedback.',
        transfer: 'DSE transfer: justify a control/check choice using the field purpose, allowed values and likely input errors.'
      },
      {
        title: 'Parity Bit Shooter',
        mode: 'a2ParityShooter',
        status: 'Available now',
        goal: 'Shoot the correct parity bit and detect transmission errors.',
        misconception: 'A parity bit detects possible transmission errors; it does not correct the data and may miss even-numbered bit changes.',
        challenge: 'Count the 1 bits, choose even or odd parity, then decide whether a received frame should be accepted or flagged.',
        transfer: 'DSE transfer: show the counting step, state the parity bit, and explain the limitation of parity check.'
      }
    ],
    practice: [
      {
        level: 'Level 1: Concept check',
        title: 'Valid but wrong',
        stem: 'A system accepts the date 12/06/2026 because it is in the correct format, but the student meant to enter 21/06/2026. Which statement is best?',
        options: [
          { text: 'The data is valid but wrong.', correct: true, feedback: 'Correct. The value follows the format rule, but it is not the intended real-world value.' },
          { text: 'The data must be correct because it passed validation.', correct: false, feedback: 'Not quite. Passing validation does not prove the value is true.' },
          { text: 'The error can only be found by parity check.', correct: false, feedback: 'Parity check is for detecting transmission errors in binary data, not wrong appointment dates.' },
          { text: 'The field should use no validation checks.', correct: false, feedback: 'A format check is still useful, but verification or careful user checking is also needed.' }
        ],
        hint: 'Ask whether the rule checks format or the real-world meaning.',
        solution: 'It is valid but wrong. Validation can accept data that follows rules even when the user entered the wrong value.'
      },
      {
        level: 'Level 2: Apply a method',
        title: 'Choose the check',
        stem: 'A student ID must be exactly 8 characters and must not duplicate an existing ID. Which pair of validation checks is most suitable?',
        options: [
          { text: 'Length check and uniqueness check', correct: true, feedback: 'Correct. Length checks the number of characters; uniqueness checks that the ID is not already used.' },
          { text: 'Range check and parity check', correct: false, feedback: 'Range check suits numeric limits. Parity check is not for preventing duplicate IDs.' },
          { text: 'Proofreading and double data entry', correct: false, feedback: 'Those are verification methods, not validation checks applied by the system.' },
          { text: 'Format check only', correct: false, feedback: 'A format check may help, but it does not by itself prove exact length and uniqueness.' }
        ],
        hint: 'Look for one rule about size and one rule about duplication.',
        solution: 'Use a length check and a uniqueness check.'
      },
      {
        level: 'Level 2: Error detection',
        title: 'Check digit or parity',
        stem: 'A barcode number is typed into a system. The system recalculates a final digit to detect possible typing mistakes. What is being used?',
        options: [
          { text: 'Check digit', correct: true, feedback: 'Correct. A check digit is calculated from the other digits and is used in codes such as product numbers.' },
          { text: 'Parity check', correct: false, feedback: 'Parity check adds a bit to binary data for transmission error detection.' },
          { text: 'Drop-down list', correct: false, feedback: 'A drop-down list restricts choices, but the question describes recalculating a final digit.' },
          { text: 'Proofreading', correct: false, feedback: 'Proofreading is manual checking against the source, not recalculating a digit.' }
        ],
        hint: 'The clue is a final digit calculated from the rest of the code.',
        solution: 'This is a check digit.'
      },
      {
        level: 'Level 3: DSE transfer',
        title: 'Input control choice',
        stem: 'A form asks students to choose one class from 4A, 4B, 4C and 4D. Which input method best reduces typing errors?',
        options: [
          { text: 'Drop-down list', correct: true, feedback: 'Correct. The user chooses from fixed valid values, so spelling and typing errors are reduced.' },
          { text: 'Text box', correct: false, feedback: 'A text box allows more typing errors, such as 4a, 4-A or a misspelled class code.' },
          { text: 'Checkboxes for all classes', correct: false, feedback: 'Checkboxes allow multiple selections, but the student should choose one class only.' },
          { text: 'Date picker', correct: false, feedback: 'A date picker is suitable for dates, not class codes.' }
        ],
        hint: 'The value must be chosen from a small fixed list.',
        solution: 'A drop-down list is most suitable.'
      }
    ]
  },
  {
    id: 'A3 Data Representation',
    group: 'Core A Information Processing',
    title: 'A3 Data Representation',
    focus: 'Represent data using units, number systems, character codes, machine-readable codes and media formats, then reason about capacity, transfer rate, overflow, digitisation and compression.',
    detailsLayout: 'dataRepresentationLearningPath',
    stats: [
      { value: 'NUMBERS', label: 'Binary, hexadecimal, two’s complement and overflow', kind: 'word' },
      { value: 'CODES', label: 'Characters, barcode, QR code and Unicode', kind: 'word' },
      { value: 'MEDIA', label: 'Digitisation, file formats, compression and file size', kind: 'word' }
    ],
    cards: [
      { title: 'Data units and transfer rate', body: 'Bit is the basic unit and stores 0 or 1. 1 byte = 8 bits. Storage units use 1024: KB, MB, GB and TB. Data transfer rate units use 1000: kbps, Mbps, Gbps and Tbps.' },
      { title: 'Number representation', body: 'Binary and hexadecimal use place values. The number of patterns from b bits is 2^b. Unsigned integers store zero and positive values; signed integers may store negative values.' },
      { title: 'Two’s complement and overflow', body: 'Two’s complement represents signed integers. To represent -X using N bits, use 2^N - X or invert the bits of X and add 1. Overflow occurs when the result is outside the range representable by the bits.' },
      { title: 'Character and barcode encoding', body: 'ASCII, Big5, GB and Unicode represent text characters. Barcodes and QR codes represent machine-readable data; QR codes can store more characters and have stronger error correction.' },
      { title: 'Analog, digital and digitisation', body: 'Analog data has continuous physical values, such as sound waves or drawings. Digital data uses discrete symbols such as 0 and 1 and is suitable for computer storage and processing.' },
      { title: 'Text, image, audio and video formats', body: 'File formats differ by compression, transparency, animation and media type. Students should match a format to a purpose, such as exact recovery, small file size, transparency or animation.' }
    ],
    concepts: [
      'Unit of data: bit (bit or b) is the most basic unit and can be 0 or 1; byte (B) is 8 bits; 1 KB = 1024 B; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB.',
      'Unit of data transfer rate: bps means one bit per second; 1 kbps = 1000 bps; 1 Mbps = 1000 kbps; 1 Gbps = 1000 Mbps; 1 Tbps = 1000 Gbps.',
      'The number of patterns represented by b bits is 2^b. The number of bits needed for P patterns is log2 P, rounded up when a whole number of bits is required.',
      'Binary uses base 2 place values such as 2^2, 2^1 and 2^0. Hexadecimal uses base 16 place values such as 16^2, 16^1 and 16^0.',
      'One hexadecimal digit represents four binary bits.',
      'Unsigned integers do not have a negative sign: they represent positive integers and zero.',
      'Signed integers may have a negative sign: they represent positive integers, negative integers and zero.',
      'Two’s complement is a method for representing signed integers. The two’s complement of X is the representation of -X, not another representation of +X.',
      'To obtain the two’s complement representation of -X using N bits, subtract X from 2^N, or add leading 0s, invert all bits, then add 1.',
      'Overflow error occurs when the result of a calculation is outside the range that the available number of bits can represent. In two’s complement addition, it can occur when adding two positive numbers or adding two negative numbers.',
      'ASCII mainly represents English characters and uses 7 bits to 1 byte per character. Big5 and GB codes commonly use 2 bytes for Traditional and Simplified Chinese respectively. Unicode supports most world languages and may use 1 to 4 bytes per character.',
      'Barcode can be scanned only from two angles such as 0 degrees or 180 degrees, usually represents ASCII characters or numbers only, and has a small character limit of around 50.',
      'QR code can be scanned from any direction even at an angle, can often restore up to 30% of data, can represent Unicode characters, and can store at least 1000 characters.',
      'Analog data is represented physically with continuous values. Digital data is represented using discrete symbols and is usually stored and processed by computers and smartphones.',
      'Text formats: TXT is plain text; RTF, DOC/DOCX, ODT, PAGES and PDF are formatted text.',
      'Image formats: BMP is uncompressed bitmap; JPEG/JPG is lossy bitmap; GIF is lossless bitmap with transparency and animation; PNG is lossless bitmap with transparency; WebP may be lossless or lossy and supports transparency and animation; TIFF/TIF is lossless bitmap; SVG is vector and uncompressed.',
      'Audio formats: WAV/WAVE and MIDI are uncompressed; MP3, AAC and OGG are lossy; WMA may be lossy or lossless; FLAC and ALAC are lossless.',
      'Video formats: AVI is uncompressed; MPEG4/MP4, WMV, MOV and MKV are lossy; WebM and FLV may be lossy or lossless.',
      'File size calculations require careful units: bits, bytes, KB and MB must not be mixed.',
      'Lossless compression restores the original exactly; lossy compression removes less noticeable data and is only suitable when exact recovery is not required.'
    ],
    formulae: [
      '1 B = 8 bits',
      '1 KB = 1024 B; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB',
      '1 kbps = 1000 bps; 1 Mbps = 1000 kbps; 1 Gbps = 1000 Mbps; 1 Tbps = 1000 Gbps',
      'Number of patterns = 2^b, where b is the number of bits',
      'Bits needed = log2 P, where P is the number of patterns needed',
      'Image size = width x height x colour depth / 8 bytes',
      'Audio size = sampling rate x bit depth x channels x duration / 8 bytes',
      'n-bit unsigned range = 0 to 2^n - 1',
      'n-bit two’s complement range = -2^(n-1) to 2^(n-1) - 1',
      'Two’s complement representation of -X = 2^N - X',
      '1 hexadecimal digit = 4 bits'
    ],
    misconceptions: [
      'Data storage units and data transfer-rate units use different multipliers: 1 KB = 1024 B, but 1 kbps = 1000 bps.',
      'Do not use the unsigned range for two’s complement values.',
      'More colour depth means more possible colours, not more pixels.',
      'File-size calculations must keep bits and bytes separate.'
    ],
    activities: [
      {
        title: 'Two’s Complement Visual Lab',
        mode: 'a3TwosComplementVisualLab',
        status: 'Available now',
        goal: 'Build and interpret signed binary values using an interactive bit grid.',
        misconception: 'A bit pattern has a different value when interpreted as unsigned or as two’s complement.',
        challenge: 'Convert denary to binary, interpret signed values, animate invert-and-add-1, and choose overflow cases.',
        transfer: 'DSE transfer: state the bit width, signed range, binary representation and overflow reason.'
      },
      {
        title: 'Quantization Visualizer',
        mode: 'a3QuantizationLab',
        status: 'Available now',
        goal: 'Adjust sampling rate and bit depth to see how analog data becomes digital.',
        misconception: 'Sampling rate and bit depth improve different parts of the digitised signal.',
        challenge: 'Move the sliders and compare the smooth analog wave with sampled, quantized points.',
        transfer: 'DSE transfer: explain that digitisation involves sampling, quantization and coding.'
      },
      {
        title: 'RGB Bitmap and Colour Depth Lab',
        mode: 'a3BitmapLab',
        status: 'Available now',
        goal: 'See how resolution and RGB bits per channel affect image detail, number of colours and file size.',
        misconception: 'Higher resolution and higher colour depth both increase file size, but for different reasons.',
        challenge: 'Adjust RGB values, bits per channel and resolution, then inspect the quantised pixel and file-size calculation.',
        transfer: 'DSE transfer: show width x height x colour depth, then divide by 8 to convert bits to bytes.'
      },
      {
        title: 'UTF-8 Binary Encoder',
        mode: 'a3Utf8Encoder',
        status: 'Available now',
        goal: 'Encode English and Chinese characters into UTF-8 byte patterns.',
        misconception: 'One character does not always use one byte in modern character encoding.',
        challenge: 'Type up to three characters and inspect code points, bytes and binary output.',
        transfer: 'DSE transfer: compare ASCII with Unicode/UTF-8 and explain variable byte length.'
      }
    ],
    practice: [
      {
        level: 'Level 1: Concept check',
        title: 'Hex digits to bits',
        stem: 'How many bits are represented by the two hexadecimal digits A7?',
        tag: 'hex-to-bits',
        options: [
          { text: '2 bits', correct: false, feedback: 'Not quite. Do not use the value of A or 7. Count the hexadecimal digits first, then multiply by 4.' },
          { text: '4 bits', correct: false, feedback: 'Not quite. Do not use the value of A or 7. Count the hexadecimal digits first, then multiply by 4.' },
          { text: '8 bits', correct: true, feedback: 'Correct. Each hexadecimal digit represents 4 bits. A7 has two hexadecimal digits, so it represents 8 bits.' },
          { text: '16 bits', correct: false, feedback: 'Not quite. Do not use the value of A or 7. Count the hexadecimal digits first, then multiply by 4.' }
        ],
        hint: 'Each hexadecimal digit represents 4 bits.',
        solution: 'A7 has two hexadecimal digits. Each hexadecimal digit represents 4 bits, so A7 represents 2 x 4 = 8 bits.'
      },
      {
        level: 'Level 1: Concept check',
        title: 'Number of bit patterns',
        stem: 'How many different colours can be represented using 5 bits?',
        tag: 'bit-pattern-count',
        options: [
          { text: '5', correct: false, feedback: 'Not quite. The number of patterns is not n x 2. It is 2 raised to the power of n.' },
          { text: '10', correct: false, feedback: 'Not quite. The number of patterns is not n x 2. It is 2 raised to the power of n.' },
          { text: '25', correct: false, feedback: 'Not quite. The number of patterns is not n x 2. It is 2 raised to the power of n.' },
          { text: '32', correct: true, feedback: 'Correct. n bits can represent 2^n different patterns. 5 bits can represent 32 colours.' }
        ],
        hint: 'n bits can represent 2^n different patterns.',
        solution: '5 bits can represent 2^5 = 32 different patterns, so 32 colours can be represented.'
      },
      {
        level: 'Level 1: Concept check',
        title: '8-bit two’s complement range',
        stem: 'What is the range of integers that can be represented using 8-bit two’s complement?',
        tag: 'twos-complement-range',
        options: [
          { text: '0 to 255', correct: false, feedback: 'Not quite. 0 to 255 is the unsigned 8-bit range, not the 8-bit two’s complement range.' },
          { text: '-127 to 128', correct: false, feedback: 'Not quite. 0 to 255 is the unsigned 8-bit range, not the 8-bit two’s complement range.' },
          { text: '-128 to 127', correct: true, feedback: 'Correct. 8-bit two’s complement represents values from -128 to 127.' },
          { text: '-255 to 255', correct: false, feedback: 'Not quite. 0 to 255 is the unsigned 8-bit range, not the 8-bit two’s complement range.' }
        ],
        hint: 'For n-bit two’s complement, the range is -2^(n-1) to 2^(n-1)-1.',
        solution: 'For 8-bit two’s complement, the range is -2^7 to 2^7 - 1, which is -128 to 127.'
      },
      {
        level: 'Level 2: Trace / calculate',
        title: 'Interpret a negative binary number',
        stem: 'In 8-bit two’s complement representation, what is the denary value of 1111 1010?',
        tag: 'twos-complement-negative',
        options: [
          { text: '250', correct: false, feedback: 'Not quite. Do not treat 1111 1010 as an unsigned number. In two’s complement, a leading 1 means the value is negative.' },
          { text: '-5', correct: false, feedback: 'Not quite. Do not treat 1111 1010 as an unsigned number. In two’s complement, a leading 1 means the value is negative.' },
          { text: '-6', correct: true, feedback: 'Correct. 1111 1010 is negative in two’s complement. Its magnitude is 6, so the value is -6.' },
          { text: '6', correct: false, feedback: 'Not quite. Do not treat 1111 1010 as an unsigned number. In two’s complement, a leading 1 means the value is negative.' }
        ],
        hint: 'The first bit is 1, so the number is negative. Invert the bits and add 1 to find the magnitude.',
        solution: '1111 1010 starts with 1, so it is negative. Invert the bits to get 0000 0101. Add 1 to get 0000 0110, which is 6. Therefore, the value is -6.'
      },
      {
        level: 'Level 2: Trace / calculate',
        title: 'Detect two’s complement overflow',
        stem: 'Which 8-bit two’s complement addition causes overflow?',
        tag: 'overflow',
        options: [
          { text: '0100 0000 + 0100 0000', correct: true, feedback: 'Correct. 64 + 64 = 128, which is outside the 8-bit two’s complement range.' },
          { text: '1111 1111 + 0000 0001', correct: false, feedback: 'Not quite. Overflow is about whether the result is outside the representable range, not only whether there is a carry.' },
          { text: '0000 1010 + 1111 0110', correct: false, feedback: 'Not quite. Overflow is about whether the result is outside the representable range, not only whether there is a carry.' },
          { text: '1111 0000 + 0000 0010', correct: false, feedback: 'Not quite. Overflow is about whether the result is outside the representable range, not only whether there is a carry.' }
        ],
        hint: 'Check whether the denary result is outside the 8-bit two’s complement range of -128 to 127.',
        solution: '0100 0000 is 64. 64 + 64 = 128. The maximum value in 8-bit two’s complement is 127, so overflow occurs.'
      },
      {
        level: 'Level 1: Concept check',
        title: 'Choose a character encoding',
        stem: 'Which character encoding system is most suitable for representing both English and Chinese characters in modern systems?',
        tag: 'character-encoding',
        options: [
          { text: 'ASCII', correct: false, feedback: 'Not quite. ASCII is mainly for basic English characters and symbols. Chinese characters require a larger character set.' },
          { text: 'Unicode', correct: true, feedback: 'Correct. Unicode is suitable for representing characters from many languages.' },
          { text: 'Parity code', correct: false, feedback: 'Not quite. ASCII is mainly for basic English characters and symbols. Chinese characters require a larger character set.' },
          { text: 'Binary-coded decimal only', correct: false, feedback: 'Not quite. ASCII is mainly for basic English characters and symbols. Chinese characters require a larger character set.' }
        ],
        hint: 'Think about multilingual character support.',
        solution: 'Unicode supports a wide range of characters from different languages, including English and Chinese. ASCII mainly supports basic English characters and symbols.'
      },
      {
        level: 'Level 2: Calculate',
        title: 'Calculate image file size',
        stem: 'A 200 x 100 pixel image uses 24-bit colour. What is the uncompressed file size in bytes?',
        tag: 'image-file-size',
        options: [
          { text: '20,000 bytes', correct: false, feedback: 'Not quite. Remember to convert bits to bytes by dividing by 8.' },
          { text: '60,000 bytes', correct: true, feedback: 'Correct. The image needs 480,000 bits, which is 60,000 bytes.' },
          { text: '480,000 bytes', correct: false, feedback: 'Not quite. Remember to convert bits to bytes by dividing by 8.' },
          { text: '4,800,000 bytes', correct: false, feedback: 'Not quite. Remember to convert bits to bytes by dividing by 8.' }
        ],
        hint: 'Use width x height x colour depth, then divide by 8 to convert bits to bytes.',
        solution: 'File size = 200 x 100 x 24 bits = 480,000 bits. Convert to bytes: 480,000 / 8 = 60,000 bytes.'
      },
      {
        level: 'Level 2: Calculate',
        title: 'Calculate audio file size',
        stem: 'An uncompressed mono audio file is recorded for 10 seconds with a sampling rate of 8000 samples per second and a bit depth of 16 bits. What is the file size in bytes?',
        tag: 'audio-file-size',
        options: [
          { text: '16,000 bytes', correct: false, feedback: 'Not quite. Check whether you included duration, number of channels and the conversion from bits to bytes.' },
          { text: '80,000 bytes', correct: false, feedback: 'Not quite. Check whether you included duration, number of channels and the conversion from bits to bytes.' },
          { text: '160,000 bytes', correct: true, feedback: 'Correct. The file size is 160,000 bytes.' },
          { text: '1,280,000 bytes', correct: false, feedback: 'Not quite. Check whether you included duration, number of channels and the conversion from bits to bytes.' }
        ],
        hint: 'Use sampling rate x bit depth x duration x number of channels, then divide by 8.',
        solution: 'File size = 8000 x 16 x 10 x 1 bits = 1,280,000 bits. Convert to bytes: 1,280,000 / 8 = 160,000 bytes.'
      },
      {
        level: 'Level 2: Apply',
        title: 'Choose a compression method',
        stem: 'A hospital stores medical scan images. The images must be reconstructed exactly later. Which compression method is more suitable?',
        tag: 'compression-choice',
        options: [
          { text: 'Lossy compression', correct: false, feedback: 'Not quite. Lossy compression, lower resolution and reduced colour depth may lose detail, so they are not suitable when exact reconstruction is required.' },
          { text: 'Lossless compression', correct: true, feedback: 'Correct. Lossless compression is needed when exact reconstruction is required.' },
          { text: 'Reducing colour depth only', correct: false, feedback: 'Not quite. Lossy compression, lower resolution and reduced colour depth may lose detail, so they are not suitable when exact reconstruction is required.' },
          { text: 'Using lower resolution only', correct: false, feedback: 'Not quite. Lossy compression, lower resolution and reduced colour depth may lose detail, so they are not suitable when exact reconstruction is required.' }
        ],
        hint: 'The keyword is exactly.',
        solution: 'Lossless compression allows the original data to be reconstructed exactly. This is important for medical images where details must not be lost.'
      },
      {
        level: 'Level 1: Concept check',
        title: 'QR code and barcode',
        stem: 'Why can a QR code usually store more information than a traditional barcode?',
        tag: 'qr-vs-barcode',
        options: [
          { text: 'It stores data in two dimensions.', correct: true, feedback: 'Correct. A QR code stores data in two dimensions, so it can usually store more information than a traditional barcode.' },
          { text: 'It uses only black colour.', correct: false, feedback: 'Not quite. The key difference is that a QR code stores data in two dimensions, not just one direction.' },
          { text: 'It does not need error detection.', correct: false, feedback: 'Not quite. The key difference is that a QR code stores data in two dimensions, not just one direction.' },
          { text: 'It must be scanned from left to right only.', correct: false, feedback: 'Not quite. The key difference is that a QR code stores data in two dimensions, not just one direction.' }
        ],
        hint: 'Compare the direction in which the data pattern is stored.',
        solution: 'A traditional barcode mainly stores data in one direction, while a QR code uses a two-dimensional pattern. Therefore, a QR code can usually store more information.'
      }
    ]
  },
  {
    id: 'A4 Spreadsheet / Data Manipulation and Analysis',
    group: 'Core A Information Processing',
    title: 'A4 Spreadsheet / Data Manipulation and Analysis',
    focus: 'Use spreadsheet structure, formatting, formulae, operators, cell references, sorting, filtering, charts, pivot tables and what-if tools to analyse data and present results clearly.',
    detailsLayout: 'spreadsheetLearningPath',
    stats: [
      { value: 'BUILD', label: 'Write formulae and choose suitable functions', kind: 'word', step: '1' },
      { value: 'COPY', label: 'Control relative, absolute and mixed references', kind: 'word', step: '2' },
      { value: 'ANALYSE', label: 'Sort, filter, summarise and test different scenarios', kind: 'word', step: '3' }
    ],
    cards: [
      { title: 'Spreadsheet structure', body: 'A workbook contains one or more worksheets. A worksheet is made of rows and columns; the intersection of a row and a column is a cell. A cell address such as B2 identifies the column and row.' },
      { title: 'Formula, function and operator', body: 'A formula starts with = and may contain constants, operators, cell references and functions. Operators include arithmetic, comparison, concatenation, range and union operators.' },
      { title: 'Cell references', body: 'Relative references change when copied. Absolute references such as $B$2 keep both column and row fixed. Mixed references lock only the column or row, such as $B2 or B$2.' },
      { title: 'Formatting and layout tools', body: 'Number format changes how a value is displayed, not the actual value stored. Wrap Text, Merge and Center, Freeze Panes and AutoFill improve readability and efficiency.' },
      { title: 'Data manipulation', body: 'Sorting rearranges records into a chosen order. Filtering hides records that do not meet criteria. Pivot tables summarise data by categories such as student, subject or class.' },
      { title: 'Analysis tools', body: 'What-if analysis returns results based on one or more input values. Scenario Manager compares sets of input values; Goal Seek finds the input value needed to reach a target result.' }
    ],
    concepts: [
      'Spreadsheet hierarchy: workbook → worksheet → row/column → cell.',
      'A formula begins with = and can include functions, constants, operators and cell references.',
      'Constants used in spreadsheet logic include TRUE and FALSE.',
      'Arithmetic operators include +, -, *, and /. Comparison operators include =, <>, <, >, <= and >=. The & operator concatenates text. The : operator represents a range, and , can represent a union of separated references.',
      'Relative cell references adjust when copied to another position. For example, B2 copied one row down becomes B3.',
      'Absolute cell references keep both column and row fixed. For example, $B$2 stays $B$2 when copied.',
      'Mixed references fix either the column or the row. For example, $B2 fixes column B, while B$2 fixes row 2.',
      'Number formats include General, Number, Currency, Percentage, Fraction, Scientific, Date and Time. Changing the format does not change the stored value.',
      'Use Text format before input when a value must keep leading zeros or must not be treated as a formula.',
      'Wrap Text displays long content on multiple lines inside a cell. Merge and Center combines selected cells and centers the content.',
      'Freeze Panes keeps selected rows or columns visible while scrolling through a worksheet.',
      'AutoFill can copy formulae or extend a pattern, such as 12, 14, 16, 18.',
      'Sorting changes the order of records, such as arranging marks from low to high. Filtering hides records that do not match the criteria, such as hiding marks below 50.',
      'A pivot table summarises source records into grouped results, such as average score by student or subject.',
      'A column chart compares categories, a line chart shows trends, and a pie chart shows parts of a whole.',
      'What-if analysis tests how output changes when one or more input values change. Goal Seek and Scenario Manager are examples of what-if tools.',
      'Formula errors should be checked by examining brackets, operators, ranges, copied references, function arguments and data types.'
    ],
    formulae: [
      'Constants: TRUE, FALSE',
      'Operators: +, -, *, /, <, >, =, <>, <=, >=, &',
      'Range operator: B2:E2; Union operator: A1,C1,E1',
      'Formula starts with =',
      'Relative reference: B2',
      'Absolute reference: $B$2',
      'Mixed references: $B2 fixes the column; B$2 fixes the row',
      'Exam functions: INT, RAND, SQRT, ROUND, AND, NOT, OR, LEFT, LEN, MID, RIGHT, AVERAGE, COUNT, COUNTIF, MAX, MIN, RANK, SUM, SUMIF, FIND, XLOOKUP, IF',
      'Common syntax examples: SUM(B2:E2), IF(C2>=50,"Pass","Fail"), COUNTIF(C2:C6,">=50"), XLOOKUP(E2,A2:A10,B2:B10)'
    ],
    misconceptions: [
      'Formatting is not calculation. Changing decimal places changes the display, not normally the stored value.',
      'A copied formula may silently become wrong. A fixed tax rate, exchange rate, lookup range or criterion may need $ symbols.',
      'Filtering does not delete records. Non-matching records are hidden and can be displayed again.',
      'Similar functions have different purposes. COUNTIF counts matching cells. SUMIF adds matching values.'
    ],
    activities: [
      {
        title: 'Formula Copy Rescue',
        mode: 'a4FormulaCopyRescue',
        status: 'Available now',
        goal: 'Build a formula, copy it, and lock the references that must stay fixed.',
        misconception: 'A formula that works in the first row may become wrong after copying if a fixed reference is not locked.',
        challenge: 'Repair spreadsheet formulas, copy them across or down, and observe which references move.',
        transfer: 'DSE transfer: write the copied formula and explain why each dollar sign is required.'
      }
    ],
    practice: [
      {
        level: 'Level 1: Concept check',
        title: 'Workbook structure',
        stem: 'Which order correctly describes spreadsheet structure from largest to smallest?',
        options: [
          { text: 'Workbook → worksheet → row/column → cell', correct: true, feedback: 'Correct. A workbook contains worksheets, and each worksheet contains rows, columns and cells.' },
          { text: 'Cell → worksheet → workbook → column', correct: false, feedback: 'Not quite. A cell is the smallest unit in this list.' },
          { text: 'Worksheet → workbook → cell → row', correct: false, feedback: 'A workbook contains worksheets, not the other way round.' },
          { text: 'Column → workbook → row → worksheet', correct: false, feedback: 'Rows and columns are parts of a worksheet.' }
        ],
        hint: 'Think of an Excel file first, then the sheet inside it.',
        solution: 'Workbook → worksheet → row/column → cell.'
      },
      {
        level: 'Level 1: Concept check',
        title: 'Number format',
        stem: 'A cell stores 3.14159265 but is displayed as 3.14 after reducing decimal places. Which statement is correct?',
        options: [
          { text: 'The stored value is still 3.14159265 unless it is actually rounded by a formula.', correct: true, feedback: 'Correct. Number format changes display, not the actual stored value.' },
          { text: 'The stored value has become exactly 3.14.', correct: false, feedback: 'Not quite. Formatting normally changes only the display.' },
          { text: 'Increasing decimal places must show 3.1400.', correct: false, feedback: 'Not quite. It may reveal more of the stored value, such as 3.1416.' },
          { text: 'The cell has been converted into text.', correct: false, feedback: 'Changing decimal places is number formatting, not text conversion.' }
        ],
        hint: 'Separate displayed format from stored value.',
        solution: 'Number format affects appearance only. The underlying value remains 3.14159265 unless a function such as ROUND is used to create a new value.'
      },
      {
        level: 'Level 2: Formula copy',
        title: 'Relative reference',
        stem: 'The formula =A2+B2 in C2 is copied to C3. What should the copied formula become?',
        options: [
          { text: '=A3+B3', correct: true, feedback: 'Correct. Relative references move down by one row.' },
          { text: '=A2+B2', correct: false, feedback: 'That would happen only if the references were locked.' },
          { text: '=$A$2+$B$2', correct: false, feedback: 'Dollar signs were not used in the original formula.' },
          { text: '=A2+B3', correct: false, feedback: 'Both row references move down when copied from row 2 to row 3.' }
        ],
        hint: 'Both references are relative.',
        solution: 'The copied formula is =A3+B3.'
      },
      {
        level: 'Level 2: Formula copy',
        title: 'Mixed reference',
        stem: 'A formula is copied across columns. Which reference keeps row 2 fixed but allows the column to change?',
        options: [
          { text: 'B$2', correct: true, feedback: 'Correct. The dollar sign before 2 fixes the row.' },
          { text: '$B2', correct: false, feedback: '$B2 fixes the column B, not the row.' },
          { text: '$B$2', correct: false, feedback: '$B$2 fixes both column and row.' },
          { text: 'B2', correct: false, feedback: 'B2 is relative, so both column and row can change when copied.' }
        ],
        hint: 'The dollar sign locks the part immediately after it.',
        solution: 'Use B$2 to fix row 2 only.'
      },
      {
        level: 'Level 2: Function choice',
        title: 'Exam function list',
        stem: 'Which function should be used to count how many marks in C2:C20 are at least 50?',
        options: [
          { text: '=COUNTIF(C2:C20,">=50")', correct: true, feedback: 'Correct. COUNTIF counts cells in a range that meet one condition.' },
          { text: '=COUNT(C2:C20,">=50")', correct: false, feedback: 'COUNT counts numeric cells; it does not apply a criterion like this.' },
          { text: '=SUMIF(C2:C20,">=50")', correct: false, feedback: 'SUMIF adds matching values; the task asks how many.' },
          { text: '=IF(C2:C20>=50)', correct: false, feedback: 'IF tests a condition but does not count all matching cells by itself.' }
        ],
        hint: 'The keyword is count with a condition.',
        solution: 'Use =COUNTIF(C2:C20,">=50").'
      },
      {
        level: 'Level 2: Function choice',
        title: 'Text function',
        stem: 'Which formula extracts the first three characters from the text in A2?',
        options: [
          { text: '=LEFT(A2,3)', correct: true, feedback: 'Correct. LEFT returns characters from the start of a text string.' },
          { text: '=RIGHT(A2,3)', correct: false, feedback: 'RIGHT extracts characters from the end.' },
          { text: '=LEN(A2,3)', correct: false, feedback: 'LEN returns the number of characters.' },
          { text: '=FIND(A2,3)', correct: false, feedback: 'FIND locates the position of one text string inside another.' }
        ],
        hint: 'Choose the function that takes characters from the left side.',
        solution: '=LEFT(A2,3) extracts the first three characters.'
      },
      {
        level: 'Level 2: Data manipulation',
        title: 'Filter meaning',
        stem: 'A worksheet is filtered to show only marks of 50 or above. What happens to the marks below 50?',
        options: [
          { text: 'They are hidden from the current view.', correct: true, feedback: 'Correct. Filtering hides non-matching records.' },
          { text: 'They are deleted permanently.', correct: false, feedback: 'Filtering does not delete data.' },
          { text: 'They are sorted in ascending order.', correct: false, feedback: 'Sorting changes order; filtering controls which records are shown.' },
          { text: 'They are converted into a pivot table.', correct: false, feedback: 'Pivot tables summarise data; filtering only controls visibility.' }
        ],
        hint: 'Filter means show matching records only.',
        solution: 'The non-matching records are hidden, not deleted.'
      },
      {
        level: 'Level 2: Data manipulation',
        title: 'Sorting',
        stem: 'The values 80, 32, 94, 62, 45, 71 are sorted in ascending order. Which result is correct?',
        options: [
          { text: '32, 45, 62, 71, 80, 94', correct: true, feedback: 'Correct. Ascending order means from smallest to largest.' },
          { text: '94, 80, 71, 62, 45, 32', correct: false, feedback: 'That is descending order.' },
          { text: '80, 94, 62, 71', correct: false, feedback: 'That looks like a filtered list, not sorting all values.' },
          { text: '32, 62, 45, 71, 80, 94', correct: false, feedback: '45 should come before 62.' }
        ],
        hint: 'Ascending means low to high.',
        solution: 'The ascending order is 32, 45, 62, 71, 80, 94.'
      },
      {
        level: 'Level 3: DSE transfer',
        title: 'Boolean formula',
        stem: 'What is the result of =OR(TRUE,TRUE)?',
        options: [
          { text: 'TRUE', correct: true, feedback: 'Correct. OR returns TRUE when at least one condition is TRUE.' },
          { text: 'FALSE', correct: false, feedback: 'Not quite. OR(FALSE,FALSE) is FALSE, but OR(TRUE,TRUE) is TRUE.' },
          { text: '0', correct: false, feedback: 'The result is a logical value, not a number.' },
          { text: '#VALUE!', correct: false, feedback: 'TRUE and TRUE are valid logical inputs.' }
        ],
        hint: 'OR needs at least one TRUE input.',
        solution: '=OR(TRUE,TRUE) returns TRUE.'
      },
      {
        level: 'Level 3: DSE transfer',
        title: 'Pivot table purpose',
        stem: 'A teacher has many rows of student, subject and score data. Which tool is most suitable for summarising average score by subject?',
        options: [
          { text: 'Pivot table', correct: true, feedback: 'Correct. A pivot table groups records and calculates summaries such as average scores.' },
          { text: 'Wrap Text', correct: false, feedback: 'Wrap Text changes display inside a cell; it does not summarise data.' },
          { text: 'Freeze Panes', correct: false, feedback: 'Freeze Panes keeps headings visible while scrolling.' },
          { text: 'Merge and Center', correct: false, feedback: 'Merge and Center is a layout tool, not an analysis tool.' }
        ],
        hint: 'Look for a tool that groups and summarises records.',
        solution: 'Use a pivot table.'
      },
      {
        level: 'Level 3: DSE transfer',
        title: 'What-if analysis',
        stem: 'A spreadsheet changes the price input and shows different income results for each price. Which feature is being used?',
        options: [
          { text: 'What-if analysis', correct: true, feedback: 'Correct. What-if analysis tests output results using different input values.' },
          { text: 'Filtering', correct: false, feedback: 'Filtering hides records that do not meet criteria.' },
          { text: 'Sorting', correct: false, feedback: 'Sorting rearranges records.' },
          { text: 'Wrap Text', correct: false, feedback: 'Wrap Text only changes how long text is displayed in a cell.' }
        ],
        hint: 'The output changes because the input value changes.',
        solution: 'This is what-if analysis.'
      },
      {
        level: 'Level 3: DSE transfer',
        title: 'Chart choice',
        stem: 'A teacher wants to compare the average marks of four classes. Which chart is most suitable?',
        options: [
          { text: 'Column chart', correct: true, feedback: 'Correct. A column chart is suitable for comparing categories.' },
          { text: 'Pie chart', correct: false, feedback: 'A pie chart shows parts of a whole, not usually category comparison of average marks.' },
          { text: 'Line chart', correct: false, feedback: 'A line chart is better for showing trends over time.' },
          { text: 'Scatter chart', correct: false, feedback: 'A scatter chart is for relationships between two numeric variables.' }
        ],
        hint: 'The task is comparison between classes.',
        solution: 'Use a column chart.'
      }
    ]
  },
  {
    id: 'A5 Simple Database',
    group: 'Core A Information Processing',
    title: 'A5 Simple Database',
    focus: 'Use simple database objects, field data types, input masks, keys and queries to store, filter, summarise and present records accurately.',
    detailsLayout: 'simpleDatabaseLearningPath',
    stats: [
      { value: 'OBJECTS', label: 'Table, form, query and report', kind: 'word', step: '1' },
      { value: 'FIELDS', label: 'Data type, field size, mask and key', kind: 'word', step: '2' },
      { value: 'QUERY', label: 'SELECT, criteria, sorting and functions', kind: 'word', step: '3' }
    ],
    cards: [
      { title: 'Table', body: 'A table stores and displays data in rows and columns. Each row is a record and each column is a field.' },
      { title: 'Form', body: 'A form gives users a friendly interface for entering, editing and viewing one record at a time.' },
      { title: 'Report', body: 'A report displays and summarises data in a customised printable format.' },
      { title: 'Query', body: 'A query filters, sorts, summarises, updates or deletes data in a table. In Core A5, focus on reading simple query meaning.' }
    ],
    concepts: [
      'A record stores data about one item, such as one student or one book.',
      'A field stores one category of data, such as StudentID, Name or Class.',
      'A primary key uniquely identifies each record and should not be blank or duplicated.',
      'A composite key uses more than one field together to identify records uniquely.',
      'A data type controls the kind of value a field can store, such as text, number, date/time, currency, AutoNumber or Yes/No.',
      'An input mask restricts user input to a required pattern, such as 0000-0000 for a phone number.',
      'A form is mainly for entering and viewing records; a query is for selecting records; a report is for formatted output.',
      'Sorting changes record order. Filtering or a WHERE condition selects records that match criteria.',
      'Simple SQL should be read by identifying the fields after SELECT, the table after FROM, the condition after WHERE, the grouping field after GROUP BY and the sorting field after ORDER BY.',
      'NULL means a missing or unknown value. It is not the same as 0.'
    ],
    formulae: ['SELECT field-list FROM table WHERE condition', 'GROUP BY field', 'ORDER BY field ASC or DESC', 'WHERE field IS NULL', 'WHERE field LIKE "A%"', 'Primary key = unique identifier for each record'],
    misconceptions: [
      'A table name is not the same as a field name.',
      'A primary key should identify records uniquely; a name is often unsuitable because different people may share the same name.',
      'A composite key may be suitable when no single field is unique, but the combined fields are unique.',
      'NULL is not zero. A score of 0 is a stored value; NULL means no value has been stored.',
      'A query does not usually change the stored data; it retrieves records that match criteria.',
      'A report is for presentation, not for entering new records.',
      'Number is not always the best data type for numeric-looking data. Phone numbers and IDs are often text because arithmetic is not needed.'
    ],
    activities: [],
    practice: [
      {
        level: 'Level 1: Concept check',
        title: 'Record or field',
        stem: 'In a Student table, StudentID, Name and Class are examples of what?',
        options: [
          { text: 'Fields', correct: true, feedback: 'Correct. These are categories of data stored for each record.' },
          { text: 'Records', correct: false, feedback: 'A record is one complete row, such as one student.' },
          { text: 'Reports', correct: false, feedback: 'A report is formatted output from database data.' },
          { text: 'Forms', correct: false, feedback: 'A form is an interface for entering or viewing records.' }
        ],
        hint: 'Think column headings.',
        solution: 'StudentID, Name and Class are fields.'
      },
      {
        level: 'Level 2: Design choice',
        title: 'Primary key picker',
        stem: 'Which field is usually the best primary key for a Student table?',
        options: [
          { text: 'StudentID', correct: true, feedback: 'Correct. A StudentID should uniquely identify each student.' },
          { text: 'Name', correct: false, feedback: 'Names are not always unique.' },
          { text: 'Class', correct: false, feedback: 'Many students can be in the same class.' },
          { text: 'Gender', correct: false, feedback: 'Many records can share this value, so it is not unique.' }
        ],
        hint: 'A primary key must be unique.',
        solution: 'StudentID is usually the best primary key.'
      },
      {
        level: 'Level 2: SQL reading',
        title: 'Interpret WHERE',
        stem: 'What does this query do?\nSELECT Name FROM Student WHERE Class = "5A"',
        options: [
          { text: 'It shows the names of students in class 5A.', correct: true, feedback: 'Correct. SELECT chooses Name and WHERE filters Class = "5A".' },
          { text: 'It deletes all students not in 5A.', correct: false, feedback: 'SELECT does not delete records.' },
          { text: 'It changes every student to class 5A.', correct: false, feedback: 'There is no UPDATE command here.' },
          { text: 'It shows every field of every student.', correct: false, feedback: 'Only Name is selected, and records are filtered by class.' }
        ],
        hint: 'Read SELECT first, then WHERE.',
        solution: 'It shows the names of students whose Class is 5A.'
      },
      {
        level: 'Level 3: DSE transfer',
        title: 'Choose the object',
        stem: 'A clerk needs a printable list of overdue library books grouped by class. Which database object is most suitable for the final output?',
        options: [
          { text: 'Report', correct: true, feedback: 'Correct. A report presents selected data in a clear printable format.' },
          { text: 'Form', correct: false, feedback: 'A form is mainly for data entry or viewing individual records.' },
          { text: 'Primary key', correct: false, feedback: 'A primary key identifies records; it is not the output object.' },
          { text: 'Data type', correct: false, feedback: 'A data type defines what kind of value a field stores.' }
        ],
        hint: 'The clue is printable final output.',
        solution: 'Use a report.'
      },
      {
        level: 'Level 2: Data type',
        title: 'Choose the field data type',
        stem: 'A transaction table stores Item, Price and Date. Which pair is correct?',
        options: [
          { text: 'Item: Text', correct: true, feedback: 'Correct. Item names such as Egg or Coffee should be stored as text.' },
          { text: 'Price: AutoNumber', correct: false, feedback: 'Price is a money or number value, not an automatically generated identifier.' },
          { text: 'Date: Number', correct: false, feedback: 'A date field should use Date/Time so it can be sorted and used in date calculations.' },
          { text: 'TransactionID: Currency', correct: false, feedback: 'An ID identifies a record; currency is for money values.' }
        ],
        hint: 'Match the data type to how the value is used.',
        solution: 'Item should be Text.'
      },
      {
        level: 'Level 3: DSE transfer',
        title: 'Store date or number of days',
        stem: 'A forum stores each member\'s registration date. A new member cannot post until 10 days after registration. Why store the date instead of the number of days after registration?',
        options: [
          { text: 'It saves the need of updating the data every day.', correct: true, feedback: 'Correct. The elapsed days can be calculated from the stored date, so the value does not need daily updates.' },
          { text: 'It always saves storage space.', correct: false, feedback: 'The main reason is avoiding daily updates, not guaranteed storage saving.' },
          { text: 'It avoids all duplication of data.', correct: false, feedback: 'Avoiding duplication is a database design idea, but this scenario focuses on a changing calculated value.' },
          { text: 'It makes the primary key unnecessary.', correct: false, feedback: 'A registration date does not replace the need for a unique record identifier.' }
        ],
        hint: 'Think about which value changes every day.',
        solution: 'Store the registration date and calculate elapsed days when needed.'
      }
    ]
  },
  {
    id: 'B1 Input and Output Devices',
    group: 'Core B Computer System Fundamentals',
    title: 'B1 Input and Output Devices',
    focus: 'Explain the input-process-output cycle and choose suitable input, automatic input and output devices by task, connection method, media type and user needs.',
    detailsLayout: 'inputOutputLearningPath',
    stats: [
      { value: 'IPO', label: 'Input, process and output cycle', kind: 'word', step: '1' },
      { value: 'INPUT', label: 'Manual, media and automatic input devices', kind: 'word', step: '2' },
      { value: 'OUTPUT', label: 'Monitor, printer, projector and audio output', kind: 'word', step: '3' }
    ],
    cards: [
      { title: 'Input-process-output cycle', body: 'Data is input into the computer, the program processes it, data in storage may be retrieved or updated, and meaningful information is output.' },
      { title: 'Input devices', body: 'Input devices are responsible for the first stage of the IPO cycle. Examples include keyboard, mouse, touchpad, touchscreen, scanner, camera, microphone and sensors.' },
      { title: 'Automatic input devices', body: 'Automatic input devices reduce input time and input errors by capturing data with minimal human effort, such as barcode readers, OMR, OCR and sensors.' },
      { title: 'Output devices', body: 'Output devices are responsible for the last stage of the IPO cycle. Examples include monitor, projector, printer, speakers, headphones and earphones.' }
    ],
    concepts: [
      'In the IPO cycle, input data is processed by a program and meaningful information is output. Storage may be retrieved or updated during processing.',
      'Device choice should be justified by task, data type, accuracy, speed, cost, volume, environment and user needs.',
      'Each keyboard key is represented by a unique code; when a key is pressed, the corresponding code is sent to the computer.',
      'Motion-tracking pointing devices include mouse, trackball, joystick and racing wheel.',
      'Position-tracking pointing devices include touchpad, touchscreen and graphics tablet.',
      'Image scanners and digital cameras create digital image files. Digital video cameras and webcams create digital video files.',
      'OCR converts printed or handwritten text into editable text but may need checking if the source is unclear.',
      'OMR is suitable for marked choices on forms, such as multiple-choice answer sheets.',
      'MICR is reliable for cheque processing because magnetic ink can still be read when printed characters are partly covered.',
      'Sensors support automatic measurement and are often used with monitoring or control systems.',
      'Printer choice depends on output quality, speed, running cost, noise, colour requirement and whether hard copy is needed.',
      'Monitor ports differ: VGA and DVI do not usually carry audio, while HDMI and DisplayPort can support audio and higher resolution.'
    ],
    misconceptions: [
      'A touch screen is both input and output, not only an output device.',
      'OCR, OMR and MICR are not interchangeable; each reads a different kind of source.',
      'The fastest device is not always the best choice if accuracy, cost or environment matters more.',
      'A sensor reads physical data; it does not by itself decide the whole control action.',
      'A monitor is an output device. It may appear in an online lesson setup, but it is not an input device.',
      'Wi-Fi is not a common direct connection method for ordinary headphones compared with USB, 3.5 mm jack and Bluetooth.',
      'A printer cannot input Chinese characters; it is an output device.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Reading answer sheets',
        stem: 'Which technology is most suitable for marking multiple-choice answer sheets with shaded boxes?',
        options: [
          { text: 'OMR', correct: true, feedback: 'Correct. OMR detects the positions of shaded marks on prepared forms.' },
          { text: 'OCR', correct: false, feedback: 'OCR recognises characters, not shaded-choice positions.' },
          { text: 'MICR', correct: false, feedback: 'MICR reads magnetic-ink characters, commonly on cheques.' },
          { text: 'Barcode reader', correct: false, feedback: 'A barcode reader scans encoded bars or patterns, not shaded answer boxes.' }
        ],
        hint: 'Look for shaded marks on a prepared form.',
        solution: 'Use OMR.'
      },
      {
        level: 'Checkpoint',
        title: 'Cheque processing',
        stem: 'A bank needs to read cheque numbers reliably even when the cheque is slightly dirty. Which input technology is most suitable?',
        options: [
          { text: 'MICR', correct: true, feedback: 'Correct. MICR reads magnetic ink and is designed for cheque processing.' },
          { text: 'Touch screen', correct: false, feedback: 'A touch screen captures user touches, not cheque characters.' },
          { text: 'OMR', correct: false, feedback: 'OMR detects shaded marks, not magnetic cheque characters.' },
          { text: 'Microphone', correct: false, feedback: 'A microphone captures sound, not printed cheque data.' }
        ],
        hint: 'The clue is cheque numbers and magnetic ink.',
        solution: 'Use MICR.'
      },
      {
        level: 'Checkpoint',
        title: 'Printer choice',
        stem: 'A school office prints many black-and-white notices every day and wants low cost per page. Which printer type is usually most suitable?',
        options: [
          { text: 'Laser printer', correct: true, feedback: 'Correct. Laser printers are usually fast and economical for high-volume text printing.' },
          { text: 'Inkjet printer', correct: false, feedback: 'Inkjet printers can print good colour output, but running cost may be higher for many text pages.' },
          { text: '3D printer', correct: false, feedback: 'A 3D printer creates physical objects, not ordinary notices.' },
          { text: 'Plotter', correct: false, feedback: 'A plotter is for large technical drawings, not daily office notices.' }
        ],
        hint: 'Consider volume, speed and cost per page.',
        solution: 'A laser printer is usually the best choice.'
      },
      {
        level: 'Level 2: Device choice',
        title: 'Comic illustration input',
        stem: 'Which input device is most suitable for creating comic illustrations?',
        options: [
          { text: 'Graphics tablet', correct: true, feedback: 'Correct. A graphics tablet is suitable for drawing and illustration work.' },
          { text: 'Mouse', correct: false, feedback: 'A mouse can draw, but it is less suitable for precise illustration than a graphics tablet.' },
          { text: 'Touch screen', correct: false, feedback: 'A touchscreen can support drawing, but the best listed device for comic illustrations is a graphics tablet.' },
          { text: 'Trackball', correct: false, feedback: 'A trackball controls a pointer; it is not ideal for drawing comic illustrations.' }
        ],
        hint: 'Look for a device designed for drawing.',
        solution: 'Use a graphics tablet.'
      },
      {
        level: 'Level 2: Input or output',
        title: 'Online lesson devices',
        stem: 'During online lessons, which of the following devices may be used: (1) monitor, (2) webcam, (3) printer?',
        options: [
          { text: '(1), (2) and (3)', correct: true, feedback: 'Correct. A monitor displays the lesson, a webcam captures video, and a printer may print learning materials.' },
          { text: '(2) only', correct: false, feedback: 'A webcam is input, but a monitor and printer may also be used in an online lesson setup.' },
          { text: '(1) only', correct: false, feedback: 'A monitor alone is not the only possible device.' },
          { text: '(3) only', correct: false, feedback: 'A printer is not the only possible device.' }
        ],
        hint: 'The question asks may be used, not only input devices.',
        solution: 'All three may be used.'
      },
      {
        level: 'Level 3: DSE transfer',
        title: 'OCR application',
        stem: 'Which is an application of OCR software?',
        options: [
          { text: 'Converting printed documents into a digital text file.', correct: true, feedback: 'Correct. OCR recognises printed characters and converts them into editable digital text.' },
          { text: 'Checking answers on a multiple-choice answer sheet.', correct: false, feedback: 'That is OMR, not OCR.' },
          { text: 'Generating subtitles by inputting audio.', correct: false, feedback: 'That is speech recognition, not OCR.' },
          { text: 'Checking differences between two document files.', correct: false, feedback: 'That is file comparison, not OCR.' }
        ],
        hint: 'OCR means Optical Character Recognition.',
        solution: 'OCR converts printed documents into digital text.'
      },
      {
        level: 'Level 3: DSE transfer',
        title: 'Sensor selection',
        stem: 'A powered drill should detect whether it is overheated and halt automatically. Which sensor should be used?',
        options: [
          { text: 'Temperature sensor', correct: true, feedback: 'Correct. Overheating is detected by measuring temperature.' },
          { text: 'Gyroscope', correct: false, feedback: 'A gyroscope detects orientation or rotation, not overheating.' },
          { text: 'Ultrasonic sensor', correct: false, feedback: 'An ultrasonic sensor detects distance or objects, not overheating.' },
          { text: 'Light sensor', correct: false, feedback: 'A light sensor detects light intensity, not temperature.' }
        ],
        hint: 'Overheating is about heat.',
        solution: 'Use a temperature sensor.'
      }
    ]
  },
  {
    id: 'B2 Computer Hardware',
    group: 'Core B Computer System Fundamentals',
    title: 'B2 Computer Hardware',
    focus: 'Understand system-unit components, CPU operation, buses, memory, storage devices and performance ideas through realistic specification decisions.',
    detailsLayout: 'computerHardwareLearningPath',
    stats: [
      { value: 'UNIT', label: 'Motherboard, CPU, memory, storage and PSU', kind: 'word', step: '1' },
      { value: 'CPU', label: 'Machine cycle, buses, clock rate and cores', kind: 'word', step: '2' },
      { value: 'STORE', label: 'Memory hierarchy and secondary storage', kind: 'word', step: '3' }
    ],
    cards: [
      { title: 'System unit components', body: 'CPU, main memory, storage, motherboard, expansion cards, ports and buses work together to process and move data.' },
      { title: 'Fetch-decode-execute', body: 'The CPU fetches an instruction from memory, decodes what operation is required and executes it using registers and control signals.' },
      { title: 'Buses and memory', body: 'Data bus carries data, address bus identifies memory locations and control bus carries timing and control signals.' },
      { title: 'Performance and bottlenecks', body: 'Performance depends on CPU, RAM, storage speed, cache, graphics, network and software requirements. One weak component can limit the whole system.' }
    ],
    concepts: [
      'CPU clock speed, number of cores and cache affect performance, but the best specification depends on the task.',
      'The motherboard serves as a platform to connect computer components together.',
      'The processor processes data and instructions and controls the operation of the computer system.',
      'System buses transfer control signals, memory addresses, data and instructions between components.',
      'Clock rate is the number of clock cycles a CPU performs in one second.',
      'Word length is the number of bits processed by the CPU each time.',
      'RAM stores programs and data currently in use; secondary storage stores data persistently.',
      'RAM is volatile and can be rewritten at high speed; ROM is non-volatile and usually cannot be rewritten.',
      'In the memory hierarchy, registers and cache have high access rates but small capacity and high unit price.',
      'SSD storage usually gives faster access than HDD storage, especially for starting systems and loading files.',
      'Magnetic tape usually uses sequential access; hard disk, SSD and optical disk can use direct access.',
      'A bottleneck is the component that limits overall performance.',
      'Specification comparison should use principles and user needs, not brand or product trivia.'
    ],
    misconceptions: [
      'A higher single specification does not guarantee a better computer for every task.',
      'RAM and secondary storage are different; RAM is volatile while storage is persistent.',
      'More storage capacity does not automatically make processing faster.',
      'Fetch-decode-execute is a cycle for instructions, not a file-copying process.',
      'A 64-bit processor is not simply twice as efficient as a 32-bit processor.',
      'Direct access storage can still read data sequentially when needed.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'CPU cycle',
        stem: 'In the CPU instruction cycle, what happens immediately after an instruction is fetched from memory?',
        options: [
          { text: 'The instruction is decoded.', correct: true, feedback: 'Correct. The usual cycle is fetch, decode and execute.' },
          { text: 'The hard disk is formatted.', correct: false, feedback: 'Formatting storage is not part of the CPU instruction cycle.' },
          { text: 'The monitor displays the result directly.', correct: false, feedback: 'Output may happen later, but the next CPU cycle step is decoding.' },
          { text: 'The data bus becomes permanent storage.', correct: false, feedback: 'A bus transfers signals; it is not storage.' }
        ],
        hint: 'Remember the three words in order.',
        solution: 'After fetch, the CPU decodes the instruction.'
      },
      {
        level: 'Checkpoint',
        title: 'RAM or storage',
        stem: 'Why can adding RAM improve performance when many applications are open?',
        options: [
          { text: 'More programs and data can be kept in main memory.', correct: true, feedback: 'Correct. This reduces the need to swap data to slower storage.' },
          { text: 'It permanently stores more photos.', correct: false, feedback: 'Permanent file storage is secondary storage, not RAM.' },
          { text: 'It increases the monitor resolution.', correct: false, feedback: 'Resolution depends on display and graphics hardware, not RAM alone.' },
          { text: 'It replaces the CPU.', correct: false, feedback: 'RAM supports processing but does not perform CPU operations.' }
        ],
        hint: 'RAM is working memory.',
        solution: 'More RAM helps keep active programs and data in main memory.'
      },
      {
        level: 'Checkpoint',
        title: 'Bottleneck',
        stem: 'A video editor has a fast CPU but very little RAM, causing frequent slowdowns when editing large clips. What is the likely bottleneck?',
        options: [
          { text: 'RAM', correct: true, feedback: 'Correct. The limited RAM is restricting the system for this workload.' },
          { text: 'Keyboard', correct: false, feedback: 'The keyboard is not limiting video editing performance here.' },
          { text: 'Printer', correct: false, feedback: 'Printing is unrelated to editing large video clips.' },
          { text: 'More brand recognition', correct: false, feedback: 'DSE explanations should refer to hardware principles, not brand reputation.' }
        ],
        hint: 'Find the weak component that limits the task.',
        solution: 'RAM is the bottleneck.'
      },
      {
        level: 'Level 2: Bus role',
        title: 'System bus',
        stem: 'Which system bus transfers memory addresses?',
        options: [
          { text: 'Address bus', correct: true, feedback: 'Correct. The address bus transfers memory addresses.' },
          { text: 'Data bus', correct: false, feedback: 'The data bus transfers data or instructions.' },
          { text: 'Control bus', correct: false, feedback: 'The control bus transfers control signals.' },
          { text: 'USB cable only', correct: false, feedback: 'USB is an external connection standard, not the internal system bus role here.' }
        ],
        hint: 'The bus name tells you the object transferred.',
        solution: 'The address bus transfers memory addresses.'
      },
      {
        level: 'Level 3: DSE transfer',
        title: 'Word length misconception',
        stem: 'Which statement about a 64-bit processor is most accurate?',
        options: [
          { text: 'It can address more memory and handle more complex functions, but performance is not simply doubled.', correct: true, feedback: 'Correct. Word length affects capability, but performance is not linearly proportional.' },
          { text: 'It is always exactly twice as efficient as a 32-bit processor.', correct: false, feedback: 'This is the common misconception. Efficiency is not simply doubled.' },
          { text: 'It cannot run any 32-bit software.', correct: false, feedback: 'Compatibility depends on system support; this is not the key B2 point.' },
          { text: 'It only affects the monitor resolution.', correct: false, feedback: 'Word length is a CPU concept, not just display output.' }
        ],
        hint: 'The screenshot warns against a direct 2x efficiency claim.',
        solution: 'A 64-bit processor can address more memory, but performance is not simply twice as high.'
      }
    ]
  },
  {
    id: 'B3 Computer Software',
    group: 'Core B Computer System Fundamentals',
    title: 'B3 Computer Software',
    focus: 'Connect system software, application software, operating systems, utilities, drivers, user interfaces and processing modes to user scenarios.',
    detailsLayout: 'computerSoftwareLearningPath',
    stats: [
      { value: 'SYSTEM', label: 'System software controls hardware and provides platform', kind: 'word', step: '1' },
      { value: 'APP', label: 'Application software performs user tasks', kind: 'word', step: '2' },
      { value: 'MODE', label: 'Batch, real-time, parallel, distributed and virtualisation', kind: 'word', step: '3' }
    ],
    cards: [
      { title: 'Operating system functions', body: 'An operating system manages files, memory, processes, devices, security and the user interface so applications can run.' },
      { title: 'Utility software', body: 'Utility programs maintain, protect or optimise a computer, such as antivirus, backup, compression, disk cleanup and file management tools.' },
      { title: 'Drivers', body: 'A driver lets the operating system communicate with a hardware device using the correct commands.' },
      { title: 'Processing modes and licences', body: 'Batch, real-time and interactive processing suit different tasks. Software licences define legal use, copying and modification rights.' }
    ],
    concepts: [
      'System software supports the operation of the computer; application software helps users perform specific tasks.',
      'OS functions include resource management, file management, memory management, process management, device management and user interface provision.',
      'A driver is needed when the OS must control or communicate with a device correctly.',
      'Utility programs include file manager, system monitor, virus checker, firewall software, data compressor, defragmentation software, backup software and uninstaller.',
      'GUI uses visual elements and pointing devices; CLI uses typed commands and does not require a pointing device.',
      'Batch processing suits large groups of jobs without immediate interaction; real-time processing needs immediate response.',
      'Parallel processing usually uses multiple processors. Distributed processing uses multiple computers connected by a network.',
      'Virtualisation divides hardware into multiple virtual portions with the help of utility programs.',
      'Licence questions should stay simple: proprietary, freeware, shareware and open-source rights or restrictions.'
    ],
    misconceptions: [
      'A utility program is not the whole operating system; it performs a maintenance or protection task.',
      'A driver is software, not a cable or hardware adapter.',
      'Freeware is not automatically open source.',
      'Real-time processing does not simply mean fast; it means response within a required time limit.',
      'Virus checking is not a primary function of an operating system; it is done by utility software.',
      'Defragmentation is usually for magnetic disks, not SSDs.',
      'Driver programs may be installed together with the operating system; they do not operate independently from it.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'OS function',
        stem: 'Which operating system function is mainly responsible for organising folders and files?',
        options: [
          { text: 'File management', correct: true, feedback: 'Correct. File management handles naming, storing, locating and organising files.' },
          { text: 'Image editing', correct: false, feedback: 'Image editing is an application task, not a core OS function.' },
          { text: 'Mail merge', correct: false, feedback: 'Mail merge is an application feature.' },
          { text: 'Barcode scanning', correct: false, feedback: 'Barcode scanning is input, not file organisation.' }
        ],
        hint: 'Look for the OS function related to files.',
        solution: 'File management.'
      },
      {
        level: 'Checkpoint',
        title: 'Driver role',
        stem: 'A new printer is connected but the computer cannot use all its features until extra software is installed. What is the extra software most likely to be?',
        options: [
          { text: 'Device driver', correct: true, feedback: 'Correct. A driver lets the OS communicate with and control the printer.' },
          { text: 'Spreadsheet', correct: false, feedback: 'A spreadsheet is application software, not printer-control software.' },
          { text: 'Firewall rule', correct: false, feedback: 'A firewall rule controls network traffic, not printer features.' },
          { text: 'Magnetic ink', correct: false, feedback: 'Magnetic ink relates to MICR, not printer control.' }
        ],
        hint: 'Which software connects OS and hardware?',
        solution: 'Install the device driver.'
      },
      {
        level: 'Checkpoint',
        title: 'Processing mode',
        stem: 'A payroll system calculates salaries for all staff at the end of each month without user interaction during processing. Which mode is most suitable?',
        options: [
          { text: 'Batch processing', correct: true, feedback: 'Correct. Payroll is a common batch-processing example.' },
          { text: 'Real-time processing', correct: false, feedback: 'Real-time processing is used when immediate response is required.' },
          { text: 'Virtual memory', correct: false, feedback: 'Virtual memory is a memory-management technique, not a processing mode.' },
          { text: 'Open-source processing', correct: false, feedback: 'Open source describes licence/source-code availability, not processing mode.' }
        ],
        hint: 'Many jobs processed together at a scheduled time.',
        solution: 'Batch processing is most suitable.'
      },
      {
        level: 'Level 2: Utility program',
        title: 'Utility examples',
        stem: 'Which of the following are utility programs: (1) System monitor, (2) Virus checker, (3) Data compressor, (4) Word processor?',
        options: [
          { text: '(1), (2) and (3) only', correct: true, feedback: 'Correct. A word processor is application software, not a utility program.' },
          { text: '(1) and (2) only', correct: false, feedback: 'A data compressor is also a utility program.' },
          { text: '(2) and (4) only', correct: false, feedback: 'A word processor is application software, and system monitor is also a utility.' },
          { text: '(1), (2), (3) and (4)', correct: false, feedback: 'Word processor should not be included as a utility program.' }
        ],
        hint: 'Utilities maintain, protect or optimise the system.',
        solution: 'System monitor, virus checker and data compressor are utility programs.'
      },
      {
        level: 'Level 3: DSE transfer',
        title: 'CLI statement',
        stem: 'Which statement about a command line interface is correct?',
        options: [
          { text: 'It does not require pointing devices.', correct: true, feedback: 'Correct. CLI mainly uses typed commands.' },
          { text: 'It is usually used to run media development software.', correct: false, feedback: 'Media development software is usually easier with GUI tools.' },
          { text: 'It cannot control the computer with commands.', correct: false, feedback: 'CLI controls the system using commands.' },
          { text: 'It always requires more graphical resources than GUI.', correct: false, feedback: 'CLI usually needs fewer graphical resources.' }
        ],
        hint: 'CLI means command line interface.',
        solution: 'A CLI does not require pointing devices.'
      },
      {
        level: 'Level 3: DSE transfer',
        title: 'Driver statement',
        stem: 'Which statement about driver programs is correct?',
        options: [
          { text: 'Driver programs may be installed together with the operating system.', correct: true, feedback: 'Correct. Some device drivers are installed with the OS.' },
          { text: 'Driver programs operate independently from the operating system.', correct: false, feedback: 'Drivers allow the OS to communicate with hardware; they do not operate independently.' },
          { text: 'Driver programs never support hot swapping.', correct: false, feedback: 'This statement is too absolute.' },
          { text: 'Basic peripherals such as keyboards and mice do not require any drivers.', correct: false, feedback: 'They still use drivers, though often built into the OS.' }
        ],
        hint: 'Drivers connect OS and hardware.',
        solution: 'Driver programs may be installed together with the OS.'
      }
    ]
  },
  {
    id: 'C1 Networking and Internet Basics',
    group: 'Core C Internet and its Applications',
    title: 'C1 Networking and Internet Basics',
    focus: 'Build network diagrams, compare LAN and WAN, and visualise how data moves across network devices.',
    detailsLayout: 'networkingBasicsLearningPath',
    stats: [
      { value: 'LAN/WAN', label: 'Scope, cost and data transfer rate', kind: 'word', step: '1' },
      { value: 'DEVICE', label: 'NIC, switch, AP, router and modem roles', kind: 'word', step: '2' },
      { value: 'ACCESS', label: 'Cables, wireless methods and ISP access', kind: 'word', step: '3' }
    ],
    cards: [
      { title: 'Network scope and models', body: 'LAN covers a small local area. WAN covers a wider geographical area. Client-server uses central services; peer-to-peer shares resources directly between peers.' },
      { title: 'Network devices', body: 'Switches connect devices within a LAN, routers connect networks, wireless access points provide Wi-Fi and modems connect to an ISP service where needed.' },
      { title: 'Packet journey', body: 'Data is split into packets, addressed, routed through network devices and reassembled at the destination.' },
      { title: 'Internet access choices', body: 'Access methods should be compared simply by speed, coverage, stability, mobility, cost and suitability for the location.' }
    ],
    concepts: [
      'A LAN is usually owned or managed by one organisation in a limited area; a WAN links networks over a larger area.',
      'Client-server centralises services and control; peer-to-peer allows peers to share resources directly.',
      'A switch forwards data within a local network, while a router forwards data between networks.',
      'Packet switching sends data in smaller packets that may take different routes.',
      'Internet access choice should be scenario-based, not based on one universally best method.'
    ],
    misconceptions: [
      'LAN and WAN are about coverage and ownership, not simply the number of computers.',
      'A switch and router are not the same device role.',
      'The internet and the web are related but not identical.',
      'Peer-to-peer does not mean there is no network; it means there is no dedicated central server for that service.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'LAN or WAN',
        stem: 'A school connects computers inside one campus under the school network. Which term best describes this network?',
        options: [
          { text: 'LAN', correct: true, feedback: 'Correct. It covers a limited local area managed by one organisation.' },
          { text: 'WAN', correct: false, feedback: 'A WAN connects networks across a wider geographical area.' },
          { text: 'P2P only', correct: false, feedback: 'P2P describes a resource-sharing model, not the geographical scope.' },
          { text: 'DNS', correct: false, feedback: 'DNS translates domain names to IP addresses.' }
        ],
        hint: 'Campus scale is local.',
        solution: 'It is a LAN.'
      },
      {
        level: 'Checkpoint',
        title: 'Device role',
        stem: 'Which device is mainly used to forward data between different networks?',
        options: [
          { text: 'Router', correct: true, feedback: 'Correct. A router connects and forwards data between networks.' },
          { text: 'Switch', correct: false, feedback: 'A switch mainly forwards data within a LAN.' },
          { text: 'Speaker', correct: false, feedback: 'A speaker is an output device.' },
          { text: 'Scanner', correct: false, feedback: 'A scanner is an input device.' }
        ],
        hint: 'Between networks, not just inside one LAN.',
        solution: 'Use a router.'
      },
      {
        level: 'Checkpoint',
        title: 'Client-server',
        stem: 'In a client-server network, where is a shared login service usually managed?',
        options: [
          { text: 'On a central server', correct: true, feedback: 'Correct. Client-server systems centralise services such as authentication.' },
          { text: 'Only on each client keyboard', correct: false, feedback: 'A keyboard enters data; it does not manage network login services.' },
          { text: 'By every peer with no central control', correct: false, feedback: 'That describes peer-to-peer more closely.' },
          { text: 'Inside a printer cartridge', correct: false, feedback: 'A printer cartridge has no role in login management.' }
        ],
        hint: 'The name contains server.',
        solution: 'The service is managed on a central server.'
      }
    ]
  },
  {
    id: 'C2 Internet Protocols',
    group: 'Core C Internet and its Applications',
    title: 'C2 Internet Protocols',
    focus: 'Dissect URLs, map protocols to internet actions, diagnose DNS and packet problems, and connect services to ports.',
    detailsLayout: 'internetProtocolsLearningPath',
    stats: [
      { value: 'TCP/IP', label: 'Packets, IP addressing, routing and reassembly', kind: 'word', step: '1' },
      { value: 'DNS/URL', label: 'Name resolution, FQDN and URL parts', kind: 'word', step: '2' },
      { value: 'HTTP', label: 'HTTP/HTTPS, SMTP, POP3 and IMAP', kind: 'word', step: '3' }
    ],
    cards: [
      { title: 'URL parts', body: 'A URL may contain protocol, domain name or host, path, filename, query string and port. Students should identify parts from a real-looking URL.' },
      { title: 'DNS', body: 'DNS translates a domain name into an IP address so a device can locate the destination server.' },
      { title: 'Protocols', body: 'Protocols are rules for communication. Common examples include HTTP, HTTPS, FTP, SMTP, POP3, IMAP, TCP and IP.' },
      { title: 'Packets', body: 'TCP/IP communication uses packet addressing, sequencing, error checking and reassembly ideas at a simple DSE level.' }
    ],
    concepts: [
      'HTTP and HTTPS support web communication; HTTPS adds encryption and certificate-based security.',
      'SMTP is used for sending email; POP3 and IMAP are used for receiving or accessing email.',
      'FTP is used for file transfer.',
      'DNS does not store webpages; it resolves names to IP addresses.',
      'Packets include information that helps them reach the destination and be reassembled.'
    ],
    misconceptions: [
      'A domain name is not the same as a full URL.',
      'DNS does not encrypt data; HTTPS is related to encrypted web communication.',
      'SMTP and HTTP are not interchangeable.',
      'Packet assembly is a simple concept here; avoid overcomplicated routing details beyond the syllabus boundary.'
    ],
    activities: [
      {
        title: 'Cipher Encryption Lab',
        goal: 'Shift letters to see how plaintext becomes ciphertext and why HTTPS must encrypt data before transmission.',
        misconception: 'Encryption is not just hiding a URL. It protects the message content while it travels across a network.',
        challenge: 'Change the shift key and predict one encrypted letter before checking the output.',
        transfer: 'DSE transfer: HTTPS uses SSL/TLS to encrypt web communication so intercepted data is not easily readable.',
        status: 'Ready',
        mode: 'c2Cipher'
      }
    ],
    practice: [
      {
        level: 'Checkpoint',
        title: 'DNS purpose',
        stem: 'What is the main function of DNS?',
        options: [
          { text: 'Translate domain names into IP addresses', correct: true, feedback: 'Correct. DNS resolves human-readable names to IP addresses.' },
          { text: 'Encrypt every email attachment', correct: false, feedback: 'DNS does not provide encryption.' },
          { text: 'Print webpages', correct: false, feedback: 'Printing is an output task, not DNS.' },
          { text: 'Store all webpages permanently', correct: false, feedback: 'DNS maps names to addresses; web servers store webpages.' }
        ],
        hint: 'DNS connects names and addresses.',
        solution: 'DNS translates domain names into IP addresses.'
      },
      {
        level: 'Checkpoint',
        title: 'Secure web protocol',
        stem: 'Which protocol is most suitable for submitting payment details through a website?',
        options: [
          { text: 'HTTPS', correct: true, feedback: 'Correct. HTTPS provides encrypted web communication and uses certificates.' },
          { text: 'HTTP', correct: false, feedback: 'HTTP alone does not provide the same encrypted protection.' },
          { text: 'SMTP', correct: false, feedback: 'SMTP is for sending email, not secure web payment submission.' },
          { text: 'OMR', correct: false, feedback: 'OMR is an input technology, not an internet protocol.' }
        ],
        hint: 'Look for secure web communication.',
        solution: 'Use HTTPS.'
      },
      {
        level: 'Checkpoint',
        title: 'Email protocol',
        stem: 'Which protocol is mainly used to send email from a mail client to a mail server?',
        options: [
          { text: 'SMTP', correct: true, feedback: 'Correct. SMTP is used for sending email.' },
          { text: 'POP3', correct: false, feedback: 'POP3 is used for receiving/downloading email.' },
          { text: 'DNS', correct: false, feedback: 'DNS resolves names to IP addresses.' },
          { text: 'HTML', correct: false, feedback: 'HTML structures webpages; it is not an email sending protocol.' }
        ],
        hint: 'Sending mail starts with S.',
        solution: 'SMTP is used for sending email.'
      }
    ]
  },
  {
    id: 'C3 Internet Services and Applications',
    group: 'Core C Internet and its Applications',
    title: 'C3 Internet Services and Applications',
    focus: 'Use internet services wisely by understanding email, search, cloud services, IoT, e-commerce and file sharing risks.',
    detailsLayout: 'internetServicesLearningPath',
    stats: [
      { value: 'CLOUD', label: 'Cloud computing, IoT and smart city', kind: 'word', step: '1' },
      { value: 'EMAIL', label: 'To, Cc, Bcc and file transfer choices', kind: 'word', step: '2' },
      { value: 'MEDIA', label: 'Search, multimedia, streaming and conferencing', kind: 'word', step: '3' }
    ],
    cards: [
      { title: 'Search and email', body: 'Search operators refine results. Email fields such as To, Cc and Bcc affect who can see recipient addresses.' },
      { title: 'Cloud services', body: 'Cloud storage and collaboration depend on account permissions, sharing links, version control and data privacy.' },
      { title: 'IoT data flow', body: 'IoT systems collect data through sensors, transmit it through networks, process it on a device or server and may trigger output or alerts.' },
      { title: 'Online transactions', body: 'Online shopping and banking involve identity, payment, encryption, HTTPS, phishing risk and records of transactions.' }
    ],
    concepts: [
      'Search operators such as quotation marks, minus signs and site: can narrow search results.',
      'Bcc hides recipient addresses from other recipients; Cc makes recipients visible.',
      'Cloud sharing should use suitable permissions such as view, comment or edit.',
      'IoT combines sensors, network communication, data processing and output actions.',
      'Online transactions should use HTTPS, trusted sites, strong authentication and careful checking of payment details.'
    ],
    misconceptions: [
      'Putting recipients in Cc does not hide their email addresses.',
      'A cloud link is not automatically private; permissions decide who can access it.',
      'IoT is not just any website; it involves connected physical devices or sensors.',
      'A search engine result at the top is not automatically reliable.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Email privacy',
        stem: 'A teacher sends an email to many parents and does not want parents to see each other\'s email addresses. Which field should be used?',
        options: [
          { text: 'Bcc', correct: true, feedback: 'Correct. Bcc hides recipient addresses from other recipients.' },
          { text: 'Cc', correct: false, feedback: 'Cc recipients can usually see the other recipient addresses.' },
          { text: 'Subject', correct: false, feedback: 'The subject describes the email topic; it does not control recipient visibility.' },
          { text: 'Attachment', correct: false, feedback: 'An attachment is a file sent with the email.' }
        ],
        hint: 'Which field hides recipients?',
        solution: 'Use Bcc.'
      },
      {
        level: 'Checkpoint',
        title: 'Search operator',
        stem: 'Which search query is best for finding pages from hkeaa.edu.hk about ICT only?',
        options: [
          { text: 'ICT site:hkeaa.edu.hk', correct: true, feedback: 'Correct. site: limits results to the specified domain.' },
          { text: 'ICT -hkeaa.edu.hk', correct: false, feedback: 'The minus sign excludes terms; it would not limit results to HKEAA.' },
          { text: 'ICT OR all websites', correct: false, feedback: 'This broadens the search instead of limiting it.' },
          { text: 'www only', correct: false, feedback: 'This is not a meaningful precise search query.' }
        ],
        hint: 'Use the operator for a specific site.',
        solution: 'Use ICT site:hkeaa.edu.hk.'
      },
      {
        level: 'Checkpoint',
        title: 'Cloud permission',
        stem: 'A student should read a shared report but must not change it. Which permission is most suitable?',
        options: [
          { text: 'View only', correct: true, feedback: 'Correct. View permission allows reading without editing.' },
          { text: 'Edit', correct: false, feedback: 'Edit permission allows changes, which are not required.' },
          { text: 'Owner', correct: false, feedback: 'Owner permission gives too much control.' },
          { text: 'Public edit link', correct: false, feedback: 'A public edit link creates unnecessary risk.' }
        ],
        hint: 'Give only the permission needed.',
        solution: 'Use view-only permission.'
      }
    ]
  },
  {
    id: 'C4 Elementary Web Authoring',
    group: 'Core C Internet and its Applications',
    title: 'C4 Elementary Web Authoring',
    focus: 'Build simple web pages, repair broken paths and links, and make layout and accessibility decisions for a target audience.',
    cards: [
      { title: 'HTML structure', body: 'HTML uses tags such as html, head, title, body, h1, p, a, img, ul, ol, li and table elements to structure content.' },
      { title: 'Links and images', body: 'The a tag creates hyperlinks and img displays images. Missing href, src or alt values are common repair points.' },
      { title: 'Relative paths', body: 'Relative paths depend on the current file location. Same folder, child folder and parent folder paths should be traced carefully.' },
      { title: 'Simple repair work', body: 'DSE web authoring usually focuses on reading, completing and fixing simple HTML, links, images and paths.' }
    ],
    concepts: [
      'Opening and closing tags must match for many HTML elements.',
      'href is used for hyperlinks; src is used for image sources.',
      '../ means move to the parent folder in a relative path.',
      'Broken webpages often come from wrong filenames, wrong folders, missing file extensions or unmatched tags.',
      'Readable pages need clear structure and meaningful link text.'
    ],
    misconceptions: [
      'href and src are not the same attribute.',
      'Relative paths are not fixed from the website root unless written that way.',
      'HTML structures content; CSS controls most visual styling.',
      'An image without suitable alt text is less accessible.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Image attribute',
        stem: 'Which attribute gives the file path of an image in an img tag?',
        options: [
          { text: 'src', correct: true, feedback: 'Correct. src specifies the image source file.' },
          { text: 'href', correct: false, feedback: 'href is used for hyperlink destinations.' },
          { text: 'class', correct: false, feedback: 'class is used for styling or scripting hooks, not the image file path.' },
          { text: 'title only', correct: false, feedback: 'title may provide extra text but does not load the image file.' }
        ],
        hint: 'Image source.',
        solution: 'Use src.'
      },
      {
        level: 'Checkpoint',
        title: 'Parent folder',
        stem: 'In a relative path, what does ../ usually mean?',
        options: [
          { text: 'Move up to the parent folder', correct: true, feedback: 'Correct. ../ refers to the parent directory.' },
          { text: 'Move to the same folder', correct: false, feedback: 'Same-folder paths usually use the filename directly or ./' },
          { text: 'Start an email address', correct: false, feedback: 'This is unrelated to email addresses.' },
          { text: 'Close an HTML tag', correct: false, feedback: 'Closing tags use </tag>, not ../.' }
        ],
        hint: 'Think folder navigation.',
        solution: '../ means parent folder.'
      },
      {
        level: 'Checkpoint',
        title: 'Hyperlink tag',
        stem: 'Which HTML element is used to create a hyperlink?',
        options: [
          { text: '<a>', correct: true, feedback: 'Correct. The anchor tag creates hyperlinks.' },
          { text: '<img>', correct: false, feedback: '<img> displays an image.' },
          { text: '<p>', correct: false, feedback: '<p> marks a paragraph.' },
          { text: '<title>', correct: false, feedback: '<title> sets the browser tab/page title.' }
        ],
        hint: 'Anchor.',
        solution: 'Use the <a> tag.'
      }
    ]
  },
  {
    id: 'C5 Network Security and Privacy Threats',
    group: 'Core C Internet and its Applications',
    title: 'C5 Network Security and Privacy Threats',
    focus: 'Recognise malware, network attacks and online privacy threats before choosing a suitable protection method.',
    cards: [
      { title: 'Malware behaviour', body: 'Viruses, worms, trojans, spyware, ransomware and adware differ by spread method, disguise and damage.' },
      { title: 'Phishing and social engineering', body: 'Phishing tricks users into giving credentials, payment details or personal data through fake messages or websites.' },
      { title: 'Network threats', body: 'Threats include unauthorised access, eavesdropping, malicious links, denial-of-service and unsafe public Wi-Fi use.' },
      { title: 'Threat-control matching', body: 'The right control depends on the threat: antivirus, backup, firewall, strong passwords, MFA, encryption, HTTPS and user awareness all solve different problems.' }
    ],
    concepts: [
      'A virus usually attaches to files or programs; a worm can spread across networks more independently.',
      'A trojan disguises itself as legitimate software.',
      'Ransomware encrypts or locks data and demands payment.',
      'Phishing indicators include suspicious sender, urgent pressure, mismatched links, unexpected attachments and requests for sensitive data.',
      'Public Wi-Fi risk can be reduced by HTTPS, VPN, avoiding sensitive transactions and not ignoring certificate warnings.'
    ],
    misconceptions: [
      'Antivirus alone does not stop every security threat.',
      'A strong password does not protect data if the user gives it to a phishing site.',
      'Public Wi-Fi is not automatically safe just because it has a familiar name.',
      'Ransomware is not just annoying advertising; it can block access to data.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Phishing clue',
        stem: 'An email asks a student to click a shortened link and enter the school account password urgently. What is the main risk?',
        options: [
          { text: 'Phishing', correct: true, feedback: 'Correct. The message is trying to trick the user into revealing credentials.' },
          { text: 'OMR error', correct: false, feedback: 'OMR is for reading shaded marks, not email threats.' },
          { text: 'Printer jam', correct: false, feedback: 'A printer jam is a hardware/output problem.' },
          { text: 'Two’s complement overflow', correct: false, feedback: 'Overflow is a data representation issue, not this email risk.' }
        ],
        hint: 'Look for password stealing by deception.',
        solution: 'This is phishing.'
      },
      {
        level: 'Checkpoint',
        title: 'Ransomware',
        stem: 'Which malware type commonly encrypts a user\'s files and demands payment?',
        options: [
          { text: 'Ransomware', correct: true, feedback: 'Correct. Ransomware blocks access to data and demands ransom.' },
          { text: 'Adware', correct: false, feedback: 'Adware mainly displays unwanted advertisements.' },
          { text: 'OMR', correct: false, feedback: 'OMR is not malware.' },
          { text: 'DNS', correct: false, feedback: 'DNS is a naming service, not malware.' }
        ],
        hint: 'The name suggests ransom.',
        solution: 'Ransomware.'
      },
      {
        level: 'Checkpoint',
        title: 'Public Wi-Fi',
        stem: 'Which action best reduces risk when using public Wi-Fi?',
        options: [
          { text: 'Use HTTPS/VPN and avoid sensitive transactions', correct: true, feedback: 'Correct. Encryption and cautious behaviour reduce interception risk.' },
          { text: 'Ignore certificate warnings', correct: false, feedback: 'Ignoring certificate warnings increases risk.' },
          { text: 'Share the account password with friends', correct: false, feedback: 'Sharing passwords weakens account security.' },
          { text: 'Turn off all backups permanently', correct: false, feedback: 'Backups help recover from data loss and ransomware.' }
        ],
        hint: 'Protect transmission and avoid risky actions.',
        solution: 'Use HTTPS/VPN and avoid sensitive transactions.'
      }
    ]
  },
  {
    id: 'C6 Network Security Measures',
    group: 'Core C Internet and its Applications',
    title: 'C6 Network Security Measures',
    focus: 'Apply encryption, authentication and online-transaction safeguards to reduce security risks in realistic network scenarios.',
    cards: [
      { title: 'Authentication and authorisation', body: 'Authentication checks identity. Authorisation checks what an authenticated user is allowed to access or do.' },
      { title: 'Encryption', body: 'Encryption converts readable data into unreadable ciphertext using a key. It protects confidentiality if data is intercepted.' },
      { title: 'Online transaction safety', body: 'Safe transactions use HTTPS, valid certificates, strong authentication, trusted websites, careful checking and secure payment handling.' },
      { title: 'Firewall rules', body: 'A firewall filters network traffic according to rules such as source, destination, port, protocol and action.' }
    ],
    concepts: [
      'Authentication methods include passwords, biometrics, security tokens, one-time passwords and multi-factor authentication.',
      'Authorisation is about permissions after identity has been checked.',
      'Encryption protects confidentiality but does not by itself prove that a user is allowed to access data.',
      'A firewall can block unwanted traffic but cannot fix careless password disclosure.',
      'Online transaction safety combines technical controls and user checking.'
    ],
    misconceptions: [
      'Authentication and authorisation are different terms.',
      'Encryption does not stop every attack; phishing can still trick users.',
      'A firewall is not a substitute for antivirus, backup or user awareness.',
      'HTTPS should be checked with domain and certificate trust, not only the padlock icon in isolation.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Auth terms',
        stem: 'A system checks a password before login. Which process is this?',
        options: [
          { text: 'Authentication', correct: true, feedback: 'Correct. Authentication checks the user\'s identity.' },
          { text: 'Authorisation', correct: false, feedback: 'Authorisation checks permissions after identity is known.' },
          { text: 'Compression', correct: false, feedback: 'Compression reduces data size.' },
          { text: 'Sorting', correct: false, feedback: 'Sorting changes data order.' }
        ],
        hint: 'Identity first, permissions later.',
        solution: 'Password checking is authentication.'
      },
      {
        level: 'Checkpoint',
        title: 'Encryption purpose',
        stem: 'Why is encryption useful when data is transmitted over a network?',
        options: [
          { text: 'It makes intercepted data unreadable without the key.', correct: true, feedback: 'Correct. Encryption protects confidentiality.' },
          { text: 'It guarantees the user never clicks phishing links.', correct: false, feedback: 'Encryption cannot prevent careless user actions.' },
          { text: 'It deletes all malware automatically.', correct: false, feedback: 'Antivirus and other controls handle malware; encryption has a different purpose.' },
          { text: 'It changes a LAN into a WAN.', correct: false, feedback: 'Encryption does not define network scope.' }
        ],
        hint: 'Think confidentiality.',
        solution: 'Encryption makes intercepted data unreadable without the correct key.'
      },
      {
        level: 'Checkpoint',
        title: 'Firewall rule',
        stem: 'Which firewall action would reduce risk from an unnecessary external remote-login service?',
        options: [
          { text: 'Block the related inbound port', correct: true, feedback: 'Correct. Blocking unnecessary inbound traffic reduces the attack surface.' },
          { text: 'Allow every inbound port', correct: false, feedback: 'Allowing all inbound traffic increases risk.' },
          { text: 'Remove all passwords', correct: false, feedback: 'Removing passwords weakens authentication.' },
          { text: 'Use Bcc', correct: false, feedback: 'Bcc is an email privacy field, not a firewall action.' }
        ],
        hint: 'Firewall rules allow or block traffic.',
        solution: 'Block the unnecessary inbound port.'
      }
    ]
  },
  {
    id: 'D1 Problem Formulation and Analysis',
    group: 'Core D Computational Thinking and Programming',
    title: 'D1 Problem Formulation and Analysis',
    focus: 'Break down problems, identify IPO elements, plan algorithms and remove unnecessary details before writing pseudocode.',
    cards: [
      { title: 'IPO analysis', body: 'Identify the input data, the processing steps and the required output before writing an algorithm.' },
      { title: 'Decomposition', body: 'Break a large problem into smaller tasks such as input, calculation, validation and output.' },
      { title: 'Abstraction', body: 'Keep the details needed to solve the problem and ignore irrelevant story details.' },
      { title: 'Algorithm planning', body: 'Use pseudocode, flowcharts or structured steps to plan a solution before coding.' }
    ],
    concepts: [
      'Input is data supplied to the process; output is the result produced after processing.',
      'Processing describes transformations such as calculation, comparison, counting, searching or formatting.',
      'Decomposition helps make a problem easier to understand, test and implement.',
      'Abstraction removes irrelevant details without losing the rules needed for the solution.',
      'Core D problem formulation should prepare students for sequence, selection, iteration and trace-table work.'
    ],
    misconceptions: [
      'Do not list every noun in the scenario as input; choose data actually needed by the algorithm.',
      'Output is not the same as processing. A total mark is output; adding marks is processing.',
      'Abstraction does not mean deleting important conditions or constraints.',
      'Keep this chapter at problem analysis level; do not jump into advanced modular implementation.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'IPO choice',
        stem: 'A program reads three test marks and displays their average. Which item is the processing?',
        options: [
          { text: 'Calculate the average of the three marks.', correct: true, feedback: 'Correct. Processing transforms the input marks into the output average.' },
          { text: 'The three test marks.', correct: false, feedback: 'Those are input values.' },
          { text: 'The displayed average.', correct: false, feedback: 'That is the output.' },
          { text: 'The student name, even if it is not used.', correct: false, feedback: 'Irrelevant data should not be forced into the IPO analysis.' }
        ],
        hint: 'Processing is the action performed on input.',
        solution: 'The processing is calculating the average.'
      },
      {
        level: 'Checkpoint',
        title: 'Decomposition',
        stem: 'Why is decomposition useful when solving a programming problem?',
        options: [
          { text: 'It breaks a complex problem into smaller manageable parts.', correct: true, feedback: 'Correct. Smaller parts are easier to design, test and explain.' },
          { text: 'It removes all inputs from the problem.', correct: false, feedback: 'Inputs are still needed if the algorithm uses them.' },
          { text: 'It guarantees the program has no errors.', correct: false, feedback: 'Decomposition helps design, but testing is still required.' },
          { text: 'It changes the task into advanced modular implementation.', correct: false, feedback: 'Decomposition can be used conceptually without jumping into advanced implementation details.' }
        ],
        hint: 'Think smaller tasks.',
        solution: 'Decomposition breaks the problem into smaller parts.'
      },
      {
        level: 'Checkpoint',
        title: 'Abstraction',
        stem: 'A cinema ticket program needs age and ticket type to calculate price. Which detail is most likely irrelevant?',
        options: [
          { text: 'The colour of the customer\'s shirt', correct: true, feedback: 'Correct. It does not affect the ticket price.' },
          { text: 'The customer\'s age', correct: false, feedback: 'Age may affect child, adult or senior pricing.' },
          { text: 'The ticket type', correct: false, feedback: 'Ticket type may affect the price.' },
          { text: 'The pricing rule', correct: false, feedback: 'The pricing rule is essential processing logic.' }
        ],
        hint: 'Keep details that affect the answer.',
        solution: 'The shirt colour is irrelevant.'
      }
    ]
  },
  {
    id: 'D2 Algorithm Design I - Sequence and Selection',
    group: 'Core D Computational Thinking and Programming',
    title: 'D2 Algorithm Design I - Sequence and Selection',
    focus: 'Trace sequence, selection and Boolean logic through flowcharts, if-else branches and trace tables.',
    cards: [
      { title: 'Sequence and assignment', body: 'Sequence runs statements in order. Assignment stores a value in a variable and can replace the old value.' },
      { title: 'Selection', body: 'Selection uses conditions to choose a branch, such as IF, IF...ELSE or nested decision logic within the Core D boundary.' },
      { title: 'Boolean logic', body: 'AND, OR and NOT combine or reverse true/false results. Conditions must be traced carefully.' },
      { title: 'Trace tables', body: 'Trace tables record variable values and outputs after each important step, especially after assignments and branches.' }
    ],
    concepts: [
      'In sequence, the order of statements affects the final values.',
      'Assignment means the variable receives a value; it is not a mathematical equality statement.',
      'A selection branch runs only when its condition is satisfied.',
      'AND is true only when both conditions are true; OR is true when at least one condition is true; NOT reverses the result.',
      'Trace tables should update values step by step and show skipped branches clearly.'
    ],
    misconceptions: [
      'Do not treat x = x + 1 as an algebra equation; it updates x.',
      'An ELSE branch is used only when the IF condition is false.',
      'OR does not require both conditions to be true.',
      'Keep this chapter focused on sequence, selection, Boolean logic and trace tables.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Assignment trace',
        stem: 'x is 4. The next statement is x = x + 3. What is the new value of x?',
        options: [
          { text: '7', correct: true, feedback: 'Correct. The old value 4 is used, then x is updated to 7.' },
          { text: '4', correct: false, feedback: 'The assignment changes x.' },
          { text: '3', correct: false, feedback: '3 is added to the old value; it does not replace x by itself.' },
          { text: 'The statement is impossible because x cannot equal x + 3.', correct: false, feedback: 'In programming, assignment is not algebraic equality.' }
        ],
        hint: 'Use the old value on the right first.',
        solution: 'x becomes 7.'
      },
      {
        level: 'Checkpoint',
        title: 'Boolean AND',
        stem: 'A discount is given if age < 18 AND member = true. A 16-year-old non-member buys a ticket. Is the discount given?',
        options: [
          { text: 'No, because both conditions are not true.', correct: true, feedback: 'Correct. AND requires both conditions to be true.' },
          { text: 'Yes, because age < 18 is true.', correct: false, feedback: 'For AND, one true condition is not enough.' },
          { text: 'Yes, because member is false.', correct: false, feedback: 'member = true is false, so the AND condition fails.' },
          { text: 'It depends on an unrelated advanced topic.', correct: false, feedback: 'Only the IF condition is needed here.' }
        ],
        hint: 'AND is stricter than OR.',
        solution: 'No discount is given.'
      },
      {
        level: 'Checkpoint',
        title: 'Branch choice',
        stem: 'If mark >= 50 then output "Pass" else output "Fail". What is output when mark is 50?',
        options: [
          { text: 'Pass', correct: true, feedback: 'Correct. 50 satisfies mark >= 50.' },
          { text: 'Fail', correct: false, feedback: 'Fail is used only when mark >= 50 is false.' },
          { text: 'Both Pass and Fail', correct: false, feedback: 'Only one branch is selected in this IF...ELSE.' },
          { text: 'No output', correct: false, feedback: 'The IF...ELSE always outputs one of the two messages.' }
        ],
        hint: '>= includes equality.',
        solution: 'The output is Pass.'
      }
    ]
  },
  {
    id: 'D3 Algorithm Design II - Iteration and Arrays',
    group: 'Core D Computational Thinking and Programming',
    title: 'D3 Algorithm Design II - Iteration and Arrays',
    focus: 'Visualise loops, one-dimensional array indexes, counting, accumulation and basic linear search through trace tables and output prediction.',
    cards: [
      { title: 'Iteration', body: 'Loops repeat statements. A while loop is useful when repetition continues while a condition remains true.' },
      { title: 'Validation loops', body: 'Input validation often repeats until acceptable data is entered, such as a mark between 0 and 100.' },
      { title: 'Counters and accumulators', body: 'A counter increases by a fixed amount to count items. An accumulator adds values to build a total.' },
      { title: 'One-dimensional arrays', body: 'An array or list stores related items. Indexes select individual elements, so boundary positions must be traced carefully.' },
      { title: 'Linear search and extremes', body: 'Linear search checks items one by one. Maximum and minimum algorithms update a best-so-far value while scanning a list.' }
    ],
    concepts: [
      'A loop needs a condition and a change that eventually allows the loop to stop.',
      'Off-by-one errors happen when a loop starts or stops one position too early or too late.',
      'A counter counts how many; an accumulator totals how much.',
      'Array indexes must stay within the valid range.',
      'Linear search belongs to Core D; binary search and advanced data structures belong to Elective C.'
    ],
    misconceptions: [
      'Do not forget to update the loop control variable; otherwise the loop may never end.',
      'Do not mix up an array index with the value stored at that index.',
      'A counter and an accumulator are not the same pattern.',
      'Stacks, queues, linked lists, 2D arrays and binary search should not be moved into Core D.'
    ],
    activities: [
      {
        title: 'List Operation Trainer',
        mode: 'd3ListOps',
        status: 'Available now',
        goal: 'Practise access, modify, append, insert and remove operations on a one-dimensional list.',
        misconception: 'The index is the position used to access an item; it is not the value stored in that item.',
        challenge: 'Run list operations and watch the active item, index labels and output log change.',
        transfer: 'DSE transfer: trace the list after each operation and avoid off-by-one index mistakes.'
      }
    ],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Validation loop',
        stem: 'Which condition is suitable for repeating input while a mark is invalid, if valid marks are from 0 to 100 inclusive?',
        options: [
          { text: 'mark < 0 OR mark > 100', correct: true, feedback: 'Correct. The loop repeats when the mark is outside the valid range.' },
          { text: 'mark >= 0 AND mark <= 100', correct: false, feedback: 'That condition is true for valid marks, so it would repeat at the wrong time.' },
          { text: 'mark = 50 only', correct: false, feedback: 'Only checking 50 does not cover the valid range.' },
          { text: 'index = index', correct: false, feedback: 'This is not a useful validation condition.' }
        ],
        hint: 'Repeat while invalid.',
        solution: 'Use mark < 0 OR mark > 100.'
      },
      {
        level: 'Checkpoint',
        title: 'Counter or accumulator',
        stem: 'A program adds each student mark to total in order to calculate an average. What is total?',
        options: [
          { text: 'Accumulator', correct: true, feedback: 'Correct. It stores a running total.' },
          { text: 'Counter', correct: false, feedback: 'A counter counts items, such as numberOfStudents.' },
          { text: 'Boolean flag only', correct: false, feedback: 'A Boolean flag stores true/false, not a running total.' },
          { text: 'Procedure setting', correct: false, feedback: 'The pattern here is a running total, not an unrelated procedure setting.' }
        ],
        hint: 'It adds values together.',
        solution: 'total is an accumulator.'
      },
      {
        level: 'Checkpoint',
        title: 'Linear search',
        stem: 'A linear search for 8 in [3, 5, 8, 9] checks items from left to right. How many items are checked before it is found?',
        options: [
          { text: '3', correct: true, feedback: 'Correct. It checks 3, then 5, then 8.' },
          { text: '1', correct: false, feedback: 'The first item is 3, not 8.' },
          { text: '2', correct: false, feedback: 'After two checks, the search has checked 3 and 5 only.' },
          { text: '4 always', correct: false, feedback: 'Linear search can stop when the target is found.' }
        ],
        hint: 'Count checked elements until 8 appears.',
        solution: 'Three items are checked.'
      }
    ]
  },
  {
    id: 'D4 Introduction to Python Programming',
    group: 'Core D Computational Thinking and Programming',
    title: 'D4 Introduction to Python Programming',
    focus: 'Introduce Python syntax, variables, data types, input/output, errors and simple step-by-step execution.',
    cards: [
      { title: 'Python statements', body: 'Core D Python focuses on simple statements, variables, assignment, expressions, input, output, selection and loops.' },
      { title: 'Data types', body: 'Common data types include integer, real/float, string and Boolean. Input from input() is text unless converted.' },
      { title: 'Syntax and indentation', body: 'Python uses colons and indentation for blocks. Missing punctuation or wrong indentation can cause syntax errors.' },
      { title: 'Step running', body: 'Tracing Python line by line helps students see how variables and output change.' }
    ],
    concepts: [
      'A variable stores a value and can be updated by assignment.',
      'input() returns a string, so numeric input should be converted before arithmetic.',
      'print() displays output to the user.',
      'Python strings use quotation marks; numbers used for arithmetic should not be kept as strings.',
      'Syntax errors prevent the program from running correctly until repaired.'
    ],
    misconceptions: [
      'The value "5" is a string, not the same as the integer 5 for arithmetic.',
      'Indentation is part of Python syntax, not just decoration.',
      'input() does not automatically convert text to an integer.',
      'A syntax error is different from a wrong result caused by faulty logic.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Input type',
        stem: 'In Python, what is the type of the value returned by input() before conversion?',
        options: [
          { text: 'String', correct: true, feedback: 'Correct. input() returns text.' },
          { text: 'Integer always', correct: false, feedback: 'Numeric-looking input is still text until converted.' },
          { text: 'Boolean always', correct: false, feedback: 'input() does not automatically return true or false.' },
          { text: 'Array index', correct: false, feedback: 'An array index is a position, not the return type of input().' }
        ],
        hint: 'Keyboard input is read as text.',
        solution: 'input() returns a string.'
      },
      {
        level: 'Checkpoint',
        title: 'Syntax error',
        stem: 'Which line has a likely Python syntax error?',
        options: [
          { text: 'if mark >= 50 print("Pass")', correct: true, feedback: 'Correct. The IF line needs a colon and normally the block is indented on the next line.' },
          { text: 'mark = 60', correct: false, feedback: 'This is a valid assignment statement.' },
          { text: 'print(mark)', correct: false, feedback: 'This is valid output syntax if mark exists.' },
          { text: 'name = input("Name: ")', correct: false, feedback: 'This is valid input syntax.' }
        ],
        hint: 'Look for the missing colon/block structure.',
        solution: 'if mark >= 50 print("Pass") has a syntax problem.'
      },
      {
        level: 'Checkpoint',
        title: 'String trap',
        stem: 'What is needed before adding two values read by input() as numbers?',
        options: [
          { text: 'Convert them to numeric type such as int or float.', correct: true, feedback: 'Correct. Otherwise + may join strings or cause unsuitable behaviour for arithmetic.' },
          { text: 'Put both values in quotation marks.', correct: false, feedback: 'Quotation marks make values strings.' },
          { text: 'Use Bcc.', correct: false, feedback: 'Bcc is an email field, not Python conversion.' },
          { text: 'Use an unrelated procedure setting.', correct: false, feedback: 'The issue is data type conversion, not an extra procedure setting.' }
        ],
        hint: 'input() returns text.',
        solution: 'Convert input strings to numeric values first.'
      }
    ]
  },
  {
    id: 'D5 Integrated Problem-solving in Python',
    group: 'Core D Computational Thinking and Programming',
    title: 'D5 Integrated Problem-solving in Python',
    focus: 'Build and explain small Python programs using lists, strings, selection, loops and integrated problem-solving.',
    cards: [
      { title: 'Integrated programs', body: 'Core D programs combine IPO analysis, variables, input/output, selection, loops, lists and strings.' },
      { title: 'Lists', body: 'Lists represent one-dimensional arrays. Typical tasks include traversal, searching, counting, summing, averaging and updating values.' },
      { title: 'Strings', body: 'String tasks include length checking, indexing and extracting required characters or substrings.' },
      { title: 'Test data', body: 'Good test data checks normal, boundary and erroneous cases so students can justify program correctness.' }
    ],
    concepts: [
      'Code completion questions require reading the purpose of surrounding lines before choosing the missing statement.',
      'A list index selects one item; a loop can process every item.',
      'String extraction must consider start position and length or end position carefully.',
      'Program purpose questions ask what the whole code achieves, not only what one line does.',
      'Test data should match the condition or boundary being tested.'
    ],
    misconceptions: [
      'Do not guess the missing code without tracing variables.',
      'A list element and the whole list are different.',
      'String positions are easy to shift by one; trace a small example.',
      'Test data should include boundary cases, not only typical valid data.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Program purpose',
        stem: 'A loop checks each mark in a list and increases count when mark >= 50. What does count represent after the loop?',
        options: [
          { text: 'The number of passing marks', correct: true, feedback: 'Correct. count increases only when a mark is at least 50.' },
          { text: 'The total of all marks', correct: false, feedback: 'A total would add mark values, not just add 1.' },
          { text: 'The highest mark', correct: false, feedback: 'Finding the highest mark needs a maximum pattern.' },
          { text: 'The number of unrelated procedures', correct: false, feedback: 'The loop counts marks that satisfy the condition.' }
        ],
        hint: 'What triggers count = count + 1?',
        solution: 'count stores the number of passing marks.'
      },
      {
        level: 'Checkpoint',
        title: 'List index',
        stem: 'If names = ["Amy", "Bo", "Chun"] in Python, what is names[1]?',
        options: [
          { text: 'Bo', correct: true, feedback: 'Correct. Python list indexes start at 0.' },
          { text: 'Amy', correct: false, feedback: 'Amy is names[0].' },
          { text: 'Chun', correct: false, feedback: 'Chun is names[2].' },
          { text: 'All three names', correct: false, feedback: 'names[1] selects one element.' }
        ],
        hint: 'Python starts counting positions from 0.',
        solution: 'names[1] is Bo.'
      },
      {
        level: 'Checkpoint',
        title: 'Boundary data',
        stem: 'A program accepts marks from 0 to 100 inclusive. Which value is boundary test data?',
        options: [
          { text: '0', correct: true, feedback: 'Correct. 0 is the lower accepted boundary.' },
          { text: '55', correct: false, feedback: '55 is normal valid data, not a boundary.' },
          { text: 'ICT', correct: false, feedback: 'ICT is erroneous data for a numeric mark, not boundary numeric data.' },
          { text: 'Student name', correct: false, feedback: 'A name is not a mark value.' }
        ],
        hint: 'Boundary means edge of the valid range.',
        solution: '0 is boundary test data.'
      }
    ]
  },
  {
    id: 'D6 Program Testing and Debugging',
    group: 'Core D Computational Thinking and Programming',
    title: 'D6 Program Testing and Debugging',
    focus: 'Design test data, identify boundary cases, interpret syntax/runtime/logic errors and compare algorithm suitability.',
    cards: [
      { title: 'Test data types', body: 'Normal data should be accepted, boundary data tests the edges and erroneous data should be rejected or handled.' },
      { title: 'Error types', body: 'Syntax errors break language rules, runtime errors occur during execution and logic errors produce wrong results.' },
      { title: 'Debugging methods', body: 'Debugging may use trace tables, print statements, breakpoints, expected output comparison and careful code reading.' },
      { title: 'Expected vs actual', body: 'Students should compare expected output with actual output and locate the first point where the trace becomes wrong.' }
    ],
    concepts: [
      'Boundary cases are often where conditions such as <, <=, > and >= go wrong.',
      'A syntax error usually prevents the program from running.',
      'A runtime error occurs while the program runs, such as division by zero.',
      'A logic error may run without crashing but gives incorrect output.',
      'Debugging should be systematic, not random editing.'
    ],
    misconceptions: [
      'A program that runs is not necessarily correct.',
      'Boundary data is not the same as random data.',
      'Syntax, runtime and logic errors have different symptoms.',
      'Changing many lines at once makes debugging harder.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Error type',
        stem: 'A program uses prin("Hello") instead of print("Hello"). What type of error is most likely?',
        options: [
          { text: 'Runtime error', correct: true, feedback: 'Correct. The syntax is valid, but the undefined name is found when the statement runs.' },
          { text: 'Logic error', correct: false, feedback: 'A logic error gives wrong output without necessarily stopping because of an undefined name.' },
          { text: 'Boundary error only', correct: false, feedback: 'This is not about edge test data.' },
          { text: 'Copyright error', correct: false, feedback: 'Copyright is a Core E issue, not a program execution error type.' }
        ],
        hint: 'The name is not recognised when executed.',
        solution: 'This is most likely a runtime error.'
      },
      {
        level: 'Checkpoint',
        title: 'Logic error',
        stem: 'A program should output the larger of two numbers, but it outputs the smaller one while still running. What type of error is this?',
        options: [
          { text: 'Logic error', correct: true, feedback: 'Correct. The program runs but the algorithm gives the wrong result.' },
          { text: 'Syntax error', correct: false, feedback: 'A syntax error breaks language rules and usually prevents running.' },
          { text: 'Hardware error', correct: false, feedback: 'The problem described is in the program logic.' },
          { text: 'OMR error', correct: false, feedback: 'OMR is unrelated to program debugging.' }
        ],
        hint: 'Runs, but wrong answer.',
        solution: 'It is a logic error.'
      },
      {
        level: 'Checkpoint',
        title: 'Boundary case',
        stem: 'A program checks whether age is at least 18. Which test value is the most important boundary case?',
        options: [
          { text: '18', correct: true, feedback: 'Correct. 18 is the boundary where the decision changes.' },
          { text: '35', correct: false, feedback: '35 is a normal adult value, not the edge.' },
          { text: 'blue', correct: false, feedback: 'blue is erroneous data, not the key numeric boundary.' },
          { text: '1000 only', correct: false, feedback: '1000 may be unrealistic, but the decision boundary is 18.' }
        ],
        hint: 'Find the exact edge of the condition.',
        solution: '18 is the key boundary case.'
      }
    ]
  },
  {
    id: 'E1 Technological Innovations',
    group: 'Core E Social Implications',
    title: 'E1 Technological Innovations',
    focus: 'Connect ICT innovations with social impact, smart city applications, AI issues and community problem solving.',
    cards: [
      { title: 'Technology impact', body: 'New technologies can improve efficiency, access, safety and decision-making, but may also create privacy, reliability, cost and fairness concerns.' },
      { title: 'ICT applications', body: 'Common scenarios include e-learning, e-health, smart city services, transport systems, AI tools, sensors and data analysis.' },
      { title: 'Stakeholders', body: 'Good judgement considers users, organisations, government, community and people who may be excluded or harmed.' },
      { title: 'DSE explanations', body: 'DSE answers should balance benefit, risk and a scenario-specific reason instead of making broad claims.' }
    ],
    concepts: [
      'Technology impact should be judged using scenario, stakeholder, benefit and risk.',
      'Smart systems often involve sensors, networks, databases, analysis and automated output.',
      'AI systems may improve speed and pattern recognition but raise issues such as bias, privacy and accountability.',
      'A strong DSE sentence names the technology, gives a specific effect and links it to the scenario.'
    ],
    misconceptions: [
      'Do not say all new technology is automatically good or bad.',
      'Do not give vague benefits such as "more convenient" without explaining why.',
      'Efficiency does not remove the need for privacy and security controls.',
      'A scenario judgement answer should mention the affected stakeholder.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Balanced judgement',
        stem: 'A school uses facial recognition for attendance. Which answer is the best DSE-style judgement?',
        options: [
          { text: 'It may save attendance time, but the school must protect biometric personal data.', correct: true, feedback: 'Correct. It gives a benefit, risk and scenario link.' },
          { text: 'It is always good because it is new.', correct: false, feedback: 'DSE judgement should not assume all new technology is good.' },
          { text: 'It has no privacy issue.', correct: false, feedback: 'Facial data is sensitive personal data.' },
          { text: 'It is only about printer speed.', correct: false, feedback: 'The scenario concerns attendance and biometric data, not printing.' }
        ],
        hint: 'Balance benefit and risk.',
        solution: 'Mention time saving and biometric privacy protection.'
      },
      {
        level: 'Checkpoint',
        title: 'Smart city data flow',
        stem: 'A smart traffic light adjusts timing according to vehicle flow. Which ICT components are most relevant?',
        options: [
          { text: 'Sensors, network transmission and data processing', correct: true, feedback: 'Correct. The system measures traffic, sends data and processes it to control lights.' },
          { text: 'Only a manual typewriter', correct: false, feedback: 'A smart traffic system needs automated data capture and processing.' },
          { text: 'Only a copyright licence', correct: false, feedback: 'Licensing may matter generally, but it is not the main system component.' },
          { text: 'Only OMR answer sheets', correct: false, feedback: 'OMR is unrelated to traffic sensing.' }
        ],
        hint: 'Smart systems sense, transmit and process.',
        solution: 'Sensors, network transmission and data processing are relevant.'
      },
      {
        level: 'Checkpoint',
        title: 'Stakeholder',
        stem: 'When judging an e-health app, why should elderly users be considered separately?',
        options: [
          { text: 'They may have different access, usability and support needs.', correct: true, feedback: 'Correct. Stakeholder needs affect ICT suitability.' },
          { text: 'They never use ICT.', correct: false, feedback: 'This is an unfair overgeneralisation.' },
          { text: 'They are not stakeholders.', correct: false, feedback: 'Elderly users may be key stakeholders in e-health.' },
          { text: 'Only programmers matter.', correct: false, feedback: 'DSE social-impact answers consider multiple stakeholders.' }
        ],
        hint: 'Think access and usability.',
        solution: 'Elderly users may need different access and support.'
      }
    ]
  },
  {
    id: 'E2 Health and Ethical Issues',
    group: 'Core E Social Implications',
    title: 'E2 Health and Ethical Issues',
    focus: 'Make ethical and healthy ICT decisions about ergonomics, wellbeing, cyberbullying, digital divide and personal data.',
    cards: [
      { title: 'Ergonomics', body: 'Good posture, suitable monitor height, chair support, lighting, keyboard position and breaks reduce health risks.' },
      { title: 'Privacy and personal data', body: 'Personal data should be collected for a clear purpose, kept secure, used fairly and not shared unnecessarily.' },
      { title: 'Cyberbullying response', body: 'Suitable responses include saving evidence, blocking/reporting the offender and seeking help from trusted adults or platform channels.' },
      { title: 'Digital divide', body: 'The digital divide is affected by access to devices, internet connection, skills, cost, language and support.' }
    ],
    concepts: [
      'Ergonomic measures reduce strain but do not replace regular rest breaks.',
      'Privacy decisions should consider purpose, consent, access rights, security and retention.',
      'Cyberbullying responses should protect the victim and preserve evidence.',
      'The digital divide can affect learning, employment and access to public services.',
      'Ethical answers should avoid blaming victims or exposing more personal data.'
    ],
    misconceptions: [
      'Deleting all messages immediately may destroy useful evidence of cyberbullying.',
      'Collecting more personal data than needed increases privacy risk.',
      'The digital divide is not only about owning a device; skills and connectivity also matter.',
      'Ergonomics is about reducing physical strain, not making the desk look tidy only.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Cyberbullying response',
        stem: 'A student receives threatening messages online. What is the best first response?',
        options: [
          { text: 'Save evidence and report or seek help from a trusted adult/platform.', correct: true, feedback: 'Correct. This protects the victim and preserves evidence.' },
          { text: 'Reply with threats.', correct: false, feedback: 'Retaliation can escalate the situation.' },
          { text: 'Delete all evidence immediately.', correct: false, feedback: 'Evidence may be needed for reporting.' },
          { text: 'Share the messages publicly with personal details.', correct: false, feedback: 'This may spread harm and expose personal data.' }
        ],
        hint: 'Protect and preserve evidence.',
        solution: 'Save evidence and report or seek help.'
      },
      {
        level: 'Checkpoint',
        title: 'Privacy principle',
        stem: 'An app asks for HKID number although it only provides weather forecasts. What is the main concern?',
        options: [
          { text: 'Excessive collection of personal data', correct: true, feedback: 'Correct. The data is not necessary for the stated purpose.' },
          { text: 'Better ergonomics', correct: false, feedback: 'This is a privacy issue, not posture or workstation setup.' },
          { text: 'Faster sorting', correct: false, feedback: 'Sorting speed is unrelated to excessive data collection.' },
          { text: 'OMR recognition', correct: false, feedback: 'OMR is unrelated to app privacy.' }
        ],
        hint: 'Is the data needed for the purpose?',
        solution: 'The concern is excessive collection.'
      },
      {
        level: 'Checkpoint',
        title: 'Digital divide',
        stem: 'Which factor can contribute to the digital divide?',
        options: [
          { text: 'Lack of reliable internet access', correct: true, feedback: 'Correct. Connectivity affects access to digital services.' },
          { text: 'Using a secure password', correct: false, feedback: 'Secure passwords improve security; they do not cause the divide.' },
          { text: 'Backing up files', correct: false, feedback: 'Backup is a data-protection practice.' },
          { text: 'Using Bcc in email', correct: false, feedback: 'Bcc protects recipient privacy, not access inequality.' }
        ],
        hint: 'Think access, skill and cost.',
        solution: 'Lack of reliable internet access can contribute.'
      }
    ]
  },
  {
    id: 'E3 Intellectual Property',
    group: 'Core E Social Implications',
    title: 'E3 Intellectual Property',
    focus: 'Understand copyright, software licences, digital watermarking, fair use decisions and Creative Commons conditions.',
    cards: [
      { title: 'Copyright', body: 'Copyright protects original works such as text, images, music, video and software. It controls copying, distribution and adaptation.' },
      { title: 'Permission pathway', body: 'Before using a work, check whether it is original, licensed, permitted, public domain or covered by a suitable exception.' },
      { title: 'Software licences', body: 'Licences define what users may do. Simple DSE distinctions include proprietary, freeware, shareware and open-source software.' },
      { title: 'Creative Commons', body: 'Creative Commons licences may require attribution and may restrict commercial use or derivative works.' }
    ],
    concepts: [
      'Using online material usually still requires permission or licence compliance.',
      'Attribution is important, but attribution alone does not always make copying legal.',
      'Freeware is free to use but is not necessarily open source.',
      'Open-source software allows source code access under licence terms.',
      'Creative Commons conditions such as BY, NC, ND and SA should be followed.'
    ],
    misconceptions: [
      'Anything found on the internet is not automatically free to copy.',
      'Giving credit does not replace permission when permission is required.',
      'Freeware and open-source software are not the same.',
      'Creative Commons does not mean no rules.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Internet image',
        stem: 'A student finds a photo online for a school website. Which action is most appropriate before using it?',
        options: [
          { text: 'Check the licence or obtain permission.', correct: true, feedback: 'Correct. Online material is still protected unless a licence or permission allows use.' },
          { text: 'Use it freely because it is on the internet.', correct: false, feedback: 'Internet availability does not remove copyright.' },
          { text: 'Remove the photographer\'s name to avoid problems.', correct: false, feedback: 'Removing attribution can make the issue worse.' },
          { text: 'Convert it to hexadecimal.', correct: false, feedback: 'Data representation does not solve copyright permission.' }
        ],
        hint: 'Check rights before use.',
        solution: 'Check the licence or obtain permission.'
      },
      {
        level: 'Checkpoint',
        title: 'Freeware vs open source',
        stem: 'Which statement is correct?',
        options: [
          { text: 'Freeware can be free to use without giving users the source code.', correct: true, feedback: 'Correct. Freeware is not automatically open source.' },
          { text: 'Freeware always allows source code modification.', correct: false, feedback: 'That describes open-source rights more closely, depending on licence.' },
          { text: 'Open-source software can never have licence conditions.', correct: false, feedback: 'Open-source software is still governed by licence terms.' },
          { text: 'Proprietary software has no copyright.', correct: false, feedback: 'Proprietary software is protected by copyright and licence restrictions.' }
        ],
        hint: 'Free to use is not the same as source code available.',
        solution: 'Freeware may be free to use without source code access.'
      },
      {
        level: 'Checkpoint',
        title: 'Creative Commons',
        stem: 'A Creative Commons licence includes BY-NC. What does this usually require?',
        options: [
          { text: 'Give attribution and do not use it commercially.', correct: true, feedback: 'Correct. BY means attribution; NC means non-commercial.' },
          { text: 'No attribution is needed.', correct: false, feedback: 'BY requires attribution.' },
          { text: 'Commercial use is always allowed.', correct: false, feedback: 'NC restricts commercial use.' },
          { text: 'The work must be deleted after one day.', correct: false, feedback: 'That is not what BY-NC means.' }
        ],
        hint: 'BY and NC are licence conditions.',
        solution: 'Give attribution and avoid commercial use.'
      }
    ]
  },
  {
    id: 'EA1 Managing Data Using SQL',
    group: 'Elective A Databases',
    title: 'EA1 Managing Data Using SQL',
    focus: 'Create, maintain and modify simple relational database tables using SQL commands, suitable data types, constraints and indexes.',
    cards: [
      { title: 'SQL command groups', body: 'DDL defines structures such as CREATE, ALTER and DROP. DML maintains data using INSERT, UPDATE and DELETE. Queries retrieve records using SELECT.' },
      { title: 'Data types', body: 'Choose suitable data types for fields, such as integer, real, text, date/time, Boolean or currency, according to the stored values and operations needed.' },
      { title: 'Constraints', body: 'Constraints such as PRIMARY KEY, NOT NULL, UNIQUE, CHECK and foreign-key constraints help protect valid table data.' },
      { title: 'Dangerous updates', body: 'UPDATE and DELETE should normally include a suitable WHERE condition; otherwise many or all records may be changed or removed.' }
    ],
    concepts: [
      'CREATE TABLE defines fields, data types and constraints before records are stored.',
      'INSERT adds new records; UPDATE changes existing records; DELETE removes records.',
      'A primary key uniquely identifies each record and should not be null or duplicated.',
      'Data type choice affects validation, storage, sorting and calculations.',
      'SQL/database tasks in Elective A should stay separate from programming algorithm tasks.'
    ],
    formulae: ['CREATE TABLE Student (StudentID TEXT PRIMARY KEY, Name TEXT NOT NULL)', 'INSERT INTO Student (...) VALUES (...)', 'UPDATE Student SET Class = "5A" WHERE StudentID = "S001"', 'DELETE FROM Student WHERE StudentID = "S001"'],
    misconceptions: [
      'Do not write UPDATE or DELETE without checking the WHERE condition.',
      'A numeric-looking value such as a phone number may be stored as text if arithmetic is not needed.',
      'PRIMARY KEY and UNIQUE are related but not identical; a primary key identifies records and cannot be null.',
      'DROP TABLE removes a table structure, not just selected records.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Dangerous DELETE',
        stem: 'What is the main risk of running DELETE FROM Student without a WHERE clause?',
        options: [
          { text: 'All records in Student may be deleted.', correct: true, feedback: 'Correct. Without WHERE, DELETE applies to every record in the table.' },
          { text: 'Only one random record is deleted safely.', correct: false, feedback: 'SQL does not automatically choose one safe record.' },
          { text: 'The table structure is always removed.', correct: false, feedback: 'DROP TABLE removes the table structure; DELETE removes records.' },
          { text: 'It becomes a programming loop.', correct: false, feedback: 'This is a database command, not a programming loop.' }
        ],
        hint: 'WHERE limits affected records.',
        solution: 'Without WHERE, all records may be deleted.'
      },
      {
        level: 'Checkpoint',
        title: 'Data type choice',
        stem: 'Which data type is most suitable for a Hong Kong phone number if no arithmetic is needed?',
        options: [
          { text: 'Text', correct: true, feedback: 'Correct. Phone numbers are identifiers; arithmetic is not needed and leading symbols/spaces may matter.' },
          { text: 'Real', correct: false, feedback: 'A real number is for decimal calculations, not identifiers.' },
          { text: 'Currency', correct: false, feedback: 'Currency is for money values.' },
          { text: 'Boolean', correct: false, feedback: 'Boolean stores true/false values only.' }
        ],
        hint: 'Will the system calculate with it?',
        solution: 'Use text.'
      },
      {
        level: 'Checkpoint',
        title: 'Primary key',
        stem: 'Which constraint best ensures that StudentID uniquely identifies each student record?',
        options: [
          { text: 'PRIMARY KEY', correct: true, feedback: 'Correct. A primary key uniquely identifies each record.' },
          { text: 'CHECK mark >= 0', correct: false, feedback: 'A CHECK constraint validates a condition; it does not identify records.' },
          { text: 'ORDER BY StudentID', correct: false, feedback: 'ORDER BY sorts output; it is not a constraint.' },
          { text: 'SELECT *', correct: false, feedback: 'SELECT retrieves data; it does not define uniqueness.' }
        ],
        hint: 'Look for the unique record identifier.',
        solution: 'Use PRIMARY KEY.'
      }
    ]
  },
  {
    id: 'EA2 SQL Operators and Functions',
    group: 'Elective A Databases',
    title: 'EA2 SQL Operators and Functions',
    focus: 'Use arithmetic, comparison, logical, IN, BETWEEN, LIKE, aggregate and string functions to filter and summarise data.',
    cards: [
      { title: 'WHERE conditions', body: 'WHERE filters records using comparison operators, logical operators and conditions such as IN, BETWEEN, LIKE and IS NULL.' },
      { title: 'LIKE patterns', body: 'LIKE matches text patterns using wildcards such as % for any sequence of characters.' },
      { title: 'Aggregate functions', body: 'COUNT, SUM, AVG, MAX and MIN summarise groups of records or an entire result set.' },
      { title: 'GROUP BY and NULL', body: 'GROUP BY creates one summary result per group. NULL means missing or unknown, so it should be tested with IS NULL or IS NOT NULL.' }
    ],
    concepts: [
      'WHERE is applied before grouping to select records for the query.',
      'LIKE "Chan%" matches text starting with Chan.',
      'COUNT(*) counts records; COUNT(field) may ignore NULL values in that field.',
      'GROUP BY is needed when non-aggregate fields appear with aggregate functions.',
      'NULL is not the same as zero or an empty string.'
    ],
    formulae: ['WHERE mark BETWEEN 40 AND 100', 'WHERE class IN ("4A", "4B")', 'WHERE name LIKE "Chan%"', 'WHERE phone IS NULL', 'SELECT class, COUNT(*) FROM Student GROUP BY class'],
    misconceptions: [
      'Do not compare NULL using = NULL; use IS NULL.',
      'LIKE "A%" and LIKE "%A" match different patterns.',
      'An aggregate function summarises many records; it does not list every original record by itself.',
      'GROUP BY must match the field used for grouping, not a random field.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'LIKE pattern',
        stem: 'Which condition finds names beginning with "Chan"?',
        options: [
          { text: 'WHERE Name LIKE "Chan%"', correct: true, feedback: 'Correct. % after Chan allows any following characters.' },
          { text: 'WHERE Name LIKE "%Chan"', correct: false, feedback: 'This finds names ending with Chan.' },
          { text: 'WHERE Name = "%Chan%"', correct: false, feedback: '= does not use % as a LIKE wildcard pattern.' },
          { text: 'WHERE Name IS NULL', correct: false, feedback: 'IS NULL finds missing names, not names beginning with Chan.' }
        ],
        hint: 'The wildcard goes after the starting text.',
        solution: 'Use WHERE Name LIKE "Chan%".'
      },
      {
        level: 'Checkpoint',
        title: 'NULL test',
        stem: 'Which condition correctly finds records with no phone number stored?',
        options: [
          { text: 'WHERE Phone IS NULL', correct: true, feedback: 'Correct. NULL must be tested with IS NULL.' },
          { text: 'WHERE Phone = NULL', correct: false, feedback: 'NULL is not tested using = in SQL.' },
          { text: 'WHERE Phone = 0', correct: false, feedback: '0 is a value, not a missing/unknown value.' },
          { text: 'WHERE Phone LIKE "NULL%"', correct: false, feedback: 'That searches for text beginning with NULL, not a NULL value.' }
        ],
        hint: 'NULL needs IS.',
        solution: 'Use WHERE Phone IS NULL.'
      },
      {
        level: 'Checkpoint',
        title: 'Class summary',
        stem: 'Which query counts the number of students in each class?',
        options: [
          { text: 'SELECT Class, COUNT(*) FROM Student GROUP BY Class', correct: true, feedback: 'Correct. It groups records by Class and counts records in each group.' },
          { text: 'SELECT Class FROM Student', correct: false, feedback: 'This lists class values but does not count them.' },
          { text: 'SELECT COUNT(*) FROM Student WHERE Class', correct: false, feedback: 'The WHERE clause is incomplete and does not group by class.' },
          { text: 'DELETE FROM Student GROUP BY Class', correct: false, feedback: 'DELETE removes records and is not used for summaries.' }
        ],
        hint: 'You need COUNT and GROUP BY.',
        solution: 'SELECT Class, COUNT(*) FROM Student GROUP BY Class.'
      }
    ]
  },
  {
    id: 'EA3 SQL Operations on Multiple Tables',
    group: 'Elective A Databases',
    title: 'EA3 SQL Operations on Multiple Tables',
    focus: 'Query up to three related tables using joins, one-level subqueries, set operations, views and indexes.',
    cards: [
      { title: 'Joining tables', body: 'A join combines related records by matching key fields, such as Student.ClassID = Class.ClassID.' },
      { title: 'Missing join condition', body: 'If a join condition is missing or wrong, the query may produce too many meaningless combinations.' },
      { title: 'Up to three tables', body: 'DSE-style practice here should use at most three related tables and clear key relationships.' },
      { title: 'One-level subqueries', body: 'A subquery may appear inside a WHERE condition, but practice should stay to one sub-level only.' }
    ],
    concepts: [
      'Use table names or aliases to avoid ambiguity when fields share the same name.',
      'INNER JOIN returns records where the join condition matches.',
      'A missing join condition can create a Cartesian product.',
      'One-level subqueries can find records using a result from another SELECT.',
      'Multiple-table SQL should remain database-focused and not become programming logic.'
    ],
    formulae: ['SELECT Student.Name, Class.ClassName FROM Student INNER JOIN Class ON Student.ClassID = Class.ClassID', 'SELECT Name FROM Student WHERE ClassID IN (SELECT ClassID FROM Class WHERE Level = 5)', 'Use at most three tables in query practice'],
    misconceptions: [
      'Do not join tables without a matching key condition.',
      'Do not use a subquery with multiple nested levels for this chapter.',
      'Field names can become ambiguous when several tables contain the same field name.',
      'A join is a database operation, not a programming loop.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Join condition',
        stem: 'Student has ClassID and Class also has ClassID. Which condition correctly joins the tables?',
        options: [
          { text: 'Student.ClassID = Class.ClassID', correct: true, feedback: 'Correct. The matching key fields connect related records.' },
          { text: 'Student.Name = Class.ClassName', correct: false, feedback: 'Student names should not match class names.' },
          { text: 'Student.ClassID > Class.ClassID', correct: false, feedback: 'A join normally matches equal key values in this scenario.' },
          { text: 'No condition is needed.', correct: false, feedback: 'A missing join condition can produce too many unrelated combinations.' }
        ],
        hint: 'Match the shared key field.',
        solution: 'Use Student.ClassID = Class.ClassID.'
      },
      {
        level: 'Checkpoint',
        title: 'Missing JOIN trap',
        stem: 'A query combines Student and Club tables but gives every student paired with every club. What is the likely problem?',
        options: [
          { text: 'The join condition is missing or wrong.', correct: true, feedback: 'Correct. This is a Cartesian-product style trap.' },
          { text: 'The query uses exactly one table.', correct: false, feedback: 'The problem describes combining two tables.' },
          { text: 'The query uses unrelated programming logic.', correct: false, feedback: 'This is SQL/database content, not programming.' },
          { text: 'The table has no fields at all.', correct: false, feedback: 'The symptom points to a missing/wrong join condition.' }
        ],
        hint: 'Too many combinations usually means a join issue.',
        solution: 'The join condition is missing or wrong.'
      },
      {
        level: 'Checkpoint',
        title: 'One-level subquery',
        stem: 'Which pattern stays within the one-level subquery boundary?',
        options: [
          { text: 'SELECT Name FROM Student WHERE ClassID IN (SELECT ClassID FROM Class WHERE Level = 5)', correct: true, feedback: 'Correct. There is one SELECT inside the outer query.' },
          { text: 'A query with three nested SELECT statements inside each other', correct: false, feedback: 'That goes beyond the one-level boundary.' },
          { text: 'A Python loop that searches a list', correct: false, feedback: 'That is programming, not Elective A database SQL.' },
          { text: 'An ER diagram with a ternary relationship', correct: false, feedback: 'This is not a SQL subquery and ternary ER relationships are outside the requested boundary.' }
        ],
        hint: 'One SELECT inside the outer SELECT.',
        solution: 'Use a single inner SELECT as shown.'
      }
    ]
  },
  {
    id: 'EA4 Relational Database Concepts',
    group: 'Elective A Databases',
    title: 'EA4 Relational Database Concepts',
    focus: 'Explain entities, attributes, relationships, domains, schemas, keys, indexes, integrity rules and rollback.',
    cards: [
      { title: 'Relational concepts', body: 'A relational database organises data in tables with records, fields, domains, schemas and relationships.' },
      { title: 'Keys', body: 'A primary key uniquely identifies a record. A foreign key stores a value that refers to a primary key in another table.' },
      { title: 'Integrity rules', body: 'Entity integrity means primary keys cannot be null. Referential integrity means foreign-key values must match valid referenced records or be handled by rule.' },
      { title: 'Transactions and rollback', body: 'Rollback restores the database to a previous consistent state when a transaction fails before completion.' }
    ],
    concepts: [
      'A domain is the set of valid values for an attribute.',
      'A schema describes the structure of tables, fields, data types and relationships.',
      'A primary key is unique and not null.',
      'A foreign key creates a relationship between two tables.',
      'Rollback protects consistency when a set of database changes cannot be completed safely.'
    ],
    formulae: ['Primary key: unique and not null', 'Foreign key: field referring to a primary key in another table', 'Referential integrity: foreign-key value must match a valid referenced key'],
    misconceptions: [
      'A foreign key does not have to be unique in its own table.',
      'Entity integrity and referential integrity protect different rules.',
      'Rollback is not the same as backup; it reverses an incomplete transaction to a consistent state.',
      'A field domain is about valid values, not a website domain name.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Foreign key',
        stem: 'Order.CustomerID refers to Customer.CustomerID. What is Order.CustomerID?',
        options: [
          { text: 'Foreign key', correct: true, feedback: 'Correct. It refers to a primary key in another table.' },
          { text: 'Primary key of Customer', correct: false, feedback: 'Customer.CustomerID is likely the primary key; Order.CustomerID is the referring field.' },
          { text: 'Aggregate function', correct: false, feedback: 'An aggregate function summarises records.' },
          { text: 'HTML tag', correct: false, feedback: 'This is database content, not web authoring.' }
        ],
        hint: 'It refers to another table.',
        solution: 'Order.CustomerID is a foreign key.'
      },
      {
        level: 'Checkpoint',
        title: 'Entity integrity',
        stem: 'Which rule is required by entity integrity?',
        options: [
          { text: 'A primary key value must not be null.', correct: true, feedback: 'Correct. Entity integrity requires each record to be identifiable.' },
          { text: 'Every text field must contain the word entity.', correct: false, feedback: 'Entity integrity concerns primary keys, not text content.' },
          { text: 'Every table must have exactly three fields.', correct: false, feedback: 'There is no such rule.' },
          { text: 'A foreign key must always be unique.', correct: false, feedback: 'Foreign keys often repeat, such as many orders for one customer.' }
        ],
        hint: 'Entity integrity focuses on primary keys.',
        solution: 'Primary keys must not be null.'
      },
      {
        level: 'Checkpoint',
        title: 'Rollback',
        stem: 'A bank transfer debits one account but fails before crediting the other account. Why is rollback useful?',
        options: [
          { text: 'It can restore the database to the previous consistent state.', correct: true, feedback: 'Correct. Rollback prevents a half-completed transaction.' },
          { text: 'It creates a webpage.', correct: false, feedback: 'Rollback is a transaction control idea, not web authoring.' },
          { text: 'It permanently deletes both account tables.', correct: false, feedback: 'Rollback is used to maintain consistency, not destroy tables.' },
          { text: 'It replaces all foreign keys with NULL automatically.', correct: false, feedback: 'Rollback reverses transaction changes; it does not mean blindly nulling keys.' }
        ],
        hint: 'Think incomplete transaction.',
        solution: 'Rollback restores the previous consistent state.'
      }
    ]
  },
  {
    id: 'EA5 Database Design and ER Diagram',
    group: 'Elective A Databases',
    title: 'EA5 Database Design and ER Diagram',
    focus: 'Analyse simple scenarios, draw binary ER diagrams, resolve many-to-many relationships and reduce redundancy through normalisation up to 3NF.',
    cards: [
      { title: 'Entities and attributes', body: 'Entities are object types such as Student, Book or Loan. Attributes describe entities, such as StudentID, Name or DateBorrowed.' },
      { title: 'Binary ER relationships', body: 'ER diagram practice should use binary relationships between two entity types, with suitable cardinality and participation.' },
      { title: 'Resolving M:N relationships', body: 'A many-to-many relationship should be resolved using an associative entity/table, creating two one-to-many relationships.' },
      { title: 'Normalisation to 3NF', body: 'Normalisation reduces redundancy and anomalies. The boundary is up to Third Normal Form.' },
      { title: 'Access rights', body: 'Database access rights should follow least privilege, such as view-only, update, delete or administrator rights according to role.' }
    ],
    concepts: [
      'Attributes should belong to the correct entity or relationship.',
      'Binary relationships involve two entity types only.',
      'M:N relationships are usually implemented through an associative table containing foreign keys.',
      'Redundancy can cause insertion, update and deletion anomalies.',
      '3NF reduces transitive dependencies so non-key attributes depend on the key, the whole key and nothing but the key.'
    ],
    formulae: ['M:N Student-Club becomes Student, Membership, Club', 'Normalisation boundary: up to 3NF', 'Use binary relationships only in ER practice'],
    misconceptions: [
      'Do not draw ternary relationships for this chapter boundary.',
      'Do not leave an M:N relationship unresolved in a relational design.',
      'Normalisation is not just splitting tables randomly; it removes dependency problems.',
      'Giving every user administrator rights violates least privilege.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Entity or attribute',
        stem: 'In a library database, Book is best classified as what?',
        options: [
          { text: 'Entity type', correct: true, feedback: 'Correct. Book is an object type about which records are stored.' },
          { text: 'Attribute of ISBN only', correct: false, feedback: 'ISBN is more likely an attribute of Book, not the other way round.' },
          { text: 'SQL aggregate function', correct: false, feedback: 'Book is not COUNT, SUM, AVG, MAX or MIN.' },
          { text: 'Programming variable only', correct: false, feedback: 'This is database design content, not programming.' }
        ],
        hint: 'Can records be stored about it?',
        solution: 'Book is an entity type.'
      },
      {
        level: 'Checkpoint',
        title: 'Resolving M:N',
        stem: 'Students can join many clubs and each club has many students. How should this M:N relationship be implemented?',
        options: [
          { text: 'Add an associative table such as Membership.', correct: true, feedback: 'Correct. The associative table resolves M:N into two 1:M relationships.' },
          { text: 'Store all club names in one Student field separated by commas.', correct: false, feedback: 'That causes repeating groups and poor query design.' },
          { text: 'Delete the Club table.', correct: false, feedback: 'Club is still an entity that needs records.' },
          { text: 'Use a programming loop instead of tables.', correct: false, feedback: 'This is database design, not programming.' }
        ],
        hint: 'Use a bridge table.',
        solution: 'Use an associative table such as Membership.'
      },
      {
        level: 'Checkpoint',
        title: 'Access rights',
        stem: 'A student helper only needs to read a list of borrowed books. Which access right is most suitable?',
        options: [
          { text: 'View-only access', correct: true, feedback: 'Correct. Least privilege gives only the access needed.' },
          { text: 'Administrator access', correct: false, feedback: 'Administrator rights are excessive for reading only.' },
          { text: 'Delete access', correct: false, feedback: 'Delete access creates unnecessary risk.' },
          { text: 'No database access but full server password', correct: false, feedback: 'This is unsafe and unrelated to the stated task.' }
        ],
        hint: 'Give the minimum necessary permission.',
        solution: 'Use view-only access.'
      }
    ]
  },
  {
    id: 'EC1 Algorithm Design and Python Basics',
    group: 'Elective C Algorithm and Programming',
    title: 'EC1 Algorithm Design and Python Basics',
    focus: 'Review algorithms, pseudocode, flowcharts, trace tables, Python data types, basic constructs, 2D arrays and good programming style.',
    cards: [
      { title: 'Algorithm representations', body: 'Use pseudocode, flowcharts and trace tables to represent and check algorithms before and after coding.' },
      { title: 'Expressions and variables', body: 'Expressions combine variables, constants and operators. Assignment updates stored values during tracing.' },
      { title: 'Python basics', body: 'Review input, output, data types, selection, loops, lists and clear program layout as preparation for deeper Elective C work.' },
      { title: 'Good style', body: 'Use meaningful identifiers, indentation, comments where helpful and readable structure so algorithms can be checked easily.' }
    ],
    concepts: [
      'An algorithm is a finite set of clear steps for solving a problem.',
      'Pseudocode, flowcharts and trace tables show the same logic in different forms.',
      'Variable tracing must update values in execution order.',
      'Expression evaluation follows operator precedence and data types.',
      'Good programming style improves readability and reduces mistakes during testing.'
    ],
    misconceptions: [
      'Do not treat assignment as algebraic equality.',
      'Do not skip intermediate variable values in trace tables.',
      'Pseudocode and Python syntax are related but not identical.',
      'A comment should clarify purpose; it should not merely repeat obvious code.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Representation choice',
        stem: 'Which representation is most suitable for recording variable values after each step of an algorithm?',
        options: [
          { text: 'Trace table', correct: true, feedback: 'Correct. Trace tables record variable values and outputs step by step.' },
          { text: 'Licence agreement', correct: false, feedback: 'A licence agreement is not an algorithm representation.' },
          { text: 'Foreign key diagram', correct: false, feedback: 'Foreign keys belong to database work, not algorithm tracing.' },
          { text: 'Printer queue', correct: false, feedback: 'A printer queue is not used to trace variables.' }
        ],
        hint: 'Look for the tool that records changing values.',
        solution: 'Use a trace table.'
      },
      {
        level: 'Checkpoint',
        title: 'Expression trace',
        stem: 'x = 3 and y = 4. After x = x + y * 2, what is x?',
        options: [
          { text: '11', correct: true, feedback: 'Correct. y * 2 is 8, then 3 + 8 = 11.' },
          { text: '14', correct: false, feedback: 'This ignores operator precedence.' },
          { text: '7', correct: false, feedback: 'This adds x and y but misses * 2.' },
          { text: '3', correct: false, feedback: 'The assignment updates x.' }
        ],
        hint: 'Multiplication before addition.',
        solution: 'x becomes 11.'
      },
      {
        level: 'Checkpoint',
        title: 'Style',
        stem: 'Which practice best improves program readability?',
        options: [
          { text: 'Use meaningful variable names and consistent indentation.', correct: true, feedback: 'Correct. These make the program easier to trace and maintain.' },
          { text: 'Use single-letter names for every variable.', correct: false, feedback: 'Single-letter names can make purpose unclear.' },
          { text: 'Remove all indentation.', correct: false, feedback: 'Indentation is essential for Python blocks and readability.' },
          { text: 'Mix SQL commands into the Python algorithm.', correct: false, feedback: 'This chapter is programming-focused; database SQL is Elective A.' }
        ],
        hint: 'Readable code is easier to check.',
        solution: 'Use meaningful names and consistent indentation.'
      }
    ]
  },
  {
    id: 'EC2 Program Testing and Debugging II',
    group: 'Elective C Algorithm and Programming',
    title: 'EC2 Program Testing and Debugging II',
    focus: 'Extend debugging to overflow, truncation, rounding, syntax, logic and runtime errors using manual and IDE-based methods.',
    cards: [
      { title: 'Numerical errors', body: 'Overflow, truncation and rounding errors can affect numeric results when values exceed range or precision is limited.' },
      { title: 'Error types', body: 'Syntax, runtime and logic errors have different causes and symptoms, so they need different debugging approaches.' },
      { title: 'Breakpoints and tracing', body: 'Breakpoints pause execution so variable values and control flow can be inspected at selected lines.' },
      { title: 'Flags', body: 'A flag variable records whether a condition has occurred, such as whether a target item has been found.' }
    ],
    concepts: [
      'Overflow occurs when a value is outside the representable range.',
      'Truncation cuts off part of a value; rounding approximates a value to a selected precision.',
      'Logic errors can produce wrong output even when the program runs.',
      'Breakpoints support systematic debugging by inspecting program state.',
      'Flag variables should be initialised and updated at the correct point.'
    ],
    misconceptions: [
      'A program that runs without crashing may still contain logic errors.',
      'Rounding and truncation are not the same operation.',
      'Adding many print statements randomly is weaker than tracing the suspected section.',
      'A flag must be checked after it has had a chance to change.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Numerical error',
        stem: 'A value is too large to be stored in the available number of bits. What type of error can occur?',
        options: [
          { text: 'Overflow', correct: true, feedback: 'Correct. Overflow occurs when the representable range is exceeded.' },
          { text: 'Truncation', correct: false, feedback: 'Truncation cuts off part of a value; the clue here is range exceeded.' },
          { text: 'Syntax error', correct: false, feedback: 'Syntax errors break language rules, not numeric range.' },
          { text: 'Referential integrity error', correct: false, feedback: 'That is a database concept, not a numerical programming error.' }
        ],
        hint: 'Too large for the range.',
        solution: 'Overflow can occur.'
      },
      {
        level: 'Checkpoint',
        title: 'Breakpoint purpose',
        stem: 'Why is a breakpoint useful during debugging?',
        options: [
          { text: 'It pauses execution so variable values can be inspected.', correct: true, feedback: 'Correct. Breakpoints help inspect program state at a chosen line.' },
          { text: 'It deletes all syntax errors automatically.', correct: false, feedback: 'Breakpoints help investigation; they do not automatically fix errors.' },
          { text: 'It converts SQL into Python.', correct: false, feedback: 'SQL/database work is separate from this programming debugging topic.' },
          { text: 'It guarantees the algorithm is efficient.', correct: false, feedback: 'A breakpoint does not prove efficiency.' }
        ],
        hint: 'Pause and inspect.',
        solution: 'A breakpoint pauses execution for inspection.'
      },
      {
        level: 'Checkpoint',
        title: 'Flag variable',
        stem: 'A search program sets found = False before a loop and found = True when the target is found. What is found?',
        options: [
          { text: 'Flag variable', correct: true, feedback: 'Correct. It records whether the target has been found.' },
          { text: 'Accumulator', correct: false, feedback: 'An accumulator stores a running total.' },
          { text: 'Primary key', correct: false, feedback: 'A primary key identifies database records.' },
          { text: 'Subquery', correct: false, feedback: 'A subquery is SQL/database content.' }
        ],
        hint: 'It stores a true/false state.',
        solution: 'found is a flag variable.'
      }
    ]
  },
  {
    id: 'EC3 Advanced Control Structures',
    group: 'Elective C Algorithm and Programming',
    title: 'EC3 Advanced Control Structures',
    focus: 'Apply nested selection, nested loops, 2D-array traversal, integrated control structures and algorithm comparison.',
    cards: [
      { title: 'Nested loops', body: 'A nested loop places one loop inside another. The inner loop usually completes all its repetitions for each outer-loop value.' },
      { title: 'Pattern printing', body: 'Pattern tasks test how nested loops control rows, columns and repeated output characters.' },
      { title: '2D arrays', body: 'A 2D array stores data in rows and columns. Traversal usually uses nested loops and row/column indexes.' },
      { title: 'Algorithm comparison', body: 'Compare algorithms by correctness, efficiency, clarity, suitability and trade-offs for the given problem.' }
    ],
    concepts: [
      'Nested loops are suitable for row-column processing.',
      'The number of inner-loop executions is often outer count multiplied by inner count.',
      '2D array indexes must identify both row and column.',
      'Pattern printing requires careful tracing of loop bounds.',
      'Algorithm comparison should use evidence from the scenario, not only name recognition.'
    ],
    misconceptions: [
      'Do not assume the inner loop runs only once.',
      'Do not swap row and column indexes without checking the array layout.',
      'A shorter algorithm is not automatically more appropriate.',
      '2D array emphasis belongs to Elective C, not Core D.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Nested count',
        stem: 'An outer loop runs 3 times and the inner loop runs 4 times for each outer loop. How many times does the inner-loop body run?',
        options: [
          { text: '12', correct: true, feedback: 'Correct. 3 x 4 = 12.' },
          { text: '7', correct: false, feedback: 'Adding the counts is not correct for nested-loop body executions.' },
          { text: '4', correct: false, feedback: 'The inner loop runs 4 times for each of 3 outer iterations.' },
          { text: '3', correct: false, feedback: 'That is only the outer-loop count.' }
        ],
        hint: 'Multiply outer and inner counts.',
        solution: 'The body runs 12 times.'
      },
      {
        level: 'Checkpoint',
        title: '2D index',
        stem: 'In a 2D array marks[row][col], what does row usually identify?',
        options: [
          { text: 'Which row is selected', correct: true, feedback: 'Correct. The first index usually selects the row.' },
          { text: 'The whole program purpose', correct: false, feedback: 'An index selects an element position.' },
          { text: 'A stack top pointer', correct: false, feedback: 'Stack pointers belong to EC5 data structures.' },
          { text: 'A binary search midpoint', correct: false, feedback: 'Binary search belongs to EC6.' }
        ],
        hint: 'The name row is the clue.',
        solution: 'row identifies the selected row.'
      },
      {
        level: 'Checkpoint',
        title: 'Comparison',
        stem: 'When comparing two algorithms, which factor is most relevant?',
        options: [
          { text: 'Correctness and efficiency for the given problem', correct: true, feedback: 'Correct. Suitability depends on the scenario and behaviour.' },
          { text: 'Whether the algorithm name sounds newer', correct: false, feedback: 'Name novelty is not a DSE comparison criterion.' },
          { text: 'Whether it uses a database table', correct: false, feedback: 'This is algorithm comparison, not Elective A database design.' },
          { text: 'Whether it avoids all variables', correct: false, feedback: 'Algorithms normally use variables where needed.' }
        ],
        hint: 'Compare behaviour and suitability.',
        solution: 'Use correctness and efficiency for the given problem.'
      }
    ]
  },
  {
    id: 'EC4 Sub-programs',
    group: 'Elective C Algorithm and Programming',
    title: 'EC4 Sub-programs',
    focus: 'Use functions and procedures to modularise programs, pass parameters, reason about scope and apply stubs during debugging.',
    cards: [
      { title: 'Functions and procedures', body: 'Subprograms break a program into reusable parts. A function returns a value; a procedure-style subprogram performs a task.' },
      { title: 'Parameters and arguments', body: 'Arguments are supplied by the caller. Parameters are the local names used inside the subprogram.' },
      { title: 'Local and global scope', body: 'Local variables exist inside a subprogram. Global variables have wider scope and should be used carefully.' },
      { title: 'Stubs', body: 'A stub temporarily replaces an unfinished subprogram during testing so other parts can be checked.' }
    ],
    concepts: [
      'Subprograms belong to Elective C only in this platform.',
      'A returned value must be used or assigned by the caller if it is needed later.',
      'Parameters receive argument values when the subprogram is called.',
      'Local variables cannot normally be accessed directly outside their subprogram.',
      'Stubs help test program structure before all subprograms are complete.'
    ],
    misconceptions: [
      'Do not show subprograms as Core D content.',
      'A parameter name inside a function is not the same variable as every similarly named variable outside.',
      'Calling a function does not automatically store its return value unless the caller assigns or uses it.',
      'A stub is not the final full implementation.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Return value',
        stem: 'A function calculateTotal() returns 80. Which statement stores the returned value in total?',
        options: [
          { text: 'total = calculateTotal()', correct: true, feedback: 'Correct. The returned value is assigned to total.' },
          { text: 'calculateTotal()', correct: false, feedback: 'This calls the function but does not store the returned value.' },
          { text: 'return total = calculateTotal()', correct: false, feedback: 'The caller should assign the returned value; this syntax is not suitable.' },
          { text: 'DELETE FROM total', correct: false, feedback: 'That is SQL/database syntax, not a subprogram call.' }
        ],
        hint: 'Assign the function call result.',
        solution: 'Use total = calculateTotal().'
      },
      {
        level: 'Checkpoint',
        title: 'Parameter meaning',
        stem: 'In def add(x, y):, what are x and y?',
        options: [
          { text: 'Parameters', correct: true, feedback: 'Correct. They receive argument values when the function is called.' },
          { text: 'Arguments supplied by the caller only', correct: false, feedback: 'The caller supplies arguments; x and y are the parameter names inside the function.' },
          { text: 'Global variables automatically', correct: false, feedback: 'Parameters are local to the function unless handled otherwise.' },
          { text: 'Foreign keys', correct: false, feedback: 'Foreign keys are database concepts.' }
        ],
        hint: 'Names inside the function header.',
        solution: 'x and y are parameters.'
      },
      {
        level: 'Checkpoint',
        title: 'Stub',
        stem: 'Why might a programmer use a stub during testing?',
        options: [
          { text: 'To temporarily replace an unfinished subprogram.', correct: true, feedback: 'Correct. A stub lets other parts be tested before the full subprogram is ready.' },
          { text: 'To normalise a database to 3NF.', correct: false, feedback: 'Normalisation is Elective A database design.' },
          { text: 'To encrypt all variables.', correct: false, feedback: 'A stub is not an encryption tool.' },
          { text: 'To remove all function calls permanently.', correct: false, feedback: 'A stub supports testing; it does not remove modular design.' }
        ],
        hint: 'Temporary testing replacement.',
        solution: 'Use a stub to stand in for an unfinished subprogram.'
      }
    ]
  },
  {
    id: 'EC5 Data Structures',
    group: 'Elective C Algorithm and Programming',
    title: 'EC5 Data Structures',
    focus: 'Operate stacks, queues, circular queues, linked lists and choose data structures for suitable problems.',
    cards: [
      { title: 'Stack', body: 'A stack follows last-in-first-out. Push adds an item to the top and pop removes the top item.' },
      { title: 'Queue and circular queue', body: 'A queue follows first-in-first-out. A circular queue reuses array positions by wrapping front and rear indexes.' },
      { title: 'Linked list', body: 'A linked list stores data in nodes. Each node has a pointer or link to the next node.' },
      { title: 'Choosing structures', body: 'Choose the structure that matches the access pattern: LIFO, FIFO, dynamic links or array-based circular reuse.' }
    ],
    concepts: [
      'Stack operations affect the top item only.',
      'Queue insertion and deletion usually happen at different ends.',
      'Circular queues need careful full and empty conditions.',
      'Linked list traversal follows pointers from node to node.',
      'Stack, queue and linked list topics belong to EC5 only.'
    ],
    misconceptions: [
      'Do not use FIFO reasoning for a stack.',
      'Do not forget wrap-around when tracing a circular queue.',
      'A linked list pointer stores a link/reference, not the next node value by magic.',
      'Binary search and sorting belong to EC6, not EC5.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Stack order',
        stem: 'A stack receives push A, push B, then pop. Which item is removed?',
        options: [
          { text: 'B', correct: true, feedback: 'Correct. A stack is last-in-first-out.' },
          { text: 'A', correct: false, feedback: 'A was pushed first, so it is below B.' },
          { text: 'Both A and B', correct: false, feedback: 'One pop removes one top item.' },
          { text: 'Neither item', correct: false, feedback: 'The stack is not empty before pop.' }
        ],
        hint: 'Last pushed, first removed.',
        solution: 'B is popped.'
      },
      {
        level: 'Checkpoint',
        title: 'Queue order',
        stem: 'A queue receives enqueue A, enqueue B, then dequeue. Which item leaves first?',
        options: [
          { text: 'A', correct: true, feedback: 'Correct. A queue is first-in-first-out.' },
          { text: 'B', correct: false, feedback: 'B entered after A.' },
          { text: 'The top stack item', correct: false, feedback: 'Top is stack terminology, not ordinary queue removal.' },
          { text: 'A random item', correct: false, feedback: 'A queue has a defined FIFO order.' }
        ],
        hint: 'First entered, first leaves.',
        solution: 'A leaves first.'
      },
      {
        level: 'Checkpoint',
        title: 'Linked list traversal',
        stem: 'How does an algorithm normally move from one linked-list node to the next?',
        options: [
          { text: 'Follow the pointer/link stored in the current node.', correct: true, feedback: 'Correct. Traversal follows links from node to node.' },
          { text: 'Always add 1 to an array index only.', correct: false, feedback: 'That is array-style access; linked lists use pointers/links.' },
          { text: 'Run a SQL JOIN.', correct: false, feedback: 'SQL joins are database operations.' },
          { text: 'Use a binary search midpoint.', correct: false, feedback: 'Binary search is EC6 and requires sorted indexed data.' }
        ],
        hint: 'A node links to the next node.',
        solution: 'Follow the pointer/link.'
      }
    ]
  },
  {
    id: 'EC6 Searching and Sorting',
    group: 'Elective C Algorithm and Programming',
    title: 'EC6 Searching and Sorting',
    focus: 'Compare searching, swapping, sorting, merging and quicker sorting strategies through step-by-step movement, swaps and comparisons.',
    cards: [
      { title: 'Binary search', body: 'Binary search repeatedly compares with the middle item and halves the search range. The list must be sorted.' },
      { title: 'Bubble sort', body: 'Bubble sort compares adjacent items and swaps them when they are in the wrong order.' },
      { title: 'Selection and insertion sort', body: 'Selection sort selects the smallest remaining item. Insertion sort inserts each new item into the correct position in the sorted part.' },
      { title: 'Merging', body: 'Merging combines two sorted lists into one sorted list by repeatedly taking the smaller front item.' }
    ],
    concepts: [
      'Binary search requires sorted data.',
      'Bubble sort uses adjacent comparisons and swaps.',
      'Selection sort finds the minimum item in the unsorted part each pass.',
      'Insertion sort shifts items to insert a value into the sorted part.',
      'Merging assumes the input lists are already sorted.'
    ],
    misconceptions: [
      'Do not apply binary search to an unsorted list.',
      'Bubble sort and selection sort do not use the same swap pattern.',
      'Merging sorted lists is not the same as concatenating two lists.',
      'Stacks, queues and linked lists belong to EC5, not EC6.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Binary precondition',
        stem: 'What condition must be true before binary search is applied?',
        options: [
          { text: 'The list is sorted.', correct: true, feedback: 'Correct. Binary search depends on sorted order to halve the search range.' },
          { text: 'The list is stored as a stack.', correct: false, feedback: 'A stack is EC5; binary search needs sorted indexed data.' },
          { text: 'The list has no numbers.', correct: false, feedback: 'Binary search can work on sorted comparable values.' },
          { text: 'The algorithm uses a database table.', correct: false, feedback: 'This is an algorithm topic, not SQL/database.' }
        ],
        hint: 'Binary search halves the range using order.',
        solution: 'The list must be sorted.'
      },
      {
        level: 'Checkpoint',
        title: 'Bubble swap',
        stem: 'In ascending bubble sort, adjacent values 9 and 4 are compared. What should happen?',
        options: [
          { text: 'They should be swapped.', correct: true, feedback: 'Correct. 9 is larger than 4, so their order is wrong for ascending order.' },
          { text: 'They should stay unchanged.', correct: false, feedback: 'For ascending order, 4 should come before 9.' },
          { text: 'They should be deleted.', correct: false, feedback: 'Sorting reorders items; it does not delete them.' },
          { text: 'They should become a foreign key.', correct: false, feedback: 'Foreign keys are database concepts.' }
        ],
        hint: 'Ascending order means smaller first.',
        solution: 'Swap 9 and 4.'
      },
      {
        level: 'Checkpoint',
        title: 'Merging',
        stem: 'When merging [2, 6] and [1, 5], which value is output first?',
        options: [
          { text: '1', correct: true, feedback: 'Correct. Compare the front items 2 and 1; output the smaller one first.' },
          { text: '2', correct: false, feedback: '2 is the front of the first list, but 1 is smaller.' },
          { text: '5', correct: false, feedback: '5 is not the smallest front item initially.' },
          { text: '6', correct: false, feedback: '6 is larger and should not be output first.' }
        ],
        hint: 'Compare the first remaining item of each sorted list.',
        solution: '1 is output first.'
      }
    ]
  },
  {
    id: 'EC7 Handling of Text Files',
    group: 'Elective C Algorithm and Programming',
    title: 'EC7 Handling of Text Files',
    focus: 'Read, write, delete and update text-file records while processing strings and records line by line.',
    cards: [
      { title: 'Line-by-line reading', body: 'Text-file programs often read one line at a time, process the line and repeat until the end of file.' },
      { title: 'String field extraction', body: 'Records stored as text may contain fields separated by delimiters such as commas, spaces or fixed positions.' },
      { title: 'Record updates', body: 'Updating a text-file record usually requires reading records, modifying the target record and writing the updated set safely.' },
      { title: 'File errors', body: 'Programs should consider missing files, invalid record formats, empty files and clear error messages.' }
    ],
    concepts: [
      'Open, read/write and close file operations must be handled in the correct order.',
      'Line-by-line processing helps handle files with many records.',
      'String extraction should use the correct delimiter or position.',
      'Updating text files often uses a temporary output or rewritten file approach.',
      'Text file handling belongs to EC7.'
    ],
    misconceptions: [
      'Do not assume the whole file always fits comfortably into one variable.',
      'Do not forget to close files or use safe file-handling structures.',
      'A delimiter is part of the record format; choosing the wrong delimiter extracts wrong fields.',
      'Text-file record updates are not SQL UPDATE commands.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Reading strategy',
        stem: 'Why might a program read a text file line by line?',
        options: [
          { text: 'To process each record systematically without loading everything at once.', correct: true, feedback: 'Correct. Line-by-line reading is suitable for record processing.' },
          { text: 'To perform a SQL JOIN.', correct: false, feedback: 'SQL JOIN is database content, not text-file handling.' },
          { text: 'To push every line onto a stack only.', correct: false, feedback: 'A stack may be used in other tasks, but line-by-line reading is not defined by stack use.' },
          { text: 'To avoid all string processing.', correct: false, feedback: 'Text records often require string processing.' }
        ],
        hint: 'One line can represent one record.',
        solution: 'Read line by line to process records systematically.'
      },
      {
        level: 'Checkpoint',
        title: 'Delimiter',
        stem: 'A record is stored as "S001,Chan Tai Man,5A". What character separates the fields?',
        options: [
          { text: 'Comma', correct: true, feedback: 'Correct. The comma separates StudentID, name and class.' },
          { text: 'Full stop', correct: false, feedback: 'There is no full stop between the fields.' },
          { text: 'Slash', correct: false, feedback: 'No slash is used in the record.' },
          { text: 'Pointer', correct: false, feedback: 'A pointer belongs to linked-list structures, not this text delimiter.' }
        ],
        hint: 'Look between the fields.',
        solution: 'The delimiter is a comma.'
      },
      {
        level: 'Checkpoint',
        title: 'Missing file',
        stem: 'Which issue should a file-handling program consider when opening a file for reading?',
        options: [
          { text: 'The file may not exist.', correct: true, feedback: 'Correct. Missing files should be handled safely.' },
          { text: 'The file must always be sorted for binary search.', correct: false, feedback: 'Binary search belongs to EC6 and is not required for opening a file.' },
          { text: 'The file must be a database primary key.', correct: false, feedback: 'Primary keys are database concepts.' },
          { text: 'The file must contain unrelated program modules.', correct: false, feedback: 'Text files store text records; they do not need to contain program modules.' }
        ],
        hint: 'Opening can fail.',
        solution: 'The program should handle a missing file.'
      }
    ]
  },
  {
    id: 'EC8 Applications of Programming in Real Life',
    group: 'Elective C Algorithm and Programming',
    title: 'EC8 Applications of Programming in Real Life',
    focus: 'Connect programming with physical devices, sensors, event handlers, microcontrollers, automation, IoT, AI and smart living applications.',
    cards: [
      { title: 'Sensor data flow', body: 'A simple program may read sensor input, process the value and produce an output such as a display message or control signal.' },
      { title: 'Event handlers', body: 'Event-driven programs respond to events such as button clicks, sensor changes or messages from a device.' },
      { title: 'Automation', body: 'Automation scenarios combine input, decision logic and output action, such as turning on a fan when temperature is high.' },
      { title: 'Syllabus-safe applications', body: 'Keep examples simple: sensor readings, event handling, microcontroller-style control and clear IPO reasoning.' }
    ],
    concepts: [
      'A real-life programming application still follows input, process and output logic.',
      'Sensors provide input data; actuators or displays may provide output actions.',
      'An event handler runs when a specific event occurs.',
      'Automation decisions should use clear conditions and suitable outputs.',
      'EC8 should stay simple and avoid speculative product trivia or advanced AI implementation.'
    ],
    misconceptions: [
      'Do not treat every IoT or AI product as advanced programming content for this chapter.',
      'A sensor measures data; it does not by itself perform the whole decision process.',
      'An event handler is triggered by an event, not by every line running continuously.',
      'Keep examples within simple syllabus-safe programming scenarios.'
    ],
    activities: [],
    practice: [
      {
        level: 'Checkpoint',
        title: 'Sensor IPO',
        stem: 'A program reads a temperature sensor and turns on a fan if the value is above 28. What is the sensor reading?',
        options: [
          { text: 'Input', correct: true, feedback: 'Correct. The sensor provides input data to the program.' },
          { text: 'Output', correct: false, feedback: 'Turning on the fan is the output/action.' },
          { text: 'Primary key', correct: false, feedback: 'Primary keys are database concepts.' },
          { text: 'Sorting algorithm', correct: false, feedback: 'No sorting is described in this automation scenario.' }
        ],
        hint: 'The program receives the sensor value.',
        solution: 'The sensor reading is input.'
      },
      {
        level: 'Checkpoint',
        title: 'Event handler',
        stem: 'Which statement best describes an event handler?',
        options: [
          { text: 'Code that runs when a specified event occurs.', correct: true, feedback: 'Correct. Event handlers respond to events such as clicks or sensor changes.' },
          { text: 'A SQL command for deleting records.', correct: false, feedback: 'That is database content, not event-driven programming.' },
          { text: 'A rule for normalising to 3NF.', correct: false, feedback: 'Normalisation is database design.' },
          { text: 'A queue that must always be circular.', correct: false, feedback: 'Circular queues belong to EC5 data structures.' }
        ],
        hint: 'Event-driven means triggered by an event.',
        solution: 'An event handler runs when a specified event occurs.'
      },
      {
        level: 'Checkpoint',
        title: 'Automation action',
        stem: 'In an automatic door system, a motion sensor detects movement and the door motor opens. What is the motor action?',
        options: [
          { text: 'Output/action', correct: true, feedback: 'Correct. The program controls the motor as an output action.' },
          { text: 'Input data', correct: false, feedback: 'The motion sensor provides input; the motor opening is output.' },
          { text: 'A linked-list pointer', correct: false, feedback: 'Pointers belong to linked lists in EC5.' },
          { text: 'A binary search midpoint', correct: false, feedback: 'Binary search belongs to EC6 and is unrelated here.' }
        ],
        hint: 'The system does something physically.',
        solution: 'The motor opening is an output/action.'
      }
    ]
  }
];

topicContent = makeChapterContent();

function makeChapterContent() {
  return chapterBlueprints.reduce((result, chapter) => {
    const groupConfig = groupThemes[chapter.group] || groupThemes['Core A Information Processing'];
    const conceptCards = chapter.cards || (chapter.concepts || []).slice(0, 3).map((concept, index) => ({
      title: index === 0 ? 'Core idea' : index === 1 ? 'How it works' : 'Classroom example',
      body: concept
    }));
    result[chapter.id] = {
      id: chapter.id,
      group: chapter.group,
      title: chapter.title,
      description: chapter.focus,
      detailsLayout: chapter.detailsLayout,
      stats: makeChapterStats(chapter),
      cards: conceptCards,
      keypoints: chapter.concepts || [],
      formulae: chapter.formulae || [],
      misconceptions: chapter.misconceptions || makeCommonMisconceptions(chapter),
      exam: makeDseTransferItems(chapter),
      activities: chapter.activities || [],
      practice: chapter.practice || makeRandomPractice(chapter),
      steps: [
        'Start from the DSE syllabus focus and identify the exact boundary: Core, Elective A or Elective C.',
        'Check the common misconception before playing the demo or game.',
        'Complete one challenge, then transfer the same concept to the DSE-style question.'
      ],
      theme: groupConfig.theme
    };
    return result;
  }, {});
}

function makeChapterStats(chapter) {
  if (chapter.stats) return chapter.stats;
  const id = chapter.id.split(' ')[0];
  const words = chapter.title.replace(id, '').trim().split(/\s+/).filter(Boolean);
  const available = (chapter.activities || []).filter(title => getActivityStatus(title) === 'Available now').length;
  return [
    { value: id, label: 'DSE syllabus point' },
    { value: words.slice(0, 2).join(' ') || 'Concept', label: 'Revision focus' },
    { value: available, label: 'Available games now' }
  ];
}

function makeDseTransferItems(chapter) {
  const firstConcept = chapter.concepts?.[0] || 'the main ICT concept';
  return [
    `Paper 1A MC transfer: choose the best statement about ${firstConcept.charAt(0).toLowerCase()}${firstConcept.slice(1)} using misconception-based distractors.`,
    `Paper 1B transfer: in a school or daily-life scenario, apply the concept from ${chapter.title} and give one precise reason.`,
    'Challenge: complete a missing formula, pseudocode line, SQL clause or explanation where suitable, then state one common mistake to avoid.'
  ];
}

function makeActivityBlueprint(title, chapter) {
  const status = getActivityStatus(title);
  const demoKey = getDemoKeyForActivity(title, chapter);
  const arcadeKey = getArcadeKeyForActivity(title);
  return {
    title,
    mode: demoKey || arcadeKey ? 'demo' : inferActivityMode(title),
    status: demoKey || arcadeKey ? 'Available now' : status,
    demoKey,
    arcadeKey,
    goal: makeActivityGoal(title, chapter),
    tokens: makeActivityTokens(title, chapter),
    zones: makeActivityZones(title),
    misconception: makeActivityMisconception(title, chapter),
    challenge: makeActivityChallenge(title, chapter),
    transfer: `DSE transfer: after playing, write one sentence explaining how "${title}" models a concept in ${chapter.title}.`
  };
}

function getDemoKeyForActivity(title, chapter = {}) {
  const key = title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const demoMap = {
    'sequence and assignment': 'sequence',
    'sequence and assignment simulation': 'sequence',
    'selection': 'selection',
    'branch prediction lab': 'selection',
    'boolean selection': 'booleanSelection',
    'boolean gate challenge': 'booleanSelection',
    'condition repair game': 'booleanSelection',
    'trace table trainer': 'sequence',
    'while loop and validation': 'whileValidation',
    'while loop and validation simulation': 'whileValidation',
    'loop visualisation lab': 'whileValidation',
    'counting and accumulation': 'forAccumulator',
    'counter vs accumulator challenge': 'forAccumulator',
    'sum and average': 'sumAverage',
    'linear search': 'linearSearch',
    'linear search lab': 'linearSearch',
    '1d array processing': 'findMax',
    'array index explorer': 'findMax',
    'finding maximum value': 'findMax',
    'finding minimum value': 'findMin',
    'maximum minimum finder': 'findMax',
    'nested loop': 'nestedLoop',
    'nested loop visualiser': 'nestedLoop',
    '2d arrays': 'twoDArray',
    '2d array mission board': 'twoDArray',
    '2d array counting': 'twoDCount',
    'pattern printing challenge': 'nestedLoop',
    'binary search': 'binarySearch',
    'binary search detective': 'binarySearch',
    'bubble sort': 'bubblePass',
    'bubble sort swap predictor': 'bubblePass',
    'merging sorted lists': 'mergeLists',
    'merging sorted lists lab': 'mergeLists',
    'selection sort minimum finder': 'bubblePass',
    'insertion sort card game': 'bubblePass',
    'stack': 'stackOps',
    'stack simulator': 'stackOps',
    'queue and circular queue': 'queueOps',
    'queue circular queue simulator': 'queueOps',
    'linked list traversal': 'linkedList',
    'linked list pointer lab': 'linkedList',
    'pointer repair challenge': 'linkedList',
    'text file handling': 'textFile',
    'line by line reader': 'textFile',
    'string field extractor': 'textFile',
    'record update simulator': 'textFile'
  };
  if ([
    'subprogram and parameters',
    'sub programs',
    'subprograms',
    'function machine',
    'parameter passing visualiser',
    'local vs global variable arena',
    'subprogram completion challenge'
  ].includes(key) && chapter.id === 'EC4 Sub-programs') {
    return 'subprogram';
  }
  return demoMap[key] || null;
}

function getArcadeKeyForActivity(title) {
  const key = title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const arcadeMap = {
    'twos complement bit lab': 'twosComplement',
    'two s complement bit lab': 'twosComplement',
    'a4 formula mission room': 'spreadsheetLab',
    'sql query result predictor': 'sqlPlayground'
  };
  return arcadeMap[key] || null;
}

function getActivityStatus(title) {
  const availableNow = [
    'Programming Visual Lab',
    'Two’s Complement Bit Game',
    'Overflow Alarm Game',
    'Spreadsheet Formula Lab',
    'Formula Writing Game',
    'Cell Reference Trainer',
    'Formula Copy Visualiser',
    'SQL Query Builder / SQL Result Predictor',
    'JOIN Visualiser',
    'Network Security Simulator',
    'Phishing Inbox Game',
    'Firewall Rule Game',
    'Public Wi-Fi Risk Simulator',
    'Linear Search Game',
    'Loop Visualisation Lab',
    'Array Index Explorer'
  ];
  const conceptOnly = [
    'AI Impact Debate Cards',
    'Cyberbullying Scenario Game',
    'Digital Divide Map Game',
    'Colour and Accessibility Game',
    'File Sharing Risk Game'
  ];
  if (availableNow.includes(title)) return 'Available now';
  if (conceptOnly.includes(title)) return 'Concept card only';
  if (/escape|battle|quest|city|debate|adventure|doctor|dungeon|race/i.test(title)) return 'Coming soon';
  return 'Concept card only';
}

function makeCommonMisconceptions(chapter) {
  const group = chapter.group || '';
  const lowerTitle = chapter.title.toLowerCase();
  const generic = [
    'Memorising a term is not enough; DSE questions usually ask students to apply the term in a scenario.',
    'A valid answer should name the ICT concept and connect it to the data, user or system in the question.'
  ];
  if (lowerTitle.includes('data representation')) {
    return ['Unsigned and two’s complement ranges are different; do not use 0 to 255 for 8-bit signed values.', 'One hexadecimal digit represents four bits, not eight bits.', 'Lossless compression can reconstruct the original exactly; lossy compression cannot.'];
  }
  if (lowerTitle.includes('spreadsheet')) {
    return ['A copied formula changes relative references but keeps absolute references such as $B$1 fixed.', 'A formula should normally use cell references rather than typing fixed values.', 'Filtering hides non-matching records; it does not delete them.'];
  }
  if (lowerTitle.includes('network security')) {
    return ['Deleting a phishing email only protects one user; reporting it helps block the threat for others.', 'Encryption protects confidentiality but does not prove a sender is trustworthy by itself.', 'A firewall rule should allow needed services and block unnecessary exposed ports.'];
  }
  if (lowerTitle.includes('sql')) {
    return ['SELECT chooses fields; WHERE filters records. Mixing these roles is a common SQL error.', 'A JOIN needs related key fields, not just fields with similar-looking values.', 'Predict query output by applying FROM, WHERE and SELECT in order.'];
  }
  if (lowerTitle.includes('sub-program')) {
    return ['Sub-programs and parameters belong to Elective C, not Core D.', 'Arguments are supplied by the caller; parameters are the local names used inside the subprogram.', 'A returned value must be assigned or used by the calling code if it is needed later.'];
  }
  if (group.includes('Core D')) {
    return ['Core D focuses on sequence, selection, iteration, arrays, basic tracing, Python basics, testing and debugging.', 'Binary search, stacks, queues, linked lists, text file handling and 2D arrays are Elective C emphasis.', 'Trace the variable update after each line; do not jump straight to the final answer.'];
  }
  if (group.includes('Elective C')) {
    return ['Elective C questions often require tracing pointers, indexes, return values or data-structure state step by step.', 'Linear search can be a Core D array-processing task, but binary search is Elective C searching.', 'For stacks, queues and linked lists, the pointer or index movement is usually more important than the stored value alone.'];
  }
  if (group.includes('Elective A')) {
    return ['Databases and programming should not be mixed unless a question explicitly requires integration.', 'A primary key uniquely identifies records; a foreign key links to a related table.', 'Normalisation reduces redundancy and update anomalies, not the number of records for its own sake.'];
  }
  return generic;
}

function makeActivityMisconception(title) {
  const lower = title.toLowerCase();
  if (lower.includes('sub')) return 'Misconception check: this is Elective C only; do not revise it as a Core D topic.';
  if (lower.includes('binary')) return 'Misconception check: binary search is not suitable unless the data is sorted.';
  if (lower.includes('linear search')) return 'Misconception check: linear search works on unsorted data but may need to check every item.';
  if (lower.includes('formula') || lower.includes('cell')) return 'Misconception check: copying changes relative references but not absolute references.';
  if (lower.includes('sql')) return 'Misconception check: WHERE filters records; SELECT chooses fields.';
  if (lower.includes('security') || lower.includes('phishing') || lower.includes('firewall') || lower.includes('wi-fi')) return 'Misconception check: choose a control based on evidence, not on a vague idea of being careful.';
  return 'Misconception check: explain the exact ICT rule shown by the demo, not only the final answer.';
}

function makeActivityChallenge(title, chapter) {
  const lower = title.toLowerCase();
  if (lower.includes('formula') || lower.includes('cell')) return 'Challenge: complete the missing formula and explain why one reference must or must not use $ symbols.';
  if (lower.includes('sql')) return 'Challenge: assemble the SELECT-FROM-WHERE statement, then predict the result table.';
  if (lower.includes('search') || lower.includes('sort') || lower.includes('array')) return 'Challenge: trace the index/pointer movement and predict the output or final array state.';
  if (lower.includes('security') || lower.includes('phishing') || lower.includes('firewall') || lower.includes('wi-fi')) return 'Challenge: identify the risk signal, choose the control, then justify it in one DSE-style sentence.';
  if (lower.includes('two') || lower.includes('overflow') || lower.includes('bit')) return 'Challenge: convert the bit pattern, state the signed range and identify whether overflow occurs.';
  return `Challenge: apply this activity to one compact DSE-style scenario from ${chapter.title}.`;
}

function makeRandomPractice(chapter) {
  const concept = chapter.concepts?.[0] || chapter.focus || chapter.title;
  const title = chapter.title;
  const firstActivity = 'the Details and Common Mistakes sections';
  return [
    {
      level: 'Level 1: Concept check',
      title: 'Terminology precision',
      stem: `Which statement best matches this syllabus point: ${concept}`,
      options: [
        { text: 'It names the ICT concept and connects it to a realistic system.', correct: true },
        { text: 'It only repeats a general common-sense idea.', correct: false },
        { text: 'It ignores the Core/Elective boundary.', correct: false }
      ],
      hint: 'DSE answers usually need the term plus the scenario link.',
      solution: `For ${title}, the answer should connect the concept to the situation instead of giving only a vague definition.`
    },
    {
      level: 'Level 2: Trace / predict / calculate',
      title: 'Process checkpoint',
      stem: `After studying the Details and Common Mistakes sections, what should you be able to trace or predict?`,
      options: [
        { text: 'The state change, output, result table, formula result or selected control.', correct: true },
        { text: 'Only the name of the activity.', correct: false },
        { text: 'Only a vague study habit reminder.', correct: false }
      ],
      hint: 'The site is for student revision through visible reasoning.',
      solution: 'The practice target is visible reasoning: trace a process, predict a result, complete a blank or explain a correction.'
    },
    {
      level: 'Level 3: DSE transfer',
      title: 'Exam transfer',
      stem: `A DSE question changes the context but keeps the same idea from ${title}. What should you do first?`,
      options: [
        { text: 'Identify the syllabus point and the exact data/control/process involved.', correct: true },
        { text: 'Assume the same final answer must be reused.', correct: false },
        { text: 'Write a broad technology awareness paragraph.', correct: false }
      ],
      hint: 'Transfer means reusing the concept, not memorising the surface story.',
      solution: 'Start by identifying the syllabus point, then apply it to the new data, program, formula, query or network scenario.'
    }
  ];
}

function inferActivityMode(title) {
  const lower = title.toLowerCase();
  if (lower.includes('data or information')) return 'dataInfo';
  if (lower.includes('sorting') || lower.includes('matching') || lower.includes('licence') || lower.includes('classify') || lower.includes('choice')) return 'sorter';
  if (lower.includes('builder') || lower.includes('design') || lower.includes('diagram') || lower.includes('html') || lower.includes('sql') || lower.includes('formula') || lower.includes('program builder')) return 'builder';
  if (lower.includes('chain') || lower.includes('timeline') || lower.includes('flow') || lower.includes('journey') || lower.includes('assembly') || lower.includes('path') || lower.includes('maze')) return 'sequence';
  if (lower.includes('visual') || lower.includes('simulator') || lower.includes('explorer') || lower.includes('meter') || lower.includes('lab')) return 'visualiser';
  if (lower.includes('stack') || lower.includes('queue') || lower.includes('list') || lower.includes('array') || lower.includes('search') || lower.includes('sort')) return 'dataLab';
  return 'simulator';
}

function makeActivityGoal(title, chapter) {
  const demoKey = getDemoKeyForActivity(title, chapter);
  if (demoKey) {
    return `Open the existing visual simulation for ${demos[demoKey].title} from ${chapter.title}.`;
  }
  const arcadeKey = getArcadeKeyForActivity(title);
  if (arcadeKey) {
    return `Open the existing interactive lab for ${arcadeData[arcadeKey].title} from ${chapter.title}.`;
  }
  const modeGoals = {
    dataInfo: 'Sort classroom cards into data or information, then watch how processing turns facts into meaning.',
    sorter: 'Move each concept card to a meaningful group and notice why similar terms are not identical.',
    builder: 'Build a working model from components, then run the model to see how the parts connect.',
    sequence: 'Arrange the steps into a sensible order and watch the process unfold.',
    visualiser: 'Move the controls and observe how the representation or system state changes.',
    dataLab: 'Manipulate data items step by step and watch indexes, pointers or positions change.',
    simulator: 'Toggle decisions and observe the effect on risk, suitability or system quality.'
  };
  return `${modeGoals[inferActivityMode(title)]} This supports ${chapter.title}.`;
}

function makeActivityTokens(title, chapter) {
  const lower = title.toLowerCase();
  if (lower.includes('data or information')) return ['40.3', '39.4', 'Student weight chart', 'Pass', 'Class average = 72', 'Ranking: 1st, 2nd, 3rd', 'Temperature = 30°C', 'Image file: orange.png'];
  if (lower.includes('impact judge')) return ['benefit', 'risk', 'stakeholder', 'mitigation', 'privacy concern', 'efficiency gain'];
  if (lower.includes('ict application')) return ['sensor', 'database', 'network', 'cloud service', 'data analysis', 'access control'];
  if (lower.includes('iot data flow')) return ['sensor', 'data collection', 'network transmission', 'server processing', 'output action', 'user alert'];
  if (lower.includes('online transaction')) return ['personal data', 'payment data', 'encryption', '2FA', 'phishing risk', 'transaction record'];
  if (lower.includes('cloud sharing')) return ['attachment', 'cloud link', 'access right', 'version control', 'recipient email', 'expiry date'];
  if (lower.includes('broken webpage')) return ['<img src>', 'missing closing tag', 'wrong href', '../images/logo.png', 'index.html', 'alt text'];
  if (lower.includes('relative path')) return ['../', './', 'images/photo.jpg', '../css/style.css', 'same folder', 'parent folder'];
  if (lower.includes('ergonomics')) return ['monitor height', 'chair support', 'lighting', 'keyboard position', 'mouse position', 'breaks'];
  if (lower.includes('privacy decision')) return ['HKID number', 'purpose', 'consent', 'access right', 'encryption', 'retention period'];
  if (lower.includes('parity')) return ['1011001', 'even parity', 'odd parity', 'parity bit', 'transmission error', 'detected'];
  if (lower.includes('sql')) return ['SELECT', 'field list', 'FROM table', 'WHERE condition', 'ORDER BY', 'result set'];
  if (lower.includes('formula') || lower.includes('spreadsheet') || lower.includes('cell')) return ['=SUM', 'IF', 'A1', '$A$1', 'copy down', 'recalculate'];
  if (lower.includes('network') || lower.includes('packet') || lower.includes('protocol') || lower.includes('dns')) return ['client', 'DNS', 'router', 'packet', 'server', 'response'];
  if (lower.includes('stack')) return ['push', 'pop', 'top', 'overflow', 'underflow', 'LIFO'];
  if (lower.includes('queue')) return ['enqueue', 'dequeue', 'front', 'rear', 'wrap around', 'FIFO'];
  if (lower.includes('array') || lower.includes('search') || lower.includes('sort')) return ['index', 'compare', 'swap', 'target', 'minimum', 'sorted'];
  if (lower.includes('security') || lower.includes('phishing') || lower.includes('firewall') || lower.includes('wi-fi') || lower.includes('malware')) return ['suspicious link', 'port rule', '2FA', 'VPN', 'encryption', 'backup'];
  if (lower.includes('device') || lower.includes('sensor') || lower.includes('printer')) return ['barcode reader', 'sensor', 'printer', 'projector', 'microphone', 'scanner'];
  return (chapter.concepts || []).slice(0, 4).concat(['scenario', 'decision']).map(item => item.split(/[.;:]/)[0].slice(0, 34));
}

function makeActivityZones(title) {
  const lower = title.toLowerCase();
  if (lower.includes('data or information')) return ['Data', 'Information'];
  if (lower.includes('validation') || lower.includes('verification')) return ['Validation', 'Verification', 'Needs human check'];
  if (lower.includes('licence') || lower.includes('copyright') || lower.includes('creative')) return ['Allowed', 'Need permission', 'Risky'];
  if (lower.includes('security') || lower.includes('phishing') || lower.includes('firewall') || lower.includes('wi-fi')) return ['Safe action', 'Risk signal', 'Protection'];
  if (lower.includes('device') || lower.includes('hardware') || lower.includes('software')) return ['Input', 'Process / storage', 'Output / support'];
  if (lower.includes('database') || lower.includes('key') || lower.includes('sql')) return ['Table / field', 'Key / relationship', 'Query result'];
  return ['Use first', 'Process / connect', 'Output / explain'];
}

function renderChapterSidebar() {
  const nav = document.querySelector('.module-nav');
  if (!nav) return;
  nav.innerHTML = `
    <div class="nav-title">HKDSE ICT</div>
    <button class="nav-item nav-root active" data-page="dashboard">
      <span class="nav-emoji">⌂</span>
      ICT revision hub
    </button>
    ${chapterStructure.map((group, groupIndex) => `
      <section class="curriculum-group ${groupIndex === 0 ? 'is-open' : ''}">
        <button class="curriculum-heading" type="button" aria-expanded="${groupIndex === 0 ? 'true' : 'false'}" aria-controls="${group.id}">
          <span class="nav-emoji">${escapeHtml(group.icon)}</span>
          <span>${escapeHtml(group.group)}</span>
        </button>
        <div class="topic-list" id="${group.id}">
          ${group.chapters.map(([topic, label]) => `
            <button class="nav-item" data-topic="${escapeHtml(topic)}" data-group="${escapeHtml(group.group)}">${escapeHtml(label)}</button>
          `).join('')}
        </div>
      </section>
    `).join('')}
  `;
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
  return arr[randInt(0, arr.length - 1)];
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function formatValue(value) {
  if (value === undefined || value === null || value === '') return '—';
  if (Array.isArray(value)) return `[${value.join(', ')}]`;
  return String(value);
}

function makeCell(value, subvalue = '') {
  return { value, subvalue };
}

function state(line, vars, arr, activeIndex, output, note, checkpoint = false) {
  return { line, vars: clone(vars), array: clone(arr), activeIndex, output, note, checkpoint };
}

function makeSequenceCase() {
  const price = randInt(8, 25);
  const qty = randInt(2, 6);
  const discount = pick([5, 8, 10]);
  const subtotal = price * qty;
  const total = subtotal - discount;
  const arr = [makeCell(price, 'price'), makeCell(qty, 'qty'), makeCell(discount, 'discount')];
  return {
    array: arr,
    code: [`price ← ${price}`, `qty ← ${qty}`, 'subtotal ← price x qty', `discount ← ${discount}`, 'total ← subtotal - discount', 'Output total'],
    trace: [
      state(1, { price, qty: '—', subtotal: '—', discount: '—', total: '—' }, arr, 1, '—', 'The unit price is assigned.'),
      state(2, { price, qty, subtotal: '—', discount: '—', total: '—' }, arr, 2, '—', 'The quantity is assigned.'),
      state(3, { price, qty, subtotal, discount: '—', total: '—' }, arr, [1, 2], '—', 'The program calculates the subtotal.', true),
      state(4, { price, qty, subtotal, discount, total: '—' }, arr, 3, '—', 'The discount is assigned.'),
      state(5, { price, qty, subtotal, discount, total }, arr, null, '—', 'The total is calculated after discount.'),
      state(6, { price, qty, subtotal, discount, total }, arr, null, total, `The final output is ${total}.`)
    ],
    variables: demos.sequence.meanings,
    notice: 'Sequence means statements are executed from top to bottom. Assignment replaces the old value of a variable.',
    prediction: basicPrediction('What is the value of subtotal?', String(subtotal), 'Use price x qty before applying the discount.')
  };
}

function makeSelectionCase() {
  const mark = randInt(35, 95);
  const grade = mark >= 80 ? 'A' : mark >= 60 ? 'B' : mark >= 50 ? 'C' : 'F';
  const result = mark >= 50 ? 'Pass' : 'Fail';
  const arr = [mark];
  return {
    array: arr,
    code: [`mark ← ${mark}`, 'if mark >= 80 then', '    grade ← "A"', 'else if mark >= 60 then', '    grade ← "B"', 'else if mark >= 50 then', '    grade ← "C"', 'else', '    grade ← "F"', 'if mark >= 50 then', '    result ← "Pass"', 'else', '    result ← "Fail"', 'Output grade, result'],
    trace: [
      state(1, { mark, grade: '—', result: '—' }, arr, 1, '—', 'The mark is assigned.'),
      state(2, { mark, grade: '—', result: '—' }, arr, 1, '—', `Check whether ${mark} is at least 80.`, mark >= 80),
      state(mark >= 80 ? 3 : 4, { mark, grade: mark >= 80 ? grade : '—', result: '—' }, arr, 1, '—', mark >= 80 ? 'The first branch is selected.' : 'The first condition is False, so the next condition is checked.'),
      state(mark >= 80 ? 10 : mark >= 60 ? 5 : mark >= 50 ? 7 : 9, { mark, grade, result: '—' }, arr, 1, '—', `The selected grade is ${grade}.`),
      state(10, { mark, grade, result: '—' }, arr, 1, '—', `Check whether ${mark} is at least 50.`, true),
      state(mark >= 50 ? 11 : 13, { mark, grade, result }, arr, 1, '—', `The result is ${result}.`),
      state(14, { mark, grade, result }, arr, 1, `${grade}, ${result}`, `The final output is ${grade}, ${result}.`)
    ],
    variables: demos.selection.meanings,
    notice: 'Selection chooses a branch. In an ELSE IF chain, later branches are skipped once a True condition is found.',
    prediction: basicPrediction('Which grade will be assigned?', grade, 'Check the conditions from top to bottom.')
  };
}

function makeWhileValidationCase() {
  const validScore = randInt(0, 100);
  const inputs = [pick([-8, 105, 130]), pick([-3, 140]), validScore];
  const arr = inputs.map((v, idx) => makeCell(v, `input ${idx + 1}`));
  const trace = [];
  let score = inputs[0];
  let attempt = 1;
  trace.push(state(1, { score: '—', attempt: '—', valid: 'False' }, arr, null, '—', 'The program is ready to read a score.'));
  for (let idx = 0; idx < inputs.length; idx++) {
    score = inputs[idx];
    attempt = idx + 1;
    const valid = score >= 0 && score <= 100;
    trace.push(state(2, { score, attempt, valid }, arr, idx + 1, '—', `Input ${attempt} is ${score}.`));
    trace.push(state(3, { score, attempt, valid }, arr, idx + 1, '—', valid ? 'The score is valid, so the loop stops.' : 'The score is invalid, so the loop repeats.', !valid && idx === 0));
  }
  trace.push(state(5, { score, attempt, valid: 'True' }, arr, inputs.length, score, `The accepted score is ${score}.`));
  return {
    array: arr,
    code: ['repeat', '    input score', 'until score >= 0 AND score <= 100', 'valid ← True', 'Output score'],
    trace,
    variables: demos.whileValidation.meanings,
    notice: 'Validation loops prevent invalid data from being accepted. The condition combines lower and upper bounds using AND.',
    prediction: basicPrediction(`Is ${inputs[0]} accepted as a valid score?`, 'No', 'A valid score must be from 0 to 100 inclusive.')
  };
}

function makeBooleanSelectionCase() {
  const A = randInt(1, 9);
  const B = randInt(1, 9);
  const C = randInt(1, 9);
  const expressions = [
    { text: 'A < B AND C >= A', value: A < B && C >= A },
    { text: 'A + B > C OR C = 5', value: A + B > C || C === 5 },
    { text: 'NOT (A = C) AND B > 3', value: !(A === C) && B > 3 },
    { text: 'A MOD 2 = 0 OR B MOD 2 = 0', value: A % 2 === 0 || B % 2 === 0 }
  ];
  const chosen = pick(expressions);
  const action = chosen.value ? 'Accept' : 'Review';
  const arr = [makeCell(A, 'A'), makeCell(B, 'B'), makeCell(C, 'C')];
  return {
    array: arr,
    code: [`A ← ${A}`, `B ← ${B}`, `C ← ${C}`, `if ${chosen.text} then`, '    action ← "Accept"', 'else', '    action ← "Review"', 'Output action'],
    trace: [
      state(1, { A, B: '—', C: '—', condition: '—', action: '—' }, arr, 1, '—', 'Assign A.'),
      state(2, { A, B, C: '—', condition: '—', action: '—' }, arr, 2, '—', 'Assign B.'),
      state(3, { A, B, C, condition: '—', action: '—' }, arr, 3, '—', 'Assign C.'),
      state(4, { A, B, C, condition: chosen.value, action: '—' }, arr, [1, 2, 3], '—', `Evaluate ${chosen.text}.`, true),
      state(chosen.value ? 5 : 7, { A, B, C, condition: chosen.value, action }, arr, null, '—', `The condition is ${chosen.value}, so action becomes ${action}.`),
      state(8, { A, B, C, condition: chosen.value, action }, arr, null, action, `The final output is ${action}.`)
    ],
    variables: demos.booleanSelection.meanings,
    notice: 'Boolean expressions are evaluated before the IF branch is selected. AND needs both sides True; OR needs at least one side True; NOT reverses a result.',
    followUp: 'Modify the expression so that action becomes the opposite value while changing only one operator.',
    prediction: basicPrediction(`Is the condition ${chosen.text} True or False?`, String(chosen.value), 'Evaluate brackets and NOT first, then AND, then OR.')
  };
}

function makeForAccumulatorCase() {
  const arr = Array.from({ length: 5 }, () => randInt(45, 95));
  const total = arr.reduce((a, b) => a + b, 0);
  const average = Math.round(total / arr.length);
  const trace = [state(1, { total: 0, count: 0, i: '—', average: '—' }, arr, null, '—', 'Initialise total and count.')];
  let running = 0;
  for (let i = 1; i <= arr.length; i++) {
    trace.push(state(2, { total: running, count: i - 1, i, average: '—' }, arr, i, '—', `Process mark[${i}].`, i === 1));
    running += arr[i - 1];
    trace.push(state(3, { total: running, count: i - 1, i, average: '—' }, arr, i, '—', `Add ${arr[i - 1]} to total.`));
    trace.push(state(4, { total: running, count: i, i, average: '—' }, arr, i, '—', 'Increase count by 1.'));
  }
  trace.push(state(5, { total, count: arr.length, i: arr.length, average }, arr, null, '—', 'Calculate the average.'));
  trace.push(state(6, { total, count: arr.length, i: arr.length, average }, arr, null, average, `The rounded average is ${average}.`));
  return {
    array: arr,
    code: ['total ← 0', 'for i from 1 to 5', '    total ← total + mark[i]', '    count ← count + 1', 'average ← total / count', 'Output average'],
    trace,
    variables: demos.forAccumulator.meanings,
    notice: 'An accumulator stores a running total. A counter records how many items have been processed.',
    prediction: basicPrediction('After the first item, what is count?', '1', 'The counter increases once for each processed item.')
  };
}

function makeSumAverageCase() {
  const length = randInt(5, 8);
  const arr = Array.from({ length }, () => randInt(20, 90));
  let sum = 0;
  const average = Number((arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1));
  const trace = [state(1, { sum: 0, n: arr.length, i: '—', average: '—' }, arr, null, '—', 'Initialise sum to 0.')];
  for (let i = 1; i <= arr.length; i++) {
    trace.push(state(2, { sum, n: arr.length, i, average: '—' }, arr, i, '—', `Process mark[${i}].`, i === 1));
    sum += arr[i - 1];
    trace.push(state(3, { sum, n: arr.length, i, average: '—' }, arr, i, '—', `Add ${arr[i - 1]} to sum.`));
  }
  trace.push(state(4, { sum, n: arr.length, i: arr.length, average }, arr, null, '—', `Divide ${sum} by ${arr.length}.`));
  trace.push(state(5, { sum, n: arr.length, i: arr.length, average }, arr, null, average, `The average is ${average}.`));
  return {
    array: arr,
    code: ['sum ← 0', 'for i from 1 to n', '    sum ← sum + mark[i]', 'average ← sum / n', 'Output average'],
    trace,
    variables: demos.sumAverage.meanings,
    notice: 'Average is calculated after the loop, because the sum is only complete when all array items have been processed.',
    followUp: 'Explain why average ← sum / n should not be placed inside the loop for this final-output task.',
    prediction: basicPrediction('Which variable stores the running total?', 'sum', 'The assignment sum ← sum + mark[i] updates the accumulator.')
  };
}

function makeLinearSearchCase() {
  const arr = Array.from({ length: 7 }, () => randInt(1001, 1015));
  const target = Math.random() < 0.72 ? pick(arr) : randInt(1020, 1030);
  const trace = [];
  let found = false;
  let foundIndex = null;
  trace.push(state(1, { target, found: 'False', n: arr.length, i: '—' }, arr, null, '—', 'Initialise target, found and n.'));
  for (let i = 1; i <= arr.length; i++) {
    trace.push(state(2, { target, found, n: arr.length, i }, arr, i, '—', `Check ID[${i}].`));
    const match = arr[i - 1] === target;
    trace.push(state(3, { target, found, n: arr.length, i }, arr, i, '—', match ? `ID[${i}] equals ${target}.` : `ID[${i}] does not match ${target}.`, match && !found));
    if (match) {
      found = true;
      if (foundIndex === null) foundIndex = i;
      trace.push(state(4, { target, found, n: arr.length, i }, arr, i, '—', 'Set found to True.'));
    }
  }
  trace.push(state(5, { target, found, n: arr.length, i: arr.length }, arr, foundIndex, found, `The final output is ${found}.`));
  return {
    array: arr,
    code: [`target ← ${target}`, 'found ← False', 'for i from 1 to n', '    if ID[i] = target then', '        found ← True', 'Output found'],
    trace,
    variables: demos.linearSearch.meanings,
    notice: 'Linear search can be used on unsorted data, but in the worst case it may need to check every item.',
    prediction: basicPrediction('What value is output if no item matches target?', 'False', 'found remains False when no match is found.')
  };
}

function makeSubprogramCase() {
  const base = randInt(20, 40);
  const copies = randInt(3, 8);
  const charge = base + copies * 2;
  const arr = [makeCell(base, 'base'), makeCell(copies, 'copies')];
  return {
    array: arr,
    code: ['FUNCTION fee(base, copies)', '    charge ← base + copies x 2', '    RETURN charge', 'base ← ' + base, 'copies ← ' + copies, 'amount ← fee(base, copies)', 'Output amount'],
    trace: [
      state(4, { base, copies: '—', charge: '—', amount: '—' }, arr, 1, '—', 'The main program assigns base.'),
      state(5, { base, copies, charge: '—', amount: '—' }, arr, 2, '—', 'The main program assigns copies.'),
      state(6, { base, copies, charge: '—', amount: '—' }, arr, [1, 2], '—', 'The function fee is called with two arguments.', true),
      state(2, { base, copies, charge, amount: '—' }, arr, [1, 2], '—', 'Inside the function, charge is calculated.'),
      state(3, { base, copies, charge, amount: '—' }, arr, null, charge, 'The function returns charge.'),
      state(6, { base, copies, charge, amount: charge }, arr, null, '—', 'The returned value is assigned to amount.'),
      state(7, { base, copies, charge, amount: charge }, arr, null, charge, `The final output is ${charge}.`)
    ],
    variables: demos.subprogram.meanings,
    notice: 'A subprogram helps reuse logic. Parameters receive argument values, and RETURN sends a value back to the caller.',
    prediction: basicPrediction('Which variable receives the returned value?', 'amount', 'The function call appears on the right side of the assignment to amount.')
  };
}

function makeFindMaxCase() {
  const arr = Array.from({ length: 7 }, () => randInt(10, 99));
  let max = arr[0];
  const trace = [state(1, { max, n: arr.length, i: '—' }, arr, 1, '—', 'Use the first item as the initial maximum.')];
  for (let i = 2; i <= arr.length; i++) {
    trace.push(state(3, { max, n: arr.length, i }, arr, i, '—', `Compare mark[${i}] with max.`, i === 2));
    if (arr[i - 1] > max) {
      max = arr[i - 1];
      trace.push(state(5, { max, n: arr.length, i }, arr, i, '—', `Update max to ${max}.`));
    }
  }
  trace.push(state(6, { max, n: arr.length, i: arr.length }, arr, arr.indexOf(max) + 1, max, `The maximum value is ${max}.`));
  return {
    array: arr,
    code: ['max ← mark[1]', 'n ← length of array mark', 'for i from 2 to n', '    if mark[i] > max then', '        max ← mark[i]', 'Output max'],
    trace,
    variables: demos.findMax.meanings,
    notice: 'This pattern also adapts to minimum, total, count, range and other array-processing tasks.',
    prediction: basicPrediction('Why does the loop start from 2?', 'mark[1] is already used as max', 'The first item has already been considered.')
  };
}

function makeFindMinCase() {
  const arr = Array.from({ length: 7 }, () => randInt(10, 99));
  let min = arr[0];
  const trace = [state(1, { min, n: arr.length, i: '—' }, arr, 1, '—', 'Use the first item as the initial minimum.')];
  for (let i = 2; i <= arr.length; i++) {
    trace.push(state(3, { min, n: arr.length, i }, arr, i, '—', `Compare mark[${i}] with min.`, i === 2));
    if (arr[i - 1] < min) {
      min = arr[i - 1];
      trace.push(state(5, { min, n: arr.length, i }, arr, i, '—', `Update min to ${min}.`));
    }
  }
  trace.push(state(6, { min, n: arr.length, i: arr.length }, arr, arr.indexOf(min) + 1, min, `The minimum value is ${min}.`));
  return {
    array: arr,
    code: ['min ← mark[1]', 'n ← length of array mark', 'for i from 2 to n', '    if mark[i] < min then', '        min ← mark[i]', 'Output min'],
    trace,
    variables: demos.findMin.meanings,
    notice: 'Finding a minimum uses the same scanning pattern as finding a maximum. Only the comparison operator changes from > to <.',
    prediction: basicPrediction('Which comparison is used when finding the minimum value?', 'mark[i] < min', 'Update min only when the current item is smaller than the smallest value so far.')
  };
}

function makeNestedLoopCase() {
  const rows = randInt(2, 3);
  const cols = randInt(3, 4);
  const pairs = [];
  const trace = [state(1, { row: '—', col: '—', count: 0, pair: '—' }, pairs, null, '—', 'Start with an empty list of pairs.')];
  let count = 0;
  for (let row = 1; row <= rows; row++) {
    trace.push(state(2, { row, col: '—', count, pair: '—' }, pairs, null, '—', `Outer loop chooses row ${row}.`, row === 1));
    for (let col = 1; col <= cols; col++) {
      const pair = `(${row},${col})`;
      pairs.push(makeCell(pair, `pair ${pairs.length + 1}`));
      count += 1;
      trace.push(state(3, { row, col, count, pair }, pairs, pairs.length, '—', `Inner loop creates pair ${pair}.`));
    }
  }
  trace.push(state(5, { row: rows, col: cols, count, pair: '—' }, pairs, null, count, `The nested loops generate ${count} pairs in total.`));
  return {
    array: pairs,
    code: ['count ← 0', `for row from 1 to ${rows}`, `    for col from 1 to ${cols}`, '        count ← count + 1', '        Output row, col', 'Output count'],
    trace,
    variables: demos.nestedLoop.meanings,
    notice: 'In a nested loop, the inner loop completes all its repetitions for each one repetition of the outer loop.',
    prediction: basicPrediction('If there are 2 rows and 3 columns, how many pairs are generated?', '6', 'Multiply the number of outer-loop values by the number of inner-loop values.')
  };
}

function makeTwoDArrayCase() {
  const rows = 3;
  const cols = 3;
  const grid = Array.from({ length: rows }, () => Array.from({ length: cols }, () => randInt(40, 95)));
  const cells = grid.flatMap((row, r) => row.map((value, c) => makeCell(value, `[${r + 1},${c + 1}]`)));
  let bestTotal = -1;
  let bestRow = 0;
  const trace = [];
  for (let row = 1; row <= rows; row++) {
    let total = 0;
    trace.push(state(2, { row, col: '—', total, bestRow: bestRow || '—', bestTotal: bestTotal < 0 ? '—' : bestTotal }, cells, null, '—', `Start processing row ${row}.`, row === 1));
    for (let col = 1; col <= cols; col++) {
      const flatIndex = (row - 1) * cols + col;
      total += grid[row - 1][col - 1];
      trace.push(state(4, { row, col, total, bestRow: bestRow || '—', bestTotal: bestTotal < 0 ? '—' : bestTotal }, cells, flatIndex, '—', `Add score[${row},${col}] to the row total.`));
    }
    if (total > bestTotal) {
      bestTotal = total;
      bestRow = row;
      trace.push(state(6, { row, col: cols, total, bestRow, bestTotal }, cells, row * cols, '—', `Row ${row} is the best row so far.`));
    }
  }
  trace.push(state(8, { row: rows, col: cols, total: bestTotal, bestRow, bestTotal }, cells, null, `Row ${bestRow}`, `The best row is row ${bestRow}.`));
  return {
    array: cells,
    code: ['bestTotal ← -1', 'for row from 1 to 3', '    total ← 0', '    for col from 1 to 3', '        total ← total + score[row, col]', '    if total > bestTotal then', '        bestTotal ← total; bestRow ← row', 'Output bestRow'],
    trace,
    variables: demos.twoDArray.meanings,
    notice: '2D arrays often use nested loops. The outer loop selects the row; the inner loop scans the columns.',
    prediction: basicPrediction('Which loop changes faster: row or col?', 'col', 'The inner loop completes all columns before row changes.')
  };
}

function makeTwoDCountCase() {
  const rows = pick([3, 4]);
  const cols = pick([3, 4]);
  const target = pick([50, 60, 70]);
  const grid = Array.from({ length: rows }, () => Array.from({ length: cols }, () => randInt(30, 95)));
  const cells = grid.flatMap((row, r) => row.map((value, c) => makeCell(value, `[${r + 1},${c + 1}]`)));
  let count = 0;
  const trace = [state(1, { row: '—', col: '—', target, count }, cells, null, '—', `Count grid values greater than or equal to ${target}.`)];
  for (let row = 1; row <= rows; row++) {
    trace.push(state(2, { row, col: '—', target, count }, cells, null, '—', `Start row ${row}.`, row === 1));
    for (let col = 1; col <= cols; col++) {
      const flatIndex = (row - 1) * cols + col;
      const value = grid[row - 1][col - 1];
      const matches = value >= target;
      trace.push(state(3, { row, col, target, count }, cells, flatIndex, '—', `Check grid[${row},${col}] = ${value}.`, row === 1 && col === 1));
      if (matches) {
        count += 1;
        trace.push(state(5, { row, col, target, count }, cells, flatIndex, '—', `${value} meets the condition, so count increases.`));
      }
    }
  }
  trace.push(state(6, { row: rows, col: cols, target, count }, cells, null, count, `${count} cells are greater than or equal to ${target}.`));
  return {
    array: cells,
    code: ['count ← 0', `for row from 1 to ${rows}`, `    for col from 1 to ${cols}`, `        if grid[row, col] >= ${target} then`, '            count ← count + 1', 'Output count'],
    trace,
    variables: demos.twoDCount.meanings,
    notice: 'A 2D counting task combines nested loops with selection. The inner loop checks each column in the current row.',
    followUp: 'Change one line so that the algorithm counts values below the target instead.',
    prediction: basicPrediction('Which variable changes faster in this nested-loop scan?', 'col', 'The inner loop completes all columns before the outer loop moves to the next row.')
  };
}

function makeBinarySearchCase() {
  const arr = Array.from(new Set(Array.from({ length: 9 }, () => randInt(10, 99)))).sort((a, b) => a - b).slice(0, 7);
  while (arr.length < 7) arr.push(arr[arr.length - 1] + randInt(2, 7));
  const target = Math.random() < 0.75 ? pick(arr) : randInt(100, 120);
  let low = 1;
  let high = arr.length;
  let found = false;
  const trace = [state(1, { target, low, high, mid: '—', found }, arr, null, '—', 'Set the initial search range.')];
  while (low <= high && !found) {
    const mid = Math.floor((low + high) / 2);
    trace.push(state(3, { target, low, high, mid, found }, arr, mid, '—', `Check the middle item A[${mid}].`, true));
    if (arr[mid - 1] === target) {
      found = true;
      trace.push(state(5, { target, low, high, mid, found }, arr, mid, '—', 'The target is found.'));
    } else if (arr[mid - 1] < target) {
      low = mid + 1;
      trace.push(state(7, { target, low, high, mid, found }, arr, mid, '—', 'Discard the lower half.'));
    } else {
      high = mid - 1;
      trace.push(state(9, { target, low, high, mid, found }, arr, mid, '—', 'Discard the upper half.'));
    }
  }
  trace.push(state(10, { target, low, high, mid: '—', found }, arr, null, found, `The final output is ${found}.`));
  return {
    array: arr,
    code: [`target ← ${target}`, 'low ← 1; high ← n; found ← False', 'while low <= high AND found = False', '    mid ← (low + high) DIV 2', '    if A[mid] = target then found ← True', '    else if A[mid] < target then low ← mid + 1', '    else high ← mid - 1', 'Output found'],
    trace,
    variables: demos.binarySearch.meanings,
    notice: 'Binary search is efficient, but it requires sorted data. Each comparison removes about half of the remaining search range.',
    prediction: basicPrediction('What is the main requirement for binary search?', 'The array must be sorted', 'Without sorted order, half of the data cannot be safely discarded.')
  };
}

function makeBubblePassCase() {
  const arr = Array.from({ length: 6 }, () => randInt(1, 50));
  const current = [...arr];
  let swapped = false;
  const trace = [state(1, { pass: 1, j: '—', swapped }, current, null, '—', 'Start the first pass.')];
  for (let j = 1; j < current.length; j++) {
    trace.push(state(3, { pass: 1, j, swapped }, current, [j, j + 1], '—', `Compare num[${j}] and num[${j + 1}].`, j === 1));
    if (current[j - 1] > current[j]) {
      [current[j - 1], current[j]] = [current[j], current[j - 1]];
      swapped = true;
      trace.push(state(5, { pass: 1, j, swapped }, current, [j, j + 1], '—', 'Swap the adjacent values and set swapped to True.'));
    }
  }
  trace.push(state(6, { pass: 1, j: current.length - 1, swapped }, current, current.length, `[${current.join(', ')}]`, 'After one pass, the largest value reaches the end.'));
  return {
    array: arr,
    code: ['pass ← 1', 'swapped ← False', 'for j from 1 to n - pass', '    if num[j] > num[j+1] then', '        swap num[j] and num[j+1]; swapped ← True', 'Output num'],
    trace,
    variables: demos.bubblePass.meanings,
    notice: 'Bubble sort repeatedly compares adjacent values. The swapped flag can be used to stop early when no swap occurs.',
    prediction: basicPrediction('After one ascending pass, where is the largest value?', 'At the end', 'The largest value keeps moving right after adjacent swaps.')
  };
}

function makeMergeListsCase() {
  const A = Array.from({ length: 4 }, () => randInt(1, 40)).sort((a, b) => a - b);
  const B = Array.from({ length: 4 }, () => randInt(1, 40)).sort((a, b) => a - b);
  let i = 1;
  let j = 1;
  let k = 1;
  const C = [];
  const trace = [state(1, { i, j, k, C }, C, null, '—', `A = [${A.join(', ')}], B = [${B.join(', ')}].`)];
  while (i <= A.length && j <= B.length) {
    const takeA = A[i - 1] <= B[j - 1];
    C.push(takeA ? A[i - 1] : B[j - 1]);
    trace.push(state(takeA ? 4 : 6, { i, j, k, C }, C, C.length, '—', takeA ? `Copy A[${i}] into C.` : `Copy B[${j}] into C.`, k === 1));
    if (takeA) i += 1;
    else j += 1;
    k += 1;
  }
  while (i <= A.length) { C.push(A[i - 1]); trace.push(state(8, { i, j, k, C }, C, C.length, '—', `Copy remaining A[${i}].`)); i += 1; k += 1; }
  while (j <= B.length) { C.push(B[j - 1]); trace.push(state(10, { i, j, k, C }, C, C.length, '—', `Copy remaining B[${j}].`)); j += 1; k += 1; }
  trace.push(state(11, { i, j, k, C }, C, null, `[${C.join(', ')}]`, 'The merged list is sorted.'));
  return {
    array: C,
    code: ['i ← 1; j ← 1; k ← 1', 'while i <= length(A) AND j <= length(B)', '    if A[i] <= B[j] then', '        C[k] ← A[i]; i ← i + 1', '    else', '        C[k] ← B[j]; j ← j + 1', '    k ← k + 1', 'copy any remaining items', 'Output C'],
    trace,
    variables: demos.mergeLists.meanings,
    notice: 'Merging uses two pointers. At each step, copy the smaller current item, then move that list pointer forward.',
    prediction: basicPrediction('What must be true about A and B before merging this way?', 'Both are sorted', 'The smaller-current-item rule depends on each input list already being sorted.')
  };
}

function makeStackCase() {
  const stack = [randInt(10, 30), randInt(31, 50)];
  const pushItem = randInt(51, 80);
  const popped = pushItem;
  return {
    array: stack,
    code: [`PUSH(stack, ${pushItem})`, 'item ← POP(stack)', 'Output item'],
    trace: [
      state(1, { top: stack.length, item: pushItem, output: '—' }, [...stack, pushItem], stack.length + 1, '—', `Push ${pushItem} onto the top of the stack.`, true),
      state(2, { top: stack.length + 1, item: popped, output: '—' }, [...stack, pushItem], stack.length + 1, '—', 'POP removes the top item.'),
      state(2, { top: stack.length, item: popped, output: popped }, stack, stack.length, '—', `The popped item is ${popped}.`),
      state(3, { top: stack.length, item: popped, output: popped }, stack, null, popped, `The output is ${popped}.`)
    ],
    variables: demos.stackOps.meanings,
    notice: 'A stack follows LIFO: last in, first out. PUSH inserts at the top; POP removes from the top.',
    prediction: basicPrediction('Which item is removed by POP?', String(pushItem), 'The most recently pushed item is at the top.')
  };
}

function makeQueueCase() {
  const queue = [makeCell(12, '1'), makeCell(24, '2'), makeCell('', '3'), makeCell('', '4'), makeCell('', '5')];
  const newItem = randInt(30, 60);
  const afterEnqueue = clone(queue);
  afterEnqueue[2] = makeCell(newItem, '3');
  const afterDequeue = clone(afterEnqueue);
  afterDequeue[0] = makeCell('', '1');
  return {
    array: queue,
    code: [`ENQUEUE(Q, ${newItem})`, 'output ← DEQUEUE(Q)', 'front ← next circular position', 'Output output'],
    trace: [
      state(1, { front: 1, rear: 2, count: 2, output: '—' }, queue, 2, '—', 'The queue initially has two items.'),
      state(1, { front: 1, rear: 3, count: 3, output: '—' }, afterEnqueue, 3, '—', `Enqueue stores ${newItem} after the rear.`, true),
      state(2, { front: 1, rear: 3, count: 3, output: 12 }, afterEnqueue, 1, '—', 'Dequeue removes the front item.'),
      state(3, { front: 2, rear: 3, count: 2, output: 12 }, afterDequeue, 2, '—', 'Move front to the next circular position.'),
      state(4, { front: 2, rear: 3, count: 2, output: 12 }, afterDequeue, null, 12, 'The dequeued output is 12.')
    ],
    variables: demos.queueOps.meanings,
    notice: 'A queue follows FIFO: first in, first out. In a circular queue, front and rear wrap around instead of shifting all items.',
    prediction: basicPrediction('Which item is removed first?', '12', 'DEQUEUE removes the item at the front.')
  };
}

function makeLinkedListCase() {
  const values = [randInt(10, 25), randInt(26, 45), randInt(46, 65)];
  const nodes = [makeCell(values[0], 'next: 3'), makeCell(values[2], 'next: 0'), makeCell(values[1], 'next: 2')];
  const trace = [
    state(1, { ptr: 1, value: '—', next: '—', count: 0 }, nodes, 1, '—', 'Start at the head pointer.'),
    state(3, { ptr: 1, value: values[0], next: 3, count: 1 }, nodes, 1, '—', 'Visit node 1, then follow next to node 3.', true),
    state(3, { ptr: 3, value: values[1], next: 2, count: 2 }, nodes, 3, '—', 'Visit node 3, then follow next to node 2.'),
    state(3, { ptr: 2, value: values[2], next: 0, count: 3 }, nodes, 2, '—', 'Visit node 2. Its next pointer is 0.'),
    state(5, { ptr: 0, value: '—', next: 0, count: 3 }, nodes, null, 3, 'The traversal stops when ptr is 0.')
  ];
  return {
    array: nodes,
    code: ['ptr ← head', 'count ← 0', 'while ptr <> 0', '    count ← count + 1', '    ptr ← node[ptr].next', 'Output count'],
    trace,
    variables: demos.linkedList.meanings,
    notice: 'A linked list stores each item with a pointer to the next node. Logical order may differ from physical array position.',
    prediction: basicPrediction('What value means the end of this linked list?', '0', 'A null pointer such as 0 indicates that there is no next node.')
  };
}

function makeTextFileCase() {
  const lines = ['Ada,72', 'Ben,absent', 'Choi,64', 'Dia,88'];
  const cells = lines.map((line, idx) => makeCell(line, `line ${idx + 1}`));
  let count = 0;
  let total = 0;
  const trace = [state(1, { line: '—', score: '—', count, total }, cells, null, '—', 'Open the text file for reading.')];
  lines.forEach((line, idx) => {
    const parts = line.split(',');
    const score = Number(parts[1]);
    const valid = Number.isInteger(score);
    trace.push(state(3, { line, score: valid ? score : 'invalid', count, total }, cells, idx + 1, '—', `Read ${line}.`, idx === 0));
    if (valid) {
      count += 1;
      total += score;
      trace.push(state(5, { line, score, count, total }, cells, idx + 1, '—', 'The score is numeric, so update count and total.'));
    }
  });
  trace.push(state(7, { line: '—', score: '—', count, total }, cells, null, `${count}, ${total}`, `There are ${count} valid records and total is ${total}.`));
  return {
    array: cells,
    code: ['open file for reading', 'while not end of file', '    read line', '    if score in line is numeric then', '        count ← count + 1', '        total ← total + score', 'Output count, total'],
    trace,
    variables: demos.textFile.meanings,
    notice: 'Text file tasks usually combine file reading, string/record interpretation, validation and accumulation.',
    prediction: basicPrediction('Should the line "Ben,absent" update total?', 'No', 'The score is not numeric.')
  };
}

function basicPrediction(question, answer, hint) {
  const options = makeTextOptions(answer);
  return {
    question,
    options: options.map(text => ({
      text,
      correct: text === answer,
      feedback: text === answer ? 'Correct.' : `Not quite. ${hint}`
    }))
  };
}

function makeTextOptions(answer) {
  const distractors = ['True', 'False', '0', '1', 'At the end', 'Base case', 'The array must be sorted', 'No', 'Yes', 'amount'];
  const set = new Set([String(answer)]);
  while (set.size < 3) set.add(pick(distractors));
  return [...set].sort(() => Math.random() - 0.5);
}

function loadDemo(key, keepExercise = false) {
  stopAuto();
  showProgrammingView();
  currentDemoKey = key;
  currentCase = demos[key].makeCase();
  currentCase.examTrap = examTrapForDemo(key);
  currentCase.dseTransfer = dseTransferForDemo(key);
  stepIndex = -1;
  demoSelect.value = key;
  demoTitle.textContent = demos[key].title;
  demoDescription.textContent = demos[key].description;
  arrayLabel.textContent = demos[key].arrayLabel;
  renderCode();
  renderArray(currentCase.array);
  renderVariables({});
  outputValue.textContent = '—';
  statusBadge.textContent = 'Ready';
  noticeBox.innerHTML = `Click <strong>Run next line</strong> to start the demonstration.<br><br><strong>Exam Trap:</strong> ${escapeHtml(currentCase.examTrap)}`;
  followUpBox.textContent = currentCase.dseTransfer || currentCase.followUp || 'DSE transfer: predict how the output changes if one input value is changed.';
  renderStory(null);
  renderPrediction(null);
  updateNavState(key);
  if (!keepExercise) clearExercise();
}

function renderCode() {
  codeLines.innerHTML = '';
  currentCase.code.forEach((line, idx) => {
    const li = document.createElement('li');
    li.dataset.line = idx + 1;
    li.innerHTML = `<span class="line-num">${idx + 1}</span><span>${escapeHtml(line)}</span>`;
    codeLines.appendChild(li);
  });
}

function renderArray(arr, activeIndex = null) {
  arrayCells.innerHTML = '';
  if (!arr.length) {
    const cell = document.createElement('div');
    cell.className = 'array-cell empty-cell';
    cell.innerHTML = '<strong>No items yet</strong><span class="index">watch this space</span>';
    arrayCells.appendChild(cell);
    return;
  }
  arr.forEach((item, idx) => {
    const index = idx + 1;
    const value = typeof item === 'object' && item !== null ? item.value : item;
    const subvalue = typeof item === 'object' && item !== null ? item.subvalue : `[${index}]`;
    const cell = document.createElement('div');
    const active = Array.isArray(activeIndex) ? activeIndex.includes(index) : activeIndex === index;
    cell.className = `array-cell ${active ? (Array.isArray(activeIndex) ? 'swap-cell' : 'active-cell') : ''}`;
    cell.innerHTML = `<strong>${escapeHtml(formatValue(value))}</strong><span class="index">${escapeHtml(subvalue || `[${index}]`)}</span>`;
    arrayCells.appendChild(cell);
  });
}

function renderVariables(vars) {
  const meanings = currentCase?.variables || {};
  variableRows.innerHTML = Object.keys(meanings).map(name => `
    <tr>
      <td>${escapeHtml(name)}</td>
      <td>${escapeHtml(formatValue(vars[name]))}</td>
      <td>${escapeHtml(meanings[name])}</td>
    </tr>
  `).join('');
}

function updateActiveLine(line) {
  document.querySelectorAll('.code-lines li').forEach(li => {
    li.classList.toggle('active-line', Number(li.dataset.line) === line);
  });
}

function renderStep() {
  const current = currentCase.trace[stepIndex];
  if (!current) {
    updateActiveLine(null);
    renderArray(currentCase.array);
    renderVariables({});
    outputValue.textContent = '—';
    renderPrediction(null);
    return;
  }
  updateActiveLine(current.line);
  renderArray(current.array, current.activeIndex);
  renderVariables(current.vars);
  outputValue.textContent = formatValue(current.output);
  statusBadge.textContent = current.note;
  noticeBox.innerHTML = `<strong>Current step:</strong> ${escapeHtml(current.note)}<br><br><strong>Key idea:</strong> ${escapeHtml(currentCase.notice)}<br><br><strong>Exam Trap:</strong> ${escapeHtml(currentCase.examTrap || 'Trace the current line before jumping to the output.')}`;
  followUpBox.textContent = currentCase.dseTransfer || currentCase.followUp || 'DSE transfer: identify one input that would change the final output and explain why.';
  renderStory(current);
  if (current.checkpoint) renderPrediction(currentCase.prediction);
  else if (!predictionOptions.children.length) renderPrediction(null);
}

function renderStory(current) {
  const demo = demos[currentDemoKey];
  const steps = getFlowSteps(currentCase?.code || []);
  const activeLine = current?.line || 0;
  storyTitle.textContent = current ? `Line ${current.line}: ${demo.title}` : `${demo.title} overview`;
  storyText.textContent = current
    ? `${current.note} Think of the character as pointing to the current line and updating the live memory beside it.`
    : 'The visual guide will highlight the current stage as you run the pseudocode step by step.';
  flowSteps.innerHTML = steps.map(step => `
    <div class="flow-step ${step.line === activeLine ? 'active-flow' : ''}">
      <span>${escapeHtml(step.icon)}</span>
      <strong>${escapeHtml(step.label)}</strong>
      <small>Line ${step.line}</small>
    </div>
  `).join('');
}

function getFlowSteps(code) {
  return code.map((line, index) => {
    const trimmed = line.trim().toLowerCase();
    let label = 'Process';
    let icon = '●';
    if (trimmed.startsWith('for') || trimmed.startsWith('while') || trimmed.startsWith('repeat')) {
      label = 'Repeat';
      icon = '↻';
    } else if (trimmed.startsWith('if') || trimmed.startsWith('else')) {
      label = 'Decide';
      icon = '?';
    } else if (trimmed.includes('output') || trimmed.includes('return')) {
      label = 'Report';
      icon = '→';
    } else if (trimmed.includes('←')) {
      label = 'Update';
      icon = '✎';
    }
    return { line: index + 1, label, icon };
  });
}

function renderPrediction(prediction) {
  predictionOptions.innerHTML = '';
  predictionFeedback.textContent = '';
  predictionFeedback.className = 'feedback-text';
  if (!prediction) {
    predictionQuestion.textContent = 'Run the program until a checkpoint appears.';
    return;
  }
  predictionQuestion.textContent = prediction.question;
  prediction.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option.text;
    btn.addEventListener('click', () => {
      [...predictionOptions.querySelectorAll('button')].forEach(b => b.disabled = true);
      btn.classList.add(option.correct ? 'correct' : 'wrong');
      predictionFeedback.textContent = option.feedback;
      predictionFeedback.className = `feedback-text ${option.correct ? 'good' : 'bad'}`;
    });
    predictionOptions.appendChild(btn);
  });
}

function nextStep() {
  if (stepIndex < currentCase.trace.length - 1) {
    stepIndex += 1;
    renderStep();
  } else {
    stopAuto();
    statusBadge.textContent = 'Completed';
  }
}

function previousStep() {
  stopAuto();
  if (stepIndex > -1) {
    stepIndex -= 1;
    renderStep();
    statusBadge.textContent = stepIndex === -1 ? 'Ready' : `Step ${stepIndex + 1} of ${currentCase.trace.length}`;
  }
}

function reset() {
  stopAuto();
  stepIndex = -1;
  statusBadge.textContent = 'Ready';
  noticeBox.innerHTML = 'Click <strong>Run next line</strong> to start the demonstration.';
  renderStep();
  renderStory(null);
}

function showExplanation() {
  if (!currentCase) return;
  const current = currentCase.trace[stepIndex];
  const stepText = current ? `<strong>Current step:</strong> ${escapeHtml(current.note)}<br><br>` : '';
  noticeBox.innerHTML = `${stepText}<strong>Key idea:</strong> ${escapeHtml(currentCase.notice)}<br><br><strong>Exam Trap:</strong> ${escapeHtml(currentCase.examTrap || 'Trace variable updates in order.')}`;
  followUpBox.textContent = currentCase.dseTransfer || currentCase.followUp || 'DSE transfer: write one short test case that checks whether this algorithm still works.';
}

function examTrapForDemo(key) {
  const traps = {
    sequence: 'Assignment replaces the old value. Do not treat ← as a mathematical equation.',
    selection: 'In an ELSE IF chain, only the first True branch is executed.',
    whileValidation: 'A validation loop must ask for input again; checking once is not enough.',
    booleanSelection: 'Evaluate NOT before AND, and AND before OR unless brackets say otherwise.',
    forAccumulator: 'Initialise counters and accumulators before the loop; otherwise the total or count is unreliable.',
    sumAverage: 'Calculate the final average after the loop, not before all values have been added.',
    linearSearch: 'Linear search may need to check every item. If it stops early, the loop condition must say so.',
    findMax: 'Initialise max to the first array item, not always to 0, because all values might be negative.',
    findMin: 'Initialise min to the first array item, not a random large value unless the range is guaranteed.',
    subprogram: 'Sub-programs and parameters are Elective C only. Do not present them as Core D.',
    nestedLoop: 'The inner loop completes all repetitions for each one value of the outer loop.',
    twoDArray: 'For 2D arrays, row and column indexes must be updated by the correct nested loop.',
    twoDCount: 'The counter changes only when the condition is True; do not count every cell automatically.',
    binarySearch: 'Binary search requires sorted data and must update low or high after checking mid.',
    bubblePass: 'One bubble-sort pass is not a full sort. DSE questions often ask for one pass only.',
    mergeLists: 'Merging with two pointers assumes both input lists are already sorted.',
    stackOps: 'Stack is LIFO: POP returns the last item pushed, not the oldest item.',
    queueOps: 'Queue is FIFO; in a circular queue, rear wraps to 1 after the last array position.',
    linkedList: 'Follow the next pointer. The logical order may differ from the physical table row order.',
    textFile: 'A text file loop must stop at end of file and handle invalid records before accumulating.'
  };
  return traps[key] || 'Trace every line in order and watch the variable table.';
}

function dseTransferForDemo(key) {
  const transfers = {
    sequence: 'DSE transfer: predict the final value after a sequence of assignments where one variable is updated twice.',
    selection: 'DSE transfer: complete the missing IF condition for assigning a grade from a mark.',
    whileValidation: 'DSE transfer: complete the missing validation loop so only marks from 0 to 100 are accepted.',
    booleanSelection: 'DSE transfer: decide which Boolean expression is True using AND, OR and NOT.',
    forAccumulator: 'DSE transfer: identify the line that updates the counter and the line that updates the accumulator.',
    sumAverage: 'DSE transfer: explain why average ← sum / n should be after the loop.',
    linearSearch: 'DSE transfer: state the number of comparisons made by a linear search with 1-based indexes.',
    findMax: 'DSE transfer: correct the wrong initial value in a maximum-finding algorithm.',
    findMin: 'DSE transfer: change a maximum algorithm into a minimum algorithm by editing one comparison.',
    subprogram: 'DSE transfer: complete the missing RETURN line and state which variable receives the returned value.',
    nestedLoop: 'DSE transfer: predict how many times the inner-loop statement runs.',
    twoDArray: 'DSE transfer: complete a missing column-loop boundary for a fixed row.',
    twoDCount: 'DSE transfer: complete the missing condition for counting cells that meet a threshold.',
    binarySearch: 'DSE transfer: complete the missing line: if A[mid] < target then _____(i)_____.',
    bubblePass: 'DSE transfer: write the array content after one ascending bubble-sort pass.',
    mergeLists: 'DSE transfer: trace i, j and k after the first three copied items.',
    stackOps: 'DSE transfer: complete pseudocode for checking a palindrome using PUSH and POP.',
    queueOps: 'DSE transfer: complete the circular queue wrap-around condition for rear.',
    linkedList: 'DSE transfer: identify which pointer is broken in a linked-list node table.',
    textFile: 'DSE transfer: complete the loop condition for reading until end of file.'
  };
  return transfers[key] || 'DSE transfer: complete a compact pseudocode blank using the same concept.';
}

function stopAuto() {
  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
    document.getElementById('autoBtn').textContent = 'Auto run';
  }
}

function toggleAuto() {
  if (autoTimer) {
    stopAuto();
    return;
  }
  document.getElementById('autoBtn').textContent = 'Pause';
  autoTimer = setInterval(() => {
    if (stepIndex >= currentCase.trace.length - 1) stopAuto();
    else nextStep();
  }, 800);
}

function clearExercise() {
  currentExercise = null;
  exerciseStem.textContent = 'Click “Generate exercise” to start.';
  exerciseOptions.innerHTML = '';
  exerciseAnswerArea.innerHTML = '';
  exerciseFeedback.textContent = '';
  exerciseFeedback.className = 'feedback-text';
  exerciseHint.textContent = '';
  exerciseHint.hidden = true;
  exerciseSolution.textContent = '';
  exerciseSolution.hidden = true;
  hintBtn.disabled = true;
  solutionBtn.disabled = true;
  updateExerciseScoreboard();
}

function generateExercise() {
  const generators = [
    exerciseTraceOutput,
    exerciseFinalVariableValue,
    exerciseMissingCondition,
    exerciseMissingLoopBoundary,
    exerciseTraceTableValue,
    exerciseAlgorithmChoice,
    exerciseAlgorithmPurpose,
    exerciseBooleanExpression,
    exerciseArrayFinalState,
    exerciseLinearComparisons,
    exerciseLogicErrorLine,
    exerciseSuitableTestData,
    exerciseFixWrongLine,
    exerciseCompareAlgorithms,
    exerciseDseBlankBinarySearch,
    exerciseCircularQueueBoundary,
    exerciseLinkedListPointer,
    exerciseBubblePassQuestion,
    exerciseMerge,
    exerciseStackQueue,
    exerciseStackFinalContent,
    exercise2DArray,
  ];
  currentExercise = pick(generators)();
  exerciseStem.textContent = currentExercise.stem;
  exerciseOptions.innerHTML = '';
  exerciseAnswerArea.innerHTML = '';
  exerciseFeedback.textContent = '';
  exerciseFeedback.className = 'feedback-text';
  exerciseHint.textContent = '';
  exerciseHint.hidden = true;
  exerciseSolution.textContent = '';
  exerciseSolution.hidden = true;
  hintBtn.disabled = false;
  solutionBtn.disabled = false;
  exerciseTopicLabel.textContent = `Topic: ${currentExercise.topic || 'Programming logic'}`;
  exerciseDifficultyLabel.textContent = currentExercise.level || `Difficulty: ${currentExercise.difficulty || 'DSE-style'}`;
  updateExerciseScoreboard();

  if (currentExercise.type === 'mc') {
    currentExercise.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option.text;
      btn.addEventListener('click', () => checkExercise(option));
      exerciseOptions.appendChild(btn);
    });
  } else {
    const input = document.createElement('input');
    input.placeholder = 'Type your answer';
    const checkBtn = document.createElement('button');
    checkBtn.className = 'secondary-btn';
    checkBtn.textContent = 'Check answer';
    checkBtn.addEventListener('click', () => checkExercise({ text: input.value }));
    input.addEventListener('keydown', event => {
      if (event.key === 'Enter') checkExercise({ text: input.value });
    });
    exerciseAnswerArea.append(input, checkBtn);
  }
}

function checkExercise(option) {
  if (!currentExercise) return;
  if (currentExercise.completed) return;
  let correct = false;
  if (currentExercise.type === 'mc') {
    correct = option.correct;
    [...exerciseOptions.querySelectorAll('button')].forEach(btn => {
      btn.disabled = true;
      const opt = currentExercise.options.find(o => o.text === btn.textContent);
      if (opt?.correct) btn.classList.add('correct');
    });
    const clicked = [...exerciseOptions.querySelectorAll('button')].find(btn => btn.textContent === option.text);
    if (!correct && clicked) clicked.classList.add('wrong');
  } else {
    const accepted = currentExercise.answers || [currentExercise.answer];
    correct = accepted.some(answer => normalise(option.text) === normalise(answer));
  }
  exerciseFeedback.textContent = correct ? currentExercise.correctFeedback : currentExercise.wrongFeedback;
  exerciseFeedback.className = `feedback-text ${correct ? 'good' : 'bad'}`;
  if (correct) {
    currentExercise.completed = true;
    exerciseStreak += 1;
    exerciseXp += currentExercise.xp || 10;
    exerciseAnswerArea.querySelectorAll('input, button').forEach(control => {
      control.disabled = true;
    });
  } else {
    exerciseStreak = 0;
  }
  updateExerciseScoreboard();
  flashExercise(correct);
}

function showHint() {
  if (!currentExercise) return;
  exerciseHint.textContent = currentExercise.hint || 'Trace the variables carefully and focus on the current array item or condition.';
  exerciseHint.hidden = false;
}

function showSolution() {
  if (!currentExercise) return;
  const solution = currentExercise.solution || currentExercise.correctFeedback || 'The solution appears after checking the answer.';
  exerciseSolution.textContent = solution;
  exerciseSolution.hidden = false;
}

function updateExerciseScoreboard() {
  exerciseXpLabel.textContent = `XP ${exerciseXp}`;
  exerciseStreakLabel.textContent = `Streak ${exerciseStreak}`;
}

function flashExercise(correct) {
  exerciseCard.classList.remove('answer-good', 'answer-bad');
  void exerciseCard.offsetWidth;
  exerciseCard.classList.add(correct ? 'answer-good' : 'answer-bad');
  window.setTimeout(() => exerciseCard.classList.remove('answer-good', 'answer-bad'), 760);
}

function exerciseTraceOutput() {
  const arr = Array.from({ length: 6 }, () => randInt(1, 20));
  const target = pick([...arr, randInt(21, 30)]);
  const answer = arr.includes(target) ? 'True' : 'False';
  return {
    type: 'mc',
    topic: 'Linear search',
    difficulty: 'Concept check',
    level: 'Level 1: Concept check',
    xp: 8,
    stem: `Study the algorithm. What is the output?\n\nA ← [${arr.join(', ')}]\ntarget ← ${target}\nfound ← False\nfor i from 1 to ${arr.length}\n    if A[i] = target then\n        found ← True\nOutput found`,
    options: ['True', 'False', 'No output', 'Error'].map(text => ({ text, correct: text === answer })),
    correctFeedback: `Correct. The output is ${answer}.`,
    wrongFeedback: `Not quite. Check whether ${target} appears in the array.`,
    hint: 'Circle the target first, then scan A[1], A[2], A[3] and so on.',
    solution: `${target} ${arr.includes(target) ? 'appears' : 'does not appear'} in [${arr.join(', ')}], so found is ${answer}.`
  };
}

function exerciseFinalVariableValue() {
  const a = randInt(3, 9);
  const b = randInt(2, 6);
  const c = a + b;
  const final = c * 2 - a;
  return {
    type: 'text',
    topic: 'Sequence and assignment',
    difficulty: 'Trace / predict',
    level: 'Level 2: Trace / predict',
    xp: 10,
    stem: `1-based indexes are not needed in this question.\n\nx ← ${a}\ny ← ${b}\nz ← x + y\nx ← z x 2\nz ← x - ${a}\n\nWhat is the final value of z?`,
    answer: String(final),
    correctFeedback: `Correct. z finally becomes ${final}.`,
    wrongFeedback: `Expected answer: ${final}`,
    hint: 'Trace the assignments in order. The new value of x is used in the final line.',
    solution: `z ← ${a} + ${b} = ${c}; x ← ${c} x 2 = ${c * 2}; final z ← ${c * 2} - ${a} = ${final}.`
  };
}

function exerciseMissingCondition() {
  const limit = pick([50, 60, 70]);
  return {
    type: 'text',
    topic: 'Counting with condition',
    difficulty: 'DSE transfer',
    level: 'Level 3: DSE transfer',
    xp: 10,
    stem: `Complete the missing condition to count scores at least ${limit}.\n\ncount ← 0\nfor i from 1 to n\n    if _____(i)_____ then\n        count ← count + 1\nOutput count`,
    answer: `A[i] >= ${limit}`,
    answers: [`A[i] >= ${limit}`, `mark[i] >= ${limit}`],
    correctFeedback: 'Correct. The condition checks whether the current item reaches the limit.',
    wrongFeedback: `Expected answer: A[i] >= ${limit}`,
    hint: 'The counter increases only when the current array item reaches the stated limit.',
    solution: `Use A[i] >= ${limit}. The loop checks one score at a time, so the condition must refer to A[i].`
  };
}

function exerciseMissingLoopBoundary() {
  const n = randInt(6, 9);
  return {
    type: 'text',
    topic: 'Loop boundary',
    difficulty: 'DSE transfer',
    level: 'Level 3: DSE transfer',
    xp: 12,
    stem: `The array A uses 1-based indexes and stores ${n} values. Complete the loop boundary so every adjacent pair A[j] and A[j+1] is compared once.\n\nfor j from 1 to _____(i)_____\n    if A[j] > A[j+1] then\n        swap A[j] and A[j+1]`,
    answer: `n - 1`,
    answers: [`n - 1`, `${n - 1}`],
    correctFeedback: 'Correct. The last comparison is A[n-1] with A[n].',
    wrongFeedback: 'Expected answer: n - 1',
    hint: 'If j were n, A[j+1] would mean A[n+1], which is outside the array.',
    solution: 'Use n - 1. This avoids the off-by-one error A[n+1].'
  };
}

function exerciseTraceTableValue() {
  const arr = Array.from({ length: 5 }, () => randInt(3, 18));
  const stop = randInt(2, 4);
  const answer = arr.slice(0, stop).reduce((a, b) => a + b, 0);
  return {
    type: 'text',
    topic: 'Trace table',
    difficulty: 'Trace / predict',
    level: 'Level 2: Trace / predict',
    xp: 10,
    stem: `Complete the trace table value after line 3 has run for i = ${stop}.\n\nA ← [${arr.join(', ')}]\ntotal ← 0\nfor i from 1 to ${arr.length}\n    total ← total + A[i]\nOutput total\n\nValue of total after i = ${stop}: _____`,
    answer: String(answer),
    correctFeedback: `Correct. total is ${answer} after adding the first ${stop} items.`,
    wrongFeedback: `Expected answer: ${answer}`,
    hint: `Add A[1] to A[${stop}], not the whole array.`,
    solution: `total = ${arr.slice(0, stop).join(' + ')} = ${answer}.`
  };
}

function exerciseAlgorithmChoice() {
  const sorted = Math.random() < 0.5;
  const arr = Array.from({ length: 7 }, () => randInt(10, 99));
  if (sorted) arr.sort((a, b) => a - b);
  return {
    type: 'mc',
    topic: 'Searching algorithm',
    difficulty: 'DSE transfer',
    level: 'Level 3: DSE transfer',
    xp: 12,
    stem: `Array A stores the following values.\n\nA ← [${arr.join(', ')}]\n\nIs binary search suitable for searching a value in A?`,
    options: [
      { text: 'Binary search is suitable because the array is sorted.', correct: sorted },
      { text: 'Binary search is not suitable because the array is not sorted.', correct: !sorted },
      { text: 'Binary search is always suitable for any array.', correct: false },
      { text: 'Linear search cannot be used on numbers.', correct: false }
    ],
    correctFeedback: sorted ? 'Correct. Binary search requires sorted data.' : 'Correct. Binary search is not suitable because the array is not sorted.',
    wrongFeedback: 'Not quite. The key requirement of binary search is that the data must be sorted.',
    hint: 'Binary search can only discard half of the items when the data is ordered.',
    solution: sorted ? 'The array is sorted in ascending order, so binary search is suitable.' : 'The array is not sorted, so binary search is not suitable. Linear search would still work.'
  };
}

function exerciseAlgorithmPurpose() {
  const threshold = pick([50, 60, 70]);
  return {
    type: 'mc',
    topic: 'Algorithm purpose',
    difficulty: 'DSE transfer',
    level: 'Level 3: DSE transfer',
    xp: 12,
    stem: `What is the purpose of the following algorithm?\n\ncount ← 0\nfor i from 1 to n\n    if mark[i] >= ${threshold} then\n        count ← count + 1\nOutput count`,
    options: [
      { text: `Count how many marks are at least ${threshold}.`, correct: true },
      { text: 'Find the highest mark in the array.', correct: false },
      { text: 'Calculate the average mark.', correct: false },
      { text: `Change every mark below ${threshold} to zero.`, correct: false }
    ],
    correctFeedback: 'Correct. The counter only increases when the condition is True.',
    wrongFeedback: 'Not quite. Focus on the variable being updated and the IF condition.',
    hint: 'The algorithm outputs count, not a mark value or a modified array.',
    solution: `It counts the number of array items satisfying mark[i] >= ${threshold}.`
  };
}

function exerciseBooleanExpression() {
  let A;
  let B;
  let C;
  let options;
  let trueOptions;
  do {
    A = randInt(1, 9);
    B = randInt(1, 9);
    C = randInt(1, 9);
    options = [
      { text: 'A < B AND B < C', correct: A < B && B < C },
      { text: 'A = C OR B > 5', correct: A === C || B > 5 },
      { text: 'NOT (A > C)', correct: !(A > C) },
      { text: 'A + B <= C', correct: A + B <= C }
    ];
    trueOptions = options.filter(option => option.correct);
  } while (trueOptions.length !== 1);
  const correctText = trueOptions[0].text;
  return {
    type: 'mc',
    topic: 'Boolean expression',
    difficulty: 'Trace / predict',
    level: 'Level 2: Trace / predict',
    xp: 10,
    stem: `Given A = ${A}, B = ${B}, C = ${C}, which expression is True?`,
    options: options.map(option => ({ text: option.text, correct: option.text === correctText })).sort(() => Math.random() - 0.5),
    correctFeedback: 'Correct. The selected expression evaluates to True.',
    wrongFeedback: 'Not quite. Evaluate each comparison before applying AND, OR or NOT.',
    hint: 'Work out each comparison first, then combine the True/False results.',
    solution: `For A = ${A}, B = ${B}, C = ${C}, the correct choice is: ${correctText}`
  };
}

function exerciseArrayFinalState() {
  const arr = Array.from({ length: 5 }, () => randInt(2, 12));
  const increment = pick([2, 3, 5]);
  const final = arr.map(value => value + increment);
  return {
    type: 'mc',
    topic: 'Array final state',
    difficulty: 'Trace / predict',
    level: 'Level 2: Trace / predict',
    xp: 10,
    stem: `What is the final state of A after the loop?\n\nA ← [${arr.join(', ')}]\nfor i from 1 to ${arr.length}\n    A[i] ← A[i] + ${increment}\nOutput A`,
    options: [
      { text: `[${final.join(', ')}]`, correct: true },
      { text: `[${arr.join(', ')}]`, correct: false },
      { text: `[${arr.map((value, index) => value + index + 1).join(', ')}]`, correct: false },
      { text: `[${arr.map(value => value * increment).join(', ')}]`, correct: false }
    ],
    correctFeedback: 'Correct. The same increment is applied to every array item.',
    wrongFeedback: 'Not quite. Apply the assignment once to each array element.',
    hint: `Every item increases by ${increment}.`,
    solution: `Final A = [${final.join(', ')}].`
  };
}

function exerciseLinearComparisons() {
  const arr = Array.from({ length: 7 }, () => randInt(10, 99));
  const target = Math.random() < 0.7 ? pick(arr) : randInt(100, 120);
  const index = arr.indexOf(target);
  const comparisons = index === -1 ? arr.length : index + 1;
  return {
    type: 'text',
    topic: 'Linear search',
    difficulty: 'Trace / predict',
    level: 'Level 2: Trace / predict',
    xp: 12,
    stem: `A linear search stops immediately when target is found.\n\nA ← [${arr.join(', ')}]\ntarget ← ${target}\n\nHow many comparisons are made?`,
    answer: String(comparisons),
    correctFeedback: `Correct. The search makes ${comparisons} comparison(s).`,
    wrongFeedback: `Expected answer: ${comparisons}`,
    hint: 'Count from the first item until the target is found. If absent, count every item.',
    solution: index === -1
      ? `${target} is absent, so all ${arr.length} items are checked.`
      : `${target} is at position ${index + 1}, so ${comparisons} comparisons are made.`
  };
}

function exerciseLogicErrorLine() {
  const limit = pick([60, 70]);
  return {
    type: 'mc',
    topic: 'Logic error',
    difficulty: 'DSE transfer',
    level: 'Level 3: DSE transfer',
    xp: 12,
    stem: `The following algorithm should count marks greater than or equal to ${limit}. Which line contains the logic error?\n\n1  count ← 0\n2  for i from 1 to n\n3      if mark[i] > ${limit} then\n4          count ← count + 1\n5  Output count`,
    options: [
      { text: 'Line 1', correct: false },
      { text: 'Line 2', correct: false },
      { text: 'Line 3', correct: true },
      { text: 'Line 4', correct: false }
    ],
    correctFeedback: 'Correct. The condition should include marks equal to the limit.',
    wrongFeedback: `Not quite. The algorithm misses marks exactly equal to ${limit}.`,
    hint: 'Compare the required phrase "greater than or equal to" with the operator used.',
    solution: `Line 3 should be: if mark[i] >= ${limit} then`
  };
}

function exerciseSuitableTestData() {
  const lower = 0;
  const upper = 100;
  return {
    type: 'mc',
    topic: 'Testing and debugging',
    difficulty: 'DSE transfer',
    level: 'Level 3: DSE transfer',
    xp: 12,
    stem: `A validation loop accepts marks from ${lower} to ${upper} inclusive. Which set is best for testing normal, boundary and erroneous data?`,
    options: [
      { text: '50, 0, 100, -1, 101', correct: true },
      { text: '50, 60, 70, 80, 90', correct: false },
      { text: '-5, -1, 101, 120', correct: false },
      { text: '0, 100 only', correct: false }
    ],
    correctFeedback: 'Correct. It includes normal, boundary and erroneous values.',
    wrongFeedback: 'Not quite. Good test data should include normal, boundary and erroneous cases.',
    hint: 'Look for values inside the range, exactly on the boundary and just outside the boundary.',
    solution: '50 is normal, 0 and 100 are boundary values, and -1 and 101 are erroneous.'
  };
}

function exerciseFixWrongLine() {
  const arr = Array.from({ length: 5 }, () => randInt(10, 40));
  return {
    type: 'text',
    topic: 'Finding maximum',
    difficulty: 'DSE transfer',
    level: 'Level 3: DSE transfer',
    xp: 12,
    stem: `The algorithm should find the maximum value in A using 1-based indexes. Fix the wrong line.\n\nmax ← 0\nfor i from 2 to n\n    if A[i] > max then\n        max ← A[i]\nOutput max\n\nWrong line corrected: _____(i)_____`,
    answer: 'max ← A[1]',
    answers: ['max ← A[1]', 'max←A[1]'],
    correctFeedback: 'Correct. The first item should initialise max.',
    wrongFeedback: 'Expected answer: max ← A[1]',
    hint: 'Avoid assuming all possible values are greater than 0.',
    solution: 'Use max ← A[1], then compare from i = 2 to n.'
  };
}

function exerciseCompareAlgorithms() {
  return {
    type: 'mc',
    topic: 'Algorithm comparison',
    difficulty: 'DSE transfer',
    level: 'Level 3: DSE transfer',
    xp: 12,
    stem: 'A sorted array contains 1000 student IDs. Which statement best compares linear search and binary search?',
    options: [
      { text: 'Binary search is usually more efficient because it repeatedly halves the search range.', correct: true },
      { text: 'Linear search is impossible because the array is sorted.', correct: false },
      { text: 'Binary search is always suitable even if the array becomes unsorted.', correct: false },
      { text: 'Both algorithms must compare exactly 1000 items.', correct: false }
    ],
    correctFeedback: 'Correct. Binary search can discard half of the remaining range each time.',
    wrongFeedback: 'Not quite. The key condition is sorted data, and the key advantage is fewer comparisons.',
    hint: 'Think about what binary search can safely discard after checking mid.',
    solution: 'For sorted data, binary search is usually more efficient. Linear search still works but may check many more items.'
  };
}

function exerciseDseBlankBinarySearch() {
  return {
    type: 'text',
    topic: 'Binary search',
    difficulty: 'DSE transfer',
    level: 'Level 3: DSE transfer',
    xp: 14,
    stem: `Complete the missing line in this binary search fragment. A is sorted in ascending order and uses 1-based indexes.\n\nmid ← (low + high) DIV 2\nif A[mid] < target then\n    _____(i)_____\nelse if A[mid] > target then\n    high ← mid - 1`,
    answer: 'low ← mid + 1',
    answers: ['low ← mid + 1', 'low←mid+1'],
    correctFeedback: 'Correct. The target must be in the upper half.',
    wrongFeedback: 'Expected answer: low ← mid + 1',
    hint: 'If A[mid] is too small, discard A[low] to A[mid].',
    solution: 'Use low ← mid + 1. Forgetting to update low/high may cause an infinite loop.'
  };
}

function exerciseCircularQueueBoundary() {
  const size = pick([5, 6, 8]);
  return {
    type: 'text',
    topic: 'Circular queue',
    difficulty: 'DSE transfer',
    level: 'Level 3: DSE transfer',
    xp: 14,
    stem: `A circular queue is stored in Q[1..${size}]. Complete the wrap-around line for ENQUEUE.\n\nif rear = ${size} then\n    _____(i)_____\nelse\n    rear ← rear + 1`,
    answer: 'rear ← 1',
    answers: ['rear ← 1', 'rear←1'],
    correctFeedback: 'Correct. rear wraps to the first position.',
    wrongFeedback: 'Expected answer: rear ← 1',
    hint: 'After the last position, a circular queue reuses position 1.',
    solution: `When rear = ${size}, the next circular position is 1.`
  };
}

function exerciseLinkedListPointer() {
  return {
    type: 'mc',
    topic: 'Linked list',
    difficulty: 'DSE transfer',
    level: 'Level 3: DSE transfer',
    xp: 14,
    stem: `A linked list should visit nodes 1 → 3 → 2 → end.\n\nNode\tData\tNext\n1\tAda\t3\n2\tChun\t0\n3\tBala\t0\n\nWhich pointer is broken?`,
    options: [
      { text: 'Node 1 Next should be 2', correct: false },
      { text: 'Node 2 Next should be 3', correct: false },
      { text: 'Node 3 Next should be 2', correct: true },
      { text: 'Node 2 Next should be 1', correct: false }
    ],
    correctFeedback: 'Correct. Node 3 should point to node 2.',
    wrongFeedback: 'Not quite. Follow the required logical order 1 → 3 → 2 → end.',
    hint: 'The traversal stops too early if node 3 points to 0.',
    solution: 'Node 3 Next should be 2. Node 2 can still point to 0 as the end marker.'
  };
}

function exerciseBubblePassQuestion() {
  const arr = Array.from({ length: 6 }, () => randInt(1, 50));
  const after = [...arr];
  for (let j = 0; j < after.length - 1; j++) {
    if (after[j] > after[j + 1]) {
      [after[j], after[j + 1]] = [after[j + 1], after[j]];
    }
  }
  return {
    type: 'mc',
    topic: 'Bubble sort',
    difficulty: 'Trace / predict',
    level: 'Level 2: Trace / predict',
    xp: 12,
    stem: `The following array is processed by one ascending bubble-sort pass.\n\nA ← [${arr.join(', ')}]\nfor j from 1 to n - 1\n    if A[j] > A[j+1] then\n        swap A[j] and A[j+1]\n\nWhat is A after one pass?`,
    options: [
      { text: `[${after.join(', ')}]`, correct: true },
      { text: `[${[...arr].sort((a, b) => a - b).join(', ')}]`, correct: false },
      { text: `[${arr.join(', ')}]`, correct: false },
      { text: `[${[...arr].reverse().join(', ')}]`, correct: false }
    ],
    correctFeedback: 'Correct. One pass compares adjacent pairs from left to right.',
    wrongFeedback: 'Not quite. Do only one pass, not the full sort.',
    hint: 'Move left to right and swap adjacent values only when the left value is larger.',
    solution: `After one pass, A becomes [${after.join(', ')}].`
  };
}

function exerciseMerge() {
  const A = [2, 8, 15];
  const B = [3, 7, 20];
  const answer = '[2, 3, 7, 8, 15, 20]';
  return {
    type: 'mc',
    topic: 'Merging sorted lists',
    difficulty: 'Trace / predict',
    level: 'Level 2: Trace / predict',
    xp: 10,
    stem: `A and B are sorted arrays.\n\nA ← [${A.join(', ')}]\nB ← [${B.join(', ')}]\n\nWhat is the result after merging A and B in ascending order?`,
    options: [
      { text: answer, correct: true },
      { text: '[2, 8, 15, 3, 7, 20]', correct: false },
      { text: '[3, 7, 20, 2, 8, 15]', correct: false },
      { text: '[2, 3, 8, 7, 15, 20]', correct: false }
    ],
    correctFeedback: 'Correct. Compare the current items from both arrays and copy the smaller one.',
    wrongFeedback: 'Not quite. The merged output must remain sorted.',
    hint: 'Pick the smallest remaining item from the front of A or B each time.',
    solution: 'The ascending order is 2, 3, 7, 8, 15, 20, so the merged array is [2, 3, 7, 8, 15, 20].'
  };
}

function exerciseStackQueue() {
  return {
    type: 'mc',
    topic: 'Stack',
    difficulty: 'Concept check',
    level: 'Level 1: Concept check',
    xp: 8,
    stem: 'A stack stores [12, 19]. Then PUSH(35) is performed, followed by POP(). What value is returned by POP()?',
    options: [
      { text: '35', correct: true },
      { text: '12', correct: false },
      { text: '19', correct: false },
      { text: 'No value', correct: false }
    ],
    correctFeedback: 'Correct. A stack is last in, first out.',
    wrongFeedback: 'Not quite. POP removes the most recently pushed item.',
    hint: 'A stack behaves like LIFO: the latest item added is the first item removed.',
    solution: 'After PUSH(35), 35 is on the top of the stack. POP() returns 35.'
  };
}

function exerciseStackFinalContent() {
  const first = randInt(10, 30);
  const second = randInt(31, 60);
  const third = randInt(61, 90);
  return {
    type: 'mc',
    topic: 'Stack',
    difficulty: 'Trace / predict',
    level: 'Level 2: Trace / predict',
    xp: 12,
    stem: `A stack is initially empty. Trace the operations.\n\nPUSH(${first})\nPUSH(${second})\nPOP()\nPUSH(${third})\n\nWhich is the final stack content from bottom to top?`,
    options: [
      { text: `[${first}, ${third}]`, correct: true },
      { text: `[${third}, ${first}]`, correct: false },
      { text: `[${first}, ${second}, ${third}]`, correct: false },
      { text: `[${second}, ${third}]`, correct: false }
    ],
    correctFeedback: 'Correct. POP removes the latest pushed item before the final PUSH.',
    wrongFeedback: 'Not quite. Stack uses LIFO, so POP removes the top item.',
    hint: 'After PUSH(first), PUSH(second), POP removes second.',
    solution: `Final stack from bottom to top is [${first}, ${third}].`
  };
}

function exercise2DArray() {
  return {
    type: 'text',
    topic: '2D arrays',
    difficulty: 'DSE transfer',
    level: 'Level 3: DSE transfer',
    xp: 10,
    stem: 'A 2D array score has 4 rows and 5 columns. Complete the loop header for processing every column in row r.\n\nfor c from _____(i)_____\n    total ← total + score[r, c]',
    answer: '1 to 5',
    correctFeedback: 'Correct. There are 5 columns.',
    wrongFeedback: 'Expected answer: 1 to 5',
    hint: 'The row is fixed as r. The loop variable c should visit every column number.',
    solution: 'There are 5 columns, so c should run from 1 to 5.'
  };
}

function updateNavState(key) {
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  document.querySelectorAll('.nav-item[data-demo]').forEach(item => {
    item.classList.toggle('active', item.dataset.demo === key);
  });
  const activeItem = document.querySelector(`.nav-item[data-demo="${key}"]`);
  openNavGroupFor(activeItem);
}

function showProgrammingView() {
  stopTopicSimulation();
  arcadePage.classList.add('hidden');
  dashboardPage.classList.add('hidden');
  topicPage.classList.add('hidden');
  programmingSections.forEach(section => section.classList.remove('hidden'));
}

function showTopicPage(button) {
  stopAuto();
  stopTopicSimulation();
  arcadePage.classList.add('hidden');
  dashboardPage.classList.add('hidden');
  programmingSections.forEach(section => section.classList.add('hidden'));
  topicPage.classList.remove('hidden');
  const group = button.dataset.group || 'ICT Topic';
  const topic = button.dataset.topic || button.textContent.trim();
  const groupConfig = groupThemes[group] || groupThemes['Core A Information Processing'];
  const topicConfig = topicContent[topic] || {};
  topicPage.classList.remove('theme-a', 'theme-b', 'theme-c', 'theme-d', 'theme-e', 'theme-db', 'theme-ec');
  topicPage.classList.add(topicConfig.theme || groupConfig.theme);
  renderIntroductionSection(topicConfig, groupConfig, { group, topic });
  renderDetailsSection(topicConfig, groupConfig);
  renderCommonMistakesSection(topicConfig);
  renderActivitiesSection(topicConfig);
  renderCheckpointSection(topicConfig);
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  openNavGroupFor(button);
}

function showArcadePage(key) {
  stopAuto();
  stopTopicSimulation();
  currentArcadeKey = key;
  arcadeScore = { xp: 0, streak: 0, completed: 0 };
  arcadeRuntime = { completedMissions: new Set() };
  const arcade = arcadeData[key];
  if (!arcade) return;
  dashboardPage.classList.add('hidden');
  topicPage.classList.add('hidden');
  programmingSections.forEach(section => section.classList.add('hidden'));
  arcadePage.classList.remove('hidden');
  arcadeGroupLabel.textContent = arcade.group;
  arcadeTitle.textContent = arcade.title;
  arcadeDescription.textContent = arcade.description;
  renderArcadeGame(key);
  updateArcadeScoreboard();
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  document.querySelectorAll(`.nav-item[data-arcade="${key}"]`).forEach(item => item.classList.add('active'));
  openNavGroupFor(document.querySelector(`.nav-item[data-arcade="${key}"]`));
}

function renderArcadeGame(key) {
  if (key === 'twosComplement') renderTwosComplementGame();
  if (key === 'spreadsheetLab') renderSpreadsheetGame();
  if (key === 'sqlPlayground') renderSqlGame();
  if (key === 'securitySimulator') renderSecurityGame();
}

function makeGameVisualCards(items) {
  arcadeVisualGrid.innerHTML = items.map((item, index) => `
    <article class="arcade-visual-card ${item.className || ''}">
      <span>${index + 1}</span>
      <div>
        <p>${escapeHtml(item.label)}</p>
        <strong>${escapeHtml(item.value)}</strong>
        <small>${escapeHtml(item.detail)}</small>
      </div>
    </article>
  `).join('');
}

function makeGameFeedback(id, message, type = 'neutral') {
  const box = document.getElementById(id);
  if (!box) return;
  box.textContent = message;
  box.className = `game-feedback ${type}`;
}

function completeArcadeMission(id, xp, feedbackId, message) {
  if (!arcadeRuntime.completedMissions.has(id)) {
    arcadeRuntime.completedMissions.add(id);
    arcadeScore.xp += xp;
    arcadeScore.streak += 1;
    arcadeScore.completed += 1;
  }
  makeGameFeedback(feedbackId, message, 'good');
  updateArcadeScoreboard();
}

function missArcadeMission(feedbackId, message) {
  arcadeScore.streak = 0;
  makeGameFeedback(feedbackId, message, 'bad');
  updateArcadeScoreboard();
}

function updateArcadeScoreboard() {
  const total = arcadeData[currentArcadeKey]?.total || 0;
  arcadeXp.textContent = `XP ${arcadeScore.xp}`;
  arcadeStreak.textContent = `Streak ${arcadeScore.streak}`;
  arcadeDone.textContent = `${arcadeScore.completed}/${total} done`;
}

function toBits8(value) {
  const normalised = value < 0 ? 256 + value : value;
  return normalised.toString(2).padStart(8, '0').split('').map(Number);
}

function bitsToUnsigned(bits) {
  return parseInt(bits.join(''), 2);
}

function bitsToSigned(bits) {
  const unsigned = bitsToUnsigned(bits);
  return bits[0] === 1 ? unsigned - 256 : unsigned;
}

function toBitsN(value, bits) {
  const modulus = 2 ** bits;
  const normalised = ((value % modulus) + modulus) % modulus;
  return normalised.toString(2).padStart(bits, '0').split('').map(Number);
}

function bitsToSignedN(bits) {
  const unsigned = parseInt(bits.join(''), 2);
  const sign = bits[0] === 1;
  return sign ? unsigned - 2 ** bits.length : unsigned;
}

function twosRange(bits) {
  return { min: -(2 ** (bits - 1)), max: 2 ** (bits - 1) - 1 };
}

function signedOverflowInfo(a, b, bits = 8) {
  const range = twosRange(bits);
  const sum = a + b;
  const wrapped = bitsToSignedN(toBitsN(sum, bits));
  const overflow = sum < range.min || sum > range.max;
  const signRule = overflow
    ? (a >= 0 && b >= 0 ? 'positive + positive gives a negative sign bit' : 'negative + negative gives a positive sign bit')
    : 'the result sign is consistent with the operands';
  return { a, b, sum, wrapped, overflow, range, signRule, bits };
}

function renderTwosComplementGame() {
  const width = pick([4, 8]);
  const positive = randInt(3, width === 4 ? 14 : 120);
  const unsignedBits = toBitsN(randInt(1, 2 ** width - 1), width);
  const signedValue = randInt(-128, 127);
  const negative = -randInt(3, 80);
  const rangeBits = pick([4, 8]);
  const overflowCase = pick([
    signedOverflowInfo(randInt(70, 110), randInt(40, 90), 8),
    signedOverflowInfo(-randInt(70, 110), -randInt(40, 80), 8),
    signedOverflowInfo(randInt(12, 50), randInt(10, 45), 8)
  ]);
  const bossOptions = [
    signedOverflowInfo(90, 70, 8),
    signedOverflowInfo(-100, -50, 8),
    signedOverflowInfo(45, 28, 8),
    signedOverflowInfo(-20, 15, 8)
  ].sort(() => Math.random() - 0.5);
  arcadeRuntime.twos = {
    bits: toBits8(signedValue),
    target: signedValue,
    positive,
    width,
    unsignedBits,
    negative,
    rangeBits,
    overflowCase,
    bossOptions
  };
  makeGameVisualCards([
    { label: 'Level 1', value: 'Binary meaning', detail: 'Show binary, unsigned denary, signed denary and hexadecimal side by side.' },
    { label: 'Level 2', value: 'Invert + add 1', detail: 'Convert negative denary values by tracing each step.' },
    { label: 'Level 3', value: 'Overflow boss', detail: 'Use both range and sign-bit rules to justify overflow.' }
  ]);
  arcadeMissionGrid.innerHTML = `
    <article class="game-board wide-board mission-room">
      <div class="game-panel">
        <p class="mission-topline"><span>Mission 1: positive denary → binary</span><strong>+10 XP</strong></p>
        <h3>Convert positive denary</h3>
        <p>Convert ${positive} to ${width}-bit binary.</p>
        <div class="option-grid compact-options">
          ${makeTwosChoices(toBitsN(positive, width).join(''), [toBitsN(positive + 1, width).join(''), toBitsN(Math.max(0, positive - 1), width).join(''), toBitsN(positive * 2, width).join('')], 'twos-positive')}
        </div>
        <p id="twosPositiveFeedback" class="game-feedback neutral">Use place values from left to right, then pad with leading zeroes if needed.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mission 2: binary → unsigned</span><strong>+10 XP</strong></p>
        <h3>Unsigned interpretation</h3>
        <p>What is the unsigned denary value of ${unsignedBits.join('')}?</p>
        <div class="option-grid compact-options">
          ${makeTwosChoices(String(parseInt(unsignedBits.join(''), 2)), [String(Math.max(0, parseInt(unsignedBits.join(''), 2) - 1)), String(parseInt(unsignedBits.join(''), 2) + 1), String(bitsToSignedN(unsignedBits))], 'twos-unsigned')}
        </div>
        <p id="twosUnsignedFeedback" class="game-feedback neutral">Unsigned binary treats every bit as a positive place value.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mission 3: signed interpretation</span><strong>+15 XP</strong></p>
        <h3>8-bit two’s complement switches</h3>
        <p>Target signed decimal: <strong id="twosTarget">${signedValue}</strong>. Toggle switches or inspect the current bit pattern.</p>
        <div id="twosBits" class="bit-row" aria-label="8-bit switch row"></div>
        <div class="binary-readout">
          <span>Binary <strong id="twosBinary">00000000</strong></span>
          <span>Unsigned <strong id="twosUnsigned">0</strong></span>
          <span>Signed <strong id="twosSigned">0</strong></span>
          <span>Hex <strong id="twosHex">00</strong></span>
        </div>
        <div class="game-toolbar">
          <button class="primary-btn" id="twosCheck" type="button">Check target</button>
          <button class="ghost-btn" id="twosNewTarget" type="button">New target</button>
          <button class="ghost-btn" id="twosReset" type="button">Clear bits</button>
        </div>
        <p id="twosFeedback" class="game-feedback neutral">Toggle switches until the signed value matches the target. Common mistake: reading the same bit pattern as unsigned only.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mission 4: negative denary → two’s complement</span><strong>+15 XP</strong></p>
        <h3>Invert + 1 animation</h3>
        <p>Convert ${negative} to 8-bit two’s complement. Fill-in rule: negative value = invert bits + _____.</p>
        <div class="complement-stage" id="twosDemoStage">
          <span>Magnitude ${Math.abs(negative)}: ${toBits8(Math.abs(negative)).join('')}</span>
          <span>Invert: ${toBits8(Math.abs(negative)).map(bit => bit ? 0 : 1).join('')}</span>
          <span>Add 1: ${toBits8(negative).join('')}</span>
        </div>
        <button class="secondary-btn" id="twosDemo" type="button">Animate ${negative}</button>
        <p id="twosDemoFeedback" class="game-feedback neutral">The animation will change the bit switches step by step.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mission 5: n-bit range</span><strong>+10 XP</strong></p>
        <h3>Find the range</h3>
        <p>What is the range of ${rangeBits}-bit two’s complement?</p>
        <div class="option-grid compact-options">
          ${makeTwosChoices(`${twosRange(rangeBits).min} to ${twosRange(rangeBits).max}`, [`0 to ${2 ** rangeBits - 1}`, `${-(2 ** rangeBits)} to ${2 ** rangeBits - 1}`, `${-(2 ** (rangeBits - 1))} to ${2 ** (rangeBits - 1)}`], 'twos-range')}
        </div>
        <p id="twosRangeFeedback" class="game-feedback neutral">Use -2^(n-1) to 2^(n-1)-1.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mission 6: signed addition overflow</span><strong>+15 XP</strong></p>
        <h3>Overflow alarm</h3>
        <p>In 8-bit signed form, valid values are -128 to 127. Try the overflow check for ${overflowCase.a} + ${overflowCase.b}.</p>
        <div class="overflow-meter" id="overflowMeter">
          <span>${overflowCase.a}</span>
          <span>+</span>
          <span>${overflowCase.b}</span>
          <span>=</span>
          <strong>?</strong>
        </div>
        <button class="secondary-btn" id="twosOverflow" type="button">Run overflow check</button>
        <p id="twosOverflowFeedback" class="game-feedback neutral">Explain overflow using both the valid range and the sign-bit rule.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mission 7: DSE Boss Fight</span><strong>+20 XP</strong></p>
        <h3>Which addition causes overflow?</h3>
        <p>Select one 8-bit signed addition that causes overflow.</p>
        <div class="option-grid compact-options">
          ${bossOptions.map((item, index) => `<button type="button" data-boss-index="${index}">${item.a} + ${item.b}</button>`).join('')}
        </div>
        <p id="twosBossFeedback" class="game-feedback neutral">Check the range first, then confirm using the sign-bit rule.</p>
      </div>
    </article>
  `;
  bindTwosComplementGame();
}

function makeTwosChoices(answer, distractors, namespace) {
  return [...new Set([answer, ...distractors])].slice(0, 4).sort(() => Math.random() - 0.5).map(choice => `
    <button type="button" data-twos-choice="${escapeHtml(namespace)}" data-answer="${escapeHtml(answer)}">${escapeHtml(choice)}</button>
  `).join('');
}

function bindTwosComplementGame() {
  updateTwosDisplay();
  arcadeMissionGrid.querySelectorAll('[data-twos-choice]').forEach(button => {
    button.addEventListener('click', () => {
      const namespace = button.dataset.twosChoice;
      const correct = button.textContent.trim() === button.dataset.answer;
      const xpMap = { 'twos-positive': 10, 'twos-unsigned': 10, 'twos-range': 10 };
      const feedbackMap = {
        'twos-positive': ['twosPositiveFeedback', `Correct. ${arcadeRuntime.twos.positive} is ${toBitsN(arcadeRuntime.twos.positive, arcadeRuntime.twos.width).join('')} in ${arcadeRuntime.twos.width}-bit binary.`],
        'twos-unsigned': ['twosUnsignedFeedback', `Correct. ${arcadeRuntime.twos.unsignedBits.join('')} has unsigned value ${parseInt(arcadeRuntime.twos.unsignedBits.join(''), 2)}.`],
        'twos-range': ['twosRangeFeedback', `Correct. ${arcadeRuntime.twos.rangeBits}-bit two’s complement range is ${twosRange(arcadeRuntime.twos.rangeBits).min} to ${twosRange(arcadeRuntime.twos.rangeBits).max}.`]
      };
      const [feedbackId, message] = feedbackMap[namespace];
      if (correct) completeArcadeMission(namespace, xpMap[namespace], feedbackId, message);
      else missArcadeMission(feedbackId, 'Not quite. Recheck the place values or the n-bit range formula.');
    });
  });
  document.getElementById('twosBits').addEventListener('click', event => {
    const button = event.target.closest('[data-bit-index]');
    if (!button) return;
    const index = Number(button.dataset.bitIndex);
    arcadeRuntime.twos.bits[index] = arcadeRuntime.twos.bits[index] ? 0 : 1;
    updateTwosDisplay();
  });
  document.getElementById('twosCheck').addEventListener('click', () => {
    const signed = bitsToSigned(arcadeRuntime.twos.bits);
    if (signed === arcadeRuntime.twos.target) {
      completeArcadeMission('twos-target', 20, 'twosFeedback', `Matched ${signed}. The same bits can mean ${bitsToUnsigned(arcadeRuntime.twos.bits)} unsigned or ${signed} signed.`);
    } else {
      missArcadeMission('twosFeedback', `Current signed value is ${signed}. Adjust the leftmost bit and place values.`);
    }
  });
  document.getElementById('twosNewTarget').addEventListener('click', () => {
    arcadeRuntime.twos.target = randInt(-128, 127);
    document.getElementById('twosTarget').textContent = arcadeRuntime.twos.target;
    makeGameFeedback('twosFeedback', 'New target loaded. The switches are unchanged so you can keep playing.', 'neutral');
  });
  document.getElementById('twosReset').addEventListener('click', () => {
    arcadeRuntime.twos.bits = toBits8(0);
    updateTwosDisplay();
    makeGameFeedback('twosFeedback', 'Bits cleared to 00000000.', 'neutral');
  });
  document.getElementById('twosDemo').addEventListener('click', runTwosComplementAnimation);
  document.getElementById('twosOverflow').addEventListener('click', () => {
    const info = arcadeRuntime.twos.overflowCase;
    document.getElementById('overflowMeter').innerHTML = `<span>${info.a}</span><span>+</span><span>${info.b}</span><span>=</span><strong>${info.sum}</strong><em>${info.overflow ? 'outside range' : 'inside range'}</em><strong class="${info.overflow ? 'alarm' : ''}">${info.overflow ? `wraps to ${info.wrapped}` : 'no overflow'}</strong>`;
    if (info.overflow) {
      completeArcadeMission('twos-overflow', 15, 'twosOverflowFeedback', `Overflow: ${info.sum} is outside ${info.range.min} to ${info.range.max}. Sign-bit rule: ${info.signRule}.`);
    } else {
      completeArcadeMission('twos-overflow', 15, 'twosOverflowFeedback', `No overflow: ${info.sum} is inside ${info.range.min} to ${info.range.max}. Sign-bit rule: ${info.signRule}.`);
    }
  });
  arcadeMissionGrid.querySelectorAll('[data-boss-index]').forEach(button => {
    button.addEventListener('click', () => {
      const info = arcadeRuntime.twos.bossOptions[Number(button.dataset.bossIndex)];
      if (info.overflow) {
        completeArcadeMission('twos-boss', 20, 'twosBossFeedback', `Correct. ${info.a} + ${info.b} = ${info.sum}, outside ${info.range.min} to ${info.range.max}; ${info.signRule}.`);
      } else {
        missArcadeMission('twosBossFeedback', `${info.a} + ${info.b} = ${info.sum}, which is inside ${info.range.min} to ${info.range.max}. Choose an overflow case.`);
      }
    });
  });
}

function updateTwosDisplay() {
  if (!document.getElementById('twosBits')) return;
  const bits = arcadeRuntime.twos.bits;
  document.getElementById('twosBits').innerHTML = bits.map((bit, index) => `
    <button class="bit-button ${bit ? 'on' : ''}" type="button" data-bit-index="${index}" aria-label="Bit ${index + 1}">
      <span>${index === 0 ? 'sign' : 7 - index}</span>
      <strong>${bit}</strong>
    </button>
  `).join('');
  const unsigned = bitsToUnsigned(bits);
  document.getElementById('twosBinary').textContent = bits.join('');
  document.getElementById('twosUnsigned').textContent = unsigned;
  document.getElementById('twosSigned').textContent = bitsToSigned(bits);
  document.getElementById('twosHex').textContent = unsigned.toString(16).toUpperCase().padStart(2, '0');
}

function runTwosComplementAnimation() {
  const negative = arcadeRuntime.twos.negative || -5;
  const magnitude = Math.abs(negative);
  const stages = [
    { bits: toBits8(magnitude), text: `${magnitude} is ${toBits8(magnitude).join('')}.` },
    { bits: toBits8(magnitude).map(bit => bit ? 0 : 1), text: `Invert all bits: ${toBits8(magnitude).map(bit => bit ? 0 : 1).join('')}.` },
    { bits: toBits8(negative), text: `Add 1: ${toBits8(negative).join('')} represents ${negative}.` }
  ];
  stages.forEach((stage, index) => {
    setTimeout(() => {
      if (currentArcadeKey !== 'twosComplement') return;
      arcadeRuntime.twos.bits = stage.bits;
      updateTwosDisplay();
      makeGameFeedback('twosDemoFeedback', stage.text, index === stages.length - 1 ? 'good' : 'neutral');
      if (index === stages.length - 1) completeArcadeMission('twos-demo', 15, 'twosDemoFeedback', 'Animation complete: invert the bits and add 1 to represent the negative value.');
    }, index * 550);
  });
}

function renderSpreadsheetGame() {
  const row = pick([2, 3, 4]);
  const copyRow = row + pick([2, 3]);
  const price = randInt(8, 28);
  const qty = randInt(2, 9);
  const product = pick(['Book', 'USB cable', 'Notebook', 'Mouse']);
  const formulaCase = makeSpreadsheetFormulaCase();
  const refCase = pick([
    { prompt: 'The formula is copied down and must always refer to tax rate B1.', answer: '$B$1', choices: ['B1', '$B1', 'B$1', '$B$1'] },
    { prompt: 'The formula is copied right and must keep column A fixed but allow the row to change later.', answer: '$A1', choices: ['A1', '$A1', 'A$1', '$A$1'] },
    { prompt: 'The formula is copied down and right but must keep row 1 fixed.', answer: 'A$1', choices: ['A1', '$A1', 'A$1', '$A$1'] }
  ]);
  const filterCase = pick([
    { prompt: 'Show only class 5A students with marks at least 70.', answer: 'class = 5A AND mark >= 70', choices: ['class = 5A AND mark >= 70', 'class = 5A OR mark >= 70', 'sort mark descending only', 'mark < 70'] },
    { prompt: 'Find the top mark first.', answer: 'sort mark descending', choices: ['sort mark descending', 'sort name ascending', 'filter class = 5A', 'filter mark < 50'] }
  ]);
  const whatIfPrice = randInt(40, 80);
  const whatIfQty = randInt(2, 6);
  const whatIfDiscount = pick([5, 10, 15]);
  const whatIfTotal = whatIfPrice * whatIfQty - whatIfDiscount;
  const pivotRows = [
    { cls: '5A', mark: randInt(70, 92) },
    { cls: '5A', mark: randInt(60, 88) },
    { cls: '5B', mark: randInt(50, 82) },
    { cls: '5B', mark: randInt(65, 95) }
  ];
  const pivotAnswer = String(pivotRows.filter(rowItem => rowItem.cls === '5A').length);
  arcadeRuntime.sheet = {
    formulaTokens: [],
    taxTokens: [],
    row,
    copyRow,
    price,
    qty,
    product,
    formulaCase,
    refCase,
    filterCase,
    whatIfPrice,
    whatIfQty,
    whatIfDiscount,
    whatIfTotal,
    pivotRows,
    pivotAnswer,
    expectedTotal: `=B${row}*C${row}`,
    copiedTotal: `=B${copyRow}*C${copyRow}`,
    expectedTax: `=D${row}*$B$1`
  };
  makeGameVisualCards([
    { label: 'Formula', value: 'IF / COUNTIF / SUMIF', detail: 'Build formulae from scenario requirements.' },
    { label: 'Reference', value: 'A1 / $A1 / A$1 / $A$1', detail: 'Predict how formulas change when copied.' },
    { label: 'Analysis', value: 'Sort, filter, what-if, summary', detail: 'Interpret spreadsheet output in compact DSE style.' }
  ]);
  arcadeMissionGrid.innerHTML = `
    <article class="game-board wide-board mission-room">
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 1: Formula Writing Game</span><strong>+15 XP</strong></p>
        <h3>${escapeHtml(formulaCase.title)}</h3>
        <div class="spreadsheet-mini" aria-label="Spreadsheet sample">
          <span></span><strong>A</strong><strong>B</strong><strong>C</strong><strong>D</strong>
          <strong>1</strong><span>Name</span><span>Class</span><span>Mark</span><span>Result</span>
          <strong>2</strong><span>Amy</span><span>5A</span><span>82</span><span class="active-cell">?</span>
          <strong>3</strong><span>Ben</span><span>5B</span><span>49</span><span></span>
        </div>
        <p>${escapeHtml(formulaCase.prompt)}</p>
        <div class="token-bank" id="formulaTokens">
          ${formulaCase.tokens.map(token => `<button class="token-button" type="button" data-token="${escapeHtml(token)}">${escapeHtml(token)}</button>`).join('')}
        </div>
        <div class="formula-display" id="formulaDisplay">Click tokens...</div>
        <div class="game-toolbar">
          <button class="primary-btn" id="formulaCheck" type="button">Check formula</button>
          <button class="ghost-btn" id="formulaClear" type="button">Clear</button>
        </div>
        <p id="formulaFeedback" class="game-feedback neutral">Use the required function and cell references. Common mistake: typing fixed values or using the wrong criteria range.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 2: Formula Copy Visualiser</span><strong>+15 XP</strong></p>
        <h3>Copy formula visualiser</h3>
        <p>Watch how relative references move when a formula is copied from row ${row} to row ${copyRow}.</p>
        <div class="copy-track">
          <span>D${row}: ${arcadeRuntime.sheet.expectedTotal}</span>
          <span class="copy-arrow">copy down</span>
          <span id="copyPreview">D${copyRow}: ?</span>
        </div>
        <button class="secondary-btn" id="copyFormulaBtn" type="button">Copy down to row ${copyRow}</button>
        <p id="copyFeedback" class="game-feedback neutral">This mini animation is for cell reference movement, not arithmetic.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 3: Absolute / Relative Reference</span><strong>+15 XP</strong></p>
        <h3>Choose the correct reference</h3>
        <p>${escapeHtml(refCase.prompt)}</p>
        <div class="option-grid compact-options">
          ${refCase.choices.map(choice => `<button type="button" data-ref-choice="${escapeHtml(choice)}">${escapeHtml(choice)}</button>`).join('')}
        </div>
        <p id="refFeedback" class="game-feedback neutral">A1 changes both ways; $A$1 locks both column and row; mixed references lock one part.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 4: Sorting and Filtering</span><strong>+15 XP</strong></p>
        <h3>Choose the criterion</h3>
        <p>${escapeHtml(filterCase.prompt)}</p>
        <table class="sql-table">
          <caption>Marks</caption>
          <tr><th>name</th><th>class</th><th>mark</th></tr>
          <tr><td>Amy</td><td>5A</td><td>82</td></tr>
          <tr><td>Ben</td><td>5B</td><td>49</td></tr>
          <tr><td>Chloe</td><td>5A</td><td>73</td></tr>
        </table>
        <div class="option-grid compact-options">
          ${filterCase.choices.map(choice => `<button type="button" data-filter-choice="${escapeHtml(choice)}">${escapeHtml(choice)}</button>`).join('')}
        </div>
        <p id="filterFeedback" class="game-feedback neutral">Filtering keeps matching records; sorting changes display order only.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 5: What-if Simulator</span><strong>+15 XP</strong></p>
        <h3>Predict the changed output</h3>
        <p>Total formula: total ← price x quantity - discount. What is the output for price ${whatIfPrice}, quantity ${whatIfQty}, discount ${whatIfDiscount}?</p>
        <div class="option-grid compact-options">
          ${makeSheetChoices(String(whatIfTotal), [String(whatIfPrice + whatIfQty - whatIfDiscount), String(whatIfPrice * whatIfQty), String(whatIfPrice * whatIfDiscount - whatIfQty)], 'whatif')}
        </div>
        <p id="whatIfFeedback" class="game-feedback neutral">What-if analysis changes input values and observes the calculated output.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 6: Pivot-style Summary</span><strong>+15 XP</strong></p>
        <h3>Simple class summary</h3>
        <p>Count how many records belong to class 5A.</p>
        <table class="sql-table">
          <caption>Source records</caption>
          <tr><th>class</th><th>mark</th></tr>
          ${pivotRows.map(rowItem => `<tr><td>${rowItem.cls}</td><td>${rowItem.mark}</td></tr>`).join('')}
        </table>
        <div class="option-grid compact-options">
          ${makeSheetChoices(pivotAnswer, ['1', '3', '4'].filter(choice => choice !== pivotAnswer), 'pivot')}
        </div>
        <p id="pivotFeedback" class="game-feedback neutral">A pivot-style summary groups records and calculates a count, sum or average.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>DSE transfer: wrong vs corrected</span><strong>+20 XP</strong></p>
        <h3>Lock the tax cell</h3>
        <p>Wrong version: =D${row}*B1. Correct it so the tax rate stays fixed when copied.</p>
        <div class="token-bank" id="taxTokens">
          ${['=', `D${row}`, '*', 'B1', '$B$1', '+', `C${row}`].map(token => `<button class="token-button" type="button" data-tax-token="${escapeHtml(token)}">${escapeHtml(token)}</button>`).join('')}
        </div>
        <div class="formula-display" id="taxDisplay">Click tokens...</div>
        <div class="game-toolbar">
          <button class="primary-btn" id="taxCheck" type="button">Check locked formula</button>
          <button class="ghost-btn" id="taxClear" type="button">Clear</button>
        </div>
        <p id="taxFeedback" class="game-feedback neutral">Fill the blank: =D${row}*_____. The $ symbols stop the tax-rate cell from moving during copying.</p>
      </div>
    </article>
  `;
  bindSpreadsheetGame();
}

function makeSpreadsheetFormulaCase() {
  return pick([
    {
      title: 'IF formula',
      prompt: 'Build the formula for D2 to show "Pass" if C2 is at least 50, otherwise "Fail".',
      answer: '=IF(C2>=50,"Pass","Fail")',
      tokens: ['=IF(', 'C2', '>=', '50', ',"Pass"', ',"Fail"', ')']
    },
    {
      title: 'COUNTIF formula',
      prompt: 'Build the formula to count marks in C2:C6 that are at least 50.',
      answer: '=COUNTIF(C2:C6,">=50")',
      tokens: ['=COUNTIF(', 'C2:C6', ',"', '>=50', '")', '=SUMIF(']
    },
    {
      title: 'SUMIF formula',
      prompt: 'Build the formula to add marks in C2:C6 for class 5A in B2:B6.',
      answer: '=SUMIF(B2:B6,"5A",C2:C6)',
      tokens: ['=SUMIF(', 'B2:B6', ',"5A"', ',C2:C6', ')', '=COUNTIF(']
    },
    {
      title: 'Summary function',
      prompt: 'Build the formula to find the average mark in C2:C6.',
      answer: '=AVERAGE(C2:C6)',
      tokens: ['=AVERAGE(', 'C2:C6', ')', '=MAX(', '=MIN(', '=RANK(']
    },
    {
      title: 'RANK formula',
      prompt: 'Build the formula to rank C2 within the fixed mark list C2:C6.',
      answer: '=RANK(C2,$C$2:$C$6)',
      tokens: ['=RANK(', 'C2', ',$C$2:$C$6', ')', ',C2:C6']
    }
  ]);
}

function makeSheetChoices(answer, distractors, namespace) {
  return [...new Set([answer, ...distractors])].slice(0, 4).sort(() => Math.random() - 0.5).map(choice => `
    <button type="button" data-sheet-choice="${escapeHtml(namespace)}" data-answer="${escapeHtml(answer)}">${escapeHtml(choice)}</button>
  `).join('');
}

function bindSpreadsheetGame() {
  document.getElementById('formulaTokens').addEventListener('click', event => {
    const button = event.target.closest('[data-token]');
    if (!button) return;
    arcadeRuntime.sheet.formulaTokens.push(button.dataset.token);
    updateFormulaDisplay('formulaDisplay', arcadeRuntime.sheet.formulaTokens);
  });
  document.getElementById('formulaClear').addEventListener('click', () => {
    arcadeRuntime.sheet.formulaTokens = [];
    updateFormulaDisplay('formulaDisplay', arcadeRuntime.sheet.formulaTokens);
  });
  document.getElementById('formulaCheck').addEventListener('click', () => {
    const formula = arcadeRuntime.sheet.formulaTokens.join('');
    if (normaliseFormula(formula) === normaliseFormula(arcadeRuntime.sheet.formulaCase.answer)) {
      completeArcadeMission('sheet-formula', 15, 'formulaFeedback', `Correct: ${arcadeRuntime.sheet.formulaCase.answer}. DSE transfer: use the function name, correct range and correct criteria.`);
    } else {
      missArcadeMission('formulaFeedback', `Not yet. Expected: ${arcadeRuntime.sheet.formulaCase.answer}`);
    }
  });
  document.getElementById('copyFormulaBtn').addEventListener('click', () => {
    document.getElementById('copyPreview').textContent = `D${arcadeRuntime.sheet.copyRow}: ${arcadeRuntime.sheet.copiedTotal}`;
    document.getElementById('copyPreview').classList.add('flash-cell');
    completeArcadeMission('sheet-copy', 15, 'copyFeedback', `Relative references moved from row ${arcadeRuntime.sheet.row} to row ${arcadeRuntime.sheet.copyRow}. DSE transfer: predict copied references before calculating.`);
  });
  document.getElementById('taxTokens').addEventListener('click', event => {
    const button = event.target.closest('[data-tax-token]');
    if (!button) return;
    arcadeRuntime.sheet.taxTokens.push(button.dataset.taxToken);
    updateFormulaDisplay('taxDisplay', arcadeRuntime.sheet.taxTokens);
  });
  document.getElementById('taxClear').addEventListener('click', () => {
    arcadeRuntime.sheet.taxTokens = [];
    updateFormulaDisplay('taxDisplay', arcadeRuntime.sheet.taxTokens);
  });
  document.getElementById('taxCheck').addEventListener('click', () => {
    const formula = arcadeRuntime.sheet.taxTokens.join('');
    if (formula === arcadeRuntime.sheet.expectedTax) {
      completeArcadeMission('sheet-tax', 20, 'taxFeedback', 'Correct: $B$1 keeps the tax-rate cell fixed when the formula is copied.');
    } else {
      missArcadeMission('taxFeedback', 'Try again. The fixed tax rate should be written as $B$1.');
    }
  });
  arcadeMissionGrid.querySelectorAll('[data-ref-choice]').forEach(button => {
    button.addEventListener('click', () => {
      if (button.dataset.refChoice === arcadeRuntime.sheet.refCase.answer) {
        completeArcadeMission('sheet-ref', 15, 'refFeedback', `Correct: ${arcadeRuntime.sheet.refCase.answer}. The $ symbol locks the required column and/or row.`);
      } else {
        missArcadeMission('refFeedback', `Not quite. Correct reference: ${arcadeRuntime.sheet.refCase.answer}.`);
      }
    });
  });
  arcadeMissionGrid.querySelectorAll('[data-filter-choice]').forEach(button => {
    button.addEventListener('click', () => {
      if (button.dataset.filterChoice === arcadeRuntime.sheet.filterCase.answer) {
        completeArcadeMission('sheet-filter', 15, 'filterFeedback', 'Correct. The chosen criterion matches the required records/order.');
      } else {
        missArcadeMission('filterFeedback', `Not quite. Correct criterion: ${arcadeRuntime.sheet.filterCase.answer}.`);
      }
    });
  });
  arcadeMissionGrid.querySelectorAll('[data-sheet-choice]').forEach(button => {
    button.addEventListener('click', () => {
      const namespace = button.dataset.sheetChoice;
      const feedbackId = namespace === 'whatif' ? 'whatIfFeedback' : 'pivotFeedback';
      const missionId = namespace === 'whatif' ? 'sheet-whatif' : 'sheet-pivot';
      if (button.textContent.trim() === button.dataset.answer) {
        completeArcadeMission(missionId, 15, feedbackId, namespace === 'whatif'
          ? `Correct. ${arcadeRuntime.sheet.whatIfPrice} x ${arcadeRuntime.sheet.whatIfQty} - ${arcadeRuntime.sheet.whatIfDiscount} = ${arcadeRuntime.sheet.whatIfTotal}.`
          : `Correct. There are ${arcadeRuntime.sheet.pivotAnswer} record(s) in class 5A.`);
      } else {
        missArcadeMission(feedbackId, 'Not quite. Recalculate using the displayed table or formula.');
      }
    });
  });
}

function normaliseFormula(text) {
  return String(text).replace(/\s+/g, '').toUpperCase();
}

function updateFormulaDisplay(id, tokens) {
  document.getElementById(id).textContent = tokens.length ? tokens.join('') : 'Click tokens...';
}

function renderSqlGame() {
  const wantedClass = pick(['5A', '5B']);
  const resultRows = wantedClass === '5A'
    ? [['Amy', 82], ['Chloe', 91]]
    : [['Ben', 74]];
  const orderFirst = 'Chloe';
  const avg = Math.round((82 + 74 + 91) / 3);
  arcadeRuntime.sql = { tokens: [], wantedClass, resultRows, avg };
  makeGameVisualCards([
    { label: 'Query result', value: 'SELECT / WHERE / ORDER', detail: 'Predict which records appear and why records are excluded.' },
    { label: 'Database design', value: 'PK / FK / ERD / 3NF', detail: 'Connect keys, relationships, normalisation and access rights.' },
    { label: 'Data change', value: 'UPDATE / DELETE / rollback', detail: 'Predict table state after modification and transaction control.' }
  ]);
  arcadeMissionGrid.innerHTML = `
    <article class="game-board wide-board mission-room">
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 1: SELECT-FROM-WHERE builder</span><strong>+15 XP</strong></p>
        <h3>Assemble the SQL command</h3>
        <p>Build a query to show name and mark for class ${wantedClass} students.</p>
        <div class="sql-table-pair">
          <table class="sql-table">
            <caption>Student</caption>
            <tr><th>studentID</th><th>name</th><th>class</th><th>mark</th></tr>
            <tr><td>101</td><td>Amy</td><td>5A</td><td>82</td></tr>
            <tr><td>102</td><td>Ben</td><td>5B</td><td>74</td></tr>
            <tr><td>103</td><td>Chloe</td><td>5A</td><td>91</td></tr>
          </table>
        </div>
        <div class="token-bank" id="sqlTokens">
          ${['WHERE', 'name, mark', 'Student', 'SELECT', `class = "${wantedClass}"`, 'FROM'].map(token => `<button class="token-button" type="button" data-sql-token="${escapeHtml(token)}">${escapeHtml(token)}</button>`).join('')}
        </div>
        <div class="formula-display" id="sqlDisplay">Click SQL tokens...</div>
        <div class="game-toolbar">
          <button class="primary-btn" id="sqlCheck" type="button">Run query</button>
          <button class="ghost-btn" id="sqlClear" type="button">Clear</button>
        </div>
        <p id="sqlFeedback" class="game-feedback neutral">Correct order matters: SELECT fields FROM table WHERE condition. Common mistake: putting the condition in SELECT.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 2: Query Result Predictor</span><strong>+15 XP</strong></p>
        <h3>Predict the result table</h3>
        <p><code>SELECT name, mark FROM Student WHERE class = "${wantedClass}"</code></p>
        <table class="sql-table result-table" id="sqlResult">
          <caption>Result</caption>
          <tr><th>name</th><th>mark</th></tr>
          <tr><td colspan="2">Waiting for query...</td></tr>
        </table>
        <button class="secondary-btn" id="sqlExplain" type="button">Explain result</button>
        <p id="sqlResultFeedback" class="game-feedback neutral">The WHERE condition should keep only records with class ${wantedClass}.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 3: ORDER BY</span><strong>+10 XP</strong></p>
        <h3>First record after sorting</h3>
        <p><code>SELECT name, mark FROM Student ORDER BY mark DESC</code></p>
        <div class="option-grid compact-options">
          ${['Amy', 'Ben', 'Chloe', 'No record'].map(name => `<button type="button" data-order-choice="${name}">${name}</button>`).join('')}
        </div>
        <p id="orderFeedback" class="game-feedback neutral">ORDER BY changes the display order; it does not remove records.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 4: Aggregate / GROUP BY</span><strong>+15 XP</strong></p>
        <h3>Grouped summary</h3>
        <p><code>SELECT class, COUNT(*) FROM Student GROUP BY class</code></p>
        <div class="option-grid compact-options">
          ${['5A: 2, 5B: 1', '5A: 1, 5B: 2', '5A: 82, 5B: 74', 'Only 5A records'].map(choice => `<button type="button" data-group-choice="${escapeHtml(choice)}">${escapeHtml(choice)}</button>`).join('')}
        </div>
        <p id="groupFeedback" class="game-feedback neutral">COUNT(*) counts records in each group.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 5: INNER JOIN using PK/FK</span><strong>+15 XP</strong></p>
        <h3>JOIN key visualiser</h3>
        <p>Wrong version: join Student.name to Result.mark. Click the corrected key field pair.</p>
        <div class="join-chips">
          ${['Student.studentID', 'Student.name', 'Result.studentID', 'Result.mark'].map(field => {
            const [tableName, fieldName] = field.split('.');
            return `<button class="token-button" type="button" data-join-field="${escapeHtml(field)}"><span>${escapeHtml(tableName)}</span><strong>${escapeHtml(fieldName)}</strong></button>`;
          }).join('')}
        </div>
        <div class="join-line" id="joinLine">No link selected</div>
        <p id="joinFeedback" class="game-feedback neutral">A relationship is usually made through matching key fields.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 6: One-level subquery</span><strong>+15 XP</strong></p>
        <h3>Above-average marks</h3>
        <p><code>SELECT name FROM Student WHERE mark > (SELECT AVG(mark) FROM Student)</code></p>
        <p>Average mark is about ${avg}. Which name is shown?</p>
        <div class="option-grid compact-options">
          ${['Amy only', 'Chloe only', 'Amy and Chloe', 'Ben only'].map(choice => `<button type="button" data-subquery-choice="${escapeHtml(choice)}">${escapeHtml(choice)}</button>`).join('')}
        </div>
        <p id="subqueryFeedback" class="game-feedback neutral">Apply the subquery first, then compare each mark with AVG(mark).</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 7: UPDATE / DELETE / rollback</span><strong>+15 XP</strong></p>
        <h3>Transaction result</h3>
        <p><code>BEGIN TRANSACTION; UPDATE Student SET mark = 0 WHERE studentID = 102; ROLLBACK;</code></p>
        <p>What is Ben's final mark?</p>
        <div class="option-grid compact-options">
          ${['0', '74', '82', 'Record deleted'].map(choice => `<button type="button" data-rollback-choice="${choice}">${choice}</button>`).join('')}
        </div>
        <p id="rollbackFeedback" class="game-feedback neutral">ROLLBACK cancels uncommitted changes in the transaction.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 8: Database design checkpoint</span><strong>+15 XP</strong></p>
        <h3>Design mini-games</h3>
        <p>Choose the best DSE database-design statement.</p>
        <div class="option-grid compact-options">
          ${[
            'studentID is suitable as a primary key because it uniquely identifies each student.',
            'class is always a primary key because many students share it.',
            'A many-to-many relationship never needs a junction table.',
            'All users should have full access rights for convenience.'
          ].map(choice => `<button type="button" data-design-choice="${escapeHtml(choice)}">${escapeHtml(choice)}</button>`).join('')}
        </div>
        <p id="designFeedback" class="game-feedback neutral">This covers Primary Key Hunter, M:N Resolver, Normalisation Doctor and Access Rights Manager as compact design checks.</p>
      </div>
    </article>
  `;
  bindSqlGame();
}

function bindSqlGame() {
  document.getElementById('sqlTokens').addEventListener('click', event => {
    const button = event.target.closest('[data-sql-token]');
    if (!button) return;
    arcadeRuntime.sql.tokens.push(button.dataset.sqlToken);
    document.getElementById('sqlDisplay').textContent = arcadeRuntime.sql.tokens.join(' ');
  });
  document.getElementById('sqlClear').addEventListener('click', () => {
    arcadeRuntime.sql.tokens = [];
    document.getElementById('sqlDisplay').textContent = 'Click SQL tokens...';
    makeGameFeedback('sqlFeedback', 'Query cleared. Build SELECT fields FROM table WHERE condition.', 'neutral');
  });
  document.getElementById('sqlCheck').addEventListener('click', () => {
    const query = arcadeRuntime.sql.tokens.join(' ');
    const expected = `SELECT name, mark FROM Student WHERE class = "${arcadeRuntime.sql.wantedClass}"`;
    if (normaliseSql(query) === normaliseSql(expected)) {
      document.getElementById('sqlResult').innerHTML = '<caption>Result</caption><tr><th>name</th><th>mark</th></tr>' + arcadeRuntime.sql.resultRows.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join('');
      completeArcadeMission('sql-build', 20, 'sqlFeedback', `Query accepted. The table now filters records where class is ${arcadeRuntime.sql.wantedClass}.`);
    } else {
      missArcadeMission('sqlFeedback', `The command is not executable yet. Use ${expected}.`);
    }
  });
  document.getElementById('sqlExplain').addEventListener('click', () => {
    if (arcadeRuntime.completedMissions.has('sql-build')) {
      const names = arcadeRuntime.sql.resultRows.map(row => row[0]).join(' and ');
      completeArcadeMission('sql-result', 15, 'sqlResultFeedback', `${names} appear because their class field is ${arcadeRuntime.sql.wantedClass}. DSE transfer: apply WHERE before deciding the output fields.`);
    } else {
      missArcadeMission('sqlResultFeedback', 'Run the correct query first, then the result table can be checked.');
    }
  });
  arcadeMissionGrid.querySelectorAll('[data-order-choice]').forEach(button => {
    button.addEventListener('click', () => {
      if (button.dataset.orderChoice === 'Chloe') completeArcadeMission('sql-order', 10, 'orderFeedback', 'Correct. Chloe has the highest mark, so she appears first when sorting by mark DESC.');
      else missArcadeMission('orderFeedback', 'Not quite. Sort all records by mark from highest to lowest.');
    });
  });
  arcadeMissionGrid.querySelectorAll('[data-group-choice]').forEach(button => {
    button.addEventListener('click', () => {
      if (button.textContent.trim() === '5A: 2, 5B: 1') completeArcadeMission('sql-group', 15, 'groupFeedback', 'Correct. There are two 5A records and one 5B record.');
      else missArcadeMission('groupFeedback', 'Not quite. GROUP BY class counts records within each class.');
    });
  });
  arcadeMissionGrid.querySelectorAll('[data-join-field]').forEach(button => {
    button.addEventListener('click', () => {
      const field = button.dataset.joinField;
      document.getElementById('joinLine').textContent = `${field} selected`;
      if (field.endsWith('studentID')) {
        button.classList.add('token-good');
        completeArcadeMission('sql-join', 15, 'joinFeedback', 'Correct: studentID is the common key used to link matching records.');
      } else {
        button.classList.add('token-bad');
        missArcadeMission('joinFeedback', 'That field describes data, but it is not the linking key. Try studentID.');
      }
    });
  });
  arcadeMissionGrid.querySelectorAll('[data-subquery-choice]').forEach(button => {
    button.addEventListener('click', () => {
      if (button.textContent.trim() === 'Amy and Chloe') completeArcadeMission('sql-subquery', 15, 'subqueryFeedback', 'Correct. First find AVG(mark), then keep marks greater than that value.');
      else missArcadeMission('subqueryFeedback', 'Not quite. Amy and Chloe are above the average mark.');
    });
  });
  arcadeMissionGrid.querySelectorAll('[data-rollback-choice]').forEach(button => {
    button.addEventListener('click', () => {
      if (button.dataset.rollbackChoice === '74') completeArcadeMission('sql-rollback', 15, 'rollbackFeedback', 'Correct. ROLLBACK cancels the UPDATE, so Ben keeps mark 74.');
      else missArcadeMission('rollbackFeedback', 'Not quite. ROLLBACK cancels the uncommitted UPDATE.');
    });
  });
  arcadeMissionGrid.querySelectorAll('[data-design-choice]').forEach(button => {
    button.addEventListener('click', () => {
      if (button.textContent.trim().startsWith('studentID')) completeArcadeMission('sql-design', 15, 'designFeedback', 'Correct. A primary key must uniquely identify each record; access rights should still be restricted by role.');
      else missArcadeMission('designFeedback', 'Not quite. Look for uniqueness, junction tables for M:N relationships, and least-privilege access rights.');
    });
  });
}

function normaliseSql(text) {
  return String(text).replace(/\s+/g, ' ').replace(/\s*,\s*/g, ', ').trim().toUpperCase();
}

function renderSecurityGame() {
  const phish = pick([
    { title: 'Account locked', text: 'Click http://lscc-login.example to verify now.', clues: 'external URL, fear message, asks for account verification' },
    { title: 'Storage full', text: 'Open urgent attachment to keep your school drive active.', clues: 'urgent attachment, threat of losing access, no normal school channel' },
    { title: 'Prize notice', text: 'Sign in with your school password to claim a free phone.', clues: 'unrealistic reward, asks for password, suspicious sign-in request' }
  ]);
  arcadeRuntime.security = {
    selectedEmail: null,
    phish,
    firewall: { HTTPS: false, SSH: true, SQL: true, BadIP: true, Games: true, Pattern: true },
    wifi: { VPN: false, HTTPS: false, Banking: true, IgnoreCert: true }
  };
  makeGameVisualCards([
    { label: 'Threats', value: 'virus / worm / Trojan / ransomware', detail: 'Classify scenarios using precise HKDSE security terms.' },
    { label: 'Controls', value: 'firewall / VPN / 2FA / backup', detail: 'Match a threat to a suitable protection and reason.' },
    { label: 'Transfer', value: 'risk + protection + explanation', detail: 'Write concise DSE-style security answers.' }
  ]);
  arcadeMissionGrid.innerHTML = `
    <article class="game-board wide-board mission-room">
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 1: Threat Identification</span><strong>+15 XP</strong></p>
        <h3>Classify the attack</h3>
        <p>A student opens an attachment. Files are encrypted and a payment demand is shown. Which threat is this?</p>
        <div class="option-grid compact-options">
          ${['virus', 'worm', 'Trojan', 'ransomware', 'spyware', 'phishing', 'DDoS', 'man-in-the-middle attack'].map(choice => `<button type="button" data-threat-choice="${choice}">${choice}</button>`).join('')}
        </div>
        <p id="threatFeedback" class="game-feedback neutral">Use the behaviour of the attack, not only the file name.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 2: Control Matching</span><strong>+15 XP</strong></p>
        <h3>Match risk to protection</h3>
        <p>A leaked password alone should not be enough to access a school account. Which control best reduces this risk?</p>
        <div class="option-grid compact-options">
          ${['firewall', 'antivirus', 'encryption', 'VPN', '2FA', 'backup', 'access rights', 'digital certificate', 'strong password / OTP'].map(choice => `<button type="button" data-control-choice="${escapeHtml(choice)}">${escapeHtml(choice)}</button>`).join('')}
        </div>
        <p id="controlFeedback" class="game-feedback neutral">A good answer names a control and links it to the risk.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 3: Phishing evidence</span><strong>+15 XP</strong></p>
        <h3>Phishing inbox game</h3>
        <div class="security-inbox">
          <button class="security-card" type="button" data-email="phish"><strong>${escapeHtml(phish.title)}</strong><span>${escapeHtml(phish.text)}</span></button>
          <button class="security-card" type="button" data-email="legit"><strong>ICT Club notice</strong><span>Meeting reminder from school email, no attachment.</span></button>
        </div>
        <div id="emailInspector" class="risk-panel">Select a message to inspect sender, link and urgency.</div>
        <div class="decision-row">
          <button class="decision-button" type="button" data-email-action="report">Report phishing</button>
          <button class="decision-button" type="button" data-email-action="trust">Trust sender</button>
          <button class="decision-button" type="button" data-email-action="delete">Delete only</button>
        </div>
        <p id="emailFeedback" class="game-feedback neutral">Use evidence: suspicious URL, urgency and request for credentials.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 4: Firewall Rule Game</span><strong>+15 XP</strong></p>
        <h3>Firewall rule game</h3>
        <p>Set a school server firewall: allow HTTPS, block external admin/database access, suspicious IPs, game sites and suspicious request patterns.</p>
        <div class="toggle-list" id="firewallToggles"></div>
        <button class="primary-btn" id="firewallCheck" type="button">Test firewall</button>
        <p id="firewallFeedback" class="game-feedback neutral">Firewall rules may use IP address, port, protocol, website category and suspicious request pattern.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>Mode 5: Public Wi-Fi Risk Simulator</span><strong>+15 XP</strong></p>
        <h3>Public Wi-Fi risk simulator</h3>
        <p>Wrong version: use online banking and ignore certificate warnings on public Wi-Fi. Correct it to reduce man-in-the-middle risk.</p>
        <div class="toggle-list" id="wifiToggles"></div>
        <button class="primary-btn" id="wifiCheck" type="button">Run risk scan</button>
        <div class="risk-meter"><span id="riskMeterBar"></span></div>
        <p id="wifiFeedback" class="game-feedback neutral">Use HTTPS and VPN, do not ignore certificate warnings, and avoid sensitive transactions.</p>
      </div>
      <div class="game-panel">
        <p class="mission-topline"><span>DSE follow-up</span><strong>+10 XP</strong></p>
        <h3>Authentication vs authorisation</h3>
        <p>Which statement correctly distinguishes the two terms?</p>
        <div class="option-grid compact-options">
          ${[
            'Authentication verifies identity; authorisation determines allowed actions.',
            'Authentication means setting file permissions; authorisation means checking a password.',
            'Both terms only mean encryption.',
            'Both terms are the same in HKDSE ICT.'
          ].map(choice => `<button type="button" data-auth-choice="${escapeHtml(choice)}">${escapeHtml(choice)}</button>`).join('')}
        </div>
        <p id="authFeedback" class="game-feedback neutral">DSE follow-up: State one risk, suggest one protection, and explain why the protection works.</p>
      </div>
    </article>
  `;
  bindSecurityGame();
}

function bindSecurityGame() {
  renderToggleList('firewallToggles', arcadeRuntime.security.firewall, 'firewall');
  renderToggleList('wifiToggles', arcadeRuntime.security.wifi, 'wifi');
  arcadeMissionGrid.querySelectorAll('[data-threat-choice]').forEach(button => {
    button.addEventListener('click', () => {
      if (button.dataset.threatChoice === 'ransomware') completeArcadeMission('security-threat', 15, 'threatFeedback', 'Correct. Ransomware encrypts files and demands payment.');
      else missArcadeMission('threatFeedback', 'Not quite. The key clue is file encryption plus payment demand.');
    });
  });
  arcadeMissionGrid.querySelectorAll('[data-control-choice]').forEach(button => {
    button.addEventListener('click', () => {
      if (button.textContent.trim() === '2FA' || button.textContent.trim() === 'strong password / OTP') {
        completeArcadeMission('security-control', 15, 'controlFeedback', 'Correct. A second factor or OTP reduces risk when a password is leaked.');
      } else {
        missArcadeMission('controlFeedback', 'Not the best control for leaked-password login. Choose a control that adds proof beyond the password.');
      }
    });
  });
  arcadeMissionGrid.querySelectorAll('[data-email]').forEach(button => {
    button.addEventListener('click', () => {
      arcadeRuntime.security.selectedEmail = button.dataset.email;
      arcadeMissionGrid.querySelectorAll('[data-email]').forEach(item => item.classList.remove('selected'));
      button.classList.add('selected');
      document.getElementById('emailInspector').innerHTML = button.dataset.email === 'phish'
        ? `<strong>Risk clues:</strong> ${escapeHtml(arcadeRuntime.security.phish.clues)}.`
        : '<strong>Risk clues:</strong> school sender, normal reminder, no credential request.';
    });
  });
  arcadeMissionGrid.querySelectorAll('[data-email-action]').forEach(button => {
    button.addEventListener('click', () => {
      if (arcadeRuntime.security.selectedEmail === 'phish' && button.dataset.emailAction === 'report') {
        completeArcadeMission('security-email', 20, 'emailFeedback', 'Correct: report the phishing message so the threat can be blocked for others. DSE transfer: cite evidence such as suspicious link, urgency or credential request.');
      } else {
        missArcadeMission('emailFeedback', 'Not safe enough. Select the suspicious message and report it as phishing.');
      }
    });
  });
  document.getElementById('firewallCheck').addEventListener('click', () => {
    const rules = arcadeRuntime.security.firewall;
    if (rules.HTTPS && !rules.SSH && !rules.SQL && !rules.BadIP && !rules.Games && !rules.Pattern) {
      completeArcadeMission('security-firewall', 15, 'firewallFeedback', 'Firewall passed: HTTPS is open; SSH, SQL, suspicious IPs, game sites and suspicious request patterns are blocked.');
    } else {
      missArcadeMission('firewallFeedback', 'Adjust the rules: allow HTTPS, block SSH, SQL, suspicious IPs, game sites and suspicious request patterns.');
    }
  });
  document.getElementById('wifiCheck').addEventListener('click', () => {
    const wifi = arcadeRuntime.security.wifi;
    const safe = wifi.VPN && wifi.HTTPS && !wifi.Banking && !wifi.IgnoreCert;
    updateWifiRiskMeter();
    if (safe) {
      completeArcadeMission('security-wifi', 15, 'wifiFeedback', 'Risk reduced: VPN and HTTPS are on, banking and ignoring certificate warnings are off. VPN can reduce man-in-the-middle risk by encrypting traffic through a secure tunnel.');
    } else {
      missArcadeMission('wifiFeedback', 'Keep VPN and HTTPS on, and turn off online banking and ignoring certificate warnings.');
    }
  });
  arcadeMissionGrid.querySelectorAll('[data-auth-choice]').forEach(button => {
    button.addEventListener('click', () => {
      if (button.textContent.trim().startsWith('Authentication verifies')) {
        completeArcadeMission('security-auth', 10, 'authFeedback', 'Correct. Authentication checks identity; authorisation checks permissions or allowed actions.');
      } else {
        missArcadeMission('authFeedback', 'Not quite. Password/OTP relates to authentication; access rights relate to authorisation.');
      }
    });
  });
  updateWifiRiskMeter();
}

function renderToggleList(id, values, namespace) {
  const labels = {
    HTTPS: namespace === 'wifi' ? 'Use HTTPS websites' : 'Allow HTTPS web traffic',
    SSH: 'Allow external SSH admin (port 22)',
    SQL: 'Allow external SQL database (port 3306)',
    BadIP: 'Allow suspicious IP address',
    Games: 'Allow blocked game website category',
    Pattern: 'Allow suspicious request pattern',
    VPN: 'Use VPN',
    Banking: 'Do online banking',
    IgnoreCert: 'Ignore certificate warning'
  };
  document.getElementById(id).innerHTML = Object.keys(values).map(key => `
    <button class="toggle-pill ${values[key] ? 'is-on' : ''}" type="button" data-toggle-namespace="${namespace}" data-toggle-key="${key}">
      <span>${escapeHtml(labels[key] || key)}</span>
      <strong>${values[key] ? 'On' : 'Off'}</strong>
    </button>
  `).join('');
  document.getElementById(id).querySelectorAll('[data-toggle-key]').forEach(button => {
    button.addEventListener('click', () => {
      const store = arcadeRuntime.security[button.dataset.toggleNamespace];
      const key = button.dataset.toggleKey;
      store[key] = !store[key];
      renderToggleList(id, store, button.dataset.toggleNamespace);
      updateWifiRiskMeter();
    });
  });
}

function updateWifiRiskMeter() {
  const bar = document.getElementById('riskMeterBar');
  if (!bar || !arcadeRuntime.security?.wifi) return;
  const wifi = arcadeRuntime.security.wifi;
  let risk = 70;
  if (wifi.VPN) risk -= 25;
  if (wifi.HTTPS) risk -= 20;
  if (!wifi.Banking) risk -= 20;
  if (!wifi.IgnoreCert) risk -= 15;
  bar.style.width = `${Math.max(8, Math.min(100, risk))}%`;
  bar.textContent = `${Math.max(0, risk)}% risk`;
}

function showDashboardPage() {
  stopAuto();
  stopTopicSimulation();
  arcadePage.classList.add('hidden');
  topicPage.classList.add('hidden');
  programmingSections.forEach(section => section.classList.add('hidden'));
  dashboardPage.classList.remove('hidden');
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  document.querySelector('.nav-item[data-page="dashboard"]')?.classList.add('active');
}

function setChapterSectionVisible(element, visible) {
  const section = element?.closest('.chapter-section');
  if (section) section.classList.toggle('hidden', !visible);
}

function renderIntroductionSection(topicConfig, groupConfig, meta) {
  topicGroupLabel.textContent = meta.group;
  topicPageTitle.textContent = topicConfig.title || meta.topic;
  topicPageDescription.textContent = topicConfig.description || groupConfig.description;
  renderTopicStats(topicConfig.stats || groupConfig.stats);
  setChapterSectionVisible(topicStatGrid, true);
}

function renderDetailsSection(topicConfig, groupConfig) {
  if (topicConfig.detailsLayout === 'dataControlLearningPath') {
    renderA2DataControlDetails(topicConfig);
    return;
  }
  if (topicConfig.detailsLayout === 'dataRepresentationLearningPath') {
    renderA3DataRepresentationDetails(topicConfig);
    return;
  }
  if (topicConfig.detailsLayout === 'spreadsheetLearningPath') {
    renderA4SpreadsheetDetails(topicConfig);
    return;
  }
  if (topicConfig.detailsLayout === 'simpleDatabaseLearningPath') {
    renderA5SimpleDatabaseDetails(topicConfig);
    return;
  }
  if (topicConfig.detailsLayout === 'inputOutputLearningPath') {
    renderB1InputOutputDetails(topicConfig);
    return;
  }
  if (topicConfig.detailsLayout === 'computerHardwareLearningPath') {
    renderB2ComputerHardwareDetails(topicConfig);
    return;
  }
  if (topicConfig.detailsLayout === 'computerSoftwareLearningPath') {
    renderB3ComputerSoftwareDetails(topicConfig);
    return;
  }
  if (topicConfig.detailsLayout === 'networkingBasicsLearningPath') {
    renderC1NetworkingBasicsDetails(topicConfig);
    return;
  }
  if (topicConfig.detailsLayout === 'internetProtocolsLearningPath') {
    renderC2InternetProtocolsDetails(topicConfig);
    return;
  }
  if (topicConfig.detailsLayout === 'internetServicesLearningPath') {
    renderC3InternetServicesDetails(topicConfig);
    return;
  }
  renderUniversalChapterDetails(topicConfig, groupConfig);
}

const chapterCurriculumRoutes = {
  A1: ['S4 C5-C6', 'Core A: 37 hours', ['Raw data', 'Information processing', 'Useful information'], 'Classify data, information, process and output in realistic information-system scenarios.', 'Use IPOS language to explain school and daily-life systems.'],
  A5: ['S6 C1', 'Core A: 37 hours', ['Table idea', 'Records and fields', 'Simple database use'], 'Explain table, record, field, data type, primary key and simple DBMS objects.', 'Connect Core A database basics to Elective A relational database design.'],
  B1: ['S4 C1-C2', 'Core B: 20 hours', ['Capture data', 'Choose device', 'Justify fit'], 'Select suitable input/output devices and justify by accuracy, speed, cost, environment and data type.', 'Compare OCR, OMR, MICR, barcode readers, sensors, printers and displays through scenarios.'],
  B2: ['S4 C3-C4', 'Core B: 20 hours', ['Component role', 'Data movement', 'Performance choice'], 'Explain CPU, memory, storage, buses and bottlenecks without relying on brand names.', 'Use upgrade cases to connect specifications to actual user needs.'],
  B3: ['S4 C4-C5', 'Core B: 20 hours', ['System software', 'OS services', 'User scenario'], 'Distinguish OS, utility software, drivers, processing modes and licence terms.', 'Match software roles to maintenance, device control and legal-use situations.'],
  C1: ['S5 C18-C19', 'Core C: 31 hours', ['Network scope', 'Device role', 'Packet journey'], 'Compare LAN/WAN, client-server/P2P and network devices using diagram-style reasoning.', 'Draw and diagnose simple school, home and organisation networks.'],
  C2: ['S5 C19-C20', 'Core C: 31 hours', ['Address', 'Protocol', 'Data exchange'], 'Identify URL parts and map HTTP/HTTPS, FTP, SMTP, POP3/IMAP, TCP/IP and DNS to tasks.', 'Trace what happens when a user visits a website or sends email.'],
  C3: ['S5 C20-C21', 'Core C: 31 hours', ['Internet service', 'Data sharing', 'User risk'], 'Evaluate email, search, cloud, IoT and online service scenarios with specific controls.', 'Use permissions, Bcc, search operators and IoT data flow in classroom examples.'],
  C4: ['S5 C21-C22', 'Core C: 31 hours', ['HTML structure', 'Path tracing', 'Repair output'], 'Read and repair simple HTML, links, images, relative paths and page structure.', 'Build small pages where every tag, path and alt text has a purpose.'],
  C5: ['S5 C22-C23', 'Core C: 31 hours', ['Threat clue', 'Likely harm', 'Suitable control'], 'Recognise malware, phishing, DoS, hacking and privacy threats from scenario evidence.', 'Analyse suspicious messages, public Wi-Fi cases and malware symptoms.'],
  C6: ['S5 C23-C24', 'Core C: 31 hours', ['Authenticate', 'Protect transmission', 'Control access'], 'Apply encryption, HTTPS/TLS, certificates, authentication, firewall and transaction safeguards.', 'Explain why a technical control fits the specific online risk.'],
  D1: ['S4 C13', 'Core D: 48 hours', ['Understand problem', 'Extract IPO', 'Plan algorithm'], 'Identify inputs, processing, outputs, decomposition and abstraction before coding.', 'Turn word problems into traceable algorithm requirements.'],
  D2: ['S4 C14-C15', 'Core D: 48 hours', ['Sequence', 'Selection', 'Trace table'], 'Trace assignment, IF/ELSE, Boolean expressions and outputs step by step.', 'Use trace tables to prove branch behaviour, especially at boundary values.'],
  D3: ['S4 C16-C20', 'Core D: 48 hours', ['Loop control', 'List index', 'Search/update'], 'Trace loops, counters, accumulators, one-dimensional arrays and linear search.', 'Practise off-by-one checks and list operations visually.'],
  D4: ['S4 C21-C23', 'Core D: 48 hours', ['Python syntax', 'Variable state', 'Simple execution'], 'Read, complete and debug simple Python using data types, input/output, selection and loops.', 'Connect pseudocode traces to actual Python statements.'],
  D5: ['S5 C1-C4', 'Core D: 48 hours', ['Combine constructs', 'Use lists/strings', 'Solve scenario'], 'Complete integrated Python programs and explain list/string processing.', 'Move from isolated syntax to short programs that solve real tasks.'],
  D6: ['S5 C5-C6', 'Core D: 48 hours', ['Test data', 'Locate error', 'Justify correction'], 'Distinguish syntax, runtime and logic errors; choose normal, boundary and erroneous test data.', 'Debug systematically instead of changing code at random.'],
  E1: ['S6 C8', 'Core E: 8 hours', ['Innovation', 'Stakeholder', 'Balanced judgement'], 'Discuss AI, big data, smart city and emerging ICT with benefits, risks and affected stakeholders.', 'Write scenario-specific social impact answers instead of broad claims.'],
  E2: ['S6 C8', 'Core E: 8 hours', ['Risk', 'Ethical concern', 'Responsible action'], 'Explain health, ergonomics, cyberbullying, privacy, digital divide and environmental issues.', 'Turn classroom ICT use into practical wellbeing and data-protection decisions.'],
  E3: ['S6 C8', 'Core E: 8 hours', ['Work owner', 'Licence condition', 'Permitted use'], 'Distinguish copyright, permissions, freeware, shareware, open source and Creative Commons terms.', 'Check whether digital resources can be copied, adapted, shared or credited.'],
  EA1: ['S6 C2', 'Elective part: selected from 76 hours', ['Define table', 'Maintain records', 'Protect commands'], 'Write safe CREATE, INSERT, UPDATE and DELETE commands with suitable types and constraints.', 'Treat WHERE clauses as safety controls, not decoration.'],
  EA2: ['S6 C3', 'Elective part: selected from 76 hours', ['Filter records', 'Match patterns', 'Summarise groups'], 'Use WHERE, LIKE, IN, BETWEEN, NULL tests and aggregate functions correctly.', 'Read query intentions before writing operators.'],
  EA3: ['S6 C4-C5', 'Elective part: selected from 76 hours', ['Related tables', 'Join condition', 'Meaningful result'], 'Query up to three related tables using joins, one-level subqueries, set operations and views.', 'Use keys and aliases to avoid meaningless table combinations.'],
  EA4: ['S6 C6', 'Elective part: selected from 76 hours', ['Relational terms', 'Integrity rule', 'Consistent update'], 'Explain schemas, domains, keys, indexes, integrity and rollback in database scenarios.', 'Connect database vocabulary to why records remain reliable.'],
  EA5: ['S6 C7', 'Elective part: selected from 76 hours', ['Identify entities', 'Resolve relationships', 'Reduce redundancy'], 'Design binary ER diagrams, resolve M:N relationships and normalise up to 3NF.', 'Transform messy scenario data into cleaner related tables.'],
  EC1: ['S5 C7-C8', 'Elective part: selected from 76 hours', ['Algorithm form', 'Python review', 'Readable style'], 'Represent algorithms with pseudocode, flowcharts, trace tables and clean Python basics.', 'Prepare stronger traces before moving to advanced programming topics.'],
  EC2: ['S5 C8', 'Elective part: selected from 76 hours', ['Error symptom', 'Debug evidence', 'Fix reason'], 'Use numerical-error ideas, breakpoints, flags and error-type diagnosis.', 'Explain the evidence for a bug before editing the code.'],
  EC3: ['S5 C9-C11', 'Elective part: selected from 76 hours', ['Nested structure', '2D traversal', 'Algorithm comparison'], 'Trace nested loops, 2D arrays, pattern output and control-structure combinations.', 'Count loop executions and compare algorithms using scenario evidence.'],
  EC4: ['S5 C11-C13', 'Elective part: selected from 76 hours', ['Subprogram role', 'Parameter flow', 'Return or effect'], 'Use functions, procedures, parameters, scope and stubs in modular programs.', 'Separate reusable logic from the main program trace.'],
  EC5: ['S5 C14-C15', 'Elective part: selected from 76 hours', ['Operation rule', 'Pointer/index state', 'Resulting structure'], 'Operate stacks, queues, circular queues and linked lists through trace states.', 'Choose a structure by LIFO, FIFO, wrap-around or linked access pattern.'],
  EC6: ['S5 C16', 'Elective part: selected from 76 hours', ['Precondition', 'Step movement', 'Sorted result'], 'Trace binary search, linear search, bubble/selection/insertion sort and merging.', 'Show comparisons and swaps, not just the final sorted list.'],
  EC7: ['S5 C17', 'Elective part: selected from 76 hours', ['Classic problem', 'Algorithm pattern', 'Trace proof'], 'Apply classic algorithms within the school’s Elective C boundary and justify the steps.', 'Connect named algorithms to the traceable problem they solve.'],
  EC8: ['S5 C17', 'Elective part: selected from 76 hours', ['Build program', 'Test thoroughly', 'Explain decisions'], 'Integrate Elective C knowledge in small complete programs with testing and explanation.', 'Prepare for Paper 2C style implementation and evaluation.']
};

function getChapterCode(topicConfig) {
  return String(topicConfig?.id || topicConfig?.title || '').split(/\s+/)[0] || 'ICT';
}

function getChapterCurriculumMeta(topicConfig, groupConfig) {
  const code = getChapterCode(topicConfig);
  const group = topicConfig.group || groupConfig?.title || '';
  const fallbackHours = group.includes('Core A') ? 'Core A: 37 hours'
    : group.includes('Core B') ? 'Core B: 20 hours'
      : group.includes('Core C') ? 'Core C: 31 hours'
        : group.includes('Core D') ? 'Core D: 48 hours'
          : group.includes('Core E') ? 'Core E: 8 hours'
            : 'Elective part: selected from 76 hours';
  const route = chapterCurriculumRoutes[code] || ['School SOW alignment', fallbackHours, ['Key idea', 'Worked scenario', 'DSE transfer'], 'Use the concept in Paper 1 or Paper 2 style scenario questions.', topicConfig.focus || 'Connect the concept to a realistic HKDSE ICT scenario.'];
  const isElectiveA = group.includes('Elective A');
  const isElectiveC = group.includes('Elective C');
  return {
    code,
    path: route[2],
    examLens: route[3],
    classroomTransfer: route[4],
    assessment: isElectiveA ? 'Paper 2A Databases: answer database design and SQL questions.'
      : isElectiveC ? 'Paper 2C Algorithm and Programming: trace, design, debug and explain algorithms.'
        : 'Paper 1 compulsory: Section A multiple-choice and Section B short/structured questions.'
  };
}

function renderUniversalChapterDetails(topicConfig, groupConfig) {
  resetCustomDetailPanels();
  const meta = getChapterCurriculumMeta(topicConfig, groupConfig);
  const cards = topicConfig.cards || groupConfig.cards || [];
  const concepts = topicConfig.concepts || topicConfig.keypoints || [];
  const formulae = topicConfig.formulae || [];
  topicCardGrid.onclick = null;
  topicCardGrid.innerHTML = `
    <div class="topic-section-banner universal-section-banner">
      <p class="eyebrow">HKDSE learning path</p>
      <h3>${escapeHtml(meta.code)}: learn, apply, transfer</h3>
      <p>${escapeHtml(topicConfig.focus || topicConfig.description || groupConfig.description || '')}</p>
    </div>
    <section class="universal-learning-path">
      ${renderUniversalRoute(meta)}
      ${renderUniversalZoneCards(cards)}
      ${renderUniversalConceptBlocks(concepts)}
      ${renderUniversalRuleCards(formulae)}
      ${renderUniversalDseTransfer(topicConfig, meta)}
    </section>
  `;
  setChapterSectionVisible(topicCardGrid, true);
}

function renderUniversalRoute(meta) {
  return `
    <div class="universal-route" aria-label="Learning sequence">
      ${meta.path.map((step, index) => `
        <article>
          <span>${index + 1}</span>
          <strong>${escapeHtml(step)}</strong>
        </article>
      `).join('')}
    </div>
  `;
}

function renderUniversalZoneCards(cards) {
  if (!cards.length) return '';
  return `
    <section class="universal-detail-section">
      <div class="universal-section-copy">
        <p class="eyebrow">Concept zones</p>
        <h3>Build the chapter in exam-sized pieces</h3>
      </div>
      <div class="universal-zone-grid">
        ${cards.map((item, index) => `
          <article class="universal-zone-card">
            <span class="universal-zone-index">${String(index + 1).padStart(2, '0')}</span>
            <h4>${escapeHtml(typeof item === 'string' ? item : item.title)}</h4>
            <p>${escapeHtml(typeof item === 'string' ? 'Use this zone to connect the key idea with a DSE-style example.' : item.body)}</p>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function chunkItems(items, size) {
  const result = [];
  for (let index = 0; index < items.length; index += size) result.push(items.slice(index, index + size));
  return result;
}

function renderUniversalConceptBlocks(concepts) {
  if (!concepts.length) return '';
  const labels = ['Must know', 'Can explain', 'Exam trap', 'Transfer'];
  return `
    <section class="universal-detail-section">
      <div class="universal-section-copy">
        <p class="eyebrow">Teacher-built notes</p>
        <h3>Turn bullet points into usable understanding</h3>
      </div>
      <div class="universal-concept-grid">
        ${chunkItems(concepts, 3).map((group, index) => `
          <article class="universal-concept-card">
            <strong>${escapeHtml(labels[index] || `Focus ${index + 1}`)}</strong>
            <ul>
              ${group.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
            </ul>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function renderUniversalRuleCards(formulae) {
  if (!formulae.length) return '';
  return `
    <section class="universal-detail-section">
      <div class="universal-section-copy">
        <p class="eyebrow">Rules and syntax</p>
        <h3>Keep exact forms visible</h3>
      </div>
      <div class="universal-rule-grid">
        ${formulae.map((formula, index) => `
          <article>
            <span>Rule ${index + 1}</span>
            <code>${escapeHtml(formula)}</code>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function renderUniversalDseTransfer(topicConfig, meta) {
  const activityCount = topicConfig.activities?.length || 0;
  const practiceCount = topicConfig.practice?.length || 0;
  return `
    <section class="universal-detail-section universal-dse-panel">
      <div class="universal-section-copy">
        <p class="eyebrow">DSE transfer</p>
        <h3>How this appears in assessment</h3>
      </div>
      <div class="universal-transfer-grid">
        <article>
          <strong>Assessment mode</strong>
          <p>${escapeHtml(meta.assessment)}</p>
        </article>
        <article>
          <strong>Exam lens</strong>
          <p>${escapeHtml(meta.examLens)}</p>
        </article>
        <article>
          <strong>Classroom transfer</strong>
          <p>${escapeHtml(meta.classroomTransfer)}</p>
        </article>
        <article>
          <strong>Practice path</strong>
          <p>${practiceCount ? `${practiceCount} checkpoint question${practiceCount > 1 ? 's' : ''} ready` : 'Checkpoint practice can be added later'}; ${activityCount ? `${activityCount} activity ${activityCount > 1 ? 'cards' : 'card'} ready` : 'Activities: To be added'}.</p>
        </article>
      </div>
    </section>
  `;
}

function resetCustomDetailPanels() {
  stopTopicSimulation();
  topicKeypointGrid.innerHTML = '';
  topicFormulaPanel.classList.add('hidden');
  topicFormulaPanel.innerHTML = '';
  topicExamGrid.innerHTML = '';
  topicSimulationPanel.classList.add('hidden');
  topicSimulationPanel.innerHTML = '';
  renderTopicSteps([]);
  setChapterSectionVisible(topicKeypointGrid, false);
  setChapterSectionVisible(topicFormulaPanel, false);
  setChapterSectionVisible(topicExamGrid, false);
  setChapterSectionVisible(topicSimulationPanel, false);
  setChapterSectionVisible(topicSteps, false);
}

function renderA2DataControlDetails(topicConfig) {
  resetCustomDetailPanels();
  topicCardGrid.innerHTML = `
    <div class="topic-section-banner a2-section-banner">
      <p class="eyebrow">DSE syllabus focus</p>
      <h3>Data quality learning path</h3>
      <p>Track how errors enter data, then choose validation, verification, input controls and error-detection methods with purpose.</p>
    </div>
    <div class="a2-learning-path">
      ${renderA2DataFlowMap()}
      ${renderA2ValidationToolbox()}
      ${renderA2VerificationComparison()}
      ${renderA2VerificationMethods()}
      ${renderA2InputGuide()}
      ${renderA2ErrorDetectionPanel()}
      ${renderA2OrganisationSupportPanel()}
    </div>
  `;
  bindA2DataControlDetails(topicConfig);
  setChapterSectionVisible(topicCardGrid, true);
}

function renderA2DataFlowMap() {
  const stages = [
    ['Real-world value', 'Intended mark: 81'],
    ['Data entry', 'Entered mark: 18'],
    ['Validation', 'Range 0-100 passes'],
    ['Accepted data', '18 is stored unless checked'],
    ['Verification', 'Compare with source mark'],
    ['Stored record', 'Corrected to 81'],
    ['Output', 'Wrong input gives wrong output: GIGO']
  ];
  return `
    <section class="a2-detail-section a2-data-flow">
      <div class="a4-section-copy">
        <p class="eyebrow">1. Where can data go wrong?</p>
        <h3>Follow the value from source to output</h3>
        <p>Validation can reject unacceptable values, but accepted values may still be the wrong real-world value.</p>
      </div>
      <div class="a2-flow-track" aria-label="Data quality flow">
        ${stages.map(([stage, note]) => `
          <article>
            <strong>${escapeHtml(stage)}</strong>
            <span>${escapeHtml(note)}</span>
          </article>
        `).join('')}
      </div>
      <div class="a4-warning-strip">
        <strong>Valid but wrong example</strong>
        <span>Intended mark 81, entered 18. A range check passes, but verification can find the transposition error.</span>
      </div>
    </section>
  `;
}

const a2ValidationGroups = [
  {
    group: 'Is something entered?',
    checks: [
      ['Presence check', 'Whether a required field has a value.', 'Student name must not be blank.', 'It cannot tell whether the entered name is correct.']
    ]
  },
  {
    group: 'Right kind?',
    checks: [
      ['Type check', 'Whether the value has the expected data type.', 'Age should be numeric.', 'A numeric value can still be the wrong age.'],
      ['Format check', 'Whether data follows a required pattern.', 'Date must be DD/MM/YYYY.', '12/06/2026 may pass even if 21/06/2026 was intended.'],
      ['Length check', 'Whether data has the required number of characters.', 'Student ID must be exactly 6 characters.', 'It cannot detect swapped digits such as 123456 instead of 123465.']
    ]
  },
  {
    group: 'Allowed?',
    checks: [
      ['Range check', 'Whether a numerical value is inside an allowed range.', 'Mark must be between 0 and 100.', 'A mark of 81 may pass even if the intended mark was 18.'],
      ['Fixed value / lookup check', 'Whether the value is chosen from an allowed list.', 'Class must be 4A, 4B, 4C or 4D.', 'A listed value can still be selected by mistake.'],
      ['Uniqueness check', 'Whether the value is not already used.', 'Student ID must not duplicate an existing record.', 'It does not prove the ID belongs to the current student.']
    ]
  },
  {
    group: 'Related values sensible?',
    checks: [
      ['Consistency check', 'Whether related fields agree with each other.', 'End time must be after start time.', 'It does not check whether the appointment itself is wanted.']
    ]
  },
  {
    group: 'Code passes calculation rule?',
    checks: [
      ['Check digit', 'Whether a calculated digit matches the rest of the code.', 'Product code or ISBN typed into a system.', 'It detects possible input errors but usually cannot correct them.']
    ]
  }
];

function renderA2ValidationToolbox() {
  const active = a2ValidationGroups.find(item => item.group === a2DetailsState.validationGroup) || a2ValidationGroups[0];
  return `
    <section class="a2-detail-section a2-validation-toolbox">
      <div class="a4-section-copy">
        <p class="eyebrow">2. Validation</p>
        <h3>Choose the check by what the rule examines</h3>
      </div>
      <div class="a2-check-tabs" role="tablist" aria-label="Validation check groups">
        ${a2ValidationGroups.map(item => `
          <button class="${item.group === active.group ? 'active' : ''}" type="button" data-a2-validation-group="${escapeHtml(item.group)}" aria-selected="${item.group === active.group ? 'true' : 'false'}">${escapeHtml(item.group)}</button>
        `).join('')}
      </div>
      <div class="a2-check-group">
        ${active.checks.map(([name, checks, example, limitation]) => `
          <article>
            <strong>${escapeHtml(name)}</strong>
            <p><b>Checks:</b> ${escapeHtml(checks)}</p>
            <p><b>Example:</b> ${escapeHtml(example)}</p>
            <small><b>Limitation:</b> ${escapeHtml(limitation)}</small>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function renderA2VerificationComparison() {
  return `
    <section class="a2-detail-section a2-validation-verification">
      <div class="a4-section-copy">
        <p class="eyebrow">3. Validation vs verification</p>
        <h3>Rules are not the same as source checking</h3>
      </div>
      <div class="a2-compare-grid">
        <article>
          <strong>Validation</strong>
          <p><b>Main question:</b> Is the data acceptable according to a rule?</p>
          <p><b>Usually performed by:</b> the system</p>
          <p><b>Examples:</b> range, format, length and lookup checks</p>
          <small>Cannot guarantee the data is true or intended.</small>
        </article>
        <article class="a2-important-card">
          <strong>Important</strong>
          <p>Date rule: DD/MM/YYYY</p>
          <p>Entered: 12/06/2026</p>
          <p>Intended: 21/06/2026</p>
          <small>Result: valid but wrong.</small>
        </article>
        <article>
          <strong>Verification</strong>
          <p><b>Main question:</b> Was the data entered or copied accurately?</p>
          <p><b>Usually performed by:</b> the system and/or a person</p>
          <p><b>Methods:</b> input twice, double data entry, proofreading</p>
          <small>Cannot guarantee the original source itself is correct.</small>
        </article>
      </div>
    </section>
  `;
}

function renderA2VerificationMethods() {
  const methods = [
    ['Inputting data twice', 'Same user enters the data twice; the system compares the two entries.'],
    ['Double data entry', 'Two operators enter data independently; the system compares both versions.'],
    ['Proofreading', 'Entered data is compared with the original source document.']
  ];
  return `
    <section class="a2-detail-section a2-method-comparison">
      <div class="a4-section-copy">
        <p class="eyebrow">4. Verification methods</p>
        <h3>Match the method to the copying risk</h3>
      </div>
      <div class="a2-method-grid">
        ${methods.map(([title, body]) => `<article><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></article>`).join('')}
      </div>
      <div class="a4-warning-strip">
        <strong>Common trap</strong>
        <span>Entering the same wrong value twice may still produce two matching entries.</span>
      </div>
    </section>
  `;
}

function renderA2InputGuide() {
  const controls = [
    ['One choice from a fixed list', 'Radio buttons or drop-down list'],
    ['Several choices', 'Checkboxes'],
    ['Date', 'Date picker'],
    ['Free-form name, email or ID', 'Text box plus suitable validation']
  ];
  return `
    <section class="a2-detail-section a2-input-guide">
      <div class="a4-section-copy">
        <p class="eyebrow">5. Input design</p>
        <h3>Prevent avoidable errors before validation</h3>
      </div>
      <div class="a2-input-control-grid">
        ${controls.map(([need, control]) => `<article><span>${escapeHtml(need)}</span><strong>${escapeHtml(control)}</strong></article>`).join('')}
      </div>
      <p class="a2-link-note">Try the Form Design Lab below to practise choosing controls and validation checks together.</p>
    </section>
  `;
}

function renderA2ErrorDetectionPanel() {
  return `
    <section class="a2-detail-section a2-error-detection">
      <div class="a4-section-copy">
        <p class="eyebrow">6. Error detection</p>
        <h3>Separate check digit from parity bit</h3>
      </div>
      <div class="a2-compare-grid two-col">
        <article>
          <strong>Check digit</strong>
          <p>Part of a code or identifier, recalculated from the other digits.</p>
          <p>Helps detect input errors in product codes, ISBNs and identification numbers.</p>
          <small>Used when a code is entered or scanned into a system.</small>
        </article>
        <article>
          <strong>Parity bit</strong>
          <p>Added to binary data during data transmission using even or odd parity.</p>
          <p>Can detect many bit errors, but cannot locate or correct the wrong bit.</p>
          <small>May miss an even number of changed bits.</small>
        </article>
      </div>
    </section>
  `;
}

function renderA2OrganisationSupportPanel() {
  const terms = ['field', 'record', 'file/table', 'database', 'sequential access', 'direct access', 'organise', 'store', 'retrieve'];
  return `
    <section class="a2-detail-section a2-supporting-panel">
      <button class="a2-support-toggle" type="button" data-a2-support-toggle aria-expanded="${a2DetailsState.supportOpen ? 'true' : 'false'}">
        <span>Supporting data organisation ideas</span>
        <strong>${a2DetailsState.supportOpen ? 'Hide' : 'Show'}</strong>
      </button>
      ${a2DetailsState.supportOpen ? `
        <div class="a2-support-grid">
          ${terms.map(term => `<span>${escapeHtml(term)}</span>`).join('')}
        </div>
        <p class="a2-link-note">These ideas remain examinable context, but validation and verification are the main learning focus in this chapter.</p>
      ` : ''}
    </section>
  `;
}

function bindA2DataControlDetails(topicConfig) {
  topicCardGrid.onclick = event => {
    const groupButton = event.target.closest('[data-a2-validation-group]');
    if (groupButton) {
      a2DetailsState.validationGroup = groupButton.dataset.a2ValidationGroup;
      renderA2DataControlDetails(topicConfig);
      return;
    }
    if (event.target.closest('[data-a2-support-toggle]')) {
      a2DetailsState.supportOpen = !a2DetailsState.supportOpen;
      renderA2DataControlDetails(topicConfig);
    }
  };
}

function renderA3DataRepresentationDetails(topicConfig) {
  resetCustomDetailPanels();
  topicCardGrid.innerHTML = `
    <div class="topic-section-banner a3-section-banner">
      <p class="eyebrow">DSE syllabus focus</p>
      <h3>NUMBERS → CODES → MEDIA</h3>
      <p>Build the number foundations first, then connect character/coded data and media file-size decisions.</p>
    </div>
    <div class="a3-learning-zones">
      ${renderA3NumberSystemsSection()}
      ${renderA3TextAndCodesSection()}
      ${renderA3DigitisationSection()}
      ${renderA3FormulaShelf()}
      ${renderA3FormatChooser()}
    </div>
  `;
  bindA3DataRepresentationDetails(topicConfig);
  setChapterSectionVisible(topicCardGrid, true);
}

function renderA3NumberSystemsSection() {
  return `
    <section class="a3-detail-section a3-number-map">
      <div class="a4-section-copy">
        <p class="eyebrow">A. NUMBERS</p>
        <h3>Binary, hexadecimal, two’s complement and overflow</h3>
      </div>
      <div class="a3-number-grid">
        ${[
          ['Binary', 'Base 2', 'Digits 0-1'],
          ['Denary', 'Base 10', 'Digits 0-9'],
          ['Hexadecimal', 'Base 16', 'Digits 0-9 and A-F']
        ].map(([name, base, digits]) => `<article><strong>${escapeHtml(name)}</strong><span>${escapeHtml(base)}</span><small>${escapeHtml(digits)}</small></article>`).join('')}
        <article class="a3-number-rule"><strong>1 hexadecimal digit</strong><span>= 4 bits</span></article>
      </div>
      <div class="a3-pattern-strip" aria-label="Pattern capacity">
        ${[1, 2, 3, 4].map(bits => `<span><strong>${bits} bit${bits > 1 ? 's' : ''}</strong>${2 ** bits} patterns</span>`).join('')}
        <code>Number of patterns = 2^b</code>
      </div>
      <div class="a3-range-grid">
        <article><strong>8-bit unsigned</strong><code>0000 0000 to 1111 1111</code><span>0 to 255</span></article>
        <article><strong>8-bit two’s complement</strong><code>1000 0000 to 0111 1111</code><span>-128 to 127</span></article>
        <article class="a3-range-meter"><strong>Overflow example</strong><span>64 + 64 = 128</span><meter min="-128" max="127" value="127"></meter><small>128 is outside the 8-bit two’s complement maximum 127.</small></article>
      </div>
    </section>
  `;
}

function renderA3TextAndCodesSection() {
  return `
    <section class="a3-detail-section a3-code-comparison">
      <div class="a4-section-copy">
        <p class="eyebrow">B. CODES</p>
        <h3>Characters, QR codes, barcodes and units</h3>
      </div>
      <div class="a3-code-grid">
        <article><strong>ASCII</strong><p>Mainly basic English characters; 7 bits to 1 byte per character.</p></article>
        <article><strong>Big5 / GB</strong><p>Chinese character sets; commonly 2 bytes per character.</p></article>
        <article><strong>Unicode</strong><p>Supports many languages and symbols; may use 1 to 4 bytes.</p></article>
      </div>
      <div class="a3-code-grid two-col">
        <article><strong>Barcode</strong><p>One-dimensional, limited capacity, usually scanned from fixed directions.</p></article>
        <article><strong>QR code</strong><p>Two-dimensional, higher capacity, can be scanned from many directions and has error correction.</p><small>Trap: a QR code is not simply a prettier barcode.</small></article>
      </div>
      <div class="a3-unit-split">
        <span><strong>Storage units</strong> 1 KB = 1024 B; 1 MB = 1024 KB</span>
        <span><strong>Transfer-rate units</strong> 1 kbps = 1000 bps; 1 Mbps = 1000 kbps</span>
      </div>
    </section>
  `;
}

function renderA3DigitisationSection() {
  return `
    <section class="a3-detail-section a3-digitisation-flow">
      <div class="a4-section-copy">
        <p class="eyebrow">C. MEDIA</p>
        <h3>Digitisation and media data</h3>
      </div>
      <div class="a3-media-flow">
        ${['Analogue source', 'sampling', 'Samples', 'quantisation', 'Numeric levels', 'coding', 'Binary data'].map((item, index) => `
          <span class="${index % 2 ? 'process' : ''}">${escapeHtml(item)}</span>
        `).join('')}
      </div>
      <div class="a3-code-grid three-col">
        <article><strong>Images</strong><p>Resolution, RGB colour depth, bitmap/vector, compression, transparency and animation.</p></article>
        <article><strong>Audio</strong><p>Sampling rate, bit depth, channels, duration and compression.</p></article>
        <article><strong>Video</strong><p>Frames, audio, resolution, frame rate and compression.</p></article>
      </div>
      <div class="a4-rule-strip">
        <strong>Separate the effects</strong>
        <span>Sampling rate measures how often a signal is sampled. Bit depth controls how many levels each sample can use.</span>
      </div>
    </section>
  `;
}

function renderA3FormulaShelf() {
  const cards = [
    ['Image', 'width x height x colour depth / 8', 'bytes', 'Do not forget to divide by 8 when converting bits to bytes.'],
    ['Audio', 'sampling rate x bit depth x channels x duration / 8', 'bytes', 'Keep duration in seconds unless the question says otherwise.'],
    ['Ranges', 'two’s complement: -2^(n-1) to 2^(n-1)-1', 'integers', 'Do not use the unsigned range for signed values.'],
    ['Patterns', '2^b', 'patterns', 'Round up when a whole number of bits is required.']
  ];
  return `
    <section class="a3-detail-section a3-formula-shelf">
      <div class="a4-section-copy">
        <p class="eyebrow">D. Formula shelf</p>
        <h3>Choose the formula by task</h3>
      </div>
      <div class="a3-formula-grid">
        ${cards.map(([title, formula, unit, trap]) => `
          <article>
            <strong>${escapeHtml(title)}</strong>
            <code>${escapeHtml(formula)}</code>
            <span>Unit: ${escapeHtml(unit)}</span>
            <small>${escapeHtml(trap)}</small>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

const a3FormatGroups = {
  Text: [
    ['TXT', 'Plain text, small and simple, no rich formatting.'],
    ['DOCX / PDF', 'Formatted text for layout, headings, images and sharing.']
  ],
  Image: [
    ['JPEG', 'Lossy; good for photographs; no transparency.'],
    ['PNG', 'Lossless; supports transparency.'],
    ['GIF', 'Limited colours; supports animation.'],
    ['SVG', 'Vector; suitable for logos and scalable graphics.'],
    ['BMP', 'Usually uncompressed; large file size.']
  ],
  Audio: [
    ['WAV', 'Uncompressed; large but high fidelity.'],
    ['MP3 / AAC / OGG', 'Lossy; smaller file size for distribution.'],
    ['FLAC / ALAC', 'Lossless; exact recovery with compression.']
  ],
  Video: [
    ['MP4', 'Lossy; common for sharing and streaming.'],
    ['AVI', 'Often uncompressed; large file size.'],
    ['WebM / FLV', 'May be lossy or lossless depending on settings.']
  ]
};

function renderA3FormatChooser() {
  const active = a3FormatGroups[a3DetailsState.formatCategory] ? a3DetailsState.formatCategory : 'Image';
  return `
    <section class="a3-detail-section a3-format-tabs">
      <div class="a4-section-copy">
        <p class="eyebrow">E. File-format chooser</p>
        <h3>Select by purpose, not by memory</h3>
      </div>
      <div class="a2-check-tabs" role="tablist" aria-label="File format categories">
        ${Object.keys(a3FormatGroups).map(category => `
          <button class="${category === active ? 'active' : ''}" type="button" data-a3-format-category="${escapeHtml(category)}" aria-selected="${category === active ? 'true' : 'false'}">${escapeHtml(category)}</button>
        `).join('')}
      </div>
      <div class="a3-format-grid">
        ${a3FormatGroups[active].map(([name, body]) => `<article><strong>${escapeHtml(name)}</strong><p>${escapeHtml(body)}</p></article>`).join('')}
      </div>
    </section>
  `;
}

function bindA3DataRepresentationDetails(topicConfig) {
  topicCardGrid.onclick = event => {
    const tab = event.target.closest('[data-a3-format-category]');
    if (tab) {
      a3DetailsState.formatCategory = tab.dataset.a3FormatCategory;
      renderA3DataRepresentationDetails(topicConfig);
    }
  };
}

function renderA5SimpleDatabaseDetails(topicConfig) {
  resetCustomDetailPanels();
  topicCardGrid.innerHTML = `
    <div class="topic-section-banner a5-section-banner">
      <p class="eyebrow">DSE syllabus focus</p>
      <h3>Database objects → fields → queries</h3>
      <p>Use tables, forms, queries and reports with suitable field settings so records can be entered, filtered, summarised and printed accurately.</p>
    </div>
    <div class="a5-learning-path">
      ${renderA5ObjectStudio()}
      ${renderA5FieldSettings()}
      ${renderA5QueryAnatomy()}
      ${renderA5Toolbox()}
      ${renderA5MisconceptionPanel()}
      ${renderA5DsePanel()}
    </div>
  `;
  bindA5SimpleDatabaseDetails(topicConfig);
  setChapterSectionVisible(topicCardGrid, true);
}

function renderA5ObjectStudio() {
  const objects = [
    ['Table', 'Stores records in rows and fields in columns.', ['MEMBERID', 'MNAME', 'CREDIT']],
    ['Form', 'Shows one record at a time for friendly data entry.', ['MEMBERID: 1', 'MNAME: Chan Tai Man', 'CREDIT: 3261.1']],
    ['Report', 'Formats selected data for printing or presentation.', ['Grouped list', 'Summary totals', 'Printable layout']],
    ['Query', 'Filters, sorts, summarises, updates or deletes data.', ['SELECT', 'WHERE', 'ORDER BY']]
  ];
  return `
    <section class="a5-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">1. Database objects</p>
        <h3>Choose the object by the task</h3>
        <p>Students often mix up form, query and report. Anchor each object to its purpose first.</p>
      </div>
      <div class="a5-object-grid">
        ${objects.map(([name, purpose, rows]) => `
          <article class="a5-object-card">
            <strong>${escapeHtml(name)}</strong>
            <p>${escapeHtml(purpose)}</p>
            <div class="a5-mini-table">
              ${rows.map(row => `<span>${escapeHtml(row)}</span>`).join('')}
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function renderA5FieldSettings() {
  return `
    <section class="a5-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">2. Field settings</p>
        <h3>Data type and input mask reduce bad data</h3>
        <p>A good database field is not just a column name. It has a suitable data type, field size, validation pattern and sometimes a key role.</p>
      </div>
      <div class="a5-field-layout">
        <div class="a5-table-card">
          <strong>Common data types</strong>
          <div class="a5-data-type-list">
            ${a5DataTypes.map(([type, example, use]) => `
              <article>
                <span>${escapeHtml(type)}</span>
                <code>${escapeHtml(example)}</code>
                <p>${escapeHtml(use)}</p>
              </article>
            `).join('')}
          </div>
        </div>
        <div class="a5-table-card">
          <strong>Input mask examples</strong>
          <div class="a5-mask-table">
            ${a5InputMasks.map(([item, mask, example]) => `
              <article>
                <span>${escapeHtml(item)}</span>
                <code>${escapeHtml(mask)}</code>
                <b>${escapeHtml(example)}</b>
              </article>
            `).join('')}
          </div>
        </div>
      </div>
      <div class="a4-warning-strip">
        <strong>DSE trap</strong>
        <span>Numeric-looking data is not always Number. A phone number, student ID or class code is often Text because it is not used for arithmetic.</span>
      </div>
    </section>
  `;
}

function renderA5QueryAnatomy() {
  const parts = [
    ['SELECT', 'MNAME', 'fields / expressions'],
    ['FROM', 'MEMBER', 'table'],
    ['WHERE', "SEX = 'M'", 'filtering criteria'],
    ['GROUP BY', 'LOCATION', 'grouping field'],
    ['ORDER BY', 'AGE', 'sorting criteria']
  ];
  return `
    <section class="a5-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">3. Query reading</p>
        <h3>Read SQL as a labelled sentence</h3>
        <p>Core A5 students should identify the fields, table, criteria, grouping and sorting before worrying about advanced syntax.</p>
      </div>
      <div class="a5-query-strip" aria-label="SQL query anatomy">
        ${parts.map(([keyword, value, label]) => `
          <article>
            <span>${escapeHtml(keyword)}</span>
            <code>${escapeHtml(value)}</code>
            <small>${escapeHtml(label)}</small>
          </article>
        `).join('')}
      </div>
      <div class="a4-rule-strip">
        <strong>Example meaning</strong>
        <span>Select male members, group them by location, and sort the result by age.</span>
      </div>
    </section>
  `;
}

function renderA5Toolbox() {
  const active = a5ToolboxGroups.find(group => group.name === a5DetailsState.toolbox) || a5ToolboxGroups[0];
  return `
    <section class="a5-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">4. Operator and function toolbox</p>
        <h3>Match the tool to the query purpose</h3>
      </div>
      <div class="a5-tool-tabs" aria-label="A5 query toolbox categories">
        ${a5ToolboxGroups.map(group => `
          <button class="${group.name === active.name ? 'active' : ''}" type="button" data-a5-toolbox="${escapeHtml(group.name)}">${escapeHtml(group.name)}</button>
        `).join('')}
      </div>
      <div class="a5-tool-grid">
        ${active.items.map(([name, meaning]) => `
          <article>
            <code>${escapeHtml(name)}</code>
            <p>${escapeHtml(meaning)}</p>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function renderA5MisconceptionPanel() {
  return `
    <section class="a5-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">5. Misconceptions</p>
        <h3>Two traps from chapter exercises</h3>
      </div>
      <div class="a5-trap-grid">
        <article>
          <strong>Zero vs NULL</strong>
          <div class="a5-null-demo">
            <span>ID 302</span><span>Score: 0</span><b class="wrong">Stored value</b>
            <span>ID 302</span><span>Score: NULL</span><b class="right">Missing value</b>
          </div>
          <p>0 means the value is known and equal to zero. NULL means no value is stored.</p>
        </article>
        <article>
          <strong>Primary key vs composite key</strong>
          <div class="a5-key-demo">
            <span>ENAME</span><span>CLASS</span><span>CNO</span>
            <b>Zack</b><b>1A</b><b>21</b>
            <b>Yoda</b><b>1A</b><b>22</b>
            <b>Xeno</b><b>1B</b><b>22</b>
          </div>
          <p>A name alone may duplicate. A combined key such as ENAME + CLASS + CNO may identify each record when the combination is unique.</p>
        </article>
      </div>
    </section>
  `;
}

function renderA5DsePanel() {
  return `
    <section class="a5-detail-section a5-dse-panel">
      <div class="a4-section-copy">
        <p class="eyebrow">6. DSE transfer</p>
        <h3>How this chapter is examined</h3>
      </div>
      <div class="a5-dse-grid">
        <article><strong>MC trap</strong><p>Essential table design includes field names, data types and a primary key. Input masks are useful but not always essential.</p></article>
        <article><strong>Scenario reason</strong><p>Store a registration date instead of days-after-registration because elapsed days change every day and can be calculated when needed.</p></article>
        <article><strong>SQL reading</strong><p>Explain the result of SELECT, WHERE, GROUP BY and ORDER BY in words before choosing an answer.</p></article>
      </div>
    </section>
  `;
}

function bindA5SimpleDatabaseDetails(topicConfig) {
  topicCardGrid.onclick = event => {
    const tab = event.target.closest('[data-a5-toolbox]');
    if (!tab) return;
    a5DetailsState.toolbox = tab.dataset.a5Toolbox;
    renderA5SimpleDatabaseDetails(topicConfig);
  };
}

function renderB1InputOutputDetails(topicConfig) {
  resetCustomDetailPanels();
  topicCardGrid.innerHTML = `
    <div class="topic-section-banner b1-section-banner">
      <p class="eyebrow">DSE syllabus focus</p>
      <h3>Input → process → output</h3>
      <p>Choose devices by the role they play in the IPO cycle, the kind of data handled, the connection method and the scenario need.</p>
    </div>
    <div class="b1-learning-path">
      ${renderB1IpoCycle()}
      ${renderB1DeviceMap()}
      ${renderB1Connections()}
      ${renderB1OutputGuide()}
      ${renderB1Applications()}
      ${renderB1DsePanel()}
    </div>
  `;
  topicCardGrid.onclick = null;
  setChapterSectionVisible(topicCardGrid, true);
}

function renderB1IpoCycle() {
  return `
    <section class="b1-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">1. IPO cycle</p>
        <h3>Data becomes information through processing</h3>
        <p>Input devices capture data. Programs process it. Storage may be retrieved or updated. Output devices present meaningful information.</p>
      </div>
      <div class="b1-ipo-flow" aria-label="Input process output cycle">
        <article><span>Input</span><strong>Data enters the computer</strong></article>
        <article><span>Process</span><strong>Program processes data</strong></article>
        <article><span>Output</span><strong>Information is presented</strong></article>
        <article class="b1-storage-node"><span>Storage</span><strong>Retrieve / update data</strong></article>
        <article class="b1-program-node"><span>Program</span><strong>Controls the processing</strong></article>
      </div>
    </section>
  `;
}

function renderB1DeviceMap() {
  return `
    <section class="b1-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">2. Input and output device families</p>
        <h3>Classify before choosing</h3>
      </div>
      <div class="b1-device-grid">
        ${b1DeviceGroups.map(group => `
          <article class="b1-device-card">
            <strong>${escapeHtml(group.name)}</strong>
            <p>${escapeHtml(group.note)}</p>
            <div>
              ${group.items.map(([name, detail]) => `
                <span><b>${escapeHtml(name)}</b>${escapeHtml(detail)}</span>
              `).join('')}
            </div>
          </article>
        `).join('')}
      </div>
      <div class="a4-warning-strip">
        <strong>Common confusion</strong>
        <span>OCR reads characters, OMR reads shaded marks, and speech recognition uses audio. They are not interchangeable.</span>
      </div>
    </section>
  `;
}

function renderB1Connections() {
  return `
    <section class="b1-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">3. Connection methods</p>
        <h3>Wired and wireless are part of the device choice</h3>
      </div>
      <div class="b1-connection-table">
        ${b1ConnectionRows.map(([type, example, method]) => `
          <article>
            <span>${escapeHtml(type)}</span>
            <strong>${escapeHtml(example)}</strong>
            <p>${escapeHtml(method)}</p>
          </article>
        `).join('')}
      </div>
      <div class="a4-rule-strip">
        <strong>DSE trap</strong>
        <span>USB, 3.5 mm jack and Bluetooth are common for headphones. Wi-Fi is not usually the direct headphone connection in this context.</span>
      </div>
    </section>
  `;
}

function renderB1OutputGuide() {
  return `
    <section class="b1-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">4. Output device details</p>
        <h3>Monitor, printer, projector and sound output</h3>
      </div>
      <div class="b1-output-layout">
        <article>
          <strong>Monitor comparison</strong>
          <div class="b1-monitor-grid">
            <span><b>LCD</b>Lower price; more screen-size options.</span>
            <span><b>OLED</b>Higher contrast, brightness consistency, wider viewing angle and lighter/flexible designs.</span>
          </div>
        </article>
        <article>
          <strong>Monitor ports</strong>
          <div class="b1-port-grid">
            ${b1MonitorPorts.map(([port, audio, resolution]) => `
              <span><b>${escapeHtml(port)}</b>${escapeHtml(audio)} · ${escapeHtml(resolution)}</span>
            `).join('')}
          </div>
        </article>
        <article>
          <strong>Printer types</strong>
          <p>Thermal printer, inkjet printer, laser printer, plotter and 3D printer produce hard copy or physical output for different purposes.</p>
        </article>
        <article>
          <strong>Projector and audio</strong>
          <p>Projectors show images on a surface. Speakers, headphones and earphones output sound; some headphones also include microphones.</p>
        </article>
      </div>
    </section>
  `;
}

function renderB1Applications() {
  return `
    <section class="b1-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">5. Scenario applications</p>
        <h3>Use scenario words to justify the device</h3>
      </div>
      <div class="b1-application-grid">
        ${b1Applications.map(([title, body]) => `<article><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></article>`).join('')}
      </div>
    </section>
  `;
}

function renderB1DsePanel() {
  const traps = [
    ['Comic illustrations', 'Graphics tablet is the best fit because the task is drawing.'],
    ['Online lessons', 'Monitor, webcam and printer may all be used, but only webcam is input.'],
    ['Overheated drill', 'Temperature sensor detects overheating.'],
    ['Chinese input', 'Printer is not an input device; microphone, handwriting tablet and scanner may input data in different ways.'],
    ['Virtual keyboard', 'Mainly useful on portable/touch devices to save physical space; not more ergonomic by default.']
  ];
  return `
    <section class="b1-detail-section b1-dse-panel">
      <div class="a4-section-copy">
        <p class="eyebrow">6. DSE transfer</p>
        <h3>Exercise traps to recognise</h3>
      </div>
      <div class="b1-dse-grid">
        ${traps.map(([title, body]) => `<article><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></article>`).join('')}
      </div>
    </section>
  `;
}

function renderB2ComputerHardwareDetails(topicConfig) {
  resetCustomDetailPanels();
  topicCardGrid.innerHTML = `
    <div class="topic-section-banner b2-section-banner">
      <p class="eyebrow">DSE syllabus focus</p>
      <h3>System unit -> CPU operation -> storage choice</h3>
      <p>Link each hardware component to its role, then use buses, memory hierarchy and storage attributes to explain performance and suitability.</p>
    </div>
    <div class="b2-learning-path">
      ${renderB2SystemUnit()}
      ${renderB2CpuAndBus()}
      ${renderB2MemoryStorage()}
      ${renderB2MisconceptionPanel()}
      ${renderB2DsePanel()}
    </div>
  `;
  bindB2ComputerHardwareDetails();
  setChapterSectionVisible(topicCardGrid, true);
}

function renderB2SystemUnit() {
  return `
    <section class="b2-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">1. System unit</p>
        <h3>Name the part, then state the function</h3>
        <p>DSE questions often ask students to identify a component from a diagram and explain why it is needed.</p>
      </div>
      <div class="b2-component-grid">
        ${b2Components.map(([name, functionText], index) => `
          <article class="b2-component-card" style="--component-index:${index + 1}">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <strong>${escapeHtml(name)}</strong>
            <p>${escapeHtml(functionText)}</p>
          </article>
        `).join('')}
      </div>
      ${renderB2PcComponentExplorer()}
      <div class="b2-performance-grid">
        <article>
          <strong>CPU vs GPU</strong>
          <p>A CPU handles many general tasks. A GPU is more specialised for graphics rendering and has many cores for highly parallel graphics work.</p>
        </article>
        <article>
          <strong>Graphics card vs iGPU</strong>
          <p>Graphics card: higher graphics processing power for CAD, video editing and gaming. iGPU: lower cost and energy use for general word processing.</p>
        </article>
      </div>
    </section>
  `;
}

function renderB2PcComponentExplorer() {
  const first = b2PcHotspots[0];
  return `
    <div class="b2-pc-explorer" aria-label="Clickable PC component explorer">
      <div class="b2-pc-case">
        <div class="b2-pc-case-label">System unit</div>
        <div class="b2-pc-board"></div>
        <div class="b2-pc-cables" aria-hidden="true"></div>
        ${b2PcHotspots.map((component, index) => `
          <button
            class="b2-pc-hotspot ${index === 0 ? 'active' : ''} b2-pc-${escapeHtml(component.key)}"
            type="button"
            style="${escapeHtml(component.style)}"
            data-b2-component="${index}"
            aria-pressed="${index === 0 ? 'true' : 'false'}"
          >
            <span>${escapeHtml(component.label)}</span>
          </button>
        `).join('')}
      </div>
      <article class="b2-pc-info" aria-live="polite">
        <p class="eyebrow">Click a component</p>
        <h4 data-b2-component-name>${escapeHtml(first.name)}</h4>
        <p data-b2-component-purpose>${escapeHtml(first.purpose)}</p>
        <div class="a4-rule-strip">
          <strong>DSE wording</strong>
          <span data-b2-component-dse>${escapeHtml(first.dse)}</span>
        </div>
      </article>
    </div>
  `;
}

function bindB2ComputerHardwareDetails() {
  topicCardGrid.onclick = event => {
    const hotspot = event.target.closest('[data-b2-component]');
    if (!hotspot) return;
    const component = b2PcHotspots[Number(hotspot.dataset.b2Component)];
    if (!component) return;
    topicCardGrid.querySelectorAll('[data-b2-component]').forEach(button => {
      const active = button === hotspot;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const nameNode = topicCardGrid.querySelector('[data-b2-component-name]');
    const purposeNode = topicCardGrid.querySelector('[data-b2-component-purpose]');
    const dseNode = topicCardGrid.querySelector('[data-b2-component-dse]');
    if (nameNode) nameNode.textContent = component.name;
    if (purposeNode) purposeNode.textContent = component.purpose;
    if (dseNode) dseNode.textContent = component.dse;
    const info = topicCardGrid.querySelector('.b2-pc-info');
    if (info) {
      info.classList.remove('is-updated');
      void info.offsetWidth;
      info.classList.add('is-updated');
    }
  };
}

function renderB2CpuAndBus() {
  return `
    <section class="b2-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">2. CPU operation</p>
        <h3>Follow the data movement</h3>
      </div>
      <div class="b2-cycle-flow" aria-label="Machine cycle">
        <article><span>Fetch</span><strong>RAM</strong><p>Instruction is fetched from memory.</p></article>
        <article><span>Decode</span><strong>CU</strong><p>Control Unit decodes what to do.</p></article>
        <article><span>Execute</span><strong>ALU</strong><p>Arithmetic Logic Unit performs the operation.</p></article>
        <article><span>Store</span><strong>RAM</strong><p>Result may be stored back in memory.</p></article>
      </div>
      <div class="b2-bus-grid">
        <article class="b2-table-card">
          <strong>System bus</strong>
          <div class="b2-bus-table">
            <span>Type</span><span>Object to transfer</span><span>Direction</span>
            ${b2BusRows.map(row => row.map(cell => `<b>${escapeHtml(cell)}</b>`).join('')).join('')}
          </div>
        </article>
        <article>
          <strong>Clock rate</strong>
          <p>The number of clock cycles a CPU performs in one second.</p>
        </article>
        <article>
          <strong>Number of cores</strong>
          <p>Determines how many processes or tasks may run at the same time, depending on software and workload.</p>
        </article>
        <article>
          <strong>Word length</strong>
          <p>The number of bits processed by a CPU each time. A longer word length can address more memory, but performance is not doubled automatically.</p>
        </article>
      </div>
    </section>
  `;
}

function renderB2MemoryStorage() {
  return `
    <section class="b2-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">3. Memory and storage</p>
        <h3>Fast, large and cheap cannot all be maximised</h3>
      </div>
      <div class="b2-memory-layout">
        <article class="b2-memory-pyramid" aria-label="Memory hierarchy">
          ${b2MemoryLevels.map((level, index) => `<span style="--level:${index + 1}">${escapeHtml(level)}</span>`).join('')}
          <p>Upwards: higher access rate, smaller capacity and higher unit price per capacity.</p>
        </article>
        <article class="b2-table-card">
          <strong>Main memory</strong>
          <div class="b2-main-memory">
            <span><b>RAM</b>Volatile; can be rewritten at high speed; stores data temporarily for processing.</span>
            <span><b>ROM</b>Non-volatile; usually cannot be rewritten; stores firmware needed to start a computer.</span>
          </div>
        </article>
      </div>
      <div class="b2-cpu-distance-panel">
        <div class="a4-section-copy">
          <p class="eyebrow">Memory speed memory aid</p>
          <h4>Closer to CPU, faster to access</h4>
          <p>Use this only as an easy way to remember the order. It is not an acceptable DSE explanation by itself.</p>
        </div>
        <div class="b2-distance-map" aria-label="Data access speed ranked by distance from CPU">
          <article class="cpu-node"><strong>CPU</strong><span>processing</span></article>
          <article style="--rank:1"><strong>Register</strong><span>inside CPU</span><b>Fastest access</b></article>
          <article style="--rank:2"><strong>Cache memory</strong><span>very close to CPU</span><b>Very fast</b></article>
          <article style="--rank:3"><strong>RAM</strong><span>main memory</span><b>Fast, but slower than cache</b></article>
        </div>
        <div class="b2-dse-warning">
          <strong>Do not write this in DSE:</strong>
          <span>"Register is fastest because it is nearest to the CPU."</span>
          <strong>Write this instead:</strong>
          <span>Register has the highest data access rate; cache memory stores frequently used data/instructions for quick access; RAM stores data temporarily for processing.</span>
        </div>
      </div>
      <div class="b2-storage-table">
        <span>Device</span><span>Media</span><span>Size</span><span>Price</span><span>Access</span><span>Speed</span><span>Durability</span>
        ${b2StorageRows.map(row => row.map(cell => `<b>${escapeHtml(cell)}</b>`).join('')).join('')}
      </div>
    </section>
  `;
}

function renderB2MisconceptionPanel() {
  return `
    <section class="b2-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">4. Misconceptions</p>
        <h3>Small wording changes matter</h3>
      </div>
      <div class="b2-trap-grid">
        <article>
          <strong><span>Wrong</span>64-bit is twice as efficient as 32-bit</strong>
          <p>A 64-bit processor can address more memory and handle more complex functions, but performance is not linearly proportional to word length.</p>
        </article>
        <article>
          <strong><span>Wrong</span>Direct access cannot be sequential</strong>
          <p>Devices that support direct access can also read records in sequence. Direct access means they can jump to a location without starting from the beginning.</p>
        </article>
      </div>
    </section>
  `;
}

function renderB2DsePanel() {
  const prompts = [
    ['Bus role', 'Address bus transfers memory addresses; data bus transfers data or instructions; control bus transfers control signals.'],
    ['Storage choice', 'Magnetic tape is suitable for very large backup with sequential access. SSD is faster and durable but has higher unit price.'],
    ['Upgrade scenario', 'Use the actual task: video editing/gaming may need a graphics card; general office work can use an iGPU.'],
    ['Word length', 'Explain memory addressing and complexity, not simply "twice as fast".']
  ];
  return `
    <section class="b2-detail-section b2-dse-panel">
      <div class="a4-section-copy">
        <p class="eyebrow">5. DSE transfer</p>
        <h3>How this chapter is examined</h3>
      </div>
      <div class="b2-dse-grid">
        ${prompts.map(([title, body]) => `<article><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></article>`).join('')}
      </div>
    </section>
  `;
}

function renderB3ComputerSoftwareDetails(topicConfig) {
  resetCustomDetailPanels();
  topicCardGrid.innerHTML = `
    <div class="topic-section-banner b3-section-banner">
      <p class="eyebrow">DSE syllabus focus</p>
      <h3>Software role -> OS services -> processing mode</h3>
      <p>Separate system software from application software, then use utility programs, drivers and processing modes to solve scenario questions.</p>
    </div>
    <div class="b3-learning-path">
      ${renderB3SystemStack()}
      ${renderB3OperatingSystemPanel()}
      ${renderB3SoftwareComparison()}
      ${renderB3UtilityDriverPanel()}
      ${renderB3ProcessingModes()}
      ${renderB3DsePanel()}
    </div>
  `;
  topicCardGrid.onclick = null;
  setChapterSectionVisible(topicCardGrid, true);
}

function renderB3SystemStack() {
  return `
    <section class="b3-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">1. Computer system stack</p>
        <h3>Who depends on whom?</h3>
      </div>
      <div class="b3-stack" aria-label="Computer software relationship">
        <article><strong>User</strong></article>
        <span>uses</span>
        <article><strong>Application software</strong></article>
        <span>runs on a platform provided by</span>
        <article><strong>System software</strong></article>
        <span>controls</span>
        <article><strong>Hardware</strong></article>
      </div>
    </section>
  `;
}

function renderB3OperatingSystemPanel() {
  return `
    <section class="b3-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">2. Operating system</p>
        <h3>The OS manages resources and users</h3>
      </div>
      <div class="b3-os-grid">
        ${b3OsFunctions.map(item => `<article><span>OS</span><strong>${escapeHtml(item)}</strong></article>`).join('')}
      </div>
      <div class="a4-warning-strip">
        <strong>DSE trap</strong>
        <span>Checking viruses is normally done by a utility program, not listed as a primary OS function.</span>
      </div>
    </section>
  `;
}

function renderB3SoftwareComparison() {
  const rows = [
    ['Example', 'Microsoft Windows, macOS', 'Microsoft Excel, Adobe Photoshop'],
    ['Usage', 'Controls hardware operation.', 'Allows users to perform specific tasks.'],
    ['Dependence', 'Manages resources and provides a platform for application software.', 'Runs on a platform provided by system software.'],
    ['Programming language', 'Usually written in low-level languages.', 'Usually written in high-level languages.']
  ];
  return `
    <section class="b3-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">3. System vs application software</p>
        <h3>Compare by role, not by brand</h3>
      </div>
      <div class="b3-comparison-grid">
        <span>Attribute</span><span>System software</span><span>Application software</span>
        ${rows.map(row => row.map(cell => `<b>${escapeHtml(cell)}</b>`).join('')).join('')}
      </div>
      <div class="b3-interface-grid">
        <article><strong>GUI</strong><p>Uses graphical objects such as windows, icons and menus. It is usually easier for beginners and normally uses pointing devices.</p></article>
        <article><strong>CLI</strong><p>Uses typed commands. It does not require pointing devices and can be efficient for experienced users or administration tasks.</p></article>
      </div>
    </section>
  `;
}

function renderB3UtilityDriverPanel() {
  return `
    <section class="b3-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">4. Utility and driver programs</p>
        <h3>Maintenance and device control</h3>
      </div>
      <div class="b3-utility-driver">
        <article>
          <strong>Utility programs</strong>
          <div class="b3-utility-grid">
            ${b3UtilityPrograms.map(item => `<span>${escapeHtml(item)}</span>`).join('')}
          </div>
        </article>
        <article>
          <strong>Driver program relationship</strong>
          <div class="b3-driver-flow">
            <span>Operating system</span>
            <b>Driver A -> Mouse</b>
            <b>Driver B -> Keyboard</b>
            <b>Driver C -> Speaker</b>
          </div>
          <p>Drivers allow the operating system to communicate with and control peripheral devices. They may be installed together with the OS.</p>
        </article>
      </div>
      <div class="a4-rule-strip">
        <strong>Application software categories</strong>
        <span>Productivity, communication, media development and educational software are selected according to the user task.</span>
      </div>
    </section>
  `;
}

function renderB3ProcessingModes() {
  return `
    <section class="b3-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">5. Processing modes</p>
        <h3>Match the timing and computer arrangement</h3>
      </div>
      <div class="b3-mode-grid">
        ${b3ProcessingModes.map(([name, body]) => `<article><strong>${escapeHtml(name)}</strong><p>${escapeHtml(body)}</p></article>`).join('')}
      </div>
    </section>
  `;
}

function renderB3DsePanel() {
  const prompts = [
    ['Relationship diagram', 'If application programs run on X, then X is system software.'],
    ['GUI vs CLI', 'A CLI does not require pointing devices; it accepts typed commands.'],
    ['Utility examples', 'System monitor, virus checker and data compressor are utilities. Word processor is application software.'],
    ['Defragmentation', 'It can improve access on magnetic disks by redistributing file fragments, but is usually not used for SSDs.'],
    ['Driver programs', 'Drivers may be installed with the OS and allow the OS to control devices.']
  ];
  return `
    <section class="b3-detail-section b3-dse-panel">
      <div class="a4-section-copy">
        <p class="eyebrow">6. DSE transfer</p>
        <h3>Exercise traps to recognise</h3>
      </div>
      <div class="b3-dse-grid">
        ${prompts.map(([title, body]) => `<article><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></article>`).join('')}
      </div>
    </section>
  `;
}

function renderC1NetworkingBasicsDetails(topicConfig) {
  resetCustomDetailPanels();
  topicCardGrid.innerHTML = `
    <div class="topic-section-banner c-section-banner c1-section-banner">
      <p class="eyebrow">DSE syllabus focus</p>
      <h3>Network scope -> device role -> access method</h3>
      <p>Use scenario clues to compare LAN/WAN, client-server/P2P, network devices, transmission media and Internet access methods.</p>
    </div>
    <div class="c-learning-path">
      ${renderC1NetworkScope()}
      ${renderC1DeviceRoles()}
      ${renderC1TransmissionAndAccess()}
      ${renderC1MisconceptionPanel()}
      ${renderC1DsePanel()}
    </div>
  `;
  topicCardGrid.onclick = null;
  setChapterSectionVisible(topicCardGrid, true);
}

function renderC1NetworkScope() {
  return `
    <section class="c-detail-section c1-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">1. Network type</p>
        <h3>Start with purpose and scope</h3>
        <p>A computer network interconnects computers and peripheral devices to exchange information and share hardware/software resources.</p>
      </div>
      <div class="c-two-col">
        <article>
          <strong>LAN and WAN</strong>
          <div class="c-table c-table-three">
            <span>Attribute</span><span>LAN</span><span>WAN</span>
            ${c1LanWanRows.map(row => row.map(cell => `<b>${escapeHtml(cell)}</b>`).join('')).join('')}
          </div>
        </article>
        <article>
          <strong>Client-server vs P2P</strong>
          <div class="c-model-grid">
            <span><b>Client-server</b>Central server stores resources, provides services, improves management and backup, but costs more and service stops if the server is down.</span>
            <span><b>Peer-to-peer</b>Lower cost, easier setup and flexible devices, but less central control, less secure and harder to keep resource versions consistent.</span>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderC1DeviceRoles() {
  return `
    <section class="c-detail-section c1-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">2. Network devices</p>
        <h3>MAC inside a LAN, IP between networks</h3>
      </div>
      <div class="c-device-grid">
        ${c1DeviceRoles.map(([name, body]) => `<article><strong>${escapeHtml(name)}</strong><p>${escapeHtml(body)}</p></article>`).join('')}
      </div>
      <div class="c-flow-strip">
        <span>Device</span><b>Switch uses MAC address inside LAN</b><b>Router uses IP address between networks</b><b>Modem connects to ISP line</b>
      </div>
    </section>
  `;
}

function renderC1TransmissionAndAccess() {
  return `
    <section class="c-detail-section c1-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">3. Transmission and access</p>
        <h3>Choose by distance, mobility, interference, cost and speed</h3>
      </div>
      <div class="c-two-col">
        <article>
          <strong>Wireless methods</strong>
          <div class="c-card-stack">
            <span><b>Wi-Fi</b>Based on IEEE 802.11. 2.4 GHz has longer range but slower speed and more interference; 5 GHz is faster but shorter range.</span>
            <span><b>Bluetooth</b>Short-distance wireless data transmission between mobile devices.</span>
            <span><b>Satellite / microwave</b>Useful where wired connection is difficult. Stability can be affected by weather.</span>
            <span><b>5G and Wi-Fi 6</b>Higher throughput, low latency and high capacity for new applications and more connected devices.</span>
          </div>
        </article>
        <article>
          <strong>Network cables</strong>
          <div class="c-table c-cable-table">
            <span>Cable</span><span>Pros</span><span>Cons</span>
            ${c1CableRows.map(row => row.map(cell => `<b>${escapeHtml(cell)}</b>`).join('')).join('')}
          </div>
        </article>
      </div>
      <div class="c-table c-access-table">
        <span>Method</span><span>Connectivity</span><span>Bandwidth</span><span>Cost</span><span>Security</span><span>Availability</span>
        ${c1AccessRows.map(row => row.map(cell => `<b>${escapeHtml(cell)}</b>`).join('')).join('')}
      </div>
    </section>
  `;
}

function renderC1MisconceptionPanel() {
  return `
    <section class="c-detail-section c1-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">4. Misconceptions</p>
        <h3>Do not answer from one keyword only</h3>
      </div>
      <div class="c-trap-grid">
        <article><strong><span>Wrong</span>LAN/WAN depends solely on coverage</strong><p>Coverage matters, but the connection method and ownership/management also matter. Networks connected through an ISP may form a WAN even across smaller distances.</p></article>
        <article><strong><span>Wrong</span>A switch controls traffic between networks</strong><p>A switch manages data flow inside a LAN. A router forwards packets between two networks.</p></article>
      </div>
    </section>
  `;
}

function renderC1DsePanel() {
  const prompts = [
    ['Scenario comparison', 'LAN: small coverage, lower setup cost, higher data transfer rate. WAN: larger coverage, higher setup cost, lower transfer rate.'],
    ['Roaming', 'All APs in the same network should use the same SSID so a wireless NIC can switch AP automatically.'],
    ['Access method', 'Leased line has highest bandwidth/security/cost; Wi-Fi hotspot is low cost but lowest security and availability.'],
    ['Device wording', 'Switch = MAC address in LAN. Router = IP address between networks. NIC = MAC address stored in hardware.']
  ];
  return `
    <section class="c-detail-section c-dse-panel c1-dse-panel">
      <div class="a4-section-copy">
        <p class="eyebrow">5. DSE transfer</p>
        <h3>How C1 is examined</h3>
      </div>
      <div class="c-dse-grid">
        ${prompts.map(([title, body]) => `<article><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></article>`).join('')}
      </div>
    </section>
  `;
}

function renderC2InternetProtocolsDetails(topicConfig) {
  resetCustomDetailPanels();
  topicCardGrid.innerHTML = `
    <div class="topic-section-banner c-section-banner c2-section-banner">
      <p class="eyebrow">DSE syllabus focus</p>
      <h3>Packets -> addresses -> protocols</h3>
      <p>Trace how TCP/IP sends data, then identify IP addresses, FQDN/URL parts, DNS name resolution and the correct application protocol.</p>
    </div>
    <div class="c-learning-path">
      ${renderC2TcpIpFlow()}
      ${renderC2AddressingPanel()}
      ${renderC2ProtocolPanel()}
      ${renderC2ProtocolStories()}
      ${renderC2MisconceptionPanel()}
      ${renderC2DsePanel()}
    </div>
  `;
  bindC2InternetProtocolsDetails(topicConfig);
  setChapterSectionVisible(topicCardGrid, true);
}

function renderC2TcpIpFlow() {
  return `
    <section class="c-detail-section c2-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">1. TCP/IP transmission</p>
        <h3>From one message to many packets</h3>
      </div>
      <div class="c-packet-flow">
        ${c2TcpSteps.map(([title, body], index) => `
          <article>
            <span>${String(index + 1).padStart(2, '0')}</span>
            <strong>${escapeHtml(title)}</strong>
            <p>${escapeHtml(body)}</p>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function renderC2AddressingPanel() {
  return `
    <section class="c-detail-section c2-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">2. Addressing and names</p>
        <h3>Human name, numeric address, exact resource</h3>
      </div>
      <div class="c-two-col">
        <article>
          <strong>IP address</strong>
          <div class="c-card-stack">
            <span><b>IPv4</b>148.7.52.1</span>
            <span><b>IPv6</b>2025:1ab1:abcd:1025:20b5:a19a:a315:1212</span>
            <span><b>Purpose</b>Numerical address used to identify a device in a network.</span>
          </div>
        </article>
        <article>
          <strong>FQDN and DNS</strong>
          <div class="c-url-demo">
            <code>www.google.com.hk</code>
            <span>hostname</span><span>registration name</span><span>top-level domain</span><span>country-code TLD</span>
          </div>
          <p class="c-note">DNS translates domain names into IP addresses. This process is called name resolution.</p>
        </article>
      </div>
      <div class="c-url-line">
        <code aria-label="Colour coded URL example">
          <span class="url-part url-protocol">https://</span><span class="url-part url-domain">www.example.hk</span><span class="url-part url-port">:443</span><span class="url-part url-path">/about/network.html</span>
        </code>
        <span class="url-protocol-label">protocol</span><span class="url-domain-label">FQDN / domain name</span><span class="url-port-label">port number</span><span class="url-path-label">path and file</span>
      </div>
    </section>
  `;
}

function renderC2ProtocolPanel() {
  return `
    <section class="c-detail-section c2-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">3. Application protocols</p>
        <h3>Choose the protocol by the action</h3>
      </div>
      <div class="c-two-col">
        <article>
          <strong>HTTP vs HTTPS</strong>
          <div class="c-table c-table-three">
            <span>Feature</span><span>HTTP</span><span>HTTPS</span>
            ${c2HttpRows.map(row => row.map(cell => `<b>${escapeHtml(cell)}</b>`).join('')).join('')}
          </div>
        </article>
        <article>
          <strong>Email flow</strong>
          <div class="c-flow-strip c-email-flow">
            <span>Sender</span><b>SMTP sends mail</b><b>Mail server</b><b>POP3 / IMAP / HTTP retrieves or accesses mail</b><span>Receiver</span>
          </div>
          <p class="c-note">HTTP/HTTPS is used for webmail through a browser. SMTP sends email; POP3 and IMAP retrieve or access email from a mail server.</p>
        </article>
      </div>
      <div class="c-ssl-panel">
        <article>
          <strong>Why HTTPS is secure</strong>
          <p>HTTPS is HTTP sent through SSL/TLS. In DSE-style wording, SSL helps protect web communication by encrypting the data before it travels through the network.</p>
        </article>
        <article>
          <strong>1. Encryption</strong>
          <p>Plaintext such as passwords or payment details is changed into ciphertext, so an eavesdropper cannot easily read it.</p>
        </article>
        <article>
          <strong>2. Authentication</strong>
          <p>The server uses a digital certificate to prove that the browser is communicating with the intended website, not an impostor.</p>
        </article>
        <article>
          <strong>3. Integrity</strong>
          <p>SSL/TLS helps detect whether data has been altered during transmission.</p>
        </article>
      </div>
      <div class="c-table c-pop-table">
        <span>Feature</span><span>POP3</span><span>IMAP</span>
        ${c2PopImapRows.map(row => row.map(cell => `<b>${escapeHtml(cell)}</b>`).join('')).join('')}
      </div>
    </section>
  `;
}

function renderC2ProtocolStories() {
  const active = c2ProtocolStories.find(story => story.key === c2DetailsState.story) || c2ProtocolStories[0];
  const scene = c2ProtocolScenes[active.key] || c2ProtocolScenes.web;
  const maxStep = active.steps.length - 1;
  const activeStep = Math.max(0, Math.min(c2DetailsState.step || 0, maxStep));
  const [actor, title, body] = active.steps[activeStep];
  const route = scene.routes[activeStep] || scene.routes[0];
  const fromNode = scene.nodes.find(node => node.key === route.from) || scene.nodes[0];
  const toNode = scene.nodes.find(node => node.key === route.to) || fromNode;
  const progress = Math.round(((activeStep + 1) / active.steps.length) * 100);
  const journeyComplete = activeStep === maxStep;
  return `
    <section class="c-detail-section c2-detail-section c-story-section">
      <div class="a4-section-copy">
        <p class="eyebrow">4. Protocol story simulator</p>
        <h3>Play the protocol journey step by step</h3>
        <p>Choose a situation, then move through the story. Watch who talks to whom, what travels, and which protocol explains the action.</p>
      </div>
      <div class="c-story-tabs" role="tablist" aria-label="Protocol story choices">
        ${c2ProtocolStories.map(story => `
          <button class="${story.key === active.key ? 'active' : ''}" type="button" data-c2-story="${escapeHtml(story.key)}" aria-selected="${story.key === active.key ? 'true' : 'false'}">${escapeHtml(story.short)}</button>
        `).join('')}
      </div>
      <div class="c-story-stage" data-story-key="${escapeHtml(active.key)}">
        <div class="c-story-topline">
          <article class="c-story-brief">
            <strong>${escapeHtml(active.title)}</strong>
            <p>${escapeHtml(active.situation)}</p>
          </article>
          <div class="c-story-progress" aria-label="Story progress">
            <span>Step ${activeStep + 1} / ${active.steps.length}</span>
            <b><i style="width:${progress}%"></i></b>
          </div>
        </div>
        <div class="c-story-player">
          <div class="c-story-map" style="--token-colour:${escapeHtml(route.colour)}; --from-x:${escapeHtml(fromNode.x)}; --from-y:${escapeHtml(fromNode.y)}; --to-x:${escapeHtml(toNode.x)}; --to-y:${escapeHtml(toNode.y)};">
            <div class="c-story-route-line" aria-hidden="true"></div>
            ${scene.nodes.map(node => `
              <article class="c-story-node ${node.key === route.from || node.key === route.to ? 'active' : ''}" style="--node-x:${escapeHtml(node.x)}; --node-y:${escapeHtml(node.y)}; --node-colour:${escapeHtml(node.color)};">
                <span>${escapeHtml(node.label)}</span>
                <small>${escapeHtml(node.role)}</small>
              </article>
            `).join('')}
            <div class="c-story-token ${route.from === route.to ? 'is-local' : ''}" aria-hidden="true">
              <span>${escapeHtml(route.token)}</span>
            </div>
          </div>
          <article class="c-story-live-card" aria-live="polite">
            <span class="c-story-badge">${escapeHtml(route.badge)}</span>
            <p class="eyebrow">${escapeHtml(actor)}</p>
            <h4>${escapeHtml(title)}</h4>
            <p>${escapeHtml(body)}</p>
            <div class="c-story-payload">
              <strong>Travelling now</strong>
              <span>${escapeHtml(scene.tokenName)}: ${escapeHtml(route.token)}</span>
            </div>
          </article>
        </div>
        <div class="c-story-stepper" aria-label="Story step selector">
          ${active.steps.map((step, index) => `
            <button class="${index === activeStep ? 'active' : ''} ${index < activeStep ? 'visited' : ''}" type="button" data-c2-story-step="${index}" aria-label="Go to step ${index + 1}: ${escapeHtml(step[1])}">
              <span>${index + 1}</span>
              <b>${escapeHtml(step[1])}</b>
            </button>
          `).join('')}
        </div>
        <div class="c-story-controls">
          <button class="secondary-btn" type="button" data-c2-story-action="previous" ${activeStep === 0 ? 'disabled' : ''}>Previous</button>
          <button class="primary-btn" type="button" data-c2-story-action="next" ${journeyComplete ? 'disabled' : ''}>Next step</button>
          <button class="secondary-btn ${c2DetailsState.playing ? 'active' : ''}" type="button" data-c2-story-action="autoplay">${c2DetailsState.playing ? 'Pause' : 'Auto play'}</button>
          <button class="ghost-btn" type="button" data-c2-story-action="reset">Reset</button>
        </div>
        <div class="c-story-dse ${journeyComplete ? 'is-revealed' : ''}">
          <strong>${journeyComplete ? 'DSE sentence unlocked' : 'Reach the final step to unlock the DSE sentence'}</strong>
          <span>${journeyComplete ? escapeHtml(active.dse) : 'Focus on the order first: identify the situation, name the protocol, then state its role.'}</span>
        </div>
      </div>
    </section>
  `;
}

function bindC2InternetProtocolsDetails(topicConfig) {
  window.clearTimeout(c2StoryAutoplayTimer);
  c2StoryAutoplayTimer = null;
  topicCardGrid.onclick = event => {
    const storyButton = event.target.closest('[data-c2-story]');
    if (storyButton) {
      c2DetailsState.story = storyButton.dataset.c2Story;
      c2DetailsState.step = 0;
      c2DetailsState.playing = false;
      renderC2InternetProtocolsDetails(topicConfig);
      return;
    }

    const stepButton = event.target.closest('[data-c2-story-step]');
    if (stepButton) {
      c2DetailsState.step = Number(stepButton.dataset.c2StoryStep) || 0;
      c2DetailsState.playing = false;
      renderC2InternetProtocolsDetails(topicConfig);
      return;
    }

    const actionButton = event.target.closest('[data-c2-story-action]');
    if (!actionButton) return;
    const active = c2ProtocolStories.find(story => story.key === c2DetailsState.story) || c2ProtocolStories[0];
    const maxStep = active.steps.length - 1;
    const action = actionButton.dataset.c2StoryAction;
    if (action === 'previous') {
      c2DetailsState.step = Math.max(0, (c2DetailsState.step || 0) - 1);
      c2DetailsState.playing = false;
    }
    if (action === 'next') {
      c2DetailsState.step = Math.min(maxStep, (c2DetailsState.step || 0) + 1);
      c2DetailsState.playing = false;
    }
    if (action === 'reset') {
      c2DetailsState.step = 0;
      c2DetailsState.playing = false;
    }
    if (action === 'autoplay') {
      c2DetailsState.playing = !c2DetailsState.playing;
      if (c2DetailsState.playing && (c2DetailsState.step || 0) >= maxStep) c2DetailsState.step = 0;
    }
    renderC2InternetProtocolsDetails(topicConfig);
  };

  if (c2DetailsState.playing) {
    const active = c2ProtocolStories.find(story => story.key === c2DetailsState.story) || c2ProtocolStories[0];
    const maxStep = active.steps.length - 1;
    c2StoryAutoplayTimer = window.setTimeout(() => {
      if ((c2DetailsState.step || 0) >= maxStep) {
        c2DetailsState.playing = false;
      } else {
        c2DetailsState.step = (c2DetailsState.step || 0) + 1;
      }
      renderC2InternetProtocolsDetails(topicConfig);
    }, 1800);
  }
}

function renderC2MisconceptionPanel() {
  return `
    <section class="c-detail-section c2-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">5. Misconceptions</p>
        <h3>Protocol names are not interchangeable</h3>
      </div>
      <div class="c-trap-grid">
        <article><strong><span>Wrong</span>POP3 must remove emails after download</strong><p>POP3 clients may have the option to keep emails on the server.</p></article>
        <article><strong><span>Wrong</span>IMAP/POP3 receive webmail directly</strong><p>In web-based email services, email is sent from a mail server to a browser using HTTP/HTTPS.</p></article>
      </div>
    </section>
  `;
}

function renderC2DsePanel() {
  const prompts = [
    ['URL labelling', 'Protocol, FQDN/IP address, port number and path are separate URL parts.'],
    ['DNS wording', 'DNS translates domain name to IP address; it does not store webpages.'],
    ['HTTP/HTTPS', 'HTTPS begins with https://, normally uses port 443, and provides encryption/security.'],
    ['Email protocols', 'SMTP sends; POP3 downloads/retrieves; IMAP keeps emails on the server and synchronises changes.']
  ];
  return `
    <section class="c-detail-section c-dse-panel c2-dse-panel">
      <div class="a4-section-copy">
        <p class="eyebrow">6. DSE transfer</p>
        <h3>How C2 is examined</h3>
      </div>
      <div class="c-dse-grid">
        ${prompts.map(([title, body]) => `<article><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></article>`).join('')}
      </div>
    </section>
  `;
}

function renderC3InternetServicesDetails(topicConfig) {
  resetCustomDetailPanels();
  topicCardGrid.innerHTML = `
    <div class="topic-section-banner c-section-banner c3-section-banner">
      <p class="eyebrow">DSE syllabus focus</p>
      <h3>Cloud services -> communication -> media delivery</h3>
      <p>Connect cloud/IoT services with email privacy, file transfer, search techniques, multimedia formats, streaming and conferencing scenarios.</p>
    </div>
    <div class="c-learning-path">
      ${renderC3CloudPanel()}
      ${renderC3EmailAndTransfer()}
      ${renderC3SearchAndMedia()}
      ${renderC3StreamingPanel()}
      ${renderC3DsePanel()}
    </div>
  `;
  topicCardGrid.onclick = null;
  setChapterSectionVisible(topicCardGrid, true);
}

function renderC3CloudPanel() {
  return `
    <section class="c-detail-section c3-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">1. Cloud, IoT and smart city</p>
        <h3>Connected objects generate data; cloud processes it</h3>
        <p>IoT connects objects. Cloud computing stores and processes large amounts of data generated by IoT, supporting smart-city applications.</p>
      </div>
      <div class="c-cloud-grid">
        <article><strong>Operating system</strong><p>Run tasks on more powerful virtual machines.</p></article>
        <article><strong>Storage</strong><p>Store data in remote servers hosted by a third party.</p></article>
        <article><strong>Hosted application</strong><p>Open and use software from the cloud server.</p></article>
      </div>
    </section>
  `;
}

function renderC3EmailAndTransfer() {
  return `
    <section class="c-detail-section c3-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">2. Email and file transfer</p>
        <h3>Privacy and file size decide the method</h3>
      </div>
      <div class="c-table c-email-table">
        <span>Field</span><span>Feature</span><span>Application</span>
        ${c3EmailRows.map(row => row.map(cell => `<b>${escapeHtml(cell)}</b>`).join('')).join('')}
      </div>
      <div class="c-transfer-grid">
        ${c3FileTransferRows.map(([method, format, limit]) => `<article><strong>${escapeHtml(method)}</strong><p>${escapeHtml(format)}</p><small>${escapeHtml(limit)}</small></article>`).join('')}
      </div>
    </section>
  `;
}

function renderC3SearchAndMedia() {
  return `
    <section class="c-detail-section c3-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">3. Search and multimedia</p>
        <h3>Find reliable information and choose suitable formats</h3>
      </div>
      <div class="c-two-col">
        <article>
          <strong>Search refinement</strong>
          <div class="c-search-steps"><span>Choose keywords</span><span>Choose source types</span><span>Use Boolean logic</span><span>Refine search</span></div>
          <div class="c-table c-search-table">
            <span>Technique</span><span>Operator</span><span>Example</span>
            ${c3SearchRows.map(row => row.map(cell => `<b>${escapeHtml(cell)}</b>`).join('')).join('')}
          </div>
        </article>
        <article>
          <strong>Multimedia on the Web</strong>
          <div class="c-card-stack">
            <span><b>Image</b>JPG, PNG, GIF, APNG, WebP, SVG</span>
            <span><b>Audio</b>MP3, AAC, OGG</span>
            <span><b>Video</b>MP4, WebM</span>
            <span><b>Plug-ins / extensions</b>Add browser or operating-system support for extra formats, codecs or functions.</span>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderC3StreamingPanel() {
  return `
    <section class="c-detail-section c3-detail-section">
      <div class="a4-section-copy">
        <p class="eyebrow">4. Streaming and communication services</p>
        <h3>Quality depends on data size and bandwidth</h3>
      </div>
      <div class="c-two-col">
        <article>
          <strong>Streaming</strong>
          <div class="c-stream-line">
            <span>played data</span><span>current playback position</span><span>buffer</span><span>data not yet loaded</span>
          </div>
          <p class="c-note">Better quality usually means larger file size. Large transmission may cause latency and pixelisation. Factors include format, codec, bitrate, resolution, frame rate and network bandwidth.</p>
        </article>
        <article>
          <strong>Video conferencing vs webcasting</strong>
          <div class="c-table c-video-table">
            <span>Feature</span><span>Video conferencing</span><span>Webcasting</span>
            ${c3VideoRows.map(row => row.map(cell => `<b>${escapeHtml(cell)}</b>`).join('')).join('')}
          </div>
        </article>
      </div>
      <div class="c-service-grid">
        <article><strong>Remote logon</strong><p>Remote access lets users access one device from another. Remote desktop software is usually cross-platform.</p></article>
        <article><strong>Online chat</strong><p>Private conversation with an individual or group using text, audio, images or videos.</p></article>
        <article><strong>Discussion forums</strong><p>Online platforms for asking, answering and sharing content on a topic.</p></article>
        <article><strong>Voice mail</strong><p>Voice calls are real-time; voice messaging lets users receive messages anytime.</p></article>
      </div>
    </section>
  `;
}

function renderC3DsePanel() {
  const prompts = [
    ['Bcc privacy', 'Use Bcc for bulk email when recipients should not see each others addresses.'],
    ['Search operators', 'Use - to exclude, OR to combine alternatives, quotation marks for exact phrase, and site: for a specific domain.'],
    ['File transfer', 'Consider file format, file size and security before choosing email, cloud, VPN network drive or P2P.'],
    ['Streaming quality', 'Higher resolution/bitrate needs more bandwidth and may increase latency or pixelisation.']
  ];
  return `
    <section class="c-detail-section c-dse-panel c3-dse-panel">
      <div class="a4-section-copy">
        <p class="eyebrow">5. DSE transfer</p>
        <h3>How C3 is examined</h3>
      </div>
      <div class="c-dse-grid">
        ${prompts.map(([title, body]) => `<article><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></article>`).join('')}
      </div>
    </section>
  `;
}

function renderCommonMistakesSection(topicConfig) {
  const items = topicConfig.misconceptions || [];
  renderTopicMisconceptions(items);
  setChapterSectionVisible(topicMisconceptionGrid, Boolean(items.length));
}

function renderActivitiesSection(topicConfig) {
  const items = topicConfig.activities || [];
  renderTopicActivities(items);
  setChapterSectionVisible(topicActivityPanel, true);
}

function renderCheckpointSection(topicConfig) {
  const items = topicConfig.practice || [];
  renderTopicPractice(items);
  setChapterSectionVisible(topicPracticePanel, Boolean(items.length));
}

function renderTopicStats(items) {
  topicStatGrid.innerHTML = items.map((item, index) => `
    <div class="topic-stat ${typeof item === 'object' && item.kind === 'word' ? 'topic-stat-word' : ''} ${typeof item === 'object' && item.step ? 'topic-stat-step' : ''}" ${typeof item === 'object' && item.step ? `style="--step-label:'${escapeHtml(item.step)}'"` : ''}>
      <strong>${escapeHtml(typeof item === 'string' ? index + 1 : item.value)}</strong>
      <span>${escapeHtml(typeof item === 'string' ? item : item.label)}</span>
    </div>
  `).join('');
}

function renderTopicCards(items) {
  topicCardGrid.onclick = null;
  topicCardGrid.innerHTML = `
    <div class="topic-section-banner">
      <p class="eyebrow">DSE syllabus focus</p>
      <h3>Learn the idea first</h3>
    </div>
  ` + items.map(item => `
    <article class="topic-info-card">
      <span></span>
      <h3>${escapeHtml(typeof item === 'string' ? item : item.title)}</h3>
      <p>${escapeHtml(typeof item === 'string' ? 'Learning material, examples and practice for this part can be added here.' : item.body)}</p>
    </article>
  `).join('');
}

function renderA4SpreadsheetDetails(topicConfig) {
  stopTopicSimulation();
  topicKeypointGrid.innerHTML = '';
  topicFormulaPanel.classList.add('hidden');
  topicFormulaPanel.innerHTML = '';
  topicExamGrid.innerHTML = '';
  topicSimulationPanel.classList.add('hidden');
  topicSimulationPanel.innerHTML = '';
  renderTopicSteps([]);
  setChapterSectionVisible(topicKeypointGrid, false);
  setChapterSectionVisible(topicFormulaPanel, false);
  setChapterSectionVisible(topicExamGrid, false);
  setChapterSectionVisible(topicSimulationPanel, false);
  setChapterSectionVisible(topicSteps, false);
  topicCardGrid.innerHTML = `
    <div class="topic-section-banner a4-section-banner">
      <p class="eyebrow">DSE syllabus focus</p>
      <h3>Spreadsheet learning path</h3>
      <p>Build formulae first, control copied references next, then analyse records with the right tool.</p>
    </div>
    <div class="a4-learning-path">
      ${renderA4Foundations()}
      ${renderA4FormulaAnatomy()}
      ${renderA4FunctionToolbox()}
      ${renderA4ReferenceWorkshop()}
      ${renderA4AnalysisTools()}
      ${renderA4ChartGuide()}
      ${renderA4DseTransfer()}
    </div>
  `;
  bindA4SpreadsheetDetails(topicConfig);
  setChapterSectionVisible(topicCardGrid, true);
}

function renderA4Foundations() {
  const tools = [
    ['Number formats', 'Change display such as Number, Currency, Percentage, Date or Time without normally changing the stored value.'],
    ['Text format for leading zeros', 'Use Text before input when values such as student IDs or phone numbers must keep leading zeros.'],
    ['Wrap Text', 'Display long content on multiple lines inside one cell.'],
    ['Merge and Center', 'Combine selected cells and centre a heading across them.'],
    ['Freeze Panes', 'Keep headings visible while scrolling through a large worksheet.'],
    ['AutoFill', 'Copy formulae or extend a pattern such as 12, 14, 16, 18.']
  ];
  return `
    <section class="a4-detail-section a4-foundations">
      <div class="a4-section-copy">
        <p class="eyebrow">1. Spreadsheet foundations</p>
        <h3>Know the parts before writing formulas</h3>
      </div>
      <div class="a4-foundation-grid">
        <div class="a4-foundation-map" aria-label="Spreadsheet hierarchy">
          ${['Workbook', 'Worksheet', 'Rows and columns', 'Cell'].map((item, index) => `
            <div class="a4-map-node">
              <strong>${escapeHtml(item)}</strong>
              ${index < 3 ? `<span>${index === 0 ? 'contains' : index === 1 ? 'contains' : 'intersect at'}</span>` : ''}
            </div>
          `).join('')}
        </div>
        <div class="a4-cell-address">
          <p class="small-label">Cell-address example</p>
          <strong>B3</strong>
          <span>Selected cell: B3</span>
          <span>Column: B</span>
          <span>Row: 3</span>
        </div>
      </div>
      <div class="a4-tools-panel">
        <button class="secondary-btn" type="button" data-a4-tools-toggle aria-expanded="${a4DetailsState.toolsOpen ? 'true' : 'false'}">
          ${a4DetailsState.toolsOpen ? 'Close worksheet tools' : 'Open worksheet tools'}
        </button>
        ${a4DetailsState.toolsOpen ? `
          <div class="a4-tool-list">
            ${tools.map(([title, body]) => `<article><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></article>`).join('')}
          </div>
        ` : ''}
      </div>
    </section>
  `;
}

function renderA4FormulaAnatomy() {
  const parts = [
    ['=', 'starts the formula'],
    ['IF', 'function'],
    ['C2', 'cell reference'],
    ['>=', 'comparison operator'],
    ['50', 'comparison value'],
    ['"Pass"', 'result when TRUE'],
    ['"Fail"', 'result when FALSE']
  ];
  return `
    <section class="a4-detail-section a4-formula-anatomy">
      <div class="a4-section-copy">
        <p class="eyebrow">2. Formula anatomy</p>
        <h3>Read the formula as a sentence</h3>
      </div>
      <div class="a4-formula-panel">
        <div class="a4-formula-display" aria-label="Formula example">
          <span class="part-start">=</span><span class="part-function">IF</span><span>(</span><span class="part-ref">C2</span><span class="part-operator">&gt;=</span><span class="part-value">50</span><span>,</span><span class="part-true">"Pass"</span><span>,</span><span class="part-false">"Fail"</span><span>)</span>
        </div>
        <div class="a4-formula-labels">
          ${parts.map(([text, label]) => `<span><strong>${escapeHtml(text)}</strong>${escapeHtml(label)}</span>`).join('')}
        </div>
        <div class="a4-rule-strip">
          <strong>Formula building rule</strong>
          <span>A formula may contain constants, operators, cell references and functions.</span>
        </div>
        <div class="a4-warning-strip">
          <strong>Warning</strong>
          <span>Text results such as "Pass" and "Fail" require quotation marks.</span>
        </div>
      </div>
    </section>
  `;
}

function renderA4FunctionToolbox() {
  const active = a4FunctionCategories.find(category => category.name === a4DetailsState.functionCategory) || a4FunctionCategories[0];
  return `
    <section class="a4-detail-section a4-function-toolbox">
      <div class="a4-section-copy">
        <p class="eyebrow">3. Function toolbox</p>
        <h3>Choose the function by purpose</h3>
      </div>
      <div class="a4-function-tabs" role="tablist" aria-label="Spreadsheet function categories">
        ${a4FunctionCategories.map(category => `
          <button class="${category.name === active.name ? 'active' : ''}" type="button" data-a4-function-category="${escapeHtml(category.name)}" aria-selected="${category.name === active.name ? 'true' : 'false'}">${escapeHtml(category.name)}</button>
        `).join('')}
      </div>
      <div class="a4-function-grid">
        ${active.functions.map(item => `
          <article class="a4-function-card">
            <strong>${escapeHtml(item.name)}</strong>
            <p><b>Purpose:</b> ${escapeHtml(item.purpose)}</p>
            <code>${escapeHtml(item.syntax)}</code>
            <p><b>Example:</b> <code>${escapeHtml(item.example)}</code></p>
            <small><b>Common trap:</b> ${escapeHtml(item.trap)}</small>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function renderA4ReferenceWorkshop() {
  return `
    <section class="a4-detail-section a4-reference-workshop">
      <div class="a4-section-copy">
        <p class="eyebrow">4. Cell Reference Workshop</p>
        <h3>Decide what moves and what stays fixed</h3>
      </div>
      <div class="a4-reference-grid">
        ${a4ReferenceCards.map(card => `
          <article class="a4-reference-card ${card.columnLock ? 'a4-lock-column' : ''} ${card.rowLock ? 'a4-lock-row' : ''}">
            <span>${escapeHtml(card.title)}</span>
            <strong>${formatA4ReferenceVisual(card.ref)}</strong>
            <p>${escapeHtml(card.meaning)}</p>
            <small>${escapeHtml(card.copied)}</small>
          </article>
        `).join('')}
      </div>
      <div class="a4-copy-animation ${a4DetailsState.copyDemo === 'played' ? 'is-played' : ''}">
        <div>
          <p class="small-label">Animated copy example</p>
          <h4>D2: =B2*$H$1 → D3: =B3*$H$1</h4>
          <p>B2 is relative because each row uses its own value. $H$1 is absolute because the fixed rate must not move.</p>
        </div>
        <div class="a4-copy-stage" aria-label="Reference copy animation">
          <span class="moving-ref">B2 → B3</span>
          <span class="anchored-ref">$H$1 🔒</span>
        </div>
        <button class="secondary-btn" type="button" data-a4-reference-animate>Replay animation</button>
      </div>
      <div class="a4-mixed-example">
        <strong>Mixed-reference example</strong>
        <code>=$A2*B$1</code>
        <span>$A2 keeps column A fixed; B$1 keeps row 1 fixed when copied across and down.</span>
      </div>
    </section>
  `;
}

function formatA4ReferenceVisual(ref) {
  return escapeHtml(ref)
    .replace(/\$([A-Z]+)/g, '<span class="lock-part lock-column">$1 🔒</span>')
    .replace(/\$(\d+)/g, '<span class="lock-part lock-row">$1 🔒</span>');
}

function renderA4AnalysisTools() {
  return `
    <section class="a4-detail-section a4-analysis-tools">
      <div class="a4-section-copy">
        <p class="eyebrow">5. Organise and analyse data</p>
        <h3>Separate operating records from summarising records</h3>
      </div>
      <div class="a4-analysis-grid">
        <article>
          <strong>Find and arrange records</strong>
          <p><b>Sorting:</b> changes the order of records.</p>
          <p><b>Filtering:</b> temporarily hides records that do not meet criteria.</p>
          <p><b>Searching:</b> locates matching content.</p>
          <small>Trap: Filtering does not delete data.</small>
        </article>
        <article>
          <strong>Summarise records</strong>
          <p><b>Pivot table:</b> groups and summarises large sets of records.</p>
          <p><b>Pivot chart:</b> creates a chart based on pivot-table results.</p>
          <div class="a4-pivot-mini">
            <span>Fields: Student, Subject, Score</span>
            <span>Rows: Student</span>
            <span>Columns: Subject</span>
            <span>Values: Average of Score</span>
          </div>
        </article>
        <article>
          <strong>Test decisions</strong>
          <p><b>What-if:</b> change ticket price and observe income.</p>
          <p><b>Scenario Manager:</b> compare optimistic, normal and pessimistic budgets.</p>
          <p><b>Goal Seek:</b> find tickets needed to reach $10,000.</p>
        </article>
      </div>
    </section>
  `;
}

function renderA4ChartGuide() {
  const charts = [
    ['Compare categories', 'Column chart', '▥'],
    ['Show change over time', 'Line chart', '⌁'],
    ['Show parts of one whole', 'Pie chart', '◔'],
    ['Show relationship between two numerical variables', 'Scatter chart', '⠂']
  ];
  return `
    <section class="a4-detail-section a4-chart-guide">
      <div class="a4-section-copy">
        <p class="eyebrow">6. Chart choice</p>
        <h3>Choose the chart that matches the question</h3>
      </div>
      <div class="a4-chart-row">
        ${charts.map(([task, chart, icon]) => `<article><span>${escapeHtml(icon)}</span><strong>${escapeHtml(task)}</strong><p>${escapeHtml(chart)}</p></article>`).join('')}
      </div>
      <p class="a4-chart-warning">Do not choose a pie chart unless the values represent parts of one meaningful whole.</p>
    </section>
  `;
}

function renderA4DseTransfer() {
  const reminders = [
    'Check whether a copied reference should move or stay fixed.',
    'Use a function that matches the task: count, add, decide, extract or look up.',
    'Put text criteria and text output in quotation marks.',
    'Distinguish sorting, filtering, pivot tables and what-if analysis.',
    'State the exact copied formula when asked.'
  ];
  return `
    <section class="a4-detail-section a4-dse-transfer">
      <div class="a4-section-copy">
        <p class="eyebrow">7. DSE transfer reminders</p>
        <h3>What exam questions usually test</h3>
      </div>
      <ol>
        ${reminders.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
      </ol>
    </section>
  `;
}

function bindA4SpreadsheetDetails(topicConfig) {
  topicCardGrid.onclick = event => {
    if (event.target.closest('[data-a4-tools-toggle]')) {
      a4DetailsState.toolsOpen = !a4DetailsState.toolsOpen;
      renderA4SpreadsheetDetails(topicConfig);
      return;
    }
    const tab = event.target.closest('[data-a4-function-category]');
    if (tab) {
      a4DetailsState.functionCategory = tab.dataset.a4FunctionCategory;
      renderA4SpreadsheetDetails(topicConfig);
      return;
    }
    if (event.target.closest('[data-a4-reference-animate]')) {
      a4DetailsState.copyDemo = 'played';
      renderA4SpreadsheetDetails(topicConfig);
    }
  };
}

function renderTopicKeypoints(items) {
  topicKeypointGrid.innerHTML = items.length ? `
    <div class="topic-section-banner">
      <p class="eyebrow">Key concepts</p>
      <h3>What students must use accurately</h3>
    </div>
  ` + items.map((item, index) => `
    <article class="keypoint-card">
      <strong>${String(index + 1).padStart(2, '0')}</strong>
      <p>${escapeHtml(item)}</p>
    </article>
  `).join('') : '';
}

function renderTopicMisconceptions(items) {
  topicMisconceptionGrid.innerHTML = items.length ? `
    <div class="topic-section-banner">
      <p class="eyebrow">Common misconceptions</p>
      <h3>Check the trap before playing</h3>
    </div>
  ` + items.map((item, index) => `
    <article class="misconception-card">
      <strong>Trap ${index + 1}</strong>
      <p>${escapeHtml(item)}</p>
    </article>
  `).join('') : '';
}

function renderTopicFormulae(items) {
  topicFormulaPanel.classList.toggle('hidden', !items.length);
  topicFormulaPanel.innerHTML = items.length ? `
    <div>
      <p class="eyebrow">Formula bank</p>
      <h3>Must-know rules</h3>
    </div>
    <div class="formula-list">
      ${items.map(item => `<code>${escapeHtml(item)}</code>`).join('')}
    </div>
  ` : '';
}

function renderTopicExamItems(items) {
  topicExamGrid.innerHTML = items.length ? `
    <div class="topic-section-banner">
      <p class="eyebrow">DSE transfer question</p>
      <h3>Apply the same idea in exam style</h3>
    </div>
  ` + items.map(item => `
    <article class="exam-tip-card">
      <span>Transfer task</span>
      <p>${escapeHtml(item)}</p>
    </article>
  `).join('') : '';
}

function stopTopicSimulation() {
  if (topicSimState.timer) clearInterval(topicSimState.timer);
  topicSimState.timer = null;
}

function getTopicDemoKeys(topicConfig) {
  return topicDemoMap[topicConfig?.id] || [];
}

function renderTopicSimulationPanel(topicConfig) {
  stopTopicSimulation();
  if (!topicSimulationPanel) return;
  const keys = getTopicDemoKeys(topicConfig);
  if (!keys.length) {
    topicSimulationPanel.classList.add('hidden');
    topicSimulationPanel.innerHTML = '';
    return;
  }
  topicSimulationPanel.classList.remove('hidden');
  topicSimulationPanel.innerHTML = `
    <div class="topic-section-banner simulation-banner">
      <p class="eyebrow">Animated simulation</p>
      <h3>See the operation on this page</h3>
      <p>Run the original programming visualisations here without leaving the chapter. The current line, active data item, variables and output are animated together so students can connect code with memory changes.</p>
    </div>
    <div class="topic-sim-tabs" role="tablist" aria-label="Programming simulations">
      ${keys.map((key, index) => `
        <button class="topic-sim-tab ${index === 0 ? 'active' : ''}" type="button" data-topic-demo-key="${escapeHtml(key)}">
          <span>${escapeHtml(demos[key]?.group || 'Programming')}</span>
          <strong>${escapeHtml(demos[key]?.title || key)}</strong>
        </button>
      `).join('')}
    </div>
    <article class="embedded-sim-panel" aria-live="polite">
      <div class="embedded-sim-header">
        <div>
          <p class="eyebrow" id="topicSimGroup">Programming simulation</p>
          <h3 id="topicSimTitle">Simulation</h3>
          <p id="topicSimDescription"></p>
        </div>
        <span class="status-badge" id="topicSimStatus">Ready</span>
      </div>
      <div class="topic-sim-flow" id="topicSimFlow"></div>
      <div class="topic-sim-grid">
        <section class="topic-sim-code-card">
          <p class="small-label">Pseudocode step runner</p>
          <ol id="topicSimCodeLines" class="code-lines topic-code-lines"></ol>
          <div class="control-row">
            <button class="ghost-btn" type="button" data-topic-sim-reset>Reset</button>
            <button class="ghost-btn" type="button" data-topic-sim-back>Step back</button>
            <button class="primary-btn" type="button" data-topic-sim-next>Run next line</button>
            <button class="secondary-btn" type="button" data-topic-sim-auto>Auto run</button>
            <button class="secondary-btn" type="button" data-topic-sim-new>Random new case</button>
          </div>
        </section>
        <section class="topic-sim-memory-card">
          <p class="small-label" id="topicSimArrayLabel">Array</p>
          <div id="topicSimArrayCells" class="array-cells topic-array-cells"></div>
          <p class="small-label">Variable table</p>
          <table class="variable-table topic-variable-table">
            <thead>
              <tr><th>Variable</th><th>Current value</th><th>Meaning</th></tr>
            </thead>
            <tbody id="topicSimVariableRows"></tbody>
          </table>
          <div class="output-box topic-sim-output"><span>Output</span><strong id="topicSimOutput">—</strong></div>
        </section>
      </div>
      <div class="topic-sim-explain-grid">
        <article class="notice-box" id="topicSimNotice">Click “Run next line” to start the animation.</article>
        <article class="follow-up-box" id="topicSimFollowUp">DSE transfer will appear here.</article>
      </div>
      <div class="topic-sim-prediction" id="topicSimPrediction"></div>
    </article>
  `;
  topicSimulationPanel.querySelectorAll('[data-topic-demo-key]').forEach(button => {
    button.addEventListener('click', () => {
      topicSimulationPanel.querySelectorAll('.topic-sim-tab').forEach(tab => tab.classList.remove('active'));
      button.classList.add('active');
      loadTopicSimulation(button.dataset.topicDemoKey);
    });
  });
  topicSimulationPanel.querySelector('[data-topic-sim-reset]')?.addEventListener('click', resetTopicSimulation);
  topicSimulationPanel.querySelector('[data-topic-sim-back]')?.addEventListener('click', previousTopicSimulationStep);
  topicSimulationPanel.querySelector('[data-topic-sim-next]')?.addEventListener('click', nextTopicSimulationStep);
  topicSimulationPanel.querySelector('[data-topic-sim-auto]')?.addEventListener('click', toggleTopicSimulationAuto);
  topicSimulationPanel.querySelector('[data-topic-sim-new]')?.addEventListener('click', () => loadTopicSimulation(topicSimState.demoKey));
  loadTopicSimulation(keys[0]);
}

function loadTopicSimulation(key) {
  stopTopicSimulation();
  const demo = demos[key];
  if (!demo || typeof demo.makeCase !== 'function') {
    topicSimulationPanel.innerHTML = `
      <div class="activity-placeholder">
        <strong>Simulation to be added</strong>
        <p>No reliable original simulation was found for this topic yet.</p>
      </div>
    `;
    return;
  }
  topicSimState.demoKey = key;
  try {
    topicSimState.currentCase = demo.makeCase();
  } catch (error) {
    topicSimulationPanel.querySelector('.embedded-sim-panel').innerHTML = `
      <div class="activity-placeholder">
        <strong>Simulation needs checking</strong>
        <p>The original simulation could not be generated safely. ${escapeHtml(error.message || '')}</p>
      </div>
    `;
    return;
  }
  topicSimState.currentCase.examTrap = examTrapForDemo(key);
  topicSimState.currentCase.dseTransfer = dseTransferForDemo(key);
  topicSimState.stepIndex = -1;
  const demoTitleNode = topicSimulationPanel.querySelector('#topicSimTitle');
  const demoGroupNode = topicSimulationPanel.querySelector('#topicSimGroup');
  const demoDescriptionNode = topicSimulationPanel.querySelector('#topicSimDescription');
  const demoArrayLabelNode = topicSimulationPanel.querySelector('#topicSimArrayLabel');
  if (demoTitleNode) demoTitleNode.textContent = demo.title;
  if (demoGroupNode) demoGroupNode.textContent = demo.group;
  if (demoDescriptionNode) demoDescriptionNode.textContent = demo.description;
  if (demoArrayLabelNode) demoArrayLabelNode.textContent = demo.arrayLabel;
  renderTopicSimulationState();
}

function renderTopicSimulationState() {
  const simCase = topicSimState.currentCase;
  if (!simCase || !topicSimulationPanel) return;
  const current = simCase.trace[topicSimState.stepIndex];
  const codeNode = topicSimulationPanel.querySelector('#topicSimCodeLines');
  const flowNode = topicSimulationPanel.querySelector('#topicSimFlow');
  const activeLine = current?.line || 0;
  if (codeNode) {
    codeNode.innerHTML = simCase.code.map((line, idx) => `
      <li class="${idx + 1 === activeLine ? 'active-line' : ''}">
        <span class="line-num">${idx + 1}</span><span>${escapeHtml(line)}</span>
      </li>
    `).join('');
  }
  if (flowNode) {
    flowNode.innerHTML = getFlowSteps(simCase.code).map(step => `
      <div class="flow-step ${step.line === activeLine ? 'active-flow' : ''}">
        <span>${escapeHtml(step.icon)}</span>
        <strong>${escapeHtml(step.label)}</strong>
        <small>Line ${step.line}</small>
      </div>
    `).join('');
  }
  renderTopicSimulationArray(current?.array || simCase.array || [], current?.activeIndex ?? null);
  renderTopicSimulationVariables(current?.vars || {});
  const outputNode = topicSimulationPanel.querySelector('#topicSimOutput');
  const statusNode = topicSimulationPanel.querySelector('#topicSimStatus');
  const noticeNode = topicSimulationPanel.querySelector('#topicSimNotice');
  const followNode = topicSimulationPanel.querySelector('#topicSimFollowUp');
  if (outputNode) outputNode.textContent = formatValue(current?.output || '—');
  if (statusNode) statusNode.textContent = current ? `Step ${topicSimState.stepIndex + 1} / ${simCase.trace.length}` : 'Ready';
  if (noticeNode) noticeNode.innerHTML = current
    ? `<strong>Current step:</strong> ${escapeHtml(current.note)}<br><br><strong>Key idea:</strong> ${escapeHtml(simCase.notice || '')}<br><br><strong>Exam trap:</strong> ${escapeHtml(simCase.examTrap || 'Trace the current line before jumping to the output.')}`
    : `Click <strong>Run next line</strong> to start the demonstration.<br><br><strong>Exam trap:</strong> ${escapeHtml(simCase.examTrap || 'Trace carefully before predicting the output.')}`;
  if (followNode) followNode.textContent = simCase.dseTransfer || simCase.followUp || 'DSE transfer: predict how the output changes if one input value is changed.';
  renderTopicSimulationPrediction(current?.checkpoint ? simCase.prediction : null);
}

function renderTopicSimulationArray(arr, activeIndex = null) {
  const arrayNode = topicSimulationPanel.querySelector('#topicSimArrayCells');
  if (!arrayNode) return;
  if (!arr.length) {
    arrayNode.innerHTML = '<div class="array-cell empty-cell"><strong>No items yet</strong><span class="index">watch this space</span></div>';
    return;
  }
  arrayNode.innerHTML = arr.map((item, idx) => {
    const index = idx + 1;
    const value = typeof item === 'object' && item !== null ? item.value : item;
    const subvalue = typeof item === 'object' && item !== null ? item.subvalue : `[${index}]`;
    const active = Array.isArray(activeIndex) ? activeIndex.includes(index) : activeIndex === index;
    const className = active ? (Array.isArray(activeIndex) ? 'swap-cell active-cell' : 'active-cell') : '';
    return `<div class="array-cell ${className}"><strong>${escapeHtml(formatValue(value))}</strong><span class="index">${escapeHtml(subvalue || `[${index}]`)}</span></div>`;
  }).join('');
}

function renderTopicSimulationVariables(vars) {
  const rowsNode = topicSimulationPanel.querySelector('#topicSimVariableRows');
  if (!rowsNode) return;
  const meanings = topicSimState.currentCase?.variables || {};
  rowsNode.innerHTML = Object.keys(meanings).map(name => `
    <tr>
      <td>${escapeHtml(name)}</td>
      <td class="sim-value-cell">${escapeHtml(formatValue(vars[name]))}</td>
      <td>${escapeHtml(meanings[name])}</td>
    </tr>
  `).join('');
}

function renderTopicSimulationPrediction(prediction) {
  const predictionNode = topicSimulationPanel.querySelector('#topicSimPrediction');
  if (!predictionNode) return;
  if (!prediction) {
    predictionNode.innerHTML = `
      <div class="prediction-panel inline-prediction">
        <p class="eyebrow">Prediction checkpoint</p>
        <h3>Pause and think</h3>
        <p class="question-text">Run the program until a checkpoint appears.</p>
      </div>
    `;
    return;
  }
  predictionNode.innerHTML = `
    <div class="prediction-panel inline-prediction">
      <p class="eyebrow">Prediction checkpoint</p>
      <h3>Pause and think</h3>
      <p class="question-text">${escapeHtml(prediction.question)}</p>
      <div class="option-grid">
        ${prediction.options.map((option, index) => `<button type="button" data-topic-prediction-option="${index}">${escapeHtml(option.text)}</button>`).join('')}
      </div>
      <p class="feedback-text" id="topicSimPredictionFeedback"></p>
    </div>
  `;
  predictionNode.querySelectorAll('[data-topic-prediction-option]').forEach(button => {
    button.addEventListener('click', () => {
      const option = prediction.options[Number(button.dataset.topicPredictionOption)];
      predictionNode.querySelectorAll('[data-topic-prediction-option]').forEach(btn => btn.disabled = true);
      button.classList.add(option.correct ? 'correct' : 'wrong');
      const feedback = predictionNode.querySelector('#topicSimPredictionFeedback');
      if (feedback) {
        feedback.textContent = option.feedback;
        feedback.className = `feedback-text ${option.correct ? 'good' : 'bad'}`;
      }
    });
  });
}

function nextTopicSimulationStep() {
  const simCase = topicSimState.currentCase;
  if (!simCase) return;
  if (topicSimState.stepIndex < simCase.trace.length - 1) {
    topicSimState.stepIndex += 1;
    renderTopicSimulationState();
  } else {
    stopTopicSimulation();
    const statusNode = topicSimulationPanel.querySelector('#topicSimStatus');
    if (statusNode) statusNode.textContent = 'Completed';
  }
}

function previousTopicSimulationStep() {
  stopTopicSimulation();
  if (topicSimState.stepIndex > -1) {
    topicSimState.stepIndex -= 1;
    renderTopicSimulationState();
  }
}

function resetTopicSimulation() {
  stopTopicSimulation();
  topicSimState.stepIndex = -1;
  renderTopicSimulationState();
}

function toggleTopicSimulationAuto() {
  if (topicSimState.timer) {
    stopTopicSimulation();
    return;
  }
  topicSimState.timer = setInterval(() => {
    const simCase = topicSimState.currentCase;
    if (!simCase || topicSimState.stepIndex >= simCase.trace.length - 1) {
      stopTopicSimulation();
      return;
    }
    nextTopicSimulationStep();
  }, 850);
}

function renderTopicActivities(items) {
  topicActivityPanel.classList.remove('hidden');
  if (!items.length) {
    topicActivityPanel.innerHTML = `
      <div class="activity-header">
        <div>
          <p class="eyebrow">Activities</p>
          <h3>To be added</h3>
          <p>Activity design is intentionally left blank here. New tasks should be added only when they genuinely help students see a concept, practise a DSE-style skill, or fix a common mistake.</p>
        </div>
        <span class="activity-count">To be added</span>
      </div>
      <article class="activity-placeholder" aria-live="polite">
        <strong>To be added</strong>
        <p>No click-only or shallow activity is shown for this chapter. A meaningful activity can be designed later with a clear learning purpose, feedback and checkpoint transfer.</p>
      </article>
    `;
    return;
  }
  topicActivityPanel.innerHTML = `
    <div class="activity-header">
      <div>
        <p class="eyebrow">Activities</p>
        <h3>Meaningful practice only</h3>
        <p>Activities should demonstrate the concept, ask students to predict or build something, give useful feedback and lead to a DSE-style transfer task.</p>
      </div>
      <span class="activity-count">${items.length} ${items.length === 1 ? 'activity' : 'activities'}</span>
    </div>
    <div class="activity-grid">
      ${items.map((item, index) => `
        <button class="activity-card" type="button" data-activity-index="${index}">
          <span class="activity-status ${statusClass(item.status)}">${escapeHtml(item.status)}</span>
          <span>${escapeHtml(activityModeLabel(item.mode))}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.goal)}</small>
        </button>
      `).join('')}
    </div>
    <div id="activityStage" class="activity-stage" aria-live="polite"></div>
  `;
  topicActivityPanel.querySelectorAll('[data-activity-index]').forEach(button => {
    button.addEventListener('click', () => {
      topicActivityPanel.querySelectorAll('.activity-card').forEach(card => card.classList.remove('active'));
      button.classList.add('active');
      renderInteractiveActivity(items[Number(button.dataset.activityIndex)]);
    });
  });
  renderInteractiveActivity(items[0]);
  topicActivityPanel.querySelector('[data-activity-index="0"]')?.classList.add('active');
}

function renderInteractiveActivity(activity) {
  const stage = document.getElementById('activityStage');
  if (!stage || !activity) return;
  stopA2ParityTimer();
  stopA3TwosComplementAnimation();
  if (activity.demoKey) stage.innerHTML = makeDemoLaunchActivity(activity);
  if (activity.arcadeKey) stage.innerHTML = makeArcadeLaunchActivity(activity);
  if (activity.mode === 'dataInfo') stage.innerHTML = makeDataInformationGame(activity);
  if (activity.mode === 'sorter') stage.innerHTML = makeSorterActivity(activity);
  if (activity.mode === 'builder') stage.innerHTML = makeBuilderActivity(activity);
  if (activity.mode === 'sequence') stage.innerHTML = makeSequenceActivity(activity);
  if (activity.mode === 'visualiser') stage.innerHTML = makeVisualiserActivity(activity);
  if (activity.mode === 'dataLab') stage.innerHTML = makeDataLabActivity(activity);
  if (activity.mode === 'simulator') stage.innerHTML = makeSimulatorActivity(activity);
  if (activity.mode === 'a2Detective') stage.innerHTML = renderA2ValidButWrongDetective();
  if (activity.mode === 'a2FormLab') stage.innerHTML = renderA2FormDesignLab();
  if (activity.mode === 'a2ParityShooter') stage.innerHTML = renderA2ParityBitShooter();
  if (activity.mode === 'a3TwosComplementVisualLab') stage.innerHTML = renderA3TwosComplementVisualLab();
  if (activity.mode === 'a3QuantizationLab') stage.innerHTML = renderA3QuantizationVisualizer();
  if (activity.mode === 'a3BitmapLab') stage.innerHTML = renderA3BitmapResolutionLab();
  if (activity.mode === 'a3Utf8Encoder') stage.innerHTML = renderA3Utf8Encoder();
  if (activity.mode === 'd3ListOps') stage.innerHTML = renderD3ListOperationTrainer();
  if (activity.mode === 'a4FormulaCopyRescue') stage.innerHTML = renderA4FormulaCopyRescue();
  if (activity.mode === 'c2Cipher') stage.innerHTML = renderC2CipherEncryptionLab(activity);
  bindActivityStage(activity);
}

function activityModeLabel(mode) {
  const labels = {
    demo: 'visual demo',
    dataInfo: 'sorting game',
    sorter: 'sorter',
    builder: 'builder',
    sequence: 'sequence',
    visualiser: 'visualiser',
    dataLab: 'data lab',
    simulator: 'simulator',
    a2Detective: 'case investigation',
    a2FormLab: 'form builder',
    a2ParityShooter: 'transmission game',
    a3TwosComplementVisualLab: 'bit lab',
    a3QuantizationLab: 'signal lab',
    a3BitmapLab: 'pixel lab',
    a3Utf8Encoder: 'encoding lab',
    d3ListOps: 'list trainer',
    a4FormulaCopyRescue: 'formula rescue',
    c2Cipher: 'cipher lab'
  };
  return labels[mode] || mode;
}

function makeDemoLaunchActivity(activity) {
  const demo = demos[activity.demoKey];
  return makeActivityShell(activity, `
    <div class="demo-launch-panel">
      <div>
        <p class="small-label">Linked simulation</p>
        <h4>${escapeHtml(demo.title)}</h4>
        <p>${escapeHtml(demo.description)}</p>
      </div>
      <button class="primary-btn" type="button" data-open-demo="${escapeHtml(activity.demoKey)}">Open visual demo</button>
      <p class="activity-feedback">This opens the existing Programming Visual Lab with the correct demo selected. Use the step runner, checkpoint and random exercise there.</p>
    </div>
  `);
}

function makeArcadeLaunchActivity(activity) {
  const arcade = arcadeData[activity.arcadeKey];
  return makeActivityShell(activity, `
    <div class="demo-launch-panel">
      <div>
        <p class="small-label">Linked lab</p>
        <h4>${escapeHtml(arcade.title)}</h4>
        <p>${escapeHtml(arcade.description)}</p>
      </div>
      <button class="primary-btn" type="button" data-open-arcade="${escapeHtml(activity.arcadeKey)}">Open interactive lab</button>
      <p class="activity-feedback">This opens the existing interactive lab connected to this Core A chapter. Complete the missions, then return to the chapter checkpoint.</p>
    </div>
  `);
}

function renderC2CipherEncryptionLab(activity) {
  return makeActivityShell(activity, `
    <div class="c2-cipher-lab">
      <div class="c2-cipher-controls">
        <label>
          <span>Plaintext message</span>
          <input type="text" value="PAY NOW" maxlength="24" data-c2-cipher-input>
        </label>
        <label>
          <span>Shift key</span>
          <input type="range" min="1" max="25" value="3" data-c2-cipher-shift>
          <strong data-c2-shift-value>3</strong>
        </label>
      </div>
      <div class="c2-cipher-board" aria-live="polite">
        <article>
          <span>Plaintext</span>
          <strong data-c2-plain-output>PAY NOW</strong>
        </article>
        <article class="encrypt-arrow">
          <span>Encrypt with key +3</span>
          <strong>letters move forward</strong>
        </article>
        <article>
          <span>Ciphertext</span>
          <strong data-c2-cipher-output>SDC QRZ</strong>
        </article>
      </div>
      <div class="c2-cipher-alphabet" data-c2-cipher-alphabet aria-label="Plain alphabet mapped to encrypted alphabet"></div>
      <div class="c2-cipher-actions">
        <button class="secondary-btn" type="button" data-c2-cipher-example="LOGIN CODE">Login code</button>
        <button class="secondary-btn" type="button" data-c2-cipher-example="PAYMENT">Payment</button>
        <button class="secondary-btn" type="button" data-c2-cipher-example="HELLO ICT">Hello ICT</button>
      </div>
      <p class="activity-feedback" data-c2-cipher-feedback aria-live="polite">Encryption changes readable plaintext into ciphertext before transmission. HTTPS uses stronger SSL/TLS encryption, not this simple classroom cipher.</p>
    </div>
  `);
}

function caesarShift(text, shiftAmount) {
  const shift = Number(shiftAmount) || 0;
  return String(text).toUpperCase().replace(/[A-Z]/g, char => {
    const code = char.charCodeAt(0) - 65;
    return String.fromCharCode(((code + shift) % 26) + 65);
  });
}

function renderC2CipherAlphabet(shiftAmount) {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => {
    const encrypted = caesarShift(letter, shiftAmount);
    return `<span><b>${letter}</b><i>${encrypted}</i></span>`;
  }).join('');
}

function makeActivityShell(activity, body) {
  return `
    <article class="activity-workbench">
      <div class="activity-workbench-copy">
        <p class="eyebrow">${escapeHtml(activityModeLabel(activity.mode))}</p>
        <h3>${escapeHtml(activity.title)}</h3>
        <span class="activity-status ${statusClass(activity.status)}">${escapeHtml(activity.status)}</span>
        <p>${escapeHtml(activity.goal)}</p>
        <p class="misconception-line">${escapeHtml(activity.misconception)}</p>
        <p class="challenge-line">${escapeHtml(activity.challenge)}</p>
        <p class="transfer-line">${escapeHtml(activity.transfer)}</p>
      </div>
      <div class="activity-play-area">
        ${body}
      </div>
    </article>
  `;
}

function statusClass(status) {
  if (status === 'Available now') return 'status-available';
  if (status === 'Coming soon') return 'status-soon';
  return 'status-concept';
}

function makeDataInformationGame(activity) {
  const cards = [
    { text: '40.3, 38.4, 34.5', type: 'Data', note: 'These are unorganised facts. Without context, the numbers do not yet give useful meaning.' },
    { text: 'Weight chart of Primary Students', type: 'Information', note: 'The raw weights have been organised and presented to show a meaningful pattern.' },
    { text: 'Pass', type: 'Information', note: 'A rule has already been applied to interpret the mark.' },
    { text: 'Temperature = 30°C at 2 pm', type: 'Information', note: 'The value has context: what was measured and when.' },
    { text: '6200, 08:10, 76 bpm', type: 'Data', note: 'These are recorded facts from a smart watch before interpretation.' },
    { text: 'Class average = 72.4 marks', type: 'Information', note: 'The marks have been processed by calculation.' },
    { text: 'A folder of student marks', type: 'Data', note: 'The stored marks are data; a summary such as class average would be information.' },
    { text: 'Student ranking: 1st, 2nd, 3rd', type: 'Information', note: 'The original marks have been processed and arranged to give a ranking.' }
  ];
  return makeActivityShell(activity, `
    <div class="data-info-game" data-data-info-game>
      <div class="data-info-card-bank">
        ${cards.map((card, index) => `
          <button class="data-info-card" type="button" data-info-card="${index}" data-type="${escapeHtml(card.type)}" data-note="${escapeHtml(card.note)}">
            ${escapeHtml(card.text)}
          </button>
        `).join('')}
      </div>
      <div class="data-info-zones">
        ${['Data', 'Information'].map(zone => `
          <div class="data-info-zone" data-info-zone="${zone}">
            <strong>${zone}</strong>
            <span>Drop cards here by clicking a card, then this zone.</span>
          </div>
        `).join('')}
      </div>
      <div class="data-transformer">
        <div>
          <p class="small-label">Transformation model</p>
          <h4>Data → processing → information</h4>
        </div>
        <div class="transform-flow" id="transformFlow">
          <span>40.3, 38.4, 34.5</span>
          <span>organise + calculate</span>
          <span>Weight distribution chart</span>
        </div>
        <button class="secondary-btn" type="button" data-transform-data>Animate transformation</button>
      </div>
      <p class="activity-feedback">Choose a card. Decide whether it is data or information.</p>
    </div>
  `);
}

function makeSorterActivity(activity) {
  return makeActivityShell(activity, `
    <div class="concept-token-bank">
      ${activity.tokens.map((token, index) => `<button class="concept-token" type="button" data-sort-token="${index}">${escapeHtml(token)}</button>`).join('')}
    </div>
    <div class="concept-zone-grid">
      ${activity.zones.map(zone => `<div class="concept-zone" data-zone-name="${escapeHtml(zone)}"><strong>${escapeHtml(zone)}</strong><span>Click cards to place them here.</span></div>`).join('')}
    </div>
    <p class="activity-feedback">Click a token, then click a zone. Discuss whether another zone could also be justified.</p>
  `);
}

function makeBuilderActivity(activity) {
  return makeActivityShell(activity, `
    <div class="concept-token-bank">
      ${activity.tokens.map((token, index) => `<button class="concept-token" type="button" data-build-token="${index}">${escapeHtml(token)}</button>`).join('')}
    </div>
    <div class="builder-canvas" id="builderCanvas">Build area: click components above to add them here.</div>
    <div class="activity-tools">
      <button class="primary-btn" type="button" data-run-builder>Run model</button>
      <button class="ghost-btn" type="button" data-clear-builder>Clear</button>
    </div>
    <p class="activity-feedback">A useful model should show input, process, output and one reason for the design.</p>
  `);
}

function makeSequenceActivity(activity) {
  return makeActivityShell(activity, `
    <div class="concept-token-bank">
      ${activity.tokens.map((token, index) => `<button class="concept-token" type="button" data-sequence-token="${index}">${escapeHtml(token)}</button>`).join('')}
    </div>
    <div class="sequence-track" id="sequenceTrack">Sequence track: click steps in the order you want to test.</div>
    <div class="activity-tools">
      <button class="primary-btn" type="button" data-run-sequence>Animate sequence</button>
      <button class="ghost-btn" type="button" data-clear-sequence>Clear</button>
    </div>
    <p class="activity-feedback">A process is easier to understand when the order of events is visible.</p>
  `);
}

function makeVisualiserActivity(activity) {
  return makeActivityShell(activity, `
    <label class="range-lab">
      <span>Move the concept slider</span>
      <input type="range" min="1" max="6" value="3" data-visual-slider>
    </label>
    <div class="visual-bars" id="visualBars">
      ${activity.tokens.slice(0, 6).map((token, index) => `<span style="height:${36 + index * 12}px">${escapeHtml(token)}</span>`).join('')}
    </div>
    <p class="activity-feedback">Move the slider to make the visual model more detailed or more risky, depending on the topic.</p>
  `);
}

function makeDataLabActivity(activity) {
  return makeActivityShell(activity, `
    <div class="data-lab-row" id="dataLabRow">
      ${activity.tokens.slice(0, 6).map((token, index) => `<button class="data-node" type="button" data-data-node="${index}"><span>${index}</span>${escapeHtml(token)}</button>`).join('')}
    </div>
    <div class="activity-tools">
      <button class="primary-btn" type="button" data-step-data>Step pointer</button>
      <button class="secondary-btn" type="button" data-swap-data>Swap / move</button>
      <button class="ghost-btn" type="button" data-reset-data>Reset</button>
    </div>
    <p class="activity-feedback">Watch the active index or pointer. The aim is to see movement, comparison and update.</p>
  `);
}

function makeSimulatorActivity(activity) {
  return makeActivityShell(activity, `
    <article class="activity-placeholder compact-placeholder">
      <strong>To be redesigned</strong>
      <p>This old toggle-and-meter activity format has been removed. Replace it later with a task that has a clear student action, useful feedback and a DSE-style transfer question.</p>
    </article>
  `);
}

function renderA2ValidButWrongDetective() {
  return makeActivityShell({
    title: 'Valid but Wrong Detective',
    mode: 'a2Detective',
    status: 'Available now',
    goal: 'Find cases where data passes validation but is still incorrect.',
    misconception: 'Validation checks whether data follows rules. It does not guarantee the value is true or intended.',
    challenge: 'Read the rule, entered value and intended value before choosing the case type.',
    transfer: 'DSE transfer: state the validation method and one limitation.'
  }, `<div class="a2-detective" data-a2-detective></div>`);
}

function bindA2ValidButWrongDetective() {
  a2DetectiveState = { caseIndex: 0, solved: new Set(), feedback: null, answered: false };
  renderA2DetectiveCase();
}

function renderA2DetectiveCase() {
  const root = document.querySelector('[data-a2-detective]');
  if (!root) return;
  const currentCase = a2DetectiveCases[a2DetectiveState.caseIndex];
  const feedback = a2DetectiveState.feedback;
  root.innerHTML = `
    <div class="a2-activity-toolbar">
      <span class="activity-count">Case ${a2DetectiveState.caseIndex + 1} / ${a2DetectiveCases.length}</span>
      <span class="activity-count solved-count">Correct cases solved: ${a2DetectiveState.solved.size} / ${a2DetectiveCases.length}</span>
    </div>
    <div class="a2-detective-grid">
      <article class="a2-case-card ${feedback ? (feedback.correct ? 'case-correct' : 'case-wrong') : ''}">
        <div class="a2-case-top">
          <span>${escapeHtml(currentCase.field)}</span>
          <strong class="${currentCase.result === 'Accepted' ? 'accepted' : 'rejected'}">${escapeHtml(currentCase.result)}</strong>
        </div>
        <div class="a2-case-row ${feedback && !feedback.correct && currentCase.highlight === 'rule' ? 'case-highlight' : ''}">
          <small>Validation rule</small>
          <strong>${escapeHtml(currentCase.rule)}</strong>
        </div>
        ${currentCase.details.map(([label, value]) => `
          <div class="a2-case-row ${feedback && !feedback.correct && currentCase.highlight === 'intended' && label.includes('Intended') ? 'case-highlight' : ''}">
            <small>${escapeHtml(label)}</small>
            <strong>${escapeHtml(value)}</strong>
          </div>
        `).join('')}
        ${feedback ? `<div class="a2-stamp ${feedback.correct ? 'stamp-good' : 'stamp-warning'}">${escapeHtml(feedback.correct ? currentCase.stamp : 'Check the rule and source value')}</div>` : ''}
      </article>
      <section class="a2-answer-panel" aria-label="Answer choices">
        <p class="small-label">Your decision</p>
        <div class="a2-answer-grid">
          ${a2DetectiveAnswers.map(answer => `
            <button class="a2-choice-chip ${feedback?.selected === answer.key ? (feedback.correct ? 'is-correct' : 'is-wrong') : ''}" type="button" data-a2-detective-answer="${answer.key}">
              ${escapeHtml(answer.label)}
            </button>
          `).join('')}
        </div>
        <div class="activity-tools">
          <button class="secondary-btn" type="button" data-a2-next-case>Next case</button>
          <button class="ghost-btn" type="button" data-a2-random-case>Random case</button>
        </div>
      </section>
    </div>
    <div class="a2-feedback-panel ${feedback ? (feedback.correct ? 'feedback-good' : 'feedback-bad') : ''}" aria-live="polite">
      ${feedback ? `
        <strong>${feedback.correct ? 'Correct.' : 'Try again.'}</strong>
        <span>${escapeHtml(feedback.message)}</span>
        ${feedback.correct ? '<i aria-hidden="true">✓</i>' : '<b aria-hidden="true">!</b>'}
      ` : `
        <strong>Investigate the case.</strong>
        <span>Decide whether the value is invalid, valid but wrong, valid and likely correct, or needs verification.</span>
      `}
    </div>
  `;
  bindA2DetectiveCaseControls(root);
}

function bindA2DetectiveCaseControls(root) {
  root.onclick = event => {
    const answerButton = event.target.closest('[data-a2-detective-answer]');
    if (answerButton) {
      const currentCase = a2DetectiveCases[a2DetectiveState.caseIndex];
      const selected = answerButton.dataset.a2DetectiveAnswer;
      const correct = currentCase.acceptedAnswers.includes(selected);
      if (correct) a2DetectiveState.solved.add(currentCase.id);
      a2DetectiveState.feedback = {
        selected,
        correct,
        message: correct
          ? currentCase.teachingPoint
          : 'Careful: validation checks rules. Verification checks whether the copied or entered value matches the source.'
      };
      a2DetectiveState.answered = true;
      renderA2DetectiveCase();
      return;
    }
    if (event.target.closest('[data-a2-next-case]')) {
      a2DetectiveState.caseIndex = (a2DetectiveState.caseIndex + 1) % a2DetectiveCases.length;
      a2DetectiveState.feedback = null;
      a2DetectiveState.answered = false;
      renderA2DetectiveCase();
      return;
    }
    if (event.target.closest('[data-a2-random-case]')) {
      let nextIndex = randInt(0, a2DetectiveCases.length - 1);
      if (a2DetectiveCases.length > 1) {
        while (nextIndex === a2DetectiveState.caseIndex) nextIndex = randInt(0, a2DetectiveCases.length - 1);
      }
      a2DetectiveState.caseIndex = nextIndex;
      a2DetectiveState.feedback = null;
      a2DetectiveState.answered = false;
      renderA2DetectiveCase();
    }
  };
}

function renderA2FormDesignLab() {
  return makeActivityShell({
    title: 'Form Design Lab',
    mode: 'a2FormLab',
    status: 'Available now',
    goal: 'Choose suitable input controls and validation checks for a school form.',
    misconception: 'Input controls and validation checks solve different parts of the data quality problem.',
    challenge: 'Build a school activity registration form that reduces avoidable input errors.',
    transfer: 'DSE transfer: justify the control and check using the field type and likely error.'
  }, `<div class="a2-form-lab" data-a2-form-lab></div>`);
}

function bindA2FormDesignLab() {
  a2FormLabState = {
    mode: 'guided',
    fieldIndex: 0,
    selections: {},
    checked: false,
    controlOptions: shuffleList(a2FormInputControls),
    validationOptions: shuffleList(a2FormValidationChecks)
  };
  renderA2FormLab();
}

function renderA2FormLab() {
  const root = document.querySelector('[data-a2-form-lab]');
  if (!root) return;
  root.innerHTML = `
    <div class="a2-form-header">
      <div>
        <p class="small-label">School activity registration form</p>
        <h4>Design fields that reduce input errors</h4>
      </div>
      <div class="a2-mode-toggle" role="tablist" aria-label="Form Design Lab mode">
        <button class="${a2FormLabState.mode === 'guided' ? 'active' : ''}" type="button" data-a2-form-mode="guided">Guided mode</button>
        <button class="${a2FormLabState.mode === 'challenge' ? 'active' : ''}" type="button" data-a2-form-mode="challenge">Challenge mode</button>
      </div>
    </div>
    ${a2FormLabState.mode === 'guided' ? renderA2FormGuidedMode() : renderA2FormChallengeMode()}
  `;
  bindA2FormLabControls(root);
}

function renderA2FormGuidedMode() {
  const field = a2FormFields[a2FormLabState.fieldIndex];
  const selection = a2FormLabState.selections[field.id] || {};
  const controlCorrect = field.controls.includes(selection.control);
  const validationCorrect = field.validations.includes(selection.validation);
  const hasFeedback = Boolean(selection.control || selection.validation);
  return `
    <div class="a2-guided-progress">
      <span class="activity-count">Field ${a2FormLabState.fieldIndex + 1} / ${a2FormFields.length}</span>
      <span class="activity-count solved-count">${countCompletedA2FormFields()} / ${a2FormFields.length} good designs</span>
    </div>
    <article class="a2-form-field-card ${controlCorrect && validationCorrect ? 'field-complete' : ''}">
      ${renderA2FieldPreview(field)}
      <div class="a2-form-choice-column">
        <p class="small-label">1. Choose input control</p>
        <div class="a2-chip-bank">
          ${a2FormLabState.controlOptions.map(option => `
            <button class="a2-choice-chip ${selection.control === option ? (controlCorrect ? 'is-correct' : 'is-wrong') : ''}" type="button" data-a2-control-choice="${escapeHtml(option)}">
              ${escapeHtml(option)}
            </button>
          `).join('')}
        </div>
      </div>
      <div class="a2-form-choice-column">
        <p class="small-label">2. Choose validation check</p>
        <div class="a2-chip-bank">
          ${a2FormLabState.validationOptions.map(option => `
            <button class="a2-choice-chip ${selection.validation === option ? (validationCorrect ? 'is-correct' : 'is-wrong') : ''}" type="button" data-a2-validation-choice="${escapeHtml(option)}">
              ${escapeHtml(option)}
            </button>
          `).join('')}
        </div>
      </div>
      <div class="a2-form-feedback" aria-live="polite">
        ${renderA2FormGuidedFeedback(field, selection, controlCorrect, validationCorrect, hasFeedback)}
      </div>
      <div class="activity-tools">
        <button class="secondary-btn" type="button" data-a2-prev-field>Previous field</button>
        <button class="primary-btn" type="button" data-a2-next-field>Next field</button>
      </div>
    </article>
  `;
}

function renderA2FormChallengeMode() {
  return `
    <div class="a2-challenge-grid">
      ${a2FormFields.map(field => {
        const selection = a2FormLabState.selections[field.id] || {};
        const controlCorrect = field.controls.includes(selection.control);
        const validationCorrect = field.validations.includes(selection.validation);
        return `
          <article class="a2-form-row ${a2FormLabState.checked && controlCorrect && validationCorrect ? 'field-complete' : ''} ${a2FormLabState.checked && (!controlCorrect || !validationCorrect) ? 'field-review' : ''}">
            ${renderA2FieldPreview(field)}
            <label>
              <span>Input control</span>
              <select data-a2-challenge-control="${escapeHtml(field.id)}">
                <option value="">Choose...</option>
                ${a2FormLabState.controlOptions.map(option => `<option value="${escapeHtml(option)}" ${selection.control === option ? 'selected' : ''}>${escapeHtml(option)}</option>`).join('')}
              </select>
            </label>
            <label>
              <span>Validation check</span>
              <select data-a2-challenge-validation="${escapeHtml(field.id)}">
                <option value="">Choose...</option>
                ${a2FormLabState.validationOptions.map(option => `<option value="${escapeHtml(option)}" ${selection.validation === option ? 'selected' : ''}>${escapeHtml(option)}</option>`).join('')}
              </select>
            </label>
            ${a2FormLabState.checked ? `
              <p class="a2-row-feedback">${escapeHtml(makeA2FormFeedbackText(field, selection, controlCorrect, validationCorrect))}</p>
            ` : ''}
          </article>
        `;
      }).join('')}
    </div>
    <div class="activity-tools">
      <button class="primary-btn" type="button" data-a2-check-design>Check design</button>
      <button class="ghost-btn" type="button" data-a2-reset-design>Reset</button>
    </div>
    <p class="activity-feedback" aria-live="polite">Design all fields first, then check the whole form.</p>
  `;
}

function renderA2FieldPreview(field) {
  const selection = a2FormLabState.selections[field.id] || {};
  const controlCorrect = field.controls.includes(selection.control);
  const validationCorrect = field.validations.includes(selection.validation);
  return `
    <div class="a2-real-form-row">
      <div>
        <span class="small-label">${escapeHtml(field.field)}</span>
        <div class="a2-control-preview ${previewClassForA2Control(selection.control || field.controls[0])} ${controlCorrect ? 'preview-good' : ''}">
          ${makeA2ControlPreview(field, selection.control || field.controls[0])}
        </div>
      </div>
      <div class="a2-badge-stack">
        ${selection.control ? `<span class="a2-fit-badge ${controlCorrect ? 'good' : 'warn'}">${controlCorrect ? 'Good fit' : 'Not ideal'}</span>` : '<span class="a2-fit-badge muted">Choose control</span>'}
        ${selection.validation ? `<span class="a2-fit-badge ${validationCorrect ? 'good' : 'warn'}">${validationCorrect ? 'Rule protects this field' : 'Rule mismatch'}</span>` : '<span class="a2-fit-badge muted">Choose rule</span>'}
      </div>
    </div>
  `;
}

function makeA2ControlPreview(field, control) {
  if (control === 'Drop-down list') return `<button type="button" tabindex="-1">${escapeHtml(field.preview)} <span>v</span></button><div><span>4A</span><span>4B</span><span>4C</span><span>4D</span></div>`;
  if (control === 'Radio button') return `<span class="radio-dot"></span><strong>${escapeHtml(field.preview)}</strong><span class="radio-dot empty"></span><strong>Sports day</strong>`;
  if (control === 'Checkboxes') return `<span class="check-dot"></span><strong>${escapeHtml(field.preview)}</strong><span class="check-dot"></span><strong>Debate</strong>`;
  if (control === 'Date picker') return `<input type="text" tabindex="-1" value="${escapeHtml(field.preview)}" readonly><span class="calendar-icon">31</span>`;
  return `<input type="text" tabindex="-1" value="${escapeHtml(field.preview)}" readonly>`;
}

function previewClassForA2Control(control) {
  const classes = {
    'Drop-down list': 'preview-dropdown',
    'Radio button': 'preview-radio',
    'Checkboxes': 'preview-checkbox',
    'Date picker': 'preview-date',
    'Text box': 'preview-text'
  };
  return classes[control] || 'preview-text';
}

function renderA2FormGuidedFeedback(field, selection, controlCorrect, validationCorrect, hasFeedback) {
  if (!hasFeedback) return '<strong>Choose one control and one validation check.</strong><span>Feedback appears immediately after each choice.</span>';
  const parts = [];
  if (selection.control) parts.push(controlCorrect ? `Control: Good fit. ${field.reason}` : `Control: Not ideal. ${field.wrongControl}`);
  if (selection.validation) parts.push(validationCorrect ? `Validation: Rule protects this field. ${field.reason}` : `Validation: Mismatch. ${field.wrongValidation}`);
  return `<strong>${controlCorrect && validationCorrect ? 'Good design.' : 'Review this design.'}</strong><span>${escapeHtml(parts.join(' '))}</span>`;
}

function makeA2FormFeedbackText(field, selection, controlCorrect, validationCorrect) {
  if (!selection.control || !selection.validation) return 'Complete both choices before checking this field.';
  if (controlCorrect && validationCorrect) return `Good fit. ${field.reason}`;
  if (!controlCorrect && !validationCorrect) return `${field.wrongControl} ${field.wrongValidation}`;
  if (!controlCorrect) return field.wrongControl;
  return field.wrongValidation;
}

function bindA2FormLabControls(root) {
  root.onclick = event => {
    const modeButton = event.target.closest('[data-a2-form-mode]');
    if (modeButton) {
      a2FormLabState.mode = modeButton.dataset.a2FormMode;
      a2FormLabState.checked = false;
      renderA2FormLab();
      return;
    }
    const controlButton = event.target.closest('[data-a2-control-choice]');
    if (controlButton) {
      updateA2FormSelection(a2FormFields[a2FormLabState.fieldIndex].id, 'control', controlButton.dataset.a2ControlChoice);
      renderA2FormLab();
      return;
    }
    const validationButton = event.target.closest('[data-a2-validation-choice]');
    if (validationButton) {
      updateA2FormSelection(a2FormFields[a2FormLabState.fieldIndex].id, 'validation', validationButton.dataset.a2ValidationChoice);
      renderA2FormLab();
      return;
    }
    if (event.target.closest('[data-a2-prev-field]')) {
      a2FormLabState.fieldIndex = Math.max(0, a2FormLabState.fieldIndex - 1);
      renderA2FormLab();
      return;
    }
    if (event.target.closest('[data-a2-next-field]')) {
      a2FormLabState.fieldIndex = (a2FormLabState.fieldIndex + 1) % a2FormFields.length;
      renderA2FormLab();
      return;
    }
    if (event.target.closest('[data-a2-check-design]')) {
      a2FormLabState.checked = true;
      renderA2FormLab();
      return;
    }
    if (event.target.closest('[data-a2-reset-design]')) {
      a2FormLabState.selections = {};
      a2FormLabState.checked = false;
      renderA2FormLab();
    }
  };
  root.onchange = event => {
    if (event.target.matches('[data-a2-challenge-control]')) {
      updateA2FormSelection(event.target.dataset.a2ChallengeControl, 'control', event.target.value);
      return;
    }
    if (event.target.matches('[data-a2-challenge-validation]')) {
      updateA2FormSelection(event.target.dataset.a2ChallengeValidation, 'validation', event.target.value);
    }
  };
}

function updateA2FormSelection(fieldId, type, value) {
  a2FormLabState.selections[fieldId] = {
    ...(a2FormLabState.selections[fieldId] || {}),
    [type]: value
  };
}

function countCompletedA2FormFields() {
  return a2FormFields.filter(field => {
    const selection = a2FormLabState.selections[field.id] || {};
    return field.controls.includes(selection.control) && field.validations.includes(selection.validation);
  }).length;
}

function shuffleList(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function renderA2ParityBitShooter() {
  return makeActivityShell({
    title: 'Parity Bit Shooter',
    mode: 'a2ParityShooter',
    status: 'Available now',
    goal: 'Shoot the correct parity bit and detect transmission errors.',
    misconception: 'Parity check is for error detection during data transmission. It does not prove the original message is meaningful or correct.',
    challenge: 'Count the 1 bits, choose the bit that gives the required parity, then inspect a received frame.',
    transfer: 'DSE transfer: write the counting step and mention that parity can detect but not correct errors.'
  }, `<div class="a2-parity-shooter" data-a2-parity-shooter></div>`);
}

function bindA2ParityBitShooter() {
  stopA2ParityTimer();
  a2ParityState = makeA2ParityRound('build', 'even');
  renderA2ParityShooter();
}

function makeA2ParityRound(mode = a2ParityState.mode || 'build', parityMode = a2ParityState.parityMode || 'even') {
  const bits = Array.from({ length: 7 }, () => randInt(0, 1));
  const parityBit = calculateParityBit(bits, parityMode);
  let receivedBits = [...bits, parityBit];
  if (mode === 'detect') {
    const errorCount = pick([0, 1, 2]);
    const indexes = shuffleList(receivedBits.map((_, index) => index)).slice(0, errorCount);
    indexes.forEach(index => {
      receivedBits[index] = receivedBits[index] === 1 ? 0 : 1;
    });
  }
  return {
    ...a2ParityState,
    mode,
    parityMode,
    bits,
    receivedBits,
    selectedBit: null,
    feedback: null,
    lastParityBit: parityBit
  };
}

function calculateParityBit(bits, parityMode) {
  const ones = countOnes(bits);
  const isEven = ones % 2 === 0;
  if (parityMode === 'even') return isEven ? 0 : 1;
  return isEven ? 1 : 0;
}

function countOnes(bits) {
  return bits.reduce((total, bit) => total + Number(bit), 0);
}

function parityIsValid(bits, parityMode) {
  const ones = countOnes(bits);
  return parityMode === 'even' ? ones % 2 === 0 : ones % 2 === 1;
}

function renderA2ParityShooter() {
  const root = document.querySelector('[data-a2-parity-shooter]');
  if (!root) return;
  const dataOnes = countOnes(a2ParityState.bits);
  const correctParity = calculateParityBit(a2ParityState.bits, a2ParityState.parityMode);
  const receivedOnes = countOnes(a2ParityState.receivedBits);
  const receivedValid = parityIsValid(a2ParityState.receivedBits, a2ParityState.parityMode);
  const feedback = a2ParityState.feedback;
  root.innerHTML = `
    <div class="a2-parity-topbar">
      <div class="a2-mode-toggle" role="tablist" aria-label="Parity Bit Shooter mode">
        <button class="${a2ParityState.mode === 'build' ? 'active' : ''}" type="button" data-a2-parity-mode="build">Build parity bit</button>
        <button class="${a2ParityState.mode === 'detect' ? 'active' : ''}" type="button" data-a2-parity-mode="detect">Check received data</button>
      </div>
      <div class="a2-mode-toggle parity-toggle" role="tablist" aria-label="Parity type">
        <button class="${a2ParityState.parityMode === 'even' ? 'active' : ''}" type="button" data-a2-parity-type="even">Even parity</button>
        <button class="${a2ParityState.parityMode === 'odd' ? 'active' : ''}" type="button" data-a2-parity-type="odd">Odd parity</button>
      </div>
      <div class="a2-score-strip">
        <span>Score: <strong>${a2ParityState.score}</strong></span>
        <span>Time Left: <strong>${a2ParityState.timeLeft}s</strong></span>
        <span>Streak: <strong>${a2ParityState.streak}</strong></span>
      </div>
    </div>
    <div class="a2-parity-arena ${feedback ? (feedback.correct ? 'shot-good' : 'shot-bad') : ''}">
      <section class="a2-transmission-lane">
        <p class="small-label">${a2ParityState.mode === 'build' ? 'Outgoing data bits' : 'Received frame: data bits + parity bit'}</p>
        <div class="a2-bit-stream" aria-label="Binary bits">
          ${(a2ParityState.mode === 'build' ? a2ParityState.bits : a2ParityState.receivedBits).map((bit, index, arr) => `
            <span class="a2-bit ${a2ParityState.mode === 'detect' && index === arr.length - 1 ? 'parity-bit' : ''}">${bit}</span>
          `).join('')}
        </div>
        <div class="a2-count-panel">
          <span>Number of 1s: <strong>${a2ParityState.mode === 'build' ? dataOnes : receivedOnes}</strong></span>
          <span>Target: <strong>${a2ParityState.parityMode === 'even' ? 'even number of 1s' : 'odd number of 1s'}</strong></span>
          ${a2ParityState.mode === 'build' ? `<span>Correct parity bit: <strong>${feedback ? correctParity : '?'}</strong></span>` : ''}
        </div>
      </section>
      <section class="a2-shooter-panel">
        ${a2ParityState.mode === 'build' ? `
          <p class="small-label">Shoot the parity bit</p>
          <div class="a2-shooter-buttons">
            <button class="a2-shot-btn ${a2ParityState.selectedBit === 0 ? 'selected-shot' : ''}" type="button" data-a2-shoot-bit="0">0</button>
            <button class="a2-shot-btn ${a2ParityState.selectedBit === 1 ? 'selected-shot' : ''}" type="button" data-a2-shoot-bit="1">1</button>
          </div>
        ` : `
          <p class="small-label">Transmission inspection</p>
          <div class="a2-shooter-buttons detect-buttons">
            <button class="a2-shot-btn" type="button" data-a2-detect-answer="accept">Accept frame</button>
            <button class="a2-shot-btn warning-shot" type="button" data-a2-detect-answer="flag">Flag error</button>
          </div>
        `}
        <div class="activity-tools">
          <button class="primary-btn" type="button" data-a2-start-parity-challenge>${a2ParityState.timerActive ? 'Challenge running' : 'Start 60s challenge'}</button>
          <button class="secondary-btn" type="button" data-a2-new-parity-round>New transmission</button>
        </div>
      </section>
    </div>
    <div class="a2-feedback-panel ${feedback ? (feedback.correct ? 'feedback-good' : 'feedback-bad') : ''}" aria-live="polite">
      ${feedback ? `
        <strong>${feedback.correct ? 'Hit!' : 'Miss.'}</strong>
        <span>${escapeHtml(feedback.message)}</span>
        ${feedback.correct ? '<i aria-hidden="true">✓</i>' : '<b aria-hidden="true">!</b>'}
      ` : `
        <strong>${a2ParityState.mode === 'build' ? 'Count, then shoot.' : 'Check the received frame.'}</strong>
        <span>${a2ParityState.mode === 'build' ? 'A parity bit is added before data transmission so the receiver can detect possible bit errors.' : 'The receiver counts all 1s, including the parity bit, and checks whether the parity rule still holds.'}</span>
      `}
    </div>
    <div class="a2-dse-panel">
      <div>
        <p class="small-label">How DSE examines this</p>
        <h4>Show counting, state limitation</h4>
      </div>
      <ul>
        ${a2ParityExamTips.map(tip => `<li>${escapeHtml(tip)}</li>`).join('')}
      </ul>
    </div>
  `;
  bindA2ParityControls(root);
}

function bindA2ParityControls(root) {
  root.onclick = event => {
    const modeButton = event.target.closest('[data-a2-parity-mode]');
    if (modeButton) {
      a2ParityState = makeA2ParityRound(modeButton.dataset.a2ParityMode, a2ParityState.parityMode);
      renderA2ParityShooter();
      return;
    }
    const typeButton = event.target.closest('[data-a2-parity-type]');
    if (typeButton) {
      a2ParityState = makeA2ParityRound(a2ParityState.mode, typeButton.dataset.a2ParityType);
      renderA2ParityShooter();
      return;
    }
    if (event.target.closest('[data-a2-start-parity-challenge]')) {
      startA2ParityChallenge();
      return;
    }
    const shootButton = event.target.closest('[data-a2-shoot-bit]');
    if (shootButton) {
      const selected = Number(shootButton.dataset.a2ShootBit);
      const correct = selected === calculateParityBit(a2ParityState.bits, a2ParityState.parityMode);
      a2ParityState.selectedBit = selected;
      updateA2ParityFeedback(correct, correct
        ? `Correct. The data has ${countOnes(a2ParityState.bits)} one(s), so adding ${selected} makes the total ${a2ParityState.parityMode}.`
        : `Count again. The data has ${countOnes(a2ParityState.bits)} one(s); choose the bit that makes the total ${a2ParityState.parityMode}.`);
      renderA2ParityShooter();
      if (correct && a2ParityState.timerActive && a2ParityState.mode === 'build') {
        setTimeout(() => {
          if (!a2ParityState.timerActive || !document.querySelector('[data-a2-parity-shooter]')) return;
          a2ParityState = makeA2ParityRound('build', a2ParityState.parityMode);
          renderA2ParityShooter();
        }, 520);
      }
      return;
    }
    const detectButton = event.target.closest('[data-a2-detect-answer]');
    if (detectButton) {
      const valid = parityIsValid(a2ParityState.receivedBits, a2ParityState.parityMode);
      const selectedAccept = detectButton.dataset.a2DetectAnswer === 'accept';
      const correct = selectedAccept === valid;
      updateA2ParityFeedback(correct, valid
        ? 'The parity rule still holds, so no error is detected. Remember: this does not prove no error occurred if two bits changed.'
        : 'The parity rule is broken, so the receiver should flag a possible transmission error.');
      renderA2ParityShooter();
      return;
    }
    if (event.target.closest('[data-a2-new-parity-round]')) {
      a2ParityState = makeA2ParityRound(a2ParityState.mode, a2ParityState.parityMode);
      renderA2ParityShooter();
    }
  };
}

function updateA2ParityFeedback(correct, message) {
  a2ParityState.feedback = { correct, message };
  if (correct) {
    a2ParityState.streak += 1;
    a2ParityState.completed += 1;
    a2ParityState.score += a2ParityState.timerActive ? 10 : 1;
  } else {
    a2ParityState.streak = 0;
  }
}

function startA2ParityChallenge() {
  stopA2ParityTimer();
  a2ParityState = makeA2ParityRound('build', a2ParityState.parityMode);
  a2ParityState.score = 0;
  a2ParityState.streak = 0;
  a2ParityState.completed = 0;
  a2ParityState.timeLeft = 60;
  a2ParityState.timerActive = true;
  a2ParityState.feedback = {
    correct: true,
    message: 'Challenge started. Count the 1 bits and shoot the parity bit before time runs out.'
  };
  a2ParityState.timer = setInterval(() => {
    a2ParityState.timeLeft = Math.max(0, a2ParityState.timeLeft - 1);
    if (a2ParityState.timeLeft === 0) {
      stopA2ParityTimer();
      a2ParityState.feedback = {
        correct: true,
        message: `Time is up. Final score: ${a2ParityState.score}. In DSE, remember to show the counting of 1 bits.`
      };
    }
    if (document.querySelector('[data-a2-parity-shooter]')) renderA2ParityShooter();
  }, 1000);
  renderA2ParityShooter();
}

function stopA2ParityTimer() {
  if (a2ParityState.timer) clearInterval(a2ParityState.timer);
  a2ParityState.timer = null;
  a2ParityState.timerActive = false;
}

function renderA3TwosComplementVisualLab() {
  return makeActivityShell({
    title: 'Two’s Complement Visual Lab',
    mode: 'a3TwosComplementVisualLab',
    status: 'Available now',
    goal: 'Build and interpret signed binary values using an interactive bit grid.',
    misconception: 'A bit pattern has a different value when interpreted as unsigned or as two’s complement.',
    challenge: 'Toggle bits, convert positive and negative values, animate invert-and-add-1 and test overflow.',
    transfer: 'DSE transfer: state the bit width, signed range, binary representation and reason for overflow.'
  }, `<div class="a3-twos-lab" data-a3-twos-lab></div>`);
}

function bindA3TwosComplementVisualLab() {
  stopA3TwosComplementAnimation();
  a3TwosComplementState = {
    bits: toBitsN(0, 8),
    mode: 'interpret',
    inputValue: 0,
    addendA: 64,
    addendB: 64,
    animationStep: 0,
    animationTimer: null,
    feedback: null
  };
  renderA3TwosComplementLab();
}

function renderA3TwosComplementLab() {
  const root = document.querySelector('[data-a3-twos-lab]');
  if (!root) return;
  const bits = a3TwosComplementState.bits;
  const unsigned = getUnsignedValue(bits);
  const signed = getTwosComplementValue(bits);
  const range = twosRange(8);
  const overflow = evaluateA3Overflow(a3TwosComplementState.addendA, a3TwosComplementState.addendB);
  root.innerHTML = `
    <div class="a3-twos-topbar">
      <div class="a2-mode-toggle" role="tablist" aria-label="Two's complement modes">
        ${[
          ['interpret', 'Interpret pattern'],
          ['build', 'Build value'],
          ['animate', 'Invert + add 1'],
          ['overflow', 'Range + overflow']
        ].map(([mode, label]) => `
          <button class="${a3TwosComplementState.mode === mode ? 'active' : ''}" type="button" data-a3-twos-mode="${mode}">${label}</button>
        `).join('')}
      </div>
      <div class="activity-tools">
        <button class="secondary-btn" type="button" data-a3-twos-random>New random value</button>
        <button class="ghost-btn" type="button" data-a3-twos-reset>Reset</button>
      </div>
    </div>
    <div class="a3-twos-layout">
      <section class="a3-bit-panel">
        <p class="small-label">8-bit grid</p>
        <div class="a3-bit-weights">
          ${[128, 64, 32, 16, 8, 4, 2, 1].map(weight => `<span>${weight}</span>`).join('')}
        </div>
        <div class="a3-bit-grid" aria-label="8-bit two's complement toggles">
          ${bits.map((bit, index) => `
            <button class="a3-bit-toggle ${bit ? 'is-on' : ''} ${index === 0 ? 'sign-bit' : ''}" type="button" data-a3-twos-bit="${index}" aria-pressed="${bit ? 'true' : 'false'}">${bit}</button>
          `).join('')}
        </div>
        <code class="a3-binary-readout">${formatBitGroups(bits)}</code>
        ${renderA3TwosBuildControls()}
      </section>
      <section class="a3-value-readout" aria-live="polite">
        <article><span>Unsigned value</span><strong>${unsigned}</strong><small>All place values are positive.</small></article>
        <article><span>8-bit two’s complement value</span><strong>${signed}</strong><small>${bits[0] ? 'Sign bit is 1, so this represents a negative value.' : 'Sign bit is 0, so this represents zero or a positive value.'}</small></article>
        <article class="a3-sign-panel"><span>Signed range</span><strong>${range.min} to ${range.max}</strong><small>Overflow means the mathematical result is outside this range.</small></article>
      </section>
      <section class="a3-invert-stage">
        ${a3TwosComplementState.mode === 'animate' ? renderA3InvertAndAddStage() : renderA3OverflowStage(overflow)}
      </section>
    </div>
    <div class="a2-feedback-panel ${a3TwosComplementState.feedback ? (a3TwosComplementState.feedback.good ? 'feedback-good' : 'feedback-bad') : ''}" aria-live="polite">
      <strong>${a3TwosComplementState.feedback ? a3TwosComplementState.feedback.title : 'Same bits, two meanings.'}</strong>
      <span>${escapeHtml(a3TwosComplementState.feedback ? a3TwosComplementState.feedback.message : 'Toggle the bit grid and compare the unsigned value with the two’s complement interpretation.')}</span>
      ${a3TwosComplementState.feedback?.good ? '<i aria-hidden="true">✓</i>' : ''}
    </div>
  `;
  bindA3TwosComplementControls(root);
}

function renderA3TwosBuildControls() {
  if (a3TwosComplementState.mode !== 'build') return '';
  return `
    <div class="a3-build-controls">
      <label>
        <span>Denary value (-128 to 127)</span>
        <input type="number" min="-128" max="127" value="${a3TwosComplementState.inputValue}" data-a3-twos-input>
      </label>
      <button class="primary-btn" type="button" data-a3-twos-build>Build bits</button>
    </div>
  `;
}

function renderA3InvertAndAddStage() {
  const steps = makeA3InvertSteps(6);
  return `
    <p class="small-label">Animate +6 to -6</p>
    <div class="a3-invert-steps">
      ${steps.map((step, index) => `
        <article class="${index === a3TwosComplementState.animationStep ? 'active' : ''}">
          <span>Step ${index + 1}</span>
          <code>${formatBitGroups(step.bits)}</code>
          <small>${escapeHtml(step.text)}</small>
        </article>
      `).join('')}
    </div>
    <button class="secondary-btn" type="button" data-a3-twos-animate>${a3TwosComplementState.animationTimer ? 'Playing...' : 'Replay animation'}</button>
  `;
}

function renderA3OverflowStage(info) {
  return `
    <p class="small-label">Overflow tester</p>
    <div class="a3-overflow-inputs">
      <label><span>A</span><input type="number" min="-128" max="127" value="${a3TwosComplementState.addendA}" data-a3-addend="a"></label>
      <label><span>B</span><input type="number" min="-128" max="127" value="${a3TwosComplementState.addendB}" data-a3-addend="b"></label>
    </div>
    <div class="a3-overflow-meter ${info.overflow ? 'overflow' : 'inside'}">
      <strong>${info.a} + ${info.b} = ${info.sum}</strong>
      <meter min="${info.range.min}" max="${info.range.max}" value="${Math.max(info.range.min, Math.min(info.range.max, info.sum))}"></meter>
      <span>${info.overflow ? 'Overflow' : 'No overflow'}: ${escapeHtml(info.reason)}</span>
      <small>Stored 8-bit result would wrap to ${info.wrapped} (${formatBitGroups(toBitsN(info.sum, 8))}).</small>
    </div>
    <div class="a3-button-row">
      ${[[64, 64], [-70, -70], [50, 25], [-30, 20]].map(([a, b]) => `
        <button type="button" data-a3-overflow-case="${a},${b}">${a} + ${b}</button>
      `).join('')}
    </div>
  `;
}

function bindA3TwosComplementControls(root) {
  root.onclick = event => {
    const modeButton = event.target.closest('[data-a3-twos-mode]');
    if (modeButton) {
      stopA3TwosComplementAnimation();
      a3TwosComplementState.mode = modeButton.dataset.a3TwosMode;
      a3TwosComplementState.feedback = null;
      renderA3TwosComplementLab();
      return;
    }
    const bitButton = event.target.closest('[data-a3-twos-bit]');
    if (bitButton) {
      toggleA3TwosComplementBit(Number(bitButton.dataset.a3TwosBit));
      return;
    }
    if (event.target.closest('[data-a3-twos-build]')) {
      setA3TwosComplementFromDenary(Number(root.querySelector('[data-a3-twos-input]').value));
      return;
    }
    if (event.target.closest('[data-a3-twos-random]')) {
      const value = randInt(-128, 127);
      a3TwosComplementState.mode = 'build';
      a3TwosComplementState.inputValue = value;
      setA3TwosComplementFromDenary(value);
      return;
    }
    if (event.target.closest('[data-a3-twos-reset]')) {
      stopA3TwosComplementAnimation();
      a3TwosComplementState.bits = toBitsN(0, 8);
      a3TwosComplementState.inputValue = 0;
      a3TwosComplementState.animationStep = 0;
      a3TwosComplementState.feedback = { good: true, title: 'Reset.', message: 'The bit pattern is back to 0000 0000.' };
      renderA3TwosComplementLab();
      return;
    }
    if (event.target.closest('[data-a3-twos-animate]')) {
      animateA3InvertAndAddOne();
      return;
    }
    const overflowCase = event.target.closest('[data-a3-overflow-case]');
    if (overflowCase) {
      const [a, b] = overflowCase.dataset.a3OverflowCase.split(',').map(Number);
      a3TwosComplementState.addendA = a;
      a3TwosComplementState.addendB = b;
      a3TwosComplementState.feedback = null;
      renderA3TwosComplementLab();
    }
  };
  root.oninput = event => {
    if (event.target.matches('[data-a3-twos-input]')) {
      a3TwosComplementState.inputValue = Number(event.target.value);
    }
    if (event.target.matches('[data-a3-addend]')) {
      const value = Math.max(-128, Math.min(127, Number(event.target.value)));
      if (event.target.dataset.a3Addend === 'a') a3TwosComplementState.addendA = value;
      if (event.target.dataset.a3Addend === 'b') a3TwosComplementState.addendB = value;
      renderA3TwosComplementLab();
    }
  };
}

function toggleA3TwosComplementBit(index) {
  a3TwosComplementState.bits[index] = a3TwosComplementState.bits[index] ? 0 : 1;
  a3TwosComplementState.mode = 'interpret';
  a3TwosComplementState.feedback = {
    good: true,
    title: 'Pattern updated.',
    message: `${formatBitGroups(a3TwosComplementState.bits)} means ${getUnsignedValue(a3TwosComplementState.bits)} unsigned and ${getTwosComplementValue(a3TwosComplementState.bits)} in 8-bit two’s complement.`
  };
  renderA3TwosComplementLab();
}

function setA3TwosComplementFromDenary(value) {
  const range = twosRange(8);
  const clamped = Math.max(range.min, Math.min(range.max, Number.isFinite(value) ? value : 0));
  a3TwosComplementState.inputValue = clamped;
  a3TwosComplementState.bits = toBitsN(clamped, 8);
  a3TwosComplementState.feedback = {
    good: true,
    title: 'Built the signed pattern.',
    message: `${clamped} is represented as ${formatBitGroups(a3TwosComplementState.bits)} in 8-bit two’s complement.`
  };
  renderA3TwosComplementLab();
}

function getUnsignedValue(bits) {
  return parseInt(bits.join(''), 2);
}

function getTwosComplementValue(bits) {
  return bitsToSignedN(bits);
}

function makeA3InvertSteps(value) {
  const positive = toBitsN(value, 8);
  const inverted = positive.map(bit => bit ? 0 : 1);
  const result = toBitsN(-value, 8);
  return [
    { bits: positive, text: `+${value} in 8 bits.` },
    { bits: inverted, text: 'Invert all bits: 0 becomes 1 and 1 becomes 0.' },
    { bits: result, text: 'Add 1 to the inverted pattern.' },
    { bits: result, text: `Result represents -${value}.` }
  ];
}

function animateA3InvertAndAddOne() {
  stopA3TwosComplementAnimation();
  a3TwosComplementState.mode = 'animate';
  a3TwosComplementState.animationStep = 0;
  const steps = makeA3InvertSteps(6);
  a3TwosComplementState.bits = steps[0].bits;
  a3TwosComplementState.feedback = { good: true, title: 'Animation started.', message: steps[0].text };
  renderA3TwosComplementLab();
  a3TwosComplementState.animationTimer = setInterval(() => {
    const next = Math.min(a3TwosComplementState.animationStep + 1, steps.length - 1);
    a3TwosComplementState.animationStep = next;
    a3TwosComplementState.bits = steps[next].bits;
    a3TwosComplementState.feedback = { good: true, title: `Step ${next + 1}`, message: steps[next].text };
    renderA3TwosComplementLab();
    if (next === steps.length - 1) stopA3TwosComplementAnimation();
  }, 780);
}

function evaluateA3Overflow(a, b) {
  const info = signedOverflowInfo(a, b, 8);
  return {
    ...info,
    reason: info.overflow
      ? `${info.sum} is outside ${info.range.min} to ${info.range.max}.`
      : `${info.sum} is inside ${info.range.min} to ${info.range.max}.`
  };
}

function stopA3TwosComplementAnimation() {
  if (a3TwosComplementState.animationTimer) clearInterval(a3TwosComplementState.animationTimer);
  a3TwosComplementState.animationTimer = null;
}

function formatBitGroups(bits) {
  return bits.join('').replace(/(.{4})(?=.)/g, '$1 ');
}

function renderA3QuantizationVisualizer() {
  return makeActivityShell({
    title: 'Quantization Visualizer',
    mode: 'a3QuantizationLab',
    status: 'Available now',
    goal: 'Adjust sampling rate and bit depth to see how analog data becomes digital.',
    misconception: 'Sampling rate controls how often the signal is measured; bit depth controls how many amplitude levels can be stored.',
    challenge: 'Move the sliders and compare the smooth signal with the sampled digital points.',
    transfer: 'DSE transfer: use the words sampling, quantization and coding accurately.'
  }, `<div class="a3-quant-lab" data-a3-quant-lab></div>`);
}

function bindA3QuantizationVisualizer() {
  a3QuantizationState = { sampleRate: 7, bitDepth: 4 };
  renderA3QuantizationLab();
}

function renderA3QuantizationLab() {
  const root = document.querySelector('[data-a3-quant-lab]');
  if (!root) return;
  const { sampleRate, bitDepth } = a3QuantizationState;
  const levels = 2 ** bitDepth;
  root.innerHTML = `
    <div class="a3-lab-toolbar">
      <label>
        <span>Sampling rate: ${sampleRate} samples</span>
        <input type="range" min="3" max="16" value="${sampleRate}" data-a3-sample-rate>
      </label>
      <label>
        <span>Bit depth: ${bitDepth} bits (${levels} levels)</span>
        <input type="range" min="2" max="8" value="${bitDepth}" data-a3-bit-depth>
      </label>
    </div>
    <div class="a3-signal-board">
      ${makeA3QuantizationSvg(sampleRate, bitDepth)}
      <div class="a3-signal-readout">
        <span><strong>${sampleRate}</strong> samples across the signal</span>
        <span><strong>${levels}</strong> possible amplitude levels</span>
        <span><strong>${sampleRate * bitDepth}</strong> bits for these sample values</span>
      </div>
    </div>
    <div class="a2-feedback-panel feedback-good" aria-live="polite">
      <strong>${sampleRate >= 10 && bitDepth >= 5 ? 'High detail digital copy.' : 'Trade-off visible.'}</strong>
      <span>${escapeHtml(makeA3QuantizationFeedback(sampleRate, bitDepth))}</span>
      <i aria-hidden="true">✓</i>
    </div>
  `;
  root.oninput = event => {
    if (event.target.matches('[data-a3-sample-rate]')) {
      a3QuantizationState.sampleRate = Number(event.target.value);
      renderA3QuantizationLab();
    }
    if (event.target.matches('[data-a3-bit-depth]')) {
      a3QuantizationState.bitDepth = Number(event.target.value);
      renderA3QuantizationLab();
    }
  };
}

function makeA3QuantizationSvg(sampleRate, bitDepth) {
  const width = 520;
  const height = 220;
  const margin = 22;
  const levelCount = 2 ** bitDepth;
  const pointForX = x => {
    const t = (x - margin) / (width - margin * 2);
    const raw = 0.5 + 0.36 * Math.sin(t * Math.PI * 2) + 0.1 * Math.sin(t * Math.PI * 6);
    return height - margin - raw * (height - margin * 2);
  };
  const analog = Array.from({ length: 80 }, (_, index) => {
    const x = margin + (index / 79) * (width - margin * 2);
    return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${pointForX(x).toFixed(1)}`;
  }).join(' ');
  const samples = Array.from({ length: sampleRate }, (_, index) => {
    const x = margin + (index / Math.max(1, sampleRate - 1)) * (width - margin * 2);
    const y = pointForX(x);
    const normalised = (height - margin - y) / (height - margin * 2);
    const quantized = Math.round(normalised * (levelCount - 1)) / (levelCount - 1);
    const qy = height - margin - quantized * (height - margin * 2);
    return { x, y, qy };
  });
  const quantPath = samples.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(1)} ${point.qy.toFixed(1)}`).join(' ');
  return `
    <svg class="a3-quant-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Analog signal and quantized digital samples">
      <defs>
        <linearGradient id="quantFill" x1="0" x2="1">
          <stop offset="0%" stop-color="#2458e6" stop-opacity="0.16" />
          <stop offset="100%" stop-color="#1aa36f" stop-opacity="0.22" />
        </linearGradient>
      </defs>
      ${Array.from({ length: 6 }, (_, index) => `<line x1="${margin}" x2="${width - margin}" y1="${margin + index * 35}" y2="${margin + index * 35}" />`).join('')}
      <path class="analog-wave" d="${analog}" />
      <path class="digital-wave" d="${quantPath}" />
      ${samples.map(point => `
        <line class="sample-line" x1="${point.x.toFixed(1)}" x2="${point.x.toFixed(1)}" y1="${point.y.toFixed(1)}" y2="${point.qy.toFixed(1)}" />
        <circle class="analog-dot" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="4" />
        <circle class="digital-dot" cx="${point.x.toFixed(1)}" cy="${point.qy.toFixed(1)}" r="6" />
      `).join('')}
    </svg>
  `;
}

function makeA3QuantizationFeedback(sampleRate, bitDepth) {
  if (sampleRate < 7) return 'Few samples miss changes along the time axis. A higher sampling rate captures the shape more often.';
  if (bitDepth < 4) return 'Low bit depth gives fewer amplitude levels, so each sample is rounded more roughly.';
  return 'More samples and more levels give a closer digital representation, but the stored data size also increases.';
}

function renderA3BitmapResolutionLab() {
  return makeActivityShell({
    title: 'RGB Bitmap and Colour Depth Lab',
    mode: 'a3BitmapLab',
    status: 'Available now',
    goal: 'See how resolution and RGB bits per channel affect image detail, number of colours and file size.',
    misconception: 'Resolution changes the number of pixels; colour depth changes how many colours each pixel can store.',
    challenge: 'Adjust RGB sliders, bits per channel and resolution, then inspect the quantised pixel.',
    transfer: 'DSE transfer: image size = width x height x colour depth / 8 bytes.'
  }, `<div class="a3-bitmap-lab" data-a3-bitmap-lab></div>`);
}

function bindA3BitmapResolutionLab() {
  a3BitmapState = {
    width: 12,
    height: 8,
    bitsPerChannel: 2,
    selectedPixel: 0,
    originalColour: { r: 218, g: 92, b: 146 },
    displayMode: 'comparison'
  };
  renderA3BitmapLab();
}

function renderA3BitmapLab() {
  const root = document.querySelector('[data-a3-bitmap-lab]');
  if (!root) return;
  const { width, height, bitsPerChannel, selectedPixel, originalColour } = a3BitmapState;
  const colourDepth = bitsPerChannel * 3;
  const possibleColours = 2 ** colourDepth;
  const quantisedColour = quantizeRgbColour(originalColour, bitsPerChannel);
  const pixelCount = width * height;
  const bytes = (pixelCount * colourDepth) / 8;
  const selectedColour = makeA3BitmapPixelColour(selectedPixel, width, height);
  const selectedQuantised = quantizeRgbColour(selectedColour, bitsPerChannel);
  root.innerHTML = `
    <div class="a3-rgb-lab">
      <div class="a3-lab-toolbar a3-rgb-controls">
        <div class="a3-button-row" aria-label="Resolution choices">
          ${[[8, 6], [12, 8], [24, 16], [48, 32]].map(([w, h]) => `
            <button class="${width === w ? 'active' : ''}" type="button" data-a3-resolution="${w}x${h}">${w} x ${h}</button>
          `).join('')}
        </div>
        <div class="a3-button-row" aria-label="RGB bits per channel choices">
          ${[1, 2, 3, 4, 8].map(bitsChoice => `
            <button class="${bitsPerChannel === bitsChoice ? 'active' : ''}" type="button" data-a3-bits-channel="${bitsChoice}">
              ${bitsChoice} bit${bitsChoice > 1 ? 's' : ''}/channel
            </button>
          `).join('')}
        </div>
        ${['r', 'g', 'b'].map(channel => `
          <label class="a3-rgb-slider">
            <span>${channel.toUpperCase()}: ${originalColour[channel]}</span>
            <input type="range" min="0" max="255" value="${originalColour[channel]}" data-a3-rgb-channel="${channel}">
            <input type="number" min="0" max="255" value="${originalColour[channel]}" data-a3-rgb-number="${channel}">
          </label>
        `).join('')}
      </div>
      <div class="a3-swatch-row" aria-label="RGB colour presets">
        ${[[218, 92, 146], [255, 166, 64], [58, 146, 255], [86, 196, 126], [142, 91, 255]].map(([r, g, b]) => `
          <button type="button" data-a3-rgb-preset="${r},${g},${b}" style="--preset: rgb(${r}, ${g}, ${b});" aria-label="Preset RGB ${r}, ${g}, ${b}"></button>
        `).join('')}
      </div>
      <div class="a3-colour-comparison" aria-live="polite">
        <article class="a3-original-colour" style="--colour: rgb(${originalColour.r}, ${originalColour.g}, ${originalColour.b});">
          <span>Original colour</span>
          <strong>RGB(${originalColour.r}, ${originalColour.g}, ${originalColour.b})</strong>
          <small>Full 24-bit RGB</small>
        </article>
        <article class="a3-quantised-colour" style="--colour: rgb(${quantisedColour.r}, ${quantisedColour.g}, ${quantisedColour.b});">
          <span>Quantised colour</span>
          <strong>RGB(${quantisedColour.r}, ${quantisedColour.g}, ${quantisedColour.b})</strong>
          <small>${colourDepth}-bit RGB, ${formatA3Number(possibleColours)} possible colours</small>
        </article>
      </div>
      <div class="a3-channel-levels">
        ${['r', 'g', 'b'].map(channel => renderA3ChannelLevels(channel, bitsPerChannel)).join('')}
      </div>
      <div class="a3-rgb-preview">
        <section>
          <p class="small-label">Original preview</p>
          <div class="a3-pixel-grid" style="grid-template-columns: repeat(${width}, minmax(8px, 1fr));" aria-label="Original bitmap preview">
            ${makeA3BitmapPixels(width, height, selectedPixel, false)}
          </div>
        </section>
        <section>
          <p class="small-label">Quantised preview</p>
          <div class="a3-pixel-grid quantised" style="grid-template-columns: repeat(${width}, minmax(8px, 1fr));" aria-label="Quantised bitmap preview">
            ${makeA3BitmapPixels(width, height, selectedPixel, true)}
          </div>
        </section>
      </div>
      <div class="a3-pixel-inspector">
        <article>
          <span>Selected pixel</span>
          <strong>Column ${(selectedPixel % width) + 1}, Row ${Math.floor(selectedPixel / width) + 1}</strong>
          <small>Original RGB(${selectedColour.r}, ${selectedColour.g}, ${selectedColour.b}) to Quantised RGB(${selectedQuantised.r}, ${selectedQuantised.g}, ${selectedQuantised.b})</small>
          <code>${makeA3RgbBinaryCode(selectedQuantised, bitsPerChannel)}</code>
        </article>
        <article class="a3-live-calculation" aria-live="polite">
          <span>Live calculation</span>
          <strong>${width} x ${height} pixels = ${pixelCount}</strong>
          <small>Colour depth = ${bitsPerChannel} bits/channel x 3 = ${colourDepth} bits</small>
          <small>Image size = ${pixelCount} x ${colourDepth} / 8 = ${formatA3Number(bytes)} bytes</small>
        </article>
      </div>
      <div class="a2-feedback-panel feedback-good" aria-live="polite">
        <strong>${bitsPerChannel <= 2 ? 'Banding is visible.' : 'Smoother colour transitions.'}</strong>
        <span>${bitsPerChannel <= 2 ? 'Low RGB bits per channel creates fewer intensity levels, so nearby colours snap to the same stored values.' : 'Higher RGB colour depth gives more possible colours, but it does not create more pixels.'}</span>
        <i aria-hidden="true">✓</i>
      </div>
    </div>
  `;
  root.onclick = event => {
    const pixel = event.target.closest('[data-a3-pixel]');
    if (pixel) {
      a3BitmapState.selectedPixel = Number(pixel.dataset.a3Pixel);
      renderA3BitmapLab();
      return;
    }
    const resolution = event.target.closest('[data-a3-resolution]');
    if (resolution) {
      const [nextWidth, nextHeight] = resolution.dataset.a3Resolution.split('x').map(Number);
      a3BitmapState.width = nextWidth;
      a3BitmapState.height = nextHeight;
      a3BitmapState.selectedPixel = Math.min(a3BitmapState.selectedPixel, nextWidth * nextHeight - 1);
      renderA3BitmapLab();
      return;
    }
    const bitsButton = event.target.closest('[data-a3-bits-channel]');
    if (bitsButton) {
      a3BitmapState.bitsPerChannel = Number(bitsButton.dataset.a3BitsChannel);
      renderA3BitmapLab();
      return;
    }
    const preset = event.target.closest('[data-a3-rgb-preset]');
    if (preset) {
      const [r, g, b] = preset.dataset.a3RgbPreset.split(',').map(Number);
      a3BitmapState.originalColour = { r, g, b };
      renderA3BitmapLab();
    }
  };
  root.oninput = event => {
    const channel = event.target.dataset.a3RgbChannel || event.target.dataset.a3RgbNumber;
    if (channel) {
      a3BitmapState.originalColour[channel] = Math.max(0, Math.min(255, Number(event.target.value) || 0));
      renderA3BitmapLab();
    }
  };
}

function quantizeRgbChannel(value, bitsPerChannel) {
  const levels = 2 ** bitsPerChannel;
  if (levels >= 256) return Math.round(value);
  return Math.round((Math.round(value / 255 * (levels - 1)) / (levels - 1)) * 255);
}

function quantizeRgbColour(rgb, bitsPerChannel) {
  return {
    r: quantizeRgbChannel(rgb.r, bitsPerChannel),
    g: quantizeRgbChannel(rgb.g, bitsPerChannel),
    b: quantizeRgbChannel(rgb.b, bitsPerChannel)
  };
}

function renderA3ChannelLevels(channel, bitsPerChannel) {
  const levels = 2 ** bitsPerChannel;
  const label = { r: 'Red', g: 'Green', b: 'Blue' }[channel];
  const boxes = levels > 16
    ? '<span class="smooth">256 levels</span>'
    : Array.from({ length: levels }, (_, index) => {
      const value = Math.round((index / (levels - 1)) * 255);
      return `<i style="--level-colour: rgb(${channel === 'r' ? value : 0}, ${channel === 'g' ? value : 0}, ${channel === 'b' ? value : 0});">${value}</i>`;
    }).join('');
  return `<article><strong>${label} levels</strong><div>${boxes}</div></article>`;
}

function makeA3BitmapPixels(width, height, selectedPixel, quantised) {
  return Array.from({ length: width * height }, (_, index) => {
    const colour = makeA3BitmapPixelColour(index, width, height);
    const display = quantised ? quantizeRgbColour(colour, a3BitmapState.bitsPerChannel) : colour;
    const selected = index === selectedPixel ? 'selected' : '';
    return `<button class="a3-pixel ${selected}" type="button" data-a3-pixel="${index}" style="--pixel-colour: rgb(${display.r}, ${display.g}, ${display.b});" aria-label="Pixel ${index + 1}"></button>`;
  }).join('');
}

function makeA3BitmapPixelColour(index, width, height) {
  const x = index % width;
  const y = Math.floor(index / width);
  const nx = width <= 1 ? 0 : x / (width - 1);
  const ny = height <= 1 ? 0 : y / (height - 1);
  return {
    r: clampRgb(Math.round(255 * nx)),
    g: clampRgb(Math.round(70 + 150 * (1 - ny))),
    b: clampRgb(Math.round(255 * (1 - nx * 0.55) * (0.35 + ny * 0.65)))
  };
}

function makeA3RgbBinaryCode(rgb, bitsPerChannel) {
  const channelCode = value => {
    const maxCode = 2 ** bitsPerChannel - 1;
    const code = maxCode === 0 ? 0 : Math.round(value / 255 * maxCode);
    return code.toString(2).padStart(bitsPerChannel, '0');
  };
  const r = channelCode(rgb.r);
  const g = channelCode(rgb.g);
  const b = channelCode(rgb.b);
  return `R=${r} G=${g} B=${b} (${r}${g}${b})`;
}

function clampRgb(value) {
  return Math.max(0, Math.min(255, value));
}

function formatA3Number(value) {
  return Number.isInteger(value) ? value.toLocaleString('en-US') : value.toFixed(1);
}

function renderA3Utf8Encoder() {
  return makeActivityShell({
    title: 'UTF-8 Binary Encoder',
    mode: 'a3Utf8Encoder',
    status: 'Available now',
    goal: 'Encode English and Chinese characters into UTF-8 byte patterns.',
    misconception: 'A character and a byte are not the same thing in Unicode systems.',
    challenge: 'Type up to three characters and inspect their code points, bytes and binary patterns.',
    transfer: 'DSE transfer: ASCII is limited; Unicode supports many languages and UTF-8 may use different byte lengths.'
  }, `<div class="a3-utf-lab" data-a3-utf-lab></div>`);
}

function bindA3Utf8Encoder() {
  a3UtfState = { text: 'A中9' };
  renderA3Utf8Lab();
}

function renderA3Utf8Lab() {
  const root = document.querySelector('[data-a3-utf-lab]');
  if (!root) return;
  const chars = Array.from(a3UtfState.text).slice(0, 3);
  const rows = chars.map(char => makeA3Utf8Row(char));
  root.innerHTML = `
    <div class="a3-utf-input-row">
      <label>
        <span>Enter up to three characters</span>
        <input type="text" value="${escapeHtml(chars.join(''))}" maxlength="6" data-a3-utf-input aria-label="Characters to encode">
      </label>
      <div class="a3-button-row">
        ${['ICT', 'A中9', '數據'].map(sample => `<button type="button" data-a3-utf-sample="${escapeHtml(sample)}">${escapeHtml(sample)}</button>`).join('')}
      </div>
    </div>
    <div class="a3-utf-grid">
      ${rows.length ? rows.map(row => `
        <article class="a3-utf-card">
          <span class="a3-char-tile">${escapeHtml(row.char)}</span>
          <div>
            <p class="small-label">${escapeHtml(row.label)}</p>
            <strong>${escapeHtml(row.codePoint)}</strong>
            <small>${escapeHtml(row.bytes.length)} byte${row.bytes.length === 1 ? '' : 's'} in UTF-8</small>
          </div>
          <code>${escapeHtml(row.binary)}</code>
        </article>
      `).join('') : '<article class="activity-placeholder compact-placeholder"><strong>Type a character</strong><p>The byte pattern will appear here.</p></article>'}
    </div>
    <div class="a2-feedback-panel feedback-good" aria-live="polite">
      <strong>Encoding inspected.</strong>
      <span>${escapeHtml(makeA3Utf8Feedback(rows))}</span>
      <i aria-hidden="true">✓</i>
    </div>
  `;
  root.oninput = event => {
    if (event.target.matches('[data-a3-utf-input]')) {
      a3UtfState.text = Array.from(event.target.value).slice(0, 3).join('');
      renderA3Utf8Lab();
    }
  };
  root.onclick = event => {
    const sample = event.target.closest('[data-a3-utf-sample]');
    if (sample) {
      a3UtfState.text = sample.dataset.a3UtfSample;
      renderA3Utf8Lab();
    }
  };
}

function makeA3Utf8Row(char) {
  const bytes = Array.from(new TextEncoder().encode(char));
  const codePoint = `U+${char.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}`;
  const label = bytes.length === 1 ? 'ASCII-compatible character' : 'Unicode character';
  const binary = bytes.map(byte => byte.toString(2).padStart(8, '0')).join(' ');
  return { char, bytes, codePoint, label, binary };
}

function makeA3Utf8Feedback(rows) {
  if (!rows.length) return 'Type a character to compare code point, byte length and binary output.';
  if (rows.some(row => row.bytes.length > 1)) return 'Chinese characters need more than one byte in UTF-8, so Unicode is needed for multilingual text.';
  return 'These characters fit in one byte each in UTF-8 because they are ASCII-compatible.';
}

function renderD3ListOperationTrainer() {
  return makeActivityShell({
    title: 'List Operation Trainer',
    mode: 'd3ListOps',
    status: 'Available now',
    goal: 'Practise access, modify, append, insert and remove operations on a one-dimensional list.',
    misconception: 'The index is the position used to access an item; it is not the value stored in that item.',
    challenge: 'Run list operations and watch the active item, index labels and output log change.',
    transfer: 'DSE transfer: trace the list after each operation and avoid off-by-one index mistakes.'
  }, `<div class="d3-list-trainer" data-d3-list-trainer></div>`);
}

function bindD3ListOperationTrainer() {
  d3ListState = { items: [10, 20, 30, 40, 50], activeIndex: null, log: 'Default list created: [10, 20, 30, 40, 50]. Indexes shown here are zero-based, like Python lists.' };
  renderD3ListTrainer();
}

function renderD3ListTrainer() {
  const root = document.querySelector('[data-d3-list-trainer]');
  if (!root) return;
  root.innerHTML = `
    <div class="d3-list-board">
      <div class="d3-list-cells" aria-label="Current list values">
        ${d3ListState.items.map((item, index) => `
          <button class="d3-list-cell ${index === d3ListState.activeIndex ? 'active' : ''}" type="button" data-d3-list-cell="${index}">
            <strong>${escapeHtml(item)}</strong>
            <span>index ${index}</span>
          </button>
        `).join('')}
      </div>
      <div class="d3-list-console" aria-live="polite">
        <span>Output / log</span>
        <strong>${escapeHtml(d3ListState.log)}</strong>
      </div>
    </div>
    <div class="d3-operation-grid">
      ${makeD3ListControl('Access', 'access', 'Index', 'accessIndex', 2)}
      ${makeD3ListControl('Modify', 'modify', 'Index', 'modifyIndex', 1, 'New value', 'modifyValue', 99)}
      ${makeD3ListControl('Append', 'append', 'Value', 'appendValue', 60)}
      ${makeD3ListControl('Insert', 'insert', 'Index', 'insertIndex', 2, 'Value', 'insertValue', 15)}
      ${makeD3ListControl('Remove at index', 'remove', 'Index', 'removeIndex', 0)}
    </div>
    <div class="activity-tools">
      <button class="secondary-btn" type="button" data-d3-reset-list>Reset list</button>
    </div>
  `;
  root.onclick = event => {
    const cell = event.target.closest('[data-d3-list-cell]');
    if (cell) {
      d3ListState.activeIndex = Number(cell.dataset.d3ListCell);
      d3ListState.log = `Selected index ${d3ListState.activeIndex}, value ${d3ListState.items[d3ListState.activeIndex]}.`;
      renderD3ListTrainer();
      return;
    }
    const actionButton = event.target.closest('[data-d3-list-action]');
    if (actionButton) {
      runD3ListAction(actionButton.dataset.d3ListAction, root);
      renderD3ListTrainer();
      return;
    }
    if (event.target.closest('[data-d3-reset-list]')) {
      d3ListState = { items: [10, 20, 30, 40, 50], activeIndex: null, log: 'List reset to [10, 20, 30, 40, 50].' };
      renderD3ListTrainer();
    }
  };
}

function makeD3ListControl(title, action, labelA, nameA, valueA, labelB = '', nameB = '', valueB = '') {
  return `
    <article class="d3-operation-card">
      <strong>${escapeHtml(title)}</strong>
      <label><span>${escapeHtml(labelA)}</span><input type="number" value="${escapeHtml(valueA)}" data-d3-input="${escapeHtml(nameA)}"></label>
      ${labelB ? `<label><span>${escapeHtml(labelB)}</span><input type="number" value="${escapeHtml(valueB)}" data-d3-input="${escapeHtml(nameB)}"></label>` : ''}
      <button class="primary-btn" type="button" data-d3-list-action="${escapeHtml(action)}">Run</button>
    </article>
  `;
}

function runD3ListAction(action, root) {
  const read = name => Number(root.querySelector(`[data-d3-input="${name}"]`)?.value || 0);
  const items = [...d3ListState.items];
  const inRange = index => Number.isInteger(index) && index >= 0 && index < items.length;
  if (action === 'access') {
    const index = read('accessIndex');
    if (!inRange(index)) return setD3ListWarning(`Index ${index} is outside the valid range 0 to ${items.length - 1}.`);
    d3ListState.activeIndex = index;
    d3ListState.log = `A[${index}] is ${items[index]}. Access reads a value without changing the list.`;
    return;
  }
  if (action === 'modify') {
    const index = read('modifyIndex');
    const value = read('modifyValue');
    if (!inRange(index)) return setD3ListWarning(`Cannot modify index ${index}. Valid indexes are 0 to ${items.length - 1}.`);
    items[index] = value;
    d3ListState.items = items;
    d3ListState.activeIndex = index;
    d3ListState.log = `A[${index}] was changed to ${value}.`;
    return;
  }
  if (action === 'append') {
    const value = read('appendValue');
    items.push(value);
    d3ListState.items = items;
    d3ListState.activeIndex = items.length - 1;
    d3ListState.log = `append(${value}) adds a new item at the end, index ${items.length - 1}.`;
    return;
  }
  if (action === 'insert') {
    const index = read('insertIndex');
    const value = read('insertValue');
    if (!Number.isInteger(index) || index < 0 || index > items.length) return setD3ListWarning(`Insert index ${index} must be from 0 to ${items.length}.`);
    items.splice(index, 0, value);
    d3ListState.items = items;
    d3ListState.activeIndex = index;
    d3ListState.log = `insert(${index}, ${value}) shifts later items one position to the right.`;
    return;
  }
  if (action === 'remove') {
    const index = read('removeIndex');
    if (!inRange(index)) return setD3ListWarning(`Cannot remove index ${index}. Valid indexes are 0 to ${items.length - 1}.`);
    const removed = items.splice(index, 1)[0];
    d3ListState.items = items;
    d3ListState.activeIndex = Math.min(index, items.length - 1);
    d3ListState.log = `Removed value ${removed} from index ${index}. Later items shift left.`;
  }
}

function setD3ListWarning(message) {
  d3ListState.activeIndex = null;
  d3ListState.log = message;
}

function renderA4FormulaCopyRescue() {
  return makeActivityShell({
    title: 'Formula Copy Rescue',
    mode: 'a4FormulaCopyRescue',
    status: 'Available now',
    goal: 'Build a formula, copy it, and lock the references that must stay fixed.',
    misconception: 'A formula that works in the first row may become wrong after copying if a fixed reference is not locked.',
    challenge: 'Repair spreadsheet formulas, copy them across or down, and observe which references move.',
    transfer: 'DSE transfer: write the copied formula and explain why each dollar sign is required.'
  }, `<div class="a4-rescue-board" data-a4-formula-copy-rescue></div>`);
}

function bindA4FormulaCopyRescue() {
  resetA4FormulaRescueState(0);
  renderA4FormulaMission();
}

function resetA4FormulaRescueState(missionIndex = a4FormulaRescueState.missionIndex || 0) {
  a4FormulaRescueState = {
    missionIndex,
    activeCell: a4FormulaMissions[missionIndex]?.cell || 'D2',
    formula: '',
    feedback: null,
    completed: a4FormulaRescueState.completed instanceof Set ? new Set(a4FormulaRescueState.completed) : new Set(),
    copied: false,
    animation: 'idle',
    activeRef: missionIndex === 2 ? 'H2' : 'B2',
    lockColumn: missionIndex === 2,
    lockRow: missionIndex === 2
  };
}

function renderA4FormulaMission() {
  const root = document.querySelector('[data-a4-formula-copy-rescue]');
  if (!root) return;
  const mission = a4FormulaMissions[a4FormulaRescueState.missionIndex];
  const feedback = a4FormulaRescueState.feedback;
  root.innerHTML = `
    <div class="a4-rescue-topbar">
      <span class="activity-count">Mission ${a4FormulaRescueState.missionIndex + 1} / ${a4FormulaMissions.length}</span>
      <span class="activity-count solved-count">${a4FormulaRescueState.completed.size} / ${a4FormulaMissions.length} rescued</span>
    </div>
    <div class="a4-rescue-layout">
      <section class="a4-rescue-mission">
        <p class="small-label">${escapeHtml(mission.title)}</p>
        <h4>${escapeHtml(mission.prompt)}</h4>
        <p>Target cell: <strong>${escapeHtml(mission.cell)}</strong></p>
        ${renderA4MissionToolbox()}
      </section>
      <section class="a4-sheet-panel">
        <div class="a4-formula-bar ${feedback && !feedback.correct ? 'is-wrong' : ''}">
          <span>fx</span>
          <input type="text" value="${escapeHtml(a4FormulaRescueState.formula)}" data-a4-formula-input aria-label="Formula input">
        </div>
        <div class="a4-sheet-scroll">
          ${renderA4MiniSheet()}
        </div>
      </section>
      <aside class="a4-reference-control">
        <p class="small-label">Reference controls</p>
        <strong>${escapeHtml(formatA4Reference(a4FormulaRescueState.activeRef, a4FormulaRescueState.lockColumn, a4FormulaRescueState.lockRow))}</strong>
        <label><input type="checkbox" data-a4-lock-column ${a4FormulaRescueState.lockColumn ? 'checked' : ''}> Lock column</label>
        <label><input type="checkbox" data-a4-lock-row ${a4FormulaRescueState.lockRow ? 'checked' : ''}> Lock row</label>
        <div class="a4-reference-examples">
          ${shuffleList(['B2', '$B$2', '$B2', 'B$2']).map(ref => `<button type="button" data-a4-ref-example="${escapeHtml(ref)}">${escapeHtml(ref)}</button>`).join('')}
        </div>
        <button class="secondary-btn" type="button" data-a4-insert-active-ref>Insert reference</button>
      </aside>
    </div>
    <div class="activity-tools">
      <button class="primary-btn" type="button" data-a4-check-formula>Check formula</button>
      <button class="secondary-btn" type="button" data-a4-copy-down>Copy down</button>
      <button class="secondary-btn" type="button" data-a4-replay-animation>Replay animation</button>
      <button class="ghost-btn" type="button" data-a4-reset-mission>Reset mission</button>
      <button class="primary-btn" type="button" data-a4-next-mission>Next mission</button>
    </div>
    <div class="a2-feedback-panel ${feedback ? (feedback.correct ? 'feedback-good' : 'feedback-bad') : ''}" aria-live="polite">
      ${feedback ? `
        <strong>${feedback.correct ? '✓ Correct.' : '⚠ Check this.'}</strong>
        <span>${escapeHtml(feedback.message)}</span>
      ` : `
        <strong>Build or type a formula.</strong>
        <span>Click cells and operators, or type directly in the formula bar. Then check or copy it.</span>
      `}
    </div>
  `;
  bindA4FormulaMission(root);
}

function renderA4MissionToolbox() {
  const missionIndex = a4FormulaRescueState.missionIndex;
  if (missionIndex === 4) {
    return `
      <div class="a4-token-bank">
        ${['=COUNTIF(', 'C2:C20', ',"', '>=50', '")', '=SUMIF('].map(token => `<button type="button" data-a4-token="${escapeHtml(token)}">${escapeHtml(token)}</button>`).join('')}
      </div>
      <p class="a4-mini-note">COUNTIF counts matching cells. SUMIF adds matching values.</p>
    `;
  }
  return `
    <div class="a4-token-bank">
      ${['=', '*', '+', '-', '/', '(', ')', ',', '"Pass"', '"Fail"', 'COUNTIF('].map(token => `<button type="button" data-a4-token="${escapeHtml(token)}">${escapeHtml(token)}</button>`).join('')}
    </div>
    <p class="a4-mini-note">Tip: click a worksheet cell to insert its reference.</p>
  `;
}

function renderA4MiniSheet() {
  const values = getA4SheetValues();
  const cols = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const rows = [
    ['1', 'Item', 'Price', 'Qty', 'Subtotal', 'Discount', 'Final', 'Tax', 'Tax rate'],
    ['2', 'Badge', '12', '30', values.D2, '5%', values.F2, values.G2, '3%'],
    ['3', 'T-shirt', '65', '18', values.D3, '8%', values.F3, values.G3, ''],
    ['4', 'Folder', '20', '25', values.D4, '4%', values.F4, values.G4, ''],
    ['5', '', '', '', '', '', '', '', '']
  ];
  return `
    <div class="a4-sheet" style="grid-template-columns: 42px repeat(8, minmax(82px, 1fr));">
      ${cols.map(col => `<div class="a4-sheet-head">${escapeHtml(col)}</div>`).join('')}
      ${rows.map(row => row.map((value, colIndex) => {
        const rowNumber = row[0];
        const ref = colIndex > 0 ? `${cols[colIndex]}${rowNumber}` : '';
        const active = ref === a4FormulaRescueState.activeCell ? 'active-cell' : '';
        const referenced = getA4ReferencedCells().includes(ref) ? 'referenced-cell' : '';
        const badRef = a4FormulaRescueState.feedback?.badRefs?.includes(ref) ? 'bad-ref-cell' : '';
        const header = colIndex === 0 ? 'a4-row-head' : '';
        return `<button class="a4-cell ${active} ${referenced} ${badRef} ${header}" type="button" ${ref ? `data-a4-cell="${escapeHtml(ref)}"` : 'tabindex="-1"'}>${escapeHtml(value || '?')}</button>`;
      }).join('')).join('')}
    </div>
  `;
}

function getA4SheetValues() {
  const completed = a4FormulaRescueState.completed;
  const showSubtotal = completed.has(0) || completed.has(1) || a4FormulaRescueState.copied;
  const showTax = completed.has(2);
  return {
    D2: showSubtotal ? '360' : '',
    D3: a4FormulaRescueState.copied || completed.has(1) ? '1170' : '',
    D4: a4FormulaRescueState.copied || completed.has(1) ? '500' : '',
    F2: showSubtotal ? '342' : '342',
    F3: showSubtotal ? '1076.4' : '1076.4',
    F4: showSubtotal ? '480' : '480',
    G2: showTax ? '10.26' : '',
    G3: showTax ? '32.29' : '',
    G4: showTax ? '14.40' : ''
  };
}

function getA4ReferencedCells() {
  const matches = String(a4FormulaRescueState.formula).match(/\$?[A-H]\$?[1-9]\d*/g) || [];
  return matches.map(ref => ref.replace(/\$/g, ''));
}

function bindA4FormulaMission(root) {
  root.onclick = event => {
    const cell = event.target.closest('[data-a4-cell]');
    if (cell) {
      a4FormulaRescueState.activeRef = cell.dataset.a4Cell;
      a4FormulaRescueState.formula += formatA4Reference(a4FormulaRescueState.activeRef, a4FormulaRescueState.lockColumn, a4FormulaRescueState.lockRow);
      renderA4FormulaMission();
      return;
    }
    const token = event.target.closest('[data-a4-token]');
    if (token) {
      a4FormulaRescueState.formula += token.dataset.a4Token;
      renderA4FormulaMission();
      return;
    }
    const example = event.target.closest('[data-a4-ref-example]');
    if (example) {
      const parsed = parseA4Reference(example.dataset.a4RefExample);
      a4FormulaRescueState.activeRef = `${parsed.col}${parsed.row}`;
      a4FormulaRescueState.lockColumn = parsed.lockColumn;
      a4FormulaRescueState.lockRow = parsed.lockRow;
      renderA4FormulaMission();
      return;
    }
    if (event.target.closest('[data-a4-insert-active-ref]')) {
      a4FormulaRescueState.formula += formatA4Reference(a4FormulaRescueState.activeRef, a4FormulaRescueState.lockColumn, a4FormulaRescueState.lockRow);
      renderA4FormulaMission();
      return;
    }
    if (event.target.closest('[data-a4-check-formula]')) {
      evaluateA4Formula();
      renderA4FormulaMission();
      return;
    }
    if (event.target.closest('[data-a4-copy-down]')) {
      copyA4FormulaDown();
      renderA4FormulaMission();
      return;
    }
    if (event.target.closest('[data-a4-replay-animation]')) {
      a4FormulaRescueState.animation = 'played';
      a4FormulaRescueState.feedback = { correct: true, message: makeA4ReplayMessage() };
      renderA4FormulaMission();
      return;
    }
    if (event.target.closest('[data-a4-reset-mission]')) {
      resetA4FormulaRescueState(a4FormulaRescueState.missionIndex);
      renderA4FormulaMission();
      return;
    }
    if (event.target.closest('[data-a4-next-mission]')) {
      resetA4FormulaRescueState((a4FormulaRescueState.missionIndex + 1) % a4FormulaMissions.length);
      renderA4FormulaMission();
    }
  };
  root.oninput = event => {
    if (event.target.matches('[data-a4-formula-input]')) {
      a4FormulaRescueState.formula = event.target.value;
    }
  };
  root.onchange = event => {
    if (event.target.matches('[data-a4-lock-column]')) {
      a4FormulaRescueState.lockColumn = event.target.checked;
      renderA4FormulaMission();
    }
    if (event.target.matches('[data-a4-lock-row]')) {
      a4FormulaRescueState.lockRow = event.target.checked;
      renderA4FormulaMission();
    }
  };
}

function evaluateA4Formula() {
  const mission = a4FormulaMissions[a4FormulaRescueState.missionIndex];
  const normal = normaliseFormula(a4FormulaRescueState.formula);
  const target = normaliseFormula(mission.target);
  if (normal === target) {
    a4FormulaRescueState.completed.add(a4FormulaRescueState.missionIndex);
    a4FormulaRescueState.feedback = { correct: true, message: makeA4SuccessMessage(a4FormulaRescueState.missionIndex) };
    return;
  }
  if (a4FormulaRescueState.missionIndex === 2 && normal === '=F2*H2') {
    a4FormulaRescueState.feedback = {
      correct: false,
      badRefs: ['H3', 'H4'],
      message: 'Copied downward, =F2*H2 becomes =F3*H3 and =F4*H4. H2 moved after copying. The tax rate is fixed, so use $H$2.'
    };
    return;
  }
  if (a4FormulaRescueState.missionIndex === 4 && normal.includes('SUMIF')) {
    a4FormulaRescueState.feedback = {
      correct: false,
      message: 'COUNTIF counts matching cells. SUMIF adds matching values. This task asks how many students scored 50 or above.'
    };
    return;
  }
  a4FormulaRescueState.feedback = { correct: false, message: `Expected ${mission.target}. Check references, operators, brackets and quotation marks.` };
}

function copyA4FormulaDown() {
  const normal = normaliseFormula(a4FormulaRescueState.formula);
  if (a4FormulaRescueState.missionIndex === 1 || normal === '=B2*C2') {
    a4FormulaRescueState.copied = true;
    a4FormulaRescueState.completed.add(1);
    a4FormulaRescueState.feedback = { correct: true, message: 'D2 = B2*C2 copied down to D3 = B3*C3 and D4 = B4*C4. Both row numbers changed because the references are relative.' };
    return;
  }
  if (a4FormulaRescueState.missionIndex === 2 && normal === '=F2*H2') {
    a4FormulaRescueState.feedback = { correct: false, badRefs: ['H3', 'H4'], message: 'Actual copied formula: G3 = F3*H3. H3 is empty, so the fixed tax rate should be locked as $H$2.' };
    return;
  }
  if (a4FormulaRescueState.missionIndex === 2 && normal === '=F2*$H$2') {
    a4FormulaRescueState.completed.add(2);
    a4FormulaRescueState.feedback = { correct: true, message: 'Correct. F2 changes to F3 and F4, while $H$2 remains anchored with locks on H and 2.' };
    return;
  }
  a4FormulaRescueState.feedback = { correct: false, message: 'Build or repair the formula first, then copy it down.' };
}

function makeA4SuccessMessage(index) {
  const messages = [
    'D2 displays 360. Both references are relative because each product row uses its own price and quantity.',
    'Both row numbers changed because the references are relative.',
    'Dollar signs snap into place: $H$2 stays fixed while F2 changes when copied down.',
    '$A2 keeps column A fixed; B$1 keeps row 1 fixed when copied across and down.',
    'COUNTIF counts the cells in C2:C20 that meet the criterion ">=50".'
  ];
  return messages[index] || 'Formula rescued.';
}

function makeA4ReplayMessage() {
  const index = a4FormulaRescueState.missionIndex;
  if (index === 2) return 'Replay: F2 moves down to F3 and F4. $H$2 stays anchored because both column H and row 2 are locked.';
  if (index === 3) return 'Replay: the column lock keeps A fixed, while the row lock keeps row 1 fixed.';
  return 'Replay: relative references move with the copied formula; locked references stay fixed.';
}

function parseA4Reference(ref) {
  const match = String(ref).match(/^(\$?)([A-Z]+)(\$?)(\d+)$/);
  if (!match) return { col: 'B', row: '2', lockColumn: false, lockRow: false };
  return { lockColumn: Boolean(match[1]), col: match[2], lockRow: Boolean(match[3]), row: match[4] };
}

function formatA4Reference(ref, lockColumn = false, lockRow = false) {
  const parsed = parseA4Reference(ref);
  return `${lockColumn ? '$' : ''}${parsed.col}${lockRow ? '$' : ''}${parsed.row}`;
}

function copyA4FormulaReference(ref, rowDelta = 0, colDelta = 0) {
  const parsed = parseA4Reference(ref);
  const col = parsed.lockColumn ? parsed.col : indexToColumn(columnToIndex(parsed.col) + colDelta);
  const row = parsed.lockRow ? parsed.row : String(Number(parsed.row) + rowDelta);
  return formatA4Reference(`${col}${row}`, parsed.lockColumn, parsed.lockRow);
}

function columnToIndex(col) {
  return col.split('').reduce((total, char) => total * 26 + char.charCodeAt(0) - 64, 0);
}

function indexToColumn(index) {
  let col = '';
  while (index > 0) {
    const mod = (index - 1) % 26;
    col = String.fromCharCode(65 + mod) + col;
    index = Math.floor((index - mod) / 26);
  }
  return col || 'A';
}

function bindC2CipherEncryptionLab(stage) {
  const input = stage.querySelector('[data-c2-cipher-input]');
  const shift = stage.querySelector('[data-c2-cipher-shift]');
  const shiftValue = stage.querySelector('[data-c2-shift-value]');
  const plainOutput = stage.querySelector('[data-c2-plain-output]');
  const cipherOutput = stage.querySelector('[data-c2-cipher-output]');
  const alphabet = stage.querySelector('[data-c2-cipher-alphabet]');
  const feedback = stage.querySelector('[data-c2-cipher-feedback]');
  const arrow = stage.querySelector('.encrypt-arrow span');
  if (!input || !shift || !plainOutput || !cipherOutput || !alphabet) return;

  const update = () => {
    const key = Number(shift.value) || 0;
    const plain = input.value.trim() || 'TYPE A MESSAGE';
    const cipher = caesarShift(plain, key);
    if (shiftValue) shiftValue.textContent = String(key);
    if (arrow) arrow.textContent = `Encrypt with key +${key}`;
    plainOutput.textContent = plain.toUpperCase();
    cipherOutput.textContent = cipher;
    cipherOutput.classList.remove('cipher-pop');
    void cipherOutput.offsetWidth;
    cipherOutput.classList.add('cipher-pop');
    alphabet.innerHTML = renderC2CipherAlphabet(key);
    if (feedback) {
      feedback.textContent = `With key +${key}, A becomes ${caesarShift('A', key)}. Encryption supports confidentiality: intercepted ciphertext should not reveal the original message easily.`;
    }
  };

  input.addEventListener('input', update);
  shift.addEventListener('input', update);
  stage.querySelectorAll('[data-c2-cipher-example]').forEach(button => {
    button.addEventListener('click', () => {
      input.value = button.dataset.c2CipherExample || '';
      update();
      input.focus();
    });
  });
  update();
}

function bindActivityStage(activity) {
  const stage = document.getElementById('activityStage');
  stage.querySelector('[data-open-demo]')?.addEventListener('click', event => {
    loadDemo(event.currentTarget.dataset.openDemo);
  });
  stage.querySelector('[data-open-arcade]')?.addEventListener('click', event => {
    showArcadePage(event.currentTarget.dataset.openArcade);
  });
  if (activity.demoKey || activity.arcadeKey) return;
  if (activity.mode === 'a2Detective') {
    bindA2ValidButWrongDetective();
    return;
  }
  if (activity.mode === 'a2FormLab') {
    bindA2FormDesignLab();
    return;
  }
  if (activity.mode === 'a2ParityShooter') {
    bindA2ParityBitShooter();
    return;
  }
  if (activity.mode === 'a3TwosComplementVisualLab') {
    bindA3TwosComplementVisualLab();
    return;
  }
  if (activity.mode === 'a3QuantizationLab') {
    bindA3QuantizationVisualizer();
    return;
  }
  if (activity.mode === 'a3BitmapLab') {
    bindA3BitmapResolutionLab();
    return;
  }
  if (activity.mode === 'a3Utf8Encoder') {
    bindA3Utf8Encoder();
    return;
  }
  if (activity.mode === 'd3ListOps') {
    bindD3ListOperationTrainer();
    return;
  }
  if (activity.mode === 'a4FormulaCopyRescue') {
    bindA4FormulaCopyRescue();
    return;
  }
  if (activity.mode === 'c2Cipher') {
    bindC2CipherEncryptionLab(stage);
    return;
  }
  if (activity.mode === 'dataInfo') {
    bindDataInformationGame(stage);
    return;
  }
  let selectedToken = null;
  let pointer = 0;
  stage.querySelectorAll('[data-sort-token]').forEach(button => {
    button.addEventListener('click', () => {
      selectedToken = button.textContent.trim();
      stage.querySelectorAll('.concept-token').forEach(token => token.classList.remove('active'));
      button.classList.add('active');
      setActivityFeedback(stage, `Selected "${selectedToken}". Now place it into a zone.`);
    });
  });
  stage.querySelectorAll('.concept-zone').forEach(zone => {
    zone.addEventListener('click', () => {
      if (!selectedToken) return;
      zone.innerHTML = `<strong>${escapeHtml(zone.dataset.zoneName)}</strong><span>${escapeHtml(selectedToken)}</span>`;
      setActivityFeedback(stage, `Placed "${selectedToken}". Ask: why does this belong here?`);
    });
  });
  stage.querySelectorAll('[data-build-token]').forEach(button => {
    button.addEventListener('click', () => {
      const canvas = stage.querySelector('#builderCanvas');
      canvas.classList.add('has-items');
      canvas.innerHTML += `<span>${escapeHtml(button.textContent.trim())}</span>`;
    });
  });
  stage.querySelector('[data-run-builder]')?.addEventListener('click', () => {
    setActivityFeedback(stage, `Model run: ${activity.tokens.slice(0, 3).join(' → ')}. Explain the role of each part.`);
  });
  stage.querySelector('[data-clear-builder]')?.addEventListener('click', () => {
    const canvas = stage.querySelector('#builderCanvas');
    canvas.classList.remove('has-items');
    canvas.textContent = 'Build area: click components above to add them here.';
  });
  stage.querySelectorAll('[data-sequence-token]').forEach(button => {
    button.addEventListener('click', () => {
      const track = stage.querySelector('#sequenceTrack');
      if (!track.classList.contains('has-items')) {
        track.classList.add('has-items');
        track.innerHTML = '';
      }
      track.innerHTML += `<span>${escapeHtml(button.textContent.trim())}</span>`;
    });
  });
  stage.querySelector('[data-run-sequence]')?.addEventListener('click', () => {
    const steps = [...stage.querySelectorAll('#sequenceTrack span')];
    steps.forEach((step, index) => setTimeout(() => step.classList.add('active'), index * 220));
    setActivityFeedback(stage, 'Sequence animated. Compare the order with the real process.');
  });
  stage.querySelector('[data-clear-sequence]')?.addEventListener('click', () => {
    const track = stage.querySelector('#sequenceTrack');
    track.classList.remove('has-items');
    track.textContent = 'Sequence track: click steps in the order you want to test.';
  });
  stage.querySelector('[data-visual-slider]')?.addEventListener('input', event => {
    const value = Number(event.target.value);
    stage.querySelectorAll('#visualBars span').forEach((bar, index) => {
      bar.style.opacity = index < value ? '1' : '0.35';
      bar.style.transform = index < value ? 'translateY(-4px)' : 'none';
    });
    setActivityFeedback(stage, `Visual level ${value}: describe what became clearer or more risky.`);
  });
  stage.querySelector('[data-step-data]')?.addEventListener('click', () => {
    const nodes = [...stage.querySelectorAll('.data-node')];
    nodes.forEach(node => node.classList.remove('active'));
    nodes[pointer % nodes.length]?.classList.add('active');
    setActivityFeedback(stage, `Pointer is now at index ${pointer % nodes.length}.`);
    pointer += 1;
  });
  stage.querySelector('[data-swap-data]')?.addEventListener('click', () => {
    const row = stage.querySelector('#dataLabRow');
    const nodes = [...row.querySelectorAll('.data-node')];
    if (nodes.length >= 2) row.insertBefore(nodes[1], nodes[0]);
    setActivityFeedback(stage, 'Two items moved. Discuss which algorithm operation this represents.');
  });
  stage.querySelector('[data-reset-data]')?.addEventListener('click', () => renderInteractiveActivity(activity));
  stage.querySelectorAll('[data-sim-toggle]').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('is-on');
      button.querySelector('strong').textContent = button.classList.contains('is-on') ? 'On' : 'Off';
      const onCount = stage.querySelectorAll('[data-sim-toggle].is-on').length;
      const percent = Math.max(10, Math.min(100, 20 + onCount * 16));
      const bar = stage.querySelector('#activityMeterBar');
      if (bar) {
        bar.style.width = `${percent}%`;
        bar.textContent = `To be added`;
      }
      setActivityFeedback(stage, `${onCount} decision(s) switched on. Explain the effect, not only the final state.`);
    });
  });
}

function setActivityFeedback(stage, message) {
  const feedback = stage.querySelector('.activity-feedback');
  if (feedback) feedback.textContent = message;
}

function bindDataInformationGame(stage) {
  let selectedCard = null;
  stage.querySelectorAll('.data-info-card').forEach(card => {
    card.addEventListener('click', () => {
      selectedCard = card;
      stage.querySelectorAll('.data-info-card').forEach(item => item.classList.remove('active'));
      card.classList.add('active');
      setActivityFeedback(stage, `Selected "${card.textContent.trim()}". Now choose Data or Information.`);
    });
  });
  stage.querySelectorAll('.data-info-zone').forEach(zone => {
    zone.addEventListener('click', () => {
      if (!selectedCard) return;
      const correct = selectedCard.dataset.type === zone.dataset.infoZone;
      const placed = document.createElement('span');
      placed.textContent = selectedCard.textContent.trim();
      placed.className = correct ? 'placed-card correct' : 'placed-card wrong';
      zone.appendChild(placed);
      selectedCard.disabled = true;
      selectedCard.classList.remove('active');
      selectedCard.classList.add(correct ? 'sorted-correct' : 'sorted-wrong');
      setActivityFeedback(stage, correct ? selectedCard.dataset.note : `Not quite. This card is better classified as "${selectedCard.dataset.type}". ${selectedCard.dataset.note}`);
      selectedCard = null;
    });
  });
  stage.querySelector('[data-transform-data]')?.addEventListener('click', () => {
    const steps = stage.querySelectorAll('#transformFlow span');
    steps.forEach((step, index) => setTimeout(() => step.classList.add('active'), index * 280));
    setActivityFeedback(stage, 'The same numbers become useful information only after organisation, processing and presentation.');
  });
}

function shuffleOptions(items) {
  return items.map(item => ({
    ...item,
    completed: false,
    options: [...(item.options || [])]
      .map(option => ({ ...option }))
      .sort(() => Math.random() - 0.5)
  }));
}

function renderTopicPractice(items) {
  topicPracticeItems = shuffleOptions(items);
  topicPracticeScore = { xp: 0, streak: 0, completed: 0 };
  topicPracticePanel.classList.toggle('hidden', !items.length);
  if (!items.length) {
    topicPracticePanel.innerHTML = '';
    return;
  }
  topicPracticePanel.innerHTML = `
    <div class="practice-header">
      <div>
        <p class="eyebrow">Random practice</p>
        <h3>Three-level challenge set</h3>
        <p>Use these to check the concept, trace or predict a result, then transfer the idea to a DSE-style item.</p>
      </div>
      <div class="practice-scoreboard">
        <span id="topicPracticeXp">XP 0</span>
        <span id="topicPracticeStreak">Streak 0</span>
        <span id="topicPracticeDone">0/${items.length} done</span>
      </div>
    </div>
    <div class="practice-mission-grid">
      ${topicPracticeItems.map((item, index) => `
        <article class="practice-mission-card" data-topic-practice-card="${index}">
          <p class="mission-topline"><span>${escapeHtml(item.level)}</span><strong>+10 XP</strong></p>
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.stem)}</p>
          <div class="practice-option-grid">
            ${item.options.map((option, optionIndex) => `
              <button class="practice-option" type="button" data-practice-index="${index}" data-option-index="${optionIndex}">
                ${escapeHtml(option.text)}
              </button>
            `).join('')}
          </div>
          <div class="practice-tools">
            <button class="ghost-btn" type="button" data-practice-hint="${index}">Hint</button>
            <button class="ghost-btn" type="button" data-practice-solution="${index}">Solution</button>
          </div>
          <div class="practice-support practice-hint" data-practice-hint-box="${index}" hidden>${escapeHtml(item.hint)}</div>
          <div class="practice-support practice-solution" data-practice-solution-box="${index}" hidden>${escapeHtml(item.solution)}</div>
          <p class="practice-feedback" data-practice-feedback="${index}"></p>
        </article>
      `).join('')}
    </div>
  `;
  bindTopicPractice();
  updateTopicPracticeScoreboard();
}

function bindTopicPractice() {
  topicPracticePanel.querySelectorAll('[data-practice-index]').forEach(button => {
    button.addEventListener('click', () => {
      const practiceIndex = Number(button.dataset.practiceIndex);
      const optionIndex = Number(button.dataset.optionIndex);
      const item = topicPracticeItems[practiceIndex];
      if (!item || item.completed) return;
      const option = item.options[optionIndex];
      const card = topicPracticePanel.querySelector(`[data-topic-practice-card="${practiceIndex}"]`);
      card.querySelectorAll('.practice-option').forEach(optionButton => {
        optionButton.disabled = true;
        const candidate = item.options[Number(optionButton.dataset.optionIndex)];
        if (candidate?.correct) optionButton.classList.add('correct');
      });
      if (!option.correct) button.classList.add('wrong');
      const feedback = topicPracticePanel.querySelector(`[data-practice-feedback="${practiceIndex}"]`);
      feedback.textContent = option.feedback || (option.correct ? 'Correct. Now explain the reason using the syllabus term.' : 'Not quite. Check the misconception and try the solution note.');
      feedback.classList.add(option.correct ? 'good' : 'bad');
      if (option.correct) {
        item.completed = true;
        topicPracticeScore.xp += 10;
        topicPracticeScore.streak += 1;
        topicPracticeScore.completed += 1;
        card.classList.add('mission-complete');
      } else {
        topicPracticeScore.streak = 0;
        card.classList.add('mission-review');
      }
      updateTopicPracticeScoreboard();
    });
  });
  topicPracticePanel.querySelectorAll('[data-practice-hint]').forEach(button => {
    button.addEventListener('click', () => {
      const box = topicPracticePanel.querySelector(`[data-practice-hint-box="${button.dataset.practiceHint}"]`);
      if (box) box.hidden = false;
    });
  });
  topicPracticePanel.querySelectorAll('[data-practice-solution]').forEach(button => {
    button.addEventListener('click', () => {
      const box = topicPracticePanel.querySelector(`[data-practice-solution-box="${button.dataset.practiceSolution}"]`);
      if (box) box.hidden = false;
    });
  });
}

function updateTopicPracticeScoreboard() {
  document.getElementById('topicPracticeXp').textContent = `XP ${topicPracticeScore.xp}`;
  document.getElementById('topicPracticeStreak').textContent = `Streak ${topicPracticeScore.streak}`;
  document.getElementById('topicPracticeDone').textContent = `${topicPracticeScore.completed}/${topicPracticeItems.length} done`;
}

function renderTopicSteps(items) {
  topicSteps.innerHTML = items.map(item => `<li>${escapeHtml(item)}</li>`).join('');
}

function openNavGroupFor(item) {
  const group = item?.closest('.curriculum-group');
  if (!group) return;
  const heading = group.querySelector('.curriculum-heading');
  if (!heading) return;
  group.classList.add('is-open');
  heading.setAttribute('aria-expanded', 'true');
}

function toggleNavGroup(button) {
  const group = button.closest('.curriculum-group');
  if (!group) return;
  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!expanded));
  group.classList.toggle('is-open', !expanded);
}

function setSidebarVisible(visible) {
  appShell.classList.toggle('sidebar-collapsed', !visible);
  sidebarToggle.setAttribute('aria-expanded', String(visible));
}

function initDashboardActions() {
  document.querySelectorAll('[data-dashboard-action]').forEach(button => {
    button.addEventListener('click', () => {
      const action = button.dataset.dashboardAction;
      if (action === 'lab') {
        const topicButton = document.querySelector('.nav-item[data-topic="A3 Data Representation"]');
        if (topicButton) showTopicPage(topicButton);
        return;
      }
      if (action === 'topic') {
        const topicButton = document.querySelector('.nav-item[data-topic="C1 Networking and Internet Basics"]');
        if (topicButton) showTopicPage(topicButton);
        return;
      }
      if (action === 'programming') {
        const topicButton = document.querySelector('.nav-item[data-topic="D2 Algorithm Design I - Sequence and Selection"]');
        if (topicButton) showTopicPage(topicButton);
      }
    });
  });
}

function normalise(text) {
  return String(text).replace(/\s+/g, '').replace(/←/g, 'assign').toLowerCase();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

renderChapterSidebar();

demoSelect.addEventListener('change', () => loadDemo(demoSelect.value));
document.getElementById('newCaseBtn').addEventListener('click', () => loadDemo(currentDemoKey, true));
document.getElementById('stepBtn').addEventListener('click', nextStep);
document.getElementById('backBtn').addEventListener('click', previousStep);
document.getElementById('resetBtn').addEventListener('click', reset);
document.getElementById('autoBtn').addEventListener('click', toggleAuto);
document.getElementById('explainBtn').addEventListener('click', showExplanation);
document.getElementById('newExerciseBtn').addEventListener('click', generateExercise);
hintBtn.addEventListener('click', showHint);
solutionBtn.addEventListener('click', showSolution);
sidebarToggle.addEventListener('click', () => setSidebarVisible(true));
sidebarHideBtn.addEventListener('click', () => setSidebarVisible(false));
document.querySelector('.nav-item[data-page="dashboard"]').addEventListener('click', showDashboardPage);

document.querySelectorAll('.curriculum-heading').forEach(button => {
  button.addEventListener('click', () => toggleNavGroup(button));
});

document.querySelectorAll('.nav-item[data-demo]').forEach(item => {
  item.addEventListener('click', () => loadDemo(item.dataset.demo));
});

document.querySelectorAll('.nav-item[data-topic]').forEach(item => {
  item.addEventListener('click', () => showTopicPage(item));
});

document.querySelectorAll('[data-arcade]').forEach(item => {
  item.addEventListener('click', () => showArcadePage(item.dataset.arcade));
});

initDashboardActions();
showDashboardPage();
