import Button from "./ui/Button";

function ToDoInput() {
  return (
    <>
    <div class="input-group">
      <input
        type="text"
        class="form-control shadow"
        placeholder="Enter new todo"
        aria-label="Recipient's username with two button addons"
      />
      <Button color="success">
        <i className="fa-solid fa-plus" />
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
