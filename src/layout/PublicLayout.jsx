import { Outlet } from "react-router-dom";
import { NavPublic } from "../components/navbars/PublicNavbar";

function PublicLayout() {
    return (
        <div className="grid grid-cols-1 grid-rows-[5%,95%] min-h-screen">
            <div className="row-span-1">
                <NavPublic />
            </div>
            <div className="row-span-1">
                <Outlet />
            </div>
        </div>
    );
}

export { PublicLayout };
