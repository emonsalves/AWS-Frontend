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
        <div className={`flex flex-wrap border ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-400 bg-gray-100'} shadow-custom-dark rounded-2xl flex-col w-[95%] max-w-7xl mx-auto animate-fade-up animate-once mt-12 mb-2 backdrop-blur-sm`}>
            <h1 className={`my-5 font-bold text-4xl animate-fade animate-once text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                <i className="fa-regular fa-envelope"></i> Contáctanos
            </h1>

            <hr className={darkMode ? 'border-gray-700' : 'border-gray-300'} />

            <div className="flex flex-col lg:flex-row p-8">
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <div className="card-title">
                        <h2 className={`font-semibold my-5 text-3xl animate-fade animate-once text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            ¿Necesitas ayuda? <br />¡Estamos aquí para ti!
                        </h2>
                    </div>
                    <div className="card-text">
                        <p className={`text-lg animate-fade-left animate-once mx-10 text-justify leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            En MNSLVS, nos enorgullece ofrecer un servicio al cliente excepcional. 
                            Nuestro equipo está listo para responder tus preguntas y ayudarte 
                            a encontrar las soluciones tecnológicas perfectas para tu negocio.
                        </p>
                        <div className="flex justify-center mt-8">
                            <img 
                                src="./contact-support.svg" 
                                alt="Soporte al Cliente" 
                                className="w-64 h-64 object-contain animate-fade-up animate-once"
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center">
                    <div className="space-y-6 px-8">
                        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-white'} shadow-lg`}>
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                <i className="far fa-clock"></i> Horario de Atención
                            </h3>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 text-lg`}>
                                Lunes a Viernes: 9:00 AM - 6:00 PM
                            </p>
                            <div className="space-y-4">
                                <button
                                    onClick={handleWhatsAppClick}
                                    className={`w-full py-4 px-6 rounded-lg flex items-center justify-center space-x-3 ${
                                        darkMode 
                                            ? 'bg-green-600 hover:bg-green-700 text-white' 
                                            : 'bg-green-500 hover:bg-green-600 text-white'
                                    } transition-all duration-300 transform hover:scale-105 shadow-lg`}
                                >
                                    <i className="fab fa-whatsapp text-2xl"></i>
                                    <span className="font-semibold text-lg">Contactar por WhatsApp</span>
                                </button>

                                <button
                                    onClick={handleEmailClick}
                                    className={`w-full py-4 px-6 rounded-lg flex items-center justify-center space-x-3 ${
                                        darkMode 
                                            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                                    } transition-all duration-300 transform hover:scale-105 shadow-lg`}
                                >
                                    <i className="far fa-envelope text-2xl"></i>
                                    <span className="font-semibold text-lg">Enviar Email</span>
                                </button>
                            </div>
                        </div>
                        
                        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-white'} shadow-lg`}>
                            <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                <i className="fas fa-map-marker-alt"></i> Ubicación
                            </h3>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
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
