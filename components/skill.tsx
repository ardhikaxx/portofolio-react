'use client'

import { useState, useRef, useEffect } from 'react'
export default function Features() {

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
            <h1 className="h2 mb-4">My Skill</h1>
            <p className="text-xl text-gray-600">I excel in problem solving, teamwork, and quick adaptation to cutting-edge technology, utilizing the latest tools in my software development projects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-5 text-center">Programming Languages and Frameworks</h2>
                <div className="grid grid-cols-6 gap-3 mx-auto">
                  <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer" className="text-center ml-0">
                    <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="50" height="50" alt="HTML5" style={{ margin: '0 10px' }} />
                  </a>
                  <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer" className="text-center ml-0">
                    <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="50" height="50" alt="CSS3" style={{ margin: '0 10px' }} />
                  </a>
                  <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer" className="text-center ml-0">
                    <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="50" height="50" alt="Bootstrap" style={{ margin: '0 10px' }} />
                  </a>
                  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="text-center ml-0">
                    <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="50" height="50" alt="TailwindCSS" style={{ margin: '0 10px' }} />
                  </a>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="text-center ml-0">
                    <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="50" height="50" alt="JavaScript" style={{ margin: '0 10px' }} />
                  </a>
                  <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="text-center ml-0">
                    <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="50" height="50" alt="React" style={{ margin: '0 10px' }} />
                  </a>
                  <a href="https://vuejs.org/" target="_blank" rel="noreferrer" className="text-center ml-0">
                    <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg" width="50" height="50" alt="Vue" style={{ margin: '0 10px' }} />
                  </a>
                  <a href="https://www.php.net/" target="_blank" rel="noreferrer" className="text-center ml-0">
                    <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg" width="50" height="50" alt="PHP" style={{ margin: '0 10px' }} />
                  </a>
                  <a href="https://laravel.com/" target="_blank" rel="noreferrer" className="text-center ml-0">
                    <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg" width="50" height="50" alt="Laravel" style={{ margin: '0 10px' }} />
                  </a>
                </div>
                <p className="text-sm text-center text-bold text-gray-600 mt-5">Level: Beginner</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-5 text-center">Tools UI & UX Design</h2>
                <div className="flex justify-center space-x-4">

                </div>
                <p className="text-sm text-center text-bold text-gray-600 mt-5">Level: Beginner</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}