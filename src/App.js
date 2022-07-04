import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import ToDoInput from "./components/todo-list/ToDoInput";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import ToDoList from "./components/todo-list/ToDoList";
import Pagination from "./components/pagination/Pagination";

// const initialTodoList = [
//   { title: "Sport", completed: true, id: uuidv4() },
//   { title: "Gaming", completed: false, id: uuidv4() },
//   { title: "Entertain", completed: true, id: uuidv4() },
// ];

function App() {
  const [todoList, setTodoList] = useState([]);
  const [searchStatus, setSearchStatus] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {}, []);

  axios.get("http://localhost:8080/todos").then((res) => {
    setTodoList(res.data.todos);
    // if do this, will be infinite re-render
    // evenif it's same array but it's another array. this will cause infinite re-render
  });

  const createTodo = (title) => {
    const newTodo = { title, completed: false, id: uuidv4() };
    // const oldTodoList = [...todoList]
    // oldTodoList.unshift(newTodo)
    const newTodoList = [newTodo, ...todoList];
    setTodoList(newTodoList);
  };

  const removeTodo = (id) => {
    const idx = todoList.findIndex((el) => el.id === id);
    if (idx !== -1) {
      const cloneTodoList = [...todoList];
      cloneTodoList.splice(idx, 1);
      setTodoList(cloneTodoList);
    }
  };

  //newValue will be liek {title, completed}
  // updateTodo({title: 'Meeting'}, '6ydgsakjl')
  const updateTodo = (newValue, id) => {
    const idx = todoList.findIndex((el) => el.id === id);
    if (idx !== -1) {
      const cloneTodoList = [...todoList];
      cloneTodoList[idx] = { ...cloneTodoList[idx], ...newValue };
      //if they send only 'title', the other will remain.
      //{ title: "Entertain", completed: true, id: uuidv4() } merge {title: 'Meeting'}
      //{ title: "Entertain", completed: true, id: uuidv4(), title: 'Meeting'}
      //{ title: "Meeting", completed: true, id: uuidv4()} <== right one will have high priority.
      setTodoList(cloneTodoList);
    }
  };

  const changeSearchStatus = (value) => {
    setSearchStatus(value);
  };

  const changeSearchTerm = (value) => {
    setSearchTerm(value);
  };

  // let filteredTodoList = [];
  // switch (searchStatus) {
  //   case "COMPLETED": {
  //     filteredTodoList = todoList.filter((el) => el.completed);
  //     break;
  //   }
  //   case "PENDING": {
  //     filteredTodoList = todoList.filter((el) => !el.completed);
  //     break;
  //   }
  //   default:
  //     filteredTodoList = [...todoList];
  // }

  const filteredTodoList = todoList.filter(
    (el) =>
      (searchStatus === null || el.completed === searchStatus) &&
      el.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container max-w-xs pt-5">
      <ToDoInput createTodo={createTodo} />
      <Filter
        changeSearchStatus={changeSearchStatus}
        searchStatus={searchStatus}
        changeSearchTerm={changeSearchTerm}
        searchTerm={searchTerm}
      />
      <PageLimit />
      <ToDoList
        todoList={filteredTodoList}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <Pagination />
    </div>
  );
}

export default App;
