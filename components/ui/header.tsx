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
          style: { width: '300px', marginLeft: 'auto'},
        });
      })
      .catch(error => {
        console.error('Error during download:', error);
        toast.error('Download Failed! There was an error downloading the file.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
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
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${scrolled ? 'bg-white/30 backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Logo />
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="https://www.instagram.com/ardhxkaa_/" target='_blank' className={`font-semibold ${scrolled ? 'text-black hover:text-gray-700' : 'text-black'} hover:text-gray-700 px-5 py-3 flex font-bold items-center transition duration-150 ease-in-out`}>Contact Me</Link>
              </li>
              <li>
                <button
                  onClick={handleDownload}
                  className={`btn-sm btn px-4 flex items-center py-2 font-semibold rounded-full ${scrolled
                    ? 'bg-gradient-to-r from-[#4895D1] to-[#78B1E5] text-white'
                    : 'bg-black text-white'
                    } ml-3 transition-colors duration-300`}
                >
                  <span>Download CV</span>
                  <FiDownload className='ml-2' size={20} />
                </button>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}