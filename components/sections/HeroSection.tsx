"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let particles: Particle[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            color: string;

            constructor(w: number, h: number) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 2 + 1;
                const colors = [
                    "rgba(239, 217, 230, 0.6)",
                    "rgba(144, 149, 201, 0.6)",
                    "rgba(180, 170, 210, 0.5)",
                    "rgba(200, 190, 220, 0.4)",
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update(w: number, h: number) {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > w) this.vx *= -1;
                if (this.y < 0 || this.y > h) this.vy *= -1;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();

                // Glow effect
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(
                    this.x,
                    this.y,
                    0,
                    this.x,
                    this.y,
                    this.radius * 3
                );
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, "transparent");
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        }

        const init = () => {
            resize();
            const numParticles = Math.min(80, Math.floor(canvas.width * 0.04));
            particles = Array.from(
                { length: numParticles },
                () => new Particle(canvas.width, canvas.height)
            );
        };

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(144, 149, 201, ${0.1 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.update(canvas.width, canvas.height);
                p.draw(ctx);
            });
            drawConnections();
            animationId = requestAnimationFrame(animate);
        };

        init();
        animate();
        window.addEventListener("resize", resize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Particle canvas background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 0 }}
            />

            {/* Radial glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(144,149,201,0.12)_0%,_transparent_70%)]" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.15] gradient-text mb-6 pb-2"
                >
                    Global Youth Quantum Society (GYQS)
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-lg sm:text-xl md:text-2xl text-white/70 font-light tracking-[0.25em] uppercase mb-10"
                >
                    beyond bits. beyond limits.
                </motion.p>


                {/* Action Arrow Only */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex justify-center mt-12"
                >
                    <button
                        onClick={() => {
                            document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="group flex flex-col items-center gap-2 text-white/40 hover:text-white transition-all duration-300"
                        aria-label="Scroll to courses"
                    >
                        <ChevronDown
                            className="w-12 h-12 transition-transform duration-300 group-hover:translate-y-2"
                            strokeWidth={1.5}
                        />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
