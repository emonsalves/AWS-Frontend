import { useTheme } from '../../context/ThemeContext';

const ContainerContact = () => {
    const { darkMode } = useTheme();

    const handleWhatsAppClick = () => {
        // Replace with your actual WhatsApp number
        const phoneNumber = '56912345678';
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleEmailClick = () => {
        // Replace with your actual email
        const email = 'contacto@tuempresa.com';
        window.location.href = `mailto:${email}`;
    };

    return (
        <>
            <div className={`flex flex-wrap border ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-400 bg-gray-100'} shadow-custom-dark rounded-2xl flex-col w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mx-auto animate-fade-up animate-once mt-16 sm:mt-18 md:mt-16 lg:mt-12 mb-6 sm:mb-8 lg:mb-10 backdrop-blur-sm px-2 sm:px-4 lg:px-0`}>

            <h1 className={`my-2 sm:my-3 lg:my-5 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl animate-fade animate-once text-center px-1 sm:px-2 md:px-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                <i className="fa-regular fa-envelope"></i> Contáctanos
            </h1>

            <hr className={darkMode ? 'border-gray-700' : 'border-gray-300'} />

            <div className="flex flex-col lg:flex-row p-1 sm:p-3 md:p-4 lg:p-6 gap-3 lg:gap-6">
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <div className="card-title">
                        <h2 className={`font-semibold my-2 sm:my-3 lg:my-4 text-base sm:text-lg md:text-xl lg:text-2xl animate-fade animate-once text-center px-1 sm:px-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            ¿Necesitas ayuda? <br />¡Estamos aquí para ti!
                        </h2>
                    </div>
                    <div className="card-text">
                        <p className={`text-xs sm:text-sm lg:text-base animate-fade-left animate-once mx-1 sm:mx-2 md:mx-4 lg:mx-6 text-justify leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            En MNSLVS, nos enorgullece ofrecer un servicio al cliente excepcional. 
                            Nuestro equipo está listo para responder tus preguntas y ayudarte 
                            a encontrar las soluciones tecnológicas perfectas para tu negocio.
                        </p>
                        <div className="flex justify-center mt-3 sm:mt-4 lg:mt-6">
                            <img 
                                src="./contact-support.svg" 
                                alt="Soporte al Cliente" 
                                className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain animate-fade-up animate-once"
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center">
                    <div className="space-y-3 sm:space-y-4 lg:space-y-5 px-1 sm:px-2 md:px-4 lg:px-6">
                        <div className={`p-3 sm:p-4 lg:p-5 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-white'} shadow-lg`}>
                            <h3 className={`text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                <i className="far fa-clock"></i> Horario de Atención
                            </h3>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-3 sm:mb-4 lg:mb-5 text-sm sm:text-base lg:text-lg`}>
                                Lunes a Viernes: 9:00 AM - 6:00 PM
                            </p>
                            <div className="space-y-2 sm:space-y-3">
                                <button
                                    onClick={handleWhatsAppClick}
                                    className={`w-full py-2 sm:py-3 lg:py-3 px-3 sm:px-4 lg:px-5 rounded-lg flex items-center justify-center space-x-2 ${
                                        darkMode 
                                            ? 'bg-green-600 hover:bg-green-700 text-white' 
                                            : 'bg-green-500 hover:bg-green-600 text-white'
                                    } transition-all duration-300 transform hover:scale-105 shadow-lg`}
                                >
                                    <i className="fab fa-whatsapp text-lg sm:text-xl"></i>
                                    <span className="font-semibold text-xs sm:text-sm lg:text-base truncate">Contactar por WhatsApp</span>
                                </button>

                                <button
                                    onClick={handleEmailClick}
                                    className={`w-full py-2 sm:py-3 lg:py-3 px-3 sm:px-4 lg:px-5 rounded-lg flex items-center justify-center space-x-2 ${
                                        darkMode 
                                            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                                    } transition-all duration-300 transform hover:scale-105 shadow-lg`}
                                >
                                    <i className="far fa-envelope text-lg sm:text-xl"></i>
                                    <span className="font-semibold text-xs sm:text-sm lg:text-base truncate">Enviar Email</span>
                                </button>
                            </div>
                        </div>
                        
                        <div className={`p-3 sm:p-4 lg:p-5 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-white'} shadow-lg`}>
                            <h3 className={`text-base sm:text-lg lg:text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                <i className="fas fa-map-marker-alt"></i> Ubicación
                            </h3>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base lg:text-lg`}>
                                Santiago, Chile
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export { ContainerContact };
