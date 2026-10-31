import React from 'react';

/**
 * Lloyds Bank iconic rearing black horse emblem inside a rounded white shield/box.
 */
export const LloydsHorseLogo: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => {
  return (
    <div className={`bg-white rounded-[4px] p-1 flex items-center justify-center shadow-xs flex-shrink-0 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        className="w-full h-full text-black"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Lloyds Bank Black Horse Logo"
      >
        {/* Rearing stallion silhouette */}
        <path d="M 68 12 C 65 11, 61 14, 58 17 C 56 16, 53 14, 50 14 C 47 14, 45 16, 43 18 C 39 19, 36 22, 35 25 C 33 28, 33 32, 34 35 C 32 37, 29 41, 28 45 C 27 50, 27 54, 29 57 C 30 59, 32 60, 34 61 C 32 63, 31 66, 32 69 C 33 72, 35 74, 38 75 C 40 76, 42 75, 43 73 C 44 71, 44 68, 44 65 C 46 66, 49 67, 52 66 C 54 65, 55 63, 56 60 C 57 58, 56 55, 55 53 C 58 53, 62 51, 64 48 C 67 44, 69 39, 70 34 C 71 30, 70 26, 68 23 C 71 21, 72 17, 70 14 Z M 52 23 C 54 21, 57 20, 60 21 C 62 23, 63 26, 62 29 C 60 30, 58 30, 56 29 C 54 27, 53 25, 52 23 Z M 35 48 C 36 44, 39 41, 42 39 C 41 43, 40 47, 38 50 C 37 51, 35 50, 35 48 Z M 48 88 C 46 88, 44 86, 44 83 C 44 79, 46 76, 49 74 C 52 74, 54 76, 54 80 C 54 84, 51 88, 48 88 Z" />
        <path d="M 45 35 C 49 33, 54 34, 58 37 C 62 40, 65 45, 65 50 C 65 54, 62 58, 58 61 C 54 64, 50 67, 47 72 C 45 76, 45 81, 46 86 C 44 87, 41 87, 40 85 C 38 82, 38 77, 40 72 C 42 66, 45 61, 48 56 C 50 53, 50 50, 48 48 C 46 45, 43 45, 40 47 C 37 49, 35 53, 33 57 C 31 56, 30 53, 31 50 C 33 44, 38 38, 45 35 Z" />
        <path d="M 62 47 C 65 48, 68 51, 70 54 C 73 59, 74 65, 73 71 C 71 73, 68 73, 67 71 C 66 67, 67 62, 65 58 C 64 55, 62 53, 60 52 C 60 50, 61 48, 62 47 Z" />
      </svg>
    </div>
  );
};

/**
 * FSCS protected logo (Financial Services Compensation Scheme)
 */
export const FscsLogo: React.FC<{ className?: string }> = ({ className = 'w-24 h-12' }) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 160 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[#006a4e]"
      >
        {/* Swoosh oval leaf loop */}
        <ellipse
          cx="80"
          cy="35"
          rx="72"
          ry="30"
          stroke="currentColor"
          strokeWidth="3.5"
          fill="none"
          strokeDasharray="400"
          transform="rotate(-5 80 35)"
        />
        {/* 'fscs' text */}
        <text
          x="80"
          y="42"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="36"
          letterSpacing="-1.5"
          fill="currentColor"
          fontStyle="italic"
        >
          fscs
        </text>
      </svg>
    </div>
  );
};

/**
 * Dual Smartphone outline graphic for Mobile Banking App promo
 */
export const MobilePhonesGraphic: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background larger phone (tablet / large phone) */}
      <rect
        x="12"
        y="10"
        width="55"
        height="95"
        rx="8"
        stroke="#006a4e"
        strokeWidth="2.5"
        fill="#f8fafc"
      />
      {/* Top speaker slit */}
      <line x1="32" y1="18" x2="47" y2="18" stroke="#006a4e" strokeWidth="2.5" strokeLinecap="round" />
      {/* Screen area line */}
      <line x1="12" y1="26" x2="67" y2="26" stroke="#006a4e" strokeWidth="1" strokeDasharray="2 2" />
      {/* Home button line */}
      <line x1="32" y1="96" x2="47" y2="96" stroke="#006a4e" strokeWidth="2.5" strokeLinecap="round" />

      {/* Foreground smaller smartphone */}
      <rect
        x="48"
        y="30"
        width="48"
        height="82"
        rx="7"
        stroke="#006a4e"
        strokeWidth="2.5"
        fill="#ffffff"
      />
      {/* Speaker slit */}
      <line x1="64" y1="38" x2="80" y2="38" stroke="#006a4e" strokeWidth="2.5" strokeLinecap="round" />
      {/* Home indicator bar */}
      <line x1="64" y1="104" x2="80" y2="104" stroke="#006a4e" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
};
