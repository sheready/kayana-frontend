import React from 'react'
import img1 from '../media/candid1.jpg'
import img2 from '../media/candid2.jpg'

const AboutUs = () => {
  return (
    <section>
        <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            <div class="flex flex-col space-y-10 md:w-1/2">
                <h2 class="max-w-md text-3xl font-bold text-yellow text-center md:text-left">
                    Benefits of being a Kayana member
                </h2> 
                <p class="max-w-sm text-center md:text-left">
                Kayana is a community of female entrepreneurs of abundance that come together to move their businesses from ideation to start up. 
                Typically the businesses will be run from their homes or online, and the founders are looking at the next step of growth, but may not have the know-how or courage to do so.
                </p>
            </div>
            <div class="flex flex-col space-y-8 md:w-1/2">
                <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    
                </div>

            </div>
        </div>
        
    </section>
  )
}

export default AboutUs

