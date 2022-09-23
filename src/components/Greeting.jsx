import profile from '../assets/profile.jpeg'

export const Greeting = () => {
  return(
  <div className="greeting container">
  
    <img className="avatar_image" 
   src={profile}/>
   
    <div>
    <h3>Hiii Reader,</h3>
    <p>Here's your News!</p>
    </div>

  </div>
  )
}