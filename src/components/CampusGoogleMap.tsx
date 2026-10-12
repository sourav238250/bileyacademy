import React, { useState, useCallback } from 'react';
import { 
  APIProvider, 
  Map, 
  AdvancedMarker, 
  Pin, 
  InfoWindow,
  useMap 
} from '@vis.gl/react-google-maps';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check, 
  Bus, 
  Compass, 
  Layers, 
  Maximize2, 
  Minimize2,
  Share2,
  Clock,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CAMPUS_LOCATION = {
  lat: 22.276818,
  lng: 87.544029,
  nameEn: 'Biley Academy Campus',
  nameBn: 'বিলে অ্যাকাডেমি ক্যাম্পাস',
  addressEn: 'Jamna, Pingla, Paschim Medinipur, PIN-721140, West Bengal, India',
  addressBn: 'যমুনা, পিংলা, পশ্চিম মেদিনীপুর, পিন-৭২১১৪০, পশ্চিমবঙ্গ, ভারত',
  landmarkEn: 'Adjacent to Jamna Bus Stand, Pingla Block',
  landmarkBn: 'যমুনা বাস স্ট্যান্ড সংলগ্ন, পিংলা ব্লক',
  googleMapsShareUrl: 'https://maps.app.goo.gl/7nDQ6SVzmUgYzhLR7?g_st=aw',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=22.276818,87.544029',
};

// Internal attribution requirement for Google Maps in AI Studio
const USAGE_ATTRIBUTION = ['gmp_mcp_codeassist_v1_aistudio'];

// Provisioned Google Maps API Key
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyDJ2yS1RprlHMQz14VSMDyIGI_mf9xYM_g';

interface CameraControlProps {
  onZoomPreset: (zoom: number) => void;
  currentZoom: number;
  isSmallView?: boolean;
}

