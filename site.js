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
