Stephen Gray — Portfolio Website





A fast, responsive portfolio built with Next.js (App Router), Tailwind, and Framer Motion. It showcases my skills, projects, and contact info—and documents my journey from building-automation engineer to software engineer.

Live site: https://stephen.engineering/


✨ Features
Hero with social links and “View Projects” CTA

Skills with animated progress bars (Framer Motion) and brand-colored tech icons

About that highlights:

Computer Science junior at UA Little Rock

Building Automation Systems (BAS) background

Clients: Walmart HQ, UAMS, Baptist Health, Raytheon, Westrock Coffee

Looking for: entry-level SWE role or internship, plus a mentor

Projects grid with screenshots, tech badges, and external links

Contact card with email, phone, location, and resume download

Responsive layout that looks great in light/dark environments

🧰 Tech Stack
Framework: Next.js (App Router)

UI: React + Tailwind CSS

Animation: Framer Motion

Icons: React Icons (colored with official brand hexes)

Images: next/image (optimized, responsive)

Deployment: Vercel (recommended)

📸 Screenshots
Place your screenshots in /public/ and update names as needed.

Hero & Skills	Projects Grid

Per-project screenshots (examples):

cpp
Copy
Edit
public/
  nursingtillicode.png
  trigonengineering.png
  connectfour.png
  raspberrypi.png
🚀 Getting Started
Prerequisites
Node.js 18+ (Next.js 14 recommends ≥ 18.17)

npm (or pnpm/yarn/bun)

Installation
bash
Copy
Edit
# install deps
npm install
Development
bash
Copy
Edit
# run dev server
npm run dev
# open http://localhost:3000
Production
bash
Copy
Edit
# build and start
npm run build
npm start
🗂️ Project Structure
php
Copy
Edit
app/
  page.js            # main page: hero, skills, about, projects, contact
  globals.css        # Tailwind base and any custom styles
components/
  taskbar.(js|jsx)   # top navigation (imported as ./taskbar)
public/
  profile.PNG
  nursingtillicode.png
  trigonengineering.png
  connectfour.png
  raspberrypi.png
Your project arrays (skills, projects) live in app/page.js right now.
You can later extract them to /data and split UI into /components for cleanliness.

✍️ Content (About & Projects)
About (as shown on the site):

Hi, I’m Stephen Gray — a Computer Science junior at UA Little Rock and a building automation engineer. I program building automation (BAS) controllers for customers like Walmart HQ, UAMS, Baptist Health, Raytheon, and Westrock Coffee.
I’m transitioning into software engineering and love turning real-world problems into clean, reliable code.
Looking for: entry-level Software Engineer role or SWE internship — and a mentor to guide my coding journey.

Projects currently featured:

Nursing ’Till I Code — study helpers (formulas, interactive quizzes).

Trigon Engineering — site redesign, HTTPS upgrade, responsive UI.

Connect Four — C++ game with GUI & sound (OOP).

Raspberry Pi Projects — experiments and groundwork for an open-source BAS.

Each project card supports an image, description, tech badges, and external link.

🖼️ Adding/Updating Project Screenshots
Save a PNG in /public/ (e.g., public/nursingtillicode.png).

Ensure your projects array entry includes image: "/nursingtillicode.png".

The UI uses a fixed-height frame + object-contain so the whole screenshot shows without cropping.

For consistency, try to use the same aspect ratio (16:9 works well).

🎨 Icon Brand Colors
Icons use official brand hex colors (e.g., JS yellow #F7DF1E, React blue #61DAFB, Tailwind cyan #06B6D4).
White icons (e.g., Next.js) get a subtle drop shadow so they stay visible on dark backgrounds.

🔎 SEO & Social (Recommended)
Add metadata in app/layout.tsx|js (title, description, Open Graph/Twitter).

Create a share image (OG) and reference it in the metadata.

Add /robots.txt and /sitemap.xml for better indexing.

Basic <meta name="theme-color"> to match your brand color.

Want a PR checklist? See Roadmap below.

☁️ Deployment (Vercel)
Push to GitHub.

Import the repo into Vercel.

Set framework to Next.js (auto-detected).

Deploy.

Vercel will give you a preview and a production domain.

Add your custom domain if you have one.

🧭 Roadmap
 Add more project screenshots (consistent 16:9 thumbnails)

 Metadata + OG image for richer sharing

 robots.txt + sitemap.xml

 Lighthouse ≥ 95 (Performance / A11y / Best Practices / SEO)

 Extract skills/projects into /data and shared UI into /components

 (Optional) Incremental migration to TypeScript

🙌 Contributing
This is my personal portfolio. PRs/issues for small fixes (typos, broken links, accessibility improvements) are welcome.

📄 License
MIT — see LICENSE (or choose a different license if you prefer).

📬 Contact
Email: stephengrayjava12@outlook.com

LinkedIn: https://www.linkedin.com/in/stephen-gray12

GitHub: https://github.com/stephengray12

Thanks!
If you find something that could be improved—UI polish, accessibility, or performance—I’d love your feedback.