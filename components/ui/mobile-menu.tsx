'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { FiArrowRight, FiDownload, FiX, FiMenu, FiInstagram, FiMail, FiGithub } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify';

interface MobileMenuProps {
  scrolled: boolean;
}

export default function MobileMenu({ scrolled }: MobileMenuProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  const handleDownload = () => {
    const downloadUrl = '/pdf/cv-ats.pdf'
    fetch(downloadUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'cv-kreatif.pdf')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)

        toast.success('Download Successful!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      })
      .catch(error => {
        console.error('Error during download:', error)
        toast.error('Download Failed!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      })
  }

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

  const menuItems = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/ardhxkaa_/',
      icon: FiInstagram,
      color: 'from-pink-500 to-purple-600'
    },
    {
      name: 'Email',
      href: 'mailto:your-email@gmail.com',
      icon: FiMail,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/yourusername',
      icon: FiGithub,
      color: 'from-gray-700 to-gray-900'
    }
  ]

  return (
    <div className="flex md:hidden"> {/* Tambahkan md:hidden di sini */}
      {/* Hamburger button untuk floating nav */}
      <button
        ref={trigger}
        className="h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-r from-[#B51D2A] to-[#E02435] text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        {mobileNavOpen ? (
          <FiX className="w-5 h-5" />
        ) : (
          <FiMenu className="w-5 h-5" />
        )}
        <span className="sr-only">Toggle menu</span>
      </button>

      <AnimatePresence>
        {mobileNavOpen && (
          <>
            <motion.div
              ref={mobileNav}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-24 left-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 z-50 p-6 md:hidden"
            >
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Quick Links
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Connect with me
                </p>
              </div>

              <nav className="space-y-3">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      target="_blank"
                      className="flex items-center justify-between p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700/80 transition-all duration-200 group"
                      onClick={() => setMobileNavOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white">
                          {item.name}
                        </span>
                      </div>
                      <FiArrowRight className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={() => {
                      handleDownload()
                      setMobileNavOpen(false)
                    }}
                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#B51D2A] to-[#E02435] text-white shadow-lg hover:shadow-xl transition-all duration-200 group hover:scale-[1.02]"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
                        <FiDownload className="w-4 h-4" />
                      </div>
                      <span className="font-medium">Download CV</span>
                    </div>
                    <FiArrowRight className="text-white/80 group-hover:text-white" />
                  </button>
                </motion.div>
              </nav>

              <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                  Let's create something amazing together! ✨
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}