'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Project1 from '@/public/images/project/projek1.png'
import Project2 from '@/public/images/project/projek2.png'
import Project3 from '@/public/images/project/projek3.png'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    name: 'Eat Well Analyzer Website',
    description: 'I developed the Eat Well Analyzer website to help users check food nutrients. Despite the challenges of complex data processing and algorithm development, I overcame them with dedication and collaboration.',
    image: Project1,
    languages: ['html', 'bootstrap', 'javascript'],
    link: 'https://eat-well-analyzer.vercel.app/',
    year: 2024
  },
  {
    id: 2,
    name: 'Website-Based Posyandu Health Data Manager',
    description: 'In 2024, I developed a toddler posyandu health data management website as a UI/UX Designer and Front-End Developer. Our team of four received funding from the "Program Kreativitas Mahasiswa" (PKM).',
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
  }
]

const icons: any = {
  html: (
    <i className="fab fa-html5 text-gray-400 text-3xl"></i>
  ),
  css: (
    <i className="fab fa-css3-alt text-gray-400 text-3xl"></i>
  ),
  bootstrap: (
    <i className="fab fa-bootstrap text-gray-400 text-3xl"></i>
  ),
  laravel: (
    <i className="fab fa-laravel text-gray-400 text-3xl"></i>
  ),
  javascript: (
    <i className="fab fa-js-square text-gray-400 text-3xl"></i>
  ),
  php: (
    <i className="fab fa-php text-gray-400 text-3xl"></i>
  ),
  'vue.js': (
    <i className="fab fa-vuejs text-gray-400 text-3xl"></i>
  ),
  'express.js': (
    <i className="fab fa-js-square text-gray-400 text-3xl"></i>
  )
}

export default function Features() {

  const [tab, setTab] = useState<number>(1)

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800">My Projects</h1>
          <p className="text-xl text-gray-600">Here are some projects that I've created.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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