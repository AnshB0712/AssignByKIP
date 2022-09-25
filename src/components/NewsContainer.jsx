import { useState,useEffect } from 'react'
import { useFetchWithAbort } from '../hooks/useFetchWithAbort'

import { NewsCard } from './NewsCard'
import { Pagination } from './Pagination'

export const NewsContainer = ({
  gridLayout,
  setFrameVisible
}) => {
  
  const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
  
  const {data} = useFetchWithAbort(POST_URL)
  const [currentRecords,setCurrentRecords] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  
  const recordsPerPage = 6;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  
  useEffect(() => {
   setCurrentRecords(
     data?.slice(indexOfFirstRecord,indexOfLastRecord)
     )
 },[data,currentPage])
  
  const noOfPages = Math.ceil(data?.length / recordsPerPage)
  
  const removeNewsCard = (id) => setCurrentRecords(prev => prev.filter(post => post.id!==id))
  
  if(!data)
  return(
  <main style={{
  minHieght:'500px',
  display:'grid',
  placeItems:'center'
  }}>
  <h2>Loading ...</h2>
  </main>
  )
  
  return (
  <div>
  <main 
  className={
  `main_container_layout ${gridLayout ? 'grid_container_layout':''}`
  }>
  {
  currentRecords?.length
  ?
  currentRecords?.map(post => (
  <NewsCard 
  gridLayout={gridLayout}
  removeNewsCard={removeNewsCard}
  key={post.id} 
  post={post} 
  setFrameVisible={setFrameVisible}
  />
  ))
  :
  <NoMoreData />
  }
  </main>
  <Pagination 
  noOfPages={noOfPages}
  currentPage={currentPage}
  setCurrentPage={setCurrentPage}
  />
  </div>
  )
}

const NoMoreData = () => {
  return(
  <main style={{
  minHieght:'500px',
  display:'grid',
  placeItems:'center'
  }}>
  <h2>No more data to show.</h2>
  </main>
  )
}