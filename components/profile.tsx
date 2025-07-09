import Image from 'next/image';
import ProfilImage from '@/public/images/me.jpg';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Profile() {
  return (
    <section className="dark:bg-gray-900 relative py-5 z-10">
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#B4D6E9" offset="0%" />
              <stop stopColor="#78B1E5" offset="50%" />
              <stop stopColor="#4895D1" offset="100%" />
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
          <div className="mx-auto text-center pb-5 md:pb-6">
            <h2 className="text-3xl font-bold text-white" data-aos="zoom-y-out">Apps I Frequently Use</h2>
            <p className="text-gray-300" data-aos="zoom-y-out">These are the apps I frequently use for daily development and design projects.</p>
          </div>
          <div className="max-w-sm md:max-w-1xl mx-auto grid gap-5 grid-cols-4 md:grid-cols-5" data-aos="zoom-y-out" data-aos-delay="250">
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width={55} height={55} alt="vscode logo" loading="lazy" />
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" width={55} height={55} alt="visualstudio logo" loading="lazy" />
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="https://skillicons.dev/icons?i=powershell" width={55} height={55} alt="powershell logo" loading="lazy" />
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" width={55} height={55} alt="androidstudio logo" loading="lazy" />
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="https://cdn.simpleicons.org/postman/FF6C37" width={55} height={55} alt="postman logo" loading="lazy" />
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width={55} height={55} alt="git logo" loading="lazy" />
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={55}height={55} alt="github logo" loading="lazy" className="filter invert"
              />
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" width={55} height={55} alt="trello logo" loading="lazy" />
            </div>
            <div className="flex items-center justify-center py-1 col-span-1 md:col-auto">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width={55} height={55} alt="figma logo" loading="lazy" />
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-12 pt-20" data-aos="zoom-y-out">
            <div className="relative flex flex-col items-center border-2 border-gray-200 rounded-lg bg-white shadow-lg p-8">
              <div className="absolute top-0 -mt-24">
                <Image
                  className="rounded-full border-4 border-white shadow-lg grayscale-[50] hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                  src={ProfilImage}
                  width={195}
                  height={195}
                  alt="Profile Image"
                  quality={75}
                />
              </div>
              <div className="mt-20 text-center">
                <blockquote className="text-lg font-medium mb-4 text-gray-700 leading-relaxed">
                  “Hello, I'm Yanuar Ardhika Rahmadhani Ubaidillah, a Junior Web & Mobile Developer passionate about combining technology and creativity to solve real-world challenges. I'm currently sharpening my skills in the Information Technology Department, Informatics Engineering (D4) at Politeknik Negeri Jember. With a strong background in web and mobile development, I’m eager to explore AI, IoT, and computer vision. I also enjoy designing intuitive user experiences and building efficient, scalable systems. Through my projects, I aim to deliver impactful solutions while staying up-to-date with the latest technology and design trends.“
                </blockquote>
                <cite className="block font-bold text-xl not-italic mb-1 text-gray-900">Yanuar Ardhika Rahmadhani Ubaidillah</cite>
                <div className="text-gray-600 text-lg">
                  <span>Junior Web & Mobile Developer</span>
                </div>
                <div className="flex justify-center mt-6 space-x-6">
                  <a
                    href="https://www.instagram.com/ardhkkaa_/"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-900 transition-transform transform hover:scale-110"
                    aria-label="Instagram Profile"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a
                    href="https://github.com/ardhikaxx"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-900 transition-transform transform hover:scale-110"
                    aria-label="GitHub Profile"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yanuar-ardhika-rahmadhani-ubaidillah-36a842287/"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-900 transition-transform transform hover:scale-110"
                    aria-label="LinkedIn Profile"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}