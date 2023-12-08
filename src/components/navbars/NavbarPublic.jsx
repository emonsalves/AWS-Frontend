import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavPublic = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const goTo = useNavigate();
    const location = useLocation();

    const menuItems = [
        { text: "Home", path: "/" },
        { text: "About", path: "/about" },
        // { text: "Login", path: "/login" },
    ];

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <nav className="bg-green-600 fixed w-full z-10 top-0 text-gray-800 shadow-lg">
            <div className="flex justify-between items-center">
                <div
                    className="flex items-center px-4 py-1 hover:text-white cursor-pointer rounded-lg transition-all duration-300"
                    onClick={() => goTo("/")}
                >
                    <span className="text-gblack text-xl font-extrabold text-center">MNSLVS</span>
                </div>
                <div className="hidden md:flex md:justify-end md:items-end">
                    {menuItems.map((item, index) => (
                        <span
                            key={index}
                            onClick={() => goTo(item.path)}
                            className={`hover:text-white flex items-center px-4 py-1 rounded-md text-xl font-extrabold transition-all duration-300 ${
                                location.pathname === item.path ? "text-gray-300" : "text-black"
                            } cursor-pointer`}
                        >
                            {item.text}
                        </span>
                    ))}
                </div>
                <div className="md:hidden flex items-center">
                    <button className="mobile-menu-button mr-3 text-xl font-extrabold" onClick={handleMobileMenuToggle}>
                        MENU
                    </button>
                </div>
            </div>
            <div className={`transition-all duration-300 ${isMobileMenuOpen ? "" : "hidden"} md:hidden`}>
                <div className="pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                    {menuItems.map((item, index) => (
                        <span
                            key={index}
                            onClick={() => {
                                goTo(item.path);
                                setIsMobileMenuOpen(false);
                            }}
                            className={`transition-all duration-300 ${
                                location.pathname === item.path ? "text-black " : "text-black-300 hover:text-white "
                            }`}
                        >
                            {item.text}
                        </span>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export { NavPublic };
