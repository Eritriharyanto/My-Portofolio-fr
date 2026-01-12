// src/pages/home.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className='w-full overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About /> {/* 👈 ABOUT DULU */}
      <Skills /> {/* 👈 BARU KEAHLIAN */}
    </div>
  );
}
