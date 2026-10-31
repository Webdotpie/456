import React from 'react';
import { Lock, Zap } from 'lucide-react';

interface HeaderProps {
  onLinkClick: (name: string) => void;
  onOpenSecurityModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLinkClick, onOpenSecurityModal }) => {
  return (
    <header className="bg-[#006a4e] text-white w-full border-b border-[#00523d] shadow-sm">
      {/* Mobile Top Header (Exact layout from WhatsApp attachment) */}
      <div className="md:hidden px-4 py-3 flex items-center justify-between">
        {/* Left: Lock Icon */}
        <button
          type="button"
          onClick={onOpenSecurityModal}
          className="text-white hover:text-green-100 p-1 cursor-pointer"
          aria-label="Security status"
        >
          <Lock className="w-6 h-6 text-white" />
        </button>

        {/* Center: White Square Logo Badge */}
        <div className="bg-white rounded-[2px] w-12 h-12 p-2 flex items-center justify-center shadow-xs">
          <Zap className="w-full h-full text-[#006a4e] fill-[#006a4e]" />
        </div>

        {/* Right: Cookie Policy Link */}
        <button
          type="button"
          onClick={() => onLinkClick('Cookie Policy')}
          className="text-xs text-white text-right leading-tight underline decoration-1 underline-offset-2 hover:text-green-100 cursor-pointer max-w-[60px]"
        >
          Cookie Policy
        </button>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex max-w-6xl mx-auto px-6 lg:px-8 py-3.5 items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <span className="text-xl sm:text-2xl font-bold tracking-wider font-sans uppercase">
            RECHARD FORM
          </span>
          <div className="w-9 h-9 bg-white text-[#006a4e] rounded-[4px] p-1.5 flex items-center justify-center shadow-xs flex-shrink-0">
            <Zap className="w-full h-full fill-[#006a4e]" />
          </div>
        </div>

        {/* Center/Right Nav and Security Badge */}
        <div className="flex items-center gap-6 text-sm">
          {/* Header Links */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => onLinkClick('Mobile')}
              className="text-white hover:text-green-100 underline decoration-1 underline-offset-2 transition-colors cursor-pointer text-sm"
            >
              Mobile
            </button>
            <button
              type="button"
              onClick={() => onLinkClick('Cookie policy')}
              className="text-white hover:text-green-100 underline decoration-1 underline-offset-2 transition-colors cursor-pointer text-sm"
            >
              Cookie policy
            </button>
          </div>

          {/* Secure Site Badge Box */}
          <div className="border border-white/80 rounded-[2px] px-3 py-1.5 bg-[#005a42]/30 text-left">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium leading-tight">
              <Lock className="w-3.5 h-3.5 text-white flex-shrink-0" />
              <span>You&apos;re logging into a secure site</span>
            </div>
            <button
              type="button"
              onClick={onOpenSecurityModal}
              className="text-[11px] sm:text-xs text-green-100 hover:text-white underline decoration-1 underline-offset-2 block mt-0.5 transition-colors cursor-pointer text-left"
            >
              How can I tell that this site is secure?
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
