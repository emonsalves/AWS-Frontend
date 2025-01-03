/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createHashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "../pages/NotFound";
import LoaderPage from "../components/loaders/LoaderPage";
import { LayoutPublic } from "../layout/LayoutPublic";

const createLazyComponent = (importPromise) => {
    return lazy(() => {
        return Promise.all([
            importPromise,
            new Promise(resolve => setTimeout(resolve, 300)) // Minimum loading time
        ]).then(([moduleExports]) => moduleExports);
    });
};

const SuspenseRouter = ({ element }) => {
    return (
        <Suspense fallback={<LoaderPage />}>
            {element}
        </Suspense>
    );
};

// Precarga de componentes críticos
const Home = createLazyComponent(import("../pages/Home"));
if (window.requestIdleCallback) {
    requestIdleCallback(() => {
        Home.preload?.();
    });
}

// Componentes no críticos con lazy loading
const About = createLazyComponent(import("../pages/About"));
const Login = createLazyComponent(import("../pages/Login"));
const Calculador = createLazyComponent(import("../pages/Calculador"));

const router = createHashRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <SuspenseRouter element={<Home />} />,
            },
            {
                path: "About",
                element: <SuspenseRouter element={<About />} />,
            },
            {
                path: "Login",
                element: <SuspenseRouter element={<Login />} />,
            },
            {
                path: "Calculador",
                element: <SuspenseRouter element={<Calculador />} />,
            },
        ],
    },
]);

export default router;
