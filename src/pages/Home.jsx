import { usePageSeo } from "../hooks/usePageSeo";
import { seo } from "../config/seo";
import { HomeAudience, HomeContact, HomeHero, HomeProcess, HomeServices } from "../features/home";

const Home = () => {
    usePageSeo(seo.home);

    return (
        <div className="w-full">
            <HomeHero />
            <HomeServices />
            <HomeAudience />
            <HomeProcess />
            <HomeContact />
        </div>
    );
};

export default Home;
