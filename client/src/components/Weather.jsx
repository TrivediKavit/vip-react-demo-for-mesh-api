import { useOpenWeatherMap } from "src/services/useGraphQLRequests";
import { Card, CardContent, CardHeader } from "../shadcn/components/ui/card";

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
                <p><span className="text-gray-700 text-sm font-bold">Icon:</span> { isPending ? <span className="inline-block align-middle animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></span> : data?.FetchWeatherAtLocation.weather[0].icon }</p>
                <p><span className="text-gray-700 text-sm font-bold">Main:</span> { isPending ? <span className="inline-block align-middle animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></span> : data?.FetchWeatherAtLocation.weather[0].main }</p>
                <p><span className="text-gray-700 text-sm font-bold">Description:</span> { isPending ? <span className="inline-block align-middle animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></span> : data?.FetchWeatherAtLocation.weather[0].description }</p>
                <p><span className="text-gray-700 text-sm font-bold">Temperature:</span> { isPending ? <span className="inline-block align-middle animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></span> : data?.FetchWeatherAtLocation.main.temp }</p>
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