import { CircleX } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card"
  

const Issue = ({issue, onClose}) => {
    console.log(issue, issue.title);
  return (
    <div className="w-full h-full bg-white fixed left-0 top-0 flex justify-center items-center px-10" onClick={onClose}>
        <Card onClick={(e)=>e.stopPropagation()} className="px-3">
            <CircleX onClick={onClose} className="cursor-pointer"/>
            <CardHeader>
                <CardTitle>{issue.title} #{issue.number} <Badge variant={issue.state}>{issue.state}</Badge></CardTitle>
                <Button variant="link" >{issue.url}</Button>
            </CardHeader>
            <CardDescription className="overflow-auto">{issue.body}</CardDescription>
            <CardFooter>Created at: { issue.created_at}</CardFooter>
        </Card>
    </div>

  )
}

export default Issue