import Button from "../ui/Button";

function ToDo(props) {
  const { title, completed, id } = props;
  return (
    <li
      className={`list-group-item d-flex align-items-center p-3 bd-callout bd-callout-${
        completed ? "success" : "warning"
      }`}
    >
      <span className="flex-grow-1" role="button">
        {title}
      </span>
      <div className="btn-group">
        <Button color="outline-info">
          <i className={`fa-solid fa-toggle-${completed ? "on" : "off"}`} />
        </Button>
        <Button color="danger" onClick={() => props.removeTodo(id)}>
          <i className="fa-regular fa-trash-can" />
        </Button>
      </div>
    </li>
  );
}

export default ToDo;
