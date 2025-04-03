import { ContainerContact } from "../components/containers/ContainerContact";
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
    const { darkMode } = useTheme();
    return (
        <>
            <div className={`min-h-[calc(100vh-6rem)] w-full flex flex-col items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
                <ContainerContact />
            </div>
        </>
    );
};

export default Contact;
