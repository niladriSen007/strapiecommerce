import React from 'react'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
        <Slider />
        <FeaturedProducts type="Featured"/>
        <Categories />
    </>
  )
}

export default Home