import React, { useState } from 'react';
import { Zap, Check, Loader2 } from 'lucide-react';

interface RobotVerificationProps {
  onVerifySuccess: () => void;
}

export const RobotVerificationModal: React.FC<RobotVerificationProps> = ({ onVerifySuccess }) => {
  const [status, setStatus] = useState<'idle' | 'verifying' | 'verified'>('idle');

  const handleCheckboxClick = () => {
    if (status !== 'idle') return;

    setStatus('verifying');

    setTimeout(() => {
      setStatus('verified');

      setTimeout(() => {
        onVerifySuccess();
      }, 600);
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 backdrop-blur-[4px] p-4 animate-fadeIn">
      {/* Modal Card matching screenshot verifa_cbdc0cb2.jpg */}
      <div className="bg-white rounded-lg border-2 border-[#00c59e] w-full max-w-[420px] p-7 shadow-2xl relative text-center">
        {/* Top Logo (Rechard Form) */}
        <div className="flex justify-center mb-2">
          <div className="w-11 h-11 bg-[#006a4e] text-white rounded-[6px] p-2 flex items-center justify-center shadow-xs">
            <Zap className="w-full h-full fill-white" />
          </div>
        </div>

        {/* Heading */}
        <p className="text-sm sm:text-base font-normal text-slate-800 mb-5">
          Please verify you&apos;re not a robot
        </p>

        {/* hCaptcha Widget Container */}
        <div className="bg-[#fafafa] border border-slate-300 rounded-sm p-3.5 flex items-center justify-between shadow-xs max-w-[320px] mx-auto text-left">
          {/* Checkbox and Label */}
          <div className="flex items-center gap-3.5">
            <button
              type="button"
              onClick={handleCheckboxClick}
              disabled={status !== 'idle'}
              className={`w-7 h-7 rounded-[2px] border flex items-center justify-center transition-all cursor-pointer ${
                status === 'verified'
                  ? 'border-emerald-600 bg-emerald-600 text-white'
                  : status === 'verifying'
                  ? 'border-slate-400 bg-white'
                  : 'border-slate-400 bg-white hover:border-[#00c59e]'
              }`}
              aria-label="I am human verification"
            >
              {status === 'verifying' && (
                <Loader2 className="w-4 h-4 text-[#00c59e] animate-spin" />
              )}
              {status === 'verified' && (
                <Check className="w-5 h-5 stroke-[3]" />
              )}
            </button>

            <span
              onClick={handleCheckboxClick}
              className="text-sm font-medium text-slate-800 cursor-pointer select-none"
            >
              {status === 'verifying' ? 'Verifying...' : 'I am human'}
            </span>
          </div>

          {/* hCaptcha Branding Block on right */}
          <div className="flex flex-col items-center justify-center pl-3 select-none">
            <div className="w-8 h-8 rounded-full bg-[#00c59e] flex items-center justify-center text-white shadow-xs">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2a1 1 0 0 1 1 1v7h1V4.5a1 1 0 0 1 2 0v5.5h1V6a1 1 0 0 1 2 0v7a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-5a1 1 0 0 1 2 0v3h1V3a1 1 0 0 1 1-1h1z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-slate-700 tracking-tight mt-0.5">
              hCaptcha
            </span>
            <span className="text-[8px] text-slate-400 leading-tight">
              Privacy - Terms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
