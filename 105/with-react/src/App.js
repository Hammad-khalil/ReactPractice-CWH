// import logo from './logo.svg';
import "./App.css"
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import React from 'react'

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <Navbar logotext="Hello Props" />
      <h1>{value}</h1>
      <button onClick={() => { setValue(value + 1) }}>Increaser</button>
      <button onClick={() => { setValue(value - 1) }}>Decreaser</button>
      <Footer />
    </div>
  )

}
export default App;


// function App() {
//   const [value, setValue] = useState(0)
//   return (
//     <>
//       <div className="App">
//         <Navbar logotext="HelloProps" />
//         <div className="value">{value}</div>
//         <button onClick={() => { setValue(value + 1) }}>Click Me</button>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;
