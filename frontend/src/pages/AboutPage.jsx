import React from 'react'
import Hero from '../components/About/Hero.jsx'
import FounderInfo from './../components/About/FounderInfo';
const AboutPage = () => {
  return (
    <main className="flex flex-col gap-20 font-[Poppins]">
      <Hero/>
      <FounderInfo/>
    </main>
  )
}

export default AboutPage