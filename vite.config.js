import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    server: {
        port: 3500, // Puerto de salida
        host: '0.0.0.0', // Permitir conexiones desde cualquier IP (necesario para Docker)
    },
});
