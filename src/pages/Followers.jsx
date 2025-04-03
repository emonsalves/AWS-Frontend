import { useJsonFileUpload } from "../helpers/jsonFile";
import { useTheme } from '../context/ThemeContext';
import FileInput from "../components/inputs/FileInput";
import { useState } from "react";
import Accordion from "../components/accordion/Accordion";

const Followers = () => {
    const { darkMode } = useTheme();
    const dataFollowers = useJsonFileUpload()
    const dataFollowing = useJsonFileUpload()
    const dataList = useJsonFileUpload()
    const [comunidad, setComunidad] = useState([]);
    const [dontFollowYou, setDontFollowYou] = useState([]);
    const [youDontFollow, setYouDontFollow] = useState([]);
    const [nothingFollow, setNothingFollow] = useState([]);
    const [inputKeys, setInputKeys] = useState({
        followers: Date.now() + "-followers",
        following: Date.now() + "-following",
        list: Date.now() + "-list",
    });

    const clear = () => {
        setComunidad([]);
        setDontFollowYou([]);
        setYouDontFollow([]);
        setNothingFollow([]);
        dataFollowers.clearJsonData();
        dataFollowing.clearJsonData();
        dataList.clearJsonData();

        setInputKeys({
            followers: Date.now() + "-followers",
            following: Date.now() + "-following",
            list: Date.now() + "-list",
        });
    }

    const action = () => {
        if (!dataFollowers.jsonData || !dataFollowing.jsonData || !dataList.jsonData) {
            alert("Por favor, sube todos los archivos JSON.");
            return;
        }
        if (dataFollowers.error || dataFollowing.error || dataList.error) {
            alert("Por favor, sube archivos JSON válidos.");
            return;
        }

        const followers = dataFollowers.jsonData.map(item => {
            if (item.string_list_data && item.string_list_data.length > 0) {
                return {
                    href: item.string_list_data[0].href,
                    value: item.string_list_data[0].value
                };
            } else {
                return null;
            }
        }).filter(item => item !== null);


        const following = dataFollowing.jsonData.relationships_following.map(item => {
            if (item.string_list_data && item.string_list_data.length > 0) {
                return {
                    href: item.string_list_data[0].href,
                    value: item.string_list_data[0].value
                };
            } else {
                return null;
            }
        }).filter(item => item !== null);

        const dataComunidad = dataList.jsonData.comunidad.map(item => {
            const foundInFollowers = followers.find(follower => follower.value === item);
            const foundInFollowing = following.find(follow => follow.value === item);
            return {
                value: item,
                foundInFollowers: !!foundInFollowers,
                foundInFollowing: !!foundInFollowing
            };
        });

        const dataNotFollowYou = dataList.jsonData.comunidad.map(item => {
            const foundInFollowers = followers.find(follower => follower.value === item);
            const foundInFollowing = following.find(follow => follow.value === item);
            if (!foundInFollowers) {
                return {
                    value: item,
                    foundInFollowers: foundInFollowers,
                    foundInFollowing: foundInFollowing
                };
            }
            return null;
        }).filter(item => item !== null);

        const dataYouDontFollow = dataList.jsonData.comunidad.map(item => {
            const foundInFollowers = followers.find(follower => follower.value === item);
            const foundInFollowing = following.find(follow => follow.value === item);
            if (!foundInFollowing) {
                return {
                    value: item,
                    foundInFollowers: foundInFollowers,
                    foundInFollowing: foundInFollowing
                };
            }
            return null;
        }
        ).filter(item => item !== null);

        const dataNothingFollow = dataList.jsonData.comunidad.map(item => {
            const foundInFollowers = followers.find(follower => follower.value === item);
            const foundInFollowing = following.find(follow => follow.value === item);
            if (!foundInFollowers && !foundInFollowing) {
                return {
                    value: item,
                    foundInFollowers: foundInFollowers,
                    foundInFollowing: foundInFollowing
                };
            }
            return null;
        }
        ).filter(item => item !== null);


        setComunidad(dataComunidad);
        setDontFollowYou(dataNotFollowYou);
        setYouDontFollow(dataYouDontFollow);
        setNothingFollow(dataNothingFollow);
    }

    return (
        <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
            <h1 className={`text-3xl font-semibold text-center mb-2 rounded-lg  ${darkMode
                ? 'text-white'
                : 'bg-white border-gray-300 text-gray-900'}`}>Sube tus archivos JSON</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FileInput
                    key={inputKeys.followers}
                    darkMode={darkMode}
                    title='Seguidores'
                    handleFileUpload={dataFollowers.handleFileUpload}
                    error={dataFollowers.error}
                    jsonData={dataFollowers.jsonData}
                />
                <FileInput
                    key={inputKeys.following}
                    darkMode={darkMode}
                    title='Seguidos'
                    handleFileUpload={dataFollowing.handleFileUpload}
                    error={dataFollowing.error}
                    jsonData={dataFollowing.jsonData}
                />
                <FileInput
                    key={inputKeys.list}
                    darkMode={darkMode}
                    title='Listado'
                    handleFileUpload={dataList.handleFileUpload}
                    error={dataList.error}
                    jsonData={dataList.jsonData}
                />
            </div>
            <div className="text-center md:text-left mt-6">
                <button className="w-full bg-[#25D366] hover:bg-[#128C7E] px-6 py-3 text-white font-medium rounded-lg transition-colors duration-200"
                    type="button"
                    onClick={action}
                >
                    Realizar Análisis
                </button>
            </div>
            {comunidad.length > 0 && (
                <div className="mt-6">
                    <h2 className={`text-xl font-semibold mb-4 text-center ${darkMode
                        ? 'text-white'
                        : 'bg-white border-gray-300 text-gray-900'}`}>Resultados del Análisis</h2>
                </div>
            )}
            {comunidad.length > 0 && (
                <Accordion title={`Resultado General (${comunidad.length} perfiles)`} darkMode={darkMode}>
                    <div className="overflow-x-auto">
                        <table className={`min-w-full bg-white border border-gray-300 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : ''}`}>
                            <thead>
                                <tr className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                    <th className="px-4 py-2">#</th>
                                    <th className="px-4 py-2">Comunidad</th>
                                    <th className="px-4 py-2">Te sigue</th>
                                    <th className="px-4 py-2">Lo sigues</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comunidad.map((item, index) => (
                                    <tr key={index} className={`${darkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'} hover:bg-gray-100`}>
                                        <td className="px-4 py-2 text-center"> {index + 1}</td>
                                        <td className="px-4 py-2 text-center">
                                            <a href={`https://www.instagram.com/${item.value}`} target="_blank" rel="noopener noreferrer" className={`text-blue-500 hover:underline ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                                                {item.value}
                                            </a>
                                        </td>
                                        <td className={`px-4 py-2 text-center ${item.foundInFollowers ? 'text-green-500' : 'text-red-500'}`}>{item.foundInFollowers ? 'Sí' : 'No'}</td>
                                        <td className={`px-4 py-2 text-center ${item.foundInFollowing ? 'text-green-500' : 'text-red-500'}`}>{item.foundInFollowing ? 'Sí' : 'No'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Accordion>
            )}
            {dontFollowYou.length > 0 && (
                <Accordion title={`No te siguen (${dontFollowYou.length})`} darkMode={darkMode}>
                    <div className="overflow-x-auto">
                        <table className={`min-w-full bg-white border border-gray-300 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : ''}`}>
                            <thead>
                                <tr className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                    <th className="px-4 py-2">#</th>
                                    <th className="px-4 py-2">Comunidad</th>
                                    <th className="px-4 py-2">Te sigue</th>
                                    <th className="px-4 py-2">Lo sigues</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dontFollowYou.map((item, index) => (
                                    <tr key={index} className={`${darkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'} hover:bg-gray-100`}>
                                        <td className="px-4 py-2 text-center"> {index + 1}</td>
                                        <td className="px-4 py-2 text-center">
                                            <a href={`https://www.instagram.com/${item.value}`} target="_blank" rel="noopener noreferrer" className={`text-blue-500 hover:underline ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                                                {item.value}
                                            </a>
                                        </td>
                                        <td className={`px-4 py-2 text-center ${item.foundInFollowers ? 'text-green-500' : 'text-red-500'}`}>{item.foundInFollowers ? 'Sí' : 'No'}</td>
                                        <td className={`px-4 py-2 text-center ${item.foundInFollowing ? 'text-green-500' : 'text-red-500'}`}>{item.foundInFollowing ? 'Sí' : 'No'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Accordion>
            )}
            {youDontFollow.length > 0 && (
                <Accordion title={`No los sigues (${youDontFollow.length})`} darkMode={darkMode}>
                    <div className="overflow-x-auto">
                        <table className={`min-w-full bg-white border border-gray-300 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : ''}`}>
                            <thead>
                                <tr className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                    <th className="px-4 py-2">#</th>
                                    <th className="px-4 py-2">Comunidad</th>
                                    <th className="px-4 py-2">Te sigue</th>
                                    <th className="px-4 py-2">Lo sigues</th>
                                </tr>
                            </thead>
                            <tbody>
                                {youDontFollow.map((item, index) => (
                                    <tr key={index} className={`${darkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'} hover:bg-gray-100`}>
                                        <td className="px-4 py-2 text-center"> {index + 1}</td>
                                        <td className="px-4 py-2 text-center">
                                            <a href={`https://www.instagram.com/${item.value}`} target="_blank" rel="noopener noreferrer" className={`text-blue-500 hover:underline ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                                                {item.value}
                                            </a>
                                        </td>
                                        <td className={`px-4 py-2 text-center ${item.foundInFollowers ? 'text-green-500' : 'text-red-500'}`}>{item.foundInFollowers ? 'Sí' : 'No'}</td>
                                        <td className={`px-4 py-2 text-center ${item.foundInFollowing ? 'text-green-500' : 'text-red-500'}`}>{item.foundInFollowing ? 'Sí' : 'No'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Accordion>
            )}
            {nothingFollow.length > 0 && (
                <Accordion title={`No te siguen y no los sigues (${nothingFollow.length})`} darkMode={darkMode}>
                    <div className="overflow-x-auto">
                        <table className={`min-w-full bg-white border border-gray-300 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : ''}`}>
                            <thead>
                                <tr className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                    <th className="px-4 py-2">#</th>
                                    <th className="px-4 py-2">Comunidad</th>
                                    <th className="px-4 py-2">Te sigue</th>
                                    <th className="px-4 py-2">Lo sigues</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nothingFollow.map((item, index) => (
                                    <tr key={index} className={`${darkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'} hover:bg-gray-100`}>
                                        <td className="px-4 py-2 text-center"> {index + 1}</td>
                                        <td className="px-4 py-2 text-center">
                                            <a href={`https://www.instagram.com/${item.value}`} target="_blank" rel="noopener noreferrer" className={`text-blue-500 hover:underline ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                                                {item.value}
                                            </a>
                                        </td>
                                        <td className={`px-4 py-2 text-center ${item.foundInFollowers ? 'text-green-500' : 'text-red-500'}`}>{item.foundInFollowers ? 'Sí' : 'No'}</td>
                                        <td className={`px-4 py-2 text-center ${item.foundInFollowing ? 'text-green-500' : 'text-red-500'}`}>{item.foundInFollowing ? 'Sí' : 'No'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Accordion>
            )}
            <div className="mt-6 text-center">
                <button className={`w-full bg-[#e91e1e] hover:bg-[#992929] px-6 py-3 text-white font-medium rounded-lg transition-colors duration-200}`} type="button"
                    onClick={clear}>
                    Limpiar Resultados
                </button>
            </div>
            <div className="mt-6 text-center text-white text-sm">
                <p>Esta herramienta te permite analizar tus seguidores y seguidos en Instagram.</p>
                <p>Asegúrate de subir archivos JSON válidos para obtener resultados precisos.</p>
                <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
            </div>
        </div>
    );
};

export default Followers;