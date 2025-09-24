import { createContext, useContext } from "react";

export const Todocontext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addtodo: (todos) => {},
  updatetodo: (id, todo) => {},
  deletetodo: (id) => {},
  toggletodo: (id) => {},
});