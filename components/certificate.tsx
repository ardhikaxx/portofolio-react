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
import Image from 'next/image';
import Slider from 'react-slick';

const certificates = [
    {
        id: 1,
        name: 'Eat Well Analyzer Website',
        image: Project1,
    },
    {
        id: 2,
        name: 'Introduction to React js Workshop',
        image: Project2,
    },
    {
        id: 3,
        name: 'Advanced CSS and Sass',
        image: Project3,
    },
    {
        id: 4,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project4,
    },
    {
        id: 5,
        name: 'The Web Developer Bootcamp',
        image: Project5,
    },
    {
        id: 6,
        name: 'Responsive Web Design',
        image: Project6,
    },
    {
        id: 7,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project7,
    },
    {
        id: 8,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project8,
    },
    {
        id: 9,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project9,
    },
    {
        id: 10,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project10,
    },
    {
        id: 11,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project11,
    },
    {
        id: 12,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project12,
    },
    {
        id: 13,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project13,
    },
    {
        id: 14,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project14,
    },
    {
        id: 15,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project15,
    },
    {
        id: 16,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project16,
    },
    {
        id: 17,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project17,
    },
    {
        id: 18,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project18,
    },
    {
        id: 19,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project19,
    },
    {
        id: 20,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project20,
    },
    {
        id: 21,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project21,
    },
    {
        id: 22,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project22,
    },
    {
        id: 23,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project23,
    },
    {
        id: 24,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project24,
    },
    {
        id: 25,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project25,
    },
    {
        id: 26,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project26,
    },
    {
        id: 27,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project27,
    },
    {
        id: 28,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project28,
    },
    {
        id: 29,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project29,
    },
    {
        id: 30,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project30,
    },
    {
        id: 31,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project31,
    },
    {
        id: 32,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project32,
    },
    {
        id: 33,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project33,
    },
    {
        id: 34,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project34,
    },
    {
        id: 35,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project35,
    },
    {
        id: 36,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project36,
    },
    {
        id: 37,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project37,
    },
    {
        id: 38,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project38,
    },
    {
        id: 39,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project39,
    },
    {
        id: 40,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project40,
    },
    {
        id: 41,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project41,
    },
    {
        id: 42,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project42,
    },
    {
        id: 43,
        name: 'JavaScript Algorithms and Data Structures',
        image: Project43,
    },
];

export default function Project() {
    const [isPaused, setIsPaused] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !isPaused,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        beforeChange: () => setIsPaused(true),
        afterChange: () => setIsPaused(false),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-800" data-aos="zoom-y-out">My Certificates</h1>
                    <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">Here are some certificates that I've received.</p>
                </div>
                <Slider {...settings}>
                    {certificates.map(certificate => (
                        <div key={certificate.id} className="p-4">
                            <div
                                className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                                onTouchStart={() => setIsPaused(true)}
                                onTouchEnd={() => setIsPaused(false)}
                            >
                                <div className="relative overflow-hidden h-56">
                                    <Image
                                        src={certificate.image}
                                        alt={certificate.name}
                                        className="w-full h-full object-cover transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}