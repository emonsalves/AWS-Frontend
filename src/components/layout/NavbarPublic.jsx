import { useState } from "react";
import { Link, NavLink } from "react-router";
import { useTheme } from "../../context/ThemeContext";
import { menuAction, menuItems } from "../../config/navigation";
import { site } from "../../config/site";
import Icon from "../ui/Icon";

const linkClasses = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:focus-visible:outline-primary-400 ${
        isActive ? "text-ink dark:text-night-text" : "text-ink-muted hover:text-ink dark:text-night-muted dark:hover:text-night-text"
    }`;

const iconButtonClasses =
    "flex h-11 w-11 items-center justify-center rounded-lg border border-paper-line text-ink transition-colors hover:bg-paper-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:border-night-line dark:text-night-text dark:hover:bg-night-soft dark:focus-visible:outline-primary-400";

const NavPublic = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useTheme();
    const closeMenu = () => setIsMobileMenuOpen(false);

    const themeButton = (
        <button
            type="button"
            onClick={toggleDarkMode}
            className={iconButtonClasses}
            aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
        >
            <Icon name="moon" className="dark:hidden" />
            <Icon name="sun" className="hidden dark:inline-block" />
        </button>
    );

    return (
        <nav
            aria-label="Principal"
            className="fixed top-0 z-20 w-full border-b border-paper-line bg-paper/85 backdrop-blur-md dark:border-night-line dark:bg-night/80"
        >
            <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-10">
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="flex items-center gap-2.5 rounded-lg font-extrabold tracking-wide text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-700 dark:text-night-text dark:focus-visible:outline-primary-400"
                    aria-label={`${site.name}, inicio`}
                >
                    <span
                        aria-hidden="true"
                        className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-primary-500 text-[15px] text-primary-ink"
                    >
                        M
                    </span>
                    MNSLVS
                </Link>

                <div className="hidden items-center gap-3 md:flex">
                    <ul className="flex items-center gap-1">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <NavLink to={item.path} end className={linkClasses}>
                                    {item.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    {themeButton}
                    <Link
                        to={menuAction.path}
                        className="rounded-lg bg-ink px-[18px] py-2.5 font-semibold text-paper transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:bg-night-text dark:text-night dark:focus-visible:outline-primary-400"
                    >
                        {menuAction.text}
                    </Link>
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    {themeButton}
                    <button
                        type="button"
                        className={iconButtonClasses}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="menu-movil"
                        aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        <Icon name={isMobileMenuOpen ? "xmark" : "bars"} className="text-lg" />
                    </button>
                </div>
            </div>

            <div
                id="menu-movil"
                hidden={!isMobileMenuOpen}
                className="border-t border-paper-line bg-paper px-5 pt-2 pb-6 md:hidden dark:border-night-line dark:bg-night"
            >
                <ul className="flex flex-col">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                end
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `flex min-h-12 items-center justify-between border-b border-paper-line text-lg font-semibold dark:border-night-line ${
                                        isActive ? "text-primary-700 dark:text-primary-400" : "text-ink dark:text-night-text"
                                    }`
                                }
                            >
                                {item.text}
                                <Icon name="arrow-right" className="text-sm opacity-60" />
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <Link
                    to={menuAction.path}
                    onClick={closeMenu}
                    className="mt-6 flex min-h-12 items-center justify-center rounded-lg bg-primary-500 font-bold text-primary-ink"
                >
                    {menuAction.text}
                </Link>
            </div>
        </nav>
    );
};

export { NavPublic };
