import React from 'react'
import { Link } from 'react-router-dom'
import FadeInOut from '../animation/fade'
import image from '../assets/meme.jpg'
import profile_2 from '../assets/pau.jpg'
import profile_3 from '../assets/larren.jpg'
import profile_4 from '../assets/maria.jpg'
import profile_5 from '../assets/aaron.jpg'





const About = () => {
  return (
    <div className=''>
    <div className='mt-6 px-6 h-fit lg:w-2/3 xl:w-1/2 lg:mx-auto '>
                <div id='starter-container' className='lg:mt-14'>
                    {/* <FadeInOut show={true} duration={300}>
                        <h5 className='text-2xl md:text-3xl lg:text-4xl font-semibold px-2 w-4/5 lg:w-3/5'>Help us build a better local business directory!</h5>
                    </FadeInOut> */}
                    <FadeInOut show={true} duration={400}>
                    <h1 className="mb-8 text-4xl px-3 font-extrabold  leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight">
                            <span>Connecting You to the Best of Kapampangan Food:</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-cyan-500 lg:inline">The Minindal Story</span> <span></span>
                    </h1>
                    <div  className='p-2 mt-1 text-gray-800 text-[16px] md:text-xl lg:h-fit lg:overflow-y-auto'>
                        <p className=''>
                            Welcome to Minindal, the premier web application for faster searching of Kapampangan cuisines and delicacies! Our platform is an open directory that allows users to easily find local Kapampangan food businesses around them, as well as enables Kapampangan food business owners to apply for a listing.
                        </p>
                        <br />
                        <p>
                        Our mission is to promote and preserve the rich culinary heritage of Kapampangan cuisine. As a team, we believe that food is not only a basic need, but also an expression of culture and identity. That's why we created Minindal - to provide a space where people can discover, appreciate, and support local Kapampangan food businesses.
                        </p>
                        <br />
                        <p className=' font-medium text-black'>Our objectives in building this directory are:</p>
                    </div>
                    <div className="py-6">  
                        <div className="container m-auto px-2 text-gray-500 md:px-12 xl:px-0">
                            <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
                                <div className="bg-gradient-to-b from-white to-green-50/40 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                                    <div className="mb-12 space-y-4">
                                        <h3 className="text-2xl font-semibold text-green-900">For tourist & residents</h3>
                                        <p className="mb-6">To create directory for people looking for Kapampangan cuisine businesses in our community and to make it easy for people to find Kapampangan cuisine businesses near them</p>
                                    </div>
                                    <img src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg" className="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600"/>

                                </div>
                                <div className="bg-gradient-to-b from-white to-green-50/40 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                                    <div className="mb-12 space-y-4">
                                        <h3 className="text-2xl font-semibold text-green-900">For our culture & heritage</h3>
                                        <p className="mb-6">To promote the unique flavors and culinary heritage of Kapampangan cuisine to a wider audience</p>
                                    </div>
                                    <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg" className="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600"/>
                                </div>
                                <div className="bg-gradient-to-b from-white to-green-50/40 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                                    <div className="mb-12 space-y-4">
                                        <h3 className="text-2xl font-semibold text-green-900">For our locals</h3>
                                        <p className="mb-6">To support local Kapampangan cuisine businesses by increasing their visibility and customer base</p>
                                    </div>
                                    <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg" className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className='p-2 mt-1 text-gray-800 text-[16px] md:text-xl lg:h-fit lg:overflow-y-auto'>
                        <p>
                        With Minindal, users can quickly find the Kapampangan dish they're craving for. Our platform is designed to make searching easy, fast, and hassle-free. Whether you're looking for sisig, kare-kare, or any other Kapampangan delicacy, Minindal has got you covered.
                        Additionally, Minindal is an open directory that encourages community participation. Users can contribute to our database by adding local Kapampangan food businesses that they know. They can also rate and review their favorite food places, helping others make informed decisions.
                        <br /><br />
                        We are passionate about promoting Kapampangan cuisine and supporting local businesses. We hope that through Minindal, we can create a positive impact on the Kapampangan food industry and contribute to the growth of the local economy.
                        <br /></p>
                        <br />
                        <p>We believe that by working together, we can build a better directory of Kapampangan cuisine businesses that truly reflects the richness of our community. Thank you for considering our invitation, and we look forward to seeing your contributions on our website soon.</p>
                        <br />
                        <p className='font-medium text-black pb-14'>Center for Kapampangan Studies and the Minindal Team</p>
                    </div>
                    </FadeInOut>
                <div>
                </div>
            </div>
            <div>
            <div className="py-10">
                <div className="xl:container mx-auto">
                    <div className="mb-16 md:w-2/3 lg:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-800md:text-4xl">
                        Minindal Team
                    </h2>
                    {/* <p class="text-gray-800 text-[16px] md:text-xl">
                        Meet our team! 4th Year Web Developer Students from Holy Angel University.
                    </p> */}
                    </div>
                    <div className="grid md:gap-4 lg:gap-6 px-2 lg:px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    <div className="group h-[80%] lg:h-[80%] lg:w-[100%] relative rounded-3xl  space-y-6 overflow-hidden">
                        <img
                        className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        src={image}
                        alt="woman"
                        loading="lazy"
                        width="640"
                        height="805"
                        />
                        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-green-500 group-hover:bg-green-600/90 translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                        <div>
                            <h4 className="text-xl font-semibold text-white">Mark Raphael Nuguid</h4>
                            <span className="block text-sm text-white">Project Leader</span>
                        </div>
                        <p className="mt-8 text-white">Contact: <br/>  nmark.raphael07@gmail.com</p>
                        </div>
                        
                    </div>
                    <div className="group h-[80%] lg:h-[80%] lg:w-[100%] relative rounded-3xl  space-y-6 overflow-hidden">
                        <img
                        className="mx-auto h-[26rem] lg:h-[20rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        src={profile_4}
                        alt="woman"
                        loading="lazy"
                        width="640"
                        height="805"
                        />
                        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-green-500 group-hover:bg-green-600/90 translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                        <div>
                            <h4 className="text-xl font-semibold  text-white">Maria Anjela Bustillos</h4>
                            <span className="block text-sm text-white">Developer & QA</span>
                        </div>
                        <p className="mt-8 text-white">Contact: <br/> mbstlls@gmail.com</p>
                        </div>
                        
                    </div>
                    <div className="group h-[80%] lg:h-[80%] lg:w-[95%]  relative rounded-3xl  space-y-6 overflow-hidden">
                        <img
                        className="mx-auto h-[26rem] lg:h-[20rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        src={profile_2}
                        alt="woman"
                        loading="lazy"
                        width="640"
                        height="805"
                        />
                        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-green-500 group-hover:bg-green-600/90  translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                        <div>
                            <h4 className="text-xl font-semibold text-white">Pauleen Ann Dizon</h4>
                            <span className="block text-sm text-white">Researcher & Designer</span>
                        </div>
                        <p className="mt-8 text-white">Contact: <br/>  dizonpauleenanng@gmail.com</p>
                        </div>
                        
                    </div>
                    <div className="group h-[80%] lg:h-[80%] lg:w-[100%]  relative rounded-3xl  space-y-6 overflow-hidden">
                        <img
                        className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        src={profile_5}
                        alt="woman"
                        loading="lazy"
                        width="640"
                        height="805"
                        />
                        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-green-500 group-hover:bg-green-600/90 translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                        <div>
                            <h4 className="text-xl font-semibold  text-white">Aaron Divina</h4>
                            <span className="block text-sm text-white">Researcher & QA</span>
                        </div>
                        <p className="mt-8 text-white">Contact: <br/>  aaron.divina12@gmail.com</p>
                        </div>
                        
                    </div>
                    <div className="group h-[80%] lg:h-[80%] lg:w-[100%]  relative rounded-3xl  space-y-6 overflow-hidden">
                        <img
                        className="mx-auto h-[26rem] lg:h-[20rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        src={profile_3}
                        alt="woman"
                        loading="lazy"
                        width="640"
                        height="805"
                        />
                        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-green-500 group-hover:bg-green-600/90 translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                        <div>
                            <h4 className="text-xl font-semibold  text-white">Larren Kelly Dela Peña</h4>
                            <span className="block text-sm text-white">Researcher & QA</span>
                        </div>
                        <p className="mt-8 text-white">Contact: <br/>  thisislarren@gmail.com</p>
                        </div>
                        
                    </div>
                  
                    </div>
                </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default About