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
  return (
    <div className="container max-w-xs pt-5">
      <ToDoInput />
      {/* <Filter /> */}
      {/* <PageLimit /> */}
      <ToDoList />
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
