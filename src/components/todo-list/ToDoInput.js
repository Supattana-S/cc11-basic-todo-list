import Button from "../ui/Button";

function ToDoInput() {
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className="form-control shadow"
          placeholder="Enter new todo"
        />
        <Button color="success">
          <i className="fa-solid fa-plus" />
          {/* if don't have props.children the element <i></i>, won't be displayed */}
        </Button>
        <Button color="outline-secondary">
          <i className="fa-solid fa-xmark" />
        </Button>
      </div>
      {/* <small className="text-danger">Title is required.</small> */}
    </>
  );
}

export default ToDoInput;