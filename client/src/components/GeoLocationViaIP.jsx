import { useGeoLocate } from "src/services/useGraphQLRequests";
import { Card, CardContent, CardHeader } from "../shadcn/components/ui/card";

function GeoLocationViaIP({ ipAddress }) {

    const { isPending, isError, data, error } = useGeoLocate(ipAddress)

    if(isError) return <div><span>Error: {error.message}</span></div>

    return (
        <Card>
            <CardHeader>
                <div className="text-center">
                    <h4 className="font-bold text-2xl">GeoLocation via IP</h4>
                </div>
            </CardHeader>
            <CardContent>
                <p>IP Address: { isPending ? <span class="inline-block align-middle animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></span> : data?.GeoLocateViaIP?.ipAddress }</p>
                <p>City:  { isPending ? <span class="inline-block align-middle animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></span> : data?.GeoLocateViaIP?.cityName }</p>
            </CardContent>
        </Card>
    )
}

export default GeoLocationViaIP
