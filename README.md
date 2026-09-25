♦# TECHFUSION 2026 — Flagship CSE & IoT Event Platform
### Official Technical Symposium of INNOVEX 2026
**R.V.R. & J.C. College of Engineering (Autonomous), Guntur**

---

## 🚀 Overview

**TECHFUSION** is the flagship CSE & IoT technical event block for **INNOVEX 2026**. Designed to bridge high-end international developer conference aesthetics with seamless integration into the INNOVEX ecosystem, it features:

- **Cinematic Dark Design System**: Cosmic gradients (`#060814` to `#0A0E24`), electric cyan and purple glows, frosted glass cards, and tech grid mesh.
- **Interactive Particle Background**: 60fps lightweight HTML5 Canvas with mouse repulsion and connecting neural lines.
- **Interactive TechFusion Symposium Banner**: Official clickable college symposium banner ready for hot-swapping.
- **3 Flagship Event Cards**:
  1. `EVENT 01`: **CODE MATRIX** (Tech / Development / Hackathon)
  2. `EVENT 02`: **ALGOQUEST** (Innovation / Problem Solving / AI)
  3. `EVENT 03`: **WEBFORGE & SMART SYSTEMS** (Creative / Web & IoT Expo)
- **Award-Level Event Modal**: Built with native `<dialog>`, modern CSS `@starting-style` entry/exit animations, task highlights, rules, requirements, and a direct Google Form registration button.
- **Top Announcement Bar**: Infinite ticker with "No registration fee for any event" marquee.
- **Seamless INNOVEX Linkage**: Instant return button `[ ← BACK TO INNOVEX ]` pointing to `https://rvrjcce.ac.in/innovex2026/`.

---

## 🛠️ How to Customize (For Event Organizers)

All content, Google Forms, and event information are centralized in **`script.js`** at the top of the file:

### 1. Update Google Form URLs
Open `script.js` and edit:
```javascript
const eventForms = {
  event1: "https://docs.google.com/forms/d/e/YOUR-EVENT-1-FORM-ID/viewform",
  event2: "https://docs.google.com/forms/d/e/YOUR-EVENT-2-FORM-ID/viewform",
  event3: "https://docs.google.com/forms/d/e/YOUR-EVENT-3-FORM-ID/viewform"
};
```

### 2. Update Event Details, Rules & Tasks
In `script.js`, edit the `eventsData` array:
- `title`: Name of the event
- `task`: Specific problem statement or task challenge
- `rules`: Array of strings for competition rules
- `requirements`: Array of strings for prerequisites
- `teamSize`, `venue`, `time`, etc.

### 3. Replace Banner or Event Images
Drop your image files into `assets/`:
- `assets/techfusion-banner.svg` (or `.webp` / `.png` / `.jpg`)
- `assets/event1.svg`
- `assets/event2.svg`
- `assets/event3.svg`

---

## 🌐 Running Locally

You can open `index.html` directly in any web browser!

Or serve using any local web server:
```bash
# Using Python
python -m http.server 3000

# Using Node.js
npx serve -l 3000 .
```
Then visit `http://localhost:3000`.
