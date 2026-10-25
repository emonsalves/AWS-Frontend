import { MarqueeAbout } from "../components/marquees/MarqueeAbout";
import { about } from "../config/about";
import { logosMarque1, logosMarque2 } from "../config/technologies";
import { seo } from "../config/seo";
import { usePageSeo } from "../hooks/usePageSeo";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { AboutCommitment, AboutIntro, AboutServices, AboutStory } from "../features/about";

const About = () => {
    usePageSeo(seo.about);
    useRevealOnScroll();

    return (
        <div className="w-full">
            <AboutIntro />
            <AboutStory />
            <AboutServices />
            <section aria-labelledby="tecnologias" className="border-y border-paper-line py-12 dark:border-night-line">
                <h2 id="tecnologias" className="mb-8 text-center text-sm font-medium text-ink-muted dark:text-night-muted">
                    {about.technologies.title}
                </h2>
                <MarqueeAbout direction="left" speed={30} dataLogos={logosMarque1} />
                <MarqueeAbout direction="right" speed={30} dataLogos={logosMarque2} />
            </section>
            <div className="pt-16 sm:pt-28">
                <AboutCommitment />
            </div>
        </div>
    );
};

export default About;
