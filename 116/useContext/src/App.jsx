import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar count={count} />
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Add +1</button>
      </div>
    </>
  )
}

export default App
