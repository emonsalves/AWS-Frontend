/* eslint-disable react-refresh/only-export-components */
import { createHashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import LoaderPage from "../components/loaders/LoaderPage";
import { LayoutPublic } from "../components/layout/LayoutPublic";
import NotFound from "../pages/NotFound";

const RELOAD_FLAG = "chunk-reload";

// Tras un despliegue, los chunks antiguos ya no existen en S3: si una pestaña abierta
// falla al cargar una página, recarga una vez para obtener la versión nueva.
const lazyPage = (importPage) =>
    lazy(() =>
        importPage()
            .then((module) => {
                sessionStorage.removeItem(RELOAD_FLAG);
                return module;
            })
            .catch((error) => {
                if (!sessionStorage.getItem(RELOAD_FLAG)) {
                    sessionStorage.setItem(RELOAD_FLAG, "1");
                    window.location.reload();
                    return new Promise(() => {});
                }
                throw error;
            }),
    );

const SuspenseRouter = ({ element }) => {
    return <Suspense fallback={<LoaderPage />}>{element}</Suspense>;
};

SuspenseRouter.propTypes = {
    element: PropTypes.node.isRequired,
};

// Cada página se descarga solo cuando se visita
const Home = lazyPage(() => import("../pages/Home"));
const About = lazyPage(() => import("../pages/About"));
const Login = lazyPage(() => import("../pages/Login"));
const Calculador = lazyPage(() => import("../pages/Calculador"));
const Recovery = lazyPage(() => import("../pages/Recovery"));
const Contact = lazyPage(() => import("../pages/Contact"));
const Followers = lazyPage(() => import("../pages/Followers"));

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
