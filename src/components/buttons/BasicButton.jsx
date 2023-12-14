/* eslint-disable react/prop-types */
import { useState } from "react";

const BasicButton = ({ action, text, color, type = "button" }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        if (action) {
            setIsClicked(true);
            setTimeout(() => {
                setIsClicked(false);
            }, CLICK_DELAY);
            action();
        }
    };

    const CLICK_DELAY = 200;

    const dynamicBackgroundColor = `bg-${color}-600`;
    const dynamicHoverBackgroundColor = `hover:bg-${color}-700`;

    return (
        <button
            type={type}
            className={`w-40 relative inline-flex items-center justify-center px-2 py-2 overflow-hidden tracking-tighter text-white ${dynamicBackgroundColor} rounded-lg group ${dynamicHoverBackgroundColor} hover:shadow-lg font-bold ${
                isClicked ? "transform scale-105" : ""
            } transition-transform ease-in-out duration-300`}
            onClick={handleButtonClick}
        >
            <span
                className={`absolute w-0 h-0 transition-all duration-500 ease-out bg-${color}-500 rounded-full group-hover:w-[400px] group-hover:h-16`}
            />
            <span
                className={`absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-bl from-transparent via-transparent ${dynamicBackgroundColor}`}
            />
            <span className="relative">{text}</span>
        </button>
    );
};

export { BasicButton };
