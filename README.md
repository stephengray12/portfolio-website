Stephen Gray — Portfolio






A fast, responsive portfolio built with Next.js (App Router), Tailwind, and Framer Motion. It showcases my skills, projects, and contact info—and documents my path from building-automation engineer (BAS) to software engineer.

Live site: https://stephen.engineering
Repo: https://github.com/stephengray12/portfolio-website

Table of Contents
Overview

Features

Tech Stack

Quick Start

Project Structure

Content & Customization

Screenshots

SEO & Social

Accessibility & Performance

Roadmap

Contact

License

Overview
Hi, I’m Stephen Gray — a Computer Science junior at UA Little Rock and a building automation engineer. I program BAS controllers for customers like Walmart HQ, UAMS, Baptist Health, Raytheon, and Westrock Coffee. I’m transitioning into software engineering and love turning real-world problems into clean, reliable code.

Looking for: entry-level Software Engineer role or SWE internship — and a mentor to guide my coding journey.

Features
⚡ Hero with social links and a “View Projects” CTA

🧩 Skills with animated progress bars (Framer Motion) + brand-colored tech icons

🧠 About tailored for recruiters (who I am + what I want)

🗂 Projects grid with screenshots, tech badges, and external links

💌 Contact card with email, phone, location, and resume download

🌗 Dark gradient background (black → gray) and fully responsive layout

Tech Stack
Framework: Next.js (App Router)

UI: React + Tailwind CSS

Animation: Framer Motion

Icons: React Icons (colored with official brand hexes)

Images: next/image (responsive, optimized)

Deploy: Vercel

Quick Start
Requirements
Node.js 18+ (Next.js 14 recommends ≥ 18.17)

npm (or pnpm/yarn/bun)

Install & Run
bash
Copy
Edit
# install dependencies
npm install

# dev server
npm run dev
# → http://localhost:3000

# production
npm run build
npm start

# lint (optional)
npm run lint
Project Structure
If your project uses src/, paths will be src/app/.... Otherwise they’re app/....

arduino
Copy
Edit
app/
  layout.js          # site-wide metadata & layout (OG/Twitter, theme color, etc.)
  page.js            # hero, skills, about, projects, contact
  globals.css        # Tailwind base + any custom styles
  opengraph-image.js # generates social preview image (OG)
  twitter-image.js   # re-exports OG image for Twitter/X
  sitemap.js         # generates /sitemap.xml
  robots.js          # generates /robots.txt
public/
  profile.PNG
  nursingtillicode.png
  trigonengineering.png
  connectfour.png
  raspberrypi.png
  favicon.ico (optional if you use app/icon.svg)
app/icon.svg         # SVG favicon (preferred; Next auto-wires)
Content & Customization
Skills & Brand Colors
Skills live in page.js → const skills = [...].

Brand colors map icons to official hexes (e.g., JS #F7DF1E, React #61DAFB, Tailwind #06B6D4).
White icons (e.g., Next.js) get a subtle drop-shadow for contrast on dark backgrounds.

Projects & Thumbnails
Each project supports:

js
Copy
Edit
{
  title: "Project Name",
  desc: "Short description.",
  link: "https://example.com",   // Live site or repo
  tech: ["HTML", "CSS", "JS"],   // Shown as badges
  image: "/myimage.png"          // From /public/
}
Add your screenshot to /public/ and set image: "/filename.png".
Cards use a fixed frame + object-contain so the whole screenshot is visible (no awkward cropping).

Screenshots
Drop images into /public/ and keep a consistent aspect ratio (e.g., 16:9).

Hero & Skills	Projects Grid
public/hero-sample.png	public/projects-sample.png

Per-project examples:

cpp
Copy
Edit
public/
  nursingtillicode.png
  trigonengineering.png
  connectfour.png
  raspberrypi.png
SEO & Social
This project is set up (or easily configurable) for solid SEO and rich previews:

Metadata in app/layout.js (title, description, Open Graph/Twitter)

Open Graph / Twitter image via app/opengraph-image.js (+ app/twitter-image.js)

Sitemap via app/sitemap.js → /sitemap.xml

Robots via app/robots.js → /robots.txt

Favicon via app/icon.svg (or public/favicon.ico)

Domain is set to https://stephen.engineering in metadata.
If you fork this, update the base URL in those files.

Accessibility & Performance
High-contrast text and considered brand colors

next/image optimization out of the box

Responsive layout from mobile → desktop

Minimal, tasteful animations (tune for prefers-reduced-motion if needed)

Tip: Run Lighthouse (Chrome DevTools) and aim for ≥ 95 across categories.

Roadmap
 Add more project screenshots (consistent 16:9)

 Metadata polish + custom OG image details

 Verify robots.txt + sitemap.xml in Search Console/Bing

 Lighthouse ≥ 95 (Perf / A11y / Best Practices / SEO)

 Extract skills/projects to /data + shared UI to /components

 (Optional) Incremental move to TypeScript

Contact
Email: stephengrayjava12@outlook.com

LinkedIn: https://www.linkedin.com/in/stephen-gray12

GitHub: https://github.com/stephengray12

📝 License
MIT — see LICENSE.