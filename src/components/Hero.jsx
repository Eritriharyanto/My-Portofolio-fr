// src/components/Hero.jsx
import React from "react";
import eth from "../img/eth.png";
import logo from "../img/logo.png";

export default function Hero() {
  return (
    <section
      id='hero'
      className='
        w-full min-h-screen
        flex flex-col md:flex-row
        items-center
        pt-24 md:pt-32
        px-4 sm:px-6 md:px-10
      '
    >
      {/* KIRI */}
      <div className='flex-1 flex flex-col'>
        <h2
          style={{ fontFamily: "'Irish Grover', cursive" }}
          className='text-4xl sm:text-5xl md:text-7xl font-bold text-orange-500 text-stroke-black'
        >
          Hello, I'm
        </h2>

        <img
          src={eth}
          alt='eth'
          className='mt-6 w-[220px] sm:w-[300px] md:w-[800px]'
        />

        <button
          style={{ fontFamily: "'Irish Grover', cursive" }}
          className='w-full max-w-100  mb-8 bg-red-500 text-white px-1 py-3 rounded-lg hover:bg-red-600'
        >
          More
        </button>
      </div>

      {/* KANAN */}
      <div className='flex-1 flex justify-center mt-12 md:mt-0 mb-8'>
        <img
          src={logo}
          alt='logo'
          className='
            h-40 sm:h-52 md:h-64 lg:h-72
            aspect-square object-contain
          '
        />
      </div>
    </section>
  );
}
