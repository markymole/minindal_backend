import React, {useContext, useState, useEffect} from 'react'
import Logo from '../assets/cks-logo.png'
import { Link } from 'react-router-dom'
import AppContext from '../context/Context';
import useAuthContext from '../context/Authentication';

const Login = () => {
    const [show, setShow] = useState(false);
    const { closeLoginModal } = useContext(AppContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { errors, loginerror, setLoginError, setErrors, guestLogin, spinner, setSpinner } = useAuthContext();

    const handleLogin = async (event) => {
        event.preventDefault();
        guestLogin({ email, password });
    };

    useEffect(() => {
        setLoginError("");
        setSpinner(false);
        setErrors([]);
    },[])

    // useEffect(() => {
    //     const listener = event => {
    //       if (event.code === "Enter" || event.code === "NumpadEnter") {
    //         event.preventDefault();
    //         handleLogin();
    //       }
    //     };
    //     document.addEventListener("keydown", listener);
    //     return () => {
    //       document.removeEventListener("keydown", listener);
    //     };
    //   }, []);

    // useEffect(() => {
    //   if (!user) {
    //     getUser();
    //   }
    // }, []);

  return (
    <div>
    <div className="min-h-screen fixed z-40 w-full flex flex-col justify-center sm:py-12 bg-zinc-900 bg-opacity-50 inset-0">
        <div className="p-2 md:p-10 xs:p-0 mx-auto w-full md:w-3xl md:w-fit">
            <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <form onSubmit={handleLogin}>
            <div className="px-5 py-7">
                <div className='flex items-center justify-between mb-5'>
                    <h2 className='font-bold text-start text-lg'>User Login</h2>
                    <button type="button" className='' onClick={closeLoginModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-5 h-5'>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {loginerror && <p className='bg-red-100 py-2 px-3 mb-3 text-red-500 text-sm rounded-md border border-red-300'>{loginerror} </p>}
                <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                <input type="email" placeholder='your@email.com' value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none" />
                {errors.email && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 -mt-3">{errors.email[0]}</span></div>)}                <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                {/* <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"  /> */}
                <div className='border rounded-lg mb-5 text-sm w-full flex items-center'>
                    <input type={show? "text" : "password"} value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} className="px-3 py-2 w-full rounded-lg focus:outline-none"  />
                    {
                        show ? 
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 text-green-600" onClick={() => setShow(!show)}>
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 text-gray-600" onClick={() => setShow(!show)}>
                            <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                        </svg>                      
                    }
                </div>
                
                {errors.password && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 -mt-3">{errors.password[0]}</span></div>)}
                <button type="submit" className="transition-all ease-out duration-300 flex items-center justify-center bg-gradient-to-r from-green-700 to-green-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center active:scale-95">
                    {
                        spinner ? <div role="status">
                        <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-300 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div> : <span className="inline-block mr-2" id='login'>Login</span>

                    }
                </button>
            </div>
            </form>
            
            <div className="py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                <div className="text-center sm:text-left whitespace-nowrap">
                    <Link to="/forgot-password">
                        <button type="button" className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                            </svg>
                            <span className="inline-block ml-1">Forgot Password</span>
                        </button>
                    </Link>
                  
                </div>
                <div className="text-center sm:text-right  whitespace-nowrap">
                    <Link to='/register'>
                        <button type="button" className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-bottom	">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <span className="inline-block ml-1">Create Account</span>
                        </button>
                    </Link>
                  
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login
