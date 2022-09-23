export const FeedbackFormOpen = ({setFormOpen,formOpen}) => 
{
  return(
  <div className="container">
  <h3>Have a Feedback?</h3>
  <br />
  <button 
  className={`primary-btn ${formOpen ? "close_feedbackform":""}`}
  onClick={() => setFormOpen(p => !p)}
  >
  {formOpen ? "Close" : "We're Listening!"}
  </button>
  </div>
  )
}