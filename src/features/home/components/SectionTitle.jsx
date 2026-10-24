import PropTypes from "prop-types";

const SectionTitle = ({ id, children }) => (
    <h2 id={id} className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
        {children}
    </h2>
);

SectionTitle.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default SectionTitle;
