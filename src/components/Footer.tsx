import React from 'react';

interface FooterProps {
  onLinkClick: (name: string) => void;
  onResetRobotCheck?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const footerLinks = [
    'Recharge Services',
    'Security',
    'Terms of Use',
    'Privacy Policy',
    'Support & FAQs',
  ];

  return (
    <footer className="rf-footer">
      <div className="rf-footer-inner">
        {/* Navigation row */}
        <nav aria-label="Footer Navigation">
          <ul className="rf-footer-links">
            {footerLinks.map((link) => (
              <li key={link}>
                <button
                  type="button"
                  onClick={() => onLinkClick(link)}
                  className="rf-footer-link-btn"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Regulatory disclaimer */}
        <div className="rf-footer-disclaimer">
          © 2026 Rechard Form Portal. All rights reserved. Secure online recharge and customer access services.
        </div>
      </div>
    </footer>
  );
};
