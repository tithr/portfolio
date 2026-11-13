const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const root = path.resolve(__dirname, '..');
// a 404 usa caminhos absolutos (/portfolio/...) e só funciona servida pelo GitHub Pages
const pages = fs.readdirSync(root).filter((f) => f.endsWith('.html') && f !== '404.html');
const SAME = [/^tr\.?$/, /^por$/, /^en$/, /^\/$/, /^\d{2}$/, /^\d{4} ↗$/, /^© 2026 /, /^github ↗$/, /@/, /^\.$/, /^↓$/, /^nevy$/];

(async () => {
  const browser = await chromium.launch();
  let problems = 0;
  for (const page of pages) {
    const p = await browser.newPage();
    await p.addInitScript(() => { try { localStorage.setItem('tr-lang', 'en'); } catch (e) {} });
    await p.route('**/*', (r) => (r.request().url().startsWith('file:') ? r.continue() : r.abort()));
    await p.goto('file://' + path.join(root, page));
    const report = await p.evaluate((same) => {
      const sameRe = same.map((s) => new RegExp(s.slice(1, s.lastIndexOf('/')), s.slice(s.lastIndexOf('/') + 1)));
      const out = { text: [], attrs: [], missing: [...(window.trI18n?.missing || [])] };
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const n = walker.currentNode; const txt = n.textContent.trim();
        if (!txt || n.parentElement.closest('script,style,[data-i18n],[data-i18n-skip]')) continue;
        if (sameRe.some((r) => r.test(txt))) continue;
        out.text.push(txt);
      }
      document.querySelectorAll('[alt],[aria-label],meta[name="description"]').forEach((el) => {
        const attr = el.hasAttribute('alt') ? 'alt' : el.hasAttribute('aria-label') ? 'aria-label' : 'content';
        const v = el.getAttribute(attr);
        if (!v) return;
        if (!(el.dataset.i18nAttr || '').includes(attr + ':')) out.attrs.push(`${attr}="${v.slice(0, 50)}"`);
      });
      return out;
    }, SAME.map(String));
    const count = report.text.length + report.attrs.length + report.missing.length;
    problems += count;
    console.log(`${count ? '✗' : '✓'} ${page}`);
    report.text.forEach((t) => console.log('   text without key:', JSON.stringify(t.slice(0, 70))));
    report.attrs.forEach((a) => console.log('   attribute without key:', a));
    report.missing.forEach((k) => console.log('   key without english:', k));
    await p.close();
  }
  await browser.close();
  process.exit(problems ? 1 : 0);
})();
