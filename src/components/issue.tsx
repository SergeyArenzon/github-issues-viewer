import { CircleX } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card"
import { Issue } from "../types/issue.type";
  
type IssueItemProps = {
  issueItem: Issue,
  onClose: () => void
}

const IssueItem = ({issueItem, onClose} : IssueItemProps) => {;
  return (
    <div className="w-full h-full bg-white fixed left-0 top-0 flex justify-center items-center px-10" onClick={onClose}>
        <Card onClick={(e)=>e.stopPropagation()} className="px-3 overflow-hidden w-[600px]">
          <div className="flex justify-between items-center">
            <CircleX onClick={onClose} className="cursor-pointer"/>
            <Badge variant={issueItem.state}>{issueItem.state}</Badge>
          </div>
            <CardHeader>
                <CardTitle>{issueItem.title} #{issueItem.number}</CardTitle>
                <Button variant="link" >{issueItem.url}</Button>
            </CardHeader>
              <CardDescription className="h-40 w-full overflow-auto">{issueItem.body}</CardDescription>
            <CardFooter className="italic text-sm">Created at: { issueItem.created_at}</CardFooter>
        </Card>
    </div>

  )
}

export default IssueItem