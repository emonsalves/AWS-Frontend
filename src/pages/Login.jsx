import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Login = () => {
    const { darkMode } = useTheme();

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className={`h-full flex items-center justify-center ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-400 bg-gray-100'} border shadow-custom-dark rounded-2xl animate-fade-up transition-colors duration-300`}>
                <section className={`w-full max-w-6xl flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center  ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-400 bg-gray-100'} rounded-2xl px-8 py-10`}>
                    <div className="md:w-1/2 max-w-xl">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            alt="Sample image"
                            className="rounded-2xl filter drop-shadow-xl"
                        />
                    </div>
                    <div className="md:w-1/3 max-w-sm animate-fade-left animate-once">
                        <h1 className={`text-3xl font-semibold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            Iniciar Sesión
                        </h1>
                        <div className="space-y-4">
                            <input
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-colors ${darkMode
                                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                                    }`}
                                type="text"
                                placeholder="Correo Electrónico"
                            />
                            <input
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-colors ${darkMode
                                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                                    }`}
                                type="password"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="mt-4 flex justify-between font-semibold text-sm">
                            <label className={`flex items-center cursor-pointer ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                <input
                                    type="checkbox"
                                    className="mr-2 rounded border-gray-300 text-[#25D366] focus:ring-[#25D366]"
                                />
                                <span>Recordarme</span>
                            </label>
                            <Link to="/recover-password" className="text-[#25D366] hover:text-[#128C7E] transition-colors">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                        <div className="text-center md:text-left mt-6">
                            <button
                                className="w-full bg-[#25D366] hover:bg-[#128C7E] px-6 py-3 text-white font-medium rounded-lg transition-colors duration-200"
                                type="submit"
                            >
                                Iniciar Sesión
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default Login;
