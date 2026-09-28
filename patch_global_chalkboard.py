import os
import glob

# 1. Update tailwind.config.js
with open('tailwind.config.js', 'r') as f:
    tw = f.read()

tw = tw.replace("'paper-bg': '#fdfbf7',", "'board-green': '#162a1f',")
tw = tw.replace("'paper-surface': '#f5f2e9',", "'board-navy': '#111827',")
tw = tw.replace("'paper-dark': '#e8e4d3',", "'board-plum': '#2d1b2e',")
tw = tw.replace("'pastel-sage': '#eef2ee',", "'board-slate': '#1e1e24',")
tw = tw.replace("'pastel-blush': '#fdf5f5',", "'chalk-yellow': '#fde047',")
tw = tw.replace("'pastel-blue': '#eff3f8',", "'chalk-blue': '#93c5fd',")
tw = tw.replace("'pastel-yellow': '#fdfbf0',", "'chalk-pink': '#f9a8d4',")
tw = tw.replace("'pastel-lilac': '#f6f2f8',", "'chalk-green': '#86efac',")
tw = tw.replace("'marker-yellow': '#fef08a',", "'marker-yellow': '#fde047',") # Make it brighter

with open('tailwind.config.js', 'w') as f:
    f.write(tw)

# 2. Update index.css
with open('src/index.css', 'r') as f:
    css = f.read()

css = css.replace("theme('colors.paper-bg')", "theme('colors.board-green')")
css = css.replace("theme('colors.pencil-medium')", "rgba(255,255,255,0.05)")
css = css.replace("text-pencil-dark", "text-white")

with open('src/index.css', 'w') as f:
    f.write(css)

# 3. Global Replace in all TSX files
replacements = {
    'text-pencil-dark': 'text-white',
    'text-pencil-medium': 'text-white/70',
    'text-pencil-light': 'text-white/40',
    'border-pencil-medium/20': 'border-white/10',
    'border-pencil-medium/30': 'border-white/10',
    'border-pencil-dark/40': 'border-white/30',
    'bg-pastel-yellow': 'bg-board-green',
    'bg-pastel-sage': 'bg-board-navy',
    'bg-pastel-blush': 'bg-board-plum',
    'bg-pastel-blue': 'bg-board-slate',
    'bg-pastel-lilac': 'bg-board-green',
    'bg-paper-bg': 'bg-board-green',
    'bg-paper-surface': 'bg-board-navy',
    'bg-paper-dark': 'bg-board-slate',
    'bg-[#1c2e24]': 'bg-board-green',
    'bg-white/10 backdrop-blur-md': 'bg-white/[0.02] backdrop-blur-xl', # Hero fix
    'bg-[#fefce8]': 'bg-white/5 backdrop-blur-md border border-white/10', # BeforeAfter fix
    'bg-[#f0fdf4]': 'bg-white/5 backdrop-blur-md border border-white/10', # BeforeAfter fix
}

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            orig = content
            for old, new in replacements.items():
                content = content.replace(old, new)
            
            # Additional targeted glassmorphism adjustments
            if file == 'ServicesSection.tsx':
                # Add glass to service cards
                content = content.replace('className="group flex flex-col h-full"', 'className="group flex flex-col h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300"')
            
            if file == 'SolutionsSection.tsx':
                content = content.replace('className="flex flex-col h-full"', 'className="flex flex-col h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8"')
            
            if file == 'ContactForm.tsx':
                content = content.replace('bg-transparent', 'bg-white/5')
                content = content.replace('border-white/10', 'border-white/20') # Make inputs slightly more visible
            
            if file == 'Navbar.tsx':
                content = content.replace('!isScrolled && !isMobileOpen ? "text-white" : "text-white"', '"text-white"')
                content = content.replace('!isScrolled ? "text-white/80 hover:text-white" : "text-white/70 hover:text-white"', '"text-white/80 hover:text-white"')
                content = content.replace('bg-board-green/80', 'bg-board-green/50') # More glass

            if file == 'WorkSection.tsx':
                content = content.replace('text-white/40', 'text-white/10')
                content = content.replace('group-hover:text-white', 'group-hover:text-white/30')

            if orig != content:
                with open(filepath, 'w') as f:
                    f.write(content)

