import os
import re

directory = 'src/components/sections'
for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            original = content
            
            # Remove <Tape ... />
            content = re.sub(r'<Tape[^>]*/>\s*', '', content)
            
            # Remove Tape from imports
            content = content.replace("Tape, ", "")
            content = content.replace(", Tape", "")
            content = content.replace("import { Tape } from '../ui/Stationery';\n", "")
            
            if original != content:
                with open(filepath, 'w') as f:
                    f.write(content)
                print(f"Removed tape from {file}")
