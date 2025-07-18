import { Outlet } from "react-router-dom";
import HeaderPublic from "../components/headers/HeaderPublic";
import FooterPublic from "../components/footers/FooterPublic";
import { useTheme } from '../context/ThemeContext';

function LayoutPublic() {
    const { darkMode } = useTheme();
    
    
    return (
        <div className={`flex flex-col min-h-screen w-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
            <HeaderPublic />
            <main className={`flex-1 w-full flex items-center justify-center`}>
                    <Outlet />
            </main>
            <FooterPublic />
        </div>
    );
}

export { LayoutPublic };