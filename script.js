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
  event1: "https://docs.google.com/forms/d/e/1FAIpQLSe9-mhq9XDyUetCXr59xetVPYxJNYrNnYoRZjwy2LaULjMBTQ/viewform",
  event2: "https://docs.google.com/forms/d/e/1FAIpQLSe9-mhq9XDyUetCXr59xetVPYxJNYrNnYoRZjwy2LaULjMBTQ/viewform",
  event3: "https://docs.google.com/forms/d/e/1FAIpQLSe9-mhq9XDyUetCXr59xetVPYxJNYrNnYoRZjwy2LaULjMBTQ/viewform"
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
    category: "TECH / QUIZ",
    title: "MICRO MISSION",
    badgeLabel: "TECHNICAL QUEST",
    image: "assets/event1d.jpeg",
    shortDesc: "A multi-round technical challenge designed to test reasoning, programming knowledge, teamwork, communication, and technical creativity.",
    about: "Micro Mission is a captivating technical quest that evaluates and enriches participants' expertise across a broad spectrum of technical subjects. The event covers areas ranging from general reasoning and basic programming to technical communication, creative thinking, and problem-solving.",
    task: "Complete the multi-stage Micro Mission challenge, beginning with a prelims round and progressing through four mains rounds: Think N Sync, Tech Charades, Racking Brains, and Byte Talks.",
    rules: [
      "Rule 1: All participants must carry their valid college ID card.",
      "Rule 2: Registration must be completed before the commencement of the event.",
      "Rule 3: Any suspicious activity or misconduct may lead to immediate disqualification.",
      "Rule 4: Prelims will be conducted for teams of two members from the same college.",
      "Rule 5: The Prelims Round consists of 15 MCQs covering general reasoning to basic-level programming, with a time limit of 10 minutes.",
      "Rule 6: Six teams will be selected from the Prelims Round for the Mains Round.",
      "Rule 7: Participants who attend the Prelims Round will receive an e-certificate.",
      "Rule 8: In Think N Sync, each team will receive two questions, one coding-related and one involving a logo, to be answered within 40 minutes.",
      "Rule 9: In Tech Charades, one team member must act and describe the given word while the other teammate guesses it. Two words will be given per team, with members switching positions after the first word.",
      "Rule 10: In Racking Brains, teams must select their main question from a pool. Once a question is selected, it cannot be changed.",
      "Rule 11: In Racking Brains, 10 questions will be presented to each participant at a time and must be answered in order within the allotted 20-minute time limit.",
      "Rule 12: The number of questions answered correctly and in order within the given time will determine qualification.",
      "Rule 13: In Byte Talks, each team will select a topic through a lucky dip and must deliver a speech without using the restricted keywords associated with the topic.",
      "Rule 14: Teams will be provided preparation time before delivering their Byte Talks speech."
    ],
    requirements: [
      "Requirement 1: Valid College ID card is mandatory for all participants.",
      "Requirement 2: Registration must be completed before the event begins.",
      "Requirement 3: Each team must consist of two members from the same college."
    ],
    teamSize: "2 Members",
    eligibility: "Open to college students participating as a two-member team from the same college.",
    date: "9th Oct, 2026",
    time: "Prelims: 8:00 AM - 12:00 PM | Mains: 1:00 PM - 4:00 PM",
    prelimsTime: "Prelims: 8:00 AM - 12:00 PM",
    mainsTime: "Mains: 1:00 PM - 4:00 PM",
    prelims: {
      timing: "8:00 AM - 12:00 PM",
      questions: "15 MCQs (General Reasoning to basic-level programming)",
      timeLimit: "10 Minutes"
    },
    mains: {
      timing: "1:00 PM - 4:00 PM",
      questions: "4 Specialized Rounds (Think N Sync, Tech Charades, Racking Brains, Byte Talks)",
      timeLimit: "3 Hours"
    },
    venue: "Cyber Block Labs",
    entryFee: "[NO REGISTRATION FEE]",
    prizesList: [
      { rank: "1st Prize", amount: "₹3,000" },
      { rank: "2nd Prize", amount: "₹2,000" },
      { rank: "3rd Prize", amount: "₹1,000" }
    ],
    prizes: "1st Prize: ₹3,000 | 2nd Prize: ₹2,000 | 3rd Prize: ₹1,000",
    coordinators: [
      { name: "Revtish Muthineni", phone: "+91 7675890406", role: "Student Coordinator" },
      // { name: "B. Poshitha", phone: "+91 84990 98999", role: "Student Coordinator" }
    ],
    formUrl: eventForms.event2
  },
  {
    id: 2,
    number: "EVENT 02",
    theme: "cyan",
    category: "TECH / DEVELOPMENT",
    title: "META MATRIX",
    badgeLabel: "TECHNICAL CHALLENGE",
    image: "assets/metamatrix.png",
    shortDesc: "An exciting technical challenge featuring Prelims and Mains rounds designed to test programming knowledge, core computer science fundamentals, analytical thinking, and problem-solving ability.",
    about: "META Matrix is a technical challenge consisting of Prelims and Mains rounds. The event begins with an online MCQ round covering basic programming concepts and core computer science fundamentals, followed by a competitive coding-based Mains Round featuring questions of varying difficulty levels.",
    task: "Participate in the Prelims online MCQ round and qualify for the Mains Round, where participants must solve five coding and analytical problems within the allotted time. Solutions will be evaluated using predefined test cases for accuracy, logic, and robustness.",
    rules: [
      "Rule 1: All UG and PG students are eligible to participate.",
      "Rule 2: Only team entries are allowed, with a maximum of two participants from the same college per team.",
      "Rule 3: Replacement of team members after registration is not permitted.",
      "Rule 4: Participants must carry their valid college ID card, and the details must match the registration information.",
      "Rule 5: Participants must report 10 minutes before the scheduled event start time.",
      "Rule 6: Any misconduct or malpractice will result in disqualification.",
      "Rule 7: Participants must follow all instructions provided by the event coordinators.",
      "Rule 8: Use of electronic gadgets may be restricted unless explicitly permitted by the event coordinators.",
      "Rule 9: The Prelims Round is an online MCQ round consisting of 20 questions covering basic programming concepts and core computer science fundamentals.",
      "Rule 10: The Prelims Round has a duration of 10 minutes.",
      "Rule 11: The Mains Round consists of five coding questions with varying levels of difficulty.",
      "Rule 12: The Mains Round includes analytical and technical questions designed to assess understanding and problem-solving ability.",
      "Rule 13: All Mains Round solutions will be evaluated using predefined test cases for accuracy, logic, and robustness.",
      "Rule 14: The Mains Round has a duration of 2 hours."
    ],
    requirements: [
      "Requirement 1: Valid college ID card is mandatory for all participants.",
      "Requirement 2: Registration details must match the participant's college ID information.",
      "Requirement 3: Each team must consist of a maximum of two participants from the same college.",
      "Requirement 4: Participants must report at least 10 minutes before the event begins."
    ],
    teamSize: "2 Members",
    eligibility: "Open to all UG and PG students. Each team can have a maximum of two participants from the same college.",
    date: "9th Oct, 2026",
    time: "Prelims: 8:00 AM - 12:00 PM | Mains: 1:00 PM - 4:00 PM",
    prelimsTime: "Prelims: 8:00 AM - 12:00 PM",
    mainsTime: "Mains: 1:00 PM - 4:00 PM",
    prelims: {
      timing: "8:00 AM - 12:00 PM",
      questions: "20 MCQs (Basic Programming Concepts & CS Fundamentals)",
      timeLimit: "10 Minutes"
    },
    mains: {
      timing: "1:00 PM - 4:00 PM",
      questions: "5 Coding Questions (Varying difficulty, evaluated against predefined test cases)",
      timeLimit: "2 Hours"
    },
    venue: "Cyber Block, ACC Lab",
    entryFee: "[NO REGISTRATION FEE]",
    prizesList: [
      { rank: "1st Prize", amount: "₹3,000" },
      { rank: "2nd Prize", amount: "₹2,000" },
      { rank: "3rd Prize", amount: "₹1,000" }
    ],
    prizes: "1st Prize: ₹3,000 | 2nd Prize: ₹2,000 | 3rd Prize: ₹1,000",
    coordinators: [
      { name: "P. Sampath Vinayak", phone: "+91 9392515992", role: "Student Coordinator" },
      { name: "Y. Lokesh Babu", phone: "+91 8639465554", role: "Student Coordinator" }
    ],
    formUrl: eventForms.event1
  },
  {
    id: 3,
    number: "EVENT 03",
    theme: "cyan",
    category: "CREATIVE / DESIGN",
    title: "MEME MAGIC",
    badgeLabel: "MEME DESIGN CHALLENGE",
    image: "assets/event3d.jpeg",
    shortDesc: "A creative and humorous meme-making challenge testing wit, visual storytelling, originality, and digital design skills through online and on-campus meme challenges.",
    about: "Meme Magic is a creative and humorous competition designed to test participants' meme-making skills, wit, visual storytelling, and digital design abilities. The event consists of an Online Prelims Submission followed by an On-Campus Video Meme Challenge. Teams of two will create engaging, theme-based memes while demonstrating originality, humor, creativity, and ethical digital expression.",
    task: "Create original, creative, humorous, and impactful memes based on the given themes. In the Prelims, teams must submit one static meme online. The shortlisted teams will participate in the On-Campus Mains Video Meme Challenge, where they will create a 10–15 second video meme based on a surprise theme.",
    rules: [
      "Rule 1: All participants must carry their valid college ID card and earphones.",
      "Rule 2: Registration must be completed before the event begins.",
      "Rule 3: Memes must not target any individual or group and must not contain objectionable content.",
      "Rule 4: Plagiarism, offensive content, or suspicious activity will result in disqualification.",
      "Rule 5: All memes must adhere to the given theme and ethical guidelines.",
      "Rule 6: Memes should be original and creative, use minimal yet effective text, and communicate humor clearly.",
      "Rule 7: Political, abusive, sensitive, or explicit material is not permitted.",
      "Rule 8: Prelims participation is limited to teams of two members from the same college.",
      "Rule 9: Each team must submit one static meme based on one of the given themes: Developers vs Bugs, Technology vs Reality, or The Life of Software Professionals With AI.",
      "Rule 10: Prelims submissions must be in PNG or JPG format with a maximum file size of 10 MB.",
      "Rule 11: The file name must follow the format teamname_themename. Example: PixelKings_Technology vs Reality.",
      "Rule 12: Prelims memes must be submitted through the official submission form by scanning the provided QR code.",
      "Rule 13: The Prelims submission deadline is 6th October 2026 at 11:59 PM IST.",
      "Rule 14: The Top 25 teams will be shortlisted based on Creativity & Originality (50%) and Humor & Theme Relevance (50%).",
      "Rule 15: Shortlisted participants will be notified through email.",
      "Rule 16: The Mains Round will be conducted on campus and will consist of a Surprise Theme Reveal, Video Meme Creation, Submission & Verification, and Judging & Presentation.",
      "Rule 17: The Video Meme created during the Mains Round must be 10–15 seconds long.",
      "Rule 18: The Mains Round will have a duration of 3 hours.",
      "Rule 19: In the Tie-Breaker Round, teams must guess the missing dialogue from a displayed meme image.",
      "Rule 20: E-certificates will be issued to all participants."
    ],
    requirements: [
      "Requirement 1: Valid college ID card is mandatory for all participants.",
      "Requirement 2: Participants must carry earphones for the event.",
      "Requirement 3: Each team must consist of two members from the same college.",
      "Requirement 4: Prelims submissions must be in PNG or JPG format and must not exceed 10 MB.",
      "Requirement 5: The submitted meme must be original and follow the specified theme and ethical guidelines.",
      "Requirement 6: Participants must submit their Prelims entry through the official submission form before the deadline."
    ],
    teamSize: "2 Members",
    eligibility: "Open to student teams consisting of two members from the same college.",
    date: "9th October 2026",
    time: "Prelims Deadline: 6th Oct 2026 - 11:59 PM IST | Mains: 1:00 PM - 4:00 PM",
    prelimsTime: "Prelims Deadline: 6th Oct 2026 - 11:59 PM IST",
    mainsTime: "Mains: 1:00 PM - 4:00 PM",
    prelims: {
      timing: "Deadline: 6th Oct 2026 - 11:59 PM IST",
      questions: "1 Static Meme (Themes: Developers vs Bugs / Technology vs Reality / Life with AI)",
      timeLimit: "Submission Deadline: 6th Oct 2026"
    },
    mains: {
      timing: "1:00 PM - 4:00 PM",
      questions: "10–15s Video Meme (Surprise Theme) + Tie-Breaker Dialogue Round",
      timeLimit: "3 Hours"
    },
    venue: "Cyber Block",
    entryFee: "[NO REGISTRATION FEE]",
    prizesList: [
      { rank: "1st Prize", title: "Best Meme Magician", amount: "₹3,000" },
      { rank: "2nd Prize", title: "Humor Hacker", amount: "₹2,000" },
      { rank: "3rd Prize", title: "Creative Catalyst", amount: "₹1,000" }
    ],
    prizes: "1st Prize - Best Meme Magician: ₹3,000 | 2nd Prize - Humor Hacker: ₹2,000 | 3rd Prize - Creative Catalyst: ₹1,000",
    coordinators: [
      { name: "P. Bharath", phone: "+91 7569063286", role: "Student Coordinator" },
      { name: "A. Reddy Charan", phone: "+91 9346555753", role: "Student Coordinator" }
    ],
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
  initIntroSplash();
  renderEventCards();
  initEventModal();
  initCountdown();
  initCanvasBackground();
  init3DCardTilt();
  initNavbarScroll();
  initMobileMenu();
  initThemeToggle();
  initCustomCursor();
  initAiAgent();
  initButtonClickHighlight();
});


