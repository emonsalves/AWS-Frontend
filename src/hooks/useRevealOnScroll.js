import { useEffect } from "react";

/**
 * Muestra con una transición los elementos con el atributo data-reveal cuando entran en pantalla.
 * El estilo vive en index.css; sin JavaScript los elementos se ven igual, sin animación.
 */
export const useRevealOnScroll = () => {
    useEffect(() => {
        const elements = document.querySelectorAll("[data-reveal]:not(.is-visible)");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "0px 0px -10% 0px" },
        );

        elements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);
};
