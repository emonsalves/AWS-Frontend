import { Link } from "react-router";
import { Icon } from "../../../components/ui";
import { about } from "../../../config/about";
import { site } from "../../../config/site";
import { whatsappUrl } from "../../../lib/contactLinks";

const AboutCommitment = () => {
    const { commitment } = about;

    return (
        <section aria-labelledby="compromiso" className="mx-auto max-w-6xl px-5 pb-16 sm:px-10 sm:pb-28">
            <div
                data-reveal
                className="grid gap-10 rounded-[28px] bg-ink px-6 py-10 text-night-text sm:p-14 lg:grid-cols-[1.2fr_1fr] lg:items-end dark:bg-night-soft dark:ring-1 dark:ring-night-line"
            >
                <div>
                    <h2 id="compromiso" className="text-[30px] leading-[1.1] font-extrabold tracking-[-0.03em] sm:text-[44px]">
                        {commitment.title}
                    </h2>
                    {commitment.text.map((paragraph) => (
                        <p key={paragraph} className="mt-5 text-lg text-night-muted">
                            {paragraph}
                        </p>
                    ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                    <a
                        href={whatsappUrl(site.contact.whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="anim-ring inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl bg-primary-500 px-7 text-lg font-bold text-primary-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
                    >
                        <Icon name="whatsapp" />
                        {commitment.primaryAction}
                    </a>
                    <Link
                        to="/contacto"
                        className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl border border-white/25 px-7 text-lg font-semibold transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
                    >
                        {commitment.secondaryAction}
                        <Icon name="arrow-right" className="text-sm" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutCommitment;
