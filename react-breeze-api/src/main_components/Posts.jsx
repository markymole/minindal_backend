import React, {useEffect, useState, useContext, useRef} from 'react'
import RecordsContext from '../context/RecordsContext'
import { Link } from 'react-router-dom';
import { Reducer } from 'react';
import defImage from '../assets/minindal-noimage-cropped.png';
import defImage2 from '../assets/minindal-noimage-2.png';
const Posts = ({records, loading}) => {

  const { reviews, getReviews, tags, o_options} = useContext(RecordsContext);
  useEffect(() =>{
    getReviews();
  }, []);

  if(loading) {
         (
            <div className='h-screen'>
               
          </div>
      )
    }
  
 
  const [starRating, setStarRating] = useState('');
  const [reviewCount, setReviewCount] = useState('');
  return (
    <div className='h-[70vh] lg:h-[80vh]'>
        {loading?  
        <div className="text-center -mt-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2">
                    <div role="status">
                        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                      <span className="sr-only">Loading...</span>
                  </div>
              </div>
              
            :
            
           
        <div className='flex flex-col h-full max-h-full overflow-x-auto lg:p-4 lg:gap-2'>
        {records?.map((record) => {
              return(
                <Link to={`/search/${record.business_name}/${record.id}`} key={record.id}>
                <div className='bg-white w-full flex p-4 sm:p-6 gap-3 sm:gap-6 justify-center border-b md:border border-gray-200 rounded-lg shadow  hover:shadow-lg hover:cursor-pointer transition-all ease-in-out duration-300 ' key={record.id}>
                  <div className='w-1/3 md:w-1/2'>
                  {
                    !record?.cover_image ?
                      <div className=''>
                        <img src={defImage} alt="" className='object-cover rounded-md h-32 md:h-48 lg:h-fit w-full'/>
                      </div>
                      :
                      <div>
                        <img src={`${import.meta.env.VITE_API_BASE_URL}` + record.cover_image} alt="" className='object-cover rounded-md h-32 md:h-48 lg:h-fit w-full'/>
                      </div>
                      
                  }
                  </div>
                                  
                  {/* mobile view */}
                          <div className='w-2/3 space-y-1 md:space-y-2 sm:space-y-1 lg:hidden'>
                            <div  className='text-[15px] md:text-lg lg:text-base font-black flex items-center gap-2 lg:gap-3'>
                              <h5>{record.business_name}</h5>
                              {
                                  record.type == 'Authentic' ? 
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 text-green-600">
                                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                  </svg> :
                                  <div></div>
                                }
                            </div>
                                
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className={( reviews.filter(review => review.business_name === record.business_name).map(reviewContent => (
                                                <p key={reviewContent.id}>
                                                {reviewContent.author}
                                                </p>
                                            )).length < 1) ? "w-5 h-5 sm:w-6 sm:h-6 text-gray-300" : "w-5 h-5 sm:w-6 sm:h-6 text-yellow-400"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <span className="w-1 h-1 mx-1.5 bg-gray-800 rounded-full"></span>
                                      <p className="text-[12.5px] smd:text-base text-gray-800 font-medium">
                                      {/* { Math.floor(record.rating) } out of 5 */}
                                      {
                                        reviews.filter(review => review.business_name === record.business_name).map(reviewContent => (
                                                <p>
                                                {reviewContent.author}
                                                </p>
                                            )).length
                                      } Reviews
                                      </p>
                                 

                                </div>
                                <div className='text-blue-500 flex flex-wrap gap-1 items-center'>
                                        {
                                            record.specialties.split(',').map((specialties, index) => (
                                                <div className='flex items-center gap-2 px-2 text-gray-500 bg-gray-200 rounded-sm' key={index}>
                                                <span className='text-[13px] md:text-base  font-medium'>{specialties}</span>
                                            </div> 
                                            ))
                                        
                                        }
                                          <p className='text-gray-800'>•</p>
                                        <p className='text-[13px] md:text-base '>{record.category}</p>
                                </div>
                                <div className='flex items-baseline gap-1 md:pt-1'>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-green-700 hidden sm:block">
                                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                      </svg>
                                  <p className='text-[13px] md:text-base lg:text-sm text-gray-600'>
                                  <span className='font-medium text-gray-800'>{record.town}</span> - {record.address}</p>
                                </div>
                                <div className='flex flex-wrap items-center gap-2 pt-1'>
                                      {
                                          record.service_options.split(',').indexOf("Dine-In") > -1 ? 
                                          <div className='flex items-center gap-1'>
                                          {
                                            record.service_options.split(',').indexOf("Dine-In") > -1 ? 
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-700">
                                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4  text-red-700">
                                                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                              </svg>
                                          
                                          }
                                          <p className='text-[13px]  font-medium md:text-base '>Dine-In</p>
                                       </div>
                                        :
                                        <div className='hidden'></div>
                                     }
                                
                                     {
                                          record.service_options.split(',').indexOf("Take-Out") > -1 ? 
                                          <div className='flex items-center gap-1 '>
                                          {
                                            record.service_options.split(',').indexOf("Take-Out") > -1 ? 
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-700">
                                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-red-700">
                                                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                              </svg>
                                          
                                          }
                                          <p className='text-[13px] font-medium  md:text-base'>Take-Out</p>
                                       </div>:
                                       <div className='hidden'></div>
                                     }
                                      {
                                          record.service_options.split(',').indexOf("Reservation") > -1 ? 
                                        <div className='flex items-center gap-1'>
                                          {
                                            record.service_options.split(',').indexOf("Reservation") > -1 ? 
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4  text-green-700">
                                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-red-700">
                                                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                              </svg>
                                          
                                          }
                                          <p className='text-[13px] font-medium  md:text-base'>Reservation</p>
                                        </div>
                                        :
                                        <div className='hidden'></div>
                                      }
                                      {
                                          record.service_options.split(',').indexOf("Delivery") > -1 ? 
                                          <div className='flex items-center gap-1 '>
                                          {
                                            record.service_options.split(',').indexOf("Delivery") > -1 ? 
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-700">
                                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-red-700">
                                                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                              </svg>
                                          
                                          }
                                          <p className='text-[13px] font-medium  md:text-base'>Delivery</p>
                                       </div>
                                        :
                                        <div className='hidden'></div>
                                     }
                                     {
                                          record.service_options.split(',').indexOf("Pasalubong Center") > -1 ? 
                                          <div className='flex items-center gap-1 '>
                                            {
                                              record.service_options.split(',').indexOf("Pick-Up") > -1 ? 
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-700">
                                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                              </svg>
                                              :
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-red-700">
                                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                                </svg>
                                            }
                                            <p className='text-[13px] font-medium  md:text-base'>Pasalubong Center</p>
                                        </div>
                                        :
                                        <div className='hidden'></div>
                                      }
                                </div>
                                
                          </div>

                          {/* desktop view */}
                          <div className='w-2/3 sm:space-y-2 hidden lg:block'>
                            <div className='text-sm sm:text-base lg:text-lg font-bold flex items-center gap-1 lg:gap-3'>
                              <h5 >{record.business_name}</h5>
                              {
                                  record.type == 'Authentic' ? 
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 md:w-6 md:h-6 text-green-600">
                                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                  </svg> :
                                  <div></div>
                              }
                            </div>
                             
                              
                              
                              <div className="flex items-center ">
                                    <svg aria-hidden="true" className={( reviews.filter(review => review.business_name === record.business_name).map(reviewContent => (
                                                <p key={reviewContent.id}>
                                                {reviewContent.author}
                                                </p>
                                            )).length < 1) ? "w-6 h-5 sm:w-6 sm:h-6 text-gray-300" : "w-5 h-5 sm:w-6 sm:h-6 text-yellow-400"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                      <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 font-medium">
                                      {/* { Math.floor(record.rating) } out of 5 */}
                                      {
                                        reviews.filter(review => review.business_name === record.business_name).map(reviewContent => (
                                                <p>
                                                {reviewContent.author}
                                                </p>
                                            )).length
                                         
                                      } Reviews
                                      </p>
                                 

                                </div>
                              <div className='rounded-md w-full flex items-center flex-wrap gap-2'>
                                        {
                                            record.specialties.split(',').map((specialties, index) => (
                                                <div className='flex items-center gap-2 px-1 lg:px-3 lg:py-1 text-gray-600 bg-gray-300 rounded-md'  key={index}>
                                                <span className='text-[13px] lg:text-sm font-medium'>{specialties}</span>
                                            </div> 
                                            ))
                                        
                                        }
                                        <p>•</p>
                                        <p className='text-sm lg:text-sm text-gray-600'>{record.category}</p>
                                </div>
                                <div>
                                  <p className="font-normal line-clamp-3 md:line-clamp-2 text-gray-700 pt-1 text-[13.5px] lg:text-base ">{record.description}</p>
                                </div>
                                <div className='text-sm space-y-2'> 
                                <div className='flex gap-2 items-center text-gray-500'>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-cyan-500 -ml-1">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
                                  </svg> */}

                                  <p><span className='text-green-700 font-semibold'>Open</span> <span className='font-medium'>{record.open_from}</span> - <span className='font-medium'>{record.open_to}</span> from <span className='font-medium'>{record.operating_from}</span> to <span className='font-medium'>{record.operating_to}</span></p>
                                </div>
                                  <p className='text-[11px] sm:text-xs lg:text-sm text-gray-500 flex text-center gap-2'> 
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-700 -ml-1">
                                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                      </svg>

                                      <span><span className='font-medium text-gray-600'>{record.town} - </span>{record.address}</span>
                                  </p>
                                  <p className='text-[11px] sm:text-xs lg:text-sm text-gray-500 flex items-center gap-2'>
                                     {
                                      !record.phone_number_one && !record.phone_number_two ? 
                                      <div></div> : 
                                      <span className='flex gap-2 items-center'>
                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                          </svg>

                                        {record.phone_number_one}  {record.phone_number_two ? '/ '+ record.phone_number_two : ''}
                                      </span>
                                     }
                                    </p>
                                   
                                </div>
                                <div className='flex flex-wrap gap-4'>
                                    {
                                              record.service_options.split(',').indexOf("Dine-In") > -1 ? 
                                              <div className='flex items-center gap-2 px-2 py-1 lg:px-3 lg:py-2 rounded-md shadow-md bg-gray-50'>
                                              {
                                                record.service_options.split(',').indexOf("Dine-In") > -1 ? 
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-700">
                                                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-700">
                                                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                                  </svg>
                                              
                                              }
                                              <p className='text-sm'>Dine-In</p>
                                           </div>
                                         :
                                         <div className='hidden'></div>
                                     }
                                   
                                     {
                                              record.service_options.split(',').indexOf("Reservation") > -1 ? 
                                              <div className='flex items-center gap-2 px-2 py-1 lg:px-3 lg:py-2  rounded-md shadow-md bg-gray-50'>
                                              {
                                                record.service_options.split(',').indexOf("Reservation") > -1 ? 
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-700">
                                                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-700">
                                                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                                  </svg>
                                              
                                              }
                                              <p className='text-sm'>Reservation</p>
                                           </div>
                                         :
                                         <div className='hidden'></div>
                                     }
                                    
                                     {
                                              record.service_options.split(',').indexOf("Take-Out") > -1 ? 
                                            <div className='flex items-center gap-2 px-2 py-1 lg:px-3 lg:py-2 rounded-md shadow-md bg-gray-50'>
                                            {
                                              record.service_options.split(',').indexOf("Take-Out") > -1 ? 
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-700">
                                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                              </svg>
                                              :
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-700">
                                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                                </svg>
                                            
                                            }
                                            <p className='text-sm'>Take-Out</p>
                                         </div>
                                         :
                                         <div className='hidden'></div>
                                     }
                                     
                                     {
                                            record.service_options.split(',').indexOf("Pick-Up") > -1 ? 
                                            <div className='flex items-center gap-2 px-2 py-1 lg:px-3 lg:py-2 rounded-md shadow-md bg-gray-50'>
                                            {
                                              record.service_options.split(',').indexOf("Pick-Up") > -1 ? 
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-700">
                                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                              </svg>
                                              :
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-700">
                                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                                </svg>
                                            
                                            }
                                            <p className='text-sm'>Pick-Up</p>
                                         </div>
                                         :
                                         <div className='hidden'></div>
                                     }
                                   
                                     {
                                            record.service_options.split(',').indexOf("Delivery") > -1 ? 
                                            <div className='flex items-center gap-2 px-2 py-1 lg:px-3 lg:py-2  rounded-md shadow-md bg-gray-50'>
                                            {
                                              record.service_options.split(',').indexOf("Delivery") > -1 ? 
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-700">
                                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                              </svg>
                                              :
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-700">
                                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                                </svg>
                                            
                                            }
                                            <p className='text-sm'>Delivery</p>
                                         </div>
                                         :
                                         <div className='hidden'></div>
                                     }
                                   
                                </div>

                            
                        </div>
                  </div>
                  </Link>
                            );
                        })}
        </div>
         }
    </div>
  )
}

export default Posts
