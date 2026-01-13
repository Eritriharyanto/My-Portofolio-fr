// src/components/Skills.jsx

import React from "react";

export default function Skills() {
  const skills = [
    "Desain Grafis",
    "UI/UX",
    "Frontend",
    "Backend",
    "Machine Learning",
    "Fullstack",
  ];

  return (
    <section className='w-full py-20 px-10'>
      <h2 
      style={{ fontFamily: "'Irish Grover', cursive" }}
      className='text-7xl font-bold text-center text-orange-500 mb-12 text-stroke-black'>
        Keahlian
      </h2>

      <div className='grid grid-cols-3 gap-10'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='h-40 bg-gray-200 rounded-lg flex items-end justify-center pb-4 font-bold'
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
