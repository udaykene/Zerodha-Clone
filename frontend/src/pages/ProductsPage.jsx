import React from 'react'
import Hero from './../components/Products/Hero';
import Investors from './../components/Products/Investors';
import LeftImage from './../components/Products/LeftImage';
import RightImage from './../components/Products/RightImage';

const ProductsPage = () => {
  return (
    <main>
      <Hero/>
      <Investors/>
      <LeftImage/>
      <RightImage/>
    </main>
  )
}

export default ProductsPage