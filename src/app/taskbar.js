'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import Link from 'next/link';

export default function Taskbar() {
  const [open, setOpen] = useState(false);

  const projects = [
    { name: "Portfolio", href: "#projects" },
  ];

  return (
    <header className="bg-black text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
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
