import { Icon } from "../../../components/ui";
import { home } from "../../../config/home";
import { site } from "../../../config/site";
import { mailtoUrl, whatsappUrl } from "../../../lib/contactLinks";

const HomeContact = () => {
    const { contact } = home;

    return (
        <section aria-labelledby="conversemos" className="mx-auto max-w-6xl px-5 pb-16 sm:px-10 sm:pb-24">
            <div className="flex flex-wrap items-center justify-between gap-7 rounded-3xl bg-ink px-6 py-8 text-night-text sm:p-14 dark:bg-primary-500 dark:text-primary-ink">
                <div className="flex max-w-xl flex-col gap-2.5">
                    <h2 id="conversemos" className="text-[28px] leading-tight font-extrabold tracking-tight sm:text-[40px]">
                        {contact.title}
                    </h2>
                    <p className="opacity-80">{contact.text}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                        href={whatsappUrl(site.contact.whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-primary-500 px-[22px] font-bold text-primary-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 dark:bg-primary-ink dark:text-night-text dark:focus-visible:outline-primary-ink"
                    >
                        <Icon name="whatsapp" />
                        {contact.primaryAction}
                    </a>
                    <a
                        href={mailtoUrl(site.contact.email)}
                        className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg border border-white/30 px-[22px] font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 dark:border-primary-ink/35 dark:focus-visible:outline-primary-ink"
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
