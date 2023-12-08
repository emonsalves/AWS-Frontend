import { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = useState(1);

    let isTabOpen = `text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-red-600`;
    let isTabClosed = `text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-red-600`;

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded text-black">
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
    return <Tabs color="blue" />;
}

Tabs.propTypes = {
    color: PropTypes.string.isRequired,
};
