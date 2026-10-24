import { Card } from "../../../components/ui";
import { home } from "../../../config/home";
import SectionTitle from "./SectionTitle";

const HomeProcess = () => {
    const { process } = home;

    return (
        <section aria-labelledby="como-trabajamos" className="px-4 py-12">
            <SectionTitle id="como-trabajamos">{process.title}</SectionTitle>
            <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {process.steps.map((step, index) => (
                    <li key={step.title}>
                        <Card className="h-full">
                            <span
                                aria-hidden="true"
                                className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 font-bold text-white"
                            >
                                {index + 1}
                            </span>
                            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{step.text}</p>
                        </Card>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default HomeProcess;
