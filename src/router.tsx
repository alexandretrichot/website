import { createRouter, Navigate } from "@tanstack/react-router";
import { DefaultCatchBoundary } from "./components/default-catch-boundary";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
    const router = createRouter({
        routeTree,
        defaultPreload: "intent",
        defaultErrorComponent: DefaultCatchBoundary,
        defaultNotFoundComponent: () => <Navigate to="/" replace />,
        scrollRestoration: true,
    });

    return router;
}

declare module "@tanstack/react-router" {
    interface Register {
        router: ReturnType<typeof getRouter>;
    }
}
