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
          position: "top-center",
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
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  const [scrolled, setScrolled] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setScrolled(true) : setScrolled(false)
  }

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('scroll', scrollHandler)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Desktop Header dengan glass effect
  const DesktopHeader = () => (
    <header className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg' 
        : 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Logo />
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link 
                  href="https://www.instagram.com/ardhxkaa_/" 
                  target='_blank' 
                  className={`font-medium px-5 py-3 flex items-center transition-all duration-200 ease-in-out hover:scale-105 ${
                    scrolled 
                      ? 'text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300' 
                      : 'text-gray-800 dark:text-white'
                  }`}
                >
                  Contact Me
                </Link>
              </li>
              <li>
                <button
                  onClick={handleDownload}
                  className={`btn-sm px-6 flex items-center py-3 font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    scrolled
                      ? 'bg-gradient-to-r from-[#B51D2A] to-[#E02435] text-white shadow-md'
                      : 'bg-gray-800 dark:bg-white text-white dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-200 shadow-sm'
                  } ml-3`}
                >
                  <span>Download CV</span>
                  <FiDownload className='ml-2' size={18} />
                </button>
              </li>
            </ul>
          </nav>
          
          {/* Hanya tampilkan MobileMenu di mobile */}
          <div className="md:hidden">
            <MobileMenu scrolled={scrolled} />
          </div>
        </div>
      </div>
    </header>
  )

  // Mobile Floating Bottom Navigation
  const MobileFloatingNav = () => (
    <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      scrolled ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
    }`}>
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-full shadow-2xl border border-white/20 dark:border-gray-700/20 px-4 py-3">
        <div className="flex items-center space-x-4">
          {/* Logo kecil untuk mobile */}
          <div className="shrink-0">
            <div className="w-8 h-8 bg-gradient-to-r from-[#B51D2A] to-[#E02435] rounded-full flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
          </div>
          
          {/* Contact Link */}
          <Link 
            href="https://www.instagram.com/ardhxkaa_/" 
            target='_blank'
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
          >
            Contact
          </Link>
          
          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-gradient-to-r from-[#B51D2A] to-[#E02435] text-white rounded-full text-sm font-medium flex items-center space-x-2 hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <FiDownload size={16} />
            <span>CV</span>
          </button>

          {/* Mobile Menu Trigger - Hanya di mobile */}
          <MobileMenu scrolled={scrolled} />
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
      <div className="block md:hidden">
        <MobileFloatingNav />
      </div>
    </>
  )
}