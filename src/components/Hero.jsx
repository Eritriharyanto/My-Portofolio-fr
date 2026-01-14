// src/components/Hero.jsx
import React from "react";
import eth from "../img/eth.png";
import logo from "../img/logo.png";

export default function Hero() {
  return (
    <section
      id='hero'
      className='w-full min-h-screen flex items-center pt-24 md:pt-32
px-4 sm:px-6 md:px-10
'
    >
      {/* KIRI */}
      <div className='w-1/2 max-w-[600px]'>
        <h2
          style={{ fontFamily: "'Irish Grover', cursive" }}
          className='text-4xl sm:text-5xl md:text-7xl font-bold text-orange-500 text-stroke-black'
        >
          Hello, I'm{" "}
          <span className='text-4xl sm:text-5xl md:text-7xltext-black text-stroke-orange'></span>
        </h2>
        {/* GRAFFITI NAME */}
        <div className='mt-6'>
          {/* ERI + TRI */}
          <div className='flex items-end gap-3'>
            <img src={eth} alt='eth' className='w-[300px] md:w-[800px]' />
          </div>
        </div>
        <button
          style={{ fontFamily: "'Irish Grover', cursive" }}
          className='mt-8 bg-red-500 mb-10 text-white px-8 py-3 rounded-lg hover:bg-red-600 '
        >
          More
        </button>
      </div>

      {/* KANAN */}
      <div className='w-1/2 flex justify-center self-center'>
      <img src={logo} alt='logo' />
        <div className='w-72 h-72 rounded-full bg-blue-700 -mt-6' />
      </div>
    </section>
  );
}
