import React, { useContext, useEffect, useState} from 'react'
import axios from '../api/axios';
import { Link } from 'react-router-dom';
import RecordsContext from '../context/RecordsContext';
import { useNavigate } from "react-router-dom";


export const ReviewPost = ({reviews, loading, status}) => {
    const { closeModal, openModal, getReviews, deletePending, deleteReview} = useContext(RecordsContext);

    useEffect(() => {
        getReviews();
      }, []);

    const [delID, setDelID] = useState('');
    const [result, setResult] = useState(null);
    const navigate = useNavigate();

    function closeResult(){
        setTimeout(() => {
          setResult(null);
        }, 5000)
      }

    const handleClickDelete = (id) => {
        setDelID(id);
        console.log(id);
        openModal();
    }

    const handleDelete = async (e, id) => {
        e.preventDefault();
         await axios.delete("api/data/reviews/" + id);
            getReviews();
            navigate("/dashboard/reviews");
            setResult(true);
            closeModal();
            closeResult();
      };

    function closeResultFast(){
        setResult(null);
    }

    if(loading){
        return(
            <div className='flex flex-col gap-2'>
                  {[...Array(5)].map((x, i) =>
                       <div className="animate-pulse p-5 bg-white overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg" key={i}>
                        <div className="flex w-full h-full items-center justify-between border-b pb-2">
                            <div className='h-10 w-10 px-3.5 py-1.5 bg-gray-300 text-white text-xl rounded-full'>
                                <span></span>
                            </div>     
                            
                            <div className="flex items-center space-x-8">
                                <div className="text-xs text-neutral-500 h-6 bg-gray-200 rounded-sm"></div>
                                <button  className='flex gap-2 font-medium p-1.5 px-3 hover:bg-red-600 w-fit rounded-lg text-white bg-red-300/50 items-center group transition-all ease-out duration-100'>
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 bg-red-500 rounded-full">
                                                <path fillRule="evenodd" d="M6.72 5.66l11.62 11.62A8.25 8.25 0 006.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0011.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z" clipRule="evenodd" />
                                                </svg> */}
                                                <p className='text-sm'>Delete</p>
                                </button>
                            </div>
                            </div>
                            <div className="mt-4 mb-6">
                            <div className="mb-2 text-lg font-bold"></div>
                            <div className="items-center flex mb-2">
                                {[...Array(5)].map((x, i) =>
                                    <svg aria-hidden="true" className={0 > i ? "w-6 h-6 text-yellow-400" : "w-6 h-6 text-gray-300"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" key={i}><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        )}
                                        <div className="h-6 bg-gray-200 rounded-sm"></div>
                            </div>
                            <div className="text-sm text-neutral-600 h-6 bg-gray-200 rounded-sm"></div>
                            <div className="text-sm text-neutral-600 h-6 bg-gray-200 mt-2 rounded-sm"></div>
                            <div className="text-sm text-neutral-600 h-6 bg-gray-200 mt-2 rounded-sm"></div>
                            </div>
            
                            <div>
                        </div>
                    </div>
                    )}
            </div>
           
           
            
          
        )
    }

  return (
    <div className="-mt-4">
        {result && (   
                        <div className='bg-white rounded-lg py-2 px-4 w-fit font-medium text-sm shadow-md shadow-gray-300 flex gap-2 items-center absolute top-16 right-12 mt-2 transition-all ease-in-out'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        <span>Review Record Deleted</span>
                        <button className='ml-20' onClick={closeResultFast}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-4 h-4'>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
        )}
        <div className='grid grid-cols-1 gap-2 items-center justify-center pb-10'>  
            {
                reviews.map((review) => {
                    return(
                        <div className="p-5 bg-white overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg" key={review.id}>
                            <div className="flex w-full h-full items-center justify-between border-b pb-2">
                                <div className="flex items-center space-x-3">
                                    <div className='h-10 w-10 px-3.5 py-1.5 bg-gray-500 text-white text-xl rounded-full'>
                                        <span>{review.author[0]}</span>
                                    </div>                                       
                                    <div className="text-lg font-bold text-gray-600">{review.author}</div>
                                </div>
                                <div className="flex items-center space-x-8">
                                    <div className="text-xs text-neutral-500">{review.created_at.split('T').shift()}</div>
                                    <button onClick={() => handleClickDelete(review.id)} className='flex gap-2 font-medium p-1.5 px-3 hover:bg-red-600 w-fit rounded-lg text-white bg-red-500 items-center group transition-all ease-out duration-100'>
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 bg-red-500 rounded-full">
                                                    <path fillRule="evenodd" d="M6.72 5.66l11.62 11.62A8.25 8.25 0 006.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0011.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z" clipRule="evenodd" />
                                                    </svg> */}
                                                    <p className='text-sm'>Delete</p>
                                    </button>
                                </div>
                                </div>
                                <div className="mt-4 mb-6">
                                <div className="mb-2 text-lg font-bold">{review.business_name}</div>
                                <div className="items-center flex mb-2">
                                    {[...Array(5)].map((x, i) =>
                                        <svg aria-hidden="true" className={review.star_rating > i ? "w-6 h-6 text-yellow-400" : "w-6 h-6 text-gray-300"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" key={i}><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            )}
                                            <p className="ml-2 text-basefont-medium text-gray-500 ">{review.star_rating} out of 5</p>
                                </div>
                                <div className="text-sm text-neutral-600">{review.comments}</div>
                                </div>
            
                                <div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div id='deleteModal' className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 modal w-1/4 bg-white overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg py-12 px-4 mx-auto text-center space-y-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-16 h-16 bg-red-500 rounded-full mx-auto">
                        <path fillRule="evenodd" d="M6.72 5.66l11.62 11.62A8.25 8.25 0 006.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0011.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z" clipRule="evenodd" />
                    </svg>
                    <h5 className='text-xl font-bold'>Delete Review?</h5>
                    <p className='w-4/5 mx-auto text-md text-gray-600 '>Deleted reviews cannot be retrieved.</p>
                    <div className='buttons flex gap-2 w-fit mx-auto'>
                        <button type='button' className="h-fit text-white bg-red-600 hover:bg-red-500 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" data-dropdown-toggle="dropdown" onClick={(e) => handleDelete(e, delID)}>Confirm</button>
                        <button onClick={closeModal}  className="h-fit text-gray-700 bg-white border hover:bg-gray-200 border-gray-300 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" type="button" data-dropdown-toggle="dropdown" >Cancel</button>
                    </div>
        </div>
        
    </div>
              

  )
}
