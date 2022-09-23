import { useState,useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounceValue'

import { Input } from './Input'

import {countryNames} from '../data/constant'

const searchCountry = (string)=>{
  if(!string) return
  
  // TO START THE QUERY ALWAYS WITH FIRST LETTER CAPITAL 
  const query = string.replace(string.substr(0,1),string.substr(0,1).toUpperCase())
  
  const results = countryNames.filter(country => country.name.startsWith(query))
  
  return results 
}

const CountryNameTab = ({name,setName,setShowOptions,dispatch}) => {
  return(
  <p 
  onClick={() => {
  setName(name)
  setShowOptions(false)
  dispatch({
  type: "UPDATE_VALUE",
  field: "country",
  payload: name
  })
  }}
  style={{
  fontSize: '1.5rem',
  fontWeight: 'var(--medium)',
  
  border: '1px solid #dbdbd8',
  borderRadius: '8px',
  
  padding: '.5rem 1rem',
  margin: '3px auto',
  background: '#fff'
  }}
  className="country_name">
  {name}
  </p>
  )
}

export const CountryName = ({
  dispatch,
  isSubmitSuccessful
}) => {
  
  const [name,setName] = useState('')
  
  // TO PREVENT TASK DO NOT FIRE OFTEN 
  const debouncedName = useDebounce(name,200)
  
  const [data,setData] = useState(null)
  const [showOptions,setShowOptions] = useState(false)
  
  useEffect(() => {
  setData(searchCountry(debouncedName
  ))
  },[debouncedName])
  
  useEffect(() => {
  if(isSubmitSuccessful)
  setName('')
  },[isSubmitSuccessful])
  
  return (
  <div className="input_wrapper">
  
  <label htmlFor="country">
  Country
  </label>
  
  <input 
  id="country"
  type="text"
  placeholder="Type Your Country Name"
  value={name}
  onChange={(e) => {
  setName(e.target.value)
  setShowOptions(true)
  }}
  />
  
  <div 
  className="country_name_container">
  {showOptions && data?.map(obj => (
  <CountryNameTab 
  key={obj.code}
  name={obj.name}
  setName={setName}
  dispatch={dispatch}
  setShowOptions={setShowOptions}
  />
  ))}
  {data?.length===0 
  && 
  <p className="country_name">No data to show</p>
  }
  </div>
  
  </div>
  )
}