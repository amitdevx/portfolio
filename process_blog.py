import re
from datetime import datetime

with open('/home/amitdevx/Downloads/Output_Filtering_vs_Thought_Suppression.md', 'r') as f:
    content = f.read()

# Frontmatter to inject
frontmatter = f"""---
title: "Output Filtering vs. Thought Suppression"
date: "{datetime.now().strftime('%Y-%m-%d')}"
updated: "{datetime.now().strftime('%Y-%m-%d')}"
description: "A practical deep dive into where AI safety actually happens—and why controlling the final output is not the same as controlling the model's internal behavior."
image: "/blogs/output-filtering-vs-thought-suppression/hero.png"
tags: ["AI Safety", "LLMs", "Cybersecurity", "Architecture", "Defense in Depth"]
author: "Amit Divekar"
---

"""

# Remove Image Prompt blocks and replace with actual markdown images
img1 = r"## \[IMAGE PROMPT 1 — Opening Concept\][\s\S]*?(?=\n---|\n#)"
img2 = r"## \[IMAGE PROMPT 2 — Long-Context / CoT Hijacking\][\s\S]*?(?=\n---|\n#)"
img3 = r"## \[IMAGE PROMPT 3 — Llama Guard Pipeline\][\s\S]*?(?=\n---|\n#)"
img4 = r"## \[IMAGE PROMPT 4 — Validator vs Classifier\][\s\S]*?(?=\n---|\n#)"
img5 = r"## \[IMAGE PROMPT 5 — Agentic Security\][\s\S]*?(?=\n---|\n#)"
img6 = r"## \[IMAGE PROMPT 6 — Safe Latent Diffusion\][\s\S]*?(?=\n---|\n#)"

content = re.sub(img1, "![Thought Suppression vs Output Filtering](/blogs/output-filtering-vs-thought-suppression/hero.png)\n", content)
content = re.sub(img2, "![Long-Context / CoT Hijacking](/blogs/output-filtering-vs-thought-suppression/long-context-cot-hijacking.png)\n", content)
content = re.sub(img3, "![Llama Guard Pipeline](/blogs/output-filtering-vs-thought-suppression/llama-guard-pipeline.png)\n", content)
content = re.sub(img4, "![Validator vs Classifier](/blogs/output-filtering-vs-thought-suppression/validator-vs-classifier.png)\n", content)
content = re.sub(img5, "![Agentic Security Architecture](/blogs/output-filtering-vs-thought-suppression/agentic-security.png)\n", content)
content = re.sub(img6, "![Safe Latent Diffusion](/blogs/output-filtering-vs-thought-suppression/safe-latent-diffusion.png)\n", content)

# Remove the Image Placement Summary at the end
summary_pattern = r"## Image Placement Summary[\s\S]*"
content = re.sub(summary_pattern, "", content)

# Remove Connect With Me section as well if needed? No, I'll keep it or maybe replace it. The portfolio has its own footer usually, but let's keep it.
# Actually, the user says "only section and images and prombt and add iamages in proper places".
# Wait, I'll remove "Image Placement Summary" and everything below it because it's just meta-instructions.

final_content = frontmatter + content.strip()

with open('/home/amitdevx/Code/portfolio/src/content/posts/output-filtering-vs-thought-suppression.mdx', 'w') as f:
    f.write(final_content)

print("Blog processed successfully.")
