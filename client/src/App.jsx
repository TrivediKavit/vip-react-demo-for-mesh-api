import { useEffect, useState } from 'react'

import GasStation from './components/GasStation'
import InputField from './components/InputField'
import Weather from './components/Weather'
import GeoLocationViaIP from './components/GeoLocationViaIP'

import './App.css'
import Coordinates from './components/Coordinates'

function App() {

    const [ipAddress, setIpAddress] = useState(null);
    const [currentLocation, setCurrentLocation] = useState("New York")
    const [destinationLocation, setDestinationLocation] = useState("Washington DC")
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [nextGasStation, setNextGasStation] = useState(null)

    const fetchIpAddressData = async () => {
        const res = await fetch("https://api.ipify.org/?format=json")
                .then(response => response.json())
                .then(data => setIpAddress(data.ip))
    };

    useEffect(() => {
        fetchIpAddressData()
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          }, (error) => {
            console.error('Error getting current location:', error);
          });
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      }, []);

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="text-center mb-6">
                <h1 className="font-bold text-4xl">Road Trip Planner</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <InputField 
                        label="Current Location" 
                        type="text" 
                        value={currentLocation}
                        handleChange={(event) => setCurrentLocation(event.target.value)}
                    />
                </div>
                <div>
                    <InputField 
                        label="Destination Location" 
                        type="text"
                        value={destinationLocation}
                        handleChange={(event) => setDestinationLocation(event.target.value)}
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex items-stretch">
                    <Coordinates latitude={latitude} longitude={longitude} />
                </div>
                <div className="flex items-stretch">
                    <GeoLocationViaIP ipAddress={ipAddress} />
                </div>
                <div className="flex items-stretch">
                    <Weather location={destinationLocation} />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex items-stretch">
                    <GasStation gasStation={nextGasStation} />
                </div>
                <div className="flex items-stretch col-start-2 col-end-3">
                    [MAP HERE]
                </div>
            </div>
        </div>
    )
}

export default App