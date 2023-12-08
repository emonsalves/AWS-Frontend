import { MarqueeAbout } from "../components/marquees/MarqueeAbout";
import TabAbout from "../components/tabs/TabAbout";

var logosMarque1 = [
    { value: 0, name: "walmart", routeImg: "https://skillicons.dev/icons?i=git" },
    { value: 1, name: "aguas andinas", routeImg: "https://skillicons.dev/icons?i=aws" },
    { value: 2, name: "asmar", routeImg: "https://skillicons.dev/icons?i=bootstrap" },
    { value: 3, name: "banco ripley", routeImg: "https://skillicons.dev/icons?i=express" },
    { value: 4, name: "cap", routeImg: "https://skillicons.dev/icons?i=github" },
    { value: 5, name: "caserones", routeImg: "https://skillicons.dev/icons?i=html" },
    { value: 6, name: "ccu", routeImg: "https://skillicons.dev/icons?i=azure" },
    { value: 7, name: "cencosud", routeImg: "https://skillicons.dev/icons?i=cs" },
    { value: 8, name: "centro compensacion", routeImg: "https://skillicons.dev/icons?i=css" },
    { value: 9, name: "cge", routeImg: "https://skillicons.dev/icons?i=firebase" },
    { value: 10, name: "claro", routeImg: "https://skillicons.dev/icons?i=js" },
    { value: 11, name: "codelco", routeImg: "https://skillicons.dev/icons?i=linux" },
    { value: 12, name: "collahuasi", routeImg: "https://skillicons.dev/icons?i=mysql" },
    { value: 13, name: "coopeuch", routeImg: "https://skillicons.dev/icons?i=mongodb" },
    { value: 14, name: "duoc uc", routeImg: "https://skillicons.dev/icons?i=netlify" },
    { value: 15, name: "generadora metropolitana", routeImg: "https://skillicons.dev/icons?i=nodejs" },
];

var logosMarque2 = [
    { value: 16, name: "guacolda", routeImg: "https://skillicons.dev/icons?i=prisma" },
    { value: 17, name: "hites", routeImg: "https://skillicons.dev/icons?i=py" },
    { value: 18, name: "inmobiliaria manquehue", routeImg: "https://skillicons.dev/icons?i=react" },
    { value: 19, name: "lumin", routeImg: "https://skillicons.dev/icons?i=sass" },
    { value: 20, name: "mvc", routeImg: "https://skillicons.dev/icons?i=sequelize" },
    { value: 21, name: "puro cobre", routeImg: "https://skillicons.dev/icons?i=tailwind" },
    { value: 22, name: "redbank", routeImg: "https://skillicons.dev/icons?i=supabase" },
    { value: 23, name: "sherwin williams", routeImg: "https://skillicons.dev/icons?i=md" },
    { value: 24, name: "sigdo express", routeImg: "https://skillicons.dev/icons?i=nginx" },
    { value: 25, name: "sites", routeImg: "https://skillicons.dev/icons?i=planetscale" },
    { value: 26, name: "sky", routeImg: "https://skillicons.dev/icons?i=vercel" },
    { value: 27, name: "socofar", routeImg: "https://skillicons.dev/icons?i=vscode" },
    { value: 28, name: "transelect", routeImg: "https://skillicons.dev/icons?i=visualstudio" },
    { value: 29, name: "vias chile", routeImg: "https://skillicons.dev/icons?i=postman" },
    { value: 30, name: "walmart", routeImg: "https://skillicons.dev/icons?i=materialui	" },
];

const About = () => {
    return (
        <div className="min-w-full min-h-full bg-gray-200 flex flex-col items-center text-white">
            <h1 className="text-black m-5 text-xl lg:text-3xl animate-fade-up animate-once">
                <strong> About Mnslvs Solutions</strong>
            </h1>
            <TabAbout colorNumber={"2"} />
            <h1 className="text-black text-xl lg:text-3xl mt-10 animate-fade-up animate-once">
                <strong>Tecnologias que utilizamos: </strong>
            </h1>
            <MarqueeAbout direction={"left"} dataLogos={logosMarque1} />
            <MarqueeAbout direction={"right"} dataLogos={logosMarque2} />
        </div>
    );
};

export default About;
