import PropTypes from "prop-types";

const SectionTitle = ({ id, children, className = "" }) => (
    <h2
        id={id}
        data-reveal
        className={`mb-12 max-w-3xl text-[32px] leading-[1.08] font-extrabold tracking-[-0.03em] text-ink sm:text-5xl dark:text-night-text ${className}`}
    >
        {children}
    </h2>
);

SectionTitle.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default SectionTitle;
