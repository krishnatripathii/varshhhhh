import os

# 1. Add Pineapple to Doodles.tsx
filepath_doodles = 'src/components/ui/Doodles.tsx'
with open(filepath_doodles, 'r') as f:
    doodles = f.read()

pineapple = """
export const PineappleDoodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M 50 40 L 50 15 L 42 30 L 30 20 L 38 38 L 22 35 L 35 48 Z" />
    <path d="M 50 40 L 50 15 L 58 30 L 70 20 L 62 38 L 78 35 L 65 48 Z" />
    <ellipse cx="50" cy="68" rx="18" ry="24" />
    <path d="M 38 55 L 62 75 M 38 65 L 58 85 M 43 48 L 62 63" />
    <path d="M 62 55 L 38 75 M 62 65 L 42 85 M 57 48 L 38 63" />
  </svg>
);
"""
if "PineappleDoodle" not in doodles:
    doodles += pineapple
    with open(filepath_doodles, 'w') as f:
        f.write(doodles)

# 2. Remove Tape from Stationery.tsx and fix Paperclip
filepath_stat = 'src/components/ui/Stationery.tsx'
with open(filepath_stat, 'r') as f:
    stat = f.read()

# We can just recreate it without Tape to be clean
stat_clean = """import React from 'react';

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
"""
with open(filepath_stat, 'w') as f:
    f.write(stat_clean)

