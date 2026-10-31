import React from 'react';
import { MobilePhonesGraphic } from './Icons';

interface MobileAppPromoProps {
  onLinkClick: (name: string) => void;
}

export const MobileAppPromo: React.FC<MobileAppPromoProps> = ({ onLinkClick }) => {
  return (
    <div className="pt-6 sm:pt-8 border-t border-slate-300 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
      {/* Visual illustration of dual phones */}
      <div className="flex-shrink-0">
        <MobilePhonesGraphic className="w-20 h-20 sm:w-24 sm:h-24" />
      </div>

      {/* Copy and link */}
      <div className="space-y-2">
        <h2 className="text-base sm:text-lg font-bold text-[#006a4e] leading-snug">
          Why not try our secure Mobile Banking app?
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-xl">
          With our app you get access to lots of extra features to make banking even easier.
          Things like freeze your card, check your PIN and set your own contactless limit.
        </p>
        <div>
          <button
            type="button"
            onClick={() => onLinkClick('How to set up the app')}
            className="text-xs sm:text-sm text-[#006a4e] hover:underline cursor-pointer font-medium"
          >
            How to set up the app
          </button>
        </div>
      </div>
    </div>
  );
};
