'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiTrayArrowDown } from '@mdi/js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function MobileMenu() {

  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  const handleDownload = () => {
    const downloadUrl = '/pdf/cv-kreatif.pdf';
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

  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-gray-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-25 w-full justify-center items-center rounded-lg z-20 left-0 bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="flex flex-col justify-center items-center px-2 py-2 ">
            <li>
              <Link href="https://www.instagram.com/ardhkkaa_/" target='_blank' className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center">Contact Me</Link>
            </li>
            <li>
              <button onClick={() => setMobileNavOpen(false)}>
              </button>
            </li>
            <li>
              <button className="btn-sm btn-sm btn px-3 flex items-center py-2 rounded-full text-gray-200 bg-gray-900 hover:bg-gray-800 my-2" onClick={handleDownload}>
                Download CV
                <Icon path={mdiTrayArrowDown} className='ml-2' size={1} />
              </button>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  )
}