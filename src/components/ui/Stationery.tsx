import React from 'react';

export const Tape = ({ className = "" }: { className?: string }) => (
  <div className={`absolute w-16 h-6 bg-[#fcf9e8]/60 backdrop-blur-sm border border-[#e5e0c8] shadow-[0_1px_3px_rgba(0,0,0,0.05)] opacity-90 z-20 ${className}`}>
    {/* Jagged edges for tape using CSS mask or simple gradient */}
    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-transparent to-[#fcf9e8]/20 border-l border-white/40 border-dashed"></div>
    <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-l from-transparent to-[#fcf9e8]/20 border-r border-white/40 border-dashed"></div>
  </div>
);

export const Staple = ({ className = "" }: { className?: string }) => (
  <div className={`absolute w-6 h-2 z-20 ${className}`}>
    <div className="w-full h-full border-[1.5px] border-gray-400 rounded-[1px] shadow-[0_1px_1px_rgba(0,0,0,0.2)] bg-gradient-to-b from-gray-300 to-gray-500"></div>
  </div>
);

export const Paperclip = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`absolute z-20 drop-shadow-md text-gray-400 ${className}`} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 45 20 L 45 70 C 45 80 60 80 60 70 L 60 15 C 60 5 30 5 30 15 L 30 80 C 30 95 75 95 75 80 L 75 25" />
  </svg>
);
