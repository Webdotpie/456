import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FscsLogo } from './Icons';

interface SidebarProps {
  onLinkClick: (name: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onLinkClick }) => {
  return (
    <aside className="w-full space-y-6">
      {/* Box 1: Help & Support (Inactive / Nothing opens as requested) */}
      <div className="border border-slate-300 bg-white rounded-none shadow-xs">
        <button
          type="button"
          onClick={() => onLinkClick('Help & Support')}
          className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer select-none"
          title="Help & Support (Inactive)"
        >
          <span className="text-[#006a4e] font-bold text-base sm:text-lg">
            Help &amp; Support
          </span>
          <ChevronDown className="w-5 h-5 text-[#006a4e]" />
        </button>
      </div>

      {/* Box 2: Contact Us (Inactive / Nothing opens as requested) */}
      <div className="border border-slate-300 bg-white rounded-none shadow-xs">
        <button
          type="button"
          onClick={() => onLinkClick('Contact Us')}
          className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer select-none"
          title="Contact Us (Inactive)"
        >
          <span className="text-[#006a4e] font-bold text-base sm:text-lg">
            Contact Us
          </span>
          <ChevronDown className="w-5 h-5 text-[#006a4e]" />
        </button>
      </div>

      {/* Secure Protection Card */}
      <div className="border border-slate-300 bg-white p-6 sm:p-7 text-center rounded-none shadow-xs">
        <div className="w-12 h-12 mx-auto mb-2 text-[#006a4e] flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        </div>
        <p className="text-[#006a4e] font-bold text-base sm:text-lg tracking-tight mb-1">
          Protected
        </p>
        <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
          256-bit encrypted connection with secure validation
        </p>
      </div>
    </aside>
  );
};
