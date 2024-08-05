// import React from 'react'
import { useState } from "react";
const App = () => {
  const [value, setValue] = useState(1)
  return (
    <div>
      <h2>Counter is {value}</h2>
      <button onClick={() => setValue(value * 2)}>Multiply with 2</button>
      <button onClick={() => setValue(value / 2)}>divide by 2</button>

    </div>
  )
}

export default App;