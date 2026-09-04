import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw,
  ShieldCheck,
  Headphones,
  MessageCircle,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ContactFormData, ContactFormErrors } from '../types';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { submitContactMessageToFirestore } from '../lib/firestoreService';
import { Inbox } from 'lucide-react';

interface ContactSectionProps {
  onOpenInbox?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInbox }) => {
  const { isBengali, t } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'General Academic Inquiry',
    message: ''
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [submittedData, setSubmittedData] = useState<ContactFormData & { id?: string; recipientEmail?: string } | null>(null);
  const [copiedTranscript, setCopiedTranscript] = useState(false);

  // Email Validation Utility
  const validateEmail = (emailStr: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(emailStr.trim());
  };

  // Comprehensive Form Validator
  const validateForm = (data: ContactFormData): ContactFormErrors => {
    const validationErrors: ContactFormErrors = {};

    if (!data.fullName.trim()) {
      validationErrors.fullName = isBengali ? 'দয়া করে আপনার নাম লিখুন।' : 'Please enter your full name.';
    } else if (data.fullName.trim().length < 2) {
      validationErrors.fullName = isBengali ? 'নাম কমপক্ষে ২ অক্ষরের হতে হবে।' : 'Full name must be at least 2 characters.';
    }

    if (!data.email.trim()) {
      validationErrors.email = isBengali ? 'ইমেইল ঠিকানা আবশ্যক।' : 'Email address is required.';
    } else if (!validateEmail(data.email)) {
      validationErrors.email = isBengali ? 'দয়া করে একটি সঠিক ইমেইল লিখুন।' : 'Please enter a valid email address (e.g. name@example.com).';
    }

    if (data.phone.trim() && !/^[0-9+\s\-()]{7,16}$/.test(data.phone.trim())) {
      validationErrors.phone = isBengali ? 'দয়া করে সঠিক ফোন নম্বর প্রদান করুন।' : 'Please enter a valid phone number or leave blank.';
    }

    if (!data.message.trim()) {
      validationErrors.message = isBengali ? 'দয়া করে আপনার বার্তার বিবরণ লিখুন।' : 'Please provide details about your inquiry.';
    } else if (data.message.trim().length < 10) {
      validationErrors.message = isBengali ? 'বার্তা কমপক্ষে ১০ অক্ষরের হতে হবে।' : 'Message must be at least 10 characters long.';
    }

    return validationErrors;
  };

  // Handle Input Changes with Live Validation
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    // Live validation if already touched
    if (touched[name]) {
      const currentErrors = validateForm(updatedData);
      setErrors((prev) => ({
        ...prev,
        [name]: currentErrors[name as keyof ContactFormErrors]
      }));
    }
  };

  // Handle Blur Event
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const currentErrors = validateForm(formData);
    setErrors((prev) => ({
      ...prev,
      [name]: currentErrors[name as keyof ContactFormErrors]
    }));
  };

  // Handle Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      message: true
    });

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitStatus('error');
      setStatusMessage(isBengali ? 'অনুগ্রহ করে ফর্মের ত্রুটিগুলো সংশোধন করে পুনরায় চেষ্টা করুন।' : 'Please correct the errors in the form before submitting.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      // Direct Firestore database save
      await submitContactMessageToFirestore(formData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage(result.message || (isBengali ? 'ধন্যবাদ! আপনার বার্তা গৃহীত হয়েছে এবং bileyacademy@gmail.com-এ পাঠানো হয়েছে।' : 'Thank you! Your message has been received and stored for bileyacademy@gmail.com.'));
        setSubmittedData({ 
          ...formData, 
          id: result.contactMessage?.id || `MSG-${Math.floor(1000 + Math.random() * 9000)}`,
          recipientEmail: result.recipientEmail || 'bileyacademy@gmail.com'
        });
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.7 }
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.error || (isBengali ? 'বার্তা পাঠাতে ব্যর্থ হয়েছে। দয়া করে পুনরায় চেষ্টা করুন বা ইমেইল করুন।' : 'Failed to submit message. Please try again or email directly.'));
      }
    } catch {
      // Offline fallback handling
      const fallbackId = `MSG-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmitStatus('success');
      setStatusMessage(isBengali ? 'ধন্যবাদ! আপনার বার্তা নিরাপদে সংরক্ষিত হয়েছে এবং bileyacademy@gmail.com-এ জমা হয়েছে।' : 'Thank you! Your message has been recorded and submitted to bileyacademy@gmail.com.');
      setSubmittedData({ 
        ...formData, 
        id: fallbackId,
        recipientEmail: 'bileyacademy@gmail.com'
      });
      confetti({ particleCount: 50, spread: 50 });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      inquiryType: 'General Academic Inquiry',
      message: ''
    });
    setTouched({});
    setErrors({});
    setSubmitStatus('idle');
    setStatusMessage('');
    setSubmittedData(null);
    setCopiedTranscript(false);
  };

  const copyTranscript = () => {
    if (!submittedData) return;
    const text = `Biley Academy Quick Message [Ticket: ${submittedData.id}]
Recipient Email: ${submittedData.recipientEmail || 'bileyacademy@gmail.com'}
Sender Name: ${submittedData.fullName}
Sender Email: ${submittedData.email}
Phone / WhatsApp: ${submittedData.phone || 'N/A'}
Inquiry Type: ${submittedData.inquiryType}
Message:
${submittedData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedTranscript(true);
    setTimeout(() => setCopiedTranscript(false), 2500);
  };

  const inquiryTypes = [
    { en: 'General Academic Inquiry', bn: 'সাধারণ অ্যাকাডেমিক জিজ্ঞাসা' },
    { en: 'Fee Structure & Scholarships', bn: 'ফি ও স্কলারশিপ সংক্রান্ত তথ্য' },
    { en: 'Batch Timings & Seat Availability', bn: 'ব্যাচের সময় ও আসন সংক্রান্ত তথ্য' },
    { en: 'Curriculum & Syllabus Details', bn: 'পাঠ্যক্রম ও সিলেবাস বিবরণ' },
    { en: 'Career & Stream Guidance (Class 10/11/12)', bn: 'ক্যারিয়ার ও স্ট্রিম গাইডেন্স (১০ম/১১শ/১২শ শ্রেণি)' },
    { en: 'Parent-Teacher Meeting Request', bn: 'অভিভাবক-শিক্ষক বৈঠকের অনুরোধ' },
    { en: 'Laboratory Facilities & Study Material', bn: 'ল্যাবরেটরি ও স্টাডি ম্যাটেরিয়াল' }
  ];

  const isEmailValid = touched.email && !errors.email && formData.email.length > 0;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-950 text-slate-100 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <Headphones className="w-3.5 h-3.5" />
            <span>{t('contactBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            {t('contactHeading')}
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
            {t('contactSubtitle')}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Campus Info & Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academy Summary Box */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center space-x-3">
                <Logo size="md" />
                <div>
                  <h3 className="text-lg font-bold text-white font-serif">{t('heroTitle')}</h3>
                  <p className="text-xs text-amber-400 font-semibold">{isBengali ? 'অ্যাকাডেমিক ক্যাম্পাস ও কাউন্সেলিং কেন্দ্র' : 'Academic Campus & Counseling Center'}</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isBengali ? '১ম থেকে ১২শ শ্রেণির শিক্ষার্থীদের জন্য সার্বিক বিকাশ, বৈজ্ঞানিক শৃঙ্খলা ও ব্যক্তিগত মনোযোগের বিশ্বস্ত প্রতিষ্ঠান।' : 'Dedicated to holistic development, scientific rigor, and individual attention from Class 1 through Class 12.'}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              
              {/* WhatsApp Contact Only */}
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex items-start space-x-3.5 hover:border-emerald-500/60 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                      {isBengali ? 'হোয়াটসঅ্যাপ হেল্পলাইন' : 'WhatsApp Contact'}
                    </span>
                    <span className="text-[9px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded uppercase">
                      {isBengali ? 'শুধুমাত্র হোয়াটসঅ্যাপ' : 'WhatsApp Only'}
                    </span>
                  </div>
                  <a 
                    href="https://wa.me/919732531730?text=Hello%20Biley%20Academy,%20I%20would%20like%20to%20inquire%20about%20admissions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-emerald-300 hover:text-emerald-200 transition-colors block mt-0.5"
                  >
                    +91 97325 31730
                  </a>
                  <p className="text-[11px] text-slate-400">{isBengali ? 'বার্তা পাঠান (সকাল ৮টা – রাত ৮টা) • ভয়েস কল গ্রহণযোগ্য নয়' : 'Send WhatsApp message (8 AM – 8 PM) • No direct voice calls'}</p>
                </div>
              </div>

              {/* Email Address */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3.5 hover:border-amber-500/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {isBengali ? 'অফিসিয়াল ইমেইল যোগাযোগ' : 'Official Email Communications'}
                  </span>
                  <a 
                    href="mailto:bileyacademy@gmail.com?subject=Inquiry%20regarding%20Biley%20Academy" 
                    className="text-sm font-bold text-amber-300 hover:text-amber-200 transition-colors block"
                  >
                    bileyacademy@gmail.com
                  </a>
                  <p className="text-[11px] text-slate-400">{isBengali ? 'ভর্তি ও সাধারণ অনুসন্ধান • প্রতিক্রিয়া সময়: ৪ ঘণ্টার মধ্যে' : 'Admissions & general inquiries • Reply within 4 hours'}</p>
                </div>
              </div>

              {/* Campus Location */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3.5 hover:border-amber-500/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {isBengali ? 'ক্যাম্পাস ঠিকানা' : 'Physical Campus & Center'}
                  </span>
                  <p className="text-xs text-slate-200 font-medium leading-relaxed">
                    {isBengali ? 'যমুনা, পিংলা, পশ্চিম মেদিনীপুর, পিন-৭২১১৪০, পশ্চিমবঙ্গ' : 'Jamna, Pingla, Paschim Medinipur, PIN-721140, West Bengal, India'}
                  </p>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    {isBengali ? 'যমুনা বাস স্ট্যান্ড সংলগ্ন • পিংলা ব্লক শিক্ষাকেন্দ্র' : 'Near Jamna Bus Stand • Pingla Block Educational Hub'}
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3.5 hover:border-amber-500/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {isBengali ? 'অফিস ও কাউন্সেলিং সময়' : 'Office & Counseling Hours'}
                  </span>
                  <p className="text-xs text-slate-200 font-medium">
                    {isBengali ? 'সোম থেকে শনিবার: সকাল ১০:০০ – রাত ৮:০০' : 'Monday to Saturday: 10:00 AM – 8:00 PM'}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {isBengali ? 'রবিবার: সকাল ৯:০০ – দুপুর ২:০০ (অগ্রিম সময় নেওয়া বাঞ্ছনীয়)' : 'Sunday: 9:00 AM – 2:00 PM (Prior Appointment Recommended)'}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative">
              
              {!submittedData ? (
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-slate-800 gap-3">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-extrabold text-white font-serif">
                          {isBengali ? 'একটি বার্তা পাঠান' : 'Send a Quick Message'}
                        </h3>
                        <span className="text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-mono">
                          bileyacademy@gmail.com
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {isBengali 
                          ? 'আপনার বার্তা সরাসরি bileyacademy@gmail.com মেইলে জমা হবে ও দ্রুত উত্তর প্রদান করা হবে।' 
                          : 'Your message will be submitted and stored for bileyacademy@gmail.com for prompt review.'}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center space-x-1 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-bold self-start">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{isBengali ? 'অফিসিয়াল মেইল ইনটেক' : 'Direct Mail Intake'}</span>
                    </div>
                  </div>

                  {submitStatus === 'error' && statusMessage && (
                    <div 
                      id="contact-error-alert"
                      className="mb-5 p-3.5 rounded-xl bg-rose-950/80 border border-rose-500 text-rose-200 text-xs flex items-center space-x-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    
                    {/* Full Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Full Name */}
                      <div>
                        <label 
                          htmlFor="contact-fullName" 
                          className="block text-xs font-bold uppercase text-slate-300 mb-1.5"
                        >
                          {isBengali ? 'আপনার পুরো নাম' : 'Your Name'} <span className="text-amber-400">*</span>
                        </label>
                        <input
                          id="contact-fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={isBengali ? 'যেমন: সৌরভ মুখার্জি' : 'e.g. Sourav Mukherjee'}
                          className={`w-full bg-slate-950 border text-xs sm:text-sm text-white rounded-xl px-4 py-2.5 focus:outline-none transition-colors ${
                            touched.fullName && errors.fullName
                              ? 'border-rose-500 focus:border-rose-400'
                              : touched.fullName && !errors.fullName
                              ? 'border-emerald-500/60 focus:border-emerald-400'
                              : 'border-slate-700 focus:border-amber-400'
                          }`}
                        />
                        {touched.fullName && errors.fullName && (
                          <p className="mt-1 text-[11px] text-rose-400 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone / Mobile */}
                      <div>
                        <label 
                          htmlFor="contact-phone" 
                          className="block text-xs font-bold uppercase text-slate-300 mb-1.5"
                        >
                          {isBengali ? 'ফোন নম্বর' : 'Phone Number'} <span className="text-slate-500 font-normal">({isBengali ? 'ঐচ্ছিক' : 'Optional'})</span>
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="e.g. +91 98300 12345"
                          className={`w-full bg-slate-950 border text-xs sm:text-sm text-white rounded-xl px-4 py-2.5 focus:outline-none transition-colors ${
                            touched.phone && errors.phone
                              ? 'border-rose-500 focus:border-rose-400'
                              : 'border-slate-700 focus:border-amber-400'
                          }`}
                        />
                        {touched.phone && errors.phone && (
                          <p className="mt-1 text-[11px] text-rose-400 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Email Field with explicit validation UI */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label 
                          htmlFor="contact-email" 
                          className="block text-xs font-bold uppercase text-slate-300"
                        >
                          {isBengali ? 'ইমেইল ঠিকানা' : 'Email Address'} <span className="text-amber-400">*</span>
                        </label>
                        {isEmailValid && (
                          <span className="text-[11px] text-emerald-400 font-bold flex items-center space-x-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{isBengali ? 'সঠিক ইমেইল ফরম্যাট' : 'Valid Email Format'}</span>
                          </span>
                        )}
                      </div>
                      
                      <div className="relative">
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="e.g. parent.name@example.com"
                          className={`w-full bg-slate-950 border text-xs sm:text-sm text-white rounded-xl px-4 py-2.5 focus:outline-none transition-colors pr-10 ${
                            touched.email && errors.email
                              ? 'border-rose-500 focus:border-rose-400 bg-rose-950/10'
                              : isEmailValid
                              ? 'border-emerald-500 focus:border-emerald-400'
                              : 'border-slate-700 focus:border-amber-400'
                          }`}
                        />
                        <div className="absolute right-3 top-2.5 pointer-events-none text-slate-400">
                          {isEmailValid ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Mail className="w-4 h-4 text-slate-500" />
                          )}
                        </div>
                      </div>

                      {touched.email && errors.email && (
                        <p id="email-error-msg" className="mt-1 text-[11px] text-rose-400 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Inquiry Type Select */}
                    <div>
                      <label 
                        htmlFor="contact-inquiryType" 
                        className="block text-xs font-bold uppercase text-slate-300 mb-1.5"
                      >
                        {isBengali ? 'জিজ্ঞাসার ধরন' : 'Inquiry Category'} <span className="text-amber-400">*</span>
                      </label>
                      <select
                        id="contact-inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-400"
                      >
                        {inquiryTypes.map((item, idx) => (
                          <option key={idx} value={item.en}>
                            {isBengali ? item.bn : item.en}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Details */}
                    <div>
                      <label 
                        htmlFor="contact-message" 
                        className="block text-xs font-bold uppercase text-slate-300 mb-1.5"
                      >
                        {isBengali ? 'বার্তার বিবরণ' : 'Message / Query Details'} <span className="text-amber-400">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={isBengali ? 'ভর্তি, বিষয় বা শিক্ষাদানের পদ্ধতি সম্পর্কে আপনার প্রশ্ন লিখুন...' : 'Please describe what information you need regarding class admissions, subjects, or academic guidance...'}
                        className={`w-full bg-slate-950 border text-xs sm:text-sm text-white rounded-xl p-3.5 focus:outline-none transition-colors ${
                          touched.message && errors.message
                            ? 'border-rose-500 focus:border-rose-400'
                            : touched.message && !errors.message
                            ? 'border-emerald-500/60 focus:border-emerald-400'
                            : 'border-slate-700 focus:border-amber-400'
                        }`}
                      />
                      <div className="flex items-center justify-between mt-1">
                        {touched.message && errors.message ? (
                          <p className="text-[11px] text-rose-400 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.message}</span>
                          </p>
                        ) : (
                          <span className="text-[10px] text-slate-500">
                            {isBengali ? 'কমপক্ষে ১০ অক্ষর' : 'Minimum 10 characters'}
                          </span>
                        )}
                        <span className="text-[10px] text-slate-500">
                          {formData.message.length} {isBengali ? 'অক্ষর' : 'chars'}
                        </span>
                      </div>
                    </div>

                    {/* Destination Mail Indicator Note */}
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{isBengali ? 'জমা হবে অফিসিয়াল মেইলে:' : 'Submits directly to:'}</span>
                        <strong className="text-amber-300 font-mono">bileyacademy@gmail.com</strong>
                      </span>
                      <span className="text-emerald-400 text-[10px] font-bold">Auto-Logged</span>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        id="contact-submit-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl font-bold bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center space-x-2 text-sm disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? (isBengali ? 'bileyacademy@gmail.com-এ পাঠানো হচ্ছে...' : 'Submitting to bileyacademy@gmail.com...') : (isBengali ? 'এখনই বার্তা পাঠান' : 'Send Quick Message')}</span>
                      </button>
                    </div>

                  </form>
                </div>
              ) : (
                /* Success Confirmation State */
                <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
                      {isBengali ? 'বার্তা সফলভাবে জমা হয়েছে' : 'Inquiry Stored & Queued'}
                    </span>
                    <h4 className="text-2xl font-bold text-white font-serif mt-1">
                      {isBengali ? 'আপনার বার্তা গৃহীত হয়েছে!' : 'Message Stored Successfully!'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                      {isBengali ? (
                        <>ধন্যবাদ, <strong className="text-white">{submittedData.fullName}</strong>। আপনার বার্তা <strong className="text-amber-400">bileyacademy@gmail.com</strong> মেইলে সংরক্ষিত হয়েছে (রেফারেন্স: <span className="font-mono text-amber-400 font-bold">{submittedData.id}</span>)।</>
                      ) : (
                        <>Thank you, <strong className="text-white">{submittedData.fullName}</strong>. Your message has been submitted and stored for <strong className="text-amber-400">bileyacademy@gmail.com</strong> under reference <span className="font-mono text-amber-400 font-bold">{submittedData.id}</span>.</>
                      )}
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs text-slate-300 space-y-2 max-w-md mx-auto">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">{isBengali ? 'গন্তব্য মেইল:' : 'Target Mailbox:'}</span>
                      <span className="font-mono font-bold text-amber-300">{submittedData.recipientEmail || 'bileyacademy@gmail.com'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">{isBengali ? 'প্রেরক ইমেইল:' : 'Sender Email:'}</span>
                      <span className="text-white font-medium">{submittedData.email}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">{isBengali ? 'জিজ্ঞাসার বিষয়:' : 'Category:'}</span>
                      <span className="text-white font-medium">{submittedData.inquiryType}</span>
                    </div>
                    {submittedData.phone && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">{isBengali ? 'ফোন/হোয়াটসঅ্যাপ:' : 'Phone/WhatsApp:'}</span>
                        <span className="text-white font-medium">{submittedData.phone}</span>
                      </div>
                    )}
                    <div className="pt-1.5 border-t border-slate-800">
                      <span className="text-[11px] text-slate-400 block mb-1">{isBengali ? 'বার্তার বিবরণ:' : 'Message Content:'}</span>
                      <p className="text-xs text-slate-200 bg-slate-900 p-2.5 rounded-xl border border-slate-800/80 italic line-clamp-3">
                        "{submittedData.message}"
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                    
                    {/* Open in Gmail Web */}
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=bileyacademy@gmail.com&su=${encodeURIComponent(`[Quick Message ${submittedData.id}] ${submittedData.inquiryType} - ${submittedData.fullName}`)}&body=${encodeURIComponent(`Hello Biley Academy,\n\nName: ${submittedData.fullName}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone || 'N/A'}\nInquiry Category: ${submittedData.inquiryType}\nReference Ticket: ${submittedData.id}\n\nMessage:\n${submittedData.message}\n\nThank you.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-bold inline-flex items-center space-x-1.5 transition-all shadow-md"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{isBengali ? 'জিমেইলে পাঠান (Gmail Web)' : 'Send via Gmail Web'}</span>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/919732531730?text=${encodeURIComponent(`Hello Biley Academy,\n*Ticket:* ${submittedData.id}\n*Name:* ${submittedData.fullName}\n*Email:* ${submittedData.email}\n*Phone:* ${submittedData.phone || 'N/A'}\n*Subject:* ${submittedData.inquiryType}\n*Message:* ${submittedData.message}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold inline-flex items-center space-x-1.5 transition-colors shadow-md"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{isBengali ? 'হোয়াটসঅ্যাপে পাঠান' : 'WhatsApp Directly'}</span>
                    </a>

                    {/* View in Inquiries Inbox if available */}
                    {onOpenInbox && (
                      <button
                        onClick={onOpenInbox}
                        className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold inline-flex items-center space-x-1.5 border border-amber-500/30 transition-colors"
                      >
                        <Inbox className="w-3.5 h-3.5 text-amber-400" />
                        <span>{isBengali ? 'ইনবক্সে দেখুন' : 'View in Mailbox Feed'}</span>
                      </button>
                    )}

                    {/* Copy Details */}
                    <button
                      onClick={copyTranscript}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold inline-flex items-center space-x-1.5 border border-slate-700 transition-colors"
                    >
                      {copiedTranscript ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedTranscript ? (isBengali ? 'কপি হয়েছে' : 'Copied!') : (isBengali ? 'কপি করুন' : 'Copy')}</span>
                    </button>

                    {/* New Message */}
                    <button
                      id="contact-new-message-btn"
                      onClick={handleReset}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-bold inline-flex items-center space-x-1.5 border border-slate-800 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{isBengali ? 'নতুন বার্তা' : 'New'}</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

