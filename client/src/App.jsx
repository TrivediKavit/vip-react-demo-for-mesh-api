import { useEffect, useState } from 'react'
import './App.css'

// import NearestGasStation from './components/NearestGasStation'
import InputField from './components/InputField'
import Weather from './components/Weather'
import GeoLocationViaIP from './components/GeoLocationViaIP'
import Coordinates from './components/Coordinates'
import GoogleMapComponent from './components/GoogleMap'

function App() {

    const [ipAddress, setIpAddress] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null)
    const [originLocation, setOriginLocation] = useState("New York")
    const [destinationLocation, setDestinationLocation] = useState("Washington DC")
    // const [gasStation, setGasStation] = useState(null)

    const fetchIpAddressData = async () => {
        const res = await fetch("https://api.ipify.org/?format=json")
                .then(response => response.json())
                .then(data => setIpAddress(data.ip))
    };

    // const fetchNearestGasStationFromGooglePlacesAPI = async () => {
    //     const response = await fetch(`/nearest-gas-station?lat=${currentLocation?.lat}&lng=${currentLocation?.lng}`);
    //     const data = await response.json();
    //     setGasStation(data.results[0]);
    // };

    // useEffect(() => {
    //     if(!currentLocation) return
    //     const fetchNearestGasStation = async () => {
    //         try {
    //             const response = await fetchNearestGasStationFromGooglePlacesAPI();
    //             setGasStation(response.results[0]);
    //         } catch (error) {
    //             console.error('Error fetching nearest gas station:', error);
    //         }
    //     };
    
    //     fetchNearestGasStation();
    // }, [currentLocation]);

    useEffect(() => {
        fetchIpAddressData()
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                // setCurrentLocation({
                //     "lat": position.coords.latitude,
                //     "lng": position.coords.longitude
                // })
                setCurrentLocation({
                    "lat": 40.00269578866509, 
                    "lng": -75.17282883981758
                })
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
                        label="Origin Location" 
                        type="text" 
                        value={originLocation}
                        handleChange={(event) => setOriginLocation(event.target.value)}
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
                {/* <div className="flex items-stretch">
                    <NearestGasStation gasStation={gasStation} />
                </div> */}
                <div className="flex items-stretch col-start-1 col-end-4">
                    <GoogleMapComponent 
                        currentLocation={currentLocation}
                        originLocation={originLocation} 
                        destinationLocation={destinationLocation}
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-stretch">
                    <Weather location={originLocation} />
                </div>
                <div className="flex items-stretch">
                    <Weather location={destinationLocation} />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-stretch">
                    <Coordinates latitude={currentLocation?.lat} longitude={currentLocation?.lng} />
                </div>
                <div className="flex item-stretch">
                    <GeoLocationViaIP ipAddress={ipAddress} />
                </div>
            </div>
        </div>
    )
}

export default App