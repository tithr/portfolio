// gera as imagens de story (1080 × 1920) em img/story/: um print da parte inicial de cada página, na versão de celular.
// Uso: node tools/make-story.js (precisa do Playwright)
const { chromium } = require('playwright');
const http = require('http'); const fs = require('fs'); const path = require('path');
const root = path.join(__dirname, '..');
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.woff2': 'font/woff2', '.svg': 'image/svg+xml' };
const pages = [['home', 'index.html', 'tithr.github.io/portfolio'], ['nevy', 'nevy.html', 'tithr.github.io/portfolio/nevy'], ['primeiro-commit', 'primeiro-commit.html', 'tithr.github.io/portfolio/primeiro-commit']];
const server = http.createServer((req, res) => {
  const file = path.join(root, decodeURIComponent(req.url.split('?')[0]));
  fs.readFile(file, (err, data) => { if (err) { res.writeHead(404); res.end(); } else { res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' }); res.end(data); } });
}).listen(0, async () => {
  const base = `http://localhost:${server.address().port}`;
  const browser = await chromium.launch();
  const scale = 1080 / 430;
  for (const [name, file, url] of pages) {
    const ctx = await browser.newContext({ viewport: { width: 430, height: 764 }, deviceScaleFactor: scale, locale: 'pt-BR'});
    const page = await ctx.newPage();
    await page.goto(`${base}/${file}`);
    await page.evaluate(() => document.fonts.ready);
    await page.addStyleTag({ content: `.lang-switch{display:none!important}
      .story-url{position:fixed;left:0;right:0;bottom:0;padding:22px 20px 30px;background:#07090e;box-sizing:border-box;font:700 15px Manrope,sans-serif;letter-spacing:-.02em;color:#f5f5f7;z-index:99}
      .story-url span{color:#2997ff}` });
    await page.evaluate((u) => { const d = document.createElement('div'); d.className = 'story-url'; d.innerHTML = u.replace('tithr.github.io', 'tithr.github.io<span>/</span>').replace('<span>/</span>/', '<span>/</span>'); document.body.appendChild(d); }, url);
    await page.waitForTimeout(1500);
    await page.screenshot({ path: path.join(root, 'img/story', `${name}.jpg`), type: 'jpeg', quality: 88 });
    await ctx.close();
  }
  await browser.close(); server.close();
});
