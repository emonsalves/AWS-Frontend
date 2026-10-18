import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { site } from '../../config/site';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';

const emptyForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
};

const MIN_MESSAGE_LENGTH = 10;

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePhone = (phone) => /^(\+?56|0)?[1-9]\d{8}$/.test(phone.replace(/\s/g, ''));

const ContainerContact = () => {
    const { text } = useTheme();

    const [formData, setFormData] = useState(emptyForm);
    const [errors, setErrors] = useState({});
    const [isSent, setIsSent] = useState(false);

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${site.contact.whatsapp}`, '_blank', 'noopener,noreferrer');
    };

    const handleEmailClick = () => {
        window.location.href = `mailto:${site.contact.email}`;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Validación en tiempo real de email y teléfono; el resto limpia su error al escribir
        if (name === 'email' && value) {
            setErrors((prev) => ({ ...prev, email: validateEmail(value) ? '' : 'Por favor ingresa un email válido' }));
        } else if (name === 'phone' && value) {
            setErrors((prev) => ({
                ...prev,
                phone: validatePhone(value) ? '' : 'Formato de teléfono inválido (ej: +56912345678)',
            }));
        } else if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';

        if (!formData.email.trim()) {
            newErrors.email = 'El email es obligatorio';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Por favor ingresa un email válido';
        }

        if (formData.phone && !validatePhone(formData.phone)) {
            newErrors.phone = 'Formato de teléfono inválido (ej: +56912345678)';
        }

        if (!formData.subject.trim()) newErrors.subject = 'El asunto es obligatorio';

        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es obligatorio';
        } else if (formData.message.trim().length < MIN_MESSAGE_LENGTH) {
            newErrors.message = `El mensaje debe tener al menos ${MIN_MESSAGE_LENGTH} caracteres`;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // El sitio no tiene backend: el formulario arma el correo y abre el cliente de correo del usuario
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const body = [
            `Nombre: ${formData.name.trim()}`,
            `Email: ${formData.email.trim()}`,
            formData.phone.trim() ? `Teléfono: ${formData.phone.trim()}` : null,
            '',
            formData.message.trim(),
        ]
            .filter((line) => line !== null)
            .join('\n');

        const params = `subject=${encodeURIComponent(formData.subject.trim())}&body=${encodeURIComponent(body)}`;
        window.location.href = `mailto:${site.contact.email}?${params}`;

        // Se conserva el borrador por si la aplicación de correo no se abrió
        setIsSent(true);
    };

    const handleNewMessage = () => {
        setFormData(emptyForm);
        setErrors({});
        setIsSent(false);
    };

    return (
        <Card
            variant="elevated"
            className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] xl:max-w-6xl mx-auto animate-fade-up animate-once backdrop-blur-sm"
            padding="none"
        >
            <div className="flex flex-col lg:flex-row">
                {/* Información y contacto directo */}
                <div className="lg:w-1/2 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-700 flex flex-col justify-center">
                    <div className="space-y-4 text-center lg:text-left">
                        <div className="flex justify-center">
                            <img
                                src="./contact-support.svg"
                                alt="Soporte al Cliente"
                                className="w-24 h-24 sm:w-28 sm:h-28 object-contain animate-fade-up animate-once"
                            />
                        </div>

                        <div>
                            <h1 className={`text-lg sm:text-xl font-semibold ${text.primary} mb-3`}>
                                ¿Necesitas ayuda?
                                <br />
                                ¡Estamos aquí para ti!
                            </h1>
                            <p className={`text-sm ${text.secondary} leading-relaxed`}>
                                En MNSLVS, nos enorgullece ofrecer un servicio al cliente excepcional. Nuestro equipo
                                está listo para responder tus preguntas y ayudarte a encontrar las soluciones
                                tecnológicas perfectas para tu negocio.
                            </p>
                        </div>

                        <div className={`text-sm ${text.secondary} space-y-1`}>
                            <p>
                                <i className="far fa-clock mr-2" aria-hidden="true"></i>
                                {site.businessHours}
                            </p>
                            <p>
                                <i className="fas fa-map-marker-alt mr-2" aria-hidden="true"></i>
                                {site.location}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2">
                            <button
                                type="button"
                                onClick={handleWhatsAppClick}
                                className="flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                <i className="fab fa-whatsapp text-lg" aria-hidden="true"></i>
                                <span className="font-semibold text-sm">WhatsApp</span>
                            </button>
                            <button
                                type="button"
                                onClick={handleEmailClick}
                                className="flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                <i className="far fa-envelope text-lg" aria-hidden="true"></i>
                                <span className="font-semibold text-sm">Email</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Formulario de contacto */}
                <div className="lg:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
                    {isSent ? (
                        <div className="text-center space-y-3" role="status">
                            <div className="flex justify-center">
                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                    <i className="fas fa-check text-green-600 dark:text-green-400 text-sm" aria-hidden="true"></i>
                                </div>
                            </div>
                            <h2 className={`text-lg font-semibold ${text.primary}`}>¡Tu correo está listo!</h2>
                            <p className={`text-sm ${text.secondary}`}>
                                Abrimos tu aplicación de correo con el mensaje completo. Solo falta que lo envíes desde
                                ahí.
                            </p>
                            <p className={`text-xs ${text.secondary} opacity-75`}>
                                ¿No se abrió? Escríbenos a {site.contact.email} o usa WhatsApp.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-2 mt-2">
                                <Button variant="ghost" size="sm" onClick={() => setIsSent(false)}>
                                    Volver a mi mensaje
                                </Button>
                                <Button variant="ghost" size="sm" onClick={handleNewMessage}>
                                    Escribir otro mensaje
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-3" aria-label="Formulario de contacto" noValidate>
                            <div className="text-center lg:text-left mb-3">
                                <h2 className={`text-lg sm:text-xl font-semibold ${text.primary} mb-1`}>
                                    Envíanos un mensaje
                                </h2>
                                <p className={`text-sm ${text.secondary} opacity-90`}>
                                    Completa el formulario y te responderemos a la brevedad
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <Input
                                    id="contact-name"
                                    label="Nombre"
                                    name="name"
                                    autoComplete="name"
                                    placeholder="Tu nombre completo"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    error={errors.name}
                                    state={formData.name.trim() ? 'success' : 'default'}
                                    leftIcon={<i className="fas fa-user"></i>}
                                    required
                                />

                                <Input
                                    id="contact-email"
                                    label="Email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="tu@email.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    error={errors.email}
                                    state={validateEmail(formData.email) ? 'success' : 'default'}
                                    leftIcon={<i className="fas fa-envelope"></i>}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <Input
                                    id="contact-phone"
                                    label="Teléfono (opcional)"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    placeholder="+56 9 1234 5678"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    error={errors.phone}
                                    state={formData.phone && validatePhone(formData.phone) ? 'success' : 'default'}
                                    leftIcon={<i className="fas fa-phone"></i>}
                                />

                                <Input
                                    id="contact-subject"
                                    label="Asunto"
                                    name="subject"
                                    placeholder="¿En qué podemos ayudarte?"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    error={errors.subject}
                                    state={formData.subject.trim() ? 'success' : 'default'}
                                    leftIcon={<i className="fas fa-tag"></i>}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="contact-message" className={`block text-sm font-medium ${text.primary}`}>
                                    Mensaje
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={3}
                                    required
                                    aria-invalid={Boolean(errors.message)}
                                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 placeholder-opacity-50 resize-none ${
                                        errors.message
                                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100 focus:ring-2 focus:ring-red-500'
                                            : formData.message.trim().length >= MIN_MESSAGE_LENGTH
                                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100 focus:ring-2 focus:ring-green-500'
                                              : 'border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500'
                                    }`}
                                />
                                {errors.message && (
                                    <p id="contact-message-error" className="text-sm text-red-600 dark:text-red-400 mt-1">
                                        {errors.message}
                                    </p>
                                )}
                                <p className={`text-xs ${text.secondary} opacity-75`}>
                                    Mínimo {MIN_MESSAGE_LENGTH} caracteres ({formData.message.trim().length}/
                                    {MIN_MESSAGE_LENGTH})
                                </p>
                            </div>

                            <Button variant="primary" size="md" fullWidth type="submit" className="mt-3">
                                Enviar mensaje
                            </Button>

                            <p className={`text-xs ${text.secondary} opacity-75 text-center mt-2`}>
                                Se abrirá tu aplicación de correo con el mensaje listo para enviar.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </Card>
    );
};

export { ContainerContact };
