import { useEffect } from "react";
import { useLocation } from "react-router";
import { site } from "../config/site";

/**
 * Apunta el <link rel="canonical"> de index.html a la ruta actual, en minúsculas,
 * para que /About y /about cuenten como una sola página.
 */
export const useCanonical = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const link = document.querySelector('link[rel="canonical"]');
        if (link) {
            link.href = `${site.url}${pathname.toLowerCase()}`;
        }
    }, [pathname]);
};
