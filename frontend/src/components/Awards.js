import React from 'react'
import header from '../media/awards/awards.jpg'
import {getAwards} from '../awardsapi'
import {Outlet, Link} from "react-router-dom"
import ediblefoods from '../media/awards/ediblefoods.jpg'
import ryaivas from '../media/awards/ryaivas.jpg'
import elite from '../media/awards/elite.jpeg'

const Awards = () => {
    const awards = getAwards();
    return (
        <div>
            <img src={header} alt="image-header" class="h-auto lg:h-[95vh] lg:w-[100vw]" />
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">KAYANA FEMALE MSME AWARDS</h2>
                <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">AWARDS CATEGORIES</p>
            </div> 
            <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
                {awards.map(award => (
                    <Link to={award.id}>
                        <button type="button" class="hover:text-white border border-yellow bg-yellow hover:border-gray hover:bg-gray focus:ring-4 focus:outline-none focus:ring-green rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 " key={award.id}>
                            {award.name}
                        </button>
                    </Link>
                ))}
               
            </div>
            <Outlet/>

            {/* <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meet Our Participants</h2>
                        <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                    </div> 
                    <div class="grid gap-8 mb-6 md:grid-cols-1 lg:place-items-center">
                        <div class="flex lg:flex-row flex-col items-center md:justify-center lg:w-[40vw] lg:h-[35vh] bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <div class="flex lg:w-1/2 h-full">
                                <img class="rounded-lg sm:rounded-none sm:rounded-l-lg" src={ediblefoods} alt="Bonnie Avatar"/>
                            </div>
                            <div class="p-5 flex-col h-full justify-center lg:w-1/2 ">
                                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Bonnie Green</a>
                                </h3>
                                <span class="text-gray-500 dark:text-gray-400">CEO & Web Developer</span>
                                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                                
                            </div>
                        </div> 
                    </div>
                    <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div class="flex lg:flex-row flex-col items-center md:justify-center lg:w-[40vw] lg:h-[35vh] bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <div class="flex lg:w-1/2 h-full">
                                <img class="rounded-lg sm:rounded-none sm:rounded-l-lg" src={ediblefoods} alt="Bonnie Avatar"/>
                            </div>
                            <div class="p-5 flex-col h-full justify-center lg:w-1/2 ">
                                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Bonnie Green</a>
                                </h3>
                                <span class="text-gray-500 dark:text-gray-400">CEO & Web Developer</span>
                                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                                
                            </div>
                        </div>  
                        <div class="flex lg:flex-row flex-col items-center md:justify-center lg:w-[40vw] lg:h-[35vh] bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <div class="flex lg:w-1/2 h-full">
                                <img class="rounded-lg sm:rounded-none sm:rounded-l-lg" src={ediblefoods} alt="Bonnie Avatar"/>
                            </div>
                            <div class="p-5 flex-col h-full justify-center lg:w-1/2 ">
                                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Bonnie Green</a>
                                </h3>
                                <span class="text-gray-500 dark:text-gray-400">CEO & Web Developer</span>
                                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                                
                            </div>
                        </div> 


                    </div>  
                </div>
                
            </section> */}


        </div>
    )
}

export default Awards

