import type { ErrorComponentProps } from "@tanstack/react-router";
import { CircleAlertIcon } from "lucide-react";
import { motion } from "motion/react";

type DefaultCatchBoundaryProps = ErrorComponentProps & {
    title?: string;
    message?: string;
    showBackButton?: boolean;
};

export function DefaultCatchBoundary({ error, title = "Something went wrong!", message = "I'm working on the problem right away.\nPlease try again later." }: DefaultCatchBoundaryProps) {
    return (
        <motion.div initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} className="min-w-0 flex-1 m-8 p-4 flex flex-col items-center gap-2 text-center whitespace-pre-wrap">
            <CircleAlertIcon className="w-12 h-12 m-2" />

            <h1 className="text-foreground text-2xl font-semibold">{title}</h1>

            <p className="text-muted-foreground">{message}</p>
        </motion.div>
    );
}
