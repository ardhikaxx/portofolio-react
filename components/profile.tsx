'use client'

import Image from 'next/image';
import ProfilImage from '@/public/images/me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default function Profile() {
  return (
    <section className="relative min-h-screen bg-black py-16 overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            My Development Stack
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I use daily to build amazing products
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { name: 'VS Code', icon: 'vscode-original', source: 'devicon' },
              { name: 'Visual Studio', icon: 'visualstudio-plain', source: 'devicon' },
              { name: 'Android Studio', icon: 'androidstudio-original', source: 'devicon' },
              { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37', source: 'simpleicons' },
              { name: 'Git', icon: 'git-original', source: 'devicon' },
              { name: 'GitHub', icon: 'github-original', source: 'devicon', invert: true },
              { name: 'Figma', icon: 'figma-original', source: 'devicon' },
            ].map((tool, index) => (
              <div 
                key={index}
                className="flex flex-col items-center group"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center p-3 mb-2 transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-110 border border-white/10">
                  <img 
                    src={tool.source === 'devicon' 
                      ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool.icon.split('-')[0]}/${tool.icon}.svg` 
                      : tool.icon} 
                    alt={`${tool.name} logo`} 
                    loading="lazy" 
                    className={`w-full h-full object-contain ${tool.invert ? 'filter invert' : ''}`}
                  />
                </div>
                <span className="text-xs md:text-sm text-gray-400 group-hover:text-white transition-colors">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <div className="relative group">
            {/* Glass Effect Card */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Subtle shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="flex flex-col items-center pt-10 px-6 relative z-10">
                <div className="relative mb-6">
                  <div className="relative rounded-full p-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
                    <Image
                      className="relative rounded-full border-4 border-gray-800/50 shadow-lg w-48 h-48 object-cover transition-all duration-50"
                      src={ProfilImage}
                      width={192}
                      height={192}
                      alt="Profile"
                      quality={100}
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white">
                  Yanuar Ardhika R. U.
                </h3>
                <h5 className="text-[#E02435] font-bold mt-1">Junior Web & Mobile Developer</h5>
              </div>
              
              <div className="p-6 md:p-8 relative z-10">
                <div className="relative mb-6">
                  <FontAwesomeIcon 
                    icon={faQuoteLeft} 
                    className="absolute -top-6 left-0 text-gray-400/40 text-2xl"
                  />
                  <p className="text-gray-300 leading-relaxed pl-6">
                    Passionate about combining technology and creativity to solve real-world challenges. 
                    Currently sharpening my skills in Information Technology at Politeknik Negeri Jember. 
                    With strong background in web and mobile development, I'm eager to explore AI, IoT, 
                    and computer vision. I enjoy designing intuitive experiences and building efficient systems.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-white/10 pt-6">
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">MAIN SKILLS</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Web Dev', 'Mobile Dev', 'UI/UX', 'System Design'].map((skill, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    {[
                      { icon: faGithub, url: "https://github.com/ardhikaxx", label: "GitHub" },
                      { icon: faInstagram, url: "https://www.instagram.com/ardhkkaa_/", label: "Instagram" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:from-white/10 hover:to-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 border border-white/10"
                        aria-label={social.label}
                      >
                        <FontAwesomeIcon icon={social.icon} size="sm" />
                      </a>
                    ))}
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