import { Button, Icon } from "../../../components/ui";
import { home } from "../../../config/home";
import { site } from "../../../config/site";
import { whatsappUrl } from "../../../lib/contactLinks";

const HomeHero = () => {
    const { hero } = home;

    return (
        <section aria-labelledby="hero-titulo" className="px-4 py-16 text-center sm:py-24">
            <h1 id="hero-titulo" className="mx-auto mb-6 max-w-4xl text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
                {hero.title}
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-700 md:text-2xl dark:text-gray-300">{hero.subtitle}</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                    as="a"
                    href={whatsappUrl(site.contact.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    leftIcon={<Icon name="whatsapp" />}
                >
                    {hero.primaryAction}
                </Button>
                <Button as="a" href="#servicios" variant="secondary" size="lg">
                    {hero.secondaryAction}
                </Button>
            </div>
            <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">{hero.trustLine}</p>
        </section>
    );
};

export default HomeHero;
