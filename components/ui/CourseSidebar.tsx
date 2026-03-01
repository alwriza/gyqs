"use client";

import { Video } from "@/lib/courseData";
import { PlayCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface CourseSidebarProps {
    courseSlug: string;
    videos: Video[];
    activeVideoIndex: number;
}

export default function CourseSidebar({ courseSlug, videos, activeVideoIndex }: CourseSidebarProps) {
    return (
        <div className="flex flex-col h-full bg-white/5 border-r border-white/10 overflow-hidden">
            <div className="p-6 border-b border-white/10">
                <h2 className="text-xl font-bold text-white">Course Content</h2>
                <p className="text-sm text-white/50 mt-1">{videos.length} lessons</p>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="flex flex-col py-2">
                    {videos.map((video, index) => {
                        const isActive = index === activeVideoIndex;
                        return (
                            <Link
                                key={index}
                                href={`/courses/${courseSlug}?v=${index}`}
                                className={`flex items-start gap-4 px-6 py-4 transition-all duration-200 border-l-4 ${isActive
                                        ? "bg-white/10 border-accent-purple text-white"
                                        : "border-transparent text-white/60 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                <div className="mt-1 flex-shrink-0">
                                    {isActive ? (
                                        <PlayCircle size={20} className="text-accent-pink" />
                                    ) : (
                                        <CheckCircle2 size={20} className="text-white/20" />
                                    )}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-accent-purple opacity-80">
                                        Lesson {index + 1}
                                    </span>
                                    <span className="text-sm font-medium leading-snug">
                                        {video.title.split(" — ")[1] || video.title}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
