"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PaperItem from "@/components/ui/PaperItem";

const papers = [
    {
        title: "Introduction to Quantum Circuits with Qiskit",
        source: "IBM Qiskit",
        description:
            "Learn how to build and simulate quantum circuits using IBM's open-source Qiskit framework. Covers single-qubit gates, entanglement, and measurement.",
        href: "https://learning.quantum.ibm.com/",
    },
    {
        title: "Quantum Entanglement and Bell States Explained",
        source: "arXiv",
        description:
            "A hands-on tutorial exploring quantum entanglement through Bell state preparation and violation of Bell inequalities using real quantum hardware.",
        href: "https://arxiv.org/abs/quant-ph/0101012",
    },
    {
        title: "Variational Quantum Eigensolver (VQE) for Molecular Simulation",
        source: "Google Quantum AI",
        description:
            "Step-by-step guide to implementing VQE for finding the ground state energy of simple molecules, bridging quantum chemistry and quantum computing.",
        href: "https://quantumai.google/",
    },
    {
        title: "Quantum Error Correction: Surface Codes Tutorial",
        source: "Microsoft Research",
        description:
            "Explore the fundamentals of quantum error correction using surface codes, the leading candidate for fault-tolerant quantum computing.",
        href: "https://www.microsoft.com/en-us/research/",
    },
    {
        title: "Grover's Algorithm: Searching Unsorted Databases",
        source: "IBM Qiskit",
        description:
            "Implement Grover's search algorithm from scratch and understand how quantum parallelism provides quadratic speedup over classical search.",
        href: "https://learning.quantum.ibm.com/",
    },
];

export default function PapersSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="papers" className="py-28 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text mb-16"
                >
                    Learn Quantum Through Hands-On Experience!
                </motion.h2>

                <div className="flex flex-col gap-4">
                    {papers.map((paper, index) => (
                        <PaperItem key={index} {...paper} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
