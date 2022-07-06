import { useContext } from "react";

import { ToDoContext } from "../../contexts/ToDoContext";
import ToDo from "./ToDo";

function ToDoList(props) {
  const { todoList } = useContext(ToDoContext);
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
      {/* {props.todoList.map((el) => (
      ))} */}
    </ul>
  );
}

export default ToDoList;
