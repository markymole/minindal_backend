import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import SuggestionCard from "./SuggestionCard";

SuggestionCard
const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 550;
}
const scrollRight = () => {
    document.getElementById("content").scrollLeft += 550;
}
function SuggestionCarousel({records, reviews}){

    return(
        <>
         <div className="relative mx-auto">
            <div className="">
                <button  onClick={scrollLeft} type="button" className="max-sm:hidden max-md:hidden max-lg:hidden absolute top-0 -ml-8 left-0 z-30 flex items-center justify-center pt-40 px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-slate-200 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-400 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7"></path></svg>
                    </span>
                </button>
                <button onClick={scrollRight} type="button" className="max-sm:hidden max-md:hidden max-lg:hidden absolute -mr-8 top-0 right-0 z-30 flex items-center justify-center pt-40 px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-slate-200 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-400 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text- sm:w-6 sm:h-6 text-green-500" fill="none" stroke="currentColor " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7"></path></svg>
                    </span>
                </button>
            </div>
            <div id="content" className="carousel m-2 flex space-x-5 items-center justify-start pl-2 overflow-x-hidden max-sm:overflow-x-auto max-md:overflow-x-auto max-lg:overflow-x-auto scroll-smooth  scroll-hide ">
               {
                records.slice(0).reverse().map((record) =>{
                    return(
                        <div key={record.id}>
                            <SuggestionCard record={record} reviews={reviews}></SuggestionCard>
                        </div>
                    )
                })
               }
               
                
              
            </div>
        </div>

        </>
    )
}


export default SuggestionCarousel;