(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // rolagem suave igual nas três páginas
  if (window.Lenis && !reduce) {
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, syncTouch: false, wheelMultiplier: 0.9, touchMultiplier: 1, anchors: { offset: -88 } });
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    window.trScroll = lenis;
  }

  // animações infinitas param quando saem da tela, para poupar bateria
  const animated = document.querySelectorAll('.hero, .project-art, .scroll-screen');
  if ('IntersectionObserver' in window && animated.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.target.classList.toggle('is-paused', !e.isIntersecting));
    }, { rootMargin: '80px' });
    animated.forEach((el) => io.observe(el));
  }

  // compartilhar no story: abre a folha de compartilhar com a imagem; sem suporte, baixa a imagem e copia o link
  const say = (key, pt) => (window.trI18n ? window.trI18n.say(key, pt) : pt);
  document.querySelectorAll('[data-share]').forEach((btn) => {
    const note = btn.nextElementSibling;
    const tell = (text) => { if (note) note.textContent = text; };
    btn.addEventListener('click', async () => {
      if (btn.getAttribute('aria-busy') === 'true') return;
      btn.setAttribute('aria-busy', 'true');
      tell('');
      const url = btn.dataset.shareUrl;
      try {
        const blob = await (await fetch(btn.dataset.share)).blob();
        const file = new File([blob], 'tiago-rosario.jpg', { type: 'image/jpeg' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], title: 'Tiago Rosario', text: url });
          tell(say('share.shared', 'compartilhado.'));
        } else {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'tiago-rosario.jpg';
          document.body.appendChild(link);
          link.click();
          link.remove();
          setTimeout(() => URL.revokeObjectURL(link.href), 4000);
          let copied = false;
          try { await navigator.clipboard.writeText(url); copied = true; } catch (e) {}
          tell(copied ? say('share.saved', 'imagem salva e link copiado. Agora é só colocar no seu story.') : say('share.saved2', 'imagem salva. Link: ') + url);
        }
      } catch (e) {
        if (!e || e.name !== 'AbortError') tell(say('share.fail', 'não deu para compartilhar agora. Link: ') + url);
      } finally {
        btn.removeAttribute('aria-busy');
      }
    });
  });

  // uma contagem anônima por visita, sem cookies, em qualquer página em que a pessoa chegar
  try {
    if (!sessionStorage.getItem('tr-visit-notified')) {
      const visit = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
      const query = new URLSearchParams({ visit, page: window.location.pathname });
      const beacon = new Image();
      beacon.referrerPolicy = 'no-referrer';
      beacon.src = 'https://script.google.com/macros/s/AKfycbwokpXQvgoQzDX06L0auE05fzxzs-ZorUD5hHip3xYmhQpHnRuV5XnY9UAJyeDhx0HIhw/exec?' + query.toString();
      sessionStorage.setItem('tr-visit-notified', '1');
    }
  } catch (e) {}
})();
