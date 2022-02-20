import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "../modal";
import useTodo from "../../hooks/useTodo";
import { TOGGLE_SHOW_ADD_MODAL } from "../../constant/actions-type";

const Add = () => {
  const [name, setName] = useState(""),
    {
      create,
      state: { addModalIsOpen },
      dispatch,
    } = useTodo(),
    modalDisplayHandler = () => dispatch({ type: TOGGLE_SHOW_ADD_MODAL }),
    handleName = ({ target: { value } }) => setName(value),
    handleSubmit = () =>
      name &&
      create({ name }).then(() => {
        modalDisplayHandler();
        setName("");
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
        show={addModalIsOpen}
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
