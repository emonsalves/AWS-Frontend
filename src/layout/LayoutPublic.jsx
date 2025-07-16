import { Outlet, useLocation } from "react-router-dom";
import HeaderPublic from "../components/headers/HeaderPublic";
import FooterPublic from "../components/footers/FooterPublic";
import { useTheme } from '../context/ThemeContext';

function LayoutPublic() {
    const location = useLocation();
    const { darkMode } = useTheme();
    
    // Pages that need vertical centering (fixed content)
    const centeredPages = ['/', '/login', '/contacto', '/recover-password'];
    // Pages that manage their own padding and spacing
    const selfManagedPages = ['/about', '/followers'];
    
    const shouldCenter = centeredPages.includes(location.pathname.toLowerCase());
    const isSelfManaged = selfManagedPages.includes(location.pathname.toLowerCase());
    
    return (
        <div className={`flex flex-col min-h-screen w-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
            <HeaderPublic />
            <main className={`flex-1 w-full ${
                shouldCenter 
                    ? 'flex items-center justify-center' 
                    : 'flex flex-col'
            }`}>
                <div className={`${
                    shouldCenter 
                        ? 'w-full max-w-7xl mx-auto px-4' 
                        : isSelfManaged
                        ? 'w-full' // No padding for self-managed pages
                        : 'w-full max-w-7xl mx-auto px-4 py-8'
                }`}>
                    <Outlet />
                </div>
            </main>
            <FooterPublic />
        </div>
    );
}

export { LayoutPublic };