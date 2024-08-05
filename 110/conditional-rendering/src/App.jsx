import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const [showbtn, setshowbtn] = useState(false)
  const [todos] = useState([
    {
      title: "Hey",
      desc: "Pluto is Blue"
    },
    {
      title: "Hey-Again",
      desc: "Pluto is Dwarf"
    },
    {
      title: "Shalom",
      desc: "Jupiter is Orange "
    },
  ])
  // const [todos] = useState([
  //   {
  //     title: "Hey",
  //     desc: "I am a Good Todo"
  //   },
  //   {
  //     title: "Hey Todo number 2",
  //     desc: "I am a Great Todo"
  //   },
  //   {
  //     title: "Hey Todo number 3",
  //     desc: "I am a Fabulous Todo"
  //   },
  // ])

  return (

    <>
      {todos.map(todo => {
        return <div key={todo.title}>
          <div>{todo.title}</div>
          <div>{todo.desc}</div>
        </div>
      })}
      {/* {todos.map(todo => {
        return <div key={todo.title} className="m-4 border border-1 border-purple-400">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      })} */}


      {/* 
      {todos.map(todo => {
                return <div key={todo.title} className="m-4 border border-1 border-purple-400">

                    <div className="todo">{todo.title}</div>
                    <div className="todo">{todo.desc}</div>
                </div>
            })} */}
    </>
  )
}

export default App
