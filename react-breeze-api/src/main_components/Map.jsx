import React, { useMemo, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { GoogleMap, useLoadScript, MarkerF, InfoWindow, InfoWindowF } from "@react-google-maps/api"
import { useState } from "react"
import FadeInOut from "../animation/fade"
import RecordsContext from "../context/RecordsContext"

export default function Map({records}){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    })

    if(!isLoaded){
        return(
            <div>loading</div>
        )
    }
    return <Mapped records={records}/>
}

function Mapped({records}){
    const center = useMemo(() => ({lat:15.133964, lng:120.591027}), []);
    const [ selectedMarker, setSelected ] = useState(null);

    const navigate = useNavigate();

    const { 
        reviews,
        getReviews
    } = useContext(RecordsContext);

    useEffect(() => {
        getReviews();
    }, [])

    return (
        <GoogleMap 
            zoom={12}
            center={center}
            mapContainerClassName="map-container" 
            
            //remove labels
            // options={{ styles: [{ elementType: "labels", featureType: "poi.business", stylers: [{ visibility: "off", }], }], }}
        >
            {/* //Markers */}
            {
                records.map((record) => (
                    <MarkerF 
                        key={record.id} 
                        position={{
                            lat:Number(record.latitude),
                            lng:Number(record.longitude)
                        }}
                        onClick={() => {
                            setSelected(record);
                        }}
                      
                    />
                ))
            }
            {
                selectedMarker && (
                    <InfoWindowF
                        position={{
                            lat:Number(selectedMarker.latitude),
                            lng:Number(selectedMarker.longitude)
                        }}
                        onClick={() => {
                            navigate(`/search/${selectedMarker.business_name}/${selectedMarker.id}`)
                        }}
                        onCloseClick={() => {
                            setSelected(null);
                        }}>
                        <FadeInOut show={selectedMarker} duration={200}>
                        <div className="p-2 w-52">
                            <img src={"http://localhost:8000/" + selectedMarker.cover_image} alt="" className='object-cover rounded-md w-48' />
                            <h2 className="font-black mt-2">{selectedMarker.business_name}</h2>
                            <div className="flex items-center">
                                    <svg aria-hidden="true" className={( reviews.filter(review => review.business_name === selectedMarker.business_name).map(reviewContent => (
                                                <p key={reviewContent.id}>
                                                {reviewContent.author}
                                                </p>
                                            )).length < 1) ? "w-4 h-4 sm:w-5 sm:h-5 text-gray-300" : "w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                      <p className="text-[11px] sm:text-xs md:text-xs text-gray-500 font-medium">
                                      {
                                        reviews.filter(review => review.business_name === selectedMarker.business_name).map(reviewContent => (
                                                <p>
                                                {reviewContent.author}
                                                </p>
                                            )).length
                                         
                                      } Reviews
                                      </p>
                            </div>
                            <p className='text-[11px] sm:text-xs lg:text-xs text-gray-600'> 
                                <span><span className='font-medium text-gray-600'>{selectedMarker.town} - </span>{selectedMarker.address}</span>
                            </p>
                            <div  className="mt-2 w-full text-center border rounded-md text-gray-600 border-gray-300 py-1 hover:bg-gray-100 transition-all ease-out duration-200">
                                <Link to={`/search/${selectedMarker.business_name}/${selectedMarker.id}`} className='text-xs'>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-4 lg:w-4 flex" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg> */}
                                    <p className=''>More Info</p>
                                </Link>
                             
                            </div>
                            
                        </div>
                        </FadeInOut>
                    </InfoWindowF>
                )
            }
        </GoogleMap>
    )
}