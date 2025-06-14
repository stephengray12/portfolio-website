// src/app/page.js
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 mb-20">
        <h1 className="text-4xl sm:text-6xl font-bold">Hi, I&apos;m Stephen Gray</h1>
        <p className="text-lg sm:text-xl max-w-xl mx-auto">
          Aspiring front-end developer focused on building responsive web apps with clean design and efficient code.
        </p>
        <a
          href="#projects"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View My Projects
        </a>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["JavaScript", "React", "Next.js", "TailwindCSS", "C++", "Git", "HTML", "CSS"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Example Project Card */}
          <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <Image
              src="/project1.png" // Replace with your real image path
              alt="Project Screenshot"
              width={500}
              height={300}
              className="rounded mb-4"
            />
            <h3 className="text-xl font-bold mb-2">My Portfolio Website</h3>
            <p className="mb-2">
              A responsive portfolio site built with Next.js and TailwindCSS to showcase my work and skills.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-blue-600 underline">Live Demo</a>
              <a href="#" className="text-blue-600 underline">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>You can reach me via email at <a href="mailto:your@email.com" className="underline text-blue-600">your@email.com</a></p>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com/yourusername" className="text-blue-600 underline">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" className="text-blue-600 underline">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
