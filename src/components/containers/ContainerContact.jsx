import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import Card from '../base/Card';
import Button from '../base/Button';
import Input from '../base/Input';

const ContainerContact = () => {
    const { text } = useTheme();

    // Estados del formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    // Estados de validación
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    // Validaciones
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^(\+?56|0)?[1-9]\d{8}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    };

    // Handlers del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Limpiar errores al escribir
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es obligatorio';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El email es obligatorio';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Por favor ingresa un email válido';
        }

        if (formData.phone && !validatePhone(formData.phone)) {
            newErrors.phone = 'Formato de teléfono inválido (ej: +56912345678)';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'El asunto es obligatorio';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es obligatorio';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            // Simular envío del formulario
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Simular éxito
            setIsSuccess(true);
            setSuccessMessage(`¡Gracias ${formData.name}! Tu mensaje ha sido enviado correctamente. Te contactaremos pronto a ${formData.email}.`);

            // Limpiar formulario
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
            setErrors({});

        } catch (error) {
            setErrors({ submit: 'Error al enviar el mensaje. Por favor intenta nuevamente.' });
        } finally {
            setIsLoading(false);
        }
    };

    const isFormValid = formData.name.trim() &&
        formData.email.trim() &&
        validateEmail(formData.email) &&
        formData.subject.trim() &&
        formData.message.trim() &&
        formData.message.trim().length >= 10 &&
        !isLoading;

    return (
        <div className="w-full flex items-center justify-center">
            <Card
                variant="elevated"
                className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] xl:max-w-6xl mx-auto animate-fade-up animate-once backdrop-blur-sm"
                padding="none"
            >
                {/* Header */}


                <div className="flex flex-col lg:flex-row">
                    {/* Sección de información y contacto directo */}
                    <div className="lg:w-1/2 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-700">
                        <div className="space-y-6">
                            {/* Mensaje principal */}
                            <div className="text-center lg:text-left">
                                <h2 className={`text-xl sm:text-2xl font-semibold ${text.primary} mb-4`}>
                                    ¿Necesitas ayuda?
                                    <br />
                                    ¡Estamos aquí para ti!
                                </h2>
                                <p className={`text-sm sm:text-base ${text.secondary} leading-relaxed mb-6`}>
                                    En MNSLVS, nos enorgullece ofrecer un servicio al cliente excepcional.
                                    Nuestro equipo está listo para responder tus preguntas y ayudarte
                                    a encontrar las soluciones tecnológicas perfectas para tu negocio.
                                </p>
                                <div className="flex justify-center lg:justify-start">
                                    <img
                                        src="./contact-support.svg"
                                        alt="Soporte al Cliente"
                                        className="w-32 h-32 sm:w-40 sm:h-40 object-contain animate-fade-up animate-once"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Formulario de contacto */}
                    <div className="lg:w-1/2 p-6 sm:p-8">
                        {isSuccess ? (
                            <div className="text-center space-y-4">
                                <div className="flex justify-center">
                                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                        <i className="fas fa-check text-green-600 dark:text-green-400 text-2xl"></i>
                                    </div>
                                </div>
                                <h3 className={`text-xl font-semibold ${text.primary}`}>
                                    ¡Mensaje Enviado!
                                </h3>
                                <p className={`text-base ${text.secondary} opacity-90`}>
                                    {successMessage}
                                </p>
                                <p className={`text-sm ${text.secondary} opacity-75`}>
                                    Nos pondremos en contacto contigo dentro de las próximas 24 horas.
                                </p>
                                <Button
                                    variant="ghost"
                                    size="md"
                                    onClick={() => {
                                        setIsSuccess(false);
                                        setSuccessMessage('');
                                    }}
                                    className="mt-4"
                                >
                                    Enviar otro mensaje
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulario de contacto">
                                <div className="text-center lg:text-left mb-6">
                                    <h2 className={`text-xl sm:text-2xl font-semibold ${text.primary} mb-2`}>
                                        Envíanos un mensaje
                                    </h2>
                                    <p className={`text-sm sm:text-base ${text.secondary} opacity-90`}>
                                        Completa el formulario y te responderemos a la brevedad
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input
                                        label="Nombre"
                                        name="name"
                                        placeholder="Tu nombre completo"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        error={errors.name}
                                        state={errors.name ? 'error' : formData.name ? 'success' : 'default'}
                                        leftIcon={<i className="fas fa-user"></i>}
                                        required
                                        className="sm:col-span-1"
                                    />

                                    <Input
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="tu@email.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        error={errors.email}
                                        state={errors.email ? 'error' : formData.email && validateEmail(formData.email) ? 'success' : 'default'}
                                        leftIcon={<i className="fas fa-envelope"></i>}
                                        required
                                        className="sm:col-span-1"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input
                                        label="Teléfono (opcional)"
                                        name="phone"
                                        type="tel"
                                        placeholder="+56 9 1234 5678"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        error={errors.phone}
                                        state={errors.phone ? 'error' : formData.phone && validatePhone(formData.phone) ? 'success' : 'default'}
                                        leftIcon={<i className="fas fa-phone"></i>}
                                        helperText="Formato: +56912345678"
                                        className="sm:col-span-1"
                                    />

                                    <Input
                                        label="Asunto"
                                        name="subject"
                                        placeholder="¿En qué podemos ayudarte?"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        error={errors.subject}
                                        state={errors.subject ? 'error' : formData.subject ? 'success' : 'default'}
                                        leftIcon={<i className="fas fa-tag"></i>}
                                        required
                                        className="sm:col-span-1"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className={`block text-sm font-medium ${text.primary}`}>
                                        Mensaje
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder="Cuéntanos sobre tu proyecto o consulta..."
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        required
                                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 placeholder-opacity-50 resize-none ${errors.message
                                                ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100 focus:ring-2 focus:ring-red-500'
                                                : formData.message && formData.message.length >= 10
                                                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100 focus:ring-2 focus:ring-green-500'
                                                    : 'border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500'
                                            }`}
                                    />
                                    {errors.message && (
                                        <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                                            {errors.message}
                                        </p>
                                    )}
                                    <p className={`text-xs ${text.secondary} opacity-75`}>
                                        Mínimo 10 caracteres ({formData.message.length}/10)
                                    </p>
                                </div>

                                {errors.submit && (
                                    <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                                        <p className="text-sm text-red-600 dark:text-red-400">
                                            {errors.submit}
                                        </p>
                                    </div>
                                )}

                                <Button
                                    variant="primary"
                                    size="lg"
                                    fullWidth
                                    type="submit"
                                    disabled={!isFormValid}
                                    loading={isLoading}
                                    className="mt-6"
                                >
                                    {isLoading ? 'Enviando mensaje...' : 'Enviar Mensaje'}
                                </Button>

                                <p className={`text-xs ${text.secondary} opacity-75 text-center mt-3`}>
                                    Al enviar este formulario, aceptas que nos pongamos en contacto contigo para responder tu consulta.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export { ContainerContact };
