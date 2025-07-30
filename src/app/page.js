"use client"; // Required for framer-motion in Next.js app router

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
import {
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiJquery,
} from "react-icons/si";

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

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <>
      <Taskbar />
      <main className="pt-24 min-h-screen bg-gray-500 dark:bg-black text-gray-800 dark:text-white px-6 py-12">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 text-left">
            <Image
              src="/profile.PNG"
              alt="Stephen Gray"
              width={300}
              height={150}
              className="rounded-full"
            />
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-bold text-white">
                Hi, I&apos;m Stephen Gray
              </h1>
              <p className="text-lg sm:text-xl max-w-xl text-white">
                Aspiring Software Engineer focused on building responsive web
                apps with clean design and efficient code.
              </p>
              <a
                href="#projects"
                className="inline-block mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg 
                           hover:bg-blue-700 hover:opacity-80 transition-opacity duration-300"
              >
                View My Projects
              </a>
              <div className="flex gap-4 mt-4 text-2xl">
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
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20" ref={ref}>
          <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">Skills</h2>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2 text-sm font-medium text-black dark:text-white">
                    <span className="text-xl text-green-500">{skill.icon}</span>
                    {skill.name}
                  </div>
                </div>
                <div className="w-full md:w-1/2  bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isInView ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                    className="bg-blue-300 h-3 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Business Card Section */}
        <section className="mb-20 text-center" id="contact">
          <h2 className="text-2xl font-semibold mb-6 text-black">Contact Me</h2>
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
                    <a
                      href="mailto:stephengrayjava12@outlook.com"
                      className="text-blue-500"
                    >
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
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded 
                         hover:bg-blue-700 hover:opacity-80 transition-opacity duration-300"
            >
              Download Resume
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
