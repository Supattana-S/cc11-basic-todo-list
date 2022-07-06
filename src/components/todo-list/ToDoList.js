import ToDo from "./ToDo";

function ToDoList(props) {
  return (
    <ul className="list-group shadow mt-4">
      <ToDo
        key={1}
        id={1}
        title={"a"}
        completed={true}
        // removeTodo={props.removeTodo}
        // updateTodo={props.updateTodo}
      />
      {/* {props.todoList.map((el) => (
      ))} */}
    </ul>
  );
}

export default ToDoList;
