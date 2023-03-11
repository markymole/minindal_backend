import React, {useEffect, useState, useContext, use} from 'react'
import { Link } from 'react-router-dom'
import RecordsContext from '../context/RecordsContext'
import FadeInOut from '../animation/fade'

const Sucess = () => {

    const { 
        closeResultFast,
        result
    } = useContext(RecordsContext);

  return (
    <div>
        <div className='p-4 mt-10'>
                <div className='p-2 space-y-3'>
                    <div className='px-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-green-500 -rotate-45">
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>

                    </div>
            
                    <h5 className='text-xl md:text-xl lg:text-2xl font-semibold pt-3 w-3/5'>Application Received Successfully!</h5>
                    <p>We have received your application and we would like to thank you for taking the time to submit it. 
                        Your application is now being assessed by our administrators to ensure the given informations are true. 
                    </p>
                    <div className='pt-4' id='action'>
                            <Link to='/application-request'  className='h-fit text-white bg-green-500 hover:bg-green-400 font-medium rounded-md text-sm lg:text-sm px-5 py-2 lg:py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-500'>
                                Ok
                            </Link>
                    </div>
                </div>
            

            </div>
        </div>
  )
}

export default Sucess