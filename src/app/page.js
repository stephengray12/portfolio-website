"use client";

// Required for framer-motion in Next.js app router
import Image from "next/image";
import Taskbar from "./taskbar";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiCplusplus, SiJquery } from "react-icons/si";

// =========================
// Data
// =========================
const skills = [
  { name: "JavaScript", icon: <FaJs />, level: 90 },
  { name: "React", icon: <FaReact />, level: 60 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 55 },
  { name: "TailwindCSS", icon: <SiTailwindcss />, level: 70 },
  { name: "C++", icon: <SiCplusplus />, level: 50 },
  { name: "Git", icon: <FaGitAlt />, level: 55 },
  { name: "HTML", icon: <FaHtml5 />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt />, level: 90 },
  { name: "Python", icon: <FaPython />, level: 45 },
  { name: "jQuery", icon: <SiJquery />, level: 40 },
];

const techIcon = {
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  Tailwind: <SiTailwindcss />,
  TailwindCSS: <SiTailwindcss />,
  JavaScript: <FaJs />,
  JS: <FaJs />,
  Python: <FaPython />,
  "C++": <SiCplusplus />,
  jQuery: <SiJquery />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
};

// Brand colors (official/common hexes)
const brandColors = {
  JavaScript: "#F7DF1E",
  JS: "#F7DF1E",
  React: "#61DAFB",
  "Next.js": "#FFFFFF",
  Tailwind: "#06B6D4",
  TailwindCSS: "#06B6D4",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Git: "#F05032",
  Python: "#3776AB",
  "C++": "#00599C",
  jQuery: "#0769AD",
};

const projects = [
  {
    title: "Nursing 'Till I Code",
    desc:
      "Nursing 'Till I Code is a free, open-source site for nursing students, featuring quick-reference formulas, and interactive quizzes to make studying easier and more effective.I have additional plans to add a blog with a third party API integration.I also plan to add much more content in the future.",
    link: "https://www.nursingtillicode.org/",
    tech: ["HTML", "CSS", "JS"],
    image: "/nursingtillicode.png",
  },
  {
    title: "Trigon Engineering",
    desc:
      "A website made for industrial manufacturing company Trigon Engineering. This was an existing website that lacked SEO and modern design. It was using http, and was not secure. I upgraded the site to use https and make it more mobily responsive as well as give the site a fresh new look.",
    link: "https://github.com/stephengray12/Trigon-Engineering",
    tech: ["HTML", "JS", "Tailwind", "React"],
    image: "/trigonengineering.png",
  },
  {
    title: "Connect Four",
    desc:
      "A game made in my programming II class made using C++. It has a simple GUI with sound. It features object-oriented programming principles.",
    link: "https://github.com/stephengray12/cpsc2376-Gray/tree/main/projects/project04",
    tech: ["C++"],
    image: "/connectfour.png",
  },
  {
    title: "Raspberry Pi Projects",
    desc:
      "A github repository containing my Raspberry Pi projects. I plan to add a project to make a truly open-source Building Automation System for commercial use.",
    link: "https://github.com/stephengray12/Raspberry_Pi_Projects",
    tech: ["Python"],
    image: "/raspberrypi.png",
  },
];

// =========================
/* Motion */
// =========================
const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

// =========================
/* Small components */
// =========================
const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">{children}</h2>
);

const SocialLinks = ({ size = "text-2xl" }) => (
  <div className={`flex gap-4 mt-4 ${size}`}>
    <a
      href="https://www.linkedin.com/in/stephen-gray12"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 hover:opacity-80"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://github.com/stephengray12"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 dark:text-white hover:opacity-80"
      aria-label="GitHub"
    >
      <FaGithub />
    </a>
  </div>
);

// UPDATED: colored icons using brandColors
const SkillBar = ({ skill, animate }) => (
  <div key={skill.name}>
    <div className="flex items-center mb-1">
      <div className="flex items-center gap-2 text-sm font-medium text-black dark:text-white">
        <span
          className="text-xl"
          style={{
            color: brandColors[skill.name] || undefined,
            // Make pure-white icons (Next.js) visible on dark bg
            filter:
              brandColors[skill.name] === "#FFFFFF"
                ? "drop-shadow(0 0 2px rgba(0,0,0,.45))"
                : undefined,
          }}
        >
          {skill.icon}
        </span>
        {skill.name}
      </div>
    </div>
    <div className="w-full md:w-1/2 bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: animate ? `${skill.level}%` : 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        className="bg-blue-300 h-3 rounded-full"
      />
    </div>
  </div>
);

