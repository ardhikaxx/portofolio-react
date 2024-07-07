import Image from 'next/image';
import LogoImage from '@/public/images/logo-simple.png';
import { FlipWords } from "./ui/flip-words";
import React from 'react';
import DownloadButton from './ui/DownloadButton';

export default function Hero() {
  const words = ["Front-End", "Web", "Mobile"];

  return (
    <section className="relative overflow-hidden py-2 z-10">
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none z-0" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#B4D6E9" offset="0%" />
              <stop stopColor="#78B1E5" offset="50%" />
              <stop stopColor="#4895D1" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 mt-10 md:pb-20">
          <div className="text-center pb-12 md:pb-16 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2" data-aos="zoom-y-out">
              <Image className="inline -mt-4" src={LogoImage} width={100} height={100} alt="Logo" />
              <h1 className="text-2xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 flex items-center text-center">
                Hello, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4895D1] to-[#78B1E5] ml-3">Yanuar Ardhika</span>
              </h1>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="text-xl md:text-4xl text-gray-800 mb-2 flex justify-center items-center" data-aos="zoom-y-out" data-aos-delay="150">
                <p className="text-neutral-600 font-bold">I'm a</p>
                <FlipWords className='text-xl md:text-4xl text-neutral-600' words={words} />
                <p className="text-neutral-600 font-bold"> Developer</p>
              </div>
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">I'm a Junior Web & Mobile Dev focused on responsive, attractive, and functional interfaces across multiple devices and platforms.</p>
              <div className="max-w-xl mx-auto sm:max-w-none flex items-center justify-center gap-5" data-aos="zoom-y-out" data-aos-delay="300">
                {/* <div>
                  <Link className="btn text-white bg-blue-600 hover:bg-blue-700 py-3 px-4 sm:py-3 sm:px-6 text-xs sm:text-base" href="y">About Me</Link>
                </div> */}
                <div>
                  <DownloadButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}