import { Icon } from "../../../components/ui";
import { home } from "../../../config/home";
import { site } from "../../../config/site";
import { whatsappUrl } from "../../../lib/contactLinks";
import SectionTitle from "./SectionTitle";
import ServiceVisual from "./ServiceVisual";

const HomeServices = () => {
    const { services } = home;

    return (
        <section aria-labelledby="servicios" className="scroll-mt-24 bg-paper-soft dark:bg-night-soft">
            <div className="mx-auto max-w-6xl px-5 py-16 sm:px-10 sm:py-28">
                <SectionTitle id="servicios">{services.title}</SectionTitle>
                <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {services.items.map((service, index) => (
                        <li
                            key={service.title}
                            data-reveal
                            style={{ "--delay": `${index * 100}ms` }}
                            className={`group flex flex-col gap-5 rounded-3xl border border-paper-line bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:border-primary-500/60 hover:shadow-custom-light sm:p-8 dark:border-night-line dark:bg-night dark:hover:border-primary-500/50 dark:hover:shadow-custom-dark ${
                                index === 0 ? "md:row-span-2" : ""
                            }`}
                        >
                            <ServiceVisual kind={service.visual} example={service.example} />
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl font-bold text-ink sm:text-2xl dark:text-night-text">{service.title}</h3>
                                <p className="text-ink-muted dark:text-night-muted">{service.text}</p>
                                <a
                                    href={whatsappUrl(site.contact.whatsapp, service.whatsappText)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-11 items-center gap-2 self-start rounded-lg font-bold text-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:text-primary-400 dark:focus-visible:outline-primary-400"
                                >
                                    {service.action}
                                    <Icon name="arrow-right" className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HomeServices;
