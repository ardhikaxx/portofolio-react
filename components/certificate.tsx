'use client';

import { useEffect, useState } from 'react';

import Image, { StaticImageData } from 'next/image';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { certificates } from '@/data/certificatesData';

export default function Certificate() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState<{ image: StaticImageData | string; name: string } | null>(null);

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('overflow-hidden', 'blur-background');
        } else {
            document.body.classList.remove('overflow-hidden', 'blur-background');
        }

        return () => {
            document.body.classList.remove('overflow-hidden', 'blur-background');
        };
    }, [isModalOpen]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        cssEase: 'ease-in-out',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const openModal = (certificate: { image: StaticImageData | string; name: string }) => {
        setSelectedCertificate(certificate);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCertificate(null);
    };

    return (
        <section className="bg-black py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-white" data-aos="zoom-y-out">My Certificates</h1>
                    <p className="text-xl text-gray-300" data-aos="zoom-y-out" data-aos-delay="150">Here are some of the certificates I have received in recognition of my achievements.</p>
                </div>
                <Slider {...settings}>
                    {certificates.map((certificate: { id?: any; image: any; name: any; }) => (
                        <div key={certificate.id} className="p-4" data-aos="zoom-y-out" data-aos-delay="250" onClick={() => openModal(certificate)}>
                            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 cursor-pointer">
                                <div className="relative overflow-hidden h-56">
                                    <Image
                                        src={certificate.image}
                                        alt={certificate.name}
                                        className="w-full h-full object-cover transition duration-500"
                                        quality={100}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <AnimatePresence>
                {isModalOpen && selectedCertificate && (
                    <motion.div 
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
                        exit={{ opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
                    >
                        <motion.div 
                            className="bg-white p-5 rounded-lg max-w-lg w-full relative"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } }}
                            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
                        >
                            <button onClick={closeModal} className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#E02435] to-[#B51D2A]] text-white text-xl">
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                            <Image
                                src={selectedCertificate.image}
                                alt={selectedCertificate.name}
                                className="w-full h-auto max-h-[70vh] rounded-xl object-contain"
                                quality={100}
                            />
                            <p className="mt-4 text-center text-lg font-semibold">{selectedCertificate.name}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}