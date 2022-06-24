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

  const handleSubmitForm = (e) => {
    e.preventDefault(); // to prevent sending data to server, REeact will use JS to send again next.
    const newError = {};

    if (!input.email) {
      newError.email = "Email is required";
    }

    if (!input.username) {
      newError.username = "Username is required";
    }

    if (!input.phoneNumber) {
      newError.phoneNumber = "Phone Number is required";
    } else if (input.phoneNumber.length !== 10) {
      newError.phoneNumber = "Invalid Phone number format";
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
    } else {
      setError({});
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className={`mb-3`}>
        <label htmlFor="email1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className={`form-control ${error.email && "is-invalid"}`}
          id="email"
          name="email"
          value={input.email}
          onChange={handleChangeInput}
        />
        {error.email && <small className="text-danger">{error.email}</small>}
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className={`form-control ${error.username && "is-invalid"}`}
          id="username"
          name="username"
          value={input.username}
          onChange={handleChangeInput}
        />
        {error.username && (
          <small className="text-danger">{error.username}</small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="phonenumber" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className={`form-control ${error.phoneNumber && "is-invalid"}`}
          id="exampleCheck1"
          name="phoneNumber"
          value={input.phoneNumber}
          onChange={handleChangeInput}
        />
        {error.phoneNumber && (
          <small className="text-danger">{error.phoneNumber}</small>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ToDoInput;
