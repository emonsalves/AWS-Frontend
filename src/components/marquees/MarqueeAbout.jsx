import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";

const MarqueeAbout = ({ dataLogos, direction }) => {
    return (
        <Marquee direction={direction} pauseOnHover className="mt-4 md:mt-8">
            {dataLogos.map((logo) => (
                <img
                    key={logo.value}
                    src={logo.routeImg}
                    alt={logo.name}
                    className="w-14 md:w-16 lg:w-20 xl:w-28 hover:scale-110 hover:shadow-custom-light transition-all duration-300 ease-in-out m-2 rounded-3xl shadow-lg"
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
};

export { MarqueeAbout };
