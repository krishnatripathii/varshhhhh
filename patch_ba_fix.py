import os

filepath = 'src/components/sections/BeforeAfterSection.tsx'
with open(filepath, 'r') as f:
    content = f.read()

content = content.replace('text-white/40/10', 'text-white/10')
content = content.replace('text-white/40/20', 'text-white/20')
content = content.replace('text-white/70/60', 'text-white/60')
content = content.replace('bg-pencil-light/30', 'bg-white/20')
content = content.replace('text-red-500', 'text-chalk-pink')
content = content.replace('text-red-400', 'text-chalk-pink')
content = content.replace('text-green-600', 'text-chalk-green')
content = content.replace('text-green-500', 'text-chalk-green')

with open(filepath, 'w') as f:
    f.write(content)
