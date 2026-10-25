import { usePageSeo } from "../hooks/usePageSeo";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { seo } from "../config/seo";
import { HomeAudience, HomeContact, HomeHero, HomeProcess, HomeServices, HomeStack } from "../features/home";

const Home = () => {
    usePageSeo(seo.home);
    useRevealOnScroll();

    return (
        <div className="w-full">
            <HomeHero />
            <HomeStack />
            <HomeServices />
            <HomeAudience />
            <HomeProcess />
            <HomeContact />
        </div>
    );
};

export default Home;
