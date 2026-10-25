import Marquee from "react-fast-marquee";
import { home } from "../../../config/home";
import { logosMarque1, logosMarque2 } from "../../../config/technologies";

const logos = [...logosMarque1, ...logosMarque2];

const HomeStack = () => (
    <section aria-label={home.stack.title} className="border-y border-paper-line py-8 dark:border-night-line">
        <p className="mb-6 text-center text-sm font-medium text-ink-muted dark:text-night-muted">{home.stack.title}</p>
        <Marquee speed={35} pauseOnHover gradient={false} autoFill>
            {logos.map((logo) => (
                <img
                    key={logo.routeImg}
                    src={logo.routeImg}
                    alt={logo.name}
                    width="40"
                    height="40"
                    loading="lazy"
                    className="mx-6 h-9 w-9 rounded-lg opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:mx-8 sm:h-10 sm:w-10"
                />
            ))}
        </Marquee>
    </section>
);

export default HomeStack;
