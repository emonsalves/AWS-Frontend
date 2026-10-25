import PropTypes from "prop-types";
import { Icon } from "../ui";

const bar = "h-2 rounded-full bg-paper-line dark:bg-night-line";
const shimmer =
    "anim-shimmer bg-[linear-gradient(90deg,#E2E8E5_0%,#E6F6EC_50%,#E2E8E5_100%)] dark:bg-[linear-gradient(90deg,#1E2A25_0%,#12291D_50%,#1E2A25_100%)]";

/** Ventana de navegador que se arma: el sitio web que construimos. */
const WebVisual = () => (
    <div className="flex h-full min-h-56 flex-col overflow-hidden rounded-xl border border-paper-line bg-paper dark:border-night-line dark:bg-night">
        <div className="flex items-center gap-1.5 border-b border-paper-line px-3 py-2.5 dark:border-night-line">
            <span className="h-2 w-2 rounded-full bg-paper-line dark:bg-night-line" />
            <span className="h-2 w-2 rounded-full bg-paper-line dark:bg-night-line" />
            <span className="h-2 w-2 rounded-full bg-primary-500" />
            <span className="ml-3 h-4 flex-1 rounded-md bg-paper-soft dark:bg-night-soft" />
        </div>
        <div className="grid flex-1 grid-cols-[1.4fr_1fr] gap-4 p-4 sm:p-5">
            <div className="flex flex-col justify-center gap-2.5">
                <span className={`h-4 w-4/5 rounded-full ${shimmer}`} />
                <span className={`${bar} w-full`} />
                <span className={`${bar} w-2/3`} />
                <span className="mt-2 h-6 w-24 rounded-md bg-primary-500" />
            </div>
            <div className={`rounded-lg ${shimmer}`} />
        </div>
        <div className="grid grid-cols-3 gap-3 px-4 pb-4 sm:px-5 sm:pb-5">
            {[0, 1, 2].map((item) => (
                <div key={item} className="flex flex-col gap-2 rounded-lg border border-paper-line p-3 dark:border-night-line">
                    <span className="h-5 w-5 rounded-md bg-paper-accent dark:bg-night-accent" />
                    <span className={`${bar} w-full`} />
                    <span className={`${bar} w-1/2`} />
                </div>
            ))}
        </div>
    </div>
);

/** Tres pasos unidos por una línea por la que avanza un punto: un proceso que corre solo. */
const AutomationVisual = () => (
    <div className="flex items-center justify-between rounded-xl border border-paper-line bg-paper px-4 py-6 dark:border-night-line dark:bg-night">
        {["whatsapp", "tag", "check"].map((name, index) => (
            <div key={name} className="contents">
                {index > 0 && (
                    <span className="relative mx-2 h-px flex-1 bg-paper-line dark:bg-night-line">
                        <span
                            className="anim-travel absolute -top-[3px] h-1.5 w-1.5 rounded-full bg-primary-500"
                            style={{ "--delay": `${index * 600}ms` }}
                        />
                    </span>
                )}
                <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        index === 2
                            ? "bg-primary-500 text-primary-ink"
                            : "bg-paper-accent text-primary-700 dark:bg-night-accent dark:text-primary-400"
                    }`}
                >
                    <Icon name={name} />
                </span>
            </div>
        ))}
    </div>
);

/** Lista de decisiones ordenadas: elegir solo lo que la empresa necesita. */
const AdviceVisual = ({ example }) => (
    <ul className="flex flex-col gap-2 rounded-xl border border-paper-line bg-paper p-4 text-sm dark:border-night-line dark:bg-night">
        {example.map(({ text, keep }) => (
            <li key={text} className="flex items-center gap-2.5">
                <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] ${
                        keep ? "bg-primary-500 text-primary-ink" : "border border-paper-line dark:border-night-line"
                    }`}
                >
                    {keep && <Icon name="check" />}
                </span>
                <span className={keep ? "text-ink dark:text-night-text" : "text-ink-muted line-through dark:text-night-muted"}>{text}</span>
            </li>
        ))}
    </ul>
);

AdviceVisual.propTypes = {
    example: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string.isRequired, keep: PropTypes.bool.isRequired })).isRequired,
};

const visuals = { web: WebVisual, automation: AutomationVisual, advice: AdviceVisual };

const ServiceVisual = ({ kind, example = [] }) => {
    const Visual = visuals[kind];
    return (
        <div aria-hidden="true" className={kind === "web" ? "flex-1" : ""}>
            <Visual example={example} />
        </div>
    );
};

ServiceVisual.propTypes = {
    kind: PropTypes.oneOf(Object.keys(visuals)).isRequired,
    example: PropTypes.array,
};

export default ServiceVisual;
