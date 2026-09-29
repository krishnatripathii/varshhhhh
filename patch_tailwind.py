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
        'sky-top': '#ff8a76',
        'sky-mid': '#583270',
        'sky-dark': '#1a1c2c',
        'sky-midnight': '#030510',
        'glass-border': 'rgba(255, 255, 255, 0.15)',
        'glass-fill': 'rgba(255, 255, 255, 0.03)',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 10s ease-in-out infinite',
        'cloud-slow': 'cloud 60s linear infinite',
        'cloud-med': 'cloud 40s linear infinite',
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
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        cloud: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110vw)' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'glass-hover': '0 8px 32px 0 rgba(255, 255, 255, 0.1)',
        'neon': '0 0 20px rgba(255,255,255,0.2)',
      },
    },
  },
  plugins: [],
}
"""
with open('tailwind.config.js', 'w') as f:
    f.write(tw)
