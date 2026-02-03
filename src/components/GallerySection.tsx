import { useState } from 'react';
import { X } from 'lucide-react';

import civicRaceway from '@/assets/civic-raceway.jpg';
import raceDay from '@/assets/race-day.jpg';
import engineRed from '@/assets/engine-red.jpg';
import engineGreen from '@/assets/engine-green.jpg';
import r32Skyline from '@/assets/r32-skyline.jpg';
import civicFlames from '@/assets/civic-flames.jpg';
import datsunWhelie from '@/assets/datsun-wheelie.jpg';
import engineBuild from '@/assets/engine-build.jpg';

const galleryImages = [
  { src: r32Skyline, alt: 'R32 Skyline GTR in the shop', category: 'Builds' },
  { src: engineRed, alt: 'Red valve cover Honda engine', category: 'Builds' },
  { src: engineGreen, alt: 'Green Honda engine bay with turbo', category: 'Builds' },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-carbon">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-racing-blue uppercase tracking-widest mb-4">
            Our Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Customer <span className="text-gradient-racing">Builds Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From R32 Skylines to turbo-charged Hondas, every build tells a story of 
            passion and precision. Here's a glimpse of what rolls through our shop.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative rounded-lg overflow-hidden border border-border hover:border-racing-blue/50 transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-xs font-display font-medium text-racing-blue uppercase tracking-widest">
                      {image.category}
                    </span>
                    <p className="text-sm text-foreground mt-1">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
