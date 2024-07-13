'use client';

import { useState } from 'react';
import Project1 from '@/public/images/certificate/1.jpg';
import Project2 from '@/public/images/certificate/2.jpg';
import Project3 from '@/public/images/certificate/3.jpg';
import Project4 from '@/public/images/certificate/4.jpg';
import Project5 from '@/public/images/certificate/5.jpg';
import Project6 from '@/public/images/certificate/6.jpg';
import Project7 from '@/public/images/certificate/7.jpg';
import Project8 from '@/public/images/certificate/8.jpg';
import Project9 from '@/public/images/certificate/9.jpg';
import Project10 from '@/public/images/certificate/10.jpg';
import Project11 from '@/public/images/certificate/11.jpg';
import Project12 from '@/public/images/certificate/12.jpg';
import Project13 from '@/public/images/certificate/13.jpg';
import Project14 from '@/public/images/certificate/14.jpg';
import Project15 from '@/public/images/certificate/15.jpg';
import Project16 from '@/public/images/certificate/16.jpg';
import Project17 from '@/public/images/certificate/17.jpg';
import Project18 from '@/public/images/certificate/18.jpg';
import Project19 from '@/public/images/certificate/19.jpg';
import Project20 from '@/public/images/certificate/20.jpg';
import Project21 from '@/public/images/certificate/21.jpg';
import Project22 from '@/public/images/certificate/22.jpg';
import Project23 from '@/public/images/certificate/23.jpg';
import Project24 from '@/public/images/certificate/24.jpg';
import Project25 from '@/public/images/certificate/25.jpg';
import Project26 from '@/public/images/certificate/26.jpg';
import Project27 from '@/public/images/certificate/27.jpg';
import Project28 from '@/public/images/certificate/28.jpg';
import Project29 from '@/public/images/certificate/29.jpg';
import Project30 from '@/public/images/certificate/30.jpg';
import Project31 from '@/public/images/certificate/31.jpg';
import Project32 from '@/public/images/certificate/32.jpg';
import Project33 from '@/public/images/certificate/33.jpg';
import Project34 from '@/public/images/certificate/34.jpg';
import Project35 from '@/public/images/certificate/35.jpg';
import Project36 from '@/public/images/certificate/36.jpg';
import Project37 from '@/public/images/certificate/37.jpg';
import Project38 from '@/public/images/certificate/38.jpg';
import Project39 from '@/public/images/certificate/39.jpg';
import Project40 from '@/public/images/certificate/40.jpg';
import Project41 from '@/public/images/certificate/41.jpg';
import Project42 from '@/public/images/certificate/42.png';
import Project43 from '@/public/images/certificate/43.jpg';
import Image, { StaticImageData } from 'next/image';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const certificates = [
    {
        id: 1,
        name: 'Siswa terbaik kompetensi keahlian Teknik Elektronika Industri 2022',
        image: Project1,
    },
    {
        id: 2,
        name: 'Juara 3 Bidang Inovasi Teknologi Pemuda Pelopor Provinsi Jawa Timur 2021',
        image: Project2,
    },
    {
        id: 3,
        name: 'Literasi Digital Perguruan Tinggi 2023',
        image: Project3,
    },
    {
        id: 4,
        name: 'Webinar React JS: "Kickstart Your Front End Developer Career with React JS" 2023',
        image: Project4,
    },
    {
        id: 5,
        name: 'Webinar Flutter: "How to Start Your Mobile Developer Career with Flutter" 2023',
        image: Project5,
    },
    {
        id: 6,
        name: 'Harisenin MiniSchool UI/UX Design 2023',
        image: Project6,
    },
    {
        id: 7,
        name: 'GLOBAL WEBINAR V.2: "IOT FOR SOCIETAL GOOD" 2023',
        image: Project7,
    },
    {
        id: 8,
        name: 'Kickstart Fullstack Web Development Journey 2023',
        image: Project8,
    },
    {
        id: 9,
        name: 'Start a Career as UI/UX Design Through Digital Skola Scholarship Program 2023',
        image: Project9,
    },
    {
        id: 10,
        name: 'Belajar Dasar Pemrograman Web - dicoding 2023',
        image: Project10,
    },
    {
        id: 11,
        name: 'Belajar Membuat Front-End Web untuk Pemula - dicoding 2023',
        image: Project11,
    },
    {
        id: 12,
        name: 'Belajar Dasar Pemrograman Javascript - dicoding 2023',
        image: Project12,
    },
    {
        id: 13,
        name: 'Webinar "Solusi Backup Cerdas Melawan Ransomware" 2023',
        image: Project13,
    },
    {
        id: 14,
        name: 'Webinar "Roadmap to Web Development Mastery: A Comprehensive Guide" 2023',
        image: Project14,
    },
    {
        id: 15,
        name: 'Meniti Karier sebagai Software Developer - dicoding 2023',
        image: Project15,
    },
    {
        id: 16,
        name: 'Lomba 17-an game html by codecafe.id 2023',
        image: Project16,
    },
    {
        id: 17,
        name: 'UI/UX Fundamental - MySkill 2023',
        image: Project17,
    },
    {
        id: 18,
        name: 'Introduction to JavaScript for Beginners - CodeCamp Harisenin 2023',
        image: Project18,
    },
    {
        id: 19,
        name: 'Workshop Live Coding "Mmebangun Kreativitas IOT dengan Platform Blynk" 2023',
        image: Project19,
    },
    {
        id: 20,
        name: 'Webinar "Membangun Personal Branding Melalui Website sebagai Mahasiswa IT" 2023',
        image: Project20,
    },
    {
        id: 21,
        name: 'Webinar "Introduction to Flutter Programming" 2023',
        image: Project21,
    },
    {
        id: 22,
        name: 'Scholarship Hack 2023',
        image: Project22,
    },
    {
        id: 23,
        name: 'SELARAS - Semarak Penalaran dan Kreativitas 2023',
        image: Project23,
    },
    {
        id: 24,
        name: 'Mini Bootcamp Introduction to Web Development 2023',
        image: Project24,
    },
    {
        id: 25,
        name: 'Exploring Front-End Developer: Wonders and Opportunities - CodeCamp Harisenin 2023',
        image: Project25,
    },
    {
        id: 26,
        name: 'Exploring Golang: Wonders and Opportunities - CodeCamp Harisenin 2023',
        image: Project26,
    },
    {
        id: 27,
        name: 'Webinar "Introduction to Back-End Web Development" 2023',
        image: Project27,
    },
    {
        id: 28,
        name: 'Mini Bootcamp Introduction to Flutter "Exploring Mobile Development Careers and Trend Insight" 2023',
        image: Project28,
    },
    {
        id: 29,
        name: 'Workshop Online MCD Meetup 2.0 "Web Development Bootcamp Front-End Unlock Your Web Potential Empowering Front-End Creators" 2023',
        image: Project29,
    },
    {
        id: 30,
        name: 'Workshop Online MCD Meetup 2.0 "Web Development Bootcamp Basic Back-End Level Up Your Coding Skills Mastering the Essntials of Back-End Development" 2023',
        image: Project30,
    },
    {
        id: 31,
        name: 'Belajar Dasar-dasar HTML dan CSS - CODEPOLITAN 2023',
        image: Project31,
    },
    {
        id: 32,
        name: 'Belajar JavaScript Dasar - CODEPOLITAN 2023',
        image: Project32,
    },
    {
        id: 33,
        name: 'Belajar JavaScript Async - CODEPOLITAN 2023',
        image: Project33,
    },
    {
        id: 34,
        name: 'Webinar Start Your Journey with Laravel 2023',
        image: Project34,
    },
    {
        id: 35,
        name: 'Webinar "Perfecting Your Personal Portofolio" - Harisenin x Cakap 2023',
        image: Project35,
    },
    {
        id: 36,
        name: 'Introduction to UI/UX: Creating Stunning Apps with Great Visual Interface - GDSC Universitas Ciputra 2023',
        image: Project36,
    },
    {
        id: 37,
        name: 'Juara 1 Poster TIF Exhibition - Teknik Informatika - Jurusan Teknologi Informasi Politeknik Negeri Jember 2023',
        image: Project37,
    },
    {
        id: 38,
        name: 'Webinar Leveling Up Your Branding and Mastering MERN : Full Stack Web Development - GDSC Universtas Sriwijaya 2023',
        image: Project38,
    },
    {
        id: 39,
        name: 'Webinar First Step into Flutter Programmming - GDSC Insitut Sains Dan Teknologi Terpadu Surabaya 2023',
        image: Project39,
    },
    {
        id: 40,
        name: 'Webinar Membuat mikrolog dengan laravel 11 dan livewire 2023',
        image: Project40,
    },
    {
        id: 41,
        name: 'Workshop "Pengenalan React.js: Membangun Aplikasi Web Interaktif" - Bangkalan Developer 2024',
        image: Project41,
    },
    {
        id: 42,
        name: 'Kegiatan Sosialisasi PKM RAYA 2024',
        image: Project42,
    },
    {
        id: 43,
        name: 'Kepanitian Dialog Pimpinan & Sosialisasi PTNBH 2024',
        image: Project43,
    },
];

export default function Project() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState<{ image: StaticImageData | string; name: string } | null>(null);

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
                    dots: true,
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
        <section className="bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-800" data-aos="zoom-y-out">My Certificates</h1>
                    <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">Here are some of the certificates I have received in recognition of my achievements.</p>
                </div>
                <Slider {...settings}>
                    {certificates.map(certificate => (
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
                            <button onClick={closeModal} className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4895D1] to-[#78B1E5] text-white text-xl">
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                            <Image
                                src={selectedCertificate.image}
                                alt={selectedCertificate.name}
                                className="w-full h-auto max-h-[90vh] rounded-xl object-contain"
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