import os

filepath_final = 'src/components/sections/FinalSection.tsx'
with open(filepath_final, 'r') as f:
    content = f.read()

import_stmt = "import { SpiderWebDoodle, NotebookSquiggle, RobotDoodle } from '../ui/Doodles';\nimport { Tape, Staple } from '../ui/Stationery';\n"
content = content.replace("import { GeometricBackground } from '../ui/GeometricBackground';", "import { GeometricBackground } from '../ui/GeometricBackground';\n" + import_stmt)

target_div1 = '<div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">'
new_div1 = """<div className="absolute top-[10%] left-[10%] w-48 h-48 text-pencil-light/10 -rotate-12 pointer-events-none hidden md:block">
        <SpiderWebDoodle />
      </div>
      <div className="absolute bottom-[20%] right-[10%] w-24 h-24 text-pencil-light/20 rotate-45 pointer-events-none hidden md:block">
        <RobotDoodle />
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <Tape className="top-10 left-1/2 -translate-x-1/2 rotate-3" />"""
content = content.replace(target_div1, new_div1)

target_div2 = '<div className="bg-paper-dark/50 rounded-2xl p-8 md:p-10 border border-pencil-medium/20">'
new_div2 = """<div className="bg-paper-bg sketch-border rounded-2xl p-8 md:p-10 shadow-sketch relative">
                  <Staple className="top-4 left-4 rotate-45" />
                  <Staple className="top-6 left-2 rotate-45" />"""
content = content.replace(target_div2, new_div2)

with open(filepath_final, 'w') as f:
    f.write(content)


filepath_local = 'src/components/sections/LocalSection.tsx'
with open(filepath_local, 'r') as f:
    content_local = f.read()

import_stmt_local = "import { SpidermanMaskDoodle, AIDoodle } from '../ui/Doodles';\nimport { Tape } from '../ui/Stationery';\n"
content_local = content_local.replace("import { AnimatedSection } from '../ui/AnimatedSection';", "import { AnimatedSection } from '../ui/AnimatedSection';\n" + import_stmt_local)

target_local = '<div className="max-w-7xl mx-auto px-6 md:px-12">'
new_div_local = """<div className="absolute top-[20%] right-[5%] w-32 h-32 text-pencil-light/10 rotate-12 pointer-events-none hidden md:block">
        <SpidermanMaskDoodle />
      </div>
      <div className="absolute bottom-[10%] left-[5%] w-20 h-20 text-pencil-light/10 -rotate-12 pointer-events-none hidden md:block">
        <AIDoodle />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Tape className="top-0 left-[20%] rotate-6" />
        <Tape className="bottom-0 right-[20%] -rotate-3" />"""
content_local = content_local.replace(target_local, new_div_local)

with open(filepath_local, 'w') as f:
    f.write(content_local)

