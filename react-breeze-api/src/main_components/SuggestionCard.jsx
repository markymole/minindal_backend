import React, {useEffect, useContext, useState} from "react"
import { Link } from "react-router-dom"
import RecordsContext from "../context/RecordsContext"
import defImage from '../assets/minindal-noimage3.png'

function SuggestionCard({record, reviews}){

    const [star_rate, setRate] = useState('');
    const [matchingReviews, setMatching ] = useState([]);

    // const retu = reviews.filter((review) => {
    //     return review.business_name === formValues['business_name'];
    // });

    useEffect(()=>{
        getMatching(reviews);
        getStars();
    },[reviews])

    const getMatching = (val) => {
        const retu = val.filter((review) => {
            return review.business_name === record.business_name;
        });
        setMatching(retu);
    }

    const getStars = () => {
        let value = 0;
        matchingReviews.map((ret) =>{
            value += ret.star_rating
        });
        setRate(value);
    }

    return(<>
            <div className="card">
                    <div className="w-60 h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/search/${record.business_name}/${record.id}`} key={record.id}>
                            {/* <img className="rounded-t-lg w-full h-44 object-cover" src="src/assets/.png" alt="" /> */}
                            {
                                !record?.cover_image ?
                                <img className="rounded-t-lg w-full h-44 object-cover" src={defImage} alt="" />
                                :
                                <img className="rounded-t-lg w-full h-44 object-cover" src={"http://localhost:8000/" + record.cover_image} alt="" />
                            }
                        </Link>
                        <div className="p-4">
                            <Link to={`/search/${record.business_name}/${record.id}`} key={record.id}>
                                <h5 className="mb-2 text-base lg:text-lg font-bold tracking-tight text-gray-800 dark:text-white">{record.business_name}</h5>
                            </Link>
                            <div className="flex items-center">
                                {[...Array(5)].map((x, i) =>
                                    <svg aria-hidden="true" className={Math.floor(star_rate / matchingReviews.length) > i ? "w-5 h-5 text-yellow-400" : "w-5 h-5 text-gray-300"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" key={i}><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                )}
                                {
                                    matchingReviews.length < 2 ?
                                    <p className="ml-2 text-[13px] md:text-sm lg:text-base font-medium text-gray-500 ">{star_rate} out of 5</p>
                                    : 
                                    <p className="ml-2 text-[13px] md:text-sm lg:text-text-base font-medium text-gray-500 ">{parseFloat(star_rate / matchingReviews.length).toFixed(1)} out of 5</p>
                                }
                            </div>
                            {/* <div className='rounded-md w-full flex items-center flex-wrap gap-2 py-2'>
                                    {
                                    record.specialties.split(',').map((specialties, index) => (
                                        <div className='flex items-center gap-2 px-2 lg:px-4 lg:py-1.5 text-gray-600 bg-gray-300 rounded-sm'  key={index}>
                                            <span className='text-sm md:text-sm lg:text-base font-base'>{specialties}</span>
                                        </div> 
                                        ))
                                                    
                                    }
                                    <p className='text-gray-500'>•</p>
                                    <p className='text-sm md:text-sm lg:text-base text-gray-500'>{record.category}</p>
                            </div> */}
                            <div className='flex gap-1 py-2'>
                                  <p className='text-[13px] md:text-sm sm:text-xs lg:text-sm text-gray-500'>
                                  <span className='font-medium text-gray-600'>{record.town}</span> - {record.address}</p>
                            </div>
                            <p className="font-normal text-gray-700 pt-1 text-sm dark:text-gray-400">{record.description}</p>
                        </div>
                    </div>
             </div>
    </>
    
    )
    
    }
    export default SuggestionCard