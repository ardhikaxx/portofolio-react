'use client'

import { useState } from 'react';
import Project1 from '@/public/images/project/projek1.png';
import Project2 from '@/public/images/project/projek2.png';
import Project3 from '@/public/images/project/projek3.jpg';
import Project4 from '@/public/images/project/projek4.png';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    name: 'Eat Well Analyzer Website',
    description: 'I developed the Eat Well Analyzer website to help users check food nutrients. Despite the challenges of complex data processing and algorithm development, I overcame them with dedication and collaboration.',
    image: Project1,
    languages: ['html', 'tailwind', 'javascript'],
    link: 'https://eat-well-analyzer.vercel.app/',
    year: 2024
  },
  {
    id: 2,
    name: 'Website-Based Posyandu Health Data Manager',
    description: 'I developed a website for cadres or midwives to manage toddler posyandu health data for the final project of even semester 2024. Our team passed funding from the "Program Kreativitas Mahasiswa" (PKM).',
    image: Project2,
    languages: ['html', 'css', 'bootstrap', 'php', 'laravel', 'javascript'],
    link: 'https://youtu.be/ouWihtoRrXQ?si=i9-c8RCqJMOmwfLo',
    year: 2024
  },
  {
    id: 3,
    name: 'Mobile-based Posyandu Health Data Manager',
    description: 'I developed a mobile app for parents to manage toddler posyandu health data for the final project of even semester 2024. Our team passed funding from the "Program Kreativitas Mahasiswa" (PKM).',
    image: Project4,
    languages: ['android studio', 'dart', 'flutter'],
    link: 'https://youtu.be/ouWihtoRrXQ?si=i9-c8RCqJMOmwfLo',
    year: 2024
  },
  {
    id: 4,
    name: 'Website Card Monument',
    description: 'I created a website to introduce the history of Bondowoso, East Java, focusing on the Gerbong Maut incident during Dutch colonization.',
    image: Project3,
    languages: ['html', 'css', 'javascript'],
    link: 'https://web-app-posyandu.vercel.app/',
    year: 2024
  },
]

const icons: any = {
  html: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="20" height="20" alt="html5 logo" />
  ),
  css: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="20" height="20" alt="css3 logo" />
  ),
  bootstrap: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="20" height="20" alt="bootstrap logo" />
  ),
  tailwind: (
    <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" width="20" height="20" alt="tailwindcss logo" />
  ),
  laravel: (
    <img src="https://cdn.simpleicons.org/laravel/FF2D20" width="20" height="20" alt="laravel logo" />
  ),
  javascript: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="20" height="20" alt="javascript logo" />
  ),
  php: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" width="20" height="20" alt="php logo" />
  ),
  'react': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="20" height="20" alt="react logo" />
  ),
  'vue.js': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width="20" height="20" alt="vuejs logo" />
  ),
  'express.js': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="20" height="20" alt="express logo" />
  ),
  'android studio': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" width="20" height="20" alt="androidstudio logo" />
  ),
  dart: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" width="20" height="20" alt="dart logo" />
  ),
  flutter: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" width="20" height="20" alt="flutter logo" />
  ),
  'node.js': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="20" height="20" alt="nodejs logo" />
  ),
  'next.js': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="20" height="20" alt="nextjs logo" />
  )
}

export default function Project() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const maxLength = 95;

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
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800" data-aos="zoom-y-out">My Project</h1>
          <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">Here are some of the projects I have worked on.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="zoom-y-out" data-aos-delay="150">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden h-56">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                  <p className="text-sm">{project.year}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {expandedProject === project.id ? project.description : getShortDescription(project.description)}
                  {project.description.length > maxLength && (
                    <span onClick={() => toggleDescription(project.id)} className="text-blue-500 cursor-pointer">
                      {expandedProject === project.id ? ' Show Less' : ' View All'}
                    </span>
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.languages.map((lang, index) => (
                    <div key={index} className="flex items-center bg-gray-200 rounded-full px-3 py-1 shadow-md text-gray-700">
                      {icons[lang]}
                      <span className="ml-2 text-sm">{lang}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-gradient-to-r from-[#4895D1] to-[#78B1E5] text-white text-sm font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}