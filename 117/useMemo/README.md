readme.md

### README.md

# React App with useMemo Optimization

This project demonstrates how to optimize an expensive computation in a React component using the `useMemo` hook.

## Steps to Implement `useMemo`

### 1. **Initial Setup**

- Create a large array with 30 million elements where each element is an object with `index` and `isMagical` properties.
- The `isMagical` property is `true` for a specific index (29,000,000).

### 2. **Without `useMemo`**

- The `magical` number is found by using the `find` method on the array. This can be an expensive operation, especially if it's recalculated on every render.

```javascript
const magical = numbers.find(item => item.isMagical === true);
```

### 3. **Introduce `useMemo`**

- To optimize the expensive computation, wrap the `find` operation inside `useMemo`.
- `useMemo` will memoize the result, meaning it will only recompute the `magical` number when the `numbers` array changes.

```javascript
const magical = useMemo(() => numbers.find(item => item.isMagical === true), [numbers]);
```

### 4. **Triggering a Recalculation**

- In the button's `onClick` event, modify the `numbers` array when `count` reaches 10, causing `useMemo` to recompute the `magical` number.

```javascript
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
```

### 5. **Final Code**

```javascript
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
```

### 6. **Before and After**

- **Before `useMemo`**: The expensive `find` operation is executed on every render, which can slow down the app.
- **After `useMemo`**: The `find` operation is only executed when the `numbers` array changes, improving performance.

---

### How to Use

1. Copy the code into your React project.
2. Run the project and observe the performance before and after clicking the button.

This demonstrates how `useMemo` can optimize your React components by avoiding unnecessary recalculations.