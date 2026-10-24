import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./src/config/site.js";
import { localBusinessJsonLd } from "./src/lib/structuredData.js";

// Escribe en index.html la ficha de empresa (JSON-LD) con los datos de src/config/site.js
const structuredData = () => ({
    name: "structured-data",
    transformIndexHtml: () => [
        {
            tag: "script",
            attrs: { type: "application/ld+json" },
            children: JSON.stringify(localBusinessJsonLd(site)),
            injectTo: "head",
        },
    ],
});

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), structuredData()],

    server: {
        port: 3500, // Puerto de salida
    },
});
