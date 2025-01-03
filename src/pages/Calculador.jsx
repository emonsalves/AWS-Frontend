import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Calculador = () => {
    const [propina, setPropina] = useState('');
    const [cuenta, setCuenta] = useState('');
    const [dineroCliente, setDineroCliente] = useState('');
    const { darkMode } = useTheme();

    const calcularVuelto = () => {
        const totalCuenta = parseInt(cuenta) || 0;
        const dineroEntregado = parseInt(dineroCliente) || 0;
        let totalPropina = 0;
        
        if (propina === 'si') {
            totalPropina = Math.round(totalCuenta * 0.10);
        }
        
        const vueltoFinal = dineroEntregado - (totalCuenta + totalPropina);
        return vueltoFinal.toLocaleString('es-CL');
    };

    return (
        <div className={`w-full flex items-center justify-center py-8 bg-gray-900 transition-colors duration-200`}>
            <div className={`w-full max-w-7xl rounded-xl shadow-2xl overflow-hidden mx-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} animate-fade-up animate-once`}>
                <div className="bg-[#25D366] p-6 relative animate-fade-down animate-once">
                    <button
                        onClick={() => {}}
                        className="absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-[#128C7E] transition-colors"
                    >
                    </button>
                    <h1 className="text-white text-3xl font-bold text-center flex items-center justify-center gap-3">
                        <i className="fa-regular fa-address-card animate-bounce animate-infinite"></i> 
                        Calculador de Cuentas
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row p-6 gap-6">
                    {/* Sección Cliente */}
                    <div className={`lg:w-1/2 rounded-lg p-6 shadow-md ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} animate-fade-right animate-once animate-delay-100`}>
                        <h2 className="text-[#25D366] font-bold text-2xl mb-6 text-center">
                            Datos del Cliente
                        </h2>

                        <div className="space-y-6">
                            <div className={`p-4 rounded-lg shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:scale-[1.02] transition-transform duration-300`}>
                                <p className={`font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>¿Agrega propina?:</p>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="propina" 
                                            value="si"
                                            onChange={(e) => setPropina(e.target.value)}
                                            className="form-radio text-[#25D366]" 
                                        />
                                        <span className={`${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Sí</span>
                                    </label>
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="propina" 
                                            value="no"
                                            onChange={(e) => setPropina(e.target.value)}
                                            className="form-radio text-[#25D366]" 
                                        />
                                        <span className={`${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>No</span>
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className={`block font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                                        Total de la cuenta cliente:
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                        <input 
                                            type="text" 
                                            value={cuenta ? parseInt(cuenta).toLocaleString('es-CL') : ''}
                                            onChange={(e) => setCuenta(e.target.value.replace(/\D/g, ''))}
                                            placeholder="0" 
                                            className={`w-full p-3 pl-7 border rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent ${
                                                darkMode 
                                                    ? 'bg-gray-800 border-gray-600 text-white' 
                                                    : 'bg-white border-gray-300 text-gray-700'
                                            }`}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className={`block font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                                        Dinero con el que paga cliente:
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                        <input 
                                            type="text" 
                                            value={dineroCliente ? parseInt(dineroCliente).toLocaleString('es-CL') : ''}
                                            onChange={(e) => setDineroCliente(e.target.value.replace(/\D/g, ''))}
                                            placeholder="0" 
                                            className={`w-full p-3 pl-7 border rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent ${
                                                darkMode 
                                                    ? 'bg-gray-800 border-gray-600 text-white' 
                                                    : 'bg-white border-gray-300 text-gray-700'
                                            }`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección Resultados */}
                    <div className={`lg:w-1/2 rounded-lg p-6 shadow-md ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} animate-fade-left animate-once animate-delay-200`}>
                        <h2 className="text-[#25D366] font-bold text-2xl mb-6 text-center">
                            Resultados
                        </h2>

                        <div className="space-y-6">
                            <div className={`p-6 rounded-lg shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:scale-[1.02] transition-transform duration-300`}>
                                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                                    Resumen de la cuenta
                                </h3>
                                
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Total cuenta:</span>
                                        <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                            ${parseInt(cuenta || 0).toLocaleString('es-CL')}
                                        </span>
                                    </div>
                                    
                                    {propina === 'si' && (
                                        <div className="flex justify-between">
                                            <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Propina (10%):</span>
                                            <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                                ${Math.round(parseFloat(cuenta || 0) * 0.10).toLocaleString('es-CL')}
                                            </span>
                                        </div>
                                    )}
                                    
                                    <div className="flex justify-between">
                                        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Dinero recibido:</span>
                                        <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                            ${parseInt(dineroCliente || 0).toLocaleString('es-CL')}
                                        </span>
                                    </div>
                                    
                                    <div className="pt-3 border-t border-gray-200">
                                        <div className="flex justify-between text-lg font-bold animate-pulse animate-infinite">
                                            <span className="text-[#25D366]">Vuelto:</span>
                                            <span className="text-[#25D366]">${calcularVuelto()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculador;