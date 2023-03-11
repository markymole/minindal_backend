import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Notice = () => {
  return (
    <div>
      <div className="min-h-screen fixed z-40 w-full flex flex-col justify-center sm:py-12 bg-zinc-900 bg-opacity-50 inset-0">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-lg">
            <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <form>
            <div className="px-5 py-7">
                <div className='flex items-center justify-between mb-5'>
                    <h2 className='font-bold text-start text-lg'>User Login</h2>
                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-5 h-5'>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
               
                <button type="submit" className="transition-all ease-out duration-300 bg-gradient-to-r from-green-700 to-green-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block active:scale-95">
                    <span className="inline-block mr-2" id='login'>Ok</span>       
                </button>
            </div>
            </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Notice
