/* Chapter-keyed additions to the DSE Practice Hub.
 * Use SOW chapter codes (for example D4 or EA1), not activity-mode names.
 * Each question needs a unique title and stem within its chapter, feedback,
 * a hint, an explanation, and a useful next action. Run
 * `node scripts/validate_checkpoint_bank.mjs` after editing this file.
 * In-chapter `practice` questions remain in script.js; the engine combines both.
 */
window.CHECKPOINT_BANK = {
  C1: [
    {
      type: 'mc',
      difficulty: 'standard',
      title: 'Switch vs router',
      stem: 'A school wants 24 PCs in one computer room to share files with each other. Which device should connect those PCs inside the same LAN?',
      options: [
        { text: 'Switch', correct: true, why: 'A switch forwards frames between devices in the same LAN, which is what the computer room needs.' },
        { text: 'Router only, with no switch', correct: false, why: 'A router is used when traffic must cross into another network. It is not the usual way to connect 24 PCs inside one room.' },
        { text: 'Modem/ONT only', correct: false, why: 'A modem or ONT links the premises to the ISP. It does not create the computer-room LAN.' },
        { text: 'Printer', correct: false, why: 'A printer is an output device. It does not forward LAN traffic between PCs.' }
      ],
      hint: 'Stay inside one local network.',
      explanation: 'Use a switch for devices in the same LAN. Use a router when packets must leave that network.',
      nextAction: 'Sketch PC → switch → router → modem → ISP and say what changes at each boundary.'
    },
    {
      type: 'mc',
      difficulty: 'standard',
      title: 'Access point role',
      stem: 'Laptops in a classroom connect to the school LAN through Wi-Fi. What is the main role of the wireless access point?',
      options: [
        { text: 'To connect wireless devices into the wired LAN', correct: true, why: 'An access point bridges Wi-Fi clients onto the school LAN, usually through a switch.' },
        { text: 'To assign every laptop a public Internet IP of its own', correct: false, why: 'Public addressing and leaving the LAN are router/ISP jobs, not the AP’s main classroom role.' },
        { text: 'To replace the need for a switch in a wired computer room', correct: false, why: 'Wired PCs still use a switch. The AP serves wireless clients.' },
        { text: 'To encrypt files stored on the school server', correct: false, why: 'File encryption is a security/storage issue, not the AP’s LAN-joining role.' }
      ],
      hint: 'Wi-Fi clients still need a path into the LAN.',
      explanation: 'An access point lets wireless devices join the LAN. A router is still needed to reach other networks.',
      nextAction: 'Trace a laptop packet: laptop → AP → switch → router.'
    },
    {
      type: 'mc',
      difficulty: 'stretch',
      title: 'Modem vs router',
      stem: 'A technician says the school “router” is the box that converts the ISP fibre/cable signal so the premises can use the Internet service. Which device role is being described?',
      options: [
        { text: 'Modem / ONT', correct: true, why: 'A modem or ONT handles the access technology to the ISP. A router forwards packets between the school network and other networks.' },
        { text: 'Switch', correct: false, why: 'A switch stays inside the LAN and does not terminate the ISP access link.' },
        { text: 'NIC', correct: false, why: 'A NIC is the network interface inside a computer, not the ISP access device.' },
        { text: 'Access point', correct: false, why: 'An access point provides wireless LAN access, not ISP signal conversion.' }
      ],
      hint: 'ISP access and LAN routing are different jobs.',
      explanation: 'Modem/ONT = access to the ISP. Router = forwarding between networks. Home “router” boxes often combine both, but DSE still expects the roles.',
      nextAction: 'If a question shows separate boxes, name each role instead of calling everything a router.'
    },
    {
      type: 'order',
      difficulty: 'standard',
      title: 'Packet journey',
      stem: 'A laptop in a Wi-Fi classroom requests a webpage on the public Internet. Put the devices in the order the packet should pass them.',
      items: ['Laptop', 'Access point', 'Switch', 'Router', 'Modem / ONT', 'ISP / Internet'],
      hint: 'Leave the host, join the LAN, then cross the network boundary.',
      explanation: 'Wireless traffic enters the LAN at the AP, is forwarded by the switch, then the router sends it toward another network through the modem/ONT to the ISP.',
      nextAction: 'Change the destination to the school server and notice the packet should stop at the LAN, not the ISP.'
    },
    {
      type: 'fill',
      difficulty: 'standard',
      title: 'LAN term',
      stem: 'A network covering one school campus and managed by the school is usually called a ____.',
      accept: ['LAN', 'lan', 'local area network', 'Local Area Network'],
      hint: 'Limited area, one organisation.',
      explanation: 'LAN describes a local network such as a campus. WAN links networks over a wider area.',
      nextAction: 'Give one reason a home-to-school connection is not a LAN.'
    },
    {
      type: 'short',
      difficulty: 'stretch',
      title: 'Distinguish devices',
      stem: 'Distinguish between a switch and a router in a school network. Refer to where each device forwards data.',
      marks: [
        { point: 'A switch forwards data between devices in the same LAN / local network.', keywords: ['switch', 'lan', 'same', 'local'] },
        { point: 'A router forwards data between different networks, such as the school LAN and the Internet.', keywords: ['router', 'between', 'network', 'internet'] }
      ],
      hint: 'Same network versus different networks.',
      explanation: 'Switch = within a LAN. Router = across network boundaries.',
      nextAction: 'Add one sentence on why an AP is not a substitute for a router.'
    },
    {
      type: 'mc',
      difficulty: 'standard',
      title: 'Server placement',
      stem: 'A school file server should be reachable by computer-room PCs and Wi-Fi laptops. Where should the server connect?',
      options: [
        { text: 'To the LAN switch', correct: true, why: 'The server is a LAN resource. Connecting it to the switch lets local clients reach it without going out to the ISP.' },
        { text: 'Only to the modem/ONT on the ISP side', correct: false, why: 'Putting the server outside the school LAN makes local sharing slower and more exposed. School servers belong on the LAN.' },
        { text: 'Directly into each PC with no switch', correct: false, why: 'One server cannot cable to every PC as a practical LAN design.' },
        { text: 'Only to a public website host on another continent', correct: false, why: 'A school file server is a local service, not a remote public website.' }
      ],
      hint: 'The server is a LAN resource.',
      explanation: 'Shared school services sit on the LAN, usually on a switch, so internal traffic does not need the Internet.',
      nextAction: 'Ask whether a request to the school server must pass the router.'
    }
  ],
  B1: [
    {
      type: 'mc',
      difficulty: 'standard',
      title: 'Fetch source',
      stem: 'During FETCH, where does the CPU get the next instruction from?',
      options: [
        { text: 'Main memory, using the address in the program counter', correct: true, why: 'FETCH copies the instruction at the memory address held by the PC into the CPU.' },
        { text: 'The hard disk cache only', correct: false, why: 'The instruction cycle uses main memory. Disk storage is not the FETCH source in HKDSE descriptions.' },
        { text: 'The monitor pixel buffer', correct: false, why: 'Display output is not where instructions are fetched from.' },
        { text: 'The ALU result from the previous school year', correct: false, why: 'The ALU executes operations; it does not store the program of instructions.' }
      ],
      hint: 'Instructions currently in use live in main memory.',
      explanation: 'PC holds the address. Memory returns the instruction. Then the CPU can decode it.',
      nextAction: 'Name what happens to the PC after the instruction has been fetched.'
    },
    {
      type: 'mc',
      difficulty: 'standard',
      title: 'Decode role',
      stem: 'Which component interprets the fetched instruction so the CPU knows what operation to perform?',
      options: [
        { text: 'Control unit', correct: true, why: 'The control unit decodes the instruction and issues control signals.' },
        { text: 'Power supply unit', correct: false, why: 'The PSU provides power; it does not interpret instructions.' },
        { text: 'Speaker', correct: false, why: 'A speaker is an output device.' },
        { text: 'Optical disc tray', correct: false, why: 'Storage trays do not decode machine instructions.' }
      ],
      hint: 'Which part of the CPU is in charge of control signals?',
      explanation: 'FETCH gets the instruction, DECODE (control unit) interprets it, EXECUTE carries it out (ALU if arithmetic).',
      nextAction: 'For ADD, say when the ALU becomes involved.'
    },
    {
      type: 'order',
      difficulty: 'standard',
      title: 'Machine cycle',
      stem: 'Put the CPU instruction cycle stages in order.',
      items: ['Fetch', 'Decode', 'Execute'],
      hint: 'Get the instruction before interpreting it.',
      explanation: 'The usual HKDSE cycle is fetch, then decode, then execute.',
      nextAction: 'State one register that changes during FETCH.'
    },
    {
      type: 'mc',
      difficulty: 'stretch',
      title: 'Bus roles',
      stem: 'Which statement correctly distinguishes the address bus and the data bus?',
      options: [
        { text: 'The address bus carries memory locations; the data bus carries data or instructions.', correct: true, why: 'Address identifies where. Data bus carries what is read or written.' },
        { text: 'Both buses only carry sound to the speaker.', correct: false, why: 'System buses move addresses, data/instructions and control signals inside the computer.' },
        { text: 'The data bus stores files permanently.', correct: false, why: 'A bus transfers signals. Permanent storage is secondary storage.' },
        { text: 'The address bus executes arithmetic.', correct: false, why: 'Arithmetic is done in the ALU, not on the address bus.' }
      ],
      hint: 'Where versus what.',
      explanation: 'Address bus = location. Data bus = contents. Control bus = timing/control signals.',
      nextAction: 'Point to MAR and MDR and say which bus each one is closely tied to.'
    },
    {
      type: 'fill',
      difficulty: 'standard',
      title: 'Volatile memory',
      stem: 'Main memory that loses its contents when power is removed is called ____.',
      accept: ['RAM', 'ram', 'volatile RAM', 'main memory RAM'],
      hint: 'Working memory for programs currently in use.',
      explanation: 'RAM is volatile working memory. ROM is non-volatile. Secondary storage keeps files when the computer is off.',
      nextAction: 'Give one reason adding RAM can reduce slowdowns with many programs open.'
    },
    {
      type: 'short',
      difficulty: 'stretch',
      title: 'Explain FETCH',
      stem: 'Explain what happens to the program counter and memory during the FETCH stage of the instruction cycle.',
      marks: [
        { point: 'The PC holds the address of the next instruction.', keywords: ['pc', 'program counter', 'address'] },
        { point: 'That address is used to read the instruction from main memory into the CPU.', keywords: ['memory', 'instruction', 'fetch'] },
        { point: 'The PC is then updated to point to the next instruction.', keywords: ['increment', 'next', 'pc', 'updated'] }
      ],
      hint: 'Address, read, then prepare the next address.',
      explanation: 'FETCH uses the PC address to copy an instruction from memory, then increases the PC.',
      nextAction: 'Contrast FETCH with EXECUTE for an ADD instruction.'
    }
  ],
  C4: [
    {
      type: 'mc',
      difficulty: 'standard',
      title: 'Buffer growth',
      stem: 'A video bitrate is 4 Mbps and the network throughput stays at 6 Mbps. What happens to the playback buffer?',
      options: [
        { text: 'It can grow, because data arrives faster than it is consumed.', correct: true, why: 'When throughput is higher than bitrate, extra data accumulates in the buffer.' },
        { text: 'It must empty immediately, because video always pauses.', correct: false, why: 'Pause happens when the buffer cannot supply the bitrate. Here throughput is higher, so the buffer can grow.' },
        { text: 'Bitrate and throughput are the same quantity, so nothing can be said.', correct: false, why: 'Bitrate is how fast the media is consumed. Throughput is how fast the network delivers data.' },
        { text: 'The buffer grows only if the file is a spreadsheet.', correct: false, why: 'The relationship is about streaming rates, not file type.' }
      ],
      hint: 'Compare incoming rate with playback consumption.',
      explanation: 'throughput > bitrate → buffer can grow. throughput < bitrate → buffer falls. Persistent shortage → stall.',
      nextAction: 'Change the numbers so throughput is below bitrate and predict the new result.'
    },
    {
      type: 'mc',
      difficulty: 'stretch',
      title: 'Temporary slowdown',
      stem: 'Playback is smooth with a few seconds of buffer. Throughput then drops below bitrate for a short time, then recovers. What should students expect?',
      options: [
        { text: 'The buffer falls during the slowdown; playback continues unless the buffer reaches empty.', correct: true, why: 'A short dip uses stored buffer. A stall occurs only if the buffer is exhausted before throughput recovers.' },
        { text: 'Playback must pause at the first millisecond of slower throughput.', correct: false, why: 'That ignores the purpose of buffering: covering short network variation.' },
        { text: 'The bitrate automatically becomes zero.', correct: false, why: 'Bitrate is the media consumption rate. It does not jump to zero just because the network slowed.' },
        { text: 'The access point becomes a modem.', correct: false, why: 'Device roles are a networking topic; they do not explain buffer behaviour here.' }
      ],
      hint: 'Buffer exists to survive short dips.',
      explanation: 'Temporary throughput < bitrate drains the buffer. Persistent shortage empties it and playback pauses.',
      nextAction: 'In the simulator, cause a dip that does not stall, then a dip that does.'
    },
    {
      type: 'fill',
      difficulty: 'standard',
      title: 'Throughput term',
      stem: 'The actual measured data rate achieved on a link is called ____, which may be lower than bandwidth.',
      accept: ['throughput', 'Throughput'],
      hint: 'Not the theoretical capacity.',
      explanation: 'Bandwidth is theoretical capacity. Throughput is the rate actually achieved.',
      nextAction: 'Write one reason throughput can be lower than bandwidth (congestion, interference, overhead).'
    },
    {
      type: 'short',
      difficulty: 'stretch',
      title: 'Explain stall',
      stem: 'Explain why a video may pause even though the file has not finished downloading, using bitrate, throughput and buffer.',
      marks: [
        { point: 'Playback consumes data at the media bitrate.', keywords: ['bitrate', 'consume', 'playback'] },
        { point: 'If throughput stays below bitrate, the buffer decreases.', keywords: ['throughput', 'below', 'buffer'] },
        { point: 'When the buffer is empty, playback pauses / buffering occurs.', keywords: ['empty', 'pause', 'buffering', 'stall'] }
      ],
      hint: 'Consumption versus arrival, then what empty means.',
      explanation: 'Streaming needs the buffer to stay above zero. Arrival rate must cover consumption over time.',
      nextAction: 'State the condition that lets the buffer grow again.'
    },
    {
      type: 'mc',
      difficulty: 'standard',
      title: 'Bcc reminder',
      stem: 'A teacher emails all parents and must hide parent addresses from one another. Which field should be used?',
      options: [
        { text: 'Bcc', correct: true, why: 'Bcc hides recipient addresses from other recipients.' },
        { text: 'Cc', correct: false, why: 'Cc usually lets recipients see other Cc/To addresses.' },
        { text: 'Subject', correct: false, why: 'Subject is the topic line, not an addressing-privacy control.' },
        { text: 'Read receipt', correct: false, why: 'A read receipt reports opening; it does not hide addresses.' }
      ],
      hint: 'Which field conceals recipients?',
      explanation: 'Bcc = hidden copies. Cc = visible copies.',
      nextAction: 'Give one privacy risk of putting every parent in To.'
    }
  ],
  C5: [
    {
      type: 'mc',
      difficulty: 'standard',
      title: 'href vs src',
      stem: 'A student wants a picture file to appear on a webpage. Which attribute should be used on the img element?',
      options: [
        { text: 'src', correct: true, why: 'src gives the image file location. href is for hyperlink destinations.' },
        { text: 'href', correct: false, why: 'href belongs on an anchor (a) tag for a link destination, not the image file path.' },
        { text: 'Bcc', correct: false, why: 'Bcc is an email field.' },
        { text: 'primary key', correct: false, why: 'Primary keys belong to databases, not HTML images.' }
      ],
      hint: 'Image source.',
      explanation: 'img uses src (and alt). a uses href.',
      nextAction: 'Write one img tag with src and alt for logo.png.'
    },
    {
      type: 'mc',
      difficulty: 'standard',
      title: 'Parent folder',
      stem: 'The file pages/news.html must show images/logo.png. Which relative path is correct from news.html?',
      context: 'Folder structure: site/index.html ; site/images/logo.png ; site/pages/news.html',
      options: [
        { text: '../images/logo.png', correct: true, why: '../ moves from pages/ up to site/, then images/logo.png goes into the images folder.' },
        { text: 'images/logo.png', correct: false, why: 'That path would look for site/pages/images/logo.png, which does not exist in the given tree.' },
        { text: '../../logo.png', correct: false, why: 'That climbs above site/ and never enters images/.' },
        { text: 'pages/images/logo.png', correct: false, why: 'news.html is already inside pages/, so this would nest an extra pages folder.' }
      ],
      hint: 'Start in pages/, then climb, then enter images/.',
      explanation: '../ means parent folder. Name the folders you enter after climbing.',
      nextAction: 'Build the path from index.html to the same logo and notice ../ is not needed.'
    },
    {
      type: 'fill',
      difficulty: 'standard',
      title: 'Parent token',
      stem: 'In a relative path, the token ____ means “move to the parent folder”.',
      accept: ['../', '..', '.. /'],
      hint: 'Two dots.',
      explanation: '../ climbs one folder. folder/ enters a child folder.',
      nextAction: 'From pages/about.html, write the path to css/style.css if css/ sits next to pages/.'
    },
    {
      type: 'order',
      difficulty: 'standard',
      title: 'Path walk',
      stem: 'From pages/news.html to images/logo.png, order the path actions.',
      context: 'site/ contains index.html, images/logo.png and pages/news.html.',
      items: ['Start in pages/', 'Move to parent folder with ../', 'Enter images/', 'Select logo.png'],
      hint: 'Climb first, then enter the sibling folder.',
      explanation: 'Relative paths are walked from the current file’s folder, not from a guessed website root unless the path starts at that root.',
      nextAction: 'Repeat from images/banner.jpg to pages/about.html.'
    },
    {
      type: 'short',
      difficulty: 'stretch',
      title: 'Broken image',
      stem: 'A page in the pages folder shows a broken image. The tag is <img src="logo.png" alt="School logo"> and the file is in images/logo.png. Explain the fault and how to correct the path.',
      marks: [
        { point: 'logo.png is not in the same folder as the page, so src="logo.png" is wrong.', keywords: ['same folder', 'pages', 'not', 'wrong'] },
        { point: 'The path should climb to the parent and then enter images, e.g. ../images/logo.png.', keywords: ['../', 'images'] }
      ],
      hint: 'Where is the HTML file, and where is the image file?',
      explanation: 'Relative paths start from the current page’s folder. Same-folder names fail when the file is in a sibling folder.',
      nextAction: 'Add alt text even after the path is fixed, for accessibility.'
    }
  ],
  A2: [
    {
      type: 'mc',
      difficulty: 'standard',
      title: 'Validation vs verification',
      stem: 'A form rejects age 140 because it is outside 0–120. Which process is this?',
      options: [
        { text: 'Validation', correct: true, why: 'Validation checks whether data is reasonable or within rules. It does not prove the age is the true age of that person.' },
        { text: 'Verification', correct: false, why: 'Verification checks that data was copied/entered accurately, for example double entry. Range checking is validation.' },
        { text: 'Normalisation to 3NF', correct: false, why: 'Normalisation is database design, not input checking.' },
        { text: 'Packet switching', correct: false, why: 'Packet switching is a networking idea.' }
      ],
      hint: 'Reasonableness versus accurate copying.',
      explanation: 'Validation = sensible / within rules. Verification = entered correctly. Valid data can still be factually wrong.',
      nextAction: 'Give one verification method for a typed student ID.'
    }
  ],
  A5: [
    {
      type: 'mc',
      difficulty: 'standard',
      title: 'Absolute reference',
      stem: 'A formula in B2 is =A2*$D$1. After copying it down to B3, what does B3 contain?',
      options: [
        { text: '=$A3*$D$1 is wrong; it becomes =A3*$D$1', correct: true, why: 'A2 is relative so the row follows the copy. $D$1 is absolute so the tax/rate cell stays fixed.' },
        { text: '=A2*$D$1 with no change', correct: false, why: 'Relative references change when copied. A2 should become A3.' },
        { text: '=A3*$D$2', correct: false, why: '$D$1 does not shift. Only the relative part moves.' },
        { text: '=B3*D1 with both parts relative', correct: false, why: 'The original used $D$1, so column D row 1 stays locked.' }
      ],
      hint: 'Dollar signs lock the part they mark.',
      explanation: 'Relative references move with the copy. Absolute $D$1 stays on the same cell.',
      nextAction: 'Predict a mixed reference $A2 copied one column right.'
    }
  ],
  C8: [
    {
      type: 'mc',
      difficulty: 'stretch',
      title: 'One tool is not enough',
      stem: 'Students use public Wi-Fi. Which statement is DSE-safe?',
      options: [
        { text: 'HTTPS or a VPN can protect data in transit, but the endpoint account can still be compromised.', correct: true, why: 'A control addresses a mechanism. Remaining limitations still exist: stolen passwords, malware on the device, phishing.' },
        { text: 'Antivirus alone stops all eavesdropping on open Wi-Fi.', correct: false, why: 'Antivirus targets malware on a device. It does not encrypt a public wireless hop by itself.' },
        { text: 'A firewall makes HTTPS unnecessary.', correct: false, why: 'A firewall filters traffic. It is not a substitute for encrypted web communication.' },
        { text: 'Public Wi-Fi cannot be used for any school work even with HTTPS.', correct: false, why: 'Risk can be reduced with HTTPS/VPN and careful login habits; DSE expects reasoned limits, not an absolute ban without reason.' }
      ],
      hint: 'Threat → mechanism → control → remaining limitation.',
      explanation: 'Name the threat, the weak point, the control, and what the control does not fix.',
      nextAction: 'Apply the same chain to ransomware (backup helps recovery; it does not block the first infection alone).'
    }
  ],
  A6: [
    {
      type: 'mc',
      difficulty: 'standard',
      title: 'Phone data type',
      stem: 'A student table stores a mobile number such as 9123-4567. Which data type is most suitable?',
      options: [
        { text: 'Text', correct: true, why: 'Phone numbers are codes. Arithmetic is not required, and a Number type can drop leading zeros or symbols.' },
        { text: 'Number', correct: false, why: 'Number is for quantities. A phone is not added or averaged in Core A6.' },
        { text: 'Yes/No', correct: false, why: 'Yes/No stores a Boolean fact, not a phone string.' },
        { text: 'OLE object', correct: false, why: 'That is not the HKDSE field-type decision here.' }
      ],
      hint: 'Will you calculate with it?',
      explanation: 'Use Text for IDs and phone numbers. Use Number or Currency when the value is a quantity.',
      nextAction: 'Name one reason 0 and NULL are different in a Fine field.'
    },
    {
      type: 'mc',
      difficulty: 'standard',
      title: 'NULL vs 0',
      stem: 'Fine is Currency. One student has Fine = 0 and another has Fine left blank. Which statement is DSE-safe?',
      options: [
        { text: '0 means the fine is zero; blank/NULL means the amount is unknown.', correct: true, why: 'NULL is missing data. 0 is a stored numeric value.' },
        { text: 'They are always the same value.', correct: false, why: 'A query WHERE Fine = 0 does not return NULL fines.' },
        { text: 'NULL is a type of primary key.', correct: false, why: 'A primary key must not be NULL.' },
        { text: 'Blank means the student paid the largest possible fine.', correct: false, why: 'Blank means no value was stored.' }
      ],
      hint: 'Missing versus measured as zero.',
      explanation: 'NULL ≠ 0. Design queries with that difference in mind.',
      nextAction: 'State whether a primary key may be NULL.'
    },
    {
      type: 'mc',
      difficulty: 'stretch',
      title: 'Form query report',
      stem: 'Office staff must type one new student at a time. Later they need a printable class list. Which pair is most suitable?',
      options: [
        { text: 'Form for entry; report for the printable list', correct: true, why: 'A form supports record entry/viewing. A report presents selected data for printing. A query can feed the report but is not itself the printable layout.' },
        { text: 'Report for typing; form for printing', correct: false, why: 'That swaps the objects’ purposes.' },
        { text: 'Primary key for both jobs', correct: false, why: 'A key identifies records; it is not an output object.' },
        { text: 'Only a programming loop, not database objects', correct: false, why: 'This is Core A5 database object choice.' }
      ],
      hint: 'Match the object to the task.',
      explanation: 'Table stores. Form enters/views. Query selects. Report presents.',
      nextAction: 'Read a SELECT … WHERE … ORDER BY query and say what the user sees.'
    },
    {
      type: 'short',
      difficulty: 'stretch',
      title: 'Explain the query',
      stem: 'Explain what this query returns: SELECT Name FROM Student WHERE Class = "5A" ORDER BY Name',
      marks: [
        { point: 'It lists student names (not every field).', keywords: ['name'] },
        { point: 'Only records with Class 5A are included.', keywords: ['5a', 'class', 'where'] },
        { point: 'The names are sorted.', keywords: ['order', 'sort'] }
      ],
      hint: 'Read SELECT, then WHERE, then ORDER BY.',
      explanation: 'SELECT chooses fields, WHERE filters rows, ORDER BY sorts. The query does not delete or update data.',
      nextAction: 'Change WHERE to Fine IS NULL and say which students appear.'
    }
  ],
  D6: [
    {
      type: 'mc',
      difficulty: 'standard',
      title: 'Which test reveals the fault',
      stem: 'A validation loop should reject mark=150 but it accepts 150 and still runs. Which test data is most useful, and why?',
      options: [
        { text: 'Erroneous 150, because it should be rejected and the actual result shows it is not.', correct: true, why: 'The revealing test is the case that should fail. Normal 72 can hide a broken validation condition.' },
        { text: 'Only mark=72, because typical data is enough.', correct: false, why: 'Normal data may pass even when the loop condition is wrong.' },
        { text: 'No test data is needed if the code looks neat.', correct: false, why: 'Debugging compares expected and actual output using planned tests.' },
        { text: 'A copyright sample file.', correct: false, why: 'Copyright is Core E, not program testing.' }
      ],
      hint: 'Choose data that should expose the invalid case.',
      explanation: 'Normal, boundary and erroneous data have different jobs. Use the case that should fail when testing validation.',
      nextAction: 'Name the error type if the program runs but accepts 150.'
    },
    {
      type: 'order',
      difficulty: 'standard',
      title: 'Debug order',
      stem: 'Put the debugging steps in a sensible order.',
      items: ['Observe the symptom', 'Choose suitable test data', 'Trace until expected and actual differ', 'Identify the error type', 'Correct the line and rerun'],
      hint: 'Do not edit first.',
      explanation: 'Guessing edits without a test and a trace hides the fault.',
      nextAction: 'State one difference between runtime and logic errors.'
    }
  ],
  E3: [
    {
      type: 'mc',
      difficulty: 'standard',
      title: 'CC BY-NC flyer',
      stem: 'A photo is licensed CC BY-NC. A tutor prints it on a paid course flyer and credits the author. Is this allowed?',
      options: [
        { text: 'No. NC forbids commercial use; credit does not cancel NC.', correct: true, why: 'BY is satisfied by attribution, but NC still blocks a paid flyer.' },
        { text: 'Yes, because any Creative Commons photo is free for all uses.', correct: false, why: 'CC licences have conditions. CC does not mean no rules.' },
        { text: 'Yes, because attribution always replaces permission.', correct: false, why: 'Attribution is not a substitute for a missing right, such as commercial use.' },
        { text: 'No, because school staff can never use CC photos.', correct: false, why: 'A non-commercial school presentation could be allowed; the paid flyer is the problem.' }
      ],
      hint: 'Inspect NC separately from BY.',
      explanation: 'Read each CC letter. BY = credit. NC = non-commercial.',
      nextAction: 'Contrast freeware with open-source rights.'
    },
    {
      type: 'mc',
      difficulty: 'stretch',
      title: 'Freeware vs open source',
      stem: 'A utility is freeware. Students may install it, but the licence forbids selling copies and does not provide source code. Which statement is correct?',
      options: [
        { text: 'Free to use is not the same as open source, and selling copies can still be forbidden.', correct: true, why: 'Freeware may be no-cost to run without source access. Open-source licences are a different bundle of rights.' },
        { text: 'Freeware always allows modifying and selling the program.', correct: false, why: 'Those rights belong to some open-source licences, not to freeware by default.' },
        { text: 'If software is free, copyright does not apply.', correct: false, why: 'Copyright still exists. The licence says what you may do.' },
        { text: 'Shareware and freeware are identical to MIT licences.', correct: false, why: 'Shareware is try-then-buy. MIT is an open-source licence with a notice condition.' }
      ],
      hint: 'Inspect the condition, not the word “free”.',
      explanation: 'Name the licence type and the action: use, modify, sell, or keep a notice.',
      nextAction: 'Decide whether downloading a YouTube file and re-uploading it as the school’s own video is allowed.'
    }
  ],
  EA5: [
    {
      type: 'mc',
      difficulty: 'standard',
      title: 'Resolve M:N',
      stem: 'Students join many clubs and each club has many students. How should the M:N relationship be implemented?',
      options: [
        { text: 'Add an associative table such as Membership with StudentID and ClubID.', correct: true, why: 'The bridge table stores one membership pair and creates two 1:M relationships.' },
        { text: 'Store all club names in one Student field separated by commas.', correct: false, why: 'Repeating groups break 1NF and make queries unreliable.' },
        { text: 'Give every student administrator rights.', correct: false, why: 'Access rights are a different EA5 idea (least privilege).' },
        { text: 'Use a nested programming loop instead of tables.', correct: false, why: 'This is database design, not Elective C programming.' }
      ],
      hint: 'Use a bridge / associative table.',
      explanation: 'Binary ER stays between two entity types. M:N becomes two 1:M links through a new table.',
      nextAction: 'Give one update-anomaly example from duplicated teacher office or supplier phone.'
    },
    {
      type: 'short',
      difficulty: 'stretch',
      title: 'Explain 3NF move',
      stem: 'Course rows store TeacherName and Office, and the same teacher appears with two different offices. Explain why Office should move to a Teacher table.',
      marks: [
        { point: 'Office depends on the teacher, not on the course.', keywords: ['teacher', 'depend', 'office'] },
        { point: 'Storing it on every course/enrolment row duplicates data and causes update anomalies.', keywords: ['anomal', 'duplic', 'inconsist', 'update'] }
      ],
      hint: 'Transitive dependency: course → teacher → office.',
      explanation: '3NF removes non-key attributes that depend on another non-key attribute. Store Office once with TeacherID.',
      nextAction: 'State what 2NF removes (partial dependence on part of a composite key).'
    }
  ],
  // Core D: programming and algorithmic thinking.
  D1: [
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "IPO process",
    "stem": "A program reads three marks and shows the average. What is the processing?",
    "options": [
      {
        "text": "Calculate the average of the three marks.",
        "correct": true,
        "why": "Processing transforms inputs into outputs."
      },
      {
        "text": "The three marks",
        "correct": false,
        "why": "Those are inputs."
      },
      {
        "text": "The displayed average",
        "correct": false,
        "why": "That is output."
      },
      {
        "text": "The unused student nickname",
        "correct": false,
        "why": "Irrelevant details are not IPO elements."
      }
    ],
    "hint": "Processing is the verb.",
    "explanation": "Processing transforms inputs into outputs.",
    "nextAction": "Name input and output for the same task."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Ignore noise",
    "stem": "Why should unused story details be omitted from IPO analysis?",
    "options": [
      {
        "text": "Abstraction keeps only the data and rules needed for the solution.",
        "correct": true,
        "why": "Abstraction removes irrelevant story details without losing solution rules."
      },
      {
        "text": "Every noun must be listed as input",
        "correct": false,
        "why": "Not every noun is used by the algorithm."
      },
      {
        "text": "Output includes the school logo by default",
        "correct": false,
        "why": "Logo design is usually irrelevant."
      },
      {
        "text": "Processing means saving a file only",
        "correct": false,
        "why": "Saving is storage/output depending on context, not the only process."
      }
    ],
    "hint": "Keep needed details only.",
    "explanation": "Abstraction removes irrelevant story details without losing solution rules.",
    "nextAction": "Try a late-return fine IPO table."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Decomposition",
    "stem": "Why decompose a programming problem before coding?",
    "options": [
      {
        "text": "Smaller parts are easier to design, test and explain.",
        "correct": true,
        "why": "Decomposition breaks a complex problem into manageable parts."
      },
      {
        "text": "It removes all inputs",
        "correct": false,
        "why": "Inputs remain if the algorithm needs them."
      },
      {
        "text": "It guarantees zero errors",
        "correct": false,
        "why": "Testing is still required."
      },
      {
        "text": "It forces advanced modular libraries immediately",
        "correct": false,
        "why": "Conceptual decomposition can stay at analysis level."
      }
    ],
    "hint": "Think smaller tasks.",
    "explanation": "Decomposition breaks a complex problem into manageable parts.",
    "nextAction": "List input, validate, calculate, output for a mark average."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Output vs process",
    "stem": "Which statement is output rather than processing?",
    "options": [
      {
        "text": "Display the calculated fine on screen.",
        "correct": true,
        "why": "Output is the result shown; processing is the transformation."
      },
      {
        "text": "Multiply days overdue by $2",
        "correct": false,
        "why": "That is processing."
      },
      {
        "text": "Read days overdue",
        "correct": false,
        "why": "That is input."
      },
      {
        "text": "Ignore the book colour",
        "correct": false,
        "why": "That is abstraction of noise."
      }
    ],
    "hint": "Output is presented information.",
    "explanation": "Output is the result shown; processing is the transformation.",
    "nextAction": "Write one IPO table for a library fine."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Input choice",
    "stem": "A program needs three valid marks. Which is the best input description?",
    "options": [
      {
        "text": "Three marks from 0 to 100",
        "correct": true,
        "why": "Input is data supplied to the process."
      },
      {
        "text": "The classroom wall colour",
        "correct": false,
        "why": "Irrelevant."
      },
      {
        "text": "The programmer favourite drink",
        "correct": false,
        "why": "Irrelevant."
      },
      {
        "text": "Every word in the story",
        "correct": false,
        "why": "Too many unused details."
      }
    ],
    "hint": "Choose data the algorithm uses.",
    "explanation": "Input is data supplied to the process.",
    "nextAction": "Add a validation task in decomposition."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "UI for marks",
    "stem": "Which UI best supports marks 0–100?",
    "options": [
      {
        "text": "Number fields with a range check",
        "correct": true,
        "why": "Constrained controls reduce invalid input before calculation."
      },
      {
        "text": "One free essay box for everything",
        "correct": false,
        "why": "Too unconstrained."
      },
      {
        "text": "Colour picker",
        "correct": false,
        "why": "Wrong data type."
      },
      {
        "text": "Wallpaper selector",
        "correct": false,
        "why": "Irrelevant."
      }
    ],
    "hint": "Reduce typing errors.",
    "explanation": "Constrained controls reduce invalid input before calculation.",
    "nextAction": "Explain one remaining limitation of range checks."
  },
  {
    "type": "mc",
    "difficulty": "stretch",
    "title": "Transfer IPO",
    "stem": "A canteen system reads an Octopus tap, subtracts $12 and shows the balance. Which is processing?",
    "options": [
      {
        "text": "Subtract $12 from the previous balance",
        "correct": true,
        "why": "Processing changes input data into output information."
      },
      {
        "text": "The Octopus tap alone",
        "correct": false,
        "why": "That is input."
      },
      {
        "text": "The balance message alone",
        "correct": false,
        "why": "That is output."
      },
      {
        "text": "The plastic card colour",
        "correct": false,
        "why": "Irrelevant."
      }
    ],
    "hint": "Name the transformation.",
    "explanation": "Processing changes input data into output information.",
    "nextAction": "Add where the transaction log is stored."
  },
  {
    "type": "mc",
    "difficulty": "stretch",
    "title": "Abstraction limit",
    "stem": "What must abstraction still keep?",
    "options": [
      {
        "text": "The rules and constraints needed for a correct solution",
        "correct": true,
        "why": "Abstraction removes irrelevant details without losing required rules."
      },
      {
        "text": "Only the school motto",
        "correct": false,
        "why": "Motto is usually noise."
      },
      {
        "text": "Every decorative noun",
        "correct": false,
        "why": "That fights abstraction."
      },
      {
        "text": "Nothing about validation",
        "correct": false,
        "why": "Validation rules may be essential."
      }
    ],
    "hint": "Do not delete important conditions.",
    "explanation": "Abstraction removes irrelevant details without losing required rules.",
    "nextAction": "Give one constraint you must keep for mark entry."
  },
  {
    "type": "mc",
    "difficulty": "stretch",
    "title": "Full decompose",
    "stem": "Which task list best fits “average of three marks”?",
    "options": [
      {
        "text": "Read marks → validate 0–100 → calculate average → display result",
        "correct": true,
        "why": "Decomposition should cover input, validation, calculation and output."
      },
      {
        "text": "Design the school crest first",
        "correct": false,
        "why": "Irrelevant."
      },
      {
        "text": "Only display a random number",
        "correct": false,
        "why": "Skips real processing."
      },
      {
        "text": "Delete the marks table",
        "correct": false,
        "why": "Not the task."
      }
    ],
    "hint": "Keep essential stages.",
    "explanation": "Decomposition should cover input, validation, calculation and output.",
    "nextAction": "Say which stage catches mark=150."
  }
],
  D2: [
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Sequence idea",
    "stem": "What does sequence mean in an algorithm?",
    "options": [
      {
        "text": "Steps run in a fixed order from top to bottom",
        "correct": true,
        "why": "Sequence executes statements in order."
      },
      {
        "text": "Steps run in random order",
        "correct": false,
        "why": "Sequence is ordered."
      },
      {
        "text": "Only selection is allowed",
        "correct": false,
        "why": "Sequence is a basic construct."
      },
      {
        "text": "No variables may change",
        "correct": false,
        "why": "Assignments can update variables."
      }
    ],
    "hint": "Top to bottom.",
    "explanation": "Sequence executes statements in order.",
    "nextAction": "Trace one assignment chain."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Selection",
    "stem": "When is selection needed?",
    "options": [
      {
        "text": "When different actions depend on a condition",
        "correct": true,
        "why": "Selection chooses which path to follow."
      },
      {
        "text": "When every step must always run once in order only",
        "correct": false,
        "why": "That can be pure sequence."
      },
      {
        "text": "When a loop repeats forever with no condition",
        "correct": false,
        "why": "That is uncontrolled iteration."
      },
      {
        "text": "When storing a file name only",
        "correct": false,
        "why": "Storage is not selection."
      }
    ],
    "hint": "IF/ELSE chooses a branch.",
    "explanation": "Selection chooses which path to follow.",
    "nextAction": "Write an IF for pass/fail."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Trace assignment",
    "stem": "x ← 3, y ← 4, x ← x + y. What is x?",
    "options": [
      {
        "text": "7",
        "correct": true,
        "why": "Assignment updates the variable with the new expression value."
      },
      {
        "text": "3",
        "correct": false,
        "why": "x was updated."
      },
      {
        "text": "4",
        "correct": false,
        "why": "y was added to x."
      },
      {
        "text": "12",
        "correct": false,
        "why": "Do not multiply here."
      }
    ],
    "hint": "Replace the old value.",
    "explanation": "Assignment updates the variable with the new expression value.",
    "nextAction": "Trace one more update."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Boolean condition",
    "stem": "mark >= 50 is used to decide Pass. What type of construct is this?",
    "options": [
      {
        "text": "Selection",
        "correct": true,
        "why": "A condition controlling actions is selection."
      },
      {
        "text": "Sequence only with no condition",
        "correct": false,
        "why": "A condition is present."
      },
      {
        "text": "A nested loop required by default",
        "correct": false,
        "why": "Not required."
      },
      {
        "text": "A DROP TABLE command",
        "correct": false,
        "why": "SQL is unrelated."
      }
    ],
    "hint": "Condition → branch.",
    "explanation": "A condition controlling actions is selection.",
    "nextAction": "Add an ELSE fail branch."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Algorithm before code",
    "stem": "Why plan with pseudocode before Python?",
    "options": [
      {
        "text": "To clarify logic before syntax details get in the way",
        "correct": true,
        "why": "Pseudocode focuses on the algorithm structure."
      },
      {
        "text": "To avoid all testing forever",
        "correct": false,
        "why": "Testing is still needed."
      },
      {
        "text": "To replace IPO analysis completely",
        "correct": false,
        "why": "IPO still helps."
      },
      {
        "text": "To make invalid SQL become valid",
        "correct": false,
        "why": "Different strand."
      }
    ],
    "hint": "Logic first.",
    "explanation": "Pseudocode focuses on the algorithm structure.",
    "nextAction": "Write three pseudocode lines for average."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Variable meaning",
    "stem": "In total ← total + mark, what is total acting as?",
    "options": [
      {
        "text": "An accumulator",
        "correct": true,
        "why": "An accumulator stores a running result."
      },
      {
        "text": "A forever constant that cannot change",
        "correct": false,
        "why": "It changes."
      },
      {
        "text": "A printer driver",
        "correct": false,
        "why": "Unrelated."
      },
      {
        "text": "A primary key",
        "correct": false,
        "why": "Database idea."
      }
    ],
    "hint": "Running total.",
    "explanation": "An accumulator stores a running result.",
    "nextAction": "Initialise total to 0 and explain why."
  },
  {
    "type": "mc",
    "difficulty": "stretch",
    "title": "Nested selection",
    "stem": "Grade A if mark>=80 else if mark>=60 grade B else C. mark=75. Result?",
    "options": [
      {
        "text": "B",
        "correct": true,
        "why": "Later branches are skipped once an earlier condition is true."
      },
      {
        "text": "A",
        "correct": false,
        "why": "75 < 80."
      },
      {
        "text": "C",
        "correct": false,
        "why": "75 >= 60 so B branch."
      },
      {
        "text": "Error because ELSE IF is illegal",
        "correct": false,
        "why": "ELSE IF is valid logic."
      }
    ],
    "hint": "Top condition first.",
    "explanation": "Later branches are skipped once an earlier condition is true.",
    "nextAction": "Change mark to 80 and re-trace."
  },
  {
    "type": "mc",
    "difficulty": "stretch",
    "title": "Off-by-logic",
    "stem": "A pass rule should accept mark>=50 but the code uses mark>50. What is wrong for mark=50?",
    "options": [
      {
        "text": "Boundary mark 50 is wrongly treated as fail",
        "correct": true,
        "why": "Logic errors can run but give wrong results at boundaries."
      },
      {
        "text": "Syntax will always crash",
        "correct": false,
        "why": "It can run with wrong logic."
      },
      {
        "text": "50 becomes 500 automatically",
        "correct": false,
        "why": "No."
      },
      {
        "text": "Selection becomes sequence",
        "correct": false,
        "why": "Still selection, but wrong threshold."
      }
    ],
    "hint": "Check the boundary.",
    "explanation": "Logic errors can run but give wrong results at boundaries.",
    "nextAction": "Suggest a test case set: 49,50,51."
  },
  {
    "type": "mc",
    "difficulty": "stretch",
    "title": "Explain sequence+selection",
    "stem": "A ticket machine reads age, then shows child or adult price. Which pair is correct?",
    "options": [
      {
        "text": "Input age; selection chooses the price message",
        "correct": true,
        "why": "Input feeds a condition that selects output."
      },
      {
        "text": "No input is needed",
        "correct": false,
        "why": "Age is required."
      },
      {
        "text": "DROP TABLE chooses the price",
        "correct": false,
        "why": "SQL unrelated."
      },
      {
        "text": "A worm virus calculates price",
        "correct": false,
        "why": "Security unrelated."
      }
    ],
    "hint": "IPO + selection.",
    "explanation": "Input feeds a condition that selects output.",
    "nextAction": "Add one validation for negative age."
  }
],
  D3: [
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Loop purpose",
    "stem": "Why use iteration?",
    "options": [
      {
        "text": "To repeat steps while a condition holds or across items",
        "correct": true,
        "why": "Iteration repeats actions under control of a condition or count."
      },
      {
        "text": "To run each step once only forever without repetition",
        "correct": false,
        "why": "That is sequence."
      },
      {
        "text": "To delete SQL tables",
        "correct": false,
        "why": "Unrelated."
      },
      {
        "text": "To avoid all variables",
        "correct": false,
        "why": "Loops often use variables."
      }
    ],
    "hint": "Repetition.",
    "explanation": "Iteration repeats actions under control of a condition or count.",
    "nextAction": "Give one school example needing a loop."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "While validation",
    "stem": "A loop repeats INPUT mark until mark is 0–100. What is this?",
    "options": [
      {
        "text": "Validation using iteration",
        "correct": true,
        "why": "Loops can reject invalid input and ask again."
      },
      {
        "text": "A compile-only syntax banner",
        "correct": false,
        "why": "It is runtime logic."
      },
      {
        "text": "A DROP statement",
        "correct": false,
        "why": "Unrelated."
      },
      {
        "text": "A primary key",
        "correct": false,
        "why": "Database."
      }
    ],
    "hint": "Repeat until valid.",
    "explanation": "Loops can reject invalid input and ask again.",
    "nextAction": "Write the UNTIL condition for 0–100."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Array index",
    "stem": "In a 1-based array of 5 marks, the last index is?",
    "options": [
      {
        "text": "5",
        "correct": true,
        "why": "Know whether the syllabus example is 1-based or 0-based before tracing."
      },
      {
        "text": "0 always",
        "correct": false,
        "why": "Depends on indexing convention used in the paper."
      },
      {
        "text": "6",
        "correct": false,
        "why": "Too far."
      },
      {
        "text": "50",
        "correct": false,
        "why": "Unrelated."
      }
    ],
    "hint": "Count carefully.",
    "explanation": "Know whether the syllabus example is 1-based or 0-based before tracing.",
    "nextAction": "Trace sum of A[1]..A[5]."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Accumulator loop",
    "stem": "sum ← 0; for each mark add to sum. What is sum after processing?",
    "options": [
      {
        "text": "The total of all marks processed",
        "correct": true,
        "why": "An accumulator gathers a total across iterations."
      },
      {
        "text": "Always 0",
        "correct": false,
        "why": "It accumulates."
      },
      {
        "text": "Only the last mark",
        "correct": false,
        "why": "Unless only one was added wrongly."
      },
      {
        "text": "The average automatically",
        "correct": false,
        "why": "Average needs division."
      }
    ],
    "hint": "Running total.",
    "explanation": "An accumulator gathers a total across iterations.",
    "nextAction": "Show how average uses sum and count."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Loop condition",
    "stem": "Which condition continues reading while input is invalid?",
    "options": [
      {
        "text": "WHILE mark < 0 OR mark > 100",
        "correct": true,
        "why": "Use OR to catch values that are too small or too large."
      },
      {
        "text": "WHILE mark < 0 AND mark > 100",
        "correct": false,
        "why": "Impossible combination for a normal mark."
      },
      {
        "text": "WHILE false only on day one",
        "correct": false,
        "why": "Not useful."
      },
      {
        "text": "WHILE DROP TABLE",
        "correct": false,
        "why": "Invalid."
      }
    ],
    "hint": "Invalid means outside range.",
    "explanation": "Use OR to catch values that are too small or too large.",
    "nextAction": "Rewrite with UNTIL mark is valid."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Trace count",
    "stem": "count ← 0; loop 3 times count ← count + 1. Final count?",
    "options": [
      {
        "text": "3",
        "correct": true,
        "why": "A counter increases once per processed item."
      },
      {
        "text": "0",
        "correct": false,
        "why": "It increments."
      },
      {
        "text": "1",
        "correct": false,
        "why": "More than once."
      },
      {
        "text": "2",
        "correct": false,
        "why": "One short."
      }
    ],
    "hint": "Count the iterations.",
    "explanation": "A counter increases once per processed item.",
    "nextAction": "Change to count fails under 50."
  },
  {
    "type": "mc",
    "difficulty": "stretch",
    "title": "Off-by-one",
    "stem": "A loop should process indexes 1..n but uses 1..n-1. What is the risk?",
    "options": [
      {
        "text": "The last item is skipped",
        "correct": true,
        "why": "Off-by-one errors miss or reprocess boundary items."
      },
      {
        "text": "SQL injection",
        "correct": false,
        "why": "Unrelated."
      },
      {
        "text": "The first item is duplicated always",
        "correct": false,
        "why": "Different bug."
      },
      {
        "text": "The program cannot start",
        "correct": false,
        "why": "It can run with incomplete processing."
      }
    ],
    "hint": "Check start and end.",
    "explanation": "Off-by-one errors miss or reprocess boundary items.",
    "nextAction": "Design test data where the last item is distinctive."
  },
  {
    "type": "mc",
    "difficulty": "stretch",
    "title": "Nested loop count",
    "stem": "Outer i=1..2, inner j=1..3. How many pair visits?",
    "options": [
      {
        "text": "6",
        "correct": true,
        "why": "Nested loops multiply the number of inner executions."
      },
      {
        "text": "2",
        "correct": false,
        "why": "Inner runs fully each outer."
      },
      {
        "text": "3",
        "correct": false,
        "why": "Outer runs twice."
      },
      {
        "text": "5",
        "correct": false,
        "why": "Count all pairs."
      }
    ],
    "hint": "Multiply iterations.",
    "explanation": "Nested loops multiply the number of inner executions.",
    "nextAction": "List the (i,j) pairs."
  },
  {
    "type": "mc",
    "difficulty": "stretch",
    "title": "Average algorithm",
    "stem": "Which algorithm correctly averages n marks in an array?",
    "options": [
      {
        "text": "Initialise sum=0; add each mark; average = sum / n",
        "correct": true,
        "why": "Use an accumulator then divide by count."
      },
      {
        "text": "Average = first mark only",
        "correct": false,
        "why": "Ignores the rest."
      },
      {
        "text": "Average = n / sum always",
        "correct": false,
        "why": "Inverted."
      },
      {
        "text": "Delete the array then guess",
        "correct": false,
        "why": "Not an algorithm."
      }
    ],
    "hint": "Sum then divide.",
    "explanation": "Use an accumulator then divide by count.",
    "nextAction": "Explain why n=0 is a runtime risk."
  }
],
  D4: [
    {
      type: 'mc', difficulty: 'standard', title: 'Convert before adding',
      stem: 'A user types 7. Which statement reads that input and prints the number 12?',
      options: [
        { text: 'print(int(input()) + 5)', correct: true, why: 'input() returns text; int() converts it before arithmetic.' },
        { text: 'print(input() + 5)', correct: false, why: 'A string and an integer cannot be added in Python.' },
        { text: 'print(input() + "5")', correct: false, why: 'This joins two strings and prints 75, not 12.' },
        { text: 'print(int(input()) + "5")', correct: false, why: 'The converted integer still cannot be added to a string.' }
      ],
      hint: 'Check the type returned by input() before using +.',
      explanation: 'Convert numeric keyboard input with int() before adding it to an integer.',
      nextAction: 'Try inputs 0 and 12 in Code Studio and predict both outputs first.'
    },
    {
      type: 'mc', difficulty: 'standard', title: 'Trace reassignment',
      stem: 'After x = 3 followed by x = x + 2, what value does print(x) show?',
      options: [
        { text: '5', correct: true, why: 'The second assignment replaces 3 with 3 + 2.' },
        { text: '3', correct: false, why: 'That was the value before the second assignment.' },
        { text: '2', correct: false, why: '2 is added to the old value; it does not replace it alone.' },
        { text: 'A syntax error', correct: false, why: 'Assignment can use the variable’s previous value on the right.' }
      ],
      hint: 'Read the right-hand side using the old x, then store the result.',
      explanation: 'Assignment updates the variable: x becomes 3 + 2 = 5.',
      nextAction: 'Trace x after one more statement: x = x * 2.'
    },
    {
      type: 'mc', difficulty: 'standard', title: 'Pass boundary in Python',
      stem: 'For mark = 50, which condition correctly selects the Pass branch when 50 is the minimum passing mark?',
      options: [
        { text: 'mark >= 50', correct: true, why: 'The boundary value 50 must be included.' },
        { text: 'mark > 50', correct: false, why: 'This incorrectly rejects 50.' },
        { text: 'mark < 50', correct: false, why: 'This selects marks below the pass boundary.' },
        { text: 'mark = 50', correct: false, why: 'A single = assigns a value; it is not the equality comparison.' }
      ],
      hint: 'Test the exact boundary, not only an ordinary passing value.',
      explanation: 'Use >= so both 50 and higher marks pass; > would miss the boundary.',
      nextAction: 'Test 49, 50 and 51, then explain why each branch is selected.'
    },
    {
      type: 'mc', difficulty: 'standard', title: 'Range endpoint',
      stem: 'Which sequence of values does for i in range(3) visit?',
      options: [
        { text: '0, 1, 2', correct: true, why: 'range(3) starts at 0 and excludes the endpoint 3.' },
        { text: '1, 2, 3', correct: false, why: 'The default start is 0, not 1.' },
        { text: '0, 1, 2, 3', correct: false, why: 'The endpoint is not included.' },
        { text: '3 only', correct: false, why: '3 sets the stopping point; it is not the only value.' }
      ],
      hint: 'The stop value of range() is excluded.',
      explanation: 'range(3) generates three values: 0, 1 and 2.',
      nextAction: 'Predict the values in range(1, 4) before running it.'
    },
    {
      type: 'mc', difficulty: 'stretch', title: 'Invalid numeric conversion',
      stem: 'A program executes mark = int(input()) and the user enters abc. What happens?',
      options: [
        { text: 'A ValueError occurs at runtime', correct: true, why: 'abc cannot be parsed as an integer.' },
        { text: 'mark becomes 0 automatically', correct: false, why: 'int() does not substitute 0 for invalid text.' },
        { text: 'mark becomes the string abc', correct: false, why: 'Conversion is attempted, so assignment does not complete.' },
        { text: 'The Python source has a syntax error', correct: false, why: 'The code is syntactically valid; the input value causes the runtime error.' }
      ],
      hint: 'Distinguish valid code from invalid data supplied while it runs.',
      explanation: 'int() raises ValueError when the supplied text is not a valid integer.',
      nextAction: 'Give one input that succeeds and one that triggers this runtime error.'
    },
    {
      type: 'fill', difficulty: 'standard', title: 'List index output',
      stem: 'What number is printed by marks = [42, 50, 68] followed by print(marks[1])?',
      accept: ['50'],
      hint: 'Python list positions start at index 0.',
      explanation: 'marks[0] is 42, so marks[1] is 50.',
      nextAction: 'State the index of 68, then test whether marks[3] exists.'
    },
    {
      type: 'order', difficulty: 'standard', title: 'Input to decision',
      stem: 'Put the actions of a simple Python pass-check program in execution order.',
      items: ['Read mark with input()', 'Convert the text with int()', 'Compare the number with 50', 'Print Pass or Retry'],
      hint: 'A numeric comparison needs a number, not raw keyboard text.',
      explanation: 'Read text, convert it, compare the numeric value, then display the selected result.',
      nextAction: 'Write a four-line Python version and test marks 49 and 50.'
    },
    {
      type: 'short', difficulty: 'stretch', title: 'Boundary test evidence',
      stem: 'A pass-check program seems correct for mark 80. Name two more test values and explain what each checks when the pass mark is 50.',
      marks: [
        { point: '49 checks that a value immediately below the boundary is rejected.', keywords: ['49', 'below', 'reject'] },
        { point: '50 checks that the boundary itself is accepted.', keywords: ['50', 'boundary', 'accept'] }
      ],
      hint: 'Choose values on both sides of the pass boundary.',
      explanation: 'Testing 49 and 50 exposes a mistaken > 50 condition that an ordinary mark of 80 would not reveal.',
      nextAction: 'Run 49 and 50 in Code Studio, then compare the actual results with your prediction.'
    }
  ],
  // Core A SQL bridge and Elective A SQL practice.
  'A6.4': [
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "SELECT meaning",
    "stem": "SELECT Name FROM Student WHERE Class=\"5A\" does what?",
    "options": [
      {
        "text": "Shows names of students in class 5A",
        "correct": true,
        "why": "SELECT chooses fields; WHERE filters rows."
      },
      {
        "text": "Deletes non-5A students",
        "correct": false,
        "why": "SELECT does not delete."
      },
      {
        "text": "Changes all classes to 5A",
        "correct": false,
        "why": "No UPDATE here."
      },
      {
        "text": "Shows every field of every student",
        "correct": false,
        "why": "Only Name, filtered rows."
      }
    ],
    "hint": "Read SELECT then WHERE.",
    "explanation": "SELECT chooses fields; WHERE filters rows.",
    "nextAction": "Identify the FROM table next."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "FROM clause",
    "stem": "Which clause names the table?",
    "options": [
      {
        "text": "FROM",
        "correct": true,
        "why": "FROM names the source table."
      },
      {
        "text": "WHERE",
        "correct": false,
        "why": "Filters rows."
      },
      {
        "text": "ORDER BY",
        "correct": false,
        "why": "Sorts the result."
      },
      {
        "text": "PRIMARY KEY",
        "correct": false,
        "why": "Identifies records."
      }
    ],
    "hint": "The table comes FROM somewhere.",
    "explanation": "FROM names the source table.",
    "nextAction": "Write a full SELECT with FROM and WHERE."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Valid but wrong",
    "stem": "Clerk wants fails (mark<50) but writes mark>=50. Why wrong?",
    "options": [
      {
        "text": "The WHERE asks the opposite question",
        "correct": true,
        "why": "Valid SQL can return the wrong set of students."
      },
      {
        "text": "SQL cannot select names",
        "correct": false,
        "why": "It can."
      },
      {
        "text": "FROM is missing",
        "correct": false,
        "why": "Assume it is present."
      },
      {
        "text": "It must crash",
        "correct": false,
        "why": "It can run and still be wrong."
      }
    ],
    "hint": "Syntax ≠ intended question.",
    "explanation": "Valid SQL can return the wrong set of students.",
    "nextAction": "Rewrite the WHERE for fails."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "ORDER BY",
    "stem": "ORDER BY Mark DESC mainly does what?",
    "options": [
      {
        "text": "Sorts the result rows by Mark from high to low",
        "correct": true,
        "why": "ORDER BY sorts the result after filtering."
      },
      {
        "text": "Deletes low marks",
        "correct": false,
        "why": "No."
      },
      {
        "text": "Changes how the base table is physically stored forever",
        "correct": false,
        "why": "Result ordering ≠ storage redesign."
      },
      {
        "text": "Creates a primary key",
        "correct": false,
        "why": "Unrelated."
      }
    ],
    "hint": "Sort the result.",
    "explanation": "ORDER BY sorts the result after filtering.",
    "nextAction": "Explain ASC vs DESC with one example."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "WHERE role",
    "stem": "WHERE Mark < 50 chooses what?",
    "options": [
      {
        "text": "Which rows are included",
        "correct": true,
        "why": "WHERE filters rows that match a condition."
      },
      {
        "text": "Which columns are created in a new DBMS product",
        "correct": false,
        "why": "No."
      },
      {
        "text": "The Python loop variable only",
        "correct": false,
        "why": "SQL filtering."
      },
      {
        "text": "The school Wi-Fi password",
        "correct": false,
        "why": "Unrelated."
      }
    ],
    "hint": "Filter rows.",
    "explanation": "WHERE filters rows that match a condition.",
    "nextAction": "Predict the result set size on sample data."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Result set",
    "stem": "A query result is best described as?",
    "options": [
      {
        "text": "A table of matching rows and chosen columns",
        "correct": true,
        "why": "The result set is the matching table produced by the query."
      },
      {
        "text": "Always an error message",
        "correct": false,
        "why": "Only when invalid."
      },
      {
        "text": "A deleted backup",
        "correct": false,
        "why": "No."
      },
      {
        "text": "A firewall rule",
        "correct": false,
        "why": "Unrelated."
      }
    ],
    "hint": "Rows+columns returned.",
    "explanation": "The result set is the matching table produced by the query.",
    "nextAction": "Explain why empty result can still be valid."
  },
  {
    "type": "mc",
    "difficulty": "stretch",
    "title": "Stretch read",
    "stem": "SELECT Class, COUNT(*) FROM Student GROUP BY Class is mainly about?",
    "options": [
      {
        "text": "Counting students in each class group",
        "correct": true,
        "why": "GROUP BY groups records before aggregates are shown."
      },
      {
        "text": "Deleting classes",
        "correct": false,
        "why": "No."
      },
      {
        "text": "Encrypting marks",
        "correct": false,
        "why": "No."
      },
      {
        "text": "Opening a public Wi-Fi portal",
        "correct": false,
        "why": "No."
      }
    ],
    "hint": "GROUP BY groups then aggregate.",
    "explanation": "GROUP BY groups records before aggregates are shown.",
    "nextAction": "Say what changes if WHERE Class=\"5A\" is added."
  },
  {
    "type": "mc",
    "difficulty": "stretch",
    "title": "Stretch repair",
    "stem": "Query must list failing names. Which WHERE is correct?",
    "options": [
      {
        "text": "WHERE Mark < 50",
        "correct": true,
        "why": "Align the condition with the data question."
      },
      {
        "text": "WHERE Mark >= 50",
        "correct": false,
        "why": "Opposite."
      },
      {
        "text": "WHERE Name = Mark",
        "correct": false,
        "why": "Nonsense compare."
      },
      {
        "text": "WHERE DROP TABLE Student",
        "correct": false,
        "why": "Destructive/wrong."
      }
    ],
    "hint": "Fails are below 50.",
    "explanation": "Align the condition with the data question.",
    "nextAction": "Add ORDER BY Mark ASC."
  },
  {
    "type": "mc",
    "difficulty": "stretch",
    "title": "Stretch concept",
    "stem": "Why can a query be dangerous for decision-making even when it runs?",
    "options": [
      {
        "text": "It may answer a different question than intended",
        "correct": true,
        "why": "Business meaning depends on the condition, not only on parser acceptance."
      },
      {
        "text": "Running SQL always crashes the OS",
        "correct": false,
        "why": "Not true."
      },
      {
        "text": "SELECT always deletes backups",
        "correct": false,
        "why": "No."
      },
      {
        "text": "FROM cannot name a table",
        "correct": false,
        "why": "It can."
      }
    ],
    "hint": "Wrong filter, wrong story.",
    "explanation": "Business meaning depends on the condition, not only on parser acceptance.",
    "nextAction": "Give one classroom example of valid-but-wrong WHERE."
  }
],
  EA1: [
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Dangerous DELETE",
    "stem": "Risk of DELETE FROM Student with no WHERE?",
    "options": [
      {
        "text": "All records in Student may be deleted",
        "correct": true,
        "why": "Without WHERE, DELETE applies to every record."
      },
      {
        "text": "Only one random safe row is deleted",
        "correct": false,
        "why": "SQL will not choose one safe row."
      },
      {
        "text": "The table structure is always removed",
        "correct": false,
        "why": "That is DROP TABLE."
      },
      {
        "text": "It becomes a Python for-loop",
        "correct": false,
        "why": "Different language."
      }
    ],
    "hint": "WHERE limits rows.",
    "explanation": "Without WHERE, DELETE applies to every record.",
    "nextAction": "Rewrite a guarded DELETE for one StudentID."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "DROP vs DELETE",
    "stem": "DROP TABLE Student mainly removes?",
    "options": [
      {
        "text": "The table structure (and its data)",
        "correct": true,
        "why": "DROP removes the table; DELETE removes records."
      },
      {
        "text": "Only one field name in a report title",
        "correct": false,
        "why": "No."
      },
      {
        "text": "A single row always",
        "correct": false,
        "why": "That is DELETE with WHERE."
      },
      {
        "text": "The school firewall",
        "correct": false,
        "why": "Unrelated."
      }
    ],
    "hint": "Structure vs rows.",
    "explanation": "DROP removes the table; DELETE removes records.",
    "nextAction": "Give one sentence contrasting them."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "UPDATE safety",
    "stem": "UPDATE Student SET Class=\"5A\" without WHERE may?",
    "options": [
      {
        "text": "Change every student's class to 5A",
        "correct": true,
        "why": "UPDATE without WHERE can affect all rows."
      },
      {
        "text": "Change exactly one random student",
        "correct": false,
        "why": "Not guaranteed."
      },
      {
        "text": "Drop the database users",
        "correct": false,
        "why": "No."
      },
      {
        "text": "Create a new primary key automatically",
        "correct": false,
        "why": "No."
      }
    ],
    "hint": "Check WHERE.",
    "explanation": "UPDATE without WHERE can affect all rows.",
    "nextAction": "Add a WHERE on StudentID."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "CREATE role",
    "stem": "CREATE TABLE mainly belongs to which group?",
    "options": [
      {
        "text": "DDL defining structure",
        "correct": true,
        "why": "CREATE TABLE defines fields, types and constraints."
      },
      {
        "text": "DML only for deleting rows",
        "correct": false,
        "why": "CREATE is structural."
      },
      {
        "text": "A selection algorithm in Python",
        "correct": false,
        "why": "Different strand."
      },
      {
        "text": "A Wi-Fi encryption protocol",
        "correct": false,
        "why": "Unrelated."
      }
    ],
    "hint": "Define structure first.",
    "explanation": "CREATE TABLE defines fields, types and constraints.",
    "nextAction": "Write a simple CREATE with a TEXT primary key."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "Phone type",
    "stem": "Best type for a HK phone number with no arithmetic?",
    "options": [
      {
        "text": "Text",
        "correct": true,
        "why": "Identifiers that are not for arithmetic are often stored as text."
      },
      {
        "text": "Real",
        "correct": false,
        "why": "Not for identifiers."
      },
      {
        "text": "Currency",
        "correct": false,
        "why": "Money only."
      },
      {
        "text": "Boolean",
        "correct": false,
        "why": "True/false only."
      }
    ],
    "hint": "Will you calculate with it?",
    "explanation": "Identifiers that are not for arithmetic are often stored as text.",
    "nextAction": "Give one risk of storing phone as number."
  },
  {
    "type": "mc",
    "difficulty": "standard",
    "title": "PRIMARY KEY",
    "stem": "A primary key should be?",
    "options": [
      {
        "text": "Unique and not null for each record",
        "correct": true,
        "why": "PRIMARY KEY uniquely identifies each record."
      },
      {
        "text": "The student favourite colour always",
        "correct": false,
        "why": "Not unique/stable."
      },
      {
        "text": "Duplicated on purpose for speed",
        "correct": false,
        "why": "Breaks identity."
      },
      {
        "text": "Null for new rows forever",
        "correct": false,
        "why": "Primary key should not be null."
      }
    ],
    "hint": "Identity field.",
    "explanation": "PRIMARY KEY uniquely identifies each record.",
    "nextAction": "Explain why Name is a weak key."
  },
  {
    "type": "mc",
    "difficulty": "stretch",
    "title": "Stretch INSERT",
    "stem": "INSERT INTO Student (StudentID, Name) VALUES (\"S009\",\"Ada\") requires what first?",
    "options": [
      {
        "text": "A Student table structure that accepts those fields",
        "correct": true,
        "why": "INSERT adds records into an existing table structure."
      },
      {
        "text": "That SELECT has already deleted the table",
        "correct": false,
        "why": "Opposite."
      },
      {
        "text": "A public Wi-Fi password",
        "correct": false,
        "why": "Unrelated."
      },
      {
        "text": "A binary search on arrays",
        "correct": false,
        "why": "Different topic."
      }
    ],
    "hint": "Structure before rows.",
    "explanation": "INSERT adds records into an existing table structure.",
    "nextAction": "What happens if StudentID duplicates a primary key?"
  },
  {
    "type": "mc",
    "difficulty": "stretch",
    "title": "Stretch constraint",
    "stem": "NOT NULL on Name means?",
    "options": [
      {
        "text": "Every row must store a name value",
        "correct": true,
        "why": "NOT NULL rejects missing values for that field."
      },
      {
        "text": "Name must be the primary key",
        "correct": false,
        "why": "Not necessarily."
      },
      {
        "text": "Name is deleted nightly",
        "correct": false,
        "why": "No."
      },
      {
        "text": "Name must be numeric",
        "correct": false,
        "why": "No."
      }
    ],
    "hint": "Required value.",
    "explanation": "NOT NULL rejects missing values for that field.",
    "nextAction": "Contrast NOT NULL with PRIMARY KEY."
  },
  {
    "type": "mc",
    "difficulty": "stretch",
    "title": "Stretch incident",
    "stem": "A clerk runs UPDATE without WHERE then DROP TABLE. What is the worst structural outcome?",
    "options": [
      {
        "text": "The table structure itself can be removed by DROP after mass updating rows",
        "correct": true,
        "why": "UPDATE changes rows; DROP removes the table object."
      },
      {
        "text": "Only one printer job is cancelled",
        "correct": false,
        "why": "Unrelated."
      },
      {
        "text": "Python syntax becomes invalid",
        "correct": false,
        "why": "Different language."
      },
      {
        "text": "SELECT starts deleting rows by itself",
        "correct": false,
        "why": "SELECT does not delete."
      }
    ],
    "hint": "Separate DML vs DDL damage.",
    "explanation": "UPDATE changes rows; DROP removes the table object.",
    "nextAction": "State the recovery need: backups/transactions."
  },
  {
    type: 'mc', difficulty: 'standard', title: 'Foreign key integrity',
    stem: 'Enrolment.StudentID is a foreign key referencing Student.StudentID. What should happen if an enrolment is inserted with a StudentID absent from Student?',
    options: [
      { text: 'The database should reject the orphan enrolment', correct: true, why: 'Referential integrity requires the referenced student to exist.' },
      { text: 'The database should invent a new student automatically', correct: false, why: 'A foreign key does not create a missing parent record.' },
      { text: 'The foreign key should become the new primary key of Student', correct: false, why: 'The relationship does not change the parent table’s key.' },
      { text: 'Every existing enrolment should be deleted', correct: false, why: 'A failed insert should not erase unrelated rows.' }
    ],
    hint: 'An enrolment must point to an existing student.',
    explanation: 'A foreign key enforces a valid relationship to a row in the referenced table.',
    nextAction: 'Explain which table is the parent and which is the child.'
  },
  {
    type: 'short', difficulty: 'stretch', title: 'Safe update by key',
    stem: 'A clerk must change only student S003’s class to 5B. State two features of a safe UPDATE statement and explain their roles.',
    marks: [
      { point: 'SET Class = \'5B\' specifies the field and new value.', keywords: ['set', 'class', '5b'] },
      { point: 'WHERE StudentID = \'S003\' limits the change to the intended row identified by its key.', keywords: ['where', 'studentid', 's003'] }
    ],
    hint: 'One clause changes a value; another limits the affected records.',
    explanation: 'UPDATE Student SET Class = \'5B\' WHERE StudentID = \'S003\' changes only the intended record when StudentID is unique.',
    nextAction: 'Predict the effect of omitting WHERE before trying an UPDATE in SQL Studio.'
  }
],
};
