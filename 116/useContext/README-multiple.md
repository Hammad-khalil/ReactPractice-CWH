
---

## How to Pass Multiple States Using React Context

### Step 1: Create Context

1. **Create Context Folder:**
   - Create a folder named `context` inside the `src` directory.
   - Inside the `context` folder, create a file named `Context.js`.

2. **Define Context in `Context.js`:**
   - Import `createContext` from React.
   - Create a context with an initial value of an object that includes all the states you want to pass.

   ```javascript
   import { createContext } from "react";

   export const counterContext = createContext({
     count: 0,
     name: "Hammad"
   });
   ```

### Step 2: Provide Multiple States in `App.jsx`

1. **Import Context and State Management Hooks:**
   - Import `counterContext` from `Context.js`.
   - Import `useState` from React.

2. **Set Up State and Context Provider:**
   - Combine your states (`count` and `name`) into a single object.
   - Provide this object to the context using `<counterContext.Provider>`.

   ```javascript
   import './App.css';
   import { useState } from 'react';
   import Navbar from './components/Navbar';
   import { counterContext } from './Context/Context';

   function App() {
     const [count, setCount] = useState(0);
     const [name, setName] = useState("Hammad");

     return (
       <counterContext.Provider value={{ count, name }}>
         <Navbar />
         <div>
           <h1>Counter: {count}</h1>
           <h1>Name: {name}</h1>
           <button onClick={() => setCount(count + 1)}>Add +1</button>
           <button onClick={() => setName("HK")}>Change Name</button>
         </div>
       </counterContext.Provider>
     );
   }

   export default App;
   ```

### Step 3: Access Context in Components

1. **Import `useContext` and the Context:**
   - In the component where you want to use the context (e.g., `Component1`), import `useContext` and the context.

2. **Use `useContext` to Access the Context Values:**
   - Destructure the context values (`count` and `name`) from the object provided by `useContext`.

   ```javascript
   import React, { useContext } from "react";
   import { counterContext } from "../Context/Context";

   const Component1 = () => {
       const { count, name } = useContext(counterContext);

       return (
           <>
               <div>
                   Component 1 mein agaya count aur name finally 🥳
               </div>
               <h6>Counter: {count}</h6>
               <h6>Name: {name}</h6>
           </>
       );
   }

   export default Component1;
   ```

### Summary

1. **Define Context:** Create a context with an initial object that includes all state values.
2. **Provide Context:** Wrap your component tree with the context provider and pass the combined state object.
3. **Consume Context:** Use `useContext` to access and use the context values in your components.

---