import {React, useContext} from 'react'
import { CartContext } from '../CartContext.js';


const DonateItemCard = (props) => {
    const donate = props.donate
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(donate.id)
  return (
    <div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
            <a href="#">
                <img class="p-8 rounded-t-lg" src={donate.img} alt="product image" />
            </a>
            <div class="px-5 pb-5">
                <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">{donate.name}</h5>
                </a>
                <p class="text-left my-2">{donate.desc}</p>
                <div class="flex items-center justify-between mt-2">
                    <span class="text-3xl font-bold">$ {donate.price}</span>
                    {productQuantity > 0 ? 
                    <>
                         <div class="flex items-center">
                            
                            <button class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button"  
                            onClick={() => {
                                cart.removeOneFromCart(donate.id)
                            }}
                            >
                                <span class="sr-only">Quantity button</span>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2" 
                                onClick={() => {
                                cart.removeOneFromCart(donate.id)
                                }}>
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                </svg>
                            </button>
                            <div>
                                <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={productQuantity} required/>
                            </div>
                            <button class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button"
                            onClick={() => {
                                cart.addOneToCart(donate.id)
                                }}
                          
                            >
                                <span class="sr-only">Quantity button</span>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"
                                onClick={() => {
                                    cart.addOneToCart(donate.id)
                                    }}
                                >
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                </svg>
                            </button>
                        </div>
                    </>
                    :  <a href="#" onClick={() => cart.addOneToCart(donate.id)}  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>              
                    } 
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default DonateItemCard