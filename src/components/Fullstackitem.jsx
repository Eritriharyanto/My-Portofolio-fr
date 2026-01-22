import React from "react";

export default function FullstackItem({ item }) {
  return (
    <div className='group border border-gray-800 rounded-lg p-8 bg-[#0a0a0a] hover:border-amber-500/50 transition-all'>
      {/* Header */}
      <div className='flex flex-col md:flex-row justify-between items-start gap-4 mb-6'>
        <div>
          <div className='flex items-center gap-3 mb-2'>
            <h2 className='text-2xl font-bold text-white tracking-tight'>
              {item.name}
            </h2>
            <span className='text-[10px] font-mono bg-gray-800 px-2 py-0.5 rounded text-gray-400'>
              {item.version}
            </span>
          </div>

          {/* Tech Stack */}
          <div className='flex gap-2'>
            {item.tech.map((t) => (
              <span key={t} className='text-[10px] font-mono text-amber-500'>
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className='flex items-center gap-2 bg-black/40 border border-gray-800 px-4 py-2 rounded-full'>
          <div className='w-2 h-2 bg-amber-500 rounded-full animate-ping'></div>
          <span className='text-xs font-mono text-amber-500 font-bold uppercase'>
            System: Integrated
          </span>
        </div>
      </div>

      {/* Layers */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-900 pt-6'>
        <ul className='space-y-2'>
          <p className='text-xs font-mono text-gray-500 mb-3 uppercase tracking-tighter'>
            // Stack_Architecture
          </p>

          {item.layers.map((layer) => (
            <li key={layer} className='text-sm flex items-center gap-2 italic'>
              <span className='text-amber-500'>::</span> {layer}
            </li>
          ))}
        </ul>

        {/* Repo */}
        <div className='flex flex-col justify-end items-end text-right'>
          <p className='text-[10px] text-gray-600 mb-2 font-mono uppercase tracking-widest'>
            Repository Status: Public
          </p>

          <a
            href={item.repo}
            className='text-sm font-mono text-gray-400 hover:text-white transition-colors'
          >
            [ fetch_full_source ]
          </a>
        </div>
      </div>
    </div>
  );
}
