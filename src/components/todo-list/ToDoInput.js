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

  const handleChangeInput = (e) => {
    const oldInput = { ...input };
    oldInput[e.target.name] = e.target.value;
    setInput(oldInput);
  };

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
          name="email"
          value={input.email}
          onChange={handleChangeInput}
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
          name="username"
          value={input.username}
          onChange={handleChangeInput}
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
          name="phoneNumber"
          value={input.phoneNumber}
          onChange={handleChangeInput}
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
