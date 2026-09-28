import os

replacements = {
    'src/components/sections/BeforeAfterSection.tsx': [
        ('<Paperclip className="top-[-20px] left-[-20px] w-12 h-12 -rotate-12 hidden md:block" />', '<Paperclip className="top-[-25px] left-10 w-14 h-14 -rotate-12 hidden md:block text-pencil-medium/60" />')
    ],
    'src/components/sections/IndustriesSection.tsx': [
        ('<Paperclip className="top-[5%] right-[5%] w-16 h-16 rotate-[20deg]" />', '<Paperclip className="top-[-25px] right-16 w-14 h-14 rotate-[15deg] text-pencil-medium/60" />')
    ],
    'src/components/sections/FaqSection.tsx': [
        ('<Paperclip className="top-[5%] left-[5%] w-16 h-16 -rotate-12" />', '<Paperclip className="top-[-25px] left-16 w-14 h-14 -rotate-[15deg] text-pencil-medium/60" />')
    ],
    'src/components/sections/WebAppSection.tsx': [
        ('<Paperclip className="top-10 right-20 w-12 h-12 rotate-[30deg]" />', '<Paperclip className="top-[-25px] right-32 w-14 h-14 rotate-[20deg] text-pencil-medium/60" />')
    ],
    'src/components/sections/AboutSection.tsx': [
        ('import { Staple, Paperclip }', 'import { Staple }')
    ]
}

for filepath, reps in replacements.items():
    with open(filepath, 'r') as f:
        content = f.read()
    for old, new in reps:
        content = content.replace(old, new)
    with open(filepath, 'w') as f:
        f.write(content)
