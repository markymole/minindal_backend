import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/cks-logo.png';
import AppContext from '../context/Context';

const VerificationNotice = () => {
    const { closeLoginModal } = useContext(AppContext);
    
  return (
    <div>
       <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-1 sm:p-10 mx-auto md:w-full md:max-w-lg">
                <img src={Logo} alt="Center for Kapampangan Studies" className='mx-auto w-28 mb-3' />
                <h1 className="font-bold text-center text-2xl mb-5">Center for Kapampangan Studies</h1>   
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <form>
                    <div className="px-5 py-7">
                        <div className='flex items-center gap-2 mb-5'>
                            <h2 className='font-bold text-start text-lg'>Verification Mail Sent!</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-700">
                                <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd" />
                                <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                            </svg>
                        </div>
                        <div className="text-md text-start mb-4 mt-2">
                        Please check your email, to verify your account!
                        </div>
                        <p className='text-sm teaxt start mb-4'>Notice: Only verified users can leave reviews and rate business listed in the app.</p>
                      
                        {/* <Link to='/' className="transition duration-300 bg-gradient-to-r from-green-700 to-green-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block active:scale-95">
                            <span className="inline-block mr-2">Ok</span>
                        </Link> */}
                        
                    </div>
                    </form>
                </div>
                <div className="py-5">
                <div className="grid grid-cols-2 gap-1">
                {/* <div className="text-center sm:text-left whitespace-nowrap">
                    <Link to="/login">
                        <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span className="inline-block ml-1">Back to Login</span>
                        </button>
                    </Link>
                   
                </div> */}
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default VerificationNotice
