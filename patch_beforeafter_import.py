import os

filepath = 'src/components/sections/BeforeAfterSection.tsx'
with open(filepath, 'r') as f:
    content = f.read()

content = content.replace("import React from 'react';", "import React from 'react';\nimport { Tape, Staple, Paperclip } from '../ui/Stationery';")

with open(filepath, 'w') as f:
    f.write(content)
