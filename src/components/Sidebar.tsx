import { ChevronDown } from 'lucide-react';

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

      {/* FSCS Protection Card matching attachment homepage_a_ei_logo_ta_thaka_dorkar_130e26cd.jpg */}
      <div className="rf-protection-box" style={{ padding: '16px', textAlign: 'center', backgroundColor: '#ffffff' }}>
        <img
          src="./fscs_protected.jpg"
          alt="FSCS Protected - FSCS is not applicable to deposits in the Channel Islands and Isle of Man"
          style={{ width: '100%', maxWidth: '250px', height: 'auto', display: 'block', margin: '0 auto' }}
          onError={(e) => {
            // Fallback path if hosted at root or subfolder
            e.currentTarget.src = '/assets/aistudio/homepage_a_ei_logo_ta_thaka_dorkar_130e26cd.jpg';
          }}
        />
      </div>
    </aside>
  );
};
