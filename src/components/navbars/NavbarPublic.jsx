import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const NavPublic = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useTheme();
    const goTo = useNavigate();
    const location = useLocation();

    const menuItems = [
        { text: "Home", path: "/" },
        { text: "About", path: "/about" },
        { text: "Contacto", path: "/contacto" },
        { text: "Login", path: "/login" },
    ];

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`${darkMode ? 'bg-gray-800' : 'bg-[#25D366]'} fixed w-full z-20 top-0 shadow-lg px-4 sm:px-6 lg:px-10 transition-colors duration-300`}>
            <div className="flex justify-between items-center h-16 sm:h-20">
                <div
                    className={`flex items-center px-2 sm:px-4 py-2 ${darkMode ? 'hover:text-gray-300 text-white' : 'hover:text-gray-700 text-black'} cursor-pointer rounded-lg transition-all duration-300`}
                    onClick={() => goTo("/")}
                >
                    <span className="text-lg sm:text-xl font-extrabold text-center">MNSLVS</span>
                </div>
                
                <div className="hidden md:flex md:justify-end md:items-center space-x-4">
                    {menuItems.map((item, index) => (
                        <span
                            key={index}
                            onClick={() => goTo(item.path)}
                            className={`flex items-center px-3 py-2 rounded-md text-base sm:text-lg font-extrabold transition-all duration-300 cursor-pointer
                                ${location.pathname === item.path 
                                    ? (darkMode ? 'text-[#25D366]' : 'text-white') 
                                    : (darkMode ? 'text-gray-300 hover:text-[#25D366]' : 'text-black hover:text-white')}`}
                        >
                            {item.text}
                        </span>
                    ))}
                    <button
                        onClick={toggleDarkMode}
                        className={`w-10 h-10 flex items-center justify-center rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-[#128C7E]'} transition-colors`}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? (
                            <i className="fas fa-sun text-[#25D366] text-xl"></i>
                        ) : (
                            <i className="fas fa-moon text-white text-xl"></i>
                        )}
                    </button>
                </div>

                <div className="md:hidden flex items-center space-x-2">
                    <button
                        onClick={toggleDarkMode}
                        className={`w-10 h-10 flex items-center justify-center rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-[#128C7E]'} transition-colors`}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? (
                            <i className="fas fa-sun text-[#25D366] text-xl"></i>
                        ) : (
                            <i className="fas fa-moon text-white text-xl"></i>
                        )}
                    </button>
                    <button 
                        className={`mobile-menu-button text-lg sm:text-xl font-extrabold px-2 py-1 ${darkMode ? 'text-white' : 'text-black'}`} 
                        onClick={handleMobileMenuToggle}
                    >
                        MENU
                    </button>
                </div>
            </div>

            <div className={`transition-all duration-700 ${isMobileMenuOpen ? "h-screen" : "h-0 overflow-hidden"} md:hidden`}>
                <div className="pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                    {menuItems.map((item, index) => (
                        <span
                            key={index}
                            onClick={() => {
                                goTo(item.path);
                                setIsMobileMenuOpen(false);
                            }}
                            className={`text-center opacity-0 transition-opacity duration-700 px-4 py-3 rounded-md text-lg sm:text-xl font-extrabold cursor-pointer ${
                                isMobileMenuOpen ? "opacity-100" : ""
                            } ${
                                location.pathname === item.path 
                                    ? (darkMode ? 'text-[#25D366]' : 'text-white') 
                                    : (darkMode ? 'text-gray-300 hover:text-[#25D366]' : 'text-black hover:text-white')
                            }`}
                        >
                            <i className="fa-solid fa-arrow-right"></i> {item.text}
                        </span>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export { NavPublic };
