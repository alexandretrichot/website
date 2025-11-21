import { motion } from "motion/react";
import { useRef, useState } from "react";
import profile from "../images/profile.png";

export function ProfileCard3D() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState<[x: number, y: number]>([0, 0]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

        setPos([x, y]);
    };

    const handleMouseLeave = () => {
        setPos([0, 0]);
    };

    return (
        <div ref={containerRef} className="relative w-full h-full" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ perspective: "1070px" }}>
            <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateX: -pos[1] * 10, rotateY: pos[0] * 10 }}
                transition={{ type: "spring", stiffness: 150, damping: 60 }}
            >
                <div
                    className="absolute inset-0 aspect-square max-w-full max-h-full m-auto rounded-3xl overflow-hidden border border-white/5 scale-105 backdrop-blur-sm"
                    style={{ transform: "translateZ(-50px)" }}
                >
                    <div className="absolute inset-0 bg-linear-to-br from-[#5F0205] to-[#E14400]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,200,100,0.2),transparent_50%)]" />
                </div>

                <div
                    className="absolute inset-0 aspect-square max-w-full max-h-full m-auto rounded-3xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_60px_-10px_rgba(0,0,0,0.5),0_0_100px_10px_rgba(255,107,0,0.3)] border-none border-white/10 backdrop-blur-sm"
                    style={{
                        transform: "translateZ(0px)",
                    }}
                >
                    <img src={profile} alt="profil Alexandre TRICHOT" className="w-full h-full object-cover" />

                    {/* Edge glow */}
                    <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_30px_rgba(255,150,50,0.1)] pointer-events-none" />
                </div>
            </motion.div>
        </div>
    );
}
