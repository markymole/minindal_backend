import React, {useEffect, useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import FadeInOut from '../animation/fade';
import Login from './Login';
import RecordsContext from '../context/RecordsContext';
import useAuthContext from '../context/Authentication';
import AppContext from '../context/Context';

import SearchMap from '../main_components/SearchMap';
import hero from '../assets/help.jpg';
const Form = () => 
{      
    //data fetch from the api
    const { 
        errors,
        setErrors, 
        storeRecord, 
        towns, 
        getTowns,
        formValues,
        onChange,
        setFormValues,
        tags,
        handleKeyDown,
        checkKeyDown,
        removeTag,
        o_options,
        handleKeyClick,
        spinner,
        storePending,
        result
    } = useContext(RecordsContext);

    const { loginShow, openLoginModal } = useContext(AppContext);

    const {user} = useAuthContext();

    useEffect(() => {
        setErrors({});
        getTowns();
    }, []);

    const [imagedata, setImageData] = useState("");

    const handleFileChange = files => {
        setImageData(files[0]);
        setFormValues({ ...formValues, imagedata: files[0]});
    };

    const handleOptions = (e) => {
        handleKeyClick(e.target.value); 
    };

    const getStarted =() =>{
        console.log('start!');
    }

    const [currentPage, setCurrent] = useState('first');
    const [read, setRead] = useState(false);

    
    function nextPage(value){
        setCurrent(value);
    }

    function prevPage(value){
        setCurrent(value)
    }

    function handleRead(){
        setRead(!read);
    }
    
  return (
    //change to paginated form
    <div className=''>
        <form onSubmit={storePending} onKeyDown={(e) => checkKeyDown(e)} encType="multipart/form-data">
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto mt-6 px-4 h-fit">
            {
                currentPage == "first" &&   
                <FadeInOut show={currentPage == "first"} duration={500}>
                <div id='starter-container' className='lg:mt-14'>
                    {/* <img src={hero} alt="" className='w-full h-[25vh] object-cover'/> */}
                    <h5 className='text-2xl md:text-3xl lg:text-4xl font-semibold px-2 w-4/5'>Help us build a better local business directory!</h5>
                    <div  className='p-2 mt-1 text-gray-700 text-[15px] lg:text-base overflow-y-scroll h-[60vh]'>
                        <p className=''>
                        Welcome to our community! We are dedicated to building a comprehensive directory of Kapampangan cuisine businesses in our community.
                        Our goal is to make it easy for people to discover and support local Kapampangan cuisine businesses.
                        </p>
                        <br />
                        <p>
                        As lovers of Kapampangan cuisine, 
                        we know that our community is home to some of the best Kapampangan cuisine businesses around. 
                        If you know of any Kapampangan cuisine businesses that should be on our list, 
                        we would be thrilled if you could add them to our web application.
                        <br /> <br />
                        Adding a Kapampangan cuisine business is easy and only takes a few minutes.
                        Simply fill out the form on our website with the business's name, address, contact information, 
                        and any other details like the location of the business to help people to find them. 
                        We also encourage you to include photos of the establishment and their Kapampangan dishes on review to entice more people to visit.                    </p>
                        <br />
                        <p className='text-gray-900 font-medium'>Our objectives in building this directory are:</p>
                        <br />
                        <ul className="space-y-2 list-disc list-inside px-2">
                            <li>To create web app for people looking for Kapampangan cuisine businesses in our community</li>
                            <li>To make it easy for people to find Kapampangan cuisine businesses near them</li>
                            <li>To promote the unique flavors and culinary heritage of Kapampangan cuisine to a wider audience</li>
                            <li>To support local Kapampangan cuisine businesses by increasing their visibility and customer base</li>
                        </ul>

                        <br />
                        <p>We believe that by working together, we can build a better directory of Kapampangan cuisine businesses that truly reflects the richness of our community. Thank you for considering our invitation, and we look forward to seeing your contributions on our website soon.</p>
                        <br />
                        <p className='font-medium text-gray-900'>Center for Kapampangan Studies and the Minindal Team</p>
                    </div>
                    {/* <div class="flex items-center px-4">
                        <input id="link-radio" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label for="link-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Radio button with a <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">link inside</a>.</label>
                    </div> */}
                <div className='p-2 mt-3' id='action'>
                    {
                        user? 
                        <button onClick={() => {nextPage('second')}} className='h-fit text-white bg-green-500 hover:bg-green-400 font-medium rounded-md text-[13px] lg:text-sm px-5 py-2 lg:py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-500'>
                            Get Started
                        </button>:
                        <button onClick={openLoginModal} className='h-fit text-white bg-green-500 hover:bg-green-400 font-medium rounded-md text-[13px] lg:text-sm px-5 py-2 lg:py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-500'>
                            Get Started
                        </button>
                    }
                    
                </div>
                <div>
                </div>
                
            </div>
            </FadeInOut >
            }
            {
                 currentPage == "second" &&  
                <FadeInOut show={ currentPage == "second"} duration={400}>
                <div className='lg:mt-14' id='privacy-container'>
                
                <h5 className='text-base md:text-xl lg:text-2xl font-semibold px-2'>Privacy and Concerns for Minindal, a Kapampangan Cuisine Directory</h5>
                <div  className='p-2 mt-1 text-gray-700 text-[15px]  lg:text-base overflow-y-scroll h-[60vh]'>
                        <p className=''>
                        At Minindal, we are committed to protecting the privacy of our users while providing them with the best possible experience in discovering and supporting Kapampangan cuisine businesses in our community. 
                        This Privacy and Concerns statement outlines how we collect, use, and protect the information of our users.
                        </p>
                        <br />

                        <p>
                            <span className='font-medium text-gray-900'>Information Collection and Use</span>
                            <br />
                            When you use Minindal, we may collect personal information, such as your name, email address, and location, 
                            in order to provide you with a personalized experience and improve our services. 
                            We will only use this information to communicate with you, respond to your inquiries, 
                            and improve our web app. 
                            We do not sell or share your personal information with third parties.
                        </p>
                        <br />
                        <p>
                            <span className='font-medium text-gray-900'>Data Security</span>
                           <br/>
                            Minindal uses industry-standard security measures to protect the information of our users from unauthorized access, disclosure, or destruction. 
                            However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                        </p>
                        <br />
                        <p>
                            <span className='font-medium text-gray-900'> Contact Us</span>
                            <br />
                            If you have any questions or concerns about this Privacy and Concerns statement or our privacy practices, 
                            please contact us at kapampangancenter@gmail.com.
                        </p>
                    </div>
                    <div className="flex items-center px-2 mt-3 lg:mt-6" >
                        <input id="default-checkbox" type="checkbox" defaultChecked={read} value="" onChange={handleRead} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"></input>
                        <label htmlFor="link-radio" className="ml-2 text-sm lg:text-base font-medium text-gray-900 dark:text-gray-300">I have read the privacy and concern.</label>
                    </div>
                <div className='p-2 mt-2 flex justify-between lg:mt-4' id='action'>
                    <button onClick={() => {prevPage('first')}} className='h-fit text-white bg-gray-400/80 border hover:bg-gray-200 font-medium rounded-md text-[13px] lg:text-sm lg:py-2.5 px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>
                        Back
                    </button>
                    {read?
                    <button onClick={() => {nextPage('third')}} className='h-fit text-white bg-green-500 hover:bg-green-400 font-medium rounded-md text-sm px-5 py-2 lg:text-sm lg:py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-500'>
                        Next
                    </button>:
                    <button disabled className='h-fit text-white bg-green-500/40  font-medium rounded-md text-sm lg:text-sm lg:py-2.5 px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-500'>
                        Next
                    </button>
                    }
                    
                </div>
            </div>
            </FadeInOut>
            }
            {
                 currentPage == "third" &&  
                <FadeInOut show={ currentPage == "third"} duration={400}>
                <div className='lg:mt-14' id='form-container'>
                <h5 className='text-base md:text-xl lg:text-2xl font-semibold px-2 mb-4'>Basic Information</h5>
                {/* //content */}
                <div  className='p-2 mt-1 text-gray-700 text-sm space-y-2'>
                        <div>
                            <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Business Name</label>
                            <input type="text" name="business_name" id="business_name" placeholder="" value={formValues["business_name"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm md:text-base rounded-lg block w-full p-1.5" required=""></input>
                            {errors?.business_name && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.business_name[0]}</span></div>)}
                        </div>
                        <div>
                            <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Description</label>                    
                            <textarea type="text" name='description' id="description" rows="4" value={formValues["description"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm md:text-base rounded-lg block w-full p-1.5 min-h-max" placeholder="Business Description"></textarea>

                            {errors?.description && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.description[0]}</span></div>)}
                        </div>
                        <br />
                        <div className=''>
                            <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Specialties</label>
                            <div className='border border-gray-300 bg-gray-50  p-0.5 rounded-md w-full flex items-center flex-wrap gap-2'>
                                        {
                                            tags.map((tag, index) => (
                                                <div className='flex items-center gap-2 p-1 bg-gray-300 rounded-sm'  key={index}>
                                                <span className='text-sm'>{tag}</span>
                                                <svg onClick={() => removeTag(index)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 cursor-pointer">
                                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                                </svg>
                                            </div> 
                                            ))
                                        }
                                        <input onKeyDown={handleKeyDown} className="border-collapse outline-0 text-sm grow p-1.5" type="text" placeholder='Type the food name and press enter'/>
                            </div>
                            {errors?.specialties && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.specialties[0]}</span></div>)}
                        </div>
                        
                        <div className='flex flex-col md:flex-row justify-between gap-4 pt-2'>
                        <div className='w-full md:w-1/2'>
                            <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Type</label>
                                <select id="type" name="type" type="text" placeholder='select type' value={formValues["type"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" required>
                                    <option defaultValue>Select Type</option>
                                    <option value="Authentic">Authentic</option>
                                    <option value="Modern">Modern</option>
                                </select>
                            {errors?.type && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.type[0]}</span></div>)}
                        </div>
                        <div className='w-full md:w-1/2'>
                            <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Category</label>
                                <select id="category" name="category" type="text" placeholder='select category' value={formValues["category"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm md:text-base  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" required>
                                    <option defaultValue>Select Category</option>
                                    <option value="Traditional">Traditional</option>
                                    <option value="Pastries">Pastries</option>
                                    <option value="Deserts">Deserts</option>
                                    <option value="Exotic">Exotic</option>

                                </select>
                            {errors?.category && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.category[0]}</span></div>)}
                        </div>

                        <div className='w-full md:w-1/2'>
                            <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Price Range</label>
                                <select id="price_range" name="price_range" type="text" value={formValues["price_range"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm md:text-base  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" required>
                                    <option defaultValue>Select Price Range</option>
                                    <option value="0">₱ 0 - ₱ 0</option>
                                    <option value="100">₱ 0 - ₱ 100</option>
                                    <option value="200">₱ 0 - ₱ 200</option>
                                    <option value="300">₱ 0 - ₱ 300</option>
                                    <option value="400">₱ 0 - ₱ 400</option>
                                    <option value="500">₱ 0 - ₱ 500</option>
                                    <option value="1000">₱ 0 - ₱ 1000</option>
                                </select>
                            {errors?.price_range && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.price_range[0]}</span></div>)}
                        </div>
                        </div>
                        <br />
                        <div className='flex flex-col md:flex-row gap-4 lg:gap-20'>
                        <div className='w-full md:w-1/2'>
                            <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Operating Hours</label>
                                <div className='flex gap-3  items-center w-full'>
                                
                                    <input className='border w-full text-gray-600 bg-gray-50  border-gray-300 p-1.5 px-4 rounded-md text-sm md:text-base' type="time" id="operating_from" name="operating_from" value={formValues["operating_from"]} onChange={onChange}></input>  
                                    <p>to</p> 
                                    <input className='border w-full text-gray-600 bg-gray-50  border-gray-300 p-1.5 px-4 rounded-md text-sm md:text-base' type="time" id="operating_to" name="operating_to" value={formValues["operating_to"]} onChange={onChange}></input>     
                                </div>
                                {errors?.hours_from && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.hours_from[0]}</span></div>)}

                        </div>
                        <div className='w-full md:w-1/2'>
                            <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Days Open</label>
                                <div className='flex gap-3 items-center'>
                                    <select id="open_from" name="open_from" type="text" value={formValues["open_from"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" required>
                                        <option defaultValue>Select From</option>
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                        <option value="Saturday">Saturday</option>
                                        <option value="Sunday">Sunday</option>
                                    </select>                            
                                    <p>to</p> 
                                    <select id="open_to" name="open_to" type="text" value={formValues["open_to"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" required>
                                        <option defaultValue>Select From</option>
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                        <option value="Saturday">Saturday</option>
                                        <option value="Sunday">Sunday</option>
                                    </select>                        
                                    </div>
                                    {errors?.open_from && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.open_from[0]}</span></div>)}
                        </div>
                        </div>
                        <br />
                        <div className=''>
                            <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Order Options (Click all application options)</label>
                            <div className='flex gap-2'>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="flex">
                                        <input type="checkbox" id="dine" value="Walk In" className="peer hidden" onClick={handleOptions} />
                                        <label htmlFor="dine" className="flex items-center gap-2 text-sm md:text-base select-none cursor-pointer rounded-md border border-gray-300
                                        p-1.5 px-4  text-gray-600 bg-gray-100 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900"> 
                                        {
                                            o_options.indexOf("Walk In") > -1 ? 
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-700">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                            </svg>:
                                            <div></div>
                                        }
                                        
                                        Walk In </label>
                                    </div>
                                    <div className="flex">
                                        <input type="checkbox" id="reservation" value="Reservation" className="peer hidden"  onClick={handleOptions} />
                                        <label htmlFor="reservation" className="flex items-center text-sm md:text-base gap-2 select-none cursor-pointer rounded-md border border-gray-300
                                        p-1.5 px-4  text-gray-600 bg-gray-100 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 "> 
                                        {
                                            o_options.indexOf("Reservation") > -1 ?
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-700">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                            </svg> :
                                            <div></div>
                                        }
                                        Reservation</label>
                                    </div>
                                    <div className="flex">
                                        <input type="checkbox" id="order" className="peer hidden" value="Delivery"  onClick={handleOptions} />
                                        <label htmlFor="order" className="flex items-center gap-2 text-sm md:text-base select-none cursor-pointer rounded-md border border-gray-300
                                        p-1.5 px-4  text-gray-600 bg-gray-100 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 "> 
                                        {
                                            o_options.indexOf("Delivery") > -1 ? 
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-700">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                            </svg> :
                                            <div></div>
                                        }

                                        Delivery </label>
                                    </div>
                                </div>
                            </div>
                            {errors?.service_options && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.service_options[0]}</span></div>)}
                        </div>
                        
                        <br />
                    </div>
                </div>
                   
                <div className='p-2 mt-2 flex justify-between py-4 pb-10' id='action'>
                    <button onClick={() => {prevPage('second')}} className='h-fit text-white bg-gray-400/80 border hover:bg-gray-200 font-medium rounded-md text-sm lg:text-sm lg:py-2.5 px-5 p-1.5 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>
                        Back
                    </button>
                    <button onClick={() => {nextPage('fourth')}} className='h-fit text-white bg-green-500 hover:bg-green-400 font-medium rounded-md text-sm px-5 lg:text-sm lg:py-2.5 p-1.5 text-center mr-2 active:scale-95 transition-all ease-out duration-500'>
                        Next
                    </button>
                </div>
            </FadeInOut>
            }
            {
                 currentPage == "fourth" &&  
                <FadeInOut show={ currentPage == "fourth"} duration={400}>
                <div className='lg:mt-14' id='form-container'>
                <h5 className='text-base md:text-xl lg:text-2xl font-semibold px-2 mb-4'>Contact Information</h5>
                    {/* //content */}
                    <div  className='p-2 mt-1 text-gray-700 text-sm space-y-2'>
                        <div className='flex justify-between gap-6'>
                            <div className='w-1/2'>
                                <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="" value={formValues["email"]} onChange={onChange}  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm md:text-base rounded-lg block w-full p-1.5" ></input>
                                {errors?.email && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.email[0]}</span></div>)}
                            </div>
                            <div className='w-1/2'>
                                <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Social Media Link</label>
                                <input type="text" name="socials" id="socials" placeholder="" value={formValues["socials"]} onChange={onChange}  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm md:text-base rounded-lg block w-full p-1.5" ></input>
                                {errors?.socials && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.socials[0]}</span></div>)}
                            </div>
                        </div>
                        <div className='flex justify-between gap-6'>
                            <div className='w-1/2'>
                                <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Phone Number</label>
                                <input type="text" name="phone_number_one" id="phone_number_one" placeholder="" maxLength="11" value={formValues["phone_number_one"]} onChange={onChange}  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm md:text-base rounded-lg block w-full p-1.5"></input>
                                {errors?.phone_number_one && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.phone_number_one[0]}</span></div>)}
                            </div>
                            <div className='w-1/2'>
                                <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Phone Number</label>
                                <input type="text" name="phone_number_two" id="phone_number_two" placeholder="" maxLength="11" value={formValues["phone_number_two"]} onChange={onChange}  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm md:text-base rounded-lg block w-full p-1.5"></input>
                                {errors?.phone_number_two && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.phone_number_two[0]}</span></div>)}
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mt-8' id='form-container'>
                <h5 className='text-base md:text-xl lg:text-2xl font-semibold px-2 mb-4'>Images</h5>
                    {/* //content */}
                    <div  className='p-2 mt-1 text-gray-700 text-sm space-y-2'>
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="cover_image" className="flex flex-col items-center justify-center w-full h-fit border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100">
                                {
                                    (imagedata == 0) ?  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div> :  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">{imagedata.name}</span> </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                }
                                
                                <input id="cover_image" type="file" name='cover_image' className="hidden" onChange={e => handleFileChange(e.target.files)} />
                                {errors?.imagedata && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.imagedata[0]}</span></div>)}
                            </label>
                        </div> 

                    </div>
                </div>
                
                <div className='p-2 mt-2 flex justify-between py-4 pb-10' id='action'>
                    <button onClick={() => {prevPage('third')}} className='h-fit text-white bg-gray-400/80 border hover:bg-gray-200 font-medium rounded-md text-sm px-5 p-1.5 lg:text-sm lg:py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>
                        Back
                    </button>
                    <button onClick={() => {nextPage('fifth')}} className='h-fit text-white bg-green-500 hover:bg-green-400 font-medium rounded-md text-sm px-5 p-1.5 lg:text-sm lg:py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-500'>
                        Next
                    </button>
                </div>
            </FadeInOut>
            }
            {
                 currentPage == "fifth" &&  
                <FadeInOut show={ currentPage == "fifth"} duration={400}>
                <div className='lg:mt-14' id='form-container'>
                <h5 className='text-base md:text-xl lg:text-2xl font-semibold px-2 mb-4'>Address & Location</h5>
                    {/* //content */}
                    <div  className='p-2 mt-1 text-gray-700 text-sm space-y-2'>
                        <div className='h-[50vh] w-full'>
                            <SearchMap/>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61619.49162409072!2d120.52459956806948!3d15.146355401248716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f286eed2e61f%3A0x3ded82248ad9b436!2sAngeles%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1677332696943!5m2!1sen!2sph" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>         */}
                        </div>
                        <div>
                                <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Town</label>
                                <select id="town" name="town" type="text" value={formValues["town"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" required>
                                    <option defaultValue>Select City</option>
                                    {towns.map((town) => {
                                        return(
                                            <option key={town.id} value={town.town}>{town.town}</option>
                                        );
                                    })}
                                </select>
                                {errors?.town && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.town[0]}</span></div>)}
                        </div>
                        <div>
                                <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Address</label>
                                <input type="text" name="address" id="address" placeholder="" value={formValues["address"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm md:text-base rounded-lg block w-full p-1.5  " required=""></input>
                                {errors?.address && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.address[0]}</span></div>)}
                        </div>
                        <div className='flex justify-between gap-6'>
                            <div className='w-1/2'>
                                <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Latitude</label>
                                <input type="number" name="latitude" id="latitude" placeholder="" value={formValues["latitude"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm md:text-base rounded-lg block w-full p-1.5  " required=""></input>
                                {errors?.latitude && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.latitude[0]}</span></div>)}
                            </div>
                            <div className='w-1/2'>
                                <label className="text-sm md:text-sm lg:text-base font-medium text-gray-700 block mb-2">Longitude</label>
                                <input type="number" name="longitude" id="longitude" placeholder="" value={formValues["longitude"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm md:text-base rounded-lg block w-full p-1.5  " required=""></input>
                                {errors?.longitude && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.longitude[0]}</span></div>)}
                            </div>
                        </div>

                    </div>
                </div>
                <div className='p-2 mt-2 flex justify-between py-4 pb-10' id='action'>
                    <button onClick={() => {prevPage('fourth')}} className='h-fit text-white bg-gray-400/80 border hover:bg-gray-200 font-medium rounded-md text-sm px-5 p-1.5 lg:text-sm lg:py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>
                        Back
                    </button>
                    <button  type="submit" className='h-fit text-white bg-green-500 hover:bg-green-400 font-medium rounded-md text-sm px-5 p-1.5 lg:text-sm lg:py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-500'>
                        Submit
                    </button>
                </div>
            </FadeInOut>
            }
      </div>
      </form>
      {
            loginShow && <Login id='loginModal'/>
        }

      {/* //form */}
  
    </div>
  )
}
export default Form
