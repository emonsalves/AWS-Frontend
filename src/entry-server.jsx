import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import { routes } from "./routes/routes";

/**
 * Renderiza una ruta a HTML en Node. Lo usa scripts/prerender.mjs al compilar.
 * Espera a que carguen las páginas diferidas (onAllReady) para que el HTML traiga el contenido completo.
 */
export const render = async (path) => {
    const handler = createStaticHandler(routes);
    const context = await handler.query(new Request(`http://localhost${path}`));
    const router = createStaticRouter(handler.dataRoutes, context);

    return new Promise((resolve, reject) => {
        let html = "";
        const output = new PassThrough();
        output.on("data", (chunk) => (html += chunk));
        output.on("end", () => resolve(html));

        const { pipe } = renderToPipeableStream(
            <ThemeProvider>
                <StaticRouterProvider router={router} context={context} hydrate={false} />
            </ThemeProvider>,
            {
                onAllReady: () => pipe(output),
                onShellError: reject,
                onError: reject,
            },
        );
    });
};
