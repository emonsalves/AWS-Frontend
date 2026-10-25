import { about } from "../../../config/about";

const AboutIntro = () => (
    <section aria-labelledby="nosotros-titulo" className="relative overflow-hidden">
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#E2E8E5_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_85%)] bg-[size:22px_22px] dark:bg-[radial-gradient(#1E2A25_1px,transparent_1px)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 pt-14 pb-16 sm:px-10 sm:pt-24 sm:pb-24">
            <p className="anim-rise mb-5 font-semibold text-primary-700 dark:text-primary-400">{about.label}</p>
            <h1
                id="nosotros-titulo"
                className="anim-rise max-w-4xl text-[40px] leading-[1.04] font-extrabold tracking-[-0.04em] text-ink sm:text-[64px] dark:text-night-text"
                style={{ "--delay": "80ms" }}
            >
                {about.title}
            </h1>
            <div className="mt-10 grid gap-6 text-lg text-ink-muted sm:text-xl lg:grid-cols-2 lg:gap-12 dark:text-night-muted">
                {about.intro.map((paragraph, index) => (
                    <p key={paragraph} className="anim-rise" style={{ "--delay": `${180 + index * 100}ms` }}>
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    </section>
);

export default AboutIntro;
