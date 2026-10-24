import { useTheme } from '../../context/ThemeContext';
import { site } from '../../config/site';
import Icon from '../ui/Icon';

const FooterPublic = () => {
    const { darkMode } = useTheme();
    const socialLinks = site.social.filter((item) => item.url);

    return (
        <div className={`flex flex-col items-center justify-center w-full h-full py-4 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800' : 'bg-[#25D366]'
        }`}>
            <div className={`flex flex-row items-center justify-center space-x-8 text-2xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {socialLinks.map((item) => (
                    <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`transition-all duration-300 ${
                            darkMode
                                ? 'hover:text-gray-400 hover:scale-125'
                                : 'hover:text-gray-700 hover:scale-125'
                        }`}
                        aria-label={item.name}
                    >
                        <Icon name={item.icon} />
                    </a>
                ))}
            </div>
            <p className={`text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>&copy; {new Date().getFullYear()} - All Rights Reserved</p>
        </div>
    );
};

export default FooterPublic;
