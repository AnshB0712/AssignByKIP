import photo from '../assets/photo.jpeg'
import {X} from 'react-bootstrap-icons'

export const NewsCard = ({post,gridLayout,setFrameVisible,removeNewsCard}) => {
  
  return (
  <figure 
  className={`news_card ${gridLayout ?'grid_layout_news_card':''}`}
  >
  
  <img className={gridLayout ? "grid_avatar_image":"avatar_image"} src={photo} />
  
  <div 
  style={{pointer:'cursor'}}
  onClick={() => setFrameVisible(true)}
  >
  <h3>{post.title}</h3>
  <p>{post.body.substring(0,70)}</p>
  <p className="date">{new Date().toGMTString()}</p>
  </div>
  
  <button 
  onClick={() => removeNewsCard(post.id)}
  className={
  `newscard_close_button ${gridLayout ? 'grid_layout_close_button':''}`
  }>
  <X size={25}/>
  </button>
  
  </figure>
  )
}
