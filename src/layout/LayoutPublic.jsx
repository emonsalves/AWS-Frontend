import { Outlet } from "react-router-dom";
import HeaderPublic from "../components/headers/HeaderPublic";
import FooterPublic from "../components/footers/FooterPublic";

function LayoutPublic() {
    return (
        <div className="grid grid-cols-1 grid-rows-[2.25rem,auto,4.25rem] min-h-screen">
            <div className="row-span-1">
                <HeaderPublic />
            </div>
            <div className="row-span-1">
                <Outlet />
            </div>
            <div className="row-span-1">
                <FooterPublic />
            </div>
        </div>
    );
}

export { LayoutPublic };
