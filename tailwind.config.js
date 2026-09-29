/** @type {import('tailwindcss').Config} */
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
        'glass-border': 'rgba(255, 255, 255, 0.2)',
        'glass-fill': 'rgba(255, 255, 255, 0.1)',
        'text-soft': '#fcf4f0',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'satellite': 'satellite 40s linear infinite',
        'aurora': 'aurora 15s ease-in-out infinite',

        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'shooting': 'shooting 5s infinite ease-out',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        satellite: {
          '0%': { transform: 'translateX(-10vw) translateY(0)' },
          '100%': { transform: 'translateX(110vw) translateY(20vh)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translateX(-5%) skew(-10deg)', opacity: '0.3' },
          '50%': { transform: 'translateX(5%) skew(10deg)', opacity: '0.5' },
        },

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
          '0%': { transform: 'translateX(0) translateY(0) rotate(-35deg)', opacity: '1' },
          '10%': { transform: 'translateX(-1000px) translateY(700px) rotate(-35deg)', opacity: '0' },
          '100%': { transform: 'translateX(-1000px) translateY(700px) rotate(-35deg)', opacity: '0' },
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
