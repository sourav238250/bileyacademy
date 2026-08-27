import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MissionVisionSection } from './components/MissionVisionSection';
import { FounderMessageSection } from './components/FounderMessageSection';
import { CurriculumSection } from './components/CurriculumSection';
import { StudentDashboardSection } from './components/StudentDashboardSection';
import { AiTutorSection } from './components/AiTutorSection';
import { QuizSection } from './components/QuizSection';
import { FacultySection } from './components/FacultySection';
import { BatchScheduleSection } from './components/BatchScheduleSection';
import { AdmissionSection } from './components/AdmissionSection';
import { ContactSection } from './components/ContactSection';
import { GallerySection } from './components/GallerySection';
import { OfficialAdmissionBanner } from './components/OfficialAdmissionBanner';
import { NoticeTickerBar } from './components/NoticeTickerBar';
import { Footer } from './components/Footer';
import { GradeCategory, SubjectCurriculum } from './types';
import { SubjectModal } from './components/SubjectModal';
import { X, Calendar, Sparkles, MessageCircle } from 'lucide-react';

function AcademyApp() {
  const { isBengali, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedCategory, setSelectedCategory] = useState<GradeCategory>('secondary');
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false);
  const [inquirySubject, setInquirySubject] = useState<string | undefined>(undefined);
  const [inspectedSubject, setInspectedSubject] = useState<{ subject: SubjectCurriculum; gradeLabel: string } | null>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (category: GradeCategory) => {
    setSelectedCategory(category);
    handleNavigate('curriculum');
  };

  const handleOpenInquiry = (subjectName?: string) => {
    setInquirySubject(subjectName);
    setDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 transition-colors duration-200">
      
      {/* Navigation Header */}
      <Navbar 
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenDemoModal={() => handleOpenInquiry()}
      />

      {/* Real-time Scrolling Announcement Ticker Bar */}
      <NoticeTickerBar 
        onOpenInquiry={handleOpenInquiry}
        onJumpToNotices={() => handleNavigate('hero')}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onSelectCategory={handleSelectCategory}
          onOpenDemoModal={() => handleOpenInquiry()}
          onJumpToAiTutor={() => handleNavigate('ai-tutor')}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Official 2026-27 Admission Banner Spotlight */}
        <section id="official-notice-banner" className="py-6 sm:py-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto">
            <OfficialAdmissionBanner 
              onOpenInquiry={handleOpenInquiry}
              onEnlarge={() => handleNavigate('gallery')}
            />
          </div>
        </section>

        {/* Grade Curriculums (Class 1 to 12) */}
        <CurriculumSection 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenInquiry={handleOpenInquiry}
          onNavigateToDashboard={() => handleNavigate('student-dashboard')}
        />

        {/* Student Progress Tracker & Curriculum Checkpoints */}
        <StudentDashboardSection 
          onInspectSubject={(subj, gradeLabel) => setInspectedSubject({ subject: subj, gradeLabel })}
          onNavigateToAiTutor={() => handleNavigate('ai-tutor')}
          onNavigateToQuiz={() => handleNavigate('quiz')}
          onSelectCategory={handleSelectCategory}
        />

        {/* 24/7 AI Doubt Solver & Concept Clarification */}
        <AiTutorSection />

        {/* Diagnostic Assessment Quiz */}
        <QuizSection />

        {/* Academy Heritage & Inspiration */}
        <AboutSection />

        {/* Mission, Vision & 4 Pedagogical Pillars */}
        <MissionVisionSection />

        {/* Founder & Academic Director Message */}
        <FounderMessageSection />

        {/* Expert Faculty & Testimonials */}
        <FacultySection />

        {/* Campus Gallery & Photographic Life */}
        <GallerySection onOpenInquiry={handleOpenInquiry} />

        {/* Batch Timetable & Class Schedules */}
        <BatchScheduleSection 
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* Admission Enrollment & Free Demo Booking */}
        <AdmissionSection 
          initialSubject={inquirySubject}
        />

        {/* Physical Campus Location & Contact Details */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
      />

      {/* Persistent Floating WhatsApp Contact Widget (WhatsApp Only) */}
      <aside 
        aria-label="WhatsApp Contact"
        className="fixed bottom-5 right-5 z-40 flex items-center space-x-2 group"
      >
        <div className="hidden sm:flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900/95 backdrop-blur-md border border-emerald-500/40 text-slate-100 px-3 py-1.5 rounded-xl shadow-xl pointer-events-none text-right">
          <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
            <span>{isBengali ? 'হোয়াটসঅ্যাপ মেসেজ করুন' : 'Chat on WhatsApp'}</span>
            <span className="text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1 py-0.2 rounded font-black">
              {isBengali ? 'শুধুমাত্র হোয়াটসঅ্যাপ' : 'WhatsApp Only'}
            </span>
          </span>
          <span className="text-[11px] text-slate-300 font-mono">+91 97325 31730</span>
        </div>

        <a
          href="https://wa.me/919732531730?text=Hello%20Biley%20Academy,%20I%20would%20like%20to%20inquire%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-3.5 sm:p-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center border-2 border-emerald-400/50"
          title={isBengali ? 'হোয়াটসঅ্যাপে যোগাযোগ করুন (৯৭৩২৫৩১৭৩০ - শুধুমাত্র হোয়াটসঅ্যাপ)' : 'Contact on WhatsApp: 9732531730 (WhatsApp Only)'}
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
          </span>
        </a>
      </aside>

      {/* Inspected Subject Curriculum Modal */}
      {inspectedSubject && (
        <SubjectModal
          subject={inspectedSubject.subject}
          gradeLabel={inspectedSubject.gradeLabel}
          onClose={() => setInspectedSubject(null)}
          onOpenInquiry={(subName) => {
            setInspectedSubject(null);
            handleOpenInquiry(subName);
          }}
        />
      )}

      {/* Demo Booking & Admission Modal */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
          <div 
            className="relative bg-slate-900 border border-slate-700 w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-4">
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-0.5 text-xs font-bold text-amber-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isBengali ? 'অগ্রাধিকারভিত্তিক ভর্তি ও ফ্রি ডেমো বুকিং' : 'Priority Admission & Demo Registration'}</span>
              </div>
              <h3 className="text-2xl font-black text-white font-serif">
                {isBengali ? 'বিলে অ্যাকাডেমিতে ২টি ফ্রি ডেমো ক্লাস বুক করুন' : 'Book 2 Free Demo Classes at Biley Academy'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {isBengali ? 'কোনো বাধ্যতামূলক ভর্তি চুক্তি ছাড়াই আমাদের ধারণাগত পাঠদান প্রত্যক্ষ করুন।' : 'Experience our conceptual teaching methodology with no admission obligation.'}
              </p>
            </div>

            <AdmissionSection 
              initialSubject={inquirySubject}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AcademyApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
