import { createContext, useState, useEffect } from "react";
import axios from "axios";

const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get("http://localhost:8080/todos");
        setTodoList(res.data.todos);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <TodoContext.Provider value={{ todoList }}>
      {props.children}
    </TodoContext.Provider>
    //in Value, we send as object. value={{ todoList: todoList }} => shorthand, value={{todoList}}
  );
}

export { TodoContextProvider, TodoContext };
