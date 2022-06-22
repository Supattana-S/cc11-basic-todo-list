import ToDoInput from "./components/ToDoInput";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import ToDoList from "./components/todo-list/ToDoList";

function App() {
  return (
    <div className="container max-w-xs pt-5">
      <ToDoInput />
      <Filter />
      <PageLimit />
      <ToDoList />
    </div>
  );
}

export default App;
