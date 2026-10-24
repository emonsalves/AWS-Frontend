import { Followers } from "../features/followers";
import { usePageTitle } from "../hooks/usePageTitle";

const FollowersPage = () => {
    usePageTitle("Followers");
    return <Followers />;
};

export default FollowersPage;
