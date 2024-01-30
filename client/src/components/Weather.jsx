import { useOpenWeatherMap } from "src/services/useGraphQLRequests";
import { Card, CardContent, CardHeader } from "../shadcn/components/ui/card";

function kmhToMph(kmh) {
    const mph = kmh * 0.621371;
    return parseFloat(mph.toFixed(2));
}
  
function metersToMiles(meters) {
    const miles = meters * 0.000621371;
    return parseFloat(miles.toFixed(2));
}

function kelvinToFahrenheit(kelvin) {
    const fahrenheit = ((kelvin - 273.15) * 9/5) + 32;
    return parseFloat(fahrenheit.toFixed(2));
}

function Weather({ location }) {

    const { isPending, isError, data, error } = useOpenWeatherMap(location)
    
    if(isError) return <div><span>Error: {error.message}</span></div>

    return (
        <Card>
            <CardHeader>
                <div className="text-center">
                    <h4 className="font-bold text-2xl">Weather in {location}</h4>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="flex items-center justify-center">
                    <div className="flex flex-col bg-white">
						<div className="text-6xl self-center inline-flex items-center justify-center rounded-lg text-gray-700 h-24 w-24">
                            { 
                                isPending 
                                ? <span className="inline-block align-middle animate-pulse h-24 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></span> 
                                : <img src={`https://openweathermap.org/img/wn/${data?.FetchWeatherAtLocation.weather[0].icon}@2x.png`} />
                            }
						</div>
                        <div className="font-bold text-center text-2xl">{ isPending ? <span className="inline-block align-middle animate-pulse h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></span> : data?.FetchWeatherAtLocation.weather[0].main }</div>
						<div className="flex flex-row items-center justify-center mt-6">
							<div className="font-medium text-6xl text-indigo-400">
                                { 
                                    isPending 
                                    ? <span className="inline-block align-middle animate-pulse h-16 bg-gray-200 dark:bg-gray-700 w-64"></span> 
                                    : kelvinToFahrenheit(data?.FetchWeatherAtLocation.main.temp) + ' °F' 
                                }
                            </div>
						</div>
						<div className="flex flex-row justify-between mt-6">
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Wind</div>
								<div className="text-sm text-gray-500">{ isPending ? <span className="inline-block align-middle animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></span> : kmhToMph(data?.FetchWeatherAtLocation.wind.speed) + ' mph' }</div>
							</div>
							<div className="flex flex-col items-center ml-4">
								<div className="font-medium text-sm">Humidity</div>
								<div className="text-sm text-gray-500">{ isPending ? <span className="inline-block align-middle animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></span> : data?.FetchWeatherAtLocation.main.humidity + '%' }</div>
							</div>
							<div className="flex flex-col items-center ml-4">
								<div className="font-medium text-sm">Visibility</div>
								<div className="text-sm text-gray-500">{ isPending ? <span className="inline-block align-middle animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></span> : metersToMiles(data?.FetchWeatherAtLocation.visibility) + ' miles' }</div>
							</div>
						</div>
					</div>
                </div>
            </CardContent>
        </Card>
    )
  }

  /**
   * EXAMPLE RESPONSE: I s
`   {
        "coord": {
            "lon": -74.006,
            "lat": 40.7143
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 277.28,
            "feels_like": 271.65,
            "temp_min": 276.01,
            "temp_max": 278.27,
            "pressure": 1009,
            "humidity": 88
        },
        "visibility": 10000,
        "wind": {
            "speed": 9.77,
            "deg": 50,
            "gust": 13.38
        },
        "clouds": {
            "all": 100
        },
        "dt": 1706457943,
        "sys": {
            "type": 2,
            "id": 2008101,
            "country": "US",
            "sunrise": 1706443804,
            "sunset": 1706479648
        },
        "timezone": -18000,
        "id": 5128581,
        "name": "New York",
        "cod": 200
    }
   */
  
  export default Weather