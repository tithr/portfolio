(() => {
  if (!window.Lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, syncTouch: false, wheelMultiplier: 0.9, touchMultiplier: 1, anchors: { offset: -88 } });
  const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  window.trScroll = lenis;
})();
