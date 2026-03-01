export interface Video {
    title: string;
    description: string;
    thumbnail: string;
    youtubeUrl: string;
}

export interface Course {
    slug: string;
    title: string;
    image: string;
    videos: Video[];
}

export const courses: Course[] = [
    {
        slug: "linear-algebra-basics",
        title: "Linear Algebra | Basics",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=450&fit=crop",
        videos: [
            {
                title: "Lesson 1 — Introduction to Vectors",
                description: "Understanding vectors as fundamental building blocks of linear algebra and quantum state representation.",
                thumbnail: "https://img.youtube.com/vi/fNk_zzaMoSs/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=fNk_zzaMoSs",
            },
            {
                title: "Lesson 2 — Vector Spaces and Subspaces",
                description: "Explore the structure of vector spaces and how subspaces form the basis of quantum state spaces.",
                thumbnail: "https://img.youtube.com/vi/k7RM-ot2NWY/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=k7RM-ot2NWY",
            },
            {
                title: "Lesson 3 — Matrix Operations",
                description: "Learn essential matrix operations that correspond to quantum gates and transformations.",
                thumbnail: "https://img.youtube.com/vi/XkY2DOUCWMU/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=XkY2DOUCWMU",
            },
            {
                title: "Lesson 4 — Eigenvalues and Eigenvectors",
                description: "Understanding eigenvalues and eigenvectors — the key to quantum measurement outcomes.",
                thumbnail: "https://img.youtube.com/vi/PFDu9oVAE1g/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=PFDu9oVAE1g",
            },
        ],
    },
    {
        slug: "linear-algebra-advanced",
        title: "Linear Algebra | Advanced",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=450&fit=crop",
        videos: [
            {
                title: "Lesson 1 — Inner Product Spaces",
                description: "Dive into inner product spaces and their crucial role in defining quantum probability amplitudes.",
                thumbnail: "https://img.youtube.com/vi/AfKpHM0MiVU/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=AfKpHM0MiVU",
            },
            {
                title: "Lesson 2 — Unitary and Hermitian Matrices",
                description: "Study unitary and Hermitian operators — the mathematical framework behind quantum gates and observables.",
                thumbnail: "https://img.youtube.com/vi/hJoWPVniR5I/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=hJoWPVniR5I",
            },
            {
                title: "Lesson 3 — Tensor Products",
                description: "Learn tensor product operations essential for describing multi-qubit quantum systems.",
                thumbnail: "https://img.youtube.com/vi/2M5VScLK-Wk/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=2M5VScLK-Wk",
            },
            {
                title: "Lesson 4 — Spectral Decomposition",
                description: "Master spectral decomposition and its applications in quantum state analysis and measurement.",
                thumbnail: "https://img.youtube.com/vi/sB7gFJ0Fris/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=sB7gFJ0Fris",
            },
            {
                title: "Lesson 5 — Singular Value Decomposition",
                description: "Explore SVD and its powerful applications in quantum information theory and data compression.",
                thumbnail: "https://img.youtube.com/vi/nbBvUQbcbas/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=nbBvUQbcbas",
            },
        ],
    },
    {
        slug: "quantum-mechanics-basics",
        title: "Quantum Mechanics | Basics",
        image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=600&h=450&fit=crop",
        videos: [
            {
                title: "Lesson 1 — Wave-Particle Duality",
                description: "Discover how particles exhibit both wave and particle behavior, challenging classical physics intuition.",
                thumbnail: "https://img.youtube.com/vi/p7bzE1E5PMY/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=p7bzE1E5PMY",
            },
            {
                title: "Lesson 2 — The Schrödinger Equation",
                description: "Introduction to the fundamental equation governing quantum mechanical systems and their evolution.",
                thumbnail: "https://img.youtube.com/vi/QqY8fY0TqaQ/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=QqY8fY0TqaQ",
            },
            {
                title: "Lesson 3 — Quantum Superposition",
                description: "Understand how quantum systems can exist in multiple states simultaneously until measured.",
                thumbnail: "https://img.youtube.com/vi/lZ3bPUKo5zc/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=lZ3bPUKo5zc",
            },
            {
                title: "Lesson 4 — Measurement and Collapse",
                description: "Explore the measurement problem and how observation affects quantum systems.",
                thumbnail: "https://img.youtube.com/vi/kTXTPe3wahc/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=kTXTPe3wahc",
            },
        ],
    },
    {
        slug: "quantum-mechanics-advanced",
        title: "Quantum Mechanics | Advanced",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=450&fit=crop",
        videos: [
            {
                title: "Lesson 1 — Quantum Entanglement Deep Dive",
                description: "Advanced study of entanglement, EPR paradox, and non-local correlations in quantum systems.",
                thumbnail: "https://img.youtube.com/vi/ZuvK-od7jHA/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=ZuvK-od7jHA",
            },
            {
                title: "Lesson 2 — Density Matrices and Mixed States",
                description: "Learn to describe quantum systems with incomplete information using density matrix formalism.",
                thumbnail: "https://img.youtube.com/vi/qtIsYbYdzCI/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=qtIsYbYdzCI",
            },
            {
                title: "Lesson 3 — Quantum Decoherence",
                description: "Understanding how quantum systems lose coherence through interaction with their environment.",
                thumbnail: "https://img.youtube.com/vi/7B1llCxVdkE/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=7B1llCxVdkE",
            },
            {
                title: "Lesson 4 — Path Integrals",
                description: "Feynman's path integral formulation — a powerful alternative approach to quantum mechanics.",
                thumbnail: "https://img.youtube.com/vi/vSFRN-ymfgE/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=vSFRN-ymfgE",
            },
        ],
    },
    {
        slug: "quantum-physics",
        title: "Quantum Physics",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=450&fit=crop",
        videos: [
            {
                title: "Lesson 1 — Blackbody Radiation and Planck's Law",
                description: "The birth of quantum physics: how Planck's quantization solved the ultraviolet catastrophe.",
                thumbnail: "https://img.youtube.com/vi/FXfrancObxk/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=FXfrancObxk",
            },
            {
                title: "Lesson 2 — Photoelectric Effect",
                description: "Einstein's Nobel Prize-winning explanation of how light ejects electrons from metal surfaces.",
                thumbnail: "https://img.youtube.com/vi/v-1zjdUTu0o/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=v-1zjdUTu0o",
            },
            {
                title: "Lesson 3 — Heisenberg Uncertainty Principle",
                description: "Fundamental limits on measuring complementary quantum properties simultaneously.",
                thumbnail: "https://img.youtube.com/vi/TQKELOE9eY4/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=TQKELOE9eY4",
            },
            {
                title: "Lesson 4 — Quantum Tunneling",
                description: "How particles can pass through energy barriers that are classically impossible to overcome.",
                thumbnail: "https://img.youtube.com/vi/RF7dDt3tVmI/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=RF7dDt3tVmI",
            },
            {
                title: "Lesson 5 — Spin and Angular Momentum",
                description: "Intrinsic angular momentum of particles and the Stern-Gerlach experiment.",
                thumbnail: "https://img.youtube.com/vi/sB1EPGmpzyg/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=sB1EPGmpzyg",
            },
        ],
    },
    {
        slug: "quantum-computing",
        title: "Quantum Computing",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=450&fit=crop",
        videos: [
            {
                title: "Lesson 1 — Qubits and Quantum Gates",
                description: "Introduction to the quantum bit, Bloch sphere representation, and fundamental quantum gates.",
                thumbnail: "https://img.youtube.com/vi/F_Riqjdh2oM/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=F_Riqjdh2oM",
            },
            {
                title: "Lesson 2 — Quantum Circuits",
                description: "Building quantum algorithms step by step using quantum circuit notation and composition.",
                thumbnail: "https://img.youtube.com/vi/tsbCSkvHhMo/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=tsbCSkvHhMo",
            },
            {
                title: "Lesson 3 — Deutsch-Jozsa Algorithm",
                description: "Your first quantum algorithm — demonstrating exponential speedup over classical computation.",
                thumbnail: "https://img.youtube.com/vi/5xsyx-aNClM/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=5xsyx-aNClM",
            },
            {
                title: "Lesson 4 — Shor's Algorithm",
                description: "Factoring large numbers in polynomial time — the algorithm that threatens modern cryptography.",
                thumbnail: "https://img.youtube.com/vi/lvTqbM5Dq4Q/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=lvTqbM5Dq4Q",
            },
            {
                title: "Lesson 5 — Quantum Error Correction",
                description: "Protecting quantum information from noise and decoherence using error correcting codes.",
                thumbnail: "https://img.youtube.com/vi/X2q1PuI2RFI/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=X2q1PuI2RFI",
            },
            {
                title: "Lesson 6 — Quantum Supremacy and Beyond",
                description: "Current state of quantum computing hardware and the race toward practical quantum advantage.",
                thumbnail: "https://img.youtube.com/vi/nGsAqbbxBLo/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=nGsAqbbxBLo",
            },
        ],
    },
    {
        slug: "quantum-chemistry",
        title: "Quantum Chemistry",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=450&fit=crop",
        videos: [
            {
                title: "Lesson 1 — Atomic Orbitals and Electron Configuration",
                description: "Quantum mechanical description of electron distribution in atoms using wavefunctions.",
                thumbnail: "https://img.youtube.com/vi/Aoi4j8es4gQ/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=Aoi4j8es4gQ",
            },
            {
                title: "Lesson 2 — Molecular Orbital Theory",
                description: "How atomic orbitals combine to form molecular structures and chemical bonds.",
                thumbnail: "https://img.youtube.com/vi/WJgSgC3Wnio/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=WJgSgC3Wnio",
            },
            {
                title: "Lesson 3 — Computational Chemistry Methods",
                description: "Overview of Hartree-Fock, DFT, and other computational approaches to quantum chemistry.",
                thumbnail: "https://img.youtube.com/vi/pNyVSRhMBPg/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=pNyVSRhMBPg",
            },
            {
                title: "Lesson 4 — Quantum Simulation of Molecules",
                description: "Using quantum computers to simulate molecular behavior for drug discovery and materials science.",
                thumbnail: "https://img.youtube.com/vi/hMlGPjfIZ-s/maxresdefault.jpg",
                youtubeUrl: "https://www.youtube.com/watch?v=hMlGPjfIZ-s",
            },
        ],
    },
];

export function getCourseBySlug(slug: string): Course | undefined {
    return courses.find((c) => c.slug === slug);
}
