import React from 'react'
import Hero from '../components/Home/Hero.jsx'
import Awards from './../components/Home/Awards';
import Stats from './../components/Home/Stats';
import Pricing from './../components/Home/Pricing';
import Education from './../components/Home/Education';
import OpenAccount from './../components/OpenAccount';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';


const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Awards/>
    <Stats/>
    <Pricing/>
    <Education/>
    <OpenAccount/>
    <Footer/>
    </>
  )
}

export default HomePage