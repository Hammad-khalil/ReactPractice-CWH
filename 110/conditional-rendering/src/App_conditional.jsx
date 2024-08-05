// Conditional Rendering
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // const [count, setCount] = useState(0)
    const [showbtn, setshowbtn] = useState(false)
    const [btn2] = useState(true)
    return (

        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            {/* <Todo /> */}
            {/* {showbtn ? <button>I will be shown only when second button is clicked</button> : "Showbtn true kro bhai"} */}
            {showbtn && <button>I will be shown only when second button is clicked</button>}
            {btn2 && <button>Hello World </button>}
            {btn2 ? <button>Button 2 True hai bhai</button> : "Button 2 ko true kro"}
            {btn2 ? <button>Button 2 True hai bhai</button> : "Button 2 ko true kro"}
            <div className="card">
                <button onClick={() => { setshowbtn(!showbtn) }}>ChangeValue</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
