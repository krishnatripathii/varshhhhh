import React from 'react';

export const Staple = ({ className = "" }: { className?: string }) => (
  <div className={`absolute w-6 h-2 z-20 ${className}`}>
    <div className="w-full h-full border-[1.5px] border-gray-400 rounded-[1px] shadow-[0_1px_1px_rgba(0,0,0,0.2)] bg-gradient-to-b from-gray-300 to-gray-500"></div>
  </div>
);

export const Paperclip = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`absolute z-20 drop-shadow-md text-gray-400/80 ${className}`} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 45 20 L 45 70 C 45 80 60 80 60 70 L 60 15 C 60 5 30 5 30 15 L 30 80 C 30 95 75 95 75 80 L 75 25" />
  </svg>
);
