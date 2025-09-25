import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
      <form onSubmit={add} className="flex items-center space-x-2">
  <input
    type="text"
    placeholder="What needs to be done?"
    className="flex-1 p-3 text-lg text-gray-200 placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
  />
  <button
    type="submit"
    className="p-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
  >
    Add
  </button>
</form>
  );
}

export default TodoForm;