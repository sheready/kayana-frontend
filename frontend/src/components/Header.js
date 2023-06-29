import React from 'react'
import logo from '../media/logo.png'

const Header = () => {
  return (
    <>
      <nav class="relative container mx-auto px-6">
        <div class="flex items-center justify-between">
          {/* logo */}
          <div class="pt-9 h-[100px] w-[100px]">
            <img src={logo} alt="kayana-logo"></img>
          </div>
          {/* menu items display after medium screen else hide the items */}
          <div class="hidden md:flex space-x-7">
            <a href="/" class="hover:text-green">Home</a>
            <a href="#" class="hover:text-green">Kayana Awards</a>
            <a href="/publications" class="hover:text-green">Kayana News</a>
            <a href="#" class="hover:text-green">Kayana Pro</a>
            <a href="/board" class="hover:text-green">Board of Directors</a>
            <a href="#" class="hover:text-green">Contact us</a>
            
          </div>
          {/* donate button hidden in smaller screen and shown in large screens as block */}
          <a href='#' class="hidden md:block p-3 px-6 pt-2 mr-10 text-white bg-green rounded-full baseline hover:bg-gray">
            Donate
          </a>
        </div>

      </nav>
      



    </>
    

 
  )
}

export default Header