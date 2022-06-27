import RadioButton from "../ui/RadioButton";

function FilterStatus(props) {
  return (
    <div className="btn-group ms-3 shadow">
      <RadioButton
        name="status"
        id="all"
        color="outline-dark"
        onChange={() => props.changeSearchStatus("ALL")}
        defaultCheck={props.searchStatus === 'ALL'}
      >
        <i className="fa-solid fa-list" />
      </RadioButton>
      <RadioButton
        name="status"
        id="completed"
        color="outline-dark"
        onChange={() => props.changeSearchStatus("COMPLETED")}
      >
        <i className="fa-solid fa-clipboard-check" />
      </RadioButton>
      <RadioButton
        name="status"
        id="pending"
        color="outline-dark"
        onChange={() => props.changeSearchStatus("PENDING")}
      >
        <i className="fa-regular fa-clipboard" />
      </RadioButton>
    </div>
  );
}

export default FilterStatus;
