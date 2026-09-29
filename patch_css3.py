with open('src/index.css', 'r') as f:
    css = f.read()

css = css.replace('@apply text-text-soft', '@apply text-white')
css = css.replace(
    '@apply bg-clip-text text-transparent bg-gradient-to-br from-[#fcf4f0] via-[#ffecd2] to-[#fcb69f];',
    '@apply bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/50;'
)
css = css.replace(
    'text-shadow: 0 0 15px rgba(252, 182, 159, 0.4);',
    'text-shadow: 0 0 20px rgba(255,255,255,0.4);'
)

with open('src/index.css', 'w') as f:
    f.write(css)
