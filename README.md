# portfólio

Site estático.

## tradução (pt/en)

- o português é o texto escrito no html; o inglês fica em `i18n.js`.
- todo texto visível leva `data-i18n="chave"`; atributos usam `data-i18n-attr="alt:chave"`.
- o idioma escolhido vale para todas as páginas (fica salvo no navegador).
- página nova: inclua `<script src="i18n.js"></script>` e o seletor `.lang-switch`.
- antes de publicar, rode `node tools/check-i18n.js`: ele aponta texto sem chave ou sem tradução.
