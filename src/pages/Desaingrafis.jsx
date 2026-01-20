import React from "react";
import Footer from "../components/Footer";

export default function DesainGrafis() {
  const designs = [
    {
      id: 1,
      title: "KingEri Visual Identity",
      category: "Branding",
      img: "https://picsum.photos/800/600?random=21",
      description:
        "Eksplorasi logo dan identitas visual menggunakan konsep minimalis dengan sentuhan playful.",
      tools: ["Illustrator", "Photoshop"],
    },
    {
      id: 2,
      title: "Abstract Poster Series",
      category: "Digital Art",
      img: "https://picsum.photos/800/600?random=22",
      description:
        "Serangkaian poster eksperimental yang mengeksplorasi teori warna dan bentuk geometri abstrak.",
      tools: ["Photoshop", "Canva"],
    },
  ];

  return (
    <div className='min-h-screen flex flex-col relative bg-[#fcfcfc]'>
      {/* Background: Dot Pattern untuk kesan kertas desain */}
      <div
        className='absolute inset-0 z-0 opacity-20'
        style={{
          backgroundImage: "radial-gradient(#444 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className='pt-32 max-w-5xl mx-auto px-6 mb-20 flex-grow relative z-10'>
        <div className='mb-20 text-center'>
          <h1 className='text-5xl font-black mb-4 tracking-tighter uppercase italic'>
            Graphic Design
          </h1>
          <p className='text-gray-500 text-lg italic'>
            “Design is thinking made visual.”
          </p>
        </div>

        {/* Alternating Layout */}
        <div className='space-y-32'>
          {designs.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
            >
              {/* Image Side dengan Shadow Artistik */}
              <div className='w-full md:w-3/5 group relative'>
                <div className='absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000'></div>
                <div className='relative overflow-hidden rounded-lg shadow-2xl'>
                  <img
                    src={item.img}
                    alt={item.title}
                    className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700'
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className='w-full md:w-2/5 space-y-4'>
                <span className='text-orange-600 font-mono text-sm font-bold uppercase tracking-widest'>
                  // {item.category}
                </span>
                <h2 className='text-3xl font-bold tracking-tight'>
                  {item.title}
                </h2>
                <p className='text-gray-600 leading-relaxed text-sm'>
                  {item.description}
                </p>
                <div className='flex gap-2 pt-2'>
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className='text-[10px] border border-gray-300 px-2 py-1 rounded-full text-gray-400 font-medium italic'
                    >
                      {tool}
                    </span>
                  ))}
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
