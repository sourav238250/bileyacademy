import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Send, 
  Sparkles, 
  Phone, 
  Mail, 
  User, 
  GraduationCap, 
  Target, 
  Clock, 
  Download,
  Printer,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Logo } from './Logo';
import { AdmissionInquiry } from '../types';

interface AdmissionSectionProps {
  initialSubject?: string;
}

export const AdmissionSection: React.FC<AdmissionSectionProps> = ({ initialSubject }) => {
  const [formData, setFormData] = useState<AdmissionInquiry>({
    studentName: '',
    parentName: '',
    gradeLevel: 'Class 10 (Secondary)',
    subjects: initialSubject ? [initialSubject] : ['Mathematics', 'Science (Physical)'],
    phone: '',
    email: '',
    targetGoal: '95%+ in Board Exam + Foundation Olympiads',
    preferredBatchTime: 'Evening Batch (4:30 PM - 7:30 PM)'
  });

  const [loading, setLoading] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<AdmissionInquiry & { id: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const gradeOptions = [
    'Class 1 (Primary)',
    'Class 2 (Primary)',
    'Class 3 (Primary)',
    'Class 4 (Primary)',
    'Class 5 (Upper Primary)',
    'Class 6 (Upper Primary)',
    'Class 7 (Upper Primary)',
    'Class 8 (Upper Primary)',
    'Class 9 (Secondary)',
    'Class 10 (Secondary Board Special)',
    'Class 11 (Higher Secondary - Science Track)',
    'Class 12 (Higher Secondary - Board + JEE/NEET)'
  ];

  const availableSubjectCheckboxes = [
    'Mathematics',
    'Science (General / Physical)',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science / Application',
    'English Language & Literature'
  ];

  const handleSubjectToggle = (subj: string) => {
    setFormData((prev) => {
      const exists = prev.subjects.includes(subj);
      if (exists) {
        return { ...prev, subjects: prev.subjects.filter(s => s !== subj) };
      } else {
        return { ...prev, subjects: [...prev.subjects, subj] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in student name and valid contact phone number.');
      return;
    }
    setErrorMessage('');
    setLoading(true);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success && data.inquiry) {
        setSubmittedInquiry(data.inquiry);
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 }
        });
      } else {
        setErrorMessage(data.error || 'Failed to submit inquiry. Please call helpline directly.');
      }
    } catch (err) {
      // Fallback in case of temporary offline state
      const fallbackInquiry = {
        ...formData,
        id: `BILEY-${Math.floor(1000 + Math.random() * 9000)}`,
        date: new Date().toLocaleDateString('en-IN')
      };
      setSubmittedInquiry(fallbackInquiry);
      confetti({ particleCount: 60 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="admission" className="py-16 sm:py-24 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Admissions & Demo Booking 2026-27</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Enroll or Book 2 Free Demo Classes
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
            Experience our interactive teaching and meet our expert faculty before final enrollment. Fill out the application form below:
          </p>
        </div>

        {/* Form or Confirmation Card */}
        <div className="max-w-4xl mx-auto bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-10">
          {!submittedInquiry ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-950/80 border border-rose-500 text-rose-200 text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Student Name */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5 flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    <span>Student Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aranya Roy"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Parent / Guardian Name */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5 flex items-center space-x-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Parent / Guardian Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dr. Subrata Roy"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Contact Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5 flex items-center space-x-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Contact Phone / WhatsApp *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98300 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5 flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Email Address (Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. aranya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Grade Level */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5 flex items-center space-x-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Select Grade Level / Class *</span>
                  </label>
                  <select
                    value={formData.gradeLevel}
                    onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-400"
                  >
                    {gradeOptions.map((g, i) => (
                      <option key={i} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subject Checkboxes */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-2">
                  Select Subjects Desired:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {availableSubjectCheckboxes.map((sub, sIdx) => {
                    const isChecked = formData.subjects.includes(sub);
                    return (
                      <button
                        type="button"
                        key={sIdx}
                        onClick={() => handleSubjectToggle(sub)}
                        className={`p-2.5 rounded-xl border text-xs font-medium flex items-center space-x-2 text-left transition-colors ${
                          isChecked 
                            ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold' 
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] shrink-0 ${
                          isChecked ? 'bg-amber-500 text-slate-950 font-black' : 'border border-slate-600'
                        }`}>
                          {isChecked ? '✓' : ''}
                        </div>
                        <span className="truncate">{sub}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Target Academic Goal */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5 flex items-center space-x-1.5">
                  <Target className="w-3.5 h-3.5 text-amber-400" />
                  <span>Target Academic Goal</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 95%+ in Class 10 Board / JEE Main Top Percentile / NTSE Foundation"
                  value={formData.targetGoal}
                  onChange={(e) => setFormData({ ...formData, targetGoal: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  ⚡ <strong>Note:</strong> Free demo includes classroom lecture, doubt clearing & laboratory demonstration.
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Submitting Application...' : 'Submit & Book Demo'}</span>
                </button>
              </div>
            </form>
          ) : (
            /* Successful Registration Pass */
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Registration Confirmed
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-serif mt-1">
                  Welcome to Biley Academy!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg mx-auto">
                  Your admission enquiry token has been generated. Our academic director will call you on <strong>{submittedInquiry.phone}</strong> to confirm your demo class slot.
                </p>
              </div>

              {/* Printable Ticket Card */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/30 text-left max-w-lg mx-auto space-y-3 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center space-x-3">
                    <Logo size="sm" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Token ID</span>
                      <p className="text-sm font-mono font-bold text-amber-400">{submittedInquiry.id}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Academic Year</span>
                    <p className="text-xs font-bold text-slate-200">2026 - 2027</p>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <p><strong>Student:</strong> {submittedInquiry.studentName}</p>
                  <p><strong>Parent/Guardian:</strong> {submittedInquiry.parentName}</p>
                  <p><strong>Grade/Class:</strong> {submittedInquiry.gradeLevel}</p>
                  <p><strong>Selected Subjects:</strong> {submittedInquiry.subjects.join(', ')}</p>
                  <p><strong>Target Goal:</strong> {submittedInquiry.targetGoal}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center space-x-1.5 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Admission Slip</span>
                </button>

                <button
                  onClick={() => setSubmittedInquiry(null)}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
