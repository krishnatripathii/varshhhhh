import os
import random

colors = ['text-chalk-pink/30', 'text-chalk-blue/30', 'text-chalk-yellow/30', 'text-chalk-green/30', 'text-white/40']

directory = 'src/components/sections'
for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            # replace text-white/XX in doodle divs (which are often absolute and have text-white/XX)
            import re
            
            def repl(match):
                c = random.choice(colors)
                return match.group(1) + c + match.group(3)
                
            # Regex to find absolute divs that might be doodles and have text-white/XX
            content = re.sub(r'(<div[^>]*className="[^"]*absolute[^"]*)(text-white/[0-9]+)([^"]*">[^<]*<[A-Z][a-zA-Z]*Doodle)', repl, content)
            
            with open(filepath, 'w') as f:
                f.write(content)

