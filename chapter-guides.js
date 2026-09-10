const chapterGuides = {
  "A1 Introduction to Information Processing": {
    caOutcomes: [
      "Identify and examine the components of an information system, including purposes, data, processes, technologies and personnel.",
      "Distinguish between information processes such as data collection, organisation, analysis, storage, processing, transmission and presentation.",
      "Realise the difference between data and information, and identify data types as text, number, image, audio and video.",
      "Define the Information Age and discuss the importance of information literacy in a knowledge-based society.",
    ],
    keywords: [
      { term: "Information system", meaning: "A system that uses hardware, software, data, people and procedures to produce useful output." },
      { term: "Data vs information", meaning: "Data is unorganised facts; information is data after processing and interpretation." },
      { term: "Information processes", meaning: "Collection, organisation, storage, processing, analysis, transmission and presentation." },
      { term: "Hardware vs software", meaning: "Hardware is physical devices; software is programs, including system and application software." },
      { term: "Information literacy", meaning: "Judge credibility, respect IP, protect privacy, and extract/organise information." },
      { term: "Multimedia data", meaning: "Text, images, audio and video stored and processed as data." },
    ],
    mistakes: [
      { wrong: "Data and information are the same thing.", correct: "Data is raw/unorganised facts; information is data after processing and putting into context." },
      { wrong: "Hardware includes programs such as Word or an operating system.", correct: "Programs are software. Hardware is the physical devices." },
      { wrong: "Information processing always happens in one fixed order.", correct: "The stages can vary with the system; name the relevant stages for the scenario." },
      { wrong: "If a webpage looks professional, the information must be reliable.", correct: "Information literacy requires checking source, evidence and credibility, not appearance alone." },
    ]
  },
  "A2 Data Organisation and Data Control": {
    caOutcomes: [
      "Identify data, records, fields, files and databases in the hierarchical organisation of data.",
      "Explain how records can be organised, stored and retrieved, and compare sequential and direct access.",
      "Discuss the need for data control.",
      "Describe how errors can be detected by validation and parity checking, and prevented by verification and validation.",
    ],
    keywords: [
      { term: "Validation", meaning: "Checks whether input is acceptable according to rules. It cannot prove the value is true." },
      { term: "Verification", meaning: "Checks whether data has been copied or entered accurately from a source." },
      { term: "Transcription vs transposition", meaning: "Transcription copies a character wrongly; transposition swaps the order of characters." },
      { term: "Check digit", meaning: "A digit calculated from the data to help detect input errors in codes." },
      { term: "Parity check", meaning: "Adds a parity bit to detect many single-bit transmission errors; it does not correct data." },
      { term: "Data hierarchy", meaning: "Field → record → file/table → database." },
      { term: "Sequential vs direct access", meaning: "Sequential reads records in order; direct access locates a record without reading all previous ones." },
    ],
    mistakes: [
      { wrong: "If data passes validation, it must be correct.", correct: "Validation only checks rules. Data can be valid but wrong, for example the wrong appointment date in the correct format." },
      { wrong: "Validation and verification are the same check.", correct: "Validation tests reasonableness/rules; verification tests accurate copying or entry from the source." },
      { wrong: "A check digit and a parity bit do the same job.", correct: "A check digit helps detect input errors in codes; a parity bit helps detect transmission errors in binary data." },
      { wrong: "A text box is always the best input control.", correct: "Constrained controls such as radio buttons, drop-down lists and date pickers often reduce typing errors." },
      { wrong: "Parity check can always find and correct the wrong bit.", correct: "Parity can detect many single-bit errors but cannot identify or correct the bit, and may miss even-numbered bit changes." },
    ]
  },
  "A3 Data Representation": {
    caOutcomes: [
      "Distinguish analog and digital data, and state situations needing analog–digital conversion.",
      "Explain why IT uses digital data and relate the number of bits to the number of patterns.",
      "Convert integers among denary, binary and hexadecimal; use two’s complement for negative integers.",
      "Perform binary addition/subtraction and analyse overflow errors.",
      "Know how characters are represented by ASCII, Big-5, GB and Unicode.",
      "Know briefly how multimedia elements are digitised, convert file formats and compare them for storing the same data.",
    ],
    keywords: [
      { term: "Bit / byte", meaning: "A bit is 0 or 1. 1 byte = 8 bits. Storage uses 1024 (1 KB = 1024 B)." },
      { term: "Transfer rate", meaning: "bps is bits per second. 1 kbps = 1000 bps (decimal prefixes)." },
      { term: "Two’s complement", meaning: "A method for representing signed integers. The two’s complement of X represents −X." },
      { term: "Overflow", meaning: "The result is outside the range that the available bits can represent." },
      { term: "ASCII / Big-5 / GB / Unicode", meaning: "ASCII mainly English; Big-5 Traditional Chinese; GB Simplified Chinese; Unicode many languages." },
      { term: "Analog vs digital", meaning: "Analog is continuous; digital uses discrete symbols." },
      { term: "Lossless vs lossy", meaning: "Lossless restores the original exactly; lossy removes less noticeable data." },
      { term: "Hexadecimal", meaning: "Base 16. One hex digit = 4 bits." },
    ],
    mistakes: [
      { wrong: "1 KB = 1000 bytes, just like 1 kbps = 1000 bps.", correct: "Storage usually uses 1024 (1 KB = 1024 B). Transfer rates use 1000 (1 kbps = 1000 bps)." },
      { wrong: "8-bit two’s complement values range from 0 to 255.", correct: "Unsigned 8-bit is 0 to 255. 8-bit two’s complement is −128 to 127." },
      { wrong: "One hexadecimal digit represents 8 bits.", correct: "One hex digit represents 4 bits." },
      { wrong: "More colour depth means more pixels.", correct: "Colour depth is bits per pixel and controls possible colours, not the number of pixels." },
      { wrong: "Lossy compression can always restore the original file exactly.", correct: "Only lossless compression restores the original exactly." },
      { wrong: "Overflow means the program crashed.", correct: "Overflow means the result is outside the representable range; the stored bits may wrap or be incorrect." },
    ]
  },
  "A4 Spreadsheet / Data Manipulation and Analysis": {
    caOutcomes: [
      "Describe and use basic spreadsheet features, including cell references, formulas, functions and operators, to solve problems.",
      "Demonstrate data manipulation techniques such as filtering, searching and sorting using single or multiple criteria.",
      "Apply spreadsheets as a data analysis tool using pivot tables/charts and what-if scenarios.",
    ],
    keywords: [
      { term: "Relative vs absolute reference", meaning: "A1 changes when copied; $A$1 stays fixed. Mixed references fix column or row only." },
      { term: "Formula", meaning: "Begins with = and should normally use cell references rather than typed constants." },
      { term: "COUNTIF vs SUMIF", meaning: "COUNTIF counts matching cells; SUMIF adds matching values." },
      { term: "Sort vs filter", meaning: "Sorting changes order; filtering hides non-matching records without deleting them." },
      { term: "Pivot table", meaning: "Groups and summarises large sets of records." },
      { term: "What-if / Goal Seek", meaning: "Tests how outputs change when inputs change, or finds an input needed for a target output." },
      { term: "Chart choice", meaning: "Column compares categories; line shows change over time; pie shows parts of one whole." },
    ],
    mistakes: [
      { wrong: "Copying a formula always keeps every reference the same.", correct: "Relative references change when copied. Use $ to keep a tax rate, lookup range or criterion fixed." },
      { wrong: "Changing decimal places changes the stored value.", correct: "Number format usually changes display, not the stored value." },
      { wrong: "Filtering deletes records that do not match.", correct: "Filtering hides non-matching records; they can be shown again." },
      { wrong: "A pie chart can be used for any comparison.", correct: "Use a pie chart only when values are parts of one meaningful whole." },
      { wrong: "Typing 1.1 into a formula is the same as referring to the tax-rate cell.", correct: "Use cell references so copied formulas and later changes stay correct." },
    ]
  },
  "A5 Simple Database": {
    caOutcomes: [
      "Apply data-organisation concepts to create and maintain a simple database using a DBMS tool.",
      "Create and use a form for data entry.",
      "Practise data extraction and manipulation by querying a single table and creating reports.",
      "Trace and interpret simple SQL statements for selection, filtering and sorting.",
    ],
    keywords: [
      { term: "Field / record / table", meaning: "A field is one category; a record is one item; a table stores related records." },
      { term: "Primary key", meaning: "Uniquely identifies each record and should not be blank or duplicated." },
      { term: "Data type", meaning: "Controls the kind of value stored, such as text, number, date/time or Yes/No." },
      { term: "Form / query / report", meaning: "Form for entry/viewing; query for selecting records; report for formatted output." },
      { term: "NULL", meaning: "A missing or unknown value; it is not the same as 0." },
      { term: "Simple SQL", meaning: "SELECT fields FROM table WHERE condition ORDER BY field." },
    ],
    mistakes: [
      { wrong: "A person’s name is a good primary key.", correct: "Names can be duplicated. Use a unique ID, or a composite key if needed." },
      { wrong: "NULL is the same as 0.", correct: "0 is a stored value. NULL means no value has been stored." },
      { wrong: "A query changes the stored data.", correct: "A query retrieves matching records; it does not normally change stored data." },
      { wrong: "Phone numbers should always use the Number data type because they look numeric.", correct: "IDs and phone numbers are often Text because arithmetic is not needed and leading zeros must be kept." },
      { wrong: "A report is used to enter new records.", correct: "A form is for entering/viewing; a report is for presentation." },
    ]
  },
  "B1 Input and Output Devices": {
    caOutcomes: [
      "Explain the functions of input and output devices within a computer system.",
      "Describe features, advantages, disadvantages and applications of input and output devices.",
      "Select and justify appropriate devices for collecting and displaying information in a given context.",
    ],
    keywords: [
      { term: "IPO cycle", meaning: "Input data is processed; meaningful information is output. Storage may be used during processing." },
      { term: "OCR / OMR / MICR", meaning: "OCR reads printed/handwritten text; OMR reads marked choices; MICR reads magnetic-ink characters such as cheques." },
      { term: "Sensor", meaning: "Measures physical data for monitoring or control; it does not by itself make the whole decision." },
      { term: "Touch screen", meaning: "Both input and output." },
      { term: "Printer vs monitor", meaning: "Both are output devices; choice depends on hard copy, quality, cost, speed and environment." },
      { term: "Device justification", meaning: "Justify by task, data type, accuracy, speed, cost, volume, environment and user needs." },
    ],
    mistakes: [
      { wrong: "A touch screen is only an output device.", correct: "It displays output and also accepts touch input." },
      { wrong: "OCR, OMR and MICR can be used interchangeably.", correct: "Each reads a different source: text, marked choices, or magnetic-ink characters." },
      { wrong: "The fastest device is always the best choice.", correct: "Accuracy, cost, environment and user needs may matter more than speed." },
      { wrong: "A sensor decides the whole control action.", correct: "A sensor provides input; the program/system decides and an actuator/output device acts." },
      { wrong: "A printer can be used to input Chinese characters.", correct: "A printer is an output device." },
    ]
  },
  "B2 Computer Hardware": {
    caOutcomes: [
      "Explain the functions of processing units, buses and storage devices in a computer system.",
      "Explain the structure and functions of a CPU and its components, including how CPU speed is measured.",
      "Outline the fetch–decode–execute cycle and the roles of registers and buses.",
      "Describe RAM, ROM and cache, and relate memory size, address, word length and performance.",
      "Describe storage devices in terms of random/sequential access, volatility, transfer rate and capacity.",
      "Outline latest developments in processors, memory, storage and data communications without requiring technical trivia.",
    ],
    keywords: [
      { term: "CPU", meaning: "Processes data and instructions; includes ALU, CU and registers." },
      { term: "Fetch–decode–execute", meaning: "The machine cycle for carrying out instructions." },
      { term: "Clock rate / word length", meaning: "Clock rate is cycles per second; word length is bits processed at one time." },
      { term: "RAM vs ROM vs storage", meaning: "RAM is volatile working memory; ROM is non-volatile firmware; secondary storage is persistent." },
      { term: "Cache / registers", meaning: "Very fast, small, expensive memory close to the CPU." },
      { term: "HDD vs SSD vs tape", meaning: "SSD is usually faster for access; tape is typically sequential and used for backup/archive." },
      { term: "Bottleneck", meaning: "The component that limits overall system performance." },
    ],
    mistakes: [
      { wrong: "A higher clock speed always means a better computer.", correct: "Task, cores, RAM, storage and bottlenecks also matter. Compare against the user’s needs." },
      { wrong: "RAM and hard disk are the same kind of memory.", correct: "RAM is volatile working memory; secondary storage keeps data persistently." },
      { wrong: "More storage capacity makes processing faster.", correct: "Capacity is not the same as processing speed. A bottleneck may be CPU, RAM or disk access." },
      { wrong: "Fetch–decode–execute is how files are copied.", correct: "It is the CPU instruction cycle, not a file-copy process." },
      { wrong: "A 64-bit processor is twice as efficient as a 32-bit processor.", correct: "Word length is not a simple 2× efficiency claim." },
    ]
  },
  "B3 Computer Software": {
    caOutcomes: [
      "Know the functions of system software and applications software, and the relationship among hardware, system software, applications software and users.",
      "Outline the basic functions of an operating system and compare common operating systems at a simple level.",
      "State the functions and needs of utility programs and driver programs.",
      "Distinguish characteristics and applications of modes of operation such as batch, real-time, parallel, distributed processing and virtualisation.",
    ],
    keywords: [
      { term: "System vs application software", meaning: "System software supports the computer; application software helps users complete tasks." },
      { term: "OS functions", meaning: "Resource, file, memory, process and device management, plus a user interface." },
      { term: "Driver", meaning: "Software that lets the OS control a device correctly." },
      { term: "Utility", meaning: "Maintenance/protection tools such as virus checker, backup, compressor or defragmenter." },
      { term: "GUI vs CLI", meaning: "GUI uses visual controls; CLI uses typed commands." },
      { term: "Batch vs real-time", meaning: "Batch handles groups of jobs without immediate interaction; real-time must respond within a required time." },
      { term: "Licence types", meaning: "Proprietary, freeware, shareware and open source have different rights and restrictions." },
    ],
    mistakes: [
      { wrong: "A utility program is the operating system.", correct: "A utility performs a maintenance or protection task; the OS manages the whole system." },
      { wrong: "A driver is a cable or hardware adapter.", correct: "A driver is software." },
      { wrong: "Freeware is the same as open source.", correct: "Freeware is free to use but the source code may not be available or modifiable." },
      { wrong: "Real-time processing just means the computer is fast.", correct: "Real-time means the response must occur within a required time limit." },
      { wrong: "Virus checking is a main function of the operating system.", correct: "Virus checking is done by utility/security software." },
    ]
  },
  "C1 Networking and Internet Basics": {
    caOutcomes: [
      "Define and compare LAN and WAN.",
      "Discuss common services in a networked environment, such as internal communications and resource sharing.",
      "Explain the functions of network hardware, including communication links, NIC, modem, switch and router.",
      "Compare common Internet-access methods in terms of speed, cost, security and availability.",
      "Understand simple concepts of communications software, protocols and wireless ideas such as frequency, bandwidth, interference and roaming.",
    ],
    keywords: [
      { term: "LAN vs WAN", meaning: "LAN covers a limited area, often one organisation; WAN links networks over a larger area." },
      { term: "Client–server vs P2P", meaning: "Client–server centralises services; peers share resources directly in P2P." },
      { term: "Switch vs router", meaning: "A switch forwards within a local network; a router forwards between networks." },
      { term: "NIC / MAC", meaning: "A network interface card has a MAC address identifying the network interface." },
      { term: "Packet switching", meaning: "Data is sent in packets that may take different routes and are reassembled." },
      { term: "Bandwidth / interference", meaning: "Bandwidth is data capacity; interference can reduce wireless quality." },
    ],
    mistakes: [
      { wrong: "LAN and WAN differ only by the number of computers.", correct: "They differ by coverage, ownership/management and typically the technologies used." },
      { wrong: "A switch and a router do the same job.", correct: "A switch works mainly inside a LAN; a router connects different networks, including to the Internet." },
      { wrong: "The Internet and the World Wide Web are the same thing.", correct: "The Internet is the network; the Web is one service that uses HTTP/HTTPS." },
      { wrong: "Peer-to-peer means there is no network.", correct: "P2P still uses a network; there is no dedicated central server for that service." },
    ]
  },
  "C2 Internet Protocols": {
    caOutcomes: [
      "Know the formats and functions of IPv4 and IPv6 at a simple level.",
      "Understand the need for communications software and protocols, including simple TCP/IP ideas.",
      "Describe how data is transmitted over the Internet and understand URL, DNS, HTTP and HTTPS.",
    ],
    keywords: [
      { term: "IP address", meaning: "A numerical address for a host. IPv4 and IPv6 are different formats." },
      { term: "URL", meaning: "The full web address, including protocol, domain and path." },
      { term: "DNS", meaning: "Translates a domain name to an IP address; it does not store webpages." },
      { term: "HTTP vs HTTPS", meaning: "Both request/transfer web data; HTTPS adds encryption and certificate-based security, usually port 443." },
      { term: "SMTP / POP3 / IMAP", meaning: "SMTP sends email; POP3 downloads mail; IMAP keeps mail on the server and synchronises." },
      { term: "FTP", meaning: "A protocol for file transfer." },
      { term: "TCP/IP", meaning: "A protocol suite for addressing, routing and reliable/unreliable data transfer." },
    ],
    mistakes: [
      { wrong: "A domain name is the same as a full URL.", correct: "A URL includes protocol, domain and often a path, for example https://school.edu.hk/news." },
      { wrong: "DNS encrypts webpages.", correct: "DNS resolves names to IP addresses. HTTPS encrypts web communication." },
      { wrong: "SMTP is used to browse websites.", correct: "SMTP sends email. HTTP/HTTPS are used for web pages." },
      { wrong: "HTTPS is only a padlock icon and does not change the protocol.", correct: "HTTPS uses encryption and certificates; URLs begin with https:// and usually use port 443." },
    ]
  },
  "C3 Internet Services and Applications": {
    caOutcomes: [
      "Formulate an effective Web search strategy and critically analyse sources of information.",
      "Identify graphics, audio and video formats suitable for web pages, and use plug-ins/players for multimedia.",
      "Apply Internet services such as file transfer, remote logon, online chat, discussion forum and email.",
      "Describe streaming technology and applications such as voice mail, videoconferencing and webcasting.",
      "Value the significance of Internet development, including IoT and cloud services for activities such as smart city.",
    ],
    keywords: [
      { term: "Search operators", meaning: "Use quotes for exact phrases, - to exclude, OR for alternatives, and site: for a domain." },
      { term: "Cc vs Bcc", meaning: "Cc shows recipients to each other; Bcc hides recipient addresses." },
      { term: "Cloud permissions", meaning: "View, comment or edit rights decide who can access a shared link." },
      { term: "IoT", meaning: "Connected objects with sensors, network, processing and output/actions." },
      { term: "Streaming vs download", meaning: "Streaming plays while data is still arriving; quality depends on bitrate and bandwidth." },
      { term: "Video conferencing vs webcasting", meaning: "Conferencing is two-way interaction; webcasting is mainly one-to-many delivery." },
    ],
    mistakes: [
      { wrong: "Putting everyone in Cc keeps their emails private.", correct: "Use Bcc when recipients should not see one another’s addresses." },
      { wrong: "A cloud link is automatically private.", correct: "Permissions decide access. Anyone with an open link may view or edit." },
      { wrong: "IoT just means any website.", correct: "IoT involves connected physical devices or sensors generating and using data." },
      { wrong: "The first search result is always the most reliable source.", correct: "Evaluate authority, evidence and corroboration, not rank alone." },
    ]
  },
  "C4 Elementary Web Authoring": {
    caOutcomes: [
      "Recognise the basic constructs of HTML as a means to address cross-platform issues. Memorising HTML codes is not required.",
      "Discuss the organisation of web pages for an intended audience, including navigation, links, tables, multimedia, colour, fonts and accessibility, and upload them onto the WWW.",
    ],
    keywords: [
      { term: "HTML", meaning: "Markup that structures web content for browsers on different platforms." },
      { term: "Tag / attribute", meaning: "Tags mark elements; attributes such as href and src give extra information." },
      { term: "href vs src", meaning: "href is for hyperlinks; src is for image or media sources." },
      { term: "Relative path", meaning: "../ means the parent folder. Wrong folders/filenames break links and images." },
      { term: "Accessibility", meaning: "Use meaningful link text, alt text for images and a clear heading structure." },
      { term: "HTML vs CSS", meaning: "HTML structures content; CSS controls most visual styling." },
    ],
    mistakes: [
      { wrong: "href and src are the same attribute.", correct: "href is for links; src is for the source of an image or media file." },
      { wrong: "A relative path always starts from the website root.", correct: "A relative path is from the current file’s folder unless written from the root." },
      { wrong: "HTML controls colours and layout, so CSS is unnecessary in principle.", correct: "HTML structures content; CSS is used for most visual styling." },
      { wrong: "Images do not need alt text if the picture is obvious.", correct: "Alt text is needed for accessibility and when the image cannot be seen." },
    ]
  },
  "C5 Network Security and Privacy Threats": {
    caOutcomes: [
      "Describe potential risks caused by common network security threats such as virus, worm, Trojan, spyware, ransomware, unauthorised access, interception, intrusion and DoS.",
      "Discuss possible privacy threats on the Internet, including eavesdropping, hacking, phishing, spamming and junk mail, and suggest ways to maintain privacy.",
      "Be aware of legal consequences related to unauthorised access to computers.",
    ],
    keywords: [
      { term: "Virus / worm / Trojan", meaning: "A virus attaches to files; a worm can spread more independently; a Trojan disguises itself as legitimate software." },
      { term: "Ransomware", meaning: "Encrypts or locks data and demands payment." },
      { term: "Phishing", meaning: "Tricks users into giving data through fake messages or sites. Look for urgency, mismatched links and unexpected attachments." },
      { term: "DoS", meaning: "Floods a service so legitimate users cannot access it." },
      { term: "Spyware / tracking", meaning: "Collects user activity or data, often through software or cookies, without proper awareness." },
      { term: "Public Wi-Fi risk", meaning: "Traffic may be intercepted; use HTTPS/VPN and avoid sensitive transactions." },
    ],
    mistakes: [
      { wrong: "Antivirus stops every security threat.", correct: "Antivirus helps against some malware but not phishing, weak passwords, or all network attacks." },
      { wrong: "A strong password protects you even if you type it into a fake site.", correct: "Phishing captures the password. Check the URL and do not enter secrets on suspicious pages." },
      { wrong: "Public Wi-Fi with a familiar name is automatically safe.", correct: "Names can be spoofed. Prefer HTTPS/VPN and avoid banking on public Wi-Fi." },
      { wrong: "Ransomware is just advertising pop-ups.", correct: "Ransomware can lock or encrypt files and demand payment." },
      { wrong: "Deleting a phishing email is enough to protect everyone.", correct: "Report it so others can be protected; deleting it only removes it from your inbox." },
    ]
  },
  "C6 Network Security Measures": {
    caOutcomes: [
      "Propose effective measures to improve network security, including browser settings, anti-malware, authentication, access rights, firewall, wireless security such as WPA, and VPN.",
      "Be aware of information encryption technologies, including public/private keys and the idea that a longer key can increase security.",
      "Explain authentication and authorisation as means to control access, including tokens, digital signatures and digital certificates.",
      "Know security used in electronic transactions, including SSL/TLS, smart cards, security tokens, digital certificates and SMS OTPs, and be aware of latest security measures.",
    ],
    keywords: [
      { term: "Authentication vs authorisation", meaning: "Authentication checks identity; authorisation decides what that identity is allowed to do." },
      { term: "Encryption", meaning: "Turns plaintext into ciphertext to protect confidentiality; it does not by itself prove permission." },
      { term: "HTTPS / TLS / certificate", meaning: "Encrypts web traffic and helps verify the site through a digital certificate." },
      { term: "Firewall", meaning: "Allows or blocks traffic according to rules; it cannot fix password disclosure." },
      { term: "VPN", meaning: "Creates an encrypted tunnel, useful on untrusted networks." },
      { term: "MFA", meaning: "Uses two or more authentication factors, such as password plus OTP." },
      { term: "Digital signature", meaning: "Helps verify origin and integrity of a signed document or message." },
    ],
    mistakes: [
      { wrong: "Authentication and authorisation are the same.", correct: "Authentication proves who you are; authorisation controls what you may access." },
      { wrong: "Encryption stops every attack.", correct: "Encryption protects confidentiality. Users can still be phished, and access rights may still be wrong." },
      { wrong: "A firewall replaces antivirus, backup and user awareness.", correct: "A firewall is one control. Malware, backups and careful users are still needed." },
      { wrong: "A padlock icon alone proves a site is trustworthy.", correct: "Check the real domain and certificate. A padlock only means the connection is encrypted." },
      { wrong: "HTTPS is unnecessary if the user has a strong password.", correct: "HTTPS protects data in transit, including passwords, from eavesdropping." },
    ]
  },
  "D1 Problem Formulation and Analysis": {
    caOutcomes: [
      "Define a problem and its scope.",
      "Analyse a problem by identifying required inputs and outputs as well as stating the processes required.",
      "Solve a problem by decomposing it into smaller, manageable sub-problems.",
      "Identify common elements across similar problems.",
      "Outline input/output requirements and design an appropriate user interface.",
    ],
    keywords: [
      { term: "Scope", meaning: "What the solution must and must not cover." },
      { term: "IPO analysis", meaning: "Inputs supplied, processes performed, outputs produced." },
      { term: "Decomposition", meaning: "Breaking a problem into smaller parts that are easier to understand, test and implement." },
      { term: "Abstraction", meaning: "Removing irrelevant details while keeping the rules needed for the solution." },
      { term: "User interface", meaning: "How the user enters data and sees results; it should match the required inputs and outputs." },
    ],
    mistakes: [
      { wrong: "Every noun in the scenario is an input.", correct: "Only data actually needed by the algorithm is input." },
      { wrong: "Output and processing are the same.", correct: "Adding marks is processing; the total mark shown is output." },
      { wrong: "Abstraction means deleting important conditions.", correct: "Abstraction removes irrelevant detail, not required rules or constraints." },
      { wrong: "This chapter is mainly about writing complete Python modules.", correct: "D1 stays at problem analysis: scope, IPO, decomposition and interface, before coding." },
    ]
  },
  "D2 Algorithm Design I - Sequence and Selection": {
    caOutcomes: [
      "Define algorithm, and use pseudocode and program flowcharts to represent algorithms.",
      "Perform a dry run of a set of steps to determine its purpose and/or output.",
      "Recognise simple data types (integer, real, character, Boolean) and Boolean logic (AND, OR, NOT) with truth tables.",
      "Design and construct standard algorithms using sequence and selection (binary and multi-way).",
      "Produce a trace table to show values of variables at each stage.",
    ],
    keywords: [
      { term: "Algorithm", meaning: "A finite set of clear steps to solve a problem." },
      { term: "Sequence", meaning: "Statements run in order; order affects final values." },
      { term: "Assignment", meaning: "A variable receives a value. x ← x + 1 updates x; it is not an algebra equation." },
      { term: "Selection", meaning: "IF/ELSE chooses a branch only when its condition is true." },
      { term: "AND / OR / NOT", meaning: "AND needs both true; OR needs at least one true; NOT reverses the result." },
      { term: "Trace table", meaning: "Update variables after each step and show skipped branches." },
    ],
    mistakes: [
      { wrong: "x = x + 1 is an algebra equation, so it is impossible.", correct: "In programming it is assignment: take the old x, add 1, store the new value." },
      { wrong: "The ELSE branch always runs.", correct: "ELSE runs only when the IF condition is false." },
      { wrong: "OR requires both conditions to be true.", correct: "OR is true when at least one condition is true. AND requires both." },
      { wrong: "You can jump to the final output without tracing intermediate values.", correct: "DSE traces need the value after each relevant step, especially at boundaries." },
    ]
  },
  "D3 Algorithm Design II - Iteration and Arrays": {
    caOutcomes: [
      "Design and construct algorithms using iteration as well as sequence and selection.",
      "Recognise simple data structures limited to string and one-dimensional array.",
      "Create and examine algorithms to load and print an array, and to add or delete an item from an array.",
      "Produce trace tables, locate logic errors and modify an algorithm for changes in specification.",
      "Describe the advantages of modularity in designing computer solutions, without requiring Elective C subprogram implementation.",
    ],
    keywords: [
      { term: "Iteration", meaning: "A loop repeats while a condition holds; the loop control must change so it can stop." },
      { term: "Off-by-one", meaning: "The loop starts or stops one position too early or too late." },
      { term: "Counter vs accumulator", meaning: "A counter counts how many; an accumulator totals how much." },
      { term: "Array index vs value", meaning: "The index is the position; the value is stored at that position." },
      { term: "Linear search", meaning: "Check items one by one; it can work on unsorted data. Binary search is Elective C." },
      { term: "Modularity", meaning: "Breaking a solution into parts makes it easier to design, test and reuse." },
    ],
    mistakes: [
      { wrong: "A loop will stop by itself even if the control variable never changes.", correct: "If the condition never becomes false, the loop may never end." },
      { wrong: "The array index is the same as the stored value.", correct: "Index is the position; the value is the data at that position." },
      { wrong: "A counter and an accumulator are the same pattern.", correct: "Count how many vs add up how much." },
      { wrong: "Binary search, stacks and 2D arrays belong in Core D.", correct: "Core D uses 1D arrays and linear search. Binary search, stacks/queues and 2D arrays are Elective C." },
    ]
  },
  "D4 Introduction to Python Programming": {
    caOutcomes: [
      "Understand and use variables, constants and simple lists in different problem contexts.",
      "Use operators, expressions, assignment, input and output statements.",
      "Understand and use sequence, selection and iteration (nested loop is not required in Core D) to create a program.",
    ],
    keywords: [
      { term: "Variable / assignment", meaning: "A name storing a value that can be updated." },
      { term: "input() / print()", meaning: "input() reads text from the user; print() displays output." },
      { term: "Type conversion", meaning: "input() returns a string; convert with int() or float() before arithmetic." },
      { term: "Indentation", meaning: "Indentation is Python syntax that shows which statements belong to IF/loops." },
      { term: "Syntax error", meaning: "The program cannot run until the language rules are repaired." },
      { term: "Operators", meaning: "Arithmetic (+ − * / %), relational (== != > < >= <=) and Boolean (and, or, not)." },
    ],
    mistakes: [
      { wrong: "The value \"5\" is the same as the integer 5.", correct: "\"5\" is a string. Convert it before arithmetic." },
      { wrong: "Indentation is only for neat layout.", correct: "In Python, indentation is part of the syntax." },
      { wrong: "input() automatically converts text to a number.", correct: "input() returns a string unless you convert it." },
      { wrong: "If the program runs, the logic must be correct.", correct: "A syntax-free program can still have a logic error and wrong output." },
    ]
  },
  "D5 Integrated Problem-solving in Python": {
    caOutcomes: [
      "Produce a programming solution for a given problem using lists and strings.",
      "Find minimum, maximum and average values in a list; search and count items; extract characters; check whether values are in order; use simple mathematical formulas.",
      "Modify an algorithm/program for changes in task specification.",
    ],
    keywords: [
      { term: "List processing", meaning: "Use an index for one item and a loop to process every item." },
      { term: "String extraction", meaning: "Watch start position and length/end position; off-by-one is common." },
      { term: "Integrated solution", meaning: "Combine input, selection, iteration, lists and strings to solve one scenario." },
      { term: "Program purpose", meaning: "Explain what the whole code achieves, not only one line." },
      { term: "Boundary test data", meaning: "Include values on the edge of conditions, not only typical valid data." },
    ],
    mistakes: [
      { wrong: "Guess the missing line without tracing variables.", correct: "Read surrounding lines and trace values before completing the code." },
      { wrong: "A list element and the whole list are the same.", correct: "One item is scores[i]; the whole list is scores." },
      { wrong: "String positions can be guessed without a small example.", correct: "Trace a short string; start/end positions often shift by one." },
      { wrong: "Typical valid data is enough testing.", correct: "Include boundary and erroneous data as well." },
    ]
  },
  "D6 Program Testing and Debugging": {
    caOutcomes: [
      "Apply data validation checks to design appropriate test data, including boundary cases.",
      "Understand syntax, logic and run-time errors: why they occur and how to debug them.",
      "Compare different solutions to the same problem by steps of operation and resource usage.",
    ],
    keywords: [
      { term: "Normal / boundary / erroneous data", meaning: "Typical valid values; values on the edge of a condition; values that should be rejected." },
      { term: "Syntax error", meaning: "Breaks language rules and usually stops the program from running." },
      { term: "Runtime error", meaning: "Occurs while running, such as division by zero or invalid conversion." },
      { term: "Logic error", meaning: "The program runs but the result is wrong." },
      { term: "Systematic debugging", meaning: "Reproduce, locate, fix one cause, then retest. Do not change many lines at random." },
      { term: "Algorithm comparison", meaning: "Compare correctness, readability and efficiency, not only which code is shorter." },
    ],
    mistakes: [
      { wrong: "A program that runs is necessarily correct.", correct: "It may still contain a logic error." },
      { wrong: "Boundary data is just any random input.", correct: "Boundary data sits on the edge of a condition, such as the exact pass mark." },
      { wrong: "Syntax, runtime and logic errors have the same symptoms.", correct: "Syntax usually prevents running; runtime crashes while running; logic gives wrong output." },
      { wrong: "Changing many lines at once is the fastest debug method.", correct: "Change one suspected cause at a time and retest." },
    ]
  },
  "E1 Technological Innovations": {
    caOutcomes: [
      "Understand basic concepts of technological innovations and their applications, such as AI and data science, 3D printing, AR and VR.",
      "Discuss benefits, risks and affected stakeholders in realistic scenarios rather than making blanket judgements.",
    ],
    keywords: [
      { term: "AI / data science", meaning: "Uses data and models for pattern recognition or prediction; raises bias, privacy and accountability issues." },
      { term: "IoT / smart city", meaning: "Connected sensors and services that collect and act on data." },
      { term: "AR / VR / MR", meaning: "AR overlays digital content on the real world; VR is a simulated environment." },
      { term: "3D printing", meaning: "Builds physical objects layer by layer from a digital design." },
      { term: "Stakeholder judgement", meaning: "Name the technology, a specific effect, and who is affected." },
    ],
    mistakes: [
      { wrong: "All new technology is automatically good.", correct: "Judge the scenario: benefits, risks and affected stakeholders." },
      { wrong: "\"More convenient\" is a complete DSE answer.", correct: "Name the technology, the specific effect, and who it helps or harms." },
      { wrong: "Efficiency removes the need for privacy and security controls.", correct: "Smarter systems often collect more data, so privacy and security still matter." },
      { wrong: "A benefit with no stakeholder is enough.", correct: "State who is affected: users, workers, customers, government or the public." },
    ]
  },
  "E2 Health and Ethical Issues": {
    caOutcomes: [
      "Identify health hazards associated with ICT and propose good ergonomic practices.",
      "Realise the importance of equity of access, including digital divide, gender equity, access for the disabled, and pros/cons of freedom of information.",
      "Discuss ethical considerations on the use of ICT, including privacy, cyberbullying, information reliability and environmental impact where relevant.",
    ],
    keywords: [
      { term: "Ergonomics / RSI", meaning: "Reduce strain through posture, furniture, breaks and user-friendly software design." },
      { term: "Digital divide", meaning: "Unequal access to devices, connectivity, skills or services." },
      { term: "Privacy / consent", meaning: "Collect only needed data; control access, security and retention." },
      { term: "Cyberbullying", meaning: "Protect the victim, keep evidence, and use lawful reporting channels." },
      { term: "Information reliability", meaning: "Check source, evidence and corroboration before sharing." },
      { term: "Freedom of information", meaning: "Access has benefits, but misinformation and harm are risks." },
    ],
    mistakes: [
      { wrong: "Deleting all cyberbullying messages immediately is always best.", correct: "Keep evidence, protect the victim, and report through suitable channels." },
      { wrong: "Collecting extra personal data is harmless if the school might need it later.", correct: "Collect only what is needed. Extra data increases privacy risk." },
      { wrong: "The digital divide only means not owning a computer.", correct: "Skills, connectivity, accessibility and support also matter." },
      { wrong: "Ergonomics is only about making the desk look tidy.", correct: "It is about reducing physical strain and injury, such as RSI." },
    ]
  },
  "E3 Intellectual Property": {
    caOutcomes: [
      "Understand basic ideas of intellectual property and copyright.",
      "Understand benefits and risks of licensing schemes such as freeware, shareware, open source and copyrighted software, from user and developer views.",
      "Relate acts of possible copyright infringement in software and Internet piracy, and develop the habit of acknowledging sources.",
      "Be aware of ways to reduce IP theft, such as digital watermark and digital signature, and some legal consequences in Hong Kong, especially in education.",
    ],
    keywords: [
      { term: "Copyright / IP", meaning: "Legal rights over original work. Using it usually needs permission or a licence." },
      { term: "Freeware vs shareware vs open source", meaning: "Freeware is free to use; shareware is try-before-pay; open source allows source access under licence terms." },
      { term: "Creative Commons", meaning: "Standard licences with conditions such as BY, NC, ND and SA. CC is not \"no rules\"." },
      { term: "Attribution", meaning: "Giving credit is required in many licences, but credit alone may not make copying legal." },
      { term: "Watermark / digital signature", meaning: "Help identify or protect digital property; they do not replace lawful use." },
    ],
    mistakes: [
      { wrong: "Anything on the Internet is free to copy.", correct: "Online material is still protected unless a licence or permission allows use." },
      { wrong: "Giving credit always makes copying legal.", correct: "Attribution does not replace permission when permission is required." },
      { wrong: "Freeware is the same as open source.", correct: "Freeware may hide or forbid modifying the source code." },
      { wrong: "Creative Commons means there are no rules.", correct: "CC licences still have conditions such as attribution or non-commercial use." },
    ]
  },
  "EA1 Managing Data Using SQL": {
    caOutcomes: [
      "Use SQL to maintain a simple relational database: create/modify table structure and add, delete and modify data.",
      "Create a simple relational database with suitable data types, keys and constraints.",
      "View, sort and select contents, and understand that unsafe UPDATE/DELETE without WHERE can affect all rows.",
    ],
    keywords: [
      { term: "CREATE TABLE", meaning: "Defines fields, data types and constraints before records are stored." },
      { term: "INSERT / UPDATE / DELETE", meaning: "Add, change or remove records. UPDATE and DELETE need a precise WHERE." },
      { term: "PRIMARY KEY", meaning: "Uniquely identifies each record and cannot be NULL." },
      { term: "Data type", meaning: "Affects validation, storage, sorting and whether arithmetic is possible." },
      { term: "DROP TABLE", meaning: "Removes the table structure, not just selected records." },
      { term: "COMMIT / ROLLBACK", meaning: "Confirm a transaction or reverse incomplete changes to keep consistency." },
    ],
    mistakes: [
      { wrong: "UPDATE or DELETE without WHERE only changes the row you are thinking about.", correct: "Without WHERE, every row in the table can be changed or deleted." },
      { wrong: "Phone numbers must use a numeric type.", correct: "Store them as text if arithmetic is not needed and leading zeros must be kept." },
      { wrong: "PRIMARY KEY and UNIQUE are identical.", correct: "A primary key identifies records and cannot be NULL; UNIQUE allows a different null/identity rule." },
      { wrong: "DROP TABLE deletes a few selected records.", correct: "DROP TABLE removes the whole table structure." },
    ]
  },
  "EA2 SQL Operators and Functions": {
    caOutcomes: [
      "Use appropriate operators and expressions: arithmetic, comparison, logical, IN, BETWEEN and LIKE.",
      "Use simple built-in functions such as aggregate and string functions.",
      "Select, filter, sort and create views of data from a table using precise conditions.",
    ],
    keywords: [
      { term: "WHERE vs SELECT", meaning: "WHERE filters records; SELECT chooses fields." },
      { term: "LIKE", meaning: "\"Chan%\" starts with Chan; \"%Chan\" ends with Chan; \"_\" can stand for one character." },
      { term: "IN / BETWEEN / IS NULL", meaning: "IN tests a list; BETWEEN tests a range; IS NULL tests missing values." },
      { term: "COUNT / SUM / AVG", meaning: "Aggregate functions summarise many records. COUNT(*) counts rows; COUNT(field) may ignore NULL." },
      { term: "GROUP BY", meaning: "Needed when non-aggregate fields appear with aggregate functions." },
      { term: "NULL", meaning: "Unknown/missing. Do not compare with = NULL." },
    ],
    mistakes: [
      { wrong: "Write WHERE name = NULL to find missing names.", correct: "Use IS NULL, not = NULL." },
      { wrong: "LIKE \"A%\" and LIKE \"%A\" match the same rows.", correct: "\"A%\" starts with A; \"%A\" ends with A." },
      { wrong: "An aggregate function lists every original record.", correct: "It summarises many records into a count, sum or average." },
      { wrong: "GROUP BY can use any field at random.", correct: "GROUP BY must match the field you are grouping by." },
      { wrong: "SELECT chooses records and WHERE chooses fields.", correct: "SELECT chooses fields; WHERE filters records." },
    ]
  },
  "EA3 SQL Operations on Multiple Tables": {
    caOutcomes: [
      "Perform queries on multiple tables, including equi-join, natural join and outer join, for at most three tables.",
      "Perform sub-queries for one sub-level only.",
      "Use set operations and views where required, and avoid ambiguous field names with table names or aliases.",
    ],
    keywords: [
      { term: "JOIN condition", meaning: "Match related keys, usually primary key to foreign key." },
      { term: "INNER vs OUTER JOIN", meaning: "INNER returns matching rows; OUTER can keep unmatched rows from one side." },
      { term: "Cartesian product", meaning: "A missing join condition pairs every row with every row." },
      { term: "Subquery", meaning: "One nested SELECT only at this syllabus level." },
      { term: "Alias", meaning: "Short table names prevent ambiguous field names such as two ID columns." },
      { term: "View", meaning: "A stored query that presents a reusable result set." },
    ],
    mistakes: [
      { wrong: "Join tables because they have similar-looking columns, even without a key.", correct: "Join on related keys. Similar names are not enough." },
      { wrong: "Nested subqueries of many levels are required.", correct: "This chapter uses one sub-level only." },
      { wrong: "Field name ID is always unique in a multi-table query.", correct: "Qualify with table name or alias when several tables have ID." },
      { wrong: "A JOIN is a programming loop.", correct: "JOIN is a database operation that combines related rows." },
    ]
  },
  "EA4 Relational Database Concepts": {
    caOutcomes: [
      "Describe basic relational-database concepts: entity, relationship, attribute, domain, index, primary/foreign/candidate keys, and entity/referential/domain integrity.",
      "Create a simple relational database and establish required relationships among tables.",
      "Describe the purposes of rollback.",
    ],
    keywords: [
      { term: "Entity / attribute / domain", meaning: "An entity is a thing of interest; an attribute is a property; a domain is the set of valid values." },
      { term: "Primary / candidate / foreign key", meaning: "Candidate keys could identify rows; one is chosen as primary; a foreign key links to another table." },
      { term: "Entity integrity", meaning: "Primary key unique and not NULL." },
      { term: "Referential integrity", meaning: "A foreign key must match an existing parent key or be NULL if allowed." },
      { term: "Index", meaning: "Helps locate records faster; it is not the same as a key’s uniqueness rule." },
      { term: "Rollback", meaning: "Reverses an incomplete transaction to a consistent state." },
    ],
    mistakes: [
      { wrong: "A foreign key must be unique in its own table.", correct: "A foreign key may repeat; many child rows can point to one parent." },
      { wrong: "Entity integrity and referential integrity are the same rule.", correct: "Entity integrity is about the primary key; referential integrity is about valid foreign keys." },
      { wrong: "Rollback is the same as backup.", correct: "Backup copies data. Rollback undoes an incomplete transaction." },
      { wrong: "A field domain is a website domain name.", correct: "In databases, a domain is the set of valid values for an attribute." },
    ]
  },
  "EA5 Database Design and ER Diagram": {
    caOutcomes: [
      "Be aware of different types of relationships among entities.",
      "Analyse simple scenarios and create simple ER diagrams involving binary relationships only.",
      "Resolve many-to-many relationships into multiple one-to-many relationships.",
      "Explain data redundancy and reduce it through normalisation up to 3NF; describe needs and procedures of denormalisation.",
      "Transform ER diagrams to tables, and use access rights to achieve data privacy.",
    ],
    keywords: [
      { term: "ER diagram", meaning: "Shows entities, attributes, relationships, cardinality and participation." },
      { term: "Binary relationship", meaning: "A relationship between two entity types only at this syllabus level." },
      { term: "M:N resolution", meaning: "Implement many-to-many with an associative table containing foreign keys." },
      { term: "1NF / 2NF / 3NF", meaning: "Remove repeating groups, partial dependency, then transitive dependency." },
      { term: "Redundancy / anomalies", meaning: "Repeated data can cause insertion, update and deletion problems." },
      { term: "Least privilege", meaning: "Grant only the access rights a user needs." },
    ],
    mistakes: [
      { wrong: "Ternary relationships are required in this chapter.", correct: "Use binary relationships only for this syllabus boundary." },
      { wrong: "An M:N relationship can be stored directly without an extra table.", correct: "Resolve M:N with an associative table containing the two foreign keys." },
      { wrong: "Normalisation means splitting tables at random.", correct: "Normalise to remove dependency problems up to 3NF." },
      { wrong: "Giving every user administrator rights is the safest design.", correct: "Use least privilege and views to limit access to sensitive data." },
    ]
  },
  "EC1 Algorithm Design and Python Basics": {
    caOutcomes: [
      "Review algorithms with flowcharts or pseudocode and select appropriate data types, including structured and user-defined types as an extension of Core D.",
      "Apply basic constructs: variables, constants, assignment, I/O, arithmetic/string/Boolean operators, precedence and association.",
      "Realise the importance of good programming styles, such as meaningful names, comments, spacing and indentation.",
    ],
    keywords: [
      { term: "Algorithm representations", meaning: "Pseudocode, flowchart and trace table show the same logic in different forms." },
      { term: "Data types", meaning: "Simple types plus structured/user-defined types beyond Core D." },
      { term: "Operator precedence", meaning: "Evaluate expressions in the correct order and type." },
      { term: "Programming style", meaning: "Meaningful names, comments, indentation and spacing reduce errors." },
      { term: "Trace in execution order", meaning: "Update every intermediate value; do not jump to the end." },
    ],
    mistakes: [
      { wrong: "Assignment is algebraic equality.", correct: "Assignment stores a new value in a variable." },
      { wrong: "Intermediate trace-table values can be skipped.", correct: "DSE traces need each relevant update." },
      { wrong: "Pseudocode and Python syntax are identical.", correct: "They show the same logic, but Python has exact syntax rules." },
      { wrong: "A comment should repeat the next line of code in words.", correct: "Comments should explain purpose or a non-obvious reason." },
    ]
  },
  "EC2 Program Testing and Debugging II": {
    caOutcomes: [
      "Interpret numerical errors (rounding, truncation, overflow, underflow) as well as syntax, logical and run-time errors.",
      "Apply manual methods and software debugging tools: stubs, flags, breakpoints and program traces with test data.",
      "Appraise structured programming to design, implement and debug errors.",
    ],
    keywords: [
      { term: "Overflow / underflow", meaning: "Overflow is outside the representable range; underflow is a value too small to represent usefully." },
      { term: "Rounding vs truncation", meaning: "Rounding approximates to a precision; truncation cuts off extra digits." },
      { term: "Breakpoint", meaning: "Pauses execution so you can inspect variables at a chosen line." },
      { term: "Stub", meaning: "A temporary stand-in for an unfinished subprogram so the rest can be tested." },
      { term: "Flag", meaning: "A Boolean/status variable that must be initialised and updated at the right point." },
    ],
    mistakes: [
      { wrong: "If a program does not crash, it has no errors.", correct: "Logic errors can produce wrong output without crashing." },
      { wrong: "Rounding and truncation are the same.", correct: "Rounding approximates; truncation simply cuts off." },
      { wrong: "Adding many random print statements is the best debug method.", correct: "Trace the suspected section with breakpoints, flags or a trace table." },
      { wrong: "A flag can be checked before it has had a chance to change.", correct: "Initialise it, update it at the right point, then check it." },
    ]
  },
  "EC3 Advanced Control Structures": {
    caOutcomes: [
      "Apply nested control structures; nested loops are required in Elective C.",
      "Process two-dimensional arrays with nested loops.",
      "Choose an appropriate algorithm for a task and evaluate efficiency, correctness and appropriateness.",
    ],
    keywords: [
      { term: "Nested loop", meaning: "An inner loop runs fully for each outer-loop cycle. Executions often equal outer × inner." },
      { term: "2D array", meaning: "Needs a row index and a column index." },
      { term: "Pattern / grid processing", meaning: "Trace loop bounds carefully for row-column output." },
      { term: "Algorithm comparison", meaning: "Use scenario evidence: correctness, readability, number of operations — not name recognition alone." },
    ],
    mistakes: [
      { wrong: "The inner loop runs only once.", correct: "The inner loop repeats for every outer iteration." },
      { wrong: "Row and column indexes can be swapped without checking layout.", correct: "scores[row][col] is not the same as scores[col][row] unless the array is defined that way." },
      { wrong: "The shortest algorithm is automatically the best.", correct: "Compare correctness, readability and efficiency for the task." },
      { wrong: "2D arrays are a Core D requirement.", correct: "Nested loops and 2D arrays are Elective C emphasis." },
    ]
  },
  "EC4 Sub-programs": {
    caOutcomes: [
      "Implement parameter passing in manipulating sub-programs.",
      "Apply structured/modular programming: define and call functions/procedures, use parameters, arguments, return values, local/global scope and stubs.",
      "This is Elective C content, not Core D.",
    ],
    keywords: [
      { term: "Subprogram / function", meaning: "A named block of code that can be called from elsewhere. Elective C only here." },
      { term: "Parameter vs argument", meaning: "Parameters are names inside the subprogram; arguments are values supplied by the caller." },
      { term: "Return value", meaning: "Must be assigned or used by the caller if it is needed later." },
      { term: "Local vs global", meaning: "Local variables are not normally accessed directly outside their subprogram." },
      { term: "Stub", meaning: "Lets the main program be tested before every subprogram is finished." },
    ],
    mistakes: [
      { wrong: "Sub-programs are Core D content.", correct: "On this hub, sub-programs belong to Elective C only." },
      { wrong: "A parameter inside a function is the same variable as every same-named variable outside.", correct: "Scope separates local parameters from other variables with the same name." },
      { wrong: "Calling a function automatically stores its result in a variable.", correct: "The caller must assign or use the returned value." },
      { wrong: "A stub is the final complete function.", correct: "A stub is a temporary stand-in for testing." },
    ]
  },
  "EC5 Data Structures": {
    caOutcomes: [
      "Construct lists, stacks and queues in terms of arrays.",
      "Create and manipulate linear linked lists, stacks and queues, including pointer/index tracing.",
      "Choose a structure by access pattern: LIFO, FIFO, wrap-around or linked access.",
    ],
    keywords: [
      { term: "Stack / LIFO", meaning: "Last in, first out. Push and pop affect the top item only." },
      { term: "Queue / FIFO", meaning: "First in, first out. Enqueue and dequeue usually happen at different ends." },
      { term: "Circular queue", meaning: "Wrap-around indexing; full and empty conditions must be traced carefully." },
      { term: "Linked list", meaning: "Nodes linked by pointers; traversal follows the next reference." },
      { term: "Array implementation", meaning: "Stacks/queues can be stored in arrays using indexes for top, front and rear." },
    ],
    mistakes: [
      { wrong: "A stack uses FIFO order.", correct: "A stack is LIFO. A queue is FIFO." },
      { wrong: "A circular queue never wraps to index 0.", correct: "When rear/front passes the last index, it wraps around." },
      { wrong: "A pointer stores the next node’s value automatically.", correct: "A pointer/reference stores a link to the next node, not the value by magic." },
      { wrong: "Binary search and sorting belong in this chapter.", correct: "Searching and sorting are EC6." },
    ]
  },
  "EC6 Searching and Sorting": {
    caOutcomes: [
      "Apply algorithms of counting, accumulating, swapping, searching, sorting and merging in writing programs.",
      "Search algorithms include linear and binary search; sorting includes bubble, insertion and selection sort; merging involves two arrays at one time.",
      "Realise that faster sorts such as merge sort and quick sort exist, without requiring their full implementation.",
      "Choose an appropriate algorithm and evaluate efficiency, correctness and appropriateness.",
    ],
    keywords: [
      { term: "Linear vs binary search", meaning: "Linear checks one by one and can use unsorted data; binary search needs sorted data." },
      { term: "Swap", meaning: "Exchange two items, often using a temporary variable." },
      { term: "Bubble / selection / insertion sort", meaning: "Adjacent swaps; pick min each pass; insert into the sorted part." },
      { term: "Merging", meaning: "Combine two already-sorted lists into one sorted list. It is not concatenation." },
      { term: "Efficiency", meaning: "Count comparisons/swaps and consider whether data is already sorted." },
    ],
    mistakes: [
      { wrong: "Binary search works on any list.", correct: "The data must be sorted first." },
      { wrong: "Bubble sort and selection sort use the same swap pattern.", correct: "Bubble swaps adjacent out-of-order pairs; selection swaps the minimum into place each pass." },
      { wrong: "Merging two sorted lists means joining them end to end.", correct: "Merging compares heads of both lists to keep overall order." },
      { wrong: "Stacks and queues are part of this searching chapter.", correct: "Stacks, queues and linked lists are EC5." },
    ]
  },
  "EC7 Handling of Text Files": {
    caOutcomes: [
      "Manipulate text files through file-handling statements: delete, insert, append and amend records.",
      "Read, clean, split, write and update text-file records using the correct mode and order of open / process / close.",
    ],
    keywords: [
      { term: "File modes", meaning: "Read, write and append do different jobs. Writing can overwrite a file." },
      { term: "Open → process → close", meaning: "Handle files in the correct order and close them safely." },
      { term: "Record / delimiter", meaning: "A line or record is split by a delimiter such as a comma; the wrong delimiter extracts wrong fields." },
      { term: "Append vs overwrite", meaning: "Append adds to the end; write mode may replace the whole file." },
      { term: "Safe update", meaning: "Often read, change in memory or a temporary file, then write back." },
    ],
    mistakes: [
      { wrong: "The whole file always fits comfortably in one variable.", correct: "Process line by line for many records." },
      { wrong: "Forgetting to close a file does not matter.", correct: "Close files or use a safe structure so data is written and resources are released." },
      { wrong: "Any delimiter can split a CSV-like line correctly.", correct: "The delimiter is part of the record format." },
      { wrong: "Text-file updates use SQL UPDATE.", correct: "File handling uses read/write/append, not SQL." },
    ]
  },
  "EC8 Applications of Programming in Real Life": {
    caOutcomes: [
      "Use extended programming modules or libraries to interact with physical devices, such as capturing sensor data and controlling devices like motors. Details of libraries are not required.",
      "Use event handlers in event-driven programs for user actions or sensor-value events. Details of event handlers are not required.",
      "Construct simple programs on physical devices using features such as speech recognition and accelerometer.",
    ],
    keywords: [
      { term: "Sensor → process → actuator", meaning: "Sensors provide input; the program decides; motors/displays perform output." },
      { term: "Event handler", meaning: "Code that runs when a specified event occurs, such as a button press or sensor threshold." },
      { term: "Event-driven program", meaning: "Responds to events rather than running every line as one continuous script." },
      { term: "IoT application", meaning: "Keep examples syllabus-safe: input, condition, output, plus privacy/security awareness." },
    ],
    mistakes: [
      { wrong: "Every IoT or AI product is advanced programming content for this chapter.", correct: "Keep to simple sensor–process–output and event-handler ideas." },
      { wrong: "A sensor performs the whole decision process.", correct: "The sensor measures; the program decides; an actuator/output device acts." },
      { wrong: "An event handler runs continuously on every line.", correct: "It runs when the specified event occurs." },
      { wrong: "EC8 requires implementing a commercial AI system.", correct: "Use simple, syllabus-safe device and event examples." },
    ]
  }
};

function getChapterGuide(topicId) {
  return chapterGuides[topicId] || { caOutcomes: [], keywords: [], mistakes: [] };
}

