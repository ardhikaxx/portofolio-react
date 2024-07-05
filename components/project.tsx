'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Project1 from '@/public/images/project/projek1.png'
import Project2 from '@/public/images/project/projek2.png'
import Project3 from '@/public/images/project/projek3.png'
import Project4 from '@/public/images/project/projek4.jpg'
import Image from 'next/image'

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
    languages: ['bootstrap', 'php', 'laravel', 'javascript'],
    link: 'https://youtu.be/ouWihtoRrXQ?si=i9-c8RCqJMOmwfLo',
    year: 2024
  },
  {
    id: 3,
    name: 'Website Card Monument',
    description: 'I created a website to introduce the history of Bondowoso, East Java, focusing on the Gerbong Maut incident during Dutch colonization.',
    image: Project3,
    languages: ['html', 'css', 'javascript'],
    link: 'https://web-app-posyandu.vercel.app/',
    year: 2024
  },
  {
    id: 4,
    name: 'Mobile-based Posyandu Health Data Manager',
    description: 'I developed a mobile app for parents to manage toddler posyandu health data for the final project of even semester 2024. Our team passed funding from the "Program Kreativitas Mahasiswa" (PKM).',
    image: Project4,
    languages: [ 'android-studio' ,'dart', 'flutter'],
    link: 'https://web-app-posyandu.vercel.app/',
    year: 2024
  }
]

const icons: any = {
  html: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="35" height="35" alt="html5 logo" />
  ),
  css: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="35" height="35" alt="css3 logo" />
  ),
  bootstrap: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="35" height="35" alt="bootstrap logo" />
  ),
  tailwind: (
    <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" width="35" height="35" alt="tailwindcss logo" />
  ),
  laravel: (
    <img src="https://cdn.simpleicons.org/laravel/FF2D20" width="35" height="35" alt="laravel logo" />
  ),
  javascript: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="35" height="35" alt="javascript logo" />
  ),
  php: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" width="35" height="35" alt="php logo" />
  ),
  'react': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="35" height="35" alt="react logo" />
  ),
  'vue.js': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width="35" height="35" alt="vuejs logo" />
  ),
  'express.js': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="55" height="40" alt="express logo" />
  ),
  'android-studio': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" width="35" height="35" alt="androidstudio logo" />
  ),
  dart: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" width="35" height="35" alt="dart logo" />
  ),
  flutter: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" width="35" height="35" alt="flutter logo" />
  ),
  'node.js': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="35" height="35" alt="nodejs logo" />
  ),
  'next.js': (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="35" height="35" alt="nextjs logo" />
  )
}

export default function Features() {

  const [tab, setTab] = useState<number>(1)

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800" data-aos="zoom-y-out">My Projects</h1>
          <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">Here are some projects that I've created.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="zoom-y-out" data-aos-delay="150">
          {projects.map(project => (
            <div key={project.id} className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative overflow-hidden h-56">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{project.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{project.year}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-2 mb-4">
                  {project.languages.map((lang, index) => (
                    <div key={index}>{icons[lang]}</div>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
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