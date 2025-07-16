import { useTheme } from '../context/ThemeContext';

const Home = () => {
    const { darkMode } = useTheme();
    
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            {/* Main content section with fireflies */}
            <div className="w-full relative">
                {/* Fireflies */}
                <div className={`firefly ${darkMode ? 'firefly-dark' : 'firefly-light'}`}></div>
                <div className={`firefly ${darkMode ? 'firefly-dark' : 'firefly-light'}`}></div>
                <div className={`firefly ${darkMode ? 'firefly-dark' : 'firefly-light'}`}></div>
                <div className={`firefly ${darkMode ? 'firefly-dark' : 'firefly-light'}`}></div>
                <div className={`firefly ${darkMode ? 'firefly-dark' : 'firefly-light'}`}></div>
                <div className={`firefly ${darkMode ? 'firefly-dark' : 'firefly-light'}`}></div>
                <div className={`firefly ${darkMode ? 'firefly-dark' : 'firefly-light'}`}></div>
                <div className={`firefly ${darkMode ? 'firefly-dark' : 'firefly-light'}`}></div>
                <div className={`firefly ${darkMode ? 'firefly-dark' : 'firefly-light'}`}></div>
                <div className={`firefly ${darkMode ? 'firefly-dark' : 'firefly-light'}`}></div>
                <div className={`firefly ${darkMode ? 'firefly-dark' : 'firefly-light'}`}></div>
                <div className={`firefly ${darkMode ? 'firefly-dark' : 'firefly-light'}`}></div>
                <div className={`firefly ${darkMode ? 'firefly-dark' : 'firefly-light'}`}></div>
                <div className={`firefly ${darkMode ? 'firefly-dark' : 'firefly-light'}`}></div>
                <div className={`firefly ${darkMode ? 'firefly-dark' : 'firefly-light'}`}></div>
                
                {/* Text content */}
                <div className="relative z-10">
                    <h1 className={`text-5xl md:text-7xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        ¡Bienvenido a MNSLVS Solutions! <br />
                    </h1>
                    <p className={`text-xl md:text-2xl text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Impulsando el Éxito de las PYMES a través de Soluciones Tecnológicas
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;