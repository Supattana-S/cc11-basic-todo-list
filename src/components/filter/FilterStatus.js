import { useContext } from "react";

import { ToDoContext } from "../../contexts/ToDoContext";
import RadioButton from "../ui/RadioButton";

function FilterStatus(props) {
  const { searchStatus, changeSearchStatus } = useContext(ToDoContext);
  return (
    <div className="btn-group ms-3 shadow">
      <RadioButton
        name="status"
        id="all"
        color="outline-dark"
        onChange={() => changeSearchStatus(null)}
        defaultChecked={searchStatus === null}
        // onChange={() => props.changeSearchStatus(null)}
        // defaultChecked={props.searchStatus === null}
      >
        <i className="fa-solid fa-list" />
      </RadioButton>
      <RadioButton
        name="status"
        id="completed"
        color="outline-dark"
        onChange={() => changeSearchStatus(true)}
        defaultChecked={searchStatus === true}
        // onChange={() => props.changeSearchStatus(true)}
        // defaultChecked={props.searchStatus === true}
      >
        <i className="fa-solid fa-clipboard-check" />
      </RadioButton>
      <RadioButton
        name="status"
        id="pending"
        color="outline-dark"
        onChange={() => changeSearchStatus(false)}
        defaultChecked={searchStatus === false}
        // onChange={() => props.changeSearchStatus(false)}
        // defaultChecked={props.searchStatus === false}
      >
        <i className="fa-regular fa-clipboard" />
      </RadioButton>
    </div>
  );
}

export default FilterStatus;
