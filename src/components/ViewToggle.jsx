import { CardList,CardText } from 'react-bootstrap-icons'

export const ViewToggle = ({
  setGridLayout,
  gridLayout
}) => {
  return(
  <div 
  style={{margin: '1.5rem auto'}} 
  className="container"
  >
    <h3>View Toggle</h3>
    
    <div className="segmented_ctrl">
    
    <button
    onClick={()=>setGridLayout(true)}
    className={gridLayout ? 'active':undefined}
    >
    <CardText  size={26}/>
    </button>
    
    <button 
    onClick={()=>setGridLayout(false)}
    className={!gridLayout ? 'active':undefined}
    >
    <CardList size={26}/>
    </button>
    
    </div>
    
  </div>
  )
}