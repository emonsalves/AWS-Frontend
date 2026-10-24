/**
 * Enlaces de contacto: funciones puras, sin React.
 */

// Abre un chat de WhatsApp; con "text" el mensaje aparece ya escrito
export const whatsappUrl = (number, text) => (text ? `https://wa.me/${number}?text=${encodeURIComponent(text)}` : `https://wa.me/${number}`);

export const mailtoUrl = (email) => `mailto:${email}`;
