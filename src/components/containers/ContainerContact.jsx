import { useState } from 'react';
import { contact } from '../../config/contact';
import { site } from '../../config/site';
import { mailtoUrl, whatsappUrl } from '../../lib/contactLinks';
import { validateEmail, validatePhone } from '../../lib/validation';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Icon from '../ui/Icon';
import Highlight from '../illustrations/Highlight';

const emptyForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
};

const MIN_MESSAGE_LENGTH = 10;

const ContainerContact = () => {
    const [formData, setFormData] = useState(emptyForm);
    const [errors, setErrors] = useState({});
    const [isSent, setIsSent] = useState(false);

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

    const [titleStart, titleEnd] = contact.title.split(contact.highlight);

    return (
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-14 sm:px-10 sm:py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* Información y contacto directo */}
            <div className="flex flex-col gap-8">
                <div>
                    <p className="anim-rise mb-5 font-semibold text-primary-700 dark:text-primary-400">{contact.label}</p>
                    <h1
                        className="anim-rise text-[40px] leading-[1.04] font-extrabold tracking-[-0.04em] text-ink sm:text-[56px] dark:text-night-text"
                        style={{ '--delay': '80ms' }}
                    >
                        {titleStart}
                        <Highlight>{contact.highlight}</Highlight>
                        {titleEnd}
                    </h1>
                    <p className="anim-rise mt-6 text-lg text-ink-muted sm:text-xl dark:text-night-muted" style={{ '--delay': '160ms' }}>
                        {contact.intro}
                    </p>
                </div>

                <ul className="anim-rise flex flex-col gap-3" style={{ '--delay': '240ms' }}>
                    <li>
                        <a
                            href={whatsappUrl(site.contact.whatsapp)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 rounded-2xl bg-primary-500 p-5 text-primary-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:focus-visible:outline-primary-400"
                        >
                            <span className="anim-ring flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-ink text-xl text-primary-500">
                                <Icon name="whatsapp" />
                            </span>
                            <span className="flex-1">
                                <strong className="block text-lg">{contact.whatsapp.title}</strong>
                                <span className="text-sm opacity-80">{contact.whatsapp.text}</span>
                            </span>
                            <Icon name="arrow-right" className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </li>
                    <li>
                        <a
                            href={mailtoUrl(site.contact.email)}
                            className="group flex items-center gap-4 rounded-2xl border border-paper-line p-5 text-ink transition-colors hover:bg-paper-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:border-night-line dark:text-night-text dark:hover:bg-night-soft dark:focus-visible:outline-primary-400"
                        >
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-paper-accent text-xl text-primary-700 dark:bg-night-accent dark:text-primary-400">
                                <Icon name="envelope" />
                            </span>
                            <span className="min-w-0 flex-1">
                                <strong className="block text-lg">{contact.email.title}</strong>
                                <span className="block truncate text-sm text-ink-muted dark:text-night-muted">{site.contact.email}</span>
                            </span>
                            <Icon name="arrow-right" className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </li>
                </ul>

                <dl className="anim-rise grid gap-4 text-ink-muted sm:grid-cols-2 dark:text-night-muted" style={{ '--delay': '320ms' }}>
                    <div className="flex items-start gap-3">
                        <dt>
                            <Icon name="clock-regular" className="mt-1 text-primary-700 dark:text-primary-400" />
                            <span className="sr-only">Horario</span>
                        </dt>
                        <dd>{site.businessHours}</dd>
                    </div>
                    <div className="flex items-start gap-3">
                        <dt>
                            <Icon name="location-dot" className="mt-1 text-primary-700 dark:text-primary-400" />
                            <span className="sr-only">Ubicación</span>
                        </dt>
                        <dd>{site.location}</dd>
                    </div>
                </dl>
            </div>

            {/* Formulario de contacto */}
            <div
                className="anim-rise rounded-[28px] border border-paper-line bg-paper-soft p-6 sm:p-8 dark:border-night-line dark:bg-night-soft"
                style={{ '--delay': '200ms' }}
            >
                {isSent ? (
                    <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center" role="status">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 text-xl text-primary-ink">
                            <Icon name="check" />
                        </span>
                        <h2 className="text-2xl font-extrabold text-ink dark:text-night-text">¡Tu correo está listo!</h2>
                        <p className="text-ink-muted dark:text-night-muted">
                            Abrimos tu aplicación de correo con el mensaje completo. Solo falta que lo envíes desde ahí.
                        </p>
                        <p className="text-sm text-ink-muted dark:text-night-muted">
                            ¿No se abrió? Escríbenos a {site.contact.email} o usa WhatsApp.
                        </p>
                        <div className="mt-2 flex flex-col justify-center gap-2 sm:flex-row">
                            <Button variant="secondary" size="sm" onClick={() => setIsSent(false)}>
                                Volver a mi mensaje
                            </Button>
                            <Button variant="ghost" size="sm" onClick={handleNewMessage}>
                                Escribir otro mensaje
                            </Button>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-label="Formulario de contacto" noValidate>
                        <div className="mb-2">
                            <h2 className="text-2xl font-extrabold text-ink dark:text-night-text">{contact.form.title}</h2>
                            <p className="mt-1 text-sm text-ink-muted dark:text-night-muted">{contact.form.text}</p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                                leftIcon={<Icon name="user" />}
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
                                leftIcon={<Icon name="envelope" />}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                                leftIcon={<Icon name="phone" />}
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
                                leftIcon={<Icon name="tag" />}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-ink dark:text-night-text">
                                Mensaje
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Cuéntanos sobre tu proyecto o consulta..."
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                required
                                aria-invalid={Boolean(errors.message)}
                                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                                className={`w-full resize-none rounded-lg border bg-paper px-4 py-3 text-ink transition-all duration-200 focus:ring-2 dark:bg-night dark:text-night-text ${
                                    errors.message
                                        ? 'border-red-500 focus:ring-red-500'
                                        : formData.message.trim().length >= MIN_MESSAGE_LENGTH
                                          ? 'border-primary-500 focus:ring-primary-500/40'
                                          : 'border-paper-field focus:border-primary-500 focus:ring-primary-500/30 dark:border-night-line'
                                }`}
                            />
                            {errors.message && (
                                <p id="contact-message-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                                    {errors.message}
                                </p>
                            )}
                            <p className="mt-1 text-xs text-ink-muted dark:text-night-muted">
                                Mínimo {MIN_MESSAGE_LENGTH} caracteres ({formData.message.trim().length}/{MIN_MESSAGE_LENGTH})
                            </p>
                        </div>

                        <Button variant="primary" size="lg" fullWidth type="submit" className="mt-2">
                            {contact.form.submit}
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
};

export { ContainerContact };
