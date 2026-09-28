import json

# Update package.json
with open('package.json', 'r') as f:
    pkg = json.load(f)

pkg['homepage'] = "https://krishnatripathii.github.io/varshhhhh/"
pkg['scripts']['predeploy'] = "npm run build"
pkg['scripts']['deploy'] = "gh-pages -d dist"

with open('package.json', 'w') as f:
    json.dump(pkg, f, indent=2)

# Update vite.config.ts
with open('vite.config.ts', 'r') as f:
    vite_cfg = f.read()

vite_cfg = vite_cfg.replace('plugins: [react()],', "plugins: [react()],\n  base: '/varshhhhh/',")

with open('vite.config.ts', 'w') as f:
    f.write(vite_cfg)

