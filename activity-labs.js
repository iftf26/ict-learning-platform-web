(function (global) {
  function escapeHtml(value) {
    if (typeof global.escapeHtml === 'function') return global.escapeHtml(value);
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function reduceMotion() {
    return Boolean(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function feedbackBox(tone, title, why, concept, next) {
    return `
      <div class="lab-feedback ${tone}" role="status">
        <strong>${escapeHtml(title)}</strong>
        <p>${escapeHtml(why)}</p>
        ${concept ? `<p class="checkpoint-concept"><span>Correct concept</span>${escapeHtml(concept)}</p>` : ''}
        ${next ? `<p class="checkpoint-next"><span>Next</span>${escapeHtml(next)}</p>` : ''}
      </div>
    `;
  }

  const C1_SCENARIOS = [
    {
      id: 'computer-room',
      title: 'Computer room + Wi-Fi classroom',
      text: 'The school is adding a computer room of wired PCs, a Wi-Fi classroom of laptops, a file server, and an Internet link. Place each device where it belongs, then send a packet from a laptop to a website.',
      wired: 'Computer room PCs',
      wireless: 'Wi-Fi classroom laptops'
    },
    {
      id: 'library',
      title: 'Library PCs + staff Wi-Fi',
      text: 'The library has wired catalogue PCs. Staff laptops use Wi-Fi. A library server stores loan records. The school also needs Internet access for the catalogue website.',
      wired: 'Library PCs',
      wireless: 'Staff laptops'
    },
    {
      id: 'office',
      title: 'Office LAN + guest Wi-Fi',
      text: 'The office has wired desktop PCs. Visitors use guest Wi-Fi. An office server holds shared documents. The school needs a controlled path to the Internet.',
      wired: 'Office desktops',
      wireless: 'Guest laptops'
    }
  ];

  const C1_SLOTS = [
    { id: 'pcs', label: 'Wired end devices', accept: 'pc', hint: 'PCs in one room join the LAN through a switch, not through a router.' },
    { id: 'laptops', label: 'Wireless end devices', accept: 'laptop', hint: 'Laptops use Wi-Fi, so they associate with an access point.' },
    { id: 'ap', label: 'Wireless access', accept: 'ap', hint: 'The AP joins wireless clients onto the wired LAN.' },
    { id: 'switch', label: 'LAN core', accept: 'switch', hint: 'A switch forwards frames inside the same LAN.' },
    { id: 'server', label: 'School server', accept: 'server', hint: 'A school server is a LAN resource, usually on the switch.' },
    { id: 'router', label: 'Network boundary', accept: 'router', hint: 'A router is needed when traffic leaves this network.' },
    { id: 'modem', label: 'ISP access', accept: 'modem', hint: 'Modem/ONT deals with the ISP access technology.' },
    { id: 'internet', label: 'Public Internet', accept: 'internet', hint: 'The ISP/Internet sits beyond the school network.' }
  ];

  const C1_DEVICES = [
    { id: 'pc', name: 'PC', role: 'Wired host in the LAN' },
    { id: 'laptop', name: 'Laptop', role: 'Wireless host' },
    { id: 'nic', name: 'NIC', role: 'Interface inside a computer' },
    { id: 'ap', name: 'Access point', role: 'Wi-Fi into the LAN' },
    { id: 'switch', name: 'Switch', role: 'Forward within a LAN' },
    { id: 'router', name: 'Router', role: 'Forward between networks' },
    { id: 'modem', name: 'Modem / ONT', role: 'ISP access device' },
    { id: 'server', name: 'Server', role: 'Shared LAN service' },
    { id: 'internet', name: 'Internet / ISP', role: 'Outside the school LAN' }
  ];

  const C1_WRONG = {
    pc: {
      switch: null,
      router: 'You placed PCs on the network boundary. A router is not used to interconnect the PCs inside one room. A switch forwards traffic within the LAN.',
      modem: 'A modem/ONT talks to the ISP. It does not connect classroom PCs to each other.',
      ap: 'Wired PCs do not need an access point as their main connection. Use the switch for the computer room.',
      internet: 'PCs are school hosts. They sit on the LAN, not on the public Internet cloud.'
    },
    laptop: {
      ap: null,
      switch: 'Laptops can reach the switch only after they join Wi-Fi. Place them with the access point first.',
      router: 'Laptops do not connect directly to the router as their classroom Wi-Fi method. They associate with an AP, and the AP joins the LAN.',
      modem: 'Wireless clients are not the ISP access device.'
    },
    nic: {
      '*': 'A NIC is installed inside a PC or laptop so that host can attach to the network. It is not a separate box between the PCs and the switch.'
    },
    ap: {
      ap: null,
      router: 'An access point is not a router. It extends the LAN to wireless devices. Crossing into the Internet still needs a router.',
      switch: 'The AP does belong near the LAN, but its slot is wireless access. The switch slot is the wired LAN core.',
      modem: 'An AP does not terminate the ISP fibre/cable link.'
    },
    switch: {
      switch: null,
      router: 'A switch is not the device that connects different networks. Put the switch in the LAN core so PCs, AP and server can talk locally.',
      modem: 'A switch does not convert the ISP access signal.',
      internet: 'The switch stays inside the school LAN.'
    },
    router: {
      router: null,
      switch: 'A router is the wrong core device for 20 PCs sharing one LAN. Use a switch inside the LAN; use the router at the boundary.',
      ap: 'A router does not provide classroom Wi-Fi by itself in this design. The AP does that.',
      pcs: 'Do not hang every PC directly off the router when they belong to one LAN.'
    },
    modem: {
      modem: null,
      router: 'Modem/ONT and router are different roles. The modem/ONT faces the ISP access link; the router forwards between the school network and other networks.',
      switch: 'The modem/ONT is not a LAN switch.'
    },
    server: {
      server: null,
      internet: 'A school file server should sit on the LAN so local clients do not need the Internet to reach it.',
      modem: 'Do not put the school server on the ISP side of the access link.',
      router: 'The server is a LAN host. Connect it through the switch, not as the boundary device.'
    },
    internet: {
      internet: null,
      switch: 'The public Internet is not a LAN switch.',
      pcs: 'The Internet cloud is not a classroom PC.'
    }
  };

  const C1_PATH = ['Laptop', 'Access point', 'Switch', 'Router', 'Modem / ONT', 'ISP / Internet', 'Remote website'];

  function c1WrongMessage(deviceId, slotId) {
    const slot = C1_SLOTS.find(item => item.id === slotId);
    if (deviceId === slot.accept) return null;
    const table = C1_WRONG[deviceId] || {};
    return table[slotId] || table['*'] || table[slot.accept] || `${C1_DEVICES.find(item => item.id === deviceId)?.name} does not belong in “${slot.label}”. ${slot.hint}`;
  }

  function renderC1(activity) {
    const scenario = pick(C1_SCENARIOS);
    return global.makeActivityShell(activity, `
      <div class="lab-shell c1-lab" data-c1-lab data-scenario="${escapeHtml(scenario.id)}">
        <div class="lab-progress" aria-label="Activity stages">
          <span class="is-active" data-c1-stage-tab="build">1 Try it</span>
          <span data-c1-stage-tab="packet">2 See the packet</span>
          <span data-c1-stage-tab="dse">3 DSE transfer</span>
        </div>
        <section data-c1-stage="build">
          <p class="lab-scenario"><strong>${escapeHtml(scenario.title)}</strong> ${escapeHtml(scenario.text)}</p>
          <p class="lab-help">Click a device, then click a slot. Wrong placements teach the boundary, not just the device name.</p>
          <div class="c1-palette" role="list" aria-label="Network devices">
            ${C1_DEVICES.map(device => `
              <button class="c1-device" type="button" data-c1-device="${device.id}" aria-pressed="false">
                <strong>${escapeHtml(device.name)}</strong>
                <span>${escapeHtml(device.role)}</span>
              </button>
            `).join('')}
          </div>
          <div class="c1-map" role="group" aria-label="School network slots">
            <article>
              <h4>${escapeHtml(scenario.wired)}</h4>
              <button class="c1-slot" type="button" data-c1-slot="pcs" data-placeholder="Drop wired hosts">Drop wired hosts</button>
            </article>
            <article>
              <h4>${escapeHtml(scenario.wireless)}</h4>
              <button class="c1-slot" type="button" data-c1-slot="laptops" data-placeholder="Drop wireless hosts">Drop wireless hosts</button>
              <button class="c1-slot" type="button" data-c1-slot="ap" data-placeholder="Drop wireless access">Drop wireless access</button>
            </article>
            <article>
              <h4>LAN core</h4>
              <button class="c1-slot" type="button" data-c1-slot="switch" data-placeholder="Drop LAN forwarder">Drop LAN forwarder</button>
              <button class="c1-slot" type="button" data-c1-slot="server" data-placeholder="Drop shared server">Drop shared server</button>
            </article>
            <article>
              <h4>Leaving the school network</h4>
              <button class="c1-slot" type="button" data-c1-slot="router" data-placeholder="Drop boundary device">Drop boundary device</button>
              <button class="c1-slot" type="button" data-c1-slot="modem" data-placeholder="Drop ISP access">Drop ISP access</button>
              <button class="c1-slot" type="button" data-c1-slot="internet" data-placeholder="Drop public Internet">Drop public Internet</button>
            </article>
          </div>
          <div class="lab-actions">
            <button class="secondary-btn" type="button" data-c1-reset>Clear board</button>
            <button class="primary-btn" type="button" data-c1-check>Check network</button>
          </div>
        </section>
        <section data-c1-stage="packet" hidden>
          <p class="lab-help">A laptop requests a public webpage. Predict the next hop before the packet moves.</p>
          <ol class="c1-path" data-c1-path>
            ${C1_PATH.map((hop, index) => `<li data-c1-hop="${index}"><span>${index + 1}</span>${escapeHtml(hop)}</li>`).join('')}
          </ol>
          <div data-c1-predict></div>
          <div class="lab-actions">
            <button class="ghost-btn" type="button" data-c1-back-build>Back to builder</button>
          </div>
        </section>
        <section data-c1-stage="dse" hidden>
          <div data-c1-dse></div>
        </section>
        <div data-c1-feedback></div>
      </div>
    `);
  }

  function bindC1(root) {
    const lab = root.querySelector('[data-c1-lab]');
    if (!lab) return;
    const placed = {};
    let selected = null;
    let hop = 0;
    const feedback = lab.querySelector('[data-c1-feedback]');

    function setFeedback(html) {
      feedback.innerHTML = html;
    }

    function showStage(name) {
      lab.querySelectorAll('[data-c1-stage]').forEach(section => {
        section.hidden = section.dataset.c1Stage !== name;
      });
      lab.querySelectorAll('[data-c1-stage-tab]').forEach(tab => {
        tab.classList.toggle('is-active', tab.dataset.c1StageTab === name);
      });
    }

    lab.querySelectorAll('[data-c1-device]').forEach(button => {
      button.addEventListener('click', () => {
        selected = button.dataset.c1Device;
        lab.querySelectorAll('[data-c1-device]').forEach(item => {
          item.classList.toggle('active', item === button);
          item.setAttribute('aria-pressed', item === button ? 'true' : 'false');
        });
        const device = C1_DEVICES.find(item => item.id === selected);
        setFeedback(feedbackBox('info', 'Device selected', `${device.name}: ${device.role}. Now choose the matching slot.`, '', 'Ask which network the device belongs to before you place it.'));
      });
    });

    lab.querySelectorAll('[data-c1-slot]').forEach(slot => {
      slot.addEventListener('click', () => {
        if (!selected) {
          setFeedback(feedbackBox('bad', 'Choose a device first', 'Select a device in the palette, then click a slot.', '', 'Think LAN versus network boundary.'));
          return;
        }
        const message = c1WrongMessage(selected, slot.dataset.c1Slot);
        const device = C1_DEVICES.find(item => item.id === selected);
        if (message) {
          slot.classList.add('wrong');
          setFeedback(feedbackBox(
            'bad',
            'That connection teaches the wrong boundary.',
            message,
            C1_SLOTS.find(item => item.id === slot.dataset.c1Slot).hint,
            'Remove the idea of “one box does everything”. Match the role to the slot.'
          ));
          return;
        }
        placed[slot.dataset.c1Slot] = selected;
        slot.classList.remove('wrong');
        slot.classList.add('filled');
        slot.textContent = device.name;
        setFeedback(feedbackBox(
          'good',
          `${device.name} is in the right place.`,
          C1_SLOTS.find(item => item.id === slot.dataset.c1Slot).hint,
          'A switch stays inside the LAN. A router is needed to cross into another network. Modem/ONT is the ISP access role.',
          'Fill the remaining slots, then check the whole network.'
        ));
      });
    });

    lab.querySelector('[data-c1-reset]').addEventListener('click', () => {
      Object.keys(placed).forEach(key => delete placed[key]);
      lab.querySelectorAll('[data-c1-slot]').forEach(slot => {
        slot.classList.remove('filled', 'wrong');
        slot.textContent = slot.dataset.placeholder || 'Drop device';
      });
      setFeedback('');
    });

    lab.querySelector('[data-c1-check]').addEventListener('click', () => {
      const missing = C1_SLOTS.filter(slot => placed[slot.id] !== slot.accept);
      if (missing.length) {
        setFeedback(feedbackBox(
          'bad',
          'The LAN is not complete yet.',
          `Still needed: ${missing.map(item => item.label).join(', ')}.`,
          'Complete the path from hosts → LAN devices → boundary → ISP.',
          'Place the remaining roles. The NIC stays in the computer; it is not a slot on this map.'
        ));
        return;
      }
      setFeedback(feedbackBox(
        'good',
        'The school network now has clear boundaries.',
        'PCs and the server sit on the switch. Laptops join through the AP. The router is the place traffic crosses networks. The modem/ONT faces the ISP.',
        '',
        'Next: predict each hop of a laptop packet going to a public website.'
      ));
      showStage('packet');
      hop = 0;
      paintHop();
    });

    function paintHop() {
      lab.querySelectorAll('[data-c1-hop]').forEach(item => {
        const index = Number(item.dataset.c1Hop);
        item.classList.toggle('done', index < hop);
        item.classList.toggle('active', index === hop);
      });
      const predict = lab.querySelector('[data-c1-predict]');
      if (hop >= C1_PATH.length - 1) {
        predict.innerHTML = feedbackBox(
          'good',
          'Packet reached the remote website.',
          'Notice the packet used the AP and switch while still in the school, then the router when it had to leave.',
          'If the destination had been the school server, the packet would not need the modem or ISP.',
          'Answer the DSE transfer question.'
        ) + '<button class="primary-btn" type="button" data-c1-to-dse>DSE transfer</button>';
        predict.querySelector('[data-c1-to-dse]')?.addEventListener('click', showDse);
        return;
      }
      const options = global.CheckpointEngine.shuffle([
        C1_PATH[hop + 1],
        hop + 2 < C1_PATH.length ? C1_PATH[hop + 2] : 'School printer',
        hop === 0 ? 'Modem / ONT' : 'Computer-room PC'
      ]);
      predict.innerHTML = `
        <p class="lab-help">The packet is at <strong>${escapeHtml(C1_PATH[hop])}</strong>. What is the next component?</p>
        <div class="checkpoint-options">
          ${options.map(option => `<button class="checkpoint-option" type="button" data-c1-next="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join('')}
        </div>
      `;
      predict.querySelectorAll('[data-c1-next]').forEach(button => {
        button.addEventListener('click', () => {
          const answer = C1_PATH[hop + 1];
          if (button.dataset.c1Next === answer) {
            hop += 1;
            if (!reduceMotion()) {
              lab.querySelector(`[data-c1-hop="${hop}"]`)?.classList.add('pulse');
            }
            setFeedback(feedbackBox(
              'good',
              `Next hop: ${answer}.`,
              hop === 2
                ? 'After the AP, the frame is on the wired LAN, so the switch forwards it.'
                : hop === 4
                  ? 'Leaving the school network is the router’s job, not the switch’s job.'
                  : `${C1_PATH[hop - 1]} hands the packet to ${answer}.`,
              '',
              'Keep predicting. Name the boundary when the packet leaves the LAN.'
            ));
            paintHop();
          } else {
            setFeedback(feedbackBox(
              'bad',
              'That skip misses a boundary.',
              `From ${C1_PATH[hop]}, the next device is ${answer}.`,
              hop === 0
                ? 'A laptop does not jump straight to the router. It must join the LAN through the access point.'
                : 'Stay inside the LAN until the router. Do not send classroom traffic to the ISP early.',
              'Choose the next adjacent device, not the final destination.'
            ));
          }
        });
      });
    }

    function showDse() {
      showStage('dse');
      global.CheckpointEngine.mount(lab.querySelector('[data-c1-dse]'), {
        title: 'DSE transfer',
        lead: 'An unfamiliar school scenario. Apply LAN versus WAN device roles.',
        count: 3,
        filter: { chapter: 'C1' }
      });
    }

    lab.querySelector('[data-c1-back-build]').addEventListener('click', () => showStage('build'));
  }

  function makeB2Case() {
    const a = 4 + Math.floor(Math.random() * 9);
    const b = 2 + Math.floor(Math.random() * 8);
    return {
      memory: { 40: a, 41: b, 42: 0, 100: 'LOAD 40', 101: 'ADD 41', 102: 'STORE 42', 103: 'HALT' },
      a,
      b,
      sum: a + b
    };
  }

  function b2Steps(data) {
    return [
      { phase: 'FETCH', title: 'PC holds the address of the next instruction', pc: 100, mar: '—', mdr: '—', cir: '—', acc: 0, mem42: 0, bus: 'pc', ask: 'Which register currently knows where the next instruction is?', options: ['PC', 'ACC', 'ALU'], answer: 'PC', why: 'The program counter stores the address of the next instruction in memory.' },
      { phase: 'FETCH', title: 'Address bus copies PC into MAR', pc: 100, mar: 100, mdr: '—', cir: '—', acc: 0, mem42: 0, bus: 'address', ask: 'Which bus carries the memory location 100?', options: ['Address bus', 'Data bus', 'Power cable'], answer: 'Address bus', why: 'The address bus identifies the memory location. The data bus will later carry the instruction itself.' },
      { phase: 'FETCH', title: 'Memory returns the instruction on the data bus into MDR', pc: 100, mar: 100, mdr: 'LOAD 40', cir: '—', acc: 0, mem42: 0, bus: 'data', ask: 'What has just been copied from memory?', options: ['The instruction LOAD 40', 'The final sum', 'The hard-disk file name'], answer: 'The instruction LOAD 40', why: 'FETCH reads the instruction from main memory, not the result of the program.' },
      { phase: 'FETCH', title: 'Instruction moves into CIR and PC increases', pc: 101, mar: 100, mdr: 'LOAD 40', cir: 'LOAD 40', acc: 0, mem42: 0, bus: 'internal', ask: 'Why does PC become 101?', options: ['So the next FETCH will use the following instruction', 'Because RAM was deleted', 'Because the ALU already added'], answer: 'So the next FETCH will use the following instruction', why: 'After fetching, the PC points at the next instruction. DECODE/EXECUTE still use the current CIR.' },
      { phase: 'DECODE', title: 'Control unit interprets LOAD 40', pc: 101, mar: 100, mdr: 'LOAD 40', cir: 'LOAD 40', acc: 0, mem42: 0, bus: 'control', ask: 'Which component decides that this instruction means “copy memory[40] into ACC”?', options: ['Control unit', 'Speaker', 'Modem'], answer: 'Control unit', why: 'DECODE is the control unit’s job. The ALU is not yet doing arithmetic.' },
      { phase: 'EXECUTE', title: 'LOAD uses address 40 and copies the value into ACC', pc: 101, mar: 40, mdr: data.a, cir: 'LOAD 40', acc: data.a, mem42: 0, bus: 'data', ask: 'Where is the value now stored for later arithmetic?', options: ['ACC', 'PC', 'Printer'], answer: 'ACC', why: 'LOAD places a memory value into the accumulator. The ALU is not adding yet.' },
      { phase: 'FETCH', title: 'Next FETCH reads ADD 41', pc: 102, mar: 101, mdr: 'ADD 41', cir: 'ADD 41', acc: data.a, mem42: 0, bus: 'data', ask: 'What changes next in EXECUTE for ADD?', options: ['ALU adds memory[41] to ACC', 'PC is formatted', 'The monitor resolution doubles'], answer: 'ALU adds memory[41] to ACC', why: 'ADD is an execute-stage arithmetic operation. The ALU uses ACC and the value from memory.' },
      { phase: 'EXECUTE', title: 'ALU adds; ACC holds the sum', pc: 102, mar: 41, mdr: data.b, cir: 'ADD 41', acc: data.sum, mem42: 0, bus: 'alu', ask: 'Which component performed the addition?', options: ['ALU', 'Address bus', 'Optical drive'], answer: 'ALU', why: 'The arithmetic logic unit performs ADD. Buses only carry values; they do not add.' },
      { phase: 'EXECUTE', title: 'STORE writes ACC back to memory[42]', pc: 103, mar: 42, mdr: data.sum, cir: 'STORE 42', acc: data.sum, mem42: data.sum, bus: 'data', ask: 'What now holds the result persistently in main memory?', options: ['Memory address 42', 'The control unit fan', 'The ISP'], answer: 'Memory address 42', why: 'STORE copies ACC to a memory address. That is still main memory, not a disk file.' }
    ];
  }

  function renderB2(activity) {
    const data = makeB2Case();
    return global.makeActivityShell(activity, `
      <div class="lab-shell b2-lab" data-b2-lab data-a="${data.a}" data-b="${data.b}">
        <p class="lab-scenario">Trace one HKDSE-level program in memory: LOAD the value at address 40, ADD the value at address 41, STORE the result at address 42. Predict what changes before each step.</p>
        <div class="b2-board">
          <article>
            <h4>Memory</h4>
            <table class="b2-memory">
              <thead><tr><th>Address</th><th>Contents</th></tr></thead>
              <tbody data-b2-memory></tbody>
            </table>
          </article>
          <article>
            <h4>CPU</h4>
            <div class="b2-cpu">
              <div data-b2-reg="pc"><span>PC</span><strong>—</strong></div>
              <div data-b2-reg="mar"><span>MAR</span><strong>—</strong></div>
              <div data-b2-reg="mdr"><span>MDR</span><strong>—</strong></div>
              <div data-b2-reg="cir"><span>CIR</span><strong>—</strong></div>
              <div data-b2-reg="acc"><span>ACC</span><strong>—</strong></div>
              <div class="b2-alu" data-b2-alu>ALU idle</div>
              <div class="b2-cu" data-b2-cu>Control unit idle</div>
            </div>
          </article>
          <article>
            <h4>Buses</h4>
            <ul class="b2-buses">
              <li data-b2-bus="address">Address bus</li>
              <li data-b2-bus="data">Data bus</li>
              <li data-b2-bus="control">Control bus</li>
            </ul>
            <p class="small-label" data-b2-phase>Ready</p>
          </article>
        </div>
        <div data-b2-ask></div>
        <div class="lab-actions">
          <button class="ghost-btn" type="button" data-b2-reset>Reset</button>
          <button class="secondary-btn" type="button" data-b2-new>New values</button>
        </div>
        <div data-b2-dse></div>
        <div data-b2-feedback></div>
      </div>
    `);
  }

  function bindB2(root) {
    const lab = root.querySelector('[data-b2-lab]');
    if (!lab) return;
    let data = { a: Number(lab.dataset.a), b: Number(lab.dataset.b), sum: Number(lab.dataset.a) + Number(lab.dataset.b), memory: { 40: Number(lab.dataset.a), 41: Number(lab.dataset.b), 42: 0, 100: 'LOAD 40', 101: 'ADD 41', 102: 'STORE 42', 103: 'HALT' } };
    let steps = b2Steps(data);
    let index = 0;
    let waiting = true;

    function paintState(step) {
      lab.querySelector('[data-b2-memory]').innerHTML = [40, 41, 42, 100, 101, 102, 103].map(addr => `
        <tr class="${String(step.mar) === String(addr) ? 'active' : ''}">
          <td>${addr}</td>
          <td>${addr === 42 ? step.mem42 : addr === 40 ? data.a : addr === 41 ? data.b : data.memory[addr]}</td>
        </tr>
      `).join('');
      ['pc', 'mar', 'mdr', 'cir', 'acc'].forEach(name => {
        lab.querySelector(`[data-b2-reg="${name}"] strong`).textContent = step[name];
      });
      lab.querySelectorAll('[data-b2-bus]').forEach(item => {
        item.classList.toggle('active', item.dataset.b2Bus === step.bus);
      });
      lab.querySelector('[data-b2-phase]').textContent = `${step.phase}: ${step.title}`;
      lab.querySelector('[data-b2-alu]').textContent = step.bus === 'alu' ? `ALU: ${data.a} + ${data.b} = ${data.sum}` : 'ALU idle';
      lab.querySelector('[data-b2-cu]').textContent = step.phase === 'DECODE' ? `CU: ${step.cir}` : step.phase === 'FETCH' ? 'CU: waiting for instruction' : 'CU: directing execute';
    }

    function ask() {
      const step = steps[index];
      paintState(step);
      const askBox = lab.querySelector('[data-b2-ask]');
      const options = global.CheckpointEngine.shuffle(step.options);
      askBox.innerHTML = `
        <p class="lab-help"><strong>${escapeHtml(step.phase)}</strong> — ${escapeHtml(step.ask)}</p>
        <div class="checkpoint-options">
          ${options.map(option => `<button class="checkpoint-option" type="button" data-b2-choice="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join('')}
        </div>
      `;
      askBox.querySelectorAll('[data-b2-choice]').forEach(button => {
        button.addEventListener('click', () => {
          if (!waiting) return;
          const correct = button.dataset.b2Choice === step.answer;
          lab.querySelector('[data-b2-feedback]').innerHTML = feedbackBox(
            correct ? 'good' : 'bad',
            correct ? 'That matches the cycle.' : 'Not quite.',
            correct ? step.why : `${step.why} The expected answer is ${step.answer}.`,
            'FETCH copies an instruction from memory. DECODE is the control unit. EXECUTE is when the ALU or a memory write happens.',
            index < steps.length - 1 ? 'Continue to the next micro-step.' : 'Finish with a DSE interpretation set.'
          );
          if (!correct) return;
          waiting = false;
          index += 1;
          if (index >= steps.length) {
            global.CheckpointEngine.mount(lab.querySelector('[data-b2-dse]'), {
              title: 'DSE transfer',
              lead: 'Interpret the cycle, buses and memory — not brand names.',
              count: 3,
              filter: { chapter: 'B2' }
            });
            return;
          }
          waiting = true;
          ask();
        });
      });
    }

    function reset(newValues) {
      data = newValues ? makeB2Case() : data;
      if (newValues) {
        lab.dataset.a = data.a;
        lab.dataset.b = data.b;
      }
      data.sum = data.a + data.b;
      data.memory = { 40: data.a, 41: data.b, 42: 0, 100: 'LOAD 40', 101: 'ADD 41', 102: 'STORE 42', 103: 'HALT' };
      steps = b2Steps(data);
      index = 0;
      waiting = true;
      lab.querySelector('[data-b2-dse]').innerHTML = '';
      lab.querySelector('[data-b2-feedback]').innerHTML = '';
      ask();
    }

    lab.querySelector('[data-b2-reset]').addEventListener('click', () => reset(false));
    lab.querySelector('[data-b2-new]').addEventListener('click', () => reset(true));
    ask();
  }

  function renderC3(activity) {
    return global.makeActivityShell(activity, `
      <div class="lab-shell c3-lab" data-c3-lab>
        <p class="lab-scenario">A video is consumed at its <strong>bitrate</strong>. The network delivers data at its <strong>throughput</strong>. The buffer stores spare seconds of video. A slowdown can start after 3 seconds. Watch whether the buffer grows, drains, or empties (playback pauses).</p>
        <div class="c3-controls">
          <label>Media bitrate <span data-c3-bitrate-val>4</span> Mbps
            <input type="range" min="2" max="10" step="0.5" value="4" data-c3-bitrate>
          </label>
          <label>Network throughput <span data-c3-through-val>6</span> Mbps
            <input type="range" min="1" max="12" step="0.5" value="6" data-c3-through>
          </label>
          <label>Starting buffer <span data-c3-start-val>4</span> s
            <input type="range" min="0" max="10" step="0.5" value="4" data-c3-start>
          </label>
          <label>Slowdown duration <span data-c3-slow-val>3</span> s
            <input type="range" min="0" max="12" step="0.5" value="3" data-c3-slow>
          </label>
        </div>
        <div class="c3-visual" aria-live="polite">
          <div class="c3-pipe">
            <span data-c3-in>In 6 Mbps</span>
            <div class="c3-tank">
              <div class="c3-water" data-c3-water style="height:40%"></div>
              <strong data-c3-level>4.0 s</strong>
            </div>
            <span data-c3-out>Play 4 Mbps</span>
          </div>
          <p class="c3-status" data-c3-status>Throughput is higher than bitrate, so the buffer can grow — until a slowdown starts.</p>
          <p class="c3-clock" data-c3-clock>t = 0.0 s · playing</p>
        </div>
        <div class="lab-actions">
          <button class="primary-btn" type="button" data-c3-play>Play 12 seconds</button>
          <button class="ghost-btn" type="button" data-c3-pause>Pause</button>
          <button class="secondary-btn" type="button" data-c3-stall>Try a stall case</button>
        </div>
        <div data-c3-dse></div>
        <div data-c3-feedback></div>
      </div>
    `);
  }

  function bindC3(root) {
    const lab = root.querySelector('[data-c3-lab]');
    if (!lab) return;
    let timer = null;
    let t = 0;
    let buffer = 4;
    let playing = true;
    let stalledOnce = false;

    function nums() {
      return {
        bitrate: Number(lab.querySelector('[data-c3-bitrate]').value),
        throughput: Number(lab.querySelector('[data-c3-through]').value),
        start: Number(lab.querySelector('[data-c3-start]').value),
        slow: Number(lab.querySelector('[data-c3-slow]').value)
      };
    }

    function paintLabels() {
      const n = nums();
      lab.querySelector('[data-c3-bitrate-val]').textContent = n.bitrate;
      lab.querySelector('[data-c3-through-val]').textContent = n.throughput;
      lab.querySelector('[data-c3-start-val]').textContent = n.start;
      lab.querySelector('[data-c3-slow-val]').textContent = n.slow;
    }

    function effectiveThroughput(n) {
      if (t >= 3 && t < 3 + n.slow) return Math.max(0.5, n.throughput * 0.35);
      return n.throughput;
    }

    function tick() {
      const n = nums();
      const incoming = effectiveThroughput(n);
      const dt = 0.25;
      if (playing) {
        buffer += (incoming - n.bitrate) * dt / n.bitrate;
      } else {
        buffer += incoming * dt / n.bitrate;
      }
      if (buffer < 0) buffer = 0;
      if (buffer > 12) buffer = 12;
      if (playing && buffer <= 0.05) {
        playing = false;
        stalledOnce = true;
        buffer = 0;
      }
      if (!playing && buffer >= 1.2) playing = true;
      const height = Math.max(4, Math.min(100, (buffer / 10) * 100));
      lab.querySelector('[data-c3-water]').style.height = `${height}%`;
      lab.querySelector('[data-c3-level]').textContent = `${buffer.toFixed(1)} s`;
      lab.querySelector('[data-c3-in]').textContent = `In ${incoming.toFixed(1)} Mbps`;
      lab.querySelector('[data-c3-out]').textContent = playing ? `Play ${n.bitrate} Mbps` : 'Paused (buffer empty)';
      lab.querySelector('[data-c3-clock]').textContent = `t = ${t.toFixed(1)} s · ${playing ? 'playing' : 'buffering'}`;
      let status;
      if (!playing) status = 'Throughput has been too low for too long. The buffer emptied, so playback pauses until enough data arrives.';
      else if (incoming > n.bitrate) status = 'Throughput is higher than bitrate, so the buffer can grow.';
      else if (incoming < n.bitrate) status = 'Throughput is temporarily lower than bitrate, so the buffer decreases. Playback continues while spare seconds remain.';
      else status = 'Throughput equals bitrate, so the buffer stays about the same.';
      lab.querySelector('[data-c3-status]').textContent = status;
      t += dt;
      if (t >= 12) {
        stop();
        lab.querySelector('[data-c3-feedback]').innerHTML = feedbackBox(
          stalledOnce ? 'bad' : 'good',
          stalledOnce ? 'Playback had to pause.' : 'Playback survived the 12 seconds.',
          stalledOnce
            ? 'When arrival stays below consumption, stored buffer is used up. An empty buffer is a stall, not a “broken video file”.'
            : 'A short dip is what buffering is for. The stall appears only if the shortage lasts long enough to empty the tank.',
          'throughput > bitrate → grow. temporary throughput < bitrate → drain. persistent shortage → pause.',
          'Change one slider and run again, then answer the DSE set.'
        );
        global.CheckpointEngine.mount(lab.querySelector('[data-c3-dse]'), {
          title: 'DSE transfer',
          lead: 'Apply bitrate, throughput and buffering to an unfamiliar streaming scenario.',
          count: 3,
          filter: { chapter: 'C3' }
        });
      }
    }

    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    function play() {
      stop();
      const n = nums();
      t = 0;
      buffer = n.start;
      playing = buffer > 0;
      stalledOnce = false;
      lab.querySelector('[data-c3-dse]').innerHTML = '';
      const delay = reduceMotion() ? 80 : 220;
      timer = setInterval(tick, delay);
      tick();
    }

    lab.querySelectorAll('input[type="range"]').forEach(input => input.addEventListener('input', paintLabels));
    lab.querySelector('[data-c3-play]').addEventListener('click', play);
    lab.querySelector('[data-c3-pause]').addEventListener('click', stop);
    lab.querySelector('[data-c3-stall]').addEventListener('click', () => {
      lab.querySelector('[data-c3-bitrate]').value = 8;
      lab.querySelector('[data-c3-through]').value = 3;
      lab.querySelector('[data-c3-start]').value = 2;
      lab.querySelector('[data-c3-slow]').value = 8;
      paintLabels();
      play();
    });
    paintLabels();
  }

  const C4_PRESETS = {
    heading: '<h1>School Open Day</h1>\n<p>Welcome to the ICT room.</p>',
    paragraph: '<h2>Notice</h2>\n<p>Bring your <strong>student card</strong> to the computer room.</p>',
    link: '<p>Read the <a href="https://www.hkeaa.edu.hk">HKEAA website</a>.</p>',
    image: '<p>School logo:</p>\n<img src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'140\' height=\'48\'%3E%3Crect fill=\'%232458e6\' width=\'140\' height=\'48\' rx=\'8\'/%3E%3Ctext x=\'70\' y=\'30\' fill=\'white\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'16\'%3ELOGO%3C/text%3E%3C/svg%3E" alt="School logo">',
    list: '<h2>Bring</h2>\n<ul>\n  <li>Student card</li>\n  <li>Headphones</li>\n</ul>',
    table: '<table>\n  <tr><th>Room</th><th>PCs</th></tr>\n  <tr><td>C201</td><td>24</td></tr>\n</table>'
  };

  const C4_ALLOWED = new Set(['H1', 'H2', 'H3', 'P', 'A', 'IMG', 'UL', 'OL', 'LI', 'TABLE', 'TR', 'TD', 'TH', 'BR', 'STRONG', 'EM', 'B', 'I']);

  function sanitizeHtml(html) {
    const doc = new DOMParser().parseFromString(`<div>${html}</div>`, 'text/html');
    function clean(node) {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === 1) {
          if (!C4_ALLOWED.has(child.tagName)) {
            child.replaceWith(...child.childNodes);
            return;
          }
          [...child.attributes].forEach(attr => {
            const name = attr.name.toLowerCase();
            const ok = (child.tagName === 'A' && name === 'href')
              || (child.tagName === 'IMG' && (name === 'src' || name === 'alt' || name === 'title'))
              || name === 'title';
            if (!ok) child.removeAttribute(attr.name);
            if ((name === 'href' || name === 'src') && /^\s*javascript:/i.test(attr.value)) child.removeAttribute(attr.name);
          });
          clean(child);
        } else if (child.nodeType !== 3) {
          child.remove();
        }
      });
    }
    const wrap = doc.body.firstChild;
    if (!wrap) return '';
    clean(wrap);
    return wrap.innerHTML;
  }

  function renderC4Html(activity) {
    return global.makeActivityShell(activity, `
      <div class="lab-shell c4-lab" data-c4-html>
        <p class="lab-scenario">Edit only syllabus-level HTML: headings, paragraphs, links, images, lists and tables. The preview updates as you type. This is not a full website IDE.</p>
        <div class="c4-html-grid">
          <div>
            <div class="c4-presets">
              ${Object.keys(C4_PRESETS).map(key => `<button class="ghost-btn" type="button" data-c4-preset="${key}">${key}</button>`).join('')}
            </div>
            <label>
              <span>HTML snippet</span>
              <textarea data-c4-source rows="12" spellcheck="false">${C4_PRESETS.heading}</textarea>
            </label>
          </div>
          <div>
            <p class="small-label">Live result</p>
            <iframe class="c4-preview" data-c4-preview title="HTML preview" sandbox></iframe>
            <p class="lab-help" data-c4-note>A heading uses h1–h3. Paragraphs use p. Change a tag and watch the preview.</p>
          </div>
        </div>
        <div data-c4-feedback></div>
      </div>
    `);
  }

  function bindC4Html(root) {
    const lab = root.querySelector('[data-c4-html]');
    if (!lab) return;
    const source = lab.querySelector('[data-c4-source]');
    const preview = lab.querySelector('[data-c4-preview]');
    const note = lab.querySelector('[data-c4-note]');

    function update() {
      const clean = sanitizeHtml(source.value);
      preview.srcdoc = `<!DOCTYPE html><html><head><style>body{font-family:sans-serif;padding:12px;color:#102033}img{max-width:160px}table{border-collapse:collapse}td,th{border:1px solid #ccc;padding:6px}</style></head><body>${clean}</body></html>`;
      if (/<a /i.test(clean) && !/href=/i.test(clean)) note.textContent = 'A link needs href. Without it, the browser does not know the destination.';
      else if (/<img /i.test(clean) && !/alt=/i.test(clean)) note.textContent = 'Add alt text so the image has a text equivalent if it cannot be seen.';
      else if (/<img /i.test(clean) && /href=/i.test(clean) && !/src=/i.test(clean)) note.textContent = 'Images use src for the file path. href is for links.';
      else if (/<table/i.test(clean)) note.textContent = 'Tables use tr for rows and td/th for cells. Keep school tables simple.';
      else note.textContent = 'The preview shows only allowed tags. Scripts and extra attributes are removed.';
    }

    source.addEventListener('input', update);
    lab.querySelectorAll('[data-c4-preset]').forEach(button => {
      button.addEventListener('click', () => {
        source.value = C4_PRESETS[button.dataset.c4Preset];
        update();
        lab.querySelector('[data-c4-feedback]').innerHTML = feedbackBox(
          'info',
          `Loaded ${button.dataset.c4Preset} example`,
          'Change one tag or attribute and describe what the preview did.',
          '',
          'Then open the Relative Path Explorer for ../ and folder/.'
        );
      });
    });
    update();
  }

  const C4_TREES = [
    {
      id: 'site-a',
      title: 'School website folders',
      diagram: 'site/\n  index.html\n  images/\n    logo.png\n    banner.jpg\n  pages/\n    news.html\n    about.html\n  css/\n    style.css',
      nodes: {
        'index.html': [],
        'images/logo.png': ['images'],
        'images/banner.jpg': ['images'],
        'pages/news.html': ['pages'],
        'pages/about.html': ['pages'],
        'css/style.css': ['css']
      }
    },
    {
      id: 'site-b',
      title: 'Club website folders',
      diagram: 'club/\n  home.html\n  media/\n    photo.jpg\n  events/\n    camp.html\n    timetable.html',
      nodes: {
        'home.html': [],
        'media/photo.jpg': ['media'],
        'events/camp.html': ['events'],
        'events/timetable.html': ['events']
      }
    }
  ];

  function folderOf(pathParts) {
    return pathParts.slice(0, -1);
  }

  function relativePath(fromFile, toFile, nodes) {
    const fromDirs = folderOf(nodes[fromFile].concat(fromFile.split('/').slice(-1)));
    const toParts = nodes[toFile].concat(toFile.split('/').slice(-1));
    const toDirs = toParts.slice(0, -1);
    const fileName = toParts[toParts.length - 1];
    let i = 0;
    while (i < fromDirs.length && i < toDirs.length && fromDirs[i] === toDirs[i]) i += 1;
    const up = fromDirs.length - i;
    const down = toDirs.slice(i);
    return `${'../'.repeat(up)}${down.length ? `${down.join('/')}/` : ''}${fileName}`;
  }

  function renderC4Path(activity) {
    const tree = pick(C4_TREES);
    const files = Object.keys(tree.nodes);
    let from = pick(files);
    let to = pick(files.filter(item => item !== from));
    const answer = relativePath(from, to, tree.nodes);
    return global.makeActivityShell(activity, `
      <div class="lab-shell c4-path-lab" data-c4-path data-answer="${escapeHtml(answer)}" data-from="${escapeHtml(from)}" data-to="${escapeHtml(to)}">
        <p class="lab-scenario"><strong>${escapeHtml(tree.title)}</strong> The folder structure below is complete and unambiguous. You are editing <code>${escapeHtml(from)}</code> and must reach <code>${escapeHtml(to)}</code>.</p>
        <pre class="c4-tree" aria-label="Folder structure">${escapeHtml(tree.diagram)}</pre>
        <p class="lab-help">Build the relative path with tokens. <code>../</code> climbs to the parent folder. <code>folder/</code> enters a child folder.</p>
        <div class="c4-tokens">
          <button type="button" data-c4-token="../">../ parent</button>
          ${[...new Set(Object.values(tree.nodes).flat())].map(folder => `<button type="button" data-c4-token="${escapeHtml(folder)}/">${escapeHtml(folder)}/</button>`).join('')}
          ${files.map(file => `<button type="button" data-c4-token="${escapeHtml(file.split('/').pop())}">${escapeHtml(file.split('/').pop())}</button>`).join('')}
        </div>
        <p class="c4-built">Path: <code data-c4-built></code></p>
        <ol class="c4-walk" data-c4-walk></ol>
        <div class="lab-actions">
          <button class="ghost-btn" type="button" data-c4-undo>Undo</button>
          <button class="primary-btn" type="button" data-c4-check-path>Check path</button>
          <button class="secondary-btn" type="button" data-c4-new-path>New pair</button>
        </div>
        <div data-c4-path-dse></div>
        <div data-c4-path-feedback></div>
      </div>
    `);
  }

  function bindC4Path(root) {
    const lab = root.querySelector('[data-c4-path]');
    if (!lab) return;
    const parts = [];

    function paint() {
      lab.querySelector('[data-c4-built]').textContent = parts.join('') || '(empty)';
      const walk = [];
      parts.forEach(token => {
        if (token === '../') walk.push('Move to the parent folder');
        else if (token.endsWith('/')) walk.push(`Enter folder ${token}`);
        else walk.push(`Select file ${token}`);
      });
      lab.querySelector('[data-c4-walk]').innerHTML = walk.map(item => `<li>${escapeHtml(item)}</li>`).join('');
    }

    lab.querySelectorAll('[data-c4-token]').forEach(button => {
      button.addEventListener('click', () => {
        parts.push(button.dataset.c4Token);
        paint();
      });
    });
    lab.querySelector('[data-c4-undo]').addEventListener('click', () => {
      parts.pop();
      paint();
    });
    lab.querySelector('[data-c4-check-path]').addEventListener('click', () => {
      const built = parts.join('');
      const answer = lab.dataset.answer;
      const correct = built === answer || built.replace(/^\.\//, '') === answer;
      lab.querySelector('[data-c4-path-feedback]').innerHTML = feedbackBox(
        correct ? 'good' : 'bad',
        correct ? 'That relative path matches the tree.' : 'The path does not match this folder structure.',
        correct
          ? `${lab.dataset.from} reaches ${lab.dataset.to} with ${answer}.`
          : `From ${lab.dataset.from}, the correct path is ${answer}. Count how many folders you must climb before entering the target folder.`,
        '../ = parent folder. folder/ = child folder. Filenames do not include a guessed website root unless the file is already there.',
        'Generate another pair so the same numbers never become a memorised trick.'
      );
      if (correct) {
        global.CheckpointEngine.mount(lab.querySelector('[data-c4-path-dse]'), {
          title: 'DSE transfer',
          lead: 'Repair paths and attributes from an unfamiliar folder tree.',
          count: 3,
          filter: { chapter: 'C4' }
        });
      }
    });
    lab.querySelector('[data-c4-new-path]').addEventListener('click', () => {
      const stage = document.getElementById('activityStage');
      if (!stage) return;
      stage.innerHTML = renderC4Path({
        mode: 'c4Path',
        title: 'Relative Path Explorer',
        status: 'Available now',
        goal: 'Build a relative path from a stated folder tree.',
        misconception: 'Relative paths start from the current file’s folder, not from a guessed website root.',
        challenge: 'Use ../ and folder names until the target file is reached.',
        transfer: 'DSE transfer: repair a broken image or link using the given tree.'
      });
      bindC4Path(stage);
    });
    paint();
  }

  const MODE_RENDERERS = {
    c1Network: renderC1,
    b2Fde: renderB2,
    c3Stream: renderC3,
    c4Html: renderC4Html,
    c4Path: renderC4Path
  };

  const MODE_BINDERS = {
    c1Network: bindC1,
    b2Fde: bindB2,
    c3Stream: bindC3,
    c4Html: bindC4Html,
    c4Path: bindC4Path
  };

  global.ActivityLabs = {
    render(activity) {
      const fn = MODE_RENDERERS[activity.mode];
      return fn ? fn(activity) : '';
    },
    bind(activity) {
      const stage = document.getElementById('activityStage');
      const fn = MODE_BINDERS[activity.mode];
      if (stage && fn) fn(stage);
    },
    modes: Object.keys(MODE_RENDERERS)
  };
})(window);
