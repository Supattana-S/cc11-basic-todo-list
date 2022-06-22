import ToDoInput from "./components/ToDoInput";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";

function App() {
  return (
    <div className="container max-w-xs pt-5">
      <ToDoInput />
      <Filter />
      <PageLimit />
    </div>
  );
}

export default App;
