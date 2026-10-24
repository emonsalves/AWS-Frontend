import { Link } from "react-router";
import { useTheme } from '../context/ThemeContext';
import { usePageTitle } from "../hooks/usePageTitle";

const NotFound = () => {
    usePageTitle("Página no encontrada");
    const { darkMode } = useTheme();

    return (
        <main className={`min-h-screen flex flex-col justify-center items-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
            <h1 className={`text-9xl font-extrabold tracking-widest ${darkMode ? 'text-white' : 'text-gray-800'}`}>404</h1>
            <div className="bg-[#25D366] px-3 py-1 text-sm rounded-lg rotate-12 absolute text-gray-900 font-medium">Página No Encontrada</div>
            <Link
                to="/"
                className={`mt-8 relative inline-block text-sm font-medium ${darkMode ? 'text-[#25D366]' : 'text-green-700'} group active:text-primary-muted focus:outline-hidden focus:ring-3 focus:ring-blue-500/50`}
            >
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#25D366] group-hover:translate-y-0 group-hover:translate-x-0"></span>
                <span className={`relative block px-8 py-3 border border-current ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    Volver al Inicio
                </span>
            </Link>
        </main>
    );
};

export default NotFound;
