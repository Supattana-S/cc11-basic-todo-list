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
        />
      ))}
    </ul>
  );
}

export default ToDoList;
