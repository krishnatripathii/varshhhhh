import os

filepath = 'src/components/sections/Hero.tsx'
with open(filepath, 'r') as f:
    content = f.read()

# Add imports
import_statement = "import { SpiderWebDoodle, RobotDoodle, SpidermanMaskDoodle, NotebookSquiggle, ArrowDoodle, AIDoodle } from '../ui/Doodles';\n"
content = content.replace("import { HeroGeometry } from '../ui/HeroGeometry';", "import { HeroGeometry } from '../ui/HeroGeometry';\n" + import_statement)

# Replace the previous doodle divs in Hero.tsx with the new ones.
# Find the exact string from before.
old_doodles = """<div className="absolute top-[20%] right-[10%] opacity-30 animate-float-slow hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pencil-light">
          <path d="M50 10 L80 30 L80 70 L50 90 L20 70 L20 30 Z" />
          <path d="M50 10 L50 50" />
          <path d="M20 30 L50 50 L80 30" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </svg>
      </div>
      
      <div className="absolute bottom-[20%] left-[5%] opacity-30 animate-float-delayed hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pencil-light">
          <path d="M20 80 Q 50 20 80 80" />
          <circle cx="80" cy="80" r="10" />
          <path d="M30 60 L70 60" />
          <path d="M45 40 L55 40" />
        </svg>
      </div>"""

new_doodles = """
      <div className="absolute top-[10%] right-[5%] w-64 h-64 text-pencil-light/20 rotate-12 animate-float-slow pointer-events-none hidden lg:block">
        <SpiderWebDoodle />
      </div>
      <div className="absolute top-[35%] right-[20%] w-32 h-32 text-red-500/20 -rotate-12 animate-float-delayed pointer-events-none hidden lg:block">
        <SpidermanMaskDoodle />
      </div>
      <div className="absolute bottom-[20%] right-[10%] w-40 h-40 text-pencil-dark/20 rotate-6 animate-float-slow pointer-events-none hidden lg:block">
        <RobotDoodle />
      </div>
      <div className="absolute top-[5%] left-[5%] w-24 h-24 text-marker-yellow/40 -rotate-12 pointer-events-none hidden lg:block">
        <AIDoodle />
      </div>
      <div className="absolute bottom-[10%] left-[10%] w-32 h-10 text-pencil-light/30 pointer-events-none hidden lg:block">
        <NotebookSquiggle />
      </div>
"""

content = content.replace(old_doodles, new_doodles)

with open(filepath, 'w') as f:
    f.write(content)