const MapCameraControls: React.FC<CameraControlProps> = ({ onZoomPreset, currentZoom, isSmallView }) => {
  const map = useMap();
  const { isBengali } = useLanguage();

  const handleCenter = useCallback(() => {
    if (map) {
      map.panTo({ lat: CAMPUS_LOCATION.lat, lng: CAMPUS_LOCATION.lng });
      map.setZoom(17);
      onZoomPreset(17);
    }
  }, [map, onZoomPreset]);

  const handleArea = useCallback((zoomLevel: number) => {
    if (map) {
      map.panTo({ lat: CAMPUS_LOCATION.lat, lng: CAMPUS_LOCATION.lng });
      map.setZoom(zoomLevel);
      onZoomPreset(zoomLevel);
    }
  }, [map, onZoomPreset]);

  return (
    <div className={`flex flex-wrap items-center gap-1 bg-slate-900/95 backdrop-blur-md p-1 rounded-xl border border-slate-700/80 shadow-lg text-[11px] ${isSmallView ? 'scale-90 origin-top-left' : ''}`}>
      <span className="text-slate-400 font-semibold px-1.5 flex items-center gap-1">
        <Compass className="w-3 h-3 text-amber-400" />
        <span className="hidden sm:inline">{isBengali ? 'ভিউ:' : 'View:'}</span>
      </span>
      <button
        onClick={handleCenter}
        className={`px-2 py-0.5 rounded-lg font-bold transition-colors ${
          currentZoom >= 16 
            ? 'bg-amber-500 text-slate-950 shadow-sm' 
            : 'text-slate-300 hover:text-white hover:bg-slate-800'
        }`}
      >
        {isBengali ? 'ক্যাম্পাস' : 'Campus'}
      </button>
      <button
        onClick={() => handleArea(14)}
        className={`px-2 py-0.5 rounded-lg font-bold transition-colors ${
          currentZoom === 14 
            ? 'bg-amber-500 text-slate-950 shadow-sm' 
            : 'text-slate-300 hover:text-white hover:bg-slate-800'
        }`}
      >
        {isBengali ? 'যমুনা চক' : 'Jamna'}
      </button>
      {!isSmallView && (
        <button
          onClick={() => handleArea(11)}
          className={`px-2 py-0.5 rounded-lg font-bold transition-colors ${
            currentZoom <= 12 
              ? 'bg-amber-500 text-slate-950 shadow-sm' 
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          {isBengali ? 'পিংলা' : 'Pingla'}
        </button>
      )}
    </div>
  );
};

export interface CampusGoogleMapProps {
  initialViewMode?: 'small' | 'expanded';
  className?: string;
  showToggle?: boolean;
}

export const CampusGoogleMap: React.FC<CampusGoogleMapProps> = ({ 
  initialViewMode = 'small',
  className = '',
  showToggle = true 
}) => {
  const { isBengali } = useLanguage();
  const [viewMode, setViewMode] = useState<'small' | 'expanded'>(initialViewMode);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const [copiedCoords, setCopiedCoords] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(16);
  const [loadError, setLoadError] = useState(false);

  const isSmall = viewMode === 'small';

  const copyCoordinates = () => {
    navigator.clipboard.writeText(`${CAMPUS_LOCATION.lat}, ${CAMPUS_LOCATION.lng}`);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2500);
  };

  const toggleViewMode = () => {
    setViewMode(prev => (prev === 'small' ? 'expanded' : 'small'));
  };

  return (
    <div className={`w-full bg-slate-900/90 rounded-2xl sm:rounded-3xl border border-slate-800 overflow-hidden shadow-2xl transition-all duration-300 ${className}`}>
      {/* Top Header Bar */}
      <div className="p-3 sm:p-4 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <h3 className="text-sm sm:text-base font-bold text-white font-serif">
                {isBengali ? 'গুগল ম্যাপে বিলে অ্যাকাডেমি' : 'Google Maps Campus Location'}
              </h3>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {isSmall 
                  ? (isBengali ? 'ছোট ভিউ' : 'Small View') 
                  : (isBengali ? 'পূর্ণাঙ্গ ভিউ' : 'Full View')
                }
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
              {isBengali ? CAMPUS_LOCATION.addressBn : CAMPUS_LOCATION.addressEn}
            </p>
          </div>
        </div>

        {/* Action Controls & Small View Switch */}
        <div className="flex flex-wrap items-center gap-1.5">
          {/* View Size Mode Toggle */}
          {showToggle && (
            <button
              type="button"
              onClick={toggleViewMode}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 border transition-all ${
                isSmall 
                  ? 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-amber-500/30' 
                  : 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border-amber-500/40'
              }`}
              title={isSmall ? (isBengali ? 'পূর্ণাঙ্গ ভিউ করুন' : 'Switch to Full View') : (isBengali ? 'ছোট ভিউ করুন' : 'Switch to Small View')}
            >
              {isSmall ? (
                <>
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{isBengali ? 'পূর্ণাঙ্গ ভিউ' : 'Expand'}</span>
                </>
              ) : (
                <>
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span>{isBengali ? 'ছোট ভিউ' : 'Small View'}</span>
                </>
              )}
            </button>
          )}

          {/* Direct Share Link from User */}
          <a
            href={CAMPUS_LOCATION.googleMapsShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-bold inline-flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>{isBengali ? 'গুগল ম্যাপে খুলুন' : 'Open in Maps'}</span>
          </a>

          {/* Turn-by-Turn Directions */}
          <a
            href={CAMPUS_LOCATION.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isBengali ? 'দিকনির্দেশনা' : 'Directions'}</span>
          </a>

          {/* Copy GPS Lat/Lng */}
          <button
            onClick={copyCoordinates}
            className="px-2 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium inline-flex items-center gap-1 border border-slate-700 transition-colors"
            title="Copy GPS Coordinates"
          >
            {copiedCoords ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-300 text-[11px] font-bold">{isBengali ? 'কপি হয়েছে' : 'Copied'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-slate-400" />
                <span className="font-mono text-[10px]">22.2768, 87.5440</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Interactive Map Canvas Container (Small view: ~220-250px, Full view: ~420px) */}
      <div 
        className={`relative w-full bg-slate-950 transition-all duration-300 ${
          isSmall ? 'h-[210px] sm:h-[250px]' : 'h-[380px] sm:h-[460px]'
        }`}
      >
        {!loadError ? (
          <APIProvider 
            apiKey={API_KEY} 
            libraries={['marker']}
            onError={() => setLoadError(true)}
          >
            <Map
              mapId="DEMO_MAP_ID"
              defaultCenter={{ lat: CAMPUS_LOCATION.lat, lng: CAMPUS_LOCATION.lng }}
              defaultZoom={16}
              gestureHandling="cooperative"
              disableDefaultUI={false}
              internalUsageAttributionIds={USAGE_ATTRIBUTION}
              className="w-full h-full"
            >
              {/* Camera preset bar pinned to top inside map */}
              <div className="absolute top-2.5 left-2.5 z-10 pointer-events-auto">
                <MapCameraControls 
                  onZoomPreset={setCurrentZoom} 
                  currentZoom={currentZoom}
                  isSmallView={isSmall}
                />
              </div>

              {/* Advanced Marker at Biley Academy's exact coordinates */}
              <AdvancedMarker
                position={{ lat: CAMPUS_LOCATION.lat, lng: CAMPUS_LOCATION.lng }}
                onClick={() => setInfoWindowOpen(prev => !prev)}
                title={isBengali ? CAMPUS_LOCATION.nameBn : CAMPUS_LOCATION.nameEn}
              >
                <Pin 
                  background="#f59e0b" 
                  borderColor="#78350f" 
                  glyphColor="#0f172a" 
                  scale={isSmall ? 1.05 : 1.2}
                />
              </AdvancedMarker>

              {/* Info Window */}
              {infoWindowOpen && (
                <InfoWindow
                  position={{ lat: CAMPUS_LOCATION.lat, lng: CAMPUS_LOCATION.lng }}
                  onCloseClick={() => setInfoWindowOpen(false)}
                  headerContent={
                    <div className="font-bold text-slate-900 text-xs sm:text-sm font-serif">
                      {isBengali ? CAMPUS_LOCATION.nameBn : CAMPUS_LOCATION.nameEn}
                    </div>
                  }
                >
                  <div className="p-1 max-w-[220px] text-slate-700 text-xs space-y-1.5">
                    <p className="font-medium text-slate-800 leading-snug text-[11px]">
                      {isBengali ? CAMPUS_LOCATION.addressBn : CAMPUS_LOCATION.addressEn}
                    </p>
                    <div className="bg-amber-50 text-amber-900 px-2 py-0.5 rounded text-[10px] font-semibold border border-amber-200">
                      📍 {isBengali ? CAMPUS_LOCATION.landmarkBn : CAMPUS_LOCATION.landmarkEn}
                    </div>
                    <div className="pt-1 flex items-center justify-between border-t border-slate-200">
                      <a
                        href={CAMPUS_LOCATION.googleMapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-700 hover:text-amber-900 font-bold inline-flex items-center gap-1 text-[10px]"
                      >
                        <Navigation className="w-2.5 h-2.5" />
                        {isBengali ? 'দিকনির্দেশ' : 'Directions'}
                      </a>
                      <a
                        href={CAMPUS_LOCATION.googleMapsShareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 font-bold inline-flex items-center gap-1 text-[10px]"
                      >
                        <ExternalLink className="w-2.5 h-2.5" />
                        {isBengali ? 'অ্যাপে খুলুন' : 'Open in Maps'}
                      </a>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        ) : (
          /* Resilient Fallback Embed */
          <iframe
            title="Google Maps Campus Location"
            src={`https://maps.google.com/maps?q=${CAMPUS_LOCATION.lat},${CAMPUS_LOCATION.lng}&hl=en&z=16&output=embed`}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        )}

        {/* Floating Quick Navigation Card at Bottom Right (shown only in full view) */}
        {!isSmall && (
          <div className="absolute bottom-3 right-3 sm:right-4 z-10 max-w-[90%] sm:max-w-xs bg-slate-950/90 backdrop-blur-md p-3 rounded-2xl border border-slate-800 shadow-xl text-xs space-y-1.5 hidden sm:block pointer-events-auto">
            <div className="flex items-center justify-between text-slate-400">
              <span className="font-bold uppercase tracking-wider text-[10px] text-amber-400">
                {isBengali ? 'ক্যাম্পাস সংযোগ' : 'Campus Proximity'}
              </span>
              <span className="text-[10px] font-mono text-slate-400">22.2768° N, 87.5440° E</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <Bus className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-[11px]">
                {isBengali ? 'যমুনা বাস স্ট্যান্ড থেকে মাত্র ২ মিনিট হাঁটা পথ' : '2 min walk from Jamna Bus Stand'}
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-[11px]">
                {isBengali ? 'সকাল ১০:০০ – রাত ৮:০০ (সোম-শনি)' : '10:00 AM – 8:00 PM (Mon-Sat)'}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Bar: Streamlined in Small View, Detailed in Expanded View */}
      {isSmall ? (
        <div className="p-2.5 sm:p-3 bg-slate-950 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Bus className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-[11px]">
              {isBengali ? 'যমুনা বাস স্ট্যান্ড সংলগ্ন (২ মিনিট হাঁটা পথ)' : 'Adjacent to Jamna Bus Stand (2 min walk)'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={CAMPUS_LOCATION.googleMapsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-amber-400 hover:text-amber-300 font-mono underline inline-flex items-center gap-1"
            >
              maps.app.goo.gl/7nDQ6SVzmUgYzhLR7
              <ExternalLink className="w-2.5 h-2.5" />
            </a>

            {showToggle && (
              <button
                type="button"
                onClick={toggleViewMode}
                className="text-[11px] text-slate-400 hover:text-white inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Maximize2 className="w-3 h-3 text-amber-400" />
                <span>{isBengali ? 'বিস্তারিত ভিউ' : 'Full Guide'}</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="p-4 bg-slate-950 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Bus className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-bold text-slate-300 block">
                {isBengali ? 'বাস যোগাযোগ' : 'Bus Connectivity'}
              </span>
              <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                {isBengali 
                  ? 'খড়্গপুর, মেদিনীপুর, ডেবরা ও ময়না থেকে নিয়মিত বাস যমুনা বাস স্ট্যান্ডে পৌঁছায়।' 
                  : 'Direct buses from Kharagpur, Medinipur, Debra & Moyna stop directly at Jamna Bus Stand.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Navigation className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-bold text-slate-300 block">
                {isBengali ? 'সড়ক পথ ও ল্যান্ডমার্ক' : 'Road & Landmark'}
              </span>
              <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                {isBengali 
                  ? 'ডেবরা-পিংলা রাজ্য সড়ক হয়ে যমুনা চক। স্টেট ব্যাঙ্ক গ্রাহক সেবা কেন্দ্র সংলগ্ন।' 
                  : 'Via Debra-Pingla Highway to Jamna Chowk. Beside State Bank Customer Service Point.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <Share2 className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-bold text-slate-300 block">
                {isBengali ? 'সরাসরি লোকেশন শেয়ার' : 'Location Link'}
              </span>
              <a
                href={CAMPUS_LOCATION.googleMapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-amber-400 hover:text-amber-300 font-mono underline inline-flex items-center gap-1 mt-0.5"
              >
                maps.app.goo.gl/7nDQ6SVzmUgYzhLR7
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

