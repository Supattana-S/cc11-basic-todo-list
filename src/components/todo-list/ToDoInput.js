import { useState } from "react";
import Button from "../ui/Button";

function ToDoInput(props) {
  const [input, setInput] = useState({
    email: "",
    username: "",
    phoneNumber: "",
  });

  const [error, setError] = useState({
    email: "",
    username: "",
    phoneNumber: "",
  });

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="email1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={input.email}
          onChange={(event) => {
            const oldInput = { ...input };
            oldInput.email = event.target.value;
            setInput(oldInput);
          }}
        />
        {/* <small className="text-danger">
          We'll never share your email with anyone else.
        </small> */}
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={input.username}
          onChange={(event) => {
            const oldInput = { ...input };
            oldInput.username = event.target.value;
            setInput(oldInput);
          }}
        />
        {/* <small className="text-danger">
          We'll never share your email with anyone else.
        </small> */}
      </div>
      <div className="mb-3">
        <label htmlFor="phonenumber" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleCheck1"
          value={input.phoneNumber}
          onChange={(event) => {
            const oldInput = { ...input };
            oldInput.phoneNumber = event.target.value;
            setInput(oldInput);
          }}
        />
        {/* <small className="text-danger">
          We'll never share your email with anyone else.
        </small> */}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ToDoInput;
