import { Button, Icon } from "../../../components/ui";
import { home } from "../../../config/home";
import { site } from "../../../config/site";
import { whatsappUrl } from "../../../lib/contactLinks";

const HomeHero = () => {
    const { hero } = home;
    const [titleStart] = hero.title.split(hero.highlight);

    return (
        <section aria-labelledby="hero-titulo" className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-12 sm:px-10 sm:py-24 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-6">
                <p className="inline-flex items-center gap-2 rounded-full bg-paper-accent px-3 py-1.5 text-[13px] font-semibold text-primary-700 dark:bg-night-accent dark:text-primary-400">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary-500" />
                    {site.location} · desde {site.foundingYear}
                </p>
                <h1
                    id="hero-titulo"
                    className="text-[40px] leading-[1.05] font-extrabold tracking-[-0.035em] text-ink sm:text-[64px] dark:text-night-text"
                >
                    {titleStart}
                    <span className="text-primary-700 dark:text-primary-400">{hero.highlight}</span>
                </h1>
                <p className="max-w-[34em] text-[17px] text-ink-muted sm:text-xl dark:text-night-muted">{hero.subtitle}</p>
                <div className="flex w-full flex-col gap-3 sm:flex-row">
                    <Button
                        as="a"
                        href={whatsappUrl(site.contact.whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftIcon={<Icon name="whatsapp" />}
                    >
                        {hero.primaryAction}
                    </Button>
                    <Button as="a" href="#servicios" variant="secondary" rightIcon={<Icon name="arrow-right" />}>
                        {hero.secondaryAction}
                    </Button>
                </div>
            </div>

            <figure className="flex flex-col gap-3.5 rounded-[20px] border border-paper-line bg-paper-soft p-6 shadow-custom-light dark:border-night-line dark:bg-night-soft dark:shadow-custom-dark">
                <figcaption className="flex items-center justify-between text-[13px]">
                    <span className="font-semibold text-ink dark:text-night-text">{hero.example.title}</span>
                    <span className="rounded-full bg-paper-accent px-2.5 py-1 font-semibold text-primary-700 dark:bg-night-accent dark:text-primary-400">
                        {hero.example.status}
                    </span>
                </figcaption>
                <ol className="flex flex-col gap-3.5">
                    {hero.example.steps.map((step, index) => {
                        const isLast = index === hero.example.steps.length - 1;
                        return (
                            <li
                                key={step.title}
                                className="flex items-center gap-3.5 rounded-[14px] border border-paper-line bg-paper p-3.5 dark:border-night-line dark:bg-night"
                            >
                                <span
                                    aria-hidden="true"
                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] font-bold ${
                                        isLast
                                            ? "bg-primary-500 text-primary-ink"
                                            : "bg-paper-accent text-primary-700 dark:bg-night-accent dark:text-primary-400"
                                    }`}
                                >
                                    {isLast ? <Icon name="check" /> : index + 1}
                                </span>
                                <span>
                                    <strong className="block text-[15px] text-ink dark:text-night-text">{step.title}</strong>
                                    <span className="text-[13px] text-ink-muted dark:text-night-muted">{step.text}</span>
                                </span>
                            </li>
                        );
                    })}
                </ol>
            </figure>
        </section>
    );
};

export default HomeHero;
