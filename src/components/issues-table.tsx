import { Button } from "./ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "./ui/table"
import { Badge } from "./ui/badge";
import { Issue } from "../types/issue.type";


type IssuesTableProps = {
    issues: Issue[], 
    setIssue: (issue: Issue) => void, 
}

const IssuesTable = ({ issues, setIssue } : IssuesTableProps) => {
   
  return (
    <div className="w-full relative">
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead></TableHead>
                <TableHead className="w-[100px]">Number</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Created at</TableHead>
                <TableHead>State</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                issues.map((issue: Issue) => (
                    <TableRow className="h-[65px] max-h-[65px] overflow-hidden " key={issue.id}>
                        <TableCell className="text-left"><Button onClick={() => setIssue(issue)}> Expand </Button></TableCell>
                        <TableCell className="text-left">{issue.number}</TableCell>
                        <TableCell className="text-left max-w-56">{issue.title}</TableCell>
                        <TableCell className="text-left">{issue.created_at}</TableCell>
                        <TableCell className="text-left "><Badge variant={issue.state}>{issue.state}</Badge></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
    </div>
    

  )
}

export default IssuesTable