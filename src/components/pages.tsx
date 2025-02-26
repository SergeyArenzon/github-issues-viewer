import {  
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious } from "./ui/pagination"

  type PagesProps = {
    lastPage: number,
    nextPage: number, 
    onNextClick: (n: number) => void
  }

  const Pages = ({lastPage, nextPage, onNextClick} : PagesProps) => {    
    function getPaginationRange(current: number, maxPage: number) {
        const totalVisible = 7; // Always show 7 items if possible
        let start = Math.max(1, current - Math.floor(totalVisible / 2));
        let end = start + totalVisible - 1;
    
        if (end > maxPage) {
            end = maxPage;
            start = Math.max(1, end - totalVisible + 1);
        }
    
        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
    
        return pages;
    }
    

    const pagesOnView = getPaginationRange(nextPage -  1, lastPage);
  
    
    return (
        <Pagination className="w-60">
            <PaginationContent>
            <PaginationItem>
                {
                    nextPage > 2 &&
                    <PaginationPrevious  href="#" 
                onClick={(e) => {
                    e.preventDefault();
                    onNextClick(nextPage - 2)
                }}/>}
            </PaginationItem>

            <PaginationItem>
                {
                !pagesOnView.includes(1) &&    
                <PaginationLink 
                        isActive={false}
                        onClick={(e) => {
                            e.preventDefault();
                            onNextClick(1)
                        }}
                        href="#">
                            {1}
                </PaginationLink>
                }
            </PaginationItem>

            <PaginationItem>
                {nextPage && nextPage > 5 && <PaginationEllipsis />}
            </PaginationItem>
            {
                pagesOnView.map((number: number) => (
                    <PaginationItem key={number}>
                        <PaginationLink 
                        isActive={nextPage - 1  === number}
                        onClick={(e) => {
                            e.preventDefault();
                            onNextClick(number)
                        }}
                        href="#">
                            {number}
                        </PaginationLink>
                    </PaginationItem>
                ))
            }
            <PaginationItem>
                {!pagesOnView.includes(lastPage) &&  <PaginationEllipsis />}
            </PaginationItem>
            <PaginationItem>
                {
                !pagesOnView.includes(lastPage) &&    
                <PaginationLink 
                        isActive={false}
                        onClick={(e) => {
                            e.preventDefault();
                            onNextClick(lastPage)
                        }}
                        href="#">
                            {lastPage}
                </PaginationLink>
                }
            </PaginationItem>

            <PaginationItem>
                {nextPage <= lastPage && 
                <PaginationNext  
                    onClick={(e) => {
                            e.preventDefault();
                            onNextClick(nextPage)
                        }}  
                    href={nextPage} />}
                </PaginationItem>
            </PaginationContent>
      </Pagination>
      
    )
  }
  
  export default Pages