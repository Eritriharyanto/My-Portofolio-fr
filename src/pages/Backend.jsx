import React from "react";
import Footer from "../components/Footer";
import Backenditem from "../components/Backenditem";
import backenditems from "../data/backenditems";

export default function Backend() {
  return (
    <div className='min-h-screen flex flex-col bg-[#050505] text-[#d1d5db] font-sans selection:bg-emerald-500 selection:text-black'>
      {/* Background */}
      <div
        className='fixed inset-0 z-0 opacity-[0.05]'
        style={{
          backgroundImage: "radial-gradient(#10b981 0.5px, transparent 0.5px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className='pt-32 max-w-5xl mx-auto px-6 mb-20 flex-grow relative z-10'>
        {/* Header */}
        <div className='mb-16 border-b border-gray-800 pb-8'>
          <h1 className='text-4xl font-mono text-emerald-400 mb-2 tracking-tighter'>
            &gt; Backend_Systems
          </h1>
          <p className='text-gray-500 font-mono text-sm uppercase tracking-widest'>
            Designing scalable architectures and robust server-side logic.
          </p>
        </div>

        {/* List */}
        <div className='space-y-12'>
          {backenditems.map((item) => (
            <Backenditem key={item.id} item={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
