import TabAbout from "../components/tabs/TabAbout";

const About = () => {
    return (
        <div className="min-w-full min-h-full bg-gray-200 flex flex-col items-center text-white">
            <h1 className="text-black m-5 text-xl lg:text-3xl animate-fade-up animate-once">
                <strong> About Mnslvs Solutions</strong>
            </h1>
            <TabAbout colorNumber={"2"} />
        </div>
    );
};

export default About;
