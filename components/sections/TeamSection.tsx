"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TeamCard from "@/components/ui/TeamCard";

const teamMembers = [
    { name: "Ilshatrozy Alhmulaev", role: "Founder", avatar: "/ilshat.png" },
    { name: "Miras Tapenov", role: "Research Coordinator", avatar: "/miras-tapenov.png" },
    { name: "Ilyas Kazymbek", role: "Membership Coordinator", avatar: "/ilyas-kazymbek.png" },
    { name: "Arsen Almaskhan", role: "Event Coordinator", avatar: "/arsen-almaskhan.jpg" },
    { name: "Jogi Suda", role: "Mentor, PhD at CERN", avatar: "/jogi-suda.jpg" },
];

export default function TeamSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="team" className="py-28 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text mb-16"
                >
                    Meet Our Team!
                </motion.h2>

                <div className="flex justify-center">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} {...member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
