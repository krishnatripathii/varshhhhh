import os

filepath = 'src/components/sections/WorkSection.tsx'
with open(filepath, 'r') as f:
    content = f.read()

import_stmt = "import { SpiderWebDoodle, NotebookSquiggle, RobotDoodle } from '../ui/Doodles';\nimport { Tape, Staple } from '../ui/Stationery';\n"
content = content.replace("import { AnimatedSection } from '../ui/AnimatedSection';", "import { AnimatedSection } from '../ui/AnimatedSection';\n" + import_stmt)

# Update contrast
content = content.replace("text-pencil-dark/10 group-hover:text-pencil-dark/30", "text-pencil-dark/40 group-hover:text-pencil-dark")

# Add doodles and tape
target_div = '<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">'
new_div = """<div className="absolute top-[10%] left-[2%] w-24 h-24 text-pencil-light/10 rotate-12 pointer-events-none hidden md:block">
        <SpiderWebDoodle />
      </div>
      <div className="absolute bottom-[20%] right-[5%] w-32 h-32 text-pencil-light/10 -rotate-12 pointer-events-none hidden md:block">
        <RobotDoodle />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Tape className="top-[-10px] right-10 rotate-3" />
        <Tape className="bottom-[-10px] left-1/4 -rotate-2" />"""
content = content.replace(target_div, new_div)

with open(filepath, 'w') as f:
    f.write(content)
