import ToDoInput from "./components/ToDoInput";
import Filter from "./components/filter/Filter";

function App() {
  return (
    <div className="container max-w-xs pt-5">
      <ToDoInput />
      <Filter />
    </div>
  );
}

export default App;
