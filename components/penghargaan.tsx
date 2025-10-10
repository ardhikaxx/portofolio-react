import React from 'react';
import { penghargaanData } from '@/data/penghargaanData';
import { FiAward, FiStar, FiTrendingUp, FiCalendar, FiMapPin } from 'react-icons/fi';

const Awards = () => {
    const getAchievementIcon = (index: number) => {
        if (index === 0) return <FiTrendingUp className="w-5 h-5" />;
        if (index < 3) return <FiStar className="w-5 h-5" />;
        return <FiAward className="w-5 h-5" />;
    };

    const getAchievementLevel = (index: number) => {
        if (index === 0) return 'Grand Champion';
        if (index < 3) return 'Top Winner';
        return 'Achievement';
    };

    return (
        <section className="relative py-20 bg-black overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-[#B51D2A] to-[#E02435] mb-6">
                        <FiAward className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        My Achievements
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Celebrating milestones and recognitions that mark my journey in technology and innovation
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {penghargaanData.map((item, index) => (
                        <div
                            key={index}
                            className="group relative"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Card */}
                            <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 hover:border-[#B51D2A]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#B51D2A]/20 overflow-hidden">
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#B51D2A] to-[#E02435] opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                                
                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                <div className="relative p-6 h-full flex flex-col z-10">
                                    {/* Header with Icon and Year */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 rounded-2xl bg-gradient-to-r from-[#B51D2A] to-[#E02435] shadow-lg">
                                            {getAchievementIcon(index)}
                                        </div>
                                        <div className="flex items-center space-x-2 bg-gray-700/50 rounded-full px-3 py-1 border border-gray-600/50">
                                            <FiCalendar className="w-4 h-4 text-gray-400" />
                                            <span className="text-sm font-semibold text-gray-300">{item.tahun}</span>
                                        </div>
                                    </div>

                                    {/* Award Title */}
                                    <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-gray-100 transition-colors duration-300 line-clamp-3">
                                        {item.namaPenghargaan}
                                    </h3>

                                    {/* Organizer */}
                                    <div className="flex items-center space-x-2 mb-4">
                                        <FiMapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                            {item.penyelenggara}
                                        </p>
                                    </div>

                                    {/* Footer with Achievement Level */}
                                    <div className="mt-auto pt-4 border-t border-gray-700/50 group-hover:border-gray-600/70 transition-colors duration-300">
                                        <div className="flex items-center justify-between">
                                            <span className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#B51D2A] to-[#E02435] text-white shadow-lg">
                                                {getAchievementIcon(index)}
                                                <span>{getAchievementLevel(index)}</span>
                                            </span>
                                            
                                            {/* Position Badge */}
                                            <div className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-bold ${
                                                index === 0 
                                                    ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' 
                                                    : index < 3 
                                                        ? 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                                                        : 'bg-[#B51D2A]/20 text-[#ff6b6b] border border-[#B51D2A]/30'
                                            }`}>
                                                <span>#{index + 1}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#B51D2A] to-[#E02435] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                                    <div className="absolute inset-[2px] rounded-3xl bg-gray-900"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-8 p-6 bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-[#B51D2A] to-[#E02435] bg-clip-text text-transparent">
                                {penghargaanData.length}
                            </div>
                            <div className="text-gray-400 text-sm">Total Awards</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-[#B51D2A] to-[#E02435] bg-clip-text text-transparent">
                                {penghargaanData.filter(item => parseInt(item.tahun) >= 2023).length}
                            </div>
                            <div className="text-gray-400 text-sm">Recent Wins</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-[#B51D2A] to-[#E02435] bg-clip-text text-transparent">
                                {penghargaanData.filter(item => item.namaPenghargaan.toLowerCase().includes('juara 1')).length}
                            </div>
                            <div className="text-gray-400 text-sm">First Places</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-[#B51D2A] to-[#E02435] bg-clip-text text-transparent">
                                2021-2025
                            </div>
                            <div className="text-gray-400 text-sm">Journey</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;