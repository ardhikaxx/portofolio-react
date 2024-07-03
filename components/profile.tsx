import Image from 'next/image'
import ProfilImage from '@/public/images/me.jpg'
import '@fortawesome/fontawesome-free/css/all.css';

export default function Profile() {
  return (
    <section className="relative py-10">

      {/* Illustration behind content */}
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

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h4 mb-4">Programming Languages and Frameworks I use</h2>
            <p className=" text-gray-600" data-aos="zoom-y-out">I am very familiar with the framework and am learning more about it.</p>
          </div>

          <div className="max-w-sm md:max-w-1xl mx-auto grid gap-1 grid-cols-4 md:grid-cols-5">
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <i className="fab fa-html5 text-gray-400 text-5xl"></i>
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <i className="fab fa-css3 text-gray-400 text-5xl"></i>
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <i className="fab fa-bootstrap text-gray-400 text-5xl"></i>
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <i className="fab fa-js-square text-gray-400 text-5xl"></i>
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <i className="fab fa-react text-gray-400 text-5xl"></i>
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <i className="fab fa-angular text-gray-400 text-5xl"></i>
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <i className="fab fa-vuejs text-gray-400 text-5xl"></i>
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <i className="fab fa-node-js text-gray-400 text-5xl"></i>
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <i className="fab fa-php text-gray-400 text-5xl"></i>
            </div>
            <div className="flex items-center justify-center py-2 col-span-1 md:col-auto">
              <i className="fab fa-laravel text-gray-400 text-5xl"></i>
            </div>

          </div>

          <div className="max-w-3xl mx-auto mt-12 pt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              <div className="text-center px-10 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-20 left-1/2 transform -translate-x-1/2 mb-5 ">
                  <Image className="relative rounded-full" src={ProfilImage} width={150} height={150} alt="Testimonial 01" />
                </div>
                <blockquote className="text-sm font-medium mb-4">
                  “I am a Front-End Developer and UI/UX Designer committed to creative innovation in the digital world. Currently, I am pursuing my D4 in Informatics Engineering at Politeknik Negeri Jember, where I continue to improve my technical skills and design expertise to add value to every project I create.“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Yanuar Ardhika Rahmadhani Ubaidillah</cite>
                <div className="text-gray-600">
                  <span>Junior Web Developer</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}