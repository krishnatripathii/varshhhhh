with open('tailwind.config.js', 'r') as f:
    tw = f.read()

tw = tw.replace(
    "'0%': { transform: 'translateX(0) translateY(0) rotate(45deg)', opacity: '1' }",
    "'0%': { transform: 'translateX(0) translateY(0) rotate(-35deg)', opacity: '1' }"
)
tw = tw.replace(
    "'20%': { transform: 'translateX(-1000px) translateY(1000px) rotate(45deg)', opacity: '0' }",
    "'10%': { transform: 'translateX(-1000px) translateY(700px) rotate(-35deg)', opacity: '0' }"
)
tw = tw.replace(
    "'100%': { transform: 'translateX(-1000px) translateY(1000px) rotate(45deg)', opacity: '0' }",
    "'100%': { transform: 'translateX(-1000px) translateY(700px) rotate(-35deg)', opacity: '0' }"
)

with open('tailwind.config.js', 'w') as f:
    f.write(tw)
