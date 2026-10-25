import { Link } from 'react-router';
import { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { usePageTitle } from '../hooks/usePageTitle';
import Icon from '../components/ui/Icon';
import { login } from '../config/login';
import { LoginPreview } from '../features/auth';

const Login = () => {
    usePageTitle("Iniciar sesión");
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
            
            // TODO: conectar con la autenticación real
        } catch (error) {
            setEmailError('Error al iniciar sesión. Verifica tus credenciales.');
        } finally {
            setIsLoading(false);
        }
    };

    const isFormValid = email && validateEmail(email) && password && password.length >= 6 && !isLoading;

    return (
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-10 sm:py-20 lg:grid-cols-2 lg:items-stretch">
            <div className="anim-rise relative hidden overflow-hidden rounded-[28px] bg-ink p-10 text-night-text lg:flex lg:flex-col lg:justify-between lg:gap-10 dark:bg-night-soft dark:ring-1 dark:ring-night-line">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:22px_22px]"
                />
                <span aria-hidden="true" className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500 text-xl font-extrabold text-primary-ink">
                    M
                </span>
                <LoginPreview />
                <div className="relative">
                    <p className="text-[40px] leading-[1.05] font-extrabold tracking-[-0.04em]">{login.panel.title}</p>
                    <p className="mt-4 text-lg text-night-muted">{login.panel.text}</p>
                </div>
            </div>

            <form
                onSubmit={handleSubmit}
                aria-label="Formulario de inicio de sesión"
                className="anim-rise flex flex-col gap-5 rounded-[28px] border border-paper-line bg-paper-soft p-6 sm:p-10 dark:border-night-line dark:bg-night-soft"
                style={{ '--delay': '120ms' }}
                noValidate
            >
                <div className="mb-2">
                    <h1 className="text-[32px] leading-tight font-extrabold tracking-[-0.03em] text-ink sm:text-4xl dark:text-night-text">Iniciar sesión</h1>
                    <p className="mt-2 text-ink-muted dark:text-night-muted">Ingresa tus credenciales para acceder a tu cuenta.</p>
                </div>
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
                <Input
                    type="password"
                    placeholder="Tu contraseña"
                    leftIcon={<Icon name="lock" />}
                    value={password}
                    onChange={handlePasswordChange}
                    error={passwordError}
                    state={passwordError ? 'error' : password && password.length >= 6 ? 'success' : 'default'}
                    label="Contraseña"
                    id="password-input"
                    name="password"
                    autoComplete="current-password"
                    required
                />
                <div className="flex flex-col items-start justify-between gap-3 text-sm font-medium sm:flex-row sm:items-center">
                    <label className="flex cursor-pointer items-center gap-3 text-ink-muted dark:text-night-muted">
                        <input
                            type="checkbox"
                            className="h-4 w-4 rounded-sm accent-primary-500"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <span className="select-none">Recordarme</span>
                    </label>
                    <Link
                        to="/recovery"
                        className="rounded-md text-primary-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:text-primary-400 dark:focus-visible:outline-primary-400"
                    >
                        ¿Olvidaste tu contraseña?
                    </Link>
                </div>
                <Button variant="primary" size="lg" fullWidth type="submit" className="mt-2" disabled={!isFormValid}>
                    {isLoading ? (
                        <span className="flex items-center justify-center">
                            <Icon name="spinner" className="mr-2 animate-spin" />
                            Iniciando sesión...
                        </span>
                    ) : (
                        'Iniciar sesión'
                    )}
                </Button>
            </form>
        </div>
    );
};

export default Login;
