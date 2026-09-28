import os

filepath = 'src/components/sections/BeforeAfterSection.tsx'
with open(filepath, 'r') as f:
    content = f.read()

import_stmt = "import { SpiderWebDoodle, SpidermanMaskDoodle } from '../ui/Doodles';\n"
content = content.replace("import { AnimatedSection } from '../ui/AnimatedSection';", "import { AnimatedSection } from '../ui/AnimatedSection';\n" + import_stmt)

target_div = '<div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">'
new_div = """<div className="absolute top-[5%] left-[5%] w-32 h-32 text-pencil-light/10 -rotate-12 pointer-events-none hidden md:block">
        <SpidermanMaskDoodle />
      </div>
      <div className="absolute bottom-[5%] right-[5%] w-48 h-48 text-pencil-light/20 rotate-45 pointer-events-none hidden md:block">
        <SpiderWebDoodle />
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">"""
content = content.replace(target_div, new_div)

with open(filepath, 'w') as f:
    f.write(content)
