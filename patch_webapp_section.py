import os

filepath = 'src/components/sections/WebAppSection.tsx'
with open(filepath, 'r') as f:
    content = f.read()

import_stmt = "import { SpidermanMaskDoodle, ArrowDoodle } from '../ui/Doodles';\nimport { Paperclip } from '../ui/Stationery';\n"
content = content.replace("import { AnimatedSection } from '../ui/AnimatedSection';", "import { AnimatedSection } from '../ui/AnimatedSection';\n" + import_stmt)

target_div = '<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">'
new_div = """<div className="absolute top-[20%] right-[10%] w-24 h-24 text-pencil-light/10 -rotate-12 pointer-events-none hidden md:block">
        <SpidermanMaskDoodle />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Paperclip className="top-10 right-20 w-12 h-12 rotate-[30deg]" />"""
content = content.replace(target_div, new_div)

with open(filepath, 'w') as f:
    f.write(content)
