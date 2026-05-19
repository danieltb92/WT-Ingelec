import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  initFadeUp();
  initStagger();
  initParallax();
}

export function initFadeUp() {
  gsap.utils.toArray(".gsap-fade-up").forEach((element) => {
    const el = element as HTMLElement;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}

export function initStagger() {
  gsap.utils.toArray(".gsap-stagger-container").forEach((container) => {
    const el = container as HTMLElement;
    const children = el.querySelectorAll(".gsap-stagger-item");
    gsap.fromTo(
      children,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}

export function initParallax() {
  gsap.utils.toArray("[data-parallax]").forEach((section) => {
    const el = section as HTMLElement;
    const bg = el.querySelector("img");
    if (bg) {
      gsap.to(bg, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  });
}
