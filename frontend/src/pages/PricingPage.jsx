import React from 'react'
import Hero from './../components/Pricing/Hero';
import Brokerage from './../components/Pricing/Brokerage';
import Charges from '../components/Pricing/Charges';

const PricingPage = () => {
  return (
    <main className='flex flex-col gap-20 font-[Poppins]'>
      <Hero/>
      <Brokerage/>
      <Charges/>
    </main>
  )
}

export default PricingPage