import { ContainerContact } from "../components/containers/ContainerContact";
import { usePageSeo } from "../hooks/usePageSeo";
import { seo } from "../config/seo";

const Contact = () => {
    usePageSeo(seo.contact);
    return (
        <div className="w-full">
            <ContainerContact />
        </div>
    );
};

export default Contact;
