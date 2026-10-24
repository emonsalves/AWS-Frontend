import { useTheme } from "../context/ThemeContext";
import { usePageTitle } from "../hooks/usePageTitle";
import { HomeAudience, HomeContact, HomeHero, HomeProcess, HomeServices } from "../features/home";

const Home = () => {
    usePageTitle("Desarrollo web y automatización para PYMES en Santiago");
    const { darkMode } = useTheme();

    return (
        <div className="relative w-full">
            {/* Luciérnagas de fondo */}
            {Array.from({ length: 15 }).map((_, index) => (
                <div key={index} className={`firefly ${darkMode ? "firefly-dark" : "firefly-light"}`}></div>
            ))}

            <div className="relative z-10 mx-auto max-w-6xl pb-12">
                <HomeHero />
                <HomeServices />
                <HomeAudience />
                <HomeProcess />
                <HomeContact />
            </div>
        </div>
    );
};

export default Home;
