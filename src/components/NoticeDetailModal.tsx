import React from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  FileText, 
  Download, 
  Sparkles, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  Share2,
  ExternalLink,
  MessageCircle,
  AlertCircle
} from 'lucide-react';
import { NoticeItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface NoticeDetailModalProps {
  notice: NoticeItem | null;
  onClose: () => void;
  onOpenInquiry?: (context?: string) => void;
}

export const NoticeDetailModal: React.FC<NoticeDetailModalProps> = ({
  notice,
  onClose,
  onOpenInquiry
}) => {
  const { isBengali } = useLanguage();
  if (!notice) return null;

  const handleDownloadNotice = () => {
    // Generate a printable notice document
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${notice.title} - Biley Academy Official Notice</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 40px; color: #0f172a; max-width: 800px; margin: 0 auto; line-height: 1.6; }
              .header { text-align: center; border-bottom: 2px solid #b45309; padding-bottom: 20px; margin-bottom: 25px; }
              .logo { font-size: 24px; font-weight: 900; color: #b45309; letter-spacing: 1px; }
              .tagline { font-size: 13px; font-style: italic; color: #475569; }
              .ref { font-size: 12px; color: #64748b; margin-top: 10px; }
              .title { font-size: 20px; font-weight: bold; color: #0f172a; margin-bottom: 15px; }
              .meta { font-size: 13px; background: #f8fafc; padding: 10px 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #f59e0b; }
              .details { margin: 20px 0; }
              .details li { margin-bottom: 10px; }
              .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="logo">BILEY ACADEMY</div>
              <div class="tagline">An Educational Coaching Institute (Since 2026) | "Learn Today, Lead Tomorrow"</div>
              <div class="ref">Jamna, Pingla, Paschim Medinipur - PIN 721140, W.B. • WhatsApp: +91 9732531730 (WhatsApp Only)</div>
            </div>
            <div class="meta">
              <strong>Category:</strong> ${notice.categoryLabel} &nbsp;|&nbsp; 
              <strong>Date:</strong> ${notice.date} &nbsp;|&nbsp; 
              <strong>Target:</strong> ${notice.targetClass || 'All Batches'}
            </div>
            <div class="title">${notice.title}</div>
            <p>${notice.description}</p>
            ${notice.details && notice.details.length > 0 ? `
              <div class="details">
                <h3>Detailed Instructions & Guidelines:</h3>
                <ul>
                  ${notice.details.map(d => `<li>${d}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
            <div class="footer">
              <p>For inquiries and registrations, visit the Academic Office at Jamna Center or call <strong>+91 97325 31730</strong>.</p>
              <p>© 2026 Biley Academy. All Rights Reserved.</p>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 300);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-5 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
              notice.category === 'admission' 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : notice.category === 'examination'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
            }`}>
              {notice.categoryLabel}
            </span>
            {notice.isNew && (
              <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                NEW
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-rose-500 hover:text-white text-slate-300 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-100 leading-snug">
              {notice.title}
            </h3>
            
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-2 pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Date: {notice.date}</span>
              </div>
              {notice.targetClass && (
                <div className="flex items-center space-x-1">
                  <Users className="w-3.5 h-3.5 text-blue-400" />
                  <span>Audience: {notice.targetClass}</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {notice.description}
          </p>

          {notice.details && notice.details.length > 0 && (
            <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 space-y-2.5">
              <div className="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>{isBengali ? 'গুরুত্বপূর্ণ বিবরণ ও নির্দেশাবলী' : 'Key Details & Instructions'}</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {notice.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-amber-400 font-bold mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Official Seal / Verification Box */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{isBengali ? 'অ্যাকাডেমিক ডিরেক্টরেট, বিলে অ্যাকাডেমি, জামনা দ্বারা প্রকাশিত' : 'Issued by Academic Directorate, Biley Academy, Jamna'}</span>
            </div>
            <span className="font-bold text-amber-400">PIN: 721140</span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          
          <button
            onClick={handleDownloadNotice}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>{isBengali ? 'অফিসিয়াল নোটিস প্রিন্ট করুন' : 'Print Official Circular'}</span>
          </button>

          <div className="flex items-center space-x-2">
            <a
              href={`https://wa.me/919732531730?text=${encodeURIComponent(`Hello Biley Academy, I have an inquiry regarding notice: "${notice.title}"`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-sm"
              title={isBengali ? 'হোয়াটসঅ্যাপ অনুসন্ধান (শুধুমাত্র হোয়াটসঅ্যাপ)' : 'WhatsApp Inquiry (WhatsApp Only)'}
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isBengali ? 'হোয়াটসঅ্যাপ বার্তা' : 'WhatsApp Us'}</span>
            </a>

            {onOpenInquiry && (
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry(`Inquiry about ${notice.title}`);
                }}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md transition-colors flex items-center space-x-1.5"
              >
                <span>{notice.actionText ? (isBengali ? (notice.actionText.includes('Admit') || notice.actionText.includes('Apply') ? 'ভর্তির জন্য আবেদন করুন' : 'বিস্তারিত জানুন / আবেদন') : notice.actionText) : (isBengali ? 'আবেদন / যোগাযোগ' : 'Take Action / Inquire')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
