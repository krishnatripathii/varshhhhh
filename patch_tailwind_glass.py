with open('tailwind.config.js', 'r') as f:
    tw = f.read()

tw = tw.replace("'glass-border': 'rgba(255, 255, 255, 0.15)'", "'glass-border': 'rgba(255, 255, 255, 0.2)'")
tw = tw.replace("'glass-fill': 'rgba(255, 255, 255, 0.08)'", "'glass-fill': 'rgba(255, 255, 255, 0.1)'")

with open('tailwind.config.js', 'w') as f:
    f.write(tw)
