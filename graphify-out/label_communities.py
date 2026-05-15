import sys, json
from graphify.build import build_from_json
from graphify.cluster import score_all
from graphify.analyze import god_nodes, surprising_connections, suggest_questions
from graphify.report import generate
from pathlib import Path

extraction = json.loads(Path('graphify-out/.graphify_extract.json').read_text())
detection  = json.loads(Path('graphify-out/.graphify_detect.json').read_text())
analysis   = json.loads(Path('graphify-out/.graphify_analysis.json').read_text())

G = build_from_json(extraction)
communities = {int(k): v for k, v in analysis['communities'].items()}
cohesion = {int(k): v for k, v in analysis['cohesion'].items()}
tokens = {'input': extraction.get('input_tokens', 0), 'output': extraction.get('output_tokens', 0)}

labels = {
    0: "Core UI Components",
    1: "Radix UI Pattern",
    2: "Navigation Components",
    3: "Portfolio Page Layout",
    4: "Deployment Config",
    5: "Design Assets",
    6: "Alert Dialog",
    7: "Breadcrumb",
    8: "Context Menu",
    9: "Collapsible",
    10: "App Router Layout",
    11: "Reusable UI Patterns",
    12: "Accessibility",
    13: "Root Layout",
    14: "Home Page",
    15: "Robots Route",
    16: "Sitemap Route",
    17: "Design Layout",
    18: "Design Teaser",
    19: "Footer",
    20: "Image Config",
    21: "Tailwind CSS v4",
    22: "DesignItem Types",
    23: "Import Alias",
    24: "Project Showcases",
    25: "ESLint Config",
    26: "Next-env Types",
    27: "Next.config",
    28: "PostCSS Config",
    29: "Design Page",
    30: "About Component",
    31: "Contact Component",
    32: "Experience Strip",
    33: "Skills Component",
    34: "Aspect Ratio",
    35: "Design Work Lib",
    36: "ESLint Config",
    37: "Sitemap",
    38: "Robots",
    39: "Two Route Architecture",
    40: "Tailwind CSS"
}

questions = suggest_questions(G, communities, labels)

report = generate(G, communities, cohesion, labels, analysis['gods'], analysis['surprises'], detection, tokens, '.')
with open('graphify-out/GRAPH_REPORT.md', 'w', encoding='utf-8') as f:
    f.write(report)
Path('graphify-out/.graphify_labels.json').write_text(json.dumps({str(k): v for k, v in labels.items()}))
print('Report updated with community labels')