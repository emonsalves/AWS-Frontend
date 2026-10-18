/* eslint-disable react-refresh/only-export-components */
import { createHashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import LoaderPage from "../components/loaders/LoaderPage";
import { LayoutPublic } from "../layout/LayoutPublic";

const SuspenseRouter = ({ element }) => {
    return <Suspense fallback={<LoaderPage />}>{element}</Suspense>;
};

SuspenseRouter.propTypes = {
    element: PropTypes.node.isRequired,
};

// Cada página se descarga solo cuando se visita
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Login = lazy(() => import("../pages/Login"));
const Calculador = lazy(() => import("../pages/Calculador"));
const Recovery = lazy(() => import("../pages/Recovery"));
const Contact = lazy(() => import("../pages/Contact"));
const Followers = lazy(() => import("../pages/Followers"));
const NotFound = lazy(() => import("../pages/NotFound"));

const router = createHashRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <SuspenseRouter element={<NotFound />} />,
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
                path: "recovery",
                element: <SuspenseRouter element={<Recovery />} />,
            },
            {
                path: "Calculador",
                element: <SuspenseRouter element={<Calculador />} />,
            },
            {
                path: "Contacto",
                element: <SuspenseRouter element={<Contact />} />,
            },
            {
                path: "Followers",
                element: <SuspenseRouter element={<Followers />} />,
            }
        ],
    },
]);

export default router;
