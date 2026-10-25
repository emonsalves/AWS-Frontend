import { Link } from 'react-router';
import { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { usePageTitle } from '../hooks/usePageTitle';
import Icon from '../components/ui/Icon';

const Recovery = () => {
    usePageTitle("Recuperar contraseña");
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        
        if (value && !validateEmail(value)) {
            setEmailError('Por favor ingresa un email válido');
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email) {
            setEmailError('El email es obligatorio');
            return;
        }
        
        if (!validateEmail(email)) {
            setEmailError('Por favor ingresa un email válido');
            return;
        }

        setIsLoading(true);
        setEmailError('');
        
        try {
            // Simular llamada API
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Simular éxito
            setIsSuccess(true);
            setSuccessMessage(`Se han enviado las instrucciones de recuperación a ${email}`);
            setEmail('');
        } catch (error) {
            setEmailError('Error al enviar las instrucciones. Intenta nuevamente.');
        } finally {
            setIsLoading(false);
        }
    };

    const isFormValid = email && validateEmail(email) && !isLoading;

    return (
        <div className="mx-auto flex w-full max-w-xl px-5 py-14 sm:px-10 sm:py-20">
            <form
                onSubmit={handleSubmit}
                aria-label="Formulario de recuperación de contraseña"
                className="anim-rise flex w-full flex-col gap-5 rounded-[28px] border border-paper-line bg-paper-soft p-6 sm:p-10 dark:border-night-line dark:bg-night-soft"
                noValidate
            >
                {isSuccess && (
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 text-xl text-primary-ink">
                        <Icon name="check" />
                    </span>
                )}
                <div>
                    <h1 className="text-[32px] leading-tight font-extrabold tracking-[-0.03em] text-ink sm:text-4xl dark:text-night-text">
                        {isSuccess ? 'Instrucciones enviadas' : 'Recuperar contraseña'}
                    </h1>
                    {isSuccess ? (
                        <>
                            <p className="mt-2 text-ink dark:text-night-text">{successMessage}</p>
                            <p className="mt-2 text-sm text-ink-muted dark:text-night-muted">
                                Revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.
                            </p>
                        </>
                    ) : (
                        <p className="mt-2 text-ink-muted dark:text-night-muted">
                            Ingresa tu correo electrónico y te enviaremos las instrucciones para recuperar tu contraseña.
                        </p>
                    )}
                </div>
                {!isSuccess && (
                    <>
                        <Input
                            type="email"
                            placeholder="tu@email.com"
                            leftIcon={<Icon name="envelope" />}
                            value={email}
                            onChange={handleEmailChange}
                            error={emailError}
                            state={emailError ? 'error' : email && validateEmail(email) ? 'success' : 'default'}
                            label="Correo electrónico"
                            id="email-input"
                            name="email"
                            autoComplete="email"
                            required
                        />
                        <Button variant="primary" size="lg" fullWidth type="submit" disabled={!isFormValid}>
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <Icon name="spinner" className="mr-2 animate-spin" />
                                    Enviando...
                                </span>
                            ) : (
                                'Enviar instrucciones'
                            )}
                        </Button>
                    </>
                )}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-ink-muted dark:text-night-muted">
                    {isSuccess ? (
                        <>
                            <span>¿No recibiste el correo?</span>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsSuccess(false);
                                    setSuccessMessage('');
                                }}
                                className="rounded-md text-primary-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:text-primary-400 dark:focus-visible:outline-primary-400"
                            >
                                Enviar nuevamente
                            </button>
                        </>
                    ) : (
                        <span>¿Recordaste tu contraseña?</span>
                    )}
                    <Link to="/login" className="rounded-md text-primary-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:text-primary-400 dark:focus-visible:outline-primary-400">
                        Volver al login
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Recovery;
