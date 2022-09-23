import photo from '../assets/photo.jpeg'

export const FrameModal = ({setFrameVisible}) => {
  return (
    <div 
    onClick={() => setFrameVisible(false)}
    className="frame_overlay">
    <iframe 
    src="https://www.ndtv.com/" 
    loading="lazy" 
    />
    </div>
  )
}