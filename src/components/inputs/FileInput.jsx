// eslint-disable-next-line react/prop-types
const FileInput = ({ darkMode, title, handleFileUpload, error, jsonData }) => {
    return (
        <div className={`flex flex-col items-center justify-center p-2 border rounded-lg shadow-md transition-colors ${darkMode
            ? 'bg-gray-800 border-gray-700 text-white'
            : 'bg-white border-gray-300 text-gray-900'
            }`}>
            <h2 className={`text-3xl font-semibold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h2>
            <input
                className={`md:w-10/12 max-w-sm p-2 py-3 border rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-colors ${darkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                type="file"
                accept=".json"
                onChange={handleFileUpload}
                id={title}
            />
            {error && <p className={`text-md animate-fade-left animate-once text-center text-red-300`}>{error}</p>}
            {jsonData && <p className={`text-md animate-fade-left animate-once text-center text-green-600`}>Archivo JSON cargado correctamente.</p>}
        </div>
    )
}
export default FileInput