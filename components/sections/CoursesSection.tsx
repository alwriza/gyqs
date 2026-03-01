"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CourseCard from "@/components/ui/CourseCard";

const coursesList = [
    {
        title: "Linear Algebra | Basics",
        slug: "linear-algebra-basics",
        image: "/lin_alg_basics.jpg",
    },
    {
        title: "Linear Algebra | intermediate",
        slug: "linear-algebra-intermediate",
        image: "/lin_alg_adv.jpg",
    },
    {
        title: "Quantum Mechanics | Basics",
        slug: "quantum-mechanics-basics",
        image: "/quant_mech_basic.jpg",
    },
    {
        title: "Quantum Mechanics | intermediate",
        slug: "quantum-mechanics-intermediate",
        image: "/quant_mech_adv.jpg",
    },
    {
        title: "Quantum Computing",
        slug: "quantum-computing",
        image: "/quant_comp.jpg",
    },
    {
        title: "Quantum Chemistry",
        slug: "quantum-chemistry",
        image: "/quant_chem.jpg",
    },
];

export default function CoursesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="courses" className="py-28 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text mb-16"
                >
                    Explore Quantum at Any Level!
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coursesList.map((course, index) => (
                        <CourseCard key={course.slug} {...course} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
