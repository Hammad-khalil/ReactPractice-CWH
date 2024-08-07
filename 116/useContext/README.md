
---

## How to Create and Use Context in React

### Step 1: Create Context Folder

1. Create a folder named `context` inside the `src` directory.
2. Inside the `context` folder, create a file named `context.js`.

### Step 2: Import `createContext` in `context.js`

```javascript
import { createContext } from "react";
```

### Step 3: Create Context Variable

Inside `context.js`, create your context variable:

```javascript
export const counterContext = createContext(0);
```

### Step 4: Wrap Your Component Tree with Provider in `App.jsx`

Import the `counterContext` and wrap your component tree with `<counterContext.Provider>`:

```javascript
import { useState } from "react";
import { counterContext } from './context/context';
import Navbar from './Navbar';
import Button from './Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <counterContext.Provider value={count}>
        <Navbar />
        <div>
          <h1>Counter: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Add +1</button>
        </div>
      </counterContext.Provider>
    </>
  );
}

export default App;
```

### Step 5: Pass State Inside `counterContext.Provider`

Make sure to pass the state inside the `value` prop of `counterContext.Provider`:

```javascript
<counterContext.Provider value={count}>
  <Navbar />
  <div>
    <h1>Counter: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Add +1</button>
  </div>
</counterContext.Provider>
```

### Step 6: Import `useContext` in Receiving Component

In the component where you want to use the context, import `useContext`:

```javascript
import { useContext } from "react";
import { counterContext } from './context/context';
```

### Step 7: Use `useContext` to Access Context Value

Use the `useContext` hook to access the context value:

```javascript
const counter = useContext(counterContext);
```

---

