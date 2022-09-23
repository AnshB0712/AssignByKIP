import { useState,useEffect } from 'react'

export const useFetchWithAbort = (URL) => {
  
  const [data,setData] = useState(null)
  
  const fetchData = async ({signal}) => {
    try {
    const response = await fetch(URL,{signal})
    
    if(response.status === 404){
    throw new Error('Something went wrong!!!')
    }
    
    const json = await response.json()
    
    setData(json)
    
    } catch (e) {
      
      if(e.name !== 'AbortError')
      console.error(e)
      
    }
  }

  useEffect(() => {
    
  const controller = new AbortController
  
  fetchData({
    signal: controller.signal
  })
  
  return () => controller.abort()
  },[])
  
  return {data,setData}
}