import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='fixed top-0 w-full bg-white shadow-sm z-50'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        {/* LOGO */}
        <Link
          to='/'
          className='text-xl font-bold text-blue-600 hover:text-blue-700'
        >
          MyApp
        </Link>

        {/* BUTTON HAMBURGER (MOBILE) */}
        <button onClick={() => setOpen(!open)} className='md:hidden text-2xl'>
          ☰
        </button>

        {/* MENU */}
        <div
          className={`
            menu flex items-center gap-10
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
          <Link to='/' className='hover:text-blue-600'>
            Home
          </Link>
          <Link to='/about' className='hover:text-blue-600'>
            About
          </Link>
          <Link to='/gallery' className='hover:text-blue-600'>
            Gallery
          </Link>
          <Link to='/profile' className='hover:text-blue-600'>
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
