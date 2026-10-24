import { Icon } from "../../../components/ui";
import { home } from "../../../config/home";
import SectionTitle from "./SectionTitle";

const HomeAudience = () => {
    const { audience } = home;

    return (
        <section aria-labelledby="para-quien" className="px-4 py-12">
            <SectionTitle id="para-quien">{audience.title}</SectionTitle>
            <div className="mx-auto max-w-3xl">
                <p className="mb-6 text-center text-lg text-gray-700 dark:text-gray-300">{audience.intro}</p>
                <p className="mb-4 font-semibold text-gray-900 dark:text-white">{audience.listTitle}</p>
                <ul className="space-y-3">
                    {audience.items.map((item) => (
                        <li key={item} className="flex gap-3 text-gray-700 dark:text-gray-300">
                            <Icon name="check" className="mt-1 shrink-0 text-green-700 dark:text-green-400" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HomeAudience;
