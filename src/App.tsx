import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
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
import { X, Calendar, Sparkles } from 'lucide-react';

function AcademyApp() {
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

        <AboutSection />

        <MissionVisionSection />

        <FounderMessageSection />

        <CurriculumSection 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenInquiry={handleOpenInquiry}
          onNavigateToDashboard={() => handleNavigate('student-dashboard')}
        />

        <StudentDashboardSection 
          onInspectSubject={(subj, gradeLabel) => setInspectedSubject({ subject: subj, gradeLabel })}
          onNavigateToAiTutor={() => handleNavigate('ai-tutor')}
          onNavigateToQuiz={() => handleNavigate('quiz')}
          onSelectCategory={handleSelectCategory}
        />

        <AiTutorSection />

        <QuizSection />

        <FacultySection />

        {/* Campus Gallery & Photographic Life */}
        <GallerySection onOpenInquiry={handleOpenInquiry} />

        <BatchScheduleSection 
          onOpenInquiry={() => handleOpenInquiry()}
        />

        <AdmissionSection 
          initialSubject={inquirySubject}
        />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
      />

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
                <span>Priority Admission & Demo Registration</span>
              </div>
              <h3 className="text-2xl font-black text-white font-serif">
                Book 2 Free Demo Classes at Biley Academy
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Experience our conceptual teaching methodology with no admission obligation.
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
      <AcademyApp />
    </ThemeProvider>
  );
}
