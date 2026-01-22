import React from "react";

export default function FrontendItem({ item }) {
  return (
    <div className='group border border-gray-800 rounded-lg p-8 bg-[#0a0a0a] hover:border-cyan-500/50 transition-all'>
      {/* Header Section */}
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
          <div className='flex gap-2 flex-wrap'>
            {item.tech.map((t) => (
              <span key={t} className='text-[10px] font-mono text-cyan-500'>
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Performance Indicator */}
        <div className='flex items-center gap-2 bg-black/40 border border-gray-800 px-4 py-2 rounded-full'>
          <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
          <span className='text-xs font-mono text-green-500 font-bold'>
            Lighthouse: {item.performance}
          </span>
        </div>
      </div>

      {/* Feature List */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-900 pt-6'>
        <ul className='space-y-2'>
          <p className='text-xs font-mono text-gray-500 mb-3 uppercase tracking-tighter'>
            // Key_Implementations
          </p>

          {item.features.map((feat) => (
            <li key={feat} className='text-sm flex items-center gap-2'>
              <span className='text-cyan-500'>→</span> {feat}
            </li>
          ))}
        </ul>

        {/* Repo Link */}
        <div className='flex flex-col justify-end items-end'>
          <a
            href={item.repo}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm font-mono text-gray-400 hover:text-white flex items-center gap-2 transition-colors'
          >
            [ view_repository ]
          </a>
        </div>
      </div>
    </div>
  );
}
