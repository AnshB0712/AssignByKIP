import { useState } from 'react'

import { NewsContainer} from './components/NewsContainer'
import { Sidebar} from './components/Sidebar'
import { FrameModal} from './components/FrameModal'


function App() {
  
  const [gridLayout,setGridLayout] = useState(false)
  const [frameVisible,setFrameVisible] = useState(false)
  
  return (
    <div className="app">
    
    <Sidebar 
    setGridLayout={setGridLayout}
    gridLayout={gridLayout}
    />
    
    <NewsContainer 
    gridLayout={gridLayout}
    setFrameVisible={setFrameVisible}
    />
    
    {frameVisible && <FrameModal 
    setFrameVisible={setFrameVisible}
    />}
    
    </div>
  )
}

export default App
