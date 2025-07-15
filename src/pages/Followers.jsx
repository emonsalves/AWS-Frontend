import { useJsonFileUpload } from "../helpers/jsonFile";
import { useTheme } from '../context/ThemeContext';
import FileInput from "../components/inputs/FileInput";
import { useState } from "react";
import Accordion from "../components/accordion/Accordion";
import Switch from "../components/switches/Switch";

const Followers = () => {
    const { darkMode } = useTheme();
    const dataFollowers = useJsonFileUpload()
    const dataFollowing = useJsonFileUpload()
    const dataList = useJsonFileUpload()
    const [comunidad, setComunidad] = useState([]);
    const [comunidadDontFollowYou, setComunidadDontFollowYou] = useState([]);
    const [comunidadYouDontFollow, setComunidadYouDontFollow] = useState([]);
    const [comunidadNothingFollow, setComunidadNothingFollow] = useState([]);
    const [myFollowers, setMyFollowers] = useState([]);
    const [myFollowing, setMyFollowing] = useState([]);
    const [myDontFollowMe, setMyDontFollowMe] = useState([]);
    const [myDontFollowHim, setMyDontFollowHim] = useState([]);
    const [isListingActive, setIsListingActive] = useState(true);
    const [inputKeys, setInputKeys] = useState({
        followers: Date.now() + "-followers",
        following: Date.now() + "-following",
        list: Date.now() + "-list",
    });

    const clear = () => {
        setComunidad([]);
        setComunidadDontFollowYou([]);
        setComunidadYouDontFollow([]);
        setComunidadNothingFollow([]);
        setMyFollowers([]);
        setMyFollowing([]);
        setMyDontFollowMe([]);
        setMyDontFollowHim([]);
        dataFollowers.clearJsonData();
        dataFollowing.clearJsonData();
        dataList.clearJsonData();

        setInputKeys({
            followers: Date.now() + "-followers",
            following: Date.now() + "-following",
            list: Date.now() + "-list",
        });
    }

    const toggleListing = () => {
        setIsListingActive(!isListingActive);
    }

    const action = () => {
        // Validar que al menos tenemos followers y following
        if (!dataFollowers.jsonData || !dataFollowing.jsonData) {
            alert("Por favor, sube al menos los archivos de Seguidores y Seguidos.");
            return;
        }
        if (dataFollowers.error || dataFollowing.error) {
            alert("Por favor, sube archivos JSON válidos.");
            return;
        }

        // Si está activo el switch, validar también el listado
        if (isListingActive && !dataList.jsonData) {
            alert("Por favor, sube todos los archivos JSON incluyendo el Listado.");
            return;
        }
        if (isListingActive && dataList.error) {
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

        if (isListingActive) {
            // Análisis basado en la lista de FolloWebeando (modo activo)
            const dataComunidad = dataList.jsonData.comunidad.map(item => {
                const foundInFollowers = followers.find(follower => follower.value === item);
                const foundInFollowing = following.find(follow => follow.value === item);
                return {
                    value: item,
                    foundInFollowers: !!foundInFollowers,
                    foundInFollowing: !!foundInFollowing
                };
            });

            const dataComunidadNotFollowYou = dataList.jsonData.comunidad.map(item => {
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

            const dataComunidadYouDontFollow = dataList.jsonData.comunidad.map(item => {
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
            }).filter(item => item !== null);

            const dataComunidadNothingFollow = dataList.jsonData.comunidad.map(item => {
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
            }).filter(item => item !== null);

            setComunidad(dataComunidad);
            setComunidadDontFollowYou(dataComunidadNotFollowYou);
            setComunidadYouDontFollow(dataComunidadYouDontFollow);
            setComunidadNothingFollow(dataComunidadNothingFollow);
            
            // Limpiar estados del modo inactivo
            setMyFollowers([]);
            setMyFollowing([]);
            setMyDontFollowMe([]);
            setMyDontFollowHim([]);
        } else {
            // Análisis directo de seguidores y seguidos (modo inactivo)
            
            // Quienes te siguen (tus seguidores)
            setMyFollowers(followers);
            
            // A quienes sigues (tus seguidos)
            setMyFollowing(following);
            
            // Quienes sigues pero no te siguen (myDontFollowHim)
            const dontFollowMe = following.filter(followingUser => 
                !followers.some(follower => follower.value === followingUser.value)
            );
            setMyDontFollowHim(dontFollowMe);
            
            // Quienes te siguen pero tu no sigues (myDontFollowMe)
            const iDontFollow = followers.filter(follower => 
                !following.some(followingUser => followingUser.value === follower.value)
            );
            setMyDontFollowMe(iDontFollow);
            
            // Limpiar estados del modo activo
            setComunidad([]);
            setComunidadDontFollowYou([]);
            setComunidadYouDontFollow([]);
            setComunidadNothingFollow([]);
        }
    }

    return (
        <div className={`min-h-screen w-full flex flex-col items-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
            <div className={`container max-w-7xl mx-auto px-4 pt-16 pb-8 ${darkMode ? 'dark-mode' : ''}`}>
                <h1 className={`text-3xl font-semibold text-center mb-6 rounded-lg  ${darkMode
                    ? 'text-white'
                    : 'bg-white border-gray-300 text-gray-900'}`}>Sube tus archivos JSON</h1>
            
            {/* Switch para alternar listado activo/inactivo */}
            <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-lg border ${
                    darkMode 
                        ? 'border-gray-600 bg-gray-800' 
                        : 'border-gray-200 bg-gray-50'
                }`}>
                    <Switch
                        isOn={isListingActive}
                        onToggle={toggleListing}
                        label="Lista FolloWebeando"
                        darkMode={darkMode}
                        size="medium"
                    />
                    <p className={`text-xs mt-2 text-center ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        {isListingActive 
                            ? 'Resultados en base a lista de FolloWebeando' 
                            : 'Resultados en base a seguidores y seguidos'
                        }
                    </p>
                </div>
            </div>
            
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
                {isListingActive && (
                <FileInput
                    key={inputKeys.list}
                    darkMode={darkMode}
                    title='Listado'
                    handleFileUpload={dataList.handleFileUpload}
                    error={dataList.error}
                    jsonData={dataList.jsonData}
                />
                )}
            </div>
            <div className="text-center md:text-left mt-6">
                <button className="w-full bg-[#25D366] hover:bg-[#128C7E] px-6 py-3 text-white font-medium rounded-lg transition-colors duration-200"
                    type="button"
                    onClick={action}
                >
                    Realizar Análisis
                </button>
            </div>

            {comunidad.length > 0 && isListingActive && (
                <div className="mt-6">
                    <h2 className={`text-xl font-semibold mb-4 text-center ${darkMode
                        ? 'text-white'
                        : 'bg-white border-gray-300 text-gray-900'}`}>Resultados del Análisis</h2>
                </div>
            )}
            {comunidad.length > 0 && isListingActive && (
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
            {comunidadDontFollowYou.length > 0 && isListingActive && (
                <Accordion title={`No te siguen (${comunidadDontFollowYou.length})`} darkMode={darkMode}>
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
                                {comunidadDontFollowYou.map((item, index) => (
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
            {comunidadYouDontFollow.length > 0 && isListingActive && (
                <Accordion title={`No los sigues (${comunidadYouDontFollow.length})`} darkMode={darkMode}>
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
                                {comunidadYouDontFollow.map((item, index) => (
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
            {comunidadNothingFollow.length > 0 && isListingActive && (
                <Accordion title={`No te siguen y no los sigues (${comunidadNothingFollow.length})`} darkMode={darkMode}>
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
                                {comunidadNothingFollow.map((item, index) => (
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
            
            {/* Mensaje cuando el listado está inactivo */}
            {comunidad.length > 0 && !isListingActive && (
                <div className="mt-6">
                    <div className={`text-center p-8 rounded-lg border-2 border-dashed ${
                        darkMode 
                            ? 'border-gray-600 bg-gray-800 text-white' 
                            : 'border-gray-300 bg-gray-50 text-gray-700'
                    }`}>
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="text-xl font-semibold mb-2">Listado Desactivado</h3>
                        <p className="text-sm opacity-75">
                            El análisis se ha completado exitosamente, pero el listado está desactivado.
                        </p>
                        <p className="text-sm opacity-75 mt-1">
                            Activa el listado para ver los resultados detallados.
                        </p>
                        <div className="mt-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                darkMode 
                                    ? 'bg-blue-900 text-blue-200' 
                                    : 'bg-blue-100 text-blue-800'
                            }`}>
                                {comunidad.length} perfiles analizados
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Resultados para modo inactivo - análisis directo de seguidores/seguidos */}
            {(myFollowers.length > 0 || myFollowing.length > 0) && !isListingActive && (
                <div className="mt-6">
                    <h2 className={`text-xl font-semibold mb-4 text-center ${darkMode
                        ? 'text-white'
                        : 'bg-white border-gray-300 text-gray-900'}`}>Análisis de Seguidores y Seguidos</h2>
                </div>
            )}

            {/* Mis seguidores */}
            {myFollowers.length > 0 && !isListingActive && (
                <Accordion title={`Mis Seguidores (${myFollowers.length})`} darkMode={darkMode}>
                    <div className="overflow-x-auto">
                        <table className={`min-w-full bg-white border border-gray-300 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : ''}`}>
                            <thead>
                                <tr className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                    <th className="px-4 py-2">#</th>
                                    <th className="px-4 py-2">Usuario</th>
                                    <th className="px-4 py-2">Enlace</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myFollowers.map((item, index) => (
                                    <tr key={index} className={`${darkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'} hover:bg-gray-100`}>
                                        <td className="px-4 py-2 text-center">{index + 1}</td>
                                        <td className="px-4 py-2 text-center">{item.value}</td>
                                        <td className="px-4 py-2 text-center">
                                            <a href={`https://www.instagram.com/${item.value}`} target="_blank" rel="noopener noreferrer" className={`text-blue-500 hover:underline ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                                                Ver perfil
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Accordion>
            )}

            {/* Mis seguidos */}
            {myFollowing.length > 0 && !isListingActive && (
                <Accordion title={`Mis Seguidos (${myFollowing.length})`} darkMode={darkMode}>
                    <div className="overflow-x-auto">
                        <table className={`min-w-full bg-white border border-gray-300 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : ''}`}>
                            <thead>
                                <tr className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                    <th className="px-4 py-2">#</th>
                                    <th className="px-4 py-2">Usuario</th>
                                    <th className="px-4 py-2">Enlace</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myFollowing.map((item, index) => (
                                    <tr key={index} className={`${darkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'} hover:bg-gray-100`}>
                                        <td className="px-4 py-2 text-center">{index + 1}</td>
                                        <td className="px-4 py-2 text-center">{item.value}</td>
                                        <td className="px-4 py-2 text-center">
                                            <a href={`https://www.instagram.com/${item.value}`} target="_blank" rel="noopener noreferrer" className={`text-blue-500 hover:underline ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                                                Ver perfil
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Accordion>
            )}

            {/* Los que sigo pero no me siguen */}
            {myDontFollowHim.length > 0 && !isListingActive && (
                <Accordion title={`Los sigo pero no me siguen (${myDontFollowHim.length})`} darkMode={darkMode}>
                    <div className="overflow-x-auto">
                        <table className={`min-w-full bg-white border border-gray-300 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : ''}`}>
                            <thead>
                                <tr className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                    <th className="px-4 py-2">#</th>
                                    <th className="px-4 py-2">Usuario</th>
                                    <th className="px-4 py-2">Enlace</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myDontFollowHim.map((item, index) => (
                                    <tr key={index} className={`${darkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'} hover:bg-gray-100`}>
                                        <td className="px-4 py-2 text-center">{index + 1}</td>
                                        <td className="px-4 py-2 text-center">{item.value}</td>
                                        <td className="px-4 py-2 text-center">
                                            <a href={`https://www.instagram.com/${item.value}`} target="_blank" rel="noopener noreferrer" className={`text-blue-500 hover:underline ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                                                Ver perfil
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Accordion>
            )}

            {/* Los que me siguen pero no sigo */}
            {myDontFollowMe.length > 0 && !isListingActive && (
                <Accordion title={`Me siguen pero no los sigo (${myDontFollowMe.length})`} darkMode={darkMode}>
                    <div className="overflow-x-auto">
                        <table className={`min-w-full bg-white border border-gray-300 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : ''}`}>
                            <thead>
                                <tr className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                    <th className="px-4 py-2">#</th>
                                    <th className="px-4 py-2">Usuario</th>
                                    <th className="px-4 py-2">Enlace</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myDontFollowMe.map((item, index) => (
                                    <tr key={index} className={`${darkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'} hover:bg-gray-100`}>
                                        <td className="px-4 py-2 text-center">{index + 1}</td>
                                        <td className="px-4 py-2 text-center">{item.value}</td>
                                        <td className="px-4 py-2 text-center">
                                            <a href={`https://www.instagram.com/${item.value}`} target="_blank" rel="noopener noreferrer" className={`text-blue-500 hover:underline ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                                                Ver perfil
                                            </a>
                                        </td>
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
        </div>
    );
};

export default Followers;