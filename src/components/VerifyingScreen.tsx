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

  // Animated ellipsis
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
      {/* Header */}
      <Header onLinkClick={onLinkClick} onOpenSecurityModal={onOpenSecurityModal} />

      {/* Main Verification Container */}
      <main style={{ flex: 1, maxWidth: '800px', width: '100%', margin: '0 auto', padding: '60px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* Verification Message & Animated Spinner */}
        <div style={{ textAlign: 'center', padding: '24px 0' }}>
          <h1 style={{ fontSize: '22px', fontWeight: '600', color: '#006a4e', letterSpacing: '-0.3px' }}>
            Please wait whilst we verify your information{dots}
          </h1>

          {/* Animated Spinner matching the screenshot */}
          <div style={{ margin: '32px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Spinning 12-blade radial spinner */}
              <svg
                className="rf-animate-spin"
                style={{ width: '40px', height: '40px', color: '#006a4e' }}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Verifying information spinner"
              >
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

          <p style={{ fontSize: '15px', color: '#334155' }}>
            Do not refresh this page
          </p>

          {/* Testing controls */}
          <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <button
              type="button"
              onClick={onBackToLogin}
              style={{ fontSize: '12px', color: '#475569', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', border: '1px solid #cbd5e1', borderRadius: '2px', backgroundColor: '#f8fafc', cursor: 'pointer' }}
            >
              <ArrowLeft style={{ width: '14px', height: '14px' }} />
              <span>Back to Login</span>
            </button>

            <button
              type="button"
              onClick={onFinishVerification}
              style={{ fontSize: '12px', color: '#006a4e', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', border: '1px solid rgba(0, 106, 78, 0.4)', borderRadius: '2px', backgroundColor: '#ecfdf5', fontWeight: '600', cursor: 'pointer' }}
            >
              <CheckCircle2 style={{ width: '14px', height: '14px' }} />
              <span>Continue to Accounts Dashboard &rarr;</span>
            </button>
          </div>
        </div>

        {/* Promo block below divider */}
        <div style={{ marginTop: '48px', borderTop: '1px solid #e2e8f0', paddingTop: '24px' }}>
          <MobileAppPromo onLinkClick={onLinkClick} />
        </div>
      </main>

      {/* Footer */}
      <Footer onLinkClick={onLinkClick} />
    </div>
  );
};
