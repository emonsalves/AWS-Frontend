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
        // Formato internacional sin "+" ni espacios
        whatsapp: "56966454756",
        email: "ingeniero.monsalves@gmail.com",
    },

    // Pon la URL del perfil para mostrar el icono; un valor vacío lo oculta
    social: [
        { name: "Facebook", icon: "facebook", url: "" },
        { name: "Twitter", icon: "twitter", url: "" },
        { name: "Instagram", icon: "instagram", url: "" },
    ],
};
