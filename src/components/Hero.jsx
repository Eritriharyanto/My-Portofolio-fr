// src/components/Hero.jsx
import React from "react";
import eth from "../img/eth.png";

export default function Hero() {
  return (
    <section
      id='hero'
      className='w-full min-h-screen flex items-center px-10 pt-24'
    >
      {/* KIRI */}
      <div className='w-1/2 max-w-[600px]'>
        <h2 className='text-3xl font-bold text-orange-500'>
          Hello, I'm <span className='text-black'>Masyarakat</span>
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
        <div className='w-72 h-72 rounded-full bg-blue-700 -mt-6' />
      </div>
    </section>
  );
}
