# PopX Frontend Qualifier Task

A pixel-perfect, highly responsive mobile web interface built using **React JS** and **Vite**. This application functions seamlessly as a centralized mobile layout centered on desktop viewports, simulating a real-world smartphone application ecosystem.

## 🔗 Live Project Links
* **Live Deployment Link:** [https://your-assignment.vercel.app/](https://your-assignment.vercel.app/)
* **Design Mockup Reference:** [Adobe XD Link](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd)

---

## 📱 Features Implemented
* **Centralized Mobile Layout:** Constrained viewport bounds (`max-width: 412px`) built directly into standard CSS to isolate and beautifully center the application interface on wider screens.
* **Seamless Client-Side Routing:** Powered by `react-router-dom` to transitions between all 4 required states fluidly with zero browser refreshes.
* **Component Architecture:** Separated viewports into isolated, single-responsibility components (`Welcome`, `Login`, `Register`, `AccountSettings`) for clean, enterprise-ready code readability.
* **Dynamic UX Form Fixes:** Replaced the layout wireframe template placeholders (where every field read "Marry Doe") with semantic field types (`email`, `tel`, `password`) and appropriate dynamic input logic.

---

## 🛠️ Tech Stack & Dependencies
* **Core:** React 18+ & JavaScript (ES6+)
* **Build System:** Vite (Optimized production asset compilation)
* **Routing:** React Router DOM v6
* **Styling:** Vanilla CSS3 featuring custom properties (CSS Variables) for unified brand coloring

---

## 🚀 Getting Started Locally

Follow these instructions to download, build, and run this project in your local development environment.

### 1. Clone the repository
```bash
git clone [https://github.com/gopalthop/your-assignment.git](https://github.com/gopalthop/your-assignment.git)
cd your-assignment
2. Install Dependencies
Bash
npm install
3. Run Development Server
Bash
npm run dev
Once initialized, open your browser and head to http://localhost:5173/ to view the running app.

📁 Folder Structure Overview
Plaintext
src/
├── components/     # Reusable UI building blocks
├── pages/          # Individual screen view containers
│   ├── Welcome.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── AccountSettings.jsx
├── styles/         # Global resets and unified typography layouts
│   └── pages.css
├── App.jsx         # Router switch mapping core paths
└── main.jsx        # App mounting configuration boilerplate

---

### What to do now:
1. Save this into your `README.md` file.
2. Commit and push it to GitHub using these final console commands:
   ```bash
   git add README.md
   git commit -m "docs: implement professional and detailed repository documentation"
   git push
