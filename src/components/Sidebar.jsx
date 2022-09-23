import { useState } from 'react'

import { Greeting } from './Greeting'
import { ViewToggle } from './ViewToggle'
import { FeedbackFormOpen } from './FeedbackFormOpen'
import { FeedbackForm} from './FeedbackForm'

export const Sidebar = ({
  setGridLayout,
  gridLayout
}) => {
  
  const [formOpen,setFormOpen] = useState(false)
  
  return(
    <aside className="sidebar">
    
    <FeedbackForm  
    formOpen={formOpen}/>
    
    <Greeting />
    
   {formOpen ? <br/> : <ViewToggle 
    gridLayout={gridLayout}
    setGridLayout={setGridLayout}
    />}
    
    <FeedbackFormOpen
    setFormOpen={setFormOpen}
    formOpen={formOpen}
    />
    
    <div className={formOpen ? "form_overlay":"hide"}>
    </div>
    
    </aside>
    )
}