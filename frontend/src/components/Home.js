import React from 'react'
import banner from '../media/banner.jpg'
import AboutUs from './AboutUs'

const Home = () => {
  return (
    <>
      <div class="flex items-center justify-center">
        <div class="w-full">
          <img src={banner} alt="banner-img" class="h-30 w-full object-cover"/>
        </div>
      </div>
      <AboutUs/>
    </>
  )
}

export default Home