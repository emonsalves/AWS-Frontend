import { Outlet } from "react-router";
import HeaderPublic from "./HeaderPublic";
import FooterPublic from "./FooterPublic";
import { useCanonical } from "../../hooks/useCanonical";

function LayoutPublic() {
    useCanonical();

    return (
        <div className="flex min-h-screen w-full flex-col bg-paper text-ink transition-colors duration-300 dark:bg-night dark:text-night-text">
            <HeaderPublic />
            <main className="flex w-full flex-1 items-center justify-center pt-[68px]">
                <Outlet />
            </main>
            <FooterPublic />
        </div>
    );
}

export { LayoutPublic };
