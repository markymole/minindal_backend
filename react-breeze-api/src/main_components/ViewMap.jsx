import React, { useMemo, useState, useEffect, useContext } from "react"
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import RecordsContext from "../context/RecordsContext"

export default function ViewMap(){
    
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    })

    if(!isLoaded){
        return(
            <div>loading</div>
        )
    }
    return <Viewed/>
}

function Viewed(){
    const { formValues} = useContext(RecordsContext);
    
    const [late, setLat] = useState(Number(formValues['latitude']));
    const [long, setLong] = useState(Number(formValues['longitude']));

    const center = useMemo(() => ({lat:15.133964, lng:120.591027}), []);
    // const marker = useMemo(() => ({lat: late, lng:long}), []);
    return (
        <GoogleMap 
            zoom={12}
            center={{lat:late, lng:long}}
            mapContainerClassName="map-container" 
            
            //remove labels
            options={{ styles: [{ elementType: "labels", featureType: "poi.business", stylers: [{ visibility: "off", }], }], streetViewControl: false}}
        >
            <MarkerF position={{ lat: late, lng:long }}/>
            
        </GoogleMap>
        
    )
}