import React, { useMemo, useState, useEffect, useContext } from "react"
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import RecordsContext from "../context/RecordsContext"

export default function SearchMap(){
    
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    })

    if(!isLoaded){
        return(
            <div>loading</div>
        )
    }
    return <MapCoords/>
}

function MapCoords(){
    const { formValues, setFormValues} = useContext(RecordsContext);
    
    const [late, setLat] = useState(formValues['latitude']);
    const [long, setLong] = useState(formValues['longitude']);

    useEffect(() => {
        setFormValues({...formValues, latitude: late, longitude: long});

    }, [late, long])


    const center = useMemo(() => ({lat:15.133964, lng:120.591027}), []);
    // const marker = useMemo(() => ({lat: late, lng:long}), []);

    return (
        <GoogleMap 
            zoom={12}
            center={center}
            onClick={ev => {
                setLat(ev.latLng.lat());
                setLong(ev.latLng.lng());
              }}
            mapContainerClassName="map-container" 
            
            //remove labels
            options={{ styles: [{ elementType: "labels", featureType: "poi.business", stylers: [{ visibility: "off", }], }], streetViewControl: false}}
        >
            <MarkerF position={{ lat: late, lng:long }}/>
            
        </GoogleMap>
        
    )
}