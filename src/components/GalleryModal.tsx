import React, { useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Tag, 
  Share2, 
  Download, 
  Sparkles,
  Phone,
  ArrowRight
} from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryModalProps {
  item: GalleryItem | null;
  allItems: GalleryItem[];
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
  onOpenInquiry?: (context?: string) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  item,
  allItems,
  onClose,
  onSelectNext,
  onSelectPrev,
  onOpenInquiry
}) => {
  if (!item) return null;

  const currentIndex = allItems.findIndex(i => i.id === item.id);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onSelectNext, onSelectPrev]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header Bar */}
        <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5 truncate">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {item.categoryLabel}
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Photo {currentIndex + 1} of {allItems.length}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-rose-500 hover:text-white text-slate-300 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Image Frame with Prev/Next Navigation */}
        <div className="relative bg-slate-950 flex items-center justify-center min-h-[300px] sm:min-h-[420px] max-h-[70vh] p-2 sm:p-4 group">
          
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
          />

          {/* Navigation Controls */}
          {allItems.length > 1 && (
            <>
              <button
                onClick={onSelectPrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 backdrop-blur-sm transition-all shadow-xl"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={onSelectNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 backdrop-blur-sm transition-all shadow-xl"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Metadata Details & Caption Footer */}
        <div className="p-4 sm:p-6 bg-slate-900 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
                {item.title}
                {item.isFeaturedBanner && (
                  <span className="text-[10px] uppercase font-black tracking-wider bg-amber-500 text-slate-950 px-2 py-0.5 rounded-md">
                    Featured Notice
                  </span>
                )}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.caption}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded-md text-[11px] bg-slate-800 text-slate-300 border border-slate-700">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap sm:flex-col gap-2.5 flex-shrink-0">
              {onOpenInquiry && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenInquiry(`Gallery Inquired: ${item.title}`);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Inquire About Program</span>
                </button>
              )}

              <a
                href="tel:+919732531730"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Center: 9732531730</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
