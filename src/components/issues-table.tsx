import { Button } from "./ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "./ui/table"
  
import { Badge } from "./ui/badge";

const IssuesTable = ({ issues, setIssue }) => {
    console.log({issues});
    
  return (
    <Table className="w-full">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead className="w-[100px]">Number</TableHead>
                <TableHead>title</TableHead>
                <TableHead>created at</TableHead>
                <TableHead>state</TableHead>
                <TableHead></TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                issues.map((issue, index) => (
                    <TableRow>
                        <TableCell className=" text-left">{issue.number}</TableCell>
                        <TableCell className=" text-left">{issue.title}</TableCell>
                        <TableCell className=" text-left">{issue.created_at}</TableCell>
                        <TableCell className="text-left"><Badge variant={issue.state}>{issue.state}</Badge></TableCell>
                        <TableCell className="text-left"><Button onClick={() => setIssue(issue)}> Expand </Button></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>

  )
}

export default IssuesTable