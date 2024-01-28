import { Card, CardContent, CardHeader } from "../shadcn/components/ui/card";

function Coordinates({ latitude, longitude }) {

    return (
        <Card>
            <CardHeader>
                <div className="text-center">
                    <h4 className="font-bold text-2xl">Coordinates</h4>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <p><span className="text-gray-700 text-sm font-bold">Latitude:</span> { !latitude ? <span className="inline-block align-middle animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></span> : latitude }</p>
                <p><span className="text-gray-700 text-sm font-bold">Longitude:</span>  { !longitude ? <span className="inline-block align-middle animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></span> : longitude }</p>
            </CardContent>
        </Card>
    )
}

export default Coordinates
