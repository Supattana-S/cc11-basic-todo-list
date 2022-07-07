import { createContext, useState, useEffect, useReducer } from "react";
import axios from "axios";

import {
  todoListReducer,
  INITIAL_TODO_LIST,
  FETCH_TODOS,
  CREATE_TODO,
  DELETE_TODO,
} from "../reducers/todoListReducer";

const TodoContext = createContext();

function TodoContextProvider(props) {
  // const [todoList, setTodoList] = useState([]);
  const [state, dispatch] = useReducer(todoListReducer, INITIAL_TODO_LIST);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get("http://localhost:8080/todos");
        dispatch({ type: FETCH_TODOS, value: res.data.todos });
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const createTodo = (title) => {
    axios
      .post("http://localhost:8080/todos", { title, completed: false })
      .then((res) => {
        dispatch({ type: CREATE_TODO, value: res.data.todo });
      })
      .catch((err) => console.log(err));
    // axios
    //   .post("http://localhost:8080/todos", {
    //     title,
    //     completed: false,
    //   })
    //   .then((res) => {
    //     const newTodo = res.data.todo;
    //     const newTodoList = [newTodo, ...todoList];
    //     setTodoList(newTodoList);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const removeTodo = async (id) => {
    await axios.delete(`http://localhost:8080/todos/${id}`);
    dispatch({ type: DELETE_TODO, value: { id: id } });
    // axios
    //   .delete(`http://localhost:8080/todos/${id}`)
    //   .then(() => {
    //     const idx = todoList.findIndex((el) => el.id === id);
    //     if (idx !== -1) {
    //       const cloneTodoList = [...todoList];
    //       cloneTodoList.splice(idx, 1);
    //       setTodoList(cloneTodoList);
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  const updateTodo = (newValue, id) => {
    axios
      .put(`http://localhost:8080/todos/${id}`, newValue)
      .then()
      .catch((err) => console.log(err));

    // axios
    //   .put("http://localhost:8080/todos/" + id, newValue)
    //   .then(() => {
    //     const idx = todoList.findIndex((el) => el.id === id);
    //     if (idx !== -1) {
    //       const cloneTodoList = [...todoList];
    //       cloneTodoList[idx] = { ...cloneTodoList[idx], ...newValue };
    //       setTodoList(cloneTodoList);
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <TodoContext.Provider
      value={{ todoList: state.todoList, createTodo, removeTodo, updateTodo }}
    >
      {props.children}
    </TodoContext.Provider>
    //in Value, we send as object. value={{ todoList: todoList }} => shorthand, value={{todoList}}
  );
}

export { TodoContextProvider, TodoContext };
