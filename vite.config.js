import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
    base: "/kodakriti/",
    define: {
        "process.env.PUBLIC_URL": JSON.stringify(
            process.env.NODE_ENV === "production" ? "https://shivishbrahma.github.io/" : "http://localhost:5173/"
        ),
        "process.env.BASE_URL": JSON.stringify(
            process.env.NODE_ENV === "production" ? "https://shivishbrahma.github.io/kodakriti/" : "http://localhost:5173/kodakriti/"
        ),
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    },
    plugins: [
        vue({}),
        legacy({
            targets: ["> 1%", "last 2 versions", "not dead", "not ie 11"]
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".vue", ".json"],
        alias: {
            "@": "/src"
        }
    },
    build: {
        chunkSizeWarningLimit: 2000
    }
});
