import { useState } from "react";
import { Link, NavLink } from "react-router";
import { useTheme } from "../../context/ThemeContext";
import { menuItems } from "../../config/navigation";
import Icon from "../ui/Icon";

const NavPublic = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useTheme();

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`${darkMode ? 'bg-gray-800' : 'bg-[#25D366]'} fixed w-full z-20 top-0 shadow-lg px-4 sm:px-6 lg:px-10 transition-colors duration-300`}>
            <div className="flex justify-between items-center h-16 sm:h-20">
                <Link
                    to="/"
                    className={`flex items-center px-2 sm:px-4 py-2 ${darkMode ? 'hover:text-gray-300 text-white' : 'hover:text-gray-700 text-black'} cursor-pointer rounded-lg transition-all duration-300`}
                >
                    <span className="text-lg sm:text-xl font-extrabold text-center">MNSLVS</span>
                </Link>
                
                <div className="hidden md:flex md:justify-end md:items-center space-x-4">
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            end
                            className={({ isActive }) => `flex items-center px-3 py-2 rounded-md text-base sm:text-lg font-extrabold transition-all duration-300 cursor-pointer
                                ${isActive
                                    ? (darkMode ? 'text-[#25D366]' : 'text-gray-900 underline decoration-2 underline-offset-8') 
                                    : (darkMode ? 'text-gray-300 hover:text-[#25D366]' : 'text-black hover:underline decoration-2 underline-offset-8')}`}
                        >
                            {item.text}
                        </NavLink>
                    ))}
                    <button
                        onClick={toggleDarkMode}
                        className={`w-10 h-10 flex items-center justify-center rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-primary-muted'} transition-colors`}
                        aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
                    >
                        {darkMode ? (
                            <Icon name="sun" className="text-[#25D366] text-xl" />
                        ) : (
                            <Icon name="moon" className="text-gray-900 text-xl" />
                        )}
                    </button>
                </div>

                <div className="md:hidden flex items-center space-x-2">
                    <button
                        onClick={toggleDarkMode}
                        className={`w-10 h-10 flex items-center justify-center rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-primary-muted'} transition-colors`}
                        aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
                    >
                        {darkMode ? (
                            <Icon name="sun" className="text-[#25D366] text-xl" />
                        ) : (
                            <Icon name="moon" className="text-gray-900 text-xl" />
                        )}
                    </button>
                    <button 
                        className={`mobile-menu-button text-lg sm:text-xl font-extrabold px-2 py-1 ${darkMode ? 'text-white' : 'text-black'}`} 
                        onClick={handleMobileMenuToggle}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="menu-movil"
                    >
                        MENU
                    </button>
                </div>
            </div>

            <div
                id="menu-movil"
                aria-hidden={!isMobileMenuOpen}
                className={`transition-all duration-700 ${isMobileMenuOpen ? "h-screen" : "h-0 overflow-hidden"} md:hidden`}
            >
                <div className="pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            end
                            tabIndex={isMobileMenuOpen ? undefined : -1}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={({ isActive }) => `text-center opacity-0 transition-opacity duration-700 px-4 py-3 rounded-md text-lg sm:text-xl font-extrabold cursor-pointer ${
                                isMobileMenuOpen ? "opacity-100" : ""
                            } ${
                                isActive
                                    ? (darkMode ? 'text-[#25D366]' : 'text-gray-900 underline decoration-2 underline-offset-8') 
                                    : (darkMode ? 'text-gray-300 hover:text-[#25D366]' : 'text-black hover:underline decoration-2 underline-offset-8')
                            }`}
                        >
                            <Icon name="arrow-right" /> {item.text}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export { NavPublic };
