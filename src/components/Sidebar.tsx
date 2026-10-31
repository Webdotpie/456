import React from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';

interface SidebarProps {
  onLinkClick: (name: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onLinkClick }) => {
  return (
    <aside style={{ width: '100%' }}>
      {/* Box 1: Help & Support (Inactive) */}
      <div className="rf-sidebar-box">
        <button
          type="button"
          onClick={() => onLinkClick('Help & Support')}
          className="rf-sidebar-btn"
          title="Help & Support"
        >
          <span>Help &amp; Support</span>
          <ChevronDown style={{ width: '20px', height: '20px' }} />
        </button>
      </div>

      {/* Box 2: Contact Us (Inactive) */}
      <div className="rf-sidebar-box">
        <button
          type="button"
          onClick={() => onLinkClick('Contact Us')}
          className="rf-sidebar-btn"
          title="Contact Us"
        >
          <span>Contact Us</span>
          <ChevronDown style={{ width: '20px', height: '20px' }} />
        </button>
      </div>

      {/* Secure Protection Card */}
      <div className="rf-protection-box">
        <div style={{ color: '#006a4e', display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
          <ShieldCheck style={{ width: '42px', height: '42px' }} />
        </div>
        <p className="rf-protection-title">
          Protected
        </p>
        <p className="rf-protection-sub">
          256-bit encrypted connection with secure validation
        </p>
      </div>
    </aside>
  );
};
