// gera as imagens de story (1080 × 1920) em img/story/. Uso: node tools/make-story.js (precisa do Playwright)
const { chromium } = require('playwright');
const http = require('http'); const fs = require('fs'); const path = require('path');
const root = path.join(__dirname, '..');
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  const file = path.join(root, decodeURIComponent(req.url.split('?')[0]));
  fs.readFile(file, (err, data) => { if (err) { res.writeHead(404); res.end(); } else { res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' }); res.end(data); } });
}).listen(0, async () => {
  const base = `http://localhost:${server.address().port}`;
  const browser = await chromium.launch();
  for (const name of ['home', 'nevy', 'primeiro-commit']) {
    const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
    await page.goto(`${base}/tools/story.html?p=${name}`);
    await page.evaluate(() => document.fonts.load('800 100px Manrope'));
    await page.evaluate(() => Promise.all([...document.images].map((i) => i.decode().catch(() => {}))));
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(root, 'img/story', `${name}.jpg`), type: 'jpeg', quality: 88 });
    await page.close();
  }
  await browser.close(); server.close();
});
