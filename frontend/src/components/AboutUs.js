import React from 'react'
import img1 from '../media/candid1.jpg'
import img2 from '../media/candid2.jpg'
import space1 from '../media/space1.jpg'
import space2 from '../media/space2.jpg'
import space3 from '../media/space3.jpg'
import space4 from '../media/space4.jpg'
import space5 from '../media/space5.jpg'
import space6 from '../media/space6.jpg'
import space7 from '../media/space7.jpg'
import space8 from '../media/space8.jpg'
import Numbers from './Numbers.js'


const AboutUs = () => {
  return (
    <section>
        <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            <div class="flex flex-col space-y-10 md:space-y-5 md:mt-10 md:w-1/2">
                <h5 class="max-w-md text-base md:text-lg font-bold text-yellow text-center md:text-left">
                    WHY SHOULD YOU JOIN AS A MEMBER ?
                </h5> 
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
            </div>
        </div>
        <div class="flex flex-col space-y-3 justify-center mt-3 md:space-y-2 md:space-x-6 md:flex-row">
            <a href='#' class="md:block p-3 text-white mx-4 bg-yellow rounded-full align-middle hover:bg-gray">
                More benefits of being a member
            </a>
        </div>
        {/* kayana members images */}
        <div class="container flex flex-col px-4 mx-auto mt-10 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
            <div class="flex flex-col space-y-2 md:w-1/3">
                <img src={img2} alt="" />
            </div>
            <div class="flex flex-col space-y-2 md:w-1/3">
                <img src={img2} alt="" />
            </div>
            <div class="flex flex-col space-y-2 md:w-1/3">
                <img src={img1} alt="" />
            </div>
        </div>
        <Numbers/>
        {/* The space */}
        <div class="relative container mx-auto mt-4">
            <h3 class="text-gray text-2xl font-bold align-middle mb-4 lg:mt-6">KAYANA SPACE</h3>
            <div id="default-carousel" class="md:relative container px-4 my-0 mx-auto absolute" data-carousel="slide">
                <div class="relative h-[60vh]  overflow-hidden">
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={space1} class="absolute block w-full md:w-3/4 -translate-x-1/2 -translate-y-1/2 md:top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={space2} class="absolute block w-full md:w-3/4 -translate-x-1/2 -translate-y-1/2 md:top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={space3} class="absolute block w-full md:w-3/4 -translate-x-1/2 -translate-y-1/2 md:top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={space4} class="absolute block w-full md:w-3/4 -translate-x-1/2 -translate-y-1/2 md:top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={space5} class="absolute block w-full md:w-3/4 -translate-x-1/2 -translate-y-1/2 md:top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={space6} class="absolute block w-full md:w-3/4 -translate-x-1/2 -translate-y-1/2 md:top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={space7} class="absolute block w-full md:w-3/4 -translate-x-1/2 -translate-y-1/2 md:top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={space8} class="absolute block w-full md:w-3/4 -translate-x-1/2 -translate-y-1/2 md:top-1/2 left-1/2" alt="..."/>
                    </div>
                </div>
            </div>

        </div>
        <br class="md:hidden"></br><br class="md:hidden"></br><br class="md:hidden"></br><br class="md:hidden"></br>
        <br class="md:hidden"></br>
        <br class="md:hidden"></br>
        {/* non members rates */}
        <h5 class=" text-gray text-2xl font-bold align-middle lg:pt-10">KAYANA SPACE RATES (NON-MEMBERS)</h5>
        <div class="container flex flex-col px-4 mx-auto mt-10 md:space-y-0 md:flex-row">
            <div class="flex flex-col justify-center items-center space-x-3 space-y-5 hover:scale-95 hover:border-1 hover:border-yellow hover:solid hover:shadow-lg hover:shadow-yellow md:w-1/3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 fill-yellow ">
                    <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                    <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                </svg>
                <h6 class="text-center text-yellow text-lg font-body">PODCAST RECORDING</h6>
                <p class="text-md text-gray text-sm font-primary">KES 2,500 PER HOUR (USING OUR EQUIPMENT)</p>
                <p class="text-md text-gray text-sm font-primary">KES 2,000 PER HOUR (USING YOUR EQUIPMENT)</p>
            </div>
            <div class="flex flex-col justify-center items-center space-x-3 space-y-5 hover:scale-95 hover:border-1 hover:border-yellow hover:solid hover:shadow-lg hover:p-3 hover:shadow-yellow md:w-1/3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 fill-yellow mt-4">
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
                <h6 class="text-center text-yellow text-lg font-body">CO-WORKING SPACE</h6>
                <p class="text-md text-gray text-sm font-primary">KES 3,000 HALF DAY (PER PERSON)</p>
                <p class="text-md text-gray text-sm font-primary">KES 6,000 FULL DAY (PER PERSON)</p>
            </div>
            <div class="flex flex-col justify-center items-center space-x-3 space-y-5 hover:scale-95 hover:border-1 hover:border-yellow hover:solid hover:shadow-lg hover:p-3 hover:shadow-yellow md:w-1/3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 fill-yellow mt-4">
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
                <h6 class="text-center text-yellow text-lg font-body">SEATING FOR 4 – 6 PEOPLE</h6>
                <p class="text-md text-gray text-sm font-primary">KES 3,000 PER HOUR (EXCLUSIVE VAT)</p>
                <p class="text-md text-gray text-sm font-primary">KES 18,000 PER DAY (EXCLUSIVE VAT)</p>
                <p class="text-md text-gray text-[10px] font-primary">(ANY EXTRA HOUR WILL ATTRACT A COST OF KES 2000 PER HOUR)</p>
            </div>
        </div>
        <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            <div class="flex flex-col justify-center items-center space-x-3 space-y-5 hover:scale-95 hover:border-1 hover:border-yellow hover:solid hover:shadow-lg hover:p-3 hover:shadow-yellow md:w-1/3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 fill-yellow mt-4">
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
                <h6 class="text-center text-yellow text-lg font-body">SEATING FOR 6 – 8 PEOPLE</h6>
                <p class="text-md text-gray text-sm font-primary">KES 4,000 PER HOUR (EXCLUSIVE VAT)</p>
                <p class="text-md text-gray text-sm font-primary">KES 24,000 PER DAY (EXCLUSIVE VAT)</p>
                <p class="text-md text-gray text-[10px] font-primary">(ANY EXTRA HOUR WILL ATTRACT A COST OF KES 2000 PER HOUR)</p>
            </div>
            <div class="flex flex-col justify-center items-center space-x-3 space-y-5 hover:scale-95 hover:border-1 hover:border-yellow hover:solid hover:shadow-lg hover:p-3 hover:shadow-yellow md:w-1/3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 fill-yellow mt-4">
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
                <h6 class="text-center text-yellow text-lg font-body">SEATING FOR 10 – 12 PEOPLE</h6>
                <p class="text-md text-gray text-sm font-primary">KES 5,000 PER HOUR (EXCLUSIVE VAT)</p>
                <p class="text-md text-gray text-sm font-primary">KES 30,000 PER DAY (EXCLUSIVE VAT)</p>
                <p class="text-md text-gray text-[10px] font-primary">(ANY EXTRA HOUR WILL ATTRACT A COST OF KES 2000 PER HOUR)</p>
            </div>
            <div class="flex flex-col justify-center items-center space-x-3 space-y-5 hover:scale-95 hover:border-1 hover:border-yellow hover:solid hover:shadow-lg hover:p-3 hover:shadow-yellow md:w-1/3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 fill-yellow mt-4">
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
                <h6 class="text-center text-yellow text-lg font-body">SEATING FOR 15 – 25 PEOPLE</h6>
                <p class="text-md text-gray text-sm font-primary">KES 10,000 PER HOUR (EXCLUSIVE VAT)</p>
                <p class="text-md text-gray text-sm font-primary">KES 60,000 PER DAY (EXCLUSIVE VAT)</p>
                <p class="text-md text-gray text-[10px] font-primary">(ANY EXTRA HOUR WILL ATTRACT A COST OF KES 2000 PER HOUR)</p>
            </div>
        </div>
        <div class="flex justify-center my-5 md:justify-center">
            <a href='#' class="p-3 px-4 pt-2 sm:mr-[8%] md:mr-6 text-white bg-yellow rounded-full baseline hover:bg-gray md:ml-[10%] lg:mx-[9%]">
                Book a spot
            </a>
        </div>
         {/* members rates */}
         <h5 class="text-gray mx-auto text-2xl font-bold align-middle lg:pt-10">KAYANA SPACE RATES (MEMBERS)</h5>
        <div class="container flex flex-col px-4 mx-auto mt-10 md:space-y-0 md:flex-row">
            <div class="flex flex-col justify-center items-center space-x-3 space-y-5 hover:scale-95 hover:border-1 hover:border-gray hover:solid hover:shadow-2xl hover:p-3 hover:shadow-lightGreen md:w-1/3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 fill-green">
                    <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                    <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                </svg>
                <h6 class="text-center text-green text-lg font-body">PODCAST RECORDING</h6>
                <p class="text-md text-gray text-sm font-primary">KES 2,500 PER HOUR (USING OUR EQUIPMENT)</p>
                <p class="text-md text-gray text-sm font-primary">KES 2,000 PER HOUR (USING YOUR EQUIPMENT)</p>
            </div>
            <div class="flex flex-col justify-center items-center space-x-3 space-y-5 hover:scale-95 hover:border-1 hover:border-gray hover:solid hover:shadow-2xl hover:p-3 hover:shadow-lightGreen md:w-1/3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 fill-green mt-4">
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
                <h6 class="text-center text-green text-lg font-body">CO-WORKING SPACE</h6>
                <p class="text-md text-gray text-sm font-primary">KES 1,500 HALF DAY (PER PERSON)</p>
                <p class="text-md text-gray text-sm font-primary">KES 3,000 FULL DAY (PER PERSON)</p>
            </div>
            <div class="flex flex-col justify-center items-center space-x-3 space-y-5 hover:scale-95 hover:border-1 hover:border-gray hover:solid hover:shadow-2xl hover:p-3 hover:shadow-lightGreen md:w-1/3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 fill-green mt-4">
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
                <h6 class="text-center text-green text-lg font-body">SEATING FOR 4 – 6 PEOPLE</h6>
                <p class="text-md text-gray text-sm font-primary">KES 3,000 PER HOUR (EXCLUSIVE VAT)</p>
                <p class="text-md text-gray text-sm font-primary">KES 15,000 PER DAY (EXCLUSIVE VAT)</p>
                <p class="text-md text-gray text-[10px] font-primary">(ANY EXTRA HOUR WILL ATTRACT A COST OF KES 2000 PER HOUR)</p>
            </div>
        </div>
        <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            <div class="flex flex-col justify-center items-center space-x-3 space-y-5 hover:scale-95 hover:border-1 hover:border-gray hover:solid hover:shadow-2xl hover:p-3 hover:shadow-lightGreen md:w-1/3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 fill-green mt-4">
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
                <h6 class="text-center text-green text-lg font-body">SEATING FOR 6 – 8 PEOPLE</h6>
                <p class="text-md text-gray text-sm font-primary">KES 4,000 PER HOUR (EXCLUSIVE VAT)</p>
                <p class="text-md text-gray text-sm font-primary">KES 20,000 PER DAY (EXCLUSIVE VAT)</p>
                <p class="text-md text-gray text-[10px] font-primary">(ANY EXTRA HOUR WILL ATTRACT A COST OF KES 2000 PER HOUR)</p>
            </div>
            <div class="flex flex-col justify-center items-center space-x-3 space-y-5 hover:scale-95 hover:border-1 hover:border-gray hover:solid hover:shadow-2xl hover:p-3 hover:shadow-lightGreen md:w-1/3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 fill-green mt-4">
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
                <h6 class="text-center text-green text-lg font-body">SEATING FOR 10 – 12 PEOPLE</h6>
                <p class="text-md text-gray text-sm font-primary">KES 5,000 PER HOUR (EXCLUSIVE VAT)</p>
                <p class="text-md text-gray text-sm font-primary">KES 25,000 PER DAY (EXCLUSIVE VAT)</p>
                <p class="text-md text-gray text-[10px] font-primary">(ANY EXTRA HOUR WILL ATTRACT A COST OF KES 2000 PER HOUR)</p>
            </div>
            <div class="flex flex-col justify-center items-center space-x-3 space-y-5 hover:scale-95 hover:border-1 hover:border-gray hover:solid hover:shadow-2xl hover:p-3 hover:shadow-lightGreen md:w-1/3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 fill-green mt-4">
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
                <h6 class="text-center text-green text-lg font-body">SEATING FOR 15 – 25 PEOPLE</h6>
                <p class="text-md text-gray text-sm font-primary">KES 10,000 PER HOUR (EXCLUSIVE VAT)</p>
                <p class="text-md text-gray text-sm font-primary">KES 50,000 PER DAY (EXCLUSIVE VAT)</p>
                <p class="text-md text-gray text-[10px] font-primary">(ANY EXTRA HOUR WILL ATTRACT A COST OF KES 2000 PER HOUR)</p>
            </div>
        </div>
        <div class="flex justify-center my-5 md:justify-center">
            <a href='#' class="p-3 px-4 pt-2 sm:mr-[8%] md:mr-6 text-white bg-green rounded-full baseline hover:bg-gray md:ml-[10%] lg:mx-[9%]">
                Book a spot
            </a>
        </div>       
    </section>
  )
}

export default AboutUs

