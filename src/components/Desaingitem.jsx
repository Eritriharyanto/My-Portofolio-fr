import React from "react";

export default function DesignItem({ item, index }) {
  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } gap-12 items-center`}
    >
      {/* Image Side */}
      <div className='w-full md:w-3/5 group relative'>
        <div className='absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000'></div>
        <div className='relative overflow-hidden rounded-lg shadow-2xl'>
          <img
            src={item.img}
            alt={item.title}
            className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700'
          />
        </div>
      </div>

      {/* Text Side */}
      <div className='w-full md:w-2/5 space-y-4'>
        <span className='text-orange-600 font-mono text-sm font-bold uppercase tracking-widest'>
          // {item.category}
        </span>

        <h2 className='text-3xl font-bold tracking-tight'>{item.title}</h2>

        <p className='text-gray-600 leading-relaxed text-sm'>
          {item.description}
        </p>

        <div className='flex gap-2 pt-2 flex-wrap'>
          {item.tools.map((tool) => (
            <span
              key={tool}
              className='text-[10px] border border-gray-300 px-2 py-1 rounded-full text-gray-400 font-medium italic'
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
