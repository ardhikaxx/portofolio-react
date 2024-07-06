'use client'
import { useState, useRef, useEffect } from 'react'
export default function Skill() {
  const [tab, setTab] = useState<number>(1)
  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="bg-gray-100 py-10">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
      <div className="relative max-w-6xl mx-auto px-4 mt-5 sm:px-6 mb-10">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4" data-aos="zoom-y-out">My Skill</h1>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">I excel in problem solving, teamwork, and quick adaptation to cutting-edge technology, utilizing the latest tools in my software development projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="zoom-y-out" data-aos-delay="250">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">Web Development</h2>
                <div className="grid grid-cols-6 text-center items-center justify-center gap-3 mx-auto">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="55" height="40" alt="HTML5 logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="55" height="40" alt="CSS3 logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="55" height="40" alt="Bootstrap logo" />
                  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" width="55" height="40" alt="TailwindCSS logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="55" height="40" alt="JavaScript logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="55" height="40" alt="TypeScript logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="55" height="40" alt="React logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width="55" height="40" alt="Vue.js logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="55" height="40" alt="Express logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="55" height="40" alt="Next.js logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="55" height="40" alt="Node.js logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" width="55" height="40" alt="PHP logo" />
                  <img src="https://cdn.simpleicons.org/laravel/FF2D20" width="55" height="40" alt="Laravel logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg" width="55" height="40" alt="Composer logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" width="55" height="40" alt="Material UI logo" />
                </div>
                <div className="flex justify-center items-center mt-5">
                  <div className="bg-blue-100 text-blue-700 text-sm font-bold px-4 py-2 rounded-full">
                    <span className="mr-2">Level:</span>
                    <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full">Beginner</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">Mobile Development</h2>
                <div className="flex justify-center items-center gap-3 py-16 mx-auto">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" width="55" alt="Android logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" width="55" height="40" alt="Android Studio logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" width="55" height="40" alt="Kotlin logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" width="55" height="40" alt="Dart logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" width="55" height="40" alt="Flutter logo" />
                </div>
                <div className="flex justify-center items-center mt-5">
                  <div className="bg-blue-100 text-blue-700 text-sm font-bold px-4 py-2 rounded-full">
                    <span className="mr-2">Level:</span>
                    <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full">Beginner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}