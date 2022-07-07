import { createContext, useState, useEffect } from "react";
import axios from "axios";

const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todoList, setTodoList] = useState([]);

  const createTodo = (title) => {
    axios
      .post("http://localhost:8080/todos", {
        title,
        completed: false,
      })
      .then((res) => {
        const newTodo = res.data.todo;
        const newTodoList = [newTodo, ...todoList];
        setTodoList(newTodoList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    <TodoContext.Provider value={{ todoList, createTodo }}>
      {props.children}
    </TodoContext.Provider>
    //in Value, we send as object. value={{ todoList: todoList }} => shorthand, value={{todoList}}
  );
}

export { TodoContextProvider, TodoContext };
