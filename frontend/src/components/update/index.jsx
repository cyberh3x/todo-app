import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "../modal";
import useTodo from "../../hooks/useTodo";
import { TOGGLE_SHOW_EDIT_MODAL } from "../../constant/actions-type";

const Update = () => {
  const {
      update,
      state: { updateModalIsOpen, selectedItem },
      dispatch,
    } = useTodo(),
    [name, setName] = useState(""),
    [done, setIsDone] = useState(false),
    handleName = ({ target: { value } }) => setName(value),
    handleDone = ({ target: { checked } }) => setIsDone(checked),
    modalDisplayHandler = () => dispatch({ type: TOGGLE_SHOW_EDIT_MODAL }),
    handleSubmit = () => name && update({ name, done }, selectedItem._id);

  useEffect(() => {
    setName(selectedItem?.name ?? "");
    setIsDone(selectedItem?.done ?? false);
  }, [selectedItem]);

  return (
    <Modal
      show={updateModalIsOpen}
      title="Update Todo"
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
      <div className="col-12 mt-3">
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            checked={done}
            label="Done"
            onChange={handleDone}
          />
        </Form.Group>
      </div>
    </Modal>
  );
};

export default Update;
