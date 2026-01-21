import React from "react";
import Footer from "../components/Footer";

export default function Fullstack() {
  const fullstackApps = [
    {
      id: 1,
      name: "SaaS Management Platform",
      version: "v3.0.0",
      type: "Full-Cycle",
      tech: ["Next.js", "PostgreSQL", "tRPC", "AWS"],
      layers: [
        "Client-Side Rendering",
        "Serverless Functions",
        "Relational Database",
      ],
      repo: "https://github.com/kingeri/saas-platform",
    },
  ];

  return (
    <div className='min-h-screen flex flex-col bg-[#050505] text-[#d1d5db] font-sans selection:bg-amber-500 selection:text-black'>
      {/* Background: Combined Grid (Amber) */}
      <div
        className='fixed inset-0 z-0 opacity-[0.05]'
        style={{
          backgroundImage: "radial-gradient(#f59e0b 0.5px, transparent 0.5px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className='pt-32 max-w-5xl mx-auto px-6 mb-20 flex-grow relative z-10'>
        <div className='mb-16 border-b border-gray-800 pb-8'>
          <h1 className='text-4xl font-mono text-amber-400 mb-2 tracking-tighter'>
            &gt; Fullstack_Engineering
          </h1>
          <p className='text-gray-500 font-mono text-sm uppercase tracking-widest'>
            Bridging the gap between interface and infrastructure.
          </p>
        </div>

        <div className='space-y-12'>
          {fullstackApps.map((item) => (
            <div
              key={item.id}
              className='group border border-gray-800 rounded-lg p-8 bg-[#0a0a0a] hover:border-amber-500/50 transition-all'
            >
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
                  <div className='flex gap-2'>
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className='text-[10px] font-mono text-amber-500'
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='flex items-center gap-2 bg-black/40 border border-gray-800 px-4 py-2 rounded-full'>
                  <div className='w-2 h-2 bg-amber-500 rounded-full animate-ping'></div>
                  <span className='text-xs font-mono text-amber-500 font-bold uppercase'>
                    System: Integrated
                  </span>
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-900 pt-6'>
                <ul className='space-y-2'>
                  <p className='text-xs font-mono text-gray-500 mb-3 uppercase tracking-tighter'>
                    // Stack_Architecture
                  </p>
                  {item.layers.map((layer) => (
                    <li
                      key={layer}
                      className='text-sm flex items-center gap-2 italic'
                    >
                      <span className='text-amber-500'>::</span> {layer}
                    </li>
                  ))}
                </ul>
                <div className='flex flex-col justify-end items-end text-right'>
                  <p className='text-[10px] text-gray-600 mb-2 font-mono uppercase tracking-widest'>
                    Repository Status: Public
                  </p>
                  <a
                    href={item.repo}
                    className='text-sm font-mono text-gray-400 hover:text-white flex items-center gap-2 transition-colors'
                  >
                    [ fetch_full_source ]
                  </a>
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
