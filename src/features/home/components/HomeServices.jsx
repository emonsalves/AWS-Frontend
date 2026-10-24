import { Button, Card, Icon } from "../../../components/ui";
import { home } from "../../../config/home";
import { site } from "../../../config/site";
import { whatsappUrl } from "../../../lib/contactLinks";
import SectionTitle from "./SectionTitle";

const HomeServices = () => {
    const { services } = home;

    return (
        <section aria-labelledby="servicios" className="scroll-mt-24 px-4 py-12">
            <SectionTitle id="servicios">{services.title}</SectionTitle>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {services.items.map((service) => (
                    <li key={service.title}>
                        <Card className="flex h-full flex-col">
                            <Icon name={service.icon} className="mb-4 text-3xl text-green-700 dark:text-green-400" />
                            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                            <p className="mb-6 flex-1 text-gray-700 dark:text-gray-300">{service.text}</p>
                            <Button
                                as="a"
                                href={whatsappUrl(site.contact.whatsapp, service.whatsappText)}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="secondary"
                                rightIcon={<Icon name="arrow-right" />}
                            >
                                {service.action}
                            </Button>
                        </Card>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default HomeServices;
