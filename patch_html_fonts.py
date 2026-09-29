import os

with open('index.html', 'r') as f:
    html = f.read()

# Replace fonts
old_fonts = '<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Quicksand:wght@300..700&display=swap" rel="stylesheet">'
new_fonts = '<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Space+Grotesk:wght@300;500;700&display=swap" rel="stylesheet">'
html = html.replace(old_fonts, new_fonts)

with open('index.html', 'w') as f:
    f.write(html)
