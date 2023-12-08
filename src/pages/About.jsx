import TabsRender from "../components/tabs/TabAbout";

const About = () => {
    return (
        <div className="min-w-full min-h-full bg-gray-200 flex flex-col items-center text-white">
            <h1>About Page</h1>
            <TabsRender />
        </div>
    );
};

export default About;
