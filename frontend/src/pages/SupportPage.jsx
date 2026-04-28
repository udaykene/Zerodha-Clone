import React from 'react'
import Hero from '../components/Support/Hero'
import TicketCreation from './../components/Support/TicketCreation';

const SupportPage = () => {
  return (
   <main className="flex flex-col  font-[Poppins]">
    <Hero/>
    <TicketCreation/>
   </main>
   
  )
}

export default SupportPage