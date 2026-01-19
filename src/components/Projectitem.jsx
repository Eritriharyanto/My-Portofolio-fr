import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className='group border border-gray-200 rounded-2xl overflow-hidden hover:border-black transition-all duration-300 bg-white'>
      {/* Image */}
      <div className='h-56 overflow-hidden border-b border-gray-100'>
        <img
          src={project.img}
          alt={project.title}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
        />
      </div>

      {/* Content */}
      <div className='p-6'>
        {/* Tech Stack */}
        <div className='flex gap-2 mb-3 flex-wrap'>
          {project.tech.map((tech) => (
            <span
              key={tech}
              className='text-[10px] px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-bold uppercase tracking-wider'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className='text-2xl font-bold mb-2 group-hover:text-yellow-600 transition-colors'>
          {project.title}
        </h3>

        {/* Description */}
        <p className='text-gray-500 text-sm mb-6 leading-relaxed'>
          {project.desc}
        </p>

        {/* Action */}
        <div className='flex gap-4'>
          <a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm font-semibold underline hover:text-gray-600'
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
