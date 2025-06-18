import Image from "next/image";
import Navbar from "./Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-12">
        {/* Hero Section */}
        <section className="text-center space-y-4 mb-20">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/me-placeholder.jpg"
              alt="Stephen Gray"
              width={150}
              height={150}
              className="rounded-full border-4 border-blue-600"
            />
            <h1 className="text-4xl sm:text-6xl font-bold">Hi, I&apos;m Stephen Gray</h1>
            <p className="text-lg sm:text-xl max-w-xl mx-auto">
              Aspiring Software developer focused on building responsive web apps with clean design and efficient code.
            </p>
            <a
              href="#projects"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg 
                         hover:bg-blue-700 hover:opacity-80 transition-opacity duration-300"
            >
              View My Projects
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {["JavaScript", "React", "Next.js", "TailwindCSS", "C++", "Git", "HTML", "Python", "Jquery", "CSS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </section>

        {/* Business Card Section */}
        <section className="mb-20 text-center" id="contact">
          <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
          <div className="inline-block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-left max-w-md">
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src="/me-placeholder.jpg"
                alt="Stephen Gray"
                width={500}
                height={100}
                className="rounded-full border"
              />
              <div>
                <h3 className="text-xl font-bold">Stephen Gray</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Software Developer</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:you@example.com" className="text-blue-500">
                  you@example.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p>
                <strong>Location:</strong> Little Rock, AR
              </p>
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
