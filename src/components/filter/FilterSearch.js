import Button from "../ui/Button";

function FilterSearch(props) {
  const { changeSearchTerm, searchTerm } = props;
  return (
    <div className="input-group shadow">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => changeSearchTerm(e.target.value)}
      />
      <Button color="dark">
        <i className="fa-solid fa-xmark" />
      </Button>
    </div>
  );
}

export default FilterSearch;
