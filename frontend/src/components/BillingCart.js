import {React, useContext, useEffect, useState} from 'react'
import { CartContext } from '../CartContext.js';
import { getDonationstData } from "../donateapi.js";

const BillingCart = (props) => {
    const cart = useContext(CartContext)
    const cartItems = cart.items
    const id = props.id;
    const quantity = props.quantity;
    const item = getDonationstData(id)
    

  return (
    <div>
        
        <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                               
                <li class="pb-3 sm:pb-4" >
                    <div class="flex items-center space-x-4 rtl:space-x-reverse">
                        <div class="flex-shrink-0">
                            <img class="w-8 h-8 rounded-full" src={item.img} alt="product image"/>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {item.name}
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Quantity: {quantity}
                            </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $ { (quantity * item.price).toFixed(2)}
                        </div>
                    </div>
                </li>     
             
        </ul>

    </div>
  )
}

export default BillingCart