import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [error, setError] = useState('')

  const increment = () => {
    if (count >= 10) {
      setError('Count cannot be more than 10')
      return
    }
    setError('')
    setCount((prevCount) => prevCount + 1)
  }

  const decrement = () => {
    if (count <= 0) {
      setError('Count cannot be less than 0')
      return
    }
    setError('')
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <>
      <div className="">
        <h1>Count is {count}</h1>
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>
          Decrement
        </button>
        {error && <p className="error">{error}</p>}
      </div>
    </>
  )
}

export default App
