function TodoItem1({todoName, todoDate}) {  //destructuring

  return (
    <>
    <div className="container">
      <div className="row kb-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger  kb-button">
            Delete
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default TodoItem1;
