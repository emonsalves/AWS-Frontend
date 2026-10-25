import { Icon } from "../../../components/ui";
import { home } from "../../../config/home";
import { site } from "../../../config/site";
import { mailtoUrl, whatsappUrl } from "../../../lib/contactLinks";

const HomeContact = () => {
    const { contact } = home;

    return (
        <section aria-labelledby="conversemos" className="mx-auto max-w-6xl px-5 py-16 sm:px-10 sm:py-28">
            <div data-reveal className="flex flex-col items-start gap-8">
                <h2
                    id="conversemos"
                    className="max-w-4xl text-[40px] leading-[1.02] font-extrabold tracking-[-0.04em] text-ink sm:text-7xl dark:text-night-text"
                >
                    {contact.title}
                </h2>
                <p className="max-w-2xl text-lg text-ink-muted sm:text-xl dark:text-night-muted">{contact.text}</p>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                    <a
                        href={whatsappUrl(site.contact.whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="anim-ring inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl bg-primary-500 px-7 text-lg font-bold text-primary-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:focus-visible:outline-primary-400"
                    >
                        <Icon name="whatsapp" />
                        {contact.primaryAction}
                    </a>
                    <a
                        href={mailtoUrl(site.contact.email)}
                        className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl border border-paper-line px-7 text-lg font-semibold text-ink transition-colors hover:bg-paper-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:border-night-line dark:text-night-text dark:hover:bg-night-soft dark:focus-visible:outline-primary-400"
                    >
                        <Icon name="envelope" />
                        {contact.secondaryAction}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;
