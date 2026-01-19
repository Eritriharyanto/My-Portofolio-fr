import React from "react";

export default function GalleryItem({ item }) {
  return (
    <div className='group relative break-inside-avoid overflow-hidden rounded-xl border border-gray-100 bg-white/40 backdrop-blur-sm transition-all hover:shadow-2xl hover:-translate-y-1'>
      <img
        src={item.img}
        alt={item.title}
        className='w-full object-cover transition-transform duration-700 group-hover:scale-110'
      />

      <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
        <p className='text-xs uppercase tracking-widest text-gray-300 mb-1'>
          {item.category}
        </p>
        <h3 className='text-xl font-semibold text-white'>{item.title}</h3>
        <p className='text-sm text-gray-300 mt-1'>{item.desc}</p>
      </div>
    </div>
  );
}
