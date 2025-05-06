# TaskFlow

[Live Demo on Vercel](https://to-do-list-ochre-beta.vercel.app/)

![App Screenshot](screenshot.png)

---

## Team
- **Mohamed Ahmed** (192100046)
- **Ahmed Shawky** (192100096)
- **Shehab Mohamed** (192100097)

## Course Info
- **Course:** SET-372 Internet Programming
- **Supervisor:** Dr. Fatma Sakr
- **T.A.:** Eng. Doaa Amin

---

A modern, visually appealing, dark-themed to-do list application with priority levels, categories, due dates, and search functionality.

## Features

- **Beautiful dark mode UI** with gradients, soft shadows, and rounded corners
- Task priority levels (High, Medium, Low) with color-coded borders
- Categories (Work, Personal, Shopping, Other) with colorful tags
- Due dates with overdue indicators
- Real-time search functionality
- Task statistics (total, completed, completion rate)
- Filter and sort options
- Clear completed tasks
- Responsive and mobile-friendly design
- Smooth hover and focus effects for better UX

## How to Run

### Option 1: Open Directly
1. Clone or download the repository
2. Open `public/index.html` in your web browser

### Option 2: Use a Local Server (Recommended for best experience)
1. Open a terminal in the project directory
2. Run a simple server (choose one):
   - **Python 3:**
     ```bash
     cd public
     python -m http.server 8000
     ```
   - **Node.js (http-server):**
     ```bash
     npm install -g http-server
     cd public
     http-server
     ```
3. Open `http://localhost:8000` (or the shown address) in your browser

## Contribution History

Our team collaborated on this project with the following contributions:

- **Initial commit: Enhanced To-Do List application** - Mohamed Ahmed
- **Trigger redeploy: update styles.css** - Mohamed Ahmed
- **Fix: Clean up CSS syntax for Vercel deployment** - Ahmed Shawky
- **Fix: Move static files to public directory and remove vercel.json for proper static deployment** - Shehab Mohamed
- **UI: Make to-do list visually appealing and update README for new design** - Mohamed Ahmed
- **Fix: Ensure sorting re-renders the filtered and sorted tasks** - Ahmed Shawky
- **Fix: Sorting now always applies to the full list, not just filtered results** - Shehab Mohamed
- **Docs: Update README with live Vercel link and screenshot** - Mohamed Ahmed
- **Docs: Update README with Vercel link, screenshot, team, and course info** - Ahmed Shawky
- **Rename app to TaskFlow in UI and documentation** - Shehab Mohamed
- **Docs: Remove Vercel deployment section from README** - Mohamed Ahmed
- **Add app screenshot for README** - Ahmed Shawky
- **Docs: Add 'How to Run' section to README for local usage** - Shehab Mohamed

---

**Enjoy your beautiful, modern TaskFlow app!** 