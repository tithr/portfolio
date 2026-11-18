// gera as imagens de story (1080 × 1920) em img/story/: o início de cada página e o início de cada seção, na versão de celular.
// Uso: node tools/make-story.js (precisa do Playwright)
const { chromium } = require('playwright');
const http = require('http'); const fs = require('fs'); const path = require('path');
const root = path.join(__dirname, '..');
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.woff2': 'font/woff2', '.svg': 'image/svg+xml' };
// name = prefixo do arquivo; sections = ids das seções (gera name-id.jpg)
const pages = [
  { name: 'home', file: 'index.html', url: 'tithr.github.io/portfolio', sections: ['manifesto', 'trabalhos', 'sobre', 'contato'] },
  { name: 'nevy', file: 'nevy.html', url: 'tithr.github.io/portfolio/nevy', sections: ['como', 'treino', 'corrida', 'metas', 'dia', 'privacidade', 'andamento', 'avisar'] },
  { name: 'nevy-case', file: 'nevy-case.html', url: 'tithr.github.io/portfolio/nevy-case', sections: [] },
  { name: 'primeiro-commit', file: 'primeiro-commit.html', url: 'tithr.github.io/portfolio/primeiro-commit', sections: [] }
];
const server = http.createServer((req, res) => {
  const file = path.join(root, decodeURIComponent(req.url.split('?')[0]));
  fs.readFile(file, (err, data) => { if (err) { res.writeHead(404); res.end(); } else { res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' }); res.end(data); } });
}).listen(0, async () => {
  const base = `http://localhost:${server.address().port}`;
  const browser = await chromium.launch();
  const scale = 1080 / 430;
  for (const pg of pages) {
    const ctx = await browser.newContext({ viewport: { width: 430, height: 764 }, deviceScaleFactor: scale, locale: 'pt-BR' });
    const page = await ctx.newPage();
    await page.goto(`${base}/${pg.file}`);
    await page.evaluate(() => document.fonts.ready);
    await page.addStyleTag({ content: `.lang-switch,.share,.share-picker,.share-note{display:none!important}
      html{scroll-behavior:auto!important}
      .story-url{position:fixed;left:0;right:0;bottom:0;padding:22px 20px 30px;background:#07090e;box-sizing:border-box;font:700 15px Manrope,sans-serif;letter-spacing:-.02em;color:#f5f5f7;z-index:99}
      .story-url span{color:#2997ff}` });
    await page.evaluate((u) => { const d = document.createElement('div'); d.className = 'story-url'; d.innerHTML = u.replace('tithr.github.io', 'tithr.github.io<span>/</span>').replace('<span>/</span>/', '<span>/</span>'); document.body.appendChild(d); }, pg.url);
    await page.waitForTimeout(1200);
    await page.screenshot({ path: path.join(root, 'img/story', `${pg.name}.jpg`), type: 'jpeg', quality: 88 });
    for (const id of pg.sections) {
      // as seções entram sem a barra de navegação, com o início do conteúdo no topo
      await page.addStyleTag({ content: '.nav{display:none!important} body{padding-bottom:900px}' });
      await page.evaluate((sid) => {
        const el = document.getElementById(sid);
        const pad = parseFloat(getComputedStyle(el).paddingTop) || 0;
        window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + pad - 28);
      }, id);
      await page.waitForTimeout(700);
      await page.screenshot({ path: path.join(root, 'img/story', `${pg.name}-${id}.jpg`), type: 'jpeg', quality: 88 });
    }
    await ctx.close();
  }
  await browser.close(); server.close();
});
