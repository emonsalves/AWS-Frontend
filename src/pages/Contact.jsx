import { useTheme } from '../context/ThemeContext';
import { ContainerContact } from "../components/containers/ContainerContact";

const Contact = () => {
    const { darkMode } = useTheme();

    return (
        <div className="flex-1 flex items-center justify-center w-full py-8">
            <ContainerContact />
        </div>
    );
};

export default Contact;
