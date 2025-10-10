import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portofolio - ARDHIKA',
  description: 'Selamat datang di portofolio ARDHIKA. Jelajahi karya, pengalaman, dan proyek inovatif dalam pengembangan web, mobile, serta desain grafis yang kreatif dan solutif.',
}

import Hero from '@/components/hero'
import Skill from '@/components/skill'
import Project from '@/components/project'
import Profile from '@/components/profile'
import Penghargaan from '@/components/penghargaan'

export default function Home() {
  return (
    <>
      <Hero/>
      <Profile/>
      {/* <Project/> */}
      <Penghargaan/>
      {/* <Skill/> */}
    </>
  )
}