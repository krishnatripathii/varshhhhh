import os

filepath = 'src/components/sections/BeforeAfterSection.tsx'
with open(filepath, 'r') as f:
    content = f.read()

import_stmt = "import { Tape, Staple, Paperclip } from '../ui/Stationery';\n"
content = content.replace("import { SpidermanMaskDoodle } from '../ui/Doodles';", "import { SpidermanMaskDoodle } from '../ui/Doodles';\n" + import_stmt)

# Add tape instead of the generic red/green bg
content = content.replace('<div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-3 w-12 h-6 bg-red-200/50 backdrop-blur-sm shadow-sm rotate-3"></div>', '<Tape className="top-[-10px] left-1/2 -translate-x-1/2 rotate-3" />')
content = content.replace('<div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-3 w-12 h-6 bg-green-200/50 backdrop-blur-sm shadow-sm -rotate-2"></div>', '<Tape className="top-[-10px] left-1/2 -translate-x-1/2 -rotate-2" />')

# Add a paperclip
target = '<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">'
new_div = """<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
          <Paperclip className="top-[-20px] left-[-20px] w-12 h-12 -rotate-12 hidden md:block" />"""
content = content.replace(target, new_div)

with open(filepath, 'w') as f:
    f.write(content)
