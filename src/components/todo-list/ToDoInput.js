import { useState } from "react";
import Button from "../ui/Button";

function ToDoInput(props) {
  const [todoInput, setTodoInput] = useState("");
  const [todoError, setTodoError] = useState("");

  // const resetTodoInput = () => {
  //   setTodoInput("");
  // };

  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className={`form-control ${todoError ? "is-invalid" : ""}`}
          placeholder="Enter new todo"
          value={todoInput}
          onChange={(event) => setTodoInput(event.target.value)}
        />
        <Button
          color="success"
          onClick={() => {
            if (!todoInput) {
              setTodoError("Title is required.");
            } else {
              props.createTodo(todoInput);
              setTodoError("");
              setTodoInput('')
            }
          }}
        >
          <i className="fa-solid fa-plus" />
          {/* if don't have props.children the element <i></i>, won't be displayed */}
        </Button>
        <Button color="outline-secondary" onClick={() => setTodoInput("")}>
          <i className="fa-solid fa-xmark" />
        </Button>
      </div>
      {todoError && <small className="text-danger">{todoError}</small>}
    </>
  );
}

export default ToDoInput;
