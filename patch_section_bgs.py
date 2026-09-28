import os
import glob

replacements = {
    'Hero.tsx': [('bg-paper-bg', 'bg-pastel-yellow'), ('bg-marker-yellow/40', 'bg-marker-yellow')],
    'TrustSection.tsx': [('bg-paper-surface', 'bg-pastel-sage')],
    'ServicesSection.tsx': [('bg-paper-surface', 'bg-pastel-blush')],
    'SolutionsSection.tsx': [('bg-paper-dark', 'bg-pastel-lilac')],
    'ProcessSection.tsx': [('bg-paper-bg', 'bg-pastel-blue'), ('bg-marker-yellow/[0.015]', 'bg-marker-yellow/20')],
    'StorySection.tsx': [('bg-paper-surface', 'bg-pastel-yellow'), ('bg-marker-yellow/[0.02]', 'bg-marker-yellow/20'), ('bg-pencil-medium/[0.01]', 'bg-blue-300/20')],
    'WebAppSection.tsx': [('bg-paper-dark', 'bg-pastel-sage')],
    'WorkSection.tsx': [('bg-paper-surface', 'bg-pastel-blush')],
    'AboutSection.tsx': [('bg-paper-bg', 'bg-pastel-lilac'), ('bg-marker-yellow/[0.02]', 'bg-marker-yellow/20'), ('bg-pencil-medium/[0.01]', 'bg-purple-300/20')],
    'FaqSection.tsx': [('bg-paper-surface', 'bg-pastel-blue')],
    'FinalSection.tsx': [('bg-paper-bg', 'bg-pastel-yellow'), ('bg-paper-surface', 'bg-pastel-sage')],
    'LocalSection.tsx': [('bg-paper-surface', 'bg-pastel-blush')],
    'BeforeAfterSection.tsx': [('bg-paper-bg', 'bg-pastel-yellow')],
    'IndustriesSection.tsx': [('bg-paper-surface', 'bg-pastel-lilac')]
}

for file, reps in replacements.items():
    filepath = f"src/components/sections/{file}"
    if os.path.exists(filepath):
        with open(filepath, 'r') as f:
            content = f.read()
        for old, new in reps:
            content = content.replace(old, new)
        with open(filepath, 'w') as f:
            f.write(content)

