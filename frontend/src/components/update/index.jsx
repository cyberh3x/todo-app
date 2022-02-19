import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "../modal";
import useTodo from "../../hooks/useTodo";

const Update = ({ setList }) => {
  const [name, setName] = useState(""),
    { create, updateModalIsOpen, updateModalHandler } = useTodo(),
    handleName = ({ target: { value } }) => setName(value),
    handleSubmit = () =>
      create({ name }).then((newItem) => {
        updateModalHandler();
        setName("");
        setList((prevList) => [...prevList, newItem]);
      });

  useEffect(() => {
    console.log(updateModalIsOpen);
  }, [updateModalIsOpen]);

  return (
    <Modal
      show={updateModalIsOpen}
      title="Update Todo"
      handleClose={updateModalHandler}
      handleSubmit={handleSubmit}
    >
      <div className="col-12">
        <Form.Floating>
          <Form.Control
            type="text"
            value={name}
            placeholder="Name"
            onChange={handleName}
          />
          <Form.Label>Name</Form.Label>
        </Form.Floating>
      </div>
    </Modal>
  );
};

export default Update;
