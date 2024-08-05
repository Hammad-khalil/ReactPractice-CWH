import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // const [count, setCount] = useState(0)
    const [todos] = useState([
        {
            title: "Hey",
            desc: "I am a good todo"
        },
        {
            title: "Hey Another todo",
            desc: "I am a good todo too"
        },
        {
            title: "Hey I am grocery todo",
            desc: "I am a good todo but I am grocery todo"
        },

    ])

    return (
        <>


            {todos.map(todo => {
                // return <Todo key={todo.title} todo={todo}/>
                return <div key={todo.title} className="m-4 border border-1 border-purple-400">

                    <div className="todo">{todo.title}</div>
                    <div className="todo">{todo.desc}</div>
                </div>
            })}
        </>
    )
}

export default App