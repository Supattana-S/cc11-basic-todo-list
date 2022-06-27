import FilterSearch from "./FilterSearch";
import FilterStatus from "./FilterStatus";

function Filter(props) {
  return (
    <div className="mt-4 d-flex">
      <FilterSearch />
      <FilterStatus changeSearchStatus={props.changeSearchStatus} />
    </div>
  );
}

export default Filter;
