with open('tailwind.config.js', 'r') as f:
    tw = f.read()

tw = tw.replace("'Manrope', 'sans-serif'", "'Outfit', 'sans-serif'")
tw = tw.replace("'Syne', 'sans-serif'", "'Space Grotesk', 'sans-serif'")

with open('tailwind.config.js', 'w') as f:
    f.write(tw)
