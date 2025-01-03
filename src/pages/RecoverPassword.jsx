import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const RecoverPassword = () => {
    const { darkMode } = useTheme();

    return (
        <>
            <div className={`h-full flex items-center justify-center py-8 bg-gray-900 transition-colors duration-300`}>
                <section className="w-full max-w-6xl flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center animate-fade-up animate-once">
                    <div className={`w-full max-w-4xl flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center shadow-2xl px-8 py-10 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <div className="md:w-1/2 max-w-xl">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                alt="Sample image"
                                className="rounded-2xl filter drop-shadow-xl"
                            />
                        </div>
                        <div className="md:w-1/3 max-w-sm animate-fade-left animate-once">
                            <h1 className={`text-3xl font-semibold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                Recuperar Contraseña
                            </h1>
                            <p className={`text-sm text-center mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Ingresa tu correo electrónico y te enviaremos las instrucciones para recuperar tu contraseña.
                            </p>
                            <div className="space-y-4">
                                <input
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-colors ${darkMode
                                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                                        }`}
                                    type="email"
                                    placeholder="Correo Electrónico"
                                />
                            </div>
                            <div className="text-center md:text-left mt-6">
                                <button
                                    className="w-full bg-[#25D366] hover:bg-[#128C7E] px-6 py-3 text-white font-medium rounded-lg transition-colors duration-200"
                                    type="submit"
                                >
                                    Enviar Instrucciones
                                </button>
                            </div>
                            <div className={`mt-4 font-medium text-sm text-center md:text-left ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                ¿Recordaste tu contraseña?{" "}
                                <Link to="/login" className="text-[#25D366] hover:text-[#128C7E] transition-colors">
                                    Volver al login
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default RecoverPassword;