// =============================================================================
// 5. RENDER THREE EVENT CARDS DYNAMICALLY
// =============================================================================

function getTimeLines(event) {
  if (event.prelimsTime && event.mainsTime) {
    return [event.prelimsTime, event.mainsTime];
  }
  if (event.time && event.time.includes("|")) {
    return event.time.split("|").map(t => t.trim());
  }
  return [event.time];
}

function renderEventCards() {
  const container = document.getElementById("eventsGrid");
  if (!container) return;

  container.innerHTML = eventsData.map(event => `
    <article class="event-card reveal-up" data-theme="${event.theme}" data-id="${event.id}" tabindex="0" role="button" aria-label="View details for ${event.title}">
      <!-- Card Image & Media -->
      <div class="card-media-wrap">
        <img src="${event.image}" alt="${event.title}" class="card-img" loading="lazy" />
        <div class="card-media-overlay"></div>
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
          <span class="card-meta-item card-meta-time">
            ${ICONS.clock}
            <span class="card-time-stack">
              ${getTimeLines(event).map(line => `<span class="card-time-line">${line}</span>`).join("")}
            </span>
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

  // Populate Logistics: Two Columns (Prelims vs Mains)
  if (event.prelims) {
    const pTime = document.getElementById("modalPrelimsTime");
    const pQuest = document.getElementById("modalPrelimsQuestions");
    const pLimit = document.getElementById("modalPrelimsTimeLimit");
    if (pTime) pTime.textContent = event.prelims.timing;
    if (pQuest) pQuest.textContent = event.prelims.questions;
    if (pLimit) pLimit.textContent = event.prelims.timeLimit;
  }
  if (event.mains) {
    const mTime = document.getElementById("modalMainsTime");
    const mQuest = document.getElementById("modalMainsQuestions");
    const mLimit = document.getElementById("modalMainsTimeLimit");
    if (mTime) mTime.textContent = event.mains.timing;
    if (mQuest) mQuest.textContent = event.mains.questions;
    if (mLimit) mLimit.textContent = event.mains.timeLimit;
  }

  // Populate Logistics: Horizontal Row Grid (Eligibility, Venue & Date, Prizes)
  const teamSizeEl = document.getElementById("modalTeamSize");
  const eligEl = document.getElementById("modalEligibility");
  const dateEl = document.getElementById("modalDate");
  const venueEl = document.getElementById("modalVenue");

  if (teamSizeEl) teamSizeEl.textContent = event.teamSize;
  if (eligEl) eligEl.textContent = event.eligibility;
  if (dateEl) dateEl.textContent = event.date;
  if (venueEl) venueEl.textContent = event.venue;

  // Populate 3-Line Prizes
  const prizesListEl = document.getElementById("modalPrizesList");
  if (prizesListEl && event.prizesList) {
    prizesListEl.innerHTML = event.prizesList.map((item, idx) => {
      const cls = idx === 0 ? "prize-gold" : idx === 1 ? "prize-silver" : "prize-bronze";
      const titleTag = item.title ? `<span class="prize-tag">${item.title}</span>` : "";
      return `
        <div class="prize-line ${cls}">
          <span class="prize-rank">${item.rank}</span>
          ${titleTag}
          <span class="prize-amount">${item.amount}</span>
        </div>
      `;
    }).join("");
  }

  // Populate Event Coordinators (1 Row 2 Cards)
  const coordsGridEl = document.getElementById("modalCoordsGrid");
  if (coordsGridEl && event.coordinators) {
    coordsGridEl.innerHTML = event.coordinators.map(coord => {
      const cleanPhone = coord.phone.replace(/[^+\d]/g, "");
      return `
        <div class="modal-coord-card">
          <div class="modal-coord-avatar">
            ${ICONS.users}
          </div>
          <div class="modal-coord-info">
            <span class="modal-coord-role">${coord.role || "Event Coordinator"}</span>
            <h4 class="modal-coord-name">${coord.name}</h4>
            <a href="tel:${cleanPhone}" class="modal-coord-phone" title="Call ${coord.name}">
              <svg class="tf-icon" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>${coord.phone}</span>
            </a>
          </div>
        </div>
      `;
    }).join("");
  }

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

// =============================================================================
// 11. TECHNIZEN 2K26 OPENING INTRO SPLASH CONTROLLER
// =============================================================================

function initIntroSplash() {
  const introSplash = document.getElementById("introSplash");
  if (!introSplash) return;

  const introEventsShowcase = document.getElementById("introEventsShowcase");
  const introStatusText = document.getElementById("introStatusText");
  const introPercentText = document.getElementById("introPercentText");
  const introProgressFill = document.getElementById("introProgressFill");
  const introSkipBtn = document.getElementById("introSkipBtn");
  const introCanvas = document.getElementById("introCanvas");

  let isFinished = false;
  let animFrameId = null;

  // 1. Particle Canvas Background Animation
  if (introCanvas) {
    const ctx = introCanvas.getContext("2d");
    let width = (introCanvas.width = window.innerWidth);
    let height = (introCanvas.height = window.innerHeight);

    const onResize = () => {
      if (isFinished) return;
      width = introCanvas.width = window.innerWidth;
      height = introCanvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const particleCount = Math.min(60, Math.floor((width * height) / 18000));
    const particles = [];
    const colors = ["#00f2fe", "#38bdf8", "#a855f7", "#c084fc"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    function renderCanvas() {
      if (isFinished) return;
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${0.25 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animFrameId = requestAnimationFrame(renderCanvas);
    }

    renderCanvas();
  }

  // 2. Finish / Dismiss Intro
  function finishIntro() {
    if (isFinished) return;
    isFinished = true;

    if (animFrameId) cancelAnimationFrame(animFrameId);
    introSplash.classList.add("fade-out");
    document.body.classList.remove("intro-active");

    setTimeout(() => {
      introSplash.style.display = "none";
    }, 850);
  }

  // Skip Button & Keyboard Esc Handler
  if (introSkipBtn) {
    introSkipBtn.addEventListener("click", finishIntro);
  }

  window.addEventListener("keydown", (e) => {
    if (!isFinished && (e.key === "Escape" || e.key === "Enter" || e.key === " ")) {
      finishIntro();
    }
  });

  // 3. Timed Progression (Title -> 3 Events -> Progress Bar -> Enter)
  // Reveal Events at 1.1s
  setTimeout(() => {
    if (!isFinished && introEventsShowcase) {
      introEventsShowcase.classList.add("visible");
    }
  }, 1100);

  // Progress Bar Animation (0% to 100% over 3.2s)
  const startTime = performance.now();
  const totalDuration = 3200;

  function updateProgress(currentTime) {
    if (isFinished) return;
    const elapsed = currentTime - startTime;
    const progress = Math.min(100, Math.floor((elapsed / totalDuration) * 100));

    if (introProgressFill) {
      introProgressFill.style.width = `${progress}%`;
    }
    if (introPercentText) {
      introPercentText.textContent = `${progress}%`;
    }

    if (introStatusText) {
      if (progress < 30) {
        introStatusText.textContent = "INITIALIZING MATRIX MODULES...";
      } else if (progress < 70) {
        introStatusText.textContent = "CALIBRATING 3 FLAGSHIP ARENAS...";
      } else if (progress < 95) {
        introStatusText.textContent = "SYSTEMS ONLINE • READY";
      } else {
        introStatusText.textContent = "WELCOME TO TECHFUSION 2K26!";
      }
    }

    if (progress < 100) {
      requestAnimationFrame(updateProgress);
    } else {
      // Completed, brief pause then transition out smoothly
      setTimeout(finishIntro, 400);
    }
  }

  requestAnimationFrame(updateProgress);
}

// =============================================================================
// 11b. THEME TOGGLE — LIGHT / DARK MODE
// =============================================================================

function initThemeToggle() {
  const btn = document.getElementById("themeToggleBtn");
  if (!btn) return;

  // Restore saved preference
  const savedTheme = localStorage.getItem("tf-theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }

  btn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem("tf-theme", isLight ? "light" : "dark");

    // Add click flash to the toggle button itself
    btn.classList.remove("btn-click-flash");
    void btn.offsetWidth; // reflow to restart animation
    btn.classList.add("btn-click-flash");
    btn.addEventListener("animationend", () => btn.classList.remove("btn-click-flash"), { once: true });
  });
}



// =============================================================================
// 11d. BUTTON CLICK BOX HIGHLIGHT
// =============================================================================

function initButtonClickHighlight() {
  const selector = [
    "button",
    "a.btn-nav-register",
    "a.btn-back-innovex",
    "a.btn-hero-primary",
    "a.btn-hero-secondary",
    "a.btn-modal-register",
    "a.social-pill",
    ".btn-card-action",
    ".intro-skip-btn",
    ".modal-close-btn",
    ".mobile-toggle",
    ".theme-toggle-btn",
    ".event-card"
  ].join(", ");

  document.addEventListener("click", (e) => {
    const target = e.target.closest(selector);
    if (!target) return;

    // Remove existing flash class (to restart animation)
    target.classList.remove("btn-click-flash");
    void target.offsetWidth; // force reflow to restart CSS animation

    target.classList.add("btn-click-flash");

    target.addEventListener("animationend", () => {
      target.classList.remove("btn-click-flash");
    }, { once: true });
  });
}


// =============================================================================
// 11. SCROLL REVEAL OBSERVER
// =============================================================================
function initScrollReveal() {
  // Automatically apply reveal-up to major structural elements across the site.
  // Skip anything inside <footer> — the footer itself animates as one block.
  const autoRevealElements = document.querySelectorAll('h1, h2, h3, p, .timeline-node, .coordinator-card, .event-card, .countdown-box, .section-header, .no-fee-track, .hero-cta-group, .hero-meta-row');

  autoRevealElements.forEach(el => {
    // Don't individually animate elements that live inside the footer
    if (el.closest('footer')) return;

    if (!el.classList.contains('reveal-up') && !el.classList.contains('reveal-left') &&
        !el.classList.contains('reveal-right') && !el.classList.contains('reveal-fade')) {
      el.classList.add('reveal-up');
    }
  });

  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-fade');
  if (revealElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay');
        if (delay) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, parseInt(delay, 10));
        } else {
          entry.target.classList.add('visible');
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => observer.observe(el));
}

// Manually initialize if DOM is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initScrollReveal();
} else {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
}

// =============================================================================
// 12. CANVA-STYLE COLLABORATIVE CUSTOM CURSOR
// =============================================================================
function initCustomCursor() {
  // Gracefully skip on touch devices
  if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) return;

  const cursor = document.getElementById("canvaCursor");
  const pointer = document.getElementById("canvaCursorPointer");
  const badge = document.getElementById("canvaCursorBadge");
  const badgeText = document.getElementById("canvaBadgeText");

  if (!cursor || !badge || !badgeText) return;

  let mouseX = -100;
  let mouseY = -100;
  let prevMouseX = -100;
  let prevMouseY = -100;
  let badgeLagX = 0;
  let badgeLagY = 0;
  let isVisible = false;
  let isPressed = false;
  let currentHoverText = "You";

  // Dynamic Hover Target Mapping
  const hoverSelectors = [
    { sel: ".event-card", text: "✨ Explore" },
    { sel: "a.btn-nav-register, a.btn-hero-primary, a.btn-modal-register, a[href*='docs.google.com'], .btn-action-register", text: "🚀 Register" },
    { sel: ".btn-hero-secondary", text: "⚡ Explore" },
    { sel: ".btn-back-innovex", text: "↩️ INNOVEX" },
    { sel: ".theme-toggle-btn", text: "🌓 Theme" },
    { sel: ".ai-launcher-btn", text: "🤖 TechFusion AI" },
    { sel: ".ai-chip", text: "💡 Ask Prompt" },
    { sel: ".ai-action-btn", text: "⚡ Action" },
    { sel: ".modal-close-btn", text: "✕ Close" },
    { sel: "a[href^='tel:']", text: "📞 Call Coordinator" },
    { sel: ".social-pill", text: "🌐 Follow" },
    { sel: "input, textarea", text: "✍️ Type" },
    { sel: "button, a, [role='button'], .timeline-card, .coordinator-card", text: "👆 Click" }
  ];

  function getHoverText(target) {
    if (!target || !(target instanceof Element)) return "You";
    for (const rule of hoverSelectors) {
      if (target.closest && target.closest(rule.sel)) {
        return rule.text;
      }
    }
    return "You";
  }

  // Pointer Move Handler
  window.addEventListener("pointermove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      cursor.classList.add("canva-cursor-visible");
      prevMouseX = mouseX;
      prevMouseY = mouseY;
    }

    // Direct tip tracking for instant zero-latency response
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

    // Detect target element
    const hoverText = getHoverText(e.target);
    if (hoverText !== currentHoverText) {
      currentHoverText = hoverText;
      badgeText.textContent = hoverText;
      if (hoverText !== "You") {
        cursor.classList.add("canva-cursor-hover");
      } else {
        cursor.classList.remove("canva-cursor-hover");
      }
    }
  }, { passive: true });

  // Spring badge trailing physics
  function updateBadgePhysics() {
    if (isVisible) {
      const vx = mouseX - prevMouseX;
      const vy = mouseY - prevMouseY;
      prevMouseX = mouseX;
      prevMouseY = mouseY;

      // Inertial lag effect on badge
      badgeLagX += (-vx * 0.35 - badgeLagX) * 0.25;
      badgeLagY += (-vy * 0.35 - badgeLagY) * 0.25;

      const tilt = Math.max(-15, Math.min(15, -vx * 0.4));
      badge.style.transform = `translate3d(${badgeLagX.toFixed(2)}px, ${badgeLagY.toFixed(2)}px, 0) rotate(${tilt.toFixed(1)}deg)`;
    }
    requestAnimationFrame(updateBadgePhysics);
  }
  requestAnimationFrame(updateBadgePhysics);

  // Pointer Down (Squash & Press)
  window.addEventListener("pointerdown", () => {
    isPressed = true;
    cursor.classList.add("canva-cursor-pressed");
  }, { passive: true });

  window.addEventListener("pointerup", () => {
    isPressed = false;
    cursor.classList.remove("canva-cursor-pressed");
  }, { passive: true });

  // Click Feedback: Canva Expanding Ripple & Sparkle Particles
  window.addEventListener("click", (e) => {
    createCanvaClickEffect(e.clientX, e.clientY);
  }, { passive: true });

  function createCanvaClickEffect(x, y) {
    // 1. Expanding Ripple
    const ripple = document.createElement("div");
    ripple.className = "canva-click-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    // 2. Canva Sparkles
    const colors = ["#00f2fe", "#7d2ae8", "#ff3366", "#facc15", "#38bdf8"];
    const count = 6;
    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "canva-sparkle";
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      const angle = (i * (2 * Math.PI / count)) + (Math.random() * 0.5);
      const dist = 18 + Math.random() * 22;
      sparkle.style.setProperty("--sparkle-x", `${Math.cos(angle) * dist}px`);
      sparkle.style.setProperty("--sparkle-y", `${Math.sin(angle) * dist}px`);
      sparkle.style.background = colors[i % colors.length];
      sparkle.style.boxShadow = `0 0 6px ${colors[i % colors.length]}`;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 650);
    }
  }

  // Handle cursor exit & re-entry
  document.addEventListener("mouseleave", () => {
    isVisible = false;
    cursor.classList.remove("canva-cursor-visible");
  });

  document.addEventListener("mouseenter", () => {
    isVisible = true;
    cursor.classList.add("canva-cursor-visible");
  });
}

// =============================================================================
// 13. TECHFUSION AI AGENT — SITE INTELLIGENCE ENGINE
// =============================================================================
function initAiAgent() {
  const widget = document.getElementById("tfAiWidget");
  const launcher = document.getElementById("aiLauncherBtn");
  const chatWindow = document.getElementById("aiChatWindow");
  const messagesList = document.getElementById("aiMessagesList");
  const inputForm = document.getElementById("aiInputForm");
  const inputField = document.getElementById("aiInputText");
  const clearBtn = document.getElementById("aiClearBtn");
  const minimizeBtn = document.getElementById("aiMinimizeBtn");
  const unreadDot = document.getElementById("aiUnreadDot");
  const chips = document.querySelectorAll(".ai-chip");

  if (!widget || !launcher || !chatWindow || !messagesList || !inputForm || !inputField) return;

  let isOpen = false;
  let hasGreeted = false;
  let isTyping = false;

  // Sound synthesis via Web Audio API (graceful optional feedback)
  function playAgentChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (_) {}
  }

  // Toggle Chat Window
  function toggleChat(forceOpen = null) {
    isOpen = forceOpen !== null ? forceOpen : !isOpen;
    if (isOpen) {
      widget.classList.add("ai-open");
      launcher.setAttribute("aria-expanded", "true");
      unreadDot.classList.remove("active");
      if (!hasGreeted && messagesList.children.length === 0) {
        hasGreeted = true;
        sendGreeting();
      }
      setTimeout(() => inputField.focus(), 300);
    } else {
      widget.classList.remove("ai-open");
      launcher.setAttribute("aria-expanded", "false");
    }
  }

  launcher.addEventListener("click", () => toggleChat());
  if (minimizeBtn) minimizeBtn.addEventListener("click", () => toggleChat(false));

  // Close on Escape key
  window.addEventListener("keydown", (e) => {
    if (isOpen && e.key === "Escape") {
      toggleChat(false);
    }
  });

  // Clear chat
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      messagesList.innerHTML = "";
      hasGreeted = false;
      sendGreeting();
    });
  }

  // Suggestion Chips
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const query = chip.getAttribute("data-query");
      if (!query) return;
      handleUserSubmit(query);
    });
  });

  // Input Form Submit
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = inputField.value.trim();
    if (!text || isTyping) return;
    inputField.value = "";
    handleUserSubmit(text);
  });

  function handleUserSubmit(query) {
    appendMessage("user", query);
    playAgentChime();
    isTyping = true;
    showTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator();
      const response = generateAiResponse(query);
      appendMessage("assistant", response.text, response.actions);
      playAgentChime();
      isTyping = false;
    }, 450);
  }

  function appendMessage(sender, text, actions = null) {
    const msg = document.createElement("div");
    msg.className = `ai-msg ${sender}`;

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    let actionsHtml = "";
    if (actions && actions.length > 0) {
      actionsHtml = `<div class="ai-action-btn-row">
        ${actions.map(act => act.html).join("")}
      </div>`;
    }

    msg.innerHTML = `
      <div class="ai-msg-bubble">
        ${text}
        ${actionsHtml}
      </div>
      <span class="ai-msg-time">${timeStr}</span>
    `;

    messagesList.appendChild(msg);
    messagesList.scrollTop = messagesList.scrollHeight;

    // Attach listeners to freshly created action buttons
    msg.querySelectorAll(".ai-action-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const actionType = btn.getAttribute("data-action");
        if (actionType === "open-modal") {
          const eventId = parseInt(btn.getAttribute("data-id"), 10);
          openEventModal(eventId);
        } else if (actionType === "scroll-to") {
          const target = btn.getAttribute("data-target");
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        } else if (actionType === "ask-prompt") {
          const prompt = btn.getAttribute("data-prompt");
          if (prompt) handleUserSubmit(prompt);
        }
      });
    });

    if (!isOpen) {
      unreadDot.classList.add("active");
    }
  }

  function showTypingIndicator() {
    const ind = document.createElement("div");
    ind.id = "aiTypingInd";
    ind.className = "ai-typing-indicator";
    ind.innerHTML = `
      <span class="ai-typing-dot"></span>
      <span class="ai-typing-dot"></span>
      <span class="ai-typing-dot"></span>
    `;
    messagesList.appendChild(ind);
    messagesList.scrollTop = messagesList.scrollHeight;
  }

  function removeTypingIndicator() {
    const ind = document.getElementById("aiTypingInd");
    if (ind) ind.remove();
  }

  function sendGreeting() {
    const greetingText = `
      <p>👋 Hello! I'm <strong>TechFusion AI</strong>, your official guide to <strong>TECHFUSION 2026</strong> — the flagship CSE &amp; IoT symposium of <strong>INNOVEX 2026</strong> at R.V.R. &amp; J.C. College of Engineering.</p>
      <p>I have comprehensive knowledge of all <strong>3 flagship events</strong>, rules, timelines, <strong>free registrations</strong>, prize pools, and coordinators. How can I help you today?</p>
    `;
    const actions = [
      { html: `<button type="button" class="ai-action-btn" data-action="ask-prompt" data-prompt="Tell me about the 3 flagship events">🎯 3 Flagship Events</button>` },
      { html: `<button type="button" class="ai-action-btn" data-action="ask-prompt" data-prompt="Is there any registration fee?">💰 Free Registration?</button>` },
      { html: `<button type="button" class="ai-action-btn" data-action="ask-prompt" data-prompt="What is the full schedule for Oct 9?">🕒 Full Schedule</button>` },
      { html: `<button type="button" class="ai-action-btn" data-action="ask-prompt" data-prompt="Who are the coordinators?">👥 Coordinators</button>` }
    ];
    appendMessage("assistant", greetingText, actions);
  }

  // ===========================================================================
  // KNOWLEDGE BASE & NATURAL LANGUAGE PROCESSOR
  // ===========================================================================
  function generateAiResponse(input) {
    const q = input.toLowerCase().trim();

    // 1. REGISTRATION FEE / IS IT FREE?
    if (q.includes("fee") || q.includes("free") || q.includes("cost") || q.includes("price") || q.includes("pay") || q.includes("ticket") || q.includes("charge")) {
      return {
        text: `
          <p>🎉 <strong>NO REGISTRATION FEE AT ALL!</strong></p>
          <p>Registration for <strong>TECHFUSION 2026</strong> is completely <strong>100% FREE</strong> for all college students across all 3 flagship events as part of the INNOVEX 2026 National Tech Fest.</p>
          <ul>
            <li>✅ <strong>Zero Entry Fee</strong> for all rounds</li>
            <li>✅ <strong>E-Certificates</strong> for all registered participants</li>
            <li>✅ <strong>Cash Prizes</strong> awarded to 1st, 2nd, and 3rd place winners</li>
          </ul>
        `,
        actions: [
          { html: `<a href="${eventForms.event1}" target="_blank" rel="noopener noreferrer" class="ai-action-btn btn-action-register">🚀 Register on Google Form</a>` },
          { html: `<button type="button" class="ai-action-btn" data-action="ask-prompt" data-prompt="Tell me about the 3 flagship events">🎯 Explore Events</button>` }
        ]
      };
    }

    // 2. META MATRIX (EVENT 02 - CODING)
    if (q.includes("meta") || q.includes("matrix") || q.includes("event 2") || (q.includes("coding") && !q.includes("event")) || q.includes("programming challenge")) {
      return {
        text: `
          <p>💻 <strong>EVENT 02: META MATRIX</strong> (Technical Challenge)</p>
          <p>A flagship competitive coding challenge evaluating algorithms, core computer science concepts, and analytical problem solving.</p>
          <ul>
            <li><strong>Prelims:</strong> 8:00 AM – 12:00 PM &bull; 20 MCQs on programming &amp; CS fundamentals (10 mins)</li>
            <li><strong>Mains:</strong> 1:00 PM – 4:00 PM &bull; 5 coding problems of varying difficulty evaluated against automated test cases (2 hours)</li>
            <li><strong>Team:</strong> 2 Members (UG &amp; PG students from the same college)</li>
            <li><strong>Venue:</strong> Cyber Block, ACC Lab</li>
            <li><strong>Prizes:</strong> 1st: ₹3,000 &bull; 2nd: ₹2,000 &bull; 3rd: ₹1,000</li>
            <li><strong>Coordinators:</strong> P. Sampath Vinayak (<a href="tel:+919392515992">+91 93925 15992</a>), Y. Lokesh Babu (<a href="tel:+918639465554">+91 86394 65554</a>)</li>
          </ul>
        `,
        actions: [
          { html: `<button type="button" class="ai-action-btn" data-action="open-modal" data-id="2">🔍 View Meta Matrix Details</button>` },
          { html: `<a href="${eventForms.event1}" target="_blank" rel="noopener noreferrer" class="ai-action-btn btn-action-register">🚀 Register for Meta Matrix</a>` }
        ]
      };
    }

    // 3. MICRO MISSION (EVENT 01 - QUIZ / REASONING / ROUNDS)
    if (q.includes("micro") || q.includes("mission") || q.includes("event 1") || q.includes("quiz") || q.includes("byte talk") || q.includes("charades") || q.includes("think n sync") || q.includes("racking brains")) {
      return {
        text: `
          <p>⚡ <strong>EVENT 01: MICRO MISSION</strong> (Technical Quest)</p>
          <p>An engaging technical quest testing reasoning, technical communication, teamwork, and problem-solving through 4 dynamic rounds.</p>
          <ul>
            <li><strong>Prelims:</strong> 8:00 AM – 12:00 PM &bull; 15 MCQs on general reasoning &amp; basic programming (10 mins). Top 6 teams qualify!</li>
            <li><strong>Mains Rounds:</strong> 1:00 PM – 4:00 PM
              <ul>
                <li>1. <em>Think N Sync:</em> Coding question + logo identification (40 mins)</li>
                <li>2. <em>Tech Charades:</em> Non-verbal technical word guessing (2 words, roles switch)</li>
                <li>3. <em>Racking Brains:</em> Pool-selected question, 10 ordered questions (20 mins)</li>
                <li>4. <em>Byte Talks:</em> Lucky dip speech without using forbidden taboo keywords!</li>
              </ul>
            </li>
            <li><strong>Team:</strong> 2 Members (from same college)</li>
            <li><strong>Venue:</strong> Cyber Block Labs</li>
            <li><strong>Prizes:</strong> 1st: ₹3,000 &bull; 2nd: ₹2,000 &bull; 3rd: ₹1,000</li>
            <li><strong>Coordinator:</strong> Revtish Muthineni (<a href="tel:+917675890406">+91 76758 90406</a>)</li>
          </ul>
        `,
        actions: [
          { html: `<button type="button" class="ai-action-btn" data-action="open-modal" data-id="1">🔍 View Micro Mission Details</button>` },
          { html: `<a href="${eventForms.event2}" target="_blank" rel="noopener noreferrer" class="ai-action-btn btn-action-register">🚀 Register for Micro Mission</a>` }
        ]
      };
    }

    // 4. MEME MAGIC (EVENT 03 - CREATIVE / MEMES)
    if (q.includes("meme") || q.includes("magic") || q.includes("event 3") || q.includes("video meme") || q.includes("deadline") || q.includes("6th oct")) {
      return {
        text: `
          <p>🎭 <strong>EVENT 03: MEME MAGIC</strong> (Meme Design Challenge)</p>
          <p>A witty and creative digital challenge celebrating visual storytelling, humor, and tech culture.</p>
          <ul>
            <li><strong>Prelims (Online Submission):</strong> Submit 1 static meme by <strong>6th October 2026 (11:59 PM IST)</strong>. Themes:
              <em>Developers vs Bugs</em>, <em>Technology vs Reality</em>, or <em>The Life of Software Professionals With AI</em>.
              Top 25 teams qualify for on-campus mains!</li>
            <li><strong>Mains (On Campus):</strong> 9th Oct, 1:00 PM – 4:00 PM &bull; Create a 10–15s Video Meme based on a surprise theme revealed on the spot! Plus a tie-breaker dialogue guessing round.</li>
            <li><strong>Mandatory Requirement:</strong> All participants <strong>must bring earphones</strong>!</li>
            <li><strong>Prizes:</strong>
              <ul>
                <li>🥇 1st: ₹3,000 (Best Meme Magician)</li>
                <li>🥈 2nd: ₹2,000 (Humor Hacker)</li>
                <li>🥉 3rd: ₹1,000 (Creative Catalyst)</li>
              </ul>
            </li>
            <li><strong>Coordinators:</strong> P. Bharath (<a href="tel:+917569063286">+91 75690 63286</a>), A. Reddy Charan (<a href="tel:+919346555753">+91 93465 55753</a>)</li>
          </ul>
        `,
        actions: [
          { html: `<button type="button" class="ai-action-btn" data-action="open-modal" data-id="3">🔍 View Meme Magic Details</button>` },
          { html: `<a href="${eventForms.event3}" target="_blank" rel="noopener noreferrer" class="ai-action-btn btn-action-register">🚀 Register for Meme Magic</a>` }
        ]
      };
    }

    // 5. ALL 3 EVENTS SUMMARY
    if (q.includes("event") || q.includes("flagship") || q.includes("competition") || q.includes("arena") || q.includes("what can i join") || q.includes("list")) {
      return {
        text: `
          <p>🚀 <strong>TECHFUSION 2026 — 3 FLAGSHIP EVENTS:</strong></p>
          <ul>
            <li>⚡ <strong>EVENT 01: MICRO MISSION</strong> &bull; Technical Quest &bull; 15 MCQs Prelims, 4 Mains rounds (Think N Sync, Charades, Racking Brains, Byte Talks).</li>
            <li>💻 <strong>EVENT 02: META MATRIX</strong> &bull; Coding Challenge &bull; 20 MCQs Prelims, 5 competitive coding problems Mains evaluated by automated test cases.</li>
            <li>🎭 <strong>EVENT 03: MEME MAGIC</strong> &bull; Creative Meme Design &bull; Online static meme prelims (Deadline: Oct 6), On-campus 10–15s video meme mains.</li>
          </ul>
          <p><em>All events are for teams of 2 students from the same college, with zero registration fees and ₹6,000 in cash prizes per event!</em></p>
        `,
        actions: [
          { html: `<button type="button" class="ai-action-btn" data-action="open-modal" data-id="1">⚡ Event 01</button>` },
          { html: `<button type="button" class="ai-action-btn" data-action="open-modal" data-id="2">💻 Event 02</button>` },
          { html: `<button type="button" class="ai-action-btn" data-action="open-modal" data-id="3">🎭 Event 03</button>` },
          { html: `<a href="${eventForms.event1}" target="_blank" rel="noopener noreferrer" class="ai-action-btn btn-action-register">🚀 Free Registration</a>` }
        ]
      };
    }

    // 6. SCHEDULE & TIMINGS
    if (q.includes("schedule") || q.includes("time") || q.includes("timing") || q.includes("timeline") || q.includes("when") || q.includes("date") || q.includes("october 9") || q.includes("oct 9") || q.includes("journey")) {
      return {
        text: `
          <p>🕒 <strong>TECHFUSION 2026 ITINERARY (OCTOBER 9, 2026):</strong></p>
          <ul>
            <li><strong>08:00 AM – 12:00 PM &bull; Prelims Phase:</strong>
              <br>• Meta Matrix: Online MCQ round (Programming &amp; CS concepts)
              <br>• Micro Mission: 15 MCQs (Reasoning to basic coding)
              <br>• Meme Magic: Shortlisting evaluation of online submissions
            </li>
            <li><strong>01:00 PM – 04:00 PM &bull; Mains Phase:</strong>
              <br>• Meta Matrix: 5 Coding challenges across Cyber Block ACC Lab
              <br>• Micro Mission: Think N Sync, Tech Charades, Racking Brains, Byte Talks
              <br>• Meme Magic: 10–15s On-Campus Video Meme creation
            </li>
            <li><strong>04:00 PM – 05:00 PM &bull; Grand Valedictory:</strong>
              <br>Final demos, announcement of winners, distribution of cash prizes and merit certificates!
            </li>
          </ul>
        `,
        actions: [
          { html: `<button type="button" class="ai-action-btn" data-action="scroll-to" data-target="#schedule">📅 Jump to Schedule Section</button>` },
          { html: `<a href="${eventForms.event1}" target="_blank" rel="noopener noreferrer" class="ai-action-btn btn-action-register">🚀 Register Your Team</a>` }
        ]
      };
    }

    // 7. CASH PRIZES & REWARDS
    if (q.includes("prize") || q.includes("cash") || q.includes("award") || q.includes("reward") || q.includes("win") || q.includes("amount") || q.includes("money")) {
      return {
        text: `
          <p>🏆 <strong>CASH PRIZES &amp; RECOGNITION:</strong></p>
          <p>Every flagship event features a dedicated prize pool:</p>
          <ul>
            <li>🥇 <strong>1st Prize:</strong> ₹3,000 Cash + Certificate of Merit</li>
            <li>🥈 <strong>2nd Prize:</strong> ₹2,000 Cash + Certificate of Merit</li>
            <li>🥉 <strong>3rd Prize:</strong> ₹1,000 Cash + Certificate of Merit</li>
          </ul>
          <p><em>Plus: Official Participation E-Certificates for all registered attendees who participate in the Prelims round!</em></p>
        `,
        actions: [
          { html: `<a href="${eventForms.event1}" target="_blank" rel="noopener noreferrer" class="ai-action-btn btn-action-register">🚀 Register Free to Win</a>` },
          { html: `<button type="button" class="ai-action-btn" data-action="open-modal" data-id="2">💻 Meta Matrix</button>` }
        ]
      };
    }

    // 8. COORDINATORS & CONTACTS
    if (q.includes("coord") || q.includes("contact") || q.includes("phone") || q.includes("call") || q.includes("number") || q.includes("kalyan") || q.includes("poshitha") || q.includes("sampath") || q.includes("lokesh") || q.includes("bharath") || q.includes("charan") || q.includes("revtish") || q.includes("faculty") || q.includes("dean") || q.includes("hod") || q.includes("convener")) {
      return {
        text: `
          <p>📞 <strong>TECHFUSION LEADERSHIP &amp; COORDINATORS:</strong></p>
          <p><strong>Faculty Leadership:</strong></p>
          <ul>
            <li>Dr. M. Sreelatha &bull; Dean, Dept. of CSE (Advisory Committee)</li>
            <li>Dr. N. Nagamalleswara Rao &bull; HOD, Dept. of CSE &amp; IoT (Advisory Committee)</li>
            <li>Dr. M. Srikanth &bull; Professor, Dept. of CSE (Staff Convener)</li>
          </ul>
          <p><strong>Lead Student Coordinators:</strong></p>
          <ul>
            <li>K. Kalyan: <a href="tel:+917569292106">+91 75692 92106</a></li>
            <li>B. Poshitha: <a href="tel:+918499098999">+91 84990 98999</a></li>
          </ul>
          <p><strong>Event Coordinators:</strong></p>
          <ul>
            <li>Micro Mission: Revtish Muthineni (<a href="tel:+917675890406">+91 76758 90406</a>)</li>
            <li>Meta Matrix: P. Sampath Vinayak (<a href="tel:+919392515992">+91 93925 15992</a>), Y. Lokesh Babu (<a href="tel:+918639465554">+91 86394 65554</a>)</li>
            <li>Meme Magic: P. Bharath (<a href="tel:+917569063286">+91 75690 63286</a>), A. Reddy Charan (<a href="tel:+919346555753">+91 93465 55753</a>)</li>
          </ul>
        `,
        actions: [
          { html: `<button type="button" class="ai-action-btn" data-action="scroll-to" data-target="#coordinators">👥 View Coordinators Section</button>` }
        ]
      };
    }

    // 9. VENUE / LOCATION / HOW TO REACH
    if (q.includes("venue") || q.includes("location") || q.includes("where") || q.includes("college") || q.includes("address") || q.includes("cyber block") || q.includes("acc lab") || q.includes("rvr") || q.includes("r.v.r") || q.includes("guntur")) {
      return {
        text: `
          <p>📍 <strong>CAMPUS &amp; VENUE DETAILS:</strong></p>
          <ul>
            <li><strong>Institution:</strong> R.V.R. &amp; J.C. College of Engineering (Autonomous)</li>
            <li><strong>Department:</strong> Department of Computer Science &amp; Engineering (CSE) and Internet of Things (IoT)</li>
            <li><strong>Location:</strong> Chandramoulipuram, Chowdavaram, Guntur, Andhra Pradesh &ndash; 522019</li>
            <li><strong>Event Arenas:</strong> Cyber Block Labs &amp; ACC Lab</li>
          </ul>
          <p>All participants must report at the Cyber Block 10 minutes prior to event timings with their valid college ID card.</p>
        `,
        actions: [
          { html: `<button type="button" class="ai-action-btn" data-action="scroll-to" data-target="#schedule">🕒 View Schedule</button>` },
          { html: `<a href="${eventForms.event1}" target="_blank" rel="noopener noreferrer" class="ai-action-btn btn-action-register">🚀 Register Now</a>` }
        ]
      };
    }

    // 10. HOW TO REGISTER
    if (q.includes("register") || q.includes("registration") || q.includes("form") || q.includes("apply") || q.includes("sign up") || q.includes("how to")) {
      return {
        text: `
          <p>🚀 <strong>HOW TO REGISTER:</strong></p>
          <ol>
            <li>1. Form a team of <strong>2 members</strong> from the same college.</li>
            <li>2. Choose your preferred event(s): Micro Mission, Meta Matrix, or Meme Magic.</li>
            <li>3. Fill out the official Google Form (no fee required).</li>
            <li>4. Carry your valid college ID card on the day of the event (Oct 9, 2026).</li>
            <li>5. <em>Note:</em> For Meme Magic, submit your static meme before <strong>6th Oct 11:59 PM</strong>.</li>
          </ol>
        `,
        actions: [
          { html: `<a href="${eventForms.event1}" target="_blank" rel="noopener noreferrer" class="ai-action-btn btn-action-register">🚀 Open Google Form</a>` },
          { html: `<button type="button" class="ai-action-btn" data-action="scroll-to" data-target="#events">🎯 Browse Events</button>` }
        ]
      };
    }

    // 11. ELIGIBILITY / TEAM SIZE / ID / RULES
    if (q.includes("eligib") || q.includes("rule") || q.includes("team") || q.includes("member") || q.includes("solo") || q.includes("single") || q.includes("alone") || q.includes("id card") || q.includes("earphone") || q.includes("who can")) {
      return {
        text: `
          <p>📋 <strong>ELIGIBILITY &amp; GENERAL RULES:</strong></p>
          <ul>
            <li><strong>Eligibility:</strong> Open to all undergraduate (UG) and postgraduate (PG) students from any recognized college.</li>
            <li><strong>Team Size:</strong> Teams must consist of <strong>2 members from the same college</strong>. Solo entries or replacing members after registration is not permitted.</li>
            <li><strong>Mandatory ID:</strong> All participants must carry a valid physical College ID card.</li>
            <li><strong>Earphones:</strong> Required for Event 03 (Meme Magic).</li>
            <li><strong>Reporting Time:</strong> Report at least 10 minutes before the scheduled time at the Cyber Block.</li>
          </ul>
        `,
        actions: [
          { html: `<a href="${eventForms.event1}" target="_blank" rel="noopener noreferrer" class="ai-action-btn btn-action-register">🚀 Register Team for Free</a>` }
        ]
      };
    }

    // 12. INNOVEX 2026 / PARENT FEST
    if (q.includes("innovex") || q.includes("fest") || q.includes("symposium") || q.includes("parent")) {
      return {
        text: `
          <p>🌐 <strong>ABOUT INNOVEX 2026:</strong></p>
          <p><strong>INNOVEX 2026</strong> is the premier national-level technical festival of R.V.R. &amp; J.C. College of Engineering. <strong>TECHFUSION 2026</strong> is the flagship CSE &amp; IoT departmental event block within INNOVEX.</p>
          <p>You can return to the main INNOVEX portal at any time using the navigation button.</p>
        `,
        actions: [
          { html: `<a href="https://rvrjcce.ac.in/innovex2026/" class="ai-action-btn">↩️ Visit INNOVEX 2026 Portal</a>` }
        ]
      };
    }

    // 13. GREETINGS & SMALL TALK
    if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("good morning") || q.includes("good afternoon") || q.includes("yo") || q === "hi" || q === "hey") {
      return {
        text: `
          <p>👋 Hello! Great to have you here! I'm your dedicated <strong>TechFusion AI Assistant</strong>. What would you like to know about TECHFUSION 2026?</p>
        `,
        actions: [
          { html: `<button type="button" class="ai-action-btn" data-action="ask-prompt" data-prompt="Tell me about the 3 flagship events">🎯 3 Flagship Events</button>` },
          { html: `<button type="button" class="ai-action-btn" data-action="ask-prompt" data-prompt="Is there any registration fee?">💰 Registration Fee</button>` },
          { html: `<button type="button" class="ai-action-btn" data-action="ask-prompt" data-prompt="What is the full schedule for Oct 9?">🕒 Schedule</button>` }
        ]
      };
    }

    if (q.includes("thank") || q.includes("thanks") || q.includes("cool") || q.includes("awesome") || q.includes("great") || q.includes("good")) {
      return {
        text: `
          <p>You're very welcome! 😊 Feel free to ask if you have more questions. See you at TECHFUSION 2026 on <strong>October 9th</strong>!</p>
        `,
        actions: [
          { html: `<a href="${eventForms.event1}" target="_blank" rel="noopener noreferrer" class="ai-action-btn btn-action-register">🚀 Register Now (Free)</a>` }
        ]
      };
    }

    // 14. FALLBACK / GENERAL HELPER
    return {
      text: `
        <p>I can help you with anything related to <strong>TECHFUSION 2026</strong>!</p>
        <p>Here are some popular topics you can explore:</p>
        <ul>
          <li>🎯 <strong>The 3 Events:</strong> Micro Mission, Meta Matrix, Meme Magic</li>
          <li>💰 <strong>Registration:</strong> 100% Free entry (No fee)</li>
          <li>🕒 <strong>Schedule:</strong> Prelims (8 AM - 12 PM), Mains (1 PM - 4 PM) on Oct 9</li>
          <li>🏆 <strong>Cash Prizes:</strong> ₹3,000 (1st), ₹2,000 (2nd), ₹1,000 (3rd)</li>
          <li>📞 <strong>Coordinators:</strong> Faculty &amp; Student phone contacts</li>
          <li>📍 <strong>Venue:</strong> Cyber Block &amp; ACC Lab at RVR&JC Campus</li>
        </ul>
      `,
      actions: [
        { html: `<button type="button" class="ai-action-btn" data-action="ask-prompt" data-prompt="Tell me about the 3 flagship events">🎯 3 Flagship Events</button>` },
        { html: `<button type="button" class="ai-action-btn" data-action="ask-prompt" data-prompt="Is there any registration fee?">💰 Is it Free?</button>` },
        { html: `<button type="button" class="ai-action-btn" data-action="ask-prompt" data-prompt="What is the full schedule for Oct 9?">🕒 Full Schedule</button>` },
        { html: `<button type="button" class="ai-action-btn" data-action="ask-prompt" data-prompt="Who are the coordinators?">📞 Coordinators</button>` }
      ]
    };
  }
}



