/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'board-green': '#162a1f',
        'board-navy': '#111827',
        'board-plum': '#2d1b2e',
        'board-slate': '#1e1e24',
        'chalk-yellow': '#fde047',
        'chalk-blue': '#93c5fd',
        'chalk-pink': '#f9a8d4',
        'chalk-green': '#86efac',
        'pencil-dark': '#2d2e2e',
        'pencil-medium': '#4a4b4c',
        'pencil-light': '#7a7b7c',
        'marker-yellow': '#fde047',
        'marker-green': '#bbf7d0',
        'marker-blue': '#bfdbfe',
        'marker-pink': '#fbcfe8',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        display: ['Caveat', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 4s infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'sketch': '2px 3px 6px -1px rgba(0, 0, 0, 0.05), 4px 6px 10px -2px rgba(0, 0, 0, 0.03)',
        'sketch-hover': '3px 5px 8px -1px rgba(0, 0, 0, 0.08), 6px 8px 12px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
