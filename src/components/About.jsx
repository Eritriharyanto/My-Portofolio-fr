// src/components/About.jsx
import React from "react";
import logo from "../img/logo.png";

export default function About() {
  return (
    <section
      id='about'
      className="
    w-full min-h-screen text-white
    pt-24 md:pt-32
    px-4 sm:px-6 md:px-10
    bg-[linear-gradient(rgba(88,28,135,0.85),rgba(88,28,135,0.85)),url('/src/img/Bgrafitti.png')]
    bg-cover bg-center
  "
    >
      {/* JUDUL */}
      <h2
        style={{ fontFamily: "'Irish Grover', cursive" }}
        className='
      text-4xl sm:text-5xl md:text-7xl
      font-bold text-orange-400 text-center
      mb-10 md:mb-16
      text-stroke-black -mt-20
    '
      >
        About Me
      </h2>

      {/* KONTEN */}
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10'>
        {/* FOTO */}
        <div className='w-full md:w-1/3 flex justify-center'>
          <img
            src={logo}
            alt='logo'
            className='
          h-40 sm:h-52 md:h-100 lg:h-82
    w-auto object-contain
          w-auto object-contain
        '
          />
        </div>

        {/* TEKS */}
        <div className='w-full md:w-2/3 text-center md:text-left'>
          <h3 className='text-xl sm:text-2xl font-bold mb-4'>
            Saya <span className='text-orange-300'>Eri Tri Haryanto</span>
          </h3>

          <div className='bg-black/50 p-4 sm:p-6 rounded-lg space-y-4 mb-8'>
            <p className='text-base sm:text-lg leading-relaxed'>
              Saya adalah mahasiswa Informatika aktif yang memiliki ketertarikan
              pada pengembangan web. Saya terbiasa membangun aplikasi
              menggunakan teknologi modern serta memiliki minat yang kuat pada
              UI/UX untuk menciptakan tampilan yang menarik dan pengalaman
              pengguna yang optimal.
            </p>

            <p className='text-base sm:text-lg leading-relaxed'>
              Saya terus mengembangkan kemampuan saya melalui pembelajaran
              mandiri, pengerjaan proyek, dan eksplorasi teknologi baru agar
              dapat menghasilkan aplikasi yang efisien, responsif, dan mudah
              digunakan.
            </p>

            <p className='text-base sm:text-lg leading-relaxed'>
              Saya terbiasa membuat desain visual seperti poster, logo, dan
              konten digital dengan memperhatikan estetika, konsistensi warna,
              serta kenyamanan visual. Melalui desain grafis, saya berusaha
              menyampaikan pesan secara efektif dan menarik, sekaligus mendukung
              kebutuhan branding dan tampilan aplikasi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
