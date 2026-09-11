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
  ]
};
