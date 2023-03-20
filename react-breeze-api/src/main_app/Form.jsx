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
    <div className='bg-gradient-to-l from-green-50/30 to-white pt-0 md:pt-16'>
        <form onSubmit={storePending} onKeyDown={(e) => checkKeyDown(e)} encType="multipart/form-data">
        <div className="w-full md:w-full lg:w-1/2  mx-auto mt-6 px-4 h-fit pb-20">
            {
                errors.business_name || errors.description || errors.type || errors.specialties || errors.category || errors.phone_number_one || errors.imagedata
                || errors.price_range || errors.operating_from || errors.operating_to || errors.open_from || errors.open_to || errors.service_options
                || errors.address || errors.latitude || errors.longitude || errors.town || errors.email
                ?  <div className='flex fixed bottom-5 w-4/5 md:w-1/4 lg:w-1/5 left-1/2 transform -translate-x-1/2 mx-auto bg-red-100/80 border-red-400 text-red-500 rounded-md shadow-sm shadow-gray-400 border md:py-2.5 md:px-6 py-1 px-4 md:text-xl md:font-semibold '><span className="text-red-400 text-sm">Please check previous page for errors</span></div> : <div></div>
            }
             {
                 currentPage == "first" &&  
                <FadeInOut show={ currentPage == "first"} duration={400}>
                <div className='lg:mt-14' id='privacy-container'>
                    <div>
                    <h1 className="mb-8 text-4xl px-3 font-extrabold  leading-none tracking-normal text-gray-900 md:text-5xl lg:text-6xl md:tracking-tight">
                            <span>Kapampangan Businesses:</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-cyan-500 lg:inline">Be a Part of Our Growing Directory</span> <span></span>
                    </h1>
                    <div className='p-2 mt-2 flex justify-end mr-4 lg:mt-4 lg:mr-20'>
                            {
                                user ?  
                                <button  type="button" onClick={() => {nextPage('second')}} className='h-fit text-white bg-green-500 hover:bg-green-400 font-medium rounded-md text-sm lg:text-base lg:px-6 px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-500'>
                                    Get Started
                                </button> :
                                <button  type="button" onClick={openLoginModal} className='h-fit text-white bg-green-500 hover:bg-green-400 font-medium rounded-md text-sm lg:px-6 lg:text-base px-5 py-2   text-center mr-2 active:scale-95 transition-all ease-out duration-500'>
                                    Get Started
                                </button>
                            }
                    </div>
                    <FadeInOut show={ currentPage == "first"} duration={600}>
                    <div>
                        <div className="flex items-center justify-center pb-10">
                            <svg className="text-blue-600 w-5/6"  xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="100%" height="100%" viewBox="0 0 832.20604 500.35625" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M227.31663,699.06c-.05567-.24512-5.44-24.79785,5.55615-45.19043,10.99609-20.39166,34.46826-29.38477,34.7041-29.47363l1.07275-.40235.25342,1.11817c.05566.24511,5.43994,24.79785-5.55615,45.19043-10.99561,20.39166-34.46826,29.38476-34.7041,29.47363l-1.07325.40234Zm39.86181-72.33783c-4.70166,2.02246-23.25781,10.874-32.54492,28.09668-9.28809,17.22461-6.48584,37.59375-5.59229,42.63086,4.69971-2.01758,23.24854-10.85547,32.54493-28.09668C270.87375,652.1293,268.07248,631.76211,267.17844,626.72213Z" transform="translate(-183.89698 -199.82188)" fill="#f1f1f1"></path><path d="M254.94373,663.14907c-19.76056,11.88861-27.371,35.50269-27.371,35.50269s24.42779,4.3388,44.18835-7.54981,27.371-35.50268,27.371-35.50268S274.70429,651.26046,254.94373,663.14907Z" transform="translate(-183.89698 -199.82188)" fill="#f1f1f1"></path><path d="M554.19262,472.56441a10.83726,10.83726,0,0,0-10.47951-12.89681l-9.15082-23.01244-15.3409,2.15012,13.37918,32.31652a10.896,10.896,0,0,0,21.59205,1.44261Z" transform="translate(-183.89698 -199.82188)" fill="#9f616a"></path><path d="M525.92964,464.47855l-4.75346-11.3351-29.62149-56.38484,1.61062-104.33228.30923-.041c18.954-2.50423,31.77818,84.82857,32.315,88.54784l18.71553,64.00809,4.45518,14.10849Z" transform="translate(-183.89698 -199.82188)" fill="currentColor"></path><polygon points="296.518 484.658 310.92 484.657 317.771 429.106 296.515 429.107 296.518 484.658" fill="#9f616a"></polygon><path d="M476.741,679.77772l28.363-.00114h.00115a18.07611,18.07611,0,0,1,18.07514,18.07485v.58737l-46.43846.00172Z" transform="translate(-183.89698 -199.82188)" fill="#2f2e41"></path><polygon points="164.095 462.715 175.912 470.949 213.294 429.291 195.854 417.138 164.095 462.715" fill="#9f616a"></polygon><path d="M347.66667,656.57887l23.27053,16.21554.00094.00065a18.07611,18.07611,0,0,1,4.49515,25.16356l-.33583.4819L336.997,671.89089Z" transform="translate(-183.89698 -199.82188)" fill="#2f2e41"></path><path d="M472.49955,671.42229l-.62235-104.21007L462.81533,501.686,445.9204,559.31028l-.03285.04733-61.225,88.88515-23.82325-12.07048.13051-.31012c1.45591-3.46284,35.76216-84.7936,44.98333-84.7936a4.97985,4.97985,0,0,0,4.24236-1.86422c2.70645-3.614.50244-11.28284.47983-11.35983-2.63969-10.94588,3.99742-14.67362,5.3193-15.296l3.55555-73.397.36857.02543,96.38955,6.76108-4.04386,91.76589-8.69878,120.23153-.29881.03391Z" transform="translate(-183.89698 -199.82188)" fill="#2f2e41"></path><path d="M517.781,472.20177l-.41678-.03391L413.69966,463.8117l.25589-34.29989,5.07382-89.55836.02878-.06216,20.66277-44.85865,14.6473-6.63252,21.37023-1.12461.0521.01307,19.50283,4.83187,20.288,145.63873Z" transform="translate(-183.89698 -199.82188)" fill="currentColor"></path><circle cx="465.99537" cy="251.83011" r="27.29373" transform="translate(-247.58414 54.55847) rotate(-28.66324)" fill="#9f616a"></circle><path d="M438.54633,258.68144v-10.6343s-8.576-10.10035.85759-12.64464c0,0,2.57278-25.44285,24.87023-13.56952,0,0,30.87339-5.08857,27.443,12.72143,0,0,7.71835-4.64962,5.14556,7.22372L491.88689,260.904s2.40306-12.634-5.31529-14.33024l-4.288-2.54429s-12.00632,11.87334-30.0158-2.54428c0,0-7.71834-1.84217-6.86075,5.79069S438.54633,258.68144,438.54633,258.68144Z" transform="translate(-183.89698 -199.82188)" fill="#2f2e41"></path><path d="M463.15358,446.58748a10.83729,10.83729,0,0,0-12.62376-10.80688l-13.13193-20.99672-14.706,4.86818,18.96129,29.391a10.896,10.896,0,0,0,21.50042-2.45556Z" transform="translate(-183.89698 -199.82188)" fill="#9f616a"></path><path d="M429.23633,439.96884l-23.75756-48.2346.021-.11726c.09572-.53405,9.659-53.63372,16.97316-73.15156,7.36048-19.64146,17.43552-23.585,17.86078-23.74325l.21263-.07912,9.03379,8.66522-12.51394,83.527,13.489,40.28392Z" transform="translate(-183.89698 -199.82188)" fill="currentColor"></path><rect x="786.20604" width="46" height="46" fill="#f1f1f1"></rect><rect x="426.20604" y="179" width="46" height="46" fill="#f1f1f1"></rect><path d="M635.92184,404.66451H999.59653V220.55582H635.92184Z" transform="translate(-183.89698 -199.82188)" fill="#fff"></path><path d="M1002.59656,407.66458H632.92176V217.5557h369.6748Zm-363.6748-6h357.6748V223.5557H638.92176Z" transform="translate(-183.89698 -199.82188)" fill="#e5e5e5"></path><rect x="495.67778" y="85.31585" width="279.80647" height="9.27916" fill="#e5e5e5"></rect><rect x="495.67778" y="107.81893" width="279.80647" height="9.27916" fill="#e5e5e5"></rect><rect x="723.48425" y="141.04542" width="52" height="8.05267" fill="currentColor"></rect><path d="M565.897,700.13773h-381a1,1,0,1,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-183.89698 -199.82188)" fill="#cbcbcb"></path></svg>
                        </div>
                    </div>
                    </FadeInOut>

                    </div>
                  
                </div>
            </FadeInOut>
            }

            {
                 currentPage == "second" &&  
                <FadeInOut show={ currentPage == "second"} duration={400}>
                <div className='md:w-10/12 md:mx-auto bg-white p-2 lg:p-8 lg:px-12 lg:rounded-xl lg:shadow-2xl' id='privacy-container'>
                <h5 className='text-lg md:text-xl lg:text-2xl font-semibold px-2'>Privacy and Concerns for Minindal, a Kapampangan Cuisine Directory</h5>
                <div  className='p-2 mt-1 text-gray-800 text-[16px] lg:text-base'>
                        <p className=''>
                        At Minindal, we are committed to protecting the privacy of our users while providing them with the best possible experience in discovering and supporting Kapampangan cuisine businesses in our community. 
                        This Privacy and Concerns statement outlines how we collect, use, and protect the information of our users.
                        </p>
                        <br />

                        <p>
                            <span className='font-medium text-black'>Information Collection and Use</span>
                            <br />
                            When you use Minindal, we may collect personal information, such as your name, email address, and location, 
                            in order to provide you with a personalized experience and improve our services. 
                            We will only use this information to communicate with you, respond to your inquiries, 
                            and improve our web app. 
                            We do not sell or share your personal information with third parties.
                        </p>
                        <br />
                        <p>
                            <span className='font-medium text-black'>Data Security</span>
                           <br/>
                            Minindal uses industry-standard security measures to protect the information of our users from unauthorized access, disclosure, or destruction. 
                            However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                        </p>
                        <br />
                        <p>
                            <span className='font-medium text-black'> Contact Us</span>
                            <br />
                            If you have any questions or concerns about this Privacy and Concerns statement or our privacy practices, 
                            please contact us at ckskapampangancuisine.com.
                        </p>
                    </div>
                    <div className="flex items-center px-2 mt-3 lg:mt-6" >
                        <input id="default-checkbox" type="checkbox" defaultChecked={read} value="" onChange={handleRead} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"></input>
                        <label htmlFor="link-radio" className="ml-2 text-[15px] lg:text-base font-medium text-gray-800">I have read the privacy and concern.</label>
                    </div>
                <div className='p-2 mt-2 flex justify-between lg:mt-4'>
                {
                    read? 
                        <button  type="button" onClick={() => {nextPage('third')}} className='h-fit text-white bg-green-500 hover:bg-green-400 font-medium rounded-md text-sm lg:text-base lg:px-6 px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-500'>
                                Start
                        </button>
                    :
                    <button  type="button" disabled className='h-fit text-white bg-green-500/40  font-medium rounded-md text-sm lg:text-base lg:px-6 px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-500'>
                        Start
                    </button>
                }       
                </div>
            </div>
            </FadeInOut>
            }
            {
                 currentPage == "third" &&  
                <FadeInOut show={ currentPage == "third"} duration={400}>
                <div className='bg-white p-2 lg:p-8 lg:px-12 lg:rounded-xl lg:shadow-2xl'>
                    <div className=' md:w-10/12 md:mx-auto lg:w-full' id='form-container'>
                    <h5 className='text-base md:text-xl lg:text-2xl font-semibold px-2 mb-4'>Basic Information</h5>
                    {/* //content */}
                    <div  className='p-2 mt-1 text-gray-700 text-sm space-y-2 '>
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
                                        <option value="Deserts">Desserts</option>
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
                                    <div className="flex flex-wrap gap-3 lg:gap-4 text-sm">
                                        <div className="flex">
                                            <input type="checkbox" id="dine" value="Dine-In" className="peer hidden" onClick={handleOptions} />
                                            <label htmlFor="dine" className="flex items-center gap-2 text-sm md:text-base select-none cursor-pointer rounded-md border border-gray-300
                                            p-1.5 px-4  text-gray-600 bg-gray-100 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900"> 
                                            {
                                                o_options.indexOf("Dine-In") > -1 ? 
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-700">
                                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                                </svg>:
                                                <div></div>
                                            }
                                            
                                            Dine-In </label>
                                        </div>
                                        <div className="flex">
                                            <input type="checkbox" id="take-out" className="peer hidden" value="Take-Out"  onClick={handleOptions} />
                                            <label htmlFor="take-out" className="flex items-center gap-2 text-sm md:text-base select-none cursor-pointer rounded-md border border-gray-300
                                            p-1.5 px-4  text-gray-600 bg-gray-100 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 "> 
                                            {
                                                o_options.indexOf("Take-Out") > -1 ? 
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-700">
                                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                                </svg> :
                                                <div></div>
                                            }

                                            Take-Out </label>
                                        </div>
                                        <div className="flex">
                                            <input type="checkbox" id="delivery" className="peer hidden" value="Delivery"  onClick={handleOptions} />
                                            <label htmlFor="delivery" className="flex items-center gap-2 text-sm md:text-base select-none cursor-pointer rounded-md border border-gray-300
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
                                        {/* <div className="flex">
                                            <input type="checkbox" id="o_order" value="Online Ordering" className="peer hidden"  onClick={handleOptions} />
                                            <label htmlFor="o_order" className="flex items-center text-sm md:text-base gap-2 select-none cursor-pointer rounded-md border border-gray-300
                                            p-1.5 px-4  text-gray-600 bg-gray-100 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 "> 
                                            {
                                                o_options.indexOf("Online Ordering") > -1 ?
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-700">
                                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                                </svg> :
                                                <div></div>
                                            }
                                            Online Ordering</label>
                                        </div> */}
                                        <div className="flex">
                                            <input type="checkbox" id="pasalubong" value="Pasalubong Center" className="peer hidden"  onClick={handleOptions} />
                                            <label htmlFor="pasalubong" className="flex items-center text-sm md:text-base gap-2 select-none cursor-pointer rounded-md border border-gray-300
                                            p-1.5 px-4  text-gray-600 bg-gray-100 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 "> 
                                            {
                                                o_options.indexOf("Pasalubong Center") > -1 ?
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-700">
                                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                                </svg> :
                                                <div></div>
                                            }
                                            Pasalubong Center</label>
                                        </div>
                                    
                                    </div>
                                </div>
                                {errors?.service_options && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.service_options[0]}</span></div>)}
                            </div>
                            
                            <br />
                        </div>
                    </div>
                    
                    <div className='p-2 mt-2 flex justify-between py-4 pb-10 md:w-10/12 md:mx-auto lg:w-full'>
                        <button  type="button" onClick={() => {prevPage('second')}} className='h-fit text-white bg-gray-400/80 border hover:bg-gray-200 font-medium rounded-md text-sm lg:text-sm lg:py-2.5 lg:px-6 px-5 p-1.5 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>
                            Back
                        </button>
                        <button  type="button" onClick={() => {nextPage('fourth')}} className='h-fit text-white bg-green-500 hover:bg-green-400 font-medium rounded-md text-sm px-5 lg:text-sm lg:py-2.5 lg:px-6  p-1.5 text-center mr-2 active:scale-95 transition-all ease-out duration-500'>
                            Next
                        </button>
                    </div>
                
                </div>
            </FadeInOut>
            }
            {
                 currentPage == "fourth" &&  
                <FadeInOut show={ currentPage == "fourth"} duration={400}>
                <div className='bg-white p-2 lg:p-8 lg:px-12 lg:rounded-xl lg:shadow-2xl'>


                    <div className='lg:mt-14 md:w-10/12 md:mx-auto lg:w-full' id='form-container'>
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
                    <div className='mt-8 md:w-10/12 md:mx-auto lg:w-full' id='form-container'>
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
                    
                    <div className='p-2 mt-2 flex justify-between py-4 pb-10 md:w-10/12 md:mx-auto lg:w-full'>
                        <button  type="button" onClick={() => {prevPage('third')}} className='h-fit text-white bg-gray-400/80 border hover:bg-gray-200 font-medium rounded-md text-sm px-5 p-1.5 lg:text-sm lg:py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>
                            Back
                        </button>
                        <button  type="button" onClick={() => {nextPage('fifth')}} className='h-fit text-white bg-green-500 hover:bg-green-400 font-medium rounded-md text-sm px-5 p-1.5 lg:text-sm lg:py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-500'>
                            Next
                        </button>
                    </div>
                </div>
            </FadeInOut>
            }
            {
                 currentPage == "fifth" &&  
                <FadeInOut show={ currentPage == "fifth"} duration={400}>
                <div className='bg-white p-2 lg:p-8 lg:px-12 lg:rounded-xl lg:shadow-2xl'>

                    <div className='lg:mt-14 md:w-10/12 md:mx-auto lg:w-full' id='form-container'>
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
                    <div className='p-2 mt-2 flex justify-between py-4 pb-10 md:w-10/12 md:mx-auto lg:w-full'>
                        <button  type="button" onClick={() => {prevPage('fourth')}} className='h-fit text-white bg-gray-400/80 border hover:bg-gray-200 font-medium rounded-md text-sm px-5 p-1.5 lg:text-sm lg:py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-300'>
                            Back
                        </button>
                        <button  type="submit" className='h-fit text-white bg-green-500 hover:bg-green-400 font-medium rounded-md text-sm px-5 p-1.5 lg:text-sm lg:py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-500'>
                            Submit
                        </button>
                    </div>
                </div>
            </FadeInOut>
            }
      </div>
      </form>
      {
        loginShow && <Login />
      }
     

      {/* //form */}
  
    </div>
  )
}
export default Form
