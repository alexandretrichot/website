import { nitro } from "nitro/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    server: {
        port: 3000,
    },
    build: {
        sourcemap: true,
    },
    plugins: [
        ViteImageOptimizer(),
        tsConfigPaths(),
        tanstackStart(),
        nitro({
            preset: "vercel",
        }),
        viteReact(),
    ],
});
