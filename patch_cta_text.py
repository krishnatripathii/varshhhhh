import os

for file in ['src/components/sections/Hero.tsx', 'src/components/ui/Navbar.tsx']:
    with open(file, 'r') as f:
        content = f.read()
    
    content = content.replace('bg-marker-yellow text-white', 'bg-marker-yellow text-black')
    
    with open(file, 'w') as f:
        f.write(content)

