'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu';
import { FiDownload } from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function Header() {
  const handleDownload = () => {
    const downloadUrl = '/pdf/cv-ats.pdf';
    fetch(downloadUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'cv-kreatif.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        toast.success('Download Successful!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch(error => {
        console.error('Error during download:', error);
        toast.error('Download Failed!', {
          position: "top-center",
          theme: "colored",
        });
      });
  };

  const [scrolled, setScrolled] = useState<boolean>(false)

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setScrolled(true) : setScrolled(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <header className={`fixed w-full z-50 md:bg-opacity-90 transition duration-300 ease-in-out ${scrolled ? 'dark:bg-gray-900/90 bg-white/90 backdrop-blur-sm shadow-lg' : 'dark:bg-gray-900/50 bg-white/50'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Logo />
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="https://www.instagram.com/ardhxkaa_/" target='_blank' className={`font-medium ${scrolled ? 'text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300' : 'text-gray-800 dark:text-white'} px-5 py-3 flex items-center transition duration-150 ease-in-out`}>
                  Contact Me
                </Link>
              </li>
              <li>
                <button
                  onClick={handleDownload}
                  className={`btn-sm px-4 flex items-center py-2 font-medium rounded-full ${scrolled
                    ? 'bg-gradient-to-r from-[#B51D2A] to-[#E02435] text-white'
                    : 'bg-gray-800 dark:bg-white text-white dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-200'
                    } ml-3 transition-all duration-300 hover:shadow-md`}
                >
                  <span>Download CV</span>
                  <FiDownload className='ml-2' size={18} />
                </button>
              </li>
            </ul>
          </nav>
          <MobileMenu scrolled={scrolled} />
        </div>
      </div>
    </header>
  )
}