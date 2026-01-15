// src/components/Hero.jsx
import React from "react";
import eth from "../img/eth.png";
import logo from "../img/logo.png";

export default function Hero() {
  return (
    <section
      id='hero'
      className='
        relative overflow-hidden
        w-full min-h-screen
        flex flex-col md:flex-row
        items-center
        pt-24 md:pt-32
        px-4 sm:px-6 md:px-10
        bg-black
      '
    >
      {/* GRAFFITI WALL BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-[url('/src/img/back2.jpg')]
          bg-cover bg-center
          opacity-30
        "
      />

      {/* DARK OVERLAY */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-900/80 via-black/70 to-black/90' />

      {/* NOISE */}
      {/* <div className="absolute inset-0 bg-[url('/src/img/noise.jpg')] opacity-15 pointer-events-none" /> */}

      {/* SPLASH GRAFFITI */}
      <img
        src='/src/img/splash1.png'
        alt=''
        className='
          absolute top-10 left-5
          w-40 opacity-20 rotate-12
          pointer-events-none
        '
      />
      <img
        src='/src/img/splash2.png'
        alt=''
        className='
          absolute bottom-10 right-5
          w-56 opacity-10 -rotate-12
          pointer-events-none
        '
      />

      {/* ===== CONTENT ===== */}
      <div className='relative z-10 w-full flex flex-col md:flex-row items-center'>
        {/* KIRI */}
        <div className='flex-1 flex flex-col'>
          <h2
            style={{ fontFamily: "'Irish Grover', cursive" }}
            className='
              text-4xl sm:text-5xl md:text-7xl
              font-bold text-orange-500
              text-stroke-black
              animate-[fadeUp_0.8s_ease-out]
            '
          >
            Hello, I'm
          </h2>

          <img
            src={eth}
            alt='eth'
            className='
              mt-6 w-[220px] sm:w-[300px] md:w-[800px]
              animate-[fadeUp_1s_ease-out]
            '
          />

          <button
            style={{ fontFamily: "'Irish Grover', cursive" }}
            className='
              w-full max-w-xs mt-8 mb-8
              bg-red-600 text-white
              px-6 py-3 rounded-lg
              shadow-[0_0_25px_rgba(255,80,80,0.4)]
              hover:bg-red-700 hover:scale-105
              transition
            '
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
              h-40 sm:h-52 md:h-64 lg:h-100
              aspect-square object-contain
              drop-shadow-[0_0_35px_rgba(255,165,0,0.4)]
              animate-[fadeIn_1.2s_ease-out]
            '
          />
        </div>
      </div>
    </section>
  );
}
