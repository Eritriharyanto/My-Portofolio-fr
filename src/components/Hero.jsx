// src/components/Hero.jsx

import React from "react";
// import avatar from "../assets/avatar.png";

export default function Hero() {
  return (
    <section
      id='hero'
      className='w-full min-h-screen flex items-center px-10 pt-24'
    >
      {/* KIRI */}
      <div className='w-1/2'>
        <h2 className='text-3xl font-bold text-orange-500'>
          Hello, I'm <span className='text-black'>Masyarakat</span>
        </h2>

        <h1 className='text-6xl font-extrabold mt-4 leading-tight'>
          Eri Tri <br /> Haryanto
        </h1>

        <button className='mt-8 bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600'>
          More
        </button>
      </div>

      {/* KANAN */}
      <div className='w-1/2 flex justify-center'>
        <div className='w-72 h-72 rounded-full overflow-hidden bg-blue-700' />
      </div>
    </section>
  );
}
