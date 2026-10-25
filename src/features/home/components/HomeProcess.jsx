import { home } from "../../../config/home";
import SectionTitle from "./SectionTitle";

const HomeProcess = () => {
    const { process } = home;

    return (
        <section aria-labelledby="como-trabajamos" className="bg-paper-soft dark:bg-night-soft">
            <div className="mx-auto max-w-6xl px-5 py-16 sm:px-10 sm:py-28">
                <SectionTitle id="como-trabajamos">{process.title}</SectionTitle>
                <ol className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    <span
                        aria-hidden="true"
                        data-reveal
                        className="reveal-line absolute top-5 left-5 hidden h-px w-[calc(100%-2.5rem)] bg-primary-500 lg:block"
                    />
                    {process.steps.map((step, index) => (
                        <li key={step.title} data-reveal style={{ "--delay": `${200 + index * 220}ms` }} className="relative flex flex-col gap-3">
                            <span
                                aria-hidden="true"
                                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-500 bg-paper text-sm font-extrabold text-primary-700 dark:bg-night-soft dark:text-primary-400"
                            >
                                {index + 1}
                            </span>
                            <h3 className="text-xl font-bold text-ink dark:text-night-text">{step.title}</h3>
                            <p className="text-ink-muted dark:text-night-muted">{step.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default HomeProcess;
