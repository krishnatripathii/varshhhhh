import os

filepath = 'src/components/sections/ProcessSection.tsx'
with open(filepath, 'r') as f:
    content = f.read()

import_stmt = "import { SpiderWebDoodle, RobotDoodle } from '../ui/Doodles';\nimport { Tape } from '../ui/Stationery';\n"
content = content.replace("import { AnimatedSection } from '../ui/AnimatedSection';", "import { AnimatedSection } from '../ui/AnimatedSection';\n" + import_stmt)

# Fix class names
content = content.replace('bg-gradient-to-r from-ai-saffron/40 to-ai-saffron/10', 'bg-gradient-to-r from-marker-yellow/80 to-marker-yellow/20')
content = content.replace('ring-ai-midnight', 'ring-paper-bg')
content = content.replace('bg-ai-ivory/20', 'bg-pencil-medium/20')

target_div = '<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">'
new_div = """<div className="absolute top-[30%] left-[3%] w-24 h-24 text-pencil-light/10 -rotate-12 pointer-events-none hidden md:block">
        <RobotDoodle />
      </div>
      <div className="absolute bottom-[20%] right-[3%] w-32 h-32 text-pencil-light/10 rotate-12 pointer-events-none hidden md:block">
        <SpiderWebDoodle />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Tape className="top-10 right-20 -rotate-3" />"""
content = content.replace(target_div, new_div)

with open(filepath, 'w') as f:
    f.write(content)
