// src/components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className='fixed top-0 w-full bg-white shadow-sm z-50'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        {/* LOGO */}
        <button
          onClick={() => handleScroll("hero")}
          className='text-xl font-bold text-blue-600 hover:text-blue-700'
        >
          MyApp
        </button>

        {/* HAMBURGER */}
        <button onClick={() => setOpen(!open)} className='md:hidden text-2xl'>
          ☰
        </button>

        {/* MENU */}
        <div
          className={`
            flex items-center gap-10
            md:static fixed
            left-1/2 -translate-x-1/2 md:translate-x-0
            top-16 md:top-0
            transition-all duration-300
            ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
            md:opacity-100 md:pointer-events-auto
            bg-white md:bg-transparent
            px-6 py-4 md:p-0
            rounded-lg md:rounded-none
            shadow-md md:shadow-none
          `}
        >
          <button
            onClick={() => handleScroll("hero")}
            className='hover:text-blue-600'
          >
            Home
          </button>

          <button
            onClick={() => handleScroll("about")}
            className='hover:text-blue-600'
          >
            About
          </button>

          <button className='hover:text-blue-600'>Gallery</button>
          <button className='hover:text-blue-600'>Project</button>
        </div>
      </div>
    </nav>
  );
}
