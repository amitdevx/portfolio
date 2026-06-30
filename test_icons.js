const https = require('https');
const checkIcon = (name) => {
  return new Promise((resolve) => {
    https.get(`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`, (res) => {
      resolve(res.statusCode === 200);
    });
  });
};
const icons = ['redis', 'prometheus', 'grafana', 'fastapi', 'sqlite', 'playwright', 'npm', 'markdown'];
async function run() {
  for (let icon of icons) {
    const exists = await checkIcon(icon);
    console.log(icon, exists);
  }
}
run();
