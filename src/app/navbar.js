'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Install: npm install lucide-react
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const projects = [
    { name: "Portfolio", href: "#projects" },
    { name: "Weather App", href: "#projects" }, // Adjust hrefs if needed
    { name: "ToDo App", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-gray-900 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <Link href="/" className="text-lg font-bold">
          Stephen Gray
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {projects.map((project) => (
            <Link key={project.name} href={project.href} className="hover:text-blue-400 transition-colors duration-300">
              {project.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 px-4">
          <nav className="flex flex-col gap-4 bg-gray-800 p-4 rounded-lg">
            {projects.map((project) => (
              <Link
                key={project.name}
                href={project.href}
                className="hover:text-blue-400 transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                {project.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
