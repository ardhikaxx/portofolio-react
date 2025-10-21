'use client';

import { FlipWords } from "./ui/flip-words";
import React from 'react';
import DownloadButton from './ui/DownloadButton';
import SplitText from './ui/SplitText';
import FaultyTerminal from './ui/FaultyTerminal';

export default function Hero() {
  const words = ["Front-End", "Web", "Mobile"];

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <section className="w-full dark:bg-gray-900 bg-white relative overflow-hidden py-3 z-10">
      <div className="absolute inset-0 z-0">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#B51D2A"
          mouseReact={true}
          mouseStrength={1.5}
          pageLoadAnimation={false}
          brightness={0.8}
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-0"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="pt-32 pb-12 md:pt-40 mt-10 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2" data-aos="zoom-y-out">
              <h1 className="text-2xl md:text-5xl font-extrabold text-white leading-tighter tracking-tighter mb-4 flex items-center text-center">
                <SplitText
                  text="</Hello, I'm Yanuar Ardhika>"
                  className="text-2xl md:text-5xl font-extrabold text-white leading-tighter tracking-tighter"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="words, chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </h1>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="text-xl md:text-4xl text-white mb-2 flex justify-center items-center" data-aos="zoom-y-out" data-aos-delay="150">
                <p className="font-bold">I'm a</p>
                <FlipWords className='text-xl md:text-4xl text-white' words={words} />
                <p className="font-bold"> Developer</p>
              </div>
              <p className="text-xl text-gray-200 font-medium mb-8" data-aos="zoom-y-out" data-aos-delay="150">I am a Junior Web & Mobile Developer focused on responsive, attractive and functional interfaces across multiple devices and platforms.</p>
              <div className="max-w-xl mx-auto sm:max-w-none flex items-center justify-center gap-5" data-aos="zoom-y-out" data-aos-delay="300">
                <div></div>
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