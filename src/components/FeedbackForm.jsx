import { useReducer,useRef } from 'react'

import { Input } from './Input'
import { CountryName } from './CountryNameInput'

import isEmail from 'validator/es/lib/isEmail';
import isMobilePhone from 'validator/es/lib/isMobilePhone';

const initialState = {
    email:{isValid:true},
    phone:{isValid:true},
    isSubmitSuccessful: false
  }
  
const reducer = (state,action) => {
  
  if(action.type==="UPDATE_VALUE"){
  return ({
    ...state,
    [action.field]: action.payload
  })
  }
  
  if(action.type==="EMAIL_VALUE"){
  return ({
    ...state,
    [action.field]: {
      value:action.payload,
      isValid:isEmail(action.payload)
    }
  })
  }
  
  if(action.type==="PHONE_VALUE"){
  return ({
    ...state,
    [action.field]: {
      value:action.payload,
      isValid:isMobilePhone(action.payload)
    }
  })
  }
  
  if(action.type==="FORM_SUBMIT"){
  return ({
    ...state,
    isSubmitSuccessful: true
  })
  }
  
  if(action.type==="RESET_STATE"){
  return ({
    ...initialState
  })
  }
  
  return state
}
  
export const FeedbackForm = ({formOpen}) => {
  
  const [state,dispatch] = useReducer(reducer,initialState)
  const formRef = useRef(null)
  
  const canSubmit = state.email.isValid && state.phone.isValid && state.email.value && state.phone.value
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log(state)
    
    dispatch({type:'FORM_SUBMIT'})
    
    setTimeout(() => dispatch({type:'RESET_STATE'}), 2500)
    
    formRef.current.reset()
  }
  
  return(

  <form 
  ref={formRef}
  onSubmit={handleSubmit}
  className={`form_modal ${formOpen ? 'slide_in':''}`}
  >
  
  <div style={{margin:'2rem 0',padding:'0 6rem'}}>
  <h1>Thank you so much for taking the time!</h1>
  <p>Please provide the given details!</p>
  </div>
  
  <Input 
  placeholder="Jennifer"
  label="First Name"
  name="firstName"
  onChange={(e) => dispatch({
    type: "UPDATE_VALUE",
    field: e.target.name,
    payload: e.target.value
  })}
  />
  <Input 
  placeholder="Lawrence"
  label="Last Name"
  name="lastName"
  onChange={(e) => dispatch({
    type: "UPDATE_VALUE",
    field: e.target.name,
    payload: e.target.value
  })}
  />
  <Input 
  type="textarea"
  placeholder="Enter Your Full Postal Addresss."
  label="Address"
  name="address"
  onChange={(e) => dispatch({
    type: "UPDATE_VALUE",
    field: e.target.name,
    payload: e.target.value
  })}
  />
  
  <Input 
  placeholder="red@sparrow.com"
  label="Email ID"
  name="email"
  error={!state?.email?.isValid}
  onChange={(e) => dispatch({
    type: "EMAIL_VALUE",
    field: e.target.name,
    payload: e.target.value
  })}
  />
  <Input 
  placeholder="9871546789"
  label="Phone Number"
  name="phone"
  error={!state?.phone?.isValid}
  onChange={(e) => dispatch({
    type: "PHONE_VALUE",
    field: e.target.name,
    payload: e.target.value
  })}
  />
  
  <CountryName 
  dispatch={dispatch}
  isSubmitSuccessful={state.isSubmitSuccessful}
  />
  
  { state.isSubmitSuccessful && <p
  style={{
  color:"var(--success-green)",
  textAlign:"center",
  fontSize:"var(--title-text)",
  fontWeight:"var(--bold)",
  margin: "1rem 0"
  }}
  >Submit Successful!! Check your console for details.</p> }
  
  <button
  disabled={!canSubmit}
  className="primary-btn">
  Submit Feedback
  </button>
  
  </form>
  )
}