filepath = 'src/components/sections/Hero.tsx'
with open(filepath, 'r') as f:
    content = f.read()

# Make the text aesthetic
content = content.replace('text-white flex flex-col items-center', 'glass-text text-glow flex flex-col items-center')
content = content.replace('text-marker-yellow', 'text-white text-glow') # Remove yellow, keep it aesthetic glass white

# Also remove the whole Chalkboard Blurred Doodles Background div block
import re
content = re.sub(r'\{/\*\s*Chalkboard Blurred Doodles Background\s*\*/\}(.*?)</motion\.div>', '{/* Glassmorphism Container */}\n        <motion.div', content, flags=re.DOTALL)
# The above regex might be too aggressive or incorrect if it matches up to motion.div.
