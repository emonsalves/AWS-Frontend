/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createHashRouter } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import LoaderPage from "../components/loaders/LoaderPage";
import { LayoutPublic } from "../layout/LayoutPublic";

const createLazyComponent = (importPromise) => {
    return lazy(() => importPromise);
};

const SuspenseRouter = ({ element }) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsReady(true);
        }, 1000); // 2 segundos de carga

        return () => {
            clearTimeout(timer); // Limpia el temporizador si el componente se desmonta antes de que termine la carga.
        };
    }, []);

    return <Suspense fallback={<LoaderPage />}>{isReady ? element : <LoaderPage />}</Suspense>;
};

const Home = createLazyComponent(import("../pages/Home"));
const About = createLazyComponent(import("../pages/About"));
const Login = createLazyComponent(import("../pages/Login"));
const Calculador = createLazyComponent(import("../pages/Calculador"));
const RecoverPassword = createLazyComponent(import("../pages/RecoverPassword"));
const Contact = createLazyComponent(import("../pages/Contact"));
const Followers = createLazyComponent(import("../pages/Followers"));
const NotFound = createLazyComponent(import("../pages/NotFound"));

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
                path: "recover-password",
                element: <SuspenseRouter element={<RecoverPassword />} />,
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
