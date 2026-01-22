import React from "react";

export default function MLitem({ model }) {
  return (
    <div className='border border-gray-800 p-6 rounded-2xl bg-gradient-to-br from-[#0a0a0a] to-[#0f111a] hover:border-indigo-500/50 transition-all group'>
      {/* Header */}
      <div className='flex justify-between items-start mb-6'>
        <div className='p-3 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors'>
          <div className='w-6 h-6 border-2 border-indigo-400 rounded-sm rotate-45'></div>
        </div>

        <div className='text-right'>
          <p className='text-[10px] text-gray-500 uppercase'>Test Accuracy</p>
          <p className='text-xl font-bold text-indigo-400 font-mono'>
            {model.accuracy}
          </p>
        </div>
      </div>

      {/* Title */}
      <h2 className='text-xl font-bold text-white mb-2'>{model.name}</h2>

      {/* Description */}
      <p className='text-sm text-gray-500 mb-4 leading-relaxed'>
        {model.description}
      </p>

      {/* Tech Stack */}
      <div className='space-y-3'>
        <div className='flex flex-wrap gap-2'>
          {model.tech.map((t) => (
            <span
              key={t}
              className='text-[10px] font-mono bg-indigo-500/5 text-indigo-300 px-2 py-1 rounded border border-indigo-500/20'
            >
              {t}
            </span>
          ))}
        </div>

        {/* Dataset */}
        <p className='text-[11px] font-mono text-gray-600 italic'>
          Source: {model.dataset}
        </p>
      </div>
    </div>
  );
}
