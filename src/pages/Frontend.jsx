import React from "react";
import Footer from "../components/Footer";

export default function Frontend() {
  const devProjects = [
    {
      id: 1,
      name: "React Dashboard Lab",
      version: "v2.4.0",
      performance: "98/100",
      tech: ["React", "TypeScript", "Zustand"],
      features: [
        "Real-time Data Fetching",
        "Dark Mode Logic",
        "Skeleton Loading",
      ],
      repo: "https://github.com/kingeri/dashboard-lab",
    },
    {
      id: 2,
      name: "Custom Tailwind Components",
      version: "v1.0.2",
      performance: "100/100",
      tech: ["Tailwind CSS", "Headless UI"],
      features: ["Fully Accessible", "Highly Customizable", "Zero Runtime CSS"],
      repo: "https://github.com/kingeri/ui-components",
    },
  ];

  return (
    <div className='min-h-screen flex flex-col bg-[#050505] text-[#d1d5db] font-sans selection:bg-cyan-500 selection:text-black'>
      {/* Background: Subtle Code Grid */}
      <div
        className='fixed inset-0 z-0 opacity-[0.05]'
        style={{
          backgroundImage: "radial-gradient(#00f2ff 0.5px, transparent 0.5px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className='pt-32 max-w-5xl mx-auto px-6 mb-20 flex-grow relative z-10'>
        <div className='mb-16 border-b border-gray-800 pb-8'>
          <h1 className='text-4xl font-mono text-cyan-400 mb-2 tracking-tighter'>
            &gt; Frontend_Development
          </h1>
          <p className='text-gray-500 font-mono text-sm uppercase tracking-widest'>
            Building performant and accessible web experiences.
          </p>
        </div>

        {/* Technical List Layout */}
        <div className='space-y-12'>
          {devProjects.map((item) => (
            <div
              key={item.id}
              className='group border border-gray-800 rounded-lg p-8 bg-[#0a0a0a] hover:border-cyan-500/50 transition-all'
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
                        className='text-[10px] font-mono text-cyan-500'
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Score Indicator */}
                <div className='flex items-center gap-2 bg-black/40 border border-gray-800 px-4 py-2 rounded-full'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                  <span className='text-xs font-mono text-green-500 font-bold'>
                    Lighthouse: {item.performance}
                  </span>
                </div>
              </div>

              {/* Technical Features List */}
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
                <div className='flex flex-col justify-end items-end'>
                  <a
                    href={item.repo}
                    className='text-sm font-mono text-gray-400 hover:text-white flex items-center gap-2 transition-colors'
                  >
                    [ view_repository ]
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
