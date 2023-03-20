import React, {useEffect, useState, useRef, useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import FadeInOut from '../animation/fade'
import { useNavigate } from "react-router-dom";

import useAuthContext from '../context/Authentication'
import RecordsContext from '../context/RecordsContext'

const ReviewPage = () => {


  const {
    formValues,
    onChange,
    errors,
    setErrors,
    getRecord,
    openModal,
    closeModal,
    setFormValues,
    spinner,
    storeReview

} = useContext(RecordsContext);

    const {user} = useAuthContext();
    const { id } = useParams();
    const [ratings, setRating] = useState(null);
    const [comments, setComment] = useState('');
    const [business_name, setBusiness] = useState('');

    const [author, setAuthor] = useState('');
    const [prev, setPrev] = useState(0)
    const [star_rating, setStar] = useState(0);

    const navigate = useNavigate();


    useEffect(()=> {
        getRecord(id);
        setAuthor(user?.name);
        setBusiness(formValues['business_name']);
        setPrev(Number(formValues['rating']));
    }, [user]);

    const [imagedata, setImageData] = useState("");

    const handleFileChange = files => {
        setImageData(files[0]);
        setFormValues({ ...formValues, imagedata: files[0]});
    };

    useEffect(() =>{
        setStar(ratings);
        if(!user?.email_verified_at){
            navigate(-1);
        }
    }, [ratings])

    const handleSubmit = () => {
        storeReview({business_name, imagedata, star_rating, comments, author})
        // console.log({business_name, imagedata, star_rating, comments, author})
    }

  return (
    <div>
        <div className='p-2 px-3 space-y-1 pt-6 md:w-1/2 md:mt-4 md:mx-auto lg:w-2/5'>
        <h5 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold'>{business_name}</h5>
        <p className='text-[13px] lg:text-base font-medium text-blue-600/70 pb-4 cursor-pointer'><a onClick={openModal}>Read our review guidelines</a></p>
        
        <div className=''>
                {/* <h5 className='font-bold'>Upload Image</h5> */}
                <div  className='mb-3 mt-1 text-gray-700 text-sm space-y-2'>
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="cover_image" className="flex flex-col items-center justify-center w-full h-fit border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-75 ease-out">
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
        
        <div className='p-4 py-6 border-gray-300 shadow-gray-300 border rounded-md space-y-2 mt-6' id='review-content'>   
            <div id='star-rating' className='flex gap-1'>
                {[...Array(5)].map((star, i) =>{
                    const ratingValue = i + 1;
                    return(
                        <label  key={i}> 
                            <input type="radio"
                            name='rating'
                            value={ratingValue} 
                            className="hidden"
                            onClick={() => (setRating(ratingValue))}
                            />
                            <svg aria-hidden="true" className={ratingValue <= ratings ? "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white bg-green-500 rounded-md transition-all ease-in-out duration-100 cursor-pointer" : "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white bg-gray-300 rounded-md transition-all ease-in-out duration-100 cursor-pointer"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </label>
                    )
                }
                
                )}
                <p className='text-[13px] text-gray-600 ml-3 lg:text-base lg:font-thin'>Select your rating</p>
            </div>
            <div className='text-sm lg:text-sm font-medium'>
                {
                ratings == 1 && <p>Bad</p>
                }
                {
                ratings == 2 && <p>Fair</p>
                }
                {
                ratings == 3 && <p>Ok</p>
                }
                {
                ratings == 4 && <p>Good</p>
                }
                {
                ratings == 5 && <p>Great!</p>
                }
            </div>
            <div id='content' className='text-sm rounded-sm lg:text-base mt-10'>
                <textarea name="comments" id="comments" onChange={(e) => {setComment(e.target.value)}} cols="30" rows="10" className='w-full p-2 focus:ring-0 focus:ring-offset-0' placeholder='type your comment here'></textarea>             
            </div>
            {/* <div id='content' className='text-sm rounded-sm lg:text-base mt-10'>
                    <input type="text" name='author' id='author' value={user?.email} on={onChangeReview}/>           
            </div> */}
           
        
        </div>
        <div className='text-sm pt-4'>
                <button type='submit' onClick={handleSubmit} className='h-fit flex items-center justify-center text-white shadow-sm w-40 lg:w-48 bg-green-500 hover:bg-green-400 font-medium rounded-md text-sm lg:text-base px-4 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-500'>
                {
                        spinner ? <div role="status">
                        <svg aria-hidden="true" className="w-5 h-5 lg:w-6 lg:h-6 mr-2 text-gray-200 animate-spin dark:text-gray-300 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>: <span className="inline-block mr-2">Post Review</span>

                    }
                    
                </button>
        </div>
       
        
        </div>
        <div id='deleteModal' className="hidden absolute lg:w-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 modal w-11/12 rounded-sm bg-white overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg  p-4 py-6 mx-auto text-center space-y-4">
                <div className='flex items-center justify-between'>
                    <p className='font-bold lg:text-lg'>Review Guidelines</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer" onClick={closeModal}>
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                </div>
                <hr />
                <div className='h-96 overflow-x-scroll space-y-4 pb-6'>
                    <div className='text-start space-y-1'>
                        <p className='font-bold text-sm'>General Guidelines</p>
                        <p className='text-[13px] lg:text-sm text-gray-700'>To ensure that our review page remains a respectful and helpful space for all users, we have created some guidelines that we ask you to follow. These guidelines cover basic regulations, relevance of comments, inappropriate content, privacy, promotional content, and personal conflicts and interests.
                        <br/>By following these guidelines, we can create a review page that is fair, informative, and respectful to all users. We appreciate your participation and look forward to hearing your feedback.</p>
                    </div>
                    <ul className='text-[13px]  lg:text-sm text-start px-4'>
                        <li className='list-disc text-gray-700'><span className='font-bold text-[13px] text-gray-800'>Check for basic regulations:</span> When using a review page, make sure that you are complying with all relevant laws and regulations. This includes laws related to defamation, intellectual property, and privacy.</li>
                    </ul>
                    <ul className='text-[13px]  lg:text-sm text-start px-4'>
                        <li className='list-disc text-gray-700'><span className='font-bold text-[13px] text-gray-800'>Keep your comments relevant:</span> Ensure that all comments you post on a review page are relevant to the product or service being reviewed. Off-topic comments may be removed.</li>
                    </ul>
                    <ul className='text-[13px]  lg:text-sm text-start px-4'>
                        <li className='list-disc text-gray-700'><span className='font-bold text-[13px] text-gray-800'>Avoid inappropriate content:</span>  Be respectful to other users by avoiding any inappropriate content, including hate speech, threats, or harassment. Such behavior is not acceptable on a review page.</li>
                    </ul>
                    <ul className='text-[13px]  lg:text-sm text-start px-4'>
                        <li className='list-disc text-gray-700'><span className='font-bold text-[13px] text-gray-800'>Be honest and objective:</span>  Provide honest and objective feedback based on your experience with the product or service being reviewed. Avoid posting or allowing promotional content that is not relevant to the review.</li>
                    </ul>
                </div>
            
        </div>
        {/* <div className='fixed bottom-0 p-4 border-t-rounded bg-yellow-200 shadow-sm text-sm w-full text-center'>
          
            {
            user.email_verified_at?
            <p>you are vefieid!</p>:
            <p>Please verify your email before you can proceed!</p>
            }
        </div> */}
    </div>
  )
}

export default ReviewPage
