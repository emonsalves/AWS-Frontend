import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import Card from '../components/base/Card';
import Button from '../components/base/Button';
import Input from '../components/base/Input';

const Login = () => {
    const { text } = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

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

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        
        if (value && value.length < 6) {
            setPasswordError('La contraseña debe tener al menos 6 caracteres');
        } else {
            setPasswordError('');
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

        if (!password) {
            setPasswordError('La contraseña es obligatoria');
            return;
        }

        if (password.length < 6) {
            setPasswordError('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        setIsLoading(true);
        setEmailError('');
        setPasswordError('');
        
        try {
            // Simular llamada API de login
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Simular éxito (aquí iría la lógica real de autenticación)
            console.log('Login exitoso:', { email, password, rememberMe });
            
        } catch (error) {
            setEmailError('Error al iniciar sesión. Verifica tus credenciales.');
        } finally {
            setIsLoading(false);
        }
    };

    const isFormValid = email && validateEmail(email) && password && password.length >= 6 && !isLoading;

    return (
        <div className="w-full min-h-full flex items-center justify-center">
            <Card 
                variant="elevated" 
                className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] xl:max-w-6xl mx-auto animate-fade-up animate-once backdrop-blur-sm"
                padding="none"
            >
                <form onSubmit={handleSubmit} aria-label="Formulario de inicio de sesión">
                    <section className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8" role="main">
                        <div className="w-full md:w-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                alt="Ilustración de login"
                                className="w-full h-auto max-h-48 sm:max-h-64 md:max-h-full rounded-2xl filter drop-shadow-xl object-contain"
                            />
                        </div>
                        <div className="w-full md:w-1/2 max-w-sm lg:max-w-md animate-fade-left animate-once space-y-3 sm:space-y-4">
                            <div className="text-center space-y-2 sm:space-y-3">
                                <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold ${text.primary}`}>
                                    Iniciar Sesión
                                </h1>
                                <p className={`text-sm sm:text-base leading-relaxed ${text.secondary} opacity-90`}>
                                    Ingresa tus credenciales para acceder a tu cuenta
                                </p>
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                <Input
                                    type="email"
                                    placeholder="Correo Electrónico"
                                    className="w-full"
                                    leftIcon={<i className={`fas fa-envelope ${text.icon}`}></i>}
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
                                <Input
                                    type="password"
                                    placeholder="Contraseña"
                                    className="w-full"
                                    leftIcon={<i className="fas fa-lock text-neutral-600 dark:text-neutral-300"></i>}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    error={passwordError}
                                    state={passwordError ? 'error' : password && password.length >= 6 ? 'success' : 'default'}
                                    label="Contraseña"
                                    id="password-input"
                                    name="password"
                                    autoComplete="current-password"
                                    required
                                    aria-describedby={passwordError ? 'password-error' : undefined}
                                />
                            </div>
                            <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-2 font-semibold text-sm">
                                <label className={`flex items-center cursor-pointer ${text.secondary} hover:${text.primary} transition-colors duration-200`}>
                                    <input
                                        type="checkbox"
                                        className="mr-3 w-4 h-4 rounded border-2 border-neutral-300 text-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 transition-all duration-200"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    <span className="select-none">Recordarme</span>
                                </label>
                                <Link 
                                    to="/recovery" 
                                    className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200 font-medium"
                                >
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>
                            <div className="text-center md:text-left mt-4 sm:mt-6">
                                <Button
                                    variant="primary"
                                    size="md"
                                    fullWidth
                                    type="submit"
                                    className="py-3 sm:py-3.5 text-base sm:text-lg font-semibold"
                                    disabled={!isFormValid}
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center">
                                            <i className="fas fa-spinner fa-spin mr-2"></i>
                                            Iniciando sesión...
                                        </span>
                                    ) : (
                                        'Iniciar Sesión'
                                    )}
                                </Button>
                            </div>
                            {/* <div className={`mt-4 font-medium text-sm text-center space-y-2 ${text.secondary}`}>
                                <div className="space-y-2">
                                    <p>¿No tienes una cuenta?</p>
                                    <Link to="/register" className={`${text.accent} hover:text-primary-500 transition-colors duration-200 font-medium block`}>
                                        Crear cuenta nueva
                                    </Link>
                                </div>
                            </div> */}
                        </div>
                    </section>
                </form>
            </Card>
        </div>
    );
};

export default Login;
