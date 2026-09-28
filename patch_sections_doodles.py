import os

def insert_doodles(filepath, import_stmt, target_text, new_text):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check if already imported
    if import_stmt not in content:
        content = content.replace("import React from 'react';", "import React from 'react';\n" + import_stmt)
        
    content = content.replace(target_text, new_text)
    
    with open(filepath, 'w') as f:
        f.write(content)

# StorySection
story_import = "import { SpiderWebDoodle, NotebookSquiggle, ArrowDoodle } from '../ui/Doodles';"
story_target = '<div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">'
story_new = """<div className="absolute top-[5%] right-[5%] w-32 h-32 text-pencil-light/20 rotate-45 pointer-events-none hidden md:block">
        <SpiderWebDoodle />
      </div>
      <div className="absolute bottom-[10%] left-[5%] w-40 h-40 text-pencil-light/10 -rotate-12 pointer-events-none hidden md:block">
        <ArrowDoodle />
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">"""
insert_doodles('src/components/sections/StorySection.tsx', story_import, story_target, story_new)

# ServicesSection
services_import = "import { RobotDoodle, NotebookSquiggle } from '../ui/Doodles';"
services_target = '<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">'
services_new = """<div className="absolute top-[10%] left-[2%] w-20 h-20 text-pencil-light/20 -rotate-12 pointer-events-none hidden md:block">
        <RobotDoodle />
      </div>
      <div className="absolute bottom-[5%] right-[5%] w-32 h-10 text-pencil-light/20 rotate-6 pointer-events-none hidden md:block">
        <NotebookSquiggle />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">"""
insert_doodles('src/components/sections/ServicesSection.tsx', services_import, services_target, services_new)

# SolutionsSection
solutions_import = "import { AIDoodle, SpiderWebDoodle } from '../ui/Doodles';"
solutions_target = '<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">'
solutions_new = """<div className="absolute top-[40%] right-[3%] w-24 h-24 text-pencil-light/20 rotate-12 pointer-events-none hidden lg:block">
        <AIDoodle />
      </div>
      <div className="absolute bottom-[10%] left-[2%] w-48 h-48 text-pencil-light/10 -rotate-45 pointer-events-none hidden lg:block">
        <SpiderWebDoodle />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">"""
insert_doodles('src/components/sections/SolutionsSection.tsx', solutions_import, solutions_target, solutions_new)

