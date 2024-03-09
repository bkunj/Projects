function AppTodo() {
  return (
    <>
      <div className="row kb-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success  kb-button">
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default AppTodo;