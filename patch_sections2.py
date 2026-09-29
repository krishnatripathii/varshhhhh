import re

# ServicesSection.tsx
with open('src/components/sections/ServicesSection.tsx', 'r') as f:
    content = f.read()

content = content.replace('bg-transparent  p-6', 'glass-panel glass-panel-hover p-6')
content = content.replace('text-white/70/70', 'text-white/70')
content = content.replace('text-white/70/30', 'text-white/30')
content = content.replace('text-white/40/20', 'text-white/20')

with open('src/components/sections/ServicesSection.tsx', 'w') as f:
    f.write(content)

# BeforeAfterSection.tsx
with open('src/components/sections/BeforeAfterSection.tsx', 'r') as f:
    content = f.read()

content = re.sub(r'<Paperclip[^>]*/>', '', content)
content = content.replace("import { Staple, Paperclip } from '../ui/Stationery';", "")

with open('src/components/sections/BeforeAfterSection.tsx', 'w') as f:
    f.write(content)
