import { Calculador } from "../features/calculator";
import { usePageTitle } from "../hooks/usePageTitle";

const CalculadorPage = () => {
    usePageTitle("Calculador de cuentas");
    return <Calculador />;
};

export default CalculadorPage;
