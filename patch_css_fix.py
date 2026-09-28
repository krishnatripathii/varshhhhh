import os

filepath = 'src/index.css'
with open(filepath, 'r') as f:
    content = f.read()

content = content.replace('bg-paper-bg', 'bg-board-green')
content = content.replace('ring-offset-paper-bg', 'ring-offset-board-green')
content = content.replace("theme('colors.pencil-dark')", "theme('colors.white')")

with open(filepath, 'w') as f:
    f.write(content)
