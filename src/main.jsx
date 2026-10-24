import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles/mobile-tables.css";

const root = document.getElementById("root");
const app = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Las páginas prerenderizadas ya traen el HTML: React lo reutiliza (hydrate) en vez de volver a dibujarlo
if (root.hasChildNodes()) {
    ReactDOM.hydrateRoot(root, app);
} else {
    ReactDOM.createRoot(root).render(app);
}
