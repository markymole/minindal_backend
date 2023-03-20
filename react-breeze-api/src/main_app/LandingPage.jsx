import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import FadeInOut from '../animation/fade'
import logo from '../assets/minindal-logo.png'
import sample from '../assets/minindal-capture3.png'
import sample2 from '../assets/minindal-capture4.png'


const LandingPage = () => {
    const [show, setShow] = useState(true);
  return (
    <div className='bg-gradient-to-b from-white to-green-50'>
        <div className='p-4'>
            <section className="pt-10 lg:pt-56 overflow-auto scrollbar-hide">
                <div className="px-4 mx-auto max-w-7xl">
                    <div className="w-full mx-auto text-left md:w-11/12 xl:w-10/12 md:text-start lg:flex lg:gap-16 lg:items-center">
                        <FadeInOut show={show} duration={400}>
                            <h1 className="mb-8 text-4xl font-extrabold  leading-none tracking-normal text-gray-900 md:text-5xl lg:text-6xl md:tracking-tight">
                                <span></span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-cyan-500 lg:inline">minindal</span> <span>exploring kapampangan cuisine</span>
                            </h1>
                        </FadeInOut>
                        <FadeInOut show={show} duration={500}>

                        <p className="px-0 mb-8 text-base text-gray-800 md:text-xl">
                            Our web app makes searching for Kapampangan cuisine faster and easier than ever before. With just a few clicks, you can browse through our comprehensive directory of local businesses and discover new and exciting culinary experiences.
                        
                        </p>
                        <div className="mb-4 space-x-0 gap-4 hidden lg:flex">
                            <Link to='/explore-kapampangan-cuisine' className="px-4 py-2 w-full md:w-1/2 justify-center bg-green-500 text-white shadow-2xl flex items-center space-x-4 rounded-lg group active:scale-95">
                                <span className="group-hover:text-white group-hover:translate-x-1 font-medium transition-all ease-in-out duration-100">Get Started</span>
                            </Link>

                            <Link to='/about-us' className="px-4 py-2 w-full mt-4 md:mt-0 justify-center md:w-1/2  bg-gray-300/80 shadow-2xl text-gray-700 flex items-center space-x-4 rounded-lg group active:scale-95">
                                <span className="group-hover:text-gray-700 group-hover:translate-x-1 font-medium transition-all ease-in-out duration-100">Learn More</span>
                              
                            </Link>
                          
                        </div>

                        </FadeInOut>

                        <FadeInOut show={show} duration={500}>
                        <div className="mb-4 space-x-0 md:mb-8 md:flex gap-4 lg:hidden">
                            <Link to='/explore-kapampangan-cuisine' className="px-4 py-2 w-full md:w-1/2 justify-center bg-green-500 text-white shadow-2xl flex items-center space-x-4 rounded-lg group active:scale-95">
                                <span className="group-hover:text-white group-hover:translate-x-1 font-medium transition-all ease-in-out duration-100">Get Started</span>
                    
                            </Link>

                            <Link to='/about-us' className="px-4 py-2 w-full mt-4 md:mt-0 justify-center md:w-1/2  bg-gray-300/80 shadow-2xl text-gray-700 flex items-center space-x-4 rounded-lg group active:scale-95">
                                <span className="group-hover:text-gray-700 group-hover:translate-x-1 font-medium transition-all ease-in-out duration-100">Learn More</span>
             
                            </Link>
                          
                        </div>
                        </FadeInOut>

                        
                    </div>
                    <div className="w-full mx-auto mt-32 text-center md:w-11/12 lg:pt-28">
                        <div className="relative z-0 w-full mt-8">
                            <div className="relative overflow-hidden shadow-2xl">
                                <div className="flex items-center flex-none px-4 bg-green-500 rounded-b-none h-11 rounded-xl">
                                    <div className="flex space-x-1.5">
                                        <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                        <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                        <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                    </div>
                                </div>
                                <img src={sample}/>
{/* 
                                <img src={sample} className="hidden lg:flex rounded-b-lg"/>
                                <img src={sample2} className="flex lg:hidden rounded-b-lg"/> */}
                            </div>
                        </div>
                    </div>
                    <div className="w-full mx-auto text-left md:w-11/12 xl:w-10/12 md:text-start lg:flex lg:flex-row-reverse lg:gap-16 lg:items-center pt-24 lg:pt-48">
                        <FadeInOut show={show} duration={400}>
                            <h1 className="mb-8 text-4xl font-extrabold  leading-none tracking-normal text-gray-900 md:text-5xl lg:text-6xl md:tracking-tight">
                                <span>Help us build a</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-cyan-500 lg:inline">better</span> <span>local business directory!</span>
                            </h1>
                        </FadeInOut>
                        <FadeInOut show={show} duration={500}>

                        <p className="px-0 mb-8 text-base text-gray-800 md:text-xl">
                        While we've included some records to test the app, we know there are many more out there that we haven't captured yet. If you know of any businesses that should be on our list, please let us know by submitting them through our app or by sending us a message.                        <br/><br />
                        We're committed to making it a valuable resource for the community, and we believe that with your input and support, we can achieve that goal.                        </p>
                        <div className="mb-4 space-x-0 hidden gap-4 lg:flex">
                            <Link to='/contribute' className="px-4 py-2 w-full md:w-1/2 justify-center bg-green-500 text-white shadow-2xl flex items-center space-x-4 rounded-lg group active:scale-95">
                                <span className="group-hover:text-white group-hover:translate-x-1 font-medium transition-all ease-in-out duration-100">Contribute Now</span>
                            </Link>

                        </div>

                        </FadeInOut>

                        <FadeInOut show={show} duration={500}>
                        <div className="pb-4 space-x-0 md:pb-8 md:flex gap-4 lg:hidden">
                            <Link to='/contribute' className="px-4 py-2 w-full md:w-1/2 justify-center bg-green-500 text-white shadow-md flex items-center space-x-4 rounded-lg group active:scale-95">
                                <span className="group-hover:text-white group-hover:translate-x-1 font-medium transition-all ease-in-out duration-100">Contribute Now</span>
                          
                            </Link>
                        </div>
                        </FadeInOut>

                        
                    </div>
                </div>
                
            </section>

        </div>
    
    </div>
  )
}

export default LandingPage