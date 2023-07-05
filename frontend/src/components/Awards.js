import React from 'react'
import header from '../media/awards/awards.jpg'
import {getAwards} from '../awardsapi'
import {Outlet, Link} from "react-router-dom"


const Awards = () => {
    const awards = getAwards();
    return (
        <div>
            <img src={header} alt="image-header" class="h-auto lg:h-[95vh] lg:w-[100vw]" />
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-4 lg:mt-10">
                <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">KAYANA FEMALE MSME AWARDS</h2>
                <p class="font-light text-gray-500 lg:mb-8 sm:text-xl dark:text-gray-400">AWARDS CATEGORIES</p>
            </div> 
            <div class="container flex items-center mx-auto justify-center py-4 md:py-2 flex-wrap">
                {awards.map(award => (
                    <Link to={award.id}>
                        <button type="button" class="hover:text-white border border-yellow bg-yellow hover:border-green hover:bg-green rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 " key={award.id}>
                            {award.name}
                        </button>
                    </Link>
                ))}
               
            </div>
            <Outlet/>

           

        </div>
    )
}

export default Awards

