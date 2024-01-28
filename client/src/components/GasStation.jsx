import { Card, CardContent, CardHeader } from "../shadcn/components/ui/card";

function GasStation({ gasStation }) {
    return (
        <Card>
            <CardHeader>
                <div className="text-center">
                    <h4 className="font-bold text-2xl">Nearest Gas Station</h4>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <p>Name: {!gasStation?.name && "-"}</p>
                <p>Location: {!gasStation?.vicinity && "-"}</p>
            </CardContent>
        </Card>
    )
  }
  
  export default GasStation