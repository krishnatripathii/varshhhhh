import os

filepath = 'tailwind.config.js'
with open(filepath, 'r') as f:
    content = f.read()

new_colors = """'paper-bg': '#fdfbf7',
        'paper-surface': '#f5f2e9',
        'paper-dark': '#e8e4d3',
        'pastel-sage': '#eef2ee',
        'pastel-blush': '#fdf5f5',
        'pastel-blue': '#eff3f8',
        'pastel-yellow': '#fdfbf0',
        'pastel-lilac': '#f6f2f8',"""
content = content.replace("'paper-bg': '#fdfbf7',\n        'paper-surface': '#f5f2e9',\n        'paper-dark': '#e8e4d3',", new_colors)

with open(filepath, 'w') as f:
    f.write(content)


filepath_css = 'src/index.css'
with open(filepath_css, 'r') as f:
    css = f.read()

old_bg = """    background-image: 
      linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
    background-size: 20px 20px;"""
    
new_bg = """    background-color: theme('colors.paper-bg');
    background-image: radial-gradient(theme('colors.pencil-medium') 1px, transparent 1px);
    background-size: 24px 24px;
    background-position: 0 0;
    opacity: 0.95;"""
css = css.replace(old_bg, new_bg)

# Make sure body has relative and z-index 0 to not block the grid
if "opacity: 0.95;" not in css:
    css = css.replace('body {\n    @apply bg-paper-bg text-pencil-dark font-sans;', "body {\n    @apply text-pencil-dark font-sans;\n" + new_bg)
    css = css.replace('    background-image: \n      linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),\n      linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);\n    background-size: 20px 20px;', '')

with open(filepath_css, 'w') as f:
    f.write(css)
