import { contact } from "../../../config/contact";

const ContactSteps = () => {
    const { nextSteps } = contact;

    return (
        <section aria-labelledby="pasos-contacto" className="border-t border-paper-line bg-paper-soft dark:border-night-line dark:bg-night-soft">
            <div className="mx-auto max-w-6xl px-5 py-16 sm:px-10 sm:py-24">
                <h2
                    id="pasos-contacto"
                    data-reveal
                    className="mb-12 text-[28px] leading-[1.1] font-extrabold tracking-[-0.03em] text-ink sm:text-4xl dark:text-night-text"
                >
                    {nextSteps.title}
                </h2>
                <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
                    <span
                        aria-hidden="true"
                        data-reveal
                        className="reveal-line absolute top-6 right-[calc((100%_-_4rem)/3_-_1.5rem)] left-6 hidden h-px bg-primary-500 md:block"
                    />
                    {nextSteps.items.map((step, index) => (
                        <li key={step.title} data-reveal style={{ "--delay": `${150 + index * 200}ms` }} className="relative flex gap-5 md:flex-col">
                            <span
                                className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-extrabold ${
                                    index === nextSteps.items.length - 1
                                        ? "bg-primary-500 text-primary-ink"
                                        : "border border-paper-line bg-paper text-ink dark:border-night-line dark:bg-night dark:text-night-text"
                                }`}
                            >
                                {index + 1}
                            </span>
                            <div>
                                <h3 className="text-xl font-bold text-ink dark:text-night-text">{step.title}</h3>
                                <p className="mt-2 text-ink-muted dark:text-night-muted">{step.text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default ContactSteps;
