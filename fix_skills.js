const fs = require('fs');

let data = fs.readFileSync('src/data/portfolio-data.ts', 'utf8');

// Define the extra skills to add and their icons
const extraCloud = [
  '{ name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg" }',
  '{ name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" }'
];

const extraAI = [
  '{ name: "LangGraph", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" }',
  '{ name: "NVIDIA NIM", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a4/NVIDIA_logo.svg" }',
  '{ name: "DeepSeek-V3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" }',
  '{ name: "Gemini", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" }',
  '{ name: "Llama 3.2", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" }',
  '{ name: "Genkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" }',
  '{ name: "Multi-Agent Systems", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg" }'
];

const extraBackend = [
  '{ name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" }',
  '{ name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" }',
  '{ name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" }'
];

const extraTools = [
  '{ name: "Chromium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" }',
  '{ name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" }',
  '{ name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" }',
  '{ name: "Markdown", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg" }',
  '{ name: "Unified", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }',
  '{ name: "Pydantic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" }',
  '{ name: "Google ADK", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" }',
  '{ name: "Cryptography", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" }'
];

// Helper to inject items into a category
function injectIntoCategory(content, categoryName, extras) {
  const regex = new RegExp(`(name:\\s*"${categoryName}",[\\s\\S]*?skills:\\s*\\[)([\\s\\S]*?)(\\])`, 'g');
  return content.replace(regex, (match, p1, p2, p3) => {
    // Check which ones are not already there
    const existing = p2;
    let additions = '';
    extras.forEach(ext => {
      const matchName = ext.match(/name:\s*"([^"]+)"/)[1];
      if (!existing.includes(`"${matchName}"`)) {
        additions += `        ${ext},\n`;
      }
    });
    return p1 + p2 + additions + p3;
  });
}

// Helper to inject items into flat technical array
function injectIntoFlat(content, extras) {
  const regex = /(technical:\s*\[)([\s\S]*?)(\],)/;
  return content.replace(regex, (match, p1, p2, p3) => {
    const existing = p2;
    let additions = '';
    extras.forEach(ext => {
      const matchName = ext.match(/name:\s*"([^"]+)"/)[1];
      if (!existing.includes(`"${matchName}"`)) {
        additions += `    ${ext},\n`;
      }
    });
    return p1 + p2 + additions + p3;
  });
}

data = injectIntoCategory(data, "Cloud & DevOps", extraCloud);
data = injectIntoCategory(data, "AI & Data", extraAI);
data = injectIntoCategory(data, "Backend", extraBackend);
data = injectIntoCategory(data, "Tools & Others", extraTools);

data = injectIntoFlat(data, extraCloud);
data = injectIntoFlat(data, extraAI);
data = injectIntoFlat(data, extraBackend);
data = injectIntoFlat(data, extraTools);

fs.writeFileSync('src/data/portfolio-data.ts', data);
console.log("Successfully updated portfolio-data.ts");
