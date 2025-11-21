/// <reference types="vite/client" />

import appCss from "@/styles/app.css?url";

import { DefaultCatchBoundary } from "@/components/default-catch-boundary";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { BackgroundWaves } from "@/components/background-waves";

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: "utf-8",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                title: "Alexandre TRICHOT — Architecte Logiciel & Entrepreneur Tech",
            },
            {
                name: "description",
                content: "Alexandre TRICHOT — Architecte logiciel, entrepreneur tech & créatif. Construire des produits qui durent, mettre la technologie au service du sens.",
            },
            {
                property: "og:title",
                content: "Alexandre TRICHOT — Architecte Logiciel & Entrepreneur Tech",
            },
            {
                property: "og:description",
                content: "Construire des produits qui durent, mettre la technologie au service du sens.",
            },
        ],
        links: [{ rel: "stylesheet", href: appCss }],
    }),
    errorComponent: DefaultCatchBoundary,
    component: RootDocument,
});

function RootDocument() {
    return (
        <html suppressHydrationWarning lang="fr">
            <head>
                <HeadContent />
            </head>
            <body className="bg-[#030303]">
                <BackgroundWaves />
                <Outlet />
                <Scripts />
            </body>
        </html>
    );
}
