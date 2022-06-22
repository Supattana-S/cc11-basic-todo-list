import ToDo from "./ToDo";

function ToDoList(props) {
  return (
    <ul className="list-group shadow mt-4">
      {props.todoList.map((el) => (
        <ToDo key={el.id} title={el.title} completed={el.completed} />
      ))}
    </ul>
  );
}

export default ToDoList;
