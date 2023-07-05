import {useState} from 'react'
import { useParams } from 'react-router-dom'
import {getAward} from '../awardsapi'



const Award = () => {
    const {awardId} = useParams();
    const award = getAward(awardId);
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    }
    
  return (
    <div>
         <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div class="mx-auto max-w-screen-sm text-center mb-3 lg:mb-2">
                        <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">MEET OUR PARTICIPANTS</h2>
                        <p class="font-light text-gray-500 uppercase lg:mb-8 sm:text-xl dark:text-gray-400">{award.name}</p>
                        <p class="font-light lg:mb-8 sm:text-xl dark:text-gray-400">{award.description}</p>
                    </div> 
                    <div class="grid gap-8 mb-6 lg:mb-16 lg:grid-cols-3">
                        {award?.nominees.map(nominee => (
                            <div key={nominee.id} class="flex flex-col items-center md:justify-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                <div class="flex object-contain">
                                    <img class="rounded-lg sm:rounded sm:rounded-l-lg lg:h-[70vh] lg:w-[100vw]" src={nominee.img} alt={nominee.name}/>
                                </div>
                                <div class="pt-5 flex-col h-full lg:w-fit ">
                                    <h3 class="text-xl font-bold tracking-tight dark:text-white">
                                        <a href="#">{nominee.name}</a>
                                    </h3>
                                    
                                    <p class="mt-3 mb-4 font-light text-gray lg:w-fit dark:text-gray">
                                        {isReadMore ? `${nominee.description.slice(0,130)}` : `${nominee.description}`}
                                        <br></br>
                                        <span onClick={toggleReadMore} key={nominee.id} class="text-yellow font-bold">
                                            {isReadMore ? " ...read more" : " show less"}
                                        </span>
                                    </p>            
                                </div>
                            </div>  

                        ))}
                    </div>  
                </div>
                
            </section>
            

    </div>
  )
}

export default Award