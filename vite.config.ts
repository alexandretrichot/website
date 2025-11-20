import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";

export default defineConfig({
    server: {
        port: 3000,
    },
    build: {
        sourcemap: true,
    },
    plugins: [tsConfigPaths(), tanstackStart(), nitroV2Plugin({ preset: "node-server" }), viteReact()],
});
