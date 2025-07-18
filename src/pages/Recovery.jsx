import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import Card from '../components/base/Card';
import Button from '../components/base/Button';
import Input from '../components/base/Input';

const Recovery = () => {
    const { text } = useTheme();
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
        <div className="w-full h-full flex items-center justify-center">
            <Card 
                variant="elevated" 
                className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] xl:max-w-6xl mx-auto animate-fade-up animate-once backdrop-blur-sm py-3"
                padding="none"
            >
                <form onSubmit={handleSubmit} aria-label="Formulario de recuperación de contraseña">
                    <section className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-6 md:gap-12 rounded-2xl p-4 sm:p-6 lg:p-8" role="main">
                        <div className="w-full md:w-1/2 max-w-sm lg:max-w-md animate-fade-left animate-once space-y-4">
                            <div className="text-center space-y-3">
                                <h1 className={`text-2xl sm:text-3xl font-bold ${text.primary}`}>
                                    {isSuccess ? 'Instrucciones Enviadas' : 'Recuperar Contraseña'}
                                </h1>
                                {isSuccess ? (
                                    <div className="space-y-3">
                                        <div className="flex justify-center">
                                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                                <i className="fas fa-check text-green-600 text-2xl"></i>
                                            </div>
                                        </div>
                                        <p className={`text-base leading-relaxed ${text.secondary} opacity-90`}>
                                            {successMessage}
                                        </p>
                                        <p className={`text-sm ${text.secondary} opacity-75`}>
                                            Revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.
                                        </p>
                                    </div>
                                ) : (
                                    <p className={`text-base leading-relaxed ${text.secondary} opacity-90`}>
                                        Ingresa tu correo electrónico y te enviaremos las instrucciones para recuperar tu contraseña.
                                    </p>
                                )}
                            </div>
                            {!isSuccess && (
                                <>
                                    <div className="space-y-4">
                                        <Input
                                            type="email"
                                            placeholder="Correo Electrónico"
                                            className="w-full"
                                            leftIcon={<i className={`fas fa-envelope ${text.secondary}`}></i>}
                                            value={email}
                                            onChange={handleEmailChange}
                                            error={emailError}
                                            state={emailError ? 'error' : email && validateEmail(email) ? 'success' : 'default'}
                                            label="Correo Electrónico"
                                            id="email-input"
                                            name="email"
                                            autoComplete="email"
                                            required
                                            aria-describedby={emailError ? 'email-error' : undefined}
                                        />
                                    </div>
                                    <div className="text-center md:text-left mt-6">
                                        <Button
                                            variant="primary"
                                            size="md"
                                            fullWidth
                                            type="submit"
                                            className="py-3.5 text-lg font-semibold"
                                            disabled={!isFormValid}
                                        >
                                            {isLoading ? (
                                                <span className="flex items-center justify-center">
                                                    <i className="fas fa-spinner fa-spin mr-2"></i>
                                                    Enviando...
                                                </span>
                                            ) : (
                                                'Enviar Instrucciones'
                                            )}
                                        </Button>
                                    </div>
                                </>
                            )}
                            <div className={`mt-4 font-medium text-sm text-center space-y-2 ${text.secondary}`}>
                                {isSuccess ? (
                                    <div className="space-y-2">
                                        <p>¿No recibiste el email?</p>
                                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                                            <button 
                                                onClick={() => {
                                                    setIsSuccess(false);
                                                    setSuccessMessage('');
                                                }}
                                                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200 font-medium underline"
                                            >
                                                Enviar nuevamente
                                            </button>
                                            <span className="hidden sm:inline text-neutral-400">|</span>
                                            <Link to="/Login" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200 font-medium">
                                                Volver al login
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        <p>¿Recordaste tu contraseña?</p>
                                        <Link to="/Login" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200 font-medium block">
                                            Volver al login
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 max-w-md lg:max-w-xl">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                alt="Ilustración de recuperación de contraseña"
                                className="w-full h-auto rounded-2xl filter drop-shadow-xl"
                            />
                        </div>
                    </section>
                </form>
            </Card>
        </div>
    );
};

export default Recovery;
