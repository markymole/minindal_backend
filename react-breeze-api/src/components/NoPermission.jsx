import React, {useEffect, useState} from 'react'
import axios from '../api/axios';
import { Link } from 'react-router-dom'
import useAuthContext from '../context/Authentication';


export function NoPermission () {
    const { user, logout, csrf } = useAuthContext();

    const [email2, setEmail] = useState("");
    const [errors, setErrors] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const [status, setStatus] = useState(null);
    
    useEffect(() => {
        setEmail(user?.email);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        await csrf();
        setErrors([]);
        setStatus(null);
        setSpinner(true);
        try {
            const response = await axios.post('/email/verification-notification', { email2 });
            setStatus(response.data.status);
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
        setSpinner(false);
    };

    function handleLogout() {
        logout();
    }

  return (
        <div>
            <section className="bg-white ">
                <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                    <form onSubmit={handleSubmit}>
                    <div className="w-full lg:w-2/3">
                        {status && (
                            <div className="flex gap-2 mt-3 items-center bg-blue-100 py-2 px-3 mb-3 text-blue-500 text-sm rounded-md border border-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>

                            {status}
                            </div>
                        )}
                        <p className="text-base font-medium text-blue-500 ">403 error</p>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-4xl">You are not verified!</h1>
                        <p className="mt-4 text-gray-500 ">Verify your account or go back to home as a guest.</p>
                        <p className="mt-4 text-gray-500 ">(Please verifiy your account on the same device and browser your are logged in, to avoid errors.)</p>

                        <div className="flex items-center mt-6 gap-x-3">
                            <button type='button' className="flex items-center justify-center w-1/2 px-4 py-2 lg:py-2.5 text-base text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-100 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                <Link to='/' onClick={()=> (handleLogout())}>Home</Link>
                            </button>
                            <button type="submit" className="transition w-1/2  duration-300 bg-gradient-to-r from-green-700 flex items-center justify-center to-green-500 text-white px-4 py-2 lg:py-2.5  rounded-lg text-base   shadow-sm hover:shadow-md font-semibold text-center active:scale-95">
                            {
                                spinner ? <div role="status">
                                <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-200 animate-spin  fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div> : <span className="inline-block mr-2" id='login'>Resend Email</span>

                            }
                            </button>
                        </div>
                    </div>
                    </form>
                </div>
            </section>
        </div>
    // <div>
    //   <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
    //               <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
    //                   <div className="relative">
    //                       <div className="absolute">
    //                           <div className="">
    //                               <h1 className="my-4 text-gray-800 font-bold text-2xl">
    //                                   Looks like you've found the
    //                                   doorway to the great nothing
    //                               </h1>
    //                               <p className="my-2 text-gray-800 mb-10">Sorry about that! Please visit our hompage to get where you need to go.</p>
    //                               <Link to='/'  className="sm:w-full lg:w-auto my-2 border rounded-md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</Link>
    //                           </div>
    //                       </div>
    //                       <div>
    //                           <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
    //                       </div>
    //                   </div>
    //               </div>
    //               <div>
    //                   <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
    //               </div>
    //           </div>
    //     </div>
  )
}

export default NoPermission
