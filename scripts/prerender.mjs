/**
 * Prerender: escribe el HTML de las páginas públicas en dist/ para que Google y las vistas previas
 * de enlaces lean el contenido sin ejecutar JavaScript. Corre después de "vite build" (ver package.json).
 *
 * dist/<ruta>/index.html  → cada página de src/config/seo.js (CloudFront sirve /about desde /about/index.html)
 * dist/app.html           → la plantilla vacía, para las rutas sin prerender (login, 404...)
 */
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { seo } from "../src/config/seo.js";
import { site } from "../src/config/site.js";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
const serverDir = fileURLToPath(new URL("../dist-server/", import.meta.url));
const { render } = await import(new URL("../dist-server/entry-server.js", import.meta.url));

const template = await readFile(`${dist}index.html`, "utf8");
await writeFile(`${dist}app.html`, template);

const escape = (text) => text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const withHead = (html, { path, title, description, noindex }) => {
    const fullTitle = escape(`${title} | ${site.name}`);
    const url = `${site.url}${path}`;
    return html
        .replace(/<title>.*?<\/title>/, `<title>${fullTitle}</title>`)
        .replace(/(<meta name="description" content=")[^"]*"/, `$1${escape(description)}"`)
        .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${fullTitle}"`)
        .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${escape(description)}"`)
        .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
        .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
        .replace("</head>", noindex ? '    <meta name="robots" content="noindex" />\n</head>' : "</head>");
};

for (const page of Object.values(seo)) {
    const appHtml = await render(page.path);
    const html = withHead(template, page).replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    const dir = page.path === "/" ? dist : `${dist}${page.path.slice(1)}/`;
    await mkdir(dir, { recursive: true });
    await writeFile(`${dir}index.html`, html);
    console.info(`prerender: ${page.path}`);
}

await rm(serverDir, { recursive: true, force: true });
