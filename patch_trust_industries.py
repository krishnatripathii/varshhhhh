import os

filepath_trust = 'src/components/sections/TrustSection.tsx'
with open(filepath_trust, 'r') as f:
    content_trust = f.read()

import_stmt_trust = "import { Tape } from '../ui/Stationery';\n"
content_trust = content_trust.replace("import { AnimatedSection } from '../ui/AnimatedSection';", "import { AnimatedSection } from '../ui/AnimatedSection';\n" + import_stmt_trust)

target_trust = '<div className="max-w-7xl mx-auto px-6 md:px-12">'
new_div_trust = """<div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <Tape className="top-[-10px] left-[5%] rotate-2" />
        <Tape className="bottom-[-10px] right-[5%] -rotate-2" />"""
content_trust = content_trust.replace(target_trust, new_div_trust)

with open(filepath_trust, 'w') as f:
    f.write(content_trust)


filepath_ind = 'src/components/sections/IndustriesSection.tsx'
with open(filepath_ind, 'r') as f:
    content_ind = f.read()

import_stmt_ind = "import { SpiderWebDoodle, ArrowDoodle } from '../ui/Doodles';\nimport { Paperclip } from '../ui/Stationery';\n"
content_ind = content_ind.replace("import { AnimatedSection } from '../ui/AnimatedSection';", "import { AnimatedSection } from '../ui/AnimatedSection';\n" + import_stmt_ind)

content_ind = content_ind.replace('<section id="industries" className="py-24 md:py-32 bg-paper-surface">', '<section id="industries" className="py-24 md:py-32 bg-paper-surface relative overflow-hidden">')

target_ind = '<div className="max-w-7xl mx-auto px-6 md:px-12">'
new_div_ind = """<div className="absolute top-[5%] left-[5%] w-48 h-48 text-pencil-light/10 -rotate-12 pointer-events-none hidden md:block">
        <SpiderWebDoodle />
      </div>
      <div className="absolute bottom-[5%] right-[5%] w-32 h-32 text-pencil-light/10 rotate-12 pointer-events-none hidden md:block">
        <ArrowDoodle />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Paperclip className="top-[5%] right-[5%] w-16 h-16 rotate-[20deg]" />"""
content_ind = content_ind.replace(target_ind, new_div_ind)

with open(filepath_ind, 'w') as f:
    f.write(content_ind)
