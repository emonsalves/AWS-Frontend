import { Button, Icon } from "../../../components/ui";
import { home } from "../../../config/home";
import { site } from "../../../config/site";
import { whatsappUrl } from "../../../lib/contactLinks";
import HeroDemo from "./HeroDemo";

const HomeHero = () => {
    const { hero } = home;
    const [titleStart] = hero.title.split(hero.highlight);

    return (
        <section aria-labelledby="hero-titulo" className="relative overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(#E2E8E5_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_85%)] bg-[size:22px_22px] dark:bg-[radial-gradient(#1E2A25_1px,transparent_1px)]"
            />
            <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-16 sm:px-10 sm:pt-24 sm:pb-24 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
                <div className="flex flex-col items-start gap-7">
                    <h1
                        id="hero-titulo"
                        className="anim-rise text-[42px] leading-[1.02] font-extrabold tracking-[-0.04em] text-ink sm:text-[72px] dark:text-night-text"
                    >
                        {titleStart}
                        <span className="relative inline-block whitespace-nowrap text-primary-700 dark:text-primary-400">
                            {hero.highlight}
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 220 18"
                                preserveAspectRatio="none"
                                className="absolute -bottom-2 left-0 h-3 w-full sm:-bottom-3 sm:h-4"
                            >
                                <path
                                    d="M3 12 C 50 4, 120 3, 217 9"
                                    pathLength="1"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    className="anim-draw text-primary-500"
                                    style={{ "--delay": "700ms" }}
                                />
                            </svg>
                        </span>
                    </h1>
                    <p className="anim-rise max-w-[33em] text-[17px] text-ink-muted sm:text-xl dark:text-night-muted" style={{ "--delay": "120ms" }}>
                        {hero.subtitle}
                    </p>
                    <div className="anim-rise flex w-full flex-col gap-3 sm:w-auto sm:flex-row" style={{ "--delay": "220ms" }}>
                        <Button
                            as="a"
                            href={whatsappUrl(site.contact.whatsapp)}
                            target="_blank"
                            rel="noopener noreferrer"
                            leftIcon={<Icon name="whatsapp" />}
                            className="hover:-translate-y-0.5"
                        >
                            {hero.primaryAction}
                        </Button>
                        <Button as="a" href="#servicios" variant="secondary" rightIcon={<Icon name="arrow-right" />}>
                            {hero.secondaryAction}
                        </Button>
                    </div>
                    <p className="anim-rise text-sm text-ink-muted dark:text-night-muted" style={{ "--delay": "300ms" }}>
                        {hero.trustLine}
                    </p>
                </div>

                <HeroDemo />
            </div>
        </section>
    );
};

export default HomeHero;
