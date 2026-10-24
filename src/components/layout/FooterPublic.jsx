import { site } from "../../config/site";
import Icon from "../ui/Icon";

const FooterPublic = () => {
    const socialLinks = site.social.filter((item) => item.url);

    return (
        <footer className="border-t border-paper-line dark:border-night-line">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-7 text-sm text-ink-muted sm:px-10 dark:text-night-muted">
                <p>
                    <strong className="text-ink dark:text-night-text">{site.name}</strong> · {site.location}
                </p>
                {socialLinks.length > 0 && (
                    <ul className="flex items-center gap-2 text-lg">
                        {socialLinks.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={item.name}
                                    className="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:text-ink dark:hover:text-night-text"
                                >
                                    <Icon name={item.icon} />
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
                <p>&copy; {new Date().getFullYear()} · Todos los derechos reservados</p>
            </div>
        </footer>
    );
};

export default FooterPublic;
