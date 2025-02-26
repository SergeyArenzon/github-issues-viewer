import { useEffect, useRef, useState } from 'react'
import { getGithubPages } from '../lib/github';
import { Issue } from '../types/issue.type';

const TOKEN ="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"


const useGithubFetch = (pageNumber: number) => {
    const [pageState, setPageState] = useState<{nextPage: number, lastPage: number }>({nextPage: 0, lastPage: 0});
    const [issues, setIssues] = useState<Issue[]>([])
    const [showIssue, setShowIssue] = useState<Issue | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const lastPageMemoryRef = useRef(0)
    
      const  getIssues = async(pageNumber: number) => {
        setIsLoading(true);
        const res = await fetch(`https://api.github.com/repos/treeverse/lakeFS/issues?state=all&per_page=7&page=${pageNumber}`, {
          headers: {
            'Authorization': `Bearer ${TOKEN}`,
            'Content-Type': 'application/json'
        }});
        const issues = await res.json()
        const { nextPage, lastPage } = getGithubPages(res.headers.get('link'));
        
        if (lastPage !== null && nextPage !== null) {
          lastPageMemoryRef.current = lastPage
          setPageState({nextPage, lastPage});
        } else {
          setPageState({nextPage:  lastPageMemoryRef.current + 1, lastPage: lastPageMemoryRef.current});
        }
        
        setIssues(issues)
        setIsLoading(false)
      }
    
  useEffect(() => {
    getIssues(pageNumber)
  }, [pageNumber])

  return {issues, pageState, showIssue, isLoading, setShowIssue}
  
}

export default useGithubFetch