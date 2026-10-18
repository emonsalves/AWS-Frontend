/**
 * Validaciones de formularios: funciones puras, sin React.
 */

export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Acepta números chilenos con o sin prefijo (+56, 56 o 0) e ignora los espacios
export const validatePhone = (phone) => /^(\+?56|0)?[1-9]\d{8}$/.test(phone.replace(/\s/g, ""));
