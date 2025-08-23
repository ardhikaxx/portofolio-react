export default function Skill() {
  return (
    <section className="bg-black relative py-16">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-5 md:pt-10">
          <div className="max-w-3xl text-center mx-auto pb-10 md:pb-16">
            <h1 className="text-4xl font-bold text-white mb-4" data-aos="zoom-y-out">My Skills</h1>
            <p className="text-xl text-gray-300 dark:text-gray-400" data-aos="zoom-y-out" data-aos-delay="150">
              I excel in problem solving, teamwork, and quick adaptation to cutting-edge technology, utilizing the latest tools in my software development projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="zoom-y-out" data-aos-delay="250">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl hover:shadow-[0_20px_50px_rgba(181,_29,_42,_0.3)] transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-[#B51D2A]/10 p-3 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#E02435]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white ml-4">Web Development</h2>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" name="HTML5" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" name="CSS3" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" name="Bootstrap" />
                  <SkillCard src="https://cdn.simpleicons.org/tailwindcss/06B6D4" name="Tailwind" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" name="JavaScript" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" name="TypeScript" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" name="React" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" name="Vue.js" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" name="Express" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" name="Next.js" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" name="PHP" />
                  <SkillCard src="https://cdn.simpleicons.org/laravel/FF2D20" name="Laravel" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" name="Node.js" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" name="MySQL" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" name="MongoDB" />
                </div>
                
                <div className="mt-8 flex justify-center">
                  <div className="bg-[#B51D2A]/10 text-[#E02435] text-sm font-medium px-6 py-2 rounded-full flex items-center">
                    <span className="mr-2">Skill Level:</span>
                    <span className="bg-[#B51D2A]/20 px-3 py-1 rounded-full">Beginner</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl hover:shadow-[0_20px_50px_rgba(181,_29,_42,_0.3)] transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-[#B51D2A]/10 p-3 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#E02435]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white ml-4">Mobile Development</h2>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" name="Android" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" name="Android Studio" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" name="Kotlin" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" name="Dart" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" name="Flutter" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" name="React Native" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" name="Firebase" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" name="SQLite" />
                  <SkillCard src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" name="GraphQL" />
                </div>
                
                <div className="mt-8 flex justify-center">
                  <div className="bg-[#B51D2A]/10 text-[#E02435] text-sm font-medium px-6 py-2 rounded-full flex items-center">
                    <span className="mr-2">Skill Level:</span>
                    <span className="bg-[#B51D2A]/20 px-3 py-1 rounded-full">Beginner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  src: string;
  name: string;
}

function SkillCard({ src, name }: SkillCardProps) {
  return (
    <div className="group relative w-full flex flex-col items-center">
      <div className="w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center p-3 mb-2 group-hover:bg-gray-600 transition-all duration-300">
        <img 
          src={src} 
          alt={name} 
          className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" 
          loading="lazy"
        />
      </div>
      <div className="absolute -bottom-8 hidden group-hover:block bg-[#B51D2A] text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
        {name}
      </div>
    </div>
  );
}