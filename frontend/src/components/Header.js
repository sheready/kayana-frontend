import {React, useContext, useState, useEffect} from 'react'
import logo from '../media/logo.png'
import { CartContext } from '../CartContext'
import Cart from './Cart'
import { useNavigate } from 'react-router-dom'



const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cart = useContext(CartContext)
  const donateItemscount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  const pesapal_auth = 'http://127.0.0.1:8000/pesapal_auth/'
  const register_pesapal_ipn = 'http://127.0.0.1:8000/register-pesapal-ipn/'
  const navigate = useNavigate();


  const auth = async () => {
      const settings = {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          }
      };

      try {
          const fetchResponse = await fetch(pesapal_auth, settings);
          const data = await fetchResponse.json();
          if(data){
              const token = data['token']
              const ipnSettings = {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                  },
                  body: JSON.stringify(token)
              };

              try{
                const ipnResponse = await fetch(register_pesapal_ipn, ipnSettings);
                const ipnData = await ipnResponse.json();
                console.log(ipnData)
                console.log(token)
                if (ipnData.status === "200") {
                  localStorage.setItem('ipnData', JSON.stringify(ipnData))
                  localStorage.setItem('token',JSON.stringify(token))
                  navigate('/billing');
                } else{
                  console.error('Non-200 status code:', ipnData.status);
                }

              } catch (e) {
                console.log(e)
                return e;
            } 
          }
            
      } catch (e) {
          console.log(e)
          return e;
      } 
                    
  }

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const setClearTimeout = () => {
    const timeoutMilliseconds = 300000; 
  
    setTimeout(() => {
      clearLocalStorage();
    }, timeoutMilliseconds);
  };

  window.addEventListener('beforeunload', clearLocalStorage);

  setClearTimeout();
  
  return (
    <>
      <nav class="relative container mx-auto px-6">
        <div class="flex items-center justify-between">
          {/* logo */}
          <div class="pt-9 h-[100px] w-[100px]">
            <a href="/">
              <img src={logo} alt="kayana-logo"></img>
            </a>          
          </div>
          {/* menu items display after medium screen else hide the items */}
          <div class="hidden lg:flex space-x-7">
            <a href="/" class="hover:text-green">Home</a>
            <a href="/awards" class="hover:text-green">Kayana Awards</a>
            <a href="/donate" class="hover:text-green">Donate</a>
            <a href="/board" class="hover:text-green">Board of Directors</a>
            <a href="#" class="hover:text-green">Contact us</a>
            
          </div>
          {/* donate button hidden in smaller screen and shown in large screens as block */}
          <a href='/donate-items' class="hidden md:block p-3 px-6 pt-2  text-white bg-green rounded-full baseline hover:bg-gray">
            Donate
          </a>
          <li onClick={handleShow} data-modal-target="default-modal" data-modal-toggle="default-modal" class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
            <a href="#" role="button" class="relative flex">
              <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24" >
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
                </svg>
                <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{donateItemscount}
              </span>
            </a>
          </li>
          {/* <button  class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Toggle modal
          </button> */}
          <div id="default-modal" show={show} onHide={handleClose} tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div class="relative p-4 w-full max-w-2xl max-h-full">
                  
                  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                     
                      <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                              Donation Cart
                          </h3>
                          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                              </svg>
                              <span class="sr-only">Close modal</span>
                          </button>
                      </div>
                      {donateItemscount > 0 ? 
                        <div class="p-4 md:p-5 space-y-4">
                            
                            {cart.items.map((currentProduct, idx) => (
                              <Cart key={idx} id={currentProduct.id} quantity={currentProduct.quantity} ></Cart>
                              
                              
                            ))}
                          
                          
                            <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>

                            <div class="flex items-center justify-center p-4 md:p-5  rounded-b dark:border-gray-600">
                              <button data-modal-hide="default-modal" type="button" class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={auth}>Checkout</button>
                            </div>
                        </div>
                        :
                        <div class="p-4 md:p-5 space-y-4">
                          
                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                There are no items in your cart!
                            </p>
                        </div>
                      }

                  </div>
              </div>
          </div>

        </div>

      </nav>


    </>
    

 
  )
}

export default Header