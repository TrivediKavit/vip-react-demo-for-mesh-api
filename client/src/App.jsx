import { useEffect, useState } from 'react'

import GasStation from './components/GasStation'
import InputField from './components/InputField'
import Weather from './components/Weather'
import GeoLocationViaIP from './components/GeoLocationViaIP'

import './App.css'

function App() {

    const [ipAddress, setIpAddress] = useState("");
    const [currentLocation, setCurrentLocation] = useState("New York")
    const [destinationLocation, setDestinationLocation] = useState("Washington DC")
    const [nextGasStation, setNextGasStation] = useState(null)

    const fetchIpAddressData = async () => {
        const res = await fetch("https://api.ipify.org/?format=json")
                .then(response => response.json())
                .then(data => setIpAddress(data.ip))
    };

    useEffect(() => {
        fetchIpAddressData()
    }, [])

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
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <GasStation gasStation={nextGasStation} />
                </div>
                <div>
                    <Weather />
                </div>
                <div>
                    <GeoLocationViaIP ipAddress={ipAddress} />
                </div>
            </div>
        </div>
    )
}

export default App