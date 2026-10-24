/**
 * Título y descripción de cada página para buscadores.
 * Las páginas los aplican con usePageSeo y scripts/prerender.mjs los escribe en el HTML estático.
 * "noindex" pide a Google que no muestre la página (herramientas que no son parte de los servicios).
 */

import { site } from "./site.js";

export const seo = {
    home: {
        path: "/",
        title: "Desarrollo web y automatización para PYMES en Santiago",
        description: site.description,
    },
    about: {
        path: "/about",
        title: "Nosotros: desarrollo web y automatización para PYMES",
        description:
            "Conoce a MNSLVS Solutions: desde 2021 creamos sitios web, automatizamos procesos y asesoramos en tecnología a PYMES en Santiago, Chile.",
    },
    contact: {
        path: "/contacto",
        title: "Contacto: cotiza tu sitio web o automatización",
        description:
            "Escríbenos por WhatsApp o correo y cotiza tu sitio web, automatización de procesos o asesoría tecnológica para tu PYME en Santiago, Chile.",
    },
    calculator: {
        path: "/calculador",
        title: "Calculador de cuentas",
        description: "Calcula el vuelto y la propina de una cuenta.",
        noindex: true,
    },
    followers: {
        path: "/followers",
        title: "Followers",
        description: "Compara seguidores y seguidos a partir de tus archivos de Instagram.",
        noindex: true,
    },
};
