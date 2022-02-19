import { useEffect, useState } from "react";
import useTodoCrud from "../../hooks/useTodo";
import useTodo from "../../hooks/useTodo";
import Add from "../add";
import Update from "../update";

const TodoList = () => {
  const [list, setList] = useState([]),
    { read, edit, updateModalHandler } = useTodoCrud(),
    handleRead = () => read().then((response) => setList(response)),
    handleEdit = (id) => edit(id).then(updateModalHandler);

  useEffect(() => {
    handleRead();
  }, []);

  return (
    <>
      <Add setList={setList} />
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
            list.map(({ _id, name, status }) => (
              <tr key={_id}>
                <td>{_id}</td>
                <td>{name}</td>
                <td>
                  {status ? (
                    <span className="text-success">Done!</span>
                  ) : (
                    <span className="text-danger">Pending</span>
                  )}
                </td>
                <td>
                  <button className="btn btn-success btn-sm me-2">
                    Mark as done
                  </button>
                  <button
                    className="btn btn-info btn-sm me-2"
                    onClick={() => handleEdit(_id)}
                  >
                    Update
                  </button>
                  <button className="btn btn-danger btn-sm">Delete</button>
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
      <Update setList={setList} />
    </>
  );
};

export default TodoList;
