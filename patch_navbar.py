import os

filepath = 'src/components/ui/Navbar.tsx'
with open(filepath, 'r') as f:
    content = f.read()

# Logo text
content = content.replace(
    '<span className="font-display font-bold text-lg tracking-tight text-pencil-dark">',
    '<span className={`font-display font-bold text-lg tracking-tight transition-colors ${!isScrolled && !isMobileOpen ? "text-white" : "text-pencil-dark"}`}>'
)

# Nav Links desktop
content = content.replace(
    'className="text-sm font-medium text-pencil-medium hover:text-pencil-dark font-bold transition-colors duration-300 tracking-wide"',
    'className={`text-sm font-medium hover:font-bold transition-colors duration-300 tracking-wide ${!isScrolled ? "text-white/80 hover:text-white" : "text-pencil-medium hover:text-pencil-dark"}`}'
)

# Mobile Toggle button
content = content.replace(
    '<button\n            className="lg:hidden text-pencil-dark p-2 -mr-2 hover:text-pencil-dark font-bold transition-colors"',
    '<button\n            className={`lg:hidden p-2 -mr-2 font-bold transition-colors ${!isScrolled && !isMobileOpen ? "text-white" : "text-pencil-dark"}`}'
)

with open(filepath, 'w') as f:
    f.write(content)
