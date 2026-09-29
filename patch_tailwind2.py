import os

tw = """/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'miami-orange': '#de5d36',
        'miami-magenta': '#7a2850',
        'miami-purple': '#26143c',
        'sky-midnight': '#050508',
        'glass-border': 'rgba(255, 255, 255, 0.15)',
        'glass-fill': 'rgba(255, 255, 255, 0.08)',
        'text-soft': '#fcf4f0',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'shooting': 'shooting 5s infinite ease-out',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.1', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        shooting: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(45deg)', opacity: '1' },
          '20%': { transform: 'translateX(-1000px) translateY(1000px) rotate(45deg)', opacity: '0' },
          '100%': { transform: 'translateX(-1000px) translateY(1000px) rotate(45deg)', opacity: '0' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'glass-hover': '0 8px 32px 0 rgba(255, 255, 255, 0.15)',
        'neon': '0 0 20px rgba(255,255,255,0.2)',
      },
    },
  },
  plugins: [],
}
"""
with open('tailwind.config.js', 'w') as f:
    f.write(tw)
