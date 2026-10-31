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
    <div className="rf-modal-overlay">
      {/* Modal Card matching screenshot verifa_cbdc0cb2.jpg */}
      <div className="rf-modal-card">
        {/* Top Logo (Rechard Form) */}
        <div className="rf-modal-logo">
          <Zap style={{ width: '100%', height: '100%', fill: '#ffffff' }} />
        </div>

        {/* Heading */}
        <p className="rf-modal-heading">
          Please verify you&apos;re not a robot
        </p>

        {/* hCaptcha Widget Container */}
        <div className="rf-hcaptcha-container">
          {/* Checkbox and Label */}
          <div className="rf-hcaptcha-left">
            <button
              type="button"
              onClick={handleCheckboxClick}
              disabled={status !== 'idle'}
              className={`rf-hcaptcha-checkbox ${status === 'verified' ? 'verified' : ''}`}
              aria-label="I am human verification"
            >
              {status === 'verifying' && (
                <Loader2 style={{ width: '16px', height: '16px', color: '#00c59e' }} className="rf-animate-spin" />
              )}
              {status === 'verified' && (
                <Check style={{ width: '18px', height: '18px', strokeWidth: 3 }} />
              )}
            </button>

            <span
              onClick={handleCheckboxClick}
              className="rf-hcaptcha-label"
            >
              {status === 'verifying' ? 'Verifying...' : 'I am human'}
            </span>
          </div>

          {/* hCaptcha Branding Block on right */}
          <div className="rf-hcaptcha-right">
            <div className="rf-hcaptcha-badge">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
                <path d="M12 2a1 1 0 0 1 1 1v7h1V4.5a1 1 0 0 1 2 0v5.5h1V6a1 1 0 0 1 2 0v7a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-5a1 1 0 0 1 2 0v3h1V3a1 1 0 0 1 1-1h1z" />
              </svg>
            </div>
            <span className="rf-hcaptcha-name">
              hCaptcha
            </span>
            <span className="rf-hcaptcha-terms">
              Privacy - Terms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
