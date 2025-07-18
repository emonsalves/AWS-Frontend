import { useTheme } from '../../context/ThemeContext';

const ContainerAbout = () => {
    const { darkMode } = useTheme();
    
    return (
        <>

            <div className={`flex flex-wrap border ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-400 bg-gray-100'} shadow-custom-dark rounded-2xl flex-col w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mx-auto animate-fade-up animate-once mt-2 mb-6 backdrop-blur-sm px-2 sm:px-4 lg:px-0`}>
                <h1 className={`my-3 sm:my-4 lg:my-5 font-bold text-xl sm:text-2xl lg:text-3xl animate-fade animate-once text-center px-2 sm:px-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    <i className="fa-regular fa-address-card"></i> Acerca de Nosotros
                </h1>

                <hr className={darkMode ? 'border-gray-700' : 'border-gray-300'} />

                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-6 lg:mb-0">
                        <div className="card-title">
                            <h2 className={`font-semibold my-3 sm:my-4 lg:my-5 text-lg sm:text-xl lg:text-2xl animate-fade animate-once text-center px-2 sm:px-4 lg:px-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                Impulsando el Éxito de las PYMES a través de la Tecnología
                            </h2>
                        </div>
                        <div className="card-image flex justify-center">
                            <img className="p-3 sm:p-4 lg:p-5 rounded-lg drop-shadow-lg max-w-full h-auto w-48 sm:w-56 lg:w-64" src="./imagenDev.png" alt="MNSLVS Solutions" />
                        </div>
                    </div>

                    <div className="card-text lg:w-1/2 lg:pl-6">
                        <p className={`text-sm sm:text-base lg:text-lg animate-fade-left animate-once mx-4 sm:mx-6 lg:mx-8 text-justify leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Somos tu aliado estratégico en Tecnología, especialmente diseñado para potenciar el éxito de las pequeñas y medianas
                            empresas (PYMES)!
                            <br /> <br /> En MNSLVS, entendemos las necesidades únicas de las PYMES y nos comprometemos a ofrecer soluciones
                            tecnológicas efectivas y asequibles.
                        </p>
                    </div>
                </div>
            </div>

            <div className={`flex flex-col md:flex-row border ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-400 bg-gray-100'} shadow-custom-dark rounded-2xl w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mx-auto animate-fade-up animate-once mt-4 sm:mt-6 mb-6 sm:mb-8 lg:mb-10 backdrop-blur-sm px-2 sm:px-4 lg:px-0`}>
                <div className="flex flex-col md:w-1/2 p-3 sm:p-4 lg:p-6">
                    <h2 className={`my-3 sm:my-4 lg:my-5 font-semibold text-lg sm:text-xl lg:text-2xl animate-fade animate-once text-center px-2 sm:px-4 lg:px-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        <i className="fa-solid fa-landmark-dome"></i> Nuestra Historia:
                    </h2>

                    <hr className={`${darkMode ? 'border-gray-700' : 'border-gray-300'} mb-4`} />

                    <p className={`text-sm sm:text-base lg:text-lg animate-fade-left animate-once mx-2 sm:mx-4 lg:mx-6 text-justify leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        MNSLVS Solutions fue fundada en 2021 por un grupo de amigos y colegas que se conocieron en la universidad. Después de
                        graduarse, cada uno de nosotros se embarcó en diferentes caminos profesionales, pero siempre mantuvimos el contacto y
                        compartimos el mismo sueño: crear una empresa que pudiera ayudar a las PYMES a aprovechar al máximo la tecnología.
                        <br />
                        <br />
                        En 2023, decidimos unir fuerzas y hacer realidad nuestro sueño. Así nació MNSLVS Solutions.
                    </p>
                </div>

                <div className="flex flex-col md:w-1/2 p-3 sm:p-4 lg:p-6">
                    <h2 className={`my-3 sm:my-4 lg:my-5 font-semibold text-lg sm:text-xl lg:text-2xl animate-fade animate-once text-center px-2 sm:px-4 lg:px-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        <i className="fa-solid fa-bullseye"></i> Nuestra Misión:
                    </h2>
                    <hr className={`${darkMode ? 'border-gray-700' : 'border-gray-300'} mb-4`} />
                    <p className={`text-sm sm:text-base lg:text-lg animate-fade-left animate-once mx-2 sm:mx-4 lg:mx-6 text-justify leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        En MNSLVS Solutions, nuestra misión es simple pero crucial: empoderar a las PYMES a través de la tecnología. <br /> <br />
                        Buscamos proporcionar soluciones que no solo mejoren la eficiencia operativa, sino que también impulsen el crecimiento
                        sostenible de nuestros clientes.
                    </p>
                </div>
            </div>

            <div className={`flex flex-wrap border ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-400 bg-gray-100'} shadow-custom-dark rounded-2xl flex-col w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mx-auto animate-fade-up animate-once mt-4 sm:mt-6 mb-6 sm:mb-8 lg:mb-10 backdrop-blur-sm px-2 sm:px-4 lg:px-0`}>
                <h2 className={`my-3 sm:my-4 lg:my-5 font-semibold text-lg sm:text-xl lg:text-2xl animate-fade animate-once text-center px-2 sm:px-4 lg:px-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    <i className="fa-solid fa-users-gear"></i> Servicios Especializados para PYMES:
                </h2>

                <hr className={`${darkMode ? 'border-gray-700' : 'border-gray-300'} mb-6`} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4 lg:px-6 mb-6">
                    {/* Card 1 */}
                    <div className="transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                        <div className={`border p-4 sm:p-5 lg:p-6 rounded-2xl shadow-md h-full flex flex-col ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
                            <h3 className={`text-base sm:text-lg lg:text-xl text-center font-semibold mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                Desarrollo Web Personalizado:
                            </h3>
                            <img src="https://i.postimg.cc/RFmSPRQ6/dise-o.jpg" alt="Desarrollo Web" className="mb-3 sm:mb-4 rounded-md w-full h-32 sm:h-40 object-cover" />
                            <p className={`text-xs sm:text-sm lg:text-base flex-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                Creamos sitios web atractivos y funcionales que se adaptan a las necesidades específicas de tu PYME.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                        <div className={`border p-4 sm:p-5 lg:p-6 rounded-2xl shadow-md h-full flex flex-col ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
                            <h3 className={`text-base sm:text-lg lg:text-xl text-center font-semibold mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                Automatización de Procesos:
                            </h3>
                            <img src="https://i.postimg.cc/hj0SNdpC/auto.png" alt="Automatización" className="mb-3 sm:mb-4 rounded-md w-full h-32 sm:h-40 object-cover" />
                            <p className={`text-xs sm:text-sm lg:text-base flex-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                Implementamos soluciones que simplifican y automatizan tareas, liberando tiempo para que te concentres en hacer crecer
                                tu negocio.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl md:col-span-2 lg:col-span-1">
                        <div className={`border p-4 sm:p-5 lg:p-6 rounded-2xl shadow-md h-full flex flex-col ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
                            <h3 className={`text-base sm:text-lg lg:text-xl text-center font-semibold mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                Asesoramiento Tecnológico:
                            </h3>
                            <img src="https://i.postimg.cc/vmf8Lj9w/aseso.jpg" alt="Asesoramiento" className="mb-3 sm:mb-4 rounded-md w-full h-32 sm:h-40 object-cover" />
                            <p className={`text-xs sm:text-sm lg:text-base flex-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                Ofrecemos orientación experta sobre las últimas tendencias tecnológicas y cómo pueden beneficiar a tu PYME.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`flex flex-wrap border ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-400 bg-gray-100'} shadow-custom-dark rounded-2xl flex-col w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mx-auto animate-fade-up animate-once mt-6 sm:mt-8 lg:mt-10 mb-6 sm:mb-8 lg:mb-10 backdrop-blur-sm`}>
                <h2 className={`my-3 sm:my-4 lg:my-5 font-semibold text-lg sm:text-xl lg:text-2xl animate-fade animate-once text-center px-2 sm:px-4 lg:px-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    <i className="fa-solid fa-hand-holding-heart"></i> Compromiso con la Calidad y la Eficiencia:
                </h2>

                <hr className={`${darkMode ? 'border-gray-700' : 'border-gray-300'} mb-4 sm:mb-6`} />

                <div className="px-2 sm:px-4 lg:px-10 pb-6 sm:pb-8 lg:pb-10">
                    <p className={`text-xs sm:text-sm lg:text-base animate-fade-left animate-once text-justify leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        La calidad y la eficiencia son fundamentales en cada proyecto que emprendemos. Nos esforzamos por ofrecer soluciones que no solo
                        cumplen con tus expectativas, sino que también superan cualquier desafío que tu PYME pueda enfrentar. 
                    </p>
                    
                    <p className={`text-xs sm:text-sm lg:text-base animate-fade-left animate-once text-justify leading-relaxed mt-3 sm:mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        En MNSLVS Solutions, nos emociona ser parte del crecimiento de las PYMES.
                    </p>
                    
                    <p className={`text-xs sm:text-sm lg:text-base animate-fade-left animate-once text-justify leading-relaxed mt-3 sm:mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Si buscas un socio tecnológico dedicado y enfocado en el éxito de tu empresa, ¡estamos aquí para ayudarte a alcanzar nuevas
                        alturas!
                    </p>

                    {/* Nueva sección CTA integrada */}
                    <div className="mt-6 sm:mt-8 lg:mt-10 text-center">
                        <div className={`border-t pt-6 sm:pt-8 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                            <h3 className={`font-bold text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                ¿Listo para Transformar tu PYME?
                            </h3>
                            
                            <p className={`text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Únete a las empresas que ya han modernizado sus procesos con nuestras soluciones tecnológicas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { ContainerAbout };
