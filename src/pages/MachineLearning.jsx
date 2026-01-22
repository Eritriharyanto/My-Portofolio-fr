import React from "react";
import Footer from "../components/Footer";
import Mlitem from "../components/Mlitem";
import mlitems  from "../data/mlitems";

export default function MachineLearning() {
  return (
    <div className='min-h-screen flex flex-col bg-[#050505] text-[#d1d5db] relative overflow-hidden'>
      {/* Background Decor */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-[20%] left-[10%] w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px]' />
        <div className='absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]' />
      </div>

      <div className='pt-32 max-w-5xl mx-auto px-6 mb-20 flex-grow relative z-10'>
        {/* Header */}
        <div className='mb-16 text-center lg:text-left'>
          <h1 className='text-4xl font-mono text-indigo-400 mb-2 tracking-tighter'>
            [ research_archive ] Machine_Learning
          </h1>
          <p className='text-gray-500 font-mono text-sm uppercase tracking-[0.3em]'>
            Decoding patterns through mathematical models.
          </p>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {mlitems.map((model) => (
            <Mlitem key={model.id} model={model} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
