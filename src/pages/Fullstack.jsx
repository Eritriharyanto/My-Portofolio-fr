import React from "react";
import Footer from "../components/Footer";
import Fullstackitem from "../components/Fullstackitem"; // 👈 IMPORT COMPONENT
import fullstackitems from "../data/fullstackitems"; // 👈 IMPORT DATA

export default function Fullstack() {
  return (
    <div className='min-h-screen flex flex-col bg-[#050505] text-[#d1d5db] font-sans selection:bg-amber-500 selection:text-black'>
      {/* Background */}
      <div
        className='fixed inset-0 z-0 opacity-[0.05]'
        style={{
          backgroundImage: "radial-gradient(#f59e0b 0.5px, transparent 0.5px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className='pt-32 max-w-5xl mx-auto px-6 mb-20 flex-grow relative z-10'>
        <div className='mb-16 border-b border-gray-800 pb-8'>
          <h1 className='text-4xl font-mono text-amber-400 mb-2 tracking-tighter'>
            &gt; Fullstack_Engineering
          </h1>
          <p className='text-gray-500 font-mono text-sm uppercase tracking-widest'>
            Bridging the gap between interface and infrastructure.
          </p>
        </div>

        <div className='space-y-12'>
          {fullstackitems.map((item) => (
            <Fullstackitem key={item.id} item={item} /> // 👈 PANGGIL COMPONENT
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
