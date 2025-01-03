import { Link } from "react-router-dom";
import { useTheme } from '../context/ThemeContext';

const NotFound = () => {
    const { darkMode } = useTheme();

    return (
        <main className={`min-h-screen flex flex-col justify-center items-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
            <h1 className={`text-9xl font-extrabold tracking-widest ${darkMode ? 'text-white' : 'text-gray-800'}`}>404</h1>
            <div className="bg-[#25D366] px-3 py-1 text-sm rounded-lg rotate-12 absolute text-white font-medium">Página No Encontrada</div>
            <button className="mt-8">
                <Link
                    to="/"
                    className="relative inline-block text-sm font-medium text-[#25D366] group active:text-[#128C7E] focus:outline-none focus:ring"
                >
                    <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#25D366] group-hover:translate-y-0 group-hover:translate-x-0"></span>
                    <span className={`relative block px-8 py-3 border border-current ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                        Volver al Inicio
                    </span>
                </Link>
            </button>
        </main>
    );
};

export default NotFound;
