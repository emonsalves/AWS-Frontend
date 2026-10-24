import { useEffect } from "react";
import { site } from "../config/site";

const setMeta = (name, content) => {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!content) {
        meta?.remove();
        return;
    }
    if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.append(meta);
    }
    meta.content = content;
};

/**
 * Aplica el título, la descripción y el "noindex" de una página de src/config/seo.js
 * al navegar dentro del sitio (el HTML prerenderizado ya los trae al cargar).
 */
export const usePageSeo = ({ title, description, noindex = false }) => {
    useEffect(() => {
        document.title = `${title} | ${site.name}`;
        setMeta("description", description);
        setMeta("robots", noindex ? "noindex" : null);
    }, [title, description, noindex]);
};
