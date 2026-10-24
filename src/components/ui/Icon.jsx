import PropTypes from "prop-types";
import { icons } from "./icons";

/**
 * Icon - Icono SVG en línea que reemplaza a <i className="fas fa-...">.
 *
 * Mide 1em y usa el color del texto, así que se ajusta con text-xl, text-green-600, etc.
 * Es decorativo (aria-hidden): el texto de al lado o un aria-label en el botón dan el nombre.
 *
 * Uso: <Icon name="envelope" className="mr-2" />
 */
const Icon = ({ name, className = "" }) => {
    const icon = icons[name];

    return (
        <svg
            viewBox={icon.viewBox}
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className={`inline-block h-[1em] w-auto align-[-0.125em] ${className}`}
        >
            <path d={icon.path} />
        </svg>
    );
};

Icon.propTypes = {
    name: PropTypes.oneOf(Object.keys(icons)).isRequired,
    className: PropTypes.string,
};

export default Icon;
