import { Card, CardContent, CardHeader } from "../shadcn/components/ui/card";

function Weather({ weather }) {
    return (
        <Card>
            <CardHeader>
                <div className="text-center">
                    <h4 className="font-bold text-2xl">Weather at Destination</h4>
                </div>
            </CardHeader>
            <CardContent>
                <p>Name: {!weather?.name && "-"}</p>
                <p>Location: {!weather?.vicinity && "-"}</p>
            </CardContent>
        </Card>
    )
  }
  
  export default Weather