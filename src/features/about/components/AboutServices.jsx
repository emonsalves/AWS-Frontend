import ServiceVisual from "../../../components/illustrations/ServiceVisual";
import { about } from "../../../config/about";

const AboutServices = () => {
    const { services } = about;

    return (
        <section aria-labelledby="servicios-nosotros" className="mx-auto max-w-6xl px-5 py-16 sm:px-10 sm:py-28">
            <h2
                id="servicios-nosotros"
                data-reveal
                className="mb-12 max-w-3xl text-[32px] leading-[1.08] font-extrabold tracking-[-0.03em] text-ink sm:text-5xl dark:text-night-text"
            >
                {services.title}
            </h2>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {services.items.map((service, index) => (
                    <li
                        key={service.title}
                        data-reveal
                        style={{ "--delay": `${index * 120}ms` }}
                        className="flex flex-col gap-5 rounded-3xl border border-paper-line bg-paper-soft p-6 transition duration-300 hover:-translate-y-1 hover:border-primary-500/60 hover:shadow-custom-light dark:border-night-line dark:bg-night-soft dark:hover:border-primary-500/50 dark:hover:shadow-custom-dark"
                    >
                        <div className="flex min-h-48 flex-col justify-center">
                            <ServiceVisual kind={service.visual} example={service.example} />
                        </div>
                        <h3 className="text-xl font-bold text-ink dark:text-night-text">{service.title}</h3>
                        <p className="text-ink-muted dark:text-night-muted">{service.text}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default AboutServices;
