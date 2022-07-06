import { useContext, useState, createContext, useEffect } from "react";
import axios from "axios";

const ToDoContext = createContext();

function ToDoContextProvider(props) {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    try {
      const fetchTodos = async () => {
        const res = await axios.get("http://localhost:8080/todos");
        setTodoList(res.data.todos);
      };
      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const createTodo = async (title) => {
    const newTodo = { title, completed: false };

    try {
      const res = await axios.post("http://localhost:8080/todos", newTodo);
    } catch (err) {
      console.log(err);
    }

    const cloneTodoList = [newTodo, ...todoList];
    setTodoList(cloneTodoList);
  };

  return (
    <ToDoContext.Provider value={{ todoList, createTodo }}>
      {props.children}
    </ToDoContext.Provider>
  );
}

export { ToDoContextProvider, ToDoContext };
