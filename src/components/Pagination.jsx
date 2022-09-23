import { useState } from 'react'
import { ChevronDoubleRight,ChevronDoubleLeft } from 'react-bootstrap-icons'

export const Pagination = ({
  noOfPages,
  
  currentPage,
  setCurrentPage,
  
  maxPageNumber=3,
  minPageNumber=1
}) => {
  
  const pageNumbers = []
  
  for (let i = 0;i<noOfPages;i++)
  pageNumbers.push(i+1)

  const next = () => {
    if(currentPage < maxPageNumber)
    setCurrentPage(p => p+1)
  }
  const prev = () => {
    if(currentPage > minPageNumber)
    setCurrentPage(p => p-1)
  }
  
  return(
  <nav className="pagination">
   <ul>
   
    <li 
    onClick={prev} 
    className={currentPage === 1 ? 'hide':undefined}>
    <ChevronDoubleLeft 
    color="grey"
    size={12}/>
    </li>
    
    {
    pageNumbers?.map(number => {
    if(
    number<=maxPageNumber 
    && 
    number>=minPageNumber 
    )
    return(
      <li 
      key={number} 
      className={number === currentPage ? 'page-item active':'page-item'}
      onClick={() => setCurrentPage(number)}
      >
      {number}
      </li>
      )
    })
    }
    
    <li 
    onClick={next}
    className={currentPage === maxPageNumber ? 'hide':undefined}
    >
    <ChevronDoubleRight 
    color="grey"
    size={12}/>
    </li>
    
   </ul>
  </nav>
  )
}