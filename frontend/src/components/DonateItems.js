import {React, useContext} from 'react'
import {donate, getDonations} from '../donateapi.js';
import DonateItemCard from './DonateItemCard.js';

const DonateItems = () => {
    const donateitems = getDonations()
  return (
    <div class="flex flex-col mx-auto justify-center my-2 md:flex-row md:flex-wrap md:mx-4 ">
        {donateitems?.map(donate => (
        <div class="flex flex-col justify-center mx-auto my-2 md:flex-row md:mx-4">
            <DonateItemCard donate={donate} />
            
        </div>
        ))}
        
    </div>
  )
}

export default DonateItems