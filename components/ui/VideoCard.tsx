"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface VideoCardProps {
    title: string;
    description: string;
    thumbnail: string;
    youtubeUrl: string;
    index: number;
}

export default function VideoCard({
    title,
    description,
    thumbnail,
    youtubeUrl,
    index,
}: VideoCardProps) {
    return (
        <motion.a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group block glass-card overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(144,149,201,0.2)]"
        >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <svg
                            width="20"
                            height="24"
                            viewBox="0 0 20 24"
                            fill="white"
                            className="ml-1"
                        >
                            <polygon points="0,0 20,12 0,24" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="font-bold text-white group-hover:gradient-text transition-all duration-300 mb-2">
                    {title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{description}</p>
            </div>
        </motion.a>
    );
}
