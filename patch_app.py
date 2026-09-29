with open('src/App.tsx', 'r') as f:
    content = f.read()

content = content.replace("import { Navbar } from './components/ui/Navbar';", "import { Navbar } from './components/ui/Navbar';\nimport { SkyBackground } from './components/ui/SkyBackground';")
content = content.replace('<div className="relative w-full text-white bg-board-green">', '<div className="relative w-full min-h-screen text-white">\n        <SkyBackground />')

with open('src/App.tsx', 'w') as f:
    f.write(content)
