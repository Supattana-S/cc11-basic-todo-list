import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDoInput from "./components/todo-list/ToDoInput";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import ToDoList from "./components/todo-list/ToDoList";
import Pagination from "./components/pagination/Pagination";

// const todo = {
//   title: "Homework",
//   completed: true,
// };

// const todolist = [
//   { title: "Sport", completed: true, id: 1 },
//   { title: "Gaming", completed: false, id: 3 },
//   { title: "Group Project", completed: true, id: 2 },
// ];

const initialTodoList = [
  { title: "Sport", completed: true, id: uuidv4() },
  { title: "Gaming", completed: false, id: uuidv4() },
  { title: "Entertain", completed: true, id: uuidv4() },
];
//uuidv4() will random unique string

// console.log(initialTodoList);

function App() {
  // create state in app to pass through state to children component in App.js
  //because almost all component in App.js need to use todolist
  //React concept: State pass thorugh the parent component to children component

  const [todoList, setTodoList] = useState(initialTodoList);

  return (
    <div className="container max-w-xs pt-5">
      <ToDoInput  />
      <Filter />
      <PageLimit />
      <ToDoList todoList={todoList} />
      <Pagination />
    </div>
  );
}

export default App;
