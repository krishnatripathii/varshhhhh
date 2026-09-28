import os

filepath = 'src/components/sections/AboutSection.tsx'
with open(filepath, 'r') as f:
    content = f.read()
import_stmt = "import { SpiderWebDoodle, AIDoodle } from '../ui/Doodles';\nimport { Tape, Staple, Paperclip } from '../ui/Stationery';\n"
content = content.replace("import { AnimatedSection } from '../ui/AnimatedSection';", "import { AnimatedSection } from '../ui/AnimatedSection';\n" + import_stmt)
content = content.replace('bg-ai-ivory/[0.01]', 'bg-pencil-medium/[0.01]')
target = '<div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">'
new_div = """<div className="absolute top-[20%] left-[10%] w-32 h-32 text-pencil-light/10 -rotate-12 pointer-events-none hidden md:block">
        <SpiderWebDoodle />
      </div>
      <div className="absolute bottom-[20%] right-[10%] w-24 h-24 text-pencil-light/20 rotate-45 pointer-events-none hidden md:block">
        <AIDoodle />
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <Tape className="top-[5%] left-1/2 -translate-x-1/2 rotate-2" />"""
content = content.replace(target, new_div)
with open(filepath, 'w') as f:
    f.write(content)


filepath_faq = 'src/components/sections/FaqSection.tsx'
with open(filepath_faq, 'r') as f:
    content_faq = f.read()

import_stmt_faq = "import { SpidermanMaskDoodle, ArrowDoodle } from '../ui/Doodles';\nimport { Paperclip, Tape } from '../ui/Stationery';\n"
content_faq = content_faq.replace("import { motion, AnimatePresence } from 'framer-motion';", "import { motion, AnimatePresence } from 'framer-motion';\n" + import_stmt_faq)

target_faq = '<div className="max-w-4xl mx-auto px-6 md:px-12">'
new_div_faq = """<div className="absolute top-[5%] right-[5%] w-48 h-48 text-pencil-light/10 rotate-12 pointer-events-none hidden md:block">
        <SpidermanMaskDoodle />
      </div>
      <div className="absolute bottom-[10%] left-[5%] w-32 h-32 text-pencil-light/10 -rotate-12 pointer-events-none hidden md:block">
        <ArrowDoodle />
      </div>
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <Paperclip className="top-[5%] left-[5%] w-16 h-16 -rotate-12" />"""
content_faq = content_faq.replace(target_faq, new_div_faq)

with open(filepath_faq, 'w') as f:
    f.write(content_faq)

