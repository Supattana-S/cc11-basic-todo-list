import { useContext, useState, createContext } from "react";

const ToDoContext = createContext;

function ToDoContextProvider(props) {
  return <ToDoContext.Provider>{props.children}</ToDoContext.Provider>;
}

export { ToDoContextProvider };
