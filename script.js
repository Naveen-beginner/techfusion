/**
 * TECHFUSION 2026 — Flagship CSE & IoT Event Platform
 * Official Technical Symposium of INNOVEX 2026
 * R.V.R. & J.C. College of Engineering (Autonomous), Guntur
 */

// =============================================================================
// 1. CENTRAL GOOGLE FORMS & FESTIVAL CONFIGURATION
// Organizers: Update your Google Form URLs and festival details here!
// =============================================================================

const eventForms = {
  // Google Form URLs for each of the 3 events
  event1: "https://forms.gle/techfusion-event1-placeholder",
  event2: "https://forms.gle/techfusion-event2-placeholder",
  event3: "https://forms.gle/techfusion-event3-placeholder"
};

const FESTIVAL_CONFIG = {
  name: "TECHFUSION",
  parentFest: "INNOVEX 2026",
  college: "R.V.R. & J.C. College of Engineering",
  department: "Department of CSE & IoT",
  eventDateDisplay: "9th October 2026",
  countdownTarget: "2026-10-09T09:00:00+05:30",
  innovexUrl: "https://rvrjcce.ac.in/innovex2026/"
};

// =============================================================================
// 2. CENTRAL EVENTS DATA ARCHITECTURE (3 FLAGSHIP EVENTS)
// Easily customize event names, tasks, rules, and details below.
// =============================================================================

const eventsData = [
  {
    id: 1,
    number: "EVENT 01",
    theme: "cyan",
    category: "TECH / DEVELOPMENT",
    title: "[EVENT 1 NAME] CODE MATRIX",
    badgeLabel: "FLAGSHIP HACKATHON",
    image: "assets/event1.svg",
    shortDesc: "A high-intensity coding and problem-solving odyssey testing algorithmic logic, full-stack architecture, and real-time execution.",
    about: "CODE MATRIX is the premier software engineering challenge of TechFusion 2026. Participants will navigate multi-stage coding hurdles, algorithmic optimization rounds, and build functional digital prototypes solving real-world challenges.",
    task: "[REPLACE WITH ACTUAL TASK] Build an end-to-end software solution or intelligent web service that streamlines campus workflows, disaster alerting, or community assistance using modern frameworks and APIs.",
    rules: [
      "Rule 1: All development must be initiated and completed strictly within the scheduled event hours.",
      "Rule 2: Git version control is mandatory. Repositories must be made public with frequent commit logs.",
      "Rule 3: Use of third-party open-source libraries is permitted, but core application logic must be original.",
      "Rule 4: Plagiarism or pre-existing templates will result in immediate disqualification.",
      "Rule 5: The decision of the faculty judging panel will be final and binding."
    ],
    requirements: [
      "Requirement 1: Valid College ID card is mandatory for all team members.",
      "Requirement 2: Each team must bring at least one personal laptop with pre-installed development tools.",
      "Requirement 3: Active GitHub account for project submission and evaluation."
    ],
    teamSize: "2 - 3 Members",
    eligibility: "Open to B.Tech / MCA / M.Tech students of CSE, IoT, IT, AI&ML, and allied disciplines.",
    date: "9th October 2026",
    time: "10:00 AM - 04:00 PM",
    venue: "CSE Central Lab 3 & 4 (Silver Jubilee Block)",
    entryFee: "FREE (No Registration Fee)",
    prizes: "Cash Awards & Mementos for Top 3 Teams + Merit Certificates for all participants",
    formUrl: eventForms.event1
  },
  {
    id: 2,
    number: "EVENT 02",
    theme: "purple",
    category: "INNOVATION / PROBLEM SOLVING",
    title: "[EVENT 2 NAME] ALGOQUEST",
    badgeLabel: "AI & ALGORITHMIC SPRINT",
    image: "assets/event2.svg",
    shortDesc: "Tackle complex algorithmic riddles, mathematical models, and machine learning challenges under tight constraints.",
    about: "ALGOQUEST is designed for logical thinkers, competitive programmers, and AI enthusiasts. Teams will be tested on data structures, optimization techniques, heuristic problem solving, and designing smart automated solutions for unstructured problems.",
    task: "[REPLACE WITH ACTUAL TASK] Implement an optimal algorithmic pipeline to process dynamic streaming sensor datasets and detect predictive anomalies with minimal latency.",
    rules: [
      "Rule 1: Programming languages allowed: C, C++, Java, Python.",
      "Rule 2: Competitive rounds will be hosted on an isolated judging platform with automated test suites.",
      "Rule 3: Solutions will be scored on correctness, time complexity, and memory efficiency.",
      "Rule 4: Internet access may be restricted to designated documentation mirrors during specific rounds.",
      "Rule 5: In case of tiebreaks, submission timestamp and code quality will decide the winner."
    ],
    requirements: [
      "Requirement 1: Valid College ID card must be presented at the registration desk.",
      "Requirement 2: Laptops with required compilers / interpreters (GCC, Python 3.x, JDK) configured.",
      "Requirement 3: Pen & scratch paper will be provided at the venue."
    ],
    teamSize: "2 Members (or Solo)",
    eligibility: "Open to all undergraduate engineering students with an interest in algorithms & AI.",
    date: "9th October 2026",
    time: "10:30 AM - 03:30 PM",
    venue: "IoT Innovation Laboratory (Ground Floor)",
    entryFee: "FREE (No Registration Fee)",
    prizes: "Exciting Cash Prizes for Top Performers + Official INNOVEX Certificates",
    formUrl: eventForms.event2
  },
  {
    id: 3,
    number: "EVENT 03",
    theme: "emerald",
    category: "CREATIVE / WEB & IoT",
    title: "[EVENT 3 NAME] WEBFORGE & SMART SYSTEMS",
    badgeLabel: "HARDWARE & WEB EXPO",
    image: "assets/event3.svg",
    shortDesc: "Design next-gen interactive user interfaces, connected IoT prototypes, or smart embedded gadgets with intuitive dashboards.",
    about: "WEBFORGE & SMART SYSTEMS is a creative showdown bridging hardware and software. Whether you specialize in sleek UI/UX design, real-time WebSockets, microcontrollers, or responsive cloud interfaces, this is your canvas to craft futuristic technology.",
    task: "[REPLACE WITH ACTUAL TASK] Develop an interactive smart dashboard interface connected to simulated or physical IoT telemetry (sensors, actuators, or MQTT brokers) delivering real-time user insights.",
    rules: [
      "Rule 1: Teams can submit either pure web applications or hybrid web-plus-hardware prototypes.",
      "Rule 2: UI evaluation will be based on responsiveness, visual aesthetics, accessibility, and micro-interactions.",
      "Rule 3: For hardware entries, teams are encouraged to bring their own microcontroller boards (ESP32, Arduino, Raspberry Pi).",
      "Rule 4: Teams will be given 7 minutes to present their live working demo to the judges.",
      "Rule 5: All assets must be credited appropriately."
    ],
    requirements: [
      "Requirement 1: College ID Card for verification.",
      "Requirement 2: Laptops, development boards, sensors, and connecting cables.",
      "Requirement 3: Working demo hosted locally or deployed to a free cloud staging platform (Vercel, Netlify, etc.)."
    ],
    teamSize: "2 - 4 Members",
    eligibility: "Open to curious creators across all engineering streams and semesters.",
    date: "9th October 2026",
    time: "11:00 AM - 04:30 PM",
    venue: "CSE Seminar Hall 1 & Hardware Lab",
    entryFee: "FREE (No Registration Fee)",
    prizes: "Cash Awards for Best Innovation, Best UI/UX + Participation Certificates",
    formUrl: eventForms.event3
  }
];

