import { Calculador } from "../features/calculator";
import { usePageSeo } from "../hooks/usePageSeo";
import { seo } from "../config/seo";

const CalculadorPage = () => {
    usePageSeo(seo.calculator);
    return <Calculador />;
};

export default CalculadorPage;
