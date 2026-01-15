// src/components/Skillscard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Skillscard({ title, image, to }) {
  return (
    <Link to={to} className='group'>
      <div
        className='
          relative h-64 rounded-xl overflow-hidden
          shadow-lg
          transition-transform duration-300
          hover:scale-105
        '
      >
        {/* IMAGE FULL */}
        <img
          src={image}
          alt={title}
          className='
            absolute inset-0
            w-full h-full
            object-cover
            group-hover:scale-110
            transition duration-500
          '
        />

        {/* OVERLAY */}
        <div className='absolute inset-0 bg-black/40'></div>

        {/* TEXT */}
        <div className='relative z-10 h-full flex items-end p-5'>
          <h3 className='text-white text-xl font-semibold drop-shadow'>
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
