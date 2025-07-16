import { useTheme } from '../../context/ThemeContext';

const FooterPublic = () => {
    const { darkMode } = useTheme();
    
    return (
        <div className={`flex flex-col items-center justify-center w-full h-full py-4 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800' : 'bg-[#25D366]'
        }`}>
            <div className={`flex flex-row items-center justify-center space-x-8 text-2xl ${
                darkMode ? 'text-white' : 'text-white'
            }`}>
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={`transition-all duration-300 ${
                        darkMode 
                            ? 'hover:text-gray-400 hover:scale-125' 
                            : 'hover:text-gray-200 hover:scale-125'
                    }`}
                    alt="facebook"
                    aria-label="facebook"
                >
                    <i className="fab fa-facebook"></i>
                </a>
                <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={`transition-all duration-300 ${
                        darkMode 
                            ? 'hover:text-gray-400 hover:scale-125' 
                            : 'hover:text-gray-200 hover:scale-125'
                    }`}
                    alt="twitter"
                    aria-label="twitter"
                >
                    <i className="fab fa-twitter"></i>
                </a>
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={`transition-all duration-300 ${
                        darkMode 
                            ? 'hover:text-gray-400 hover:scale-125' 
                            : 'hover:text-gray-200 hover:scale-125'
                    }`}
                    alt="instagram"
                    aria-label="instagram"
                >
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <p className={`text-lg ${
                darkMode ? 'text-white' : 'text-white'
            }`}>&copy; {new Date().getFullYear()} - All Rights Reserved</p>
        </div>
    );
};

export default FooterPublic;
