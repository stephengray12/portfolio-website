"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Taskbar() {
  const [open, setOpen] = useState(false);

  // Keep these in sync with section IDs in page.js and the resume filename in /public
  const items = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/StephenGray-Resume.pdf", isFile: true },
  ];

  return (
    <header className="bg-black text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {items.map((item) =>
            item.isFile ? (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-blue-400 transition-colors duration-500"
                // remove download if you want it to open in the browser instead of downloading
                // download
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-blue-400 transition-colors duration-500"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 px-4">
          <nav className="flex flex-col gap-4 bg-black p-4 rounded-lg">
            {items.map((item) =>
              item.isFile ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-blue-400 transition-colors duration-300"
                  onClick={() => setOpen(false)}
                  // download
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-blue-400 transition-colors duration-300"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
