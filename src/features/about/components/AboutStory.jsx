import Highlight from "../../../components/illustrations/Highlight";
import { about } from "../../../config/about";

const AboutStory = () => {
    const { history, mission } = about;
    const [quoteStart, quoteEnd] = mission.quote.split(mission.highlight);

    return (
        <section aria-labelledby="historia" className="bg-paper-soft dark:bg-night-soft">
            <div className="mx-auto max-w-6xl px-5 py-16 sm:px-10 sm:py-28">
                <h2
                    id="historia"
                    data-reveal
                    className="mb-12 text-[32px] leading-[1.08] font-extrabold tracking-[-0.03em] text-ink sm:mb-16 sm:text-5xl dark:text-night-text"
                >
                    {history.title}
                </h2>

                <ol className="relative grid gap-10 pl-10 lg:grid-cols-3 lg:gap-12 lg:pt-12 lg:pl-0">
                    <span
                        aria-hidden="true"
                        data-reveal
                        className="reveal-line-y absolute top-2 bottom-2 left-[11px] w-px bg-primary-500 lg:hidden"
                    />
                    <span
                        aria-hidden="true"
                        data-reveal
                        className="reveal-line absolute top-[11px] right-0 left-0 hidden h-px bg-primary-500 lg:block"
                    />
                    {history.milestones.map((milestone, index) => (
                        <li key={milestone.year} data-reveal style={{ "--delay": `${150 + index * 220}ms` }} className="relative">
                            <span
                                aria-hidden="true"
                                className="absolute top-2 -left-10 h-6 w-6 rounded-full border-4 border-paper-soft bg-primary-500 lg:-top-12 lg:left-0 dark:border-night-soft"
                            />
                            <p className="text-[44px] leading-none font-extrabold tracking-[-0.04em] text-primary-700 sm:text-[56px] dark:text-primary-400">
                                {milestone.year}
                            </p>
                            <p className="mt-4 text-lg text-ink-muted dark:text-night-muted">{milestone.text}</p>
                        </li>
                    ))}
                </ol>

                <figure data-reveal className="mt-20 border-t border-paper-line pt-14 sm:mt-28 sm:pt-20 dark:border-night-line">
                    <figcaption className="mb-6 font-semibold text-primary-700 dark:text-primary-400">{mission.title}</figcaption>
                    <blockquote className="max-w-4xl text-[34px] leading-[1.08] font-extrabold tracking-[-0.035em] text-ink sm:text-[60px] dark:text-night-text">
                        “{quoteStart}
                        <Highlight delay="300ms">{mission.highlight}</Highlight>
                        {quoteEnd}”
                    </blockquote>
                    <p className="mt-8 max-w-2xl text-lg text-ink-muted sm:text-xl dark:text-night-muted">{mission.text}</p>
                </figure>
            </div>
        </section>
    );
};

export default AboutStory;
