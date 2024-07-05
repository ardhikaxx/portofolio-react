import Image from 'next/image';
import Icon from '@mdi/react';
import ProfilImage from '@/public/images/me.jpg';
import '@fortawesome/fontawesome-free/css/all.css';
import { mdiMicrosoftVisualStudioCode } from '@mdi/js';
import { mdiAndroidStudio } from '@mdi/js';
import { mdiPowershell } from '@mdi/js';
import { mdiMicrosoftVisualStudio } from '@mdi/js';

export default function Profile() {
  return (
    <section className="relative py-5 z-10">
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto text-center pb-12 md:pb-16">
            <h2 className="h3 mb-4"  data-aos="zoom-y-out">Apps I Frequently Use</h2>
            <p className="text-gray-600" data-aos="zoom-y-out">These are the apps I frequently use for daily development and design projects.</p>
          </div>
          <div className="max-w-sm md:max-w-1xl mx-auto grid gap-3 grid-cols-4 md:grid-cols-5" data-aos="zoom-y-out" data-aos-delay="250">
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="55" alt="vscode logo"  />
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" width="55" alt="visualstudio logo"  />
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="https://skillicons.dev/icons?i=powershell" width="55" alt="powershell logo"  />
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" width="55" alt="androidstudio logo"  />
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="https://cdn.simpleicons.org/postman/FF6C37" width="55" alt="postman logo"  />
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="55" alt="git logo"  />
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="55" alt="github logo"  />
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" width="55" alt="trello logo"  />
            </div>
            <div className="flex items-center justify-center py-1 col-span-1 md:col-auto">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width="55" alt="figma logo"  />
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-12 pt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              <div className="text-center px-10 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-20 left-1/2 transform -translate-x-1/2 mb-5 ">
                  <Image className="relative rounded-full" src={ProfilImage} width={150} height={150} alt="Logo" />
                </div>
                <blockquote className="text-sm font-medium mb-4">
                  “I am a Junior Web & Mobile Dev committed to creative innovation in the digital world. Currently, I am pursuing my D4 in Informatics Engineering at Politeknik Negeri Jember, where I continue to improve my technical skills and design expertise to add value to every project I create.“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Yanuar Ardhika Rahmadhani Ubaidillah</cite>
                <div className="text-gray-600">
                  <span>Junior Web & Mobile Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}