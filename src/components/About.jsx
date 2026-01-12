// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section
      id='about'
      className="
    w-full min-h-screen text-white pt-32 px-10
    bg-[linear-gradient(rgba(88,28,135,0.85),rgba(88,28,135,0.85)),url('/src/img/Bgrafitti.png')]
    bg-cover bg-center
  "
    >
      {/* JUDUL */}
      <h2 className='text-4xl font-bold text-orange-400 text-center mb-10'>
        About Me
      </h2>

      {/* KONTEN */}
      <div className='max-w-6xl mx-auto flex items-center gap-10'>
        {/* FOTO */}
        <div className='w-1/3 flex justify-center'>
          <div className='w-64 h-64 rounded-full bg-blue-700' />
        </div>

        {/* TEKS */}
        <div className='w-2/3'>
          <h3 className='text-2xl font-bold mb-4'>
            Saya <span className='text-orange-300'>Eri Tri Haryanto</span>
          </h3>

          <p className='text-lg leading-relaxed bg-black/50 p-6 rounded-lg'>
            Saya adalah seorang developer yang berfokus pada pengembangan web
            dan mobile. Saya memiliki minat pada UI/UX dan pengembangan aplikasi
            modern yang efisien dan menarik.
          </p>
        </div>
      </div>
    </section>
  );
}
