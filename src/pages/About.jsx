import { useTheme } from '../context/ThemeContext';
import { ContainerAbout } from "../components/containers/ContainerAbout";
import { MarqueeAbout } from "../components/marquees/MarqueeAbout";
import { logosMarque1, logosMarque2 } from "../config/technologies";
import { usePageTitle } from "../hooks/usePageTitle";

const About = () => {
    usePageTitle("Nosotros");
    const { darkMode } = useTheme();

    return (
        <div className="min-h-screen w-full flex flex-col items-center">
            <ContainerAbout />
            <h2 className={`my-5 font-semibold text-2xl animate-fade animate-once text-center m-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                <i className="fa-solid fa-toolbox"></i> Conoce algunas de las Tecnologías que utilizamos:
            </h2>
            <MarqueeAbout direction={"left"} speed={25} dataLogos={logosMarque1} />
            <MarqueeAbout direction={"right"} speed={25} dataLogos={logosMarque2} />
        </div>
    );
};

export default About;
