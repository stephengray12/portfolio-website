import Image from "next/image";
import Taskbar from "./taskbar";

export default function Home() {
  return (
    <>
      <Taskbar />
      <main className="pt-24 min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white px-6 py-12">
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
              <h1 className="text-4xl sm:text-6xl font-bold">Hi, I&apos;m Stephen Gray</h1>
              <p className="text-lg sm:text-xl max-w-xl">
                Aspiring Software Engineer focused on building responsive web apps with clean design and efficient code.
              </p>
              <a
                href="#projects"
                className="inline-block mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg 
                           hover:bg-blue-700 hover:opacity-80 transition-opacity duration-300"
              >
                View My Projects
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
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
          <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
          <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-6 mb-4">
              <Image
                src="/profile.PNG"
                alt="Stephen Gray"
                width={150}
                height={150}
                className="rounded-full border"
              />
              <div>
                <h3 className="text-2xl font-bold">Stephen Gray</h3>
                <p className="text-base text-gray-600 dark:text-gray-300">Software Engineer</p>
                <div className="space-y-1 mt-4 text-sm">
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
