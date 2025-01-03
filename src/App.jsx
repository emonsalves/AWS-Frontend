import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import router from "./routes/router";
import './critical.css';
import React from 'react';

// Preload de recursos críticos
const preloadResources = () => {
    const links = [
        { rel: 'preload', href: '/fonts/your-main-font.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
        { rel: 'preload', href: '/images/hero-image.webp', as: 'image' }
    ];

    links.forEach(link => {
        const linkEl = document.createElement('link');
        Object.entries(link).forEach(([key, value]) => {
            linkEl[key] = value;
        });
        document.head.appendChild(linkEl);
    });
};

function App() {
    React.useEffect(() => {
        preloadResources();
    }, []);

    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
