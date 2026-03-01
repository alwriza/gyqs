"use client";

import { motion } from "framer-motion";

interface PaperItemProps {
    title: string;
    source: string;
    description: string;
    href: string;
    index: number;
}

export default function PaperItem({
    title,
    source,
    description,
    href,
    index,
}: PaperItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group glass-card p-6 transition-all duration-300"
        >
            <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex-1">
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold gradient-text hover:underline decoration-accent-purple/50 underline-offset-4 transition-all"
                    >
                        {title}
                    </a>
                    <p className="text-white/50 text-sm mt-2 leading-relaxed">
                        {description}
                    </p>
                </div>
                <span className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-medium bg-accent-purple/15 text-accent-purple border border-accent-purple/20 whitespace-nowrap">
                    {source}
                </span>
            </div>
        </motion.div>
    );
}
