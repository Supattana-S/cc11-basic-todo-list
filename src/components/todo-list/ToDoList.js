import { useContext } from "react";

import { ToDoContext } from "../../contexts/ToDoContext";
import ToDo from "./ToDo";

function ToDoList(props) {
  const { todoList, filteredTodoList } = useContext(ToDoContext);
  return (
    <ul className="list-group shadow mt-4">
      {filteredTodoList.map((el) => (
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
