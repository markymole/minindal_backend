import React, {useContext, useEffect, useState} from 'react'
import SuggestionCarousel from '../main_components/SuggestionCarousel'
import SuggestionCarousel2 from '../main_components/SuggestionCarousel2'
import RecordsContext from '../context/RecordsContext'

const SuggestionPage = () => {

  
  const { records, getRecords,  reviews, getReviews} = useContext(RecordsContext);
  useEffect(() =>{
      getRecords();
      getReviews();
  },[])

  const exoticReecords = records.filter((record) => {
        return record.category.toLowerCase() === 'exotic';
    })

  return (
    <div className="">
      <h1 className="max-sm:text-center max-sm:leading-normal mt-14 mb-14 lg:mt-20 lg:mb-20 flex justify-center text-2xl lg:text-4xl font-bold text-gray-800 underline decoration-4 decoration-green-500">You might like these!</h1>
      <div className="max-w-6xl mx-auto mt-12">
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 ml-5">What's new?</h2>
              <SuggestionCarousel records={records} reviews={reviews}></SuggestionCarousel>
          </div>
      </div>
        <div className="w-full mt-12 pb-10 bg-opacity-30 "> 
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 pt-10 ml-5">Local Favorites</h2>
                <SuggestionCarousel2 records={exoticReecords}  reviews={reviews}></SuggestionCarousel2>
            </div>
        </div>
    </div>  
)
}

export default SuggestionPage