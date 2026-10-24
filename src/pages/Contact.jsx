import { ContainerContact } from "../components/containers/ContainerContact";
import { usePageTitle } from "../hooks/usePageTitle";

const Contact = () => {
    usePageTitle("Contacto");
    return (
        <div className="w-full min-h-full flex items-center justify-center py-2">
            <ContainerContact />
        </div>
    );
};

export default Contact;
