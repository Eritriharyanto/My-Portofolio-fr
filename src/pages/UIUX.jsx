import React from "react";
import Footer from "../components/Footer";

export default function UIUX() {
  const caseStudies = [
    {
      id: 1,
      title: "Finance App: Re-designing the future of banking",
      problem:
        "User merasa kesulitan melakukan transfer cepat dalam kurang dari 3 klik.",
      solution: "Menambahkan fitur 'Quick-Action' di navigasi utama.",
      img: "https://picsum.photos/1200/800?random=31",
      tags: ["Research", "Prototyping"],
      color: "bg-blue-600",
    },
    {
      id: 2,
      title: "EcoHome: IoT Interface for Green Living",
      problem:
        "Kurangnya visualisasi penggunaan energi harian yang mudah dipahami orang awam.",
      solution: "Menerapkan grafik berbasis warna yang intuitif.",
      img: "https://picsum.photos/1200/800?random=32",
      tags: ["UI Design", "Case Study"],
      color: "bg-emerald-600",
    },
  ];

  return (
    <div className='min-h-screen flex flex-col relative bg-[#0f172a] text-white overflow-hidden'>
      {/* Background Artistik: Grainy Gradient */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px]' />
        <div className='absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px]' />
        {/* Overlay Grain Texture */}
        <div
          className='absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay'
          style={{
            backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
          }}
        ></div>
      </div>

      <div className='pt-32 max-w-6xl mx-auto px-6 mb-20 flex-grow relative z-10'>
        <div className='mb-24'>
          <h1 className='text-6xl font-extrabold mb-6 tracking-tighter'>
            UI/UX Case Studies
          </h1>
          <p className='text-slate-400 text-xl max-w-2xl border-l-4 border-purple-500 pl-6'>
            Eksplorasi antarmuka digital yang berfokus pada pengalaman pengguna
            dan efisiensi fungsional.
          </p>
        </div>

        {/* Section List Case Study */}
        <div className='space-y-40'>
          {caseStudies.map((study) => (
            <div key={study.id} className='group relative'>
              <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
                {/* Info (Sticky pada Desktop) */}
                <div className='lg:col-span-4 lg:sticky lg:top-40 space-y-6'>
                  <div className='flex gap-2'>
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className='text-xs font-mono px-3 py-1 border border-slate-700 rounded-full text-slate-400 uppercase'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className='text-4xl font-bold leading-tight group-hover:text-purple-400 transition-colors'>
                    {study.title}
                  </h2>
                  <div className='space-y-4 pt-4 text-slate-400'>
                    <p>
                      <strong className='text-white block mb-1 underline decoration-purple-500'>
                        The Problem:
                      </strong>{" "}
                      {study.problem}
                    </p>
                    <p>
                      <strong className='text-white block mb-1 underline decoration-emerald-500'>
                        The Solution:
                      </strong>{" "}
                      {study.solution}
                    </p>
                  </div>
                  <button className='mt-6 px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-purple-500 hover:text-white transition-all transform hover:-translate-y-1'>
                    View Full Case Study
                  </button>
                </div>

                {/* Visual Showcase */}
                <div className='lg:col-span-8 overflow-hidden rounded-3xl shadow-2xl border border-slate-800 bg-slate-900'>
                  <img
                    src={study.img}
                    alt={study.title}
                    className='w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
