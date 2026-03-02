"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamCardProps {
    name: string;
    role: string;
    avatar: string;
    index: number;
}

export default function TeamCard({ name, role, avatar, index }: TeamCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col items-center text-center p-6"
        >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-accent-purple/50 transition-all duration-300 shadow-xl">
                <Image
                    src={avatar}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 192px, 224px"
                    className="object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
                />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                {name}
            </h3>
            <p className="text-white/50 text-base md:text-lg mt-2">{role}</p>
        </motion.div>
    );
}
