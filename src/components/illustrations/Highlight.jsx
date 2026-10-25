import PropTypes from "prop-types";

/** Palabra destacada en verde con un subrayado que se dibuja a mano al cargar. */
const Highlight = ({ children, delay = "700ms" }) => (
    <span className="relative inline-block whitespace-nowrap text-primary-700 dark:text-primary-400">
        {children}
        <svg aria-hidden="true" viewBox="0 0 220 18" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full sm:-bottom-3 sm:h-4">
            <path
                d="M3 12 C 50 4, 120 3, 217 9"
                pathLength="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                className="anim-draw text-primary-500"
                style={{ "--delay": delay }}
            />
        </svg>
    </span>
);

Highlight.propTypes = {
    children: PropTypes.node.isRequired,
    delay: PropTypes.string,
};

export default Highlight;
