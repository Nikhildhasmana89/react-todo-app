import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todos) => {
    setTodos((prev) => [{id: Date.now(), ...todos},...todos])
  }

  const update = (id,todos) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todos : prevTodo))
  }

  const remove = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todos) => todos.id !== id))
  }

  return (
    <>
     
    </>
  )
}

export default App
