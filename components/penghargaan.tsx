import React from 'react';
import { penghargaanData } from '@/data/penghargaanData';

const Awards = () => {
    return (
        <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-5 sm:px-10">
                <div className="text-center mb-16">
                    <span className="inline-block mb-4 text-sm font-medium py-1 px-3 rounded-full bg-blue-100 text-blue-600">
                        Achievements
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text">
                        Awards & Recognition
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Professional accolades that highlight my dedication and excellence in the field.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {penghargaanData.map((item, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            <div className="absolute inset-0 duration-500"></div>

                            <div className="relative p-6 h-full flex flex-col z-10">
                                <div className="mb-5">
                                    <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {item.namaPenghargaan}
                                    </h3>
                                    <p className="text-gray-600 line-clamp-2">{item.penyelenggara}</p>
                                </div>

                                <div className="mt-auto pt-5 border-t border-gray-100 group-hover:border-blue-100 transition-colors flex justify-between items-center">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">
                                        {item.tahun}
                                    </span>
                                    <span className="text-sm font-semibold py-1 px-3 rounded-full bg-blue-100 text-blue-600">
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