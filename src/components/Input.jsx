
export const Input = ({
  type="text",
  label,
  name,
  placeholder,
  error,
  onChange
}) => {
  
  
  return(
  <div className="input_wrapper">
  <label htmlFor={label}>
  {label}
  </label>
  {
  type !== 'textarea'
  ?
  <input 
  id={label} 
  name={name}
  type="text"
  placeholder={placeholder}
  onChange={onChange}
  />
  :
  <textarea 
  id={label} 
  name={name}
  placeholder={placeholder}
  rows="3"
  onChange={onChange}
  />
  }
  <p className="input_error">
  {error && `Please enter valid ${label}`}
  </p>
  </div>
  )
}