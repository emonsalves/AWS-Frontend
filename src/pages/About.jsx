import TabsRender from "../components/tabs/TabAbout";

const About = () => {
    return (
        <div className="min-h-full bg-gray-900 flex flex-col items-center text-white">
            <h1>About Page</h1>
            <TabsRender />
        </div>
    );
};

export default About;
