/**
 * Datos del sitio en un solo lugar: contacto, redes y textos generales.
 * Los componentes leen de aquí; no repitas estos valores en el código.
 */

export const site = {
    name: "MNSLVS Solutions",
    url: "https://www.mnslvs.com",
    location: "Santiago, Chile",
    businessHours: "Lunes a Viernes: 9:00 AM - 6:00 PM",

    contact: {
        // TODO: reemplazar por el número real (formato internacional sin "+": 569XXXXXXXX)
        whatsapp: "56912345678",
        // TODO: reemplazar por el correo real
        email: "contacto@tuempresa.com",
    },

    // TODO: reemplazar por los perfiles reales; un valor vacío oculta el icono
    social: [
        { name: "Facebook", icon: "fab fa-facebook", url: "https://www.facebook.com/" },
        { name: "Twitter", icon: "fab fa-twitter", url: "https://www.twitter.com/" },
        { name: "Instagram", icon: "fab fa-instagram", url: "https://www.instagram.com/" },
    ],
};
