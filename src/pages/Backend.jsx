import React from "react";
import Footer from "../components/Footer";

export default function Backend() {
  const serverProjects = [
    {
      id: 1,
      name: "Secure Auth Microservice",
      version: "v1.2.4",
      uptime: "99.9%",
      tech: ["Node.js", "Express", "Redis", "MongoDB"],
      endpoints: [
        "POST /auth/login",
        "GET /user/profile",
        "PATCH /security/reset",
      ],
      repo: "https://github.com/kingeri/auth-service",
    },
    {
      id: 2,
      name: "Inventory Management API",
      version: "v0.8.5",
      uptime: "100%",
      tech: ["PostgreSQL", "Prisma", "Go"],
      endpoints: ["GET /stock/all", "POST /order/create", "DELETE /item/:id"],
      repo: "https://github.com/kingeri/inventory-api",
    },
  ];

  return (
    <div className='min-h-screen flex flex-col bg-[#050505] text-[#d1d5db] font-sans selection:bg-emerald-500 selection:text-black'>
      {/* Background: Subtle Circuit/Node Grid (Emerald) */}
      <div
        className='fixed inset-0 z-0 opacity-[0.05]'
        style={{
          backgroundImage: "radial-gradient(#10b981 0.5px, transparent 0.5px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className='pt-32 max-w-5xl mx-auto px-6 mb-20 flex-grow relative z-10'>
        <div className='mb-16 border-b border-gray-800 pb-8'>
          {/* Header menggunakan Emerald Green */}
          <h1 className='text-4xl font-mono text-emerald-400 mb-2 tracking-tighter'>
            &gt; Backend_Systems
          </h1>
          <p className='text-gray-500 font-mono text-sm uppercase tracking-widest'>
            Designing scalable architectures and robust server-side logic.
          </p>
        </div>

        {/* Technical List Layout (Sama dengan Frontend tapi Hijau) */}
        <div className='space-y-12'>
          {serverProjects.map((item) => (
            <div
              key={item.id}
              className='group border border-gray-800 rounded-lg p-8 bg-[#0a0a0a] hover:border-emerald-500/50 transition-all'
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
                        className='text-[10px] font-mono text-emerald-500'
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Server Status Indicator (Emerald/Green) */}
                <div className='flex items-center gap-2 bg-black/40 border border-gray-800 px-4 py-2 rounded-full'>
                  <div className='w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]'></div>
                  <span className='text-xs font-mono text-emerald-500 font-bold uppercase tracking-tighter'>
                    Status: Active [{item.uptime}]
                  </span>
                </div>
              </div>

              {/* API Endpoints / Key Features */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-900 pt-6'>
                <ul className='space-y-2'>
                  <p className='text-xs font-mono text-gray-500 mb-3 uppercase tracking-tighter'>
                    // Primary_Endpoints
                  </p>
                  {item.endpoints.map((end) => (
                    <li
                      key={end}
                      className='text-sm font-mono flex items-center gap-2'
                    >
                      <span className='text-emerald-500'>cmd_</span> {end}
                    </li>
                  ))}
                </ul>
                <div className='flex flex-col justify-end items-end'>
                  <a
                    href={item.repo}
                    className='text-sm font-mono text-gray-400 hover:text-white flex items-center gap-2 transition-colors'
                  >
                    [ access_db_logs ]
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
