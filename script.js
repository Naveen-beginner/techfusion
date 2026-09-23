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
// 3. INITIALIZATION ON DOM READY
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  renderEventCards();
  initEventModal();
  initCountdown();
  initCanvasBackground();
  init3DCardTilt();
  initNavbarScroll();
  initMobileMenu();
});

// =============================================================================
// 4. RENDER THREE EVENT CARDS DYNAMICALLY
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
            <i class="fa-solid fa-users"></i> ${event.teamSize}
          </span>
          <span class="card-meta-item">
            <i class="fa-solid fa-clock"></i> ${event.time}
          </span>
          <span class="card-meta-item">
            <i class="fa-solid fa-ticket"></i> ${event.entryFee}
          </span>
        </div>

        <!-- Action Button -->
        <button type="button" class="btn-card-action" data-event-id="${event.id}">
          <span>VIEW DETAILS</span>
          <i class="fa-solid fa-arrow-right"></i>
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
    toggleBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });

  // Close when clicking any nav link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}
