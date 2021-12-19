import React, { createContext, useReducer } from "react";
import useTodoState from "../hooks/useTodoState";
import todoReducer from "../../src/reducers/todo.reducer";

export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, "");

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
