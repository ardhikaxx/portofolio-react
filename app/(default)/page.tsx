export const metadata = {
  title: 'Portofolio - ARDHIKA',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Skill from '@/components/skill'
import Project from '@/components/project'
import Profile from '@/components/profile'
import Certificate from '@/components/certificate'
import Education from '@/components/education'

export default function Home() {
  return (
    <>
      <Hero/>
      <Profile/>
      <Education/>
      <Project/>
      <Certificate/>
      <Skill/>
    </>
  )
}