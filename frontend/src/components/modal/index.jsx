import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import useTodo from "../../hooks/useTodo";

function Dialog({
  title,
  children,
  show = false,
  handleClose = () => {},
  handleSubmit = () => {},
  closeButtonLabel = "Close",
  submitButtonLabel = "Confirm",
  centered = true,
}) {
  const { pending } = useTodo();
  return (
    <Modal show={show} onHide={handleClose} centered={centered}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="default" onClick={handleClose} disabled={pending}>
          {closeButtonLabel}
        </Button>
        <Button variant="primary" onClick={handleSubmit} disabled={pending}>
          {submitButtonLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Dialog;
