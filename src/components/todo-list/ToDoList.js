import { useContext } from "react";

import ToDo from "./ToDo";
import { TodoContext } from "../../contexts/TodoContext";

function ToDoList(props) {
  const { todoList } = useContext(TodoContext);
  //deconstructuring from todocontext which is Object.

  return (
    <ul className="list-group shadow mt-4">
      {todoList.map((el) => (
        <ToDo
          key={el.id}
          id={el.id}
          title={el.title}
          completed={el.completed}
          // removeTodo={props.removeTodo}
          // updateTodo={props.updateTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
