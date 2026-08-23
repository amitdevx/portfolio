import re

file_path = '/home/amitdevx/Code/portfolio/src/content/posts/output-filtering-vs-thought-suppression.mdx'
with open(file_path, 'r') as f:
    content = f.read()

# Fix double ---
content = content.replace('---\n---\n', '---\n')

# The user might be complaining about missing headings or the fact that they look like:
# "Thought suppression" instead of proper casing or maybe they were bold text instead of headers.
# Actually, the user copy pasted:
# Thought suppression
# Output filtering
# 2.1 Why Internal Alignment Can Fail
# Maybe they just want the entire post refined, stripped of em-dashes (already done), and math fixed (already done).
# Let's remove any "A practical deep dive" or "It is important to note" or other slop.

content = content.replace("> **A practical deep dive into where AI safety actually happens-and why controlling the final output is not the same as controlling the model's internal behavior.**", "")
content = content.replace("It is important not to overstate this advantage.", "This advantage is not absolute.")
content = content.replace("The important caveat is that this is **not literal deterministic censorship of thoughts**.", "This is **not literal deterministic censorship of thoughts**.")
content = content.replace("The important conceptual point is that", "Notice that")

with open(file_path, 'w') as f:
    f.write(content.strip())
print("Slop fixed")
