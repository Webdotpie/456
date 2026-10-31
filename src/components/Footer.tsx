import React from 'react';

interface FooterProps {
  onLinkClick: (name: string) => void;
  onResetRobotCheck?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onLinkClick, onResetRobotCheck }) => {
  const footerLinks = [
    'Recharge Services',
    'Security',
    'Terms of Use',
    'Privacy Policy',
    'Support & FAQs',
  ];

  return (
    <footer className="bg-[#006a4e] text-white py-8 border-t border-[#00553e] mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation row */}
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-normal">
            {footerLinks.map((link) => (
              <li key={link}>
                <button
                  type="button"
                  onClick={() => onLinkClick(link)}
                  className="text-white hover:underline transition-colors cursor-pointer text-left"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Regulatory disclaimer */}
        <div className="mt-5 text-[11px] sm:text-xs text-green-100/90 leading-relaxed max-w-4xl">
          © 2026 Rechard Form Portal. All rights reserved. Secure online recharge and customer access services.
        </div>
      </div>
    </footer>
  );
};
