import ToDo from "./ToDo";

function ToDoList(props) {
  return (
    <ul className="list-group shadow mt-4">
      {props.todoList.map((el) => (
        <ToDo
          key={el.id}
          id={el.id}
          title={el.title}
          completed={el.completed}
          removeTodo={props.removeTodo}
          updateTodo={props.updateTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
