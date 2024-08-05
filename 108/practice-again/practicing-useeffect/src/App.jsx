import { useState, useEffect } from 'react'
import './App.css'
import Counter2 from './Components/Counter2'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.warn("Value of Count FROM APP.JSX changes")
  }, [count])



  return (
    <>
      <h3>|Count 1|</h3>
      <h1>Current Value is {count}</h1>
      <button onClick={() => { setCount(count + 1) }}>Add +1</button>

      <h3>|Counter 2 value is| </h3>
      <Counter2 count1={count} />
    </>
  )
}

export default App
