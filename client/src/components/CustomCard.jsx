import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../shadcn/components/ui/card"

function CustomCard({ children }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Road Trip Planner</CardTitle>
                <CardDescription>This is a demo application built on React to showcase VIP Mesh API.</CardDescription>
            </CardHeader>
            <CardContent>
                { children }
            </CardContent>
        </Card>
    )
}

export default CustomCard;