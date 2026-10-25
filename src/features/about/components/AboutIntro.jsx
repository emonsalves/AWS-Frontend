import Highlight from "../../../components/illustrations/Highlight";
import { Icon } from "../../../components/ui";
import { about } from "../../../config/about";
import { site } from "../../../config/site";

const AboutIntro = () => {
    const { sectors } = about;
    const [titleStart, titleEnd] = about.title.split(about.highlight);

    return (
        <section aria-labelledby="nosotros-titulo" className="relative overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(#E2E8E5_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_85%)] bg-[size:22px_22px] dark:bg-[radial-gradient(#1E2A25_1px,transparent_1px)]"
            />
            <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-16 sm:px-10 sm:pt-24 sm:pb-24 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
                <div>
                    <p className="anim-rise mb-5 font-semibold text-primary-700 dark:text-primary-400">{about.label}</p>
                    <h1
                        id="nosotros-titulo"
                        className="anim-rise text-[40px] leading-[1.04] font-extrabold tracking-[-0.04em] text-ink sm:text-[60px] dark:text-night-text"
                        style={{ "--delay": "80ms" }}
                    >
                        {titleStart}
                        <Highlight>{about.highlight}</Highlight>
                        {titleEnd}
                    </h1>
                    <div className="mt-8 flex flex-col gap-5 text-lg text-ink-muted sm:text-xl dark:text-night-muted">
                        {about.intro.map((paragraph, index) => (
                            <p key={paragraph} className="anim-rise" style={{ "--delay": `${180 + index * 100}ms` }}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                <div
                    className="anim-rise rounded-[28px] border border-paper-line bg-paper p-6 shadow-custom-light sm:p-8 dark:border-night-line dark:bg-night-soft dark:shadow-custom-dark"
                    style={{ "--delay": "260ms" }}
                >
                    <h2 className="text-sm font-semibold text-ink-muted dark:text-night-muted">{sectors.title}</h2>
                    <ul className="mt-5 flex flex-col gap-3">
                        {sectors.items.map((sector, index) => (
                            <li
                                key={sector.name}
                                className="anim-rise flex items-center gap-4 rounded-2xl border border-paper-line p-4 transition-colors hover:border-primary-500/60 dark:border-night-line"
                                style={{ "--delay": `${420 + index * 140}ms` }}
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper-accent text-lg text-primary-700 dark:bg-night-accent dark:text-primary-400">
                                    <Icon name={sector.icon} />
                                </span>
                                <span>
                                    <strong className="block text-lg text-ink dark:text-night-text">{sector.name}</strong>
                                    <span className="text-sm text-ink-muted dark:text-night-muted">{sector.text}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-muted dark:text-night-muted">
                        <span className="flex items-center gap-2">
                            <Icon name="location-dot" className="text-primary-700 dark:text-primary-400" />
                            {site.location}
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-primary-500" />
                            {sectors.since}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
