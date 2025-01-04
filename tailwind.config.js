/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            red: "#ff006e",
            blue: "#00a8e8",
            yellow: "#ffe066",
            green: "#04f06a",
            "blue-dark": "#00374d",
            "red-dark": "#a50d12",
            "green-dark": "#02642c",
            "yellow-dark": "#fec601",
            black: "#302b2a",
        },
        fontFamily: {
            sans: [
                "Open Sans",
                "Segoe UI",
                "Roboto",
                "Oxygen",
                "Ubuntu",
                "Cantarell",
                "Fira Sans",
                "Droid Sans",
                "Helvetica Neue",
                "sans-serif"
            ],
            serif: ["Merriweather", "Inter", "Times New Roman", "serif"],
            monospace: ["Source Code Pro", "Menlo", "Monaco", "Courier New", "Courier", "monospace"]
        },
        extend: {}
    },
    plugins: []
};
