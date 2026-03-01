"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function MissionSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="mission"
            className="py-28 px-6 relative overflow-hidden"
        >
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_rgba(144,149,201,0.08)_0%,_transparent_60%)]" />

            <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-sm font-semibold uppercase tracking-widest gradient-text">
                            Our Mission
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                            Inspiring the Next Generation of Quantum Scientists
                        </h2>
                        <p className="text-white/60 leading-relaxed text-lg mb-8">
                            At GYQS, we believe that quantum science should be accessible to
                            every young mind around the world. Our platform provides free,
                            high-quality educational resources that bridge the gap between
                            complex quantum concepts and curious students. We are building a
                            global community of future quantum pioneers.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-accent-purple hover:text-accent-pink transition-colors duration-200 font-medium"
                        >
                            Learn more about us
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </a>
                    </motion.div>

                    {/* Right — Schrödinger's Cat Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex items-center justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative"
                        >
                            <div className="relative">
                                {/* Glow behind the image */}
                                <div className="absolute inset-0 rounded-full bg-accent-purple/10 blur-3xl scale-110" />
                                <Image
                                    src="/mission.jpg"
                                    alt="Schrödinger's Cat — alive and dead"
                                    width={380}
                                    height={380}
                                    className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-fit drop-shadow-[0_0_30px_rgba(144,149,201,0.3)]"
                                />
                            </div>
                            {/* Quantum equation caption */}
                            <p className="text-center text-accent-pink/40 text-sm mt-4 font-light tracking-wide">
                                |ψ⟩ = α|alive⟩ + β|dead⟩
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
