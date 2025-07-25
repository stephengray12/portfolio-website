import Image from "next/image";
import Taskbar from "./taskbar";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
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
              <h1 className="text-4xl sm:text-6xl font-bold text-black">
                Hi, I&apos;m Stephen Gray
              </h1>
              <p className="text-lg sm:text-xl max-w-xl text-black">
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
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4 text-black">Skills</h2>
          <div className="flex flex-wrap gap-3 text-black">
            {[
              "JavaScript",
              "React",
              "Next.js",
              "TailwindCSS",
              "C++",
              "Git",
              "HTML",
              "Python",
              "Jquery",
              "CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
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
