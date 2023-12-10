import { useState } from "react";
import PropTypes from "prop-types";

const TabAbout = ({ colorNumber }) => {
    const [openTab, setOpenTab] = useState(1);

    const colorTabOpen = [
        "text-lg font-bold uppercase px-5 py-3 shadow-lg border-gray-400 border rounded-lg block leading-normal bg-blue-600 text-white",
        "text-lg font-bold uppercase px-5 py-3 shadow-lg border-gray-400 border rounded-lg block leading-normal bg-red-600",
        "text-lg font-bold uppercase px-5 py-3 shadow-lg border-gray-400 border rounded-lg block leading-normal bg-green-600",
        "text-lg font-bold uppercase px-5 py-3 shadow-lg border-gray-400 border rounded-lg block leading-normal bg-yellow-600",
        "text-lg font-bold uppercase px-5 py-3 shadow-lg border-gray-400 border rounded-lg block leading-normal bg-purple-600",
        "text-lg font-bold uppercase px-5 py-3 shadow-lg border-gray-400 border rounded-lg block leading-normal bg-pink-600",
        "text-lg font-bold uppercase px-5 py-3 shadow-lg border-gray-400 border rounded-lg block leading-normal bg-gray-600",
    ];

    const colorTabClosed = [
        "text-md font-bold uppercase px-5 py-3 shadow-lg border-gray-400 bg-gray-300 opacity-70 border rounded-lg block leading-normal text-blue-900",
        "text-md font-bold uppercase px-5 py-3 shadow-lg border-gray-400 bg-gray-300 opacity-70 border rounded-lg block leading-normal text-red-900",
        "text-md font-bold uppercase px-5 py-3 shadow-lg border-gray-400 bg-gray-300 opacity-70 border rounded-lg block leading-normal text-green-900",
        "text-md font-bold uppercase px-5 py-3 shadow-lg border-gray-400 bg-gray-300 opacity-70 border rounded-lg block leading-normal text-yellow-900",
        "text-md font-bold uppercase px-5 py-3 shadow-lg border-gray-400 bg-gray-300 opacity-70 border rounded-lg block leading-normal text-purple-900",
        "text-md font-bold uppercase px-5 py-3 shadow-lg border-gray-400 bg-gray-300 opacity-70 border rounded-lg block leading-normal text-pink-900",
        "text-md font-bold uppercase px-5 py-3 shadow-lg border-gray-400 bg-gray-300 opacity-70 border rounded-lg block leading-normal text-gray-900",
    ];

    let isTabOpen = colorTabOpen[colorNumber] || `text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-blue-500`;
    let isTabClosed = colorTabClosed[colorNumber] || `text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-blue-500`;

    return (
        <>
            <div className="flex flex-wrap shadow-custom-dark border border-gray-400 rounded-lg sm:flex-col bg-gray-100 w-[80%] animate-fade-up animate-once">
                <div className="w-full mt-1">
                    <ul className="flex flex-wrap p-4 flex-row rounded-lg justify-center items-center gap-2">
                        <li className="flex-auto text-center hover:scale-[101%] hover:opacity-80 transition-all duration-300">
                            <a
                                className={openTab === 1 ? `${isTabOpen}` : `${isTabClosed}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                name="mision"
                            >
                                <i className="fas fa-space-shuttle text-base mr-1"></i> Mision:
                            </a>
                        </li>
                        <li className="flex-auto text-center hover:scale-[101%] hover:opacity-80 transition-all duration-300">
                            <a
                                className={openTab == 2 ? `${isTabOpen}` : `${isTabClosed}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                name="vision"
                            >
                                <i className="fas fa-cog text-base mr-1"></i> Visión:
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col break-words bg-gray-100 w-full shadow-lg rounded-b-lg text-black">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space animate-fade animate-ease-linear animate-normal animate-fill-forwards animate-duration-1000">
                                <div className={openTab == 1 ? "block" : "hidden"} id="link1">
                                    <p className="animate-fade animate-ease-linear animate-normal animate-fill-forwards">
                                        En MNSLVS Solutions, nuestra misión es simple pero crucial: empoderar a las PYMES a través de la tecnología.
                                        <br></br><br></br>Buscamos proporcionar soluciones que no solo mejoren la eficiencia operativa, sino que también impulsen el
                                        crecimiento sostenible de nuestros clientes.
                                    </p>
                                </div>
                                <div className={openTab == 2 ? "block" : "hidden"} id="link2">
                                    <p className="animate-fade animate-ease-linear animate-normal animate-fill-forwards">
                                        Nos visualizamos como la principal elección para aquellas empresas y emprendedores que buscan soluciones
                                        tecnológicas avanzadas y personalizadas.
                                        <br /> <br /> Aspiramos a ser reconocidos por nuestra excelencia en el diseño, desarrollo y mantenimiento de
                                        aplicaciones web, así como por nuestra capacidad para adaptarnos a las cambiantes tendencias tecnológicas.
                                        <br /> <br />
                                        Buscamos ser un motor de innovación que impulse el crecimiento sostenible de nuestros clientes en la era
                                        digital.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

TabAbout.propTypes = {
    colorNumber: PropTypes.string.isRequired,
};

export default TabAbout;
