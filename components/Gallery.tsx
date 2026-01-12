
import React from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="px-6 max-w-7xl mx-auto">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden border border-white/5 group relative cursor-pointer shadow-lg">
            <img 
              src={img} 
              alt={`Galeria ${i}`} 
              className="w-full h-auto object-cover transform transition duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
