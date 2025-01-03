import { Outlet } from "react-router-dom";
import HeaderPublic from "../components/headers/HeaderPublic";
import FooterPublic from "../components/footers/FooterPublic";

function LayoutPublic() {
    return (
        <div className="flex flex-col min-h-screen w-full bg-gray-900">
            <HeaderPublic />
            <main className="flex-1 w-full flex items-center justify-center">
                <Outlet />
            </main>
            <FooterPublic />
        </div>
    );
}

export { LayoutPublic };