import { Followers } from "../features/followers";
import { usePageSeo } from "../hooks/usePageSeo";
import { seo } from "../config/seo";

const FollowersPage = () => {
    usePageSeo(seo.followers);
    return <Followers />;
};

export default FollowersPage;
