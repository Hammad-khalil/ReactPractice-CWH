import { useState, useMemo } from 'react'
import './App.css'

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

  // Expensive Computation wrapped with useMemo
  const magical = useMemo(() => numbers.find(item => item.isMagical === true), [numbers]);

  return (
    <>
      <span>
        Magical Number is {magical.index}
      </span>
      <div>Count : {count}</div>
      <button onClick={() => {
        setCount((count) => count + 1);
        if (count === 10) {
          setNumbers(new Array(10_000_000).fill(0).map((_, i) => {
            return {
              index: i,
              isMagical: i === 9_000_000
            }
          }))
        }
      }}>Fast now ⚡ </button>
    </>
  )
}

export default App