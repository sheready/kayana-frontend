import {React, useContext, useState, useEffect} from 'react'
import { CartContext } from '../CartContext.js';
import BillingCart from './BillingCart.js';
import { useNavigate, redirect } from 'react-router-dom'
import PaymentIframe from './PaymentIframe.js';


const Billing = () => {
    const cart = useContext(CartContext)
    const navigate = useNavigate();
    const [paymentUrl, setPaymentUrl] = useState('');
    const [formData, setFormData] = useState({
      phone_number:"",
      email_address:"",
      first_name:"",
      last_name:""     
    });

    const handleFormChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

    const handleFormSubmit = (e) => {
      e.preventDefault();   
      submitOrder()
    }

    useEffect(() => {
      setSubmitData((prevSubmitData) => ({
        ...prevSubmitData,
        amount: cart.getTotalCost().toFixed(2),
      }));
    }, [cart]);
    
    const billing_url = 'http://127.0.0.1:8000/billing/'
    const submit_order_url = 'http://127.0.0.1:8000/submit-order/'
    const callback_url = 'http://127.0.0.1:8000/response/'
    const transaction_status_url = 'http://127.0.0.1:8000/transaction-status/'

    const ipnData = JSON.parse(localStorage.getItem("ipnData"));
    const token = JSON.parse(localStorage.getItem("token"))
    console.log(token)
    const notifications_id = ipnData['ipn_id']
    const merchant_reference = ipnData['id']

    const [submitData, setSubmitData] = useState(() => {
      return {
        id:merchant_reference,
        currency: "USD",
        amount: cart.getTotalCost().toFixed(2),
        description: "order items",
        callback_url:callback_url,
        notification_id: notifications_id,
        billing_address: {}
      };
    });
    
    localStorage.setItem('submitData', JSON.stringify(submitData))

    const submitOrder = async() => {

      const billingsettings = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData)
      };
      console.log('Request Data:', JSON.stringify(formData));

      try{
        const billingResponse = await fetch(billing_url, billingsettings);           
        if(ipnData.ipn_status_decription === "Active"){
          const data = await billingResponse.json();

          setSubmitData((prevSubmitData) => ({
            ...prevSubmitData,
            billing_address: data,
          }));

          const submitSettings = {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(submitData)
          };
          try{
            const submitResponse = await fetch(submit_order_url, submitSettings);
            const data = await submitResponse.json();
            localStorage.setItem('submitResponse', JSON.stringify(data))
            console.log(data)
            if(data.status === "200"){
              const payment_url = data['redirect_url']
              console.log(payment_url)
              setPaymentUrl(payment_url)
            }else{
              console.error()
            }  
          } catch (e) {
            console.log(e)
            return e;
          
          };
          const transactionSettings = {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          }
          try{
            const transactionResponse = await fetch(transaction_status_url, transactionSettings);
            const transactionData = await transactionResponse.json();
            console.log(transactionData)
          } catch (e) {
            console.log(e)
            return e;
          
          };
        }else{
          console.log("Checkout Again")
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
    const timeoutMilliseconds = 600000; 
  
    setTimeout(() => {
      clearLocalStorage();
    }, timeoutMilliseconds);
  };

  window.addEventListener('beforeunload', clearLocalStorage);
  
  setClearTimeout();

  
  return (
  
    <>
      <div class="flex flex-col-reverse w-full mx-auto md:flex-row">
        <div class="flex flex-col mx-auto md:w-1/2">     
            <form class="md:mr-[10%]" onSubmit={handleFormSubmit}>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <label for="phone_number" class="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
                  <input class="border border-light-blue text-sm rounded-lg block w-full p-2.5 " 
                    type="tel"
                    placeholder="" 
                    name="phone_number" 
                    value={formData.phone_number}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    onChange={handleFormChange}
                    id="floating_number"   
                  />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <label for="email_address" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                  <input class="border border-light-blue text-gray-900 text-sm rounded-lg block w-full p-2.5 " 
                    type="email" 
                    name="email_address" 
                    value={formData.email_address} 
                    onChange={handleFormChange}
                    id="floating_email"                  
                    placeholder="">                       
                    </input>
                </div>            
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">First Name</label>
                  <input class="border border-light-blue text-sm rounded-lg block w-full p-2.5 " 
                    type="text"
                    placeholder="" 
                    name="first_name" 
                    value={formData.first_name}
                    onChange={handleFormChange}
                    id="floating_fname"   
                  />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
                  <input class="border border-light-blue text-sm rounded-lg block w-full p-2.5 " 
                    type="text"
                    placeholder="" 
                    name="last_name" 
                    value={formData.last_name}
                    onChange={handleFormChange}
                    id="floating_lname"   
                  />
                </div>            
              </div>
              <div class="flex items-center justify-center p-4 md:p-5  rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={handleFormSubmit}>Checkout</button>
              </div>
            </form>
        </div>        
        <div class="p-4 md:p-2 md:w-1/2 space-y-4">        
          <h3>Order Summary</h3>
          {cart.items.map((currentProduct, idx) => (
            <BillingCart key={idx} id={currentProduct.id} quantity={currentProduct.quantity} ></BillingCart>
            
          ))}        
          <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>       
        </div> 
      </div>
      <div>
        {paymentUrl && <PaymentIframe paymentUrl={paymentUrl} />}
      </div>
    </>
  )
}

export default Billing