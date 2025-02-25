import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Pagination } from './components/ui/pagination'
import Pages from './components/pages'
import IssuesTable from './components/issues-table'
import Issue from './components/issue'

const URL = 'https://api.github.com/repos/treeverse/lakeFS/issues?per_page=2&page=2&state=all'
const TOKEN ="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"

function App() {
  const [page, setPage] = useState({nextPage: 0, lastPage: 0});
  const [issues, setIssues] = useState([])
  const [showIssue, setShowIssue] = useState(null)
  


  const getGithubPages = (linkHeader) => {
    let nextPage = null, lastPage = null;

    if (linkHeader) {
        const links = linkHeader.split(", ");
        for (const link of links) {
            const match = link.match(/<(.*?)>; rel="(.*?)"/);
            if (match) {
                const url = match[1];
                const rel = match[2];
                const pageMatch = url.match(/&page=(\d+)/);
                if (pageMatch) {
                    const pageNum = parseInt(pageMatch[1], 10);
                    if (rel === "next") nextPage = pageNum;
                    if (rel === "last") lastPage = pageNum;
                }
            }
        }
    }
    return { nextPage, lastPage };
  }


  const  getIssues = async(pageNumber: number) => {
    
    const res = await fetch(`https://api.github.com/repos/treeverse/lakeFS/issues?state=all&per_page=15&page=${pageNumber}`, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
    }});
    const issues = await res.json()
    const { nextPage, lastPage } = getGithubPages(res.headers.get('link'));
    setPage({nextPage, lastPage});
    setIssues(issues)
  }

  useEffect(() => {
    getIssues(0)
  }, [])

  return (
    <>
    <div>next: {page.nextPage}</div>
    <div>last: {page.lastPage}</div>
      <h1>lakeFS Issues</h1>
      {issues.length > 0 && <IssuesTable setIssue={(issue) => setShowIssue(issue)} issues={issues}/>}
      <Pages 
      onNextClick={getIssues} 
      nextPage={page.nextPage} 
      lastPage={page.lastPage}  />
      {showIssue && <Issue onClose={() => setShowIssue(null)} issue={showIssue}/>}
    </>
  )
}

export default App
