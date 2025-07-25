import React from 'react';
import { penghargaanData } from '@/data/penghargaanData';

const Awards = () => {
    return (
        <section className="relative py-20 dark:bg-gray-900">

            <div className="max-w-7xl mx-auto px-5 sm:px-10">
                <div className="text-center mb-12 flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold text-white dark:text-gray-100" data-aos="zoom-y-out">My Awards</h1>
                    <p className="text-xl text-gray-300 dark:text-gray-400" data-aos="zoom-y-out" data-aos-delay="150">Here are some of the awards I have received for my work.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {penghargaanData.map((item, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg dark:hover:shadow-gray-700/50 transition-all duration-500 hover:-translate-y-1"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            <div className="absolute inset-0 duration-500"></div>

                            <div className="relative p-6 h-full flex flex-col z-10">
                                <div className="mb-5">
                                    <div className="w-14 h-14 rounded-xl bg-[#B51D2A] bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center mb-4">
                                        <svg className="h-8" fill="#B51D2A" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                                            <path d="m21.95,5.551l-3.485-3.485C17.143.743,15.385.015,13.515.015h-4.515C6.727.015,4.737,1.55,4.163,3.747c-.14.534.18,1.081.714,1.221.538.137,1.082-.181,1.22-.715.345-1.317,1.539-2.238,2.903-2.238h4.515c.165,0,.323.032.485.047v4.953c0,1.654,1.346,3,3,3h4.951c.016.162.049.322.049.485v8.515c0,1.654-1.346,3-3,3h-10c-.69,0-1.338-.228-1.875-.657-.43-.343-1.059-.276-1.406.154-.345.432-.276,1.061.155,1.406.882.707,1.992,1.097,3.125,1.097h10c2.757,0,5-2.243,5-5v-8.515c0-1.869-.728-3.627-2.05-4.949Zm-4.95,2.464c-.551,0-1-.448-1-1V2.698c.376.217.735.466,1.05.781l3.485,3.485c.311.311.559.672.776,1.05h-4.312Zm-7,7.985h8c.552,0,1,.447,1,1s-.448,1-1,1h-8c-.552,0-1-.447-1-1s.448-1,1-1Zm-3,2.847v-4.75c.907-.734,1.5-1.842,1.5-3.097,0-2.206-1.794-4-4-4S.5,8.794.5,11c0,1.255.593,2.363,1.5,3.097v4.75c0,.623.791.89,1.169.395l1.331-1.743,1.331,1.743c.378.495,1.169.228,1.169-.395Zm-2.5-9.847c1.103,0,2,.897,2,2s-.897,2-2,2-2-.897-2-2,.897-2,2-2Zm6.5,5c-.552,0-1-.447-1-1s.448-1,1-1h7c.552,0,1,.447,1,1s-.448,1-1,1h-7Z" />
                                        </svg>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                                        {item.namaPenghargaan}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.penyelenggara}</p>
                                </div>

                                <div className="mt-auto pt-5 border-t border-gray-100 dark:border-gray-700 group-hover:border-blue-100 dark:group-hover:border-gray-600 transition-colors flex justify-between items-center">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-[#B51D2A] bg-opacity-10 dark:bg-opacity-20 text-[#B51D2A] dark:text-[#ff6b6b]">
                                        {item.tahun}
                                    </span>
                                    <span className="text-sm font-semibold py-1 px-3 rounded-full bg-[#B51D2A] bg-opacity-10 dark:bg-opacity-20 text-[#B51D2A] dark:text-[#ff6b6b]">
                                        Achievements
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;