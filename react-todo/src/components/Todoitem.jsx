import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center rounded-lg p-3 gap-x-3 transition-all duration-300 text-gray-200
    ${
      todo.completed
        ? "bg-green-700 shadow-lg"
        : "bg-gray-800 shadow-md border border-gray-700"
    }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer h-5 w-5 rounded-full accent-green-500"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`flex-1 text-lg bg-transparent outline-none
      ${
        isTodoEditable
          ? "border border-gray-600 px-2 rounded-lg"
          : "border-transparent"
      }
      ${todo.completed ? "line-through text-gray-400" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <button
        className="inline-flex w-10 h-10 rounded-lg text-lg justify-center items-center bg-gray-600 hover:bg-gray-700 transition-colors duration-200 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "✅" : "✏️"}
      </button>

      <button
        className="inline-flex w-10 h-10 rounded-lg text-lg justify-center items-center bg-red-600 hover:bg-red-700 transition-colors duration-200 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        <span className="text-white">🗑️</span>
      </button>
    </div>
  );
}

export default TodoItem;
