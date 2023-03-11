import React, { useState, useRef, useContext } from 'react'
import Logo from '../assets/cks-logo.png';
import { NavLink, Link, Outlet } from "react-router-dom";
import useAuthContext from '../context/Authentication';
import RecordsContext from '../context/RecordsContext';
import FadeInOut from "../animation/fade";


export function AdminPage() {
    const { user } = useAuthContext();

    const {
        clearFormValues
    } = useContext(RecordsContext);

    const [shown, setShown] = useState(true);
    const [shown2, setShown2] = useState(true);
    const [shown3, setShown3] = useState(true);


    const dropdownRef1 = useRef();
    const dropdownRef2 = useRef();
    const dropdownRef3 = useRef();


    const handleFilter = (e) => {
        if(shown){
            dropdownRef1.current.classList.add('hidden');
            setShown(false);
        }
        else{
            dropdownRef1.current.classList.remove('hidden');
            setShown(true);
        }
    };

    const handleFilter2 = (e) => {
        if(shown2){
            dropdownRef2.current.classList.add('hidden');
            setShown2(false);
        }
        else{
            dropdownRef2.current.classList.remove('hidden');
            setShown2(true);
        }
    };

    
    const handleFilter3 = (e) => {
        if(shown3){
            dropdownRef3.current.classList.add('hidden');
            setShown3(false);
        }
        else{
            dropdownRef3.current.classList.remove('hidden');
            setShown3(true);
        }
    };



    const { logout } = useAuthContext();
    const [isActive, setIsActive] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);
    const [isActive7, setIsActive7] = useState(false);
    const [isActive8, setIsActive8] = useState(false);
    const [isActive9, setIsActive9] = useState(false);


    const handleActive = () => {
        setIsActive(true), setIsActive2(false), setIsActive3(false), setIsActive4(false),setIsActive5(false), setIsActive6(false), setIsActive7(false),setIsActive8(false), setIsActive9(false), clearFormValues();
    }

    const handleActive2 = () => {
        setIsActive(false), setIsActive2(true), setIsActive3(false), setIsActive4(false),setIsActive5(false), setIsActive6(false), setIsActive7(false),setIsActive8(false), setIsActive9(false), clearFormValues();
    }

    const handleActive3 = () => {
        setIsActive(false), setIsActive2(false), setIsActive3(true), setIsActive4(false),setIsActive5(false), setIsActive6(false), setIsActive7(false),setIsActive8(false), setIsActive9(false), clearFormValues();
    }

    const handleActive4 = () => {
        setIsActive(false), setIsActive2(false), setIsActive3(false), setIsActive4(true),setIsActive5(false), setIsActive6(false), setIsActive7(false),setIsActive8(false), setIsActive9(false), clearFormValues();
    }

    const handleActive5 = () => {
        setIsActive(false), setIsActive2(false), setIsActive3(false), setIsActive4(false),setIsActive5(true), setIsActive6(false), setIsActive7(false),setIsActive8(false), setIsActive9(false), clearFormValues();
    }

    
    const handleActive6 = () => {
        setIsActive(false), setIsActive2(false), setIsActive3(false), setIsActive4(false),setIsActive5(false), setIsActive6(true), setIsActive7(false),setIsActive8(false), setIsActive9(false), clearFormValues();
    }

    const handleActive7 = () => {
        setIsActive(false), setIsActive2(false), setIsActive3(false), setIsActive4(false),setIsActive5(false), setIsActive6(false), setIsActive7(true), setIsActive8(false), setIsActive9(false),  clearFormValues();
    }

    const handleActive8 = () => {
        setIsActive(false), setIsActive2(false), setIsActive3(false), setIsActive4(false),setIsActive5(false), setIsActive6(false), setIsActive7(false), setIsActive8(true), setIsActive9(false),  clearFormValues();
    }

    const handleActive9 = () => {
        setIsActive(false), setIsActive2(false), setIsActive3(false), setIsActive4(false),setIsActive5(false), setIsActive6(false), setIsActive7(false), setIsActive8(false), setIsActive9(true), clearFormValues();
    }
  return ( 

    <div className='' id="navbar-content">
      <div className="ml-[-100%] fixed z-8 top-0 pb-3 px-4 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[17%] shadow-xl shadow-gray-400">
          <div>
            <div className="-mx-6 px-6 py-4">
                <a href="/dashboard" title="home" className='flex gap-2 items-center'>
                    <img src={Logo} alt="Center for Kapampangan Studies" className='w-14 h-14'/>
                   <h1 className='font-bold text-start text-md'>Center for Kapampangan Studies</h1>
                </a>

            </div>
            
            {/* <div className="mt-8 text-start">
                    <img src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp" alt="" className="w-8 h-8 m-auto rounded-full object-cover lg:w-28 lg:h-28"></img>
                    <div>
                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{user2?.name}</h5>
                    <span className="hidden text-gray-400 lg:block">{user?.name}</span>
                    </div>
                    
            </div> */}
            <ul className="space-y-2 tracking-wide mt-10 text-sm">
                <li className='mb-4'>
                {/* <Link to='dashboard' aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl focus:text-white focus:bg-gradient-to-r from-green-600 to-green-400 group"> */}
                    {/* <NavLink to='' aria-label="dashboard" className="px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-green-600 to-green-400 transition-all ease-in focus:ring-2 focus:ring-green-700 focus:ring-offset-2 active:scale-95"> */}
                        <NavLink to='' aria-label="dashboard" onClick={handleActive} className={isActive? 'px-4 py-2 flex items-center space-x-4 rounded-md text-white bg-gradient-to-r from-green-600 to-green-400 transition-all ease-in active:scale-95 font-medium' : 'px-4 py-2 flex items-center space-x-4 rounded-md text-gray-900 group focus:bg-gray-200 active:scale-95 hover:bg-gray-100 transition-all ease-out font-medium'}>

                        <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                            <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                            <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                            <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-400"></path>
                        </svg>
                        <span className="-mr-1" >Dashboard</span>
                    </NavLink>
                </li>
                <hr className=''/>
                <li>
                    <div className='flex items-center justify-between px-2 py-2 pt-4  text-gray-500 hover:cursor-pointer' onClick={handleFilter}>
                        <p className='text-xs font-bold'>RECORDS</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" className={shown ? 'origin-center rotate-180 transition-all ease-in' : 'origin-center transition-all ease-in'}/>
                        </svg>
                    </div>
                    <div ref={dropdownRef1}  className='space-y-2 mb-4' id="dropdown1">
                    <FadeInOut show={shown} duration={200}  className='space-y-2 '>
                    <div>
                        <NavLink to='records' onClick={handleActive2} className={isActive2? 'px-4 py-2 flex items-center space-x-4 rounded-md text-white bg-gradient-to-r from-green-600 to-green-400 transition-all ease-in active:scale-95 font-medium' : 'px-4 py-2 flex items-center space-x-4 rounded-md text-gray-900 group focus:bg-gray-200 active:scale-95 hover:bg-gray-100 transition-all ease-out font-medium'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path className="fill-current text-gray-300 group-hover:text-cyan-300 group-focus:text-cyan-300 transition-all ease-out" fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                                <path className={isActive2? 'fill-current text-white' : 'fill-current text-gray-600 group-hover:text-cyan-600 group-focus:text-cyan-600 transition-all ease-out'} d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                            </svg>
                            <span className="group-hover:text-gray-700">Active Records</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='pending-records' onClick={handleActive3} className={isActive3? 'px-4 py-2 flex items-center space-x-4 rounded-md text-white bg-gradient-to-r from-green-600 to-green-400 transition-all ease-in active:scale-95 font-medium' : 'px-4 py-2 flex items-center space-x-4 rounded-md text-gray-900 group focus:bg-gray-200 active:scale-95 hover:bg-gray-100 transition-all ease-out font-medium'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path className={isActive3 ? 'fill current text-white ' : '"fill-current text-gray-600 group-hover:text-cyan-600 group-focus:text-cyan-300 transition-all ease-out"'} fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                                <path className="fill-current text-gray-300 group-hover:text-cyan-300 group-focus:text-cyan-600 transition-all ease-out" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                            </svg>
                            <span className="group-hover:text-gray-700">Pending Records</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='archived-records' onClick={handleActive4} className={isActive4? 'px-4 py-2 flex items-center space-x-4 rounded-md text-white bg-gradient-to-r from-green-600 to-green-400 transition-all ease-in active:scale-95 font-medium' : 'px-4 py-2 flex items-center space-x-4 rounded-md text-gray-900 group focus:bg-gray-200 active:scale-95 hover:bg-gray-100 transition-all ease-out font-medium'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path className={isActive4? 'fill-current text-white' : 'fill-current text-gray-600 group-hover:text-cyan-600 group-focus:text-cyan-300 transition-all ease-out'} d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                <path className="fill-current text-gray-300 group-hover:text-cyan-300 group-focus:text-cyan-600 transition-all ease-out" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                            </svg>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                            </svg> */}
                            <span className="group-hover:text-gray-700">Archives</span>
                        </NavLink>
                    </div>
                    </FadeInOut>
                    </div>
                </li>
                <hr/>
                <li>
                    <div className='flex items-center justify-between px-2 py-2 pt-4  text-gray-500 hover:cursor-pointer' onClick={handleFilter2}>
                        <p className='text-xs font-bold'>ACCOUNT</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" className={shown2 ? 'origin-center rotate-180 transition-all ease-in' : 'origin-center transition-all ease-in'}/>
                        </svg>
                    </div>
                    <div ref={dropdownRef2}  className='space-y-2 mb-4' id="dropdown2">
                        <FadeInOut show={shown2} duration={200}  className='space-y-2 '>
                            {
                                user.role != 'Super Admin' ? 
                                ""
                                :
                                <div>
                                    <NavLink to='admin-records' onClick={handleActive6} className={isActive6? 'px-4 py-2 flex items-center space-x-4 rounded-md text-white bg-gradient-to-r from-green-600 to-green-400 transition-all ease-in active:scale-95 font-medium' : 'px-4 py-2 flex items-center space-x-4 rounded-md text-gray-600 group focus:bg-gray-200 active:scale-95 hover:bg-gray-100 transition-all ease-out font-medium'}>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ">
                                            <path className={isActive6? 'fill-current text-white' : 'fill-current text-gray-600 group-hover:text-cyan-300 group-focus:text-cyan-300 transition-all ease-out'} strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path className={isActive6? 'fill-current text-white' : 'fill-current text-gray-600 group-hover:text-cyan-300 group-focus:text-cyan-300 transition-all ease-out'} d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                                        </svg>
                                        <span className="group-hover:text-gray-700">Admin Records</span>
                                    </NavLink>
                                    <NavLink to='users-records' onClick={handleActive7} className={isActive7? 'px-4 py-2 flex items-center space-x-4 rounded-md text-white bg-gradient-to-r from-green-600 to-green-400 transition-all ease-in active:scale-95 font-medium' : 'px-4 py-2 flex items-center space-x-4 rounded-md text-gray-600 group focus:bg-gray-200 active:scale-95 hover:bg-gray-100 transition-all ease-out font-medium'}>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path className={isActive7? 'fill-current text-white' : 'fill-current text-gray-600 group-hover:text-cyan-300 group-focus:text-cyan-300 transition-all ease-out'} d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                                        </svg> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path className={isActive7? 'fill-current text-white' : 'fill-current text-gray-600 group-hover:text-cyan-600 group-focus:text-cyan-300 transition-all ease-out'} fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                                            <path className={isActive7? 'fill-current text-white' : 'fill-current text-gray-600 group-hover:text-cyan-300 group-focus:text-cyan-300 transition-all ease-out'} d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                                        </svg>


                                        <span className="group-hover:text-gray-700">Users Lists</span>
                                    </NavLink>
                                   
                                </div>
                            }
                           
                            <div>
                                <NavLink to='admin-profile' onClick={handleActive5} className={isActive5? 'px-4 py-2 flex items-center space-x-4 rounded-md text-white bg-gradient-to-r from-green-600 to-green-400 transition-all ease-in active:scale-95 font-medium' : 'px-4 py-2 flex items-center space-x-4 rounded-md text-gray-600 group focus:bg-gray-200 active:scale-95 hover:bg-gray-100 transition-all ease-out font-medium'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ">
                                        <path className={isActive5? 'fill-current text-white' : 'fill-current text-gray-600 group-hover:text-cyan-300 group-focus:text-cyan-300 transition-all ease-out'} strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    <span className="group-hover:text-gray-700">Admin Profile</span>
                                </NavLink>
                            </div>
                           
                        </FadeInOut>
                    </div>
                </li>
                <hr/>
                <li>
                    <div className='flex items-center justify-between px-2 py-2 pt-4  text-gray-500 hover:cursor-pointer' onClick={handleFilter3}>
                        <p className='text-xs font-bold'>REVIEW & FEEDBACK</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" className={shown3 ? 'origin-center rotate-180 transition-all ease-in' : 'origin-center transition-all ease-in'}/>
                        </svg>
                    </div>
                    <div ref={dropdownRef3}  className='space-y-2 mb-4' id="dropdown3">
                        <FadeInOut show={shown3} duration={200}  className='space-y-2 '>
                            {
                                user.role != 'Super Admin' ? 
                                ""
                                :
                                <div className='space-y-2'>
                                     <div>
                                        <NavLink to='reviews' onClick={handleActive8} className={isActive8? 'px-4 py-2 flex items-center space-x-4 rounded-md text-white bg-gradient-to-r from-green-600 to-green-400 transition-all ease-in active:scale-95 font-medium' : 'px-4 py-2 flex items-center space-x-4 rounded-md text-gray-900 group focus:bg-gray-200 active:scale-95 hover:bg-gray-100 transition-all ease-out font-medium'}>
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path className={isActive8? 'fill-current text-white' : 'fill-current text-gray-600 group-hover:text-cyan-600 group-focus:text-cyan-300 transition-all ease-out'} d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                                                <path className={isActive8? 'fill-current text-white' : 'fill-current text-gray-600 group-hover:text-cyan-400 group-focus:text-cyan-300 transition-all ease-out'} d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                                            </svg> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path className={isActive8? 'fill-current text-white' : 'fill-current text-gray-600 group-hover:text-cyan-400 group-focus:text-cyan-300 transition-all ease-out'} fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>

                                            <span className="group-hover:text-gray-700">Reviews</span>
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink to='comments' onClick={handleActive9} className={isActive9? 'px-4 py-2 flex items-center space-x-4 rounded-md text-white bg-gradient-to-r from-green-600 to-green-400 transition-all ease-in active:scale-95 font-medium' : 'px-4 py-2 flex items-center space-x-4 rounded-md text-gray-900 group focus:bg-gray-200 active:scale-95 hover:bg-gray-100 transition-all ease-out font-medium'}>
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path className={isActive8? 'fill-current text-white' : 'fill-current text-gray-600 group-hover:text-cyan-600 group-focus:text-cyan-300 transition-all ease-out'} d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                                <path className="fill-current text-gray-300 group-hover:text-cyan-300 group-focus:text-cyan-600 transition-all ease-out" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                            </svg> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path className={isActive9? 'fill-current text-white' : 'fill-current text-gray-600 group-hover:text-cyan-600 group-focus:text-cyan-300 transition-all ease-out'} d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                                                <path className={isActive9? 'fill-current text-white' : 'fill-current text-gray-600 group-hover:text-cyan-400 group-focus:text-cyan-300 transition-all ease-out'} d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                                            </svg>

                                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                            </svg> */}
                                            <span className="group-hover:text-gray-700">Comments</span>
                                        </NavLink>
                                    </div>
                                </div>
                               
                            }
                           
                        </FadeInOut>
                    </div>
                    
                </li>
            </ul>
        </div>
 
        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
            <button className="px-4 py-3 flex items-center space-x-4 rounded-lg text-gray-600 group active:scale-95"  onClick={logout}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" className='group-hover:text-red-500' />
                </svg>
                <span className="group-hover:text-gray-700 group-hover:translate-x-1 font-bold transition-all ease-in-out">Logout</span>
            </button>
        </div>
      </div>
      <div className="ml-auto mb- h-full lg:w-[75%] xl:w-[80%] 2xl:w-[83%] bg-neutral-100">
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminPage
