import { Icon } from "../../../components/ui";
import { home } from "../../../config/home";
import SectionTitle from "./SectionTitle";

const HomeAudience = () => {
    const { audience } = home;

    return (
        <section aria-labelledby="para-quien" className="mx-auto max-w-6xl px-5 py-16 sm:px-10 sm:py-28">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
                <div>
                    <SectionTitle id="para-quien" className="mb-6">
                        {audience.title}
                    </SectionTitle>
                    <p data-reveal className="text-lg text-ink-muted dark:text-night-muted">
                        {audience.intro}
                    </p>
                </div>
                <div>
                    <p data-reveal className="mb-2 font-bold text-ink dark:text-night-text">
                        {audience.listTitle}
                    </p>
                    <ul>
                        {audience.items.map((item, index) => (
                            <li
                                key={item}
                                data-reveal
                                style={{ "--delay": `${index * 90}ms` }}
                                className="flex gap-4 border-b border-paper-line py-5 text-lg text-ink sm:text-xl dark:border-night-line dark:text-night-text"
                            >
                                <span
                                    aria-hidden="true"
                                    className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-500 text-xs text-primary-ink"
                                >
                                    <Icon name="check" />
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HomeAudience;
