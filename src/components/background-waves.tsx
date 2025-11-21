import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export function BackgroundWaves() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Configurable parameters
        // const params = {
        //     scale: 4,
        //     waveFrequency: 2.5,
        //     loopIterations: 3,
        //     timeSpeed: 0.5,
        //     waveIntensityBase: 0.4,
        //     waveIntensityRange: 0.5,
        //     tealAmount: 0.3,
        //     orangeAmount: 0.35,
        //     baseValue: 0.2,
        //     baseValueRange: 0.2,
        //     phaseOffset1: 1.618,
        //     phaseOffset2: 2.718,
        //     frequencyVariation: 0.3,
        // };
        const params = {
            scale: 6,
            waveFrequency: 3,
            loopIterations: 2,
            timeSpeed: 0.3,
            waveIntensityBase: 0.15,
            waveIntensityRange: 0.5,
            tealAmount: 0.3,
            orangeAmount: 0.35,
            baseValue: 0.2,
            baseValueRange: 0.2,
            phaseOffset1: 1.7,
            phaseOffset2: 4.1,
            frequencyVariation: 0.3,
        };

        // Create GUI
        // const gui = new GUI({ title: "Wave Controls" });
        // gui.add(params, "scale", 1, 8, 1)
        //     .name("Scale")
        //     .onChange(() => resizeCanvas());
        // gui.add(params, "waveFrequency", 0.5, 15, 0.1).name("Wave Frequency");
        // gui.add(params, "loopIterations", 1, 6, 1).name("Loop Iterations");
        // gui.add(params, "timeSpeed", 0.1, 2, 0.1).name("Time Speed");
        // gui.add(params, "waveIntensityBase", 0, 1, 0.05).name("Intensity Base");
        // gui.add(params, "waveIntensityRange", 0, 1, 0.05).name("Intensity Range");
        // gui.add(params, "tealAmount", 0, 1, 0.05).name("Teal Amount");
        // gui.add(params, "orangeAmount", 0, 1, 0.05).name("Orange Amount");
        // gui.add(params, "baseValue", 0, 1, 0.05).name("Base Value");
        // gui.add(params, "baseValueRange", 0, 1, 0.05).name("Base Range");
        // gui.add(params, "phaseOffset1", 0, 5, 0.1).name("Phase Offset 1");
        // gui.add(params, "phaseOffset2", 0, 5, 0.1).name("Phase Offset 2");
        // gui.add(params, "frequencyVariation", 0, 1, 0.05).name("Freq Variation");

        let width: number, height: number, imageData: ImageData, data: Uint8ClampedArray;

        const resizeCanvas = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            width = Math.floor(canvas.width / params.scale);
            height = Math.floor(canvas.height / params.scale);
            imageData = ctx.createImageData(width, height);
            data = imageData.data;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const startTime = Date.now();

        const SIN_TABLE = new Float32Array(1024);
        const COS_TABLE = new Float32Array(1024);
        for (let i = 0; i < 1024; i++) {
            const angle = (i / 1024) * Math.PI * 2;
            SIN_TABLE[i] = Math.sin(angle);
            COS_TABLE[i] = Math.cos(angle);
        }

        const fastSin = (x: number) => {
            const index = Math.floor(((x % (Math.PI * 2)) / (Math.PI * 2)) * 1024) & 1023;
            return SIN_TABLE[index];
        };

        const fastCos = (x: number) => {
            const index = Math.floor(((x % (Math.PI * 2)) / (Math.PI * 2)) * 1024) & 1023;
            return COS_TABLE[index];
        };

        let animationFrameId: number;

        const render = () => {
            const time = (Date.now() - startTime) * 0.001;
            const time_half = time * params.timeSpeed;
            const time_03 = time * 0.3;
            const time_02 = time * 0.2;
            const time_01 = time * 0.1;
            const heightInv = 1 / height;

            for (let y = 0; y < height; y++) {
                const u_y = (2 * y - height) * heightInv;

                for (let x = 0; x < width; x++) {
                    const u_x = (2 * x - width) * heightInv;

                    let a = 0;
                    let d = 0;

                    // Add non-repeating variation using irrational numbers
                    const positionNoise = fastSin(u_x * params.phaseOffset1 + u_y * params.phaseOffset2);
                    const freqVariation = 1 + positionNoise * params.frequencyVariation;

                    for (let i = 0; i < params.loopIterations; i++) {
                        const offset = i * params.phaseOffset1;
                        a += fastCos(i - d + time_half + offset - a * u_x * params.waveFrequency * freqVariation);
                        d += fastSin(i * u_y * params.waveFrequency * freqVariation + a + offset * params.phaseOffset2);
                    }

                    const wave = (fastSin(a) + fastCos(d)) * 0.5;
                    const intensity = params.waveIntensityBase + params.waveIntensityRange * wave;
                    const baseVal = params.baseValue + params.baseValueRange * fastCos(u_x * params.phaseOffset1 + u_y * params.phaseOffset2 + time_03);
                    const tealAccent = params.tealAmount * fastSin(a * 1.5 + time_02);
                    const orangeAccent = params.orangeAmount * fastCos(d * 2 + time_01);

                    const r = (baseVal * 1.2 + orangeAccent * 1.8) * intensity;
                    const g = (baseVal * 0.8 + orangeAccent * 0.6 + tealAccent * 0.7) * intensity;
                    const b = (baseVal * 0.5 + tealAccent * 1.5) * intensity;

                    const index = (y * width + x) * 4;
                    data[index] = r * 255;
                    data[index + 1] = g * 255;
                    data[index + 2] = b * 255;
                    data[index + 3] = 255;
                }
            }

            ctx.putImageData(imageData, 0, 0);
            if (params.scale > 1) {
                ctx.imageSmoothingEnabled = false;
                ctx.drawImage(canvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            // gui.destroy();
        };
    }, []);

    return <canvas ref={canvasRef} className={cn("blur-2xl", "fixed inset-0 pointer-events-none", "animate-in fade-in-0 duration-3000")} />;
}
