import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


const NoRoute = () => {
  return (
    <div>
        <section className="bg-white  ">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="wf-ull lg:w-1/2">
                    <p className="text-base font-medium text-blue-500 ">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-4xl">Page not found</h1>
                    <p className="mt-4 text-gray-500">Sorry, the page you are looking for doesn't exist.</p>

                    <div className="flex items-center mt-6 gap-x-3">
                        {/* <button className="flex items-center justify-center w-1/2 px-4 py-2 lg:py-2.5 text-base text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto   hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>


                            <Link to='/'>Go back</Link>
                        </button> */}

                        <Link to='/' className="w-1/2 px-4 text-center py-2 lg:py-2.5 text-base tracking-wide text-white transition-colors duration-200 bg-green-500 rounded-md shrink-0 sm:w-auto hover:bg-green-600">
                            Take me home
                        </Link>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img className="w-full max-w-lg lg:mx-auto" src="https://merakiui.com/images/components/illustration.svg" alt=""></img>
                </div>
            </div>
        </section>
    </div>
  )
}

export default NoRoute
