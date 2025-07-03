import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", function () {
  const lenis = new Lenis({
  // Ajusta estos valores según tu preferencia
  lerp: 0.15, // 0.1 es rápido, 0.04 es más suave/lento
  // duration: 1.2,
  smooth: true,
  // Puedes probar también con duration: 1.2
});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  /* For Anchor Links Scrolling */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const t = e.currentTarget;

      if (t) {
        lenis.scrollTo(t.getAttribute("href"), { offset: -132 } ?? "");
      }
    });
  });
});
