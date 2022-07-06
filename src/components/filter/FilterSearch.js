import { useContext } from "react";

import { ToDoContext } from "../../contexts/ToDoContext";
import Button from "../ui/Button";

function FilterSearch() {
  const { searchTerm, changeSearchTerm } = useContext(ToDoContext);
  // const { changeSearchTerm, searchTerm } = props;
  return (
    <div className="input-group shadow">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => changeSearchTerm(e.target.value)}
        // onChange={(e) => changeSearchTerm(e.target.value)}
      />
      <Button
        color="dark"
        onClick={() => changeSearchTerm("")}
        // onClick={() => changeSearchTerm("")}
      >
        <i className="fa-solid fa-xmark" />
      </Button>
    </div>
  );
}

export default FilterSearch;
