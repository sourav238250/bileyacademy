import React, { useState } from 'react';
import { 
  User as UserIcon, 
  LogOut, 
  LogIn, 
  Shield, 
  CheckCircle2, 
  Cloud, 
  GraduationCap,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export const AuthButton: React.FC = () => {
  const { currentUser, userProfile, loading, signInWithGoogle, signOut, updateUserGrade } = useAuth();
  const { isBengali, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const handleSignIn = async () => {
    try {
      setAuthError(null);
      await signInWithGoogle();
    } catch (err: any) {
      console.error('Sign in error:', err);
      setAuthError(err.message || 'Authentication failed. Please try again.');
    }
  };

  const handleSignOut = async () => {
    setDropdownOpen(false);
    await signOut();
  };

  if (loading) {
    return (
      <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs animate-pulse">
        <div className="w-3.5 h-3.5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="hidden sm:inline">Connecting DB...</span>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="relative">
        <button
          onClick={handleSignIn}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
          title="Sign in with Google to sync your study progress and quiz scores across devices"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          <span className="hidden sm:inline">{isBengali ? 'লগইন / সাইন ইন' : 'Student Login'}</span>
          <span className="sm:hidden">{isBengali ? 'লগইন' : 'Login'}</span>
        </button>
        {authError && (
          <div className="absolute right-0 mt-2 w-56 p-2 bg-red-950 border border-red-800 text-red-200 text-xs rounded shadow-lg z-50">
            {authError}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center space-x-2 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700/80 border border-amber-500/30 text-slate-100 text-xs transition-colors"
      >
        {currentUser.photoURL ? (
          <img 
            src={currentUser.photoURL} 
            alt={currentUser.displayName || 'User'} 
            className="w-6 h-6 rounded-full border border-amber-400 object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs">
            {currentUser.displayName ? currentUser.displayName[0].toUpperCase() : 'S'}
          </div>
        )}
        <div className="text-left hidden sm:block max-w-[110px] truncate">
          <p className="font-semibold leading-tight text-white truncate text-[11px]">
            {currentUser.displayName || 'Scholar'}
          </p>
          <p className="text-[9px] text-amber-400 flex items-center space-x-0.5">
            <Cloud className="w-2.5 h-2.5 inline text-emerald-400 mr-0.5" />
            <span>Class {userProfile?.selectedGrade || 10}</span>
          </p>
        </div>
        <ChevronDown className="w-3 h-3 text-slate-400" />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl bg-slate-900 border border-slate-700/80 shadow-2xl p-3 z-50 text-slate-200 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="border-b border-slate-800 pb-2.5 mb-2.5">
            <p className="font-bold text-sm text-white truncate">{currentUser.displayName}</p>
            <p className="text-xs text-slate-400 truncate">{currentUser.email}</p>
            <div className="flex items-center space-x-1 mt-1 text-[11px] text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Firestore Sync: Active</span>
            </div>
          </div>

          <div className="space-y-1 text-xs mb-3">
            <p className="text-slate-400 font-medium text-[11px]">Quick Class Selection (Cloud Synced):</p>
            <div className="grid grid-cols-4 gap-1 pt-1">
              {[9, 10, 11, 12].map((g) => (
                <button
                  key={g}
                  onClick={() => {
                    updateUserGrade(g);
                  }}
                  className={`px-1.5 py-1 rounded text-center font-bold text-[11px] transition-colors ${
                    userProfile?.selectedGrade === g
                      ? 'bg-amber-500 text-slate-950 shadow-sm shadow-amber-500/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  Cl {g}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center space-x-1.5 py-1.5 px-3 rounded-lg bg-red-950/40 hover:bg-red-900/60 border border-red-800/40 text-red-300 font-medium text-xs transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{isBengali ? 'লগআউট করুন' : 'Sign Out'}</span>
          </button>
        </div>
      )}
    </div>
  );
};
