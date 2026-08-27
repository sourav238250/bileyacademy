import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Sparkles, 
  Maximize2, 
  Calendar, 
  MapPin, 
  Tag, 
  Filter, 
  ExternalLink,
  ChevronRight,
  Eye,
  Award,
  Layers
} from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/galleryData';
import { GalleryCategory, GalleryItem } from '../types';
import { GalleryModal } from './GalleryModal';

interface GallerySectionProps {
  onOpenInquiry?: (context?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const handleNext = () => {
    if (!activeModalItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeModalItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveModalItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeModalItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeModalItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveModalItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase tracking-wider mb-4">
            <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>Campus Gallery & Official Noticeboard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white mb-4">
            Inside <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400">Biley Academy</span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Explore our state-of-the-art coaching facilities, vibrant smart classrooms, science discovery laboratories, one-on-one mentorship spaces, and official academic session notices.
          </p>
        </div>

        {/* Gallery Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {GALLERY_CATEGORIES.map(category => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as GalleryCategory)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                <span>{category.label}</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-black ${
                  isActive ? 'bg-slate-950 text-amber-300' : 'bg-slate-800 text-slate-400'
                }`}>
                  {category.id === 'all' 
                    ? GALLERY_ITEMS.length 
                    : GALLERY_ITEMS.filter(i => i.category === category.id).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. Photo & Notice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group cursor-pointer rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col"
            >
              {/* Image Container with Hover Overlay */}
              <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 shadow-md">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Floating Enlarge Icon on Hover */}
                <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-amber-500 text-slate-950 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg scale-90 group-hover:scale-100">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Text Information */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {item.caption}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-800/80 pt-3">
                    <div className="flex items-center space-x-1 text-slate-400">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-amber-400 font-bold">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Photo</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state if any filter matches none */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
            <ImageIcon className="w-8 h-8 text-slate-500 mx-auto mb-2" />
            <p className="text-sm text-slate-400">No photos found in this category.</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-3 text-xs text-amber-400 hover:underline font-bold"
            >
              View all photos
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <GalleryModal
          item={activeModalItem}
          allItems={filteredItems}
          onClose={() => setActiveModalItem(null)}
          onSelectNext={handleNext}
          onSelectPrev={handlePrev}
          onOpenInquiry={onOpenInquiry}
        />
      )}
    </section>
  );
};
