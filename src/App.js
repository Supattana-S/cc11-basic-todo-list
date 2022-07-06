import { useContext } from "react";
import { ToDoContextProvider } from "./contexts/ToDoContext";

import ToDoInput from "./components/todo-list/ToDoInput";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import ToDoList from "./components/todo-list/ToDoList";
import Pagination from "./components/pagination/Pagination";

function App() {
  return (
    <div className="container max-w-xs pt-5">
      <ToDoContextProvider>
        <ToDoInput />
        <Filter />
        {/* <PageLimit /> */}
        <ToDoList />
        {/* <Pagination /> */}
      </ToDoContextProvider>
    </div>
  );
}

export default App;
