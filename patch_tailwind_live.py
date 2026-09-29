with open('tailwind.config.js', 'r') as f:
    tw = f.read()

# Add new keyframes
keyframes_injection = """
        satellite: {
          '0%': { transform: 'translateX(-10vw) translateY(0)' },
          '100%': { transform: 'translateX(110vw) translateY(20vh)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translateX(-5%) skew(-10deg)', opacity: '0.3' },
          '50%': { transform: 'translateX(5%) skew(10deg)', opacity: '0.5' },
        },
"""
tw = tw.replace('keyframes: {', 'keyframes: {' + keyframes_injection)

# Add new animations
animations_injection = """
        'satellite': 'satellite 40s linear infinite',
        'aurora': 'aurora 15s ease-in-out infinite',
"""
tw = tw.replace('animation: {', 'animation: {' + animations_injection)

with open('tailwind.config.js', 'w') as f:
    f.write(tw)
