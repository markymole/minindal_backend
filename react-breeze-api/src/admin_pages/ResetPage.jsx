import React from 'react'
import axios from '../api/axios';
import useAuthContext from '../context/Authentication';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from '../assets/cks-logo.png';


const ResetPage = () => {
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);
    const [status, setStatus] = useState(null);
    const [spinner, setSpinner] = useState(false);
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [searchParams] = useSearchParams()
    const { token } = useParams();
    const { csrf } = useAuthContext(); 

    useEffect(() => {
        setEmail(searchParams.get("email"));
    }, [])
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await csrf();
      setErrors([]);
      setStatus(null);
      setSpinner(true);
      try {
        const response = await axios.post("/reset-password", { 
            email, 
            token, 
            password,
            password_confirmation,
        });
        setStatus(response.data.status);
      } catch (e) {
        if (e.response.status === 422) {
          setErrors(e.response.data.errors);
        }
      }
      setSpinner(false);
    };
  return (
    <div>        
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-lg">
                <img src={Logo} alt="Center for Kapampangan Studies" className='mx-auto w-28 mb-3' />
                <h1 className="font-bold text-center text-2xl mb-5">Center for Kapampangan Studies</h1>   
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">

                    <form onSubmit={handleSubmit}>
                    <div className="px-5 py-7">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 mb-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg> */}


                        <h2 className='font-bold text-start text-lg'>Create New Password</h2>
                        {status && (
                        <div className="flex gap-2 mt-3 items-center bg-blue-100 py-2 px-3 mb-3 text-blue-500 text-sm rounded-md border border-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                            
                        {status}
                        {/* <div><Link to="/login">Go to Login</Link></div> */}
                        </div>
                        )}
                        <div className="text-sm text-start mb-8 mt-2">
                            Enter your new password
                        </div>
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"  />
                        {errors.password_confirmation && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 -mt-3">{errors.password_confirmation[0]}</span></div>)}

                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Confirm Password</label>
                        <input type="password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"  />
                        {errors.password && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 -mt-3">{errors.password[0]}</span></div>)}

                        
                        {
                            !status ? 
                            <button type="submit" className="transition duration-300 flex items-center justify-center bg-gradient-to-r from-green-700 to-green-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center active:scale-95">
                                {
                                    spinner && <div role="status">
                                    <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-300 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div>
                                }
                                <span className="inline-block mr-2">Save</span>
                            </button>
                            :
                            <Link to='/admin' className="transition duration-300 flex items-center justify-center bg-gradient-to-r from-green-700 to-green-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center active:scale-95">
                                <span className="inline-block mr-2">Go to Login</span>
                            </Link>
                        }
                    </div>
                    </form>
                </div>
                {/* <div className="py-5">
                <div className="grid grid-cols-2 gap-1">
                <div className="text-center sm:text-left whitespace-nowrap">
                    <Link to="/login">
                        <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span className="inline-block ml-1">Back to Login</span>
                        </button>
                    </Link>
                   
                </div>
                </div>
            </div> */}
            </div>
        </div>
    </div>
  )
}

export default ResetPage
