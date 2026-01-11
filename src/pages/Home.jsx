import React from "react";

export default function Home() {
  return (
    <div className='pt-20'>
      <Hero />
      <Features />
    </div>
  );
}

function Hero() {
  return (
    <section className='min-h-screen flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white'>
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
          Bangun Aplikasi Modern
        </h2>
        <p className='text-lg md:text-xl mb-6'>Vite + React + Tailwind CSS</p>
        <button className='px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition'>
          Mulai Sekarang
        </button>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { title: "Cepat", desc: "Build super cepat dengan Vite" },
    { title: "Modern", desc: "React + Tailwind CSS" },
    { title: "Responsif", desc: "Tampilan optimal semua device" },
  ];

  return (
    <section className='py-20 bg-gray-100'>
      <div className='max-w-7xl mx-auto px-6'>
        <h3 className='text-3xl font-bold text-center mb-12'>Fitur Unggulan</h3>
        <div className='grid md:grid-cols-3 gap-8'>
          {items.map((item, i) => (
            <div
              key={i}
              className='bg-white p-6 rounded-2xl shadow text-center'
            >
              <h4 className='text-xl font-semibold mb-2'>{item.title}</h4>
              <p className='text-gray-600'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
