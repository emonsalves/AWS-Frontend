import { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ colorNumber }) => {
    const [openTab, setOpenTab] = useState(1);

    const colorTabOpen = [
        "text-xs font-bold uppercase px-5 py-3 shadow-lg border-blue-400 border rounded-lg block leading-normal bg-blue-600",
        "text-xs font-bold uppercase px-5 py-3 shadow-lg border-red-400 border rounded-lg block leading-normal bg-red-600",
        "text-xs font-bold uppercase px-5 py-3 shadow-lg border-green-400 border rounded-lg block leading-normal bg-green-600",
        "text-xs font-bold uppercase px-5 py-3 shadow-lg border-yellow-400 border rounded-lg block leading-normal bg-yellow-600",
        "text-xs font-bold uppercase px-5 py-3 shadow-lg border-purple-400 border rounded-lg block leading-normal bg-purple-600",
        "text-xs font-bold uppercase px-5 py-3 shadow-lg border-pink-400 border rounded-lg block leading-normal bg-pink-600",
        "text-xs font-bold uppercase px-5 py-3 shadow-lg border-gray-400 border rounded-lg block leading-normal bg-gray-600",
    ];

    const colorTabClosed = [
        "text-xs font-bold uppercase px-5 py-3 shadow-lg border-gray-400 opacity-70 border rounded-lg block leading-normal text-blue-600",
        "text-xs font-bold uppercase px-5 py-3 shadow-lg border-gray-400 opacity-70 border rounded-lg block leading-normal text-red-600",
        "text-xs font-bold uppercase px-5 py-3 shadow-lg border-gray-400 opacity-70 border rounded-lg block leading-normal text-green-600",
        "text-xs font-bold uppercase px-5 py-3 shadow-lg border-gray-400 opacity-70 border rounded-lg block leading-normal text-yellow-600",
        "text-xs font-bold uppercase px-5 py-3 shadow-lg border-gray-400 opacity-70 border rounded-lg block leading-normal text-purple-600",
        "text-xs font-bold uppercase px-5 py-3 shadow-lg border-gray-400 opacity-70 border rounded-lg block leading-normal text-pink-600",
        "text-xs font-bold uppercase px-5 py-3 shadow-lg border-gray-400 opacity-70 border rounded-lg block leading-normal text-gray-600",
    ];

    let isTabOpen = colorTabOpen[colorNumber] || `text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-blue-500`;
    let isTabClosed = colorTabClosed[colorNumber] || `text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-blue-500`;

    return (
        <>
            <div className="flex flex-wrap shadow-custom-dark rounded-lg sm:flex-col bg-gray-300 w-[80%]">
                <div className="w-full mt-1">
                    <ul className="flex flex-wrap p-4 flex-row rounded-lg justify-center items-center gap-2" role="tablist">
                        <li className="flex-auto text-center">
                            <a
                                className={openTab === 1 ? `${isTabOpen}` : `${isTabClosed}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                <i className="fas fa-space-shuttle text-base mr-1"></i> Profile
                            </a>
                        </li>
                        <li className="flex-auto text-center">
                            <a
                                className={openTab == 2 ? `${isTabOpen}` : `${isTabClosed}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                <i className="fas fa-cog text-base mr-1"></i> Settings
                            </a>
                        </li>
                        <li className="flex-auto text-center">
                            <a
                                className={openTab == 3 ? `${isTabOpen}` : `${isTabClosed}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                <i className="fas fa-briefcase text-base mr-1"></i> Options
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col break-words bg-gray-300 w-full shadow-lg rounded-b-lg text-black">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab == 1 ? "block" : "hidden"} id="link1">
                                    <p>
                                        Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users
                                        after installed base benefits.
                                        <br />
                                        <br /> Dramatically visualize customer directed convergence without revolutionary ROI.
                                    </p>
                                </div>
                                <div className={openTab == 2 ? "block" : "hidden"} id="link2">
                                    <p>
                                        Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
                                        one-to-one customer service with robust ideas.
                                        <br />
                                        <br />
                                        Dynamically innovate resource-leveling customer service for state of the art customer service.
                                    </p>
                                </div>
                                <div className={openTab == 3 ? "block" : "hidden"} id="link3">
                                    <p>
                                        Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables
                                        for real-time schemas.
                                        <br />
                                        <br /> Dramatically maintain clicks-and-mortar solutions without functional solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function TabsRender() {
    return <Tabs colorNumber="1" />;
}

Tabs.propTypes = {
    colorNumber: PropTypes.string.isRequired,
};
