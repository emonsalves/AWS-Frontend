import { useEffect } from "react";
import { site } from "../config/site";

/**
 * Pone el título de la pestaña de la página actual: "Contacto | MNSLVS Solutions".
 * Sin título, deja solo el nombre del sitio.
 */
export const usePageTitle = (title) => {
    useEffect(() => {
        document.title = title ? `${title} | ${site.name}` : site.name;
    }, [title]);
};
