import { createBrowserRouter } from "react-router";
import { routes } from "./routes";

// Enlaces antiguos con # (por ejemplo /#/about) pasan a su ruta limpia (/about)
if (window.location.hash.startsWith("#/")) {
    window.history.replaceState(null, "", window.location.hash.slice(1));
}

const router = createBrowserRouter(routes);

export default router;
