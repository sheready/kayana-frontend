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
            <div class="flex flex-col space-y-6 md:w-3/4">
                {/* list Item 1 */}
                <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                    <div class="rounded-l-full bg-yellow md:bg-transparent">
                        <div class="flex items-center space-x-2">
                            <div class="px-4 py-2 text-white rounded-full md:py-1 bg-yellow">
                                01
                            </div>
                            <h3 class="text-base font-bold md:mb-4 md:hidden">
                                Kayana Masterclasses
                            </h3>
                        </div>
                    </div>
                    <div class="text-left">
                        <h3 class='hidden mb-4 text-lg font-bold md:block'>
                            Kayana Masterclasses
                        </h3>
                        <p class="text-gray">
                            Kayana members have access to our 2023 Calendar of Member Activities and Masterclasses.
                        </p>
                    </div>                   
                </div>
                {/* list Item 2 */}
                <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                    <div class="rounded-l-full bg-yellow md:bg-transparent">
                        <div class="flex items-center space-x-2">
                            <div class="px-4 py-2 text-white rounded-full md:py-1 bg-yellow">
                                02
                            </div>
                            <h3 class="text-base font-bold md:mb-4 md:hidden">
                                Collaborations
                            </h3>
                        </div>
                    </div>
                    <div class="text-left">
                        <h3 class='hidden mb-4 text-lg font-bold md:block'>
                            Collaborations
                        </h3>
                        <p class="text-gray">
                            Kayana offers its members an opportunity to collaborate with us within and outside of the community utilizing their various skill sets.
                            Reach out to us and share with us the different ways we can partner to grow your business
                        </p>
                    </div>                   
                </div>
                {/* list Item 3 */}
                <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                    <div class="rounded-l-full bg-yellow md:bg-transparent">
                        <div class="flex items-center space-x-2">
                            <div class="px-4 py-2 text-white rounded-full md:py-1 bg-yellow">
                                03
                            </div>
                            <h3 class="text-base font-bold md:mb-4 md:hidden">
                                Passport to Business
                            </h3>
                        </div>
                    </div>
                    <div class="text-left">
                        <h3 class='hidden mb-4 text-lg font-bold md:block'>
                            Passport to Business
                        </h3>
                        <p class="text-gray">
                            Kayana members have access to our accelerator program available for all members who would like to work at launching their businesses. 
                        </p>
                    </div>                   
                </div>
                <div class="flex flex-col space-y-3 justify-center md:space-y-0 md:space-x-6 md:flex-row">
                    <a href='#' class="md:block p-3 text-white bg-yellow rounded-full align-middle hover:bg-green">
                        More benefits of being a member
                    </a>
                </div>
            </div>
        </div>
        {/* kayana members images */}
        <div class="container flex flex-col px-4 mx-auto mt-10 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
            <div class="flex flex-col space-y-2 md:w-1/3">
                <img src={img2} />
            </div>
            <div class="flex flex-col space-y-2 md:w-1/3">
                <img src={img2} />
            </div>
            <div class="flex flex-col space-y-2 md:w-1/3">
                <img src={img2} />
            </div>
        </div>

        {/* The space */}
        


        
    </section>
  )
}

export default AboutUs

