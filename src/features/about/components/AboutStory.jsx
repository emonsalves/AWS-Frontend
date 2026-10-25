import { about } from "../../../config/about";

const AboutStory = () => {
    const { history, mission } = about;

    return (
        <section aria-labelledby="historia" className="bg-paper-soft dark:bg-night-soft">
            <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-10 sm:py-28 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
                <div>
                    <h2
                        id="historia"
                        data-reveal
                        className="mb-10 text-[32px] leading-[1.08] font-extrabold tracking-[-0.03em] text-ink sm:text-5xl dark:text-night-text"
                    >
                        {history.title}
                    </h2>
                    <ol className="relative flex flex-col gap-10 pl-10">
                        <span aria-hidden="true" data-reveal className="reveal-line-y absolute top-2 bottom-2 left-[11px] w-px bg-primary-500" />
                        {history.milestones.map((milestone, index) => (
                            <li key={milestone.year} data-reveal style={{ "--delay": `${150 + index * 200}ms` }} className="relative">
                                <span
                                    aria-hidden="true"
                                    className="absolute top-1 -left-10 h-6 w-6 rounded-full border-4 border-paper-soft bg-primary-500 dark:border-night-soft"
                                />
                                <p className="text-2xl font-extrabold text-ink dark:text-night-text">{milestone.year}</p>
                                <p className="mt-2 text-lg text-ink-muted dark:text-night-muted">{milestone.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
                <div data-reveal className="self-center">
                    <h2 className="mb-6 font-semibold text-primary-700 dark:text-primary-400">{mission.title}</h2>
                    <blockquote className="text-[32px] leading-[1.1] font-extrabold tracking-[-0.03em] text-ink sm:text-[44px] dark:text-night-text">
                        “{mission.quote}”
                    </blockquote>
                    <p className="mt-6 text-lg text-ink-muted dark:text-night-muted">{mission.text}</p>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
