import os

filepath = 'src/components/sections/Hero.tsx'
with open(filepath, 'r') as f:
    content = f.read()

# Add PineappleDoodle to imports
if 'PineappleDoodle' not in content:
    content = content.replace("import { SpiderWebDoodle", "import { PineappleDoodle, SpiderWebDoodle")

pineapple_div = """
      <div className="absolute top-[15%] left-[20%] w-24 h-24 text-marker-yellow/80 rotate-12 pointer-events-none hidden lg:block">
        <PineappleDoodle />
      </div>
"""

target = '<div className="absolute top-[10%] right-[5%] w-64 h-64 text-pencil-light/20 rotate-12 animate-float-slow pointer-events-none hidden lg:block">'

content = content.replace(target, pineapple_div + target)

with open(filepath, 'w') as f:
    f.write(content)
