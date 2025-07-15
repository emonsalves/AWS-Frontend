import { Outlet, useLocation } from "react-router-dom";
import HeaderPublic from "../components/headers/HeaderPublic";
import FooterPublic from "../components/footers/FooterPublic";

function LayoutPublic() {
    const location = useLocation();
    
    // Páginas que necesitan centrado vertical (contenido fijo)
    const centeredPages = ['/', '/login', '/contacto', '/recover-password'];
    // Páginas que manejan su propio padding y espaciado
    const selfManagedPages = ['/about', '/followers'];
    
    const shouldCenter = centeredPages.includes(location.pathname.toLowerCase());
    const isSelfManaged = selfManagedPages.includes(location.pathname.toLowerCase());
    
    return (
        <div className="flex flex-col min-h-screen w-full bg-gray-900">
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
                        ? 'w-full' // Sin padding para páginas auto-gestionadas
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