import React, { useState } from "react";
import Footer from "../components/Footer";
import GalleryItem from "../components/GalleryItem";
import galleryItems from "../data/galleryitems";

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div className='min-h-screen flex flex-col relative overflow-hidden bg-slate-50'>
      {/* background blobs tetap */}

      <div className='pt-32 max-w-6xl mx-auto px-6 mb-20 flex-grow relative z-10'>
        <div className='mb-12'>
          <h1 className='text-4xl font-bold mb-4 tracking-tight'>Gallery</h1>
          <p className='text-gray-600 text-lg'>
            Eksplorasi visual saya dalam desain grafis, ilustrasi digital, dan
            UI/UX.
          </p>
        </div>

        {/* Filter */}
        <div className='flex gap-3 mb-10 overflow-x-auto pb-2 no-scrollbar'>
          {["all", "logo", "art", "uiux"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 capitalize border ${
                filter === cat
                  ? "bg-black text-white border-black shadow-lg shadow-black/20"
                  : "bg-white/50 backdrop-blur-sm text-gray-500 border-gray-200 hover:border-gray-400"
              }`}
            >
              {cat === "uiux" ? "UI/UX" : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className='columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6'>
          {filteredItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
