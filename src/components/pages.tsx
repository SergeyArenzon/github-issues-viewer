import {  
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious } from "./ui/pagination"

  
  const Pages = ({lastPage, nextPage, onNextClick}) => {
    console.log({lastPage, nextPage});

    function getPaginationRange(current, maxPage) {
        const start = Math.max(1, current - 3);  // Start from 1, but not less than (current - 3)
        const end = Math.min(maxPage, current + 3); // End at maxPage, but not more than (current + 3)
        const pages = [];
    
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
    
        return pages;
    }

    const pagesOnView = getPaginationRange(nextPage -1, lastPage);
    
    console.log(getPaginationRange(nextPage -1, lastPage));
    
    return (
        <Pagination>
            <PaginationContent>
            
            <PaginationItem>
                <PaginationPrevious href="#" 
                onClick={(e) => {
                    e.preventDefault();
                    onNextClick(nextPage - 2)
                }}/>
            </PaginationItem>
            <PaginationItem>
                {nextPage > 5 && <PaginationEllipsis />}
            </PaginationItem>
            {
                pagesOnView.map((number, index) => (
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
                 <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
                <PaginationNext onClick={(e) => {
                    e.preventDefault();
                    onNextClick(nextPage)
                }} size={lastPage} href={nextPage} />
            </PaginationItem>
            </PaginationContent>
      </Pagination>
      
    )
  }
  
  export default Pages