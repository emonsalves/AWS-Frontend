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
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {services.items.map((service, index) => (
                    <li key={service.title} data-reveal style={{ "--delay": `${index * 120}ms` }} className="group flex flex-col gap-4">
                        <div className="overflow-hidden rounded-3xl border border-paper-line dark:border-night-line">
                            <img
                                src={service.image}
                                alt=""
                                loading="lazy"
                                width="400"
                                height="260"
                                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
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
