import PropTypes from "prop-types";

const SectionTitle = ({ id, eyebrow, children }) => (
    <div className="mb-10 flex max-w-2xl flex-col gap-2.5">
        {eyebrow && <p className="text-[13px] font-bold tracking-[0.12em] text-primary-700 uppercase dark:text-primary-400">{eyebrow}</p>}
        <h2 id={id} className="text-[28px] leading-tight font-extrabold tracking-tight text-ink sm:text-[40px] dark:text-night-text">
            {children}
        </h2>
    </div>
);

SectionTitle.propTypes = {
    id: PropTypes.string.isRequired,
    eyebrow: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default SectionTitle;
