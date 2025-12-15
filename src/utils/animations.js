import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Configuración global de ScrollTrigger si es necesaria

  // Animación para elementos que se desvanecen hacia arriba
  gsap.utils.toArray(".gsap-fade-up").forEach((element) => {
    gsap.fromTo(
      element,
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
          trigger: element,
          start: "top 85%", // Inicia cuando el top del elemento está al 85% del viewport
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Animación para contenedores con hijos escalonados (stagger)
  gsap.utils.toArray(".gsap-stagger-container").forEach((container) => {
    const children = container.querySelectorAll(".gsap-stagger-item");
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
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}
