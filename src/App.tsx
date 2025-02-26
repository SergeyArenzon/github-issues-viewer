import { useState } from 'react'
import './App.css'
import Pages from './components/pages'
import IssuesTable from './components/issues-table'
import IssueItem from './components/issue'
import useGithubFetch from './hooks/useGithubFetch'
import Loading from './components/loading'

function App() {
  const [nextPage, setNextPage] = useState<number>(0)
  const {isLoading, issues, pageState, showIssue, setShowIssue} = useGithubFetch(nextPage);

  return (
    <div className='flex flex-col gap-3'>
      {isLoading && <Loading/>}
      <h1 className='text-6xl'>LakeFS Github Issues</h1>
      {issues.length > 0 && <IssuesTable setIssue={(issue) => setShowIssue(issue)} issues={issues}/>}
     {issues.length > 0 && <Pages 
        onNextClick={(numb: number) => setNextPage(numb)} 
        nextPage={pageState.nextPage} 
        lastPage={pageState.lastPage}  />}
      {showIssue && <IssueItem onClose={() => setShowIssue(null)} issueItem={showIssue}/>}
    </div>
  )
}

export default App
