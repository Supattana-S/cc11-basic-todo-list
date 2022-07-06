import { useState, createContext, useEffect } from "react";
import axios from "axios";

const ToDoContext = createContext();

function ToDoContextProvider(props) {
  const [todoList, setTodoList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchStatus, setSearchStatus] = useState(null);

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
      const newTodoList = [res.data.todo, ...todoList];
      setTodoList(newTodoList);
    } catch (err) {
      console.log(err);
    }

    // const cloneTodoList = [newTodo, ...todoList];
    // setTodoList(cloneTodoList);
  };

  const updateTodo = async (newValue, id) => {
    try {
      await axios.put(`http://localhost:8080/todos/${id}`, newValue);
    } catch (err) {
      console.log(err);
    }

    const idx = todoList.findIndex((el) => el.id === id);
    if (idx !== -1) {
      const cloneTodoList = [...todoList];
      cloneTodoList[idx] = { ...cloneTodoList[idx], ...newValue };
      setTodoList(cloneTodoList);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/todos/${id}`);
    } catch (err) {
      console.log(err);
    }

    const idx = todoList.findIndex((el) => el.id === id);
    if (idx !== -1) {
      const cloneTodoList = [...todoList];
      cloneTodoList.splice(idx, 1);
      setTodoList(cloneTodoList);
    }
  };

  const changeSearchTerm = (value) => {
    setSearchTerm(value);
  };

  const changeSearchStatus = (value) => {
    setSearchStatus(value);
  };

  const filteredTodoList = todoList.filter((el) => {
    return (
      (searchStatus === null || el.completed === searchStatus) &&
      el.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <ToDoContext.Provider
      value={{
        todoList,
        createTodo,
        updateTodo,
        deleteTodo,
        searchTerm,
        changeSearchTerm,
        changeSearchStatus,
        filteredTodoList,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
}

export { ToDoContextProvider, ToDoContext };
