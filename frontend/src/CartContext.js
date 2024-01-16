import { createContext, useState, useEffect } from "react";
import {donate, getDonations} from './donateapi.js';


export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
    
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);

     // Load cart data from localStorage on component mount
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCartProducts(JSON.parse(storedCart));
        }
    }, []);

    // Save cart data to localStorage whenever cartProducts changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartProducts));
    }, [cartProducts]);

    // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        
        if (quantity === undefined) {
            return 0;
        }
        
        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { // product is in cart
            // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity + 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity == 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }

    function deleteFromCart(id) {
        // [] if an object meets a condition, add the object to array
        // [product1, product2, product3]
        // [product1, product3]
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })  
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((product) => {
            const productData = getDonations();
            for(let item in productData){   
                if(productData[item].id === product.id )  {
                    totalCost += productData[item].price * product.quantity
                }                  
            }
      
        });
        return totalCost;
    }

     // Function to clear cart after a certain duration
    const clearCartAfterDuration = () => {
      
        const durationMilliseconds = 600000; 

        setTimeout(() => {
        setCartProducts([]);
        }, durationMilliseconds);
    };

  
    useEffect(() => {
        clearCartAfterDuration();
    }, []);

    // function getProductDetails(){
    //     let details
    //     cartProducts.map((product) => {
    //         const productData = getDonations();
    //         for(let item in productData){
    //             if(productData[item].id === product.id){
    //                 details = productData[item]
    //             }
    //         }
            
    //     });
    //     return details
    // }

    // function getAllProductsCart() {
    //     let items = [];
    //     let addedItemIds = new Set();
    
    //     cartProducts.forEach((product) => {
    //         const productData = getDonations();
    //         for (let itemId in productData) {
    //             const item = productData[itemId];
    //             if (item.id === product.id && !addedItemIds.has(item.id)) {
    //                 items.push(item);
    //                 addedItemIds.add(item.id);
    //             }
    //         }
    //     });
    //     return items;
    // }
    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context