import React from "react";
import Footer from "../components/Footer";
import Uiuxitem from "../components/Uiuxitem";
import uiuxitems from "../data/uiuxitems";

export default function UIUX() {
  return (
    <div className='min-h-screen flex flex-col relative bg-[#0f172a] text-white overflow-hidden'>
      {/* Background Artistik */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px]' />
        <div className='absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px]' />
        <div
          className='absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay'
          style={{
            backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
          }}
        ></div>
      </div>

      <div className='pt-32 max-w-6xl mx-auto px-6 mb-20 flex-grow relative z-10'>
        {/* Header */}
        <div className='mb-24'>
          <h1 className='text-6xl font-extrabold mb-6 tracking-tighter'>
            UI/UX Case Studies
          </h1>
          <p className='text-slate-400 text-xl max-w-2xl border-l-4 border-purple-500 pl-6'>
            Eksplorasi antarmuka digital yang berfokus pada pengalaman pengguna
            dan efisiensi fungsional.
          </p>
        </div>

        {/* Case Study List */}
        <div className='space-y-40'>
          {uiuxitems.map((study) => (
            <Uiuxitem key={study.id} study={study} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
