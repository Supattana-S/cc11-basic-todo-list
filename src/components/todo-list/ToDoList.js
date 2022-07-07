import ToDo from "./ToDo";

function ToDoList(props) {
  return (
    <ul className="list-group shadow mt-4">
      <ToDo
        key={1111}
        id={1111}
        title={"aaaaa"}
        completed={false}
        // removeTodo={props.removeTodo}
        // updateTodo={props.updateTodo}
      />
    </ul>
  );
}

export default ToDoList;
