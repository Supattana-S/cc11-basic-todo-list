function PageLimit(props) {
  return (
    <div className="d-flex align-items-center mt-4">
      <small className="text-muted">Show : </small>
      <select
        className="form-select form-select-sm ms-2"
        style={{ width: "5rem" }}
      >
        {props.numberPageLimit.map((el) => (
          <option key={el.id}>{el.page}</option>
        ))}
      </select>
    </div>
  );
}

export default PageLimit;
