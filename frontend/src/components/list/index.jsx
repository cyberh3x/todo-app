import { useEffect } from "react";
import useTodo from "../../hooks/useTodo";
import Add from "../add";
import Update from "../update";

const TodoList = () => {
  const {
      read,
      edit,
      destroy,
      state: { list },
    } = useTodo(),
    handleRead = () => read(),
    handleEdit = (id) => edit(id),
    handleDelete = (id) => window.confirm("Are you sure?") && destroy(id);

  useEffect(() => {
    handleRead();
  }, []);

  return (
    <>
      <Add />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {Boolean(list.length) ? (
            list.map(({ _id, name, done }) => (
              <tr key={_id}>
                <td>{_id}</td>
                <td>{name}</td>
                <td>
                  {done ? (
                    <span className="text-success">Done!</span>
                  ) : (
                    <span className="text-danger">Pending</span>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-info btn-sm me-2"
                    onClick={() => handleEdit(_id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>Not found</td>
            </tr>
          )}
        </tbody>
      </table>
      <Update />
    </>
  );
};

export default TodoList;
