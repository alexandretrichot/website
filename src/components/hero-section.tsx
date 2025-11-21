import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { motion } from "motion/react";
// import { HeroGeometric } from "./hero-geometric";
import { BackgroundWaves } from "./background-waves";
import { ProfileCard3D } from "./profile-card-3d";

export function HeroSection() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-between overflow-hidden p-8 font-sans md:p-12">
            {/* Animated Background */}
            <BackgroundWaves />
            {/* <HeroGeometric /> */}

            {/* Header */}
            <header className="z-30 flex w-full max-w-7xl items-center justify-between"></header>

            {/* Main Content Area */}
            <div className="relative flex w-full max-w-7xl grow flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Left Text Content - Column Layout */}
                <div className="z-20 flex flex-col justify-center space-y-8 flex-1 order-2 md:order-1">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center md:text-left">
                        <h1 className="text-5xl font-black text-white md:text-6xl lg:text-7xl leading-[0.9] tracking-[-0.01em] font-display">
                            <span className="block bg-clip-text text-transparent bg-linear-to-b from-white to-white/70">Alexandre</span>
                            <span className="block bg-clip-text text-transparent bg-linear-to-r from-orange-300 via-red-300 to-amber-300">TRICHOT</span>
                        </h1>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center md:text-left space-y-6">
                        <p className="mx-auto max-w-lg text-lg leading-relaxed text-white/50 md:mx-0">
                            Architecte logiciel et entrepreneur tech, je conçois des produits SaaS et IA générative robustes, utiles et durables, en alignant technologie, métier et responsabilité
                            humaine.
                        </p>
                        {/* <a
                            href="#vision"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-xl border border-white/20 text-sm font-medium text-white/80 hover:from-white/20 hover:via-white/10 hover:to-white/10 hover:text-white hover:border-white/30 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 ease-out hover:scale-[1.02]"
                        >
                            En savoir plus
                        </a> */}
                    </motion.div>
                </div>

                {/* Right Image with Circle and Parallax 3D */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="relative order-1 md:order-2 flex justify-center items-center h-full min-h-[350px] flex-1"
                >
                    {/* Multiple glow layers pour un effet plus doux */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
                        className="absolute z-0 h-[280px] w-[280px] rounded-full bg-linear-to-br from-orange-500/25 via-red-500/25 to-red-700/25 blur-[80px] md:h-[350px] md:w-[350px] lg:h-[420px] lg:w-[420px]"
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
                        className="absolute z-0 h-[220px] w-[220px] rounded-full bg-linear-to-tl from-red-600/20 to-orange-400/20 blur-[60px] md:h-[280px] md:w-[280px] lg:h-[350px] lg:w-[350px]"
                    />
                    <motion.div
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
                        className="absolute z-0 h-[180px] w-[180px] rounded-full bg-linear-to-tr from-amber-500/15 to-orange-300/15 blur-2xl md:h-60 md:w-60 lg:h-[300px] lg:w-[300px]"
                    />

                    <div className="relative z-10 h-[280px] w-[280px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]">
                        <ProfileCard3D />
                    </div>
                </motion.div>
            </div>

            {/* Footer Elements */}
            <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.9 }} className="flex items-center space-x-4">
                    <a href="https://linkedin.com/in/alexandretrichot" target="_blank" rel="noopener noreferrer" className="text-white/40 transition-all hover:text-orange-300 hover:scale-110">
                        <LinkedinIcon className="h-5 w-5" />
                    </a>
                    <a href="https://github.com/alexandretrichot" target="_blank" rel="noopener noreferrer" className="text-white/40 transition-all hover:text-red-300 hover:scale-110">
                        <GithubIcon className="h-5 w-5" />
                    </a>
                    <a href="mailto:contact@alexandretrichot.fr" className="text-white/40 transition-all hover:text-amber-300 hover:scale-110">
                        <MailIcon className="h-5 w-5" />
                    </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }} className="text-sm font-medium text-white/40 tracking-wide">
                    LYON, FRANCE
                </motion.div>
            </footer>
        </div>
    );
}
