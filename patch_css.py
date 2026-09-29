css = """@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #030510;
  }
  
  body {
    @apply text-white font-sans;
    background: transparent;
  }

  ::selection {
    @apply bg-white/30 text-white;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #030510;
  }
  ::-webkit-scrollbar-thumb {
    @apply bg-white/20 rounded-full;
  }
  ::-webkit-scrollbar-thumb:hover {
    @apply bg-white/40;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .glass-panel {
    @apply bg-glass-fill backdrop-blur-xl border border-glass-border shadow-glass rounded-[2rem];
  }
  .glass-panel-hover {
    @apply hover:bg-white/[0.08] hover:border-white/30 hover:shadow-glass-hover transition-all duration-500;
  }
  .glass-text {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/50;
  }
  .text-glow {
    text-shadow: 0 0 20px rgba(255,255,255,0.4);
  }
}

:focus-visible {
  @apply outline-none ring-2 ring-white/50 ring-offset-2 ring-offset-transparent;
}
"""
with open('src/index.css', 'w') as f:
    f.write(css)
