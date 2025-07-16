// eslint-disable-next-line react/prop-types
const FileInput = ({ darkMode, title, handleFileUpload, error, jsonData }) => {
    return (
        <div className={`flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 border rounded-lg shadow-md transition-colors ${darkMode
            ? 'bg-gray-800 border-gray-700 text-white'
            : 'bg-white border-gray-300 text-gray-900'
            }`}>
            <h2 className={`text-lg sm:text-xl md:text-2xl font-semibold text-center mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h2>
            
            <div className="relative w-full sm:w-10/12 max-w-sm">
                <input
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    id={title}
                />
                <div className={`w-full p-3 sm:py-3 border-2 border-dashed rounded-lg transition-all duration-200 text-center ${
                    jsonData 
                        ? darkMode 
                            ? 'border-green-500 bg-green-900/20 text-green-400' 
                            : 'border-green-500 bg-green-50 text-green-700'
                        : darkMode
                            ? 'border-gray-600 bg-gray-700 text-gray-300 hover:border-[#25D366] hover:bg-gray-600'
                            : 'border-gray-300 bg-gray-50 text-gray-600 hover:border-[#25D366] hover:bg-gray-100'
                }`}>
                    <div className="flex flex-col items-center gap-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className="text-xs sm:text-sm font-medium">
                            {jsonData ? '✓ Archivo cargado' : 'Seleccionar archivo JSON'}
                        </span>
                    </div>
                </div>
            </div>
            
            {error && (
                <div className="mt-3 flex items-center gap-2 text-red-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xs sm:text-sm animate-fade-left animate-once text-center">{error}</p>
                </div>
            )}
            
            {jsonData && (
                <div className="mt-3 flex items-center gap-2 text-green-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-xs sm:text-sm animate-fade-left animate-once text-center">Archivo JSON cargado correctamente</p>
                </div>
            )}
        </div>
    )
}
export default FileInput