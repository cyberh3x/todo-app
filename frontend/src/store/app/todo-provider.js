import React, { useContext, useReducer } from "react";
import TodoReducer from "store/todo/todo-reducer";
import TodoState from "store/todo/todo-state";

const TodoContext = React.createContext();

const TodoProvider = ({ children }) => {
  const contextValue = useReducer(TodoReducer, TodoState);
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
export default TodoProvider;

export const useTodo = () => {
  const contextValue = useContext(TodoContext);
  return contextValue;
};
