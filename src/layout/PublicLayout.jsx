import { Outlet } from "react-router-dom";
import { NavPublic } from "../components/navbars/PublicNavbar";

function PublicLayout() {
  return (
    <div className="grid grid-row-2 grid-flow-row min-h-screen">
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
