import React, { useState, useEffect } from 'react';
import { 
  Inbox, 
  Mail, 
  Calendar, 
  User, 
  Phone, 
  Clock, 
  Search, 
  X, 
  ExternalLink, 
  CheckCircle2, 
  RefreshCw, 
  FileSpreadsheet, 
  Send,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { 
  fetchAllAdmissionInquiries, 
  fetchAllContactMessages, 
  subscribeAdmissionInquiries, 
  subscribeContactMessages,
  SavedAdmissionInquiryDoc,
  SavedContactMessageDoc
} from '../lib/firestoreService';
import { useLanguage } from '../context/LanguageContext';

interface InquiriesInboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiriesInboxModal: React.FC<InquiriesInboxModalProps> = ({ isOpen, onClose }) => {
  const { isBengali } = useLanguage();
  const [activeTab, setActiveTab] = useState<'admissions' | 'messages'>('admissions');
  const [searchTerm, setSearchTerm] = useState('');
  const [admissions, setAdmissions] = useState<SavedAdmissionInquiryDoc[]>([]);
  const [messages, setMessages] = useState<SavedContactMessageDoc[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;
    setLoading(true);

    // Initial fetch
    const loadData = async () => {
      try {
        const [admList, msgList] = await Promise.all([
          fetchAllAdmissionInquiries(),
          fetchAllContactMessages()
        ]);
        setAdmissions(admList);
        setMessages(msgList);
      } catch (err) {
        console.error('Error fetching inbox records:', err);
      } finally {
        setLoading(false);
      }
    };
    loadData();

    // Subscribe to real-time updates
    const unsubAdm = subscribeAdmissionInquiries((data) => {
      setAdmissions(data);
    });
    const unsubMsg = subscribeContactMessages((data) => {
      setMessages(data);
    });

    return () => {
      unsubAdm();
      unsubMsg();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredAdmissions = admissions.filter((a) => {
    const q = searchTerm.toLowerCase();
    return (
      (a.studentName && a.studentName.toLowerCase().includes(q)) ||
      (a.phone && a.phone.includes(q)) ||
      (a.gradeLevel && a.gradeLevel.toLowerCase().includes(q)) ||
      (a.id && a.id.toLowerCase().includes(q))
    );
  });

  const filteredMessages = messages.filter((m) => {
    const q = searchTerm.toLowerCase();
    return (
      (m.fullName && m.fullName.toLowerCase().includes(q)) ||
      (m.email && m.email.toLowerCase().includes(q)) ||
      (m.message && m.message.toLowerCase().includes(q)) ||
      (m.inquiryType && m.inquiryType.toLowerCase().includes(q))
    );
  });

  const totalCount = admissions.length + messages.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
                  {isBengali ? 'অফিসিয়াল ইনকোয়ারি ও মেসেজ ইনবক্স' : 'Academy Inquiries & Messages Inbox'}
                </h3>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Firestore Cloud Synced</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {isBengali ? 'গন্তব্য মেইল:' : 'Target Mailbox:'}{' '}
                <strong className="text-amber-400 font-mono">bileyacademy@gmail.com</strong>
                {' • '}{totalCount} {isBengali ? 'টি বার্তা সংরক্ষিত' : 'total submissions registered'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action Bar / Tabs & Search */}
        <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Tabs */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('admissions')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-colors ${
                activeTab === 'admissions'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{isBengali ? 'ভর্তি ও ডেমো আবেদন' : 'Admission Inquiries'}</span>
              <span className="bg-slate-950/40 text-[10px] px-1.5 py-0.2 rounded-full ml-1">
                {admissions.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('messages')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-colors ${
                activeTab === 'messages'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{isBengali ? 'সাধারণ বার্তা ও প্রশ্ন' : 'Contact Messages'}</span>
              <span className="bg-slate-950/40 text-[10px] px-1.5 py-0.2 rounded-full ml-1">
                {messages.length}
              </span>
            </button>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder={isBengali ? 'নাম, ফোন বা বিষয় দিয়ে খুঁজুন...' : 'Search by student, phone, subject...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-950 border border-slate-700 text-xs text-white rounded-xl pl-9 pr-3 py-1.5 w-full sm:w-64 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {loading ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-xs text-slate-400">Loading inquiries from Firestore database...</p>
            </div>
          ) : activeTab === 'admissions' ? (
            filteredAdmissions.length === 0 ? (
              <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl p-6">
                <Calendar className="w-10 h-10 text-slate-600 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-300">
                  {isBengali ? 'কোনো ভর্তি আবেদন পাওয়া যায়নি' : 'No admission inquiries yet'}
                </p>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  {isBengali 
                    ? 'ওয়েবসাইট থেকে ভর্তি ফর্ম জমা দিলে এখানে তাৎক্ষণিকভাবে দৃশ্যমান হবে।' 
                    : 'Submissions made on the Admission form will appear here in real-time.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredAdmissions.map((inquiry, idx) => (
                  <div 
                    key={inquiry.id || idx}
                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all space-y-3 relative group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold text-white text-sm">{inquiry.studentName}</h4>
                          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-bold px-2 py-0.5 rounded-full font-mono">
                            {inquiry.gradeLevel}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          <strong>Guardian:</strong> {inquiry.parentName || 'N/A'}
                        </p>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {inquiry.id.slice(0, 10)}
                      </span>
                    </div>

                    <div className="text-xs space-y-1 text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/60">
                      <p className="flex items-center space-x-1.5 text-amber-300 font-medium">
                        <Phone className="w-3 h-3" />
                        <span>{inquiry.phone}</span>
                      </p>
                      {inquiry.email && (
                        <p className="flex items-center space-x-1.5 text-slate-400">
                          <Mail className="w-3 h-3" />
                          <span className="truncate">{inquiry.email}</span>
                        </p>
                      )}
                      <p className="text-slate-400 text-[11px] pt-1">
                        <strong>Subjects:</strong> {Array.isArray(inquiry.subjects) ? inquiry.subjects.join(', ') : inquiry.subjects}
                      </p>
                      {inquiry.targetGoal && (
                        <p className="text-slate-400 text-[11px]">
                          <strong>Target Goal:</strong> {inquiry.targetGoal}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-900 text-[11px]">
                      <a
                        href={`mailto:bileyacademy@gmail.com?subject=${encodeURIComponent(`[Admission Follow-up ${inquiry.id}] ${inquiry.studentName} - ${inquiry.gradeLevel}`)}&body=${encodeURIComponent(`Admission Inquiry Record\n\nStudent: ${inquiry.studentName}\nGuardian: ${inquiry.parentName}\nClass: ${inquiry.gradeLevel}\nPhone: ${inquiry.phone}\nEmail: ${inquiry.email || 'N/A'}\nSubjects: ${Array.isArray(inquiry.subjects) ? inquiry.subjects.join(', ') : inquiry.subjects}\nTarget: ${inquiry.targetGoal}\n\nOfficial Mailbox: bileyacademy@gmail.com`)}`}
                        className="text-amber-400 hover:text-amber-300 font-bold flex items-center space-x-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Forward to Gmail</span>
                      </a>
                      <a
                        href={`https://wa.me/${inquiry.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center space-x-1"
                      >
                        <Phone className="w-3 h-3" />
                        <span>WhatsApp Parent</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            filteredMessages.length === 0 ? (
              <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl p-6">
                <MessageSquare className="w-10 h-10 text-slate-600 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-300">
                  {isBengali ? 'কোনো মেসেজ পাওয়া যায়নি' : 'No contact messages yet'}
                </p>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  {isBengali 
                    ? 'ওয়েবসাইট থেকে কন্টাক্ট মেসেজ পাঠানো হলে এখানে প্রদর্শিত হবে।' 
                    : 'Messages sent via the Contact form will be displayed here in real-time.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredMessages.map((msg, idx) => (
                  <div 
                    key={msg.id || idx}
                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-white text-sm">{msg.fullName}</h4>
                        <p className="text-xs text-amber-400 font-medium">{msg.inquiryType}</p>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {msg.id.slice(0, 10)}
                      </span>
                    </div>

                    <div className="text-xs space-y-1 text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/60">
                      <p className="flex items-center space-x-1.5 text-slate-300">
                        <Mail className="w-3 h-3 text-amber-400" />
                        <span>{msg.email}</span>
                      </p>
                      {msg.phone && (
                        <p className="flex items-center space-x-1.5 text-slate-400">
                          <Phone className="w-3 h-3" />
                          <span>{msg.phone}</span>
                        </p>
                      )}
                      <div className="pt-1.5 border-t border-slate-800 mt-1.5">
                        <p className="text-slate-300 text-xs italic">
                          "{msg.message}"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-900 text-[11px]">
                      <a
                        href={`mailto:bileyacademy@gmail.com?subject=${encodeURIComponent(`[Contact Message ${msg.id}] ${msg.inquiryType} from ${msg.fullName}`)}&body=${encodeURIComponent(`From: ${msg.fullName}\nEmail: ${msg.email}\nPhone: ${msg.phone || 'N/A'}\nCategory: ${msg.inquiryType}\n\nMessage:\n${msg.message}\n\nOfficial Mailbox: bileyacademy@gmail.com`)}`}
                        className="text-amber-400 hover:text-amber-300 font-bold flex items-center space-x-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Open in Gmail</span>
                      </a>
                      <a
                        href={`mailto:${msg.email}?subject=${encodeURIComponent(`Reply from Biley Academy: ${msg.inquiryType}`)}`}
                        className="text-blue-400 hover:text-blue-300 font-bold flex items-center space-x-1"
                      >
                        <Send className="w-3 h-3" />
                        <span>Reply to Sender</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        {/* Footer Note */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>
              All submissions are stored in <strong>Cloud Firestore</strong> and dispatched to <span className="text-amber-400 font-mono">bileyacademy@gmail.com</span>
            </span>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bileyacademy@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs inline-flex items-center space-x-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Open bileyacademy@gmail.com</span>
          </a>
        </div>

      </div>
    </div>
  );
};
