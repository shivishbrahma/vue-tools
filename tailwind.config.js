/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            base: "#302b27",
            primary: "#00374d",
            secondary: "#a50d12",
            tertiary: "#02642c",
            quaternary: "#fec601",
            "base-bg": "#ffffff",
            "primary-bg": "#e6f8ff",
            red: "#ff006e",
            green: "#4daa57"
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
            serif: ["Merriweather", "serif"],
            mono: ["Source Code Pro", "Menlo", "Monaco", "Courier New", "Courier", "monospace"]
        },
        extend: {}
    },
    plugins: []
};
