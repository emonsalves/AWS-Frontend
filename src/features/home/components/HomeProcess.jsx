import { home } from "../../../config/home";
import SectionTitle from "./SectionTitle";

const HomeProcess = () => {
    const { process } = home;

    return (
        <section aria-labelledby="como-trabajamos" className="mx-auto max-w-6xl px-5 pb-16 sm:px-10 sm:pb-24">
            <SectionTitle id="como-trabajamos" eyebrow={process.eyebrow}>
                {process.title}
            </SectionTitle>
            <ol className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
                {process.steps.map((step, index) => (
                    <li
                        key={step.title}
                        className={`flex flex-col gap-2 border-t-2 pt-5 ${index === 0 ? "border-primary-500" : "border-paper-line dark:border-night-line"}`}
                    >
                        <span aria-hidden="true" className="text-sm font-bold text-primary-700 dark:text-primary-400">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-[19px] font-bold text-ink dark:text-night-text">{step.title}</h3>
                        <p className="text-ink-muted dark:text-night-muted">{step.text}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default HomeProcess;
