with open('src/components/ui/Footer.tsx', 'r') as f:
    content = f.read()
content = content.replace('bg-board-green', 'bg-transparent border-t border-white/10')
content = content.replace('bg-board-navy', 'bg-white/5')
with open('src/components/ui/Footer.tsx', 'w') as f:
    f.write(content)

with open('src/components/ui/ContactForm.tsx', 'r') as f:
    content = f.read()
content = content.replace('bg-board-green', 'bg-white/10 text-white')
content = content.replace('bg-marker-yellow text-black', 'bg-white text-black shadow-glass')
with open('src/components/ui/ContactForm.tsx', 'w') as f:
    f.write(content)
