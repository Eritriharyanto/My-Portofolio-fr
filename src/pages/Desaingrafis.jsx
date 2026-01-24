// src/pages/Desaingrafis.jsx

import React from "react";
import Footer from "../components/Footer";
import Desaingitem from "../components/Desaingitem";
import desaingrafisitems from "../data/desaingrafisitems";

export default function DesainGrafis() {
  return (
    <div className='min-h-screen flex flex-col relative bg-[#fcfcfc]'>
      {/* Background Dot Pattern */}
      <div
        className='absolute inset-0 z-0 opacity-20'
        style={{
          backgroundImage: "radial-gradient(#444 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className='pt-32 max-w-5xl mx-auto px-6 mb-20 flex-grow relative z-10'>
        {/* Header */}
        <div className='mb-20 text-center'>
          <h1 className='text-5xl font-black mb-4 tracking-tighter uppercase italic'>
            Graphic Design
          </h1>
          <p className='text-gray-500 text-lg italic'>
            “Design is thinking made visual.”
          </p>
        </div>

        {/* Alternating Section */}
        <div className='space-y-32'>
          {desaingrafisitems.map((item, index) => (
            <Desaingitem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
