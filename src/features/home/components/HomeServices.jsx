import { Icon } from "../../../components/ui";
import { home } from "../../../config/home";
import { site } from "../../../config/site";
import { whatsappUrl } from "../../../lib/contactLinks";
import SectionTitle from "./SectionTitle";

const HomeServices = () => {
    const { services } = home;

    return (
        <section
            aria-labelledby="servicios"
            className="scroll-mt-24 border-y border-paper-line bg-paper-soft dark:border-night-line dark:bg-night-soft"
        >
            <div className="mx-auto max-w-6xl px-5 py-16 sm:px-10 sm:py-24">
                <SectionTitle id="servicios" eyebrow={services.eyebrow}>
                    {services.title}
                </SectionTitle>
                <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {services.items.map((service) => (
                        <li
                            key={service.title}
                            className="flex flex-col gap-3.5 rounded-[18px] border border-paper-line bg-paper p-7 dark:border-night-line dark:bg-night"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper-accent text-xl text-primary-700 dark:bg-night-accent dark:text-primary-400">
                                <Icon name={service.icon} />
                            </span>
                            <h3 className="text-xl font-bold text-ink dark:text-night-text">{service.title}</h3>
                            <p className="flex-1 text-ink-muted dark:text-night-muted">{service.text}</p>
                            <a
                                href={whatsappUrl(site.contact.whatsapp, service.whatsappText)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-11 items-center gap-2 self-start rounded-lg font-bold text-primary-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:text-primary-400 dark:focus-visible:outline-primary-400"
                            >
                                {service.action}
                                <Icon name="arrow-right" className="text-sm" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HomeServices;
