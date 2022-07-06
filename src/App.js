import ToDoInput from "./components/todo-list/ToDoInput";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import ToDoList from "./components/todo-list/ToDoList";
import Pagination from "./components/pagination/Pagination";

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
