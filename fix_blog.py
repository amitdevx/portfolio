import re

file_path = '/home/amitdevx/Code/portfolio/src/content/posts/output-filtering-vs-thought-suppression.mdx'
with open(file_path, 'r') as f:
    content = f.read()

# Replace all em-dashes
content = content.replace('—', '-')

# Replace math section
math_original = r"""# 10.2 The Mathematical Idea

Let:

- \\\(x_t\\\) be the current noisy latent,
- \\\(c\\\) be the desired text conditioning,
- \\\(s\\\) represent an unsafe concept,
- \\\(\epsilon_\theta\\\) represent the model's noise prediction.

A simplified representation of the safety adjustment is:

\$\$
\\tilde\{\epsilon\}_\theta
=
\epsilon_\theta\(x_t,c\)
-
\gamma
\\left\[
\epsilon_\theta\(x_t,s\)
-
\epsilon_\theta\(x_t,\emptyset\)
\\right\]
\$\$

where:

- \\\(\epsilon_\theta\(x_t,c\)\\\) is the normal conditional prediction,
- \\\(\epsilon_\theta\(x_t,s\)\\\) represents the unsafe-concept direction,
- \\\(\epsilon_\theta\(x_t,\emptyset\)\\\) represents the unconditional prediction,
- \\\(\gamma\\\) controls the strength of the safety intervention."""

# It's better to use regex to find and replace the math section safely because of escaping issues
math_regex = r"# 10\.2 The Mathematical Idea[\s\S]*?(?=The important conceptual point is that)"
math_replacement = """# 10.2 The Mathematical Idea

Let:

- `x_t` be the current noisy latent,
- `c` be the desired text conditioning,
- `s` represent an unsafe concept,
- `E` represent the model's noise prediction.

A simplified representation of the safety adjustment is:

`Adjusted Noise = E(x_t, c) - gamma * [ E(x_t, s) - E(x_t, empty) ]`

where:

- `E(x_t, c)` is the normal conditional prediction,
- `E(x_t, s)` represents the unsafe-concept direction,
- `E(x_t, empty)` represents the unconditional prediction,
- `gamma` controls the strength of the safety intervention.

"""
content = re.sub(math_regex, math_replacement, content)

# Remove any other potential ai slop or double hyphens that look bad
content = content.replace(' - ', ' - ')

# Add the Connect With Me section if it's not there
connect_section = """
---

## Connect With Me

- **GitHub**: [@amitdevx](https://github.com/amitdevx)
- **LinkedIn**: [Amit Divekar](https://www.linkedin.com/in/divekar-amit/)
- **X / Twitter**: [@amitdevx_](https://x.com/amitdevx_)
- **Instagram**: [@amitdevx](https://instagram.com/amitdevx)

If you have any questions or want to discuss this topic further, feel free to reach out!
"""

if "## Connect With Me" not in content:
    content += connect_section

with open(file_path, 'w') as f:
    f.write(content)

print("Blog fixed.")
