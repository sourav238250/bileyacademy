import React, { useState } from 'react';
import { 
  GraduationCap, 
  Phone, 
  Calendar, 
  Sparkles, 
  Menu, 
  X, 
  BookOpen, 
  Award, 
  Bot, 
  HelpCircle, 
  Clock, 
  MessageSquare, 
  MessageCircle,
  BarChart3, 
  Image as ImageIcon, 
  Bell 
} from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenDemoModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isBengali, t } = useLanguage();

  const navLinks = [
    { id: 'hero', label: t('navNoticeboard', 'Noticeboard'), icon: Bell, badge: isBengali ? 'লাইভ' : 'Live' },
    { id: 'about', label: t('navAbout', 'About Us'), icon: BookOpen },
    { id: 'mission-vision', label: t('navMissionVision', 'Mission & Vision'), icon: Award },
    { id: 'founder', label: t('navFounder', 'Founder Message'), icon: GraduationCap },
    { id: 'curriculum', label: t('navCurriculum', 'Curriculum (Cl 1-12)'), icon: Sparkles, badge: t('navAllGrades', 'All Grades') },
    { id: 'student-dashboard', label: t('navStudentDashboard', 'Student Progress'), icon: BarChart3, badge: t('navTracker', 'Tracker') },
    { id: 'gallery', label: t('navGallery', 'Campus Gallery'), icon: ImageIcon, badge: isBengali ? 'ছবি' : 'Photos' },
    { id: 'ai-tutor', label: t('navAiTutor', 'AI Doubt Solver'), icon: Bot, badge: t('navLiveAi', 'Live AI') },
    { id: 'quiz', label: t('navQuiz', 'Diagnostic Quiz'), icon: HelpCircle },
    { id: 'faculty', label: t('navFaculty', 'Faculty & Results'), icon: Award },
    { id: 'batches', label: t('navBatches', 'Batch Routine'), icon: Clock },
    { id: 'admission', label: t('navAdmission', 'Admissions'), icon: Calendar },
    { id: 'contact', label: t('navContact', 'Contact Us'), icon: MessageSquare }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-lg">
      {/* Top Banner with Quick Helpline & Language Switcher */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 text-slate-950 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="bg-slate-950 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              {t('topBannerAdmissions', 'Admissions Open 2026-27')}
            </span>
            <span className="hidden sm:inline font-semibold">
              {t('topBannerClasses', 'Classes 1 to 12 (CBSE / ICSE / WBCHSE + JEE / NEET)')}
            </span>
          </div>
          
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex items-center">
              <LanguageToggle variant="segmented" />
            </div>
            <a 
              href="https://wa.me/919732531730?text=Hello%20Biley%20Academy,%20I%20would%20like%20to%20inquire%20about%20admissions." 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 font-bold hover:underline bg-emerald-950/20 px-2 py-0.5 rounded text-emerald-950"
              title="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{t('topBannerHelpline', 'WhatsApp: 9732531730 (WhatsApp Only)')}</span>
            </a>
            <span className="hidden md:inline text-slate-800">|</span>
            <button 
              onClick={onOpenDemoModal}
              className="hidden md:inline-flex items-center space-x-1 font-bold underline hover:text-slate-900 transition-colors"
            >
              <span>{t('topBannerBookDemo', 'Book 2 Free Demo Classes')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Institute Name */}
          <div 
            id="brand-logo" 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <Logo size="md" className="group-hover:scale-105 transition-transform" />
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-serif">
                  {t('academyName', 'Biley Academy')}
                </span>
                <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-semibold px-1.5 py-0.5 rounded">
                  {t('sinceYear', 'Since 2026')}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                {t('academyTagline', 'Premier Coaching • Class 1 to 12')}
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.slice(0, 7).map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-all flex items-center space-x-1.5 relative ${
                    isActive 
                      ? 'text-amber-400 bg-slate-800/80 shadow-sm border border-amber-500/30' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-1 text-[9px] bg-amber-500 text-slate-950 font-bold px-1.5 py-0.2 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA Buttons, Theme Toggle & Language Toggle */}
          <div className="hidden sm:flex items-center space-x-2">
            <ThemeToggle />
            <button
              id="header-cta-schedule"
              onClick={() => handleNavClick('batches')}
              className="text-xs text-slate-300 hover:text-amber-400 font-medium px-2.5 py-2 rounded-lg border border-slate-700 hover:border-amber-400/50 transition-colors whitespace-nowrap"
            >
              {t('navBatchRoutineBtn', 'Batch Routine')}
            </button>
            <button
              id="header-cta-admission"
              onClick={onOpenDemoModal}
              className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center space-x-1.5 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('navEnrollDemoBtn', 'Enroll / Free Demo')}</span>
            </button>
          </div>

          {/* Mobile menu trigger & Controls */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle className="sm:hidden" />
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-900/98 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          
          {/* Mobile Language Switcher Bar */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-xs font-bold text-amber-400">
              {isBengali ? 'ভাষা নির্বাচন (Language):' : 'Select Language:'}
            </span>
            <LanguageToggle variant="segmented" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 my-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                    isActive 
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Icon className="w-4 h-4 text-amber-400" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] bg-amber-500 text-slate-950 font-bold px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-bold text-slate-300">
                {isBengali ? 'থিম / মোড:' : 'Theme Mode:'}
              </span>
              <ThemeToggle showLabel />
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full py-3 rounded-xl font-bold text-center bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-sm shadow-md"
            >
              {t('topBannerBookDemo', 'Book 2 Free Demo Classes')}
            </button>
            <a
              href="https://wa.me/919732531730?text=Hello%20Biley%20Academy,%20I%20would%20like%20to%20inquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl border border-emerald-600/40 bg-emerald-950/30 text-emerald-300 text-sm font-medium flex items-center justify-center space-x-2 hover:bg-emerald-900/40 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{isBengali ? 'হোয়াটসঅ্যাপ: ৯৭৩২৫৩১৭৩০ (শুধুমাত্র হোয়াটসঅ্যাপ)' : 'WhatsApp: 9732531730 (WhatsApp Only)'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

