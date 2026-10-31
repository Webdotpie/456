import React from 'react';
import { Lock, Zap } from 'lucide-react';

interface HeaderProps {
  onLinkClick: (name: string) => void;
  onOpenSecurityModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLinkClick, onOpenSecurityModal }) => {
  return (
    <header className="rf-header">
      {/* Mobile Top Header (Exact layout from WhatsApp attachment) */}
      <div className="rf-header-mobile">
        {/* Left: Lock Icon */}
        <button
          type="button"
          onClick={onOpenSecurityModal}
          className="rf-mobile-lock-btn"
          aria-label="Security status"
        >
          <Lock style={{ width: '24px', height: '24px' }} />
        </button>

        {/* Center: White Square Logo Badge */}
        <div className="rf-mobile-logo-badge">
          <Zap style={{ width: '100%', height: '100%', color: '#006a4e', fill: '#006a4e' }} />
        </div>

        {/* Right: Cookie Policy Link */}
        <button
          type="button"
          onClick={() => onLinkClick('Cookie Policy')}
          className="rf-mobile-cookie-btn"
        >
          Cookie Policy
        </button>
      </div>

      {/* Desktop Header */}
      <div className="rf-header-inner">
        {/* Brand Logo & Name */}
        <div className="rf-brand">
          <span className="rf-brand-name">
            RECHARD FORM
          </span>
          <div className="rf-brand-logo">
            <Zap style={{ width: '100%', height: '100%', fill: '#006a4e' }} />
          </div>
        </div>

        {/* Center/Right Nav and Security Badge */}
        <div className="rf-header-right">
          {/* Header Links */}
          <div className="rf-header-links">
            <button
              type="button"
              onClick={() => onLinkClick('Mobile')}
              className="rf-header-link"
            >
              Mobile
            </button>
            <button
              type="button"
              onClick={() => onLinkClick('Cookie policy')}
              className="rf-header-link"
            >
              Cookie policy
            </button>
          </div>

          {/* Secure Site Badge Box */}
          <div className="rf-secure-badge">
            <div className="rf-secure-title">
              <Lock style={{ width: '14px', height: '14px' }} />
              <span>You&apos;re logging into a secure site</span>
            </div>
            <button
              type="button"
              onClick={onOpenSecurityModal}
              className="rf-secure-sub"
            >
              How can I tell that this site is secure?
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
