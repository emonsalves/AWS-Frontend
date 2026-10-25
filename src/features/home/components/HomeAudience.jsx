import { Icon } from "../../../components/ui";
import { home } from "../../../config/home";
import SectionTitle from "./SectionTitle";

const HomeAudience = () => {
    const { audience } = home;

    return (
        <section aria-labelledby="para-quien" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-10 sm:py-24 lg:grid-cols-2 lg:items-start">
            <div>
                <SectionTitle id="para-quien" eyebrow={audience.eyebrow}>
                    {audience.title}
                </SectionTitle>
                <p className="-mt-4 text-lg text-ink-muted dark:text-night-muted">{audience.intro}</p>
            </div>
            <div className="rounded-[18px] border border-paper-line p-7 dark:border-night-line">
                <p className="mb-4 font-bold text-ink dark:text-night-text">{audience.listTitle}</p>
                <ul className="flex flex-col gap-4">
                    {audience.items.map((item) => (
                        <li key={item} className="flex gap-3 text-ink-muted dark:text-night-muted">
                            <span
                                aria-hidden="true"
                                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-paper-accent text-xs text-primary-700 dark:bg-night-accent dark:text-primary-400"
                            >
                                <Icon name="check" />
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HomeAudience;
