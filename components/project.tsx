'use client'

import { useState } from 'react';
import Image from 'next/image';
import { LinkPreview } from "@/components/ui/link-preview";
import { projects } from '@/data/projectData';

const icons: any = {
  html: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="20" height="20" alt="html5 logo" loading='lazy' />
  ),
  css: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="20" height="20" alt="css3 logo" loading='lazy' />
  ),
  bootstrap: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="20" height="20" alt="bootstrap logo" loading='lazy' />
  ),
  tailwind: (
    <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" width="20" height="20" alt="tailwindcss logo" loading='lazy' />
  ),
  laravel: (
    <img src="https://cdn.simpleicons.org/laravel/FF2D20" width="20" height="20" alt="laravel logo" loading='lazy' />
  ),
  javascript: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="20" height="20" alt="javascript logo" loading='lazy' />
  ),
  php: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" width="20" height="20" alt="php logo" loading='lazy' />
  ),
  'react': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="20" height="20" alt="react logo" loading='lazy' />
  ),
  'vue.js': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width="20" height="20" alt="vuejs logo" loading='lazy' />
  ),
  'express.js': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="20" height="20" alt="express logo" loading='lazy' />
  ),
  'android studio': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" width="20" height="20" alt="androidstudio logo" loading='lazy' />
  ),
  dart: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" width="20" height="20" alt="dart logo" loading='lazy' />
  ),
  flutter: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" width="20" height="20" alt="flutter logo" loading='lazy' />
  ),
  'node.js': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="20" height="20" alt="nodejs logo" loading='lazy' />
  ),
  'next.js': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="20" height="20" alt="nextjs logo" loading='lazy' />
  ),
  Figma: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width="20" height="20" alt="figma logo" loading='lazy' />
  ),
}

export default function Project() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const maxLength = 120;

  const toggleDescription = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const getShortDescription = (description: string) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + '...';
  };

  const [tab, setTab] = useState<number>(1)

  return (
    <section className="bg-black relative py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-white dark:text-gray-100" data-aos="zoom-y-out">My Projects</h1>
          <p className="text-xl text-gray-300 dark:text-gray-400" data-aos="zoom-y-out" data-aos-delay="150">Here are some of the projects I have worked on.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="zoom-y-out" data-aos-delay="150">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transition-transform duration-300 group hover:shadow-xl dark:hover:shadow-gray-700/50"
            >
              <div className="relative overflow-hidden h-56">
                <Image
                  src={project.image}
                  alt={project.name}
                  quality={75}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl font-semibold">{project.name}</h2>
                  <p className="text-sm">{project.year}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {expandedProject === project.id ? project.description : getShortDescription(project.description)}
                  {project.description.length > maxLength && (
                    <span 
                      onClick={() => toggleDescription(project.id)} 
                      className="text-[#B51D2A] dark:text-[#ff6b6b] cursor-pointer hover:underline ml-1"
                    >
                      {expandedProject === project.id ? ' Show Less' : ' View All'}
                    </span>
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.languages.map((lang, index) => (
                    <div key={index} className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 shadow-md text-gray-700 dark:text-gray-200">
                      {icons[lang]}
                      <span className="ml-2 text-sm">{lang}</span>
                    </div>
                  ))}
                </div>
                <LinkPreview
                  url={project.link}
                  className="inline-block px-5 py-2 bg-gradient-to-r from-[#B51D2A] to-[#E02435] text-white text-sm font-semibold rounded-full shadow-lg hover:opacity-90 transition duration-300"
                >
                  View Project
                </LinkPreview>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}