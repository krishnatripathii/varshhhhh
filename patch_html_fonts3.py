import os

with open('index.html', 'r') as f:
    html = f.read()

# Replace fonts back to Outfit and Space Grotesk
html = html.replace(
    '<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600&family=Syne:wght@400;600;800" rel="stylesheet">',
    '<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Space+Grotesk:wght@300;500;700&display=swap" rel="stylesheet">'
)

with open('index.html', 'w') as f:
    f.write(html)
