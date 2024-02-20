import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Marker } from '@react-google-maps/api';
import { useEffect, useRef, useState } from 'react';

const mapContainerStyle = {
  width: '100%',
  height: '450px',
};

const GoogleMapComponent = ({ currentLocation, originLocation, destinationLocation }) => {

    const [response, setResponse] = useState(null)
    const [refreshMap, setRefreshMap] = useState(false)

    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

    useEffect(() => {
        setRefreshMap(true)
        setTimeout(function(){
            setRefreshMap(false)
        }, 250)
    }, [currentLocation, originLocation, destinationLocation])

    const handleDirectionServiceCallback = (result, status) => {
        if (status === 'OK') {
            setResponse(result)
            setRefreshMap(false)
        } else {
            setRefreshMap(false)
            console.error('Directions request failed:', status)
        }
    }

    return (
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={currentLocation}
            >
                {originLocation && destinationLocation && refreshMap && (
                    <DirectionsService
                        options={{
                            origin: originLocation,
                            destination: destinationLocation,
                            travelMode: 'DRIVING',
                        }}
                        callback={handleDirectionServiceCallback}
                    />
                )}
                {currentLocation && <Marker position={currentLocation} />}
                {response && 
                    <DirectionsRenderer
                        options={{ 
                            directions: response, 
                            preserveViewport: true
                        }}
                    />
                }
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComponent;