import React from 'react';
import { penghargaanData } from '@/data/penghargaanData';

const Awards = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-800" data-aos="zoom-y-out">My Awards</h1>
                <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">Here are some of the awards I have received for my work.</p>
            </div>
            <div className="space-y-8">
                {penghargaanData.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 border-l-4 border-[#4895D1] hover:text-white transition-colors duration-200"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800">{item.namaPenghargaan}</h2>
                        <p className="text-sm text-gray-500">{item.tahun}</p>
                        <p className="text-md text-gray-700">{item.penyelenggara}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Awards;