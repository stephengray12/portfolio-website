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
  { name: "React", icon: <FaReact />, level: 80 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 50 },
  { name: "TailwindCSS", icon: <SiTailwindcss />, level: 70 },
  { name: "C++", icon: <SiCplusplus />, level: 70 },
  { name: "Git", icon: <FaGitAlt />, level: 80 },
  { name: "HTML", icon: <FaHtml5 />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt />, level: 90 },
  { name: "Python", icon: <FaPython />, level: 55 },
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

const projects = [
  {
    title: "Nursing 'Till I Code",
    desc:
      "Nursing 'Till I Code is a free, open-source site for nursing students, featuring clear blogs, quick-reference formulas, and interactive quizzes to make studying easier and more effective.",
    link: "https://www.nursingtillicode.org/",
    tech: ["HTML", "CSS", "JS"],
    image: "/nursingtillicode.png", // put file in /public/nursingtillicode.png (or adjust path)
  },
  {
    title: "Trigon Engineering",
    desc:
      "A website made for industrial manufacturing company Trigon Engineering, showcasing their services and expertise. This was an existing site that I redesigned to be more modern and responsive.",
    link: "https://github.com/stephengray12/Trigon-Engineering",
    tech: ["HTML", "JS", "Tailwind", "React"],
    // image: "/projects/trigon.png",
  },
  {
    title: "Connect Four",
    desc:
      "A Connect four game made in my college programming II class. It features a simple GUI with sound and allows two players to play against each other.",
    link: "https://github.com/stephengray12/cpsc2376-Gray/tree/main/projects/project04",
    tech: ["C++"],
    // image: "/projects/connect-four.png",
  },
  {
    title: "Raspberry Pi Projects",
    desc:
      "A github repository containing various Raspberry Pi projects. I plan to add a project to make a truly open-source Building Automation System for commercial use.",
    link: "https://github.com/stephengray12/Rasberry_Pi_Projects",
    tech: ["Python"],
    // image: "/projects/rpi.png",
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

const SkillBar = ({ skill, animate }) => (
  <div key={skill.name}>
    <div className="flex items-center mb-1">
      <div className="flex items-center gap-2 text-sm font-medium text-black dark:text-white">
        <span className="text-xl text-green-500">{skill.icon}</span>
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

// UPDATED: consistent card height + image fit + scrollable description on hover
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
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-neutral-900 p-2">
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
            <span className="text-lg">{techIcon[t] ?? "🔧"}</span>
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
          <p className="max-w-3xl text-white">
            Hi, I’m Stephen Gray — a former electrician turned building automation engineer, now breaking into software engineering. I’ve collaborated on high-profile projects for Walmart HQ, UAMS, Baptist Health, Raytheon, and Westrock Coffee — including Arkansas’ first proton therapy facility. I thrive in team settings, love solving complex problems, and bring real-world engineering experience into every line of code I write. I’m currently a <span className="font-semibold">junior at the University of Arkansas at Little Rock</span> studying <span className="font-semibold">Computer Science</span>. When I’m not building solutions, you’ll find me spending time with my wife and kids in North Little Rock, AR.
          </p>
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
              href="/StephenGray-Resume.pdf"
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
