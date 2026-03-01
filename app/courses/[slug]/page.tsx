"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCourseBySlug } from "@/lib/courseData";
import { notFound } from "next/navigation";
import CourseSidebar from "@/components/ui/CourseSidebar";
import YouTubePlayer from "@/components/ui/YouTubePlayer";
import { motion } from "framer-motion";

interface CoursePageProps {
    params: { slug: string };
}

export default function CoursePage({ params }: CoursePageProps) {
    const searchParams = useSearchParams();
    const course = getCourseBySlug(params.slug);

    if (!course) {
        notFound();
    }

    const videoIndex = parseInt(searchParams.get("v") || "0");
    const activeVideo = course.videos[videoIndex] || course.videos[0];

    // Robust video ID extraction
    const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : "";
    };

    const videoId = getYouTubeId(activeVideo.youtubeUrl);

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-background pt-32">
            {/* Sidebar */}
            <aside className="w-full lg:w-80 xl:w-96 lg:fixed lg:top-32 lg:bottom-0 z-20 overflow-hidden">
                <CourseSidebar
                    courseSlug={course.slug}
                    videos={course.videos}
                    activeVideoIndex={videoIndex}
                />
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-80 xl:ml-96 p-6 md:p-10">
                <div className="max-w-5xl mx-auto">
                    {/* Top Bar / Navigation */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <Link
                            href="/#courses"
                            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-200 group"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium uppercase tracking-widest">Back to Courses</span>
                        </Link>

                    </div>

                    {/* Video Player Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={videoIndex}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <YouTubePlayer videoId={videoId} title={activeVideo.title} />

                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                                <div className="space-y-1">
                                    <h1 className="text-2xl md:text-3xl font-bold text-white">
                                        {activeVideo.title}
                                    </h1>
                                    <p className="text-accent-purple/80 font-medium uppercase tracking-widest text-sm">
                                        {course.title} — Lesson {videoIndex + 1}
                                    </p>
                                </div>
                            </div>

                            <hr className="border-white/10" />

                            <div className="flex gap-8 mb-4 border-b border-white/5 pb-2">
                                <button className="text-white border-b-2 border-accent-pink pb-2 px-1 font-medium">About</button>
                            </div>

                            <div className="prose prose-invert max-w-none">
                                <p className="text-white/60 leading-relaxed text-lg">
                                    {activeVideo.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
