import Button from "../ui/Button";
import ToDoInput from "./ToDoInput";

function ToDo(props) {
  const { title, completed, id, removeTodo, updateTodo } = props;
  return (
    <li
      className={`list-group-item d-flex align-items-center p-3 bd-callout bd-callout-${
        completed ? "success" : "warning"
      }`}
    >
      {/* <span className="flex-grow-1" role="button">
        {title}
      </span>
      <div className="btn-group">
        <Button
          color="outline-info"
          onClick={() => updateTodo({ completed: !completed }, id)}
        >
          <i className={`fa-solid fa-toggle-${completed ? "on" : "off"}`} />
        </Button>
        <Button color="danger" onClick={() => removeTodo(id)}>
          <i className="fa-regular fa-trash-can" />
        </Button>
      </div> */}
      <ToDoInput mode='edit' />
    </li>
  );
}

export default ToDo;
