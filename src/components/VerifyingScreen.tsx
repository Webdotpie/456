import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileAppPromo } from './MobileAppPromo';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface VerifyingScreenProps {
  userId: string;
  onLinkClick: (name: string) => void;
  onOpenSecurityModal: () => void;
  onFinishVerification: () => void;
  onBackToLogin: () => void;
}

export const VerifyingScreen: React.FC<VerifyingScreenProps> = ({
  userId,
  onLinkClick,
  onOpenSecurityModal,
  onFinishVerification,
  onBackToLogin,
}) => {
  const [dots, setDots] = useState('');
  const [autoProceed, setAutoProceed] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(6);

  // Animated ellipsis for subtle realism
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Optional countdown for demo users if they want to view dashboard
  useEffect(() => {
    if (!autoProceed) return;
    if (secondsLeft <= 0) {
      onFinishVerification();
      return;
    }
    const timer = setTimeout(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [autoProceed, secondsLeft, onFinishVerification]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-[#006a4e] selection:text-white">
      {/* Header */}
      <Header onLinkClick={onLinkClick} onOpenSecurityModal={onOpenSecurityModal} />

      {/* Main Verification Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 flex flex-col justify-between">
        {/* Verification Message & Animated Spinner */}
        <div className="text-center py-6 sm:py-10">
          <h1 className="text-xl sm:text-2xl font-semibold text-[#006a4e] tracking-tight">
            Please wait whilst we verify your information{dots}
          </h1>

          {/* Animated Spinner matching the screenshot */}
          <div className="my-8 flex justify-center items-center">
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Spinning 12-blade radial spinner */}
              <svg
                className="w-10 h-10 animate-spin text-[#006a4e]"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Verifying information spinner"
              >
                {/* 12 rounded spokes with graduated opacity */}
                {[...Array(12)].map((_, i) => {
                  const angle = i * 30;
                  const opacity = Math.max(0.12, (i + 1) / 12);
                  return (
                    <rect
                      key={i}
                      x="46"
                      y="10"
                      width="8"
                      height="22"
                      rx="4"
                      fill="currentColor"
                      opacity={opacity}
                      transform={`rotate(${angle} 50 50)`}
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 font-normal">
            Do not refresh this page
          </p>

          {/* Discreet interactive controls for testing/demo */}
          <div className="mt-8 pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onBackToLogin}
              className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-[2px] transition-colors cursor-pointer bg-slate-50 hover:bg-slate-100"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Login</span>
            </button>

            <button
              type="button"
              onClick={onFinishVerification}
              className="text-xs text-[#006a4e] hover:text-[#00523d] flex items-center gap-1.5 px-3 py-1.5 border border-[#006a4e]/30 rounded-[2px] transition-colors cursor-pointer bg-emerald-50/50 hover:bg-emerald-50 font-semibold"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Continue to Accounts Dashboard &rarr;</span>
            </button>
          </div>
        </div>

        {/* Promo block below divider */}
        <div className="mt-12 sm:mt-16">
          <MobileAppPromo onLinkClick={onLinkClick} />
        </div>
      </main>

      {/* Footer */}
      <Footer onLinkClick={onLinkClick} />
    </div>
  );
};
