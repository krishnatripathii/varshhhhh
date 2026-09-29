import os
import re

directory = 'src/components/sections'
for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()

            # Remove doodle imports
            content = re.sub(r'import\s+\{[^}]*Doodle[^}]*\}\s+from\s+[\'"]\.\./ui/Doodles[\'"];?\n?', '', content)
            
            # Remove doodle divs
            content = re.sub(r'<div[^>]*>\s*<[A-Za-z]+Doodle\s*/>\s*</div>', '', content)
            content = re.sub(r'<[A-Za-z]+Doodle[^>]*/>', '', content)
            
            # Remove board backgrounds
            for bg in ['bg-board-green', 'bg-board-navy', 'bg-board-plum', 'bg-board-slate', 'bg-pastel-yellow', 'bg-pastel-sage', 'bg-pastel-blush', 'bg-pastel-blue', 'bg-pastel-lilac']:
                content = content.replace(bg, 'bg-transparent')
                
            # Convert basic glass to glass-panel
            content = content.replace('bg-white/5 backdrop-blur-md border border-white/10', 'glass-panel')
            content = content.replace('bg-white/10 backdrop-blur-md border border-white/20', 'glass-panel')
            content = content.replace('bg-white/[0.02] backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl', 'glass-panel')
            content = content.replace('shadow-sketch', '')
            content = content.replace('sketch-border', '')
            content = content.replace('sketch-border-subtle', '')
            
            with open(filepath, 'w') as f:
                f.write(content)
