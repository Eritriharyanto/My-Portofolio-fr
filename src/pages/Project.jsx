import React from "react";
import Footer from "../components/Footer";
import ProjectCard from "../components/Projectitem";
import projects from "../data/projectitems";

export default function Project() {
  return (
    <div className='min-h-screen flex flex-col bg-white relative'>
      {/* Background */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] -z-10'></div>

      <div className='pt-32 max-w-6xl mx-auto px-6 mb-20 flex-grow'>
        {/* Header */}
        <div className='mb-12'>
          <h1 className='text-4xl font-bold mb-4'>Featured Projects</h1>
          <p className='text-gray-600 text-lg max-w-2xl'>
            Berikut adalah beberapa hasil pengembangan software dan website yang
            telah saya kerjakan.
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
