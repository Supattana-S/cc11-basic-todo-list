import { useState, useContext } from "react";

import Button from "../ui/Button";
import ToDoInput from "./ToDoInput";
import { TodoContext } from "../../contexts/TodoContext";

function ToDo(props) {
  const { title, completed, id } = props;
  const { removeTodo, updateTodo } = useContext(TodoContext);

  const [isEditing, setIsEditing] = useState(false);

  const closeEditing = () => {
    setIsEditing(false);
  };

  return (
    <li
      className={`list-group-item d-flex ${
        isEditing ? "" : "align-items-center"
      } p-3 bd-callout bd-callout-${completed ? "success" : "warning"} ${
        isEditing ? "flex-column" : ""
      }`}
    >
      {isEditing ? (
        <ToDoInput
          id={id}
          title={title}
          closeEditing={closeEditing}
          completed={completed}
          // updateTodo={updateTodo}
        />
      ) : (
        <>
          <span
            className="flex-grow-1"
            role="button"
            onClick={() => setIsEditing(true)}
          >
            {title}
          </span>
          <div className="btn-group">
            <Button
              color="outline-info"
              onClick={() =>
                updateTodo({ completed: !completed, title: title }, id)
              }
            >
              <i className={`fa-solid fa-toggle-${completed ? "on" : "off"}`} />
            </Button>
            <Button color="danger" onClick={() => removeTodo(id)}>
              <i className="fa-regular fa-trash-can" />
            </Button>
          </div>
        </>
      )}
    </li>
  );
}

export default ToDo;
