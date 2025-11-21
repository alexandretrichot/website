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
                property: "og:url",
                content: "https://alexandretrichot.fr",
            },
            {
                property: "og:type",
                content: "url",
            },
            {
                property: "og:title",
                content: "Alexandre TRICHOT — Architecte Logiciel & Entrepreneur Tech",
            },
            {
                property: "og:description",
                content: "Construire des produits qui durent, mettre la technologie au service du sens.",
            },
            {
                property: "og:image",
                content: "/og-image.jpg",
            },
            {
                property: "twitter:card",
                content: "summary_large_image",
            },
            {
                property: "twitter:domain",
                content: "alexandretrichot.fr",
            },
            {
                property: "twitter:url",
                content: "https://alexandretrichot.fr",
            },
            {
                property: "twitter:title",
                content: "Alexandre TRICHOT — Architecte Logiciel & Entrepreneur Tech",
            },
            {
                property: "twitter:description",
                content: "Alexandre TRICHOT — Architecte logiciel, entrepreneur tech & créatif. Construire des produits qui durent, mettre la technologie au service du sens.",
            },
            {
                property: "twitter:image",
                content: "/og-image.jpg",
            },
        ],
        links: [
            { rel: "stylesheet", href: appCss },
            {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
            },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: "anonymous",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
            },
        ],
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
