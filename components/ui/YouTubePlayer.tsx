"use client";

interface YouTubePlayerProps {
    videoId: string;
    title: string;
}

export default function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
    return (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
            />
        </div>
    );
}
