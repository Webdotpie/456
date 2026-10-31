import React, { useState, useEffect } from 'react';
import { Info, AlertCircle, Eye, EyeOff, Loader2, ChevronRight, Check } from 'lucide-react';

interface LogonFormProps {
  onLinkClick: (name: string) => void;
  onSuccessLogin: (userId: string) => void;
}

export const LogonForm: React.FC<LogonFormProps> = ({ onLinkClick, onSuccessLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [errors, setErrors] = useState<{ userId?: string; password?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load remembered User ID if previously saved
  useEffect(() => {
    try {
      const savedUserId = localStorage.getItem('rechard_remembered_userid');
      if (savedUserId) {
        setUserId(savedUserId);
        setRememberMe(true);
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  const handleValidation = () => {
    const newErrors: { userId?: string; password?: string } = {};

    if (!userId.trim()) {
      newErrors.userId = 'Please enter your User ID.';
    } else if (userId.trim().length < 3) {
      newErrors.userId = 'User ID must be at least 3 characters.';
    }

    if (!password) {
      newErrors.password = 'Please enter your password.';
    } else if (password.length < 4) {
      newErrors.password = 'Password must be at least 4 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!handleValidation()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      if (rememberMe) {
        try {
          localStorage.setItem('rechard_remembered_userid', userId.trim());
        } catch {
          // ignore
        }
      } else {
        try {
          localStorage.removeItem('rechard_remembered_userid');
        } catch {
          // ignore
        }
      }

      onSuccessLogin(userId.trim());
    }, 600);
  };

  const handleFillDemo = () => {
    setUserId('R09482103');
    setPassword('Pass#Secure98');
    setErrors({});
  };

  const mobileNavLinks = [
    { title: 'Register for Rechard Form', id: 'Register for Rechard Form' },
    { title: 'Go to desktop site', id: 'Go to desktop site' },
    { title: 'Help', id: 'Help' },
    { title: 'Security', id: 'Security' },
    { title: 'Contact us', id: 'Contact us' },
    { title: 'Mobile Banking', id: 'Mobile Banking' },
    { title: 'Legal', id: 'Legal' },
  ];

  return (
    <div className="w-full">
      {/* ============================================================== */}
      {/* MOBILE LAYOUT (Identical to WhatsApp Attachment Screenshots)    */}
      {/* ============================================================== */}
      <div className="md:hidden w-full px-5 py-6 font-sans">
        <form onSubmit={handleSubmit} noValidate>
          {/* User ID Field */}
          <div className="space-y-2">
            <label htmlFor="mobile-userId" className="block text-[17px] text-slate-800 font-normal">
              User ID
            </label>
            <input
              id="mobile-userId"
              name="userId"
              type="text"
              autoComplete="username"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
                if (errors.userId) {
                  setErrors((prev) => ({ ...prev, userId: undefined }));
                }
              }}
              className={`w-full bg-white text-slate-900 px-3.5 h-[52px] text-base border ${
                errors.userId ? 'border-red-600' : 'border-slate-700'
              } rounded-none focus:outline-2 focus:outline-slate-950`}
            />
            {errors.userId && (
              <p className="text-xs font-semibold text-red-700 flex items-center gap-1.5 mt-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.userId}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2 mt-5">
            <label htmlFor="mobile-password" className="block text-[17px] text-slate-800 font-normal">
              Password
            </label>
            <div
              className={`w-full bg-white h-[52px] border ${
                errors.password ? 'border-red-600' : 'border-slate-700'
              } flex items-center pr-4`}
            >
              <input
                id="mobile-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) {
                    setErrors((prev) => ({ ...prev, password: undefined }));
                  }
                }}
                className="flex-1 h-full px-3.5 text-base border-none outline-none text-slate-900 bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-[#006a4e] hover:text-[#004e38] font-semibold text-base underline decoration-1 underline-offset-2 cursor-pointer select-none"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs font-semibold text-red-700 flex items-center gap-1.5 mt-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.password}
              </p>
            )}
          </div>

          {/* Remember my User ID big green square checkbox */}
          <div className="flex items-center gap-3.5 mt-6">
            <button
              type="button"
              onClick={() => setRememberMe((prev) => !prev)}
              className={`w-8 h-8 rounded-none border-2 border-[#006a4e] flex items-center justify-center transition-colors cursor-pointer ${
                rememberMe ? 'bg-[#006a4e] text-white' : 'bg-white'
              }`}
              aria-label="Remember my User ID checkbox"
            >
              {rememberMe && <Check className="w-6 h-6 stroke-[3]" />}
            </button>
            <span
              onClick={() => setRememberMe((prev) => !prev)}
              className="text-[17px] text-slate-800 font-normal cursor-pointer select-none"
            >
              Remember my User ID
            </span>
          </div>

          {/* Continue Button (Full Width Green) */}
          <div className="mt-7">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#006a4e] active:bg-[#00543e] text-white text-[17px] font-medium py-3 rounded-none shadow-none text-center cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Logging on...</span>
                </>
              ) : (
                'Continue'
              )}
            </button>
          </div>

          {/* Forgotten your logon details? link */}
          <div className="mt-5">
            <button
              type="button"
              onClick={() => onLinkClick('Forgotten your logon details?')}
              className="text-[#006a4e] underline decoration-1 underline-offset-2 text-base font-medium cursor-pointer"
            >
              Forgotten your logon details?
            </button>
          </div>

          {/* Quick Demo Helper */}
          <div className="mt-3 text-right">
            <button
              type="button"
              onClick={handleFillDemo}
              className="text-xs text-slate-400 hover:text-[#006a4e] underline cursor-pointer"
            >
              Auto-fill demo credentials
            </button>
          </div>
        </form>

        {/* Mobile Navigation List with chevrons (as seen in attachments) */}
        <div className="mt-10 border-t border-slate-200">
          {mobileNavLinks.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onLinkClick(item.title)}
              className="w-full py-4 border-b border-slate-200 flex items-center justify-between text-left group cursor-pointer"
            >
              <span className="text-[#006a4e] font-medium text-[16px] group-hover:underline">
                {item.title}
              </span>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 flex-shrink-0" />
            </button>
          ))}
        </div>

        {/* Mobile Protection Seal at the bottom */}
        <div className="mt-8 py-4 flex items-center gap-4">
          <div className="flex-shrink-0 w-14 h-14 border border-emerald-600/30 rounded-full flex flex-col items-center justify-center text-[#006a4e]">
            <span className="text-xs font-black italic tracking-tighter">SECURE</span>
            <span className="text-[9px] font-bold uppercase tracking-widest mt-[-2px]">Shield</span>
          </div>
          <div className="text-xs text-slate-700 leading-snug">
            <p className="font-bold text-slate-900 text-sm">
              Your account is protected by 256-bit security.
            </p>
            <p className="text-slate-500 text-xs mt-0.5">
              Secure end-to-end encrypted connection.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP LAYOUT (Preserves Desktop Presentation)                */}
      {/* ============================================================== */}
      <div className="hidden md:block w-full">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Welcome to Rechard Form
        </h1>

        {/* Subheading / registration note */}
        <p className="mt-3 text-sm text-slate-700">
          If you don&apos;t already use Rechard Form, it&apos;s simple to{' '}
          <button
            type="button"
            onClick={() => onLinkClick('Register online')}
            className="text-[#006a4e] hover:underline underline decoration-1 underline-offset-2 cursor-pointer font-medium"
          >
            register online.
          </button>
        </p>

        {/* Main Logon Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-6" noValidate>
          {/* User ID Field */}
          <div className="space-y-2">
            <label htmlFor="desktop-userId" className="block text-sm font-bold text-slate-900">
              User ID:
            </label>
            <div className="max-w-md">
              <input
                id="desktop-userId"
                name="userId"
                type="text"
                autoComplete="username"
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                  if (errors.userId) {
                    setErrors((prev) => ({ ...prev, userId: undefined }));
                  }
                }}
                className={`w-full sm:max-w-xs bg-white text-slate-900 px-3 py-2 text-sm border ${
                  errors.userId ? 'border-red-600 ring-1 ring-red-600' : 'border-slate-400'
                } rounded-none focus:outline-2 focus:outline-slate-950 focus:border-slate-950`}
                placeholder=""
                aria-describedby={errors.userId ? 'userId-error' : undefined}
              />
            </div>
            {errors.userId && (
              <p id="userId-error" className="mt-1 text-xs font-semibold text-red-700 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.userId}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="desktop-password" className="block text-sm font-bold text-slate-900">
              Password:
            </label>
            <div className="max-w-md flex items-stretch">
              <input
                id="desktop-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) {
                    setErrors((prev) => ({ ...prev, password: undefined }));
                  }
                }}
                className={`w-full sm:max-w-xs bg-white text-slate-900 px-3 py-2 text-sm border ${
                  errors.password ? 'border-red-600 ring-1 ring-red-600' : 'border-slate-400'
                } rounded-none border-r-0 focus:outline-2 focus:outline-slate-950 focus:border-slate-950`}
                placeholder=""
                aria-describedby={errors.password ? 'password-error' : undefined}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="px-4 py-2 border border-slate-400 bg-white hover:bg-slate-100 text-slate-800 text-sm font-medium transition-colors cursor-pointer flex items-center justify-center min-w-[70px] select-none"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <span className="flex items-center gap-1">
                    <EyeOff className="w-3.5 h-3.5" /> Hide
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" /> Show
                  </span>
                )}
              </button>
            </div>
            {errors.password && (
              <p id="password-error" className="mt-1 text-xs font-semibold text-red-700 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.password}
              </p>
            )}
          </div>

          {/* Remember my User ID checkbox + Info tooltip */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center gap-2">
              <input
                id="desktop-rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-5 h-5 rounded-none border border-slate-500 text-[#006a4e] focus:ring-[#006a4e] cursor-pointer"
              />
              <label htmlFor="desktop-rememberMe" className="text-sm font-medium text-slate-800 cursor-pointer select-none">
                Remember my User ID
              </label>
              <button
                type="button"
                onClick={() => setShowInfoModal(true)}
                className="text-[#006a4e] hover:text-[#004e39] cursor-pointer p-0.5 rounded-full transition-colors"
                aria-label="More information about Remember my User ID"
                title="Click for information"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-800 font-normal">
              <strong className="font-semibold text-slate-900">Warning:</strong> Don&apos;t tick this box if you&apos;re using a public or shared computer
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <button
                type="button"
                onClick={() => onLinkClick('Forgotten your logon details?')}
                className="text-[#006a4e] hover:underline cursor-pointer text-sm font-semibold text-left"
              >
                Forgotten your logon details?
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-[#006a4e] hover:bg-[#00543e] active:bg-[#004230] text-white font-bold px-8 py-2.5 rounded-[2px] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Logging on...</span>
                  </>
                ) : (
                  'Continue'
                )}
              </button>
            </div>
          </div>

          {/* Demo Credentials Helper */}
          <div className="pt-2 text-right">
            <button
              type="button"
              onClick={handleFillDemo}
              className="text-xs text-slate-500 hover:text-[#006a4e] underline decoration-dotted cursor-pointer"
            >
              Auto-fill demo credentials
            </button>
          </div>
        </form>
      </div>

      {/* Info Modal for "Remember my User ID" */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white max-w-md w-full p-6 shadow-xl border border-slate-300">
            <div className="flex items-center gap-2 text-[#006a4e] font-bold text-lg mb-3">
              <Info className="w-5 h-5 flex-shrink-0" />
              <span>Remember my User ID</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              If you check this box, we will remember your User ID on this browser so you don&apos;t have to enter it every time you log on.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mt-2.5">
              For security, never select this option if you are using a shared computer (such as at work, a library, or an internet cafe).
            </p>
            <div className="mt-5 text-right">
              <button
                type="button"
                onClick={() => setShowInfoModal(false)}
                className="bg-[#006a4e] text-white px-5 py-1.5 text-sm font-semibold hover:bg-[#00543e] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
