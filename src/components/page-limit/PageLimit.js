function PageLimit(props) {
  const { currentShowNumber, changeCurrentShowNumber } = props;
  return (
    <div className="d-flex align-items-center mt-4">
      <small className="text-muted">Show : </small>
      <select
        className="form-select form-select-sm ms-2"
        style={{ width: "5rem" }}
        value={currentShowNumber}
        onChange={(e) => changeCurrentShowNumber(+e.target.value)}
      >
        {props.allPageLimit.map((el) => (
          <option key={el.id}>{el.page}</option>
        ))}
      </select>
    </div>
  );
}

export default PageLimit;
