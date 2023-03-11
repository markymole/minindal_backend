import React, {useState, useEffect, useRef} from 'react'
import { useContext } from 'react';
import { Link, Outlet } from "react-router-dom";
import FadeInOut from '../animation/fade';
import Login from './Login';
import AppContext from '../context/Context';
import useAuthContext from '../context/Authentication';
import RecordsContext from '../context/RecordsContext';
import { useNavigate } from 'react-router-dom';
import Notice from '../main_components/Notice';

const Main = () => {
    const { user, getUser, logoutGuest, setLoginError } = useAuthContext();
    const navigate = useNavigate();

    const {
        clearFormValues,
    } = useContext(RecordsContext);

    // try transfering to login
    useEffect(() => {
      if (!user) {
        getUser();
    }
    }, []);

    useEffect(() => {
        if(user){
            user?.role.toLowerCase() != 'user' && navigate('/redirect');
        }
    })

    const { loginShow, openLoginModal } = useContext(AppContext);
    function toggleMenu(){
        document.getElementById('slideover-container').classList.toggle('invisible');
        document.getElementById('slideover').classList.toggle('translate-x-full');
    }

    const dropdownRef1 = useRef();
    const [shown, setShown] = useState(false);
    const [notice, setNotice] = useState(true);
    const openNotice = () =>{
        setNotice(!notice);
    }

    const closeNotice = () =>{
        setNotice(!notice);
    }

    const [isActive, setIsActive] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);

    const handleActive = () => {
        setIsActive(true), setIsActive2(false), setIsActive3(false), setIsActive4(false), clearFormValues();
    }

    const handleActive2 = () => {
        setIsActive(false), setIsActive2(true), setIsActive3(false), setIsActive4(false), clearFormValues();
    }

    const handleActive3 = () => {
        setIsActive(false), setIsActive2(false), setIsActive3(true), setIsActive4(false), clearFormValues();
    }

    const handleActive4 = () => {
        setIsActive(false), setIsActive2(false), setIsActive3(false), setIsActive4(true), clearFormValues();
    }

    const [active, setActive] = useState(true);

    const toggleBurger = () => {
        setActive(!active);
    }

    const handleFilter = (e) => {
        dropdownRef1.current.classList.remove('hidden');
        setShown(true);
    };

    useEffect(() => {
        let handler = (event) => {
            if(!dropdownRef1.current.contains(event.target)) {
                setShown(false);
            }
        }

        document.addEventListener("mousedown", handler);


        return () => {
            document.removeEventListener("mousedown", handler);
        }

        
    }, []);

  return (
    <div>
      <div className="flex flex-wrap">
        <section className="fixed top-0 mx-auto z-40">
            {/* <!-- navbar --> */}
            <nav className="flex justify-between absolute z-40 bg-white text-gray-900 backdrop-blur-md border-b w-screen ease-out transition-all duration-75">
            <div className="px-5 xl:px-12 py-3 md:py-6 flex w-full items-center justify-between">
                <Link to='/' className="text-xl font-bold font-heading xl:text-2xl">
                {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
                minindal
                </Link>
               
                {/* <!-- Nav Links --> */}
                <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-8">
                <li><Link to="/" onClick={handleActive}  className={isActive ? "h-fit text-white shadow-md bg-green-500 hover:bg-green-400 font-medium rounded-md px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" : "px-4 py-2 rounded-md text-gray-900 group  active:scale-95 hover:bg-gray-100 transition-all ease-out  text-sm lg:text-base font-medium"}>Home</Link></li>
                <li><Link to="/suggestion-page" onClick={handleActive2} className={isActive2 ? "h-fit text-white shadow-md bg-green-500 hover:bg-green-400 font-medium  rounded-md px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" : "px-4 py-2 rounded-md text-gray-900 group  active:scale-95 hover:bg-gray-100 transition-all ease-out  text-sm lg:text-base font-medium"}>Suggestion</Link></li>
                <li><Link  to="/application-request" onClick={handleActive3} className={isActive3 ? "h-fit text-white shadow-md bg-green-500 hover:bg-green-400 font-medium rounded-md px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" : "px-4 py-2 rounded-md text-gray-900 group  active:scale-95 hover:bg-gray-100 transition-all ease-out  text-sm lg:text-base font-medium"}>About Us</Link></li>
                <li><Link  to="/contact-us" onClick={handleActive4} className={isActive4 ? "h-fit text-white shadow-md bg-green-500 hover:bg-green-400 font-medium rounded-md px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" : "px-4 py-2 rounded-md text-gray-900 group  active:scale-95 hover:bg-gray-100 transition-all ease-out  text-sm lg:text-base font-medium"}>Contact Us</Link></li>
                </ul>
                {/* <!-- Header Icons --> */}
                    <div className="items-center flex gap-2">
                            <div className='flex'>  
                                {
                                    user ?  
                                    <div>
                                        <button className='rounded-xl group' onClick={handleFilter}>
                                            <div className='h-8 w-8 bg-gray-700 text-white text-xl rounded-full '>
                                                <span>{user?.name[0]}</span>
                                            </div>
                                            {/* {!user.email_verified_at && 
                                            <span className="flex absolute -mt-8 ml-6" onMouseEnter={openNotice} onMouseLeave={closeNotice}>
                                            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                                </span>
                                            </span>
                                            }       */}
                                        </button>  
                                        <div ref={dropdownRef1} className='hidden absolute top-16 right-0 md:top-16 md:right-10'>
                                        <FadeInOut show={shown} duration={200}>
                                        <div className='flex flex-col gap-4 border border-gray-200 font-medium bg-white text-base z-50  rounded shadow-xl tranform transition-all ease-in-out'>
                                            {
                                                user?       
                                                    user?.role.toLowerCase() == "user" ? 
                                                    <div className=''>
                                                        {/* <div className='p-2'>
                                                            <p className='flex items-center gap-2 w-52 px-4 py-2 text-gray-700'> 
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
                                                                </svg>
                                                                <span className='font-thin'>{user.name}</span>
                                                            </p>
                                                        
                                                        </div> */}
                                                        <div className='px-3 py-2 mb-1'>
                                                            <p className='font-thin text-gray-800'>{user.name}</p>
                                                            <p className='font-thin text-gray-500'>{user.email}</p>
                                                        </div>
                                                        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-300"/>
                                                        {/* <div className='mt-1 px-3 py-2 hover:bg-gray-200'>
                                                            <button onClick={logoutGuest} className='flex gap-2 items-center font-thin w-40 text-gray-700  rounded transition-all duration-75 group ease-out hover:text-white active:scale-95'>
                                                                <p className='group-hover:text-gray-700 group-hover:translate-x-1 transition-all ease-in-out"'>Profile</p>
                                                            </button>
                                                            
                                                        </div>
                                                        <div className='mt-1 px-3 py-2 hover:bg-gray-200'>
                                                            <button onClick={logoutGuest} className='flex gap-2 items-center font-thin w-40 text-gray-700  rounded transition-all duration-75 group ease-out hover:text-white active:scale-95'>
                                                                <p className='group-hover:text-gray-700 group-hover:translate-x-1 transition-all ease-in-out"'>Link</p>
                                                            </button>
                                                            
                                                        </div>
                                                        <div className='mt-1 px-3 py-2 hover:bg-gray-200'>
                                                            <button onClick={logoutGuest} className='flex gap-2 items-center font-thin w-40 text-gray-700  rounded transition-all duration-75 group ease-out hover:text-white active:scale-95'>
                                                                <p className='group-hover:text-gray-700 group-hover:translate-x-1 transition-all ease-in-out"'>Link</p>
                                                            </button>
                                                            
                                                        </div> */}
                                                        {/* <hr className="h-px bg-gray-200 border-0 dark:bg-gray-300"/> */}
                                                        <div className='px-3 py-2 hover:bg-gray-200'>
                                                            <button onClick={logoutGuest} className='flex gap-2 items-center font-thin w-44 text-gray-700  rounded transition-all duration-75 group ease-out hover:text-white active:scale-95'>
                                                                <p className='group-hover:text-gray-700 group-hover:translate-x-1 transition-all ease-in-out"'>Logout</p>
                                                            </button>
                                                            
                                                        </div>
                                                        {/* <button onClick={logoutGuest} className='h-fit w-40 text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>Sign Out</button> */}
                                                    </div>
                                                    :
                                                    <div className='p-2'>                       
                                                        <button onClick={openLoginModal} className='h-fit text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>Login</button>
                                                        <button className='h-fit text-gray-700 bg-white border hover:bg-gray-200 border-gray-300 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>Register</button>
                                                    </div>   
                                                :
                                                <div className=''>      
                                                    <h5 className='text-center px-2 py-3 text-gray-800'>minindal</h5>       
                                                    <hr className="h-px bg-gray-200 border-0 "/>
                                                    <div className='py-4 px-4 flex flex-col'>          
                                                        <button onClick={openLoginModal} className='h-fit w-52 text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>Login</button>
                                                        <Link to='/register' className=''>
                                                            <button className='h-fit w-52 mt-2 text-gray-700 bg-white border hover:bg-gray-200 border-gray-300 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>Create Account</button>
                                                        </Link>
                                                    </div> 
                                                </div>   
                                            }
                                        </div>
                                        </FadeInOut>
                                    </div>
                                    </div>
                                  
                                    :
                                    <div className='flex'>
                                           <button onClick={openLoginModal} className='h-fit text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>Login</button>
                                            <Link to='/register' className='hidden lg:flex'>
                                                <button className='h-fit text-gray-700 bg-white border hover:bg-gray-200 border-gray-300 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>Register</button>
                                            </Link>    
                                    </div>
                                }                     
                                                     
                            </div>  
                            {
                                    active?  
                                    <div className="group h-10 w-10 cursor-pointer mt-2 self-center md:hidden rounded-lg bg-white p-2 " onClick={() => { toggleBurger(); toggleMenu();}}>
                                        <div className="space-y-2">
                                        <span className="block h-1 w-6 origin-center rounded-full bg-slate-500 transition-transform ease-in-out"></span>
                                        <span className="block h-1 w-4 origin-center rounded-full bg-green-500 transition-transform ease-in-out"></span>
                                        </div>
                                    </div> 
                                    : 
                                    <div className="group h-10 w-10 cursor-pointer mt-2 self-center md:hidden rounded-lg bg-white p-2" onClick={() => { toggleBurger(); toggleMenu();}}>
                                        <div className="space-y-2">
                                        <span className="block h-1 w-6 origin-center rounded-full bg-slate-500 transition-transform ease-in-out translate-y-1.5 rotate-45"></span>
                                        <span className="block h-1 w-6 origin-center rounded-full bg-green-500 transition-transform ease-in-out -translate-y-1.5 -rotate-45" ></span>
                                    </div>
                                </div>

                            }
                    </div>
                    
                </div>
                {/* <!-- Responsive navbar --> */}
               
            </nav>
        </section>
        {/* Mobile Nav */}
        <div id='slideover-container' className="fixed z-20 inset-0 w-full h-full duration-200 ease-out transition-all invisible xl:invisible">
            <div id='slideover' className="absolute z-40 w-full h-full duration-200 ease-out transition-all bg-gradient-to-r from-white to-neutral-100 right-0 top-0 translate-x-full">
                    {/* <div className='flex flex-col justify-evenly w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> */}
                    <div className='flex flex-col w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <div className='flex flex-col space-y-2 text-center p-4 items-center'>
                                    <Link to='/' className={isActive ? 'py-2 w-full shadow-md bg-green-500 text-white rounded-md active:scale-95 transition-all ease-out font-medium duration-500' : 'py-2 w-full rounded-md text-gray-900 group active:scale-95 hover:bg-gray-200 transition-all ease-out font-medium duration-500'}  onClick={() => { handleActive(); toggleMenu(); toggleBurger();}}>Home</Link>
                                    <Link to='/suggestion-page' className={isActive2 ? 'py-2 w-full shadow-md bg-green-500 text-white rounded-md active:scale-95 transition-all ease-out font-medium duration-500' : 'py-2 w-full rounded-md text-gray-900 group active:scale-95 hover:bg-gray-200 transition-all ease-out font-medium duration-500'} onClick={() => { handleActive2(); toggleMenu(); toggleBurger();}}>Suggestion Page</Link>
                                    <Link to='/application-request' className={isActive3 ? 'py-2 w-full shadow-md bg-green-500 text-white rounded-md active:scale-95 transition-all ease-out font-medium duration-500' : 'py-2 w-full rounded-md text-gray-900 group  active:scale-95 hover:bg-gray-200 transition-all ease-out font-medium duration-500'} onClick={() => { handleActive3(); toggleMenu(); toggleBurger();}}>About Us</Link>
                                    <Link to='/contact-us' className={isActive4 ? 'py-2 w-full shadow-md bg-green-500 text-white rounded-md active:scale-95 transition-all ease-out font-medium duration-500' : 'py-2 w-full rounded-md text-gray-900 group  active:scale-95 hover:bg-gray-200 transition-all ease-out font-medium duration-500'} onClick={() => { handleActive4(); toggleMenu(); toggleBurger();}}>Contact Us</Link>   
                                </div>
                    </div>
                    {/* <div className='absolute bottom-2 w-full'>
                                {
                                    user?       
                                    <div className='p-2'>                       
                                        <button onClick={logoutGuest} className='h-fit w-full text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>Logout</button>
                                    </div>   
                                        : 
                                    <div className='py-4 px-4 flex flex-col'>          
                                            <button onClick={() => {openLoginModal(); toggleMenu(); toggleBurger();}} className='h-fit text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>Login</button>
                                            <Link to='/register' className=''>
                                                <button className='h-fit w-full mt-2 text-gray-700 bg-white border hover:bg-gray-200 border-gray-300 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>Create Account</button>
                                            </Link>
                                    </div> 
                                }
                    </div> */}
            </div>
        </div>
      </div>
      {
            loginShow && <Login id='loginModal'/>
      }

      <div className="relative mt-16 pt-2 md:pt-6">
        <Outlet/>
      </div>
    </div>
  )
}

// {
//     active?  <div class="group flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl bg-white p-2 hover:bg-slate-200" onClick={toggleBurger}>
//     <div class="space-y-2">
//     <span class="block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45 "></span>
//     <span class="block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
//     </div>
//     </div> 
//     : 
//      <div class="group flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl bg-white p-2 hover:bg-slate-200" onClick={toggleBurger}>
//      <div class="space-y-2">
//      <span class="block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out translate-y-1.5 rotate-45 group-hover:translate-y-0 group-hover:rotate-180"></span>
//      <span class="block h-1 origin-center rounded-full bg-orange-500 transition-transform ease-in-out w-10 -translate-y-1.5 -rotate-45 group-hover:w-8 group-hover:-translate-y-0 group-hover:rotate-180" ></span>
//      </div>
//  </div>

// }

export default Main
