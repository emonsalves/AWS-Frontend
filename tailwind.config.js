/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            boxShadow: {
                "custom-light":
                    "0px 0px 0px 2px rgba(6, 24, 44, 0.4), 0px 4px 6px -1px rgba(6, 24, 44, 0.65), 0px 1px 0px inset rgba(255, 255, 255, 0.08)",
                "custom-dark": "0px 2px 8px rgba(17, 17, 26, 0.1), 0px 4px 12px rgba(17, 17, 26, 0.1), 0px 8px 28px rgba(17, 17, 26, 0.5)",
            },
        },
    },
    plugins: [require("tailwindcss-animated")],
};
