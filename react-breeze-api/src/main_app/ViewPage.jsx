import React, {useEffect, useState, useRef, useContext} from 'react'
import { ImageGroup, Image } from 'react-fullscreen-image'
import { Link, useParams } from 'react-router-dom'
import FadeInOut from '../animation/fade'
import Login from './Login'
import RecordsContext from '../context/RecordsContext'
import def_profile from '../assets/def_user.png';
import def_profile2 from '../assets/def_user_2.png';
import useAuthContext from '../context/Authentication';
import AppContext from '../context/Context';
import ViewMap from '../main_components/ViewMap'

const ViewPage = () => {
    const {
        formValues,
        setErrors,
        getRecord,
        reviews,
        getReviews,
        tags,
        loading,
        o_options,

    } = useContext(RecordsContext);

    
    useEffect(() => {
        getRecord(id);
        setErrors({});
        getReviews();
    }, []);

    let { id } = useParams();
    const [rating, setRating] = useState(null);
    const [b_name, setBname] = useState('');
    const { user } = useAuthContext();

    const [star_rate, setRate] = useState('');
    // const [matchingReviews, setMatching ] = useState([]);

    const { loginShow, openLoginModal } = useContext(AppContext);

    const matchingReviews = reviews.filter((review) => {
        return review.business_name == formValues['business_name'];
    });

    const totalStars = matchingReviews.reduce((total, currentValue) => total = total + currentValue.star_rating,0);

    // function getStars(name, reviews) {
    //     let rating = 0;
   
    //     reviews.forEach(review => {
    //         review.reviews.filter(review => review.business_name == name).forEach(item => {
    //          rating += item.star_rating;
    //       });
    //     });
   
    //     return rating;
    //  }

    //  const totalStars = getStars(formValues['business_name'], reviews);

    
    // const handleClickScroll = () => {
    // const element = document.getElementById('review-section');
    // if (element) {
    //   // 👇 Will scroll smoothly to the top of the next section
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }
    // };

    if(loading) {
        return (
            <div className='h-screen'>
                <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2">
                    <div role="status">
                        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        )
      }

    

  return (
    <div>
   
        {/* mobile-view */}
        <div>
            <div className='w-full'>
                    {formValues['cover_image'] === '' || formValues['cover_image'] === null ? 
                        <div className='relative z-2'>
                            <div className="h-64 w-full bg-gradient-to-r from-neutral-500 to-zinc-400"></div>
                                <h5 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 text-white text-xl lg:text-2xl font-medium'>No Image Uploaded</h5>
                            </div>
                            :
                            <div className='relative z-2'>
                                <img src={`${import.meta.env.VITE_API_BASE_URL}` + formValues['cover_image']} alt={formValues['cover_image']} className="shadow-sm h-64 lg:h-96 w-full md:w-full lg:w-2/3 md:mx-auto object-cover"/>
                            </div>
                    }
            </div>
            <div className='p-2 px-3 space-y-2 md:space-y-2 lg:space-y-4 pt-4 md:w-full md:p-8 lg:w-2/3 md:mx-auto lg:mt-6'>
                <div className='flex flex-row justify-between px-1'>
                    <h5 className='text-lg sm:text-xl md:text-2xl text-gray-800 lg:text-4xl font-black flex items-center gap-1 lg:gap-2'>{formValues['business_name']}
                        {
                        formValues['type'] == 'Authentic' ? 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5 text-green-600">
                            <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg> :
                        <div></div>
                        }
                    </h5>
                    {
                        user?
                        <Link to={`/writeareview/${formValues['business_name']}/${id}`} className='hidden sm:flex items-center gap-1 px-3 p-1.5 bg-green-500 lg:gap-2 lg:px-3 lg:py-2 rounded-sm text-white hover:bg-green-400 shadow-lg hover:shadow-none transition-all ease-in-out duration-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-6 lg:w-6 flex lg:hidden" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-6 lg:w-6 hidden lg:flex" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <p className='text-sm md:text-base lg:text-base font-normal'>Write a review</p>
                        </Link>:
                         <button onClick={openLoginModal} className='hidden sm:flex w-fit items-center gap-1 px-3 p-1.5 bg-green-500 lg:gap-2 lg:px-3 lg:py-2 rounded-sm text-white hover:bg-green-400 shadow-lg hover:shadow-none transition-all ease-in-out duration-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-6 lg:w-6 flex lg:hidden" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-6 lg:w-6 hidden lg:flex" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <p className='text-sm md:text-base lg:text-base font-normal'>Write a review</p>
                        </button>
                    }
                </div>
              
         
                <div className="items-center flex px-1">
                        {[...Array(5)].map((x, i) =>
                            <svg aria-hidden="true" className={Math.floor(totalStars / matchingReviews.length) > i ? "w-6 h-6 md:w-7 md:h-7 lg:h-7 lg:w-7 text-yellow-400" : "w-6 h-6 md:w-7 md:h-7 lg:h-7 lg:w-7 text-gray-300"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" key={i}><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        )}
                        {
                            matchingReviews.length < 2 ?
                            <p className="ml-2 text-[13px] md:text-base lg:text-lg font-medium text-gray-500 ">{totalStars} out of 5</p>
                            : 
                            <p className="ml-2 text-[13px] md:text-base lg:text-lg font-medium text-gray-500 ">{parseFloat(totalStars / matchingReviews.length).toFixed(1)} out of 5</p>
                        }
                </div>
                {/* <p className='text-[12px] text-gray-600 font-thin'>Specialties</p> */}
                <hr />
                {/* <p className='text-sm md:text-sm lg:text-xl text-gray-800 font-bold mb-2 px-1'>Category: <span className='font-medium'>{formValues['category']}</span></p> */}
                <p className='text-[15px] md:text-base lg:text-xl text-gray-800 font-bold mb-2 px-1'>Specialties:</p>
                <div className='rounded-md w-full flex items-center flex-wrap gap-2 px-1 pb-4'>
                    
                        {
                        tags.map((specialties, index) => (
                            <div className='flex items-center gap-2 px-2 lg:px-4 lg:py-1.5 text-gray-700 bg-gray-300 rounded-sm'  key={index}>
                                <span className='text-[15px] md:text-base lg:text-base font-base'>{specialties}</span>
                            </div> 
                            ))

                        }
                        {/* <p className='text-gray-500'>•</p>
                        <p className='text-sm md:text-sm lg:text-base text-gray-500'>{formValues['category']}</p> */}
                </div>
              
             

                <hr />
                <div className='space-y-1 md:space-y-2 lg:space-y-4 py-2 px-1'>
                    <p className='text-[15px] md:text-base lg:text-xl text-gray-800 font-bold mb-2'>About {formValues['business_name']}</p>
                    <div className='text-[15px] md:text-base lg:text-base text-gray-800 pb-2'>
                        <p>{formValues['description']}</p>
                    </div>
             
                </div>
                <hr />
                <div className='space-y-3 md:space-y-2 lg:space-y-4 py-2 px-1'>
                    <p className='text-[15px] md:text-base lg:text-xl text-gray-800 font-bold mb-2'>Location & Hours</p>
                    <div className=''>
                        {/* <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${Number(formValues['latitude'])},${Number(formValues['longitude'])}&zoom=12&size=400x400&style=feature:poi|visibility:offmaptype=roadmap&markers=size:mid%7Ccolor:red|${Number(formValues['latitude'])},${Number(formValues['longitude'])}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`}/>   */}
                        {/* <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${Number(formValues['latitude'])},${Number(formValues['longitude'])}&zoom=13&size=400x400&maptype=roadmap&markers=size:mid%7Ccolor:red|${Number(formValues['latitude'])},${Number(formValues['longitude'])}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`}/>   */}
                        <iframe src={`https://maps.google.com/maps?q=${Number(formValues['latitude'])},${Number(formValues['longitude'])}&z=15&output=embed`} width="100%" height="400" frameBorder="0"></iframe>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:justify-between'>
                        <div className='space-y-2 md:space-y-2'>
                            <p className='text-[15px] md:text-base lg:text-base text-gray-500 flex text-start gap-1 lg:gap-3'> 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden sm:flex w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-700 -ml-1">
                                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                                    <p className='text-gray-600'><span className='font-medium text-gray-800'>{formValues['town']} - </span>{formValues['address']}</p>
                            </p>
                            <div className='flex gap-2 items-center text-gray-600 text-[15px] md:text-base lg:text-base'>
                                    <p><span className='text-green-700 font-semibold'>Open</span> <span className='font-medium text-gray-800'>{formValues['open_from']}</span> - <span className='font-medium text-gray-800'>{[formValues['open_to']]}</span> from <span className='font-medium text-gray-800'>{[formValues['operating_from']]}</span> to <span className='font-medium text-gray-800'>{[formValues['operating_to']]}</span></p>
                            </div>

                        </div>
                        <div>
                            <a href={`https://maps.google.com/?q=${formValues['latitude']},${formValues['longitude']}`}>
                                <button className='h-fit w-full lg:w-fit mt-2 text-gray-700 bg-white border hover:bg-gray-200 border-gray-300 font-medium rounded-md text-[15px] md:text-base lg:text-base px-3 p-1.5 lg:px-5 lg:py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-500'>Get Directions</button>
                            </a>
                        </div>
                    </div>
             
                </div>
                <hr />
                <div className='space-y-1 md:space-y-2 lg:space-y-4 py-2 px-1 '>
                    <p className='text-[15px] md:text-base lg:text-xl text-gray-800 font-bold mb-2'>Services Offered</p>
                    <div className='lg:flex gap-4 space-y-2'>
                        <div className='items-center gap-2 hidden'>
                                    {
                                    o_options.indexOf("Dine-In") > -1 ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 lg:w-7 lg:h-7  text-green-700">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 lg:w-7 lg:h-7  text-red-700">
                                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                    </svg>            
                                    }
                                     {
                                    o_options.indexOf("Dine-In") > -1 ? 
                                    <p className='text-sm md:text-base lg:text-base text-gray-700 font-medium'
                                    >Dine-In</p>
                                    :
                                    <p className='text-sm lg:text-base text-gray-600 font-medium'
                                    >No Dine-In</p>
                                }
                        </div>
                        {
                                o_options.indexOf("Dine-In") > -1 ? 
                                <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 lg:w-7 lg:h-7  text-green-700">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                                <p className='text-[15px] md:text-base lg:text-base text-gray-700 font-medium'
                                    >Dine-In</p>
                                </div>
                                :
                                <div></div>
                        }
                        {
                                o_options.indexOf("Take-Out") > -1 ? 
                                <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 lg:w-7 lg:h-7  text-green-700">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                                <p className='text-[15px] md:text-base lg:text-base text-gray-700 font-medium'
                                    >Take-Out</p>
                                </div>
                                :
                                <div></div>
                        }
                        {
                                o_options.indexOf("Delivery") > -1 ? 
                                <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 lg:w-7 lg:h-7  text-green-700">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                                <p className='text-[15px] md:text-base lg:text-base text-gray-700 font-medium'
                                    >Delivery</p>
                                </div>
                                :
                                <div></div>
                        }
                        {
                                o_options.indexOf("Reservation") > -1 ? 
                                <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 lg:w-7 lg:h-7  text-green-700">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                                <p className='text-[15px] md:text-base lg:text-base text-gray-700 font-medium'
                                    >Reservation</p>
                                </div>
                                :
                                <div></div>
                        }
                        {
                                o_options.indexOf("Pasalubong Center") > -1 ? 
                                <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 lg:w-7 lg:h-7  text-green-700">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                                <p className='text-[15px] md:text-base lg:text-base text-gray-700 font-medium'
                                    >Pasalubong Center</p>
                                </div>
                                :
                                <div></div>
                        }
                    </div>
                    
             
                </div>
                <hr />
                <div className='space-y-2 md:space-y-2 lg:space-y-4 py-2 px-1'>
                    <p className='text-[15px] md:text-base lg:text-xl text-gray-800 font-bold mb-2'>Contact Info</p>
                        <p className='text-[15px] md:text-base lg:text-base text-gray-600 font-medium flex items-center gap-2 lg:gap-3'> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-4 md:h-4 lg:w-6 lg:h-6 text-amber-500">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                            </svg>
                        {formValues['phone_number_one']}  {formValues['phone_number_two'] !== null? '/ '+ formValues['phone_number_two'] : ''}
                        </p>
                    {
                        formValues['email'] !== null ? 
                        <p className='text-[15px] md:text-base lg:text-base text-gray-600 font-medium flex items-center gap-2 lg:gap-3'> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-400">
                                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                                </svg>
                            {formValues['email']}
                        </p>
                        :
                        <span></span>
                    }
                  
                    {
                        formValues['socials'] !== null ? 
                        <p className='text-[15px] md:text-base lg:text-base text-gray-600 font-medium flex items-center gap-2 lg:grap-3'> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-blue-500">
                                <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
                            </svg>

                            {formValues['socials']}
                            </p>
                            :
                            <span></span>
                    }
                </div>
            

            </div>
            <div className='mt-4 md:w-full md:p-8 lg:w-2/3 md:mx-auto lg:mt-10 lg:pb-20' id='review-section'>
                <div className='flex gap-3 items-center px-4'>
                    <h5 className='text-[15px] md:text-base lg:text-xl font-medium lg:font-bold flex items-center gap-1 lg:gap-2 mb-1'>Reviews</h5>
                    <p className='text-gray-500'>•</p>

                    <p className='text-[13px] md:text-[14px] lg:text-base'> {
                                             reviews.filter(review => review.business_name === formValues['business_name']).map(reviewContent => (
                                                <p key={reviewContent.id}>
                                                {reviewContent.author}
                                                </p>
                                            )).length
                    } Reviews</p>
                </div>
                    
                    {/* review content */}
                    {
                        user ?
                        
                    <div>
                        <Link to={`/writeareview/${formValues['business_name']}/${id}`} className='flex lg:hidden justify-between w-full items-center py-2 border md:border-0'>
                            <div className='flex px-3'>
                                {[...Array(5)].map((x, i) =>
                                    <svg aria-hidden="true" className="w-5 h-5 md:w-5 md:h-5 lg:w-7 lg:h-7 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" key={i}><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                )}
                            </div>
                            <p className='text-[15px] md:text-base lg:text-base text-gray-600 px-3'>Start your review</p>
                        </Link>
                        <Link to={`/writeareview/${formValues['business_name']}/${id}`}>
                        <div id='desktop-view-start' className='hidden px-6 shadow-md rounded-md py-2 lg:flex justify-between items-center'>
                                <div className='text-gray-400 gap-1'>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                    </svg> */}
                                    <div className='flex gap-2 items-center'>
                                        <p className='font-medium text-md text-gray-600'>Overall Rating</p>
                                        <svg aria-hidden="true" className={(formValues['rating'] < 1) ? "w-4 h-4 sm:w-5 sm:h-5 text-gray-300" : "w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title>
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                            {/* <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span> */}
                                            <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 font-medium">
                                            {formValues['rating'] }
                                            </p>
                                    </div>
                                    <div className='flex gap-2'>
                                        
                                            <p className='text-sm'> {
                                                reviews.filter(review => review.business_name === formValues['business_name']).map(reviewContent => (
                                                    <p key={reviewContent.id}>
                                                    {reviewContent.author}
                                                    </p>
                                                )).length
                                            } Reviews</p>
                                    </div>
                            
                                    
                                </div>
                                <div className='flex flex-col'>
                                    <div id='star-rating' className='flex gap-1'>
                                        {[...Array(5)].map((star, i) =>{
                                            const ratingValue = i + 1;
                                            return(
                                                <label  key={i}> 
                                                    <input type="radio"
                                                    name='rating'
                                                    value={ratingValue} 
                                                    className="hidden"
                                                    onClick={() => setRating(ratingValue)}

                                                
                                                    />
                                                    <svg aria-hidden="true" onMouseEnter={() => setRating(ratingValue)} onMouseLeave={() => setRating(null)} className={ratingValue <= rating ? "w-6 h-6 text-white bg-green-500 rounded-sm transition-all ease-in-out duration-100 cursor-pointer" : "w-6 h-6 text-white bg-gray-300 rounded-sm transition-all ease-in-out duration-100 cursor-pointer"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                </label>
                                            )
                                        }
                                        
                                        )}
                                    </div>
                                    <p className='text-gray-500 font-normal mt-1'>Start your review for <span className='font-bold text-gray-700'>{formValues['business_name']}</span></p>

                                </div>
                            
                        </div>
                        </Link>
                    </div>
                    :
                    <div className=''>

                        <button onClick={openLoginModal} className='flex lg:hidden justify-between w-full items-center py-2 border md:border-0'>
                            <div className='flex px-3'>
                                {[...Array(5)].map((x, i) =>
                                    <svg aria-hidden="true" className="w-5 h-5 md:w-5 md:h-5 lg:w-7 lg:h-7 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" key={i}><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                )}
                            </div>
                            <p className='text-[15px] md:text-base lg:text-base text-gray-600 px-3'>Start your review</p>
                        </button>
                        <div id='desktop-view-start' className='hidden px-6 shadow-md rounded-md py-4 lg:flex justify-between items-center' onClick={openLoginModal}>
                                <div className='text-gray-400 gap-1'>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                    </svg> */}
                                    <div className='flex gap-2 items-center'>
                                        <p className='font-medium text-md lg:text-base text-gray-600'>Overall Rating</p>
                                        <svg aria-hidden="true" className={(parseFloat(totalStars / matchingReviews.length).toFixed(1) < 1) ? "w-6 h-6 text-gray-300" : "w-6 h-6 text-yellow-400"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title>
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                            {/* <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span> */}
                                            <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-gray-500 font-medium">
                                            {parseFloat(totalStars / matchingReviews.length).toFixed(1)}
                                            </p>
                                    </div>
                                    <div className='flex gap-2'>
                                        
                                            <p className='text-sm lg:text-base'> {
                                                reviews.filter(review => review.business_name === formValues['business_name']).map(reviewContent => (
                                                    <p key={reviewContent.id}>
                                                    {reviewContent.author}
                                                    </p>
                                                )).length
                                            } Reviews</p>
                                    </div>
                            
                                    
                                </div>
                                <div className='flex flex-col'>
                                    <div id='star-rating' className='flex gap-1'>
                                        {[...Array(5)].map((star, i) =>{
                                            const ratingValue = i + 1;
                                            return(
                                                <label  key={i}> 
                                                    <input type="radio"
                                                    name='rating'
                                                    value={ratingValue} 
                                                    className="hidden"
                                                    onClick={() => setRating(ratingValue)}

                                                
                                                    />
                                                    <svg aria-hidden="true" onMouseEnter={() => setRating(ratingValue)} onMouseLeave={() => setRating(null)} className={ratingValue <= rating ? "w-6 h-6 text-white bg-green-500 rounded-sm transition-all ease-in-out duration-100 cursor-pointer" : "w-6 h-6 text-white bg-gray-300 rounded-sm transition-all ease-in-out duration-100 cursor-pointer"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                </label>
                                            )
                                        }
                                        
                                        )}
                                    </div>
                                    <p className='text-gray-500 font-normal mt-1'>Start your review for <span className='font-bold text-gray-700'>{formValues['business_name']}</span></p>

                                </div>
                            
                        </div>
                    </div>
                     }
                    <hr className='hidden md:flex'/>
                    <div id='reviews' className='px-3'>
                        {
                            reviews.filter(review => review.business_name === formValues['business_name']).map(reviewContent => (
                                <p key={reviewContent.id}>
                                {reviewContent.author}
                                </p>
                            )).length < 1 ? 
                              <p className='text-[15px] md:text-base lg:text-xl text-center text-gray-800 font-medium mt-2 lg:mt-6 py-4'>No Reviews Yet</p>
                              :
                              <div className='flex flex-col gap-2 mt-6 md:mt-6 lg:gap-10 lg:mt-10'>
                              {reviews.filter(review => review.business_name === formValues['business_name']).map(reviewContent => (
                                    <div className='p-1' key={reviewContent.id}>
                                        <div className='px-1 space-y'>
                                            <div className='flex items-center gap-3'>
                                                {/* <img src={def_profile2} alt=""  className='rounded-full bg-white w-10 lg:w-12'/> */}
                                                <div className='h-8 w-8 bg-gray-700 text-white text-center text-xl rounded-full '>
                                                    <span>{reviewContent.author[0].toLowerCase()}</span>
                                                </div>
                                                <div>
                                                    <p className='text-[14px] md:text-base lg:text-base font-semibold text-gray-800'>{reviewContent.author}</p>
                                                    <p className='text-[12px] md:text-sm lg:text-sm text-gray-500'>{reviewContent.created_at.split('T').shift()}</p>
                                                </div>
                                            </div>
                                            <div className=''>
                                                {
                                                    reviewContent.review_image ? 
                                                    <div className='mt-4'>
                                                        <img src={`${import.meta.env.VITE_API_BASE_URL}` + reviewContent.review_image} alt={reviewContent.review_image} className='h-48 w-48 md:h-64 md:w-64 lg:h-72 lg:w-72 object-cover rounded-md'/>

                                                    </div>
                                                    :
                                                    <div></div>

                                                }
                                            </div>
                                            <div className='flex gap-3 items-center pt-2 lg:pt-6 mb-1'>
                                                <div className='flex'>
                                                        {[...Array(5)].map((x, i) =>
                                                            <svg aria-hidden="true" className={reviewContent.star_rating > i ? "w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:h-7 lg:w-7 text-yellow-400" : "w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:h-7 lg:w-7 text-gray-300"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" key={i}><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        )}
                                                </div>
                                                <p className='text-[13px] md:text-sm lg:text-sm text-gray-500'>{reviewContent.star_rating} out of 5</p>
                                            </div>
                                            <p className='text-gray-600 text-[15px] md:text-base lg:text-base'>{reviewContent.comments}</p>
                                            </div>
                                         
                                            <hr className='mt-3'/>
                                    </div>
                                
                                  
                              ))}
                              </div>
                        } 
                       
                      
                    </div>
            </div>

        </div>
        {
            loginShow && <Login id='loginModal'/>
        }

    </div>
  )
}

export default ViewPage
