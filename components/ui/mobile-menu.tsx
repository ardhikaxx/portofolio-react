// components/ui/mobile-menu.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi';
import { FiDownload, FiX, FiMenu } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function MobileMenu({ handleDownload }: { handleDownload: () => void }) {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // Close mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // Close mobile menu on ESC key
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileNavOpen])

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className="h-12 w-12 rounded-full flex items-center justify-center transition-all"
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        {mobileNavOpen ? (
          <FiX className="text-gray-800 dark:text-white w-6 h-6" />
        ) : (
          <FiMenu className="text-gray-800 dark:text-white w-6 h-6" />
        )}
        <span className="sr-only">Toggle menu</span>
      </button>

      {/* Mobile menu */}
      <Transition
        show={mobileNavOpen}
        as="div"
        className="fixed inset-0 z-40 overflow-y-auto"
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" onClick={() => setMobileNavOpen(false)} />
        
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-3xl shadow-xl z-50 pt-6 pb-8 px-6">
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setMobileNavOpen(false)}
              className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700"
            >
              <FiX className="text-gray-600 dark:text-gray-300 w-5 h-5" />
            </button>
          </div>

          <nav ref={mobileNav} id="mobile-nav">
            <ul className="flex flex-col space-y-6">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="https://www.instagram.com/ardhkkaa_/"
                  target="_blank"
                  className="flex items-center justify-between py-3 text-gray-800 dark:text-gray-100 font-medium text-lg"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Contact Me
                  <FiArrowRight className='ml-2' size={18} />
                </Link>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <button
                  onClick={() => {
                    handleDownload()
                    setMobileNavOpen(false)
                  }}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-gradient-to-r from-[#B51D2A] to-[#E02435] text-white font-medium text-lg"
                >
                  Download CV
                  <FiDownload className="w-5 h-5" />
                </button>
              </motion.li>
            </ul>
          </nav>
        </div>
      </Transition>
    </div>
  )
}