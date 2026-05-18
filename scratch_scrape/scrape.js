const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  const urls = [
    'https://deepwiki.com/amitdevx/Professor_Profiler',
    'https://deepwiki.com/amitdevx/schemasense',
    'https://deepwiki.com/amitdevx/eatinformed',
    'https://deepwiki.com/amitdevx/Eatinformed'
  ];

  for (const url of urls) {
    try {
      console.log(`Navigating to ${url}...`);
      await page.goto(url, { waitUntil: 'networkidle2' });
      // Wait for some content to load beyond skeleton
      await page.waitForSelector('main', { timeout: 10000 }).catch(() => {});
      await new Promise(r => setTimeout(r, 2000)); // Wait extra 2s for rendering
      
      const content = await page.evaluate(() => {
        const body = document.body.innerText;
        const preTags = Array.from(document.querySelectorAll('pre')).map(p => p.innerText);
        return { text: body, code: preTags };
      });
      
      console.log(`\n--- CONTENT FOR ${url} ---`);
      console.log(content.code.filter(c => c.includes('graph ') || c.includes('flowchart') || c.includes('architecture')));
      
      // Save it
      fs.writeFileSync(`out_${url.split('/').pop()}.json`, JSON.stringify(content, null, 2));
    } catch (e) {
      console.error(`Failed ${url}: ${e.message}`);
    }
  }

  await browser.close();
})();
