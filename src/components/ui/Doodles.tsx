import React from 'react';

export const SpiderWebDoodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M100 100 L10 10 M100 100 L100 10 M100 100 L190 10 M100 100 L190 100 M100 100 L190 190 M100 100 L100 190 M100 100 L10 190 M100 100 L10 100" />
    <path d="M40 40 Q 100 30 160 40 Q 170 100 160 160 Q 100 170 40 160 Q 30 100 40 40" />
    <path d="M60 60 Q 100 55 140 60 Q 145 100 140 140 Q 100 145 60 140 Q 55 100 60 60" />
    <path d="M80 80 Q 100 77 120 80 Q 123 100 120 120 Q 100 123 80 120 Q 77 100 80 80" />
    {/* Hanging spider */}
    <path d="M140 140 L140 180" strokeDasharray="2 2" />
    <circle cx="140" cy="180" r="4" fill="currentColor" />
    <path d="M136 178 L130 174 M144 178 L150 174 M136 182 L130 186 M144 182 L150 186 M138 175 L135 170 M142 175 L145 170 M138 185 L135 190 M142 185 L145 190" />
  </svg>
);

export const RobotDoodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Head */}
    <rect x="25" y="30" width="50" height="40" rx="4" />
    {/* Eyes */}
    <circle cx="40" cy="45" r="4" fill="currentColor" />
    <circle cx="60" cy="45" r="4" fill="currentColor" />
    {/* Mouth */}
    <path d="M 40 60 L 60 60" strokeDasharray="3 3" />
    {/* Antenna */}
    <path d="M 50 30 L 50 15" />
    <circle cx="50" cy="10" r="3" />
    {/* Ears */}
    <path d="M 25 45 L 20 45 L 20 55 L 25 55" />
    <path d="M 75 45 L 80 45 L 80 55 L 75 55" />
    <path d="M 20 80 Q 50 95 80 80" strokeWidth="1" strokeDasharray="4 4" />
  </svg>
);

export const SpidermanMaskDoodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Mask outline */}
    <path d="M 50 10 C 20 10, 15 40, 30 75 C 40 90, 50 95, 50 95 C 50 95, 60 90, 70 75 C 85 40, 80 10, 50 10 Z" />
    {/* Eyes */}
    <path d="M 45 45 C 30 50, 25 40, 30 35 C 35 30, 45 35, 45 45 Z" fill="currentColor" opacity="0.1" />
    <path d="M 55 45 C 70 50, 75 40, 70 35 C 65 30, 55 35, 55 45 Z" fill="currentColor" opacity="0.1" />
    <path d="M 45 45 C 30 50, 25 40, 30 35 C 35 30, 45 35, 45 45 Z" />
    <path d="M 55 45 C 70 50, 75 40, 70 35 C 65 30, 55 35, 55 45 Z" />
    {/* Webbing */}
    <path d="M 50 10 L 50 95" />
    <path d="M 30 75 Q 50 65 70 75" />
    <path d="M 20 50 Q 50 40 80 50" />
    <path d="M 25 25 Q 50 15 75 25" />
    <path d="M 50 10 L 25 25 M 50 10 L 75 25 M 50 10 L 20 50 M 50 10 L 80 50" />
  </svg>
);

export const AIDoodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M 30 70 L 40 30 L 50 70" />
    <path d="M 33 60 L 47 60" />
    <path d="M 60 30 L 70 30 M 65 30 L 65 70 M 60 70 L 70 70" />
    {/* Sparkles */}
    <path d="M 80 15 L 85 20 L 80 25 L 75 20 Z" fill="currentColor" />
    <path d="M 15 30 L 20 35 L 15 40 L 10 35 Z" />
    <path d="M 50 10 L 52 15 L 57 17 L 52 19 L 50 24 L 48 19 L 43 17 L 48 15 Z" fill="currentColor" />
  </svg>
);

export const NotebookSquiggle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M 5 15 Q 15 5 25 15 T 45 15 T 65 15 T 85 15 T 95 15" />
  </svg>
);

export const ArrowDoodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M 20 80 Q 40 20 80 20" />
    <path d="M 70 10 L 80 20 L 70 30" />
  </svg>
);

export const PineappleDoodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M 50 40 L 50 15 L 42 30 L 30 20 L 38 38 L 22 35 L 35 48 Z" />
    <path d="M 50 40 L 50 15 L 58 30 L 70 20 L 62 38 L 78 35 L 65 48 Z" />
    <ellipse cx="50" cy="68" rx="18" ry="24" />
    <path d="M 38 55 L 62 75 M 38 65 L 58 85 M 43 48 L 62 63" />
    <path d="M 62 55 L 38 75 M 62 65 L 42 85 M 57 48 L 38 63" />
  </svg>
);
