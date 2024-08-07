import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { counterContext } from './Context/Context'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Hammad")
  return (
    <>
      <counterContext.Provider value={count}>
        <Navbar />
        <div>
          <h1>Counter : {count}</h1>
          <h1>Name : {name}</h1>
          <button onClick={() => setCount(count + 1)}>Add +1</button>
          <button onClick={() => setName("HK")}>Add +1</button>
        </div>
      </counterContext.Provider>
    </>
  )
}

export default App
