import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Accordion = ({ title, children, darkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`border rounded-lg shadow-md m-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
            <button
                onClick={toggleAccordion}
                className={`w-full text-left px-4 py-2 font-semibold focus:outline-none transition-colors ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
            >
                {title}
            </button>
            {isOpen && (
                <div className={`p-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;