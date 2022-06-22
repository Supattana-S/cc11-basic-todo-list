import ToDo from "./ToDo";

function ToDoList() {
  return (
    <ul className="list-group shadow mt-4">
      <ToDo title="Homework" completed={true} />
      <ToDo title="Personal Project figma" completed={false} />
      <ToDo title="Midterm exam" completed={false} />
      <ToDo title="Lab" completed={true} />
    </ul>
  );
}

export default ToDoList;
