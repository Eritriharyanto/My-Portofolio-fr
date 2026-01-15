// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* WRAPPER KONTEN */}
      <main className="w-full overflow-x-hidden pt-24">
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}
