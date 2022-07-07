import { createContext } from "react";

const TodoContext = createContext();

function TodoContextProvider(props) {
  return (
    <TodoContext.Provider value={{}}>{props.children}</TodoContext.Provider>
  );
}

export { TodoContextProvider, TodoContext };
