import React, { useState, useEffect } from 'react';
import { Info, AlertCircle, Eye, EyeOff, Loader2, ChevronRight, Check } from 'lucide-react';

interface LogonFormProps {
  onLinkClick: (name: string) => void;
  onSuccessLogin: (userId: string) => void;
}

export const LogonForm: React.FC<LogonFormProps> = ({ onLinkClick, onSuccessLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [errors, setErrors] = useState<{ userId?: string; password?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load remembered User ID if previously saved
  useEffect(() => {
    try {
      const savedUserId = localStorage.getItem('rechard_remembered_userid');
      if (savedUserId) {
        setUserId(savedUserId);
        setRememberMe(true);
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  const handleValidation = () => {
    const newErrors: { userId?: string; password?: string } = {};

    if (!userId.trim()) {
      newErrors.userId = 'Please enter your User ID.';
    } else if (userId.trim().length < 3) {
      newErrors.userId = 'User ID must be at least 3 characters.';
    }

    if (!password) {
      newErrors.password = 'Please enter your password.';
    } else if (password.length < 4) {
      newErrors.password = 'Password must be at least 4 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!handleValidation()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      if (rememberMe) {
        try {
          localStorage.setItem('rechard_remembered_userid', userId.trim());
        } catch {
          // ignore
        }
      } else {
        try {
          localStorage.removeItem('rechard_remembered_userid');
        } catch {
          // ignore
        }
      }

      onSuccessLogin(userId.trim());
    }, 600);
  };

  const handleFillDemo = () => {
    setUserId('R09482103');
    setPassword('Pass#Secure98');
    setErrors({});
  };

  const mobileNavLinks = [
    { title: 'Register for Rechard Form', id: 'Register for Rechard Form' },
    { title: 'Go to desktop site', id: 'Go to desktop site' },
    { title: 'Help', id: 'Help' },
    { title: 'Security', id: 'Security' },
    { title: 'Contact us', id: 'Contact us' },
    { title: 'Mobile Banking', id: 'Mobile Banking' },
    { title: 'Legal', id: 'Legal' },
  ];

  return (
    <div style={{ width: '100%' }}>
      {/* ============================================================== */}
      {/* MOBILE LAYOUT (Pure CSS, exact match to WhatsApp attachments)   */}
      {/* ============================================================== */}
      <div className="rf-mobile-form-container">
        <form onSubmit={handleSubmit} noValidate>
          {/* User ID Field */}
          <div>
            <label htmlFor="mobile-userId" className="rf-mobile-label">
              User ID
            </label>
            <input
              id="mobile-userId"
              name="userId"
              type="text"
              autoComplete="username"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
                if (errors.userId) {
                  setErrors((prev) => ({ ...prev, userId: undefined }));
                }
              }}
              className="rf-mobile-input"
              style={{ borderColor: errors.userId ? '#dc2626' : '#334155' }}
            />
            {errors.userId && (
              <p className="rf-error-text" style={{ marginTop: '-12px', marginBottom: '14px' }}>
                {errors.userId}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="mobile-password" className="rf-mobile-label">
              Password
            </label>
            <div
              className="rf-mobile-password-box"
              style={{ borderColor: errors.password ? '#dc2626' : '#334155' }}
            >
              <input
                id="mobile-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) {
                    setErrors((prev) => ({ ...prev, password: undefined }));
                  }
                }}
                className="rf-mobile-password-input"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="rf-mobile-show-link"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && (
              <p className="rf-error-text" style={{ marginTop: '-16px', marginBottom: '14px' }}>
                {errors.password}
              </p>
            )}
          </div>

          {/* Remember my User ID Square Checkbox */}
          <div className="rf-mobile-checkbox-row">
            <button
              type="button"
              onClick={() => setRememberMe((prev) => !prev)}
              className={`rf-mobile-square-checkbox ${rememberMe ? 'checked' : ''}`}
              aria-label="Remember my User ID checkbox"
            >
              {rememberMe && <Check style={{ width: '22px', height: '22px', strokeWidth: 3 }} />}
            </button>
            <span
              onClick={() => setRememberMe((prev) => !prev)}
              className="rf-mobile-checkbox-text"
            >
              Remember my User ID
            </span>
          </div>

          {/* Continue Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rf-mobile-continue-btn"
            >
              {isSubmitting ? 'Logging on...' : 'Continue'}
            </button>
          </div>

          {/* Forgotten details link */}
          <div>
            <button
              type="button"
              onClick={() => onLinkClick('Forgotten your logon details?')}
              className="rf-mobile-forgot-link"
            >
              Forgotten your logon details?
            </button>
          </div>

          {/* Auto fill test credentials */}
          <div style={{ textAlign: 'right', marginTop: '12px' }}>
            <button
              type="button"
              onClick={handleFillDemo}
              style={{ fontSize: '12px', color: '#64748b', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Auto-fill demo credentials
            </button>
          </div>
        </form>

        {/* Mobile Navigation List with chevrons */}
        <div className="rf-mobile-nav-list">
          {mobileNavLinks.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onLinkClick(item.title)}
              className="rf-mobile-nav-item"
            >
              <span>{item.title}</span>
              <ChevronRight style={{ width: '20px', height: '20px', color: '#94a3b8' }} />
            </button>
          ))}
        </div>

        {/* Mobile Protection Seal at the bottom */}
        <div className="rf-mobile-protect-row">
          <div style={{
            width: '54px',
            height: '54px',
            border: '1px solid rgba(5, 150, 105, 0.4)',
            borderRadius: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#006a4e',
            flexShrink: 0
          }}>
            <span style={{ fontSize: '11px', fontWeight: '900', fontStyle: 'italic' }}>SECURE</span>
            <span style={{ fontSize: '8px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Shield</span>
          </div>
          <div>
            <p style={{ fontWeight: '700', color: '#0f172a', fontSize: '14px', lineHeight: 1.3 }}>
              Your account is protected by 256-bit security.
            </p>
            <p style={{ color: '#64748b', fontSize: '12px', marginTop: '2px' }}>
              Secure end-to-end encrypted connection.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP LAYOUT (Pure CSS)                                      */}
      {/* ============================================================== */}
      <div className="rf-desktop-only">
        {/* Page Title */}
        <h1 className="rf-page-title">
          Welcome to Rechard Form
        </h1>

        {/* Subheading / registration note */}
        <p className="rf-page-subtitle">
          If you don&apos;t already use Rechard Form, it&apos;s simple to{' '}
          <button
            type="button"
            onClick={() => onLinkClick('Register online')}
            className="rf-link-green"
          >
            register online.
          </button>
        </p>

        {/* Main Logon Form */}
        <form onSubmit={handleSubmit} className="rf-form" noValidate>
          {/* User ID Field */}
          <div className="rf-form-group">
            <label htmlFor="desktop-userId" className="rf-form-label">
              User ID:
            </label>
            <div>
              <input
                id="desktop-userId"
                name="userId"
                type="text"
                autoComplete="username"
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                  if (errors.userId) {
                    setErrors((prev) => ({ ...prev, userId: undefined }));
                  }
                }}
                className="rf-input-text"
                style={{ borderColor: errors.userId ? '#dc2626' : '#94a3b8' }}
              />
            </div>
            {errors.userId && (
              <p className="rf-error-text">
                {errors.userId}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="rf-form-group">
            <label htmlFor="desktop-password" className="rf-form-label">
              Password:
            </label>
            <div className="rf-password-wrapper">
              <input
                id="desktop-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) {
                    setErrors((prev) => ({ ...prev, password: undefined }));
                  }
                }}
                className="rf-input-password"
                style={{ borderColor: errors.password ? '#dc2626' : '#94a3b8' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="rf-btn-show"
              >
                {showPassword ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <EyeOff style={{ width: '14px', height: '14px' }} /> Hide
                  </span>
                ) : (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Eye style={{ width: '14px', height: '14px' }} /> Show
                  </span>
                )}
              </button>
            </div>
            {errors.password && (
              <p className="rf-error-text">
                {errors.password}
              </p>
            )}
          </div>

          {/* Remember my User ID checkbox + Info tooltip */}
          <div style={{ marginTop: '14px' }}>
            <div className="rf-checkbox-row">
              <input
                id="desktop-rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rf-checkbox-input"
              />
              <label htmlFor="desktop-rememberMe" className="rf-checkbox-label">
                Remember my User ID
              </label>
              <button
                type="button"
                onClick={() => setShowInfoModal(true)}
                style={{ background: 'none', border: 'none', color: '#006a4e', cursor: 'pointer', padding: '2px' }}
                aria-label="More information"
              >
                <Info style={{ width: '16px', height: '16px' }} />
              </button>
            </div>
            <p className="rf-warning-text">
              <strong>Warning:</strong> Don&apos;t tick this box if you&apos;re using a public or shared computer
            </p>
          </div>

          {/* Action Row */}
          <div className="rf-form-actions">
            <div>
              <button
                type="button"
                onClick={() => onLinkClick('Forgotten your logon details?')}
                className="rf-link-green"
                style={{ fontSize: '14px' }}
              >
                Forgotten your logon details?
              </button>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rf-btn-continue"
              >
                {isSubmitting ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <Loader2 style={{ width: '16px', height: '16px' }} className="rf-animate-spin" />
                    <span>Logging on...</span>
                  </span>
                ) : (
                  'Continue'
                )}
              </button>
            </div>
          </div>

          {/* Demo Credentials Helper */}
          <div style={{ textAlign: 'right', marginTop: '10px' }}>
            <button
              type="button"
              onClick={handleFillDemo}
              style={{ fontSize: '12px', color: '#64748b', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Auto-fill demo credentials
            </button>
          </div>
        </form>
      </div>

      {/* Info Modal for "Remember my User ID" */}
      {showInfoModal && (
        <div className="rf-modal-overlay">
          <div className="rf-modal-card" style={{ maxWidth: '440px', textAlign: 'left', borderColor: '#cbd5e1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#006a4e', fontWeight: '700', fontSize: '18px', marginBottom: '12px' }}>
              <Info style={{ width: '20px', height: '20px' }} />
              <span>Remember my User ID</span>
            </div>
            <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.5 }}>
              If you check this box, we will remember your User ID on this browser so you don&apos;t have to enter it every time you log on.
            </p>
            <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.5, marginTop: '10px' }}>
              For security, never select this option if you are using a shared computer.
            </p>
            <div style={{ textAlign: 'right', marginTop: '20px' }}>
              <button
                type="button"
                onClick={() => setShowInfoModal(false)}
                className="rf-btn-continue"
                style={{ padding: '6px 20px', fontSize: '13px' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
