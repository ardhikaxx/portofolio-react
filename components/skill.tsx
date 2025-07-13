export default function Skill() {
  return (
    <section className="dark:bg-gray-900 relative py-10">
      <div className="relative max-w-6xl mx-auto px-4 mt-5 sm:px-6 mb-10">
        <div className="pt-5 md:pt-10">
          <div className="max-w-3xl text-center mx-auto pb-5 md:pb-16">
            <h1 className="text-3xl font-bold text-white dark:text-gray-100" data-aos="zoom-y-out">My Skill</h1>
            <p className="text-xl text-gray-300 dark:text-gray-400" data-aos="zoom-y-out" data-aos-delay="150">I excel in problem solving, teamwork, and quick adaptation to cutting-edge technology, utilizing the latest tools in my software development projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="zoom-y-out" data-aos-delay="250">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-5 text-center">Web Development</h2>
                <div className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-3 justify-items-center items-center mx-auto">
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap logo" />
                  <SkillIcon src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="TailwindCSS logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP logo" />
                  <SkillIcon src="https://cdn.simpleicons.org/laravel/FF2D20" alt="Laravel logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB logo" />
                </div>
                <div className="flex justify-center items-center mt-5">
                  <div className="bg-[#B51D2A] bg-opacity-10 dark:bg-opacity-20 text-[#B51D2A] dark:text-[#ff6b6b] text-sm font-bold px-4 py-2 rounded-full">
                    <span className="mr-2">Skill Level :</span>
                    <span className="bg-[#B51D2A] bg-opacity-10 dark:bg-opacity-20 text-[#B51D2A] dark:text-[#ff6b6b] px-3 py-1 rounded-full">Beginner</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-5 text-center">Mobile Development</h2>
                <div className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-3 justify-items-center items-center mx-auto">
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" alt="Android Studio logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite logo" />
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL logo" />
                </div>
                <div className="flex justify-center items-center mt-5">
                  <div className="bg-[#B51D2A] bg-opacity-10 dark:bg-opacity-20 text-[#B51D2A] dark:text-[#ff6b6b] text-sm font-bold px-4 py-2 rounded-full">
                    <span className="mr-2">Skill Level :</span>
                    <span className="bg-[#B51D2A] bg-opacity-10 dark:bg-opacity-20 text-[#B51D2A] dark:text-[#ff6b6b] px-3 py-1 rounded-full">Beginner</span>
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

interface SkillIconProps {
  src: string;
  alt: string;
}

function SkillIcon({ src, alt }: SkillIconProps) {
  return (
    <img 
      src={src} 
      width="55" 
      height="55" 
      alt={alt} 
      className="mx-auto hover:scale-110 transition-transform duration-300" 
      loading="lazy" 
    />
  );
}