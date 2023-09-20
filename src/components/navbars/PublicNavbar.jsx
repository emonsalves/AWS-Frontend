import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavPublic = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const goTo = useNavigate();
  const location = useLocation();

  // const menuItems = [{ text: "Ingresar", path: "/auth" }];
  const menuItems = [{ text: "Login", path: "/" }];

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black p-2 fixed w-full z-10 top-0 text-white shadow-custom-light">
      <div className="flex justify-between items-center">
        <div
          className="ml-5 flex items-center hover:text-white cursor-pointer hover:bg-gray-700  p-1 rounded-lg"
          onClick={() => goTo("/")}
        >
          <span className="text-white text-xl">Mnslvs Solutions</span>
        </div>
        <div className="hidden md:flex md:justify-end md:items-end">
          {menuItems.map((item, index) => (
            <a
              key={index}
              onClick={() => goTo(item.path)}
              className={`hover:text-white hover:bg-gray-700 flex items-center px-4 py-1 rounded-md text-xl font-medium ${
                location.pathname === item.path ? "text-white" : "text-gray-300"
              } cursor-pointer`}
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className="md:hidden flex items-center pt-1">
          <button
            className="mobile-menu-button mr-3"
            onClick={handleMobileMenuToggle}
          >
            Menu
          </button>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? "" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
          {menuItems.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                goTo(item.path);
                setIsMobileMenuOpen(false);
              }}
              className={`${
                location.pathname === item.path
                  ? "text-white "
                  : "text-gray-300 hover:text-white"
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
