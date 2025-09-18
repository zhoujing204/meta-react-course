import { useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [comment, setComment] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Custom validation: if score is 5 or less, comment must be at least 10 characters
    if (score <= 5 && comment.length < 10) {
      alert('Please provide a more detailed comment when giving a low score.')
    }
    // If validation passes, log a confirmation message
    else {
        console.log('Form submitted successfully!', { score, comment })
        alert('Thank you for your feedback!')
    }
    // Reset form fields to initial values
    setScore(10)
    setComment('')
  }

  return (
    <>
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="score">Score: {score}</label>
          <input
            type="range"
            id="score"
            min="0"
            max="10"
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
          />
        </div>

        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="5"
            cols="50"
          />
        </div>

        <button type="submit">Submit Feedback</button>
        <p>
          <input type="checkbox"
                 id="terms"
                 name="terms"
                 value={termsAccepted}
                 onChange={(e) => setTermsAccepted(e.target.checked)}
                 />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </p>
      </form>
    </>
  )
}

export default App
