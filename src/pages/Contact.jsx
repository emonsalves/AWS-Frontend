import { ContainerContact } from "../components/containers/ContainerContact";
import { ContactSteps } from "../features/contact";
import { usePageSeo } from "../hooks/usePageSeo";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { seo } from "../config/seo";

const Contact = () => {
    usePageSeo(seo.contact);
    useRevealOnScroll();
    return (
        <div className="w-full">
            <ContainerContact />
            <ContactSteps />
        </div>
    );
};

export default Contact;
