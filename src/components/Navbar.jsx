// src/components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className='fixed top-0 w-full bg-white shadow-sm z-50'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        {/* LOGO */}
        <button
          onClick={() => handleScroll("hero")}
          style={{ fontFamily: "'Irish Grover', cursive" }}
          className='text-xl font-bold text-yellow-500 hover:text-red-700'
        >
          <img
            src='/src/img/logo.png'
            alt='logo'
            className='w-10 h-10 inline-block mr-2'
          />
          KingEri
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
            style={{ fontFamily: "'Irish Grover', cursive" }}
            className=' text-red-700 hover:text-orange-500'
          >
            Home
          </button>

          <button
            onClick={() => handleScroll("about")}
            style={{ fontFamily: "'Irish Grover', cursive" }}
            className='text-red-700 hover:text-orange-500'
          >
            About
          </button>

          <Link
            to='/gallery'
            style={{ fontFamily: "'Irish Grover', cursive" }}
            className='text-red-700 hover:text-orange-500'
          >
            Gallery
          </Link>

          <Link
            to='/project'
            style={{ fontFamily: "'Irish Grover', cursive" }}
            className='text-red-700 hover:text-orange-500'
          >
            Project
          </Link>
        </div>
      </div>
    </nav>
  );
}