// =============================================================================
// 3. ZERO-DEPENDENCY VECTOR ICON SYSTEM (100% RELIABLE OFFLINE & LOCAL)
// =============================================================================

const ICONS = {
  bullhorn: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`,
  arrowLeft: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
  arrowRight: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  arrowDown: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>`,
  bolt: `<svg class="tf-icon" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  bars: `<svg class="tf-icon" viewBox="0 0 24 24"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  xmark: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  calendar: `<svg class="tf-icon" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>`,
  checkCircle: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  compass: `<svg class="tf-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  code: `<svg class="tf-icon" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  timeline: `<svg class="tf-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><line x1="3" x2="9" y1="12" y2="12"/><line x1="15" x2="21" y1="12" y2="12"/></svg>`,
  clock: `<svg class="tf-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  microphone: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
  laptop: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55A1 1 0 0 1 20.38 20H3.62a1 1 0 0 1-.9-1.45L4 16"/><path d="m10 9-2 2 2 2"/><path d="m14 9 2 2-2 2"/></svg>`,
  utensils: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" x2="6" y1="1" y2="4"/><line x1="10" x2="10" y1="1" y2="4"/><line x1="14" x2="14" y1="1" y2="4"/></svg>`,
  award: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
  userTie: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>`,
  chalkboardUser: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>`,
  userGear: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  graduationCap: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>`,
  phone: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  info: `<svg class="tf-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
  target: `<svg class="tf-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  listCheck: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  toolbox: `<svg class="tf-icon" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  calendarCheck: `<svg class="tf-icon" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>`,
  shield: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  externalLink: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  users: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  ticket: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>`,
  instagram: `<svg class="tf-icon" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
  youtube: `<svg class="tf-icon" viewBox="0 0 24 24"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/></svg>`,
  twitter: `<svg class="tf-icon tf-icon-fill" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
};

/**
 * Automatically converts any FontAwesome <i> tags to inline SVGs
 * to ensure 100% reliable rendering offline, on file://, or on restricted networks.
 */
function replaceFaWithSvg() {
  const iconClassMap = {
    "fa-bullhorn": ICONS.bullhorn,
    "fa-arrow-left": ICONS.arrowLeft,
    "fa-arrow-right": ICONS.arrowRight,
    "fa-arrow-down": ICONS.arrowDown,
    "fa-bolt": ICONS.bolt,
    "fa-bars": ICONS.bars,
    "fa-xmark": ICONS.xmark,
    "fa-calendar-days": ICONS.calendar,
    "fa-circle-check": ICONS.checkCircle,
    "fa-compass": ICONS.compass,
    "fa-code": ICONS.code,
    "fa-timeline": ICONS.timeline,
    "fa-clock": ICONS.clock,
    "fa-microphone": ICONS.microphone,
    "fa-laptop-code": ICONS.laptop,
    "fa-utensils": ICONS.utensils,
    "fa-award": ICONS.award,
    "fa-user-tie": ICONS.userTie,
    "fa-chalkboard-user": ICONS.chalkboardUser,
    "fa-user-gear": ICONS.userGear,
    "fa-graduation-cap": ICONS.graduationCap,
    "fa-phone": ICONS.phone,
    "fa-circle-info": ICONS.info,
    "fa-bullseye": ICONS.target,
    "fa-list-check": ICONS.listCheck,
    "fa-toolbox": ICONS.toolbox,
    "fa-calendar-check": ICONS.calendarCheck,
    "fa-shield-halved": ICONS.shield,
    "fa-arrow-up-right-from-square": ICONS.externalLink,
    "fa-users": ICONS.users,
    "fa-ticket": ICONS.ticket,
    "fa-instagram": ICONS.instagram,
    "fa-youtube": ICONS.youtube,
    "fa-x-twitter": ICONS.twitter
  };

  document.querySelectorAll("i").forEach(el => {
    for (const [cls, svg] of Object.entries(iconClassMap)) {
      if (el.classList.contains(cls)) {
        const span = document.createElement("span");
        span.className = "tf-icon-wrapper";
        span.innerHTML = svg;
        el.replaceWith(span.firstElementChild || span);
        break;
      }
    }
  });
}

// =============================================================================
// 4. INITIALIZATION ON DOM READY
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  replaceFaWithSvg();
  renderEventCards();
  initEventModal();
  initCountdown();
  initCanvasBackground();
  init3DCardTilt();
  initNavbarScroll();
  initMobileMenu();
});

// =============================================================================
// 5. RENDER THREE EVENT CARDS DYNAMICALLY
// =============================================================================

function renderEventCards() {
  const container = document.getElementById("eventsGrid");
  if (!container) return;

  container.innerHTML = eventsData.map(event => `
    <article class="event-card" data-theme="${event.theme}" data-id="${event.id}" tabindex="0" role="button" aria-label="View details for ${event.title}">
      <!-- Card Image & Header -->
      <div class="card-media-wrap">
        <img src="${event.image}" alt="${event.title}" class="card-img" loading="lazy" />
        <div class="card-media-overlay"></div>
        <span class="card-num-badge badge-${event.theme}">${event.number}</span>
        <span class="card-category-badge">${event.category}</span>
      </div>

      <!-- Card Body -->
      <div class="card-body">
        <h3 class="card-title">${event.title}</h3>
        <p class="card-desc">${event.shortDesc}</p>

        <!-- Meta list -->
        <div class="card-meta-list">
          <span class="card-meta-item">
            ${ICONS.users} ${event.teamSize}
          </span>
          <span class="card-meta-item">
            ${ICONS.clock} ${event.time}
          </span>
          <span class="card-meta-item">
            ${ICONS.ticket} ${event.entryFee}
          </span>
        </div>

        <!-- Action Button -->
        <button type="button" class="btn-card-action" data-event-id="${event.id}">
          <span>VIEW DETAILS</span>
          ${ICONS.arrowRight}
        </button>
      </div>
    </article>
  `).join("");

  // Attach click listener to each card
  container.querySelectorAll(".event-card").forEach(card => {
    const id = parseInt(card.getAttribute("data-id"), 10);

    card.addEventListener("click", (e) => {
      openEventModal(id);
    });

    // Keyboard accessibility: Enter or Space opens modal
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openEventModal(id);
      }
    });
  });
}

// =============================================================================
// 5. EVENT DETAILS MODAL CONTROLLER
// =============================================================================

function initEventModal() {
  const modal = document.getElementById("eventModal");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (!modal) return;

  // Close on X button
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      closeEventModal();
    });
  }

  // Close on clicking backdrop outside container
  modal.addEventListener("click", (e) => {
    const container = modal.querySelector(".modal-container");
    if (container && !container.contains(e.target)) {
      closeEventModal();
    }
  });

  // Close on Escape key
  modal.addEventListener("cancel", (e) => {
    e.preventDefault();
    closeEventModal();
  });
}

function openEventModal(eventId) {
  const event = eventsData.find(e => e.id === eventId);
  if (!event) return;

  const modal = document.getElementById("eventModal");
  if (!modal) return;

  // Populate Header
  document.getElementById("modalEventNum").textContent = event.number;
  document.getElementById("modalCategory").textContent = event.category;
  document.getElementById("modalTitle").textContent = event.title;

  // Populate About & Task
  document.getElementById("modalAboutText").textContent = event.about;
  document.getElementById("modalTaskText").textContent = event.task;

  // Populate Rules
  const rulesList = document.getElementById("modalRulesList");
  rulesList.innerHTML = event.rules.map(rule => `<li>${rule}</li>`).join("");

  // Populate Requirements
  const reqList = document.getElementById("modalReqList");
  reqList.innerHTML = event.requirements.map(req => `<li>${req}</li>`).join("");

  // Populate Meta Grid
  document.getElementById("modalTeamSize").textContent = event.teamSize;
  document.getElementById("modalEligibility").textContent = event.eligibility;
  document.getElementById("modalDate").textContent = event.date;
  document.getElementById("modalTime").textContent = event.time;
  document.getElementById("modalVenue").textContent = event.venue;
  document.getElementById("modalPrizes").textContent = event.prizes;

  // Set Google Form CTA
  const registerBtn = document.getElementById("modalRegisterBtn");
  registerBtn.href = event.formUrl;
  registerBtn.setAttribute("target", "_blank");
  registerBtn.setAttribute("rel", "noopener noreferrer");

  // Open native dialog
  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }

  // Prevent background body scroll
  document.body.style.overflow = "hidden";
}

function closeEventModal() {
  const modal = document.getElementById("eventModal");
  if (!modal) return;

  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }

  document.body.style.overflow = "";
}

// =============================================================================
// 6. COUNTDOWN TIMER ENGINE
// =============================================================================

function initCountdown() {
  const daysEl = document.getElementById("cdDays");
  const hoursEl = document.getElementById("cdHours");
  const minsEl = document.getElementById("cdMins");
  const secsEl = document.getElementById("cdSecs");

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  const targetDate = new Date(FESTIVAL_CONFIG.countdownTarget).getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minsEl.textContent = "00";
      secsEl.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(minutes).padStart(2, "0");
    secsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// =============================================================================
// 7. HIGH-PERFORMANCE LIGHTWEIGHT CANVAS BACKGROUND
// =============================================================================

function initCanvasBackground() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 120 };

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
    createParticles();
  }

  function createParticles() {
    particles = [];
    const count = Math.min(Math.floor((width * height) / 16000), 55);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.4 ? "rgba(0, 242, 254, 0.45)" : "rgba(168, 85, 247, 0.4)"
      });
    }
  }

  function draw() {
    if (document.hidden) {
      requestAnimationFrame(draw);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    // Update & draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Mouse subtle repulsion
      if (mouse.x !== null) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          p.x += (dx / dist) * 0.8;
          p.y += (dy / dist) * 0.8;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${0.18 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  // Listeners
  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  resize();
  draw();
}

// =============================================================================
// 8. 3D CARD TILT MICRO-INTERACTION
// =============================================================================

function init3DCardTilt() {
  const tiltElements = document.querySelectorAll(".event-card, .symposium-banner-card");

  tiltElements.forEach(el => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
}

// =============================================================================
// 9. NAVBAR SCROLL EFFECT & ACTIVE SPY
// =============================================================================

function initNavbarScroll() {
  const navbar = document.getElementById("mainNavbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Active link spy
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(sec => observer.observe(sec));
}

// =============================================================================
// 10. MOBILE MENU TOGGLE
// =============================================================================

function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggleBtn.innerHTML = isOpen ? ICONS.xmark : ICONS.bars;
  });

  // Close when clicking any nav link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.innerHTML = ICONS.bars;
    });
  });
}
