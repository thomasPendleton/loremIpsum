import React, { useEffect, useState } from 'react'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (amount <= 0) {
      amount = 1
      setCount(1)
    }
    if (amount > 8) {
      amount = 8
      setCount(8)
    }
    setText(data.slice(0, amount))
  }

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs: </label>
        <input
          type="number"
          min="0"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((sentence, idx) => {
          return <p key={idx}>{sentence}</p>
        })}
      </article>
    </section>
  )
}

export default App
