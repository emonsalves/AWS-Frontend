const ContainerAbout = () => {
    return (
        <>
            <div className="flex flex-wrap border border-gray-400 shadow-custom-dark rounded-2xl flex-col bg-gray-100 w-[85%] animate-fade-up animate-once mt-4 mb-10">
                <h1 className="text-black my-5 font-bold text-3xl animate-fade animate-once text-center">
                    <i className="fa-regular fa-address-card"></i> Acerca de Nosotros
                </h1>

                <hr />

                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2">
                        <div className="card-title">
                            <h2 className="text-black font-semibold my-5 text-2xl animate-fade animate-once text-center m-5">
                                Impulsando el Éxito de las PYMES a través de la Tecnología
                            </h2>
                        </div>
                        <div className="card-image flex justify-center">
                            <img className="p-5 rounded-lg drop-shadow-lg" src="./imagenDev.png" alt="MNSLVS Solutions" />
                        </div>
                    </div>

                    <div className="card-text lg:w-1/2">
                        <p className="text-black text-md animate-fade-left animate-once m-10 text-justify">
                            Somos tu aliado estratégico en Tecnología, especialmente diseñado para potenciar el éxito de las pequeñas y medianas
                            empresas (PYMES)!
                            <br /> <br /> En MNSLVS, entendemos las necesidades únicas de las PYMES y nos comprometemos a ofrecer soluciones
                            tecnológicas efectivas y asequibles.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col"></div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row border border-gray-400 shadow-custom-dark rounded-2xl bg-gray-100 w-[85%] animate-fade-up animate-once mt-4 mb-10">
                <div className="flex flex-col md:w-1/2">
                    <h2 className="text-black my-5 font-semibold text-2xl animate-fade animate-once text-center m-5">
                        <i className="fa-solid fa-landmark-dome"></i> Nuestra Historia:
                    </h2>

                    <hr />

                    <p className="text-black text-md animate-fade-left animate-once m-10 text-justify">
                        MNSLVS Solutions fue fundada en 2021 por un grupo de amigos y colegas que se conocieron en la universidad. Después de
                        graduarse, cada uno de nosotros se embarcó en diferentes caminos profesionales, pero siempre mantuvimos el contacto y
                        compartimos el mismo sueño: crear una empresa que pudiera ayudar a las PYMES a aprovechar al máximo la tecnología.
                        <br />
                        <br />
                        En 2023, decidimos unir fuerzas y hacer realidad nuestro sueño. Así nació MNSLVS Solutions.
                    </p>
                </div>

                <div className="flex flex-col md:w-1/2">
                    <h2 className="text-black my-5 font-semibold text-2xl animate-fade animate-once text-center m-5">
                        <i className="fa-solid fa-bullseye"></i> Nuestra Misión:
                    </h2>
                    <hr />
                    <p className="text-black text-md animate-fade-left animate-once m-10 text-justify">
                        En MNSLVS Solutions, nuestra misión es simple pero crucial: empoderar a las PYMES a través de la tecnología. <br /> <br />
                        Buscamos proporcionar soluciones que no solo mejoren la eficiencia operativa, sino que también impulsen el crecimiento
                        sostenible de nuestros clientes.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap border border-gray-400 shadow-custom-dark rounded-2xl flex-col bg-gray-100 w-[85%] animate-fade-up animate-once mt-4 mb-10">
                <h2 className="text-black my-5 font-semibold text-2xl animate-fade animate-once text-center m-5">
                    <i className="fa-solid fa-users-gear"></i> Servicios Especializados para PYMES:
                </h2>

                <hr />

                <div className="flex flex-wrap justify-center mb-5">
                    {/* Card 1 */}
                    <div className="max-w-sm m-4 transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
                        <div className="bg-white border border-gray-300 p-6 rounded-2xl shadow-md">
                            <h3 className="text-lg text-black text-center font-semibold mb-2">Desarrollo Web Personalizado:</h3>
                            <img src="https://source.unsplash.com/featured/?web" alt="Desarrollo Web" className="mb-2 rounded-md" />
                            <p className="text-gray-700 text-md">
                                Creamos sitios web atractivos y funcionales que se adaptan a las necesidades específicas de tu PYME.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="max-w-sm m-4 transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
                        <div className="bg-white border border-gray-300 p-6 rounded-2xl shadow-md">
                            <h3 className="text-lg text-black text-center font-semibold mb-2">Automatización de Procesos:</h3>
                            <img src="https://source.unsplash.com/featured/?automation" alt="Automatización" className="mb-2 rounded-md" />
                            <p className="text-gray-700 text-md">
                                Implementamos soluciones que simplifican y automatizan tareas, liberando tiempo para que te concentres en hacer crecer
                                tu negocio.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="max-w-sm m-4 transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
                        <div className="bg-white border border-gray-300 p-6 rounded-2xl shadow-md">
                            <h3 className="text-lg text-black text-center font-semibold mb-2">Asesoramiento Tecnológico:</h3>
                            <img src="https://source.unsplash.com/featured/?technology" alt="Asesoramiento" className="mb-2 rounded-md" />
                            <p className="text-gray-700 text-md">
                                Ofrecemos orientación experta sobre las últimas tendencias tecnológicas y cómo pueden beneficiar a tu PYME.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap border border-gray-400 shadow-custom-dark rounded-2xl flex-col bg-gray-100 w-[85%] animate-fade-up animate-once mt-4 mb-10">
                <h2 className="text-black my-5 font-semibold text-2xl animate-fade animate-once text-center m-5">
                    <i className="fa-solid fa-hand-holding-heart"></i> Compromiso con la Calidad y la Eficiencia:
                </h2>

                <hr />

                <p className="text-black text-md animate-fade-left animate-once m-10 text-justify">
                    La calidad y la eficiencia son fundamentales en cada proyecto que emprendemos. Nos esforzamos por ofrecer soluciones que no solo
                    cumplen con tus expectativas, sino que también superan cualquier desafío que tu PYME pueda enfrentar. <br />
                    <br />
                    En MNSLVS Solutions, nos emociona ser parte del crecimiento de las PYMES. <br />
                    <br />
                    Si buscas un socio tecnológico dedicado y enfocado en el éxito de tu empresa, ¡estamos aquí para ayudarte a alcanzar nuevas
                    alturas!
                </p>
            </div>
        </>
    );
};

export { ContainerAbout };
