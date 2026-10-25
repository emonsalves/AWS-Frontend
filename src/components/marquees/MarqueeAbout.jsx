import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";

const MarqueeAbout = ({ dataLogos, direction, speed }) => {
    return (
        <Marquee direction={direction} speed={speed} pauseOnHover autoFill className="py-2">
            {dataLogos.map((logo) => (
                <img
                    key={logo.value}
                    src={logo.routeImg}
                    alt={logo.name}
                    width="100"
                    height="100"
                    loading="lazy"
                    className="mx-6 h-10 w-10 rounded-lg opacity-80 grayscale dark:opacity-60 transition duration-300 hover:opacity-100 hover:grayscale-0 sm:mx-8 sm:h-12 sm:w-12"
                />
            ))}
        </Marquee>
    );
};

MarqueeAbout.propTypes = {
    dataLogos: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number.isRequired,
            routeImg: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
    direction: PropTypes.string,
    speed: PropTypes.number,
};

export { MarqueeAbout };
