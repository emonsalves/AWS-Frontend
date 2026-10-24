/**
 * Datos estructurados (JSON-LD) para que Google muestre la ficha de la empresa.
 * Función pura: la usa vite.config.js para escribirlos en index.html al compilar.
 */

export const localBusinessJsonLd = (site) => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: `${site.url}/`,
    description: site.description,
    foundingDate: site.foundingYear,
    logo: `${site.url}/android-chrome-512x512.png`,
    image: `${site.url}/android-chrome-512x512.png`,
    telephone: `+${site.contact.whatsapp}`,
    email: site.contact.email,
    address: { "@type": "PostalAddress", addressLocality: "Santiago", addressRegion: "Región Metropolitana", addressCountry: "CL" },
    areaServed: { "@type": "City", name: "Santiago" },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: site.openingHours.days,
        opens: site.openingHours.opens,
        closes: site.openingHours.closes,
    },
    sameAs: site.social.map((profile) => profile.url).filter(Boolean),
});
