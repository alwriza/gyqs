"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const cards = [
    {
        icon: "/quantum-field.png",
        iconAlt: "Quantum Field",
        text: "Quantum computing solves problems beyond classical computers using superposition and entanglement. It can transform medicine, AI, materials research, and even finance.",
    },
    {
        icon: "/quantum-bit.png",
        iconAlt: "Quantum Bit",
        text: "Quantum physics explains how the universe works at its smallest scale and drives breakthroughs in chemistry and energy.",
    },
    {
        icon: "/electron-outline.png",
        iconAlt: "Electron Orbit",
        text: "Quantum science is one of the fastest-growing fields in the world. Students who learn it today can become pioneers of tomorrow's technologies and careers.",
    },
];

export default function WhyQuantumSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="why-quantum" className="py-28 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text mb-16"
                >
                    Why Quantum?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                            className="glass-card p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-accent-pink/10 to-accent-purple/10 border border-accent-purple/20">
                                <Image
                                    src={card.icon}
                                    alt={card.iconAlt}
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <p className="text-white/70 leading-relaxed">{card.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
