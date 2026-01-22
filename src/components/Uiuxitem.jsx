import React from "react";

export default function Uiuxitem({ study }) {
  return (
    <div className='group relative'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
        {/* Info Panel */}
        <div className='lg:col-span-4 lg:sticky lg:top-40 space-y-6'>
          {/* Tags */}
          <div className='flex gap-2'>
            {study.tags.map((tag) => (
              <span
                key={tag}
                className='text-xs font-mono px-3 py-1 border border-slate-700 rounded-full text-slate-400 uppercase'
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className='text-4xl font-bold leading-tight group-hover:text-purple-400 transition-colors'>
            {study.title}
          </h2>

          {/* Problem & Solution */}
          <div className='space-y-4 pt-4 text-slate-400'>
            <p>
              <strong className='text-white block mb-1 underline decoration-purple-500'>
                The Problem:
              </strong>{" "}
              {study.problem}
            </p>

            <p>
              <strong className='text-white block mb-1 underline decoration-emerald-500'>
                The Solution:
              </strong>{" "}
              {study.solution}
            </p>
          </div>

          {/* Button */}
          <button className='mt-6 px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-purple-500 hover:text-white transition-all transform hover:-translate-y-1'>
            View Full Case Study
          </button>
        </div>

        {/* Image Preview */}
        <div className='lg:col-span-8 overflow-hidden rounded-3xl shadow-2xl border border-slate-800 bg-slate-900'>
          <img
            src={study.img}
            alt={study.title}
            className='w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500'
          />
        </div>
      </div>
    </div>
  );
}
