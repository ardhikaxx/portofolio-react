// components/video-gallery.tsx
"use client";

import { useState } from 'react';
import { videoData } from '@/data/videoData';
import Image from 'next/image';

const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

const getThumbnailUrl = (youtubeId: string) => {
    return `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;
};

export default function VideoGallery() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (youtubeUrl: string) => {
        const videoId = getYouTubeId(youtubeUrl);
        if (videoId) {
            setSelectedVideo(videoId);
            setIsModalOpen(true);
            document.body.style.overflow = 'hidden';
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedVideo(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section className="dark:bg-gray-900 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Video Projects
                    </h1>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videoData.map((video, index) => {
                        const videoId = getYouTubeId(video.youtubeUrl);
                        if (!videoId) return null;

                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:shadow-[#B51D2A]"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="relative aspect-video">
                                    <Image
                                        src={getThumbnailUrl(videoId)}
                                        alt={video.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <button
                                            onClick={() => openModal(video.youtubeUrl)}
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#B51D2A] text-white p-3 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-8 w-8"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                                    <h3 className="text-xl font-bold text-white line-clamp-2">
                                        {video.title}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {isModalOpen && selectedVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
                        <div className="relative w-full max-w-5xl">
                            <button
                                onClick={closeModal}
                                className="absolute -top-12 right-0 z-10 text-white hover:text-[#B51D2A] transition-colors duration-200"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl">
                                <iframe
                                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white text-center">
                                    {videoData.find(v => getYouTubeId(v.youtubeUrl) === selectedVideo)?.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}