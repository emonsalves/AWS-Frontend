import PropTypes from 'prop-types';

const Switch = ({ 
    isOn, 
    onToggle, 
    label, 
    darkMode = false,
    size = 'medium' // 'small', 'medium', 'large'
}) => {
    const getSizeClasses = () => {
        switch (size) {
            case 'small':
                return {
                    container: 'w-10 h-5',
                    slider: 'w-4 h-4',
                    translate: 'translate-x-5'
                };
            case 'large':
                return {
                    container: 'w-16 h-8',
                    slider: 'w-7 h-7',
                    translate: 'translate-x-8'
                };
            default: // medium
                return {
                    container: 'w-12 h-6',
                    slider: 'w-5 h-5',
                    translate: 'translate-x-6'
                };
        }
    };

    const sizeClasses = getSizeClasses();

    return (
        <div className="flex items-center space-x-3">
            {label && (
                <span className={`font-medium text-sm ${
                    darkMode ? 'text-white' : 'text-gray-700'
                }`}>
                    {label}
                </span>
            )}
            <button
                type="button"
                role="switch"
                aria-checked={isOn}
                aria-label={label || 'Toggle switch'}
                onClick={onToggle}
                className={`
                    relative inline-flex items-center ${sizeClasses.container} 
                    rounded-full transition-colors duration-200 ease-in-out 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 
                    ${darkMode ? 'focus:ring-offset-gray-800' : 'focus:ring-offset-white'}
                    ${isOn 
                        ? 'bg-green-500 hover:bg-green-600 focus:ring-green-500' 
                        : darkMode 
                            ? 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500' 
                            : 'bg-gray-300 hover:bg-gray-400 focus:ring-gray-300'
                    }
                `}
            >
                <span
                    className={`
                        ${sizeClasses.slider} 
                        inline-block bg-white rounded-full shadow-lg 
                        transform transition-transform duration-200 ease-in-out
                        ${isOn ? sizeClasses.translate : 'translate-x-0.5'}
                    `}
                />
            </button>
            {/* Indicador visual del estado */}
            <span className={`text-xs font-medium ${
                isOn 
                    ? 'text-green-600 dark:text-green-400' 
                    : darkMode 
                        ? 'text-gray-400' 
                        : 'text-gray-500'
            }`}>
                {isOn ? 'ON' : 'OFF'}
            </span>
        </div>
    );
};

Switch.propTypes = {
    isOn: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    label: PropTypes.string,
    darkMode: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default Switch;
