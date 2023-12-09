import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";

const MarqueeAbout = ({ dataLogos, direction, speed }) => {
    return (
        <Marquee direction={direction} speed={speed} pauseOnHover className="animate-fade-up animate-once">
            {dataLogos.map((logo) => (
                <img
                    key={logo.value}
                    src={logo.routeImg}
                    alt={logo.name}
                    width="100"
                    height="100"
                    className="pointer-events-[hover] w-10 md:w-12 lg:w-16 xl:w-20 hover:scale-110 hover:shadow-custom-light transition-all duration-500 ease-in-out m-3 md:mx-5 lg:mx-8 xl:mx-9 rounded-[25%] shadow-lg"
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
