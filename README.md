# portfólio

Site estático em HTML, CSS e JavaScript, publicado pelo GitHub Pages em https://tithr.github.io/portfolio/.

## arquivos

- `index.html`, `nevy.html`, `primeiro-commit.html`: as páginas. `404.html` usa caminhos absolutos (`/portfolio/...`) porque o GitHub Pages a serve em qualquer endereço.
- `styles.css`: um arquivo só, organizado por seção (base, vidro, home, case, iPhone, primeiro commit, animações, tablet, celular).
- `site.js`: rolagem suave (Lenis, em `lenis.min.js`), pausa das animações fora da tela e a contagem anônima de visitas.
- `i18n.js`: textos em inglês.
- `fonts/manrope.woff2`: fonte hospedada aqui, sem Google Fonts (licença em `fonts/OFL.txt`).
- `img/og/`: imagens de 1200 × 630 que aparecem ao compartilhar os links.
- `sitemap.xml`: para enviar ao Google Search Console.

## regras

- sem cantos arredondados. A única exceção é o iPhone (`.phone`).
- texto em minúsculas, com maiúscula depois de ponto e em nomes.

## tradução (pt/en)

- o português é o texto escrito no html; o inglês fica em `i18n.js`.
- todo texto visível leva `data-i18n="chave"`; atributos usam `data-i18n-attr="alt:chave"`. Texto que não se traduz (código, nomes) leva `data-i18n-skip`.
- o idioma escolhido vale para todas as páginas (fica salvo no navegador).
- página nova: inclua `i18n.js`, `lenis.min.js`, `site.js` e o seletor `.lang-switch`.
- antes de publicar, rode `node tools/check-i18n.js`: ele aponta texto sem chave ou sem tradução.

## cache

Ao mudar `styles.css`, `i18n.js` ou `site.js`, aumente o número do `?v=` nas páginas.
