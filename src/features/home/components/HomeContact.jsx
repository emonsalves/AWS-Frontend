import { Button, Card, Icon } from "../../../components/ui";
import { home } from "../../../config/home";
import { site } from "../../../config/site";
import { mailtoUrl, whatsappUrl } from "../../../lib/contactLinks";
import SectionTitle from "./SectionTitle";

const HomeContact = () => {
    const { contact } = home;

    return (
        <section aria-labelledby="conversemos" className="px-4 py-12">
            <Card padding="xl" className="mx-auto max-w-3xl text-center">
                <SectionTitle id="conversemos">{contact.title}</SectionTitle>
                <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">{contact.text}</p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button
                        as="a"
                        href={whatsappUrl(site.contact.whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="lg"
                        leftIcon={<Icon name="whatsapp" />}
                    >
                        {contact.primaryAction}
                    </Button>
                    <Button as="a" href={mailtoUrl(site.contact.email)} variant="secondary" size="lg" leftIcon={<Icon name="envelope" />}>
                        {contact.secondaryAction}
                    </Button>
                </div>
                <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
                    <Icon name="location-dot" className="mr-2" />
                    {site.location}
                </p>
            </Card>
        </section>
    );
};

export default HomeContact;
