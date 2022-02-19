import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "../modal";
import useTodo from "../../hooks/useTodo";

const Add = ({ setList }) => {
  const [show, setShow] = useState(false),
    [name, setName] = useState(""),
    { create, get } = useTodo(),
    modalDisplayHandler = () => setShow(!show),
    handleName = ({ target: { value } }) => setName(value),
    handleSubmit = () =>
      create({ name }).then((newItem) => {
        modalDisplayHandler();
        setName("");
        setList((prevList) => [...prevList, newItem]);
      });
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12 text-end">
          <Button color="primary" onClick={modalDisplayHandler}>
            Add
          </Button>
        </div>
      </div>
      <Modal
        show={show}
        title="Add Todo"
        handleClose={modalDisplayHandler}
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
    </div>
  );
};

export default Add;
