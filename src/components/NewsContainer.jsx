import { useState } from 'react'
import { useFetchWithAbort } from '../hooks/useFetchWithAbort'

import { NewsCard } from './NewsCard'
import { Pagination } from './Pagination'

export const NewsContainer = ({
  gridLayout,
  setFrameVisible
}) => {

  const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
  
  const {data,setData} = useFetchWithAbort(POST_URL)
  
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);
  
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  
  const currentRecords = data?.slice(indexOfFirstRecord,indexOfLastRecord);
  
  const noOfPages = Math.ceil(data?.length / recordsPerPage)
  
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
  currentRecords.map(post => (
  <NewsCard 
  gridLayout={gridLayout}
  key={post.id} 
  setData={setData}
  post={post} 
  setFrameVisible={setFrameVisible}
  />
  ))
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