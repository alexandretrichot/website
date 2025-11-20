/// <reference types="vite/client" />

import appCss from "@/styles/app.css?url";

import { DefaultCatchBoundary } from "@/components/default-catch-boundary";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";

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
        ],
        links: [{ rel: "stylesheet", href: appCss }],
    }),
    errorComponent: DefaultCatchBoundary,
    component: RootDocument,
});

function RootDocument() {
    return (
        <html suppressHydrationWarning>
            <head>
                <HeadContent />
            </head>
            <body>
                <Outlet />
                <Scripts />
            </body>
        </html>
    );
}
