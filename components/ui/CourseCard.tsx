"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CourseCardProps {
    title: string;
    slug: string;
    image: string;
    index: number;
}

export default function CourseCard({ title, slug, image, index }: CourseCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link
                href={`/courses/${slug}`}
                className="group block relative rounded-2xl overflow-hidden aspect-square glass-card bg-white/5 border-white/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                    />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300 leading-tight">
                        {title}
                    </h3>
                </div>

                {/* Hover Glow Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent-purple/40 transition-all duration-300 pointer-events-none" />
            </Link>
        </motion.div>
    );
}