// UPDATED: consistent card height + image fit + colored tech icons + scrollable description on hover
const ProjectCard = ({ project, i }) => (
  <motion.a
    key={project.title}
    href={project.link}
    target="_blank"
    rel="noreferrer"
    className="group flex flex-col rounded-2xl border border-neutral-700/60 bg-black/40 p-5 hover:border-blue-400 transition md:h-[420px]"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={cardVariants}
    custom={i}
  >
    {/* Screenshot (fits without cropping) */}
    {project.image ? (
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-black p-2">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />
      </div>
    ) : null}

    <h3 className="text-xl font-semibold text-white">{project.title}</h3>

    {/* Description: clipped by default, scrolls on hover to keep card heights identical */}
    <div className="mt-2 text-neutral-300 pr-1 overflow-hidden max-h-[96px] group-hover:overflow-auto">
      {project.desc}
    </div>

    {/* Tech badges */}
    {project.tech?.length ? (
      <div className="mt-auto pt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-neutral-700 text-neutral-200"
            title={t}
            aria-label={t}
          >
            <span
              className="text-lg"
              style={{
                color: brandColors[t] || undefined,
                filter:
                  brandColors[t] === "#FFFFFF"
                    ? "drop-shadow(0 0 2px rgba(0,0,0,.45))"
                    : undefined,
              }}
            >
              {techIcon[t] ?? "🔧"}
            </span>
            <span className="uppercase tracking-wide">{t}</span>
          </span>
        ))}
      </div>
    ) : null}
  </motion.a>
);

// =========================
/* Page */
// =========================
export default function Home() {
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-50px" });

  return (
    <>
      <Taskbar />

      <main className="pt-24 min-h-screen bg-gray-500 dark:bg-black text-gray-800 dark:text-white px-6 py-12">
        {/* Hero */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 text-left">
            <Image
              src="/profile.PNG"
              alt="Stephen Gray"
              width={300}
              height={150}
              className="rounded-full"
              priority
            />

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-bold text-white">Hi, I&apos;m Stephen Gray</h1>
              <p className="text-lg sm:text-xl max-w-xl text-white">
                Aspiring Software Engineer focused on building responsive web apps with clean design and efficient code.
              </p>
              <a
                href="#projects"
                className="inline-block mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:opacity-80 transition-opacity duration-300"
              >
                View My Projects
              </a>
              <SocialLinks />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20 scroll-mt-24" ref={skillsRef}>
          <SectionTitle>Skills</SectionTitle>
          <div className="space-y-4">
            {skills.map((s) => (
              <SkillBar key={s.name} skill={s} animate={skillsInView} />
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 mb-20">
          <SectionTitle>About</SectionTitle>

          <div className="max-w-3xl text-white space-y-3">
            <p>
              Hi, I’m Stephen Gray — a <span className="font-semibold">Computer Science junior at UA Little Rock</span> and a building automation engineer. I program building automation (BAS) controllers for customers like Walmart HQ, UAMS, Baptist Health, Raytheon, and Westrock Coffee.
            </p>
            <p>
              I’m transitioning into <span className="font-semibold">software engineering</span> and love turning real-world problems into clean, reliable code.
            </p>
            <p className="text-neutral-300">
              <strong>Looking for:</strong> entry-level Software Engineer role or SWE internship — and a mentor to guide my coding journey.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 mb-20">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} i={i} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-20 text-center scroll-mt-24" id="contact">
          <SectionTitle>Contact Me</SectionTitle>

          <div className="w-full max-w-3xl mx-auto bg-black p-6 rounded-lg shadow-lg text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-6 mb-4">
              <Image
                src="/profile.PNG"
                alt="Stephen Gray"
                width={150}
                height={150}
                className="rounded-full border"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Stephen Gray</h3>
                <p className="text-base text-white">Software Engineer</p>
                <div className="space-y-1 mt-4 text-sm text-white">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:stephengrayjava12@outlook.com" className="text-blue-500">
                      stephengrayjava12@outlook.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong> (501) 297-8756
                  </p>
                  <p>
                    <strong>Location:</strong> Little Rock, AR
                  </p>
                  <div className="flex gap-4 mt-3 text-2xl">
                    <a
                      href="https://www.linkedin.com/in/stephen-gray12"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:opacity-80"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://github.com/stephengray12"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-80"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/Stephen_Gray_Resume.pdf"
              download
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:opacity-80 transition-opacity duration-300"
            >
              Download Resume
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
