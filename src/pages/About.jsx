import { MarqueeAbout } from "../components/marquees/MarqueeAbout";
import TabAbout from "../components/tabs/TabAbout";

var logosMarque1 = [
    { value: 0, name: "c#", routeImg: "https://skillicons.dev/icons?i=cs" },
    { value: 1, name: "python", routeImg: "https://skillicons.dev/icons?i=py" },
    { value: 2, name: "javascript", routeImg: "https://skillicons.dev/icons?i=js" },
    { value: 3, name: "node", routeImg: "https://skillicons.dev/icons?i=nodejs" },
    { value: 4, name: "express", routeImg: "https://skillicons.dev/icons?i=express" },
    { value: 5, name: "react", routeImg: "https://skillicons.dev/icons?i=react" },
    { value: 6, name: "html", routeImg: "https://skillicons.dev/icons?i=html" },
    { value: 7, name: "css", routeImg: "https://skillicons.dev/icons?i=css" },
    { value: 8, name: "sass", routeImg: "https://skillicons.dev/icons?i=sass" },
    { value: 9, name: "bootstrap", routeImg: "https://skillicons.dev/icons?i=bootstrap" },
    { value: 10, name: "tailwind", routeImg: "https://skillicons.dev/icons?i=tailwind" },
    { value: 11, name: "materialUI", routeImg: "https://skillicons.dev/icons?i=materialui" },
    { value: 12, name: "git", routeImg: "https://skillicons.dev/icons?i=git" },
];

var logosMarque2 = [
    { value: 0, name: "linux", routeImg: "https://skillicons.dev/icons?i=linux" },
    { value: 1, name: "ngnix", routeImg: "https://skillicons.dev/icons?i=nginx" },
    { value: 2, name: "azure", routeImg: "https://skillicons.dev/icons?i=azure" },
    { value: 3, name: "amazon", routeImg: "https://skillicons.dev/icons?i=aws" },
    { value: 4, name: "firebase", routeImg: "https://skillicons.dev/icons?i=firebase" },
    { value: 5, name: "mongoDb", routeImg: "https://skillicons.dev/icons?i=mongodb" },
    { value: 6, name: "mySQL", routeImg: "https://skillicons.dev/icons?i=mysql" },
    { value: 7, name: "prisma", routeImg: "https://skillicons.dev/icons?i=prisma" },
    { value: 8, name: "sequelize", routeImg: "https://skillicons.dev/icons?i=sequelize" },
    { value: 9, name: "supabase", routeImg: "https://skillicons.dev/icons?i=supabase" },
    { value: 10, name: "markdown", routeImg: "https://skillicons.dev/icons?i=md" },
    { value: 11, name: "netlify", routeImg: "https://skillicons.dev/icons?i=netlify" },
    { value: 12, name: "vercel", routeImg: "https://skillicons.dev/icons?i=vercel" },
];

const About = () => {
    return (
        <div className="min-w-full min-h-full bg-gray-200 flex flex-col items-center text-white">
            <h1 className="text-black my-5 text-xl lg:text-3xl animate-fade-up animate-once">
                <strong> About Mnslvs Solutions</strong>
            </h1>
            <TabAbout colorNumber={"2"} />
            <h1 className="text-black text-xl my-5 lg:text-3xl animate-fade-up animate-once">
                <strong>Tecnologias que utilizamos: </strong>
            </h1>
            <MarqueeAbout direction={"left"} speed={25} dataLogos={logosMarque1} />
            <MarqueeAbout direction={"right"} speed={25} dataLogos={logosMarque2} />

        </div>
    );
};

export default About;
