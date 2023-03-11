import React, { useState, useEffect } from 'react'
import Logo from '../assets/cks-logo.png'
import { Link } from 'react-router-dom';
import useAuthContext from '../context/Authentication';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [password_confirmation, setPassword_Confirmation] = useState("");
    const role = "User";
    const town = "User";
    const { register, errors, loginerror, spinner } = useAuthContext();

    const handleLogin = async (event) => {
        event.preventDefault();
        register({ name, email, password, password_confirmation, town, role });
    };

  return (
    <div>
       
       <div className="min-h-screen bg-white sm:bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="p-1 sm:p-10 xs:p-0 mx-auto md:w-full md:max-w-2xl">
            <img src={Logo} alt="Center for Kapampangan Studies" className='mx-auto w-28 mb-3' />
            <h1 className="font-bold text-center text-2xl mb-5">Center for Kapampangan Studies</h1>   
            <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <form onSubmit={handleLogin}>
            <div className="px-10 py-12">
                <h2 className='font-bold text-start text-lg mb-5'>Create Your Account</h2>
                {loginerror && (<p className='bg-red-100 py-2 px-3 mb-3 text-red-500 text-sm rounded-md border border-red-300'>Your account is blocked, please contact the admin. </p>)}
                    <div className='w-full'>
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                        <input type="email" name='email' placeholder='test@example.com' value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                        {errors.email && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 -mt-3">{errors.email[0]}</span></div>)}
                    </div>
                    <div className='w-full'>
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Name</label>
                        <input type="text" name='name' placeholder='' value={name} onChange={(e) => setName(e.target.value)} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                        {errors.name && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 -mt-3">{errors.name[0]}</span></div>)}
                    </div>

                <div className='md:flex gap-4'>
                    <div className='w-full'>
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"  />
                        {errors.password && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 -mt-3">{errors.password[0]}</span></div>)}
                    </div>
                    <div className='w-full'>
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Confirm Password</label>
                        <input type="password" name='password_confirmation' value={password_confirmation} onChange={(e) => setPassword_Confirmation(e.target.value)} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"  />
                        {errors.password_confirmation && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 -mt-3">{errors.password_confirmation[0]}</span></div>)}
                    </div>
                </div>
                
                <button type="submit" className="transition-all ease-out duration-300 bg-gradient-to-r from-green-700 to-green-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center flex justify-center active:scale-95">
                    {
                        spinner ? <div role="status">
                        <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-300 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div> : <span className="inline-block mr-2" id='login'>Create Account</span>
                    }
                    {/* <span className="inline-block mr-2" id='register'>Register</span> */}
    
                </button>
            </div>
            </form>
            </div>
            <div className="py-5">
                <div className="grid grid-cols-2 gap-1">
                <div className="text-center sm:text-left whitespace-nowrap">
                    <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <Link to='/' className="inline-block ml-1">Back to your-app.com</Link>
                    </button>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Register
