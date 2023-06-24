import React from 'react'
import banner from '../media/banner.jpg'
import AboutUs from './AboutUs'

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section id='Hero'>
        {/* flex container */}
        <div class="relative">
          <img class="h-auto md:h-[82vh] md:w-[100vw]" src={banner}  alt='banner-image'></img>

          <div class="flex flex-col space-y-8 md:absolute md:mb-32 left-1/2 md:space-y-12 md:top-1/2 md:left-1/4 md:-translate-x-1/2 md:-translate-y-1/2">
            <h1 class="max-w-md px-[2%] mx-[8%] text-2xl font-bold text-center md:text-white md:text-4xl md:text-left mt-2">
            A community of women business owners with a focus on Collaboration and Capacity Building.         
            </h1>
            <h5 class="max-w-md sm:mx-[4%] text-center text-yellow md:text-left md:ml-[10%] lg:mx-[10%] text-lg">
              Dream • Work • Grow
            </h5>
            <div class="flex justify-center md:justify-start">
              <a href='#' class="p-3 px-4 pt-2 sm:mr-[8%] md:mr-6 text-white bg-green rounded-full baseline hover:bg-gray md:ml-[10%] lg:mx-[9%]">
                Become a member
              </a>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Home